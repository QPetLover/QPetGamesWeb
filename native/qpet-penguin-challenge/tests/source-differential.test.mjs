import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
import {PenguinChallengeRules} from '../rules.js';
const source=JSON.parse(fs.readFileSync(new URL('./source-methods.json',import.meta.url)));
// Test-only adaptation: preserve original statement bodies and remove AS types.
function method(file,name,random=()=>.5){
 const body=source[file].methods[name].replace(/(:)(?:Number|int|uint|String|Boolean|MovieClip|Event|KeyboardEvent)\b/g,'');
 const math=Object.create(Math);math.random=random;
 return vm.runInNewContext('(function(param1){with(this){'+body+'}})',{Math:math,trace(){},Number,String});
}
function rng(seed=1){return()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/2**32;};}
const rootFields=['_score','_oldF','_totalF','_max','_AddScore','_visibled','_oldX','_oldY','_speed'];
const playerFields=['x','y','_space','_left','_leftLong','_right','_rightLong','_nowJump','_hitWood','_downSpeed','_LR','_LRMove'];
function snapshot(root,player,frame){return [Object.fromEntries(rootFields.map(k=>[k,root[k]])),Object.fromEntries(playerFields.map(k=>[k,player[k]])),frame];}

test('literal original player methods agree over twip coordinates, movement, jump strength, simultaneous arrows and collision combinations',()=>{
 const random=rng(71),sourceEnter=method('ORG/Apenguin.as','onEnter'),sourceHit=method('ORG/Apenguin.as','hitFunction');let cases=0;
 for(let sample=0;sample<3200;sample++){
  const hitStart=random()<.2,mask=Array.from({length:8},()=>random()<.16);
  const game=new PenguinChallengeRules({random:rng(sample+1),hitStart:()=>hitStart,hitPlatform:p=>mask[p._testIndex]});game.start();
  for(let i=0;i<8;i++){game.platforms[i]._testIndex=i;game.platforms[i]._id=i+1+8*Math.trunc(random()*5);}
  Object.assign(game,{_score:Math.trunc(random()*40),_oldF:Math.trunc(random()*40),_max:Math.trunc(random()*5),_speed:Math.trunc(random()*120)/20});
  Object.assign(game.player,{x:Math.trunc(random()*16000)/20,y:Math.trunc(random()*14000)/20,_space:sample%2,_left:(sample>>1)%2,_right:(sample>>2)%2,_leftLong:sample%12,_rightLong:(sample*7)%12,_nowJump:(sample>>3)%2,_hitWood:sample%9,_downSpeed:-43+Math.trunc(random()*77),_LR:-13+Math.trunc(random()*27),frame:sample%7+1});
  const root=new Proxy(Object.fromEntries(rootFields.map(k=>[k,game[k]])),{set(target,k,v){target[k]=['_score','_oldF','_totalF','_max','_AddScore','_visibled'].includes(k)?v>>>0:v;return true;}});
  let sourceX=game.player.x,sourceY=game.player.y;
  const p={...game.player,parent:root,_wood:game.startWood,_addMc:{score:{text:''},gotoAndPlay(){}},_penguin:{currentFrame:game.player.frame,gotoAndStop(n){this.currentFrame=n;}},hitTestObject:()=>hitStart};
  Object.defineProperties(p,{x:{get(){return sourceX;},set(v){sourceX=Math.trunc(v*20)/20;}},y:{get(){return sourceY;},set(v){sourceY=Math.trunc(v*20)/20;}}});
  for(let i=0;i<8;i++)p['_mutou'+(i+1)]={...game.platforms[i],hitTestPoint:()=>mask[i]};
  p.hitFunction=sourceHit;
  sourceEnter.call(p,{});game.tickPlayer();
  assert.deepEqual(snapshot(game,game.player,game.player.frame),snapshot(root,p,p._penguin.currentFrame),'sample '+sample);
  cases++;
 }
 assert.equal(cases,3200);
});

test('original direction key state and held lengths remain independent',()=>{
 const game=new PenguinChallengeRules({random:rng(),hitStart:()=>false,hitPlatform:()=>false});game.start();
 const p={...game.player};
 for(const code of [37,39,32,13,37,39,32,13]){
  method('ORG/Apenguin.as','onKeydown').call(p,{keyCode:code});game.keyDown(code);
  for(const k of ['_left','_right','_space'])assert.equal(game.player[k],p[k]);
 }
 p._leftLong=game.player._leftLong=9;p._rightLong=game.player._rightLong=12;
 for(const code of [37,32,39,13]){
  method('ORG/Apenguin.as','onKeyup').call(p,{keyCode:code});game.keyUp(code);
  for(const k of ['_left','_right','_space','_leftLong','_rightLong'])assert.equal(game.player[k],p[k]);
 }
});

