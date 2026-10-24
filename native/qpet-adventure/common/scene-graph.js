/** Native display objects for the archived adventure's static artwork.
 * This module never loads SWF, ActionScript, bytecode or executable strings.
 * Chapter-specific JavaScript supplies every gameplay/frame callback.
 * Coordinates in matrices and local bounds are twips (20 per stage pixel).
 */
export const IDENTITY = Object.freeze([1, 0, 0, 1, 0, 0]);
export const STATIC_DEPTH_OFFSET = 16384;
export const multiply = (a, b) => [
    a[0]*b[0]+a[2]*b[1], a[1]*b[0]+a[3]*b[1],
    a[0]*b[2]+a[2]*b[3], a[1]*b[2]+a[3]*b[3],
    a[0]*b[4]+a[2]*b[5]+a[4], a[1]*b[4]+a[3]*b[5]+a[5],
];
export function inverse(m) {
    const d=m[0]*m[3]-m[1]*m[2];
    if (!d || !Number.isFinite(d)) return null;
    return [m[3]/d,-m[1]/d,-m[2]/d,m[0]/d,
        (m[2]*m[5]-m[3]*m[4])/d,(m[1]*m[4]-m[0]*m[5])/d];
}
export const transformPoint = (m, x, y) => ({x:m[0]*x+m[2]*y+m[4],y:m[1]*x+m[3]*y+m[5]});
export function transformBounds(b, m) {
    if (!b) return null;
    const points=[];
    for (const x of [b[0],b[2]]) for (const y of [b[1],b[3]]) points.push(transformPoint(m,x,y));
    return [Math.min(...points.map(p=>p.x)),Math.min(...points.map(p=>p.y)),
        Math.max(...points.map(p=>p.x)),Math.max(...points.map(p=>p.y))];
}
export function unionBounds(values) {
    const b=values.filter(Boolean);
    return b.length ? [Math.min(...b.map(v=>v[0])),Math.min(...b.map(v=>v[1])),
        Math.max(...b.map(v=>v[2])),Math.max(...b.map(v=>v[3]))] : null;
}
const same = (a,b) => a===b || !!a&&!!b&&a.length===b.length&&a.every((v,i)=>v===b[i]);
const numeric = value => value===undefined ? 0 : Number(value);
const twip = value => Number.isFinite(numeric(value)) ? Math.trunc(numeric(value)*20) : null;

