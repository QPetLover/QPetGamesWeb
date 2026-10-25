/** Exact transformed copies/patterns of immutable source bitmaps. Artwork only
 * calls these for embedded originals; dynamic filter/blend canvases bypass it.
 * A shared LRU caps both allocations. Eviction only releases references, never
 * changes pixels: an in-flight CanvasPattern may still use an evicted canvas. */
export function createBitmapColorCache({maxBytes=32*1024*1024,maxEntries=64}={}){
    maxBytes=Math.max(0,Number(maxBytes)||0);maxEntries=Math.max(0,Math.floor(Number(maxEntries)||0));
    let sources=new WeakMap(),contexts=new WeakMap(),bytes=0,hits=0,misses=0,evictions=0,skippedOversizePatterns=0;
    const entries=new Map();
    function touch(entry){entries.delete(entry);entries.set(entry,true);hits++;return entry.value;}
    function discard(entry){entries.delete(entry);entry.map.delete(entry.key);bytes-=entry.bytes;evictions++;}
    function retain(map,key,value,size,kind){
        if(!Number.isFinite(size)||size<=0||size>maxBytes||maxEntries<1)return value;
        const previous=map.get(key);if(previous)discard(previous);
        while(entries.size>=maxEntries||bytes+size>maxBytes)discard(entries.keys().next().value);
        const entry={map,key,value,bytes:size,kind};map.set(key,entry);entries.set(entry,true);bytes+=size;return value;
    }
    return {
        get(source,key){const entry=sources.get(source)?.get(key);if(!entry){misses++;return undefined;}return touch(entry);},
        put(source,key,canvas){let colors=sources.get(source);if(!colors){colors=new Map();sources.set(source,colors);}return retain(colors,key,canvas,canvas.width*canvas.height*4,'color');},
        pattern(ctx,image){
            // Never let a pattern immediately evict its own transformed source.
            // The complete source+pattern working unit must fit the budget;
            // larger inputs draw uncached without flushing resident textures.
            if(image.width*image.height*12>maxBytes){skippedOversizePatterns++;return ctx.createPattern(image,'repeat');}
            let images=contexts.get(ctx);if(!images){images=new WeakMap();contexts.set(ctx,images);}const entry=images.get(image);if(entry)return touch(entry);
            misses++;const pattern=ctx.createPattern(image,'repeat');if(!pattern)return pattern;
            // Include the source copy as well as estimated RGBA texture storage,
            // even if its color entry is later evicted. Counting twice is safe.
            return retain(images,image,pattern,image.width*image.height*8,'pattern');
        },
        clear(){sources=new WeakMap();contexts=new WeakMap();entries.clear();bytes=0;},
        stats(){return{bytes,entries:entries.size,maxBytes,maxEntries,hits,misses,evictions,skippedOversizePatterns};}
    };
}

/** Retain the original finite fill domain, but avoid asking
 * Canvas/GPU to process its invisible extent. Bounds use device pixels so the
 * same calculation applies to the stage and translated mask ROI surfaces. */
export function visiblePatternRect(ctx){
 const m=ctx._matrix,w=ctx.canvas?.width,h=ctx.canvas?.height;
 if(!m||!Number.isFinite(w)||!Number.isFinite(h)||!m.every(Number.isFinite))return[-16384,-16384,32768,32768];
 const det=m[0]*m[3]-m[1]*m[2];
 if(!Number.isFinite(det)||Math.abs(det)<1e-24)return[-16384,-16384,32768,32768];
 let left=Infinity,top=Infinity,right=-Infinity,bottom=-Infinity;
 for(const x of[-2,w+2])for(const y of[-2,h+2]){
  const dx=x-m[4],dy=y-m[5],lx=(m[3]*dx-m[2]*dy)/det,ly=(-m[1]*dx+m[0]*dy)/det;
  left=Math.min(left,lx);right=Math.max(right,lx);top=Math.min(top,ly);bottom=Math.max(bottom,ly);
 }
 left=Math.max(-16384,Math.floor(left));right=Math.min(16384,Math.ceil(right));top=Math.max(-16384,Math.floor(top));bottom=Math.min(16384,Math.ceil(bottom));
 return[left,top,Math.max(0,right-left),Math.max(0,bottom-top)];
}
export function fillVisiblePatternRect(ctx){const r=visiblePatternRect(ctx);if(r[2]>0&&r[3]>0)ctx.fillRect(...r);}
