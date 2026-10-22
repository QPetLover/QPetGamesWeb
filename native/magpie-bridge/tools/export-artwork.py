"""Build static Canvas geometry from original FFDec exports (no runtime SWF code).

python export-artwork.py --reference /path/to/native-magpie/reference
"""
from pathlib import Path
import argparse, base64, hashlib, html as html_module, json, re, struct, xml.etree.ElementTree as E

p = argparse.ArgumentParser(description=__doc__)
p.add_argument('--reference', type=Path, required=True)
p.add_argument('--output', type=Path, default=Path(__file__).resolve().parents[1] / 'assets')
a = p.parse_args(); ref = a.reference; out = a.output; out.mkdir(parents=True, exist_ok=True)
root_html = ref / 'frame-canvas/frames.html'
helper_path = ref / 'frame-canvas/canvas.js'
enemy_html = ref / 'sprite-canvas-unpacked/DefineSprite_37_Enemy/frames.html'
xml_path = ref / 'magpie.xml'
root = E.parse(xml_path).getroot(); tags = list(root.find('tags'))
def tag_id(e):
    for key in ['shapeId','spriteId','buttonId','characterID','characterId','fontID','fontId']:
        if e.get(key) is not None: return e.get(key)
by_id = {tag_id(e):e for e in tags if re.match(r'Define(?:Shape\d*|Sprite|Button2?|Text\d*|EditText|Font\d*|Bits\w*)Tag$',e.get('type',''))}
def symbol(cid):
    t = by_id[cid].get('type')
    return ('shape' if 'Shape' in t else 'sprite' if t == 'DefineSpriteTag' else
            'button' if 'Button' in t else 'text' if 'Text' in t else 'image' if 'Bits' in t else 'character') + cid
def matrix(e):
    if e is None: return [1,0,0,1,0,0]
    values=[float(e.get(k,d)) for k,d in [('scaleX','1'),('rotateSkew0','0'),('rotateSkew1','0'),('scaleY','1'),('translateX','0'),('translateY','0')]]
    # The XML printer shortens float decimals; recover original SWF 16.16 terms.
    return [round(v*65536)/65536 if i<4 else v for i,v in enumerate(values)]
def color(e):
    if e is None: return [0,0,0,0,256,256,256,256]
    return [int(e.get(k,d)) for k,d in [('redAddTerm','0'),('greenAddTerm','0'),('blueAddTerm','0'),('alphaAddTerm','0'),('redMultTerm','256'),('greenMultTerm','256'),('blueMultTerm','256'),('alphaMultTerm','256')]]

html = root_html.read_text()
art = html[html.index('var scalingGrids'):html.index('var frame = -1')]
known = set(re.findall(r'^function (\w+)\(', art, re.M))
enemy = enemy_html.read_text()
enemy = enemy[enemy.index('var scalingGrids'):enemy.index('var frame = -1')]
for part in re.split(r'(?=^function \w+\()', enemy, flags=re.M):
    m = re.match(r'function (\w+)\(',part)
    if m and m[1] not in known:
        if m[1] == 'sprite37':
            part = part.replace('ctx.transform(1,0,0,1,37.1,87.95);', '// Export-only crop translation removed; original Enemy registration is (0,0).')
        art += '\n' + part; known.add(m[1])

helper = helper_path.read_text().replace('Filters = {};','var Filters = {};',1)
helper = re.sub(r"window.addEventListener\('load'.*?(?=function drawMorphPath)",'',helper,flags=re.S)
helper = helper.replace('    document.body.appendChild(c);\n    document.body.removeChild(c);','')
helper = helper.replace(' / 255 + this.', ' / 256 + this.')
helper = helper.replace('this.r_add + cx.r_add, this.g_add + cx.g_add, this.b_add + cx.b_add, this.a_add + cx.a_add, this.r_mult * cx.r_mult / 255, this.g_mult * cx.g_mult / 255, this.b_mult * cx.b_mult / 255, this.a_mult * cx.a_mult / 255',
 'this.r_add + cx.r_add * this.r_mult / 256, this.g_add + cx.g_add * this.g_mult / 256, this.b_add + cx.b_add * this.b_mult / 256, this.a_add + cx.a_add * this.a_mult / 256, this.r_mult * cx.r_mult / 256, this.g_mult * cx.g_mult / 256, this.b_mult * cx.b_mult / 256, this.a_mult * cx.a_mult / 256')
