import {StarsGame,STAGE} from './game-logic.js';
import {createRenderer} from './renderer.js';
import {OriginalAudio} from './audio.js';
export function installInputs({canvas,controls,game,renderer,onGesture=()=>{},windowTarget=window,now=()=>performance.now()}){
 const pointers=new Map(),owners=new Map(),held=new Map();const arrows=new Set(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown']);
 const point=e=>{const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*STAGE.width/r.width,y:(e.clientY-r.top)*STAGE.height/r.height};};
 const down=(key,owner)=>{let set=owners.get(key);if(!set)owners.set(key,set=new Set());if(set.has(owner))return;set.add(owner);if(set.size===1){game.keyDown(key);held.set(key,{next:now()+500});}for(const b of controls.querySelectorAll('[data-key]'))if(b.dataset.key===key)b.classList.add('pressed');};
 const up=(key,owner)=>{const set=owners.get(key);if(!set)return;set.delete(owner);if(set.size)return;owners.delete(key);held.delete(key);game.keyUp(key);for(const b of controls.querySelectorAll('[data-key]'))if(b.dataset.key===key)b.classList.remove('pressed');};
 const clear=()=>{for(const[key,set]of owners)for(const owner of[...set])up(key,owner);pointers.clear();game.pointer=null;game.releaseAll();};
 canvas.addEventListener('pointerdown',e=>{e.preventDefault();onGesture();canvas.focus({preventScroll:true});canvas.setPointerCapture?.(e.pointerId);const p=point(e);game.pointer={...p,down:true};pointers.set(e.pointerId,{canvas:true});const action=renderer.hitTest(p.x,p.y);if(action)game.action(action);});
 canvas.addEventListener('pointermove',e=>{const p=point(e);game.pointer={...p,down:pointers.has(e.pointerId)};});
 const release=e=>{const p=pointers.get(e.pointerId);if(p?.key)up(p.key,e.pointerId);pointers.delete(e.pointerId);if(p?.canvas)game.pointer=null;};
 for(const type of['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,release);
 for(const button of controls.querySelectorAll('[data-key]')){button.addEventListener('pointerdown',e=>{e.preventDefault();onGesture();button.setPointerCapture?.(e.pointerId);pointers.set(e.pointerId,{key:button.dataset.key});down(button.dataset.key,e.pointerId);});for(const type of['pointerup','pointercancel','lostpointercapture'])button.addEventListener(type,release);}
 windowTarget.addEventListener('keydown',e=>{if(!arrows.has(e.code))return;e.preventDefault();onGesture();if(e.repeat){game.keyDown(e.code);return;}down(e.code,'keyboard');});windowTarget.addEventListener('keyup',e=>{if(arrows.has(e.code)){e.preventDefault();up(e.code,'keyboard');}});windowTarget.addEventListener('blur',clear);
 return{clear,repeat(at){for(const[key,t]of held){const set=owners.get(key);if(set?.has('keyboard'))continue;if(at>=t.next){game.keyDown(key);t.next=at+33;}}},owners};
}
async function main(){const canvas=document.querySelector('#game'),loading=document.querySelector('#loading'),notice=document.querySelector('#notice'),soundButton=document.querySelector('#sound'),audio=new OriginalAudio();let renderer=null,audioBusy=false;
 const game=new StarsGame({onEvent(e){if(e.type==='stop-stream')audio.stop('stream295');else audio.handle(e);}});renderer=await createRenderer(canvas);game.hitShape=renderer.hitShape;loading.hidden=true;
 async function sound(){if(audioBusy)return;if(audio.enabled){audio.disable();soundButton.textContent='开启声音';soundButton.setAttribute('aria-pressed','false');return;}audioBusy=true;soundButton.disabled=true;try{await audio.enable();soundButton.textContent='关闭声音';soundButton.setAttribute('aria-pressed','true');notice.textContent='';}catch(error){notice.textContent='声音未能开启，请重试。';console.error(error);}finally{soundButton.disabled=false;audioBusy=false;}}
 soundButton.addEventListener('click',sound);const inputs=installInputs({canvas,controls:document.querySelector('#touch-controls'),game,renderer,onGesture(){if(audio.enabled&&audio.context?.state==='suspended')audio.context.resume();}});
 for(const id of['start','replay','exit'])document.querySelector('#'+id).addEventListener('click',()=>game.action(id));document.querySelector('#help').addEventListener('click',()=>{if(game.rootFrame!==1)game.gotoRoot(1);game.rootAge=105;});
 function resize(){const box=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);const w=Math.round(box.width*dpr),h=Math.round(box.height*dpr);if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}}
 let previous=performance.now(),origin=previous,accumulator=0,hiddenAt=null;const step=1000/STAGE.fps;document.addEventListener('visibilitychange',()=>{inputs.clear();const at=performance.now();if(document.hidden)hiddenAt=at;else if(hiddenAt!==null){origin+=at-hiddenAt;hiddenAt=null;}previous=at;accumulator=0;});
 function frame(now){requestAnimationFrame(frame);resize();const delta=Math.min(250,now-previous);previous=now;if(document.hidden)return;inputs.repeat(now);accumulator+=delta;while(accumulator>=step){game.tick(now-origin);accumulator-=step;}renderer.render(game);document.querySelector('#replay').hidden=![5,6].includes(game.rootFrame);document.querySelector('#exit').hidden=![3,5,6].includes(game.rootFrame);document.querySelector('#status').textContent=`${game.rootFrame===3?'游戏中':game.rootFrame===5?'成功':game.rootFrame===6?'结束':'菜单'}，第${game.djj}轮，${game.zs}分`;}
 resize();renderer.render(game);requestAnimationFrame(frame);
}
if(typeof document!=='undefined'&&document.querySelector('#game'))main().catch(error=>{document.querySelector('#loading').textContent='素材加载失败，请刷新重试。';console.error(error);});
