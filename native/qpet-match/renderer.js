import {createArtwork} from './assets/artwork.js';
import {loadReferenceFont} from './assets/font.js';
import {instances} from './assets/instances.js';

// Native stage coordinates from the original authored movie, independent of CSS scale.
export const layout = Object.freeze({width:500,height:400,boardX:201.8,boardY:13,
  firstX:218.9,firstY:30.1,pitch:35.2,tileSize:34.2,rows:10,columns:6});
const noAnimation = new Set(['sprite69','sprite84','sprite93','sprite258']);
const hitBounds = (x,y,scale=.8499908447265625) => ({
  x:x-52.75*scale,y:y-20.2*scale,width:119*scale,height:46*scale});
const buttons = {
  intro:[{action:'start',...hitBounds(324.8,361.75)},{action:'help',...hitBounds(432.1,361.75)}],
  help:[{action:'start',...hitBounds(431.8,361.75)}],
  level:[{action:'continue',...hitBounds(301.2,201.1)}],
  lost:[{action:'restart',...hitBounds(299.35,194.7)},{action:'help',...hitBounds(299.35,237.95)}],
  won:[{action:'restart',...hitBounds(427.4,314.25)},{action:'mute',...hitBounds(427.4,357.5)}]
};
const digit = (value,width,index) => Number(String(Math.max(0,Math.floor(value||0))).padStart(width,'0')[index]||'0');

/** Original artwork, with authored frame selections controlled by the native AS port.
 * Canvas geometry and embedded glyph outlines were extracted at build time. This
 * module has no SWF parser, AVM, bytecode, dynamic code compilation, or network IO.
 */
