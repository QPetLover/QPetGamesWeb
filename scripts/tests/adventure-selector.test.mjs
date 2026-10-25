/** Entry UI only: no chapter simulation, browser, or story-save fixtures. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {mountCatalog,mountSelector,selectorState,moveSelection} from '../../native/qpet-adventure/catalog.js';
import {createProgressStore} from '../../native/qpet-adventure/common/progress.js';

const html=readFileSync(new URL('../../native/qpet-adventure/index.html',import.meta.url),'utf8');
const entries=[...html.matchAll(/<a\b[^>]*data-entry="([^"]+)"[^>]*>/g)].map(match=>({
 id:match[1],href:/\bhref="([^"]+)"/.exec(match[0])?.[1],
}));

function fixture(){
 const context={focused:null,focusCalls:[],scrollTargets:[]};
 class Element{
  constructor(attributes={}){this.attributes=new Map(Object.entries(attributes));this.listeners=new Map();this.hidden=false;this.textContent='';this.disabled=false;}
  getAttribute(name){return this.attributes.get(name)??null;}
  setAttribute(name,value){this.attributes.set(name,String(value));}
  removeAttribute(name){this.attributes.delete(name);}
  addEventListener(type,listener){if(!this.listeners.has(type))this.listeners.set(type,new Set());this.listeners.get(type).add(listener);}
  removeEventListener(type,listener){this.listeners.get(type)?.delete(listener);}
  dispatch(type,event={}){for(const listener of this.listeners.get(type)??[])listener(event);}
  insertAdjacentElement(_position,hint){this.hint=hint;}
  remove(){this.removed=true;}
  focus(){context.focused=this;context.focusCalls.push(this);}
  scrollIntoView(){context.scrollTargets.push(this);}
 }
 const links=entries.map(({id,href})=>new Element({'data-entry':id,href}));
 const groups=Array.from({length:9},(_,chapter)=>{
  const group=new Element({'data-chapter':String(chapter)});
  group.links=links.filter(link=>link.getAttribute('data-entry').startsWith(chapter+':'));
  group.querySelector=selector=>{
   assert.equal(selector,'a[data-entry][href]');
   return group.links.find(link=>link.getAttribute('href')!==null)??null;
  };
  return group;
 });
 const images=Array.from({length:9},(_,chapter)=>new Element({'data-selector-image':String(chapter)}));
 const statuses=['watch','current','complete','locked','unplayed'].map(status=>new Element({'data-selector-status':status}));
 const stage=new Element(),title=new Element(),message=new Element(),helpPanel=new Element();
 const controls=Object.fromEntries(['previous','next','confirm','help','close-help'].map(key=>[key,new Element()]));
 const selectors=new Map([
  ['[data-selector-stage]',stage],['[data-selector-title]',title],['[data-selector-message]',message],
  ['[data-selector-help]',helpPanel],['[data-selector-close-help]',controls['close-help']],
  ...['previous','next','confirm','help'].map(key=>[`[data-selector-action="${key}"]`,controls[key]]),
 ]);
 const host=new Element();
 host.querySelector=selector=>selectors.get(selector)??null;
 host.querySelectorAll=selector=>selector==='[data-selector-image]'?images:selector==='[data-selector-status]'?statuses:[];
 const document={
  querySelector:selector=>selector==='[data-selector]'?host:null,
  querySelectorAll:selector=>selector==='a[data-entry]'?links:selector==='[data-chapter]'?groups:[],
  createElement:()=>new Element(),
 };
 const window=new Element(),saved=new Map();let writes=0;
 const storage={getItem:key=>saved.get(key)??null,setItem(key,value){writes++;saved.set(key,value);}};
 const store=createProgressStore({storage,fallbackStorage:null});
 const catalog=mountCatalog({document,window,store});
 const selector=mountSelector({document,window,store,catalog});
 return{context,links,groups,controls,window,store,selector,writes:()=>writes,
  cleanup(){selector.destroy();catalog.destroy();}};
}

test('selector source cache key matches its sole module and all existing role routes remain present',()=>{
 const module=readFileSync(new URL('../../native/qpet-adventure/catalog.js',import.meta.url));
 const expected=createHash('sha256').update(module).digest('hex').slice(0,16);
 const scripts=[...html.matchAll(/<script\b[^>]*src="(?:\.\/)?catalog\.js\?v=([a-f0-9]{16})"[^>]*>/g)];
 assert.equal(scripts.length,1,'entry must load one versioned catalog module');
 assert.equal(scripts[0][1],expected,'entry cannot serve an earlier cached selector');
 const progress=readFileSync(new URL('../../native/qpet-adventure/common/progress.js',import.meta.url));
 const progressHash=createHash('sha256').update(progress).digest('hex').slice(0,16);
 assert(module.toString().includes(`from './common/progress.js?v=${progressHash}'`),'catalog cannot reuse the old cached progress format');
 const expectedEntries=['0:0',...Array.from({length:8},(_,index)=>[`${index+1}:0`,`${index+1}:1`]).flat()];
 assert.deepEqual(entries.map(entry=>entry.id),expectedEntries);
 for(const {id,href} of entries){const [chapter,variant]=id.split(':');assert.equal(href,`./chapter${chapter}-v${variant}/`);}
});

test('first story is selected by default while arrows keep the optional prologue and chapter eight bounded',()=>{
 assert.equal(selectorState().chapter,1);
 assert.equal(selectorState().status,'unplayed');
 assert.equal(selectorState().canPlay,true);
 assert.equal(moveSelection(1,-1),0);
 assert.equal(selectorState(0).status,'watch');
 assert.deepEqual(selectorState(0).entryIds,['0:0']);
 assert.equal(selectorState(0).canGoLeft,false);
 assert.equal(moveSelection(0,-1),0);
 assert.equal(moveSelection(8,1),8);
 assert.equal(selectorState(8).canGoRight,false);
 assert.equal(selectorState(Number.NaN).chapter,1);
 let chapter=1;for(let step=0;step<12;step++)chapter=moveSelection(chapter,1);assert.equal(chapter,8);
 for(let step=0;step<12;step++)chapter=moveSelection(chapter,-1);assert.equal(chapter,0);
});

test('all chapters remain playable and completion badges identify only actual completed chapters',()=>{
 const fresh=Object.freeze({version:2,completed:Object.freeze([])});
 for(let chapter=0;chapter<=8;chapter++){
  const state=selectorState(chapter,fresh);
  assert.equal(state.canPlay,true);
  assert.equal(state.status,chapter===0?'watch':'unplayed');
  assert.deepEqual(state.entryIds,chapter===0?['0:0']:[`${chapter}:0`,`${chapter}:1`]);
 }
 assert.deepEqual(fresh,{version:2,completed:[]});
 assert.equal(selectorState(8,{completed:[8]}).status,'complete');
 for(let chapter=1;chapter<8;chapter++)assert.equal(selectorState(chapter,{completed:[8]}).status,'unplayed');
 assert.equal(selectorState(8,{completed:8,maxUnlocked:8}).status,'unplayed','an old frontier must not be interpreted as a completed set');
});

test('fresh chapter eight can be selected and entered without completing or writing earlier chapters',()=>{
 const f=fixture();try{
  const saved=f.store.read(),writes=f.writes();
  assert.equal(f.selector.getState().chapter,1);
  f.selector.next();assert.equal(f.selector.getState().chapter,2);
  assert.equal(f.controls.confirm.getAttribute('aria-disabled'),null);
  assert(f.groups[2].links.every(link=>link.getAttribute('href')));
  assert.equal(f.selector.confirm(),true);
  f.selector.select(8);assert.equal(f.selector.confirm(),true);
  assert.equal(f.context.focused.getAttribute('data-entry'),'8:0');
  assert(f.groups[8].links.every(link=>link.getAttribute('aria-disabled')===null));
  assert(f.groups[8].links.every(link=>link.hint.textContent==='未通关'));
  f.selector.select(0);assert.equal(f.selector.confirm(),true);
  assert.equal(f.context.focused.getAttribute('data-entry'),'0:0');
  f.selector.select(1);assert.equal(f.selector.confirm(),true);
  assert.equal(f.context.focused.getAttribute('data-entry'),'1:0');
  assert.deepEqual(f.groups[1].links.map(link=>link.getAttribute('href')),['./chapter1-v0/','./chapter1-v1/']);
  assert.deepEqual(f.store.read(),saved);assert.equal(f.writes(),writes,'selection UI must not write story completion');
 }finally{f.cleanup();}
});

test('out-of-order completion refreshes shared role badges without marking unplayed chapters complete',()=>{
 const f=fixture();try{
  f.selector.select(2);
  assert.equal(f.store.complete(2).reason,'completed');
  f.window.dispatch('storage',{key:f.store.key});
  assert.equal(f.selector.getState().status,'complete');
  assert.equal(f.controls.confirm.getAttribute('aria-disabled'),null);
  assert.deepEqual(f.groups[2].links.map(link=>link.getAttribute('href')),['./chapter2-v0/','./chapter2-v1/']);
  assert.equal(f.selector.confirm(),true);assert.equal(f.context.focused.getAttribute('data-entry'),'2:0');
  assert(f.groups[2].links.every(link=>link.hint.textContent==='已通关'));
  assert.equal(f.store.complete(2).reason,'already-completed');
  assert.equal(f.store.complete(8).reason,'completed');
  assert.deepEqual(f.store.read(),{version:2,completed:[2,8]});
  f.selector.select(1);assert.equal(f.selector.getState().status,'unplayed');
  f.selector.select(3);assert.equal(f.selector.confirm(),true);assert.equal(f.selector.getState().status,'unplayed');
  f.selector.select(8);assert.equal(f.selector.getState().status,'complete');
 }finally{f.cleanup();}
});

test('the two original gender variants have explicit labels and the entry explains free chapter choice',()=>{
 assert.equal((html.match(/>Q哥版<\/a>/g)||[]).length,8);
 assert.equal((html.match(/>Q妹版<\/a>/g)||[]).length,8);
 assert(html.includes('所有章节均可直接游玩'));
 assert(!html.includes('通关后再开启下一集'));
});
