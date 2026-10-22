import {createArtwork} from './assets/artwork.js';
import {buttonBounds} from './assets/instances.js';
import {loadReferenceFont} from './assets/font.js';

export const layout = Object.freeze({width:800,height:600,fps:25,rootX:399.4,rootY:300.05});
const buttonActions = Object.freeze({button124:'start',button128:'help',button132:'more-games',button138:'start',button142:'close-help',button102:'replay',button79:'cancel',button99:'redeem',button106:'more-games'});
const digit = (n,place)=>Math.floor(Math.max(0,n||0)/10**place)%10;
const inside = (x,y,r)=>x>=r.x&&y>=r.y&&x<=r.x+r.width&&y<=r.y+r.height;

/** Draw original authored symbols with native game state selecting their frames.
 * The exported stage is 800×600. All pointer coordinates are authored pixels.
 */
export async function createRenderer(canvas,{cache=true}={}) {
  const ctx=canvas.getContext('2d');
  let view={},currentEnemy=null,scoreInstance=0,regions=[],cacheWidth=0,cacheHeight=0,screenKey=null,lastStatus=null;
  const staticCache=new Map(),localCache=new Map();
  const hoverStarts=new Map();
  const offscreen=(width,height)=>{const result=document.createElement('canvas');result.width=width;result.height=height;return result;};
  function drawStatic(name,context,color) {
    if(!cache){artwork.draw(name,context,0,0,color);return;}
    const matrix=[...context._matrix],key=name+':'+matrix.join(',');
    let layer=staticCache.get(key);
    if(!layer){layer=offscreen(canvas.width,canvas.height);const target=layer.getContext('2d');artwork.prepare(target);target.setTransform(...matrix);artwork.draw(name,target,0,0,color);staticCache.set(key,layer);}
    context.save();context.setTransform(1,0,0,1,0,0);context.drawImage(layer,0,0);context.restore();
  }
  function drawLocal(key,context,color,box,twips,draw) {
    if(!cache){draw(context,color);return;}
    const scale=canvas.width/800;
    let layer=localCache.get(key);
    if(!layer){
      layer=offscreen(Math.ceil(box[2]*scale),Math.ceil(box[3]*scale));
      const target=layer.getContext('2d');artwork.prepare(target);
      const unit=twips?20:1;target.setTransform(scale/unit,0,0,scale/unit,-box[0]*scale,-box[1]*scale);
      draw(target,color);localCache.set(key,layer);
      if(key.startsWith('timebar:'))for(const prior of localCache.keys())if(prior.startsWith('timebar:')&&prior!==key)localCache.delete(prior);
      // Off effects and the moving time bar have finite lifetimes. Bound the
      // bitmap cache while retaining frequently repeated flight/hand frames.
      if(localCache.size>180)localCache.delete(localCache.keys().next().value);
    }
    context.save();if(twips)context.transform(20,0,0,20,0,0);
    context.drawImage(layer,box[0],box[1],box[2],box[3]);context.restore();
  }
  const artwork=createArtwork(canvas,{text(id) {
    if(id==='107')return '你获得了'+(view.score??view.goodNum??0)+'分，要加油哦~';
  },place({obj,parent,matrix,ctx:parentContext}) {
    if(obj==='sprite110')return view.status==='ending'?{frame:6}:{skip:true};
    if(obj==='sprite243')return {frame:(view.rootFrame||(view.status==='playing'?2:view.status==='ending'?4:1))-1};
    if(obj==='sprite143')return {frame:view.help?3:0};
    if(obj==='sprite76'&&parent.startsWith('button'))return {frame:Math.min(7,Math.max(0,(view.frame||0)-(hoverStarts.get(parent)??(view.frame||0))))};
    if(obj.startsWith('button')) {
      const action=buttonActions[obj],box=buttonBounds[obj.slice(6)];
      if(!action||!box)return {frame:0};
      const m=parentContext._matrix;
      const points=[];
      for(const xx of [box[0]*20,box[2]*20])for(const yy of [box[1]*20,box[3]*20]){
        const x=matrix[0]*xx+matrix[2]*yy+matrix[4],y=matrix[1]*xx+matrix[3]*yy+matrix[5];
        points.push({x:(m[0]*x+m[2]*y+m[4])*800/canvas.width,y:(m[1]*x+m[3]*y+m[5])*600/canvas.height});
      }
      const left=Math.min(...points.map(p=>p.x)),right=Math.max(...points.map(p=>p.x));
      const top=Math.min(...points.map(p=>p.y)),bottom=Math.max(...points.map(p=>p.y));
      const region={action,x:left,y:top,width:right-left,height:bottom-top};regions.push(region);
      const over=view.pointer&&inside(view.pointer.x,view.pointer.y,region);
      if(over){if(!hoverStarts.has(obj))hoverStarts.set(obj,view.frame||0);}else hoverStarts.delete(obj);
      return {frame:over?(view.pointer.down?2:1):0};
    }
    if(parent==='sprite243') {
      if(obj==='sprite47')return {frame:0,draw(context,color) {
        drawStatic('sprite47',context,color);
        // The game container's authored origin is stage(-0.6,0.05). Enemy37
        // is the independent linked-symbol export in original pixel units.
        context.save();context.transform(20,0,0,20,.6*20,-.05*20);
        for(const enemy of view.enemies||[]) {
          if(!enemy.picVisible)continue;
          currentEnemy=enemy;scoreInstance=0;
          context.save();context.transform(enemy.xscale||1,0,0,1,enemy.x,enemy.y);
          const age=Math.max(0,(enemy.ageFrame||1)-1),phase=enemy.picFrame===1?age%(enemy.type===2?4:6):enemy.picFrame;
          drawLocal('enemy:'+enemy.type+':'+enemy.picFrame+':'+phase+':'+enemy.xscale,context,color,[-40,-91,128,124],false,
            (target,shade)=>artwork.draw('sprite37',target,enemy.type===2?1:0,age,shade));
          context.restore();
        }
        currentEnemy=null;context.restore();
      }};
      if(obj==='sprite158')return view.timebarVisible===false?{skip:true}:{frame:0,draw(context,color){
        drawLocal('timebar:'+view.timeLineX,context,color,[-35,-24,160,48],true,(target,shade)=>artwork.draw('sprite158',target,0,0,shade));
      }};
      if(obj==='sprite181')return {frame:(view.player?.frame||1)-1,draw(context,color){
        drawLocal('hand:'+view.player?.frame+':'+view.player?.childFrame,context,color,[-44,-33,72,60],true,
          (target,shade)=>artwork.draw('sprite181',target,(view.player?.frame||1)-1,0,shade));
      },
        matrix:[...matrix.slice(0,4),((view.player?.x??(layout.rootX-454.5))-layout.rootX)*20,((view.player?.y??(layout.rootY-85.35))-layout.rootY)*20]};
      if(obj==='sprite216')return {frame:view.sex==='qm'?1:0,draw(context,color){
        drawLocal('portrait:'+view.sex+':'+view.portrait?.frame+':'+view.portrait?.childFrame,context,color,[-125,-110,285,285],true,
          (target,shade)=>artwork.draw('sprite216',target,view.sex==='qm'?1:0,0,shade));
      }};
      if(obj==='sprite172') {
        const count=view.goodNum||0;
        const number=matrix[4]>6000?'num1':matrix[4]>5500?'num2':'num3';
        if(number==='num3'&&count<100)return {skip:true};
        let x=matrix[4],y=matrix[5];
        if(count>0){x=(count>=100?{num1:325.4,num2:303.2,num3:281.2}:{num1:305.4,num2:283.2,num3:261.2})[number]*20;y=(number==='num1'?-248.1:-249.7)*20;}
        return {frame:digit(count,number==='num1'?0:number==='num2'?1:2),matrix:[...matrix.slice(0,4),x,y]};
      }
      if(['shape112','shape159','sprite161','sprite219'].includes(obj))return {draw(context,color){drawStatic(obj,context,color);}};
    }
    if(parent==='sprite158'&&obj==='sprite150')return {matrix:[...matrix.slice(0,4),(view.timeLineX??121.25)*20,matrix[5]]};
    if(parent==='sprite181'&&['sprite44','sprite176','sprite180'].includes(obj))return {frame:Math.max(0,(view.player?.childFrame||1)-1)};
    if(parent==='sprite216'&&['sprite199','sprite215'].includes(obj))return {frame:Math.max(0,(view.portrait?.frame||1)-1)};
    if(['sprite199','sprite215'].includes(parent)&&['sprite188','sprite193','sprite198','sprite207','sprite211','sprite214'].includes(obj))return {frame:Math.max(0,(view.portrait?.childFrame||1)-1)};
    if(parent==='sprite37'&&['sprite28','sprite36'].includes(obj))return {frame:Math.max(0,(currentEnemy?.picFrame||1)-1)};
    if(parent==='sprite28'&&obj==='sprite18')return {frame:Math.max(0,(currentEnemy?.ageFrame||1)-1)%artwork.frameCount(obj)};
    if(parent==='sprite28'&&obj==='sprite24')return {frame:Math.max(0,(currentEnemy?.picFrame||2)-2)%artwork.frameCount(obj)};
    if(parent==='sprite28'&&obj==='sprite27')return {frame:currentEnemy?.xscale===-1?3:scoreInstance++===0?0:3};
    if(parent==='sprite36'&&obj==='sprite33')return {frame:Math.max(0,(currentEnemy?.ageFrame||1)-1)%artwork.frameCount(obj)};
    if(parent==='sprite240'&&obj==='sprite172') {
      const count=view.goodNum||0;
      const name=matrix[4]>0?'num1':matrix[4]>-100?'num2':'num3';
      if(name==='num3'&&count<100)return {skip:true};
      const x=(count>=100?{num1:32.8,num2:10.6,num3:-11.3}:{num1:21.8,num2:-.3,num3:22.3})[name]*20;
      const y=(name==='num1'?-72.6:-74.3)*20;
      return {frame:digit(count,name==='num1'?0:name==='num2'?1:2),matrix:[...matrix.slice(0,4),x,y]};
    }
  }});
  artwork.prepare(ctx);await Promise.all([artwork.ready(),loadReferenceFont()]);
  return {
    render(nextView) {
      view=nextView;
      if(lastStatus!==view.status){hoverStarts.clear();lastStatus=view.status;}
      if(cacheWidth!==canvas.width||cacheHeight!==canvas.height){cacheWidth=canvas.width;cacheHeight=canvas.height;staticCache.clear();localCache.clear();screenKey=null;}
      if(cache&&view.status!=='playing'){
        const over=view.pointer?[...regions].reverse().find(region=>inside(view.pointer.x,view.pointer.y,region))?.action:null;
        const animatedButton={cancel:'button79',redeem:'button99'}[over];
        const phase=animatedButton?Math.min(7,Math.max(0,(view.frame||0)-(hoverStarts.get(animatedButton)??(view.frame||0)))):0;
        const key=JSON.stringify([view.status,view.help,view.rootFrame,view.goodNum,view.score,over,view.pointer?.down,phase]);
        if(key===screenKey)return;screenKey=key;
      }else screenKey=null;
      regions=[];
      ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.setTransform(canvas.width/800,0,0,canvas.height/600,0,0);
      artwork.draw('main',ctx,2,view.frame||0);ctx.restore();
    },
    hitTest(x,y){return [...regions].reverse().find(region=>inside(x,y,region))?.action||null;},
    hitRegions(){return regions.map(region=>({...region}));},
    needsAnimation(){return view.status==='ending'&&[...hoverStarts].some(([button,start])=>['button79','button99'].includes(button)&&(view.frame||0)-start<7);},
    artwork,
  };
}
