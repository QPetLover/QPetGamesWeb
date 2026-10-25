#!/usr/bin/env python3
"""Verify the native games and optional HTTP bytes."""
import argparse, gzip, hashlib, json, re, subprocess
from pathlib import Path, PurePosixPath
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from urllib.parse import urljoin
from html.parser import HTMLParser

CATEGORIES=('happy-valley','adventure','classic')

class HomeLinks(HTMLParser):
    """Read static portal sections, cards and their two adjacent actions."""
    def __init__(self):
        super().__init__(); self.category=None; self.categories=[]; self.rows=[]; self.row=None; self.anchor=None; self.field=None; self.links=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='section' and 'data-category' in attrs:
            assert self.category is None,'Nested game section'
            self.category=attrs['data-category']; self.categories.append(self.category)
            assert attrs.get('id')==self.category,'Section anchor differs from category'
        if tag=='article' and 'data-game' in attrs:
            assert self.category is not None and self.row is None,'Game outside a category or nested card'
            self.row={'id':attrs['data-game'],'category':self.category,'links':[],'images':[],'title':[],'summary':[],'note':[],'badge':[]}; self.rows.append(self.row)
        if tag=='img' and self.row is not None:self.row['images'].append(attrs)
        if tag=='a':
            self.links.append(attrs)
            if self.row is not None:
                self.anchor={'attrs':attrs,'text':[]}; self.row['links'].append(self.anchor)
        if self.row is not None:
            if tag=='h3':self.field='title'
            if tag=='span' and 'badge' in attrs.get('class','').split():self.field='badge'
            if tag=='p' and 'game-summary' in attrs.get('class','').split():self.field='summary'
            if tag=='p' and 'source-note' in attrs.get('class','').split():self.field='note'
    def handle_data(self,data):
        if self.anchor is not None:self.anchor['text'].append(data)
        if self.row is not None and self.field is not None:self.row[self.field].append(data)
    def handle_endtag(self,tag):
        if tag=='a':self.anchor=None
        elif tag in ('h3','p') or (tag=='span' and self.field=='badge'):self.field=None
        elif tag=='article':self.row=None
        elif tag=='section':self.category=None

def verify_home_links(html,catalog,cover_sizes=None):
    published=[game for game in catalog if game['published']]
    assert len({game['path'] for game in published})==len(published),'Unique published paths'
    for game in published:
        assert re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',game['path']),'Every game must have its own safe path'
        assert game.get('category') in CATEGORIES,'Unknown game category'
    parsed=HomeLinks(); parsed.feed(html); parsed.close()
    categories=[category for category in CATEGORIES if any(game['category']==category for game in published)]
    ordered=[game for category in categories for game in published if game['category']==category]
    assert parsed.categories==categories,'Portal categories must match published groups'
    assert [row['id'] for row in parsed.rows]==[game['id'] for game in ordered],'Portal must contain only published games in category and catalog order'
    assert '<!-- game-sections -->' not in html,'Unresolved portal placeholder'
    for row,game in zip(parsed.rows,ordered):
        assert row['category']==game['category'],f"{game['id']}: incorrect section"
        assert ''.join(row['title'])==game['title'],f"{game['id']}: incorrect title"
        assert not row['summary'],f"{game['id']}: summaries belong outside home cards"
        assert not row['note'],f"{game['id']}: development notes must stay outside player cards"
        assert not row['badge'],f"{game['id']}: home cards must not show version badges"
        if game.get('cover'):
            assert len(row['images'])==1,f"{game['id']}: one original opening cover required"
            cover=row['images'][0]
            assert cover.get('src')==game['cover'],f"{game['id']}: incorrect cover"
            assert cover.get('alt')==game['title']+'游戏画面',f"{game['id']}: incorrect cover label"
            assert cover.get('loading')=='lazy' and int(cover.get('width',0))>0 and int(cover.get('height',0))>0,f"{game['id']}: cover dimensions and loading required"
            if cover_sizes is not None:assert (int(cover['width']),int(cover['height']))==cover_sizes[game['cover']],f"{game['id']}: cover aspect ratio differs from original"
        else:assert not row['images'],f"{game['id']}: unexpected cover"
        detail_links=[link for link in row['links'] if link['attrs'].get('href')=='games/'+game['id']+'/']
        assert len(detail_links)==1,f"{game['id']}: one details entry required"
        native_links=[link for link in row['links'] if link not in detail_links]
        assert len(native_links)==2+bool(game.get('cover')),f"{game['id']}: title, play and optional cover must open the remake"
        assert all(link['attrs'].get('href')==game['path']+'/' and not link['attrs'].get('target') for link in native_links),f"{game['id']}: ordinary entry must open the remake"
        play=[link for link in native_links if 'play-link' in link['attrs'].get('class','').split()]
        assert len(play)==1 and play[0]['attrs'].get('aria-label')=='开始游戏：'+game['title'],f"{game['id']}: incorrect accessible entry label"
        assert not any('comparison-link' in link['attrs'].get('class','').split() for link in row['links']),f"{game['id']}: comparison belongs on its details page"
    for game in catalog:
        if not game['published']:
            assert all(link.get('href') not in [game['path']+'/',game['original']] for link in parsed.links),f"{game['id']}: draft linked from public portal"
    assert not re.search(r'<(?:script|canvas|iframe|object|embed)\b|\bon\w+\s*=',html,re.I),'Portal must remain static HTML'
    return [game['id'] for game in ordered]

