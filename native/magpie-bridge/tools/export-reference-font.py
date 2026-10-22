"""Subset the original comparison-site fallback font for device text.

Requires fonttools[woff]. TTF input is FFDec's export of the comparison site's
myfont.swf, not an invented replacement for embedded glyph artwork.
"""
from pathlib import Path
import argparse,base64,hashlib,json
from fontTools import subset
from fontTools.ttLib import TTFont
p=argparse.ArgumentParser(description=__doc__)
p.add_argument('--ttf',type=Path,required=True)
p.add_argument('--output',type=Path,default=Path(__file__).resolve().parents[1]/'assets')
a=p.parse_args();a.output.mkdir(parents=True,exist_ok=True)
data=json.loads((a.output/'device-text.json').read_text())
text=''.join(v['text'] for v in data.values())+'你获得了0123456789分，要加油哦~历史QQ宠物兑换服务已停止。请重玩或返回。'
options=subset.Options();options.flavor='woff2'
font=TTFont(a.ttf,recalcTimestamp=False);sub=subset.Subsetter(options=options);sub.populate(text=text);sub.subset(font)
font.flavor='woff2';woff=a.output/'reference-font.woff2';font.save(woff)
encoded=base64.b64encode(woff.read_bytes()).decode()
code='''/* Device-text fallback from the original comparison site's font SWF.
 * Embedded SWF glyph outlines elsewhere remain unchanged. See font-provenance.json.
 */
let loaded;
export async function loadReferenceFont(){
 if(!loaded)loaded=(async()=>{const face=new FontFace('QPetReference','url(data:font/woff2;base64,'''+encoded+''')');await face.load();document.fonts.add(face);return face;})();
 return loaded;
}
'''
(a.output/'font.js').write_text(code)
woff.unlink()
(a.output/'font-provenance.json').write_text(json.dumps({'source':'QPetLover/qpet-adventure site/myfont.swf','sourceCommit':'cbd3a75ee7787d62911c8ee58125931961741752','sourceSWFSHA256':'3e932db5fd6e3f814978b32c82c85a1a305cb7c349b2ba9d5b3eabfe3e7e837c','fontName':'站酷快乐体2016修订版','TTFSHA256':hashlib.sha256(a.ttf.read_bytes()).hexdigest(),'subsetText':''.join(sorted(set(text))),'woff2SHA256':hashlib.sha256(base64.b64decode(encoded)).hexdigest(),'bytes':len(base64.b64decode(encoded))},ensure_ascii=False,indent=2)+'\n')
print('Embedded device-font subset',len(base64.b64decode(encoded)),'bytes')
