import {FullStarsRules,STAGE,displayPosition} from './rules.js';
import {instances,symbolKinds,leafBounds,localBounds,buttonBounds} from './assets/instances.js';
export const multiply=(a,b)=>[a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]];
export function transformBox(b,m){if(!b)return null;const p=[];for(const x of[b[0],b[2]])for(const y of[b[1],b[3]])p.push([m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5]]);return[Math.min(...p.map(p=>p[0])),Math.min(...p.map(p=>p[1])),Math.max(...p.map(p=>p[0])),Math.max(...p.map(p=>p[1]))];}
export const contains=(b,x,y)=>!!b&&x>=b[0]&&x<=b[2]&&y>=b[1]&&y<=b[3];
const normalize=a=>{a%=360;return a< -180?a+360:a>180?a-360:a;};
/** Finite original movie timelines plus this game's named callbacks. No SWF
 * parsing, opcode execution, generic AS scope, or runtime source evaluation. */
export class FullStarsGame{
 constructor({random=Math.random,onEvent=()=>{},loadScore=()=>false,saveScore=()=>{},now=0}={}){
  this.rules=new FullStarsRules({random});this.onEvent=onEvent;this.loadScore=loadScore;this.saveScore=saveScore;this.now=now;this.lastTime=now;this.accumulator=0;this.frame=0;this.uid=0;this.status='opening';this.pointer={x:0,y:0,down:false};this.lastCombo={count:0};
  this.root=this.make('main',null,{name:'root'});this.initialize(this.root);
 }
 emit(event){this.onEvent({...event,frame:this.frame,now:this.now});}
 make(id,parent,row={}){
  const n={id:String(id),uid:++this.uid,parent,frame:1,playing:true,children:[],visible:true,removed:false,initialized:false,epoch:0,matrix:[...(row.matrix||[1,0,0,1,0,0])],color:row.color,name:row.name,depth:row.depth??0,born:row.born??1,ratio:row.ratio||0,dynamic:!!row.dynamic,...row.extra};this.sync(n);return n;
 }
 sync(node){if(!instances[node.id])return;const old=node.children,next=[];
  for(const row of instances[node.id].frames[node.frame-1]||[]){let n=old.find(n=>!n.dynamic&&!n.removed&&n.id===row.id&&n.depth===row.depth&&n.born===row.born);if(!n)n=this.make(row.id,node,row);else{n.matrix=[...row.matrix];n.color=row.color;n.name=row.name;n.ratio=row.ratio||0;}next.push(n);}
  for(const n of old)if(n.dynamic&&!n.removed)next.push(n);else if(!next.includes(n))this.remove(n);node.children=next.sort((a,b)=>a.depth-b.depth);
 }
 initialize(n){if(n.removed||n.initialized)return;n.initialized=true;this.frameAction(n);for(const c of [...n.children])this.initialize(c);}
 remove(n){if(!n||n.removed)return;if(n.star&&this.rules.stars?.get(n.star.depth)===n.star)this.rules.stars.delete(n.star.depth);n.removed=true;for(const c of [...n.children])this.remove(c);if(n.parent)n.parent.children=n.parent.children.filter(c=>c!==n);}
 removeDynamic(n){if(n.dynamic)this.remove(n);n.playing=false;}
 named(n,name){return n?.children.find(n=>!n.removed&&n.name===name);}
 attach(id,{parent=this.root,x=0,y=0,name='',depth=0,extra}={}){
  const renderDepth=depth+16384;for(const old of [...parent.children])if(old.depth===renderDepth)this.remove(old);
  const n=this.make(id,parent,{name,depth:renderDepth,dynamic:true,matrix:[1,0,0,1,displayPosition(x)*20,displayPosition(y)*20],extra});parent.children.push(n);parent.children.sort((a,b)=>a.depth-b.depth);this.initialize(n);return n;
 }
 goto(n,frame,play=true){if(!n||n.removed)return;frame=typeof frame==='string'?instances[n.id]?.labels[frame]:frame;if(!frame)return;n.epoch++;n.frame=frame;n.playing=play;this.sync(n);this.frameAction(n);for(const c of [...n.children])this.initialize(c);}
 backAndPlay(n){this.goto(n,n.frame-1,true);}
 fade(){this.attach('62',{name:'allwz',depth:10009});}
 setPosition(n,x,y){if(x!==undefined)n.matrix[4]=displayPosition(x)*20;if(y!==undefined)n.matrix[5]=displayPosition(y)*20;}
 frameAction(n){
  const f=n.frame;
  if(n.id==='main'){
   if(f===1){const original=this.named(n,'fr');if(original){const copy=this.attach('93',{name:'frame',depth:26385});copy.matrix=[...original.matrix];}}
   if(f===27){this.status='menu';n.playing=false;this.fade();}
   if(f===39)this.preStartEnergy=75;
   if(f===44){this.rules.start();this.status='playing';this.initializedGameplay=true;this.ball=this.named(n,'b');this.cursor=this.named(n,'g');this.moon=this.named(n,'moon');this.hits=this.named(n,'hits');this.generator=n.children.find(c=>c.id==='119');this.meter=n.children.find(c=>c.id==='146');this.attach('57',{name:'loop',depth:20000});this.attach('57',{name:'sfx',depth:20001});n.playing=false;this.consume();}
   if(f===45){this.status='end';this.rules.status='end';n.playing=false;this.fade();}
   if(f===51){this.rules.finishFrame51();this.status='fin';this.fade();this.consume();}
   if(f===52)n.playing=false;
  }
  if(['98','103','145'].includes(n.id)&&f===1)n.playing=false;
  if(n.id==='98'&&f===31)n.playing=false;
  if(['59','62'].includes(n.id)&&f===(n.id==='59'?4:31))this.removeDynamic(n);
  if(n.id==='59'){if(f===2)this.setPosition(n,undefined,n.matrix[5]/20+(n.ys||0));if(f===3&&n.matrix[5]/20<425)this.backAndPlay(n);}
  if(n.id==='115'){if(f===1){n.ys=.1;n.playing=false;}if(f===2)this.setPosition(n,undefined,n.matrix[5]/20+n.ys);if(f===3)this.backAndPlay(n);}
  if(n.id==='119'){
   if(f===1){n.nextDepth=1000;if(this.initializedGameplay){this.rules.firstStar();this.consume();}}
   if(f===2)n.wait=this.rules.starDelay;
   if(f===3)n.wait--;
   if(f===4){if(n.wait)this.backAndPlay(n);else{this.rules.nextStar();this.consume();this.goto(n,2,true);}}
  }
  if(n.id==='99'&&n.star){
   if(f===2){this.rules.starFrame2(n.star);this.consume();}
   if(f===3&&n.star.y<420)this.backAndPlay(n);
   if(f===4){this.rules.starFrame4(n.star);this.consume();n.playing=false;}
  }
  if(n.id==='122'){
   if(f===2&&this.initializedGameplay){this.rules.cursorFrame2();this.consume();}
   if(f===3)this.backAndPlay(n);
   if(f===5&&this.initializedGameplay){const g=this.rules.cursor,b=this.rules.ball;g.x=displayPosition(b.x+(g.x-b.x)/1.5);g.y=displayPosition(b.y+(g.y-b.y)/1.5);}
   if(f===6)this.backAndPlay(n);
  }
  if(n.id==='127'){
   if(f===1){const s=this.named(n,'s'),sh=this.named(n,'sh'),mask=this.named(n,'m');if(s&&sh&&mask){s.runtimeMask=null;sh.runtimeMask=mask;mask.maskOnly=true;}}
   if(f===2&&this.initializedGameplay){this.rules.ballFrame2();this.consume();}
   if(f===3)this.backAndPlay(n);
   if(f===5){const b=this.rules.ball;n.finish={d:100,vx:10,c1:b.x-380,b1:380,t1:2.2,d1:2.2,c2:b.y-200,b2:200,t2:2.2,d2:2.2};}
   if(f===6){const p=n.finish,b=this.rules.ball;b.rotation=normalize(b.rotation+p.vx);p.t1/=p.d1/2;p.t2/=p.d2/2;const ease=(c,t,base)=>t<1?c/2*t*t+base:(-c)/2*((t-1)*((t-1)-2)-1)+base;b.x=displayPosition(ease(p.c1,p.t1,p.b1));b.y=displayPosition(ease(p.c2,p.t2,p.b2));}
   if(f===7){if(--n.finish.d)this.backAndPlay(n);else{this.goto(this.root,'fin',true);n.playing=false;}}
  }
  if(n.id==='136'){
   if(f===1){n.parent.playing=false;n.delay=Number(n.name);}
   if(f===2)n.delay--;
   if(f===3){if(n.delay)this.backAndPlay(n);else{n.parent.playing=true;n.playing=false;}}
  }
  if(n.id==='137'&&f===42)this.removeDynamic(n);
  if(n.id==='145'&&f===12)this.goto(n,1,false);
  if(n.id==='146'){
   if(f===2&&this.initializedGameplay){this.rules.meterFrame2();this.consume();}
   if(f===3)this.backAndPlay(n);
   if(f===15){this.rules.meterFrame15();this.consume();n.playing=false;}
  }
  if(['183','203'].includes(n.id)&&f===1){
   const score=this.rules.score||0;if(n.id==='203'&&!score)this.saveScore(0);const old=this.loadScore();n.vars={ang:score,oldang:old};
   if(!old){this.saveScore(score);n.playing=false;}
   else if(score>old){this.saveScore(score);if(n.id==='183')this.goto(n,3,false);}
   else if(n.id==='183')this.goto(n,2,false);
  }
 }
 consume(){for(const e of this.rules.drainEvents()){
  if(e.type==='star-create'){if(this.generator&&!this.generator.removed)this.attach('99',{parent:this.generator,x:e.star.x,y:e.star.y,name:'ds'+e.star.depth,depth:e.star.depth,extra:{star:e.star}});}
  if(e.type==='star-remove'){const star=this.generator?.children.find(n=>n.star===e.star);this.remove(star);}
  if(e.type==='star-shine'){const star=this.generator?.children.find(n=>n.star===e.star);this.goto(this.named(star,'s'),'shine',true);}
  if(e.type==='moon-play')this.goto(this.moon,2,true);
  if(e.type==='combo'){this.lastCombo=e;this.goto(this.hits,2,true);this.setPosition(this.hits,e.x,e.y);}
  if(e.type==='finale-start'){this.goto(this.ball,'fin',true);this.goto(this.cursor,'fin',true);}
  if(e.type==='meter-flash')this.goto(this.named(this.meter,'fr'),2,true);
  if(e.type==='meter-loss')this.goto(this.meter,4,true);
  if(e.type==='root-goto')this.goto(this.root,e.label,e.play);
  this.emit(e);
 }this.applyPose();}
 applyPose(){if(!this.initializedGameplay)return;
  const b=this.rules.ball,g=this.rules.cursor;
  if(this.ball&&!this.ball.removed){this.setPosition(this.ball,b.x,b.y);for(const name of['s','m']){const n=this.named(this.ball,name);if(n){const angle=b.rotation*Math.PI/180;n.matrix=[Math.cos(angle),Math.sin(angle),-Math.sin(angle),Math.cos(angle),n.matrix[4],n.matrix[5]];}}}
  if(this.cursor&&!this.cursor.removed){this.setPosition(this.cursor,g.x,g.y);this.cursor.matrix[0]=g.scaleX/100;this.cursor.matrix[3]=g.scaleY/100;}
  if(this.meter&&!this.meter.removed){const bar=this.named(this.meter,'b');if(bar)bar.matrix[0]=this.rules.meter.scale/100;}
  for(const n of this.generator?.children||[])if(n.star&&!n.removed)this.setPosition(n,n.star.x,n.star.y);
 }
 action(name){if(name==='start'&&['menu','end','fin'].includes(this.status)){this.goto(this.root,'start',true);return true;}return false;}
 point(x,y){this.pointer.x=x;this.pointer.y=y;this.rules.mouse.x=x;this.rules.mouse.y=y;}
 tick(){this.frame++;if(this.initializedGameplay)this.rules.levelUpdate();const nodes=[];const collect=n=>{if(n.removed)return;nodes.push({node:n,playing:n.playing,epoch:n.epoch});for(const c of n.children)collect(c);};collect(this.root);
  for(const entry of nodes){const n=entry.node;if(n.removed)continue;if(n.id==='118'&&this.status==='playing'){n.scroll=(n.scroll||0)+.4;const height=(localBounds['118'][3]-localBounds['118'][1])/40;if(n.scroll< -height)n.scroll=height+n.scroll;if(n.scroll>0)n.scroll=-height+n.scroll;this.setPosition(n,undefined,n.scroll);}
   if(!entry.playing||n.epoch!==entry.epoch||!n.playing||!instances[n.id]||instances[n.id].frames.length<=1)continue;this.goto(n,n.frame%instances[n.id].frames.length+1,true);
  }this.applyPose();}
 advance(now){this.now=now;this.accumulator+=Math.min(250,Math.max(0,now-this.lastTime));this.lastTime=now;while(this.accumulator>=1000/STAGE.fps){this.accumulator-=1000/STAGE.fps;this.tick();}}
 resume(now){this.lastTime=now;this.accumulator=0;}
 kind(id){return id==='main'?'main':symbolKinds[id];}
 drawingFactor(id){return id==='main'||id==='62'?1/20:1;}
 worldMatrix(n){return n.parent?multiply(this.worldMatrix(n.parent),n.matrix):n.matrix;}
 localBox(n){if(!n||n.removed)return null;if(instances[n.id]){const boxes=n.children.filter(n=>!n.removed).map(c=>transformBox(this.localBox(c),c.matrix)).filter(Boolean);return boxes.length?[Math.min(...boxes.map(b=>b[0])),Math.min(...boxes.map(b=>b[1])),Math.max(...boxes.map(b=>b[2])),Math.max(...boxes.map(b=>b[3]))]:null;}return leafBounds[n.id]||buttonBounds[n.id]?.map(x=>x*20)||null;}
 bounds(n){return transformBox(this.localBox(n),this.worldMatrix(n))?.map(x=>x/20)||null;}
 text(id,node){if(id==='129')return this.lastCombo.count??'';if(id==='132')return this.lastCombo.bonus??'';if(id==='139')return this.rules.score??0;let p=node;while(p&&!p.vars)p=p.parent;if(['155','184'].includes(id))return p?.vars?.oldang??'';if(['156','185'].includes(id))return p?.vars?.ang??'';return'';}
 snapshot(){return{status:this.status,frame:this.frame,rootFrame:this.root.frame,score:this.rules.score,energy:this.rules.energy,ball:this.rules.ball?{...this.rules.ball}:null,cursor:this.rules.cursor?{...this.rules.cursor}:null,generated:this.rules.generated,stars:[...(this.rules.stars?.values()||[])].map(s=>({...s})),combo:this.rules.combo,level:this.rules.level,speed:this.rules.speed,starDelay:this.rules.starDelay};}
}
