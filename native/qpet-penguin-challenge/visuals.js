import {instances,symbolKinds} from './assets/instances.js';
import {audioTimelineEvents} from './audio-assets.js';
import {createArtwork} from './assets/artwork.js';
import {createGeometry,identityMatrix,matrixMultiply,transformBounds} from './geometry.js';
import {drawDeviceLine,deviceLineMetrics} from './device-text.js';
const ROOTS=new Set(['124','15','196','246','28','312','360','388','414','417','420','43','498','554','557','580','582','585','589','595']);
const COLOR=[0,0,0,0,256,256,256,256];
const roles={Qgg1:'360',Qgg2:'312',Qgg3:'554',Qmm1:'246',Qmm2:'196',Qmm3:'124'};
const sounds=new Map(audioTimelineEvents.map(e=>[e.owner+':'+e.frame,e.id]));
export const inBox=(p,b)=>p&&p.x>=b[0]&&p.y>=b[1]&&p.x<=b[2]&&p.y<=b[3];
function equalMatrix(a,b){return a.every((n,i)=>n===b[i]);}

/** Finite authored scenes, actors and the six original role timelines. */
export class ChallengeVisuals{
 constructor(rules,sound){this.rules=rules;this.sound=sound;this.tickIndex=0;this.pending=new Map();this.regions=[];this.pointer=null;this.cover=this.node('580');this.controls=this.node('43');this.controls.find('exitMc').visible=false;this.go(this.controls.find('soundBtn'),1);this.flushScripts();}
 touch(n){for(;n;n=n.parent)n.revision++;}
 node(id,parent=null,row=null){const n={id:String(id),parent,row,frame:1,playing:(instances[id]?.frames.length||1)>1,bornTick:this.tickIndex,children:[],matrix:row?.matrix||[...identityMatrix],visible:true,revision:0,find(name){return this.children.find(c=>c.row?.name===name);}};this.reconcile(n);this.queueEnter(n);return n;}
 reconcile(n){const previous=n.children;n.children=(instances[n.id]?.frames[n.frame-1]||[]).map(row=>{const old=previous.find(c=>c.row.depth===row.depth&&c.id===row.id&&c.row.born===row.born);if(old){old.row=row;this.matrix(old,row.matrix);return old;}return this.node(row.id,n,row);});this.touch(n);}
 matrix(n,value){if(!equalMatrix(n.matrix,value)){n.matrix=value;this.touch(n);}}
 queueEnter(n){const sound=sounds.get(n.id+':'+n.frame);if(sound)this.sound(sound);this.pending.set(n,n.frame);}
 go(n,frame,play=false){if(!n)return;frame=Math.min(instances[n.id]?.frames.length||1,Math.max(1,Math.trunc(frame)));if(!Number.isFinite(frame))throw new Error('Invalid original frame');n.playing=play;if(n.frame!==frame){n.frame=frame;this.reconcile(n);this.queueEnter(n);}}
 play(n){if(n)n.playing=true;}
 advance(n){if(n.bornTick===this.tickIndex)return;if(n.playing&&(instances[n.id]?.frames.length||1)>1){n.frame=n.frame%instances[n.id].frames.length+1;this.reconcile(n);this.queueEnter(n);}for(const child of[...n.children])if(n.children.includes(child))this.advance(child);}
 flushScripts(){let count=0;while(this.pending.size){if(count++>10000)throw new Error('Unexpected source frame loop');const [n,frame]=this.pending.entries().next().value;this.pending.delete(n);if(['440','374'].includes(n.id)&&frame===1)n.playing=false;if(['59','202','257'].includes(n.id)&&frame===42)this.go(n,2,true);if(n.id==='589'&&frame===4){n.playing=false;this.rules._visibled=0;}if(n.id==='595'){if(frame===1){const score=n.find('score');if(score)score.text='';}if(frame===5)n.temp=n.find('score')?.text||'';if(frame===17){const score=n.find('score');if(score)score.text=n.temp||'';}if(frame===22)this.go(n,1);}}}
 start(){
  const g=this.rules;this.bg=this.node('420');this.bgStart=this.node('417');this.platforms=g.platforms.map(()=>this.node('498'));this.flake=this.node('582');this.walls=g.walls.map(()=>this.node('414'));this.snowman=this.node('585');this.startWood=this.node('557');this.addScore=this.node('595');this.go(this.addScore,1);this.addScore.playing=false;this.player=this.node(roles[(g._qqSex===102?'Qgg':'Qmm')+g._qqLevel]);this.go(this.player,1);this.snowPice=this.node('589');this.clock=this.node('388');this.go(this.clock.find('clockMc'),1);for(let i=0;i<6;i++)this.go(this.clock.find('score'+i),1);this.panel=null;this.sync();this.flushScripts();
 }
 replay(){this.panel=null;for(const n of this.platforms)this.go(n.find('mc'),this.rules.platforms[this.platforms.indexOf(n)].requestedFrame);this.sync();this.flushScripts();}
 syncPlatform(i){const p=this.rules.platforms[i],n=this.platforms[i];this.go(n.find('mc'),p.requestedFrame);const qq=n.find('qq');qq.visible=p.mascotVisible;this.go(qq,p.mascotFrame);this.go(qq.find('num0'),1);if(p.numberValue!==undefined){this.go(qq.find('num1'),p.number1);this.go(qq.find('num2'),p.number2);const positions=p.numberValue>=10?{num2:[1,15],num1:[11,10],num0:[21,5]}:{num1:[6,14],num0:[18,8]};for(const[name,[x,y]]of Object.entries(positions)){const child=qq.find(name);this.matrix(child,[...child.matrix.slice(0,4),x*20,y*20]);}}}
 sync(){if(!this.player)return;for(let i=0;i<8;i++)this.syncPlatform(i);for(let i=0;i<2;i++){this.go(this.walls[i].find('mc1'),this.rules.walls[i].frame1);this.go(this.walls[i].find('mc2'),this.rules.walls[i].frame2);}for(let i=0;i<6;i++)this.go(this.clock.find('score'+i),this.rules.scoreDigits[i]);const arrow=this.clock.find('arrowMc'),r=this.rules.arrowRotation*Math.PI/180;this.matrix(arrow,[Math.fround(Math.cos(r)),Math.fround(Math.sin(r)),Math.fround(-Math.sin(r)),Math.fround(Math.cos(r)),arrow.matrix[4],arrow.matrix[5]]);}
 handle(e){if(e.type==='player-frame')this.go(this.player,e.frame);if(e.type==='add-score'){this.go(this.addScore,2,true);this.addScore.find('score').text=e.text;}if(e.type==='clock-play')this.play(this.clock.find('clockMc'));if(e.type==='game-over')this.panel=this.node('28');}
 roots(){return this.player?[this.bg,this.bgStart,...this.platforms,this.flake,...this.walls,this.snowman,this.startWood,this.player,this.snowPice,this.addScore,this.clock,this.panel,this.controls].filter(Boolean):[this.cover,this.controls];}
 beginFrame(){this.tickIndex++;for(const n of this.roots())this.advance(n);}
 afterStage(){this.snowPosition={x:this.rules._oldX,y:this.rules._oldY};if(this.rules._visibled===1)this.play(this.snowPice);}
 endFrame(){this.sync();this.flushScripts();}
}

