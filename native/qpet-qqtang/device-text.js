import {deviceFontMetrics as metrics,deviceGlyphs} from './assets/device-font.js';

// Ruffle 0.5's device-font advance is truncated to a twip, then rounded to a
// whole pixel. Keep this small static drawing resource independent of a font
// loader, system Arial, SWF data or any Flash runtime.
export function deviceLineMetrics(text,size){
 const chars=[...text];if(!chars.every(ch=>deviceGlyphs[ch]))return null;
 const scale=Math.fround(size/metrics.unitsPerEm);
 const advances=chars.map(ch=>Math.round(Math.trunc(deviceGlyphs[ch].advance*scale)/20)*20);
 return{chars,advances,width:advances.reduce((a,b)=>a+b,0),ascent:Math.trunc(metrics.ascent*scale),scale};
}

export function drawDeviceLine(ctx,text,shade,size,left,top,width,align){
 const line=deviceLineMetrics(text,size);if(!line)return false;
 let x=left;if(align===2)x+=Math.trunc((width-line.width)/2);else if(align===1)x+=width-line.width;
 for(let i=0;i<line.chars.length;i++){
  ctx.save();ctx.transform(line.scale,0,0,line.scale,x,top+line.ascent);ctx.fillStyle=shade;ctx.beginPath();
  for(const [op,...p] of deviceGlyphs[line.chars[i]].commands){
   if(op==='m')ctx.moveTo(...p);else if(op==='l')ctx.lineTo(...p);else if(op==='q')ctx.quadraticCurveTo(...p);else if(op==='c')ctx.bezierCurveTo(...p);else ctx.closePath();
  }
  ctx.fill();ctx.restore();x+=line.advances[i];
 }
 return true;
}
