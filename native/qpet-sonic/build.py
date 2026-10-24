#!/usr/bin/env python3
"""Create a self-contained HTML and reviewable ZIP, with no build dependencies."""
from pathlib import Path
import argparse
import base64
import hashlib
import json
import mimetypes
import re
import zipfile

ROOT = Path(__file__).resolve().parent
parser = argparse.ArgumentParser()
parser.add_argument('--out', type=Path, default=ROOT / 'dist')
parser.add_argument('--web', action='store_true', help='Write index.html/app.js/style.css for the existing game site')
args = parser.parse_args()
out = args.out.resolve()
out.mkdir(parents=True, exist_ok=True)

def data_url(path):
    mime = 'audio/mpeg' if path.suffix == '.mp3' else mimetypes.guess_type(path.name)[0]
    return 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode()

modules = ['assets/levels.mjs', 'assets/font-metrics.mjs', 'assets/button-bounds.mjs',
           'assets/artwork.mjs', 'engine.mjs', 'renderer.mjs', 'audio.mjs', 'app.mjs']
sounds = {p.name: data_url(p) for p in sorted((ROOT / 'assets/sounds').glob('*.mp3'))}
notice = '/* FFDec-derived static Canvas helper: GPL-3.0. Readable source and notices:\nhttps://github.com/QPetLover/QPetGamesWeb/tree/main/native/qpet-sonic\nOriginal game artwork/audio/font rights remain with their respective authors.\n\n' + (ROOT / 'LICENSE-GPL-3.0.txt').read_text() + '\n*/'
chunks = [notice, 'const BUNDLED_SOUNDS=' + json.dumps(sounds, separators=(',', ':')) + ';']
for filename in modules:
    path = ROOT / filename
    code = path.read_text()
    code = re.sub(r'^import .*?;\s*', '', code, flags=re.M)
    code = re.sub(r'^export ', '', code, flags=re.M)
    code = code.replace("new URL('./assets/sounds/'+file,import.meta.url).href", 'BUNDLED_SOUNDS[file]')
    if filename == 'audio.mjs':
        code = code.replace("const response=await fetch(url);if(!response.ok)throw new Error('音频读取失败：'+file);", "const bytes=Uint8Array.from(atob(url.slice(url.indexOf(',')+1)),ch=>ch.charCodeAt(0)).buffer;")
        code = code.replace('await response.arrayBuffer()', 'bytes')
    code = re.sub(r'new URL\(([\'"])(.*?)\1,\s*import.meta.url\).href',
                  lambda m: json.dumps(data_url((path.parent / m.group(2)).resolve())), code)
    assert 'import.meta' not in code, filename
    assert not re.search(r'\beval\s*\(|new\s+Function\b|\bWebAssembly\b|\bimport\s*\(', code), filename
    chunks.append('// ---- ' + filename + ' ----\n' + code)
script = '\n'.join(chunks)
assert '</script' not in script.lower()
if args.web:
    html = (ROOT / 'index.html').read_text().replace('<script type="module" src="app.mjs"></script>', '<script type="module" src="app.js?v=' + hashlib.sha256(script.encode()).hexdigest()[:16] + '"></script>')
    css = (ROOT / 'style.css').read_bytes()
    html = html.replace('href="style.css"', 'href="style.css?v=' + hashlib.sha256(css).hexdigest()[:16] + '"')
    (out / 'index.html').write_text(html)
    (out / 'app.js').write_text(script)
    (out / 'style.css').write_bytes(css)
    print(json.dumps({'format':'web','files':['index.html','app.js','style.css']},ensure_ascii=False))
    raise SystemExit
html = (ROOT / 'index.html').read_text()
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>' + (ROOT / 'style.css').read_text() + '</style>')
html = html.replace('<script type="module" src="app.mjs"></script>', '<script type="module">\n' + script + '\n</script>')
assert not re.search(r'<script[^>]+src=|<link[^>]+rel="stylesheet"', html)
target = out / 'Q宠爱音速.html'
target.write_text(html)
files = [ROOT / f for f in ['index.html','style.css','engine.mjs','renderer.mjs','audio.mjs','app.mjs','build.py']]
files += sorted(p for p in (ROOT / 'assets').rglob('*') if p.is_file())
archive = out / 'Q宠爱音速.zip'
with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as z:
    z.writestr('index.html', html)
    for name in ['README.md','LICENSE-GPL-3.0.txt','provenance.json']:
        z.write(ROOT / name, name)
    for path in files:
        z.write(path, 'source/' + path.relative_to(ROOT).as_posix())
    for name in ['README.md','LICENSE-GPL-3.0.txt','provenance.json']:
        z.write(ROOT / name, 'source/' + name)
    assert z.testzip() is None
manifest = {'standalone': {'file': target.name, 'bytes': target.stat().st_size, 'sha256': hashlib.sha256(target.read_bytes()).hexdigest()},
            'zip': {'file': archive.name, 'bytes': archive.stat().st_size, 'sha256': hashlib.sha256(archive.read_bytes()).hexdigest()},
            'source_files': len(files) + 3, 'runtime': 'native HTML/Canvas/JavaScript, all media embedded in standalone HTML'}
(out / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2))
print(json.dumps(manifest, ensure_ascii=False, indent=2))
