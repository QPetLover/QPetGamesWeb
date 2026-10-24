/** Finite native host used by the source-derived adventure chapter functions.
 * No AS source, AST, bytecode, scope evaluator, Proxy, or dynamic execution.
 * Primitive conversions below are limited to this fixed SWF6 game's values.
 */
export const sourceNumber=value=>{
 if(value===undefined||value===null)return 0;
 if(typeof value==='number')return value;
 if(typeof value==='boolean')return value?1:0;
 if(typeof value==='string'){
  if(/^0x[\da-f]+$/i.test(value))return parseInt(value.slice(2),16)|0;
  if(/^0[0-7]+$/.test(value))return parseInt(value,8)|0;
  const text=value.trimStart();
  return /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d*)?$/i.test(text)?parseFloat(text):NaN;
 }
 return NaN;
};
const numberBits=new DataView(new ArrayBuffer(8));
const shiftDecimal=(value,exponent)=>{let base=10,power=Math.abs(exponent);while(power>0){if(power&1)value=exponent>0?value*base:value/base;power=Math.floor(power/2);base*=base;}return value;};
/* Numeric formatting derived from ruffle-rs/ruffle core/src/avm1/value.rs,
 * a4f5b5256e245693bc9077ef6c6b6abc95490e7f, under the MIT option.
 * Copyright (c) 2018-2022 Ruffle LLC <ruffle@ruffle.rs> and Ruffle contributors
 * (https://github.com/ruffle-rs/ruffle/graphs/contributors).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/** The fixed chapter's number-to-text path. The archived baseline extracts 15
 * digits and preserves its old carry/exponent quirks (value.rs:621–811), rather
 * than JS's shortest 17-digit decimal conversion. This only formats numbers. */
export function sourceNumberString(value){
 if(Number.isNaN(value))return 'NaN';if(value===Infinity)return 'Infinity';if(value===-Infinity)return '-Infinity';if(value===0)return '0';
 if(value>=-2147483648&&value<=2147483647&&Number.isInteger(value))return String(value);
 const negative=value<0,buffer=negative?['-']:[];let n=Math.abs(value);
 numberBits.setFloat64(0,n,false);let binaryExponent=((numberBits.getUint32(0,false)>>>20)&0x7ff)-1023;
 if(binaryExponent===-1023){numberBits.setFloat64(0,n*1.801439850948198e16,false);binaryExponent=((numberBits.getUint32(0,false)>>>20)&0x7ff)-1023-54;}
 const approximate=binaryExponent*.301029995663981;let exponent=Math.sign(approximate)*Math.floor(Math.abs(approximate)+.5),mantissa=shiftDecimal(n,-exponent);
 if(Math.trunc(mantissa)===0){exponent--;mantissa=shiftDecimal(n,-exponent);}if(Math.trunc(mantissa)>=10){exponent++;mantissa=shiftDecimal(n,-exponent);}
 const digit=()=>{const d=Math.trunc(mantissa);mantissa=(mantissa-d)*10;return String.fromCharCode(48+(d&255));};
 if(exponent>=15){buffer.push(digit(),'.');for(let i=0;i<14;i++)buffer.push(digit());}
 else if(exponent>=0){buffer.push('0');for(let i=0;i<=exponent;i++)buffer.push(digit());buffer.push('.');for(let i=0;i<14-exponent;i++)buffer.push(digit());exponent=0;}
 else if(exponent>=-5){buffer.push('0','0','.');for(let i=0;i<-exponent-1;i++)buffer.push('0');for(let i=0;i<15;i++)buffer.push(digit());exponent=0;}
 else{buffer.push('0');const d=digit();if(d!=='0')buffer.push(d);buffer.push('.');for(let i=0;i<14;i++)buffer.push(digit());}
 if(digit()>='5')for(let i=buffer.length-1;i>=0;i--){if(buffer[i]==='9')buffer[i]='0';else if(buffer[i]>='0'){buffer[i]=String.fromCharCode(buffer[i].charCodeAt(0)+1);break;}}
 while(buffer.at(-1)==='0')buffer.pop();if(buffer.at(-1)==='.')buffer.pop();
 if(exponent!==0){let first=buffer.findIndex(c=>c!=='0');if(first<0)first=buffer.length;if(first)buffer.splice(0,first);if(!buffer.length){buffer.push('1');exponent++;}else{let last=buffer.length-1;while(last>0&&buffer[last]==='0')last--;if(last===0){exponent+=buffer.length-1;buffer.length=1;}}buffer.push('e',exponent>=0?'+':'-',String(Math.abs(exponent)));}
 const i=negative?1:0;let start=0;if(buffer[i]==='0'&&buffer[i+1]!=='.'){if(i>0)buffer[i]=buffer[i-1];start=1;}return buffer.slice(start).join('');
}
export const sourceString=value=>value===undefined?'':typeof value==='number'?sourceNumberString(value):String(value);
export const sourceBoolean=value=>typeof value==='string'?sourceNumber(value)!==0&&!Number.isNaN(sourceNumber(value)):!!value;
export const sourceAdd=(a,b)=>typeof a==='string'||typeof b==='string'?sourceString(a)+sourceString(b):sourceNumber(a)+sourceNumber(b);
export const sourceLess=(a,b)=>typeof a==='string'&&typeof b==='string'?a<b:sourceNumber(a)<sourceNumber(b);
export const sourceLessEqual=(a,b)=>typeof a==='string'&&typeof b==='string'?a<=b:sourceNumber(a)<=sourceNumber(b);
const identity=[1,0,0,1,0,0];
// Exact source/native collision audit: the fixed chapter scripts only use x/y
// as ordinary AS variables. _x/_y remain the graph's transform properties.
export const sourceNodeFieldBindings=Object.freeze({x:'x',y:'y'});
const sceneField=(target,key)=>target?.graph&&target?.vars&&Object.hasOwn(sourceNodeFieldBindings,key)?sourceNodeFieldBindings[key]:null;

