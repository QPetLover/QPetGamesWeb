import {PenguinChallengeRules,STAGE} from './rules.js';
import {ChallengeVisuals,createRenderer} from './visuals.js';
import {ChallengeAudio} from './audio.js';
const canvas=document.querySelector('#game'),loading=document.querySelector('#loading'),music=document.querySelector('#music'),status=document.querySelector('#status');
const audio=new ChallengeAudio(),game=new PenguinChallengeRules(),touchKeys=new Map(),physicalKeys=new Set();
let visuals,renderer,busy=false,dirty=true,previous=performance.now(),accumulator=0,activeCanvasPointer=null;
function flush(){for(const event of game.drainEvents()){visuals.handle(event);dirty=true;if(event.type==='game-over'){releaseTouch();status.textContent='本局 '+event.score+' 分。点击画面里的再玩一次，继续挑战。';}}}
async function soundReady(){if(!audio.prepared)await audio.prepare();else await audio.context.resume();}
async function toggleMusic(){if(audio.enabled){audio.pause();visuals.go(visuals.controls.find('soundBtn'),2);}else{await audio.resume();visuals.go(visuals.controls.find('soundBtn'),1);}music.textContent=audio.enabled?'关闭音乐':'开启音乐';music.setAttribute('aria-pressed',String(audio.enabled));dirty=true;}
function start(){releaseTouch();game.start();if(!visuals.player)visuals.start();else visuals.replay();flush();renderer.render();previous=performance.now();accumulator=0;dirty=true;status.textContent='方向键移动，空格跳跃；按住方向助跑后可以跳得更高。';canvas.focus({preventScroll:true});}
function exit(){releaseTouch();for(const code of physicalKeys)game.keyUp(code);physicalKeys.clear();game.playerActive=game.rootActive=false;game.result=null;visuals.player=null;visuals.cover=visuals.node('580');visuals.flushScripts();dirty=true;status.textContent='';}
async function action(name){if(busy)return;busy=true;try{if(name==='sound'){await toggleMusic();return;}await soundReady();if(name==='start'||name==='replay')start();else if(name==='exit')exit();else if(name==='hall'){const hall=document.querySelector('nav a')?.getAttribute('href');if(hall)location.href=hall;else exit();}}catch(error){console.error(error);status.textContent='声音暂时无法播放，可以继续游戏。';if(name==='start'||name==='replay')start();}finally{busy=false;}}
function key(code,down){if(!game.initialized||game.result)return;if(down)game.keyDown(code);else if(!physicalKeys.has(code)&&![...touchKeys.values()].includes(code))game.keyUp(code);}
function releaseTouch(){for(const[id,code]of touchKeys){touchKeys.delete(id);key(code,false);}document.querySelectorAll('[data-key]').forEach(b=>b.classList.remove('pressed'));if(activeCanvasPointer!==null&&canvas.hasPointerCapture(activeCanvasPointer))canvas.releasePointerCapture(activeCanvasPointer);activeCanvasPointer=null;if(visuals)visuals.pointer=null;dirty=true;}
function point(e){const rect=canvas.getBoundingClientRect();return{x:(e.clientX-rect.left)*800/rect.width,y:(e.clientY-rect.top)*600/rect.height};}
canvas.addEventListener('keydown',event=>{const code=event.keyCode;if(![32,37,39].includes(code))return;event.preventDefault();if(!visuals.player||game.result){if(code===32&&!event.repeat)action(game.result?'replay':'start');return;}if(!audio.prepared)soundReady().catch(console.error);physicalKeys.add(code);key(code,true);});
canvas.addEventListener('keyup',event=>{const code=event.keyCode;if(![32,37,39].includes(code))return;event.preventDefault();physicalKeys.delete(code);key(code,false);});
canvas.addEventListener('pointerdown',event=>{if(activeCanvasPointer!==null)return;event.preventDefault();activeCanvasPointer=event.pointerId;canvas.setPointerCapture(event.pointerId);visuals.pointer={...point(event),down:true};dirty=true;});
canvas.addEventListener('pointermove',event=>{if(activeCanvasPointer!==null&&activeCanvasPointer!==event.pointerId)return;visuals.pointer={...point(event),down:activeCanvasPointer!==null};dirty=true;});
canvas.addEventListener('pointerup',event=>{if(activeCanvasPointer!==event.pointerId)return;const p=point(event),old=visuals.pointer;activeCanvasPointer=null;visuals.pointer={...p,down:false};dirty=true;if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);if(p.x<0||p.x>800||p.y<0||p.y>600)return;const name=renderer.actionAt(p);if(name&&renderer.actionAt(old)===name)action(name);});
for(const name of ['pointercancel','lostpointercapture'])canvas.addEventListener(name,event=>{if(activeCanvasPointer===event.pointerId){activeCanvasPointer=null;visuals.pointer=null;dirty=true;}});
for(const button of document.querySelectorAll('[data-key]')){
 const code=Number(button.dataset.key);
 button.addEventListener('pointerdown',event=>{event.preventDefault();if(touchKeys.has(event.pointerId)||[...touchKeys.values()].includes(code)||!game.initialized||game.result)return;touchKeys.set(event.pointerId,code);button.setPointerCapture(event.pointerId);button.classList.add('pressed');soundReady().catch(console.error);key(code,true);});
 function release(event){if(touchKeys.get(event.pointerId)!==code)return;touchKeys.delete(event.pointerId);button.classList.remove('pressed');if(button.hasPointerCapture(event.pointerId))button.releasePointerCapture(event.pointerId);key(code,false);}
 for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,release);
}
music.addEventListener('click',()=>toggleMusic().catch(console.error));
function blur(){releaseTouch();for(const code of physicalKeys){physicalKeys.delete(code);game.keyUp(code);}}
window.addEventListener('blur',blur);window.addEventListener('resize',releaseTouch);window.addEventListener('orientationchange',releaseTouch);document.addEventListener('visibilitychange',()=>{if(document.hidden)blur();});
function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2),width=Math.max(1,Math.round(rect.width*dpr)),height=Math.max(1,Math.round(rect.width*.75*dpr));if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;dirty=true;}}
function tick(){
 visuals.beginFrame();
 if(game.initialized&&visuals.player){
  // AVM2 ENTER_FRAME buckets follow first subscription, not display depth.
  // BgStart, Bg, platforms1..8, snow, walls, two starting objects, Stage
  // (Apenguin then Index), SnowPice, MyTime. Frame scripts finish afterward.
  game.tick({afterPlatform:i=>visuals.syncPlatform(i),events:flush,afterStage:()=>visuals.afterStage()});
 }
 visuals.endFrame();
}
async function boot(){try{visuals=new ChallengeVisuals(game,id=>audio.play(id));renderer=await createRenderer(canvas,visuals);game.hitStart=(player,start)=>renderer.geometry.hitStart(visuals.player,visuals.startWood,player,start);game.hitPlatform=(platform,x,y)=>renderer.geometry.hitPlatform(visuals.platforms[game.platforms.indexOf(platform)],platform,x,y);loading.hidden=true;music.disabled=false;new ResizeObserver(resize).observe(canvas);resize();
 function frame(now){const elapsed=Math.min(200,Math.max(0,now-previous));previous=Math.max(previous,now);accumulator+=elapsed;let steps=0;while(accumulator>=1000/STAGE.fps&&steps++<5){accumulator-=1000/STAGE.fps;tick();}if(steps||dirty){renderer.render();dirty=false;}requestAnimationFrame(frame);}requestAnimationFrame(frame);
 }catch(error){loading.textContent='素材准备失败，请刷新重试。';console.error(error);}}
boot();
