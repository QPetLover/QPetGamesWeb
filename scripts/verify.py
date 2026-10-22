#!/usr/bin/env python3
"""Check source/build equality; optionally verify the actual HTTP delivery."""
import argparse
import hashlib
import json
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urljoin

parser = argparse.ArgumentParser()
parser.add_argument('--url', help='Optional HTTP origin, e.g. http://127.0.0.1:4178/')
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
dist = root / 'dist'
read_json = lambda path: json.loads(path.read_text())
sha = lambda data: hashlib.sha256(data).hexdigest()
checks = []

def verify_file(relative):
    data = (dist / relative).read_bytes()
    if args.url:
        with urlopen(urljoin(args.url.rstrip('/') + '/', relative), timeout=15) as response:
            assert response.read() == data, f'HTTP content differs: {relative}'
            if relative.endswith('.wasm'):
                assert response.headers.get_content_type() == 'application/wasm'
    return data

catalog = json.loads(verify_file('catalog.json'))
assert catalog
assert {entry['id'] for entry in catalog} == {p.name for p in (root / 'games').iterdir() if p.is_dir()}
lock = read_json(root / 'package-lock.json')['packages']['node_modules/@ruffle-rs/ruffle']
version = read_json(root / 'node_modules/@ruffle-rs/ruffle/package.json')['version']
assert version == lock['version'] == read_json(root / 'package.json')['dependencies']['@ruffle-rs/ruffle']
assert lock['resolved'] == f'https://registry.npmjs.org/@ruffle-rs/ruffle/-/ruffle-{version}.tgz'
assert lock['integrity'].startswith('sha512-')

for entry in catalog:
    source = root / 'games' / entry['id']
    manifest = read_json(source / 'manifest.json')
    assert json.loads(verify_file(entry['manifest'])) == manifest
    swf = verify_file(manifest['servedPath'])
    assert swf == (source / 'game.swf').read_bytes()
    assert sha(swf) == manifest['swfSha256'] and len(swf) == manifest['swfBytes']
    assert swf[:3] in (b'FWS', b'CWS', b'ZWS')
    assert manifest['ruffleVersion'] == version and manifest['gameplayCodeModified'] is False
    font = manifest.get('fontFallback')
    if font:
        data = verify_file(font['servedPath'])
        assert data == (root / 'assets' / font['servedPath']).read_bytes()
        assert sha(data) == font['sha256']
    checks.append({'game': entry['id'], 'swfSha256': sha(swf), 'sourceBuildAndHttpEqual': bool(args.url)})

runtime = root / 'node_modules/@ruffle-rs/ruffle'
for file in runtime.rglob('*'):
    if file.is_file():
        relative = 'vendor/ruffle/' + file.relative_to(runtime).as_posix()
        assert verify_file(relative) == file.read_bytes(), f'Runtime differs: {relative}'
for relative in ['index.html', 'player.js', 'player.css']:
    assert verify_file(relative) == (root / 'web' / relative).read_bytes()
assert verify_file('fonts/OFL.txt') == (root / 'assets/fonts/OFL.txt').read_bytes()
print(json.dumps({'result': 'passed', 'ruffleVersion': version, 'httpVerified': bool(args.url), 'checks': checks}, ensure_ascii=False, indent=2))
