import {createGame, layout} from './game-logic.js';
import {createRenderer} from './renderer.js';
import {createAudio} from './audio.js';

export async function mountGame({canvas=document.querySelector('#game'), win=window, doc=document, rendererFactory=createRenderer, audioFactory=createAudio}={}) {
  const game=createGame(), audio=audioFactory();
  const loading=doc.querySelector('#loading'), loadingText=doc.querySelector('#loading-text')||loading;
  const retry=doc.querySelector('#loading-retry'), sound=doc.querySelector('#sound');
  const buttons=[...doc.querySelectorAll('[data-key]')], held=new Map(), driving=new Set([37,38,39,40,67,88,90,13]);
  const setTimer=(fn,ms)=>(win.setTimeout||globalThis.setTimeout).call(win,fn,ms);
  const clearTimer=id=>(win.clearTimeout||globalThis.clearTimeout).call(win,id);
  let renderer, pointer={x:-1,y:-1,down:false}, last=null, carry=0, rafId;
  let downRegion=null, hover=null, activePointer=null, soundRequest=0, soundWanted=false;
  let blocked=true, disposed=false, generation=0, resizeTimer, scheduledResolve, preparationTail=Promise.resolve(), pendingAction=null;

  function resizeCanvas() {
    const r=canvas.getBoundingClientRect(), d=Math.min(win.devicePixelRatio||1,2);
    canvas.width=Math.max(1,Math.round(r.width*d));
    canvas.height=Math.max(1,Math.round(r.height*d));
  }
  function draw() {
    if(blocked||disposed||!renderer)return;
    renderer.render({...game.state,pointer});
    audio.sync(game.state);
  }
  function tick(now) {
    if(blocked||disposed)return;
    rafId=win.requestAnimationFrame(tick);
    if(last===null)last=now;
    carry+=Math.min(250,now-last);last=now;
    let advanced=false;
    while(carry>=1000/layout.fps){game.step();carry-=1000/layout.fps;advanced=true;}
    if(advanced){
      if(['menu','help','list'].includes(game.state.status)||game.state.status==='selection'&&!game.state.selectionPlaying)audio.sync(game.state);
      else draw();
    }
  }
  function releaseInput() {
    held.clear();game.releaseAll();
    activePointer=null;hover=null;downRegion=null;pointer={x:-1,y:-1,down:false};
    for(const button of buttons)button.classList.remove('active');
  }
  function setLoading(message,failed=false) {
    if(loading)loading.hidden=false;
    if(loadingText)loadingText.textContent=message;
    if(retry)retry.hidden=!failed;
    canvas.setAttribute?.('aria-busy','true');
  }
  function pauseForPreparation() {
    blocked=true;win.cancelAnimationFrame(rafId);rafId=undefined;last=null;carry=0;
    releaseInput();soundRequest++;audio.disable();
    if(sound){sound.disabled=true;sound.textContent=soundWanted?'声音已暂停':'开启声音';}
  }
  async function enableSound() {
    const request=++soundRequest;
    if(sound)sound.textContent='正在准备声音';
    const ok=await audio.enable();
    if(request!==soundRequest||blocked||disposed)return;
    if(!ok)soundWanted=false;
    if(sound)sound.textContent=ok?'关闭声音':'声音载入失败，点击重试';
    draw();
  }
  function resume() {
    blocked=false;last=null;carry=0;
    if(loading)loading.hidden=true;
    if(retry)retry.hidden=true;
    canvas.setAttribute?.('aria-busy','false');
    if(sound){sound.disabled=false;sound.textContent='开启声音';}
    draw();rafId=win.requestAnimationFrame(tick);
    if(soundWanted)void enableSound();
  }
  function prepare(action=null,{delay=150,initial=false}={}) {
    if(disposed)return Promise.resolve(false);
    if(action!==null)pendingAction=action;
    const token=++generation;
    if(resizeTimer!==undefined){clearTimer(resizeTimer);resizeTimer=undefined;scheduledResolve?.(false);scheduledResolve=null;}
    pauseForPreparation();setLoading('正在加载游戏…');
    return new Promise(resolve=>{
      const enqueue=()=>{
        resizeTimer=undefined;scheduledResolve=null;
        const cancelled=()=>disposed||token!==generation;
        const run=async()=>{
          if(cancelled())return false;
          try {
            resizeCanvas();
            if(!renderer){renderer=await rendererFactory(canvas);if(disposed){renderer.dispose?.();return false;}}
            if(cancelled())return false;
            if(renderer.prepareSelection){
              // Initial dimensions must settle too. Later resize requests already debounce before entering this serialized queue.
              if(initial){await new Promise(done=>setTimer(done,150));if(cancelled())return false;resizeCanvas();}
              const stats=await renderer.prepareSelection({
                cancelled,
                yieldTask:()=>new Promise(done=>setTimer(done,0)),
                onProgress(done,total){if(!cancelled())setLoading(`正在准备选人动画… ${done}/${total}`);}
              });
              if(cancelled())return false;
              if(stats&&canvas.dataset){
                for(const [field,value] of Object.entries({selectionPreparationMs:stats.durationMs,selectionPreparationMaxTaskMs:stats.maxTaskMs,selectionCacheBytes:stats.bytes}))if(value!==undefined)canvas.dataset[field]=String(value);
              }
              if(renderer.selectionReady&&!renderer.selectionReady())throw new Error('选人动画尚未准备完整');
            }
            if(cancelled())return false;
            const next=pendingAction;pendingAction=null;
            if(next!==null)game.action(next);
            resume();return true;
          } catch(error) {
            if(cancelled())return false;
            pauseForPreparation();
            setLoading('素材准备失败：'+error.message+'。请点击重新加载。',true);
            return false;
          }
        };
        preparationTail=preparationTail.then(run,run);
        preparationTail.then(resolve,()=>resolve(false));
      };
      if(delay){scheduledResolve=resolve;resizeTimer=setTimer(enqueue,delay);}else enqueue();
    });
  }
  function action(name) {
    if(blocked||disposed)return;
    if(['start','select-next'].includes(name)&&renderer.prepareSelection&&(!renderer.selectionReady||!renderer.selectionReady())) {
      void prepare(name);return;
    }
    game.action(name);
  }
  function resize() {
    if(disposed)return;
    if(blocked||game.state.status==='selection'){void prepare();return;}
    // Combat and town never wait for a menu-only cache while the player can be hurt.
    resizeCanvas();draw();
  }
  function coords(e){const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*760/r.width,y:(e.clientY-r.top)*420/r.height};}
  function keyOwner(key,owner,down){let owners=held.get(key);if(down){if(!owners)held.set(key,owners=new Set());const was=owners.size;owners.add(owner);if(!was)game.keyDown(key);}else{if(!owners||!owners.delete(owner))return;if(!owners.size){game.keyUp(key);held.delete(key);}}}
  function clearCanvasPointer(){activePointer=null;hover=null;pointer={x:-1,y:-1,down:false};downRegion=null;draw();}

  canvas.addEventListener('pointerdown',e=>{if(blocked||disposed||activePointer!==null||e.button!==undefined&&e.button!==0)return;e.preventDefault();activePointer=e.pointerId;canvas.focus();canvas.setPointerCapture?.(e.pointerId);pointer={...coords(e),down:true};draw();downRegion=renderer.hitTest(pointer.x,pointer.y);if(downRegion)audio.button(downRegion.buttonId,2);});
  canvas.addEventListener('pointermove',e=>{if(blocked||disposed||activePointer!==null&&activePointer!==e.pointerId)return;pointer={...coords(e),down:pointer.down};const r=renderer.hitTest(pointer.x,pointer.y);if(r?.buttonId!==hover){hover=r?.buttonId;if(hover)audio.button(hover,1);}if(!['playing','town'].includes(game.state.status))draw();});
  canvas.addEventListener('pointerup',e=>{if(blocked||disposed||activePointer!==e.pointerId)return;activePointer=null;pointer={...coords(e),down:false};const r=renderer.hitTest(pointer.x,pointer.y);if(r&&downRegion?.action===r.action&&downRegion?.buttonId===r.buttonId)action(r.action);downRegion=null;if(e.pointerType==='touch'){pointer={x:-1,y:-1,down:false};hover=null;}draw();});
  const cancelCanvasPointer=e=>{if(activePointer===e.pointerId)clearCanvasPointer();};canvas.addEventListener('pointercancel',cancelCanvasPointer);canvas.addEventListener('lostpointercapture',cancelCanvasPointer);
  win.addEventListener('keydown',e=>{const k=e.keyCode||({ArrowUp:38,ArrowDown:40,ArrowLeft:37,ArrowRight:39,KeyZ:90,KeyX:88,KeyC:67,Enter:13})[e.code];if(driving.has(k)){e.preventDefault();if(blocked||disposed)return;if(!e.repeat)keyOwner(k,'keyboard',true);else if(k===13)game.keyDown(k);}});
  win.addEventListener('keyup',e=>{const k=e.keyCode||({ArrowUp:38,ArrowDown:40,ArrowLeft:37,ArrowRight:39,KeyZ:90,KeyX:88,KeyC:67,Enter:13})[e.code];if(driving.has(k)){e.preventDefault();if(!blocked&&!disposed)keyOwner(k,'keyboard',false);}});
  win.addEventListener('blur',()=>{if(disposed)return;releaseInput();draw();});
  for(const button of buttons){const key=Number(button.dataset.key);button.addEventListener('pointerdown',e=>{if(blocked||disposed)return;e.preventDefault();button.setPointerCapture?.(e.pointerId);keyOwner(key,e.pointerId,true);button.classList.add('active');});const release=e=>{if(blocked||disposed)return;keyOwner(key,e.pointerId,false);if(!held.has(key))button.classList.remove('active');};button.addEventListener('pointerup',release);button.addEventListener('pointercancel',release);button.addEventListener('lostpointercapture',release);}
  if(sound)sound.addEventListener('click',async()=>{if(blocked||disposed)return;if(audio.enabled||audio.pending){soundRequest++;soundWanted=false;audio.disable();sound.textContent='开启声音';}else{soundWanted=true;await enableSound();}});
  if(retry)retry.addEventListener('click',()=>{if(!disposed)void prepare(null,{delay:0});});
  win.addEventListener('resize',resize);
  await prepare(null,{delay:0,initial:true});
  return {game,get renderer(){return renderer;},audio,draw,dispose(){if(disposed)return;disposed=true;generation++;soundRequest++;if(resizeTimer!==undefined)clearTimer(resizeTimer);scheduledResolve?.(false);win.cancelAnimationFrame(rafId);releaseInput();game.dispose();audio.disable();renderer?.dispose?.();}};
}
if(typeof document!=='undefined'&&document.querySelector('#game'))mountGame().catch(e=>{const message=document.querySelector('#loading-text')||document.querySelector('#loading');message.textContent='素材载入失败：'+e.message;throw e;});
