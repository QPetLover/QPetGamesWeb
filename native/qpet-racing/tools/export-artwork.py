"""Extract original racing symbols as static drawing functions, never an SWF player.
Run with --reference path/to/native-qpet-racing/reference.
"""
from pathlib import Path
import argparse,base64,hashlib,json,re,math,subprocess,xml.etree.ElementTree as E
from functools import cache
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--reference',type=Path,required=True);p.add_argument('--output',type=Path,default=Path(__file__).resolve().parents[1]/'assets');p.add_argument('--source-swf',type=Path,default=Path(__file__).resolve().parents[4]/'QPetGames/classical_games/swf/QQ飞车.swf');a=p.parse_args();ref=a.reference;out=a.output;out.mkdir(parents=True,exist_ok=True)
root=E.parse(ref/'racing.xml').getroot();tags=list(root.find('tags'))
def cid(t):
 for k in ['shapeId','spriteId','buttonId','characterID','characterId','fontID','fontId']:
  if t.get(k)is not None:return t.get(k)
byid={cid(t):t for t in tags if re.match(r'Define(?:Shape\d*|MorphShape\d*|Sprite|Button2?|Text\d*|EditText|Font\d*|Bits\w*)Tag$',t.get('type',''))}
def symbol(i):
 t=byid[i].get('type');return ('morphshape' if 'MorphShape' in t else 'shape' if 'Shape' in t else 'sprite' if 'Sprite' in t else 'button' if 'Button' in t else 'text' if 'Text' in t else 'font' if 'Font' in t else 'image')+i
def mat(t):
 if t is None:return [1,0,0,1,0,0]
 v=[float(t.get(k,d))for k,d in [('scaleX','1'),('rotateSkew0','0'),('rotateSkew1','0'),('scaleY','1'),('translateX','0'),('translateY','0')]]
 return [round(x*65536)/65536 if n<4 else x for n,x in enumerate(v)]
def color(t):
 if t is None:return [0,0,0,0,256,256,256,256]
 return [int(t.get(k,d))for k,d in [('redAddTerm','0'),('greenAddTerm','0'),('blueAddTerm','0'),('alphaAddTerm','0'),('redMultTerm','256'),('greenMultTerm','256'),('blueMultTerm','256'),('alphaMultTerm','256')]]
def functions(s):
 for m in re.finditer(r'function (\w+)\([^)]*\)\{',s):
  depth=1;quote=None;escape=False;i=m.end()
  while depth:
   ch=s[i]
   if quote:
    if escape:escape=False
    elif ch=='\\':escape=True
    elif ch==quote:quote=None
   elif ch in ['"',"'",'`']:quote=ch
   elif ch=='{':depth+=1
   elif ch=='}':depth-=1
   i+=1
  yield m[1],s[m.start():i]
html=(ref/'frame-canvas/frames.html').read_text();art=html[html.index('var scalingGrids'):html.index('var frame = -1')];fs=dict(functions(art));known=set(fs)
linked=[]
for path in sorted((ref/'linked-unpacked').glob('*/frames.html')):
 s=path.read_text();i=re.search(r'var frame\s*=\s*-1',s);s=s[s.index('var scalingGrids'):i.start()];rootid=re.search(r'DefineSprite_(\d+)',path.parent.name)[1]
 for name,body in functions(s):
  if name in fs:continue
  if name=='sprite'+rootid:
   # A selected sprite export has an export-only pixel crop and 0.05 child
   # matrices. Restore original twip registration, retaining every child matrix.
   body,n=re.subn(r'(\{\s*ctx\.save\(\);)\s*ctx\.transform\(1,0,0,1,[^;]+\);',r'\1\nctx.transform(20,0,0,20,0,0);',body,count=1);assert n==1,name
  fs[name]=body;art+='\n'+body+'\n';known.add(name)
 linked.append(path)
