import test from 'node:test';
import assert from 'node:assert/strict';
import {TaekwondoGame} from '../game.js';
import {Clip} from '../scene.js';
// Expected phases derive from the fixed AVM2 source, not the raw-AS host.
// frame_lifecycle.rs:25-46,113-123; movie_clip.rs:825-884,2261-2459.
test('all six victory timelines expose 100 to root ENTER_FRAME before their frame100 goto71',()=>{
 for(const [sex,level] of [[103,3],[102,3],[103,1],[102,1],[103,2],[102,2]]){
  const g=new TaekwondoGame({random:()=>.3}),r=g.root;r.sex=sex;r.level=level;r.gk=10;r.init();g.flushInitial();r.chushi();g.flushInitial();r.i=0;r.life=5;r.guoguan();g.flushInitial();
  const mc=r.ply.mc;mc.gotoAndPlay(99);g.frameTick();assert.equal(mc.currentFrame,99,'goto skips next Enter');
  const seen=[];g.stage.addEventListener('enterFrame',()=>seen.push(mc.currentFrame));g.frameTick();
  assert.equal(seen.at(-1),100,[sex,level].join(':'));assert.equal(r.sl.visible,true);assert.equal(r.ply.visible,false);assert.equal(mc.currentFrame,71);
  g.frameTick();assert.equal(mc.currentFrame,71);g.frameTick();assert.equal(mc.currentFrame,72);
 }
});
test('same-frame goto skips one Enter through the subtree; stop alone does not stop children',()=>{
 const g=new TaekwondoGame({random:()=>.3}),parent=g.makeClip('2735',null,{id:'2735',matrix:[1,0,0,1,0,0]});g.root.addChild(parent);g.flushInitial();
 const child=new Clip(g,'2735');parent.addChild(child);g.flushInitial();parent.stop();g.frameTick();assert.equal(parent.currentFrame,1);assert.equal(child.currentFrame,2);
 parent.gotoAndStop(1);g.frameTick();assert.equal(child.currentFrame,2);g.frameTick();assert.equal(child.currentFrame,3);
});
test('frame-script goto keeps old currentFrame until return, queues target script and never recurses',()=>{
 const g=new TaekwondoGame({random:()=>.3}),clip=new Clip(g,'2735');g.root.addChild(clip);const trace=[];let active=false;
 clip.addFrameScript(0,()=>{active=true;trace.push(['before',clip.currentFrame]);clip.gotoAndPlay(3);trace.push(['after',clip.currentFrame]);active=false;},2,()=>{assert.equal(active,false);trace.push(['target',clip.currentFrame]);});
 g.flushInitial();assert.deepEqual(trace,[['before',1],['after',1],['target',3]]);g.frameTick();assert.equal(clip.currentFrame,3);g.frameTick();assert.equal(clip.currentFrame,4);
});
test('timeline construction waits until Construct, explicit new construction is synchronous',()=>{
 const g=new TaekwondoGame({random:()=>.3}),trace=[];const saved=g.placement;g.placement={id:'2735'};const timeline=new Clip(g,'2735');timeline.deferConstruct(()=>trace.push('timeline'));g.placement=saved;
 const explicit=new Clip(g,'2735');explicit.deferConstruct(()=>trace.push('explicit'));assert.deepEqual(trace,['explicit']);g.constructPending();assert.deepEqual(trace,['explicit','timeline']);
});

test('practice D/F/J/K → challenge isolates only discarded Ball null-parent source exception and advances Start',async()=>{
 const {createOracle,snapshot}=await import('./oracle-host.mjs');const{Game:OracleGame}=createOracle();
 const pair=[new TaekwondoGame({random:()=>.3}),new OracleGame({random:()=>.3})];
 for(const g of pair){g.click(g.root.lx);for(let i=0;i<65;i++)g.advance(1000/24);for(const key of[68,70,74,75]){g.keyDown(key);for(let i=0;i<5;i++)g.advance(1000/24);g.keyUp(key);}g.click(g.root.btn);}
 for(let i=0;i<100;i++){for(const g of pair)g.advance(1000/24);assert.deepEqual(snapshot(pair[0]),snapshot(pair[1]));}
 for(const g of pair){assert.equal(g.root.gk,1);assert(g.root.i<10);assert.equal(g.root.st.currentFrame,55);assert(g.scriptAborts.some(e=>e.kind.includes('detached-actor-null-parent')));assert(g.scriptAborts.length<=100);}
});
test('unexpected handler errors, including a different null access, still propagate',()=>{
 const g=new TaekwondoGame({random:()=>.3});const bad={id:'55',parent:null};bad.onEnterFrame=()=>{throw new TypeError("Cannot read properties of null (reading 'life')")};g.addListener(bad,'enterFrame',bad.onEnterFrame);assert.throws(()=>g.dispatchOwner(bad,'enterFrame'),/reading 'life'/);
});
test('detached Ball guard occurs after original movement and does not depend on engine error text',()=>{
 const g=new TaekwondoGame({random:()=>.3});g.click(g.root.lx);for(let i=0;i<65;i++)g.advance(1000/24);const ball=g.root.ball,player=g.root.ply;g.click(g.root.btn);assert.equal(ball.parent,null);assert.equal(player.parent,null);ball.y=100;ball.vy=1;ball.pendi=false;const n=g.scriptAborts.length;ball.onEnterFrame({});player.key({});assert.equal(ball.vy,1.5);assert.equal(ball.y,101.5);assert.deepEqual(g.scriptAborts.slice(n).map(e=>e.owner),['55','3262']);
});
