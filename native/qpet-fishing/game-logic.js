import {instances} from './assets/instances.js';
import {audioTimelineEvents,audioStreams} from './audio-assets.js';
import {FPS,gameOrigin,makeNode,rootNode,entityNode,walkTimelines,playerBounds,objectBounds,overlaps,movingOrigin,namedNode} from './source-scene.js';
export const STEP=1000/FPS;
export function difficultyFor(fish){return fish>150?{fish:9,mine:30,torpedo:15}:fish>90?{fish:7,mine:12,torpedo:5}:fish>30?{fish:5,mine:6,torpedo:2}:{fish:3,mine:3,torpedo:0};}
export function totalScore(s){return s.fish+s.bloodBag+s.speedBag+s.kingBag-s.mined-s.torpedoed;}
export function endingFor(total){return total<50?2:total>50&&total<=200?3:total>200?4:1;}
export function bloodChange(current,delta){const value=Math.min(11,current+delta);return{blood:value<=1?current:value,frame:value<=1?1:value,lethal:value<=1};}
const qggFrames={'右':1,'左':2,'无敌右':3,'无敌':4,'无敌左':5,'加速右':6,'加速':7,'加速左':8,'补血':9,'被炸':10,'起始':11};
const specialDurations={'无敌':26,'加速':23,'补血':23,'被炸':36,'起始':41};
const soundEvents=new Map();for(const event of audioTimelineEvents){if(!soundEvents.has(event.timeline))soundEvents.set(event.timeline,[]);soundEvents.get(event.timeline).push(event);}
const frozen=new Set(['被炸','补血','无敌','加速']);
const invincible=new Set(['无敌左','无敌右']);
const pixel=v=>Math.trunc(v*20)/20;
export class FishingGame{
 constructor({rng=Math.random,now=0,onEvent}={}){
  this.rng=rng;this.onEvent=onEvent;this.events=[];this.frame=0;this.status='intro';this.statusAge=0;this.introAge=0;this.introFrame=1;this.introHold=0;this.introReleased=false;this.pointerState={x:200,y:150,down:false};this.lastTime=now;this.accumulator=0;this.gameAge=0;this.entities=[];this.soundFrames=new Map();this.nextId=1;this.endingFrame=1;this.qgg={x:2.75,y:1.5,frame:1,age:0,stat:undefined,visible:false,blood:11,kingTimer:0,speedTimer:0};this.score={fish:0,bloodBag:0,speedBag:0,kingBag:0,mined:0,torpedoed:0};this.collectAudio();
 }
 emit(e){const event={...e,frame:this.frame};this.events.push(event);this.onEvent?.(event);}
 drainEvents(){const events=this.events;this.events=[];return events;}
 view(){return{frame:this.frame,status:this.status,statusAge:this.statusAge,introAge:this.introAge,introFrame:this.introFrame,introHold:this.introHold,gameAge:this.gameAge,qgg:{...this.qgg},score:{...this.score},scoreText:this.scoreText??'',bloodFrame:this.bloodFrame||11,bloodAge:this.bloodAge||0,timerBarFrame:this.timerBarFrame||1,alertFrame:this.alertFrame||1,shipFrame:this.shipFrame||1,shipFlip:this.shipFlip||1,submarineFrame:this.submarineFrame||1,submarineFlip:this.submarineFlip||1,qmmFrame:this.qmmFrame||1,qmmFlip:this.qmmFlip||1,endingFrame:this.endingFrame,pointer:{...this.pointerState},entities:this.entities.filter(e=>!e.removed).map(e=>({...e})),pendingDeath:!!this.pendingDeath,limits:{...this.limits}};}
 pointer(x,y,down=this.pointerState.down){if(Number.isFinite(x)&&Number.isFinite(y))this.pointerState={x,y,down:!!down};}
 action(name){
  if(name==='continue-intro'&&this.status==='intro'&&this.introFrame===204){this.introReleased=true;this.introHold=0;return true;}
  if(name==='replay'&&['playing','summary','ending','done'].includes(this.status)){this.start();return true;}
  if(name==='exit'&&this.status==='playing'){this.finish();return true;}
  if(name==='exit'&&this.status==='summary'){this.status='ending';this.statusAge=0;this.endingFrame=endingFor(this.score.total);this.collectAudio();return true;}
  return false;
 }
 start(){
  this.emit({type:'stream-stop',owner:'intro'});this.status='playing';this.statusAge=0;this.gameAge=0;this.entities=[];this.nextId=1;this.pendingDeath=false;this.qgg={x:2.75,y:1.5,frame:1,age:0,stat:undefined,lastStat:undefined,visible:false,blood:11,kingTimer:0,speedTimer:0};this.score={fish:0,bloodBag:0,speedBag:0,kingBag:0,mined:0,torpedoed:0};this.scoreText='';this.bloodFrame=11;this.bloodAge=0;this.timerBarFrame=1;this.alertFrame=1;this.shipFrame=1;this.shipFlip=1;this.shipPlaying=false;this.submarineFrame=1;this.submarineFlip=1;this.submarinePlaying=false;this.qmmFrame=1;this.qmmFlip=1;this.limits={fish:3,mine:0,torpedo:0};this.spawnTimer=0;this.gTimer=0;this.history=Array(5).fill(this.qgg.x);this.soundFrames.clear();this.collectAudio();
 }
 finish(){this.score.total=totalScore(this.score);this.status='summary';this.statusAge=0;this.entities=[];this.soundFrames.clear();this.collectAudio();this.emit({type:'summary',score:{...this.score}});}
 changeQgg(stat){const q=this.qgg;q.lastStat=q.stat;q.stat=stat;q.frame=qggFrames[stat]||q.frame;q.age=0;if(stat==='无敌')q.kingTimer=0;if(stat==='加速')q.speedTimer=0;this.emit({type:'state',object:'qgg',state:stat});}
 recoverQgg(){const stat=this.qgg.stat;if(stat==='无敌')this.changeQgg('无敌左');else if(stat==='加速')this.changeQgg('加速左');else if(stat==='被炸')this.changeQgg(this.qgg.lastStat);else this.changeQgg(stat==='无敌右'||stat==='加速右'?'右':'左');}
 changeBlood(delta){const result=bloodChange(this.qgg.blood,delta);this.qgg.blood=result.blood;this.bloodFrame=result.frame;this.bloodAge=0;if(result.lethal)this.pendingDeath=true;this.emit({type:'blood',delta,frame:result.frame,pendingDeath:this.pendingDeath});}
 addEntity(symbol,fields){const entity={id:this.nextId++,symbol:String(symbol),frame:1,age:0,sx:1,createdFrame:this.frame,...fields};this.entities.push(entity);return entity;}
 addFish(){
  const y=95-gameOrigin.y+160*this.rng(),x=180+20*this.rng()-gameOrigin.x,sx=this.rng()<.5?1:-1;
  const fish=this.addEntity(126,{x:pixel(x),y:pixel(y),sx,frame:1,kind:'fish',stat:'常态'});this.emit({type:'spawn',object:'fish',id:fish.id});return fish;
 }
 dropMine(){
  const p=movingOrigin(341,this.submarineFrame,'submarine',{x:-1.2,y:414.05},this.submarineFlip);
  if(p.x+gameOrigin.x<=0||p.x+gameOrigin.x>=400)return;
  const mine=this.addEntity(52,{x:pixel(p.x),y:pixel(p.y),kind:'mine',frame:2,stat:'下沉'});this.emit({type:'spawn',object:'mine',id:mine.id});return mine;
 }
 dropTorpedo(){
  const depth=15*this.rng(),p=movingOrigin(337,this.shipFrame,'ship',{x:-34.2,y:440.15},this.shipFlip);
  const torpedo=this.addEntity(61,{x:pixel(p.x),y:pixel(p.y),depth,sx:p.x>=this.qgg.x?-1:1,frame:2,kind:'torpedo',stat:'下沉',reg:{x:-gameOrigin.x,y:-gameOrigin.y}});this.emit({type:'spawn',object:'torpedo',id:torpedo.id});return torpedo;
 }
 dropGift(){
  const p=movingOrigin(361,this.qmmFrame,'unit',{x:2.4,y:-158.6},this.qmmFlip),choice=this.rng(),stat=choice<.2?'补血包':choice<.8?'加速包':'无敌包';
  const gift=this.addEntity(102,{x:pixel(p.x),y:pixel(p.y),frame:stat==='补血包'?1:stat==='加速包'?2:3,kind:'gift',stat});this.emit({type:'spawn',object:'gift',state:stat,id:gift.id});return gift;
 }
 count(kind){return this.entities.filter(e=>e.kind===kind&&!e.removed).length;}
 movePlayer(){
  const q=this.qgg;if(!q.visible||frozen.has(q.stat))return;
  let speed=11,left='左',right='右';
  if(q.stat==='加速左'||q.stat==='加速右'){
   q.speedTimer++;this.timerBarFrame=Math.round(q.speedTimer/1.5)||1;
   if(q.speedTimer>150){this.recoverQgg();q.speedTimer=0;}else{speed/=4;left='加速左';right='加速右';}
  }else if(invincible.has(q.stat)){
   q.kingTimer++;this.timerBarFrame=Math.round(q.kingTimer/1.5)||1;
   if(q.kingTimer>=150){this.recoverQgg();q.kingTimer=0;}else{left='无敌左';right='无敌右';}
  }
  const x=this.pointerState.x-gameOrigin.x,y=Math.min(279-gameOrigin.y,Math.max(95-gameOrigin.y,this.pointerState.y-gameOrigin.y));
  q.x=pixel(q.x+(x-q.x)/speed);q.y=pixel(q.y+(y-q.y)/speed);this.history.shift();this.history.push(q.x);
  if((this.history[2]-this.history[0])*(this.history[4]-this.history[2])<0)this.changeQgg(this.history[2]-this.history[0]<=0?right:left);
 }
 collisionChecks(){
  // AVM1 array enumeration visits the most recently registered listener first.
  for(const e of [...this.entities].reverse()){
   if(e.removed)continue;const view=this.view();
   if(e.kind==='fish'&&e.stat==='常态'&&overlaps(objectBounds(e,view,['fishUnit']),playerBounds(view,'fishArea'))){
    this.score.fish++;this.scoreText=this.score.fish;if([30,90,150].includes(this.score.fish))this.alertFrame=2;
    this.limits=difficultyFor(this.score.fish);e.x=this.qgg.x;e.y=this.qgg.y;e.stat='死去';e.frame=2;e.age=0;this.emit({type:'caught',object:'fish',id:e.id,score:this.score.fish});
   }else if((e.kind==='mine'||e.kind==='torpedo')&&!frozen.has(this.qgg.stat)&&!invincible.has(this.qgg.stat)){
    if(e.stat!=='下沉'&&e.stat!=='发射')continue;
    const area=e.kind==='mine'?['mine']:e.stat==='下沉'?['torpedo','hitArea']:['torpedo','unit','hitArea'];
    if(overlaps(objectBounds(e,view,area),playerBounds(view,'hitArea'))){
     if(e.kind==='torpedo'){const p=e.reg;e.effect={x:(p.x-e.x)/(e.sx||1),y:p.y-e.y};this.score.torpedoed++;}else this.score.mined++;
     e.stat='爆炸';e.frame=e.kind==='mine'?3:4;e.age=0;this.changeQgg('被炸');this.changeBlood(e.kind==='mine'?-1:-2);this.emit({type:'hit',object:e.kind,id:e.id});
    }
   }else if(e.kind==='gift'&&e.stat!=='被吃'&&overlaps(objectBounds(e,view,['hitArea']),playerBounds(view))){
    const stat=e.stat;e.stat='被吃';e.frame+=3;e.age=0;
    if(stat==='补血包'){this.score.bloodBag++;this.changeQgg('补血');this.changeBlood(2);}
    else if(stat==='加速包'){this.score.speedBag++;this.changeQgg('加速');}
    else{this.score.kingBag++;this.changeQgg('无敌');}
    this.emit({type:'caught',object:'gift',state:stat,id:e.id});
   }
  }
 }
 advanceVisuals(){
  this.qgg.age++;this.bloodAge++;
  if(specialDurations[this.qgg.stat]&&this.qgg.age>=specialDurations[this.qgg.stat]-1)this.recoverQgg();
  if(this.gameAge>=40&&!this.qgg.visible){this.qgg.visible=true;this.limits={fish:3,mine:3,torpedo:0};}
  if(this.shipPlaying){this.shipFrame++;if(this.shipFrame>=205){this.shipFrame=2;this.shipFlip*=-1;}}
  if(this.submarinePlaying){this.submarineFrame++;if(this.submarineFrame>139){this.submarineFrame=1;this.submarinePlaying=false;}if(this.submarineFrame===139)this.submarineFlip*=-1;}
  this.qmmFrame++;if(this.qmmFrame===272)this.dropGift();if(this.qmmFrame>=343){this.qmmFrame=1;this.qmmFlip*=-1;}
  if(this.alertFrame>1){this.alertFrame++;if(this.alertFrame>44)this.alertFrame=1;}
  for(const e of this.entities){
   if(e.removed||e.createdFrame===this.frame)continue;e.age++;
   if(e.kind==='fish'&&e.age>=(e.stat==='常态'?217:18)){e.removed=true;continue;}
   if(e.kind==='gift'){e.y=pixel(e.y+3);if(e.y>300||e.stat==='被吃'&&e.age>=9)e.removed=true;}
   if(e.kind==='mine'){e.y=pixel(e.y+4.5);if(e.y>300||e.stat==='爆炸'&&e.age>=13)e.removed=true;}
   if(e.kind==='torpedo'){
    if(e.stat==='下沉'){e.depth--;e.y=pixel(e.y+10);if(e.depth<0){e.stat='发射';e.frame=3;e.age=0;}else{const view=this.view(),node=entityNode(e),t=namedNode(node,'torpedo',view),u=t&&namedNode(t,'unit',view);if(u)e.reg={x:e.x+e.sx*(t.entry.matrix[4]+u.entry.matrix[4])/20,y:e.y+(t.entry.matrix[5]+u.entry.matrix[5])/20};}}
    else if(e.stat==='发射'){const view=this.view(),t=namedNode(entityNode(e),'torpedo',view),u=t&&namedNode(t,'unit',view);if(u)e.reg={x:e.x+e.sx*(t.entry.matrix[4]+u.entry.matrix[4])/20,y:e.y+(t.entry.matrix[5]+u.entry.matrix[5])/20};if(e.age>=40)e.removed=true;}
    else if(e.age>=13)e.removed=true;
   }
  }
  this.entities=this.entities.filter(e=>!e.removed);
 }
 tick(){
  this.frame++;this.statusAge++;
  if(this.status==='intro'){
   this.introAge++;
   if(this.introFrame===204&&!this.introReleased)this.introHold++;else{this.introFrame++;this.introHold=0;if(this.introFrame>=223)this.start();}
  }else if(this.status==='playing'){
   this.gameAge++;this.advanceVisuals();
   if(this.pendingDeath){if(this.qgg.stat!=='被炸')this.finish();}
   else{
    this.spawnTimer++;if(this.spawnTimer>10){this.spawnTimer=0;
     if(this.rng()>.5&&this.count('mine')<this.limits.mine)this.dropMine();
     if(this.rng()>.5&&this.count('torpedo')<this.limits.torpedo)this.dropTorpedo();
     if(this.count('fish')<this.limits.fish)this.addFish();
    }
    this.collisionChecks();this.movePlayer();this.gTimer++;if(this.gTimer>=520)this.shipPlaying=true;if(this.gTimer>=20)this.submarinePlaying=true;
   }
  }else if(this.status==='ending'){
   if(this.endingFrame===2&&this.statusAge>=60||this.endingFrame===3&&this.statusAge>=81){this.status='done';this.statusAge=0;}
  }
  this.collectAudio();
 }
 collectAudio(){
  const view=this.view(),now=new Map();
  const visit=(node,path)=>{
   now.set(path,node.frame);if(this.soundFrames.get(path)===node.frame)return;
   for(const event of soundEvents.get(node.id)||[])if(event.frame===node.frame)this.emit({type:'sound',id:event.id,options:event.options,timeline:node.id,sourceFrame:node.frame,owner:path});
   const stream=audioStreams[node.id],segment=stream?.segments.find(s=>s.startFrame===node.frame);
   if(segment)this.emit({type:'stream',id:segment.id,owner:'intro',offset:0,end:segment.samples,timeline:node.id,sourceFrame:node.frame});
   if(node.id==='323'&&node.frame===204)this.emit({type:'stream-stop',owner:'intro',timeline:node.id,sourceFrame:204});
  };
  walkTimelines(rootNode(view),view,visit);
  if(this.status==='playing')for(const e of this.entities)walkTimelines(entityNode(e),view,visit,'entity:'+e.id);
  this.soundFrames=now;
 }
 advance(now){if(!Number.isFinite(now))return;const elapsed=Math.max(0,now-this.lastTime);this.lastTime=now;this.accumulator+=Math.min(elapsed,250);while(this.accumulator>=STEP){this.accumulator-=STEP;this.tick();}}
}