ORIGINAL_IDS={'qpet-taekwondo':'classic-007','qpet-clouds':'classic-012','qpet-hunting':'classic-011','qpet-guardian':'classic-001','magpie-bridge':'classic-002','qpet-racing':'classic-003',
              'qpet-differences':'classic-005','qpet-fishing':'classic-008','qpet-trays':'classic-006','qpet-blocks':'classic-010','qpet-nanny':'classic-009','qpet-penguin-challenge':'classic-004','qpet-full-stars':'classic-016','qpet-mining':'classic-013',
              'qpet-match':'classic-014','qpet-stars':'classic-015','qpet-forest':'happy-forest',
              'qpet-qqtang':'happy-qqtang','qpet-dungeon':'happy-dungeon'}

class DetailLinks(HTMLParser):
    def __init__(self):super().__init__();self.links=[];self.heading=[];self.in_heading=False;self.images=[];self.styles=[]
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='a':self.links.append(attrs)
        if tag=='h1':self.in_heading=True
        if tag=='img':self.images.append(attrs)
        if tag=='link' and attrs.get('rel')=='stylesheet':self.styles.append(attrs.get('href',''))
    def handle_endtag(self,tag):
        if tag=='h1':self.in_heading=False
    def handle_data(self,data):
        if self.in_heading:self.heading.append(data)

def verify_details(html,game):
    parsed=DetailLinks();parsed.feed(html);parsed.close()
    assert ''.join(parsed.heading)==game['title'],f"{game['id']}: details title differs"
    assert sum(link.get('href')=='../../'+game['path']+'/' for link in parsed.links)==1,f"{game['id']}: details must launch native game"
    assert any(link.get('href')=='../../' for link in parsed.links),f"{game['id']}: details return to same-site hall"
    assert len(parsed.styles)==1 and parsed.styles[0].split('?')[0]=='../../portal.css',f"{game['id']}: local shared details stylesheet"
    comparisons=[link for link in parsed.links if 'comparison-link' in link.get('class','').split()]
    if game['id'] in ORIGINAL_IDS:expected='../../originals/#/play/'+ORIGINAL_IDS[game['id']]
    elif game['id']=='qpet-adventure':expected=game['original']
    else:expected=None
    assert len(comparisons)==int(expected is not None),f"{game['id']}: no invented original or extra external link"
    if expected:
        assert comparisons[0].get('href')==expected,f"{game['id']}: incorrect original comparison"
        if comparisons[0].get('target'):
            assert comparisons[0].get('target')=='_blank' and {'noopener','noreferrer'}<=set(comparisons[0].get('rel','').split()),f"{game['id']}: original-link isolation"
    allowed=['../../','../../#'+game['category'],'../../'+game['path']+'/']+([expected] if expected else [])
    assert all(link.get('href') in allowed for link in parsed.links),f"{game['id']}: unexpected details destination"
    if game.get('cover'):assert len(parsed.images)==1 and parsed.images[0].get('src')=='../../'+game['cover'],f"{game['id']}: details cover differs"
    assert not re.search(r'<(?:script|canvas|iframe|object|embed)\b|\bon\w+\s*=',html,re.I),'Details must remain static HTML'
    return game['id']

def chapter_expected(root,folder):
    """Use only the fixed portable manifest; JS verifier checks its closed schema."""
    manifest=json.loads((folder/'build-manifest.json').read_text())
    assert manifest.get('mode')=='web' and manifest.get('entries'),'A published chapter game needs a Web build'
    names={'build-manifest.json','verification.json'}
    def add(name):
        path=PurePosixPath(name)
        assert not path.is_absolute() and '..' not in path.parts and str(path)==name and '\\' not in name,'Unsafe chapter output path'
        assert name not in names,'Duplicate chapter output path'
        names.add(name)
    for entry in manifest['entries']:
        assert re.fullmatch(r'chapter[0-8]-v[01]',entry['id']),'Unknown chapter entry'
        for file in entry['files']:add(entry['id']+'/'+file['path'])
        assert not entry.get('zip'),'Web manifest must not include ZIP archives'
    for shared in manifest.get('shared',[]):add(shared['path'])
    subprocess.run(['node',str(root/'scripts/verify-adventure.mjs'),str(folder)],check=True,stdout=subprocess.PIPE,text=True)
    return names

