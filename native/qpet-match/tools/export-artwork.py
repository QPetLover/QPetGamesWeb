"""Convert FFDec build-time Canvas geometry into static, CSP-safe JS artwork.

Accepts explicit FFDec exports; running in the original workspace finds the
documented reference inputs automatically. No SWF/ActionScript is executed.
"""
from pathlib import Path
import argparse,re,json,hashlib,base64,xml.etree.ElementTree as E
base=next((p for p in Path(__file__).resolve().parents if (p/'projects/10-22-qpet-swf-web/playground/match.xml').exists()),Path.cwd())
ref=base/'projects/10-22-qpet-games-collection/native-match/reference'
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--root-canvas',type=Path,default=ref/'canvas-export/frames.html')
parser.add_argument('--helper',type=Path,default=ref/'canvas-export/canvas.js')
parser.add_argument('--pipe-canvas',type=Path,default=ref/'pipe-canvas/DefineSprite_54_pipe_mc/frames.html')
parser.add_argument('--xml',type=Path,default=base/'projects/10-22-qpet-swf-web/playground/match.xml')
parser.add_argument('--output',type=Path,default=base/'core/QPetGamesWeb/native/qpet-match/assets')
args=parser.parse_args();out=args.output;out.mkdir(parents=True,exist_ok=True)
html=args.root_canvas.read_text()
art=html[html.index('var scalingGrids'):html.index('var frame = -1')]
pipe=args.pipe_canvas.read_text()
pipe=pipe[pipe.index('function shape3'):pipe.index('var frame = -1')]
known=set(re.findall(r'^function (\w+)\(',art,re.M))
parts=re.split(r'(?=^function \w+\()',pipe,flags=re.M)
for part in parts:
 m=re.match(r'function (\w+)\(',part)
 if m and m[1] not in known:
  if m[1]=='sprite54':part=part.replace('ctx.transform(1,0,0,1,48.1,47.65);','// The export-only crop translation is removed; authored pipe origin is its centre.')
  art+='\n'+part
  known.add(m[1])
helper=args.helper.read_text().replace('Filters = {};','var Filters = {};',1)
helper=re.sub(r"window.addEventListener\('load'.*?(?=function drawMorphPath)",'',helper,flags=re.S)
helper=helper.replace('    document.body.appendChild(c);\n    document.body.removeChild(c);','')
# SWF CXFORM multipliers are fixed-point 8.8 values (identity=256), not 255.
helper=helper.replace(' / 255 + this.', ' / 256 + this.')
helper=helper.replace('this.a_add / 255','this.a_add / 255')
helper=helper.replace('this.r_add + cx.r_add, this.g_add + cx.g_add, this.b_add + cx.b_add, this.a_add + cx.a_add, this.r_mult * cx.r_mult / 255, this.g_mult * cx.g_mult / 255, this.b_mult * cx.b_mult / 255, this.a_mult * cx.a_mult / 255',
 'this.r_add + cx.r_add * this.r_mult / 256, this.g_add + cx.g_add * this.g_mult / 256, this.b_add + cx.b_add * this.b_mult / 256, this.a_add + cx.a_add * this.a_mult / 256, this.r_mult * cx.r_mult / 256, this.g_mult * cx.g_mult / 256, this.b_mult * cx.b_mult / 256, this.a_mult * cx.a_mult / 256')