helper = helper.replace('this.r_mult == 255 && this.g_mult == 255 && this.b_mult == 255 && this.a_mult == 255','this.r_mult == 256 && this.g_mult == 256 && this.b_mult == 256 && this.a_mult == 256')
start = helper.index('var placeRaw = function'); end = helper.index('var transformPoint',start)
helper = helper[:start] + '''var placeRaw = function (obj, canvas, ctx, matrix, ctrans, blendMode, frame, ratio, time) {
 const parent=symbolStack[symbolStack.length-1];
 const override=hooks.place?.({obj,parent,matrix,frame,ratio,time,ctx})||{};
 if(override.skip)return;
 if(override.frame!==undefined)frame=override.frame;
 if(override.matrix)matrix=override.matrix;
 ctx.save();ctx.transform(...matrix);
 if(blendMode>1){var oldctx=ctx;var ncanvas=createCanvas(canvas.width,canvas.height);ctx=ncanvas.getContext('2d');enhanceContext(ctx);ctx.applyTransforms(oldctx._matrix);}
 const color=blendMode>1?new cxform(0,0,0,0,256,256,256,256):ctrans;
 symbolStack.push(obj);
 if(override.draw)override.draw(ctx,color,frame,ratio,time);else symbols[obj](ctx,color,frame,ratio,time);
 symbolStack.pop();
 if(blendMode>1){BlendModes.blendCanvas(ctrans.applyToImage(ncanvas),canvas,canvas,blendMode);ctx=oldctx;}
 ctx.restore();
};
''' + helper[end:]
# FFDec's opaque radial prefill loses transparent source-gradient centres.
radial = re.compile(r'(drawPath\(ctx,pathData,false\);)\n\s*ctx\.fillStyle=tocolor\([^\n]+\);\n\s*ctx\.fill\("evenodd"\);\n(\s*ctx\.save\(\);\n\s*ctx\.clip\(\);\n\s*ctx\.transform\([^\n]+\);\n\s*var grd=ctx\.createRadialGradient)')
art, radial_fixes = radial.subn(r'\1\n\2',art)
pad = re.compile(r'var pathData="([^"\n]+)";(?:(?!var pathData).)*?ctx\.transform\(([^)]+)\);(?:(?!var pathData).)*?ctx\.createRadialGradient(?:(?!var pathData).)*?ctx\.fillRect\(-16384,-16384,32768,32768\);',re.S)
def expand_pad(m):
    vals=list(map(float,re.findall(r'[-+]?(?:\d*\.)?\d+(?:[Ee][-+]?\d+)?',m[1])))
    xs,ys=vals[::2],vals[1::2]; aa,b,c,d,e,f=map(float,m[2].split(','));det=aa*d-b*c
    points=[((d*(x-e)-c*(y-f))/det,(-b*(x-e)+aa*(y-f))/det) for x in [min(xs),max(xs)] for y in [min(ys),max(ys)]]
    left=min(p[0] for p in points)-1;top=min(p[1] for p in points)-1
    box=[left,top,max(p[0] for p in points)-left+1,max(p[1] for p in points)-top+1]
    return m[0].replace('ctx.fillRect(-16384,-16384,32768,32768);','ctx.fillRect('+','.join(format(v,'.12g') for v in box)+');')
art,pad_fixes=pad.subn(expand_pad,art)
# Restore the four authored button states; FFDec Canvas exports only stateUp.
for e in tags:
    if e.get('type') != 'DefineButton2Tag': continue
    cid=e.get('buttonId');states=[]
    for index,flag in enumerate(['buttonStateUp','buttonStateOver','buttonStateDown','buttonStateHitTest']):
        commands=[]
        for record in sorted(e.find('characters'),key=lambda c:int(c.get('placeDepth'))):
            if record.get(flag)!='true':continue
            commands.append('place('+json.dumps(symbol(record.get('characterId')))+',canvas,ctx,'+json.dumps(matrix(record.find('placeMatrix')))+',ctrans.merge(new cxform('+','.join(map(str,color(record.find('colorTransform'))))+')),1,0,0,time);')
        states.append('case '+str(index)+':\n'+'\n'.join(commands)+'\nbreak;')
    body='function button'+cid+'(ctx,ctrans,frame,ratio,time){\n switch(frame%4){\n'+'\n'.join(states)+'\n}\n}'
    if 'button'+cid in known:
        art,n=re.subn(r'function button'+cid+r'\([^\n]+\)\{.*?\n\}',lambda m:body,art,count=1,flags=re.S);assert n==1