helper=(ref/'frame-canvas/canvas.js').read_text().replace('Filters = {};','var Filters = {};',1)
helper=re.sub(r"window.addEventListener\('load'.*?(?=function drawMorphPath)",'',helper,flags=re.S)
helper=helper.replace('    document.body.appendChild(c);\n    document.body.removeChild(c);','')
helper=helper.replace(' / 255 + this.', ' / 256 + this.')
helper=helper.replace('this.r_add + cx.r_add, this.g_add + cx.g_add, this.b_add + cx.b_add, this.a_add + cx.a_add, this.r_mult * cx.r_mult / 255, this.g_mult * cx.g_mult / 255, this.b_mult * cx.b_mult / 255, this.a_mult * cx.a_mult / 255','this.r_add + cx.r_add * this.r_mult / 256, this.g_add + cx.g_add * this.g_mult / 256, this.b_add + cx.b_add * this.b_mult / 256, this.a_add + cx.a_add * this.a_mult / 256, this.r_mult * cx.r_mult / 256, this.g_mult * cx.g_mult / 256, this.b_mult * cx.b_mult / 256, this.a_mult * cx.a_mult / 256')
helper=helper.replace('this.r_mult == 255 && this.g_mult == 255 && this.b_mult == 255 && this.a_mult == 255','this.r_mult == 256 && this.g_mult == 256 && this.b_mult == 256 && this.a_mult == 256')
start=helper.index('var placeRaw = function');end=helper.index('var transformPoint',start)
helper=helper[:start]+'''var placeRaw=function(obj,canvas,ctx,matrix,ctrans,blendMode,frame,ratio,time){
 const parent=symbolStack.at(-1);const override=hooks.place?.({obj,parent:parent?.name,parentFrame:parent?.frame,slot:parent?parent.slot++:0,matrix,frame,ratio,time,ctx})||{};
 if(override.skip)return;if(override.frame!==undefined)frame=override.frame;if(override.time!==undefined)time=override.time;if(override.matrix)matrix=override.matrix;
 ctx.save();ctx.transform(...matrix);
 if(blendMode>1){var oldctx=ctx;var ncanvas=createCanvas(canvas.width,canvas.height);ctx=ncanvas.getContext('2d');enhanceContext(ctx);ctx.applyTransforms(oldctx._matrix);}
 const color=blendMode>1?new cxform(0,0,0,0,256,256,256,256):ctrans;
 symbolStack.push({name:obj,frame,slot:0});
 if(override.draw)override.draw(ctx,color,frame,ratio,time);else symbols[obj](ctx,color,frame,ratio,time);
 symbolStack.pop();if(blendMode>1){BlendModes.blendCanvas(ctrans.applyToImage(ncanvas),canvas,canvas,blendMode);ctx=oldctx;}ctx.restore();
};
'''+helper[end:]
helper=helper.replace('var tocolor = function (c) {','var tocolor = function (c) {\n if(hooks.opaque||maskDepth)c=[c[0],c[1],c[2],1];')
# Flash display-list masks use vector fill geometry, ignoring authored colour
# alpha (including alpha-zero morph fills). FFDec destination-in otherwise
# makes HUD portraits half-transparent or removes valid countdown mask areas.
# Force coverage only while drawing a mask; retain antialiased path edges and
# the clipped content's own alpha. Every mask in this source is vector artwork.
mask_pattern=re.compile(r'([ \t]*)(place\([^\n]+\);)\n([ \t]*clips\[clips\.length-1\]\.clipCanvas = canvas;)')
art,mask_fixes=mask_pattern.subn(lambda m:m[1]+'maskDepth++;try{'+m[2]+'}finally{maskDepth--;}\n'+m[3],art)
assert mask_fixes>0
# Retain authored gradients, including transparent centres. The FFDec fallback
# prefill is opaque and incorrectly shows through a transparent source centre.
radial=re.compile(r'(drawPath\(ctx,pathData,false\);)\n\s*ctx\.fillStyle=tocolor\([^\n]+\);\n\s*ctx\.fill\("evenodd"\);\n(\s*ctx\.save\(\);\n\s*ctx\.clip\(\);\n\s*ctx\.transform\([^\n]+\);\n\s*var grd=ctx\.createRadialGradient)')
art,radialfix=radial.subn(r'\1\n\2',art)
# Restore four original BUTTONRECORD states rather than FFDec stateUp only.
for t in tags:
 if t.get('type')!='DefineButton2Tag':continue
 i=t.get('buttonId');states=[]
 for n,flag in enumerate(['buttonStateUp','buttonStateOver','buttonStateDown','buttonStateHitTest']):
  commands=[]
  for r in sorted(t.find('characters'),key=lambda r:int(r.get('placeDepth'))):
   if r.get(flag)=='true':commands.append('place('+json.dumps(symbol(r.get('characterId')))+',canvas,ctx,'+json.dumps(mat(r.find('placeMatrix')))+',ctrans.merge(new cxform('+','.join(map(str,color(r.find('colorTransform'))))+')),1,0,0,time);')
  states.append('case '+str(n)+':\n'+'\n'.join(commands)+'\nbreak;')
 old=fs.get('button'+i)
 if old:art=art.replace(old,'function button'+i+'(ctx,ctrans,frame,ratio,time){switch(frame%4){'+'\n'.join(states)+'}}')
