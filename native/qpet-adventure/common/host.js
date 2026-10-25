import {AdventureRenderer} from './renderer.js';
import {AdventureAudio} from './audio.js';
import {createProgressStore} from './progress.js';

const DEFAULT_KEYS=new Set([32,37,38,39,40]);
const KEY_FIELDS={32:'actKey',37:'leftKey',38:'upKey',39:'rightKey',40:'downKey'};
/** A static page host. Game rules and callbacks remain in the chapter controller.
 * Resource URLs and navigation come from the fixed, independently built entry. */
export async function startAdventure({chapter,variant=0,createController,createArtwork,collisionPaths,assets,audioData,pcmData=null,fontURL,navigation={},onReady=()=>{},onComplete=()=>{},onReturn=()=>{},onChapterRequest=()=>{}}){
 const canvas=document.querySelector('#stage'),loading=document.querySelector('#loading'),soundButton=document.querySelector('#sound'),restartButton=document.querySelector('#restart'),fullscreenButton=document.querySelector('#fullscreen'),beginButton=chapter===0?document.querySelector('#begin-prologue'):null,completion=document.querySelector('#completion'),completionTitle=document.querySelector('#completion-title'),nextLink=document.querySelector('#next-chapter'),homeLinks=[...document.querySelectorAll('[data-home]')],reference=document.querySelector('#original-reference'),controls=[...document.querySelectorAll('[data-key]')],hooks={};
 const keySources=new Map(),pointerKeys=new Map(),cleanups=[];
 let observer=null;
 function listen(target,type,callback,options){target.addEventListener(type,callback,options);cleanups.push(()=>target.removeEventListener(type,callback,options));}
 let renderer=null,controller=null,artwork=null,clock=0,lastRAF=0,accumulator=0,dirty=true,hidden=document.hidden,finished=false,disposed=false,soundChoice=null,orientationLocked=false,pressedButton=null,hoverButton=null,canvasPointer=null,lastPoint={x:0,y:0};
 const navigate=url=>{if(typeof url==='string'&&url)window.location.assign(url);};
 for(const link of homeLinks){if(navigation.home)link.href=navigation.home;else link.hidden=true;listen(link,'click',()=>{try{onReturn({chapter,variant});}catch(error){console.error(error);}});}
 if(navigation.reference)reference.href=navigation.reference;else reference.hidden=true;
 if(chapter===0)document.querySelector('#touch-controls').hidden=true;
 const progress=navigation.home?createProgressStore():null;
 // Every archived chapter is playable. Standalone packages remain independent
 // of the Web completion record; only invalid chapter identities are rejected.
 if(!Number.isInteger(chapter)||chapter<0||chapter>8){
  loading.hidden=false;loading.textContent='该章节暂不可用，请返回选关。';
  document.querySelector('#touch-controls').hidden=true;
  return{destroy(){for(const cleanup of cleanups.splice(0))cleanup();}};
 }
 const audio=new AdventureAudio({pcmData,assets:audioData.audioAssets,metadata:audioData.audioMetadata,timelineEvents:audioData.audioTimelineEvents,streams:audioData.audioStreams,linkage:audioData.audioLinkage,frameCount:id=>assets.instances[id]?.frames.length??1,onDiagnostic:event=>{if(event.type==='audio-decode-failed')console.warn('Game sound could not be decoded',event.id);}});
 const point=event=>{const r=canvas.getBoundingClientRect();return{x:(event.clientX-r.left)*760/r.width,y:(event.clientY-r.top)*420/r.height};};
 const binding=button=>{const fallback=Number(button.dataset.key),value=controller?.root?.[KEY_FIELDS[fallback]];return Number.isFinite(value)&&value>=0?value:fallback;};
 function heldAppearance(){for(const button of controls)button.dataset.held=String(keySources.has(binding(button)));}
 function hold(code,source,down){if(!controller)return;let sources=keySources.get(code);if(down){if(!sources){sources=new Set();keySources.set(code,sources);}if(sources.has(source))return;const first=sources.size===0;sources.add(source);if(first)controller.keyDown(code);}else{if(!sources?.delete(source))return;if(!sources.size){keySources.delete(code);controller.keyUp(code);}}heldAppearance();dirty=true;}
 function setButtonState(node,frame){if(node&&!node.removed&&node.frame!==frame){controller.graph.goto(node,frame);dirty=true;}}
 function clearHover(){if(hoverButton&&hoverButton!==pressedButton)setButtonState(hoverButton,1);hoverButton=null;canvas.style.cursor='default';}
 function releaseAll(){for(const code of [...keySources.keys()]){keySources.delete(code);controller?.keyUp(code);}pointerKeys.clear();heldAppearance();if(canvasPointer!==null){controller?.release(lastPoint.x,lastPoint.y,{cancel:true});canvasPointer=null;}setButtonState(pressedButton,1);pressedButton=null;clearHover();dirty=true;}
 function updateSound(){const label=audio.enabled?'关闭声音':'开启声音';if(soundButton.textContent!==label)soundButton.textContent=label;}
 async function firstSound(){if(soundChoice!==null)return;soundChoice=true;try{await audio.enable(true);}catch(error){console.warn(error);}updateSound();}
 function render(){if(!renderer||!dirty)return;renderer.render();dirty=false;}
 function resize(){if(!renderer)return;const r=canvas.getBoundingClientRect(),d=Math.min(2,devicePixelRatio||1),scale=Math.min(1,760/Math.max(1,r.width*d),420/Math.max(1,r.height*d));renderer.resize(Math.max(1,Math.round(r.width*d*scale)),Math.max(1,Math.round(r.height*d*scale)));dirty=true;render();}
 function complete(event){if(finished||chapter<1||chapter>8||event?.chapter!==chapter||event?.variant!==variant)return;finished=true;releaseAll();audio.stopAll();progress?.complete(chapter);completionTitle.textContent=`第${chapter}集已完成`;const next=navigation.entries?.[`${chapter+1}:${variant}`];nextLink.hidden=!next;if(!nextLink.hidden)nextLink.href=next;completion.hidden=false;try{onComplete(event);}catch(error){console.error(error);}}
 function requestChapter(event){try{onChapterRequest(event);}catch(error){console.error(error);}if(chapter===0&&event.chapter===1&&event.variant===0){const url=navigation.entries?.['1:0'];if(url)navigate(url);else{finished=true;releaseAll();audio.stopAll();completionTitle.textContent='序章播放完毕';nextLink.hidden=true;completion.hidden=false;}}}
 function reset(){releaseAll();controller?.dispose();renderer?.dispose();audio.stopAll();audio.setTime(0);audio.setVolume(100);clock=0;lastRAF=0;accumulator=0;finished=false;completion.hidden=true;pressedButton=null;hoverButton=null;controller=createController({variant,assets,audio:null,now:0,pointHit:(...args)=>renderer?.pointHit(...args)??false,buttonHit(node,x,y){if(!renderer)return false;if(assets.symbolKinds[node.id]?.startsWith('button')){const p=controller.graph.globalToLocal(node,x,y);return renderer.hitSymbol(node.id,p.x*20,p.y*20,4);}return renderer.pointHit(node,x,y);},pointerTop:(x,y)=>renderer?.buttonAt(x,y)??null,onEvent:event=>audio.handle(event),onComplete:complete,onChapterRequest:requestChapter});renderer=new AdventureRenderer({canvas,graph:controller.graph,artwork,hooks,collisionPaths,textFor:(...args)=>controller.textFor(...args)});controller.drainEvents();if(beginButton){beginButton.hidden=false;beginButton.disabled=false;}dirty=true;resize();updateSound();}
 function releasePointer(event,cancel=false){if(!controller||canvasPointer!==event.pointerId)return;if(Number.isFinite(event.clientX))lastPoint=point(event);canvasPointer=null;const target=pressedButton;pressedButton=null;controller.release(lastPoint.x,lastPoint.y,{cancel});const hit=!cancel&&event.pointerType==='mouse'?renderer.buttonAt(lastPoint.x,lastPoint.y):null;setButtonState(target,hit===target?2:1);hoverButton=hit;if(canvas.hasPointerCapture?.(event.pointerId))canvas.releasePointerCapture(event.pointerId);dirty=true;render();}
 function sourceStep(){clock+=40;audio.setTime(clock);controller.tick(clock);controller.drainEvents();dirty=true;}
 function failed(error){finished=true;releaseAll();audio.stopAll();loading.hidden=false;loading.textContent='加载或运行遇到问题，请刷新页面重试。';console.error(error);}
 try{
  const font=new FontFace('QPetArchiveFont',`url(${fontURL})`);await font.load();document.fonts.add(font);hooks.deviceFont='QPetArchiveFont';artwork=createArtwork(canvas,hooks);await artwork.ready();loading.textContent='正在准备声音…';await audio.warmup();reset();loading.hidden=true;for(const button of[soundButton,restartButton,fullscreenButton])button.disabled=false;onReady({chapter,variant});
 }catch(error){failed(error);return{destroy};}
 observer=new ResizeObserver(resize);observer.observe(canvas);
 listen(canvas,'pointermove',event=>{if(!controller||finished)return;lastPoint=point(event);controller.move(lastPoint.x,lastPoint.y);const hit=renderer.buttonAt(lastPoint.x,lastPoint.y);if(canvasPointer!==null)setButtonState(pressedButton,hit===pressedButton?3:1);else if(hoverButton!==hit){clearHover();hoverButton=hit;setButtonState(hoverButton,2);}canvas.style.cursor=hit?'pointer':'default';dirty=true;});
 listen(canvas,'pointerdown',event=>{event.preventDefault();if(canvasPointer!==null||finished||hidden)return;void firstSound();canvas.focus({preventScroll:true});canvasPointer=event.pointerId;canvas.setPointerCapture(event.pointerId);lastPoint=point(event);pressedButton=renderer.buttonAt(lastPoint.x,lastPoint.y);controller.press(lastPoint.x,lastPoint.y);setButtonState(pressedButton,3);dirty=true;render();});
 for(const type of['pointerup','pointercancel','lostpointercapture'])listen(canvas,type,event=>releasePointer(event,type!=='pointerup'));
 listen(canvas,'pointerleave',()=>{if(canvasPointer===null){clearHover();render();}});listen(canvas,'contextmenu',event=>event.preventDefault());
 const isControl=target=>target?.closest?.('input,select,textarea,button,a,[contenteditable="true"]');
 const keyDown=event=>{if(isControl(event.target)||event.metaKey||event.ctrlKey||event.altKey)return;const code=event.keyCode||event.which;if(DEFAULT_KEYS.has(code))event.preventDefault();if(event.repeat||finished||hidden)return;void firstSound();hold(code,'keyboard:'+code,true);};
 const keyUp=event=>{const code=event.keyCode||event.which;if(DEFAULT_KEYS.has(code))event.preventDefault();hold(code,'keyboard:'+code,false);};
 listen(window,'keydown',keyDown);listen(window,'keyup',keyUp);listen(window,'blur',releaseAll);
 for(const button of controls){listen(button,'pointerdown',event=>{event.preventDefault();if(finished||hidden)return;void firstSound();const code=binding(button);button.setPointerCapture(event.pointerId);pointerKeys.set(event.pointerId,{code,source:'touch:'+event.pointerId});hold(code,'touch:'+event.pointerId,true);});const release=event=>{const key=pointerKeys.get(event.pointerId);if(!key)return;pointerKeys.delete(event.pointerId);hold(key.code,key.source,false);};for(const type of['pointerup','pointercancel','lostpointercapture'])listen(button,type,release);}
 if(beginButton)listen(beginButton,'click',async event=>{if(!(event instanceof Event)||!event.isTrusted)return;await firstSound();if(controller.begin()){beginButton.hidden=true;dirty=true;render();}});
 const restart=()=>{reset();canvas.focus({preventScroll:true});};listen(restartButton,'click',restart);listen(document.querySelector('#completion-restart'),'click',restart);
 listen(soundButton,'click',async()=>{soundChoice=!audio.enabled;try{await audio.enable(soundChoice);}catch(error){console.warn(error);}updateSound();canvas.focus({preventScroll:true});});
 listen(fullscreenButton,'click',async event=>{if(!(event instanceof Event)||!event.isTrusted)return;const shell=document.querySelector('#game-shell');if(typeof shell.requestFullscreen!=='function')return;try{await shell.requestFullscreen({navigationUI:'hide'});if(globalThis.screen?.orientation?.lock)try{await screen.orientation.lock('landscape');orientationLocked=true;}catch{}}catch(error){console.warn(error);}});
 listen(document.querySelector('#exit-fullscreen'),'click',event=>{if(event instanceof Event&&event.isTrusted&&document.fullscreenElement)void document.exitFullscreen();});
 const fullscreenChanged=()=>{releaseAll();if(!document.fullscreenElement&&orientationLocked){try{screen.orientation.unlock?.();}catch{}orientationLocked=false;}resize();};listen(document,'fullscreenchange',fullscreenChanged);
 const visibilityChanged=()=>{hidden=document.hidden;releaseAll();lastRAF=0;accumulator=0;void(hidden?audio.suspend():audio.resume());};listen(document,'visibilitychange',visibilityChanged);
 function destroy(){if(disposed)return;disposed=true;releaseAll();observer?.disconnect();controller?.dispose();renderer?.dispose();void audio.dispose();for(const cleanup of cleanups.splice(0))cleanup();}
 // BFCache keeps this document and its live media graph. Suspend that same
 // graph while cached; a final navigation still releases all resources.
 listen(window,'pagehide',event=>{if(event.persisted){releaseAll();hidden=true;lastRAF=0;accumulator=0;void audio.suspend();}else destroy();});
 listen(window,'pageshow',event=>{if(!event.persisted||disposed)return;hidden=document.hidden;lastRAF=0;accumulator=0;dirty=true;void(hidden?audio.suspend():audio.resume());render();});
 function frame(time){if(disposed)return;try{if(lastRAF&&!finished&&!hidden){accumulator+=Math.max(0,time-lastRAF);let steps=0;while(steps<5&&accumulator>=40&&!finished){accumulator-=40;sourceStep();steps++;}if(accumulator>=40)accumulator=0;accumulator+=audio.streamSync(accumulator,{fps:25}).adjustMs||0;render();}lastRAF=time;}catch(error){failed(error);}requestAnimationFrame(frame);}
 requestAnimationFrame(frame);return{destroy};
}