helper=helper.replace('this.r_mult == 255 && this.g_mult == 255 && this.b_mult == 255 && this.a_mult == 255','this.r_mult == 256 && this.g_mult == 256 && this.b_mult == 256 && this.a_mult == 256')
start=helper.index('var placeRaw = function')
end=helper.index('var transformPoint',start)
helper=helper[:start]+'''var placeRaw = function (obj, canvas, ctx, matrix, ctrans, blendMode, frame, ratio, time) {
    const parent = symbolStack[symbolStack.length - 1];
    const override = hooks.place?.({obj,parent,matrix,frame,ratio,time,ctx}) || {};
    if (override.skip) return;
    if (override.frame !== undefined) frame = override.frame;
    if (override.matrix) matrix = override.matrix;
    ctx.save();
    ctx.transform(...matrix);
    if (blendMode > 1) {
        var oldctx = ctx;
        var ncanvas = createCanvas(canvas.width, canvas.height);
        ctx = ncanvas.getContext("2d");
        enhanceContext(ctx);
        ctx.applyTransforms(oldctx._matrix);
    }
    const color = blendMode > 1 ? new cxform(0,0,0,0,256,256,256,256) : ctrans;
    symbolStack.push(obj);
    if (override.draw) override.draw(ctx, color, frame, ratio, time);
    else symbols[obj](ctx,color,frame,ratio,time);
    symbolStack.pop();
    if (blendMode > 1) {
        BlendModes.blendCanvas(ctrans.applyToImage(ncanvas), canvas, canvas, blendMode);
        ctx = oldctx;
    }
    ctx.restore();
};

'''+helper[end:]
# FFDec's radial-gradient Canvas export pre-fills a shape with a gradient stop
# before clipping/filling the actual gradient. This breaks transparent gradients
# (notably shape125, whose centre alpha is zero). A clip does not need a pre-fill.
radial_prefill = re.compile(r'(drawPath\(ctx,pathData,false\);)\n\s*ctx\.fillStyle=tocolor\([^\n]+\);\n\s*ctx\.fill\("evenodd"\);\n(\s*ctx\.save\(\);\n\s*ctx\.clip\(\);\n\s*ctx\.transform\([^\n]+\);\n\s*var grd=ctx\.createRadialGradient)')
art, radial_fixes=radial_prefill.subn(r'\1\n\2',art)
# SWF gradient spread PAD continues the final stop outside the radial circle.
# FFDec paints only the +/-16384 gradient square, leaving the clipped shape's
# remaining area untouched (shape125 originally left a seam at stage y=358).
# Invert the gradient matrix over the path/control-point hull to cover exactly
# the clip's conservative bounds. Avoid enormous fill rectangles on mobile.
radial_bounds=re.compile(r'var pathData="([^"\n]+)";(?:(?!var pathData).)*?ctx\.transform\(([^)]+)\);(?:(?!var pathData).)*?ctx\.createRadialGradient(?:(?!var pathData).)*?ctx\.fillRect\(-16384,-16384,32768,32768\);',re.S)
def expand_radial(m):
 vals=list(map(float,re.findall(r'[-+]?(?:\d*\.)?\d+(?:[Ee][-+]?\d+)?',m[1])))
 xs,ys=vals[::2],vals[1::2]
 a,b,c,d,e,f=map(float,m[2].split(',')); det=a*d-b*c
 points=[((d*(x-e)-c*(y-f))/det,(-b*(x-e)+a*(y-f))/det) for x in [min(xs),max(xs)] for y in [min(ys),max(ys)]]
 left=min(p[0] for p in points)-1;top=min(p[1] for p in points)-1
 width=max(p[0] for p in points)-left+1;height=max(p[1] for p in points)-top+1
 return m[0].replace('ctx.fillRect(-16384,-16384,32768,32768);','ctx.fillRect('+','.join(format(v,'.12g') for v in [left,top,width,height])+');')
art, radial_bounds_fixes=radial_bounds.subn(expand_radial,art)
# The original HTML edit fields 147–149 explicitly contain <sbr/> between
# 出品 and the URL. FFDec flattens that soft break. Preserve the embedded glyph
# outlines and advances, starting the URL at x=0 on the next 500-twip line.
for cid in ('147','148','149'):
 pattern=re.compile(r'(function text'+cid+r'\([^\n]+\)\{)(.*?)(\n\})',re.S)
 def footer(match):
  body=match[2]
  def glyph(m):
   x=float(m[1]); y=float(m[2])
   if x>=3381: x-=3381; y+=500
   return 'ctx.transform(0.48828125,0.0,0.0,0.48828125,'+str(x)+','+str(y)+');'
  body=re.sub(r'ctx\.transform\(0\.48828125,0\.0,0\.0,0\.48828125,([-\d.]+),([-\d.]+)\);',glyph,body)
  return match[1]+body+match[3]
 art,n=pattern.subn(footer,art,count=1)
 assert n==1