# Device text has no embedded glyphs in Flash; retain the XML content and layout.
# The reference site's font fallback is packaged separately and loaded first.
device_text={}
for e in tags:
    if e.get('type')!='DefineEditTextTag':continue
    cid=e.get('characterID');rect=e.find('bounds');rgba=e.find('textColor')
    initial=e.get('initialText','')
    if e.get('html')=='true':
        initial=re.sub(r'</p>\s*<p[^>]*>','\r',initial)
        initial=re.sub(r'<(?:br|sbr)\s*/?>','\r',initial)
        initial=html_module.unescape(re.sub(r'<[^>]*>','',initial))
    box=[float(rect.get(k))/20 for k in ['Xmin','Ymin','Xmax','Ymax']]
    rgb=[int(rgba.get(k,'255')) for k in ['red','green','blue']]+[int(rgba.get('alpha','255'))/255]
    data={'text':initial,'size':int(e.get('fontHeight'))/20,'box':box,'color':rgb,'align':int(e.get('align','0')),'wrap':e.get('wordWrap')=='true','leading':int(e.get('leading','0'))/20}
    # Msg1 starts as empty centered HTML. The original AS variable assignment
    # writes plain text and resets paragraph alignment to the default left,
    # confirmed against the original runtime's natural-ending screen.
    if cid=='107':data['plainVariableAssignment']=True
    device_text[cid]=data
    body='function text'+cid+'(ctx,ctrans,frame,ratio,time){drawDeviceText(ctx,ctrans,'+json.dumps(cid)+','+json.dumps(data,ensure_ascii=False)+');}'
    art,n=re.subn(r'function text'+cid+r'\([^\n]+\)\{.*?\n\}',lambda m:body,art,count=1,flags=re.S);assert n==1
text_helper='''function drawDeviceText(ctx,ctrans,id,data){
 const text=hooks.text?.(id)??data.text;if(!text)return;
 ctx.save();ctx.transform(20,0,0,20,0,0);ctx.font=data.size+'px QPetReference';
 ctx.textBaseline='alphabetic';ctx.fillStyle=tocolor(ctrans.apply(data.color));
 const left=data.box[0]+2,width=data.box[2]-data.box[0]-4;
 let y=data.box[1]+2+data.size*894/1024;
 const height=data.size*1050/1024+data.leading;
 const align=data.plainVariableAssignment?0:data.align;
 function line(value){let x=left;if(align===2)x+=(width-ctx.measureText(value).width)/2;else if(align===1)x+=width-ctx.measureText(value).width;ctx.fillText(value,x,y);y+=height;}
 for(const paragraph of String(text).split('\\r')){let value='';for(const ch of paragraph){if(data.wrap&&value&&ctx.measureText(value+ch).width>width){line(value);value=ch;}else value+=ch;}line(value);}
 ctx.restore();
}
'''
(out/'device-text.json').write_text(json.dumps(device_text,ensure_ascii=False,indent=2)+'\n')
# The generated image objects already embed the original SWF bitmap bytes.
image_vars=re.findall(r'var (imageObj\d+) = document.createElement\("img"\);',art)
frame_counts={}
for name in sorted(known):
    body=re.search(r'function '+name+r'\([^\n]+\)\{(.*?)(?=\nfunction |\Z)',art,re.S)[1]
    m=re.search(r'var frame_cnt = (\d+)',body)
    frame_counts[name]=int(m[1]) if m else 4 if name.startswith('button') else 1
code='''/* Original 搭鹊桥 geometry exported by JPEXS FFDec 26.4.0.
 * Build-time static source conversion; no SWF parser, ActionScript VM or dynamic code.
 * FFDec Canvas helpers are GPL-3.0; see repository licenses and THIRD_PARTY_NOTICES.
 */
export function createArtwork(canvas,hooks={}) {
const symbolStack=[];let defaultFill;
'''+helper+'\n'+text_helper+'\n'+art+'\nconst symbols={'+','.join(sorted(known))+'''};
const frameCounts='''+json.dumps(frame_counts)+''';
const color=new cxform(0,0,0,0,256,256,256,256);
const images=['''+','.join(image_vars)+'''];
return {
 prepare(ctx){if(!ctx._matrix)enhanceContext(ctx);},
 async ready(){await Promise.all(images.map(img=>img.decode?img.decode():new Promise((resolve,reject)=>{if(img.complete)resolve();else{img.onload=resolve;img.onerror=reject;}})));},
 frameCount(name){return frameCounts[name]||1;},
 draw(name,ctx,frame=0,time=0,customColor=color){symbolStack.push(name);symbols[name](ctx,customColor,frame,0,time);symbolStack.pop();},
};
}
'''
assert not re.search(r'\beval\s*\(|new\s+Function\b',code)
(out/'artwork.js').write_text(code)

