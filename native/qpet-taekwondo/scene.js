/* Fixed-game static display lists and native event/timer integration.
   This has no SWF/ABC/AS parser or dynamic method execution. */
import {instances,localBounds,buttonBounds} from './assets/instances.js';
const f=Math.fround,unit=[1,0,0,1,0,0];
const twip=v=>Number.isFinite(v)?Math.trunc(v*20)/20:0;
export function roundTwips(v){v=f(v);const n=Math.floor(v),d=v-n;return d<.5?n:d>.5?n+1:n%2===0?n:n+1;}
const sum=(a,b,c,d)=>f(f(f(a)*f(b))+f(f(c)*f(d)));
export function multiply(a,b){return[sum(a[0],b[0],a[2],b[1]),sum(a[1],b[0],a[3],b[1]),sum(a[0],b[2],a[2],b[3]),sum(a[1],b[2],a[3],b[3]),roundTwips(sum(a[0],b[4],a[2],b[5]))+a[4],roundTwips(sum(a[1],b[4],a[3],b[5]))+a[5]];}
export function matrixFor(c){const m=[...(c.entry?.matrix||unit)];if(c._x!==undefined)m[4]=Math.trunc(c._x*20);if(c._y!==undefined)m[5]=Math.trunc(c._y*20);if(c._scaleX!==undefined){const sx=Math.hypot(m[0],m[1])||1;m[0]=f(m[0]/sx*c._scaleX);m[1]=f(m[1]/sx*c._scaleX);}if(c._scaleY!==undefined){const sy=Math.hypot(m[2],m[3])||1;m[2]=f(m[2]/sy*c._scaleY);m[3]=f(m[3]/sy*c._scaleY);}return m;}
export function worldMatrix(c){return c.parent instanceof Clip?multiply(worldMatrix(c.parent),matrixFor(c)):matrixFor(c);}
export function transformBounds(b,m){if(!b)return null;const ps=[];for(const x of[b[0]*20,b[2]*20])for(const y of[b[1]*20,b[3]*20])ps.push([roundTwips(sum(m[0],x,m[2],y))+m[4],roundTwips(sum(m[1],x,m[3],y))+m[5]]);return[Math.min(...ps.map(p=>p[0])),Math.min(...ps.map(p=>p[1])),Math.max(...ps.map(p=>p[0])),Math.max(...ps.map(p=>p[1]))];}
export function bounds(c,m=worldMatrix(c)){if(!c)return null;if(!instances[c.id])return transformBounds(localBounds[c.id],m);const bs=c.childList.map(n=>bounds(n,multiply(m,matrixFor(n)))).filter(Boolean);return bs.length?[Math.min(...bs.map(b=>b[0])),Math.min(...bs.map(b=>b[1])),Math.max(...bs.map(b=>b[2])),Math.max(...bs.map(b=>b[3]))]:null;}
export function intersects(a,b){return!!a&&!!b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];}
export class SourceURL{constructor(url){this.url=url;}}
export class OriginalSound{constructor(world,id){this.world=world;this.id=id;}play(start=0,loops=0){const channel={id:this.id,stopped:false,stop:()=>{if(channel.stopped)return;channel.stopped=true;this.world.audioEvents.push({type:'stop',owner:channel});}};this.world.audioEvents.push({type:'play',id:this.id,start,loops,owner:channel});return channel;}}
export class NativeTimer{constructor(world,delay,repeatCount){this.world=world;this.delay=delay;this.repeatCount=repeatCount;this.count=0;this.active=false;this.listeners=new Set();world.timers.add(this);}addEventListener(type,fn){if(type==='timer')this.listeners.add(fn);}start(){this.active=true;this.next=this.world.now+this.delay;}stop(){this.active=false;}tick(now){while(this.active&&now+1e-7>=this.next&&this.count<this.repeatCount){this.next+=this.delay;this.count++;for(const fn of [...this.listeners])fn({type:'timer'});if(this.count>=this.repeatCount)this.active=false;}}}
export class Clip{
 constructor(world,id){this.world=world;this.id=String(id);const p=world.placement?.id===this.id?world.placement:null;this.parent=p?.parent||null;this.entry=p?.entry||{id:this.id,matrix:[...unit]};this.visible=true;this.enabled=true;this.buttonMode=false;this.playing=true;this.frame=1;this.createdFrame=world.frame;this.skipNextEnter=false;this.pendingScriptFrame=1;this.lastScriptFrame=null;this.executingScript=false;this.queuedGoto=null;this.constructed=false;this.children=new Map();this.extras=[];this.frameScripts=new Map();this.alpha=1;this._name=this.entry.name;this.refresh();world.pending.push(this);}
 intSlot(name){let value=0;Object.defineProperty(this,name,{enumerable:true,configurable:true,get:()=>value,set:v=>{value=Number(v)|0;}});}
 get stage(){return this.world.stage;}get currentFrame(){return this.frame;}
 get x(){return this._x??(this.entry.matrix?.[4]||0)/20;}set x(v){this._x=twip(Number(v));}get y(){return this._y??(this.entry.matrix?.[5]||0)/20;}set y(v){this._y=twip(Number(v));}
 get scaleX(){return this._scaleX??Math.hypot(...(this.entry.matrix||unit).slice(0,2));}set scaleX(v){this._scaleX=f(v);}get scaleY(){const m=this.entry.matrix||unit;return this._scaleY??Math.hypot(m[2],m[3]);}set scaleY(v){this._scaleY=f(v);}
 get width(){const b=bounds(this);return b?(b[2]-b[0])/20:0;}get height(){const b=bounds(this);return b?(b[3]-b[1])/20:0;}
 get childList(){return [...this.children.values(),...this.extras];}
 refresh(){const list=instances[this.id]?.frames[this.frame-1]||[],next=new Map();for(const entry of list){let child=this.children.get(entry.depth);if(!child||child.id!==entry.id||child.entry.born!==entry.born){child=this.world.makeClip(entry.id,this,entry);}else{child.entry=entry;}next.set(entry.depth,child);if(entry.name)this[entry.name]=child;}for(const[depth,child]of this.children){if(next.get(depth)!==child){if(child.entry.name&&this[child.entry.name]===child)this[child.entry.name]=null;child.parent=null;}}this.children=next;}
 addFrameScript(...args){for(let i=0;i<args.length;i+=2)this.frameScripts.set(args[i]+1,args[i+1]);}
 deferConstruct(fn){this.constructBody=fn;if(this.world.placement?.id!==this.id)this.construct();}
 construct(){if(this.constructed)return;for(const child of this.childList)child.construct();this.constructed=true;this.constructBody?.();this.constructBody=null;}
 queueFrame(){this.pendingScriptFrame=this.frame;if(this.lastScriptFrame!==this.frame)this.lastScriptFrame=null;}
 runFrame(){const frame=this.pendingScriptFrame;if(frame===null||this.executingScript)return;this.pendingScriptFrame=null;if(this.lastScriptFrame!==frame){this.lastScriptFrame=frame;this.executingScript=true;try{this.frameScripts.get(frame)?.();}finally{this.executingScript=false;}if(this.queuedGoto!==null){const target=this.queuedGoto;this.queuedGoto=null;this.applyGoto(target);if(this.frameScripts.has(target))this.world.scriptCleanup.push(this);}}}
 runScripts(){this.runFrame();for(const child of this.childList.slice())if(child.parent===this)child.runScripts();}
 gotoAndStop(frame){this.go(frame,false);}gotoAndPlay(frame){this.go(frame,true);}
 go(frame,playing){if(typeof frame==='string')frame=instances[this.id]?.labels[frame]??Number(frame);frame=Math.max(1,Math.min(instances[this.id]?.frames.length||1,Math.trunc(frame)||1));this.playing=playing;if(this.executingScript){if(frame===this.frame){this.queuedGoto=null;this.skipNextEnter=true;}else this.queuedGoto=frame;return;}this.applyGoto(frame);}
 applyGoto(frame){this.skipNextEnter=true;if(this.frame===frame)return;this.frame=frame;this.refresh();this.queueFrame();this.world.frameAudio(this); }
 play(){this.playing=true;}stop(){this.playing=false;if(this.streamActive){this.world.audioEvents.push({type:"stop",owner:this});this.streamActive=false;}}
 addEventListener(type,fn){this.world.addListener(this,type,fn);}removeEventListener(type,fn){this.world.removeListener(this,type,fn);}
 addChild(child){return this.addChildAt(child,this.childList.length);}addChildAt(child,index){if(child.parent===this){const i=this.extras.indexOf(child);if(i>=0)this.extras.splice(i,1);}else if(child.parent instanceof Clip)child.parent.removeChild(child);child.parent=this;const offset=Math.max(0,index-this.children.size);this.extras.splice(Math.min(offset,this.extras.length),0,child);return child;}
 removeChild(child){const i=this.extras.indexOf(child);if(i>=0)this.extras.splice(i,1);else{for(const[d,c]of this.children)if(c===child)this.children.delete(d);}if(child.parent===this)child.parent=null;return child;}
 hitTestObject(other){return intersects(bounds(this),other?bounds(other):null);}
 enter(inheritedSkip=false){const skip=inheritedSkip||this.skipNextEnter;this.skipNextEnter=false;for(const child of this.childList.slice().reverse())if(child.parent===this)child.enter(skip);if(skip||this.createdFrame===this.world.frame||!this.playing)return;this.frame=this.frame%(instances[this.id]?.frames.length||1)+1;this.refresh();this.queueFrame();this.world.frameAudio(this);}
 tick(){this.enter();this.world.constructPending();this.runScripts();}
}
export function authoredButton(id){return !!buttonBounds[id];}
