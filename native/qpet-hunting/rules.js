import {instances,symbolKinds,buttonRecords} from './assets/instances.js';
import {audioTimelineEvents} from './audio-assets.js';
export const WIDTH=760,HEIGHT=420,FPS=25;
const stopAt=new Map([['128',[451]],['219',[1]],['228',[1]],['241',[1]],['246',[1]],['254',[1,24]],['257',[1,22]],['258',[1,18]],['261',[1,25]],['286',[1,41]],['290',[1,19]],['318',[1,80]]]);
const targetButtons=new Set(['235','236','243','244','263','265','267','270','272','274','276','278']);
const playButtons=new Set(['253','256','260']);
const sounds=new Map(audioTimelineEvents.map(e=>[e.owner+':'+e.frame,e.id]));
const same=(a,b)=>a.every((v,i)=>v===b[i]);

/** This game's finite authored scenes and AS2 frame actions. No bytecode,
 * interpreter, generated player, random target generator or remote account API. */
export class HuntingGame{
 constructor({sound=()=>{},stream=()=>{},scene=()=>{}}={}){this.sound=sound;this.stream=stream;this.onScene=scene;this.tickIndex=0;this.serial=0;this.queue=[];this.events=[];this.ammo=55;this.score=0;this.role=0;this.pointer={x:380,y:210};this.pan=0;this.root=this.node('main');this.flush();}
 node(id,parent=null,row=null){const n={id:String(id),serial:++this.serial,parent,row,frame:1,playing:(instances[id]?.frames.length||1)>1,created:this.tickIndex,children:[],matrix:[...(row?.matrix||[1,0,0,1,0,0])],find(name){return this.children.find(c=>c.row?.name===name);}};this.reconcile(n);if(n.id==='286')n.hp=4;this.enter(n);return n;}
 reconcile(n){const previous=n.children;n.children=(instances[n.id]?.frames[n.frame-1]||[]).map(row=>{const old=previous.find(c=>c.row.depth===row.depth&&c.id===row.id&&c.row.born===row.born);if(old){if(!same(old.row.matrix,row.matrix))old.matrix=[...row.matrix];old.row=row;return old;}return this.node(row.id,n,row);});for(const old of previous)if(!n.children.includes(old))this.remove(old);}
 remove(n){n.removed=true;this.stream('remove',n);for(const c of n.children)this.remove(c);}
 enter(n){const sid=sounds.get(n.id+':'+n.frame);if(sid){this.events.push({type:'sound',id:sid,tick:this.tickIndex,owner:n.id,frame:n.frame});this.sound(sid);}this.stream('frame',n);this.queue.push([n,n.frame]);}
 go(n,frame,play=false){if(!n||n.removed)return;const count=instances[n.id]?.frames.length||1;frame=typeof frame==='string'?instances[n.id].labels[frame]:frame;frame=Math.min(count,Math.max(1,Math.trunc(frame)));if(!Number.isFinite(frame))throw new Error('Unknown original frame');n.playing=play;if(n.frame!==frame){n.frame=frame;this.reconcile(n);this.enter(n);}}
 play(n){if(n&&!n.removed)n.playing=true;}
 all(n=this.root,result=[]){result.push(n);for(const c of n.children)this.all(c,result);return result;}
 get world(){return this.root.find('gameworld');}
 get scene(){return this.root.frame<=2?'menu':this.root.frame===8||this.root.frame===9?'confirm':this.root.frame===10||this.root.frame===11?'intro':this.root.frame===12?'play':this.root.frame>=13?'result':'other';}
 frameAction(n,f){
  const w=this.world;
  if(stopAt.get(n.id)?.includes(f))n.playing=false;
  if(n.id==='main'){n.playing=false;if(f===1){this.ammo=55;this.score=0;}this.onScene(this.scene);return;}
  if(n.id==='126'&&f===55)this.go(this.root,2);
  if(['195','213'].includes(n.id)&&f===92)this.go(this.root,12);
  if(['240','245'].includes(n.id)&&f===296)this.go(n.parent?.parent,1,true);
  if(['241','246'].includes(n.id)&&f===2){n.parent.playing=false;this.score+=100;this.events.push({type:'score',score:this.score,delta:100,tick:this.tickIndex});}
  if(n.id==='286'&&f===20){n.hp-=1;this.go(n,1);}
  if(n.id==='290'&&f===2){this.ammo-=1;this.go(n.parent.find('upanddown'),2,true);this.events.push({type:'ammo',ammo:this.ammo,tick:this.tickIndex});}
  if(n.id==='295'){if(w)w.matrix[5]=[0,-60,40,-20][f-1];if(f===1)n.playing=false;}
  if(n.id==='301'){
   if(f===1){n.playing=false;if(this.ammo<=5)this.go(n,21);if(this.ammo>0)for(let i=10;i>=1;i--)this.go(n.find('z'+i),1);}
   if(f>=2&&f<=11){this.play(n.find('z'+(f-1)));if(f===11)this.go(n,12);}
   if(f>=22&&f<=26)this.play(n.find('z'+(f-21)));
   if(f===12){if(this.ammo<=1){this.go(w?.find('gun'),20);this.go(w?.find('gameover'),2,true);this.go(n,20);}else this.go(w?.find('gun'),20,true);this.events.push({type:'reload',ammo:this.ammo,tick:this.tickIndex});}
  }
  if(n.id==='310'){if(f===1){n.playing=false;this.go(w?.find('zidan'),1);if(w)w.reload=0;}if(f===23&&w)w.reload=1;}
  if(n.id==='318'){if(f===2&&this.score>5500)this.score=5500;if(f===79){if(this.score>5500)this.score=5500;this.result=this.score;this.go(this.root,this.role?14:13);}}
  if(n.id==='319'&&f===1){this.ammo=55;this.score=0;n.reload=0;n.playing=false;}
  // Imported Macromedia UI component placeholder clips are not instantiated
  // by the actual game scenes, but their authored first stop remains finite.
  if(Number(n.id)<100)n.playing=false;
 }
 flush(){let count=0;while(this.queue.length){if(++count>10000)throw new Error('Unexpected authored frame loop');const[n,f]=this.queue.shift();if(!n.removed)this.frameAction(n,f);}}
 tick(){this.tickIndex++;const w=this.world;if(w&&this.pan){const bg1=w.find('beijing1'),direction=this.pan;if(direction>0&&bg1.matrix[4]>-752*20||direction<0&&bg1.matrix[4]<-8*20){for(const[name,step]of[['beijing1',8],['beijing2',4],['beijing3',2]])w.find(name).matrix[4]=Math.trunc((w.find(name).matrix[4]/20-direction*step)*20);}}
  // AVM1 clips use the reverse creation execution list. Snapshot it so a
  // child made by a frame construction is first advanced next source tick.
  for(const n of this.all().sort((a,b)=>b.serial-a.serial)){if(n.removed||n.created===this.tickIndex)continue;if(n.playing&&(instances[n.id]?.frames.length||1)>1)this.go(n,n.frame%instances[n.id].frames.length+1,true);}
  this.flush();this.aim(this.pointer);return this;
 }
 chooseRole(role){this.role=role?1:0;this.go(this.root,this.role?9:8);this.flush();}
 startRole(){this.go(this.root,this.role?11:10);this.flush();}
 replay(){this.go(this.root,2);this.flush();}
 setPan(value){this.pan=value;const c=this.world?.find('contrl');if(c)this.go(c,value>0?2:value<0?3:1);this.flush();}
 aim(p){this.pointer={x:p.x,y:p.y};const w=this.world,g=w?.find('gun');if(g){g.matrix[4]=Math.trunc(p.x*20)-w.matrix[4];g.matrix[5]=Math.trunc(p.y*20)-w.matrix[5];}}
 press(button){const w=this.world;if(w){const z=w.find('zidan');if(z?.children.some(c=>c.id==='296'))this.go(z,z.frame+1);if(button&&!button.removed&&w.reload===0){if(targetButtons.has(button.id))this.go(button.parent,2);if(playButtons.has(button.id))this.play(button.parent);if(button.id==='226'){this.go(button.parent,2,true);this.score-=100;this.events.push({type:'score',delta:-100,score:this.score,tick:this.tickIndex});}if(button.id==='283'){if(button.parent.hp<=0)this.go(button.parent,21,true);this.play(button.parent);}}this.flush();}}
 release(){const w=this.world,z=w?.find('zidan');if(z?.children.some(c=>c.id==='296')&&this.ammo<=0){this.go(w.find('gun'),20);this.go(w.find('gameover'),2,true);this.go(z,20);this.flush();}}
 activate(button){if(!button)return null;if(button.id==='138')return 'hall';if(['133','330','339'].includes(button.id))return 'roles';if(['165','173'].includes(button.id)){this.startRole();return 'start';}if(['148'].includes(button.id)){this.startRole();return 'start';}if(['153'].includes(button.id)){this.replay();return 'menu';}return null;}
 snapshot(){const w=this.world;return{tick:this.tickIndex,scene:this.scene,rootFrame:this.root.frame,role:this.role,ammo:this.ammo,score:this.score,reload:w?.reload,magazine:w?.find('zidan')?.frame,gun:w?.find('gun')?.frame,ending:w?.find('gameover')?.frame,bg:w?.find('beijing1')?.matrix[4]/20,targets:this.all().filter(n=>['241','246','286'].includes(n.id)).map(n=>({id:n.id,serial:n.serial,frame:n.frame,hp:n.hp}))};}
}
