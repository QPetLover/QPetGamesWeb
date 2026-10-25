import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {FishingGame,STEP,difficultyFor,bloodChange,totalScore,endingFor} from '../game-logic.js';
const source=fs.readFileSync(new URL('fixtures/game.as',import.meta.url),'utf8');
function oracle(){
 const qgg={_x:2.75,_y:1.5,stat:undefined,getStat(){return this.stat;},changeStat(stat){this.stat=stat;},recover(){this.stat=this.stat==='无敌右'||this.stat==='加速右'?'右':'左';}};
 for(const key of ['_x','_y']){let value=qgg[key];Object.defineProperty(qgg,key,{get:()=>value,set(v){value=Math.trunc(v*20)/20;},configurable:true});}
 const context=vm.createContext({qgg,_x:200.4,_y:149.8,qggInit:{},Stage:{width:400},scoreBoard:{board:{updateData(){}},updateData(){}},bloodBar:{gotoAndStop(f){this.frame=f;}},timerBar:{updateData(d){this.frame=d;}},timeBar:{updateData(){}},ship:{stop(){},play(){}},submarine:{stop(){},play(){}},alert:{play(){}},Mouse:{show(){},hide(){}},mx:{events:{EventDispatcher:{initialize(stage){stage.addEventListener=()=>{};stage.dispatchEvent=()=>{};}}}},Math});
 vm.runInContext(source,context);return context;
}
for(const fish of [0,1,29,30,31,89,90,91,149,150,151,999]){
 const o=oracle();o.go();o.scoreBoard.updateData(fish);
 assert.deepEqual(difficultyFor(fish),{fish:o.fishCount,mine:o.mineCount,torpedo:o.torpedoCount});
}
for(const health of [2,3,10,11])for(const delta of [-2,-1,2,20]){
 const o=oracle();o.qgg.bloodCount=health;const prior=o.onEnterFrame;o.qgg.changeBlood(delta);const actual=bloodChange(health,delta);
 assert.equal(actual.blood,o.qgg.bloodCount);assert.equal(actual.frame,o.bloodBar.frame);assert.equal(actual.lethal,o.onEnterFrame!==prior);
}
for(const mode of ['左','右','加速左','加速右','无敌左','无敌右','被炸','补血','加速','无敌']){
 const o=oracle(),g=new FishingGame();g.start();g.qgg.visible=true;g.qgg.stat=mode;o.qgg._visible=true;o.qgg.stat=mode;
 for(let i=0;i<180;i++){
  const x=200+180*Math.sin(i*.13),y=i%3===0?10:i%3===1?295:170;
  g.pointer(x,y,false);o._xmouse=x-200.4;o._ymouse=y-149.8;o.mouseFollow();g.movePlayer();
  assert.equal(g.qgg.x,o.qgg._x,mode+' x '+i);assert.equal(g.qgg.y,o.qgg._y,mode+' y '+i);assert.equal(g.qgg.stat,o.qgg.stat,mode+' state '+i);
  assert.equal(g.qgg.speedTimer,o.qgg.speedUpTimer);assert.equal(g.qgg.kingTimer,o.qgg.kingTimer);
 }
}
// Exact source frame callbacks choose facing after a power expires; the main
// timeline oracle alone does not install these child-frame functions.
for(const [mode,frame]of [['无敌右',3],['无敌左',5],['加速右',6],['加速左',8]]){
 let nextStat;const original=vm.createContext({changeStat:stat=>{nextStat=stat;}});vm.runInContext(fs.readFileSync(new URL('fixtures/qgg-frame-'+frame+'.as',import.meta.url),'utf8'),original);original.recover();
 const g=new FishingGame();g.start();g.qgg.stat=mode;g.recoverQgg();assert.equal(g.qgg.stat,nextStat,'source child frame '+frame+' keeps the original facing');
}
for(const total of [-5,0,49,50,51,199,200,201,1000]){
 const c=vm.createContext({stop(){},score:{total},ending:{frame:1,gotoAndStop(label){this.frame={A:2,B:3,C:4}[label];}}});
 vm.runInContext(fs.readFileSync(new URL('fixtures/ending.as',import.meta.url),'utf8'),c);assert.equal(endingFor(total),c.ending.frame);
}
for(const choice of [0,.199999,.2,.799999,.8,.999999]){
 const c=vm.createContext({Math:{random:()=>choice},stop(){},gotoAndStop(){}});
 vm.runInContext(fs.readFileSync(new URL('fixtures/gift.as',import.meta.url),'utf8'),c);
 const game=new FishingGame({rng:()=>choice});game.start();assert.equal(game.dropGift().stat,c.stat);
}
const score={fish:80,bloodBag:2,speedBag:3,kingBag:4,mined:5,torpedoed:6};
const c=vm.createContext({game:{score},replay:{},exit:{},stop(){}});vm.runInContext(fs.readFileSync(new URL('fixtures/root-play.as',import.meta.url),'utf8'),c);c.calScore();assert.equal(totalScore(score),c.score.total);
const game=new FishingGame({rng:()=>.6});for(let i=0;i<203;i++)game.tick();assert.equal(game.introFrame,204);for(let i=0;i<100;i++)game.tick();assert.equal(game.introFrame,204);assert.equal(game.status,'intro');assert.equal(game.action('continue-intro'),true);for(let i=0;i<19;i++)game.tick();assert.equal(game.status,'playing');assert.equal(game.gameAge,0);for(let i=0;i<39;i++)game.tick();assert.equal(game.qgg.visible,false);game.tick();assert.equal(game.qgg.visible,true);assert.equal(game.timerBarFrame,1);
game.action('exit');assert.equal(game.status,'summary');assert.equal(game.score.total,totalScore(game.score));game.action('replay');assert.equal(game.score.fish,0);assert.equal(game.entities.length,0);assert.equal(game.pendingDeath,false);assert.equal(game.qgg.blood,11);
const clock=new FishingGame({now:0});clock.advance(STEP-.01);assert.equal(clock.frame,0);clock.advance(STEP+.01);assert.equal(clock.frame,1);clock.advance(100000);assert.ok(clock.frame<=6,'late RAF is bounded instead of consuming minutes of game frames');
console.log('source oracle: difficulty, HP/death, 1800 movement/power ticks, gifts, all ending thresholds, intro, replay and bounded clock passed; static VM host is not browser acceptance');
