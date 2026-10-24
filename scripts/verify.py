#!/usr/bin/env python3
"""Verify the native games and optional HTTP bytes."""
import argparse, gzip, hashlib, json, re
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from urllib.parse import urljoin
from html.parser import HTMLParser

class HomeLinks(HTMLParser):
    """Read the generated list as HTML, including entity-decoded link values."""
    def __init__(self):
        super().__init__(); self.sections=0; self.inside=False; self.rows=[]; self.row=None; self.anchor=None; self.links=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='section' and 'game-list' in attrs.get('class','').split():
            assert not self.inside,'Nested game-list'; self.sections+=1; self.inside=True
        elif tag=='div' and self.inside:
            assert self.row is None,'Nested game row'
            self.row={'id':attrs.get('data-game'),'links':[]}; self.rows.append(self.row)
        if tag=='a':
            self.links.append(attrs)
            if self.inside:
                assert self.row is not None,'Game link outside a row'
                self.anchor={'attrs':attrs,'text':[]}; self.row['links'].append(self.anchor)
    def handle_data(self,data):
        if self.anchor is not None:self.anchor['text'].append(data)
    def handle_endtag(self,tag):
        if tag=='a':self.anchor=None
        elif tag=='div' and self.inside:self.row=None
        elif tag=='section' and self.inside:self.inside=False

def verify_home_links(html,catalog):
    published=[game for game in catalog if game['published']]
    home=[game for game in published if game['path']=='']
    assert len(home)==1,'One published home game'
    parsed=HomeLinks(); parsed.feed(html); parsed.close()
    assert parsed.sections==1,'One generated home game-list'
    assert [row['id'] for row in parsed.rows]==[game['id'] for game in published],'Home list must contain only published games in catalog order'
    assert '<!-- published-game-links -->' not in html,'Unresolved home game-list placeholder'
    for row,game in zip(parsed.rows,published):
        assert len(row['links'])==2,f"{game['id']}: native and original links must be adjacent in one row"
        native,original=row['links']; native_attrs=native['attrs']; original_attrs=original['attrs']
        expected_href=(game['path']+'/') if game['path'] else './'
        assert native_attrs.get('href')==expected_href,f"{game['id']}: incorrect native entry"
        assert ''.join(native['text'])==game['title'],f"{game['id']}: incorrect title"
        assert native_attrs.get('aria-current')==('page' if game['id']==home[0]['id'] else None),f"{game['id']}: incorrect current-page label"
        assert original_attrs.get('href')==game['original'],f"{game['id']}: incorrect original comparison"
        assert original_attrs.get('target')=='_blank' and {'noopener','noreferrer'}<=set(original_attrs.get('rel','').split()),f"{game['id']}: original-link isolation"
    for game in catalog:
        if not game['published']:
            draft_href=(game['path']+'/') if game['path'] else './'
            assert all(link.get('href') not in [draft_href,game['original']] for link in parsed.links),f"{game['id']}: draft linked from public home"
    return [game['id'] for game in published]

parser=argparse.ArgumentParser()
parser.add_argument('--url')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]; dist=root/'dist'
catalog=json.loads((root/'native/games.json').read_text())
games=[game for game in catalog if game['published']]
expected={'player.html','maintenance.css','.nojekyll'}
media={'.png','.jpg','.jpeg','.gif','.webp','.svg','.woff','.woff2'}
for game in games:
    folder=(game['path']+'/') if game['path'] else ''
    expected.update(folder+name for name in ['index.html','app.js','style.css'])
    source=root/'native'/game['id']/'assets'
    expected.update(folder+path.relative_to(root/'native'/game['id']).as_posix() for path in source.rglob('*') if path.is_file() and path.suffix in media)
actual={p.relative_to(dist).as_posix() for p in dist.rglob('*') if p.is_file()}
assert actual==expected, f'Unexpected release files: {actual ^ expected}'
for game in games:
    folder=(game['path']+'/') if game['path'] else ''
    js=(dist/(folder+'app.js')).read_text(); html=(dist/(folder+'index.html')).read_text()
    for pattern in [r'\beval\s*\(',r'\bnew\s+Function\s*\(',r'\bWebAssembly\b',r'\bfetch\s*\(',r'\bXMLHttpRequest\b',r'\bWebSocket\b',r'\bimport\s*\(']:
        assert not re.search(pattern,js),f'{folder}: Forbidden runtime feature: {pattern}'
    # Reject SWF references directly. A quote followed by .*? rescans the
    # entire remainder at every string literal in these large static bundles.
    assert not re.search(r"ruffle|\.swf\b|node:vm|node:test",js,re.I)
    assert '<canvas' in html and 'app.js' in html
    assert not re.search(r'<(?:iframe|object|embed)\b|\bon\w+\s*=',html,re.I)
assert '游戏已下架' in (dist/'player.html').read_text()
home_links=verify_home_links((dist/'index.html').read_text(),catalog)
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
print(json.dumps({'result':'passed','releaseMode':'native-javascript','games':[game['id'] for game in games],
                  'homeLinksVerified':home_links,'noSWFRuntime':True,'httpVerified':bool(args.url),'files':checks,'retired404':retired},ensure_ascii=False,indent=2))
