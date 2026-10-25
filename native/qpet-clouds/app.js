import{CloudsGame}from'./scene.js';import{createRenderer}from'./renderer.js';import{CloudsAudio}from'./audio.js';
(async()=>{
 const canvas=document.querySelector('#game'),loading=document.querySelector('#loading'),error=document.querySelector('#error'),mute=document.querySelector('#sound-toggle'),dialog=document.querySelector('#score-dialog'),audio=new CloudsAudio();let pressedAction=null,dirty=false,spaceHeld=false,keyboardSpace=false;const pointers=new Set();
 function fail(reason){error.hidden=false;error.textContent='游戏暂时遇到问题，请刷新后再试。';console.error(reason);}
 try{
  const game=new CloudsGame({now:performance.now(),onEvent(e){audio.handle(e);if(e.type==='mute'){mute.textContent=e.enabled?'声音：开':'声音：关';mute.setAttribute('aria-pressed',String(!e.enabled));}if(e.type==='exit')location.href='../';if(e.type==='score-service-unavailable')dialog.showModal();}});
  const[renderer]=await Promise.all([createRenderer(canvas),audio.prepare()]);
  function resize(){const rect=canvas.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);// Preserve the authored800px backing limit for this vector-heavy source.
  // Mobile still receives DPR2 until that limit; coordinates/rules stay800×600.
  canvas.width=Math.max(1,Math.min(800,Math.round(rect.width*dpr)));canvas.height=Math.max(1,Math.round(canvas.width*3/4));renderer.render(game);}
  new ResizeObserver(resize).observe(canvas);resize();loading.hidden=true;
  function point(e){const b=canvas.getBoundingClientRect();Object.assign(game.pointer,{x:(e.clientX-b.left)*800/b.width,y:(e.clientY-b.top)*600/b.height});dirty=true;}
  canvas.addEventListener('pointerdown',e=>{e.preventDefault();audio.resume().catch(fail);canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);point(e);game.pointer.down=true;pressedAction=renderer.hitTest(game.pointer.x,game.pointer.y);});
  canvas.addEventListener('pointermove',point);
  canvas.addEventListener('pointerup',e=>{point(e);game.pointer.down=false;const action=renderer.hitTest(game.pointer.x,game.pointer.y);if(action&&action===pressedAction)game.action(action);pressedAction=null;dirty=true;});
  for(const type of['pointercancel','lostpointercapture'])canvas.addEventListener(type,()=>{game.pointer.down=false;pressedAction=null;dirty=true;});
  function syncSpace(){const down=keyboardSpace||pointers.size>0;if(down!==spaceHeld){spaceHeld=down;if(down)game.keyDown(32);else game.keyUp(32);}}
  addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();audio.resume().catch(fail);keyboardSpace=true;syncSpace();if(e.repeat)game.keyDown(32);}});
  addEventListener('keyup',e=>{if(e.code==='Space'){e.preventDefault();keyboardSpace=false;syncSpace();}});
  const touch=document.querySelector('#space-button');touch.addEventListener('pointerdown',e=>{e.preventDefault();audio.resume().catch(fail);touch.setPointerCapture(e.pointerId);pointers.add(e.pointerId);touch.classList.add('held');syncSpace();});
  const stop=e=>{pointers.delete(e.pointerId);if(!pointers.size)touch.classList.remove('held');syncSpace();};for(const type of['pointerup','pointercancel','lostpointercapture'])touch.addEventListener(type,stop);
  function release(){pointers.clear();keyboardSpace=false;syncSpace();touch.classList.remove('held');game.pointer.down=false;pressedAction=null;dirty=true;}
  addEventListener('blur',release);addEventListener('orientationchange',release);document.addEventListener('visibilitychange',()=>{release();if(!document.hidden)game.resume(performance.now());});
  mute.addEventListener('click',()=>{audio.resume().catch(fail);game.action('mute');dirty=true;});document.querySelector('#close-score').addEventListener('click',()=>dialog.close());
  let stopped=false;function frame(now){if(stopped)return;try{if(!document.hidden){const before=game.frame;game.advance(now);if(game.frame!==before||dirty){renderer.render(game);dirty=false;}}requestAnimationFrame(frame);}catch(reason){stopped=true;fail(reason);}}
  game.resume(performance.now());requestAnimationFrame(frame);
 }catch(reason){loading.hidden=true;fail(reason);}
})();
