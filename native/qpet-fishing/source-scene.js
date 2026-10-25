import {instances,localBounds} from './assets/instances.js';
import {morphBounds} from './assets/morph-bounds.js';

// Static drawing timelines only. Game transitions and callbacks are translated
// explicitly in game-logic.js; no source scripts or bytecode run here.
export const FPS=17,WIDTH=400,HEIGHT=300;
export const gameOrigin={x:200.4,y:149.8};
const stopped=new Map([[315,1],[379,4],[385,4],[425,4],[477,10],[481,10],[482,9],[483,9],[484,9],[485,9],[486,9],[487,9],[488,9],[493,1],[543,29]]);
const identity=[1,0,0,1,0,0];
export function makeNode(id,age=1,options={}){
 id=String(id);const count=instances[id]?.frames.length||1;age=Math.max(1,age);
 const stop=stopped.get(Number(id))??(count===1?1:null);
 const frame=stop?Math.min(stop,age):(age-1)%count+1;
 return{id,age,frame,hold:stop?Math.max(0,age-stop):0,visible:true,...options};
}
export function entries(node){return instances[node.id]?.frames[node.frame-1]||[];}
export function childNode(parent,entry,view){
 const age=Math.max(1,parent.frame-(entry.born||1)+1+parent.hold);
 let node=makeNode(entry.id,age,{name:entry.name,entry});
 const id=String(entry.id);
 if(parent.id==='main'){
  if(id==='323')node={...node,frame:view.introFrame,hold:view.introHold,age:view.introAge+1};
  if(id==='508')node={...node,frame:1,hold:view.gameAge,age:view.gameAge+1};
  if(id==='666')node={...node,frame:view.endingFrame,hold:view.statusAge,age:view.statusAge+1};
 }
 if(parent.id==='508'){
  if(id==='337')node={...node,frame:view.shipFrame,hold:0,flip:view.shipFlip};
  if(id==='341')node={...node,frame:view.submarineFrame,hold:0,flip:view.submarineFlip};
  if(id==='361')node={...node,frame:view.qmmFrame,hold:0,flip:view.qmmFlip};
  if(id==='466')node={...node,frame:view.qgg.frame,hold:view.qgg.age,age:view.qgg.age+1,visible:view.qgg.visible,position:{x:view.qgg.x,y:view.qgg.y}};
  if(id==='465')node={...node,frame:Math.min(41,view.gameAge+1),hold:Math.max(0,view.gameAge-40),visible:!view.qgg.visible};
  if(id==='489')node={...node,frame:view.bloodFrame,hold:view.bloodAge};
  if(id==='493')node={...node,frame:1,hold:view.gameAge};
  if(id==='504')node={...node,frame:view.alertFrame,hold:0,visible:view.alertFrame>1};
 }
 if(parent.id==='466'&&instances[id])node=makeNode(id,view.qgg.age+1,{entry,name:entry.name});
 if(parent.id==='493'&&id==='492')node={...node,frame:view.timerBarFrame,hold:0};
 if(parent.entity){
  node.entity=parent.entity;
  if(['52','61','102','126'].includes(parent.id)&&instances[id])node=makeNode(id,parent.entity.age+1,{entry,name:entry.name,entity:parent.entity});
 }
 return node;
}
export function matrixFor(node,entry){
 const m=[...entry.matrix];
 if(node.position){m[4]=node.position.x*20;m[5]=node.position.y*20;}
 if(node.flip){m[0]*=node.flip;m[1]*=node.flip;}
 return m;
}
export function entityNode(entity){return makeNode(entity.symbol,entity.age+1,{frame:entity.frame,hold:entity.age,entity});}
export function rootNode(view){
 const frame=view.status==='intro'?1:view.status==='playing'?2:view.status==='summary'?3:view.status==='ending'?4:6;
 return{id:'main',frame,hold:view.statusAge,age:view.statusAge+1,visible:true};
}
export function transformBounds(b,m){if(!b)return null;const p=[];for(const x of [b[0],b[2]])for(const y of [b[1],b[3]])p.push([m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5]]);return[Math.min(...p.map(p=>p[0])),Math.min(...p.map(p=>p[1])),Math.max(...p.map(p=>p[0])),Math.max(...p.map(p=>p[1]))];}
function union(list){const b=list.filter(Boolean);return b.length?[Math.min(...b.map(b=>b[0])),Math.min(...b.map(b=>b[1])),Math.max(...b.map(b=>b[2])),Math.max(...b.map(b=>b[3]))]:null;}
export function bounds(node,view){
 if(morphBounds[node.id]){const [start,end]=morphBounds[node.id],ratio=(node.entry?.ratio||0)/65535;return start.map((v,i)=>v+(end[i]-v)*ratio);}
 if(!instances[node.id])return localBounds[node.id]?.map(v=>v*20)||null;
 return union(entries(node).map(entry=>{const child=childNode(node,entry,view);return transformBounds(bounds(child,view),matrixFor(child,entry));}));
}
export function namedNode(node,name,view){const entry=entries(node).find(v=>v.name===name);if(!entry)return null;return childNode(node,entry,view);}
export function namedBounds(node,path,view){
 if(!path.length)return bounds(node,view);const child=namedNode(node,path[0],view);if(!child)return null;
 return transformBounds(namedBounds(child,path.slice(1),view),matrixFor(child,child.entry));
}
export function playerBounds(view,field){
 const qgg=makeNode('466',view.qgg.age+1,{frame:view.qgg.frame,hold:view.qgg.age});
 const b=field?namedBounds(qgg,['unit',field],view):bounds(qgg,view);
 return transformBounds(b,[1,0,0,1,view.qgg.x*20,view.qgg.y*20]);
}
export function objectBounds(entity,view,field){
 const node=entityNode(entity),b=field?namedBounds(node,field,view):bounds(node,view);
 return transformBounds(b,[entity.sx||1,0,0,1,entity.x*20,entity.y*20]);
}
export function overlaps(a,b){return!!a&&!!b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];}
export function movingOrigin(id,frame,name,base,flip=1){
 const entry=instances[String(id)].frames[frame-1].find(v=>v.name===name);
 return{x:base.x+flip*entry.matrix[4]/20,y:base.y+entry.matrix[5]/20};
}
export function walkTimelines(node,view,visit,path='root'){
 if(!instances[node.id])return;
 visit(node,path);
 for(const [slot,entry]of entries(node).entries())if(instances[entry.id])walkTimelines(childNode(node,entry,view),view,visit,path+'/'+slot+':'+entry.id+':'+(entry.born||1));
}