# These two authored device-text fields have no embedded glyph outlines. Text is
# laid out with the exact original-reference-site font, extracted separately.
r=E.parse(args.xml).getroot()
# Canvas button export contains only stateUp. Reconstruct all four authored
# states from BUTTONRECORDs without interpreting any ActionScript at runtime.
tags=list(r.find('tags'))
by_id={e.get('shapeId',e.get('spriteId',e.get('buttonId',e.get('characterID','')))):e for e in tags}
def symbol(cid):
 e=by_id[cid]; t=e.get('type')
 return ('shape' if 'Shape' in t else 'sprite' if t=='DefineSpriteTag' else 'button' if t=='DefineButton2Tag' else 'text')+cid
for e in tags:
 if e.get('type')!='DefineButton2Tag':continue
 cid=e.get('buttonId'); states=[]
 for index,flag in enumerate(['buttonStateUp','buttonStateOver','buttonStateDown','buttonStateHitTest']):
  commands=[]
  for record in sorted(e.find('characters'),key=lambda c:int(c.get('placeDepth'))):
   if record.get(flag)!='true':continue
   m=record.find('placeMatrix'); c=record.find('colorTransform')
   matrix=[float(m.get(k,d)) for k,d in [('scaleX','1'),('rotateSkew0','0'),('rotateSkew1','0'),('scaleY','1'),('translateX','0'),('translateY','0')]]
   terms=[int(c.get(k,d)) for k,d in [('redAddTerm','0'),('greenAddTerm','0'),('blueAddTerm','0'),('alphaAddTerm','0'),('redMultTerm','256'),('greenMultTerm','256'),('blueMultTerm','256'),('alphaMultTerm','256')]]
   commands.append('place('+json.dumps(symbol(record.get('characterId')))+',canvas,ctx,'+json.dumps(matrix)+',ctrans.merge(new cxform('+','.join(map(str,terms))+')),1,0,0,time);')
  states.append('case '+str(index)+':\n'+ '\n'.join(commands)+'\nbreak;')
 body='function button'+cid+'(ctx,ctrans,frame,ratio,time){\n switch(frame%4){\n'+'\n'.join(states)+'\n}\n}'
 art,n=re.subn(r'function button'+cid+r'\([^\n]+\)\{.*?\n\}',lambda m:body,art,count=1,flags=re.S)
 assert n==1, cid
texts={}
for e in r.find('tags'):
 if e.get('type')=='DefineEditTextTag' and e.get('characterID',e.get('characterId')) in ['151','165']:
  texts[e.get('characterID',e.get('characterId'))]=dict(e.attrib)
# Attribute in this exporter is characterID.
for e in r.find('tags'):
 if e.get('type')=='DefineEditTextTag':
  cid=e.get('characterID',e.get('characterId',e.get('characterId','')))
  if cid in ['151','165']:texts[cid]=dict(e.attrib)
# Values copied from DefineEditText tags, keeping the original spelling.
texts={'151':'   挥动你的鼠标,\r   让Q哥与Q妹们,\r成为天造地双的一对吧!', '165':'1.把QM与QG有        的相连接即速配成功一对,达到每关配对数量,即成功过关.\r\r2.鼠标点动                 可不断改变方向.\r\r3.游戏中会有         来捣乱你的路线哦!'}
for cid,size,x,y,w,color in [('151',26,-3.25,-7.95,314.6,'255,255,255'),('165',20,-7.2,-6.45,321.1,'255,255,204')]:
 body=f'''function text{cid}(ctx,ctrans,frame,ratio,time) {{
 ctx.save(); ctx.transform(20,0,0,20,0,0);
 ctx.fillStyle=tocolor(ctrans.apply([{color},1]));
 drawDeviceText(ctx,{json.dumps(texts[cid],ensure_ascii=False)},{size},{x},{y},{w});
 ctx.restore();
}}\n'''
 art=re.sub(r'function text'+cid+r'\([^\n]+\)\{.*?\n\}',lambda m:body,art,count=1,flags=re.S)
