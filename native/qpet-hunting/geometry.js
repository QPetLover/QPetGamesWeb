import {leafBounds,buttonRecords,symbolKinds} from './assets/instances.js';
import {collisionPaths} from './assets/collision-paths.js';
const F=Math.fround;
export const identityMatrix=Object.freeze([1,0,0,1,0,0]);
export function roundEven(value){const floor=Math.floor(value),fraction=value-floor;return fraction===.5?(floor%2?floor+1:floor):Math.round(value);}
const sum=(a,b)=>F(F(a)+F(b)),difference=(a,b)=>F(F(a)-F(b)),product=(a,b)=>F(F(a)*F(b));
export function matrixMultiply(a,b){return [sum(product(a[0],b[0]),product(a[2],b[1])),sum(product(a[1],b[0]),product(a[3],b[1])),sum(product(a[0],b[2]),product(a[2],b[3])),sum(product(a[1],b[2]),product(a[3],b[3])),roundEven(sum(product(a[0],b[4]),product(a[2],b[5])))+a[4],roundEven(sum(product(a[1],b[4]),product(a[3],b[5])))+a[5]];}
export function transformPoint(m,p){return [roundEven(sum(product(m[0],p[0]),product(m[2],p[1])))+m[4],roundEven(sum(product(m[1],p[0]),product(m[3],p[1])))+m[5]];}
export function inverseMatrix(m){const det=difference(product(m[0],m[3]),product(m[1],m[2]));if(Math.abs(det)<=2**-23)return null;return [F(m[3]/det),F(m[1]/-det),F(m[2]/-det),F(m[0]/det),roundEven(F(difference(product(m[3],m[4]),product(m[2],m[5]))/-det)),roundEven(F(difference(product(m[1],m[4]),product(m[0],m[5]))/det))];}
export function transformBounds(m,b){if(!b)return null;const p=[[b[0],b[1]],[b[0],b[3]],[b[2],b[1]],[b[2],b[3]]].map(v=>transformPoint(m,v));return [Math.min(...p.map(v=>v[0])),Math.min(...p.map(v=>v[1])),Math.max(...p.map(v=>v[0])),Math.max(...p.map(v=>v[1]))];}
function union(a,b){if(!a)return b;if(!b)return a;return [Math.min(a[0],b[0]),Math.min(a[1],b[1]),Math.max(a[2],b[2]),Math.max(a[3],b[3])];}
const contains=(b,p)=>b&&p[0]>=b[0]&&p[1]>=b[1]&&p[0]<=b[2]&&p[1]<=b[3];
const intersects=(a,b)=>a&&b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];

/** This game's original button hit-state geometry. Visibility/alpha are deliberately not
 * discarded: fixed original AVM_HIT_TEST skips masks, but not invisible art.
 * Geometric fill/stroke tests never read rendered image alpha. */
export function createGeometry(context,Path=globalThis.Path2D){
 const paths=new Map();
 function localBounds(n){
  if(n.boundsRevision!==undefined&&n.boundsRevision===n.revision)return n.boundsValue;
  let bounds=leafBounds[n.id]||null;
  if(buttonRecords[n.id])for(const row of buttonRecords[n.id])if(row.buttonStateHitTest==='true')bounds=union(bounds,transformBounds(row.matrix,localBounds({id:row.characterId,children:[]})));
  for(const child of n.children||[])bounds=union(bounds,transformBounds(child.matrix,localBounds(child)));
  n.boundsRevision=n.revision;n.boundsValue=bounds;return bounds;
 }
 function leafHit(n,point){
  for(const [index,item] of(collisionPaths[n.id]||[]).entries()){
   const key=n.id+':'+index;let path=paths.get(key);if(!path){path=new Path(item.d);paths.set(key,path);}
   if(item.fill&&context.isPointInPath(path,point[0],point[1],item.fill))return true;
   if(item.stroke){context.lineWidth=item.stroke;context.lineCap=item.cap;context.lineJoin=item.join;if(context.isPointInStroke(path,point[0],point[1]))return true;}
  }
  // No bitmap collision is required by the platform tree. Text fields use
  // script bounds where present, as the fixed original EditText hit host does.
  return symbolKinds[n.id]?.startsWith('text')&&contains(leafBounds[n.id],point);
 }
 function hit(n,point,world){
  const bounds=transformBounds(world,localBounds(n));if(!contains(bounds,point))return false;
  let failedMask=0;
  if(buttonRecords[n.id])for(const row of buttonRecords[n.id])if(row.buttonStateHitTest==='true'&&hit({id:row.characterId,children:[]},point,matrixMultiply(world,row.matrix)))return true;
  for(const child of n.children||[]){
   if(child.row?.clipDepth){failedMask=hit(child,point,matrixMultiply(world,child.matrix))?0:child.row.clipDepth;continue;}
   if((child.row?.depth||0)>=failedMask&&hit(child,point,matrixMultiply(world,child.matrix)))return true;
  }
  const inverse=inverseMatrix(world);return inverse?leafHit(n,transformPoint(inverse,point)):false;
 }
 return {
  bounds:localBounds,
  
  
  point(n,x,y,world=identityMatrix){return hit(n,[Math.trunc(x*20),Math.trunc(y*20)],world);},
  compiledPaths(){return paths.size;}
 };
}
