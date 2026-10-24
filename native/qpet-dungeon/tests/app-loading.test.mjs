import test from 'node:test';
import assert from 'node:assert/strict';
import {mountGame} from '../app.js';

class Surface {
  listeners={};dataset={};classes=new Set();hidden=false;
  classList={add:name=>this.classes.add(name),remove:name=>this.classes.delete(name)};
  addEventListener(type,listener){(this.listeners[type]??=[]).push(listener);}
  async dispatch(type,event={}){for(const listener of this.listeners[type]||[])await listener({pointerId:1,clientX:20,clientY:20,preventDefault(){},...event});}
  setPointerCapture(){} focus(){} setAttribute(){}
}
const flush=async()=>{for(let n=0;n<20;n++)await Promise.resolve();};
function harness({controlled=false,failFirst=false}={}) {
  const canvas=new Surface(),win=new Surface(),sound=new Surface(),loading=new Surface(),text=new Surface(),retry=new Surface();
  const buttons=[37,38,39,40,90,88,67,13].map(key=>Object.assign(new Surface(),{dataset:{key:String(key)}}));
  const rect={left:0,top:0,width:380,height:210};canvas.getBoundingClientRect=()=>({...rect});
  const doc={querySelector:selector=>({'#game':canvas,'#sound':sound,'#loading':loading,'#loading-text':text,'#loading-retry':retry})[selector],querySelectorAll:()=>buttons};
  const frames=new Map(),timers=new Map();let now=0,serial=0;
  win.devicePixelRatio=2;
  win.requestAnimationFrame=callback=>{const id=++serial;frames.set(id,callback);return id;};
  win.cancelAnimationFrame=id=>frames.delete(id);
  win.setTimeout=(callback,ms)=>{const id=++serial;timers.set(id,{callback,at:now+ms});return id;};
  win.clearTimeout=id=>timers.delete(id);
  const audio={enabled:false,pending:false,enables:0,syncs:0,buttons:0,sync(){this.syncs++;},button(){this.buttons++;},async enable(){this.enables++;this.enabled=true;return true;},disable(){this.enabled=false;this.pending=false;}};
  const calls=[],draws=[];let key=null,inflight=0,maxInflight=0,disposed=0;
  const renderer={
    controlled,
    selectionReady:()=>key===canvas.width+':'+canvas.height,
    async prepareSelection(options){
      const call={...options,width:canvas.width,height:canvas.height};calls.push(call);inflight++;maxInflight=Math.max(maxInflight,inflight);
      options.onProgress(0,22);
      try {
        if(failFirst&&calls.length===1||renderer.failNext){renderer.failNext=false;throw new Error('original bitmap failure');}
        if(renderer.controlled)await new Promise(resolve=>{call.complete=resolve;});
        if(options.cancelled())throw Object.assign(new Error('cancelled'),{name:'AbortError'});
        key=call.width+':'+call.height;options.onProgress(22,22);return{groups:22,bytes:2048,durationMs:55,maxTaskMs:12};
      } finally {inflight--;}
    },
    render(view){draws.push({...view});},
    hitTest(){return{action:'start',buttonId:'920'};},
    dispose(){disposed++;}
  };
  const mounting=mountGame({canvas,win,doc,rendererFactory:async()=>renderer,audioFactory:()=>audio});
  async function advance(ms){now+=ms;for(;;){const next=[...timers].find(([,timer])=>timer.at<=now);if(!next)break;timers.delete(next[0]);next[1].callback();await flush();}await flush();}
  async function ready(){await flush();await advance(150);return mounting;}
  async function click(){await canvas.dispatch('pointerdown');await canvas.dispatch('pointerup');}
  return{canvas,win,sound,loading,text,retry,buttons,rect,frames,timers,audio,renderer,calls,draws,mounting,advance,ready,click,get maxInflight(){return maxInflight;},get disposed(){return disposed;}};
}

test('initial selection preparation reports actual dimensions and blocks clocks, audio and input until complete',async()=>{
  const h=harness({controlled:true});await flush();
  assert.equal(h.canvas.width,760);assert.equal(h.canvas.height,420);
  await h.win.dispatch('keydown',{keyCode:39});await h.buttons[5].dispatch('pointerdown');await h.sound.dispatch('click');await h.click();
  assert.equal(h.frames.size,0);assert.equal(h.audio.enables,0);assert.equal(h.audio.syncs,0);assert.equal(h.draws.length,0);
  await h.advance(149);assert.equal(h.calls.length,0);await h.advance(1);
  assert.equal(h.calls.length,1);assert.equal(h.text.textContent,'正在准备选人动画… 0/22');
  h.calls[0].onProgress(7,22);assert.equal(h.text.textContent,'正在准备选人动画… 7/22');
  h.calls[0].complete();const api=await h.mounting;
  assert.equal(h.loading.hidden,true);assert.equal(h.frames.size,1);assert.equal(h.canvas.dataset.selectionPreparationMs,'55');assert.equal(h.canvas.dataset.selectionPreparationMaxTaskMs,'12');assert.equal(h.canvas.dataset.selectionCacheBytes,'2048');assert.equal(api.game.state.frame,0);assert.equal(api.game.state.status,'menu');assert.equal(api.game.keys.size,0);
  api.dispose();
});