parser=argparse.ArgumentParser()
parser.add_argument('--url')
parser.add_argument('--dist',type=Path,help='Verify an assembled preview instead of the default dist directory')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]; dist=args.dist.resolve() if args.dist else root/'dist'
catalog=json.loads((root/'native/games.json').read_text())
games=[game for game in catalog if game['published']]
expected={'index.html','portal.css','player.html','maintenance.css','.nojekyll'}
for name in ['fonts/qpet-rounded.woff2','fonts/OFL-ZCOOL-KuaiLe.txt','fonts/source.json']:
    assert (dist/name).read_bytes()==(root/'web'/name).read_bytes(),'Shared portal font differs: '+name
    expected.add(name)
assert (dist/'fonts/qpet-rounded.woff2').read_bytes()[:4]==b'wOF2','Invalid portal WOFF2'
cover_sizes={}
for game in games:
    expected.add('games/'+game['id']+'/index.html')
    if not game.get('cover'):continue
    assert re.fullmatch(r'covers/[a-z0-9]+(?:-[a-z0-9]+)*\.png',game['cover']),'Unsafe cover path'
    source=root/'web'/game['cover']; output=dist/game['cover']; data=source.read_bytes()
    assert len(data)>=24 and data[:8]==b'\x89PNG\r\n\x1a\n','Cover must be PNG'
    assert output.read_bytes()==data,'Cover must retain exact source pixels: '+game['id']
    cover_sizes[game['cover']]=(int.from_bytes(data[16:20],'big'),int.from_bytes(data[20:24],'big'))
    expected.add(game['cover'])
media={'.png','.jpg','.jpeg','.gif','.webp','.svg','.woff','.woff2'}
for game in games:
    folder=game['path']+'/'
    if game.get('kind')=='chapters':
        assert game['id']=='qpet-adventure' and game['path'],'Unsupported chapter package'
        expected.update(folder+name for name in chapter_expected(root,dist/game['path']))
        continue
    assert 'kind' not in game,'Unknown published game kind'
    expected.update(folder+name for name in ['index.html','app.js','style.css'])
    source=root/'native'/game['id']/'assets'
    if game.get('builder')!='embedded-python':
        expected.update(folder+path.relative_to(root/'native'/game['id']).as_posix() for path in source.rglob('*') if path.is_file() and path.suffix in media)
originals=json.loads(subprocess.run(['node',str(root/'scripts/build-originals.mjs'),'--verify='+str(dist/'originals')],check=True,stdout=subprocess.PIPE,text=True).stdout)
expected.update('originals/'+item['file'] for item in originals['files'])
actual={p.relative_to(dist).as_posix() for p in dist.rglob('*') if p.is_file()}
assert actual==expected, f'Unexpected release files: {actual ^ expected}'
for game in games:
    if game.get('kind')=='chapters':continue  # verified above, including only fixed Web PCM requests
    folder=game['path']+'/'
    js=(dist/(folder+'app.js')).read_text(); html=(dist/(folder+'index.html')).read_text()
    for pattern in [r'\beval\s*\(',r'\bnew\s+Function\s*\(',r'\bWebAssembly\b',r'\bfetch\s*\(',r'\bXMLHttpRequest\b',r'\bWebSocket\b',r'\bimport\s*\(']:
        assert not re.search(pattern,js),f'{folder}: Forbidden runtime feature: {pattern}'
    # Reject SWF references directly. A quote followed by .*? rescans the
    # entire remainder at every string literal in these large static bundles.
    assert not re.search(r"ruffle|\.swf\b|node:vm|node:test",js,re.I)
    assert '<canvas' in html and 'app.js' in html
    assert not re.search(r'<(?:iframe|object|embed)\b|\bon\w+\s*=',html,re.I)
assert '游戏已下架' in (dist/'player.html').read_text()
home_links=verify_home_links((dist/'index.html').read_text(),catalog,cover_sizes)
details=[verify_details((dist/'games'/game['id']/'index.html').read_text(),game) for game in games]
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
    for name in ['app.js','style.css','catalog.json','player.js','vendor/ruffle/ruffle.js','games/qpet-match/game.swf','games/classic-002/game.swf','fonts/original-site-font.swf']:
        try:
            with urlopen(urljoin(args.url.rstrip('/')+'/',name),timeout=20) as response:
                raise AssertionError(f'Retired resource still published: {name}')
        except HTTPError as error:
            assert error.code==404,f'{name}: expected404, got{error.code}'
        retired.append(name)
print(json.dumps({'result':'passed','releaseMode':'native-games-with-independent-original-comparison','games':[game['id'] for game in games],
                  'homeLinksVerified':home_links,'detailsVerified':details,
                  'native':{'noSWFRuntime':True,'games':[game['id'] for game in games]},
                  'originals':originals,'httpVerified':bool(args.url),'files':checks,'retired404':retired},ensure_ascii=False,indent=2))
