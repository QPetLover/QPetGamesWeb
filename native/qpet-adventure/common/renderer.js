import {inverse,transformPoint} from './scene-graph.js';

const IDENTITY=[0,0,0,0,256,256,256,256];
export function mergeColor(parent=IDENTITY,child=IDENTITY){
    return [0,1,2,3].map(i=>parent[i]+child[i]*parent[i+4]/256)
        .concat([4,5,6,7].map(i=>parent[i]*child[i]/256));
}
// A bounded cache of blank, fixed-size canvas pairs, never rendered-mask data.
// In-use pairs cannot be evicted; an unusually large/deep composition may use
// an uncached transient pair, which is released immediately after composition.
class MaskSurfacePool {
    constructor(prepare,budgetBytes=32*1024*1024){this.prepare=prepare;this.budgetBytes=Math.max(0,budgetBytes);this.entries=[];this.bytes=0;this.transientBytes=0;this.clock=0;this.hits=0;this.allocations=0;this.evictions=0;this.peakBytes=0;this.transientLeases=0;}
    destroy(entry){for(const layer of entry.layers){layer.canvas.width=1;layer.canvas.height=1;}entry.disposed=true;}
    evictFor(bytes){while(this.bytes+bytes>this.budgetBytes){let oldest=null;for(const entry of this.entries)if(!entry.inUse&&(!oldest||entry.stamp<oldest.stamp))oldest=entry;if(!oldest)break;this.entries.splice(this.entries.indexOf(oldest),1);this.bytes-=oldest.bytes;this.destroy(oldest);this.evictions++;}}
    acquire(region){
        const width=Math.ceil(region.width/32)*32,height=Math.ceil(region.height/32)*32,key=width+'x'+height;
        let entry=this.entries.find(entry=>!entry.inUse&&entry.key===key);
        if(entry)this.hits++;
        else{
            const bytes=width*height*8;this.evictFor(bytes);const cached=this.bytes+bytes<=this.budgetBytes;
            const layers=[0,1].map(()=>{const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;const ctx=canvas.getContext('2d');this.prepare(ctx);return{canvas,ctx};});
            entry={key,width,height,bytes,cached,layers};this.allocations++;
            if(cached){this.entries.push(entry);this.bytes+=bytes;}else{this.transientBytes+=bytes;this.transientLeases++;}
            this.peakBytes=Math.max(this.peakBytes,this.bytes+this.transientBytes);
        }
        entry.inUse=true;entry.stamp=++this.clock;
        // Clearing the entire bucket also clears padding left by another ROI.
        // No prior mask, frame or node pixels survive a loan from the pool.
        for(const{ctx}of entry.layers){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,width,height);}
        return entry;
    }
    release(entry){entry.inUse=false;entry.stamp=++this.clock;if(!entry.cached){this.transientBytes-=entry.bytes;this.destroy(entry);}}
    clear(){for(const entry of this.entries)this.destroy(entry);this.entries=[];this.bytes=0;}
    stats(){return{budgetBytes:this.budgetBytes,cachedBytes:this.bytes,transientBytes:this.transientBytes,peakBytes:this.peakBytes,pairs:this.entries.length,inUsePairs:this.entries.filter(entry=>entry.inUse).length,hits:this.hits,allocations:this.allocations,evictions:this.evictions,transientLeases:this.transientLeases};}
}

/** Canvas drawing uses original fixed vectors/bitmaps and the native graph.
 * Composite clips, independent playheads, live text and masks are explicit.
 * No player, code string, SWF parser or ActionScript evaluator is present.
 */
