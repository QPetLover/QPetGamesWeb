import{GuardianGame,STEP}from './game-logic.js';
import{createRenderer}from './renderer.js';
import{OriginalAudio}from './audio.js';
export function installPointer(canvas,game){let pointer=null;const point=e=>{const r=canvas.getBoundingClientRect();return[(e.clientX-r.left)*600/r.width,(e.clientY-r.top)*210/r.height];};
 const move=e=>{if(pointer!==null&&e.pointerId!==pointer)return;const[x,y]=point(e);game.move(x,y);};
 const down=e=>{if(pointer!==null||e.button>0)return;e.preventDefault();pointer=e.pointerId;canvas.setPointerCapture?.(pointer);const[x,y]=point(e);game.press(x,y);};
 const up=e=>{if(e.pointerId!==pointer)return;game.release();pointer=null;};
 const cancel=()=>{game.release();pointer=null;};
 for(const[name,fn]of[['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',up],['lostpointercapture',up]])canvas.addEventListener(name,fn);
 globalThis.addEventListener?.('blur',cancel);return{move,down,up,cancel};}
if(typeof document!=='undefined'){
 const canvas=document.querySelector('#game'),button=document.querySelector('#sound'),loading=document.querySelector('#loading'),status=document.querySelector('#status'),audio=new OriginalAudio();
 const game=new GuardianGame({onEvent:e=>audio.handle(e)});let renderer,accumulator=0,last=0,frame=0,dirty=true;
 const resize=()=>{const r=canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1;canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));dirty=true;};
 resize();window.addEventListener('resize',resize);installPointer(canvas,game);
 button.addEventListener('click',async()=>{button.disabled=true;try{if(audio.enabled){audio.disable();button.textContent='开启原声';}else{button.textContent='准备声音…';await audio.enable();button.textContent='关闭原声';}}catch(e){button.textContent='重试开启原声';status.textContent='声音未能解码，请重试。';console.error(e);}finally{button.disabled=false;}});
 function animate(now){frame=requestAnimationFrame(animate);if(!renderer)return;if(document.hidden){last=now;return;}if(!last)last=now;const dt=Math.min(250,Math.max(0,now-last));last=now;accumulator+=dt;if(accumulator>=STEP){game.tick(now);accumulator%=STEP;dirty=true;}if(!dirty)return;dirty=false;try{renderer.render(game);}catch(e){cancelAnimationFrame(frame);status.textContent='画面出现异常，请刷新重试。';console.error(e);throw e;}}
 createRenderer(canvas).then(r=>{renderer=r;loading.hidden=true;button.disabled=false;button.textContent='开启原声';requestAnimationFrame(animate);}).catch(e=>{loading.textContent='素材准备失败，请刷新重试';console.error(e);});
}