# Dynamic EditText uses the original embedded glyph outlines and advances.
fonts={};texts={}
for t in tags:
 if t.get('type')=='DefineFont2Tag':
  codes=[int(v.text)for v in t.find('codeTable')];adv=t.find('fontAdvanceTable');fonts[t.get('fontID')]={'advance':dict(zip(map(chr,codes),[int(v.text)for v in adv])) if adv is not None else {},'ascent':int(t.get('fontAscent','880')),'descent':int(t.get('fontDescent','144')),'leading':int(t.get('fontLeading','0'))}
for t in tags:
 if t.get('type')!='DefineEditTextTag':continue
 i=t.get('characterID');rect=t.find('bounds');rgba=t.find('textColor');font=fonts[t.get('fontId')]
 data={'text':t.get('initialText','').replace('\\r','\r'),'size':int(t.get('fontHeight')),'box':[int(rect.get(k))for k in ['Xmin','Ymin','Xmax','Ymax']],'color':[int(rgba.get(k,'255'))for k in ['red','green','blue']]+[int(rgba.get('alpha','255'))/255],'align':int(t.get('align','0')),'leading':int(t.get('leading','0')),'font':t.get('fontId'),'fontData':font,'outlines':t.get('useOutlines')=='true','variable':t.get('variableName','')};texts[i]=data
 old=fs.get('text'+i)
 if old:art=art.replace(old,'function text'+i+'(ctx,ctrans,frame,ratio,time){drawEditText(ctx,ctrans,'+json.dumps(i)+','+json.dumps(data,ensure_ascii=False,separators=(',',':'))+');}')
