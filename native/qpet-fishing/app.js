import {FishingGame} from './game-logic.js';
import {createRenderer} from './renderer.js';
import {OriginalAudio} from './audio.js';
import {audioMetadata} from './audio-assets.js';
export function installPointer(canvas,{game,hitTest,action,draw=()=>{}}){
 let active=null;
 const point=e=>{const b=canvas.getBoundingClientRect();return{x:(e.clientX-b.left)*400/b.width,y:(e.clientY-b.top)*300/b.height};};
 const move=e=>{if(e.isPrimary===false||active!==null&&active!==e.pointerId)return;const p=point(e);game.pointer(p.x,p.y,active!==null);draw();};
 const down=e=>{if(active!==null||e.button!==0||e.isPrimary===false)return;e.preventDefault();active=e.pointerId;canvas.setPointerCapture?.(active);canvas.focus?.({preventScroll:true});const p=point(e);game.pointer(p.x,p.y,true);const target=hitTest(p.x,p.y);if(target)action(target);draw();};
 const release=(e,cancel=false)=>{if(active!==e.pointerId)return;active=null;const p=cancel?game.view().pointer:point(e);game.pointer(p.x,p.y,false);draw();};
 const cancel=()=>{active=null;const p=game.view().pointer;game.pointer(p.x,p.y,false);draw();};
 canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointerup',e=>release(e));canvas.addEventListener('pointercancel',e=>release(e,true));canvas.addEventListener('lostpointercapture',e=>release(e,true));globalThis.addEventListener?.('blur',cancel);
 return{move,down,release,cancel,point};
}
if(typeof document!=='undefined'){
 const canvas=document.getElementById('game'),stage=document.getElementById('stage'),loading=document.getElementById('loading'),status=document.getElementById('status'),soundButton=document.getElementById('sound');
 const game=new FishingGame({now:performance.now()}),audio=new OriginalAudio({clock:()=>game.frame/17});let renderer=null,ready=false,lastDraw=-1,cues=[];
 const buttons=Object.fromEntries(['continue-intro','replay','exit'].map(id=>[id,document.getElementById(id)]));
 function consume(){for(const e of game.drainEvents()){
  if(e.type==='stop-sounds')cues=[];
  if(e.type==='sound'&&e.options?.stop)cues=cues.filter(c=>c.id!==e.id);
  if(e.type==='sound'&&!e.options?.stop){const now=game.frame/17,m=audioMetadata[e.id],o=e.options||{},duration=((o.outPoint===undefined?m.samples/m.rate:o.outPoint/44100)-(o.inPoint||0)/44100)*(o.loops||1);cues=cues.filter(c=>c.until>now);if(!o.noMultiple||!cues.some(c=>c.id===e.id))cues.push({id:e.id,options:o,at:now,until:now+duration});}
  audio.handle(e);
 }}
 function draw(force=false){if(!ready)return;const view=game.view();if(force||view.frame!==lastDraw){renderer.render(view);lastDraw=view.frame;}
  buttons['continue-intro'].hidden=view.status!=='intro'||view.introFrame!==204;
  buttons.replay.hidden=!['playing','summary','ending','done'].includes(view.status);buttons.exit.hidden=!['playing','summary'].includes(view.status);buttons.exit.textContent=view.status==='summary'?'查看结局':'结束本局';
  status.textContent=view.status==='playing'?'已抓到 '+view.score.fish+' 条鱼，生命 '+Math.max(0,view.bloodFrame-1):view.status==='summary'?'本局得分 '+view.score.total:view.status==='intro'&&view.introFrame===204?'点击游戏画面或开始按钮继续':view.status==='ending'||view.status==='done'?'本局得分 '+view.score.total:'';
  canvas.style.cursor=view.status==='playing'&&view.pointer.y>=95?'none':'default';
 }
 function action(name){if(!ready)return;game.advance(performance.now());if(game.action(name)){consume();draw(true);canvas.focus({preventScroll:true});}}
 for(const[name,button]of Object.entries(buttons))button.addEventListener('click',()=>action(name));
 installPointer(canvas,{game,hitTest:(x,y)=>renderer?.hitTest(x,y),action,draw:()=>draw(true)});
 soundButton.addEventListener('click',async()=>{soundButton.disabled=true;try{if(audio.enabled){audio.disable();soundButton.textContent='开启原声';soundButton.setAttribute('aria-pressed','false');}else{soundButton.textContent='准备声音…';const wasPrepared=audio.prepared;if(await audio.enable()){soundButton.textContent='关闭原声';soundButton.setAttribute('aria-pressed','true');const now=game.frame/17;if(!wasPrepared)for(const cue of cues.filter(c=>c.until>now))audio.play(cue.id,now-cue.at,cue.options);}}}catch(error){audio.disable();soundButton.textContent='重试开启原声';status.textContent='声音未能解码，请重试。';console.error(error);}finally{soundButton.disabled=false;}});
 function resize(){const r=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(canvas.width*3/4));draw(true);}
 window.addEventListener('resize',resize);window.visualViewport?.addEventListener('resize',resize);if(window.ResizeObserver)new ResizeObserver(resize).observe(stage);
 document.addEventListener('visibilitychange',()=>{game.lastTime=performance.now();if(document.hidden){audio.context?.suspend();}else if(audio.enabled){audio.context?.resume();}});
 function tick(now){requestAnimationFrame(tick);if(!ready||document.hidden){game.lastTime=now;return;}game.advance(now);consume();draw();}
 createRenderer(canvas).then(value=>{renderer=value;ready=true;game.lastTime=performance.now();loading.hidden=true;soundButton.disabled=false;resize();consume();draw(true);requestAnimationFrame(tick);}).catch(error=>{loading.textContent='原游戏素材准备失败，请刷新重试。';console.error(error);});
}
