import {instances,localBounds} from './assets/instances.js';
import {audioTimelineEvents,timelineCounts} from './audio-assets.js';
export const STAGE={width:650,height:450,fps:12};
const twip=x=>Math.trunc(x*20)/20;
const ident=[1,0,0,1,0,0];
export function multiply(a,b){return[a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]];}
export function transformBounds(b,m){const p=[];for(const x of[b[0]*20,b[2]*20])for(const y of[b[1]*20,b[3]*20])p.push([(m[0]*x+m[2]*y+m[4])/20,(m[1]*x+m[3]*y+m[5])/20]);return[Math.min(...p.map(v=>v[0])),Math.min(...p.map(v=>v[1])),Math.max(...p.map(v=>v[0])),Math.max(...p.map(v=>v[1]))];}
export function namedBox(id,frame,names,base=ident){let current=String(id),m=base;for(const name of names){const children=instances[current]?.frames;const node=children?.[(frame-1)%children.length]?.find(v=>v.name===name);if(!node)return null;m=multiply(m,node.matrix);current=node.id;frame=1;}const b=localBounds[current];return b?transformBounds(b,m):null;}
const intersects=(a,b)=>!!a&&!!b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];
const outer={1:['39','38'],2:['47','46'],5:['55','54'],10:['63','62']};
const catches={1:{symbol:'36',frames:18},2:{symbol:'44',frames:18},5:{symbol:'52',frames:16},10:{symbol:'60',frames:19}};
/** Direct translation of DefineSprite_441 frame 1, root frames 1–7 and the
 * listed child frame actions. Rendering tables contain original static paths;
 * no script/bytecode loader or Flash VM exists here. */
