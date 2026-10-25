import test from 'node:test';
import assert from 'node:assert/strict';
import {PROGRESS_KEY,LEGACY_PROGRESS_KEY,createProgressStore} from '../common/progress.js';

const progress=(...completed)=>({version:2,completed});
const legacy=completed=>({version:1,completed,maxUnlocked:Math.min(8,completed+1)});
const memoryStorage=()=>{
 const values=new Map();
 return{values,getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,String(value))};
};
const put=(storage,key,value)=>storage.setItem(key,JSON.stringify(value));
const storeFor=storage=>createProgressStore({storage,fallbackStorage:null});

test('every archived entry is playable without progress; unrelated old/debug keys are ignored',()=>{
 const storage=memoryStorage();put(storage,'qpet-adventure-progress',{completed:8});put(storage,'qpet-adventure-debug',8);
 const store=storeFor(storage);assert.equal(store.key,PROGRESS_KEY);assert.notEqual(PROGRESS_KEY,LEGACY_PROGRESS_KEY);
 assert.deepEqual(store.read(),progress());
 for(let chapter=0;chapter<=8;chapter++)assert.equal(store.canPlay(chapter),true);
 for(const value of[-1,9,NaN,Infinity,1.5,'1',null,undefined,{}])assert.equal(store.canPlay(value),false);
 assert.equal(storage.getItem('qpet-adventure-debug'),'8');
});

test('finishing chapter eight first marks only eight and a repeat is idempotent',()=>{
 const storage=memoryStorage(),store=storeFor(storage),result=store.complete(8);
 assert.deepEqual(result,{changed:true,reason:'completed',progress:progress(8)});
 assert.deepEqual(store.read(),progress(8));assert.deepEqual(JSON.parse(storage.getItem(PROGRESS_KEY)),progress(8));
 assert.deepEqual(store.complete(8),{changed:false,reason:'already-completed',progress:progress(8)});
 assert.equal(storage.getItem(LEGACY_PROGRESS_KEY),null,'new games never fabricate an old sequential frontier');
});

test('out-of-order completions survive reload while invalid values and the prologue mark nothing',()=>{
 const storage=memoryStorage(),store=storeFor(storage);store.complete(5);store.complete(1);
 assert.deepEqual(store.read(),progress(1,5));assert.deepEqual(storeFor(storage).read(),progress(1,5));
 assert.equal(store.complete(0).reason,'prologue');
 for(const value of[-1,9,NaN,Infinity,1.5,'3',null,undefined,{chapter:3}])assert.equal(store.complete(value).changed,false);
 assert.deepEqual(store.read(),progress(1,5));
});

test('valid v1 saves migrate only their genuinely completed prefix and retain the old key',()=>{
 for(let completed=0;completed<=8;completed++){
  const storage=memoryStorage();put(storage,LEGACY_PROGRESS_KEY,legacy(completed));const before=storage.getItem(LEGACY_PROGRESS_KEY);
  const store=storeFor(storage),expected=progress(...Array.from({length:completed},(_,index)=>index+1));
  assert.deepEqual(store.read(),expected);assert.deepEqual(JSON.parse(storage.getItem(PROGRESS_KEY)),expected);
  assert.equal(storage.getItem(LEGACY_PROGRESS_KEY),before);
 }
 const storage=memoryStorage();put(storage,LEGACY_PROGRESS_KEY,legacy(3));const store=storeFor(storage);store.complete(8);
 assert.deepEqual(store.read(),progress(1,2,3,8));
});

test('an existing v2 save wins over v1 even when empty or an old cached page later changes v1',()=>{
 for(const saved of[progress(),progress(8)]){
  const storage=memoryStorage();put(storage,LEGACY_PROGRESS_KEY,legacy(3));put(storage,PROGRESS_KEY,saved);
  const store=storeFor(storage);assert.deepEqual(store.read(),saved);
  put(storage,LEGACY_PROGRESS_KEY,legacy(8));assert.deepEqual(store.read(),saved);assert.deepEqual(storeFor(storage).read(),saved);
 }
});