export class AdventureRenderer {
    constructor({canvas,graph,artwork,hooks,collisionPaths={},textFor=()=>undefined,maskPoolBudgetBytes=32*1024*1024}){
        Object.assign(this,{canvas,graph,artwork,hooks,collisionPaths,textFor});
        this.ctx=canvas.getContext('2d');artwork.prepare(this.ctx);
        this.pathCache=new Map();this.rectangleMasks=new Map();this.surfaceOrigins=new WeakMap();this.surfacePool=new MaskSurfacePool(ctx=>this.artwork.prepare(ctx),maskPoolBudgetBytes);this.leaf=null;
        hooks.text=(id,variable)=>this.textFor(this.leaf,id,variable);
    }
    resize(width,height){
        if(this.canvas.width===width&&this.canvas.height===height)return;
        this.canvas.width=width;this.canvas.height=height;this.surfacePool.clear();this.surfaceOrigins=new WeakMap();
        this.ctx.setTransform(1,0,0,1,0,0);
    }
    maskPoolStats(){return this.surfacePool.stats();}
    dispose(){this.surfacePool.clear();this.surfaceOrigins=new WeakMap();}
    regionInsideParent(region,ctx){const parent=this.surfaceOrigins.get(ctx);if(!parent)return region;const x=Math.max(region.x,parent.x),y=Math.max(region.y,parent.y),right=Math.min(region.x+region.width,parent.x+parent.width),bottom=Math.min(region.y+region.height,parent.y+parent.height);return{x,y,width:Math.max(0,right-x),height:Math.max(0,bottom-y)};}
    maskRegion(node){
        const b=this.graph.bounds(node),width=this.canvas.width,height=this.canvas.height;
        if(!b||!b.every(Number.isFinite))return{x:0,y:0,width,height};
        // Keep the original drawing origin and backing size. Only restrict
        // work to an integer source/destination region, including antialiasing.
        const x=Math.max(0,Math.floor(b[0]*width/760)-2),y=Math.max(0,Math.floor(b[1]*height/420)-2);
        const right=Math.min(width,Math.ceil(b[2]*width/760)+2),bottom=Math.min(height,Math.ceil(b[3]*height/420)+2);
        return{x,y,width:Math.max(0,right-x),height:Math.max(0,bottom-y)};
    }
    maskCoversStage(node){
        if(!node.visible||node.children.length||this.graph.instances[node.id])return false;
        const name=this.graph.symbolKinds[node.id];
        if(!this.rectangleMasks.has(name)){
            const paths=this.collisionPaths[name];let rect=null;
            if(paths?.length===1){
                const tokens=paths[0].trim().split(/\s+/),points=[];let command='',valid=true,moves=0;
                for(let i=0;i<tokens.length;i++){
                    if(tokens[i]==='M'||tokens[i]==='L'){command=tokens[i];if(command==='M')moves++;continue;}
                    if(tokens[i]==='Z')continue;
                    if(!command||!Number.isFinite(Number(tokens[i]))||!Number.isFinite(Number(tokens[i+1]))){valid=false;break;}
                    points.push([Number(tokens[i]),Number(tokens[++i])]);
                }
                if(moves===1&&valid&&points.length===5&&points[0][0]===points[4][0]&&points[0][1]===points[4][1]){
                    const xs=[...new Set(points.map(p=>p[0]))],ys=[...new Set(points.map(p=>p[1]))];
                    if(xs.length===2&&ys.length===2&&points.slice(0,4).every((p,i)=>{const q=points[(i+1)%4];return(p[0]===q[0])!==(p[1]===q[1]);})&&new Set(points.slice(0,4).map(p=>p.join(','))).size===4)rect=[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)];
                }
            }
            this.rectangleMasks.set(name,rect);
        }
        const rect=this.rectangleMasks.get(name),m=this.graph.matrix(node);if(!rect||m[1]!==0||m[2]!==0)return false;
        const a=transformPoint(m,rect[0],rect[1]),b=transformPoint(m,rect[2],rect[3]);
        return Math.min(a.x,b.x)<=0&&Math.min(a.y,b.y)<=0&&Math.max(a.x,b.x)>=15200&&Math.max(a.y,b.y)>=8400;
    }
    render(){
        const c=this.ctx;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,this.canvas.width,this.canvas.height);
        c.setTransform(this.canvas.width/15200,0,0,this.canvas.height/8400,0,0);
        this.drawNode(this.graph.root,c,IDENTITY,0);
    }
    drawNode(node,ctx,parentColor,layerDepth){
        if(!node||node.removed||!node.visible)return;
        ctx.save();ctx.transform(...node.matrix);
        const color=mergeColor(parentColor,node.color??IDENTITY);
        if(node.children.length||this.graph.instances[node.id]){
            const children=node.children.filter(n=>!n.removed).sort((a,b)=>a.depth-b.depth);
            this.drawSequence(children,ctx,color,layerDepth);
        }else{
            const name=this.graph.symbolKinds[node.id];
            if(name&&this.artwork.has(name)){
                this.drawLeaf(node,name,ctx,color);
            }
        }
        ctx.restore();
    }
    drawLeaf(node,name,ctx,color){const previous=this.leaf;this.leaf=node;this.artwork.draw(name,ctx,0,node.age,this.artwork.color(color),node.ratio??0);this.leaf=previous;}
    drawSequence(children,ctx,color,layerDepth){
        for(let i=0;i<children.length;i++){
            const child=children[i];
            if(!(child.clipDepth>0)){this.drawNode(child,ctx,color,layerDepth);continue;}
            const end=child.clipDepth-16384,content=[];
            while(i+1<children.length&&children[i+1].depth<=end)content.push(children[++i]);
            if(!content.length)continue;
            if(this.maskCoversStage(child)){this.drawSequence(content,ctx,color,layerDepth);continue;}
            const region=this.regionInsideParent(this.maskRegion(child),ctx);if(!region.width||!region.height)continue;
            const entry=this.surfacePool.acquire(region),[mask,fill]=entry.layers,m=ctx._matrix,parent=this.surfaceOrigins.get(ctx)||{x:0,y:0};
            // m already maps to the parent surface's local device coordinates.
            // Shift only by an integer device-pixel origin: nested surfaces
            // keep the original stage pixel grid and antialiasing phase.
            const shifted=[m[0],m[1],m[2],m[3],m[4]+parent.x-region.x,m[5]+parent.y-region.y];
            for(const layer of [mask,fill]){this.surfaceOrigins.set(layer.ctx,region);layer.ctx.save();layer.ctx.beginPath();layer.ctx.rect(0,0,region.width,region.height);layer.ctx.clip();layer.ctx.setTransform(...shifted);}
            try{
                const previous=this.hooks.opaque;this.hooks.opaque=true;
                try{this.drawNode(child,mask.ctx,color,layerDepth+1);}finally{this.hooks.opaque=previous;}
                this.drawSequence(content,fill.ctx,color,layerDepth+1);
                fill.ctx.save();fill.ctx.setTransform(1,0,0,1,0,0);fill.ctx.globalCompositeOperation='destination-in';fill.ctx.drawImage(mask.canvas,0,0);fill.ctx.restore();
                ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.beginPath();ctx.rect(region.x-parent.x,region.y-parent.y,region.width,region.height);ctx.clip();ctx.drawImage(fill.canvas,region.x-parent.x,region.y-parent.y);ctx.restore();
            }finally{mask.ctx.restore();fill.ctx.restore();this.surfaceOrigins.delete(mask.ctx);this.surfaceOrigins.delete(fill.ctx);this.surfacePool.release(entry);}

        }
    }
    path(value){
        let p=this.pathCache.get(value);
        if(!p){p=new Path2D(value);this.pathCache.set(value,p);}
        return p;
    }
    /** Original even-odd filled path geometry, including invisible colliders. */
    hitSymbol(id,x,y,frame=1,seen=new Set()){
        id=String(id);if(seen.has(id))return false;
        const name=this.graph.symbolKinds[id],paths=this.collisionPaths[name];
        if(paths){const c=this.ctx;c.save();c.setTransform(1,0,0,1,0,0);const hit=paths.some(p=>c.isPointInPath(this.path(p),x,y,'evenodd'));c.restore();return hit;}
        const data=this.graph.instances[id];
        if(data){
            seen=new Set(seen);seen.add(id);
            for(const row of data.frames[(frame-1)%data.frames.length]??[]){
                const inv=inverse(row.matrix);if(!inv)continue;const p=transformPoint(inv,x,y);
                if(this.hitSymbol(row.id,p.x,p.y,1,seen))return true;
            }
            return false;
        }
        // Text and bitmap hit areas in Flash include their rectangular bounds.
        const b=this.graph.localBounds[id];return !!(b&&x>=b[0]*20&&y>=b[1]*20&&x<=b[2]*20&&y<=b[3]*20);
    }
    pointHit(node,x,y,{skipInvisible=false}={}){
        if(!node||node.removed||skipInvisible&&!node.visible)return false;
        const p=this.graph.globalToLocal(node,x,y);
        if(!Number.isFinite(p.x))return false;
        if(node.children.length||this.graph.instances[node.id]){
            // AVM1's shape test differs from mouse picking: ordinary invisible
            // colliders still count, but clip-depth mask geometry must be
            // visible. Preserve the fixed source's ascending clip-depth test.
            let clipDepth=0;
            for(const child of [...node.children].sort((a,b)=>a.depth-b.depth)){
                if(child.clipDepth>0)clipDepth=this.pointHit(child,x,y,{skipInvisible:true})?0:child.clipDepth;
                else if(child.depth+16384>=clipDepth&&this.pointHit(child,x,y,{skipInvisible}))return true;
            }
            return false;
        }
        return this.hitSymbol(node.id,p.x*20,p.y*20,node.frame);
    }
    buttonAt(x,y){
        const visit=node=>{
            if(!node||node.removed||!node.visible)return null;
            if(this.graph.symbolKinds[node.id]?.startsWith('button')){
                if(!node.enabled)return null;
                const p=this.graph.globalToLocal(node,x,y);
                return this.hitSymbol(node.id,p.x*20,p.y*20,4)?node:null;
            }
            // Fixed AVM1 candidate selection walks back through the display
            // list until it reaches the nearest mask covering that candidate.
            // A successful mask returns immediately; intersecting every mask
            // would change nested-mask behavior in these original chapters.
            let result=null,hitDepth=0;
            for(const child of [...node.children].sort((a,b)=>b.depth-a.depth)){
                if(child.clipDepth>0){
                    if(result&&child.clipDepth>=hitDepth){
                        if(this.pointHit(child,x,y,{skipInvisible:true}))return result;
                        result=null;
                    }
                }else if(!result){
                    result=visit(child);
                    if(result)hitDepth=child.depth+16384;
                }
            }
            return result;
        };
        return visit(this.graph.root);
    }
}