# XML-only bounds / named display-list metadata for audit and native hooks.
def union(boxes):
    boxes=[b for b in boxes if b is not None]
    return [min(b[0] for b in boxes),min(b[1] for b in boxes),max(b[2] for b in boxes),max(b[3] for b in boxes)] if boxes else None
def transform(box,m):
    if box is None:return None
    aa,b,c,d,e,f=m;pts=[(aa*x+c*y+e,b*x+d*y+f) for x in [box[0],box[2]] for y in [box[1],box[3]]]
    return [min(p[0] for p in pts),min(p[1] for p in pts),max(p[0] for p in pts),max(p[1] for p in pts)]
states={};meta={}
for e in tags:
    if e.get('type')!='DefineSpriteTag':continue
    cid=e.get('spriteId');frames=[];display={};frame=1;labels={}
    for t in e.find('subTags'):
        typ=t.get('type')
        if typ=='ShowFrameTag':frames.append([dict(v) for _,v in sorted(display.items())]);frame+=1
        elif typ=='FrameLabelTag':labels[t.get('name')]=frame
        elif typ in ['PlaceObject2Tag','PlaceObject3Tag']:
            depth=int(t.get('depth'));item=dict(display.get(depth,{}))
            if t.get('placeFlagHasCharacter')=='true':item['id']=t.get('characterId')
            if t.get('placeFlagHasMatrix')=='true':item['matrix']=matrix(t.find('matrix'))
            if t.get('placeFlagHasName')=='true':item['name']=t.get('name')
            item['depth']=depth;item.setdefault('matrix',[1,0,0,1,0,0]);display[depth]=item
        elif typ=='RemoveObject2Tag':display.pop(int(t.get('depth')),None)
    states[cid]=frames;meta[cid]={'frames':frames,'labels':labels}
def bounds(cid,frame=0,seen=()):
    if cid in seen:return None
    e=by_id.get(cid)
    if e is None:return None
    for field in ['shapeBounds','bounds','textBounds']:
        rect=e.find(field)
        if rect is not None and rect.get('Xmin') is not None:return [float(rect.get(k)) for k in ['Xmin','Ymin','Xmax','Ymax']]
    if e.get('type')=='DefineSpriteTag':
        fs=states[cid]
        return union([transform(bounds(v['id'],0,seen+(cid,)),v['matrix']) for v in fs[frame%len(fs)]])
    if 'Button' in e.get('type',''):
        return union([transform(bounds(v.get('characterId'),0,seen+(cid,)),matrix(v.find('placeMatrix'))) for v in e.find('characters') if v.get('buttonStateHitTest')=='true'])
    return None
button_bounds={cid:[v/20 for v in bounds(cid)] for cid,e in by_id.items() if 'Button' in e.get('type','') and bounds(cid)}
audit_bounds={cid:[[v/20 for v in b] if (b:=bounds(cid,frame)) else None for frame in range(len(states[cid]))] for cid in ['37','44','181','158','150','199','215']}
geometric_collision={}
for state,cid,parent_frame in [('normal','44',0),('gotgood','176',5),('gotbad','180',11)]:
    placement=states['181'][parent_frame][0]
    geometric_collision['player_'+state]=[[v/20 for v in transform(bounds(cid,frame),placement['matrix'])] for frame in range(len(states[cid]))]
for typ,cid,pic_id in [('good','18','28'),('bad','33','36')]:
    outer=next(v for v in states['37'][0 if typ=='good' else 1] if v['id']==pic_id)
    inner=next(v for v in states[pic_id][0] if v['id']==cid)
    geometric_collision['enemy_'+typ]=[[v/20 for v in transform(transform(bounds(cid,frame),inner['matrix']),outer['matrix'])] for frame in range(len(states[cid]))]
(out/'geometric-collision-bounds.json').write_text(json.dumps(geometric_collision,indent=2)+'\n')
# Flash display bounds use f32 matrix arithmetic and round each transformed
# corner to twips. Keep this separate from the full precision Canvas geometry.
def f32(v):return struct.unpack('<f',struct.pack('<f',v))[0]
def dot32(a,b,c,d):return f32(f32(a*b)+f32(c*d))
def compose_twips(parent,child):
    aa,b,c,d,tx,ty=parent; ee,f,g,h,ux,uy=child
    return [dot32(aa,ee,c,f),dot32(b,ee,d,f),dot32(aa,g,c,h),dot32(b,g,d,h),round(dot32(aa,ux,c,uy))+tx,round(dot32(b,ux,d,uy))+ty]
