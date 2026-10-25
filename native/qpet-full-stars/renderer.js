import {createArtwork} from './assets/artwork.js';
import {instances,buttonBounds} from './assets/instances.js';
import {contains} from './scene.js';
export async function createRenderer(canvas){
 const ctx=canvas.getContext('2d');let game,active,activeColor,maskDrawing=false,regions=[],maskBuffers=null;const hitMasks=new Map();
 const hooks={text(id){return game.text(id,active);},get opaque(){return maskDrawing;},place({obj,slot}){
  if(!active||!instances[active.id])return;
  const row=instances[active.id].frames[active.frame-1]?.[slot];if(!row)return{skip:true};
  const child=active.children.find(n=>!n.dynamic&&!n.removed&&n.depth===row.depth&&n.id===row.id);if(!child)return{skip:true};
  if(obj!==game.kind(child.id))throw new Error('Original display closure mismatch '+active.id+':'+slot+' '+obj);
  const color=child.color?activeColor.merge(artwork.color(child.color)):activeColor;
  return{matrix:child.matrix.map(v=>v*game.drawingFactor(active.id)),frame:child.frame-1,time:0,ratio:child.ratio,draw(context){draw(child,context,color);}};
 }};
 const artwork=createArtwork(canvas,hooks);
 function sourceDraw(n,context,color){
  if(n.id==='57')return; // Original empty linkage used as an unbound sound holder.
  const previous=active,previousColor=activeColor;active=n;activeColor=color;const name=game.kind(n.id);if(!name)throw new Error('Missing original symbol '+n.id);
  let f=n.frame-1;
  if(name.startsWith('button')){const box=game.bounds(n);regions.push({action:'start',id:n.id,node:n,box,matrix:game.worldMatrix(n)});if(contains(box,game.pointer.x,game.pointer.y))f=game.pointer.down?2:1;}
  artwork.draw(name,context,f,0,color,n.ratio);
  for(const c of n.children.filter(c=>c.dynamic&&!c.removed)){context.save();context.transform(...c.matrix.map(v=>v*game.drawingFactor(n.id)));draw(c,context,c.color?color.merge(artwork.color(c.color)):color);context.restore();}
  active=previous;activeColor=previousColor;
 }
 function draw(n,context,color){
  if(!n||n.removed||!n.visible||(n.maskOnly&&!maskDrawing))return;
  if(n.runtimeMask&&!maskDrawing){
   if(!maskBuffers||maskBuffers.width!==canvas.width||maskBuffers.height!==canvas.height){const a=document.createElement('canvas'),b=document.createElement('canvas');a.width=b.width=canvas.width;a.height=b.height=canvas.height;const x=a.getContext('2d'),y=b.getContext('2d');artwork.prepare(x);artwork.prepare(y);maskBuffers={a,b,x,y,width:canvas.width,height:canvas.height};}
   const{a,b,x,y}=maskBuffers;x.setTransform(1,0,0,1,0,0);y.setTransform(1,0,0,1,0,0);x.clearRect(0,0,canvas.width,canvas.height);y.clearRect(0,0,canvas.width,canvas.height);
   x.setTransform(...context._matrix);sourceDraw(n,x,color);
   const m=game.worldMatrix(n.runtimeMask),sx=canvas.width/500/20,sy=canvas.height/400/20;y.setTransform(m[0]*sx,m[1]*sy,m[2]*sx,m[3]*sy,m[4]*sx,m[5]*sy);
   maskDrawing=true;try{sourceDraw(n.runtimeMask,y,color);}finally{maskDrawing=false;}
   x.save();x.setTransform(1,0,0,1,0,0);x.globalCompositeOperation='destination-in';x.drawImage(b,0,0);x.restore();
   context.save();context.setTransform(1,0,0,1,0,0);context.drawImage(a,0,0);context.restore();return;
  }
  sourceDraw(n,context,color);
 }
 artwork.prepare(ctx);await artwork.ready();
 function hitMask(region){
  if(hitMasks.has(region.id))return hitMasks.get(region.id);const box=buttonBounds[region.id];if(!box)return null;
  const c=document.createElement('canvas');c.width=Math.max(1,Math.ceil(box[2]-box[0])+2);c.height=Math.max(1,Math.ceil(box[3]-box[1])+2);const target=c.getContext('2d');artwork.prepare(target);target.setTransform(.05,0,0,.05,1-box[0],1-box[1]);const old=active;active=null;artwork.draw('button'+region.id,target,3);active=old;
  const data={box,width:c.width,height:c.height,pixels:target.getImageData(0,0,c.width,c.height).data};hitMasks.set(region.id,data);return data;
 }
 return{
  render(next){game=next;regions=[];ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#424271';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(canvas.width/500,0,0,canvas.height/400,0,0);ctx.beginPath();ctx.rect(0,0,500,400);ctx.clip();draw(game.root,ctx,artwork.color([0,0,0,0,256,256,256,256]));ctx.restore();},
  hitTest(x,y){for(const r of[...regions].reverse()){if(!contains(r.box,x,y))continue;const m=r.matrix,det=m[0]*m[3]-m[1]*m[2];if(!det)continue;const mask=hitMask(r);if(!mask)continue;const px=x*20-m[4],py=y*20-m[5],u=Math.floor((m[3]*px-m[2]*py)/det/20-mask.box[0]+1),v=Math.floor((-m[1]*px+m[0]*py)/det/20-mask.box[1]+1);if(u>=0&&v>=0&&u<mask.width&&v<mask.height&&mask.pixels[(v*mask.width+u)*4+3])return r.action;}return null;},
  regions(){return regions.map(({action,id,box})=>({action,id,box}));},cacheStats(){return{...artwork.cacheStats(),maskBytes:maskBuffers?maskBuffers.width*maskBuffers.height*8:0};}
 };
}
