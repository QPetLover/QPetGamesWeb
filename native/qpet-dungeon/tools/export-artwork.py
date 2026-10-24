"""Extract original dungeon symbols as static drawing functions, never an SWF player.
Run with --reference path/to/qpet-dungeon/reference.
"""
from pathlib import Path
import argparse,base64,hashlib,json,re,math,struct,zlib,subprocess,xml.etree.ElementTree as E
from functools import cache
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--reference',type=Path,required=True);p.add_argument('--output',type=Path,default=Path(__file__).resolve().parents[1]/'assets');p.add_argument('--source-swf',type=Path,required=True);p.add_argument('--bitmap-encoding',choices=['png','jpeg-alpha'],default='jpeg-alpha');a=p.parse_args();ref=a.reference;out=a.output;out.mkdir(parents=True,exist_ok=True)
root=E.parse(ref/'dungeon.xml').getroot();tags=list(root.find('tags'))
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
 # Bitmap declarations live outside symbol functions in FFDec linked exports.
 # Merge them explicitly; copying only function bodies loses effect images.
 image_declarations={m[1]for m in re.finditer(r'var\s+(imageObj\d+)\s*=',art)}
 for image in re.finditer(r'var\s+(imageObj\d+)\s*=\s*document\.createElement\("img"\);\s*\1\.src="(data:[^"\n]+)";',s):
  if image[1] not in image_declarations:
   art+='\nvar '+image[1]+' = document.createElement("img");\n'+image[1]+'.src="'+image[2]+'";\n';image_declarations.add(image[1])
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
 const parent=symbolStack[symbolStack.length-1];const override=hooks.place?.({obj,parent:parent?.name,parentFrame:parent?.frame,parentColor:parent?.color,slot:parent?parent.slot++:0,matrix,frame,ratio,time,ctx})||{};
 if(override.skip)return;if(override.frame!==undefined)frame=override.frame;if(override.time!==undefined)time=override.time;if(override.matrix)matrix=override.matrix;
 ctx.save();ctx.transform(...matrix);
 if(blendMode>1){var oldctx=ctx;var ncanvas=createCanvas(canvas.width,canvas.height);ctx=ncanvas.getContext('2d');enhanceContext(ctx);ctx.applyTransforms(oldctx._matrix);}
 const color=blendMode>1?new cxform(0,0,0,0,256,256,256,256):ctrans;
 symbolStack.push({name:obj,frame,color,slot:0});
 if(override.draw)override.draw(ctx,color,frame,ratio,time);else symbols[obj](ctx,color,frame,ratio,time);
 symbolStack.pop();if(blendMode>1){BlendModes.blendCanvas(ctrans.applyToImage(ncanvas),canvas,canvas,blendMode);ctx=oldctx;}ctx.restore();
};
'''+helper[end:]
helper=helper.replace('var tocolor = function (c) {','var tocolor = function (c) {\n if(hooks.opaque||maskDepth)c=[c[0],c[1],c[2],1];')
# Preserve original raster coordinates; specialize only the fixed selector/hurt glows.
glow_roi_helper='''// Fixed dungeon selector/hurt symbols: keep vector rasterization at the
// original stage coordinates; crop only the already rasterized filter input.
// An extra blur radius preserves the original edge-window normalization.
var fullCanvasGlow = Filters.glow;
var croppedGlowSymbols = new Set(['sprite992','sprite877','sprite1098','sprite1164','sprite1253','sprite1331']);
Filters.glow = function(canvas,src,blurX,blurY,strength,color,inner,knockout,iterations){
 var owner=symbolStack[symbolStack.length-1]?.name;
 if(!croppedGlowSymbols.has(owner)||inner||knockout)return fullCanvasGlow(canvas,src,blurX,blurY,strength,color,inner,knockout,iterations);
 var w=canvas.width,h=canvas.height,pixels=src.getImageData(0,0,w,h).data,left=w,top=h,right=-1,bottom=-1;
 for(var y=0;y<h;y++)for(var x=0,i=(y*w)*4+3;x<w;x++,i+=4){if(pixels[i]){if(x<left)left=x;if(x>right)right=x;if(y<top)top=y;if(y>bottom)bottom=y;}}
 if(right<left)return createCanvas(w,h);
 var padx=(iterations+1)*Math.floor(blurX/2)+2,pady=(iterations+1)*Math.floor(blurY/2)+2;
 left=Math.max(0,left-padx);top=Math.max(0,top-pady);right=Math.min(w,right+padx+1);bottom=Math.min(h,bottom+pady+1);
 var cw=right-left,ch=bottom-top;if(cw*ch>=w*h*.9)return fullCanvasGlow(canvas,src,blurX,blurY,strength,color,inner,knockout,iterations);
 var crop=createCanvas(cw,ch),cropctx=crop.getContext('2d');cropctx.putImageData(src.getImageData(left,top,cw,ch),0,0);
 var filtered=fullCanvasGlow(crop,cropctx,blurX,blurY,strength,color,inner,knockout,iterations),result=createCanvas(w,h);result.getContext('2d').drawImage(filtered,left,top);return result;
};
'''
assert helper.count('var BlendModes = {};')==1
helper=helper.replace('var BlendModes = {};',glow_roi_helper+'\nvar BlendModes = {};')
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
 if t.get('type')in ['DefineFont2Tag','DefineFont3Tag']:
  codes=[int(v.text)for v in t.find('codeTable')];adv=t.find('fontAdvanceTable');fonts[t.get('fontID')]={'advance':dict(zip(map(chr,codes),[int(v.text)for v in adv])) if adv is not None else {},'ascent':int(t.get('fontAscent','880')),'descent':int(t.get('fontDescent','144')),'leading':int(t.get('fontLeading','0')),'units':20480 if t.get('type')=='DefineFont3Tag' else 1024}
for t in tags:
 if t.get('type')!='DefineEditTextTag':continue
 i=t.get('characterID');rect=t.find('bounds');rgba=t.find('textColor');font=fonts[t.get('fontId')]
 data={'text':t.get('initialText','').replace('\\r','\r'),'size':int(t.get('fontHeight')),'box':[int(rect.get(k))for k in ['Xmin','Ymin','Xmax','Ymax']],'color':[int(rgba.get(k,'255'))for k in ['red','green','blue']]+[int(rgba.get('alpha','255'))/255],'align':int(t.get('align','0')),'leading':int(t.get('leading','0')),'font':t.get('fontId'),'fontData':font,'outlines':t.get('useOutlines')=='true','variable':t.get('variableName','')};texts[i]=data
 old=fs.get('text'+i)
 if old:art=art.replace(old,'function text'+i+'(ctx,ctrans,frame,ratio,time){drawEditText(ctx,ctrans,'+json.dumps(i)+','+json.dumps(data,ensure_ascii=False,separators=(',',':'))+');}')
texthelper='''function drawEditText(ctx,ctrans,id,data){
 const text=hooks.text?.(id,data.variable)??data.text;if(text===undefined||text===null)return;
 const shade=tocolor(ctrans.apply(data.color)),unit=data.size/data.fontData.units,adv=data.fontData.advance;
 let y=data.box[1]+40+data.size*data.fontData.ascent/data.fontData.units;
 for(const paragraph of String(text).split('\\r')){
  let x=data.box[0]+40;
  if(data.outlines){const chars=[...paragraph],width=chars.reduce((sum,ch)=>sum+(adv[ch]||0)*unit,0);if(data.align===2)x+=(data.box[2]-data.box[0]-80-width)/2;else if(data.align===1)x+=data.box[2]-data.box[0]-80-width;
   for(const ch of chars){ctx.save();ctx.transform(unit,0,0,unit,Math.round(x),Math.round(y));symbols['font'+data.font](ctx,ch,shade);ctx.restore();x+=(adv[ch]||0)*unit;}
  }else{ctx.save();ctx.font=data.size+'px Arial,sans-serif';ctx.fillStyle=shade;ctx.textBaseline='alphabetic';ctx.fillText(paragraph,x,y);ctx.restore();}
  y+=data.size*(data.fontData.ascent+data.fontData.descent+data.fontData.leading)/data.fontData.units+data.leading;
 }
}
'''
counts={name:int(m[1]) if(m:=re.search(r'var frame_cnt\s*=\s*(\d+)',body))else 4 if name.startswith('button') else 1 for name,body in fs.items()}
images=re.findall(r'var (imageObj\d+) = document.createElement\("img"\);',art)
image_refs=set(re.findall(r'\bimageObj\d+\b',art))
assert image_refs==set(images),('Unbound bitmap variables',sorted(image_refs-set(images)))
assert len(images)==len(set(images)),'Duplicate bitmap declarations'
legacy_images={m[1]:{'mime':m[2],'bytes':len(base64.b64decode(m[3])),'sha256':hashlib.sha256(base64.b64decode(m[3])).hexdigest()}for m in re.finditer(r'(imageObj\d+)\.src="data:([^;]+);base64,([^"\n]+)";',art)}
def jpeg_size(data):
 for i in range(len(data)-9):
  if data[i]==255 and data[i+1]in [192,193,194,195,197,198,199,201,202,203,205,206,207]:return struct.unpack('>HH',data[i+5:i+9])[::-1]
 raise ValueError('Missing JPEG size')
def png_chunk(typ,data):return struct.pack('>I',len(data))+typ+data+struct.pack('>I',zlib.crc32(typ+data))
def alpha_png(width,height,alpha):
 assert len(alpha)==width*height
 raw=b''.join(b'\0'+b''.join(bytes((255,v))for v in alpha[y*width:(y+1)*width])for y in range(height))
 return b'\x89PNG\r\n\x1a\n'+png_chunk(b'IHDR',struct.pack('>IIBBBBB',width,height,8,4,0,0,0))+png_chunk(b'IDAT',zlib.compress(raw,9))+png_chunk(b'IEND',b'')
embedded={}
bitmap_tags={t.get('characterID'):t for t in tags if t.get('type','').startswith('DefineBitsJPEG')}
def compact_bitmap(match):
 name=match[1];t=bitmap_tags.get(name[8:]);
 if t is None:embedded[name]=legacy_images[name];return match[0]
 source_jpeg=bytes.fromhex(t.get('imageData'));jpeg=source_jpeg[4:]if source_jpeg.startswith(bytes.fromhex('ffd9ffd8'))else source_jpeg
 assert jpeg.startswith(bytes.fromhex('ffd8'))
 width,height=jpeg_size(jpeg);alpha_zlib=bytes.fromhex(t.get('bitmapAlphaData',''));alpha=zlib.decompress(alpha_zlib)if alpha_zlib else None;mask=alpha_png(width,height,alpha)if alpha is not None else b''
 jpeg_uri='data:image/jpeg;base64,'+base64.b64encode(jpeg).decode();mask_uri='data:image/png;base64,'+base64.b64encode(mask).decode()if mask else None
 embedded[name]={'tag':t.get('type'),'width':width,'height':height,'mime':'image/jpeg+lossless-alpha-png'if mask else'image/jpeg','bytes':len(jpeg)+len(mask),'sha256':hashlib.sha256(jpeg+mask).hexdigest(),'originalJPEG':{'bytes':len(jpeg),'sha256':hashlib.sha256(jpeg).hexdigest(),'removedLegacyPrefixBytes':len(source_jpeg)-len(jpeg)},'alphaMaskPNG':{'bytes':len(mask),'sha256':hashlib.sha256(mask).hexdigest()}if mask else None,'sourceAlphaZlib':{'bytes':len(alpha_zlib),'sha256':hashlib.sha256(alpha_zlib).hexdigest(),'alphaMin':min(alpha),'alphaMax':max(alpha)}if alpha is not None else None,'previousFFDecExport':legacy_images[name]}
 return 'var '+name+' = createOriginalBitmap('+json.dumps(name)+','+json.dumps(jpeg_uri)+','+json.dumps(mask_uri)+','+str(width)+','+str(height)+');'
if a.bitmap_encoding=='jpeg-alpha':art,bitmap_count=re.subn(r'var\s+(imageObj\d+)\s*=\s*document\.createElement\("img"\);\s*\1\.src="data:[^"\n]+";',compact_bitmap,art)
else:embedded=legacy_images;bitmap_count=len(images)
assert bitmap_count==len(images)==len(embedded)
bitmap_helper='''// Share decoded original bitmaps between renderer and collision artwork.
const originalBitmapCache=new Map();
function bitmapLoaded(image){if(image.decode)return image.decode();if(image.complete&&image.width)return Promise.resolve();return new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=reject;});}
function createOriginalBitmap(id,jpegSource,alphaSource,width,height){
 if(originalBitmapCache.has(id))return originalBitmapCache.get(id);
 const jpeg=document.createElement('img');jpeg.src=jpegSource;
 if(!alphaSource){jpeg._bitmapReady=bitmapLoaded(jpeg);originalBitmapCache.set(id,jpeg);return jpeg;}
 const result=document.createElement('img');
 result._bitmapReady=(async()=>{
  const mask=document.createElement('img');mask.src=alphaSource;await Promise.all([bitmapLoaded(jpeg),bitmapLoaded(mask)]);
  const bitmap=document.createElement('canvas');bitmap.width=width;bitmap.height=height;
  const ctx=bitmap.getContext('2d',{willReadFrequently:true});ctx.drawImage(jpeg,0,0);
  const alphaCanvas=document.createElement('canvas');alphaCanvas.width=width;alphaCanvas.height=height;
  const alphaContext=alphaCanvas.getContext('2d',{willReadFrequently:true});alphaContext.drawImage(mask,0,0);
  const rgba=ctx.getImageData(0,0,width,height),values=rgba.data,alpha=alphaContext.getImageData(0,0,width,height).data;
  // DefineBitsJPEG3 stores premultiplied JPEG RGB plus separate alpha.
  // Restore the original straight RGBA exactly once; never re-encode the JPEG.
  for(let i=0;i<values.length;i+=4){const a=alpha[i+3];values[i]=a?Math.min(255,Math.floor(values[i]*255/a)):0;values[i+1]=a?Math.min(255,Math.floor(values[i+1]*255/a)):0;values[i+2]=a?Math.min(255,Math.floor(values[i+2]*255/a)):0;values[i+3]=a;}
  ctx.putImageData(rgba,0,0);
  // Preserve the original Image source type as well as pixel values. Some
  // Canvas engines filter Canvas patterns differently from decoded Images.
  result.src=bitmap.toDataURL('image/png');bitmap.width=bitmap.height=alphaCanvas.width=alphaCanvas.height=1;await bitmapLoaded(result);return result;
 })();originalBitmapCache.set(id,result);return result;
}
'''
# Fixed selector992 has66 expensive frames but only22 identical filter inputs.
selection_filter_groups={}
selection_start=art.index('function sprite992(');selection_end=art.index('function ',selection_start+10)
selection_body=art[selection_start:selection_end]
selection_pattern=re.compile(r'(\t\t\tvar oldctx = ctx;\n.*?\t\t\tctx\.applyTransforms\(ms\);)',re.S)
def cache_selector_filter(m):
 block=m[0];placement=re.findall(r'place\([^\n]+',block.split('Filters.glow')[0])[-1];glow=re.search(r'Filters\.glow\([^;]+',block)[0];key=placement+'|'+glow
 if key not in selection_filter_groups:selection_filter_groups[key]=len(selection_filter_groups)
 group=selection_filter_groups[key]
 return '\t\t\tif(!hooks.selectionGlow?.(ctx,'+str(group)+',ctrans)){\n'+block.replace('\t\t\tctx = oldctx;','\t\t\thooks.storeSelectionGlow?.(fcanvas,oldctx,'+str(group)+',ctrans);\n\t\t\tctx = oldctx;',1)+'\n\t\t\t}'
selection_body,selection_patches=selection_pattern.subn(cache_selector_filter,selection_body)
assert selection_patches==66 and len(selection_filter_groups)==22
art=art[:selection_start]+selection_body+art[selection_end:]
selection_rows=[]
for chunk in re.split(r'\bcase ',selection_body)[1:]:
 frame=int(chunk.split(':',1)[0])+1
 if 'Filters.glow'not in chunk:continue
 block=selection_pattern.search(chunk)[0];key=re.findall(r'place\([^\n]+',block.split('Filters.glow')[0])[-1]+'|'+re.search(r'Filters\.glow\([^;]+',block)[0]
 selection_rows.append((frame,selection_filter_groups[key]))
selection_groups=[{'id':i,'frame':next(f for f,g in selection_rows if g==i),'frames':[f for f,g in selection_rows if g==i]}for i in range(22)]
(out/'selection-groups.js').write_text('/* Fixed original sprite992:66 glow frames,22 exact placement/CXFORM/child-frame/filter inputs. */\nexport const selectionGroups='+json.dumps(selection_groups,separators=(',',':'))+';\n')

# These two fixed shapes retain their original full-stage drawing coordinates.
# Restrict only the target-pixel replacement reads/write, never vector paths.
for name in ['shape978','shape989']:
 start=art.index('function '+name+'(');end=art.index('function ',start+10)
 part=art[start:end]
 assert part.count('var limgd = lctx.getImageData(0, 0, lcanvas.width, lcanvas.height);')==1
 part=part.replace('var limgd = lctx.getImageData(0, 0, lcanvas.width, lcanvas.height);','var region = hooks.replacementRegion?.(ctx,"'+name+'") || {x:0,y:0,width:canvas.width,height:canvas.height};\n\tvar limgd = lctx.getImageData(region.x, region.y, region.width, region.height);')
 part=part.replace('lfctx.getImageData(0, 0, lfcanvas.width, lfcanvas.height)','lfctx.getImageData(region.x, region.y, region.width, region.height)').replace('ctx.getImageData(0, 0, canvas.width, canvas.height)','ctx.getImageData(region.x, region.y, region.width, region.height)').replace('ctx.putImageData(imgd, 0, 0);','ctx.putImageData(imgd, region.x, region.y);')
 art=art[:start]+part+art[end:]

code='''/* Original QQ地下城与勇士之Q宠版 symbols. JPEXS FFDec 26.4.0 static Canvas extraction.
 * No SWF parser, ActionScript interpreter, generated player, or dynamic execution.
 * FFDec Canvas drawing helpers: GPL-3.0; repository licenses apply.
 */
