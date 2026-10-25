import{createArtwork}from'./assets/artwork.js';
import{instances,buttonBounds}from'./assets/instances.js';
import{contains}from'./geometry.js';
export async function createRenderer(canvas,options={}){
 const ctx=canvas.getContext('2d');let game,active,activeColor,regions=[];const masks=new Map();
 const hooks={text(id){return game.text(id);},place({obj,slot}){
  if(!active||!instances[active.id])return;
  const row=instances[active.id].frames[active.frame-1]?.[slot];if(!row)return{skip:true};const child=active.children.find(n=>!n.dynamic&&!n.removed&&n.depth===row.depth&&n.id===row.id);if(!child||!child.visible)return{skip:true};
  if(obj!==game.kind(child.id))throw new Error('Original display closure mismatch '+active.id+':'+slot+' '+obj);
  const color=child.color?activeColor.merge(artwork.color(child.color)):activeColor;
  const filterBox=artwork.filterInputIds.has(child.id)?game.worldBounds(child)?.map((v,i)=>v/20*(i%2?canvas.height/600:canvas.width/800)):null;
  // Source3 contains only immutable shape2. Cache its filtered pixels with the
  // complete authored transform/color/backing; blinking sibling7 remains live.
  const filterKey=child.id==='3'&&options.filterCache!==false?[child.id,child.frame,child.ratio,game.worldMatrix(child),['r_add','g_add','b_add','a_add','r_mult','g_mult','b_mult','a_mult'].map(k=>color[k]),canvas.width,canvas.height]:null;
  return{filterBox,filterKey,matrix:child.matrix.map(v=>v*game.drawingFactor(active.id)),frame:child.frame-1,time:0,ratio:child.ratio,draw(context){draw(child,context,color);}};
 }};
 const artwork=createArtwork(canvas,{...hooks,filterROI:options.filterROI,zeroGlowIdentity:options.zeroGlowIdentity});
 function action(n){if(n.name==='soundBtn')return'mute';if(n.name==='start_btn'||n.name==='replay_btn')return'start';if(['more_btn','index_more_btn'].includes(n.name))return'more';if(n.name==='send_btn')return'score';return null;}
 function draw(n,context,color){if(!n||n.removed||!n.visible)return;if(n.id==='941'&&options.cull!==false){const b=game.worldBounds(n)?.map(v=>v/20),pad=32/Math.min(canvas.width/800,canvas.height/600);if(b&&(b[2]+pad<0||b[0]-pad>800||b[3]+pad<0||b[1]-pad>600))return;}const started=options.profile?performance.now():0;const old=active,oldColor=activeColor;active=n;activeColor=color;
  if(['root','leaves'].includes(n.id)){for(const c of n.children){context.save();context.transform(...c.matrix.map(v=>v*game.drawingFactor(n.id)));draw(c,context,c.color?color.merge(artwork.color(c.color)):color);context.restore();}}
  else{const kind=game.kind(n.id);if(!kind)throw new Error('Missing symbol '+n.id);let frame=n.frame-1;const name=action(n);if(name){const box=game.worldBounds(n)?.map(v=>v/20);regions.push({name,id:n.id,box,matrix:game.worldMatrix(n),button:kind.startsWith('button')});if(kind.startsWith('button')&&contains(box,game.pointer.x,game.pointer.y))frame=game.pointer.down?2:1;}
   artwork.draw(kind,context,frame,0,color,n.ratio);for(const c of n.children.filter(c=>c.dynamic&&!c.removed)){context.save();context.transform(...c.matrix.map(v=>v*game.drawingFactor(n.id)));draw(c,context,c.color?color.merge(artwork.color(c.color)):color);context.restore();}
  }active=old;activeColor=oldColor;if(options.profile)options.profile({id:n.id,name:n.name,frame:n.frame,ms:performance.now()-started});
 }
 artwork.prepare(ctx);await artwork.ready();
 function buttonMask(region){if(masks.has(region.id))return masks.get(region.id);const box=buttonBounds[region.id];if(!box)return null;const c=document.createElement('canvas');c.width=Math.max(1,Math.ceil(box[2]-box[0])+2);c.height=Math.max(1,Math.ceil(box[3]-box[1])+2);const target=c.getContext('2d');artwork.prepare(target);target.setTransform(.05,0,0,.05,1-box[0],1-box[1]);const old=active;active=null;artwork.draw('button'+region.id,target,3);active=old;const result={box,width:c.width,height:c.height,pixels:target.getImageData(0,0,c.width,c.height).data};masks.set(region.id,result);return result;}
 return{
  render(value){game=value;regions=[];ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#0099cc';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.setTransform(canvas.width/800,0,0,canvas.height/600,0,0);ctx.beginPath();ctx.rect(0,0,800,600);ctx.clip();draw(game.root,ctx,artwork.color([0,0,0,0,256,256,256,256]));ctx.restore();},
  hitTest(x,y){for(const r of[...regions].reverse()){if(!contains(r.box,x,y))continue;if(!r.button)return r.name;const mask=buttonMask(r);if(!mask)continue;const m=r.matrix,det=m[0]*m[3]-m[1]*m[2];if(!det)continue;const px=x*20-m[4],py=y*20-m[5],u=Math.floor((m[3]*px-m[2]*py)/det/20-mask.box[0]+1),v=Math.floor((-m[1]*px+m[0]*py)/det/20-mask.box[1]+1);if(u>=0&&v>=0&&u<mask.width&&v<mask.height&&mask.pixels[(v*mask.width+u)*4+3])return r.name;}return null;},
  regions(){return regions.map(({name,id,box})=>({name,id,box}));},cacheStats(){return artwork.cacheStats();}
 };
}
