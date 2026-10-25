import { instances, blockBounds, localBounds, symbolKinds } from './assets/instances.js';
import { frameActions } from './assets/frame-actions.js';
import { audioTimelineEvents } from './audio-assets.js';
import { createArtwork } from './assets/artwork.js';
import { idlePlayerFrame } from './rules.js';
const ROOTS = new Set(['45','49','55','767','782','817','835','857','861','938','944','947','949']);
const identity = [0,0,0,0,256,256,256,256];
const soundByFrame = new Map(audioTimelineEvents.map(e => [e.owner + ':' + e.frame, e]));
function apply(p, m) { return { x: m[0]*p.x+m[2]*p.y+m[4], y: m[1]*p.x+m[3]*p.y+m[5] }; }
function multiply(a,b) { return [a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]]; }
const inside = (p,b) => p && p.x>=b[0] && p.x<=b[2] && p.y>=b[1] && p.y<=b[3];

/** This game's finite original display lists, stopped subclips and expression
 * returns. No ActionScript parser, bytecode, or exported player is executed. */
export class BlocksVisuals {
  constructor(rules, sound) { this.rules=rules;this.sound=sound;this.tickIndex=0;this.pointer=null;this.regions=[];this.cover=this.node('944');this.controls=this.node('782');this.controls.find('exitMc').visible=false;this.go(this.controls.find('soundBtn'),1);this.bricks=[]; }
  node(id,parent=null,row=null) {
    const n={id:String(id),parent,bornTick:this.tickIndex,frame:1,playing:(instances[id]?.frames.length||1)>1,children:[],matrix:row?.matrix||[1,0,0,1,0,0],row,visible:true,find(name){return this.children.find(c=>c.row?.name===name);}};
    this.reconcile(n);this.enter(n);return n;
  }
  reconcile(n) {
    const rows=instances[n.id]?.frames[n.frame-1]||[],previous=n.children;
    n.children=rows.map(row=>{
      const old=previous.find(c=>c.row.depth===row.depth&&c.id===row.id&&c.row.born===row.born);
      if(old){old.row=row;old.matrix=row.matrix;return old;}
      return this.node(row.id,n,row);
    });
  }
  enter(n) {
    const a=frameActions[n.id];
    if(a?.stops.includes(n.frame))n.playing=false;
    const sound=soundByFrame.get(n.id+':'+n.frame);if(sound)this.sound(sound.id);
    if(a?.goto[n.frame])return this.go(n,a.goto[n.frame]);
    if(a?.returnIdle.includes(n.frame))this.go(n.parent,idlePlayerFrame(this.rules.level,this.rules.sex,this.rules.i,this.rules.player.t));
  }
  go(n,frame) {
    if(typeof frame==='string')frame=instances[n.id]?.labels[frame];
    frame=Math.min(instances[n.id]?.frames.length||1,Math.max(1,Math.trunc(frame)));
    if(!Number.isFinite(frame))throw new Error('Unknown original frame');
    n.playing=false;
    if(n.frame!==frame){n.frame=frame;this.reconcile(n);this.enter(n);}
  }
  play(n){if(n)n.playing=true;}
  advanceNode(n) {
    if(n.bornTick===this.tickIndex)return;
    const count=instances[n.id]?.frames.length||1;
    if(n.playing&&count>1){n.frame=n.frame%count+1;this.reconcile(n);this.enter(n);}
    for(const c of [...n.children])if(n.children.includes(c))this.advanceNode(c);
  }
  start() {
    this.background=this.node('857');this.player=this.node('767');this.base=this.node('861');this.hand=this.node('835');this.frame=this.node('947');this.score=this.node('938');this.warning=this.node('55');this.speed=this.node('49');this.bricks=[];this.panel=null;
    this.go(this.player,this.rules.player.frame);this.go(this.score.find('play_text'),1);this.go(this.score.find('combo'),1);this.go(this.hand.find('hand_in'),this.rules.blockFrame);this.go(this.warning,1);this.go(this.speed,1);this.updateDigits();
  }
  updateDigits(){for(const [name,value]of [['jf',this.rules.mark],['jf2',this.rules.i]]){const n=this.score.find(name);for(let i=1;i<=5;i++){this.go(n.find('w'+i),Number(String(value).at(-i)||'0')+1);}}}
  handle(e){
    if(e.type==='start')return;
    if(e.type==='hand-block'&&this.hand)this.go(this.hand.find('hand_in'),e.frame);
    if(e.type==='hand-open'){
      const b=this.node('817');this.go(b,this.rules.bricks[this.rules.i].frame);this.bricks[this.rules.i]=b;this.go(this.hand.find('hand_in'),'open');
    }
    if(e.type==='hand-play')this.play(this.hand);
    if(e.type==='player-frame')this.go(this.player,e.frame);
    if(e.type==='block-ok')this.go(this.bricks[e.index].find('mc'),'ok');
    if(e.type==='combo'){const combo=this.score.find('combo');this.go(combo.find('combo_in').find('num_mc'),e.value);this.play(combo);}
    if(e.type==='feedback'){const n=this.score.find('play_text');if(n.frame===e.frame)this.play(n.find('mc'));else this.go(n,e.frame);}
    if(e.type==='score')this.updateDigits();
    if(e.type==='speed-play')this.play(this.speed);
    if(e.type==='warning'){if(e.visible)this.play(this.warning);else this.go(this.warning,1);}
    if(e.type==='result')this.panel=this.node('45');
    if(e.type==='exit-enabled')this.controls.find('exitBtn').enabled=e.enabled;
  }
  tick(){++this.tickIndex;if(this.rules.phase==='cover')this.advanceNode(this.cover);else if(this.hand)for(const n of[this.background,this.player,this.base,this.hand,this.frame,this.score,this.warning,this.speed,...this.bricks.filter(Boolean),this.panel].filter(Boolean))this.advanceNode(n);this.advanceNode(this.controls);}
  currentBounds(){return blockBounds[this.rules.bricks[this.rules.i].frame-1];}
  hitCurrent(){
    const b=this.rules.bricks[this.rules.i],bounds=this.currentBounds().fallingBounds,t=this.rules.target,source=localBounds['949'],scale=t.width/(source[2]-source[0]);
    const target=[t.x+source[0]*scale,t.y+source[1],t.x+source[2]*scale,t.y+source[3]];
    return b.x+bounds[0]<=target[2]&&b.x+bounds[2]>=target[0]&&b.y+bounds[1]<=target[3]&&b.y+bounds[3]>=target[1];
  }
}

