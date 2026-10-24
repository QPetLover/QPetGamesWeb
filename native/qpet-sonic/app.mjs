import { SonicGame, FPS, STAGES } from './engine.mjs';
import { createRenderer } from './renderer.mjs';
import { GameAudio } from './audio.mjs';

const canvas=document.getElementById('game'),status=document.getElementById('status');
const controls=['start','pause','sound','help'].map(id=>document.getElementById(id));
const audio=new GameAudio();let renderer,ready=false,paused=false,accumulator=0,last=0,pressedButton=null;
let best=0;try{best=Number(localStorage.getItem('qpet-sonic-substitute-best-v1'))||0;}catch{}
document.getElementById('best').textContent=best;
const game=new SonicGame((event,data)=>{
  if(event==='stage'){audio.stopAll();document.getElementById('hint').textContent=STAGES[data.level-1]+' · 方向键可组合操作';}
  if(event==='sound')audio.sound(data.id);
  if(event==='music')audio.playMusic(data.level,data.offset);
  if(event==='hurt'){game.soundPosition=audio.pauseMusic()*1000;}
  if(event==='over'||event==='clear') {
    best=Math.max(best,game.score);document.getElementById('best').textContent=best;
    try{localStorage.setItem('qpet-sonic-substitute-best-v1',String(best));}catch{}
  }
});
const activeInputs=new Map();
function input(source,code,down) {
  if(down)activeInputs.set(source,code);else activeInputs.delete(source);
  game.key(code,[...activeInputs.values()].includes(code));
  document.querySelectorAll('[data-key]').forEach(button=>button.classList.toggle('held',[...activeInputs.values()].includes(Number(button.dataset.key))));
}
function releaseInputs(){activeInputs.clear();game.releaseAll();document.querySelectorAll('.held').forEach(button=>button.classList.remove('held'));}
async function begin(level=1,keep=false){if(!ready)return;await audio.unlock();releaseInputs();paused=false;document.getElementById('paused').hidden=true;document.getElementById('pause').textContent='暂停';renderer.setHelp(false);game.start(level,keep);accumulator=0;last=performance.now();canvas.focus({preventScroll:true});}
function menu(){audio.stopAll();releaseInputs();game.phase='menu';game.score=0;game.level=1;game.tick=0;renderer.setHelp(false);paused=false;document.getElementById('paused').hidden=true;document.getElementById('pause').textContent='暂停';}
function setPaused(value){
  if(['menu','over','clear','victory'].includes(game.phase))return;
  paused=value;document.getElementById('paused').hidden=!value;document.getElementById('pause').textContent=value?'继续':'暂停';
  if(value){releaseInputs();game.soundPosition=audio.pauseMusic()*1000;}
  else{audio.unlock();if(game.phase==='playing')audio.playMusic(game.level,game.soundPosition/1000);last=performance.now();accumulator=0;}
}
async function activate(id){
  await audio.unlock();
  if(id===167)await begin();
  else if(id===172)renderer.setHelp(true);
  else if(id===214)renderer.setHelp(false);
  else if(id===717)await begin(game.level+1,true);
  else if([700,708,808].includes(id))menu();
  else if(id===185)document.getElementById('hint').textContent='双乐榜的历史服务已停止；本机最高分：'+best+'。';
  else if([703,744,807].includes(id))document.getElementById('hint').textContent='旧版积分兑换服务已停止，游戏成绩保存在本机。';
  else if(id===900)document.getElementById('hint').textContent='可关闭本页返回游戏目录。';
}
function point(event){const box=canvas.getBoundingClientRect();return {x:(event.clientX-box.left)*canvas.width/box.width,y:(event.clientY-box.top)*canvas.height/box.height};}
canvas.addEventListener('pointerdown',event=>{event.preventDefault();canvas.focus({preventScroll:true});const p=point(event);pressedButton=renderer.hit(p.x,p.y);renderer.pointer({...p,down:true});canvas.setPointerCapture(event.pointerId);if(pressedButton===717){activate(717);pressedButton=null;}});
canvas.addEventListener('pointermove',event=>{const p=point(event);renderer.pointer({...p,down:event.buttons!==0});canvas.style.cursor=renderer.hit(p.x,p.y)?'pointer':'default';});
canvas.addEventListener('pointerup',event=>{event.preventDefault();const p=point(event),id=renderer.hit(p.x,p.y);if(id&&id===pressedButton)activate(id);pressedButton=null;renderer.pointer({...p,down:false});});
canvas.addEventListener('pointercancel',()=>{pressedButton=null;renderer.pointer({x:-1,y:-1,down:false});});
for(const button of document.querySelectorAll('[data-key]')) {
  const code=Number(button.dataset.key);
  button.addEventListener('pointerdown',event=>{event.preventDefault();audio.unlock();button.setPointerCapture(event.pointerId);input('p'+event.pointerId,code,true);});
  for(const name of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(name,event=>{event.preventDefault();input('p'+event.pointerId,code,false);});
}
window.addEventListener('keydown',event=>{
  if([37,38,39,40].includes(event.keyCode)){event.preventDefault();input('k'+event.keyCode,event.keyCode,true);}
  else if(event.code==='Space'&&!event.repeat){event.preventDefault();if(game.phase==='menu')begin();else setPaused(!paused);}
  else if(event.code==='Escape'&&!event.repeat){if(renderer?.help)renderer.setHelp(false);else setPaused(!paused);}
});
window.addEventListener('keyup',event=>{if([37,38,39,40].includes(event.keyCode)){event.preventDefault();input('k'+event.keyCode,event.keyCode,false);}else game.flag=1;});
window.addEventListener('blur',()=>{releaseInputs();setPaused(true);});
document.addEventListener('visibilitychange',()=>{if(document.hidden)setPaused(true);});
document.getElementById('start').addEventListener('click',()=>begin());
document.getElementById('pause').addEventListener('click',()=>setPaused(!paused));
document.getElementById('resume').addEventListener('click',()=>setPaused(false));
document.getElementById('help').addEventListener('click',()=>{if(game.phase==='menu')renderer.setHelp(!renderer.help);else document.getElementById('hint').textContent='← 左侧 · → 右侧 · ↑ 跳跃 · ↓ 下蹲 · 斜向障碍同时按两个方向';});
document.getElementById('sound').addEventListener('click',()=>{audio.unlock();audio.mute(!audio.muted);document.getElementById('sound').textContent=audio.muted?'声音关':'声音开';document.getElementById('sound').setAttribute('aria-pressed',String(!audio.muted));});
function resize(){const dpr=Math.min(2,window.devicePixelRatio||1),box=canvas.getBoundingClientRect();canvas.width=Math.max(1,Math.round(box.width*dpr));canvas.height=Math.max(1,Math.round(box.height*dpr));}
window.addEventListener('resize',resize);resize();
try {
  renderer=await createRenderer(canvas);
  try{await audio.prepare();}catch(error){console.error(error);document.getElementById('hint').textContent='声音准备失败，可继续游玩。';}
  ready=true;document.getElementById('loading').hidden=true;controls.forEach(button=>button.disabled=false);
  let fatal=false;
  function loop(now){
    requestAnimationFrame(loop);
    if(fatal)return;
    if(!last)last=now;
    const delta=Math.min(250,now-last);last=now;
    if(!paused){accumulator+=delta;while(accumulator>=1000/FPS){game.step();accumulator-=1000/FPS;}}
    try{renderer.render(game);}catch(error){fatal=true;console.error(error);status.textContent='场景绘制失败：'+error.message;document.getElementById('loading').hidden=false;}
    document.getElementById('start').textContent=game.phase==='menu'?'开始游戏':'重新开始';
  }
  requestAnimationFrame(loop);
}catch(error){console.error(error);status.textContent='资源读取失败：'+error.message;}
