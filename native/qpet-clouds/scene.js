import{CloudsRules,STAGE,position}from'./rules.js';
import{instances,symbolKinds,leafBounds,buttonBounds}from'./assets/instances.js';
import{sourceDrawingFactors}from'./assets/artwork.js';
import{soundFrames}from'./assets/sound-frames.js';
import{identity,multiply,transformBox,overlaps}from'./geometry.js';
export const ROLE_IDS=['391','554','292','764','911','672'];
const stopAtOne=new Set(['13','22','28','76','93','104','108','983','984','941','958','916','391','554','292','764','911','672','1002','1004']);
/** This game's finite original display lists and explicitly named callbacks. */
export class CloudsGame{
 constructor({random=Math.random,onEvent=()=>{},now=0}={}){
  this.onEvent=onEvent;this.frame=0;this.uid=0;this.time=0;this.accumulator=0;this.lastTime=now;this.soundFrames=soundFrames;this.pointer={x:0,y:0,down:false};this.root=this.make('root');this.muted=false;this.started=false;
  this.bg=this.add('132',this.root);this.bgEnd=this.named(this.bg,'gameEnd_mc');this.bgEnd.visible=false;
  this.enemies=Array.from({length:5},(_,i)=>{const n=this.add('941',this.bg,{depth:1000+i});this.setPosition(n,400,-(i+1)*400);return n;});
  this.leafGroup=this.add('leaves',this.bg,{depth:5});this.leafGroup.visible=false;this.leaves=Array.from({length:4},()=>this.add('29',this.leafGroup));
  this.soundControl=this.add('971',this.root);this.named(this.soundControl,'exitBtn').visible=false;this.named(this.soundControl,'exitMc').visible=false;this.named(this.soundControl,'soundBtn').playing=false;
  this.rules=new CloudsRules({random,onEvent:e=>this.consume(e)});this.applyPose();this.emit({type:'music',id:'1003',volume:.5});
 }
 emit(e){this.onEvent({...e,frame:this.frame,time:this.time});}
 make(id,parent=null,row={}){const n={id:String(id),uid:++this.uid,parent,frame:1,playing:!stopAtOne.has(String(id)),epoch:0,children:[],removed:false,visible:true,matrix:[...(row.matrix||identity)],depth:row.depth??0,born:row.born??1,name:row.name,ratio:row.ratio||0,color:row.color,dynamic:!!row.dynamic};this.sync(n);this.frameAction(n);this.emitSounds(n);return n;}
 sync(n){if(!instances[n.id])return;const next=[],old=n.children;for(const row of instances[n.id].frames[n.frame-1]||[]){let c=old.find(c=>!c.dynamic&&!c.removed&&c.id===row.id&&c.depth===row.depth&&c.born===row.born);if(!c)c=this.make(row.id,n,row);else{c.matrix=[...row.matrix];c.name=row.name;c.color=row.color;c.ratio=row.ratio||0;}next.push(c);}for(const c of old)if(c.dynamic&&!c.removed)next.push(c);else if(!next.includes(c))this.remove(c);n.children=next.sort((a,b)=>a.depth-b.depth);}
 frameAction(n){if(n.id==='941'&&n.frame===11)n.playing=false;}
 remove(n){if(!n||n.removed)return;n.removed=true;for(const c of [...n.children])this.remove(c);if(n.parent)n.parent.children=n.parent.children.filter(c=>c!==n);}
 named(n,name){return n?.children.find(c=>!c.removed&&c.name===name);}
 add(id,parent,row={}){const n=this.make(id,parent,{...row,dynamic:true,depth:row.depth??((parent.children.at(-1)?.depth||0)+1)});parent.children.push(n);parent.children.sort((a,b)=>a.depth-b.depth);return n;}
 lift(n,parent=this.root){if(n.parent)n.parent.children=n.parent.children.filter(c=>c!==n);n.parent=parent;n.depth=(parent.children.at(-1)?.depth||0)+1;parent.children.push(n);}
 goto(n,frame,play=false){if(!n||n.removed)return;frame=typeof frame==='string'?(instances[n.id]?.labels[frame]??1):frame;n.epoch++;n.frame=Math.min(instances[n.id]?.frames.length||1,Math.max(1,frame));n.playing=play;this.sync(n);this.frameAction(n);this.emitSounds(n);}
 emitSounds(n){for(const e of this.soundFrames?.[n.id]?.[n.frame]||[])this.emit({type:'sound',id:e.id,options:e.options});}
 setPosition(n,x,y){if(!n)return;if(x!==undefined)n.matrix[4]=position(x)*20;if(y!==undefined)n.matrix[5]=position(y)*20;}
 setup(){this.crow=this.add('958',this.root);this.setPosition(this.crow,400,350);this.score=this.add('923',this.root);this.setPosition(this.score,undefined,18);this.lift(this.soundControl);this.scoring=this.add('22',this.root);this.setPosition(this.scoring,400,50);this.named(this.scoring,'mcPan').playing=false;this.stageNumber=this.add('984',this.root);this.setPosition(this.stageNumber,400,450);this.space=this.add('13',this.root);this.setPosition(this.space,400,300);this.space.visible=false;
  const energy=this.named(this.score,'energy_mc'),box=this.bounds(energy,energy.matrix);this.rules.energyWidth=box?(box[2]-box[0])/20:330;
 }
 consume(e){
  if(e.type==='new-player'){this.remove(this.player);this.player=this.add(ROLE_IDS[e.role],this.root);this.wheel=this.add('916',this.player);this.wheel.matrix=[-1,0,0,1,1600,0];this.wheel.visible=false;this.wheelSubscribed=false;}
  if(e.type==='player-frame')this.goto(this.player,e.frame,false);
  if(e.type==='wheel-frame')this.goto(this.wheel,e.frame,false);
  if(e.type==='wall-frames'){const wall=this.named(this.bg,'wall_mc'+e.wall);['l_mc2','l_mc3','r_mc1','r_mc2'].forEach((name,i)=>this.goto(this.named(wall,name),e.frames[i],false));}
  if(e.type==='scoring'){this.goto(this.named(this.scoring,'mcPan'),e.frame,false);this.scoring.playing=true;}
  if(e.type==='stage'){this.goto(this.named(this.stageNumber,'mcStage'),e.stage,false);this.stageNumber.playing=true;}
  if(e.type==='crow-play')this.crow.playing=true;
  if(e.type==='enemy-frame')this.goto(this.enemies[e.index],e.frame,false);
  if(e.type==='enemy-play')this.enemies[e.index].playing=true;
  if(e.type==='start'){this.leafGroup.visible=true;this.named(this.bg,'game_info').visible=false;this.named(this.bg,'start_btn').visible=false;this.named(this.bg,'index_more_btn').visible=false;this.bgEnd.visible=false;if(this.started)this.lift(this.soundControl);this.started=true;this.player.visible=true;}
  if(e.type==='end'){this.player.visible=false;this.goto(this.named(this.player,'mc'),1,false);this.lift(this.bgEnd);this.bgEnd.visible=true;this.sendScore=this.add('1002',this.root);this.setPosition(this.sendScore,645,552);}
  this.emit(e);
 }
 action(name){if(name==='start'&&(this.rules.status==='menu'||this.rules.status==='end')){if(!this.started)this.setup();this.remove(this.sendScore);this.sendScore=null;this.rules.start(this.time);this.applyPose();return true;}if(name==='mute'){this.muted=!this.muted;this.goto(this.named(this.soundControl,'soundBtn'),this.muted?2:1,false);this.emit({type:'mute',enabled:!this.muted});return true;}if(name==='more'){this.emit({type:'exit'});return true;}if(name==='score'){this.emit({type:'score-service-unavailable',score:this.rules.height});return true;}return false;}
 keyDown(code){this.rules.keyDown(code);}keyUp(code){this.rules.keyUp(code);}
 applyPose(){const r=this.rules;for(const[name,key]of[['wall_mc1','wall1'],['wall_mc2','wall2'],['bg_mc','bg'],['lm_mc','lm'],['lm_hc_mc','lm1'],['lm_hc_mc2','lm2']])this.setPosition(this.named(this.bg,name),undefined,r.background[key]);
  for(let i=0;i<5;i++)this.setPosition(this.enemies[i],r.enemies[i].x,r.enemies[i].y);for(let i=0;i<4;i++){const n=this.leaves[i],p=r.leaves[i];this.setPosition(n,p.x,p.y);n.matrix[0]=n.matrix[3]=Math.fround(p.scale);}
  if(this.player&&!this.player.removed){this.setPosition(this.player,r.x,r.y);this.player.matrix[0]=Math.fround(r.scaleX);this.player.matrix[3]=Math.fround(1.2);this.wheel.visible=r.wheel.visible;const zz=this.named(this.wheel,'zz_mc');if(zz){const angle=r.wheel.rotation*Math.PI/180;zz.matrix=[Math.fround(Math.cos(angle)),Math.fround(Math.sin(angle)),Math.fround(-Math.sin(angle)),Math.fround(Math.cos(angle)),zz.matrix[4],zz.matrix[5]];}this.space.visible=r.spaceVisible;this.gotoIfChanged(this.space,r.spaceFrame);this.setPosition(this.named(this.score,'energy_mc'),r.energyX,undefined);}
 }
 gotoIfChanged(n,frame){if(n&&n.frame!==frame)this.goto(n,frame,false);}
 tick(){this.frame++;
  // Enter removes obsolete children before broadcast; PlaceObject matrices and
  // new children are constructed afterwards. Collision callbacks use retained
  // pre-construct geometry, and require the same still-present source object.
  const capture=n=>n?{uid:n.uid,box:this.worldBounds(n)}:null,oldPlayer=capture(this.named(this.player,'mcBody')),oldQQ=capture(this.named(this.player,'qq_wy_mc')),oldCrow=capture(this.named(this.crow,'mcBody')),oldEnemies=this.enemies.map(n=>capture(this.named(n,'mcBody'))),wheelWasSubscribed=this.wheelSubscribed;
  const retained=(old,n)=>old&&n&&old.uid===n.uid?old.box:null;
  const nodes=[];const collect=n=>{if(n.removed)return;nodes.push({n,epoch:n.epoch,playing:n.playing});for(const c of n.children)collect(c);};collect(this.root);
  for(const{n,epoch,playing}of nodes)if(!n.removed&&playing&&n.playing&&n.epoch===epoch&&instances[n.id]?.frames.length>1){this.goto(n,n.frame%instances[n.id].frames.length+1,true);if(n.frame===1&&stopAtOne.has(n.id))n.playing=false;}
  const r=this.rules,pbody=this.named(this.player,'mcBody'),playerBox=retained(oldPlayer,pbody);for(let i=0;i<5;i++)if(pbody&&this.enemies[i].frame===1&&overlaps(retained(oldEnemies[i],this.named(this.enemies[i],'mcBody')),playerBox))r.hitEnemy(i);
  r.leafTick();if(pbody&&overlaps(retained(oldCrow,this.named(this.crow,'mcBody')),retained(oldQQ,this.named(this.player,'qq_wy_mc'))))r.hitCrow();r.scoreTick();r.backgroundTick();r.playerTick();this.applyPose();const mc=this.named(this.player,'mc');r.mainTick({deathFrame:mc?.frame,deathFrames:instances[mc?.id]?.frames.length,crowFrame:this.crow?.frame});if(wheelWasSubscribed)r.wheelTick();if(r.wheel?.active)this.wheelSubscribed=true;this.applyPose();
 }
 advance(now){const elapsed=Math.max(0,now-this.lastTime);this.lastTime=now;this.time+=elapsed;this.rules.timers(this.time);this.accumulator+=Math.min(250,elapsed);while(this.accumulator+1e-8>=1000/STAGE.fps){this.accumulator-=1000/STAGE.fps;this.tick();}}
 resume(now){this.lastTime=now;}
 kind(id){return symbolKinds[id];}drawingFactor(id){return id==='root'?.05:sourceDrawingFactors[this.kind(id)]??1;}
 bounds(n,m=identity){if(!n||n.removed)return null;if(!instances[n.id]&&!['root','leaves'].includes(n.id))return transformBox(leafBounds[n.id]||buttonBounds[n.id]?.map(v=>v*20),m);const b=n.children.filter(c=>!c.removed).map(c=>this.bounds(c,multiply(m,c.matrix))).filter(Boolean);return b.length?[Math.min(...b.map(b=>b[0])),Math.min(...b.map(b=>b[1])),Math.max(...b.map(b=>b[2])),Math.max(...b.map(b=>b[3]))]:null;}
 worldMatrix(n){return n?.parent?multiply(this.worldMatrix(n.parent),n.matrix):n?.matrix||identity;}
 worldBounds(n){return n?this.bounds(n,this.worldMatrix(n)):null;}
 text(id){if(id==='922')return String(this.rules.displayHeight||0);if(id==='130')return'你获得了'+this.rules.height+'分，要加油哦~\n更多游戏请登录QQ宠物官网.';if(id==='993')return'';return undefined;}
 snapshot(){return{...this.rules.snapshot(),frame:this.frame,time:this.time,muted:this.muted,pointer:{...this.pointer},playerClip:this.player?{id:this.player.id,frame:this.player.frame,mc:this.named(this.player,'mc')?.frame,mcFrames:instances[this.named(this.player,'mc')?.id]?.frames.length}:null};}
}