texthelper='''function drawEditText(ctx,ctrans,id,data){
 const text=hooks.text?.(id,data.variable)??data.text;if(text===undefined||text===null)return;
 const shade=tocolor(ctrans.apply(data.color)),unit=data.size/1024,adv=data.fontData.advance;
 let y=data.box[1]+40+data.size*data.fontData.ascent/1024;
 for(const paragraph of String(text).split('\\r')){
  let x=data.box[0]+40;
  if(data.outlines){const chars=[...paragraph],width=chars.reduce((sum,ch)=>sum+(adv[ch]||0)*unit,0);if(data.align===2)x+=(data.box[2]-data.box[0]-80-width)/2;else if(data.align===1)x+=data.box[2]-data.box[0]-80-width;
   for(const ch of chars){ctx.save();ctx.transform(unit,0,0,unit,Math.round(x),Math.round(y));symbols['font'+data.font](ctx,ch,shade);ctx.restore();x+=(adv[ch]||0)*unit;}
  }else{ctx.save();ctx.font=data.size+'px Arial,sans-serif';ctx.fillStyle=shade;ctx.textBaseline='alphabetic';ctx.fillText(paragraph,x,y);ctx.restore();}
  y+=data.size*(data.fontData.ascent+data.fontData.descent+data.fontData.leading)/1024+data.leading;
 }
}
'''
counts={name:int(m[1]) if(m:=re.search(r'var frame_cnt\s*=\s*(\d+)',body))else 4 if name.startswith('button') else 1 for name,body in fs.items()}
images=re.findall(r'var (imageObj\d+) = document.createElement\("img"\);',art)
code='''/* Original 宠爱飞车 / QQ飞车 symbols. JPEXS FFDec 26.4.0 static Canvas extraction.
 * No SWF parser, ActionScript interpreter, generated player, or dynamic execution.
 * FFDec Canvas drawing helpers: GPL-3.0; repository licenses apply.
 */
export function createArtwork(canvas,hooks={}){const symbolStack=[];let defaultFill,maskDepth=0;
'''+helper+'\n'+texthelper+'\n'+art+'\nconst symbols={'+','.join(sorted(known))+'''};
 const counts='''+json.dumps(counts)+''';const identity=new cxform(0,0,0,0,256,256,256,256);const images=['''+','.join(images)+'''];
 return {prepare(ctx){if(!ctx._matrix)enhanceContext(ctx);},async ready(){await Promise.all(images.map(img=>img.decode?img.decode():Promise.resolve()));},frameCount(name){return counts[name]||1;},draw(name,ctx,frame=0,time=0,color=identity){symbolStack.push({name,frame,slot:0});symbols[name](ctx,color,frame,0,time);symbolStack.pop();}};
}
'''
assert not re.search(r'\beval\s*\(|new\s+Function\b',code)
(out/'artwork.js').write_text(code)
# XML display-list evidence retains depth, frame, names, transform and colour.
def frames(ts):
 d={};result=[];labels={};frame=1
 for t in ts:
  ty=t.get('type')
  if ty=='ShowFrameTag':result.append([dict(v)for _,v in sorted(d.items())]);frame+=1
  elif ty=='FrameLabelTag':labels[t.get('name')]=frame
  elif ty in ['PlaceObject2Tag','PlaceObject3Tag']:
   depth=int(t.get('depth'));v=dict(d.get(depth,{}))
   if t.get('placeFlagHasCharacter')=='true':v={'id':t.get('characterId')}
   if t.get('placeFlagHasMatrix')=='true':v['matrix']=mat(t.find('matrix'))
   if t.get('placeFlagHasName')=='true':v['name']=t.get('name')
   if t.get('placeFlagHasColorTransform')=='true':v['color']=color(t.find('colorTransform'))
   v['depth']=depth;v.setdefault('matrix',[1,0,0,1,0,0]);d[depth]=v
  elif ty=='RemoveObject2Tag':d.pop(int(t.get('depth')),None)
 return {'frames':result,'labels':labels}
instances={'main':frames(tags)}
for i,t in byid.items():
 if t.get('type')=='DefineSpriteTag':instances[i]=frames(t.find('subTags'))
def union(bs):
 bs=[b for b in bs if b is not None];return [min(b[0]for b in bs),min(b[1]for b in bs),max(b[2]for b in bs),max(b[3]for b in bs)]if bs else None
def transform(b,m):
 if b is None:return None
 aa,bb,c,d,e,f=m;pts=[(aa*x+c*y+e,bb*x+d*y+f)for x in [b[0],b[2]]for y in [b[1],b[3]]];return [min(x[0]for x in pts),min(x[1]for x in pts),max(x[0]for x in pts),max(x[1]for x in pts)]
@cache
def bounds(i,seen=()):
 if i in seen:return None
 t=byid.get(i)
 if t is None:return None
 for field in ['shapeBounds','bounds','textBounds','startBounds','endBounds']:
  q=t.find(field)
  if q is not None:return [int(q.get(k))for k in ['Xmin','Ymin','Xmax','Ymax']]
 if i in instances:return union([transform(bounds(v['id'],seen+(i,)),v['matrix'])for fs in instances[i]['frames']for v in fs])
 if 'Button' in t.get('type'):return union([transform(bounds(r.get('characterId'),seen+(i,)),mat(r.find('placeMatrix')))for r in t.find('characters')if r.get('buttonStateHitTest')=='true'])
 return None
