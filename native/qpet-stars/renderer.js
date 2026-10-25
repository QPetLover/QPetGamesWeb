import {createArtwork} from './assets/artwork.js';
import {instances,buttonBounds,localBounds} from './assets/instances.js';
import {multiply} from './game-logic.js';
const kind=id=>instances[id]?'sprite':buttonBounds[id]?'button':['443','444','445','446','447','448','531','532','533','534','535','594','595','596','597','598'].includes(id)?'text':'shape';
const inside=(x,y,b)=>x>=b.x&&y>=b.y&&x<=b.x+b.width&&y<=b.y+b.height;
const stageEntries=instances['441'].frames[0];
const wallIds={top:'259',left1:'268',left2:'272',right:'264'};
const effectIds={'259':'top','265':'left1','269':'left2','261':'right'};
/** Original static vector paths; explicit game state selects authored frames. */
export async function createRenderer(canvas,{probeCanvas}={}){
 const ctx=canvas.getContext('2d');let view=null,entity=null,regions=[];probeCanvas??=document.createElement('canvas');probeCanvas.width=probeCanvas.height=1;const probeCtx=probeCanvas.getContext('2d',{willReadFrequently:true});
 function region(action,id,context,matrix,bounds){if(!bounds)return;const total=multiply(context._matrix,matrix);const points=[];for(const x of[bounds[0]*20,bounds[2]*20])for(const y of[bounds[1]*20,bounds[3]*20])points.push([(total[0]*x+total[2]*y+total[4])*650/canvas.width,(total[1]*x+total[3]*y+total[5])*450/canvas.height]);const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);regions.push({action,id,x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)});}
 function drawEntity(e,context,color){if(e.removed)return;context.save();context.transform(1,0,0,1,e.x*20,e.y*20);const previous=entity;entity=e;artwork.draw('sprite'+e.id,context,e.age%instances[e.id].frames.length,0,color);entity=previous;context.restore();}
 function drawStage(context,color){const list=stageEntries.map(e=>({...e,depth:e.depth-16384}));list.find(e=>e.name==='qmm_mc').depth=view.qmm.depth;for(const e of view.objects)if(!e.removed)list.push(e);list.sort((a,b)=>a.depth-b.depth);for(const e of list){if(e.kind){drawEntity(e,context,color);continue;}context.save();let matrix=e.matrix,frame=0,time=view.wallAge;if(e.name==='qmm_mc'){matrix=[1,0,0,1,view.qmm.x*20,view.qmm.y*20];frame=view.qmm.frame-1;time=view.qmm.age;}else if(e.name==='qgg_mc'){matrix=[1,0,0,1,view.qgg.x*20,view.qgg.y*20];frame=view.qgg.frame-1;time=view.qgg.age;}else if(e.name==='qggyz')matrix=[1,0,0,1,view.targetX*20,e.matrix[5]];else if(e.name==='shijiantiao_mc'){frame=view.timeFrame-1;time=0;}else if(e.name==='shangpt_mc'){frame=view.wallEffects.top;time=0;}else if(e.name==='zuopt1_mc'||e.name==='zuopt2_mc'){frame=view.wallAge%107;time=0;}context.transform(...matrix);artwork.draw(kind(e.id)+e.id,context,frame,time,e.color?color.merge(artwork.color(e.color)):color);context.restore();}}
 function place({obj,parent,slot,matrix,ctx:context}){const id=obj.replace(/^\D+/,'');if(parent==='main'){
   if(obj==='sprite251')return{frame:Math.min(105,view.rootAge),time:0};
   if(obj==='sprite441')return{draw:drawStage};
   if(obj==='sprite440')return{frame:Math.min(23,view.rootAge),time:0};
   if(obj==='sprite507')return{frame:Math.min(82,view.rootAge),time:0};
   if(obj==='sprite593')return{frame:Math.max(0,4-Math.min(4,view.djj)),time:view.rootAge};
   if(['455','460'].includes(id)){const action=id==='455'?'replay':'exit';region(action,id,context,matrix,buttonBounds[id]);const b=regions.at(-1),hover=b&&view.pointer&&inside(view.pointer.x,view.pointer.y,b);return{frame:hover?(view.pointer.down?2:1):0,time:0};}
   if(view.rootFrame===2&&['390','425','259'].includes(id))return{frame:0,time:view.rootAge};
  }
  if(parent==='sprite251'&&obj==='button104'){if(view.rootAge>=21)region('skip-intro',id,context,matrix,buttonBounds[id]);return{frame:0};}
  if(parent==='sprite251'&&obj==='sprite249'&&view.rootAge===105)region('help-start',id,context,matrix,localBounds[id]);
  if(effectIds[id])return{frame:view.rootFrame===3?view.wallEffects[effectIds[id]]:0,time:0};
  if(obj==='sprite433')return{frame:view.rootFrame===3?view.timeFrame-1:0,time:0};
  if(obj==='sprite406')return{frame:view.rootFrame===3?view.qgg.qi-1:0,time:view.rootFrame===3?view.qgg.qiAge:0};
  if(obj==='sprite415'&&parent==='sprite425'&&!view.caoji)return{skip:true};
  if(obj==='sprite288'&&parent==='sprite390'){const original=instances['390'].frames[view.qmm.frame-1]?.[slot],name=original?.name;return{frame:view.rootFrame===3?(name==='jiantou1_mc'?view.qmm.up:view.qmm.down)-1:0,time:0};}
  if(obj==='sprite295')return{frame:Math.min(view.qmm.age,49),time:0};
  if(entity?.kind==='star'&&['37','45','53','61'].includes(id))return{frame:entity.catchAge===null?0:1,time:entity.catchAge===null?entity.age:entity.catchAge};
 }
 const hooks={text(id,variable){return view?.[variable]??'';},place};const artwork=createArtwork(canvas,hooks);const probeHooks={opaque:true,place};const collisionArtwork=createArtwork(probeCanvas,probeHooks);artwork.prepare(ctx);collisionArtwork.prepare(probeCtx);await Promise.all([artwork.ready(),collisionArtwork.ready()]);
 return{render(state){view=state;regions=[];ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(canvas.width/650,0,0,canvas.height/450,0,0);artwork.draw('main',ctx,state.rootFrame-1,state.rootAge);ctx.restore();},hitTest(x,y){return[...regions].reverse().find(r=>inside(x,y,r))?.action||null;},hitRegions(){return regions.map(r=>({...r}));},
 hitShape(name,x,y,state){view=state;let id,matrix,frame=0,time=0;if(wallIds[name]){id=wallIds[name];matrix=stageEntries.find(e=>e.id===id).matrix;if(name==='top')frame=state.wallEffects.top;else if(name.startsWith('left'))frame=state.wallAge%107;}
  else{if(state.qgg.frame!==1)return false;const part=name==='paddle'?'pb':name==='paddle-left'?'pb1':'pb2';const e=instances['425'].frames[0].find(e=>e.name===part);id=e.id;matrix=multiply([1,0,0,1,state.qgg.x*20,state.qgg.y*20],e.matrix);}
  probeCtx.save();probeCtx.setTransform(1,0,0,1,0,0);probeCtx.clearRect(0,0,1,1);probeCtx.setTransform(1,0,0,1,.5-x*20,.5-y*20);probeCtx.transform(...matrix);collisionArtwork.draw('sprite'+id,probeCtx,frame,time);probeCtx.restore();return probeCtx.getImageData(0,0,1,1).data[3]>0;
 },artwork};
}