export async function createRenderer(canvas) {
  await loadReferenceFont();
  let view={status:'intro',frame:0}, cell=null, phaseStatus='intro', phaseStart=0,previousFrame=0,endingStop=0,lastStatus='intro';
  let creditAge=0,creditPresent=false;
  let cacheMode=null,rootIndex=0,captureRange=null,staticRanges=[],layerAt=new Map();
  let cacheWidth=0,cacheHeight=0,cacheFrame=-1;
  const pipeCache=new Map(),footerCache=new Map(),stats={lastRenderMs:0};
  const offscreen=(width,height)=>{
    const result=document.createElement('canvas');result.width=width;result.height=height;
    return result;
  };
  const instanceAt=(obj,matrix)=>instances.find(item=>item.symbol===obj &&
    Math.abs(item.x-matrix[4])<.001 && Math.abs(item.y-matrix[5])<.001);
  const artwork=createArtwork(canvas,{place({obj,parent,matrix,frame,time}) {
    if(parent==='main') {
      const index=rootIndex++;
      if(cacheMode==='collect') {
        const dynamic=!!instanceAt(obj,matrix)||obj.startsWith('button')||
          artwork.frameCount(obj)>1;
        staticRanges.push({index,dynamic});
        return {skip:true};
      }
      if(cacheMode==='capture') {
        if(index<captureRange.first||index>captureRange.last) return {skip:true};
      } else if(layerAt.has(index)) {
        const layer=layerAt.get(index);
        if(!layer) return {skip:true};
        return {draw(ctx) {
          ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(layer,0,0);ctx.restore();
        }};
      }
    }
    if(noAnimation.has(obj)) return {frame:0};
    if((parent==='sprite35'||parent==='sprite43')&&obj==='sprite22') {
      // The eight-frame squid clip's four-frame eyes already inherit their
      // age through the selected parent frame. The raw export adds time again.
      return {frame:(frame-time%4+4)%4};
    }
    if(parent==='sprite278'&&obj==='sprite146') {
      // Both are placed on root52. The six-frame logo continues independently
      // while its containing four-frame ending clip loops.
      return {frame:creditAge%6};
    }
    if(obj==='sprite150') return {frame:creditAge%9,draw(context,color,state) {
      // The authored nine-frame credit loop holds three identical frames per
      // white/yellow/cyan edit field. Keep that timeline and cache glyph pixels.
      const group=Math.floor(state/3)*3;
      let image=footerCache.get(group);
      if(!image) {
        const scale=canvas.width/500;
        image=offscreen(Math.ceil(410*scale),Math.ceil(80*scale));
        const textContext=image.getContext('2d');artwork.prepare(textContext);
        textContext.setTransform(image.width/410/20,0,0,image.height/80/20,
          4*image.width/410,20*image.height/80);
        artwork.draw('sprite150',textContext,group,0,color);
        footerCache.set(group,image);
      }
      context.save();context.transform(20,0,0,20,0,0);
      context.drawImage(image,-4,-20,410,80);context.restore();
    }};
    if(obj.startsWith('button')) {
      const pointer=view.pointer;
      if(!pointer) return {frame:0};
      let over=false;
      if(obj==='button14' && cell) {
        const x=layout.boardX+layout.pitch*cell.col,y=layout.boardY+layout.pitch*cell.row;
        over=pointer.x>=x&&pointer.x<=x+layout.tileSize&&pointer.y>=y&&pointer.y<=y+layout.tileSize;
      } else {
        const action=({'button158':'start','button161':'help','button164':'start',
          'button255':'continue','button261':'restart','button268':'help',
          'button280':'restart','button285':'mute'})[obj];
        const bounds=(buttons[view.status]||[]).find(b=>b.action===action);
        over=bounds && pointer.x>=bounds.x&&pointer.x<=bounds.x+bounds.width&&
          pointer.y>=bounds.y&&pointer.y<=bounds.y+bounds.height;
      }
      return {frame:over?(pointer.down?2:1):0};
    }
    if(parent==='sprite54') {
      if(obj==='sprite11'||obj==='sprite53') return {frame:(cell?.frame||1)-1};
      if(obj==='sprite47') return {frame:(cell?.effect||1)-1};
    }
    if(parent!=='main') return;
    const instance=instanceAt(obj,matrix);
    if(!instance) return;
    const name=instance.name;
    if(name==='canvas_mc') return {draw(ctx,color) {
      if(!view.pipesVisible) return;
      // canvas_mc is stored in twips; generated pipe54 is a pixel-normalized export.
      ctx.save();ctx.transform(20,0,0,20,0,0);
      for(let row=0;row<10;row++) for(let col=0;col<6;col++) {
        cell={row,col,frame:view.cellFrames[row][col],effect:view.effectFrames[row][col]};
        ctx.save();ctx.transform(1,0,0,1,17.1+35.2*col,17.1+35.2*row);
          const pointer=view.pointer,x=layout.boardX+35.2*col,y=layout.boardY+35.2*row;
          const over=pointer&&pointer.x>=x&&pointer.x<=x+34.2&&pointer.y>=y&&pointer.y<=y+34.2;
          if(cell.effect===1&&!over) {
            const type=view.board[row][col],key=type+':'+cell.frame;
            let image=pipeCache.get(key);
            if(!image) {
              const scale=canvas.width/500;
              image=offscreen(Math.ceil(100*scale),Math.ceil(100*scale));
              const tileContext=image.getContext('2d');artwork.prepare(tileContext);
              tileContext.setTransform(image.width/100,0,0,image.height/100,image.width/2,image.height/2);
              // All pipe/effect frames fit in the authored 95px crop about
              // (48.1,47.65). Padding to 100px preserves the original bounds.
              artwork.draw('sprite54',tileContext,type-1,0,color);
              pipeCache.set(key,image);
            }
            ctx.drawImage(image,-50,-50,100,100);
          } else {
            // effect47's frame already selects its child animation age. Adding
            // the global game frame would advance the authored animation twice.
            artwork.draw('sprite54',ctx,view.board[row][col]-1,0,color);
          }
        ctx.restore();
      }
      cell=null;ctx.restore();
    }};
    if(name==='hart_mc') {
      if(!view.heart?.visible) return {skip:true};
      return {frame:0,matrix:[...matrix.slice(0,4),view.heart.x,view.heart.y]};
    }
    if(name==='time_bar') return {frame:(view.timeFrame||1)-1};
    if(name==='level_mc') return {frame:view.level||1};
    if(name.startsWith('score')) return {frame:digit(view.displayScore,5,Number(name.slice(5))-1)};
    if(name.startsWith('ms2_')) return {frame:digit(view.target,2,Number(name.slice(4))-1)};
    if(name.startsWith('ms1_')) return {frame:digit(view.pairs,2,Number(name.slice(4))-1)};
    if(name.startsWith('start')) return {frame:view.left?.[Number(name.slice(5))]?1:0};
    if(name.startsWith('end')) return {frame:view.right?.[Number(name.slice(3))]?1:0};
    if(name==='levelup_mc') return {frame:view.status==='level'?1:0};
    if(name==='game_over') return {frame:view.status==='lost'?1:0};
    if(name==='corn_plus5') return {frame:(view.cornFrame||1)-1};
    if(name==='line_mc') return {frame:(view.lineFrame||1)-1};
    if(name==='line_sound') return {frame:(view.lineSoundFrame||1)-1};
  }});
  const ctx=canvas.getContext('2d');artwork.prepare(ctx);
  function prepareStaticLayers(rootFrame) {
    if(cacheWidth!==canvas.width||cacheHeight!==canvas.height) {
      cacheWidth=canvas.width;cacheHeight=canvas.height;cacheFrame=-1;
      pipeCache.clear();footerCache.clear();layerAt.clear();
    }
    // These root frames are held by authored stop() actions. Cache contiguous
    // immutable display-list runs, preserving their exact order around moving
    // objects and overlays. Other root frames continue drawing their timeline.
    if(![46,47,48,192].includes(rootFrame)) {layerAt.clear();cacheFrame=-1;return;}
    if(cacheFrame===rootFrame) return;
    layerAt.clear();staticRanges=[];rootIndex=0;cacheMode='collect';
    artwork.draw('main',ctx,rootFrame,0);
    const runs=[];
    for(const entry of staticRanges) {
      if(entry.dynamic) continue;
      const last=runs[runs.length-1];
      if(last&&last.last===entry.index-1) last.last=entry.index;
      else runs.push({first:entry.index,last:entry.index});
    }
    for(const run of runs) {
      const image=offscreen(canvas.width,canvas.height),context=image.getContext('2d');
      artwork.prepare(context);context.setTransform(canvas.width/500,0,0,canvas.height/400,0,0);
      context.beginPath();context.rect(0,0,500,400);context.clip();
      captureRange=run;cacheMode='capture';rootIndex=0;
      artwork.draw('main',context,rootFrame,0);
      layerAt.set(run.first,image);
      for(let index=run.first+1;index<=run.last;index++) layerAt.set(index,null);
    }
    cacheMode=null;captureRange=null;cacheFrame=rootFrame;
  }
  return {
    layout,stats,
    render(nextView) {
      const started=performance.now();
      view=nextView;
      const phase=['playing','level','lost'].includes(view.status)?'board':
        ['ending','won'].includes(view.status)?'ending':view.status;
      if(phase!==phaseStatus || view.frame<previousFrame) {
        phaseStatus=phase;phaseStart=view.frame;
      }
      if(view.status==='won'&&lastStatus!=='won') endingStop=view.frame;
      if(view.status==='ending') endingStop=0;
      const rootFrame=view.rootFrame!==undefined?view.rootFrame-1:
        view.status==='intro'?Math.min(46,Math.max(0,(view.introFrame||view.frame+1)-1)):view.status==='help'?47:
        view.status==='won'?192:view.status==='ending'?Math.max(49,(view.endingFrame||50)-1):48;
      // Credit sprite150 is placed on root46, survives the menu→help jump,
      // disappears on49, and is placed anew on52. Preserve its instance age.
      const hasCredit=(rootFrame>=45&&rootFrame<=47)||rootFrame>=51;
      if(hasCredit) creditAge=creditPresent?creditAge+Math.max(0,view.frame-previousFrame):0;
      creditPresent=hasCredit;
      previousFrame=view.frame;lastStatus=view.status;
      const timelineTime=view.timelineTime!==undefined?view.timelineTime:
        view.status==='intro'?Math.max(0,view.frame-46):view.status==='ending'?0:
        view.status==='won'?Math.max(0,view.frame-endingStop):Math.max(0,view.frame-phaseStart);
      prepareStaticLayers(rootFrame);rootIndex=0;
      ctx.setTransform(1,0,0,1,0,0);
      // SetBackgroundColor, authored on the original SWF root timeline.
      ctx.fillStyle='#660066';ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.save();ctx.transform(canvas.width/500,0,0,canvas.height/400,0,0);
      ctx.beginPath();ctx.rect(0,0,500,400);ctx.clip();
      artwork.draw('main',ctx,rootFrame,timelineTime);
      ctx.restore();
      stats.lastRenderMs=performance.now()-started;
    },
    hitTest(x,y,status=view.status) {
      return (buttons[status]||[]).find(b=>x>=b.x&&x<=b.x+b.width&&y>=b.y&&y<=b.y+b.height)?.action||null;
    },
    buttonBounds(status=view.status) { return (buttons[status]||[]).map(b=>({...b})); }
  };
}
