#!/usr/bin/env python3
"""Verify the native games and optional HTTP bytes."""
import argparse, gzip, hashlib, json, re
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from urllib.parse import urljoin
parser=argparse.ArgumentParser()
parser.add_argument('--url')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]; dist=root/'dist'
expected={'index.html','app.js','style.css','player.html','maintenance.css','.nojekyll',
          'magpie-bridge/index.html','magpie-bridge/app.js','magpie-bridge/style.css',
          'qpet-racing/index.html','qpet-racing/app.js','qpet-racing/style.css'}
actual={p.relative_to(dist).as_posix() for p in dist.rglob('*') if p.is_file()}
assert actual==expected, f'Unexpected release files: {actual ^ expected}'
for folder in ['', 'magpie-bridge/', 'qpet-racing/']:
    js=(dist/(folder+'app.js')).read_text(); html=(dist/(folder+'index.html')).read_text()
    for pattern in [r'\beval\s*\(',r'\bnew\s+Function\s*\(',r'\bWebAssembly\b',r'\bfetch\s*\(',r'\bXMLHttpRequest\b',r'\bWebSocket\b',r'\bimport\s*\(']:
        assert not re.search(pattern,js),f'{folder}: Forbidden runtime feature: {pattern}'
    assert not re.search(r"ruffle|[\"'].*?\.swf[\"']|node:vm|node:test",js,re.I)
    assert '<canvas' in html and 'app.js' in html
    assert not re.search(r'<(?:iframe|object|embed)\b|\bon\w+\s*=',html,re.I)
assert '游戏已下架' in (dist/'player.html').read_text()
checks=[]
for name in sorted(expected):
    data=(dist/name).read_bytes()
    if args.url and name!='.nojekyll':
        request=Request(urljoin(args.url.rstrip('/')+'/',name),headers={'Accept-Encoding':'gzip'})
        with urlopen(request,timeout=20) as response:
            remote=response.read()
            if response.headers.get('Content-Encoding')=='gzip':remote=gzip.decompress(remote)
            assert remote==data,f'HTTP mismatch: {name}'
    checks.append({'file':name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
retired=[]
if args.url:
    for name in ['catalog.json','player.js','vendor/ruffle/ruffle.js','games/qpet-match/game.swf','games/classic-002/game.swf','fonts/original-site-font.swf']:
        try:
            with urlopen(urljoin(args.url.rstrip('/')+'/',name),timeout=20) as response:
                raise AssertionError(f'Retired resource still published: {name}')
        except HTTPError as error:
            assert error.code==404,f'{name}: expected404, got{error.code}'
        retired.append(name)
print(json.dumps({'result':'passed','releaseMode':'native-javascript','games':['qpet-match','magpie-bridge','qpet-racing'],
                  'noSWFRuntime':True,'httpVerified':bool(args.url),'files':checks,'retired404':retired},ensure_ascii=False,indent=2))