buttonbounds={i:[v/20 for v in bounds(i)]for i,t in byid.items()if 'Button' in t.get('type')and bounds(i)}
localbounds={i:[v/20 for v in bounds(i)]for i in ['122','202','560','206','209','215','221']}
def selected_bounds(i,frame):
 return union([transform(bounds(v['id']),v['matrix'])for v in instances[i]['frames'][frame]])
@cache
def period(i):
 if i not in instances:return 1
 return math.lcm(len(instances[i]['frames']),*(period(v['id'])for fs in instances[i]['frames']for v in fs))
def selected_period(i,frame):
 return math.lcm(*(period(v['id'])for v in instances[i]['frames'][frame]))
statebounds={};periods={}
for i in ['122','202']:
 for f in [1,10,20,30,41]:
  key=i+':'+str(f);statebounds[key]=[x/20 for x in selected_bounds(i,f-1)];periods[key]=selected_period(i,f-1)
for sex,child in [(1,'501'),(2,'559')]:
 for f in [1,10,20,30,41]:
  key='560:'+str(sex)+':'+str(f)
  statebounds[key]=[x/20 for x in union([transform(selected_bounds(child,f-1)if v['id']==child else bounds(v['id']),v['matrix'])for v in instances['560']['frames'][sex-1]])]
  periods[key]=selected_period(child,f-1)
for i in ['206','209','215','221']:
 for f in range(1,len(instances[i]['frames'])+1):periods[i+':'+str(f)]=selected_period(i,f-1)
(out/'instances.js').write_text('/* Static original XML display-list metadata. Matrices are original twips. */\nexport const instances='+json.dumps(instances,separators=(',',':'))+';\nexport const buttonBounds='+json.dumps(buttonbounds,separators=(',',':'))+';\nexport const localBounds='+json.dumps(localbounds,separators=(',',':'))+';\nexport const stateBounds='+json.dumps(statebounds,separators=(',',':'))+';\nexport const animationPeriods='+json.dumps(periods,separators=(',',':'))+';\n')
(out/'font-provenance.json').write_text(json.dumps([t.attrib for t in tags if t.get('type')=='DefineFontNameTag'],ensure_ascii=False,indent=2)+'\n')
(out/'text-metadata.json').write_text(json.dumps(texts,ensure_ascii=False,indent=2)+'\n')
inputs=[ref/'racing.xml',ref/'frame-canvas/frames.html',ref/'frame-canvas/canvas.js']+linked
embedded={m[1]:{'mime':m[2],'bytes':len(base64.b64decode(m[3])),'sha256':hashlib.sha256(base64.b64decode(m[3])).hexdigest()}for m in re.finditer(r'(imageObj\d+)\.src="data:([^;]+);base64,([^"\n]+)";',art)}
source=a.source_swf
provenance={'sourceSWF':'QPetLover/QPetGames classical_games/swf/QQ飞车.swf','sourceCommit':subprocess.check_output(['git','-C',str(source.parents[2]),'rev-parse','HEAD'],text=True).strip(),'sourceSHA256':hashlib.sha256(source.read_bytes()).hexdigest(),'sourceBytes':source.stat().st_size,'stage':{'width':760,'height':420,'fps':25},'tool':'JPEXS FFDec 26.4.0','symbols':len(known),'embeddedImages':embedded,'inputs':{str(v.relative_to(ref)):hashlib.sha256(v.read_bytes()).hexdigest()for v in inputs},'corrections':[f'{mask_fixes} mask drawing calls use opaque vector coverage; clipped content alpha remains unchanged','Selected linked-symbol crop translation removed; original twip registration restored','Static explicit dispatch replaces eval','CXFORM 256 identity and composed additive correction','All authored button states restored','Dynamic text uses original embedded font outlines/advances where available',f'{radialfix} transparent radial centre export pre-fills removed'],'artworkSHA256':hashlib.sha256(code.encode()).hexdigest()}
(out/'provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'symbols':len(known),'images':len(images),'bytes':len(code),'linked':len(linked),'bounds':localbounds},ensure_ascii=False))