export class SceneNode {
    constructor(graph,id,parent,placement={}) {
        this.graph=graph;this.id=String(id);this.uid=++graph.uid;this.parent=parent;
        this.frame=1;this.age=0;this.generation=0;
        this.playing=!!graph.instances[this.id]&&!graph.symbolKinds[this.id]?.startsWith('button');
        this.visible=true;this.removed=false;this.children=[];this.vars={};
        this.matrix=[...(placement.matrix||IDENTITY)];this.color=placement.color?[...placement.color]:null;
        this.name=placement.name||'';this.born=placement.born||1;
        this.placeDepth=placement.depth??0;this.depth=placement.dynamic
            ? (placement.depth??0) : this.placeDepth-STATIC_DEPTH_OFFSET;
        this.dynamic=!!placement.dynamic;this.clipDepth=placement.clipDepth??null;
        this.ratio=placement.ratio??0;this.placement=placement;this.enabled=true;
    }
    get x(){return this.matrix[4]/20;} set x(value){const n=twip(value);if(n!==null)this.matrix[4]=n;}
    get y(){return this.matrix[5]/20;} set y(value){const n=twip(value);if(n!==null)this.matrix[5]=n;}
    get rotation(){return Math.atan2(this.matrix[1],this.matrix[0])*180/Math.PI;}
    set rotation(value){value=Number(value);if(!Number.isFinite(value))return;const angle=(value-this.rotation)*Math.PI/180,c=Math.cos(angle),s=Math.sin(angle),m=this.matrix;[m[0],m[1],m[2],m[3]]=[c*m[0]-s*m[1],s*m[0]+c*m[1],c*m[2]-s*m[3],s*m[2]+c*m[3]];}
    get scaleX(){return Math.hypot(this.matrix[0],this.matrix[1])*100*(this._scaleSignX??1);}
    set scaleX(value){value=Number(value);if(!Number.isFinite(value))return;const m=this.matrix,old=Math.hypot(m[0],m[1]),signed=old*(this._scaleSignX??1),ratio=signed?value/100/signed:0;if(old){m[0]*=ratio;m[1]*=ratio;}else{const a=this.rotation*Math.PI/180;m[0]=Math.cos(a)*value/100;m[1]=Math.sin(a)*value/100;}this._scaleSignX=value<0?-1:1;}
    get scaleY(){return Math.hypot(this.matrix[2],this.matrix[3])*100*(this._scaleSignY??(this.matrix[0]*this.matrix[3]-this.matrix[1]*this.matrix[2]<0?-1:1));}
    set scaleY(value){value=Number(value);if(!Number.isFinite(value))return;const m=this.matrix,old=Math.hypot(m[2],m[3]),signed=this.scaleY/100,ratio=signed?value/100/signed:0;if(old){m[2]*=ratio;m[3]*=ratio;}else{const a=this.rotation*Math.PI/180;m[2]=-Math.sin(a)*value/100;m[3]=Math.cos(a)*value/100;}this._scaleSignY=value<0?-1:1;}
    get alpha(){return (this.color?.[7]??256)*100/256;}
    set alpha(value){value=Number(value);if(!Number.isFinite(value))return;this.color??=[0,0,0,0,256,256,256,256];this.color[7]=value*256/100;}
    get width(){const b=transformBounds(this.graph.localBoundsOf(this),this.matrix);return b?(b[2]-b[0])/20:0;}
    set width(value){value=Number(value);const old=this.width;if(Number.isFinite(value)&&old)this.scaleX*=value/old;}
    get height(){const b=transformBounds(this.graph.localBoundsOf(this),this.matrix);return b?(b[3]-b[1])/20:0;}
    set height(value){value=Number(value);const old=this.height;if(Number.isFinite(value)&&old)this.scaleY*=value/old;}
    get totalFrames(){return this.graph.frameCount(this);}
    get renderDepth(){return this.depth;}set renderDepth(value){this.depth=value;}
    get _x(){return this.x;}set _x(v){this.x=v;}
    get _y(){return this.y;}set _y(v){this.y=v;}
    get _xscale(){return this.scaleX;}set _xscale(v){this.scaleX=v;}
    get _yscale(){return this.scaleY;}set _yscale(v){this.scaleY=v;}
    get _rotation(){return this.rotation;}set _rotation(v){this.rotation=v;}
    get _alpha(){return this.alpha;}set _alpha(v){this.alpha=v;}
    get _visible(){return this.visible;}set _visible(v){this.visible=!!v;}
    get _width(){return this.width;}set _width(v){this.width=v;}
    get _height(){return this.height;}set _height(v){this.height=v;}
    get _name(){return this.name;}set _name(v){this.name=String(v);}
    get _parent(){return this.parent;}
    get _root(){return this.graph.root;}
    get _currentframe(){return this.frame;}
    get _totalframes(){return this.totalFrames;}
    get _framesloaded(){return this.totalFrames;}
    get _xmouse(){return this.graph.globalToLocal(this,this.graph.mouse?.x??0,this.graph.mouse?.y??0).x;}
    get _ymouse(){return this.graph.globalToLocal(this,this.graph.mouse?.x??0,this.graph.mouse?.y??0).y;}
    get _target(){return this.parent?this.parent._target+'/'+this.name:'';}
}

