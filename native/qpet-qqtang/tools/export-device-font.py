#!/usr/bin/env python3
"""Export a tiny static path subset of the verified Ruffle 0.5 fallback font.

The game has empty device-font tags. These are fallback artwork, not original
Arial Black glyphs and not a Ruffle runtime. Requires fontTools only at export.
"""
from pathlib import Path
import argparse, hashlib, json, zlib
from fontTools.ttLib import TTFont
from fontTools.pens.basePen import BasePen
from io import BytesIO

p=argparse.ArgumentParser();p.add_argument('reference');p.add_argument('output');args=p.parse_args()
ref=Path(args.reference);out=Path(args.output)
raw=zlib.decompress((ref/'notosans.subset.ttf.gz').read_bytes(),-15)
font=TTFont(BytesIO(raw));glyphs=font.getGlyphSet();cmap=font.getBestCmap()
class Pen(BasePen):
 def __init__(self):super().__init__(glyphs);self.commands=[]
 def _moveTo(self,p):self.commands.append(['m',p[0],-p[1]])
 def _lineTo(self,p):self.commands.append(['l',p[0],-p[1]])
 def _curveToOne(self,a,b,c):self.commands.append(['c',a[0],-a[1],b[0],-b[1],c[0],-c[1]])
 def _qCurveToOne(self,a,b):self.commands.append(['q',a[0],-a[1],b[0],-b[1]])
 def _closePath(self):self.commands.append(['z'])
 def _endPath(self):pass
data={}
for char in '0123456789:QGM-.':
 name=cmap[ord(char)];pen=Pen();glyphs[name].draw(pen)
 # Ruffle0.5 GlyphToDrawing converts ttf-parser f32 points toward-zero to i32.
 pen.commands=[[cmd[0],*[int(value) for value in cmd[1:]]] for cmd in pen.commands]
 data[char]={'advance':font['hmtx'][name][0],'commands':pen.commands}
license=(ref/'Noto-OFL.txt').read_text()
meta={'source':'https://github.com/ruffle-rs/ruffle/blob/v0.5.0/core/assets/notosans.subset.ttf.gz','ttfSHA256':hashlib.sha256(raw).hexdigest(),'compressedSHA256':hashlib.sha256((ref/'notosans.subset.ttf.gz').read_bytes()).hexdigest(),'originalDeviceFonts':{'538':'Arial Black','596':'Arial Black','640':'Times New Roman'},'fallback':'Noto Sans, Ruffle v0.5.0','unitsPerEm':font['head'].unitsPerEm,'ascent':font['hhea'].ascent,'descent':-font['hhea'].descent,'leading':font['hhea'].lineGap,'characters':list(data),'license':'SIL Open Font License 1.1','note':'Matches the verified emulator fallback, not proof of historical Flash system-font typography. Unsupported Chinese names retain the native browser fallback; that path is not calibrated against Ruffle.'}
out.mkdir(parents=True,exist_ok=True)
(out/'device-font.js').write_text('/*! Static Noto Sans path subset. '+license.replace('*/','* /')+' */\nexport const deviceFontMetrics='+json.dumps({k:meta[k] for k in ['unitsPerEm','ascent','descent','leading']})+';\nexport const deviceGlyphs='+json.dumps(data,separators=(',',':'))+';\n')
(out/'device-font-provenance.json').write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'glyphs':len(data),'bytes':(out/'device-font.js').stat().st_size,'ttfSHA256':meta['ttfSHA256']}))
