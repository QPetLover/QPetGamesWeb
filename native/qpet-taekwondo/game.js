import {Clip} from './scene.js';
import {GameMenu,sourceClasses} from './rules.js';
import {frameSounds,streams} from './audio-assets.js';
// Broadcast subscriptions do not keep discarded display objects alive.
// Fixed AVM2 avm2.rs stores WeakObject entries; listeners stay owner-local.
class WeakOwnerBuckets{
 constructor(){this.values=new WeakMap();this.owners=[];}
 get(owner){return this.values.get(owner);}
 set(owner,bucket){if(!this.values.has(owner))this.owners.push(new WeakRef(owner));this.values.set(owner,bucket);}
 *keys(){const alive=[];for(const ref of this.owners){const owner=ref.deref();if(owner){alive.push(ref);yield owner;}}this.owners=alive;}
}
export class TaekwondoGame{
 constructor({random=Math.random,onNavigate=()=>{}}={}){this.random=random;this.onNavigate=onNavigate;this.now=0;this.frame=0;this.accumulator=0;this.audioEvents=[];this.buckets=new WeakOwnerBuckets();this.timers=new Set();this.pending=[];this.scriptCleanup=[];this.placement=null;this.traceLog=[];this.scriptAborts=[];this.stage={stageWidth:800,stageHeight:600,focus:null,addEventListener:(type,fn)=>this.addListener(this.stage,type,fn),removeEventListener:(type,fn)=>this.removeListener(this.stage,type,fn)};this.phase='construct';this.root=this.makeClip('main',null,{id:'main',matrix:[1,0,0,1,0,0]});this.flushInitial();}
 makeClip(id,parent,entry){const saved=this.placement;this.placement={id:String(id),parent,entry};const C=sourceClasses[id]||Clip;let clip;try{clip=C===Clip?new Clip(this,id):new C(this);}finally{this.placement=saved;}return clip;}
 constructPending(){while(this.pending.length){const list=this.pending.splice(0);for(const clip of list){clip.construct();if(this.phase==='scripts'&&clip.pendingScriptFrame!==null)this.scriptCleanup.push(clip);}}}
 drainScriptCleanup(){while(this.pending.length||this.scriptCleanup.length){this.constructPending();this.scriptCleanup.shift()?.runFrame();}}
 flushInitial(){this.constructPending();this.phase='scripts';this.root.runScripts();this.drainScriptCleanup();this.constructPending();this.phase='idle';}
 addListener(owner,type,fn){let bucket=this.buckets.get(owner);if(!bucket){bucket=new Map();this.buckets.set(owner,bucket);}let listeners=bucket.get(type);if(!listeners){listeners=new Set();bucket.set(type,listeners);}listeners.add(fn);}
 hasListener(owner,type,fn){const listeners=this.buckets.get(owner)?.get(type);return fn===undefined?!!listeners?.size:!!listeners?.has(fn);}
 removeListener(owner,type,fn){this.buckets.get(owner)?.get(type)?.delete(fn);}
 dispatchOwner(owner,type,event={}){const listeners=this.buckets.get(owner)?.get(type);if(!listeners)return;for(const fn of [...listeners])fn({type,...event,target:owner,currentTarget:owner});}

 frameAudio(clip){for(const event of frameSounds[clip.id]?.[clip.frame]||[])this.audioEvents.push({type:'play',id:event.id,start:0,loops:0,owner:clip,info:event.info});const stream=streams[clip.id];if(stream){if(clip.frame===stream.blocks[0].frame&&clip.playing){this.audioEvents.push({type:'stream',id:stream.id,owner:clip,start:0,loops:0});clip.streamActive=true;}if(clip.streamActive&&!clip.playing){this.audioEvents.push({type:'stop',owner:clip});clip.streamActive=false;}}}
 trace(...values){if(this.traceLog.length<100)this.traceLog.push({frame:this.frame,values});}
 navigate(request,target){this.onNavigate({url:request?.url||String(request),target});}
 keyDown(code){this.dispatchOwner(this.stage,'keyDown',{keyCode:code});}keyUp(code){this.dispatchOwner(this.stage,'keyUp',{keyCode:code});}
 click(clip){if(!clip||clip.enabled===false||clip.visible===false)return;this.dispatchOwner(clip,'click');this.flushInitial();}
 hover(clip,on){if(clip&&clip.enabled!==false)this.dispatchOwner(clip,on?'mouseOver':'mouseOut');}
 frameTick(){this.frame++;this.phase='enter';this.root.enter();const owners=[...this.buckets.keys()];for(const owner of owners)this.dispatchOwner(owner,'enterFrame');this.phase='construct';this.constructPending();this.phase='scripts';this.root.runScripts();this.drainScriptCleanup();this.constructPending();this.phase='idle';}
 advance(elapsed){elapsed=Math.max(0,Math.min(250,elapsed));this.now+=elapsed;for(const timer of this.timers)timer.tick(this.now);this.accumulator+=elapsed;while(this.accumulator+1e-7>=1000/24){this.accumulator-=1000/24;this.frameTick();}}
 drainAudio(){return this.audioEvents.splice(0);}
 view(){return{root:this.root,frame:this.frame,now:this.now,gk:this.root.gk,time:this.root.i,life:this.root.life,score:this.root.score,guo:this.root.guo,key:this.root.ply?.keyNum,practice:this.root._LX,help:this.root.help_mc?.currentFrame===2};}
}
