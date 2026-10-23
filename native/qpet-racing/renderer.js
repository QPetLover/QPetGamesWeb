import {createArtwork} from './assets/artwork.js';
import {buttonBounds,localBounds,stateBounds,animationPeriods} from './assets/instances.js';

export const layout=Object.freeze({width:760,height:420,fps:25});
const actions={button347:'start',button349:'help',button351:'quit',button353:'qpet-guide',button355:'more-games',button375:'next-help',button376:'menu',button378:'previous-help',button629:'legacy-games',button631:'redeem',button633:'menu'};
const releaseButtons=new Set([351,353,629]);
const inside=(x,y,r)=>x>=r.x&&y>=r.y&&x<=r.x+r.width&&y<=r.y+r.height;
const statusFrame={intro:1,menu:95,help:99,help2:103,countdown:107,playing:107,ended:133,ending:133};
const moverMatrix=[1,0,0,1.000946044921875,0,1];

/** Original symbols are drawn in authored coordinates. Native state explicitly
 * selects the authored timelines; this module contains no SWF/AS interpreter.
 */
export async function createRenderer(canvas,{cache=true}={}){
 const ctx=canvas.getContext('2d');let view={},regions=[],entity=null,hitPoint=null,hit=false;
 const staticLayers=new Map(),localLayers=new Map();let cacheWidth=0,cacheHeight=0,lastStatus=null;
 const offscreen=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
 const hitCanvas=offscreen(760,420),hitContext=hitCanvas.getContext('2d');
 function childOverride({obj,parent}){
  if(!entity)return null;
  if(parent==='sprite560'&&['sprite501','sprite559'].includes(obj))return {frame:(entity.stateFrame||41)-1,time:Math.max(0,(entity.animFrame||1)-1)};
  return null;
 }
 function drawStatic(name,context,color,frame=0,time=0){
  if(!cache){artwork.draw(name,context,frame,time,color);return;}
  const matrix=[...context._matrix],shade=[color.r_add,color.g_add,color.b_add,color.a_add,color.r_mult,color.g_mult,color.b_mult,color.a_mult];
  const key=name+':'+frame+':'+time+':'+matrix.join(',')+':'+shade.join(',');let layer=staticLayers.get(key);
  if(!layer){layer=offscreen(canvas.width,canvas.height);const target=layer.getContext('2d');artwork.prepare(target);target.setTransform(...matrix);artwork.draw(name,target,frame,time,color);staticLayers.set(key,layer);if(staticLayers.size>64)staticLayers.delete(staticLayers.keys().next().value);}
  context.save();context.setTransform(1,0,0,1,0,0);context.drawImage(layer,0,0);context.restore();
 }
 function drawEntity(item,context,color){
  if(item.removed||item.visible===false)return;
  entity=item;const id=String(item.symbolId),name='sprite'+id;
  const actor=['122','202','560'].includes(id);
  const symbolFrame=id==='560'?(view.sex||item.frame||2)-1:Math.max(0,((actor?item.stateFrame:item.frame)||1)-1);
  const age=actor?Math.max(0,(item.animFrame||1)-1):Math.max(0,item.age||0);
  context.save();context.transform((item.xscale??100)/100,0,0,(item.yscale??100)/100,(item.x||0)*20,(item.y||0)*20);
  if(cache&&id!=='206'){
   const stateKey=id==='560'?'560:'+(view.sex||2)+':'+(item.stateFrame||41):id+':'+(symbolFrame+1);
   const box=stateBounds[stateKey]||localBounds[id],scale=canvas.width/760;const key=[stateKey,age%(animationPeriods[stateKey]||1),scale].join(':');let layer=localLayers.get(key);
   if(!layer){
    const pad=2,left=box[0]-pad,top=box[1]-pad,width=box[2]-box[0]+pad*2,height=box[3]-box[1]+pad*2;
    layer={canvas:offscreen(Math.ceil(width*scale),Math.ceil(height*scale)),left,top,width,height};
    const target=layer.canvas.getContext('2d');artwork.prepare(target);target.setTransform(scale/20,0,0,scale/20,-left*scale,-top*scale);artwork.draw(name,target,symbolFrame,age,color);localLayers.set(key,layer);
    if(localLayers.size>24)localLayers.delete(localLayers.keys().next().value);
   }
   context.transform(20,0,0,20,0,0);context.drawImage(layer.canvas,layer.left,layer.top,layer.width,layer.height);
  }else artwork.draw(name,context,symbolFrame,age,color);
  context.restore();entity=null;
 }
 const artwork=createArtwork(canvas,{text(id,variable){
  if(variable==='timerShow')return view.timerShow;
  if(variable==='speed')return view.speed;
  if(variable==='txt')return view.text?.txt??'你获得了第'+(view.top??6)+'名，要再来一盘么？';
  if(variable==='txt2')return view.text?.txt2??'本次您共获得'+(view.score??0)+'分';
 },place(args){
  const {obj,parent,matrix,ctx:context}=args;
  const nested=childOverride(args);if(nested)return nested;
  // Symbol28 frame1 explicitly sets _visible=false in the original AS.
  // Flash direct shape hit testing still sees the authored collision geometry.
  if(obj==='sprite28')return{skip:true};
  if(obj.startsWith('button')){
   const action=actions[obj],box=buttonBounds[obj.slice(6)];if(!action||!box)return{frame:0};
   const m=context._matrix,points=[];for(const x0 of [box[0]*20,box[2]*20])for(const y0 of [box[1]*20,box[3]*20]){const x=matrix[0]*x0+matrix[2]*y0+matrix[4],y=matrix[1]*x0+matrix[3]*y0+matrix[5];points.push({x:(m[0]*x+m[2]*y+m[4])*760/canvas.width,y:(m[1]*x+m[3]*y+m[5])*420/canvas.height});}
   const left=Math.min(...points.map(p=>p.x)),top=Math.min(...points.map(p=>p.y));const buttonId=Number(obj.slice(6));const region={action,buttonId,trigger:releaseButtons.has(buttonId)?'release':'press',x:left,y:top,width:Math.max(...points.map(p=>p.x))-left,height:Math.max(...points.map(p=>p.y))-top};regions.push(region);
   const over=view.pointer&&inside(view.pointer.x,view.pointer.y,region);return{frame:over?(view.pointer.down?2:1):0};
  }
  if(parent==='main'){
   if(obj==='sprite561')return{frame:0,time:0,draw(context,color){const items=[...(view.entities||[]),view.player].filter(Boolean).sort((a,b)=>(a.depth??a.y*100)-(b.depth??b.y*100));for(const item of items)drawEntity(item,context,color);}};
   if(obj==='sprite403'){const frame=(view.background?.bg1||1)-1;return{frame,time:0,draw(context,color){
    // Source road403 has 12 authored poses and a stopped blank endLine child.
    // Cache only that normal state; the live finish-line timeline must render
    // its original changing child frame without reusing a normal-road layer.
    if((view.background?.endLine||1)>1)artwork.draw(obj,context,frame,0,color);else drawStatic(obj,context,color,frame,0);
   }};}
   if(obj==='sprite418')return{frame:(view.background?.bg2||1)-1,time:0};
   if(obj==='sprite422'){const frame=(view.items?.[matrix[4]<100?1:0]||1)-1;return{frame,time:0,draw(context,color){drawStatic(obj,context,color,frame,0);}};}
   if(obj==='sprite570'){const frame=(view.sex||2)-1;return{frame,time:0,draw(context,color){drawStatic(obj,context,color,frame,0);}};}
   if(obj==='sprite627')return{frame:(view.sex||2)-1,time:0};
   if(obj==='sprite580'){const frame=(view.top||6)-1;return{frame,time:0,draw(context,color){drawStatic(obj,context,color,frame,0);}};}
   if(obj==='sprite591'){
    const rotation=(view.speedRotation??-90)*Math.PI/180,scale=Math.hypot(matrix[0],matrix[1]);return{matrix:[Math.cos(rotation)*scale,Math.sin(rotation)*scale,-Math.sin(rotation)*scale,Math.cos(rotation)*scale,matrix[4],matrix[5]],time:0};
   }
   if(obj==='sprite622')return view.status==='countdown'?{frame:Math.max(0,(view.countdownFrame||1)-1),time:0}:{skip:true};
   if(['shape381','shape562','shape581','shape586','shape594','shape623','shape625','shape626','sprite344','shape357','shape358','shape359','shape360','shape361','shape364','shape365','shape372','shape379'].includes(obj))return{draw(context,color,frame,ratio,time){drawStatic(obj,context,color,frame,0);}};
  }
  if(parent==='sprite403'&&obj==='sprite394')return{frame:(view.background?.endLine||1)-1,time:0};
  if(parent==='sprite418'&&obj==='sprite414')return{frame:(view.background?.decor1||view.background?.roadside?.[0]||1)-1,time:0};
  if(parent==='sprite418'&&obj==='sprite417')return{frame:(view.background?.decor2||view.background?.roadside?.[1]||1)-1,time:0};
  if(parent==='sprite622'&&obj==='sprite612'){const frame=view.countdownFrame||1,age=Math.max(0,(frame-9)%18);return{frame:Math.max(0,(view.countdownCC||1)-1),time:age};}
  if(parent==='sprite612'&&obj==='sprite608')return{frame:Math.min(14,Math.max(0,((view.countdownFrame||1)-9)%18)),time:0};
 }});
 const collisionArtwork=createArtwork(hitCanvas,{place:childOverride});
 artwork.prepare(ctx);collisionArtwork.prepare(hitContext);
 // Query each original filled/stroked path directly, with the complete source
 // transforms. This keeps alpha-zero hit geometry and avoids screenshot masks.
 hitContext.fill=function(rule='nonzero'){if(hitPoint&&this.isPointInPath(hitPoint.x,hitPoint.y,rule))hit=true;};
 hitContext.stroke=function(){if(hitPoint&&this.isPointInStroke(hitPoint.x,hitPoint.y))hit=true;};
 await Promise.all([artwork.ready(),collisionArtwork.ready()]);
 return{
  render(nextView){view=nextView;regions=[];if(lastStatus!==view.status){staticLayers.clear();localLayers.clear();lastStatus=view.status;}
   if(cacheWidth!==canvas.width||cacheHeight!==canvas.height){cacheWidth=canvas.width;cacheHeight=canvas.height;staticLayers.clear();localLayers.clear();}
   ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(canvas.width/760,0,0,canvas.height/420,0,0);
   const frame=(view.rootFrame||statusFrame[view.status]||95)-1;artwork.draw('main',ctx,frame,view.status==='intro'?0:Math.max(0,view.sceneAge||0));ctx.restore();
  },
  hitTest(x,y){return[...regions].reverse().find(r=>inside(x,y,r))?.action||null;},
  hitRegions(){return regions.map(r=>({...r}));},needsAnimation(){return true;},
  hitTestNPC(snapshot,x,y){
   if(!snapshot||snapshot.removed)return false;entity=snapshot;hit=false;hitPoint={x,y};
   hitContext.save();hitContext.setTransform(.05,0,0,.05,0,0);hitContext.transform(...moverMatrix);hitContext.transform((snapshot.xscale??100)/100,0,0,(snapshot.yscale??100)/100,(snapshot.x||0)*20,(snapshot.y||0)*20);
   collisionArtwork.draw('sprite'+snapshot.symbolId,hitContext,(snapshot.stateFrame||snapshot.frame||1)-1,Math.max(0,(snapshot.animFrame||1)-1));hitContext.restore();hitPoint=null;entity=null;return hit;
  },artwork,
 };
}