export class StarsGame{
 constructor({random=Math.random,onEvent=()=>{},hitShape=()=>false}={}){this.random=random;this.onEvent=onEvent;this.hitShape=hitShape;this.now=0;this.epoch=0;this.rootFrame=1;this.rootAge=0;this.pointer=null;this.keys=new Set();this.fs1=this.fs2=this.fs5=this.fs10=this.zs=0;this.djj=1;this.wcfs=150;this.events=[];this.resetGameplay();}
 emit(e){this.events.push(e);this.onEvent(e);}
 audio(timeline,frame){for(const e of audioTimelineEvents)if(e.timeline===String(timeline)&&e.frame===frame)this.emit({type:'sound',id:e.id,options:e.options,timeline:String(timeline),frame});}
 rand(n){return Math.floor(this.random()*n);}
 resetGameplay(){Object.assign(this,{uidCounter:0,v:0,z:30,hudu:0,vx:0,vy:0,ggv:0,jiao:0,fx:1,fy:1,iuy:1,shudu:10,hkk:true,caoji:false,csj:0,pl:0,xs:0,bgf:0,ghj:this.now,mlj:1000,zcsj:this.now,jz:900,bz:6000,xxx:0,xxx2:100,xxx5:200,xxx10:300,js:400,b:500,w:0,xs2:0,xs5:0,xs10:0,qmm:{x:48.5,y:122,frame:1,age:0,depth:17-16384,up:1,down:1},qgg:{x:46.15,y:173.55,frame:1,age:0,qi:1,qiAge:0},targetX:-2.45,timeFrame:1,wallAge:0,wallEffects:{top:0,left1:0,left2:0,right:0},objects:[]});}
 gotoRoot(frame){if(this.rootFrame===frame)return;this.rootFrame=frame;this.rootAge=0;this.epoch++;if(frame===3){this.fs1=this.fs2=this.fs5=this.fs10=this.zs=0;this.djj=1;this.wcfs=150;this.resetGameplay();}if(frame!==3)this.emit({type:'stop-stream'});}
 action(action){if(action==='start'||action==='replay'){this.gotoRoot(2);return true;}if(action==='skip-intro'&&this.rootFrame===1&&this.rootAge>=21&&this.rootAge<105){this.rootAge=105;this.audio('251',106);return true;}if(action==='help-start'&&this.rootFrame===1&&this.rootAge===105){this.gotoRoot(2);return true;}if(action==='exit'&&[3,5,6].includes(this.rootFrame)){this.gotoRoot(4);return true;}return false;}
 keyDown(code){if(this.rootFrame!==3)return;this.keys.add(code);if(code==='ArrowRight')this.v=this.z;if(code==='ArrowLeft')this.v=-this.z;if(code==='ArrowUp'){this.hudu+=0.03;this.qmm.up=2;}if(code==='ArrowDown'){this.hudu-=0.03;this.qmm.down=2;}}
 keyUp(code){this.keys.delete(code);if(this.rootFrame!==3)return;this.v=0;if(code==='ArrowUp')this.qmm.up=1;if(code==='ArrowDown')this.qmm.down=1;}
 releaseAll(){for(const key of [...this.keys])this.keyUp(key);}
 setQmm(frame){if(this.qmm.frame===frame)return;if(this.qmm.frame===2)this.emit({type:'stop-stream'});this.qmm.frame=frame;this.qmm.age=0;}
 qmmBox(){return namedBox('390',this.qmm.frame,['pb'],[1,0,0,1,this.qmm.x*20,this.qmm.y*20]);}
 objectBox(e){if(e.removed)return null;const f=e.age%instances[e.id].frames.length+1;const base=[1,0,0,1,e.x*20,e.y*20];if(e.kind==='star'){if(e.catchAge!==null)return null;return namedBox(e.id,f,['di1','pb'],base);}if(e.kind==='boost')return movingBox('8',e.age,['j','jss','jsss','pb'],base);if(e.kind==='bomb')return movingBox('13',e.age,['bzz','bzzz','pb'],base);if(e.kind==='goal')return namedBox('26',f,['pb'],base);return null;}
 attach(e,depth){e.depth=depth;e.removed=false;e.age=0;if(e.kind!=='goal'){const d=this.qmm.depth;this.qmm.depth=e.depth;e.depth=d;}this.objects.push(e);return e;}
 spawnStar(value){let toggle,counter;if(value===1){this.w=1-this.w;toggle=this.w;counter=++this.xxx;}if(value===2){this.xs2=1-this.xs2;toggle=this.xs2;counter=++this.xxx2;}if(value===5){this.xs5=1-this.xs5;toggle=this.xs5;counter=-(++this.xxx5);}if(value===10){this.xs10=1-this.xs10;toggle=this.xs10;counter=-(++this.xxx10);}const id=outer[value][toggle===1?0:1];this.attach({kind:'star',id,value,x:-100+this.rand(value<5?80:400)*(value<5?5:1),y:-120+this.rand(200),catchAge:null,uid:++this.uidCounter||1},counter);}
 spawnBoost(){this.attach({kind:'boost',id:'8',x:-100+this.rand(300),y:-120+this.rand(150),uid:'j'+(++this.js)},this.js);}
 spawnBomb(){this.attach({kind:'bomb',id:'13',x:50,y:-120+this.rand(150),uid:'b'+(++this.b)},this.b);}
 spawnGoal(){for(const e of this.objects)if(e.kind==='goal')e.removed=true;this.attach({kind:'goal',id:'26',x:-100+this.rand(400),y:-120+this.rand(150),uid:'goal'+this.djj},10000);}
 childFrames(){
  this.wallAge++;
  for(const key of Object.keys(this.wallEffects))if(this.wallEffects[key]){this.wallEffects[key]++;if(this.wallEffects[key]>6)this.wallEffects[key]=0;}
  const q=this.qmm;q.age++;if(q.frame===2&&q.age===1)this.emit({type:'sound',id:'stream295',options:{},timeline:'295',frame:2,stream:true});if(q.frame>=3){const id={3:'339',4:'374',5:'389'}[q.frame],end={3:36,4:69,5:16}[q.frame];this.audio(id,q.age+1);if(q.age>=end-1){this.gotoRoot(q.frame===4?5:6);return;}}
  const g=this.qgg;g.age++;g.qiAge++;if(g.frame===2){this.audio('424',g.age+1);if(g.age>=8){g.frame=1;g.age=0;g.qi=1;g.qiAge=0;}}else if(g.qi>1)this.audio('405',g.qiAge%12+1);
  for(const e of this.objects){if(e.removed)continue;e.age++;if(e.kind==='star'&&e.catchAge!==null){e.catchAge++;const c=catches[e.value];this.audio(c.symbol,e.catchAge+1);if(e.catchAge>=c.frames-1){e.x=-180+this.rand(400);e.y=-120+this.rand(200);this['fs'+e.value]+=e.value;e.catchAge=null;}}if(e.kind==='boost'&&e.age>=156)e.removed=true;if(e.kind==='bomb'&&e.age>=309)e.removed=true;}
 }
 timerListener(){if(this.zcsj+this.jz-this.now<0){this.spawnBoost();this.jz+=30000;}if(this.zcsj+this.bz-this.now<0){this.spawnBomb();this.bz+=60000;}this.zs=this.fs1+this.fs2+this.fs5+this.fs10;if(this.caoji&&this.qmm.frame<=2){this.shudu=15;this.z=50;this.setQmm(2);}if(this.caoji&&this.csj+6000-this.now<0&&this.qmm.frame<=2){this.caoji=false;this.shudu=10;this.z=30;this.setQmm(1);}const bg=transformBounds(localBounds['392'],multiply([1,0,0,1,0,0],instances['441'].frames[0].find(e=>e.name==='bg').matrix));if(!intersects(this.qmmBox(),bg)&&this.qmm.frame<3){this.setQmm(3);this.shudu=0;}}
 qggListener(){const g=this.qgg;this.targetX=twip(Math.min(260,Math.max(-140,this.targetX+this.v)));this.ggv=g.x+(this.targetX-g.x)*.2;g.x=twip(this.ggv);if(g.frame===1){let frame=g.qi;if(this.targetX-g.x>40)frame=2;if(this.targetX-g.x< -40)frame=3;if(this.targetX-g.x> -30&&this.targetX-g.x<40)frame=1;if(frame!==g.qi){g.qi=frame;g.qiAge=0;}}}
 dispatch(){// AVM1 array enumeration is reverse insertion; kept explicit, never a VM.
  for(const e of [...this.objects].reverse()){if(e.removed)continue;if(!intersects(this.objectBox(e),this.qmmBox()))continue;if(e.kind==='star')e.catchAge=0;if(e.kind==='boost'&&!this.caoji){this.caoji=true;this.csj=this.now;e.removed=true;}if(e.kind==='bomb'){this.setQmm(5);this.shudu=0;e.removed=true;}if(e.kind==='goal'){this.shudu=0;this.setQmm(4);e.removed=true;}}
  this.timerListener();this.qggListener();
 }
 collide(){const q=this.qmm,g=this.qgg;const hit=name=>this.hitShape(name,q.x,q.y,this);const l1=hit('left1'),l2=hit('left2'),r=hit('right'),t=hit('top');const p=hit('paddle'),p1=hit('paddle-left'),p2=hit('paddle-right');if(this.hkk&&q.frame<3){if((l1||l2)&&this.hkk){this.shudu=15;this.pl=0;this.fx=this.fx>0?-1:1;this.hkk=false;if(l1)this.wallEffects.left1=1;if(l2)this.wallEffects.left2=1;}if(r&&this.hkk){this.shudu=15;this.pl=0;this.fx=this.fx>0?-1:1;this.hkk=false;this.wallEffects.right=1;}if(t&&this.hkk){this.shudu=15;this.fy=this.fy>0?-1:1;this.hkk=false;this.wallEffects.top=1;}if((p||p1||p2)&&this.hkk&&q.frame<3){this.shudu=15;this.pl=0;if(p1&&this.hkk){this.hkk=false;if(q.x<0&&this.vx<0){this.fx=-1;this.iuy=-1;}else this.fx=1;}if(p2&&this.hkk){this.hkk=false;this.fx=this.jiao<270&&this.vx<0?-1:1;}if(p&&this.hkk){this.fy=this.fy>0?-1:1;if(this.fx*this.vx<0&&this.targetX<g.x&&this.hkk&&g.qi===3){this.hkk=false;this.hudu-=this.ggv*.0002;}if(this.fx*this.vx>0&&this.targetX>g.x&&this.hkk&&g.qi===2){this.hkk=false;this.hudu+=this.ggv*.005;}if(this.fx*this.vx<0&&g.qi===2&&this.hkk){this.hkk=false;this.fx=this.fx>0?-1:1;}if(this.fx*this.vx>0&&g.qi===3&&this.hkk){this.hkk=false;this.fx=this.fx>0?-1:1;}if(g.frame!==2){g.frame=2;g.age=0;}}}}
  if(!this.hkk&&!l1&&!l2&&!r&&!t)this.hkk=true;if(!this.hkk&&((l2&&t)||(l1&&t)||(r&&t)||(l1&&(p||p1))||(l2&&(p||p1))||(r&&(p||p2))))this.hkk=true;
 }
 move(){let guard=0;while(this.jiao===0){if(guard++>10000)throw new Error('随机源不能产生原角度区间');this.jiao=this.rand(400);this.hudu=this.jiao*.017;if(this.jiao<200||(this.jiao>245&&this.jiao<295)||this.jiao>340)this.jiao=0;}this.vx=Math.cos(this.hudu)*this.shudu;this.vy=Math.sin(this.hudu)*this.shudu;this.qmm.x=twip(this.qmm.x+this.iuy*this.fx*this.vx);this.qmm.y=twip(this.qmm.y+this.fy*this.vy);}
 tick(now){this.now=now;this.events=[];if(this.rootFrame===1){if(this.rootAge<105){this.rootAge++;this.audio('251',this.rootAge+1);}return;}if(this.rootFrame===2){this.rootAge++;this.audio('440',this.rootAge+1);if(this.rootAge>=23)this.gotoRoot(3);return;}if(this.rootFrame===4){this.rootAge++;this.audio('507',this.rootAge+1);if(this.rootAge>=82)this.gotoRoot(7);return;}if(this.rootFrame===7){this.gotoRoot(1);return;}if([5,6].includes(this.rootFrame)){this.rootAge++;if(this.rootFrame===5)this.audio('529',this.rootAge%18+1);else this.audio({1:'592',2:'568',3:'555'}[this.djj]||'529',this.rootAge%(timelineCounts[{1:'592',2:'568',3:'555'}[this.djj]||'529'])+1);return;}
  this.rootAge++;this.childFrames();if(this.rootFrame!==3)return;
  if(this.now-this.bgf>0&&this.xs<4){this.bgf+=600;this.spawnStar(1);if(this.xs<=2)this.spawnStar(2);if(this.xs<=2)this.spawnStar(5);if(this.xs<1)this.spawnStar(10);this.xs++;}
  if(this.timeFrame===99){if(this.zs>this.wcfs){this.mlj-=200;this.wcfs+=200;this.djj++;}else{this.gotoRoot(6);return;}if(this.djj===4)this.spawnGoal();this.timeFrame=100;this.timeFrame=1;}
  if(this.now-this.ghj>0){this.ghj+=this.mlj;this.timeFrame++;if(this.timeFrame===100)this.timeFrame=1;}
  if(this.shudu>10&&this.qmm.frame===1)this.shudu--;
  this.dispatch();this.collide();this.move();
 }
 snapshot(){return this;}
}
// Original moving nested placements for JS/bomb pickup bounds; explicit source
// paths only, preserving their independent authored animation clocks.
function movingBox(id,age,names,base){let current=String(id),m=base,localAge=age;for(const name of names){const list=instances[current];if(!list)return null;const frame=list.frames[localAge%list.frames.length];const e=frame.find(v=>v.name===name);if(!e)return null;m=multiply(m,e.matrix);current=e.id;}return transformBounds(localBounds[current],m);}
