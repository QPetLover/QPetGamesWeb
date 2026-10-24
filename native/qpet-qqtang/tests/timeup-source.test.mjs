import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {QQtangGame} from '../game-logic.js';
import {instances} from '../assets/instances.js';

const source=fs.readFileSync(new URL('./source-gameover.as',import.meta.url),'utf8');
const endSource=fs.readFileSync(new URL('./source-sprite214-frame103.as',import.meta.url),'utf8');
function start(totalPlayer){
 const rng=[];const g=new QQtangGame({random:n=>{rng.push(n);return 0;}});
 if(totalPlayer===2){g.action('double');g.keyUp(32);g.keyUp(13);}else g.action('single');
 g.tick();g.tick();return{g,rng};
}
function originalGameover(g){
 const scores=g.scores.map(s=>({...s})),attached=[],rng=[],timeouts=[],panels=[];
 const brickArea={attachMovie(linkage,name,depth,init){
  for(const h of g.heroes)if(brickArea['hero'+h.heroNum]?.getDepth()===depth)delete brickArea['hero'+h.heroNum];
  const clip={...init,gotoAndStop(frame){this.frame=frame;}};this[name]=clip;attached.push({linkage,name,depth,clip});return clip;
 }};
 for(const h of g.heroes)brickArea['hero'+h.heroNum]={heroNum:h.heroNum,heroId:h.heroId,_x:h.px,_y:h.py,getDepth:()=>h.depth,gotoAndStop(frame){this.frame=frame;}};
 const parent={timer:{timeStop(){}},allPan:{heroDie(n){scores[n-1].dead=true;},upDate(){}},stageScore:{gotoAndStop(label){panels.push(label);}}};
 for(let i=0;i<4;i++)parent['heroObj'+(i+1)]=scores[i];
 const scope={_parent:parent,brickArea,totalPlayer:g.totalPlayer,stageNum:g.stage,bgMusic_sound:{stop(){}},game:{onEnterFrame(){}},youWin:{play(){}},random(n){rng.push(n);return 0;},setInterval(fn,ms){timeouts.push({fn,ms});return timeouts.length;},clearInterval(){},trace(){},int:Math.trunc};
 vm.runInNewContext(source,scope);scope.gameover('timeup');return{scores,attached,rng,timeouts,panels};
}

test('fixed source timeup loss attaches plain heroExp without smoke RNG or proximity score callback',()=>{
 for(const players of[1,2]){
  const{g,rng}=start(players);const ai=g.heroes[players];
  for(const human of g.heroes.slice(0,players)){human.px=ai.px;human.py=ai.py;}
  const original=originalGameover(g),before=rng.length;g.gameover('timeup');
  assert.equal(original.rng.length,0);assert.equal(rng.length,before);
  assert.equal(original.attached.length,players);assert.equal(g.deaths.length,players);
  for(let i=0;i<players;i++){
   const src=original.attached[i],native=g.deaths[i];
   assert.equal(src.linkage,'heroExp');assert.equal(src.clip.onEnterFrame,undefined);
   assert.equal(native.proximity,false);assert.equal(native.heroId,src.clip.heroId);
   assert.equal(native.x,src.clip._x);assert.equal(native.y,src.clip._y);assert.equal(native.depth,src.depth);
  }
  assert.deepEqual(g.scores,original.scores);assert.equal(original.timeouts[0].ms,3000);
  // The remaining AI is deliberately in range. Neither source plain bubbles
  // nor their native timelines can award a post-timeout proximity bonus.
  for(let i=0;i<90;i++)g.tick();original.timeouts[0].fn();
  assert.deepEqual(g.scores,original.scores);assert.equal(g.scores[players].score,0);
  assert.deepEqual(original.panels,['lose']);assert.equal(g.panel,players===2?5:4);
 }
});

test('plain timeout bubble continues its original103-frame timeline without ordinary hurt callback',()=>{
 const{g}=start(1);g.gameover('timeup');const d=g.deaths[0];
 assert.equal(instances[214].frames.length,103);
 for(let i=0;i<101;i++)g.advanceDeath(d);
 assert.equal(d.age,101);assert.notEqual(d.removed,true);
 g.advanceDeath(d);assert.equal(d.age,102);assert.equal(d.removed,true);
 assert.deepEqual(g.scores.map(s=>s.score),[0,0,0,0]);
});

test('ordinary and timeout bubbles both remove at original frame103 (zero-based age102)',()=>{
 let sourceRemoved=false;vm.runInNewContext(endSource,{_parent:{removeMovieClip(){sourceRemoved=true;}}});assert.equal(sourceRemoved,true);
 for(const ordinary of[false,true]){
  const{g}=start(1);const hero=g.heroes[0];
  if(ordinary){hero.shield=0;g.hurtHero(hero);}else g.gameover('timeup');
  const d=g.deaths[0];d.age=101;d.popped=true;g.advanceDeath(d);
  assert.equal(d.age,instances[214].frames.length-1);assert.equal(d.removed,true);
 }
});
