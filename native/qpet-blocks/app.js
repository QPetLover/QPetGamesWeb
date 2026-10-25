import { BlocksRules,STAGE } from './rules.js';
import { BlocksVisuals,createRenderer } from './visuals.js';
import { BlocksAudio } from './audio.js';
const canvas=document.querySelector('#game'),loading=document.querySelector('#loading'),sound=document.querySelector('#sound'),status=document.querySelector('#status');
const audio=new BlocksAudio(),game=new BlocksRules(),timers=new Map();game.load();
let dirty=true;let renderer,visuals,playingSound=false,busy=false,activePointer=null,previous=performance.now(),accumulator=0;
function flush(){for(const e of game.drainEvents()){dirty=true;
  if(e.type==='timer-start'){clearTimeout(timers.get(e.name));timers.set(e.name,setTimeout(()=>{timers.delete(e.name);if(e.name==='warning')game.warn();if(e.name==='autoDrop')game.drop('timer');if(e.name==='loss')game.lossElapsed();flush();},e.milliseconds));}
  if(e.type==='timer-stop'){clearTimeout(timers.get(e.name));timers.delete(e.name);}
  if(e.type==='sound')audio.play(e.id);if(e.type==='sound-stop')audio.stop(e.id);
  visuals?.handle(e);
  if(e.type==='score')status.textContent='已搭 '+e.count+' 块，'+e.value+' 分';
  if(e.type==='result')status.textContent='本局 '+e.score+' 分。点击画面里的重新开始，再来一次。';
}}
async function enableSound(){if(playingSound)return;playingSound=true;try{await audio.enable();sound.textContent='关闭声音';sound.setAttribute('aria-pressed','true');if(visuals)visuals.go(visuals.controls.find('soundBtn'),1);}catch{status.textContent='声音暂时无法播放，可以继续游戏。';}finally{playingSound=false;}}
function start(){game.start({handX:-39.95,handY:19.9,collisionHeight:1});visuals.start();renderer.render();previous=performance.now();accumulator=0;dirty=true;flush();status.textContent='按空格放下积木；手机点击游戏画面。';canvas.focus({preventScroll:true});}
function quit(){game.quit();flush();for(const timer of timers.values())clearTimeout(timer);timers.clear();game.phase='cover';visuals.cover=visuals.node('944');status.textContent='';}
async function toggleSound(){dirty=true;if(audio.enabled){audio.disable();sound.textContent='开启声音';sound.setAttribute('aria-pressed','false');visuals.go(visuals.controls.find('soundBtn'),2);}else await enableSound();}
async function action(name){if(busy)return;if(name==='sound'){await toggleSound();drop('mouse');return;}busy=true;try{if(!audio.prepared)await enableSound();if(name==='start'||name==='replay')start();if(name==='exit')quit();}finally{busy=false;}}
function point(e){const b=canvas.getBoundingClientRect();return{x:(e.clientX-b.left)*800/b.width,y:(e.clientY-b.top)*600/b.height};}
function drop(source){if(busy)return;game.drop(source);flush();}
sound.addEventListener('click',toggleSound);
canvas.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();if(game.phase==='cover')action('start');else if(game.phase==='result')action('replay');else{if(!audio.prepared)enableSound();drop('keyboard');}}});
canvas.addEventListener('pointerdown',e=>{if(activePointer!==null)return;e.preventDefault();activePointer=e.pointerId;canvas.setPointerCapture(e.pointerId);visuals.pointer={...point(e),down:true};dirty=true;});
canvas.addEventListener('pointermove',e=>{if(activePointer!==null&&activePointer!==e.pointerId)return;visuals.pointer={...point(e),down:activePointer!==null};dirty=true;});
canvas.addEventListener('pointerup',e=>{if(e.pointerId!==activePointer)return;const p=point(e),down=visuals.pointer;activePointer=null;visuals.pointer={...p,down:false};dirty=true;if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(p.x<0||p.x>800||p.y<0||p.y>600)return;const name=renderer.actionAt(p);if(name&&renderer.actionAt(down)===name)action(name);else if(!name&&down){if(!audio.prepared)enableSound();drop(e.pointerType==='touch'?'touch':'mouse');}});
for(const name of ['pointercancel','lostpointercapture'])canvas.addEventListener(name,e=>{if(e.pointerId===activePointer){activePointer=null;visuals.pointer=null;}});
function cancelPointer(){dirty=true;const id=activePointer;activePointer=null;if(id!==null&&canvas.hasPointerCapture(id))canvas.releasePointerCapture(id);if(visuals)visuals.pointer=null;}
window.addEventListener('blur',cancelPointer);window.addEventListener('resize',cancelPointer);document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelPointer();});
function resize(){const dpr=Math.min(devicePixelRatio||1,2),rect=canvas.getBoundingClientRect(),w=Math.max(1,Math.round(rect.width*dpr)),h=Math.max(1,Math.round(rect.width*0.75*dpr));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;dirty=true;}}
async function boot(){try{
  visuals=new BlocksVisuals(game,id=>audio.play(id));renderer=await createRenderer(canvas,visuals);flush();loading.hidden=true;sound.disabled=false;
  new ResizeObserver(resize).observe(canvas);resize();
  function frame(now){const elapsed=Math.min(200,Math.max(0,now-previous));previous=Math.max(previous,now);accumulator+=elapsed;let steps=0;while(accumulator>=1000/STAGE.fps&&steps++<5){accumulator-=1000/STAGE.fps;
    visuals.tick();if(game.hand){game.tickPlayer();game.tickHand();for(let i=1;i<game.bricks.length;i++)game.tickBrick(i);if(game.phase==='dropping'){const b=visuals.currentBounds().landedBounds;game.crash({hit:visuals.hitCurrent(),landedWidth:b[2]-b[0]});}flush();}}
    if(steps>0||dirty){renderer.render();dirty=false;}requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}catch(error){loading.textContent='素材准备失败，请刷新重试。';console.error(error);}

}
boot();
