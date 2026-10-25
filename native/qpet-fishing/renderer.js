import {createArtwork} from './assets/artwork.js';
import {instances,localBounds} from './assets/instances.js';
import {rootNode,entries,childNode,matrixFor,entityNode} from './source-scene.js';
const selectedRoots=new Set(['52','61','102','126']);
const inside=(x,y,b)=>x>=b.x&&y>=b.y&&x<=b.x+b.width&&y<=b.y+b.height;
/** Source EditText variables are relative to the owning clip. The six
 * counters live directly in sprite544, whose parent is the root with score.
 * The animated total lives in 542 → 543 → 544: its _parent is 543, which has
 * no score. The fixed original therefore leaves that field blank. */
export function originalTextValue(id,variable,view){
 if(id==='468')return view.scoreText;
 if(['510','511','512','513','514','515'].includes(id)&&variable.startsWith('_parent.score.'))return view.score[variable.slice('_parent.score.'.length)]??'';
 return '';
}
export async function createRenderer(canvas){
 const ctx=canvas.getContext('2d');let view,current,regions=[];const masks=new Map();
 function region(action,id,matrix,context){
  const box=localBounds[id];if(!box)return;
  const a=context._matrix,m=[a[0]*matrix[0]+a[2]*matrix[1],a[1]*matrix[0]+a[3]*matrix[1],a[0]*matrix[2]+a[2]*matrix[3],a[1]*matrix[2]+a[3]*matrix[3],a[0]*matrix[4]+a[2]*matrix[5]+a[4],a[1]*matrix[4]+a[3]*matrix[5]+a[5]];
  const points=[];for(const x of[box[0]*20,box[2]*20])for(const y of[box[1]*20,box[3]*20])points.push([(m[0]*x+m[2]*y+m[4])*400/canvas.width,(m[1]*x+m[3]*y+m[5])*300/canvas.height]);
  const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);regions.push({action,id,x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys),matrix:m,box});
 }
 function drawNode(node,context,color){
  if(!node.visible)return;const previous=current;current=node;
  artwork.draw(node.id==='main'?'main':'sprite'+node.id,context,node.frame-1,0,color);
  if(node.id==='508')for(const e of view.entities){const dynamic=entityNode(e);context.save();context.transform(e.sx||1,0,0,1,e.x*20,e.y*20);drawNode(dynamic,context,color);context.restore();}
  current=previous;
 }
 const artwork=createArtwork(canvas,{text(id,variable){return originalTextValue(id,variable,view);},place(args){
  if(!args.obj.startsWith('sprite'))return;
  const id=args.obj.slice(6),list=entries(current);let entry=list[args.slot];
  if(String(entry?.id)!==id)entry=list.find(v=>String(v.id)===id);
  if(!entry)throw new Error('Missing original drawing placement '+current.id+' → '+id+' at slot '+args.slot);
  let node=childNode(current,entry,view);const changes=node.position||node.flip;
  let matrix=args.matrix;
  if(current.entity?.kind==='torpedo'&&current.id==='61'&&current.entity.stat==='爆炸'&&id==='60'){node={...node,position:current.entity.effect};}
  if(changes||node.position){matrix=matrixFor(node,entry);if(current.id==='main'||selectedRoots.has(current.id))matrix=matrix.map(v=>v/20);}
  if(id==='315'&&view.status==='intro'&&view.introFrame===204)region('continue-intro',id,matrix,args.ctx);
  if(id==='317'&&['playing','summary'].includes(view.status))region('replay',id,matrix,args.ctx);
  if(id==='319'&&['playing','summary'].includes(view.status))region('exit',id,matrix,args.ctx);
  return{matrix,frame:node.frame-1,time:0,skip:!node.visible,draw(context,color){drawNode(node,context,color);}};
 }});
 artwork.prepare(ctx);await artwork.ready();
 function alphaMask(id,box){if(masks.has(id))return masks.get(id);const c=document.createElement('canvas');c.width=Math.max(1,Math.ceil(box[2]-box[0])+2);c.height=Math.max(1,Math.ceil(box[3]-box[1])+2);const context=c.getContext('2d');artwork.prepare(context);context.setTransform(.05,0,0,.05,1-box[0],1-box[1]);const previous=current;current={id,frame:1,age:1,hold:0,visible:true};artwork.draw('sprite'+id,context,0,0);current=previous;const pixels=context.getImageData(0,0,c.width,c.height).data;const mask={width:c.width,height:c.height,pixels};masks.set(id,mask);return mask;}
 return{render(next){view=next;regions=[];ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(canvas.width/400,0,0,canvas.height/300,0,0);drawNode(rootNode(view),ctx);ctx.restore();},hitTest(x,y){
  for(const r of [...regions].reverse())if(inside(x,y,r)){const m=r.matrix,d=m[0]*m[3]-m[1]*m[2];if(!d)continue;const px=x*canvas.width/400-m[4],py=y*canvas.height/300-m[5];const u=(m[3]*px-m[2]*py)/d/20-r.box[0]+1,v=(-m[1]*px+m[0]*py)/d/20-r.box[1]+1,mask=alphaMask(r.id,r.box),ix=Math.floor(u),iy=Math.floor(v);if(ix>=0&&iy>=0&&ix<mask.width&&iy<mask.height&&mask.pixels[(iy*mask.width+ix)*4+3])return r.action;}
  return null;
 },hitRegions(){return regions.map(({action,id,x,y,width,height})=>({action,id,x,y,width,height}));},artwork};
}