export async function createRenderer(canvas,visuals,{Path=globalThis.Path2D,optimizeFilters=true}={}){
 const ctx=canvas.getContext('2d'),collisionCanvas=document.createElement('canvas');collisionCanvas.width=collisionCanvas.height=1;
 const geometry=createGeometry(collisionCanvas.getContext('2d'),Path);let active=null,world=[...identityMatrix];const stack=[];
 const artwork=createArtwork(canvas,{
  filterROI(){if(!optimizeFilters||active?.id!=='595')return null;const box=transformBounds(world,geometry.bounds(active));if(!box)return null;const sx=canvas.width/16000,sy=canvas.height/12000,left=Math.max(0,Math.floor(box[0]*sx)-32),top=Math.max(0,Math.floor(box[1]*sy)-32),right=Math.min(canvas.width,Math.ceil(box[2]*sx)+32),bottom=Math.min(canvas.height,Math.ceil(box[3]*sy)+32);return[left,top,right-left,bottom-top];},
  text(id,context,color){
   const node=active;let lines=[];
   if(['text591','text593','text594'].includes(id)){if(!node.text)return;lines=[[node.text,'#ff9900',600,0,0,3920,2]];}
   if(id==='text27'){
    const score=String(visuals.rules.result?.score||0),parts=[['你获得了','#875308'],[score,'#ff0000'],['分，要加油哦~','#875308']];let x=0;for(const [text,shade]of parts){lines.push([text,shade,240,x,0,6741-x,0]);x+=deviceLineMetrics(text,240)?.width||0;}lines.push(['更多游戏请登录QQ宠物官网。','#875308',240,0,320,6741,0]);
   }
   context.save();const alpha=Math.max(0,Math.min(1,color.a_mult/256+color.a_add/255));context.globalAlpha*=alpha;
   if(id==='text27'){context.beginPath();context.rect(0,0,6741,1802);context.clip();}
   for(const line of lines){if(!drawDeviceLine(context,...line)){context.fillStyle=line[1];context.font=line[2]+'px sans-serif';context.textBaseline='top';context.fillText(line[0],line[3],line[4]);}}
   context.restore();
  },
  place({obj,slot}){
   if(!active||!instances[active.id])return null;const row=instances[active.id].frames[active.frame-1]?.[slot],child=active.children[slot];if(!row||!child||child.visible===false)return{skip:true};if(obj!==symbolKinds[child.id])throw new Error('Source drawing mismatch '+active.id+':'+slot+' '+obj+' != '+symbolKinds[child.id]);
   const matrix=child.matrix,factor=ROOTS.has(active.id)?.05:1;
   return{matrix:matrix.map(v=>v*factor),frame:child.frame-1,time:0,draw(context,color){stack.push(world);world=matrixMultiply(world,matrix);draw(child,context,color);world=stack.pop();}};
  }
 });
 function draw(node,context,color){const previous=active;active=node;let frame=node.frame-1;const action=node.row?.name==='soundBtn'?'sound':node.row?.name==='exitBtn'?'exit':node.id==='576'?'start':node.id==='577'?'hall':node.id==='23'?'replay':node.id==='20'?'hall':null;
  if(action){const box=transformBounds(world,geometry.bounds(node));if(box){const pixels=box.map(v=>v/20);if(action==='exit')visuals.controls.find('exitMc').visible=Boolean(inBox(visuals.pointer,pixels));visuals.regions.push({action,box:pixels});if(symbolKinds[node.id]?.startsWith('button'))frame=inBox(visuals.pointer,pixels)?visuals.pointer.down?2:1:0;}}
  artwork.draw(symbolKinds[node.id],context,frame,0,color);active=previous;
 }
 function root(node,x=0,y=0,sx=1,sy=sx,alpha=1){if(!node||node.visible===false)return;ctx.save();ctx.transform(.05*sx,0,0,.05*sy,x,y);ctx.globalAlpha*=alpha;world=[Math.fround(sx),0,0,Math.fround(sy),Math.trunc(x*20),Math.trunc(y*20)];draw(node,ctx,artwork.color(COLOR));ctx.restore();}
 artwork.prepare(ctx);await artwork.ready();
 return {
  geometry,artwork,
  render(){const g=visuals.rules;visuals.regions=[];ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.fillStyle='#333333';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.transform(canvas.width/800,0,0,canvas.height/600,0,0);
   if(!visuals.player)root(visuals.cover);
   else{
    root(visuals.bg,g.bg.x,g.bg.y);root(visuals.bgStart,g.bgStart.x,g.bgStart.y);
    for(const i of[6,5,4,2,1,0,7,3])root(visuals.platforms[i],g.platforms[i].x,g.platforms[i].y);
    for(const flake of g.snow)root(visuals.flake,flake.x,flake.y,flake.scale,flake.scale,Math.trunc(flake.alpha*256)/256);
    root(visuals.walls[0],0,g.walls[0].y);root(visuals.walls[1],800,g.walls[1].y,-1,1);root(visuals.snowman,0,g.snowman.y);root(visuals.startWood,0,g.startWood.y);root(visuals.player,g.player.x,g.player.y);
    if(Number.isFinite(visuals.snowPosition?.x)&&Number.isFinite(visuals.snowPosition?.y))root(visuals.snowPice,visuals.snowPosition.x,visuals.snowPosition.y);
    if(visuals.addScore.find('score')?.text)root(visuals.addScore,400,500);root(visuals.clock,50,0);if(visuals.panel)root(visuals.panel);
   }
   root(visuals.controls);ctx.restore();
  },
  actionAt(point){return visuals.regions.find(r=>inBox(point,r.box))?.action;}
 };
}