test('selection resize waits for stable dimensions, cancels the old job and serializes preparation without advancing state',async()=>{
  const h=harness(),api=await h.ready();await h.sound.dispatch('click');await h.click();assert.equal(api.game.state.status,'selection');
  await h.buttons.find(button=>button.dataset.key==='39').dispatch('pointerdown');assert.equal(api.game.keys.has(39),true);
  h.renderer.controlled=true;h.rect.width=400;await h.win.dispatch('resize');
  assert.equal(api.game.keys.size,0);assert.equal(h.frames.size,0);assert.equal(h.audio.enabled,false);assert.equal(h.canvas.width,760);
  await h.advance(149);assert.equal(h.calls.length,1);h.rect.width=420;await h.win.dispatch('resize');await h.advance(150);
  assert.equal(h.calls.length,2);assert.equal(h.calls[1].width,840);
  h.rect.width=460;await h.win.dispatch('resize');await h.advance(150);
  assert.equal(h.calls[1].cancelled(),true);assert.equal(h.calls.length,2);assert.equal(h.canvas.width,840);
  h.calls[1].complete();await flush();assert.equal(h.calls.length,3);assert.equal(h.calls[2].width,920);assert.equal(h.maxInflight,1);
  h.calls[2].complete();await flush();assert.equal(h.loading.hidden,true);assert.equal(h.frames.size,1);assert.equal(h.audio.enabled,true);assert.equal(api.game.state.frame,0);assert.equal(api.game.state.selectionFrame,1);
  api.dispose();
});

test('combat and town resize draw normally while menu start gates a stale-size selection cache',async()=>{
  const h=harness(),api=await h.ready();api.game.action('knight');assert.equal(api.game.state.status,'town');
  h.rect.width=410;await h.win.dispatch('resize');assert.equal(h.canvas.width,820);assert.equal(h.calls.length,1);assert.equal(h.loading.hidden,true);assert.equal(h.frames.size,1);
  api.game.action('menu');h.renderer.controlled=true;await h.click();assert.equal(api.game.state.status,'menu');assert.equal(h.frames.size,0);
  await h.advance(150);assert.equal(h.calls.length,2);h.calls[1].complete();await flush();assert.equal(api.game.state.status,'selection');assert.equal(api.game.state.selectionFrame,1);assert.equal(h.frames.size,1);
  api.dispose();
});

test('a failed preparation stays paused with an explicit retry and does not discard the requested action',async()=>{
  const h=harness({failFirst:true}),api=await h.ready();assert.match(h.text.textContent,/original bitmap failure/);assert.equal(h.retry.hidden,false);assert.equal(h.frames.size,0);
  await h.click();await h.win.dispatch('keydown',{keyCode:90});assert.equal(api.game.state.status,'menu');assert.equal(api.game.keys.size,0);
  await h.retry.dispatch('click');await flush();assert.equal(h.calls.length,2);assert.equal(h.loading.hidden,true);assert.equal(h.frames.size,1);
  h.rect.width=410;await h.win.dispatch('resize');h.renderer.failNext=true;await h.click();await h.advance(150);
  assert.equal(h.retry.hidden,false);assert.equal(h.frames.size,0);assert.equal(api.game.state.status,'menu');
  await h.retry.dispatch('click');await flush();assert.equal(api.game.state.status,'selection');assert.equal(h.loading.hidden,true);
  api.dispose();
});

test('dispose cancels pending preparation, releases cached resources and prevents a late resume',async()=>{
  const h=harness(),api=await h.ready();await h.click();h.renderer.controlled=true;h.rect.width=430;await h.win.dispatch('resize');await h.advance(150);
  assert.equal(h.calls.length,2);api.dispose();assert.equal(h.calls[1].cancelled(),true);assert.equal(h.disposed,1);
  h.calls[1].complete();await flush();assert.equal(h.frames.size,0);assert.equal(h.audio.enabled,false);await h.retry.dispatch('click');await h.advance(200);assert.equal(h.calls.length,2);
});
