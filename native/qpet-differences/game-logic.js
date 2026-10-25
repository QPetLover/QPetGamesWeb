import{instances}from'./assets/instances.js';
export const STAGE={width:640,height:480,fps:12};
const markerIds=new Set(['49','51','62','70']);
/** Explicit translation of the fixed root, timer39 and marker frame actions.
 * Source n is assigned but never read. Source m==9 wins after nine pictures;
 * the tenth authored picture remains in static source data, not a new level. */
export class DifferencesGame{
 constructor({random=Math.random,onEvent=()=>{}}={}){this.random=random;this.onEvent=onEvent;this.rootFrame=5;this.rootAge=0;this.totalFrames=0;this.n=undefined;this.k=0;this.m=0;this.time='45';this.timerFrame=1;this.timerPlaying=false;this.markers=new Map();this.pointer=null;this.epoch=0;}
 emit(e){this.onEvent(e);}
 enterPicture(frame){const old=this.markers,next=new Map();for(const entry of instances.main.frames[frame-1])if(markerIds.has(entry.id)){const previous=old.get(entry.depth);const marker=previous&&previous.id===entry.id&&previous.born===entry.born?previous:{frame:1,playing:false,age:0};Object.assign(marker,entry);next.set(entry.depth,marker);}this.markers=next;this.rootFrame=frame;this.rootAge=0;this.epoch++;
  // tellTarget('a1' ... 'a5') resolves the lowest authored depth when names
  // repeat. New placements already construct at frame1; existing clips keep
  // identity until the source's explicit reset below.
  for(let i=1;i<6;i++){const marker=[...next.values()].sort((a,b)=>a.depth-b.depth).find(e=>e.name==='a'+i);if(marker){marker.frame=1;marker.playing=false;marker.age=0;}}
 }
 start(){this.n=Math.floor(this.random()*10)+1;this.k=0;this.m=1;this.time='45';this.timerFrame=1;this.timerPlaying=true;this.markers.clear();this.enterPicture(6);}
 action(action){if(action==='start'||action==='replay'){this.start();return true;}if(action==='community'){this.emit({type:'historical-link',url:'http://pethappy.bbs.qq.com'});return true;}if(action?.startsWith('mark:')&&this.rootFrame>=6&&this.rootFrame<=15){const marker=this.markers.get(Number(action.slice(5)));if(!marker||marker.frame!==1)return false;marker.frame=2;marker.age=0;marker.playing=true;this.emit({type:'sound',id:'48',timeline:marker.id,frame:2,options:{noMultiple:false}});return true;}return false;}
 timerEnterFrame(){if(this.k!==5)return;this.k=0;if(this.m===9){this.rootFrame=22;this.rootAge=0;this.markers.clear();this.timerPlaying=false;this.epoch++;}else{this.enterPicture(this.rootFrame+1);this.m++;this.time='45';}}
 timerAdvance(){if(!this.timerPlaying)return;this.timerFrame++;if(this.timerFrame===16){if(Number(this.time)>=0){this.time=Number(this.time)-1;this.timerFrame=2;}else this.timerFrame=16;}
  // gotoAndPlay(2) executes frame2 in the same logical tick.
  if(this.timerFrame===2&&Number(this.time)===0){this.timerPlaying=false;this.rootFrame=21;this.rootAge=0;this.markers.clear();this.epoch++;}
 }
 tick(){this.totalFrames++;this.rootAge++;if(this.rootFrame<6||this.rootFrame>15)return;
  // EnterFrame callback observes the previous frame's k. Author frame scripts
  // then advance marker/timer timelines; five completed markers transition on
  // the next source tick, preserving the timer's current phase between maps.
  this.timerEnterFrame();if(this.rootFrame===22)return;
  for(const marker of this.markers.values())if(marker.playing){marker.frame++;marker.age++;if(marker.frame===10){this.k++;marker.playing=false;}}
  this.timerAdvance();
 }
 snapshot(){return this;}
}
