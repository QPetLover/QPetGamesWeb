import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

test('linked arrow gloss fills its cached geometry after an unrelated native mask path',async()=>{
 class RecordedPath{constructor(){this.commands=[];}moveTo(...v){this.commands.push(['M',...v]);}lineTo(...v){this.commands.push(['L',...v]);}quadraticCurveTo(...v){this.commands.push(['Q',...v]);}closePath(){this.commands.push(['Z']);}}
 class Context{
  constructor(){this.fills=[];this.nativePath={name:'previous-mask-rectangle'};}
  save(){}restore(){}transform(){}setTransform(){}resetTransform(){}scale(){}rotate(){}translate(){}
  createLinearGradient(){return{addColorStop(){}};}
  createRadialGradient(){return{addColorStop(){}};}
  fill(path,rule){this.fills.push({path:typeof path==='object'?path:this.nativePath,rule:rule??path});}
  clip(){}fillRect(){}
 }
 const originalPath=globalThis.Path2D,originalDocument=globalThis.document;
 globalThis.Path2D=RecordedPath;
 globalThis.document={createElement(kind){assert.equal(kind,'img');return{complete:true,width:1,height:1,decode:async()=>{}};}};
 try{
  const {createArtwork}=await import('../assets/chapter2-variant0/drawing.js');
  const ctx=new Context(),art=createArtwork({width:760,height:420},{});await art.ready();art.prepare(ctx);
  // Each arrow gloss has two authored static paths. In the broken output the
  // final no-semicolon fill used nativePath, covering earlier direction icons.
  for(const id of [160,161,162,163,165,166,167,168]){
   ctx.fills=[];art.draw('shape'+id,ctx);
   assert.equal(ctx.fills.length,2,'two original highlights for shape'+id);
   for(const call of ctx.fills){assert(call.path instanceof RecordedPath,'uses explicit authored path, never previous mask rectangle');assert(call.path.commands.length>0);assert.equal(call.rule,'evenodd');}
  }
 }finally{if(originalPath===undefined)delete globalThis.Path2D;else globalThis.Path2D=originalPath;if(originalDocument===undefined)delete globalThis.document;else globalThis.document=originalDocument;}
});

test('all published chapter closures route static cached fills and clips including minified final statements',async()=>{
 const assets=new URL('../assets/',import.meta.url),names=(await fs.readdir(assets,{withFileTypes:true})).filter(entry=>entry.isDirectory()&&/^chapter/.test(entry.name)).map(entry=>entry.name);let checked=0;
 for(const name of names){
  const data=await fs.readFile(new URL(name+'/drawing.js',assets));const split=data.indexOf('var scalingGrids');assert(split>=0,name+' has fixed static symbols');const symbols=data.subarray(split);
  assert(!symbols.includes('ctx.fill("evenodd")'),name+' has no fill of stale native Canvas path');
  assert(!symbols.includes('ctx.clip()'),name+' has no clip of stale native Canvas path');
  assert(data.subarray(0,split).includes('else ctx.fill("evenodd")'),'native fallback is retained for non-cached geometry');checked++;
 }
 assert.equal(checked,17);
});
