import {instances,localBounds} from './assets/instances.js';
import {stageData} from './stage-data.js';
import {audioTimelineEvents} from './audio-assets.js';
export const FOREST={width:760,height:420,fps:30,step:1000/30,sourceSHA256:'cfc82b0fda9e38bf48151af64422d89e904b32a772c7863fc048ca88c5fe1e1b'};
const px=v=>Number.isNaN(v)?0:Math.trunc(v*20)/20;
const geometricScale=v=>Number.isNaN(v)?0:v;
const sign=v=>Math.abs(v)/v;
const actorLabels={plant:18,climb:66,climbDown:115,landing:164};
const stageIds=new Set(stageData.map(s=>s.symbolId));
const copy=v=>structuredClone(v);
export function transformBounds(b,m){if(!b)return null;const points=[];for(const x of [b[0],b[2]])for(const y of [b[1],b[3]])points.push([m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5]]);return [Math.min(...points.map(p=>p[0])),Math.min(...points.map(p=>p[1])),Math.max(...points.map(p=>p[0])),Math.max(...points.map(p=>p[1]))];}
const matrix=v=>[...v.matrix.slice(0,4),v.matrix[4]/20,v.matrix[5]/20];
export function overlap(a,b){return !!(a&&b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]);}
function entity(source){const m=matrix(source);return {...source,x:m[4],y:m[5],sx:m[0],sy:m[3],frame:1,age:0,playing:true,selected:false,lightFrame:1,lightPlaying:false};}
function nestedBox(e,name){if(!e)return null;const entry=instances[e.id]?.frames[(e.frame-1)%instances[e.id].frames.length]?.find(v=>v.name===name);return entry?transformBounds(transformBounds(localBounds[entry.id],matrix(entry)),[geometricScale(e.sx),0,0,geometricScale(e.sy),e.x,e.y]):null;}
export function createForestGame({now=0,random=Math.random}={}){
 let frame=0,clock=now,last=now,accumulator=0,rootFrame=1,rootPlaying=false,rootStoppedAge=0,status='menu',level=1,score=0,life=5,stage=null;
 let helpFrame=1,helpPlaying=false,passFrame=1,passPlaying=false,countdownFrame=0,countdownPlaying=false,countdownBornAtFrame=-1,heartFrames=[1,1,1,1,1],heartPlaying=[false,false,false,false,false];
 let timem=0,times=0,timeDisplay='00:00',timeMax=210,timeNow=now,timerActive=false,pointer={x:380,y:380,down:false},events=[],notified=false,submitFrame=1;
 const randomInt=n=>Math.floor(random()*n);
 function sound(timeline,f){for(const e of audioTimelineEvents)if(e.timeline===timeline&&e.frame===f)events.push({type:'sound',id:e.id,options:e.options,frame});}
 sound('root',1);
 function addScore(value,type=1){if(type===1)value=Math.round(value*(stage.floorNow+1)/2.5*level);score+=value;stage.scoreCount++;stage.scores.push({id:String(stage.scoreCount),x:stage.qmm.x,y:stage.qmm.y,value:'+'+value,frame:1});events.push({type:'score',value,total:score,frame});}
 function timeInit(){timem=3;times=30;timeDisplay='03:30';timeNow=Math.floor(clock);timerActive=true;timeMax=210;}
 function gameOver(){timerActive=false;stage=null;passPlaying=false;countdownPlaying=false;rootFrame=147;rootPlaying=false;rootStoppedAge=0;status='failed';events.push({type:'end',result:'failed',score,frame});}
 function lifeDown(){life--;if(life<0)gameOver();else{heartFrames[life]=2;heartPlaying[life]=true;}events.push({type:'hurt',life,frame});}
 function win(){level++;timerActive=false;score+=Math.round((timem*60+times)/timeMax*level);stage.pause=true;stage.ws=0;stage.qmm.frame=stage.qgg.frame=1;stage.qmm.playing=stage.qgg.playing=false;timeDisplay='00:00';passFrame=2;passPlaying=true;status='passed';sound('487',2);events.push({type:'pass',level:level-1,score,frame});}
 function initRoot(){level=1;life=5;score=0;timem=times=0;timeDisplay='00:00';timerActive=false;heartFrames=[1,1,1,1,1];heartPlaying.fill(false);stage=null;passFrame=1;passPlaying=false;countdownPlaying=false;submitFrame=1;notified=false;}
 function makeStage(index){
  const data=copy(stageData[index]);const entries=instances[data.symbolId].frames[0].map(entity);const named=Object.fromEntries(entries.filter(e=>e.name).map(e=>[e.name,e]));
  stage={...data,createdAtFrame:frame,entries,named,qmm:named.qmm,qgg:named.qgg,y:420,x:374.6,floorNow:0,ws:0,aim:0,aimx:0,aimy:0,seedNow:null,seedsGot:0,seedsTotal:(()=>{let i=0;while(named['seed'+i])i++;return i;})(),pause:true,initialized:false,age:0,qmx:named.qmm.x,qgx:named.qgg.x,qms:named.qmm.sx,qgs:named.qgg.sx,flashFrame:1,camera:null,scoreCount:0,scores:[],fireFrame:1,firePlaying:false,fires:[],effects:[]};
  for(const e of entries){if(e.name?.startsWith('seed'))e.playing=false;if(e.name?.startsWith('bingo')){e.frame=e.sx>1.1?2:1;if(e.frame===2)e.sx=e.sy=1;e.playing=false;}if(e.id==='236')e.visible=false;}
  return stage;
 }
 function initializeStage(){stage.initializedAtFrame=frame;stage.qgg.y=stage.qmm.y;stage.initialized=true;stage.pause=false;stage.floorNow=0;stage.ws=1;stage.aim=0;stage.seedsGot=0;stage.qmx=stage.qmm.x;stage.qgx=stage.qgg.x;stage.qms=stage.qmm.sx;stage.qgs=stage.qgg.sx;stage.flashFrame=1;
  for(let i=0;i<stage.npcs.length;i++)for(let j=0;j<stage.npcs[i].length;j++){const e=stage.named[stage.npcs[i][j]];e.xMin=stage.npcsXArea[i][j][0]-375;e.xMax=stage.npcsXArea[i][j][1]-375;e.speed=(randomInt(2)<=0?-1:1)*stage.npcsSpeed[i][j];}
  timeInit();status='playing';
 }
 function enterRoot(next){rootFrame=next;rootStoppedAge=0;sound('root',next);
  if(next===3)initRoot();
  for(let i=0;i<5;i++)if(next===4+i*24)makeStage(i);
  if([13,37,61,85,109].includes(next)){rootPlaying=false;countdownFrame=1;countdownPlaying=true;countdownBornAtFrame=frame;sound('498',1);}
  if([15,39,63,87,111].includes(next)){rootPlaying=false;initializeStage();}
  if([26,50,74,98,122].includes(next)&&status==='failed'){rootFrame=147;rootPlaying=false;}
  if(next===123){rootPlaying=false;stage=null;status='won';events.push({type:'end',result:'won',score,frame});}
  if(next===27||next===51||next===75||next===99)stage=null;
  if(next>165){rootFrame=1;rootPlaying=false;rootStoppedAge=0;status='menu';sound('root',1);}
 }
 function playActor(actor,label){actor.frame=actorLabels[label];actor.playing=true;if(label==='climbDown')actor.y=px(actor.y+120);sound(actor.id,actor.frame);events.push({type:'action',actor:actor.name,action:label,frame});}
 function actorEnter(actor,f){
  sound(actor.id,f);
  if(f===1){if(stage.ws===1)actor.playing=false;}
  if(f===17){actor.frame=1;actorEnter(actor,1);}
  if(actor.id==='343'){
   if(f===40&&stage.seedNow){stage.seedNow.frame=2;stage.seedNow.playing=true;sound(stage.seedNow.id,2);}
   if(f===65||f===163){actor.frame=1;actorEnter(actor,1);}
   if(f===114){actor.y=px(actor.y-120);actor.frame=1;actorEnter(actor,1);}
   if(f===175){if(stage.y-6>420)stage.camera={direction:-1,actor:'qmm'};else stage.y=420;}
   if(f===195&&stage.camera?.actor==='qmm')stage.camera=null;
   if(f===211){actor.y=px(actor.y+120);actor.x=px(actor.x-80*sign(actor.sx));stage.qmx=actor.x;actor.frame=1;actorEnter(actor,1);}
  }else{
   if(f===65){actor.frame=1;stage.aim=0;stage.seedNow=null;stage.ws=1;actorEnter(actor,1);}
   if(f===79){if(stage.y+6<586){if(stage.floorNow>0)stage.camera={direction:1,actor:'qgg'};}else stage.y=586;}
   if(f===99&&stage.camera?.actor==='qgg')stage.camera=null;
   if(f===114){actor.y=px(actor.y-120);stage.floorNow++;stage.aim=0;stage.seedNow=null;stage.ws=1;actor.frame=1;actorEnter(actor,1);}
   if(f===128){if(stage.y+6>420){if(stage.floorNow>0)stage.camera={direction:-1,actor:'qgg-down'};}else stage.y=420;}
   if(f===148&&stage.camera?.actor==='qgg-down')stage.camera=null;
   if(f===163){stage.floorNow--;stage.aim=0;stage.seedNow=null;stage.ws=1;actor.frame=1;actorEnter(actor,1);}
   if(f===211){actor.y=px(actor.y+120);actor.x=px(actor.x-82*sign(actor.sx));stage.qgx=actor.x;stage.floorNow--;stage.aim=0;stage.seedNow=null;stage.ws=1;actor.frame=1;actorEnter(actor,1);}
  }
 }
 function makeEffect(e){const effect={owner:e.name,phase:randomInt(32)+1,leaves:{}};stage.effects.push(effect);e.effect=effect;syncLeaves(effect);}
 function syncLeaves(effect){const display=instances['264'].frames[effect.phase-1],depths=new Set(display.map(v=>v.depth));for(const depth of Object.keys(effect.leaves))if(!depths.has(Number(depth)))delete effect.leaves[depth];for(const v of display)if(!effect.leaves[v.depth])effect.leaves[v.depth]={glyph:randomInt(5)+1,age:0};}
 function tickStageChildren(){
  if(!stage||stage.createdAtFrame===frame)return;stage.age++;
  for(const e of stage.entries){e.age++;
   if(e.name?.startsWith('npc'))e.frame=e.age%instances[e.id].frames.length+1;
   if(e.speed!==undefined&&frame>stage.initializedAtFrame){if(e.x+e.speed>e.xMax){e.x=e.xMax;e.speed=-e.speed;}else if(e.x+e.speed<e.xMin){e.x=e.xMin;e.speed=-e.speed;}else e.x=px(e.x+e.speed);}
   if(e.name?.startsWith('seed')&&e.playing){e.frame++;sound(e.id,e.frame);const end=instances[e.id].frames.length;if(e.frame>=end){e.frame=end;e.playing=false;stage.seedsGot++;addScore(100,1);events.push({type:'plant-grown',name:e.name,seedsGot:stage.seedsGot,frame});}}
   if(e.lightPlaying){e.lightFrame++;if(e.name.startsWith('bingo')){if(e.lightFrame===9)e.lowered=true;if(e.lightFrame>=10){e.removed=true;e.lightPlaying=false;}}else if(e.lightFrame>=23)e.lightFrame=2;}
  }
  // Original trace: descendant phase14 glyph births occur on the same final
  // tick that sprite266 reaches frame10 and removes its parent bingo. Finish
  // that last child step, then destroy the whole tree before later ticks.
  for(const effect of stage.effects){for(const leaf of Object.values(effect.leaves))leaf.age++;effect.phase=effect.phase%32+1;syncLeaves(effect);}
  stage.effects=stage.effects.filter(effect=>!stage.named[effect.owner]?.removed);
  if(stage.flashFrame>1){stage.flashFrame++;if(stage.flashFrame>45)stage.flashFrame=1;}
  // Original trace at both frame114 boundaries executes QGG before QMM.
  for(const actor of [stage.qgg,stage.qmm])if(actor.playing){actor.frame++;actorEnter(actor,actor.frame);}

  stage.scores=stage.scores.filter(s=>++s.frame<21);
  if(stage.firePlaying){stage.fireFrame++;if(stage.fireFrame===2){stage.fireY=-470+(586-stage.y);stage.fires=[424,427,430,433,436].map(id=>({id:String(id),x:randomInt(680)-340,frame:1,burstFrame:0}));}for(const fire of stage.fires){fire.frame++;const burst=['424','427','430'].includes(fire.id)?15:16;if(fire.frame===burst)fire.burstFrame=1;else if(fire.burstFrame)fire.burstFrame++;}if(stage.fireFrame>=87){stage.firePlaying=false;rootPlaying=true;}}
 }
 function tickCamera(){if(!stage)return;
  if(stage.camera){if(stage.camera.direction>0){if(stage.y+6<586)stage.y=px(stage.y+6);else{stage.y=586;stage.camera=null;}}else if(stage.camera.actor==='qgg-down'){if(stage.y+6>420)stage.y=px(stage.y-6);else{stage.y=420;stage.camera=null;}}else if(stage.y-6>420)stage.y=px(stage.y-6);else{stage.y=420;stage.camera=null;}}
 }
 function tickGameplay(){
  if(!stage?.initialized||stage.initializedAtFrame===frame)return;const s=stage,qmm=s.qmm,qgg=s.qgg;
  if(!s.pause){
   if(s.seedsGot>=s.seedsTotal)win();
   if(s.ws===1){
    if(s.aim===0){s.aimx=(pointer.x-s.x)/1.00006103515625;s.aimy=(pointer.y-s.y)/.9999237060546875;}
    s.qmx+=Math.abs((s.aimx-s.qmx)*.3)<=6?(s.aimx-s.qmx)*.3:(s.aimx<=qmm.x?-6:6);
    let mk=sign(qmm.x-s.aimx);qmm.x=px(s.qmx);if(Math.abs(qmm.x-s.aimx)>1)qmm.playing=true;
    // Flash's _xscale setter rejects NaN. At exact alignment mk is 0/0;
    // the source fallback then reads the unchanged previous facing direction.
    const nextQmmScale=s.qms*mk;if(!Number.isNaN(nextQmmScale))qmm.sx=nextQmmScale;if(Number.isNaN(mk))mk=sign(qmm.sx);
    s.qgx+=Math.abs((qmm.x+mk*15-s.qgx)*.3)<=5?(qmm.x+mk*15-s.qgx)*.3:(qmm.x<=qgg.x?-5:5);
    let gk=sign(qgg.x-qmm.x);if(Number.isNaN(gk))gk=sign(qgg.sx);qgg.x=px(s.qgx);qgg.sx=s.qgs*gk;
    let unhit=false;for(const name of s.hitters[s.floorNow]||[])if(overlap(nestedBox(qmm,'hitter'),transformBounds(localBounds[s.named[name].id],[s.named[name].sx,0,0,s.named[name].sy,s.named[name].x,s.named[name].y]))){unhit=true;break;}
    if(!unhit)s.aim=3;
    if(s.aim===3&&sign(qmm.sx)===sign(qgg.sx)){if(Math.abs((qmm.x+mk*15-s.qgx)*.3)>1)qgg.x=px(qgg.x-mk*5);s.ws=0;playActor(qmm,'landing');playActor(qgg,'landing');}
    else if(Math.abs(qmm.x-s.aimx)<1&&Math.abs(qmm.x-qgg.x)<20&&sign(qmm.sx)===sign(qgg.sx)){const action={1:'plant',2:'climb',4:'climbDown'}[s.aim];if(action){s.ws=0;playActor(qmm,action);playActor(qgg,action);}}
    // Source k is undefined. In this SWF6, numeric coercion is 0 (not the
    // modern-JS NaN), so retain k*disQ==0 without substituting mk.
    else if(Math.abs((qmm.x-s.qgx)*.3)>.3)qgg.playing=true;
   }
   for(const name of s.npcs[s.floorNow]||[]){const e=s.named[name],b=nestedBox(e,'hitter');if(overlap(nestedBox(qmm,'hitter2'),b)||overlap(nestedBox(qgg,'hitter2'),b)){if(s.flashFrame===1){lifeDown();
    // This game's original runtime aborts the callback when gameOver's goto147
    // removes gameStage: no fatal hurt sound/flash or later reward loop runs.
    if(!stage)return;
    events.push({type:'sound',id:'1',options:{}});s.flashFrame=2;}break;}}
  }
  const row=s.bingos[s.floorNow]||[];
  for(let i=0;i<row.length;i++){const e=s.named[row[i]],b=nestedBox(e,'hitter');if(overlap(nestedBox(qmm,'hitter2'),b)||overlap(nestedBox(qgg,'hitter2'),b)){addScore(3*e.frame,1);e.hitterHidden=true;e.lightFrame=2;e.lightPlaying=true;makeEffect(e);row.splice(i,1);events.push({type:'sound',id:'2',options:{}});events.push({type:'collect',name:e.name,valueFrame:e.frame,frame});break;}}
 }
 function tick(){frame++;
  if(rootPlaying)enterRoot(rootFrame+1);else rootStoppedAge++;
  if(helpPlaying){helpFrame++;sound('224',helpFrame);if(helpFrame===11)helpPlaying=false;if(helpFrame>20){helpPlaying=false;helpFrame=1;}}
  if(passPlaying){passFrame++;sound('487',passFrame);if(passFrame===11)passPlaying=false;if(passFrame===20){rootPlaying=true;status='transition';}if(passFrame>20){passPlaying=false;passFrame=1;}}
  if(countdownPlaying&&countdownBornAtFrame!==frame){countdownFrame++;sound('498',countdownFrame);if(countdownFrame===57){countdownPlaying=false;rootPlaying=true;}}
  for(let i=0;i<heartFrames.length;i++)if(heartPlaying[i]){heartFrames[i]++;if(heartFrames[i]>=10){heartFrames[i]=10;heartPlaying[i]=false;}}
  tickStageChildren();tickGameplay();tickCamera();
  if(timerActive&&Math.floor(clock)-timeNow>=1000){timeNow=Math.floor(clock);if(times-1>0){times--;timeDisplay=timem+':'+String(times).padStart(2,'0');}else{timem--;times=timem<0?0:60;timeDisplay=String(Math.max(0,timem)).padStart(2,'0')+':'+String(times).padStart(2,'0');}if(timem<=0&&times<=0)gameOver();}
 }
 function clickPlant(name){if(!stage||stage.ws!==1||stage.pause)return false;const e=stage.named[name];if(!e)return false;
  if((stage.seeds[stage.floorNow]||[]).includes(name)){stage.aim=e.frame===1?1:2;}
  else if((stage.seeds[stage.floorNow-1]||[]).includes(name)){if(e.frame>1)stage.aim=4;}
  else return false;
  if(stage.seedNow){stage.seedNow.selected=false;stage.seedNow.lightFrame=1;stage.seedNow.lightPlaying=false;}stage.aimx=e.x;stage.seedNow=e;e.selected=true;e.lightFrame=2;e.lightPlaying=true;return true;
 }
 return {
  action(name){if(name==='start'&&status==='menu'&&helpFrame===1){score=0;rootPlaying=true;rootStoppedAge=0;status='transition';return true;}
   if(name==='help'&&status==='menu'){helpFrame=2;helpPlaying=true;sound('224',2);return true;}
   if(name==='close-help'&&helpFrame===11){helpFrame=12;helpPlaying=true;sound('224',12);return true;}
   if(name==='continue'&&status==='passed'&&passFrame===11){passFrame=12;passPlaying=true;sound('487',12);return true;}
   if(name==='replay'&&['won','failed'].includes(status)){initRoot();rootFrame=1;rootPlaying=false;rootStoppedAge=0;status='menu';sound('root',1);return true;}
   if(name==='submit'){submitFrame=2;events.push({type:'host',method:'unavailable-score-service',service:'encrypt/upload_score',score});return true;}
   if(name==='cancel-submit'){submitFrame=1;return true;}
   if(name?.startsWith('plant:'))return clickPlant(name.slice(6));
   // Original bg.onRelease has no ws/pause guard. A background release during
   // planting clears seedNow before actor frame40, cancelling that seed growth.
   if(name==='background'&&stage?.initialized){stage.aim=0;if(stage.seedNow){stage.seedNow.selected=false;stage.seedNow.lightPlaying=false;stage.seedNow.lightFrame=1;}stage.seedNow=null;return true;}return false;
  },
  pointer(x,y,down=false){pointer={x,y,down};},
  // Animation catch-up is bounded separately from the source getTimer clock.
  // A long callback gap still decrements the original timer only once and
  // re-anchors to the current wall clock; it never invents a per-frame timer.
  advance(nowValue){const elapsed=Math.max(0,nowValue-last);last=nowValue;clock=nowValue;accumulator+=Math.min(elapsed,250);while(accumulator+1e-7>=FOREST.step){accumulator-=FOREST.step;tick();}},
  step(count=1){for(let i=0;i<count;i++){clock+=FOREST.step;last=clock;tick();}},
  view(){return {frame,clock,rootFrame,rootPlaying,rootStoppedAge,status,level,score,life,timem,times,gameTime:timeDisplay,pointer:{...pointer},helpFrame,passFrame,countdownFrame,heartFrames:[...heartFrames],submitFrame,stage:stage?copy(stage):null};},
  drainEvents(){const result=events;events=[];return result;},
 };
}