fonthelper='''function drawDeviceText(ctx,text,size,x,y,width) {
 ctx.font = size+'px QPetReference'; ctx.textBaseline='alphabetic';
 const lineHeight=size*1050/1024, left=x+2, maxWidth=width-4;
 let baseline=y+2+size*894/1024;
 for(const paragraph of text.split('\\r')) {
  let line='';
  for(const letter of paragraph) {
   if(line && ctx.measureText(line+letter).width>maxWidth) {
    ctx.fillText(line,left,baseline); baseline+=lineHeight; line=letter;
   } else line+=letter;
  }
  ctx.fillText(line,left,baseline); baseline+=lineHeight;
 }
}
'''
code='''/* Authored Q宠速配 shapes and timeline placements exported by JPEXS FFDec 26.4.0.
 * Build-time conversion only. No original bytecode or runtime SWF data is included.
 * Dispatch is an explicit static symbol table. See provenance.json.
 */
export function createArtwork(canvas,hooks={}) {
 const symbolStack=[];
 let defaultFill;
'''+helper+'\n'+fonthelper+'\n'+art+'\nconst symbols={'+','.join(sorted(known))+'''};
 const frameCounts='''+json.dumps({name:int(m[1]) if (m:=re.search(r'function '+name+r'\([^\n]+\)\{.*?var frame_cnt = (\d+)',art,re.S)) and name.startswith('sprite') else 4 if name.startswith('button') else 1 for name in sorted(known)})+''';
 const color=new cxform(0,0,0,0,256,256,256,256);
 return {
  prepare(ctx) { if(!ctx._matrix) enhanceContext(ctx); },
  frameCount(name) { return frameCounts[name]||1; },
  draw(name,ctx,frame=0,time=0,customColor=color) {
   symbolStack.push(name); symbols[name](ctx,customColor,frame,0,time); symbolStack.pop();
  },
 };
}
'''
assert not re.search(r'\beval\s*\(|new\s+Function\b',code)
(out/'artwork.js').write_text(code)
(out/'device-text.json').write_text(json.dumps(texts,ensure_ascii=False,indent=2)+'\n')
provenance={
 'sourceSWF':'QPetLover/QPetGames classical_games/swf/Q宠速配.swf',
 'sourceCommit':'cac5e2d7636da081a178a2300865eb5090649969',
 'sourceSHA256':'654f01b4e6a48782ffe10be1750f321e7570d9a96133f1644094017d47b1ab94',
 'tool':'JPEXS FFDec 26.4.0 build-time Canvas export',
 'inputSHA256':{str(p.resolve().relative_to(base)) if p.resolve().is_relative_to(base) else str(p):hashlib.sha256(p.read_bytes()).hexdigest() for p in [args.root_canvas,args.helper,args.pipe_canvas,args.xml]},
 'corrections':['Static explicit symbol dispatch replaces dynamic eval','Remove export-only pipe crop translation','Restore DefineEditText147–149 HTML sbr using existing glyph geometry','Remove opaque pre-fill from '+str(radial_fixes)+' radial-gradient paths','Extend '+str(radial_bounds_fixes)+' radial PAD fills to inverse-transformed clip bounds','Use SWF fixed-point CXFORM multiplier identity256 with correct additive composition','Restore all four authored BUTTONRECORD states','Render device-text151/165 using original-reference font fallback'],
 'artworkSHA256':hashlib.sha256(code.encode()).hexdigest(), 'symbols':len(known)
}
(out/'provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2)+'\n')
print('artwork',len(code),len(known),'symbols',radial_fixes,'radial-gradient pre-fills removed')