export function createChapterContext({chapter,variant=0,graph,onEvent=()=>{},audio=null,pointHit=null,random=Math.random,onComplete=()=>{},onChapterRequest=()=>{},resourceProgress={loaded:0,total:0}}={}){
 function cloneDisplay(original,name,depth){if(!original||original.removed)return undefined;const copy=context.graph.attach(original.parent,original.id,sourceString(name),depth,[...original.matrix]);if(copy)copy.color=original.color?[...original.color]:null;return copy;}
 let time=0,timerId=0,lastCode=0;const timers=new Map(),keysDown=new Set(),keyListeners=new Set(),mouseListeners=new Set(),volumes=new Map(),pans=new Map();
 const context={chapter,variant,graph,audio,time:0,pointer:{x:0,y:0,down:false},drag:null,
  get root(){return context.graph?.root;},num:sourceNumber,string:sourceString,bool:sourceBoolean,add:sourceAdd,less:sourceLess,lessEqual:sourceLessEqual,
  math:Object.assign(Object.create(Math),{random}),stage:{width:760,height:420,scaleMode:'noScale'},
  now:()=>time,randomInt:max=>Math.floor(random()*Math.max(0,sourceNumber(max))),
  getBytesLoaded:()=>resourceProgress.loaded,getBytesTotal:()=>resourceProgress.total,
  getField(target,key){const field=sceneField(target,key);return field?target.vars[field]:target?.[key];},
  setField(target,key,value){if(target!==null&&target!==undefined&&(typeof target==='object'||typeof target==='function')){const field=sceneField(target,key);if(field)target.vars[field]=value;else target[key]=value;}return value;},
  deleteField(target,key){if(target===null||target===undefined)return true;const field=sceneField(target,key);if(field){delete target.vars[field];return true;}const native=new Set(['id','frame','parent','children','depth','name','visible','playing','removed','matrix','color','age','generation','uid','graph','born','enabled']);if(target.graph&&target.vars){if(native.has(key)||Object.getOwnPropertyDescriptor(Object.getPrototypeOf(target),key))return false;delete target.vars[String(key).toLowerCase()];}return delete target[key];},
  trace(...values){onEvent({type:'trace',values,chapter,variant});},
  externalLink(url,target){onEvent({type:'legacy-link',url,target,chapter,variant});},
  legacyCommand(command,args){onEvent({type:'legacy-command',command,args,chapter,variant});},
  prologueMenu(){if(chapter!==0)throw Error('Prologue menu hook used outside its fixed source');context.host.menuFrame=1;onEvent({type:'host-menu',chapter,variant,frame:1});},
  setInterval(owner,callback,delay,...args){if(typeof callback!=='function')return undefined;const id=++timerId;delay=Math.max(1,sourceNumber(delay));timers.set(id,{id,owner,callback,delay,next:time+delay,args});return id;},
  clearInterval:id=>timers.delete(id),
  setTime(now){time=sourceNumber(now);context.time=time;},
  runTimers(){for(const t of [...timers.values()].sort((a,b)=>a.next-b.next||a.id-b.id)){if(!timers.has(t.id)||t.next>time)continue;t.next=time+t.delay;t.callback.call(t.owner,...t.args);}},
  clearTimers(){timers.clear();keyListeners.clear();mouseListeners.clear();context.drag=null;keysDown.clear();},
  keys:{isDown:code=>keysDown.has(Number(code)),getCode:()=>lastCode,addListener:listener=>keyListeners.add(listener),removeListener:listener=>keyListeners.delete(listener)},
  mouse:{hide(){onEvent({type:'cursor',visible:false});},show(){onEvent({type:'cursor',visible:true});},addListener:listener=>mouseListeners.add(listener),removeListener:listener=>mouseListeners.delete(listener)},
  key(code,down){lastCode=Number(code);if(down)keysDown.add(lastCode);else keysDown.delete(lastCode);for(const listener of [...keyListeners]){const fn=listener?.[down?'onKeyDown':'onKeyUp'];if(typeof fn==='function')fn.call(listener);}},
  attach(parent,linkage,name,depth,initial){const node=context.graph.attach(parent,linkage,sourceString(name),sourceNumber(depth));if(node&&initial&&typeof initial==='object'){context.graph.defineFields(node,Object.keys(initial));for(const[k,v]of Object.entries(initial))context.setField(node,k,v);}return node;},
  // Offline compilation distinguishes the global CloneSprite opcode from the
  // MovieClip method. Only the former takes already biased engine depth.
  cloneSprite(owner,target,name,depth){const original=typeof target==='object'?target:context.graph.find(sourceString(target),owner);return cloneDisplay(original,name,sourceNumber(depth)-16384);},
  // Fixed clone_sprite copies display properties, never ordinary Object vars.
  duplicate(original,name,depth){return cloneDisplay(original,name,sourceNumber(depth));},
  removeClip(node){if(!node||node.graph!==context.graph||node.removed||node===context.root||node.depth<0||node.depth>=2130690032)return false;context.graph.remove(node);return true;},
  unload(node){if(!node||node.removed)return;for(const child of [...node.children])context.graph.remove(child);node.playing=false;node.vars.onEnterFrame=undefined;node.onEnterFrame=undefined;onEvent({type:'stream-stop',node,owner:node.uid,reason:'unload'});},
  nextDepth:node=>Math.max(0,...(node?.children||[]).filter(n=>!n.removed).map(n=>n.depth+1)),
  hitTest(node,a,b,shape=false){if(!node||node.removed)return false;if(a&&typeof a==='object')return context.graph.overlaps(node,a);if(shape&&pointHit)return !!pointHit(node,sourceNumber(a),sourceNumber(b));const box=context.graph.bounds(node);return !!box&&a>=box[0]&&a<=box[2]&&b>=box[1]&&b<=box[3];},
  relativeBounds(node,target){const box=context.graph.bounds(node);if(!box)return{xMin:0,yMin:0,xMax:0,yMax:0};if(!target)return{xMin:box[0],yMin:box[1],xMax:box[2],yMax:box[3]};const p=[context.graph.globalToLocal(target,box[0],box[1]),context.graph.globalToLocal(target,box[2],box[3])];return{xMin:Math.min(p[0].x,p[1].x),yMin:Math.min(p[0].y,p[1].y),xMax:Math.max(p[0].x,p[1].x),yMax:Math.max(p[0].y,p[1].y)};},
  localToGlobal(node,point){if(point&&node)Object.assign(point,context.graph.localToGlobal(node,sourceNumber(point.x),sourceNumber(point.y)));return point;},
  globalToLocal(node,point){if(point&&node)Object.assign(point,context.graph.globalToLocal(node,sourceNumber(point.x),sourceNumber(point.y)));return point;},
  setProperty(owner,target,property,value){const node=target&&typeof target==='object'?target:context.graph.find(sourceString(target),owner);return context.setField(node,property,value);},
  getProperty(owner,target,property){const node=target&&typeof target==='object'?target:context.graph.find(sourceString(target),owner);return node?.[property];},
  startDrag(owner,...args){let node=owner;if(typeof args[0]==='string')node=context.graph.find(args.shift(),owner);const [lockCenter,left,top,right,bottom]=args;if(!node)return;const p=context.graph.globalToLocal(node.parent,context.pointer.x,context.pointer.y);context.drag={node,startX:node.x,startY:node.y,dx:lockCenter?0:node.x-p.x,dy:lockCenter?0:node.y-p.y,bounds:args.length>=5?[left,top,right,bottom]:null};},
  stopDrag(){context.drag=null;},
  // Native pointer cancellation has no authored mouse-up. Restore the dragged
  // display position without committing the inventory's drop/combine action.
  cancelDrag(){const drag=context.drag;if(drag&&!drag.node.removed){drag.node.x=drag.startX;drag.node.y=drag.startY;}context.drag=null;},
  updatePointer(x,y,down=context.pointer.down){Object.assign(context.pointer,{x,y,down});context.graph.mouse=context.pointer;const drag=context.drag;if(drag&&!drag.node.removed){const p=context.graph.globalToLocal(drag.node.parent,x,y);let nx=p.x+drag.dx,ny=p.y+drag.dy;if(drag.bounds){nx=Math.max(drag.bounds[0],Math.min(drag.bounds[2],nx));ny=Math.max(drag.bounds[1],Math.min(drag.bounds[3],ny));}drag.node.x=nx;drag.node.y=ny;}},
  mouseEvent(name){for(const listener of [...mouseListeners])if(typeof listener?.[name]==='function')listener[name].call(listener);},
  sound(constructingOwner,target){let linkage=null;const hasTarget=target!==undefined&&target!==null,targetPath=[];if(hasTarget)for(let n=target;n&&n!==context.root&&n!==context.host;n=n.parent)targetPath.unshift(n.name);const currentTarget=()=>hasTarget?(target===context.host?context.host:context.graph.path(context.root,...targetPath)):null,getOwner=()=>currentTarget()?.uid??null,getVolume=()=>volumes.get(getOwner())??100,getPan=()=>pans.get(getOwner())??0;const handle={
   attachSound(name){linkage=name;return context.graph?.linkages[name]!==undefined;},
   start(offset=0,loops=1){const event={type:'sound',linkage,id:context.graph?.linkages[linkage],owner:getOwner(),ownerPath:hasTarget?[...targetPath]:null,constructingOwner:constructingOwner?.uid,offset:sourceNumber(offset),loops:sourceNumber(loops),volume:getVolume(),pan:getPan()};onEvent(event);audio?.handle?.(event);},
   stop(name){const event=name!==undefined?{type:'sound-stop',scope:'sound-id',linkage:name,id:context.graph?.linkages[name]}:hasTarget?{type:'sound-stop',scope:'owner',owner:getOwner(),recursive:false}:{type:'stop-sounds'};onEvent(event);audio?.handle?.(event);},
   setVolume(value){const volume=sourceNumber(value),owner=getOwner();volumes.set(owner,volume);const event={type:'sound-volume',owner,volume};onEvent(event);audio?.handle?.(event);},getVolume,
   setPan(value){const pan=sourceNumber(value),owner=getOwner();pans.set(owner,pan);const event={type:'sound-pan',owner,pan};onEvent(event);audio?.handle?.(event);},getPan,
  };return handle;},
  stopAllSounds(){const event={type:'stop-sounds'};onEvent(event);audio?.handle?.(event);},
 };
 context.host={id:'host',name:'host',uid:0,matrix:[...identity],parent:null,children:[],removed:false,vars:{},_target:'',movieNow:chapter,sex:variant,mOver(level){level=sourceNumber(level);if(level!==chapter){onEvent({type:'completion-mismatch',chapter,level});return;}onEvent({type:'complete',chapter,variant});onComplete({chapter,variant});}};
 if(chapter===0){context.host.stageNow=0;context.host.intoGame=level=>{level=sourceNumber(level);if(level!==1){onEvent({type:'chapter-request-mismatch',chapter,level});return;}const event={type:'chapter-request',chapter,variant,targetChapter:level};onEvent(event);onChapterRequest({chapter:level,variant,fromChapter:0});};Object.defineProperty(context.host,'movie',{get:()=>context.root});}
 Object.defineProperties(context.host,{_parent:{get:()=>null},_root:{get:()=>context.host},_currentframe:{get:()=>1},_totalframes:{get:()=>1}});
 return context;
}