export async function createRenderer(canvas, visuals, {cacheStatic=true,optimizeFilters=true}={}) {
  const context=canvas.getContext('2d');let active=null,rootMatrix=null;const transformStack=[];
  const artwork=createArtwork(canvas,{
    optimizeFilters,
    text(id,ctx){if(id!=='text44')return;ctx.save();ctx.font='240px sans-serif';ctx.fillStyle='#000';ctx.textBaseline='top';ctx.fillText('你获得了'+visuals.rules.mark+'分，要加油哦~',40,40);ctx.fillText('更多游戏请登录QQ宠物官网.',40,320);ctx.restore();},
    place({obj,slot,ctx}){
      if(!active||!instances[active.id])return null;
      const row=instances[active.id].frames[active.frame-1]?.[slot],child=active.children[slot];
      if(!row||!child||child.visible===false)return{skip:true};
      if(obj!==symbolKinds[child.id])throw new Error('Blocks source drawing closure '+active.id+':'+slot+' '+obj+' != '+symbolKinds[child.id]);
      let matrix=child.matrix;
      if(active.id==='835'&&row.name==='hand_in')matrix=[...matrix.slice(0,4),visuals.rules.hand.x*20,visuals.rules.hand.y*20];
      if(active.id==='938'&&row.name==='darrow'){
        if(!visuals.rules.arrowVisible)return{skip:true};
        matrix=[...matrix.slice(0,4),Number.isFinite(visuals.rules.arrowX)?visuals.rules.arrowX*20:matrix[4],matrix[5]];
      }
      const factor=ROOTS.has(active.id)?0.05:1;
      return{matrix:matrix.map(v=>v*factor),draw(ctx,color){transformStack.push(rootMatrix);rootMatrix=multiply(rootMatrix,matrix);draw(child,ctx,color);rootMatrix=transformStack.pop();},frame:child.frame-1,time:0};
    }
  });
  function draw(n,ctx,color){
    const previous=active;active=n;
    let frame=n.frame-1;
    if(symbolKinds[n.id]?.startsWith('button')||n.row?.name==='soundBtn'||n.row?.name==='exitBtn'){
      const b=localBounds[n.id];const corners=b&&[apply({x:b[0]*20,y:b[1]*20},rootMatrix),apply({x:b[2]*20,y:b[3]*20},rootMatrix)];
      if(corners){const box=[Math.min(...corners.map(p=>p.x)),Math.min(...corners.map(p=>p.y)),Math.max(...corners.map(p=>p.x)),Math.max(...corners.map(p=>p.y))];
        const action=({'942':'start','943':'exit','42':'replay','39':'exit'})[n.id]||(n.row?.name==='soundBtn'?'sound':n.row?.name==='exitBtn'?'exit':null);if(action&&n.enabled!==false)visuals.regions.push({action,box});
        if(symbolKinds[n.id]?.startsWith('button')){if(inside(visuals.pointer,box))frame=visuals.pointer.down?2:1;else frame=0;}
      }
    }
    artwork.draw(symbolKinds[n.id],ctx,frame,0,color);active=previous;
  }
  function rootDirect(n,target,x=0,y=0,rotation=0){if(!n||n.visible===false)return;target.save();const radians=rotation*Math.PI/180,c=Math.cos(radians)*0.05,s=Math.sin(radians)*0.05;target.transform(c,s,-s,c,x,y);rootMatrix=[0.05,0,0,0.05,x,y];draw(n,target,artwork.color(identity));target.restore();}
  const rootCache=new Map();let rootCacheBytes=0;
  function staticTree(n){return (instances[n.id]?.frames.length||1)===1&&n.children.every(staticTree);}
  function treeKey(n){return [n.id,n.frame,n.visible,n.children.map(treeKey)];}
  function root(n,x=0,y=0,rotation=0){
    if(!n||n.visible===false)return;
    // Fixed backdrop/frame and the complete current HUD subtree state. One
    // entry per layer, <=32 MiB total; complete pose/color/backing/state keys.
    if(cacheStatic&&['857','947','938'].includes(n.id)&&canvas.width*canvas.height*4<=16*1024*1024&&(n.id==='938'||staticTree(n))){
      const key=JSON.stringify([canvas.width,canvas.height,context._matrix,x,y,rotation,identity,treeKey(n)]);
      let entry=rootCache.get(n.id);if(entry?.key!==key){const image=document.createElement('canvas');image.width=canvas.width;image.height=canvas.height;const target=image.getContext('2d');artwork.prepare(target);target.setTransform(...context._matrix);rootDirect(n,target,x,y,rotation);if(entry)rootCacheBytes-=entry.bytes;entry={key,image,bytes:canvas.width*canvas.height*4};rootCache.set(n.id,entry);rootCacheBytes+=entry.bytes;while(rootCacheBytes>32*1024*1024&&rootCache.size>1){const[id,old]=rootCache.entries().next().value;rootCache.delete(id);rootCacheBytes-=old.bytes;}}
      context.save();context.setTransform(1,0,0,1,0,0);context.drawImage(entry.image,0,0);context.restore();
    }else rootDirect(n,context,x,y,rotation);
  }
  artwork.prepare(context);await artwork.ready();
  return{render(){const g=visuals.rules;visuals.regions=[];context.save();context.setTransform(1,0,0,1,0,0);context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);context.transform(canvas.width/800,0,0,canvas.height/600,0,0);
    if(g.phase==='cover')root(visuals.cover);
    else if(visuals.hand){root(visuals.background,0,g.backgroundY);root(visuals.player,g.player.x,g.player.y);root(visuals.base,0,g.baseY);root(visuals.hand,289,125);if(g.warning)root(visuals.warning,635,264);for(let i=1;i<visuals.bricks.length;i++){const b=g.bricks[i];root(visuals.bricks[i],b.x,b.y,b.rotation);}root(visuals.frame);root(visuals.score);root(visuals.speed,327,495);if(visuals.panel)root(visuals.panel);}
    root(visuals.controls);context.restore();},actionAt(point){return visuals.regions.find(r=>inside(point,r.box))?.action;},artwork};
}