test('malformed v2 and inconsistent legacy saves do not invent completion badges',()=>{
 const invalidV2=['bad-json','null','[]','{}',JSON.stringify({version:1,completed:[8]}),
  ...[null,8,[0],[9],[-1],[1.5],['1'],[1,null]].map(completed=>JSON.stringify({version:2,completed}))];
 for(const raw of invalidV2){const storage=memoryStorage();storage.setItem(PROGRESS_KEY,raw);assert.deepEqual(storeFor(storage).read(),progress(),raw);}
 const invalidV1=[{version:1,completed:1,maxUnlocked:8},{version:1,completed:8,maxUnlocked:9},
  ...[-1,9,1.5,'1'].map(completed=>({version:1,completed,maxUnlocked:2}))];
 for(const value of invalidV1){const storage=memoryStorage();put(storage,LEGACY_PROGRESS_KEY,value);assert.deepEqual(storeFor(storage).read(),progress());}
 const storage=memoryStorage();storage.setItem(PROGRESS_KEY,'bad-json');put(storage,LEGACY_PROGRESS_KEY,legacy(2));
 assert.deepEqual(storeFor(storage).read(),progress(1,2),'invalid new state may recover a valid legacy save');
});

test('v2 is canonicalized and returned snapshots cannot mutate the store',()=>{
 const storage=memoryStorage();put(storage,PROGRESS_KEY,progress(5,1,5));const store=storeFor(storage);
 assert.deepEqual(store.read(),progress(1,5));const snapshot=store.read();snapshot.completed.push(8);snapshot.completed[0]=7;snapshot.version=99;
 assert.deepEqual(store.read(),progress(1,5));const result=store.complete(3);result.progress.completed.length=0;
 assert.deepEqual(store.read(),progress(1,3,5));
});

test('both variants and concurrent page stores share actual completed chapters',()=>{
 const storage=memoryStorage(),qBrother=createProgressStore({storage,fallbackStorage:null,variant:0}),qSister=createProgressStore({storage,fallbackStorage:null,variant:1});
 qBrother.complete(5);qSister.complete(8);assert.deepEqual(qBrother.read(),progress(5,8));
 qBrother.complete(1);assert.deepEqual(qSister.read(),progress(1,5,8));assert.equal(qSister.complete(8).reason,'already-completed');
});

test('write-blocked readable legacy primary merges with disjoint v2 session completions',()=>{
 const primary=memoryStorage(),session=memoryStorage();put(primary,LEGACY_PROGRESS_KEY,legacy(3));put(session,PROGRESS_KEY,progress(8));
 const before=primary.getItem(LEGACY_PROGRESS_KEY);primary.setItem=()=>{throw Error('quota');};
 const store=createProgressStore({storage:primary,fallbackStorage:session});assert.deepEqual(store.read(),progress(1,2,3,8));
 store.complete(5);assert.deepEqual(JSON.parse(session.getItem(PROGRESS_KEY)),progress(1,2,3,5,8));
 assert.deepEqual(createProgressStore({storage:primary,fallbackStorage:session}).read(),progress(1,2,3,5,8));
 assert.equal(primary.getItem(LEGACY_PROGRESS_KEY),before);
});

test('disjoint readable v2 primary and session badges merge rather than comparing their max or count',()=>{
 const primary=memoryStorage(),session=memoryStorage();put(primary,PROGRESS_KEY,progress(8));put(session,PROGRESS_KEY,progress(1,2,3));
 primary.setItem=()=>{throw Error('quota');};
 assert.deepEqual(createProgressStore({storage:primary,fallbackStorage:session}).read(),progress(1,2,3,8));
});

test('runtime storage read/write failures merge and preserve current state through session fallback',()=>{
 for(const kind of['read','write']){
  const primary=memoryStorage(),session=memoryStorage();put(session,PROGRESS_KEY,progress(8));
  let blocked=false;const get=primary.getItem,set=primary.setItem;
  primary.getItem=key=>{if(blocked&&kind==='read')throw Error('denied');return get(key);};
  primary.setItem=(key,value)=>{if(blocked&&kind==='write')throw Error('quota');set(key,value);};
  const store=createProgressStore({storage:primary,fallbackStorage:session});store.complete(5);blocked=true;store.complete(1);
  assert.deepEqual(store.read(),progress(1,5,8),kind);assert.deepEqual(JSON.parse(session.getItem(PROGRESS_KEY)),progress(1,5,8));
 }
});

test('unavailable storage stays playable and remembers completions in instance memory',()=>{
 const broken={getItem(){throw Error('denied');},setItem(){throw Error('denied');}};
 const store=createProgressStore({storage:broken,fallbackStorage:broken});assert.doesNotThrow(()=>store.read());
 assert.equal(store.canPlay(8),true);assert.equal(store.complete(8).changed,true);store.complete(1);
 assert.deepEqual(store.read(),progress(1,8));assert.deepEqual(createProgressStore({storage:null,fallbackStorage:null}).read(),progress());
});
