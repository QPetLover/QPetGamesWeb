#!/usr/bin/env python3
"""Verify the deliberately non-playable holding-page release and optional HTTP delivery."""
import argparse
import json
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urljoin

parser = argparse.ArgumentParser()
parser.add_argument('--url', help='Optional HTTP origin or repository subpath')
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
dist = root / 'dist'
expected = {'index.html', 'player.html', 'maintenance.css', '.nojekyll'}
actual = {p.relative_to(dist).as_posix() for p in dist.rglob('*') if p.is_file()}
assert actual == expected, f'Unexpected release files: {actual ^ expected}'
assert not any(p.is_dir() for p in dist.iterdir()), 'Game/runtime directories must not be published'
assert not any(s in str(p).lower() for p in actual for s in ('.swf', '.wasm', 'ruffle', 'catalog'))
checks = []
for name in sorted(expected):
    data = (dist / name).read_bytes()
    if name != '.nojekyll':
        assert data == (root / 'web' / name).read_bytes(), f'Stale build: {name}'
        assert b'<script' not in data.lower() and b'ruffle' not in data.lower()
        if args.url:
            with urlopen(urljoin(args.url.rstrip('/') + '/', name), timeout=15) as response:
                assert response.read() == data, f'HTTP content differs: {name}'
    checks.append(name)
assert 'Q宠速配正在重新制作' in (dist / 'index.html').read_text()
assert '游戏已下架' in (dist / 'player.html').read_text()
print(json.dumps({'result': 'passed', 'releaseMode': 'holding-page', 'playableGames': 0,
                  'noGameOrRuntimeAssets': True, 'httpVerified': bool(args.url),
                  'files': checks}, ensure_ascii=False, indent=2))
