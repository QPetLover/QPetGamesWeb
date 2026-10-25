import{Clip,bounds,intersects,matrixFor,roundTwips}from'./scene.js';
import{instances,localBounds}from'./assets/instances.js';
const stops={21:[1,2],66:[1,13],92:[1,20,40],113:[1,4],117:[1],345:[1],366:[1,9]};
const READY=new Set(['235','331']),PICKUP=new Set(['199','309']),NEXT=new Set(['210','316']);
export class MiningGame{
 constructor({random=Math.random,now=0,sex=2}={}){this.random=random;this.sex=sex;this.events=[];this.keys=new Set();this.frame=0;this.lastTime=now;this.accumulator=0;this.status='menu';this.helpOpen=false;this.root=new Clip('main',this);this.root.playing=false;this.root.get('bg').go(sex);this.pointer={x:-1,y:-1,down:false};}
 rand(n){return Math.floor(this.random()*n);}
 emit(id){this.events.push({type:'sound',id:String(id),frame:this.frame});}
 drainEvents(){return this.events.splice(0);}
 get active(){return this.status==='playing';}
 get qq(){return this.root?.get('qq');}get bg(){return this.root?.get('bg');}get grip(){return this.qq?.get('claw')?.get('claw');}get rope(){return this.qq?.get('claw')?.get('rape');}
 enter(c){const id=c.id,n=c.frame;if(stops[id]?.includes(n))c.playing=false;
  if(id==='6'){if(n===1){if(!c.sparkStarted){c.sparkStarted=true;c.rotation=-(c.parent?.rotation||0);c.go(this.rand(40)+1,true);}c.scaleX=(this.rand(80)+60)/100;c.scaleY=(this.rand(80)+60)/100;c.x=this.rand(25)-12;c.y=this.rand(25)-12;}else if(n===17)c.go(this.rand(10)+n,true);}
  if(id==='90'||id==='112')c.visible=false;
  if(id==='92'&&[1,20,40].includes(n)){this.map=n===1?1:n===20?2:3;if(n!==1&&this.qq)this.setRole('ready');}
  if(READY.has(id)&&n===9){this.shake();}
  if(PICKUP.has(id)){if(n===1)this.grip?.go(1);if(n===21)this.checkMap();}
  if(NEXT.has(id)&&n===9)this.setRole('going');
  if(id==='332'){if(n===1||n===89)c.get('claw')?.get('claw')?.go(1);if(n===65||n===153)this.bg.playing=true;}
  if(id==='176'){const stone=c.get('stone');if(stone&&this.carried){stone.go(this.carried.frame);stone.scale=this.carried.scale;}}
  if(id==='113'&&n===4&&this.carried){const stone=c.get('stone');stone?.go(this.carried.frame);if(stone)stone.scale=this.carried.scale;this.carried.parent?.extra.splice(this.carried.parent.extra.indexOf(this.carried),1);this.carried.parent=null;this.phase='pull';}
  if(id==='345'&&n===300){c.visible=false;this.suk=1;c.go(1);}
  if(id==='366'&&n===2){c.get('rShow')?.go(this.stoneType);this.emit('365');}
 }
 setRole(state){this.qqState=state+this.sex;this.qq.go(this.qqState);}
 start(mode){if(mode!==1&&mode!==2)return false;this.stoneType=mode;this.status='playing';this.root.go(4);this.root.playing=false;this.emit('367');this.init();return true;}
 init(){this.dskNow=1;this.suk=1;this.timer=90;this.timerS=2250;this.getStones=0;this.speed=20;this.dspeed=1;this.dsk=1.1;this.maxDegree=84;this.maxHeight=500;this.minHeight=16;this.allStones=[];this.ss=Array(13).fill(1);this.bg.get('bg').extra=[];this.boost=this.root.get('speedUp');this.boost.go(1);this.boost.visible=false;this.phase='ready';this.map=1;this.carried=null;this.keys.clear();
  let stone;for(let i=1;i<=10;i++){stone=this.attach(i);stone.x=this.rand(1600)-400;stone.y=this.rand(200)-100;stone.go(this.rand(2)+7);stone.scale=(70+this.rand(80))/100;stone.rotation=this.rand(360);this.allStones.push(stone);}stone.go(9);stone.scale=1;this.count=10;const points=Array.from({length:12},(_,i)=>i+1);for(let i=0;i<12;i++){const at=this.rand(points.length),type=this.rand(3)+(this.stoneType===1?1:4),pc=points[at];this.createStone(pc,type);points.splice(at,1);}this.qq.go('ready'+this.sex);}
 attach(depth){const parent=this.bg.get('bg'),stone=new Clip('18',this,parent,{id:'18',depth,born:1,matrix:[1,0,0,1,0,0]});stone.depth=depth;parent.extra.push(stone);return stone;}
 createStone(pc,st){const point=instances['91'].frames[0].find(e=>e.name==='pt'+pc),stone=this.attach(++this.count);stone.x=point.matrix[4]/20+this.rand(120)-60;stone.y=point.matrix[5]/20+this.rand(120)-60;stone.count=pc;stone.go(st);stone.scale=(70+this.rand(80))/100;stone.rotation=this.rand(360);this.allStones.push(stone);return stone;}
 shake(){this.qq?.get('claw')?.go(1);this.setRole('normal');this.phase='aim';}
 setLength(n,ropeHeight=n){this.grip.y=Math.trunc(n*20)/20;const base=localBounds['109'][3]-localBounds['109'][1];this.rope.scaleY=ropeHeight/(base*this.rope.entry.matrix[3]);}
 ropeHeight(){const r=this.rope,b=localBounds['109'];return roundTwips((b[3]-b[1])*20*matrixFor(r)[3])/20;}
 length(){return this.grip.y??this.grip.entry.matrix[5]/20;}
 downRape(){if(!this.active||this.qqState!=='normal'+this.sex)return false;this.qq.get('claw')?.go(2);this.setRole('rapeDown');this.phase='down';return true;}
 getStone(){this.phase='pull';}
 checkMap(){let complete=true;for(let i=this.map*6-5;i<=this.map*6;i++)if(this.ss[i]===1){complete=false;break;}if(complete){if(this.map===2)this.gameEnd();else{this.phase='next';this.setRole('goNext');}}else this.shake();}
 gameEnd(){if(this.status!=='playing')return;this.qq.go('normal'+this.sex);this.phase='ended';this.status='result';this.keys.clear();this.root.get('gameResult').go('fadeIn',true);}
 restart(){if(this.status==='menu')return;this.root.get('gameResult').go(1);this.status='playing';this.init();this.bg.go(1);}
 action(name){if(name==='ordinary')return this.start(1);if(name==='diamond')return this.start(2);if(name==='help'&&this.status==='menu'){this.helpOpen=true;this.root.get('help').go('fadeIn',true);return true;}if(name==='help-close'){this.helpOpen=false;this.root.get('help').go('fadeOut',true);return true;}if(name==='replay'||name==='restart'){this.restart();return true;}if(name==='menu'){this.status='menu';this.phase='menu';this.keys.clear();this.root=new Clip('main',this);this.root.playing=false;this.root.get('bg').go(this.sex);return true;}return false;}
 keyDown(code){this.keys.add(code);if(this.keys.has(40)||this.keys.has(32))this.downRape();}keyUp(code){this.keys.delete(code);}
 step(){this.frame++;if(this.active){if(--this.timerS>0)this.timer=Math.floor(this.timerS/25*100)/100;else{this.timer=0;this.gameEnd();}
  if(this.active){if(this.phase==='aim'){let dsp=0;if(this.keys.has(37)){this.dskNow*=1.1;dsp=this.dskNow*1.1;}else if(this.keys.has(39)){this.dskNow*=1.1;dsp=-this.dskNow*1.1;}else this.dskNow=1;if(dsp){const claw=this.qq.get('claw');claw.rotation=(claw.rotation||0)+dsp;if(Math.abs(claw.rotation)>=84)claw.rotation=84*dsp/Math.abs(dsp);}}
   else if(this.phase==='down'){this.setLength(this.length()+20,this.ropeHeight()+20);const keys=Array.from({length:this.allStones.length},(_,i)=>String(i)).reverse();for(const key of keys){const stone=this.allStones[key],hitter=this.grip?.get('hitter');if(stone&&intersects(bounds(stone),hitter?bounds(hitter):null)){this.carried=stone;this.stoneFrame=stone.frame;this.stoneScale=stone.scale*100;this.stoneCount=stone.count;this.spk=20/stone.scale*.4;this.allStones.splice(Number(key),1);this.phase='catch';this.grip.go(2,true);this.setRole('rapeUp2');}}if(this.length()>=500){this.setLength(500);this.phase='empty';this.setRole('rapeUp1');}}
   else if(this.phase==='empty'){this.setLength(this.length()-30,this.ropeHeight()-30);if(this.length()<=16){this.setLength(16);this.shake();}}
   else if(this.phase==='pull'){{const amount=this.suk!==1?20:this.spk;this.setLength(this.length()-amount,this.ropeHeight()-amount);}if(this.length()<=16){this.setLength(16);if(this.stoneCount){this.ss[this.stoneCount]=0;this.getStones++;this.emit(1);}else if(this.stoneFrame===9){this.emit(1);this.suk=2;this.boost.visible=true;this.boost.go(2,true);}else this.emit(2);this.phase='pickup';this.setRole('pickUp');}}
  }}this.root.tick();}
 advance(now){const elapsed=Math.max(0,Math.min(250,now-this.lastTime));this.lastTime=now;this.accumulator+=elapsed;while(this.accumulator>=40){this.accumulator-=40;this.step();}}
 view(){return{root:this.root,frame:this.frame,status:this.status,mode:this.stoneType,timer:this.timer,score:this.getStones,map:this.map,phase:this.phase,qqState:this.qqState,pointer:this.pointer};}
}
