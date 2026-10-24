import {createArtwork} from './assets/artwork.js';
import {instances,buttonBounds,localBounds} from './assets/instances.js';
const actions={191:'start',196:'help',205:'close-help',448:'continue',567:'submit',571:'replay',577:'submit-unavailable',584:'submit'};
const stageIds=new Set(['439','518','522','529','536']);
const kind=id=>instances[id]?'sprite':buttonBounds[id]?'button':id==='230'||id==='231'||id==='562'?'text':'shape';
const inside=(x,y,r)=>x>=r.x&&y>=r.y&&x<=r.x+r.width&&y<=r.y+r.height;
/** Static original paths and display lists; explicit forest state selects their
 * authored frames. No ActionScript or bytecode is evaluated at runtime. */
export async function createRenderer(canvas){
 const ctx=canvas.getContext('2d');let view=null,entity=null,leaf=null,regions=[],plus=null,stageDrawing=false;
 function region(action,id,context,matrix,box){if(!box)return;const m=context._matrix;const ps=[];for(const x0 of [box[0]*20,box[2]*20])for(const y0 of [box[1]*20,box[3]*20]){const x=matrix[0]*x0+matrix[2]*y0+matrix[4],y=matrix[1]*x0+matrix[3]*y0+matrix[5];ps.push([(m[0]*x+m[2]*y+m[4])*760/canvas.width,(m[1]*x+m[3]*y+m[5])*420/canvas.height]);}const xs=ps.map(p=>p[0]),ys=ps.map(p=>p[1]);regions.push({action,id,x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)});}
 function drawEntity(e,context,color){if(e.removed||e.id==='236')return;if(e.color)color=color.merge(artwork.color(e.color));const previous=entity;entity=e;
  context.save();const entityMatrix=[Number.isNaN(e.sx)?0:e.sx,0,0,Number.isNaN(e.sy)?0:e.sy,e.x*20,e.y*20];
  if(e.name==='bg')region('background',e.id,context,entityMatrix,buttonBounds[e.id]);
  context.transform(...entityMatrix);
  if(e.name==='scoreShow')for(const p of view.stage.scores){plus=p;context.save();context.translate(p.x*20,p.y*20);artwork.draw('sprite141',context,p.frame-1,p.frame-1,color);context.restore();plus=null;}
  else if(e.name==='fireShow'){if(view.stage.fireFrame>1)artwork.draw('sprite437',context,view.stage.fireFrame-1,view.stage.fireFrame-1,color);}
  else {let frame=e.frame-1,time=e.age;if(e.name?.startsWith('npc'))frame=e.age%instances[e.id].frames.length;
   if(e.name?.startsWith('seed')||['qmm','qgg'].includes(e.name))time=0;
   let shade=color;if(['qmm','qgg'].includes(e.name)&&view.stage.flashFrame>1&&view.stage.flashFrame%2===0)shade=color.merge(artwork.color([255,255,255,0,256,256,256,256]));
   artwork.draw(kind(e.id)+e.id,context,frame,time,shade);
  }context.restore();entity=previous;
 }
 const artwork=createArtwork(canvas,{text(id,variable){if(variable==='gameTime')return view.gameTime;if(variable==='score')return plus?.value??view.score;if(variable==='_parent.score')return plus?.value??'';if(variable==='qq')return '';},place(args){const {obj,parent,parentFrame,slot,matrix,ctx:context}=args,id=obj.replace(/^\D+/, '');
  if(obj==='sprite236')return{skip:true};
  if(parent==='main'){
   if(stageIds.has(id)){if(!view.stage)return{skip:true};const m=[...matrix];m[5]=view.stage.y;return{matrix:m,draw(context,color){stageDrawing=true;const entries=[...view.stage.entries].sort((a,b)=>(a.lowered?10:a.depth)-(b.lowered?10:b.depth));for(const e of entries)drawEntity(e,context,color);stageDrawing=false;}};}
   if(obj==='sprite604'&&view.status==='failed')return{frame:view.rootStoppedAge%32,time:0};
   if(obj==='sprite224')return{frame:view.helpFrame-1,time:0};
   if(obj==='sprite487')return{frame:view.passFrame-1,time:0};
   if(obj==='sprite498')return{frame:Math.max(0,view.countdownFrame-1),time:0};
   if(obj==='sprite585')return{frame:view.submitFrame-1,time:0};
  }
  if(parent==='sprite498'&&obj==='sprite494')return{frame:Math.min(4,view.level-1),time:0};
  if(parent==='sprite229'&&obj==='sprite228'){const source=instances['229'].frames[0][slot];const heart=Number(source.name.slice(5));return{frame:view.heartFrames[heart]-1,time:0};}
  if(entity?.name?.startsWith('seed')){
   if(obj==='sprite239')return{frame:entity.lightFrame-1,time:0};
   if(obj.startsWith('button')){region('plant:'+entity.name,id,context,matrix,buttonBounds[id]);return{frame:0};}
  }
  if(entity?.name?.startsWith('bingo')){
   if(obj==='sprite214'||obj==='sprite268')return entity.hitterHidden?{skip:true}:null;
   if(obj==='sprite266')return{frame:entity.lightFrame-1,time:0};
   if(obj==='sprite264'&&entity.effect)return{frame:entity.effect.phase-1,time:0};
   if(parent==='sprite264'&&obj==='sprite263'&&entity.effect){const source=instances['264'].frames[entity.effect.phase-1][slot],l=entity.effect.leaves[source.depth];return{frame:l.age%10,time:0,draw(context,color){const previous=leaf;leaf=l;artwork.draw('sprite263',context,l.age%10,0,color);leaf=previous;}};}
   if(obj==='sprite262'&&leaf)return{frame:leaf.glyph-1,time:0};
  }
  if(obj==='sprite274')return{skip:true};
  if(obj.startsWith('button')){
   const action=actions[id]||(id==='235'||['501','521','525','532'].includes(id)?'background':null);if(!action){region(null,id,context,matrix,buttonBounds[id]);return{frame:0};}
   region(action,id,context,matrix,buttonBounds[id]);const hit=regions.at(-1),over=hit&&view.pointer&&inside(view.pointer.x,view.pointer.y,hit);return{frame:over?(view.pointer.down?2:1):0};
  }
 }});
 artwork.prepare(ctx);await artwork.ready();
 return {render(next){view=next;regions=[];ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(canvas.width/760,0,0,canvas.height/420,0,0);artwork.draw('main',ctx,view.rootFrame-1,view.rootStoppedAge||0);ctx.restore();},hitTest(x,y){return [...regions].reverse().find(r=>inside(x,y,r))?.action||null;},hitRegions(){return regions.map(r=>({...r}));},artwork};
}
