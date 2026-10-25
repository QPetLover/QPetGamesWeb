import {HuntingGame,FPS} from './rules.js';
import {SourceFrameClock} from './clock.js';
import {HuntingAudio} from './audio.js';
import {createRenderer} from './visuals.js';
import {refreshPointerHit,paintScene} from './input.js';
async function boot(){
const canvas=document.querySelector('#game'),status=document.querySelector('#status'),roles=document.querySelector('#roles'),soundButton=document.querySelector('#sound');
const audio=new HuntingAudio();const game=new HuntingGame({sound:id=>audio.play(id),stream:(action,n)=>audio.frame(action,n)});let renderer;let primary=null,pressedButton=null,pointerInside=false;const panPointers=new Map();
const enableSound=()=>audio.prepare().catch(error=>{console.warn('Original audio could not start',error);});
function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(3,devicePixelRatio||1);const width=Math.max(1,Math.round(rect.width*dpr)),height=Math.max(1,Math.round(rect.height*dpr));if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;renderer?.artwork.prepare(canvas.getContext('2d'));}paintCurrent();}
function point(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*760/r.width,y:(e.clientY-r.top)*420/r.height};}
function pointerOptions(){return{inside:pointerInside,heldPan:[...panPointers.values()].at(-1)||0,rollover:node=>audio.rollover(node)};}
function paintCurrent(){if(renderer)paintScene(renderer,game,pointerOptions());}
function hover(p){game.aim(p);if(renderer)refreshPointerHit(game,renderer,pointerOptions());}

function release(e,cancel=false){if(e.pointerId!==primary)return;primary=null;game.down=false;game.release();if(!cancel&&pressedButton===game.hover){const action=game.activate(pressedButton);if(action==='roles')roles.hidden=false;if(action==='hall'){const hall=document.querySelector('#hall-link');if(hall)location.assign(hall.href);else game.replay();}}pressedButton=null;if(e.pointerType!=='mouse'){game.hover=null;game.setPan([...panPointers.values()].at(-1)||0);}paintCurrent();}
canvas.addEventListener('pointerdown',e=>{e.preventDefault();enableSound();canvas.focus();pointerInside=true;if(primary!==null)return;primary=e.pointerId;canvas.setPointerCapture(e.pointerId);hover(point(e));game.down=true;pressedButton=game.hover;game.press(game.hover);paintCurrent();});
canvas.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'||e.pointerId===primary){pointerInside=true;hover(point(e));}});
canvas.addEventListener('pointerup',e=>release(e));canvas.addEventListener('pointercancel',e=>release(e,true));canvas.addEventListener('lostpointercapture',e=>{if(e.pointerId===primary)release(e,true);});canvas.addEventListener('pointerleave',e=>{pointerInside=false;if(primary===null){game.hover=null;game.setPan([...panPointers.values()].at(-1)||0);}});
for(const button of document.querySelectorAll('[data-role]'))button.addEventListener('click',()=>{enableSound();roles.hidden=true;game.chooseRole(Number(button.dataset.role));canvas.focus();paintCurrent();});
for(const[id,direction]of[['left',-1],['right',1]]){const button=document.getElementById(id);button.addEventListener('pointerdown',e=>{e.preventDefault();enableSound();panPointers.set(e.pointerId,direction);button.setPointerCapture(e.pointerId);game.setPan(direction);});const up=e=>{panPointers.delete(e.pointerId);game.setPan([...panPointers.values()].at(-1)||0);};for(const name of['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,up);}
function clearInput(){pointerInside=false;if(primary!==null){game.release();primary=null;}game.down=false;game.hover=null;pressedButton=null;panPointers.clear();game.setPan(0);}
window.addEventListener('blur',clearInput);window.addEventListener('orientationchange',clearInput);window.addEventListener('resize',()=>{clearInput();resize();});
document.querySelector('#menu').addEventListener('click',()=>{enableSound();clearInput();roles.hidden=true;game.replay();paintCurrent();canvas.focus();});soundButton.addEventListener('click',()=>{enableSound();const on=audio.toggle();soundButton.textContent=on?'声音开':'声音关';soundButton.setAttribute('aria-pressed',String(on));});

renderer=await createRenderer(canvas,game);resize();audio.sync(game.all());const clock=new SourceFrameClock(FPS,performance.now()),frameTimes=[];
function loop(now){const steps=clock.advance(now,!document.hidden);if(!document.hidden){for(let i=0;i<steps;i++){game.tick();audio.sync(game.all());}if(steps){const before=performance.now();paintCurrent();frameTimes.push(performance.now()-before);if(frameTimes.length>1000)frameTimes.shift();}canvas.classList.toggle('play',game.scene==='play');const s=game.snapshot();status.textContent=s.rootFrame===1?'准备出发…':s.scene==='play'?'子弹 '+s.ammo+' · 得分 '+s.score+(s.reload?' · 装填中…':''):s.scene==='intro'?'准备出发…':s.scene==='result'?'本局得分：'+game.result:s.scene==='confirm'?'点击画面中的“开始”':'点击画面中的“开始”选择角色';}requestAnimationFrame(loop);}requestAnimationFrame(loop);
document.addEventListener('visibilitychange',()=>{clearInput();clock.reset(performance.now());if(document.hidden)audio.suspend();else audio.sync(game.all());});

}
boot().catch(error=>{console.error(error);document.querySelector("#status").textContent="游戏准备失败，请刷新重试。";});