'''+bitmap_helper+'''export function createArtwork(canvas,hooks={}){const symbolStack=[];let defaultFill,maskDepth=0;
'''+helper+'\n'+texthelper+'\n'+art+'\nconst symbols={'+','.join(sorted(known))+'''};
 const counts='''+json.dumps(counts)+''';const identity=new cxform(0,0,0,0,256,256,256,256);const images=['''+','.join(images)+'''];
 return {prepare(ctx){if(!ctx._matrix)enhanceContext(ctx);},async ready(){await Promise.all(images.map(img=>img._bitmapReady||bitmapLoaded(img)));},frameCount(name){return counts[name]||1;},draw(name,ctx,frame=0,time=0,color=identity){const previousCanvas=canvas;canvas=ctx.canvas||canvas;symbolStack.push({name,frame,color,slot:0});try{symbols[name](ctx,color,frame,0,time);}finally{symbolStack.pop();canvas=previousCanvas;}}};
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
   if t.get('placeFlagHasCharacter')=='true':v={'id':t.get('characterId'),'born':frame}
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
localbounds={i:[v/20 for v in bounds(i)]for i in byid if bounds(i)}
(out/'instances.js').write_text('/* Original static display lists; matrices in twips. */\nexport const instances='+json.dumps(instances,separators=(',',':'))+';\nexport const buttonBounds='+json.dumps(buttonbounds,separators=(',',':'))+';\nexport const localBounds='+json.dumps(localbounds,separators=(',',':'))+';\n')
(out/'font-provenance.json').write_text(json.dumps([t.attrib for t in tags if t.get('type')=='DefineFontNameTag'],ensure_ascii=False,indent=2)+'\n')
(out/'text-metadata.json').write_text(json.dumps(texts,ensure_ascii=False,indent=2)+'\n')
inputs=[ref/'dungeon.xml',ref/'frame-canvas/frames.html',ref/'frame-canvas/canvas.js']+linked
source=a.source_swf
provenance={'sourceSWF':'qqpet_automation QQ地下城与勇士之Q宠版 community SWF','sourceCommit':None,'sourceURL':'https://raw.githubusercontent.com/xuemian168/qqpet_automation/main/qq-pet-macos/src/assets/game/QQ%E5%9C%B0%E4%B8%8B%E5%9F%8E%E4%B8%8E%E5%8B%87%E5%A3%AB%E4%B9%8BQ%E5%AE%A0%E7%89%88.swf','sourceFetchedAtUTC':'2026-10-23T14:42:41.180474+00:00','sourceGitBlobSHA1':'958a23274b4d0e10f45c55fdd826625aa1ca4718','sourceSHA256':hashlib.sha256(source.read_bytes()).hexdigest(),'sourceBytes':source.stat().st_size,'stage':{'width':760,'height':420,'fps':24},'tool':'JPEXS FFDec 26.4.0','symbols':len(known),'embeddedImages':embedded,'inputs':{str(v.relative_to(ref)):hashlib.sha256(v.read_bytes()).hexdigest()for v in inputs},'corrections':['All linked-export bitmap declarations merged; complete imageObj reference/declaration closure asserted',f'{mask_fixes} mask drawing calls use opaque vector coverage; clipped content alpha remains unchanged','Selected linked-symbol crop translation removed; original twip registration restored','Static explicit dispatch replaces eval','CXFORM 256 identity and composed additive correction','All authored button states restored','Dynamic text uses original embedded font outlines/advances where available',f'{radialfix} transparent radial centre export pre-fills removed'],'artworkSHA256':hashlib.sha256(code.encode()).hexdigest()}
provenance['corrections'].append('Known selector992 and five monster-hurt glow symbols filter only an integer raster ROI; (quality+1)*floor(radius/2)+2 padding preserves original edge normalization; original vector/bitmap/font drawing and other filters unchanged')
provenance['corrections'].append('Fixed sprite992 pre-render hooks replace only22 original filtered units, mapping66 frames; text/buttons and timeline remain live')
provenance['corrections'].append('Fixed shape978/989 retain original canvas dimensions, vector/gradient coordinates and drawing order; only mask/fill/destination pixel-replacement reads and write are restricted to original integer raster bounds')
provenance['bitmapEncoding']=a.bitmap_encoding
provenance['bitmapPayloadBytes']=sum(v['bytes']for v in embedded.values())
provenance['previousFFDecBitmapBytes']=sum(v['bytes']for v in legacy_images.values())
if a.bitmap_encoding=='jpeg-alpha':provenance['corrections'].insert(1,'Original JPEG payloads retained with lossless source-alpha PNG; premultiplied RGB restored once, decoded bitmaps shared across artwork instances')
(out/'provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'symbols':len(known),'images':len(images),'bytes':len(code),'linked':len(linked),'bounds':localbounds},ensure_ascii=False))
