import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {SonicGame,CUE_KEYS} from '../engine.mjs';
import {LEVELS} from '../assets/levels.mjs';

// This source adapter is confined to tests and excluded from the game package.
// It executes the unaltered fixed SWF's decompiled input/collision body.
const source=fs.readFileSync(new URL('./fixtures/man-input.as',import.meta.url),'utf8');
const body=source.slice(source.indexOf('{')+1,source.lastIndexOf('}'));
const original=new Function('Key','int','trace','with(this){'+body+'}');
function originalResult(fixture) {
  const root={fen:fixture.score,xue:fixture.damage,sun:{_currentframe:fixture.sun,gotoAndStop(n){this._currentframe=n;}},xuemc:{gotoAndStop(){}}};
  const cue={_currentframe:fixture.frame,i:fixture.type,nam:{mc:{_currentframe:fixture.coin,gotoAndStop(n){this._currentframe=n;}},gotoAndStop(){}},removeMovieClip(){},stop(){}};
  const parent={_parent:root,an:fixture.phase==='playing'?1:fixture.phase==='intro'?-1:0,miao_array:[cue],bjmc:Object.fromEntries([1,2,3,4,5].map(n=>['lu'+n,{stop(){}}])),sou1:{position:1200,stop(){}}};
  const clip={_parent:parent,_currentframe:fixture.man,num1:fixture.num,flag:fixture.flag,gotoAndStop(n){this._currentframe=({kk1:24,kk2:25,kkk:20})[n]??n;}};
  original.call(clip,{isDown:n=>fixture.keys.includes(n)},Math.trunc,()=>{});
  return {score:root.fen,damage:root.xue,man:clip._currentframe,num:clip.num1,flag:clip.flag,queue:parent.miao_array.length,coin:cue.nam.mc._currentframe,sun:root.sun._currentframe,phase:parent.an===0?'hurt':parent.an===-1?'intro':'playing'};
}
function nativeResult(fixture) {
  const game=new SonicGame();game.start();game.phase=fixture.phase;game.score=fixture.score;game.damage=fixture.damage;
  game.sun={frame:fixture.sun,tick:0};game.manFrame=fixture.man;game.num1=fixture.num;game.flag=fixture.flag;game.keys=new Set(fixture.keys);
  const cue={type:fixture.type,frame:fixture.frame,coinFrame:fixture.coin};game.events=[cue];game.queue=[cue];game.input();game.resolve();
  return {score:game.score,damage:game.damage,man:game.manFrame,num:game.num1,flag:game.flag,queue:game.queue.length,coin:cue.coinFrame,sun:game.sun.frame,phase:game.phase};
}
test('fixed three level arrays retain their full lengths and events',()=>{
  assert.deepEqual(LEVELS.map(a=>a.length),[4020,4055,3723]);
  assert.deepEqual(LEVELS.map(a=>a.filter(Boolean).length),[224,301,262]);
  assert(LEVELS.every(a=>a.every(n=>Number.isInteger(n)&&n>=0&&n<=10)));
});
test('input and collision match the original AS across 12,000 boundary fixtures',()=>{
  let random=0x51c7;
  const pick=n=>{random=(Math.imul(random,1664525)+1013904223)>>>0;return random%n;};
  const frames=[13,14,17,18,19,22,23,24,27,28],mans=[1,2,3,4,5,6,7,8,9,20,24,25];
  for(let n=0;n<12000;n++) {
    const mask=pick(16),fixture={type:1+pick(10),frame:frames[pick(frames.length)],man:mans[pick(mans.length)],num:pick(9),flag:pick(2),coin:1+pick(2),score:[0,490,495,499,500,990][pick(6)],damage:[1,91,96][pick(3)],sun:1+pick(3),phase:['playing','playing','intro','hurt'][pick(4)],keys:[37,38,39,40].filter((_,i)=>mask&(1<<i))};
    assert.deepEqual(nativeResult(fixture),originalResult(fixture),JSON.stringify(fixture));
  }
});
test('intro, injury and action timing follow authored frame boundaries',()=>{
  const events=[],game=new SonicGame((type,value)=>events.push({type,value,tick:game.tick}));game.start();
  for(let n=0;n<44;n++)game.step();
  assert.equal(game.phase,'playing');
  assert.deepEqual(events.filter(e=>e.type==='sound').map(e=>[e.tick,e.value.id]),[[4,504],[42,505]]);
  game.setMan(8);game.num1=7;
  for(let n=0;n<3;n++)game.animateMan();assert.equal(game.manFrame,8);
  game.animateMan();assert.equal(game.manFrame,1);assert.equal(game.num1,0);
  game.phase='hurt';game.hurtTick=0;game.setMan(20);game.damage=6;
  for(let n=0;n<24;n++)game.step();assert.equal(game.phase,'hurt');assert.equal(game.manFrame,1);
  game.step();assert.equal(game.phase,'playing');
});
test('natural no-input failure and retry do not retain old cues or damage',()=>{
  const game=new SonicGame();game.start();for(let n=0;n<6000&&game.phase!=='over';n++)game.step();
  assert.equal(game.phase,'over');assert.equal(game.damage,101);assert.equal(game.score,0);
  game.start();assert.equal(game.phase,'intro');assert.equal(game.damage,1);assert.equal(game.queue.length,0);assert.equal(game.score,0);
});
export function autoPlay(game) {
  let held=[];
  for(let n=0;n<15000;n++) {
    if(['clear','victory','over'].includes(game.phase))return {ticks:n,phase:game.phase,score:game.score,damage:game.damage};
    const first=game.queue.find(cue=>!cue.collected);
    let keys=[];
    if(first&&first.frame>=17&&game.phase==='playing') {
      const combo=first.type>=5&&first.type<=8;
      if(!combo||game.queue[0]===first)keys=CUE_KEYS[first.type];
    }
    for(const code of held)if(!keys.includes(code))game.key(code,false);
    for(const code of keys)if(!held.includes(code))game.key(code,true);
    held=keys;game.step();
  }
  throw new Error('Natural sequence did not terminate');
}
test('all three full sequences can be completed using direction-key input',()=>{
  const game=new SonicGame(),results=[];
  for(let stage=1;stage<=3;stage++){game.start(stage,stage>1);results.push(autoPlay(game));assert.equal(game.phase,stage===3?'victory':'clear');}
  assert(results.every(result=>result.damage<100));assert(game.score>10000);
});
