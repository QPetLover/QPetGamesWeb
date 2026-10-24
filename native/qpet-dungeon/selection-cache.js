// Only the fixed 22 selector glow inputs are prepared. Game state is never run.
export function createSelectionCache({makeCanvas=()=>document.createElement('canvas'),maxBytes=96*1024*1024}={}){
 const entries=new Map();let bytes=0;
 const key=(group,ctx,color)=>[group,ctx.canvas.width,ctx.canvas.height,...ctx._matrix,ctx.globalAlpha,...['r_add','g_add','b_add','a_add','r_mult','g_mult','b_mult','a_mult'].map(k=>color[k])].join(':');
 function clear(){for(const e of entries.values())e.canvas.width=e.canvas.height=1;entries.clear();bytes=0;}
 return{clear,get bytes(){return bytes;},get size(){return entries.size;},hasGroup(group){return [...entries.values()].some(e=>e.group===group);},
  capture(group,source,ctx,color){const k=key(group,ctx,color);if(entries.has(k))return;const w=source.width,h=source.height,data=source.getContext('2d').getImageData(0,0,w,h).data;let left=w,top=h,right=-1,bottom=-1;for(let y=0;y<h;y++)for(let x=0,i=(y*w)*4+3;x<w;x++,i+=4)if(data[i]){left=Math.min(left,x);right=Math.max(right,x);top=Math.min(top,y);bottom=Math.max(bottom,y);}if(right>=left){left=Math.max(0,left-2);top=Math.max(0,top-2);right=Math.min(w-1,right+2);bottom=Math.min(h-1,bottom+2);}const width=right>=left?right-left+1:1,height=bottom>=top?bottom-top+1:1,allocation=width*height*4;if(bytes+allocation>maxBytes)throw Error('选人画面缓存超过96MB，请缩小窗口后重新准备');const canvas=makeCanvas();canvas.width=width;canvas.height=height;if(right>=left)canvas.getContext('2d').drawImage(source,left,top,width,height,0,0,width,height);else left=top=0;entries.set(k,{group,canvas,left,top});bytes+=allocation;},
  draw(group,ctx,color){const e=entries.get(key(group,ctx,color));if(!e)return false;// Repeat the original set/apply sequence: save/restore retains a subtly
  // different accumulated native matrix and changes subsequent path antialiasing.
  const matrix=ctx._matrix;ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(e.canvas,e.left,e.top);ctx.applyTransforms(matrix);return true;}
 };
}
export async function prepareSelectionEntries(cache,{groups,render,cancelled=()=>false,yieldTask=()=>new Promise(resolve=>setTimeout(resolve,0)),onProgress=()=>{}}){
 cache.clear();let done=0,maxTaskMs=0;const started=performance.now();const check=()=>{if(cancelled()){const error=new Error('画面尺寸已变化，准备已取消');error.name='AbortError';throw error;}};
 try{check();onProgress(0,groups.length);for(const group of groups){check();const taskStarted=performance.now();render(group);maxTaskMs=Math.max(maxTaskMs,performance.now()-taskStarted);if(!cache.hasGroup(group.id))throw Error('原版选人滤镜缓存不完整，请重新准备');onProgress(++done,groups.length);await yieldTask();check();}return{groups:done,bytes:cache.bytes,durationMs:performance.now()-started,maxTaskMs};}catch(error){cache.clear();throw error;}
}
