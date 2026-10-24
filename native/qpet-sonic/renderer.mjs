import { createArtwork } from './assets/artwork.mjs';
import { FONT_METRICS } from './assets/font-metrics.mjs';
import { BUTTON_BOUNDS } from './assets/button-bounds.mjs';

export async function createRenderer(canvas,{colorCache=true}={}) {
  const ctx = canvas.getContext('2d');
  function loadImage(url) {
    const image=new Image();
    const ready=new Promise((resolve,reject)=>{image.onload=()=>resolve(image);image.onerror=()=>reject(new Error('Image failed: '+url));});
    image.src=url;return {image,ready};
  }
  const {image:pet,ready:petReady}=loadImage(new URL('./assets/penguin-sheet.png',import.meta.url).href);
  const {image:front,ready:frontReady}=loadImage(new URL('./assets/penguin-front.png',import.meta.url).href);
  const {image:hud,ready:hudReady}=loadImage(new URL('./assets/penguin-hud-cheer.png',import.meta.url).href);
  let game, help=false, drawingMenu=false, currentMap=null, regions=[], pointer={x:-1,y:-1,down:false};
  const projection=[{y:430.5,scale:280}];
  let a=.935;
  for(let i=1;i<25;i++) {
    const previous=projection[i-1];
    projection.push({y:previous.y-9*previous.scale/100,scale:previous.scale*a});
    a*=.998;
  }
  function petDraw(target, pose, x=-1040,y=-1980,width=2080,height=2080) {
    const w=pet.width/4,h=pet.height/4;
    target.drawImage(pet,(pose%4)*w,Math.floor(pose/4)*h,w,h,x,y,width,height);
  }
  function frontDraw(target,pose,x,y,width,height) {
    // Generated atlas cells have irregular gutters; use measured content
    // rectangles so neighbouring feet/flowers cannot bleed into a pose.
    const rects=[[235,105,460,435],[880,53,464,490],[130,576,679,420],[972,635,342,360]];
    target.drawImage(front,...rects[pose],x,y,width,height);
  }
  function hudDraw(target,pose,x,y,width,height) {
    const rects=[[60,65,550,555],[615,105,630,515],[40,660,610,525],[650,655,595,535]];
    target.drawImage(hud,...rects[pose],x,y,width,height);
  }
  function labelButton(target,text,hover) {
    target.save();
    const s=hover?1.035:1;target.scale(s,s);
    art.draw('shape697',target,0,0);
    // The source menu uses embedded YouYuan outlines. Keep those exact
    // glyphs wherever present; only the penguin-specific missing words
    // need a rounded system-font fallback.
    const original='一下介再分回始开录戏次游玩积简记载返速音';
    const advance=380*1201/1200;
    target.translate(-text.length*advance/2,145);
    target.fillStyle='#000';target.textAlign='left';target.textBaseline='alphabetic';
    target.font='400 380px "YouYuan","Yuanti SC","STHeiti","Microsoft YaHei",sans-serif';
    for(const ch of text) {
      if(original.includes(ch)){target.save();target.scale(380/1024,380/1024);art.glyph(target,159,ch,'#000');target.restore();}
      else target.fillText(ch,0,0);
      target.translate(advance,0);
    }
    target.restore();
  }
  function drawMenu() {
    drawingMenu=true;art.draw('main',ctx,2,game.tick||0);drawingMenu=false;
    frontDraw(ctx,0,112,178,132,158);
    frontDraw(ctx,1,535,168,250,270);
    ctx.save();ctx.translate(380,0);ctx.textAlign='center';ctx.lineJoin='round';
    ctx.font='900 98px "STHeiti","PingFang SC","Microsoft YaHei",sans-serif';
    ctx.scale(510/ctx.measureText('Q宠爱音速').width,1);
    ctx.strokeStyle='#fff8d6';ctx.lineWidth=17;ctx.strokeText('Q宠爱音速',0,151);
    ctx.strokeStyle='#6d2500';ctx.lineWidth=10;ctx.strokeText('Q宠爱音速',0,151);
    const fill=ctx.createLinearGradient(0,60,0,155);fill.addColorStop(0,'#fff54b');fill.addColorStop(.5,'#ffc221');fill.addColorStop(1,'#ff7400');ctx.fillStyle=fill;ctx.fillText('Q宠爱音速',0,151);ctx.restore();
    if(help) {
      ctx.save();ctx.translate(392.8,208.45);ctx.scale(.05,.05);art.draw('sprite215',ctx,0,0);ctx.restore();
      return;
    }
    // Retain the photographed layout, with native vector/text drawing and
    // high-resolution character sprites instead of enlarging screenshot pixels.
    for(const [id,text,x,y,width,height] of [[167,'游戏开始',122,103,54,17],[172,'游戏简介',186,103,53,17],[185,'查看双乐榜',152,127,56,17],[900,'返回',153,150,55,17]]) {
      const region={id,x:x*canvas.width/350,y:y*canvas.height/194,width:width*canvas.width/350,height:height*canvas.height/194};
      regions.push(region);
      const hover=pointer.x>=region.x&&pointer.y>=region.y&&pointer.x<=region.x+region.width&&pointer.y<=region.y+region.height;
      ctx.save();ctx.translate((x+width/2)*760/350,(y+height/2)*420/194);ctx.scale(width*760/350/2218,height*420/194/768);labelButton(ctx,text,hover);ctx.restore();
    }
  }
  function numeric(target, value, font, height, width, baseline, color) {
    const text=String(value), metrics=FONT_METRICS[font], scale=height/1024;
    const length=[...text].reduce((n,ch)=>n+(metrics.advance[ch]||0),0)*scale;
    target.save();
    target.translate(width?Math.round((width-length)/2):0,baseline);
    target.scale(scale,scale);
    for(const ch of text) {art.glyph(target,font,ch,color);target.translate(metrics.advance[ch]||0,0);}
    target.restore();
  }
  function transformPoint(m,x,y) {return [m.a*x+m.c*y+m.e,m.b*x+m.d*y+m.f];}
  function buttonRegion(info,id) {
    const box=BUTTON_BOUNDS[id];
    if(!box)return;
    const before=info.ctx.getTransform(), local=info.matrix;
    const points=[];
    for(const x of [box[0],box[2]])for(const y of [box[1],box[3]]) {
      points.push(transformPoint(before,local[0]*x+local[2]*y+local[4],local[1]*x+local[3]*y+local[5]));
    }
    const rectangle={id,x:Math.min(...points.map(p=>p[0])),y:Math.min(...points.map(p=>p[1])),
      width:Math.max(...points.map(p=>p[0]))-Math.min(...points.map(p=>p[0])),
      height:Math.max(...points.map(p=>p[1]))-Math.min(...points.map(p=>p[1]))};
    regions.push(rectangle);
    return pointer.x>=rectangle.x&&pointer.y>=rectangle.y&&pointer.x<=rectangle.x+rectangle.width&&pointer.y<=rectangle.y+rectangle.height;
  }
  function drawScene(target) {
    const time=game.backgroundTick||0;
    target.save();target.translate(7599,4230);art.draw('sprite271',target,game.level-1,time);target.restore();
    const mapName=['sprite237','sprite459','sprite475'][game.level-1];
    for(const event of game.events.slice().sort((a,b)=>a.frame-b.frame)) {
      const row=projection[26-event.frame];
      if(!row)continue;
      currentMap=event;
      target.save();target.translate(7679,row.y*20);target.scale(row.scale/100,row.scale/100);
      target.globalAlpha=event.frame===2?.8:1;
      art.draw(mapName,target,0,Math.max(0,event.frame-2));target.restore();
    }
    currentMap=null;
    if(!['clear','victory'].includes(game.phase)) {
    target.save();target.translate(7551,7021);
    let dx=0,dy=0;
    const t=game.manTick;
    if([2,6,7].includes(game.manFrame))dx=-400*Math.sin(Math.min(1,t/6)*Math.PI);
    if([3,8,9].includes(game.manFrame))dx=400*Math.sin(Math.min(1,t/6)*Math.PI);
    if([4,6,8,24].includes(game.manFrame))dy=-520*Math.sin(Math.min(1,t/6)*Math.PI);
    target.translate(dx,dy);
    if(game.phase==='finishing') {
      const scale=1-game.finishTick/22;target.scale(scale,scale);
    }
    petDraw(target,game.phase==='over'?13:game.pose);target.restore();
    }
    for(const event of game.events)if(!event.hit&&event.frame<28) {
      target.save();target.translate(7610,4290);art.draw('sprite479',target,event.frame-1,event.frame-2);target.restore();
    }
    target.save();target.translate(-8,8013);art.draw('sprite484',target,0,0);target.restore();
    if(game.phase==='intro') {
      target.save();target.translate(7739,2949);art.draw('sprite506',target,Math.min(44,game.introTick),0);target.restore();
    }
  }
  const art=createArtwork(canvas,{colorCache,place(info) {
    const {obj,parent}=info;
    if(drawingMenu&&(obj.startsWith('button')||obj==='sprite215'))return {skip:true};
    if(obj==='sprite142'||obj==='button744')return {skip:true};
    if(obj==='sprite215'&&!help)return {skip:true};
    if(obj==='sprite507')return {draw:drawScene};
    if(obj==='sprite175'||obj==='shape179')return {skip:true};
    if(obj==='sprite653')return {draw:target=>hudDraw(target,0,-215,-245,2280,2322)};
    if(obj==='sprite631')return {draw:target=>{
      const pose=1+Math.floor((game.sun?.tick||0)/5)%3;
      const bounce=Math.sin((game.sun?.tick||0)*Math.PI/6)*75;
      hudDraw(target,pose,-780,-700+bounce,1560,1750);
    }};
    if(['sprite696','sprite740','sprite806'].includes(obj)) {
      return {draw:target=>obj==='sprite696'?frontDraw(target,3,1200,2200,3400,3600):obj==='sprite740'?frontDraw(target,2,1200,1800,7600,3300):frontDraw(target,2,-2500,-900,10000,4400)};
    }
    if(obj==='text512')return {draw:target=>numeric(target,game.score,511,480,2300,528,'#000')};
    if(obj==='text515')return {draw:target=>numeric(target,game.level,513,500,0,400,'#ff6600')};
    if(obj==='sprite522')return {frame:Math.min(99,game.damage-1),time:0};
    if(obj==='sprite648')return {frame:game.sun?.frame-1||0,time:game.sun?.frame===1?game.tick+game.resultTick:(game.sun?.tick||0)};
    if(obj==='sprite811') {
      if(!['over','clear','victory'].includes(game.phase))return {skip:true};
      return {frame:game.phase==='over'?0:game.phase==='clear'?1:2,time:Math.min(game.phase==='victory'?14:9,game.resultTick||0)};
    }
    if(obj==='sprite503')return {frame:game.level-1,time:0};
    if(obj==='sprite483'&&parent==='sprite484') {
      const matrix=info.matrix.slice();matrix[4]=758*game.progress*20;return {matrix,time:0,draw:target=>frontDraw(target,0,-80,-440,680,560)};
    }
    if(currentMap) {
      if(['sprite236','sprite458','sprite474'].includes(obj))return {frame:currentMap.hit?(obj==='sprite236'?22:18):currentMap.type-1,time:Math.max(0,currentMap.frame-2)};
      if(['sprite222','sprite445','sprite461'].includes(obj))return {frame:currentMap.collected?1:0,time:Math.max(0,currentMap.frame-2)};
      if(['sprite221','sprite444','sprite460'].includes(obj))return {frame:Math.min(15,currentMap.frame-2),time:0};
    }
    if(obj.startsWith('button')) {
      const id=Number(obj.slice(6)),hover=buttonRegion(info,id);
      if(id===807)return {draw:target=>labelButton(target,'兑换积分',hover)};
      return {frame:hover?(pointer.down?2:1):0,time:0};
    }
  }});
  await Promise.all([art.ready(),petReady,frontReady,hudReady]);
  return {
    setHelp(value){help=value;},
    get help(){return help;},
    pointer(value){pointer=value;},
    regions(){return regions.slice();},
    stats(){return art.stats();},
    hit(x,y){return regions.slice().reverse().find(r=>x>=r.x&&y>=r.y&&x<=r.x+r.width&&y<=r.y+r.height)?.id;},
    render(state) {
      game=state;regions=[];
      art.prepare(ctx);ctx.setTransform(canvas.width/760,0,0,canvas.height/420,0,0);
      ctx.fillStyle='#fff';ctx.fillRect(0,0,760,420);
      if(game.phase==='menu')drawMenu();else art.draw('main',ctx,3,game.tick||0);
    }
  };
}
