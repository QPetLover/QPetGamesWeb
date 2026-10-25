import {instances,symbolKinds,buttonRecords} from './assets/instances.js';
import {textFields} from './assets/text-data.js';
import {createArtwork} from './assets/artwork.js';
import {createGeometry,identityMatrix,matrixMultiply,transformBounds} from './geometry.js';
import {drawDeviceLine,deviceLineMetrics} from './device-text.js';

export async function createRenderer(canvas,game,{Path=globalThis.Path2D}={}){
 const context=canvas.getContext('2d');const hitCanvas=document.createElement('canvas');hitCanvas.width=hitCanvas.height=1;
 const geometry=createGeometry(hitCanvas.getContext('2d'),Path);let active=null,world=[...identityMatrix];const buttons=[];
 function field(id,ctx,color){const t=textFields[id.slice(4)];if(!t)return;let text=t.plain;
  if(t.variableName.includes('zidanshu'))text=String(game.ammo);
  if(t.variableName==='fenshu')text=String(game.score);
  if(t.variableName==='result_msg')text='本局得分：'+game.result+'分。';
  if(t.variableName==='atation_msg')text='主人，来打猎吧！';
  if(!text)return;const box=t.box,size=Number(t.fontHeight),leading=Number(t.leading||0),left=box[0]+40+Number(t.leftMargin||0),top=box[1]+40,width=box[2]-box[0]-80-Number(t.leftMargin||0)-Number(t.rightMargin||0),lines=[];
  for(const paragraph of text.split(/\r\n|\r|\n/)){if(t.wordWrap!=='true'){lines.push(paragraph);continue;}let line='';for(const char of paragraph){if(line&&(deviceLineMetrics(line+char,size)?.width||0)>width){lines.push(line);line='';}line+=char;}lines.push(line);}
  const c=t.color||{red:0,green:0,blue:0,alpha:255},rgba=color.apply([Number(c.red),Number(c.green),Number(c.blue),Number(c.alpha)/255]);
  ctx.save();ctx.beginPath();ctx.rect(box[0],box[1],box[2]-box[0],box[3]-box[1]);ctx.clip();
  for(let i=0;i<lines.length;i++){const y=top+i*(size+leading+Math.trunc(size*170/1024));drawDeviceLine(ctx,lines[i],`rgba(${rgba[0]},${rgba[1]},${rgba[2]},${rgba[3]})`,size,left,y,width,Number(t.align));}ctx.restore();
 }
 const artwork=createArtwork(canvas,{
  text:field,
  place({obj,slot}){if(!active||!instances[active.id])return null;const child=active.children[slot];if(!child)return{skip:true};if(obj!==symbolKinds[child.id])throw new Error('Original drawing mismatch '+active.id+':'+slot+' '+obj+' != '+symbolKinds[child.id]);const matrix=child.matrix,factor=active.id==='main'?.05:1;
   return{matrix:matrix.map(v=>v*factor),frame:child.frame-1,time:0,draw(ctx,color){const old=world;world=matrixMultiply(world,matrix);draw(child,ctx,color);world=old;}};
  }
 });
 function draw(n,ctx,color){const previous=active;active=n;let frame=n.frame-1;if(buttonRecords[n.id]){buttons.push({node:n,world:[...world],box:transformBounds(world,geometry.bounds(n))?.map(x=>x/20)});frame=n===game.hover?game.down?2:1:0;}artwork.draw(symbolKinds[n.id],ctx,frame,0,color);active=previous;}
 artwork.prepare(context);await artwork.ready();return{
  artwork,geometry,buttons,
  render(){buttons.length=0;context.save();context.setTransform(1,0,0,1,0,0);context.fillStyle='#ffffff';context.fillRect(0,0,canvas.width,canvas.height);context.transform(canvas.width/760,0,0,canvas.height/420,0,0);context.beginPath();context.rect(0,0,760,420);context.clip();context.transform(.05,0,0,.05,0,0);world=[...identityMatrix];draw(game.root,context,artwork.color([0,0,0,0,256,256,256,256]));context.restore();},
  buttonAt(point){for(let i=buttons.length-1;i>=0;i--){const b=buttons[i];if(geometry.point(b.node,point.x,point.y,b.world))return b.node;}return null;},
  inspect(){return buttons.map(b=>({id:b.node.id,serial:b.node.serial,box:b.box}));}
 };
}
