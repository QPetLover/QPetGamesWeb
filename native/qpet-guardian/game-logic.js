import {instances,localBounds} from './assets/instances.js';
import {audioTimelineEvents,audioStreams} from './audio-assets.js';
export const WIDTH=600,HEIGHT=210,FPS=12,STEP=1000/FPS;
const identity=[1,0,0,1,0,0],stopped=new Set(['58','94','186','188','228','250','394','main']);
export function multiply(a,b){return[a[0]*b[0]+a[2]*b[1],a[1]*b[0]+a[3]*b[1],a[0]*b[2]+a[2]*b[3],a[1]*b[2]+a[3]*b[3],a[0]*b[4]+a[2]*b[5]+a[4],a[1]*b[4]+a[3]*b[5]+a[5]];}
const twip=v=>Number.isFinite(v)?Math.trunc(v*20):undefined;
/** Sprite395 fangxiangjd/zdyundongx/zdyundongy: the original 57 multiplier,
 * angle clamping and integer flight sample are deliberate. */
export function launchAngle(x,y,qx=-265.75,qy=-52.8){let rad=Math.atan(Math.abs((x-qx)/(y-qy))),deg=rad*57;if(deg<=20){deg=19;rad=.35;}if(deg>80){deg=79;rad=1.38;}return{rad,deg};}
export function trajectory(rad){const result=[];for(let t=0;t<200;t++){const velocity=rad*42;const y=(-Math.cos(rad)*velocity)*t+2*(t*t);if(!(y<160))break;result.push([Math.sin(rad)*41*t,y]);}return result;}
export class GuardianGame{
 constructor({random=Math.random,onEvent=()=>{}}={}){this.random=random;this.onEvent=onEvent;this.uid=0;this.now=0;this.pointer={x:55,y:65,down:false};this.scores={haibaoshu:0,haioushu:0,xueguaishu:0};this.total=0;this.enemies=[];this.shots=[];this.combo=0;this.super=false;this.root=this.make('main',null,{matrix:identity,name:'root'});}
 emit(e){this.onEvent({...e,now:this.now});}
 make(id,parent,placement={}){const n={id:String(id),uid:++this.uid,parent,frame:1,playing:!stopped.has(String(id)),matrix:[...(placement.matrix||identity)],color:placement.color,name:placement.name,depth:placement.depth||0,born:placement.born||1,children:[],removed:false};this.sync(n,true);this.frameEvent(n);return n;}
 sync(n,initial=false){const rows=instances[n.id]?.frames[n.frame-1]||[];const old=n.children,nodes=[];for(const row of rows){let child=old.find(q=>!q.dynamic&&q.depth===row.depth&&q.id===row.id&&q.born===row.born);if(!child)child=this.make(row.id,n,row);else{child.matrix=[...row.matrix];child.color=row.color;child.name=row.name;child.depth=row.depth;}
  nodes.push(child);
 }for(const q of old)if(q.dynamic)nodes.push(q);else if(!nodes.includes(q))this.remove(q);n.children=nodes;}
 remove(n){if(!n||n.removed)return;n.removed=true;for(const c of n.children)this.remove(c);this.emit({type:'stream-stop',owner:n.uid});if(n.parent)n.parent.children=n.parent.children.filter(c=>c!==n);}
 named(n,name){return n?.children.find(c=>!c.removed&&c.name===name);}
 path(n,...names){for(const name of names)n=this.named(n,name);return n;}
 goto(n,frame,stop=true){if(!n||n.removed)return;frame=typeof frame==='string'?instances[n.id]?.labels[frame]:frame;if(!frame)return;n.playing=!stop;this.emit({type:'stream-stop',owner:n.uid});if(n.frame===frame)return;n.frame=frame;this.sync(n);this.frameEvent(n);}
 rootTo(frame){if(this.root?.frame===frame)return;this.goto(this.root,frame);if(frame===3){this.scores={haibaoshu:0,haioushu:0,xueguaishu:0};this.started=this.now;this.nextSeal=30;this.nextGull=60000;this.nextMonster=150000;this.combo=0;this.super=false;this.superStart=undefined;this.enemies=[];this.shots=[];this.localSealScore=0;this.sealID=0;this.gullID=600;this.monsterID=800;this.shotID=1200;this.emit({type:'game-start'});}if([4,10].includes(frame)){this.total=this.scores.haibaoshu+this.scores.haioushu+this.scores.xueguaishu;this.emit({type:'result',scores:{...this.scores},total:this.total});}}
 frameEvent(n){if(n.removed)return;for(const e of audioTimelineEvents)if(e.timeline===n.id&&e.frame===n.frame)this.emit({type:'sound',id:e.id,options:e.options,owner:n.uid});const stream=audioStreams[n.id],block=stream?.blocks.find(b=>b.frame===n.frame);if(block&&n.playing)this.emit({type:'stream',owner:n.uid,id:stream.id,frame:n.frame,blockIndex:stream.blocks.indexOf(block)});
  const id=n.id,f=n.frame,p=n.parent;
  if(id==='237'&&f===5)n.playing=false;
  if(id==='315'&&(f===1||f===3))n.playing=false;
  if(id==='115'&&f===10)this.goto(p,2);
  if(id==='150'&&f===38){if(p?.parent)p.parent.playing=true;this.goto(p,1);}
  if(id==='185'&&f===21){this.scores.haibaoshu+=100;this.remove(p?.parent?.parent);}
  if(id==='93'&&f===19){this.scores.haioushu+=200;this.remove(p?.parent?.parent);}
  if(id==='57'&&f===45){this.scores.xueguaishu+=300;this.remove(p?.parent?.parent);}
  if(['203','213','224','227'].includes(id)&&f===({203:9,213:10,224:9,227:16})[id])this.remove(p?.parent);
  if(id==='250'&&f===176)this.goto(this.named(p,'qgg_mc'),5);
  if(id==='283'&&f===75)this.goto(p,1);
  if(id==='314'&&f===36)this.goto(p,1);
  if(id==='328'&&f===35)this.rootTo(3);
  if(id==='333'&&f===4320)this.rootTo(5);
  if(id==='348'&&f===5)this.shoot();
  if(id==='348'&&f===9)this.goto(p,3);
  if(id==='354'&&f===11)this.goto(p,1);
  if(id==='382'&&f===27)this.goto(p,1);
  if(id==='473'&&f===52)this.rootTo(10);
  if(id==='490'&&f===50){this.rootTo(11);this.root.playing=true;}
  if((id==='521'&&f===38)||(id==='547'&&f===46))this.rootTo(4);
  if(id==='562'&&f===68)this.rootTo(2);
 }
 get scene(){return this.named(this.root,'主场景_mc');}
 tick(now=this.now+STEP){this.now=now;const all=[];function collect(n){if(n.removed)return;all.push(n);for(const c of n.children)collect(c);}collect(this.root);
  // The single source onEnterFrame broadcasts its listener list; authored
  // child frame actions run separately and are never browser-refresh based.
  if(this.root.frame===3)this.broadcast();
  for(const n of all){if(n.removed||!n.playing||!instances[n.id]||instances[n.id].frames.length===1)continue;const next=n.frame%instances[n.id].frames.length+1;if(n===this.root&&next===1){this.rootTo(1);this.root.playing=false;}else{if(next===1&&audioStreams[n.id])this.emit({type:'stream-stop',owner:n.uid});n.frame=next;this.sync(n);this.frameEvent(n);}}
  this.enemies=this.enemies.filter(e=>!e.node.removed);return this;
 }
 matrix(n){return n?.parent?multiply(this.matrix(n.parent),n.matrix):[...(n?.matrix||identity)];}
 bounds(n){if(!n||n.removed)return null;const b=localBounds[n.id];if(!b)return null;const m=this.matrix(n),p=[];for(const x of[b[0]*20,b[2]*20])for(const y of[b[1]*20,b[3]*20])p.push([m[0]*x+m[2]*y+m[4],m[1]*x+m[3]*y+m[5]]);return[Math.min(...p.map(q=>q[0]))/20,Math.min(...p.map(q=>q[1]))/20,Math.max(...p.map(q=>q[0]))/20,Math.max(...p.map(q=>q[1]))/20];}
 hit(a,b){const x=this.bounds(a),y=this.bounds(b);return!!(x&&y&&x[0]<=y[2]&&x[2]>=y[0]&&x[1]<=y[3]&&x[3]>=y[1]);}
 contains(n,x,y){const b=this.bounds(n);return b&&x>=b[0]&&x<=b[2]&&y>=b[1]&&y<=b[3];}
 aim(){const s=this.scene,q=this.named(s,'qgg_mc');if(!s||!q)return launchAngle(0,0);const x=this.pointer.x-s.matrix[4]/20,y=this.pointer.y-s.matrix[5]/20;const angle=launchAngle(x,y,q.matrix[4]/20,q.matrix[5]/20),fish=this.named(q,'yu');if(fish){const sx=Math.hypot(fish.matrix[0],fish.matrix[1]),sy=Math.hypot(fish.matrix[2],fish.matrix[3]),r=angle.deg*Math.PI/180;fish.matrix=[Math.cos(r)*sx,Math.sin(r)*sx,-Math.sin(r)*sy,Math.cos(r)*sy,fish.matrix[4],fish.matrix[5]];}return angle;}
 move(x,y){this.pointer.x=x;this.pointer.y=y;}
 press(x=this.pointer.x,y=this.pointer.y){this.move(x,y);this.pointer.down=true;if([3,4,10].includes(this.root.frame)){if(this.contains(this.named(this.root,'play_mc'),x,y)){this.rootTo(9);return;}if(this.contains(this.named(this.root,'tueichu_mc'),x,y)){this.rootTo(6);return;}}if(this.root.frame===3){const q=this.named(this.scene,'qgg_mc');if(this.contains(this.named(this.scene,'qggpb'),x,y)&&q.frame===1)this.goto(q,2);return;}
  if([4,10].includes(this.root.frame)){if(this.contains(this.named(this.root,'play_mc'),x,y))this.rootTo(9);else if(this.contains(this.named(this.root,'tueichu_mc'),x,y))this.rootTo(6);return;}
  if(this.root.frame===1){const ks=this.named(this.root,'ks_mc');if(ks?.frame===5&&this.contains(this.named(ks,'bangzhu'),x,y))this.rootTo(2);}
 }
 release(){this.pointer.down=false;}
 attach(id,name,depth,x,y){const s=this.scene;if(!s)return null;const at=s.children.find(q=>q.dynamic&&q.depth===depth);if(at)this.remove(at);const n=this.make(id,s,{matrix:[1,0,0,1,twip(x),twip(y)],name,depth});n.dynamic=true;s.children.push(n);return n;}
 shoot(){if(this.root.frame!==3)return;const s=this.scene,ammo=this.named(s,'xuer');this.goto(ammo,Math.min(176,ammo.frame+1));const a=this.aim(),samples=trajectory(a.rad);const node=this.attach('229','zdsl'+(++this.shotID),this.shotID,-250,-90);const shot={node,samples,k:0};this.shots.push(shot);if(this.super)this.goto(this.named(node,'kl'),2);this.emit({type:'throw',angle:a,shot:node.uid,super:this.super});}
 spawn(type){if(type==='seal'){const n=this.attach('188','haibao1'+(++this.sealID),this.sealID,300-Math.floor(this.random()*6)*20,-10);this.enemies.push({type,node:n,hp:2});}else if(type==='gull'){const n=this.attach('96','haiou1'+(++this.gullID),this.gullID,250,-60);this.enemies.push({type,node:n});}else{const n=this.attach('60','xueguai1'+(++this.monsterID),this.monsterID,250,-40);this.enemies.push({type,node:n,hp:4});}this.emit({type:'spawn',kind:type});}
 broadcast(){const s=this.scene;if(!s)return;const q=this.named(s,'qgg_mc'),qmm=this.named(s,'qmm_mc');if(this.contains(this.named(s,'qggpb'),this.pointer.x,this.pointer.y)&&q.frame===1)this.aim();
  if(this.combo===3){this.superStart=this.now;this.combo=4;}
  if(this.superStart!==undefined&&this.now-(this.superStart+10000)<=0&&this.combo>=3&&!this.super)this.super=true;
  if(this.superStart!==undefined&&this.now-(this.superStart+10000)>0&&this.super){this.super=false;this.combo=0;}
  if(this.super&&qmm.frame<3)this.goto(qmm,3);
  if(!this.super&&qmm.frame<2)this.goto(qmm,1);
  const elapsed=this.now-this.started;
  if(elapsed>=this.nextSeal){this.spawn('seal');this.nextSeal+=5900;}
  if(elapsed>=this.nextGull){this.spawn('gull');this.nextGull+=elapsed>=200000?30000:13000;}
  if(elapsed>=this.nextMonster){this.spawn('monster');this.nextMonster+=elapsed>=200000?13000:26000;}
  if(elapsed&&elapsed>=360000){this.rootTo(5);return;}
  // Listener registrations interleave over time, exactly as dynamic clips were
  // attached. Each enemy retains the source's newest/previous-projectile quirk.
  const callbacks=[...this.shots.map(shot=>({uid:shot.node.uid,shot})),...this.enemies.map(enemy=>({uid:enemy.node.uid,enemy}))].sort((a,b)=>a.uid-b.uid);
  for(const c of callbacks){if(this.root.frame!==3)break;if(c.shot)this.moveShot(c.shot);else this.moveEnemy(c.enemy);}
 }
 moveShot(shot){const n=shot.node;if(n.removed)return;const kl=this.named(n,'kl');if(this.hit(this.named(kl,'pb'),this.named(this.scene,'pb'))){this.combo=0;kl.matrix[5]=1600;this.goto(kl,this.super?4:3);this.emit({type:'water-hit',shot:n.uid});}
  if(kl.frame<3){shot.k++;const point=shot.samples[shot.k];const x=point&&twip(point[0]),y=point&&twip(point[1]);if(x!==undefined)kl.matrix[4]=x;if(y!==undefined)kl.matrix[5]=y;}
 }
 moveEnemy(e){const n=e.node;if(n.removed)return;const newest=this.shots.at(-1),previous=this.shots.at(-2),latest=this.named(newest?.node,'kl'),older=this.named(previous?.node,'kl');
  const struck=(shot,frame)=>{if(shot&&!shot.node.removed)this.goto(this.named(shot.node,'kl'),frame);};
  if(e.type==='seal'){const hb1=this.named(n,'hb1'),hb2=this.named(hb1,'hb2');if(!hb2)return;if(hb2.frame<2){if(latest&&latest.frame<3){for(const shot of[newest,previous])if(this.hit(this.named(hb2,'pb'),this.named(this.named(shot?.node,'kl'),'pb'))){struck(shot,this.super?6:5);hb1.playing=false;if(this.super){this.localSealScore+=100;this.goto(hb2,3);}else{e.hp--;this.goto(hb2,2);}this.emit({type:'enemy-hit',kind:'seal',hp:e.hp,super:this.super});}}
    if(e.hp===0){this.combo++;this.goto(hb2,3);}}
   if(hb2.matrix[4]<=-5000&&hb2.frame===1){const qm=this.named(this.scene,'qmm_mc');if(qm.frame!==2)this.goto(qm,2);if(this.hit(this.named(hb2,'pb'),this.named(this.scene,'qmmpb')))this.rootTo(7);}
  }else if(e.type==='gull'){const walk=this.named(n,'haiouz'),bird=this.named(walk,'haiouzz');if(!bird)return;
   // The original tests newest twice. The second body targets previous; after
   // first goto frame2 the pb is removed, so the duplicate usually falls false.
   for(let i=0;i<2;i++)if(this.hit(this.named(bird,'pb'),this.named(latest,'pb'))){struck(i?previous:newest,this.super?6:5);if(!this.super)this.combo++;walk.playing=false;this.goto(bird,2);this.emit({type:'enemy-hit',kind:'gull',super:this.super});}
   if(bird.matrix[4]<-9800){this.goto(this.named(this.scene,'qgg_mc'),4);this.remove(n);}
  }else{const walk=this.named(n,'xg1'),monster=this.named(walk,'xg2');if(!monster)return;if(e.hp>0){if(latest&&latest.frame<3){for(const shot of[newest,previous])if(this.hit(this.named(monster,'pb'),this.named(this.named(shot?.node,'kl'),'pb'))){struck(shot,this.super?6:5);if(!this.super)e.hp--;else{walk.playing=false;this.goto(monster,2);}this.emit({type:'enemy-hit',kind:'monster',hp:e.hp,super:this.super});}}
    if(this.hit(this.named(monster,'pb'),this.named(this.scene,'qmmpb')))this.rootTo(8);}
   if(e.hp===0&&monster.frame===1){this.combo++;walk.playing=false;this.goto(monster,2);}
   if(monster.matrix[4]<-5000&&n.frame===1){const qm=this.named(this.scene,'qmm_mc');if(qm.frame!==2)this.goto(qm,2);}
  }
 }
 snapshot(){return{rootFrame:this.root.frame,now:this.now,elapsed:this.started===undefined?0:this.now-this.started,scores:{...this.scores},total:this.total,combo:this.combo,super:this.super,ammo:this.named(this.scene,'xuer')?.frame,player:this.named(this.scene,'qgg_mc')?.frame,enemies:this.enemies.filter(e=>!e.node.removed).map(e=>({type:e.type,frame:e.node.frame,hp:e.hp})),shots:this.shots.filter(e=>!e.node.removed).length};}
}
