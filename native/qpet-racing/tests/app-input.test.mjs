import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {audioMetadata} from '../audio-assets.js';

// Run the real application handlers. Only imported rendering/audio/rules and
// browser surfaces are substituted; these checks do not claim real touch.
const source=readFileSync(new URL('../app.js',import.meta.url),'utf8').replace(/^import .*;\s*$/gm,'');
class Surface {
  constructor(){this.listeners={};this.hidden=false;this.dataset={};this.textContent='';this.classes=new Set();this.classList={add:x=>this.classes.add(x),remove:x=>this.classes.delete(x),toggle(){}};}
  addEventListener(name,callback){(this.listeners[name]??=[]).push(callback);}
  async dispatch(name,event={}){const input={preventDefault(){this.prevented=true;},pointerId:1,button:0,isPrimary:true,...event};for(const callback of this.listeners[name]||[])await callback(input);return input;}
  setAttribute(){}setPointerCapture(){}focus(){}
  querySelectorAll(){return this.children||[];}
  click(){return this.dispatch('click');}
}
async function application(){
  const elements=Object.fromEntries(['game','stage','sound','notice','status','touch-controls','start','help','next','back','replay','loading'].map(id=>[id,new Surface()]));
  const keys=Object.fromEntries(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Control'].map(key=>{const node=new Surface();node.dataset.key=key;return[key,node];}));
  elements['touch-controls'].children=Object.values(keys);
  const rect={left:40,top:70,width:380,height:210};
  Object.assign(elements.game,{width:760,height:420,getBoundingClientRect:()=>rect});
  const win=new Surface();win.devicePixelRatio=2;
  const document=new Surface();document.getElementById=id=>elements[id];
  const calls=[],frames=[],events=[],renders=[],errors=[];
  let now=0;
  const state={status:'menu',frame:0,rootFrame:95,rootPlaying:false,text:{txt:'结果',txt2:'得分'}};
  const game={advance(at){calls.push(['advance',at]);state.frame++;},view(){return {...state};},input(key,down){calls.push(['input',key,down]);},
    action(name){calls.push(['action',name]);if(name==='start')state.status='playing';if(name==='help')state.status='help';if(name==='back'||name==='replay')state.status='menu';return true;},
    drainEvents(){return events.splice(0);}};
  const regions=[{action:'start',trigger:'press',x:0,width:100},{action:'help',trigger:'press',x:100,width:100},{action:'quit',trigger:'release',x:200,width:100},{action:'legacy-games',trigger:'release',x:300,width:100},{action:'menu',trigger:'press',x:400,width:100}];
  const renderer={render(view){renders.push(view);},hitTest(x,y){return y>=0&&y<100?regions.find(r=>x>=r.x&&x<r.x+r.width)?.action:null;},hitRegions:()=>regions,hitTestNPC:()=>false};
  let audio;
  class Audio {constructor(){audio=this;this.enabled=false;this.handled=[];this.played=[];this.stops=0;}async enable(){this.enabled=true;return true;}disable(){this.enabled=false;this.stop();}stop(){this.stops++;}syncStream(){}handle(event){this.handled.push(event);}play(...args){this.played.push(args);}}
  const context=vm.createContext({window:win,document,performance:{now:()=>now},requestAnimationFrame:callback=>frames.push(callback),createRacingGame:()=>game,createRenderer:async()=>renderer,OriginalAudio:Audio,audioMetadata,console:{error:err=>errors.push(err)}});
  vm.runInContext(source,context);
  await new Promise(resolve=>setImmediate(resolve));assert.deepEqual(errors,[]);assert.equal(elements.loading.hidden,true);
  return {elements,keys,win,document,calls,state,audio,events,renders,at(t){now=t;},async frame(t){now=t;frames.shift()(t);},
    async pointer(type,x,y,extra={}){return (type==='pointerup'?win:elements.game).dispatch(type,{clientX:rect.left+x/2,clientY:rect.top+y/2,...extra});}};
}
const actions=app=>app.calls.filter(call=>call[0]==='action').map(call=>call[1]);

test('authored press menus act on down at CSS-scaled coordinates; backing store preserves stage ratio',async()=>{
  const app=await application();assert.equal(app.elements.game.width,760);assert.equal(app.elements.game.height,420);
  app.at(100);await app.pointer('pointerdown',50,50);
  assert.deepEqual(actions(app),['start']);assert.equal(app.state.status,'playing');
  await app.pointer('pointerup',50,50);assert.deepEqual(actions(app),['start']);
  assert.equal(app.renders.at(-1).pointer.x,50);assert.equal(app.renders.at(-1).pointer.y,50);
});
test('release links wait for matching release; cancel does not navigate; menu return uses press',async()=>{
  const app=await application();await app.pointer('pointerdown',250,50);assert.equal(app.elements.notice.textContent,'');
  await app.pointer('pointercancel',250,50);assert.equal(app.elements.notice.textContent,'');
  await app.pointer('pointerdown',250,50);await app.pointer('pointerup',250,50);assert.match(app.elements.notice.textContent,/返回游戏主页/);
  app.state.status='help';await app.pointer('pointerdown',450,50);assert.deepEqual(actions(app),['back']);
});
test('simultaneous touch keys retain acceleration while steering and Control release independently',async()=>{
  const app=await application();await app.elements.start.click();app.calls.length=0;
  await app.keys.ArrowUp.dispatch('pointerdown',{pointerId:1});
  await app.keys.ArrowLeft.dispatch('pointerdown',{pointerId:2});
  await app.keys.Control.dispatch('pointerdown',{pointerId:3});
  await app.keys.Control.dispatch('pointerup',{pointerId:3});
  await app.keys.ArrowLeft.dispatch('pointercancel',{pointerId:2});
  const inputs=app.calls.filter(call=>call[0]==='input');
  assert.deepEqual(inputs,[['input','ArrowUp',true],['input','ArrowLeft',true],['input','Control',true],['input','Control',false],['input','ArrowLeft',false]]);
  assert.equal(app.keys.ArrowUp.classes.has('pressed'),true);
  await app.win.dispatch('blur');assert.deepEqual(app.calls.at(-1),['input','ArrowUp',false]);
});
test('keyboard and a touch on the same key share ownership; focus loss releases held keys',async()=>{
  const app=await application();await app.elements.start.click();app.calls.length=0;
  await app.win.dispatch('keydown',{key:'ArrowUp'});await app.keys.ArrowUp.dispatch('pointerdown',{pointerId:5});
  await app.win.dispatch('keyup',{key:'ArrowUp'});assert.deepEqual(app.calls.at(-1),['input','ArrowUp',true]);
  await app.keys.ArrowUp.dispatch('pointerup',{pointerId:5});assert.deepEqual(app.calls.at(-1),['input','ArrowUp',false]);
  await app.win.dispatch('keydown',{key:'Control'});app.document.hidden=true;await app.document.dispatch('visibilitychange');
  assert.deepEqual(app.calls.at(-1),['input','Control',false]);
});
test('fresh audio events keep their start; explicit stop clears cues before re-enabling',async()=>{
  const app=await application();await app.elements.sound.click();
  app.events.push({type:'sound',id:3,at:1,options:{noMultiple:false}});await app.frame(500);
  assert.equal(app.audio.handled.at(-1).id,3);assert.equal(app.audio.played.length,0,'new cue is delivered without a synthetic elapsed trim');
  app.events.push({type:'stop-sounds'});await app.frame(600);assert.equal(app.audio.stops,1);
  await app.elements.sound.click();await app.elements.sound.click();assert.equal(app.audio.played.length,0,'stopped cues cannot return');
});

test('ending and replay do not synthesize a key-up while the physical key is still held',async()=>{
  const app=await application();await app.elements.start.click();
  await app.win.dispatch('keydown',{key:'ArrowUp'});app.calls.length=0;
  app.state.status='ended';await app.frame(1000);await app.elements.replay.click();
  assert.equal(app.calls.filter(call=>call[0]==='input').length,0);
  await app.win.dispatch('keyup',{key:'ArrowUp'});assert.deepEqual(app.calls.at(-1),['input','ArrowUp',false]);
});
