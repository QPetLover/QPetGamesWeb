import {createRacingGame} from './game-logic.js';
import {createRenderer} from './renderer.js';
import {OriginalAudio} from './audio.js';
import {audioMetadata} from './audio-assets.js';

const canvas=document.getElementById('game');
const stage=document.getElementById('stage');
const soundButton=document.getElementById('sound');
const notice=document.getElementById('notice');
const status=document.getElementById('status');
const touch=document.getElementById('touch-controls');
const sound=new OriginalAudio();
const menuButtons=Object.fromEntries(['start','help','next','back','replay'].map(name=>[name,document.getElementById(name)]));
const aliases={'next-help':'next','previous-help':'previous','menu':'back'};
const driveKeys=new Set(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Control']);
const keyboard=new Set(),fingers=new Map();
let game,renderer,ready=false,lastFrame=-1,lastStatus='',pressedMenu=null;
let pointer={x:-1,y:-1,down:false},cues=[];

function applyKey(key) {
  if(!game)return;
  const down=keyboard.has(key)||Array.from(fingers.values()).some(value=>value.key===key);
  game.input(key,down);
}
function releaseAll() {
  const keys=new Set([...keyboard,...Array.from(fingers.values(),value=>value.key)]);
  keyboard.clear();fingers.clear();
  for(const key of keys)game?.input(key,false);
  for(const button of touch.querySelectorAll('button'))button.classList.remove('pressed');
  pressedMenu=null;pointer.down=false;
}
function consumeEvents() {
  for(const event of game.drainEvents()) {
    if(event.type==='sound') {
      const metadata=audioMetadata[event.id];if(!metadata)continue;
      const now=performance.now(),options=event.options||{};
      cues=cues.filter(cue=>cue.until>now);
      if(options.noMultiple&&cues.some(cue=>cue.id===event.id))continue;
      const duration=(options.outPoint===undefined?metadata.samples/metadata.rate:options.outPoint/44100)-(options.inPoint||0)/44100;
      const cue={id:event.id,at:now,options,until:now+duration*1000*(options.loops||1)};
      cues.push(cue);sound.handle(event);
    } else if(event.type==='stop-sounds'||event.type==='stopAllSounds') {sound.stop();cues=[];}
    else if(event.type==='host'&&event.method==='game2')notice.textContent='原按钮调用历史客户端功能，当前保留本地名次与分数。';
  }
}
function draw(force=false) {
  if(!ready)return;
  const view=game.view();
  sound.syncStream(view.rootFrame,view.rootPlaying);
  if(force||view.frame!==lastFrame) {
    renderer.render({...view,pointer});lastFrame=view.frame;
  }
  if(view.status!==lastStatus) {
    lastStatus=view.status;
    const playing=['countdown','playing'].includes(view.status);
    touch.hidden=!playing;
    stage.classList.toggle('playing',playing);
    menuButtons.start.hidden=view.status!=='menu';
    menuButtons.help.hidden=view.status!=='menu';
    menuButtons.next.hidden=view.status!=='help';
    menuButtons.back.hidden=!['help','help2'].includes(view.status);
    menuButtons.replay.hidden=view.status!=='ended';
    status.textContent=view.status==='playing'?'游戏进行中，使用方向键驾驶，Ctrl使用道具。':view.status==='countdown'?'准备发车。':view.status==='ended'?view.text.txt+' '+view.text.txt2:view.status==='intro'?'开场动画。':view.status==='menu'?'开始菜单。':'游戏说明。';
  }
}
function action(name) {
  if(!ready)return;
  name=aliases[name]||name;
  game.advance(performance.now());
  if(['quit','qpet-guide','more-games','legacy-games'].includes(name)) {
    notice.textContent=name==='quit'?'可通过页面导航返回游戏主页。':'原按钮指向历史网站；当前原生游戏可通过页面导航继续游玩。';
    return;
  }
  if(name==='back'&&game.view().status==='ended')name='replay';
  if(game.action(name)) {
    if(name!=='redeem')notice.textContent='';
    consumeEvents();draw(true);canvas.focus({preventScroll:true});
  }
}
function point(event) {
  const box=canvas.getBoundingClientRect();
  return {x:(event.clientX-box.left)*760/box.width,y:(event.clientY-box.top)*420/box.height};
}
canvas.addEventListener('pointermove',event=>{
  pointer={...point(event),down:pressedMenu!==null};
  if(!['countdown','playing'].includes(game?.view().status))draw(true);
});
canvas.addEventListener('pointerleave',()=>{if(pressedMenu===null){pointer={x:-1,y:-1,down:false};if(!['countdown','playing'].includes(game?.view().status))draw(true);}});
canvas.addEventListener('pointerdown',event=>{
  if(!ready||event.button!==0||event.isPrimary===false)return;
  event.preventDefault();pointer={...point(event),down:true};
  const name=renderer.hitTest(pointer.x,pointer.y,game.view());
  // Button phases come from the authored BUTTONCONDACTION, not their labels.
  const trigger=renderer.hitRegions().find(region=>region.action===name)?.trigger;
  if(name&&trigger==='press') {action(name);pressedMenu=null;}
  else pressedMenu={id:event.pointerId,name};
  canvas.setPointerCapture?.(event.pointerId);canvas.focus({preventScroll:true});draw(true);
});
function menuUp(event,cancelled=false) {
  if(!ready)return;
  const pressed=pressedMenu;pressedMenu=null;pointer={...point(event),down:false};
  if(!cancelled&&pressed?.id===event.pointerId&&pressed.name&&renderer.hitTest(pointer.x,pointer.y,game.view())===pressed.name)action(pressed.name);
  draw(true);
}
window.addEventListener('pointerup',event=>menuUp(event));
canvas.addEventListener('pointercancel',event=>menuUp(event,true));
for(const button of touch.querySelectorAll('button[data-key]')) {
  button.addEventListener('pointerdown',event=>{
    if(!ready||!['playing','countdown'].includes(game.view().status))return;
    event.preventDefault();game.advance(performance.now());
    fingers.set(event.pointerId,{key:button.dataset.key,button});
    button.setPointerCapture?.(event.pointerId);button.classList.add('pressed');
    applyKey(button.dataset.key);consumeEvents();draw(true);
  });
  const release=event=>{
    const finger=fingers.get(event.pointerId);if(!finger)return;
    event.preventDefault();game.advance(performance.now());fingers.delete(event.pointerId);
    if(!Array.from(fingers.values()).some(value=>value.button===finger.button))finger.button.classList.remove('pressed');
    applyKey(finger.key);consumeEvents();draw(true);
  };
  button.addEventListener('pointerup',release);button.addEventListener('pointercancel',release);
  button.addEventListener('lostpointercapture',release);
}
window.addEventListener('keydown',event=>{
  if(!ready||!driveKeys.has(event.key))return;
  if(!['playing','countdown'].includes(game.view().status)&&document.activeElement!==canvas)return;
  event.preventDefault();game.advance(performance.now());keyboard.add(event.key);applyKey(event.key);consumeEvents();draw(true);
});
window.addEventListener('keyup',event=>{
  if(!driveKeys.has(event.key))return;
  if(keyboard.has(event.key)){event.preventDefault();game.advance(performance.now());keyboard.delete(event.key);applyKey(event.key);consumeEvents();draw(true);}
});
window.addEventListener('blur',releaseAll);
document.addEventListener('visibilitychange',()=>{if(document.hidden)releaseAll();});
for(const [name,button] of Object.entries(menuButtons))button.addEventListener('click',()=>action(name));
soundButton.addEventListener('click',async()=>{
  if(sound.enabled){sound.disable();soundButton.textContent='开启声音';soundButton.setAttribute('aria-pressed','false');return;}
  soundButton.disabled=true;
  try {
    if(!await sound.enable())throw new Error('Audio unavailable');
    soundButton.textContent='关闭声音';soundButton.setAttribute('aria-pressed','true');
    const now=performance.now();cues=cues.filter(cue=>cue.until>now);
    for(const cue of cues)sound.play(cue.id,Math.max(0,(now-cue.at)/1000),cue.options);
    if(ready)sound.syncStream(game.view().rootFrame,game.view().rootPlaying);
  } catch(_){sound.disable();soundButton.textContent='声音不可用';}
  finally{soundButton.disabled=false;}
});
function resize() {
  const width=Math.max(1,Math.round(canvas.getBoundingClientRect().width*Math.min(window.devicePixelRatio||1,2)));
  const height=Math.round(width*420/760);
  if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
  draw(true);
}
window.addEventListener('resize',resize);
if(window.visualViewport)window.visualViewport.addEventListener('resize',resize);
if(window.ResizeObserver)new ResizeObserver(resize).observe(stage);
function tick(now) {if(ready){game.advance(now);consumeEvents();draw();}requestAnimationFrame(tick);}
async function initialize() {try {
  renderer=await createRenderer(canvas);
  game=createRacingGame({now:performance.now(),hitTestNPC:(...args)=>renderer.hitTestNPC(...args)});
  ready=true;document.getElementById('loading').hidden=true;resize();consumeEvents();draw(true);requestAnimationFrame(tick);
} catch(error) {
  document.getElementById('loading').textContent='游戏素材准备失败，请刷新重试。';console.error(error);
}}
initialize();