test('original clock score accumulation and five digit scope agree, including overflow of displayed width',()=>{
 const random=rng(10),sourceTotal=method('COM/MyTime.as','totalScore'),sourceClock=method('COM/MyTime.as','onEnter');
 for(let sample=0;sample<500;sample++){
  const game=new PenguinChallengeRules({random:rng(),hitStart:()=>false,hitPlatform:()=>false});game.start();
  Object.assign(game,{_speed:sample%4,_oldSpeed:sample%3,_totalScore:Math.trunc(random()*1000000),_score:Math.trunc(random()*10000),_AddScore:sample%21,arrowRotation:sample%180*2-178});
  const root=new Proxy({_speed:game._speed,_oldSpeed:game._oldSpeed,_totalScore:game._totalScore,_score:game._score,_AddScore:game._AddScore},{set(t,k,v){t[k]=['_totalScore','_score','_AddScore'].includes(k)?v>>>0:v;return true;}});
  let rotation=game.arrowRotation;const clock={arrowMc:{get rotation(){return rotation;},set rotation(v){rotation=v>180?v-360:v;}},clockMc:{play(){}}};
  for(let i=0;i<6;i++)clock['score'+i]={currentFrame:game.scoreDigits[i],gotoAndStop(n){this.currentFrame=n;}};
  const host={parent:root,_myTimer:clock,totalScore:sourceTotal};sourceClock.call(host,{});game.tickClock();
  for(const k of ['_speed','_oldSpeed','_totalScore','_score','_AddScore'])assert.equal(game[k],root[k]);
  assert.equal(game.arrowRotation,rotation);
  assert.deepEqual(game.scoreDigits,Array.from({length:6},(_,i)=>clock['score'+i].currentFrame));
 }
});

function positionHost(values){const host={...values};for(const axis of['x','y'])if(axis in values){let twips=Math.trunc(values[axis]*20)|0;Object.defineProperty(host,axis,{enumerable:true,get(){return twips/20;},set(value){twips=Math.trunc(value*20)|0;}});}return host;}
function clip(frame=1,count=100){return{currentFrame:frame,gotoAndStop(n){this.currentFrame=Math.min(count,Math.max(1,Math.trunc(n)));}};}
test('literal platform constructor/wrap RNG, hidden mascot frames and source number layout agree',()=>{
 for(let sample=0;sample<600;sample++){
  const randomA=rng(sample+900),randomB=rng(sample+900),g=new PenguinChallengeRules({random:rng(),hitStart:()=>false,hitPlatform:()=>false});g.start();g.random=randomA;const p=g.platforms[0];
  Object.assign(g,{_floor:sample%250,_qqSex:102+sample%2,_qqLevel:1+sample%3,_speed:sample%10/2,_faster:sample%5/2});Object.assign(p,{x:250.05,y:sample%2?699.85:200.05,_id:sample+1,requestedFrame:sample%4+1,mascotVisible:sample%2===0,mascotFrame:1});
  const root=new Proxy({_floor:g._floor,_qqSex:g._qqSex,_qqLevel:g._qqLevel,_speed:g._speed,_faster:g._faster},{set(t,k,v){t[k]=k==='_floor'?v>>>0:v;return true;}});
  const qq={...clip(1,6),visible:p.mascotVisible,num0:{...clip(1,11),x:21,y:5},num1:{...clip(1,11),x:11,y:10},num2:{...clip(1,11),x:1,y:15}};
  const original=positionHost({x:p.x,y:p.y,_id:p._id,parent:root,_myWood:{mc:clip(p.requestedFrame,4),qq}});original.creat=method('ORG/Mutou.as','creat',randomB);
  method('ORG/Mutou.as','onEnter',randomB).call(original,{});g.tickPlatform(p);
  assert.deepEqual([p.x,p.y,p._id,g._floor,p.mascotVisible,p.mascotFrame],[original.x,original.y,original._id,root._floor,qq.visible,qq.currentFrame]);
  assert.equal(Math.max(1,p.requestedFrame),original._myWood.mc.currentFrame);
  if(p.numberValue!==undefined){assert.equal(p.number1,qq.num1.currentFrame);assert.equal(p.number2,qq.num2.currentFrame);}
 }
});
test('literal signed twip background and wall thresholds agree over subpixel inputs',()=>{
 for(let sample=0;sample<600;sample++){
  const g=new PenguinChallengeRules({random:rng(),hitStart:()=>false,hitPlatform:()=>false});g.start();g._speed=sample%20/20;g._faster=sample%13/20;g._floor=sample%251;
  g.bg.y=sample%2?-60.05:-1200.05;g.bgStart.y=sample%2?699.95:-.05;
  const root={_speed:g._speed,_faster:g._faster,_floor:g._floor},bg=positionHost({y:g.bg.y,parent:root}),start=positionHost({y:g.bgStart.y,parent:root});
  method('COM/BgStart.as','onEnter').call(start,{});method('COM/Bg.as','onEnter').call(bg,{});g.tickBackgrounds();assert.deepEqual([g.bg.y,g.bgStart.y],[bg.y,start.y]);
  const wall=g.walls[0];Object.assign(wall,{y:sample%2?-6.05:100.05,oldFrame:4,frame1:2,frame2:4});g.random=rng(sample+1);
  const original=positionHost({y:wall.y,parent:root,_oldFrame:4,mc1:clip(2,16),mc2:clip(4,16)});method('COM/Wall.as','onEnter',rng(sample+1)).call(original,{});g.tickWall(wall);
  assert.deepEqual([wall.y,wall.oldFrame,wall.frame1,wall.frame2],[original.y,original._oldFrame,original.mc1.currentFrame,original.mc2.currentFrame]);
 }
});
