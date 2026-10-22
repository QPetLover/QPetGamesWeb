import {createMagpieGame} from './game-logic.js';
import {createRenderer} from './renderer.js';
import {OriginalAudio} from './audio.js';
import {audioMetadata} from './audio-assets.js';

const canvas=document.getElementById('game');
const stage=document.getElementById('stage');
const loading=document.getElementById('loading');
const soundButton=document.getElementById('sound');
const statusText=document.getElementById('status');
const controls={};
for(const name of ['start','help','close-help','replay']) controls[name]=document.getElementById(name);
const game=createMagpieGame({now:performance.now()});
const sound=new OriginalAudio();
let renderer,ready=false,activePointer=null,lastFrame=-1,lastControlState='';
let pointer={x:-1,y:-1,down:false};
let cues=[];
let lastStaticKey=null;
function queueSound(event) {
  const info=audioMetadata[event.id];
  if(!info)return;
  const at=Number.isFinite(event.at)?event.at:performance.now();
  const now=performance.now();
  const noMultiple=event.noMultiple===undefined?[105,123,190,195,241,242].includes(Number(event.id)):!!event.noMultiple;
  cues=cues.filter(cue=>cue.until>now);
  if(noMultiple&&cues.some(cue=>cue.id===event.id))return;
  const cue={id:event.id,at,loops:event.loops||1,noMultiple,
    until:at+info.samples/info.rate*1000*(event.loops||1)};
  cues.push(cue);
  sound.play(cue.id,Math.max(0,(now-at)/1000),cue);
}
function consumeEvents() {
  for(const event of game.drainEvents()) {
    if(event.type==='sound')queueSound(event);
    else if(event.type==='stop-sounds'){sound.stop();cues=[];}
  }
}
function draw(view=game.view(),force=false) {
  lastFrame=view.frame;
  if(view.status==='menu') {
    // These authored timelines are stopped. Pointer/button and result changes
    // still paint immediately; the 25fps and interval rules continue running.
    const key=JSON.stringify([view.status,view.help,view.goodNum,view.badNum,view.score,pointer]);
    if(!force&&key===lastStaticKey)return;
    lastStaticKey=key;
  } else lastStaticKey=null;
  renderer.render(Object.assign({},view,{pointer}));
  const key=view.status+':'+view.help;
  if(key!==lastControlState){
    lastControlState=key;
    controls.start.hidden=view.status!=='menu';
    controls.help.hidden=view.status!=='menu'||view.help;
    controls['close-help'].hidden=!view.help;
    controls.replay.hidden=view.status!=='ending';
    stage.classList.toggle('playing',view.status==='playing');
    statusText.textContent=view.status==='ending'?'游戏结束，抓到'+view.goodNum+'只喜鹊。':
      view.status==='playing'?'游戏进行中，移动鼠标或拖动手指抓喜鹊，避开乌鸦。':view.help?'游戏帮助':'开始菜单';
  }
}
function action(name) {
  if(!ready)return;
  game.advance(performance.now());
  if(name==='more-games') {
    const link=document.getElementById('more-games-link');
    if(link)link.click();else statusText.textContent='更多游戏请访问 Q宠游戏网站。';
    return;
  }
  if(name==='redeem') {
    statusText.textContent='历史积分兑换服务已不可用，本次得分保留在游戏结果中。';
    document.getElementById('notice').textContent=statusText.textContent;
    return;
  }
  game.action(name==='cancel'?'menu':name);
  document.getElementById('notice').textContent='';
  consumeEvents();draw();
}
function point(x,y) {
  const rect=canvas.getBoundingClientRect();
  return {x:(x-rect.left)*800/rect.width,y:(y-rect.top)*600/rect.height};
}
function move(p) {
  // Timers already due must see the old pointer before this new input arrives.
  game.advance(performance.now());
  pointer={x:p.x,y:p.y,down:!!activePointer};
  game.move(p.x,p.y);
}
function down(p,id) {
  if(!ready||activePointer)return;
  game.advance(performance.now());move(p);
  activePointer={id,action:renderer.hitTest(p.x,p.y,game.view())};
  pointer.down=true;
  if(['start','help','close-help','more-games'].includes(activePointer.action))queueSound({id:game.view().status==='ending'?105:123,noMultiple:true});
  consumeEvents();draw();
}
function up(p,id,cancelled=false) {
  if(!ready||!activePointer||activePointer.id!==id)return;
  game.advance(performance.now());move(p);
  const pressed=activePointer;activePointer=null;pointer.down=false;
  if(!cancelled&&pressed.action&&renderer.hitTest(p.x,p.y,game.view())===pressed.action)action(pressed.action);
  consumeEvents();draw();
}
if('PointerEvent' in window) {
  canvas.addEventListener('pointermove',event=>{
    if(event.isPrimary===false||(activePointer&&activePointer.id!==event.pointerId))return;
    move(point(event.clientX,event.clientY));
  });
  canvas.addEventListener('pointerleave',()=>{if(!activePointer)pointer={x:-1,y:-1,down:false};});
  canvas.addEventListener('pointerdown',event=>{
    if(event.button!==0||event.isPrimary===false)return;
    event.preventDefault();down(point(event.clientX,event.clientY),event.pointerId);
    if(canvas.setPointerCapture)canvas.setPointerCapture(event.pointerId);
  });
  window.addEventListener('pointerup',event=>up(point(event.clientX,event.clientY),event.pointerId));
  canvas.addEventListener('pointercancel',event=>up(point(event.clientX,event.clientY),event.pointerId,true));
} else {
  const activeTouch=event=>{
    if(!activePointer)return null;
    for(let i=0;i<event.changedTouches.length;i++)if(event.changedTouches[i].identifier===activePointer.id)return event.changedTouches[i];
    return null;
  };
  canvas.addEventListener('mousemove',event=>move(point(event.clientX,event.clientY)));
  canvas.addEventListener('mousedown',event=>{if(event.button===0){event.preventDefault();down(point(event.clientX,event.clientY),'mouse');}});
  window.addEventListener('mouseup',event=>{if(event.button===0)up(point(event.clientX,event.clientY),'mouse');});
  canvas.addEventListener('touchstart',event=>{event.preventDefault();const t=event.changedTouches[0];down(point(t.clientX,t.clientY),t.identifier);},{passive:false});
  canvas.addEventListener('touchmove',event=>{event.preventDefault();const t=activeTouch(event);if(t)move(point(t.clientX,t.clientY));},{passive:false});
  canvas.addEventListener('touchend',event=>{event.preventDefault();const t=activeTouch(event);if(t)up(point(t.clientX,t.clientY),t.identifier);},{passive:false});
  canvas.addEventListener('touchcancel',event=>{const t=activeTouch(event);if(t)up(point(t.clientX,t.clientY),t.identifier,true);},{passive:false});
}
for(const name of Object.keys(controls)) controls[name].addEventListener('click',()=>action(name));
soundButton.addEventListener('click',async()=>{
  if(sound.enabled){sound.disable();soundButton.textContent='开启声音';soundButton.setAttribute('aria-pressed','false');return;}
  soundButton.disabled=true;
  try {
    if(!await sound.enable())throw new Error('Audio unsupported');
    soundButton.textContent='关闭声音';soundButton.setAttribute('aria-pressed','true');
    const now=performance.now();cues=cues.filter(cue=>cue.until>now);
    for(const cue of cues)sound.play(cue.id,Math.max(0,(now-cue.at)/1000),cue);
  } catch(_){sound.disable();soundButton.textContent='声音不可用';}
  finally{soundButton.disabled=false;}
});
function resize() {
  const width=Math.max(1,Math.round(canvas.getBoundingClientRect().width*Math.min(window.devicePixelRatio||1,2)));
  const height=Math.round(width*600/800);
  if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
  if(ready)draw(undefined,true);
}
window.addEventListener('resize',resize);
if(window.visualViewport)window.visualViewport.addEventListener('resize',resize);
if(window.ResizeObserver)new ResizeObserver(resize).observe(stage);
function tick(now) {
  const view=game.advance(now);consumeEvents();
  if(view.frame!==lastFrame)draw(view);
  requestAnimationFrame(tick);
}
async function boot() {
  try {
    resize();renderer=await createRenderer(canvas);ready=true;
    loading.hidden=true;game.advance(performance.now());consumeEvents();draw();
    requestAnimationFrame(tick);
  } catch(error){loading.textContent='游戏资源未能加载，请刷新重试。';console.error('Game initialization failed',error);}
}
boot();