def flash_points(cid,selected,world=(1,0,0,1,0,0)):
    if cid in states:
        for item in states[cid][selected.get(cid,0)]:
            yield from flash_points(item['id'],selected,compose_twips(world,item['matrix']))
    else:
        rect=by_id[cid].find('shapeBounds');assert rect is not None,cid
        aa,b,c,d,tx,ty=world
        for x in [int(rect.get('Xmin')),int(rect.get('Xmax'))]:
            for y in [int(rect.get('Ymin')),int(rect.get('Ymax'))]:
                yield [(round(dot32(aa,x,c,y))+tx)/20,(round(dot32(b,x,d,y))+ty)/20]
def flash_bounds(cid,selected):
    pts=list(flash_points(cid,selected))
    return [min(v[0] for v in pts),min(v[1] for v in pts),max(v[0] for v in pts),max(v[1] for v in pts)]
collision={}
for state,cid,parent_frame in [('normal','44',0),('gotgood','176',5),('gotbad','180',11)]:
    collision['player_'+state]=[flash_bounds('181',{'181':parent_frame,cid:frame}) for frame in range(len(states[cid]))]
for typ,cid,pic_id,outer_frame in [('good','18','28',0),('bad','33','36',1)]:
    collision['enemy_'+typ]=[flash_bounds('37',{'37':outer_frame,pic_id:0,cid:frame}) for frame in range(len(states[cid]))]
(out/'collision-bounds.js').write_text('/* Flash collision bounds: source shape RECTs, f32 composed matrices, ties-to-even twip corners; alpha-zero children included. Canvas artwork stays full precision. */\nexport const collisionBounds='+json.dumps(collision,separators=(',',':'))+';\n')
def all_frame_bounds(cid,seen=()):
    if cid in seen:return None
    if cid in states:
        return union([transform(all_frame_bounds(v['id'],seen+(cid,)),v['matrix']) for frame in states[cid] for v in frame])
    return bounds(cid)
cache_bounds={cid:[v/20 for v in all_frame_bounds(cid)] for cid in ['37','181','216','158']}
(out/'cache-bounds.json').write_text(json.dumps(cache_bounds,indent=2)+'\n')
(out/'instances.js').write_text('/* Build-time XML display placements; matrices remain original twips. */\nexport const instances='+json.dumps(meta,separators=(',',':'))+';\nexport const buttonBounds='+json.dumps(button_bounds,separators=(',',':'))+';\n')
(out/'bounds.json').write_text(json.dumps(audit_bounds,indent=2)+'\n')
inputs=[root_html,helper_path,enemy_html,xml_path]
embedded={m[1]:{'mime':m[2],'sha256':hashlib.sha256(base64.b64decode(m[3])).hexdigest(),'bytes':len(base64.b64decode(m[3]))} for m in re.finditer(r'(imageObj\d+)\.src="data:([^;]+);base64,([^"\n]+)";',art)}
provenance={'sourceSWF':'QPetLover/QPetGames classical_games/swf/QQ抓喜鹊.swf','sourceCommit':'cac5e2d7636da081a178a2300865eb5090649969','sourceSHA256':'94007c475f91fed70b35b848b7288faf8d7415cd9f0f0b04533bcba03d8fd3c6','tool':'JPEXS FFDec 26.4.0','stage':{'width':800,'height':600,'fps':25},'inputs':{str(v.relative_to(ref)):hashlib.sha256(v.read_bytes()).hexdigest() for v in inputs},'corrections':['Static explicit symbol dispatch replaces eval','Enemy export-only crop translation removed','CXFORM fixed-point identity 256 and additive composition corrected','All four original BUTTONRECORD states restored','Restore original XML device text and layout using separately sourced comparison-site font fallback','Recover shortened XML matrix decimals to original 16.16 terms',f'Remove {radial_fixes} opaque radial-gradient pre-fills',f'Extend {pad_fixes} PAD gradient clips'],'symbols':len(known),'embeddedImages':len(image_vars),'embeddedImageSHA256':embedded,'artworkSHA256':hashlib.sha256(code.encode()).hexdigest()}
(out/'provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'symbols':len(known),'bytes':len(code),'embeddedImages':len(image_vars)},ensure_ascii=False))
