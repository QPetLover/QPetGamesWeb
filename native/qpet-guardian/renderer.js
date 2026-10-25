import {createArtwork} from './assets/artwork.js';
import {instances,localBounds,symbolKinds} from './assets/instances.js';
const linked=new Set(['60','96','188','229']);
const inside=(p,b)=>p&&p.x>=b[0]&&p.x<=b[2]&&p.y>=b[1]&&p.y<=b[3];
/** Static FFDec vectors, display list placement and masks. Only this game's
 * explicit JS state selects frames; no SWF actions or bytecode are present. */
export async function createRenderer(canvas){let active=null,game=null;const ctx=canvas.getContext('2d'),regions=[];
 const kind=id=>id==='main'?'main':symbolKinds[id];
 function draw(n,context,color){if(n.removed)return;const previous=active;active=n;const name=kind(n.id),frame=n.frame-1;
  if(n.id==='406'||n.id==='411'){const box=game.bounds(n);regions.push({action:n.id==='406'?'replay':'exit',box});const over=inside(game.pointer,box);artwork.draw(name,context,over?(game.pointer.down?2:1):0,0,color);}else artwork.draw(name,context,frame,0,color);
  if(n.id==='395'){for(const child of n.children.filter(c=>c.dynamic&&!c.removed).sort((a,b)=>a.depth-b.depth)){context.save();context.transform(...child.matrix);draw(child,context,child.color?color.merge(artwork.color(child.color)):color);context.restore();}}
  if(n.name==='bangzhu')regions.push({action:'start',box:game.bounds(n)});
  if(n.name==='qggpb')regions.push({action:'throw',box:game.bounds(n)});
  active=previous;
 }
 const artwork=createArtwork(canvas,{text(id,variable){if(variable==='zongshu')return game.total;if(variable in game.scores)return game.scores[variable];return '';},place({obj,parent,slot,ctx:context}){
  if(!active||!instances[active.id])return null;const rows=instances[active.id]?.frames[active.frame-1]||[],row=rows[slot];if(!row)return{skip:true};const child=active.children.find(c=>!c.dynamic&&c.depth===row.depth&&c.id===row.id);
  if(!child||child.removed)return{skip:true};const expected=kind(child.id);if(obj!==expected)throw new Error('Guardian drawing closure mismatch '+active.id+':'+slot+' '+obj+'!='+expected);
  const factor=active.id==='main'||linked.has(active.id)?1/20:1;const matrix=child.matrix.map(v=>v*factor);
  return{matrix,frame:child.frame-1,time:0,draw(context,color){draw(child,context,color);}};
 }});artwork.prepare(ctx);await artwork.ready();
 return{render(next){game=next;regions.length=0;ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(canvas.width/600,0,0,canvas.height/210,0,0);draw(game.root,ctx,artwork.color([0,0,0,0,256,256,256,256]));ctx.restore();},regions(){return regions.map(r=>({...r,box:[...r.box]}));},artwork};
}
