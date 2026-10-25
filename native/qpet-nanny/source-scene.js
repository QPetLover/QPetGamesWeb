import{instances,localBounds}from'./assets/instances.js';
export const ROLE_IDS={GG1:'165',GG2:'114',GG3:'96',MM1:'235',MM2:'193',MM3:'178'};
export const BONUS_IDS={red:'47',blue:'44',green:'56',orange:'53',trash1:'50',trash2:'70',trash3:'72',prize:'32'};
export const GUEST_IDS={trash:'440',keyV:'460',keyC:'485',keyX:'502',keyZ:'519'};
const stopped=new Map([['22',1],['340',1],['527',1]]);
export function makeNode(id,age=1,options={}){id=String(id);age=Math.max(1,age);const count=instances[id]?.frames.length||1,stop=stopped.get(id);return{id,age,frame:stop?Math.min(age,stop):(age-1)%count+1,hold:stop?Math.max(0,age-stop):0,...options};}
export function entries(node){return instances[node.id]?.frames[node.frame-1]||[];}
export function childNode(parent,entry,view){const age=Math.max(1,parent.frame-(entry.born||1)+1+(parent.hold||0));let node=makeNode(entry.id,age,{entry,name:entry.name});
 if(parent.id==='main'){
  if(entry.name==='help')node={...node,frame:view.helpPage,hold:view.helpAge||0};
  if(entry.name==='gameSoundControl')node={...node,frame:view.muted?2:1,hold:0};
  if(entry.name==='hpCon')node={...node,scaleX:view.hpScale};
  if(GUEST_IDS[entry.name]){const state=view.guests[entry.name];node={...node,frame:state.frame,hold:state.hold||0};}
 }
 return node;
}
export function matrixFor(node,entry){const m=[...entry.matrix];if(node.scaleX!==undefined){m[0]*=node.scaleX;m[1]*=node.scaleX;}return m;}
// Fixed reference render::Matrix uses f32 arithmetic and ties-to-even twips.
const f=Math.fround,identity=[1,0,0,1,0,0];
export function roundTwips(value){value=f(value);const n=Math.floor(value),fraction=value-n;return fraction<.5?n:fraction>.5?n+1:n%2===0?n:n+1;}
const sum=(a,b,c,d)=>f(f(f(a)*f(b))+f(f(c)*f(d)));
export function multiplyMatrix(a,b){return[sum(a[0],b[0],a[2],b[1]),sum(a[1],b[0],a[3],b[1]),sum(a[0],b[2],a[2],b[3]),sum(a[1],b[2],a[3],b[3]),roundTwips(sum(a[0],b[4],a[2],b[5]))+a[4],roundTwips(sum(a[1],b[4],a[3],b[5]))+a[5]];}
export function transformBounds(b,m){if(!b)return null;const points=[];for(const x of[b[0],b[2]])for(const y of[b[1],b[3]])points.push([roundTwips(sum(m[0],x,m[2],y))+m[4],roundTwips(sum(m[1],x,m[3],y))+m[5]]);return[Math.min(...points.map(p=>p[0])),Math.min(...points.map(p=>p[1])),Math.max(...points.map(p=>p[0])),Math.max(...points.map(p=>p[1]))];}
export function bounds(node,view,matrix=identity){if(!instances[node.id])return transformBounds(localBounds[node.id]?.map(v=>Math.round(v*20))||null,matrix);const boxes=entries(node).map(e=>{const child=childNode(node,e,view);return bounds(child,view,multiplyMatrix(matrix,matrixFor(child,e)));}).filter(Boolean);return boxes.length?[Math.min(...boxes.map(b=>b[0])),Math.min(...boxes.map(b=>b[1])),Math.max(...boxes.map(b=>b[2])),Math.max(...boxes.map(b=>b[3]))]:null;}
export function roleNode(role){return makeNode(ROLE_IDS[role.kind],1,{frame:role.frame||1,hold:role.hold||0});}
export function bonusNode(bonus){return makeNode(BONUS_IDS[bonus.type],(bonus.age||0)+1);}
export function namedBounds(node,name,view,matrix=identity){const entry=entries(node).find(e=>e.name===name);if(!entry)return null;const child=childNode(node,entry,view);return bounds(child,view,multiplyMatrix(matrix,matrixFor(child,entry)));}
export function roleWidth(role){const b=bounds(roleNode(role));return b?(b[2]-b[0])/20:0;}
export function bonusWidth(bonus){const scale=bonus.scale||2,b=bounds(bonusNode(bonus),undefined,[scale,0,0,scale,0,0]);return b?(b[2]-b[0])/20:0;}
function bonusWorld(bonus,game){const scale=bonus.scale||2,stacked=game.stack.includes(bonus);return bounds(bonusNode(bonus),undefined,[scale,0,0,scale,Math.round(bonus.x*20)+(stacked?Math.round(game.basketContainer.x*20):0),Math.round(bonus.y*20)+(stacked?Math.round(game.basketContainer.y*20):0)]);}
export function collision(top,bonus,game){const a=top?bonusWorld(top,game):namedBounds(roleNode(game.role),'basket',undefined,[1,0,0,1,Math.round(game.role.x*20),Math.round(game.role.y*20)]),b=bonusWorld(bonus,game);return!!a&&!!b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];}
export function labelFor(id,frame){let name='';for(const[key,value]of Object.entries(instances[id].labels))if(value<=frame)name=key;return name;}
