// Explicit rules for fixed classic-012. No SWF or ActionScript execution.
export const SOURCE_SHA256='1f02ce6d9affb433e95c09fd8bcd05653b1cfb9938afa1e04c0cdfe5eeb66da9';
export const STAGE=Object.freeze({width:800,height:600,fps:24});
export const position=v=>Math.trunc(v*20)/20;
const uint=v=>v>>>0;

// The original Countdown(1) is a600ms one-shot Timer, not one second. Its
// public time_boo is sticky: reset/start do not clear it; consumers do so.
export class CloudsCountdown{
 constructor(){this.running=false;this.time_boo=false;this.due=0;}
 start(now){if(!this.running){this.running=true;this.due=now+600;}}
 reset(){this.running=false;}
 advance(now){if(this.running&&now>=this.due){this.running=false;this.time_boo=true;}}
}
export class CloudsRules{
 constructor({random=Math.random,onEvent=()=>{},energyWidth=330,now=0}={}){
  this.random=random;this.onEvent=onEvent;this.energyWidth=energyWidth;this.now=now;this.status='menu';this.initialized=false;this.bgSpeed=0;this.height=0;this.energyX=-110;this.stageNo=1;this.role=null;
  this.enemies=Array.from({length:5},(_,i)=>({x:400,y:-(i+1)*400,frame:1}));
  this.leaves=Array.from({length:4},()=>{const leaf={};this.leafInit(leaf);leaf.y=position(random()*800);leaf.scale=random()*.5+.2;leaf.speedY=0;return leaf;});
  this.background={wall1:-600,wall2:0,bg:-600,lm:0,lm1:428.9,lm2:462.1};
 }
 emit(type,detail={}){this.onEvent({type,...detail,now:this.now});}
 frame(value){this.playerFrame=value;this.emit('player-frame',{frame:value});}
 wheelFrame(value){this.wheel.frame=value;this.emit('wheel-frame',{frame:value});}
 leafInit(leaf){leaf.angle=(this.random()+.5)*Math.PI/2;leaf.speed=this.random()+3;leaf.x=position(this.random()*800);leaf.y=0;}
 leafTick(){for(const leaf of this.leaves){leaf.x=position(leaf.x+leaf.speed*Math.cos(leaf.angle));leaf.y=position(leaf.y+leaf.speed*Math.sin(leaf.angle)+leaf.speedY+1);if(leaf.y>600||leaf.x<0||leaf.x>800)this.leafInit(leaf);}}
 wallRandom(wall,count){this.emit('wall-frames',{wall,frames:[Math.floor(this.random()*count),Math.floor(this.random()*count),Math.floor(this.random()*10),Math.floor(this.random()*5)]});}
 backgroundInit(){this.wallRandom(2,5);this.background={wall1:-600,wall2:0,bg:-600,lm:0,lm1:428.9,lm2:462.1};for(let i=0;i<5;i++){this.enemies[i].x=400;this.enemies[i].y=-(i+1)*400;}this.backgroundActive=true;}
 newPlayer(){this.spaceDown=false;this.energySpace=false;this.energyMode=false;this.left=false;this.energy=0;this.enerNum=1;this.vx=0;this.vy=0;this.speed=0;this.dead=false;this.playerActive=false;this.playerFrame=1;this.scaleX=1.2;this.x=0;this.y=0;this.wheel={frame:1,speed:5,angle:0,rotation:0,visible:false,active:false};this.wheelTimer=new CloudsCountdown();this.energyTimer=new CloudsCountdown();this.spaceTimer=new CloudsCountdown();}
 start(now=this.now){this.now=now;
  if(!this.initialized){this.role=Math.floor(this.random()*6);this.initialized=true;this.newPlayer();this.emit('new-player',{role:this.role});}
  else{this.backgroundInit();this.newPlayer();this.emit('new-player',{role:this.role});}
  this.status='playing';this.stageNo=1;this.backgroundInit();this.height=0;this.energyX=-110;this.wheel.speed=4;this.frame(1);this.playerActive=true;this.x=380;this.y=500;this.spaceVisible=true;this.spaceFrame=1;this.emit('start');
 }
 keyDown(code){if(code===32&&this.playerActive)this.spaceDown=true;}
 keyUp(code){if(code===32&&this.playerActive)this.spaceDown=false;}
 timers(now){this.now=now;if(!this.initialized)return;this.wheelTimer.advance(now);this.energyTimer.advance(now);this.spaceTimer.advance(now);}
 backgroundTick(){if(!this.backgroundActive)return;const p=this.background,s=this.bgSpeed;p.wall1=position(p.wall1+s);p.wall2=position(p.wall2+s);p.bg=position(p.bg+s/4);
  for(let i=0;i<5;i++){const e=this.enemies[i];e.y=position(e.y+s);if(e.y>600){e.y=position(this.enemies[i===0?4:i-1].y-100-Math.floor(this.random()*800));e.frame=1;this.emit('enemy-frame',{index:i,frame:1});}}
  p.lm=position(p.lm+s);p.lm1=position(p.lm1+s);p.lm2=position(p.lm2+s);if(p.bg>1)p.bg=-600;
  if(p.wall1>=600){p.wall1=position(p.wall1-1200);this.wallRandom(1,6);}if(p.wall2>=600){p.wall2=position(p.wall2-1200);this.wallRandom(2,6);}for(const leaf of this.leaves)leaf.speedY=uint(s);
 }
 addEnergy(amount){if(this.energy<20){this.energy=uint(this.energy+uint(amount));this.energyX=position(this.energy>=20?-110+this.energyWidth:this.energyX+uint(amount)*(this.energyWidth/20));}}
 playerGameOver(){this.vx=0;this.speed=0;this.energy=0;this.bgSpeed=0;this.enerNum=1;this.wheel.visible=false;this.spaceFrame=1;this.spaceVisible=false;if(this.playerFrame<50)this.frame(18);this.left=!this.left;this.dead=true;this.playerActive=false;this.emit('player-dead');}
 hitEnemy(index){if(!this.initialized||this.enemies[index].frame!==1)return;this.enemies[index].frame=2;this.emit('enemy-play',{index});this.enerNum=uint(this.enerNum+1);}
 hitCrow(){this.frame(51);this.playerGameOver();}
 playerTick(){if(!this.playerActive)return;
  if(this.spaceDown&&!this.energyMode&&this.wheel.visible){const angle=this.wheel.angle;
   if(angle<10||angle>80)this.playerGameOver();
   else if(angle>=10&&angle<30){this.vx=-48;this.bgSpeed=12;this.speed=1;this.frame(8);this.emit('scoring',{frame:4});}
   else if(angle>=30&&angle<60){this.vx=-36;this.bgSpeed=18;this.speed=2;this.frame(8);this.emit('scoring',{frame:3});}
   else if(angle>=60&&angle<70){this.vx=-24;this.bgSpeed=24;this.speed=3;this.frame(8);this.emit('scoring',{frame:2});this.enerNum=uint(this.enerNum+1);}
   else if(angle>=70&&angle<=80){this.vx=-18;this.bgSpeed=30;this.speed=4;this.frame(8);this.emit('scoring',{frame:1});this.enerNum=uint(this.enerNum+2);}
   if(this.left)this.vx=-this.vx;this.wheel.visible=false;
  }
  if(this.spaceDown){if(this.y>=500){this.spaceVisible=false;this.bgSpeed=36;this.frame(8);this.speed=1;this.vy=-20;this.vx=-28;this.scaleX=-this.scaleX;}}
  if(this.spaceDown&&this.energyMode){this.energySpace=true;this.spaceTimer.reset();this.spaceTimer.start(this.now);}
  if(this.wheel.angle===90&&this.wheel.visible){this.wheel.visible=false;this.playerGameOver();}
  if(this.x<=120||this.x>=670&&!this.wheel.visible){this.addEnergy(this.enerNum);this.enerNum=1;if(this.energy>=20)this.energyMode=true;this.vx=0;this.vy=0;
   if(this.x<=120){this.x=121;this.left=true;this.wheelFrame(1);this.scaleX=-this.scaleX;}else{this.x=669;this.scaleX=-this.scaleX;this.wheelFrame(2);this.left=false;}
   if(this.energyMode){this.spaceFrame=2;this.spaceVisible=true;this.speed=8;this.bgSpeed=36;this.energyTimer.start(this.now);this.frame(42);}
   else{this.speed=0;this.bgSpeed=0;this.wheelTimer.start(this.now);this.frame(25);}
  }
  if(this.wheelTimer.time_boo){this.wheel.visible=true;this.wheelTimer.time_boo=false;this.wheel.angle=0;this.wheel.rotation=90;this.wheel.active=true;}
  if(this.energyMode){this.energyX=position(this.energyX-6);if(this.energyX< -110){this.energyX=-110;this.energyMode=false;this.energySpace=false;this.spaceVisible=false;this.spaceFrame=1;}}
  if(this.energyTimer.time_boo){if(this.energySpace)this.energyTimer.start(this.now);else{this.energyTimer.time_boo=false;this.energyTimer.reset();if(!this.energyMode){this.energy=0;this.speed=0;this.bgSpeed=0;this.wheelTimer.start(this.now);this.frame(25);}else this.playerGameOver();}}
  if(this.spaceTimer.time_boo){this.spaceTimer.time_boo=false;this.energySpace=false;}
  this.height=uint(this.height+this.speed);this.x=position(this.x+this.vx);this.y=position(this.y+this.vy);
 }
 mainTick({deathFrame,deathFrames,crowFrame}={}){if(this.status!=='playing')return;if(this.height>1000*this.stageNo-1){this.emit('stage',{stage:this.stageNo});this.wheel.speed=uint(this.wheel.speed+1);this.stageNo=uint(this.stageNo+1);}
  if(this.height>10&&this.height%250<10&&crowFrame===1)this.emit('crow-play');
  if(this.dead&&deathFrame!==undefined&&deathFrame===deathFrames){this.status='end';this.emit('end',{score:this.height});}
 }
 wheelTick(){if(this.wheel?.active){let angle=(this.wheel.rotation+this.wheel.speed)%360;if(angle>180)angle-=360;this.wheel.rotation=angle;this.wheel.angle=uint(this.wheel.angle+this.wheel.speed);if(this.wheel.angle>=90){this.wheel.angle=90;this.wheel.active=false;}}}
 scoreTick(){if(this.height>99999)this.height=99999;this.displayHeight=this.height;}
 snapshot(){return{status:this.status,role:this.role,height:this.height,displayHeight:this.displayHeight,energy:this.energy,energyX:this.energyX,stage:this.stageNo,player:{x:this.x,y:this.y,vx:this.vx,vy:this.vy,scaleX:this.scaleX,frame:this.playerFrame,speed:this.speed,dead:this.dead,energyMode:this.energyMode,energySpace:this.energySpace,enerNum:this.enerNum,spaceDown:this.spaceDown,left:this.left},wheel:this.wheel?{...this.wheel}:null,background:{...this.background},bgSpeed:this.bgSpeed,timers:this.initialized?{wheel:{...this.wheelTimer},energy:{...this.energyTimer},space:{...this.spaceTimer}}:null};}
}