export class SceneGraph {
    constructor({instances,symbolKinds={},localBounds={},linkages={},timelineOrder={},onFrame=()=>{},
        onCreate=()=>{},onRemove=()=>{},onEvent=()=>{},caseSensitive=false}={}) {
        if(!instances)throw new Error('Adventure requires its fixed static scene data');
        Object.assign(this,{instances,symbolKinds,localBounds,linkages,timelineOrder,onFrame,onCreate,onRemove,onEvent,caseSensitive});
        this.uid=0;this.root=null;this.actions=[];this.flushing=false;this.ready=false;
        this.nameFields=new Map();
        for(const[id,timeline]of Object.entries(instances)) {
            const names=new Set();for(const frame of timeline.frames)for(const row of frame)if(row.name)names.add(row.name);
            this.nameFields.set(id,[...names]);
        }
    }
    emit(type,node,extra={}){this.onEvent({type,node,owner:node?.uid,...extra});}
    frameCount(node){return this.instances[typeof node==='object'?node.id:String(node)]?.frames.length||1;}
    rows(node){return this.instances[node.id]?.frames[node.frame-1]||[];}
    createRoot(id='main') {
        if(this.root)this.remove(this.root);
        this.ready=false;this.root=this.make(id,null,{name:'root',dynamic:true,depth:0});
        this.ready=true;this.flushActions();return this.root;
    }
    make(id,parent=null,placement={}) {
        const node=new SceneNode(this,id,parent,placement);
        this.onCreate(node,this);
        this.sync(node,true,{queueFrame:true});
        this.emit('frame-enter',node,{frame:1});
        return node;
    }
    /** Aliases are a finite chapter build manifest, never arbitrary code lookup.
     * Native graph fields are deliberately not overwritten by source variables. */
    defineFields(node,fields) {
        for(const field of fields) {
            if(field in node)continue;
            const key=this.caseSensitive?field:field.toLowerCase();
            Object.defineProperty(node,field,{configurable:true,enumerable:false,
                get:()=>Object.hasOwn(node.vars,key)?node.vars[key]:this.named(node,field),
                set:value=>{node.vars[key]=value;}});
        }
    }
    sync(node,initial=false,{queueFrame=false,mode='normal'}={}) {
        if(!node||node.removed)return;
        const rows=this.rows(node),old=[...node.children],children=[],resolved=new Map();
        const frame=node.frame,plan=this.timelineOrder[node.id]?.[frame];
        const queue=index=>this.actions.push({node,frame,generation:node.generation,actionIndex:index});
        const retained=row=>old.find(n=>!n.dynamic&&!n.removed&&n.placeDepth===row.depth&&n.id===String(row.id)&&n.born===(row.born||1));
        const create=row=>{if(!resolved.has(row))resolved.set(row,retained(row)||this.make(row.id,node,row));};
        if(queueFrame&&plan){
            const pending=rows.filter(row=>!retained(row));
            const sourcePosition=row=>(this.timelineOrder[node.id]?.[row.born||1]||[]).findIndex(e=>e[0]==='place'&&e[1]===row.depth&&String(e[2])===String(row.id));
            if(mode==='goto'){
                for(const row of pending.filter(r=>(r.born||1)<frame).sort((a,b)=>(a.born||1)-(b.born||1)||sourcePosition(a)-sourcePosition(b)))create(row);
                for(const entry of plan)if(entry[0]==='action')queue(entry[1]);
                for(const row of pending.filter(r=>(r.born||1)>=frame).sort((a,b)=>sourcePosition(a)-sourcePosition(b)))create(row);
            }else{
                for(const entry of plan){
                    if(entry[0]==='action')queue(entry[1]);
                    else if(entry[0]==='place')for(const row of pending)if(row.depth===entry[1]&&String(row.id)===String(entry[2]))create(row);
                }
            }
            for(const row of pending)create(row);
            if(!plan.some(e=>e[0]==='action'))queue(undefined);
        }
        for(const row of rows) {
            let child=resolved.get(row)||retained(row);
            if(!child) {
                child=this.make(row.id,node,row);
            }else {
                const previous=child.placement;
                if(!same(previous.matrix,row.matrix)||row.matrixFrame!==undefined&&previous.matrixFrame!==row.matrixFrame) {
                    child.matrix=[...(row.matrix||IDENTITY)];delete child._scaleSignX;delete child._scaleSignY;
                }
                if(!same(previous.color,row.color)||row.colorFrame!==undefined&&previous.colorFrame!==row.colorFrame)child.color=row.color?[...row.color]:null;
                if(row.name!==previous.name)child.name=row.name||'';
                child.clipDepth=row.clipDepth??null;child.ratio=row.ratio??0;child.placement=row;
            }
            children.push(child);
        }
        for(const child of old) {
            if(child.dynamic&&!child.removed)children.push(child);
            else if(!children.includes(child))this.remove(child);
        }
        node.children=children;
        this.defineFields(node,this.nameFields.get(node.id)||[]);
        if(queueFrame&&!plan)queue(undefined);
    }
    flushActions() {
        if(this.flushing)return;
        this.flushing=true;let count=0;
        try {
            while(this.actions.length) {
                if(++count>100000)throw new Error('Adventure frame transition did not settle');
                const {node,frame,generation,callback,actionIndex}=this.actions.shift();
                if(callback){if(!node.removed)callback(node,this);continue;}
                if(node.removed)continue;
                this.onFrame(node,this,frame,actionIndex);this.emit('frame',node,{frame,actionIndex});
            }
        }finally{this.flushing=false;}
    }
    named(node,name) {
        if(!node||node.removed)return undefined;
        const key=this.caseSensitive?String(name):String(name).toLowerCase();
        return node.children.filter(child=>!child.removed&&(this.caseSensitive?child.name:child.name.toLowerCase())===key)
            .sort((a,b)=>a.depth-b.depth)[0];
    }
    path(node,...parts){for(const part of parts){if(part==='_parent'||part==='parent')node=node?.parent;else if(part==='_root')node=this.root;else node=this.named(node,part);}return node;}
    find(path,from=this.root){if(typeof path!=='string')return undefined;const parts=path.split(/[./:]+/).filter(Boolean);if(path.startsWith('/'))from=this.root;return this.path(from,...parts);}
    goto(node,frame,{play=false}={}) {
        if(!node||node.removed)return false;
        if(typeof frame==='string') {
            const labels=this.instances[node.id]?.labels||{};
            const key=Object.keys(labels).find(key=>this.caseSensitive?key===frame:key.toLowerCase()===frame.toLowerCase());
            frame=key===undefined?Number(frame):labels[key];
        }
        frame=Math.trunc(Number(frame));if(!Number.isFinite(frame)||frame<1)return false;
        frame=Math.min(frame,this.frameCount(node));
        node.playing=!!play;
        if(node.frame===frame){if(!play)this.emit('stream-stop',node,{reason:'stop'});return true;}
        this.emit('stream-stop',node,{reason:'goto'});
        node.frame=frame;node.age=0;node.generation++;this.sync(node,false,{queueFrame:true,mode:'goto'});this.emit('frame-enter',node,{frame});
        if(this.ready)this.flushActions();return true;
    }
    play(node){if(!node||node.removed)return;node.playing=true;}
    stop(node){if(!node||node.removed)return;node.playing=false;this.emit('stream-stop',node,{reason:'stop'});}
    next(node){return this.goto(node,Math.min(node.frame+1,this.frameCount(node)));}
    previous(node){return this.goto(node,Math.max(1,node.frame-1));}
    attach(parent,idOrLinkage,name,depth,matrix=IDENTITY) {
        if(!parent||parent.removed)return undefined;
        const id=this.linkages[idOrLinkage]??idOrLinkage;
        if(!this.symbolKinds[id]&&!this.instances[id])return undefined;
        const occupied=parent.children.find(node=>!node.removed&&node.depth===depth);
        if(occupied)this.remove(occupied);
        const node=this.make(id,parent,{dynamic:true,name,depth,matrix,born:1});
        parent.children.push(node);this.defineFields(parent,[name]);
        if(this.ready)this.flushActions();return node;
    }
    remove(node) {
        if(!node||node.removed)return;
        node.removed=true;
        for(const child of [...node.children])this.remove(child);
        this.emit('stream-stop',node,{reason:'remove'});this.onRemove(node,this);
        if(node.parent)node.parent.children=node.parent.children.filter(child=>child!==node);
    }
    swapDepths(node,target) {
        if(!node||node.removed||!node.parent)return;
        const depth=typeof target==='object'?target.depth:Number(target);
        if(!Number.isFinite(depth))return;
        const other=typeof target==='object'?target:node.parent.children.find(child=>!child.removed&&child.depth===depth);
        const old=node.depth;node.depth=depth;if(other&&other!==node)other.depth=old;
    }
    walk(node=this.root) {
        const list=[];const visit=node=>{if(!node||node.removed)return;list.push(node);for(const child of [...node.children].sort((a,b)=>a.depth-b.depth))visit(child);};
        visit(node);return list;
    }
    queueCallback(node,callback){if(node&&!node.removed&&typeof callback==='function')this.actions.push({node,callback});}
    advanceNode(node,{deferActions=false}={}){
        if(!node||node.removed)return;
        node.age++;
        if(!node.playing||!this.instances[node.id]||this.frameCount(node)===1)return;
        const next=node.frame%this.frameCount(node)+1;
        if(next===1)this.emit('stream-stop',node,{reason:'loop'});
        node.frame=next;node.generation++;this.sync(node,false,{queueFrame:true,mode:next===1?'goto':'normal'});this.emit('frame-enter',node,{frame:next});
        if(!deferActions)this.flushActions();
    }
    /** Chapters explicitly schedule onEnterFrame/listener work around this pass.
     * New children receive their first frame actions but never a second advance
     * in the same snapshot. Actual baseline phase is verified per chapter. */
    advance() {
        const list=this.walk();
        for(const node of list)this.advanceNode(node);
    }
    matrix(node){return node?.parent?multiply(this.matrix(node.parent),node.matrix):[...(node?.matrix||IDENTITY)];}
    localToGlobal(node,x,y){const point=transformPoint(this.matrix(node),x*20,y*20);return{x:point.x/20,y:point.y/20};}
    globalToLocal(node,x,y){const matrix=inverse(this.matrix(node));if(!matrix)return{x:NaN,y:NaN};const point=transformPoint(matrix,x*20,y*20);return{x:point.x/20,y:point.y/20};}
    localBoundsOf(node) {
        if(!node||node.removed)return null;
        if(this.instances[node.id])return unionBounds(node.children.filter(child=>!child.removed).map(child=>transformBounds(this.localBoundsOf(child),child.matrix)));
        return this.localBounds[node.id]?.map(value=>value*20)||null;
    }
    bounds(node) {const b=transformBounds(this.localBoundsOf(node),this.matrix(node));return b?.map(value=>value/20)||null;}
    overlaps(a,b) {a=this.bounds(a);b=this.bounds(b);return !!(a&&b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1]);}
}
