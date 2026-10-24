/** Original event PCM and explicit SOUNDINFO events only. No SWF decoding.
 * Timeline MPEG blocks are a continuous decoder input, never per-frame sounds.
 * The fixed original-reference decoder ignores stream block seek/latency.
 */
import {EventPcmBank} from './event-pcm.js';
export function streamSlice(stream,index,totalFrames){
    const start=stream.blocks[index];if(!start)return null;
    let buffered=0,end=totalFrames+1,last=index-1;
    for(let frame=start.frame,i=index;frame<=totalFrames;frame++){
        const block=stream.blocks[i]?.frame===frame?stream.blocks[i++]:null;
        if(block){buffered+=block.samples;last=i-1;}
        buffered-=stream.head.samples;
        if(!block&&buffered<=-stream.head.samples){end=frame;break;}
    }
    const begin=stream.blocks.slice(0,index).reduce((n,b)=>n+b.bytes,0);
    const bytes=stream.blocks.slice(index,last+1).reduce((n,b)=>n+b.bytes,0);
    return{startFrame:start.frame,endFrame:end,byteOffset:begin,bytes,lastBlock:last};
}
export function envelopeAt(points,pos44,channel){
    if(!points?.length)return 1;
    const key=channel==='right'?'rightLevel':'leftLevel';
    if(pos44<=points[0].pos44)return points[0][key]/32768;
    for(let i=1;i<points.length;i++)if(pos44<=points[i].pos44){const a=points[i-1],b=points[i],t=(pos44-a.pos44)/(b.pos44-a.pos44||1);return(a[key]+(b[key]-a[key])*t)/32768;}
    return points.at(-1)[key]/32768;
}
const integer=v=>Math.max(-2147483648,Math.min(2147483647,Math.trunc(Number(v)||0)));
const bytesOf=value=>{const raw=atob(value.slice(value.indexOf(',')+1)),out=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)out[i]=raw.charCodeAt(i);return out;};

export class AdventureAudio{
    constructor({assets,metadata,timelineEvents,streams,linkage={},pcmData=null,loadPCMBytes,frameCount,onDiagnostic=()=>{},contextFactory,automaticTimeline=true}={}){
        Object.assign(this,{assets,metadata,streams,linkage,pcmData,loadPCMBytes,frameCount,onDiagnostic});
        this.timelineEvents=timelineEvents||[];
        this.events=new Map();for(const event of timelineEvents||[]){const key=event.timeline+':'+event.frame;if(!this.events.has(key))this.events.set(key,[]);this.events.get(key).push(event);}
        this.contextFactory=contextFactory||(()=>new AudioContext({sampleRate:44100}));this.context=null;this.decoded=new Map();this.raw=new Map();this.active=new Set();this.streamOwners=new Map();this.ownerVolume=new Map();this.ownerNodes=new Map();this.retiredOwners=new Set();this.volume=100;this.pan=0;this.enabled=false;this.time=0;this.uid=0;this.disposed=false;this.automaticTimeline=automaticTimeline;
    }
    setTime(ms){this.time=ms;for(const r of [...this.active])if(!r.stream&&!r.source){const meta=this.metadata[r.id],o=r.options||{},duration=r.duration??(((o.outPoint??meta.samples*44100/meta.rate)-(o.inPoint||0))/44100*Math.max(0,Math.trunc(o.loops??1)));if(ms-r.startMs>=duration*1000)this.stopRecord(r);}}
    prepare(){if(!this.context){this.context=this.contextFactory();this.master=this.context.createGain();this.master.gain.value=0;this.master.connect(this.context.destination);if(this.pcmData)this.pcm=new EventPcmBank({data:this.pcmData,metadata:this.metadata,context:this.context,loadBytes:this.loadPCMBytes,onDiagnostic:this.onDiagnostic});}return this.context;}
    async enable(value=true){this.enabled=!!value;const c=this.prepare();if(value)await c.resume();this.master.gain.setValueAtTime(value?this.volume/100:0,c.currentTime);if(value)for(const record of this.active)if(!record.source)this.schedule(record);}
    setVolume(value){this.volume=integer(value);if(this.context)this.master.gain.setValueAtTime(this.enabled?this.volume/100:0,this.context.currentTime);}
    media(id){if(!this.raw.has(id))this.raw.set(id,bytesOf(this.assets[id]));return this.raw.get(id);}
    decode(id,slice){const key=id+(slice?':'+slice.byteOffset+':'+slice.bytes:'');if(!this.decoded.has(key)){const c=this.prepare(),bytes=this.media(id),payload=slice?bytes.slice(slice.byteOffset,slice.byteOffset+slice.bytes):bytes.slice();this.decoded.set(key,c.decodeAudioData(payload.buffer).catch(error=>{this.onDiagnostic({type:'audio-decode-failed',id,message:String(error)});this.decoded.delete(key);return null;}));}return this.decoded.get(key);}
    async warmup(){this.prepare();if(this.pcm)return this.pcm.warmup(this.timelineEvents);const ids=Object.keys(this.assets).filter(id=>!id.startsWith('stream'));for(let i=0;i<ids.length;i+=4)await Promise.all(ids.slice(i,i+4).map(id=>this.decode(id)));}
    stopRecord(record){if(!record||record.stopped)return;record.stopped=true;for(const source of record.sources||[record.source])try{source?.stop();}catch{}for(const node of record.nodes||[])try{node.disconnect();}catch{}this.active.delete(record);if(this.streamOwners.get(record.owner)===record)this.streamOwners.delete(record.owner);this.pruneOwners();}
    pruneOwners(){
        if(!this.retiredOwners.size)return;
        // A removed clip's event sounds may continue. Keep their complete
        // volume-inheritance chain until the last dependent sound has ended.
        const needed=new Set();
        for(const record of this.active)for(let node=this.ownerNodes.get(record.owner);node;node=node.parent)needed.add(node.uid);
        for(const owner of this.retiredOwners){
            const node=this.ownerNodes.get(owner);
            if(node?.removed&&needed.has(owner))continue;
            if(!node||node.removed){this.ownerNodes.delete(owner);this.ownerVolume.delete(owner);}
            this.retiredOwners.delete(owner);
        }
    }
    stopOwner(owner){this.stopRecord(this.streamOwners.get(owner));}
    stopAll(){for(const record of [...this.active])this.stopRecord(record);}
    handle(event){
        if(this.disposed)return;
        if(event.now!==undefined)this.time=event.now;
        if(event.type==='frame-enter'){
            const node=event.node,id=node.id,frame=event.frame;this.ownerNodes.set(node.uid,node);if(!this.automaticTimeline)return;
            for(const sound of this.events.get(id+':'+frame)||[])this.eventSound(sound.id,sound.options,node.uid);
            const stream=this.streams[id],active=this.streamOwners.get(node.uid);
            if(active&&frame>=active.slice.endFrame)this.stopRecord(active);
            if(stream&&node.playing&&!this.streamOwners.has(node.uid)){
                const index=stream.blocks.findIndex(b=>b.frame===frame);
                if(index>=0){const slice=streamSlice(stream,index,this.frameCount(id));if(slice?.bytes){const record=this.record(stream.id,node.uid,{stream:true,slice,node});if(record)this.streamOwners.set(node.uid,record);}}
            }
        }else if(event.type==='stream-frame'){
            const stream=this.streams[event.timeline];if(stream&&!this.streamOwners.has(event.owner)){const slice=streamSlice(stream,event.blockIndex,this.frameCount(event.timeline));if(slice?.bytes){const record=this.record(stream.id,event.owner,{stream:true,slice});if(record)this.streamOwners.set(event.owner,record);}}
        }else if(event.type==='stream-stop'){
            this.stopOwner(event.owner);
            if(event.reason==='remove'){this.retiredOwners.add(event.owner);this.pruneOwners();}
        }
        else if(event.type==='stop-sounds')this.stopAll();
        else if(event.type==='volume')this.setVolume(event.value*100);
        else if(event.type==='sound-volume'){
            if(event.owner==null)this.setVolume(event.volume);else this.ownerVolume.set(event.owner,integer(event.volume));
            this.refreshGains();
        }else if(event.type==='sound-pan'){if(event.owner==null)this.pan=integer(event.pan);this.refreshGains();}
        else if(event.type==='sound-stop'){
            const id=event.id??this.linkage[event.linkage],byId=event.scope==='sound-id'||event.id!==undefined||event.linkage!==undefined;for(const record of [...this.active])if((event.owner==null||record.owner===event.owner)&&(!byId||record.id===String(id)))this.stopRecord(record);
        }else if(event.type==='sound'){
            // Sound.start's f64 -> u16 cast saturates and then clamps to >=1.
            // Timeline SOUNDINFO's raw u16 (including zero) is separate.
            const id=String(event.id??this.linkage[event.linkage]),offset=Number(event.offset),loops=Number(event.loops??1);
            this.eventSound(id,event.options??{loops:Math.max(1,Math.min(65535,Math.trunc(loops)||0)),inPoint:offset>0?Math.min(4294967295,Math.trunc(offset*44100)):0},event.owner??null);
        }
    }
    eventSound(id,options={},owner=null){
        id=String(id);if(!this.assets[id]){this.onDiagnostic({type:'unknown-sound',id});return;}
        if(options.stop){for(const r of [...this.active])if(r.id===id)this.stopRecord(r);return;}
        if(options.noMultiple&&[...this.active].some(r=>r.id===id&&!r.stopped))return;
        this.record(id,owner,{options});
    }
    record(id,owner,extra){if(this.active.size>=32)return null;const record={uid:++this.uid,id,owner,startMs:this.time,stopped:false,...extra};if(!record.stream&&this.pcm){try{record.duration=this.pcm.get(id,record.options)?.duration;}catch(error){this.onDiagnostic({type:'event-pcm-failed',id,message:String(error)});return null;}}this.active.add(record);if(this.enabled)this.schedule(record);return record;}
    schedule(record){
        if(record.pending||record.source||record.stopped||!this.enabled)return;
        if(record.stream||!this.pcmData){void this.scheduleMpeg(record);return;}
        this.prepare();
        try{
            const prepared=this.pcm.get(record.id,record.options);
            if(prepared){this.schedulePCM(record,prepared);return;}
            record.pending=true;
            void this.pcm.prepare(record.id,record.options).then(plan=>{
                record.pending=false;if(record.stopped||!this.enabled||this.disposed)return;
                this.schedulePCM(record,plan);
            }).catch(error=>{record.pending=false;this.onDiagnostic({type:'event-pcm-failed',id:record.id,message:String(error)});this.stopRecord(record);});
        }catch(error){this.onDiagnostic({type:'event-pcm-failed',id:record.id,message:String(error)});this.stopRecord(record);}
    }
    schedulePCM(record,plan){
        const c=this.context,options=record.options||{},elapsedFrames=Math.max(0,Math.floor((this.time-record.startMs)*44100/1000));
        record.duration=plan.duration;
        if(elapsedFrames>=plan.outputFrames){this.stopRecord(record);return;}
        const elapsed=elapsedFrames/44100,at=c.currentTime,channels=plan.channels;
        const split=c.createChannelSplitter(channels),left=c.createGain(),right=c.createGain(),merge=c.createChannelMerger(2);
        split.connect(left,0);split.connect(right,channels===1?0:1);left.connect(merge,0,0);right.connect(merge,0,1);merge.connect(this.master);
        const sources=[],starts=[],tailStart=plan.outputFrames-plan.tailFrames;
        const add=(buffer,when,offsetFrames,durationFrames,loop)=>{
            if(durationFrames<=0)return;
            const source=c.createBufferSource();source.buffer=buffer;source.loop=loop;
            if(loop){source.loopStart=0;source.loopEnd=buffer.duration;}
            source.connect(split);sources.push(source);starts.push([source,when,offsetFrames/44100,durationFrames/44100]);
        };
        if(plan.finite)add(plan.buffer,at,elapsedFrames,plan.outputFrames-elapsedFrames,false);
        else{
            const mainFrames=Math.max(0,(plan.tail?tailStart:plan.outputFrames)-elapsedFrames);
            add(plan.buffer,at,elapsedFrames%plan.periodFrames,mainFrames,true);
            if(plan.tail){const tailOffset=Math.max(0,elapsedFrames-tailStart),tailWhen=at+Math.max(0,tailStart-elapsedFrames)/44100;
                add(plan.tail,tailWhen,tailOffset,plan.tailFrames-tailOffset,false);}
        }
        if(!sources.length){this.stopRecord(record);return;}
        record.source=sources[0];record.sources=sources;record.nodes=[...sources,split,left,right,merge];
        record.gains=[left.gain,right.gain];record.envelope=options.envelope;record.elapsed=elapsed;
        record.mediaStart=0;record.seek=0;record.loopLength=plan.periodFrames/44100;
        record.loops=options.loops??1;record.audioStart=at;record.canonicalPCM=true;
        record.outputFrames=plan.outputFrames;record.periodFrames=plan.periodFrames;record.tailFrames=plan.tailFrames;
        this.applyGain(record);
        // The first source of a decoder-EOF event ends just before its tiny
        // zero-right tail. Both are one logical sound and occupy one slot.
        sources.at(-1).onended=()=>this.stopRecord(record);
        for(const [source,when,offset,duration]of starts)source.start(when,offset,duration);
    }
    async scheduleMpeg(record){
        if(record.pending||record.source||record.stopped||!this.enabled)return;record.pending=true;
        const buffer=await this.decode(record.id,record.slice);record.pending=false;
        if(!buffer||record.stopped||!this.enabled||this.disposed)return;
        const c=this.context,meta=this.metadata[record.id],options=record.options||{},elapsed=Math.max(0,(this.time-record.startMs)/1000);
        const seek=record.stream?0:Math.max(0,meta.seekSamples||0)/meta.rate;
        const start=seek+(options.inPoint||0)/44100;
        const end=record.stream?buffer.duration:Math.min(buffer.duration,seek+(options.outPoint??meta.samples*44100/meta.rate)/44100);
        const length=end-start,loops=record.stream?1:Math.max(0,Math.trunc(options.loops??1));
        if(length<=0||elapsed>=length*loops){this.stopRecord(record);return;}
        const source=c.createBufferSource();source.buffer=buffer;source.loop=loops>1;source.loopStart=start;source.loopEnd=end;
        const channels=Math.max(1,Math.min(2,buffer.numberOfChannels)),split=c.createChannelSplitter(channels),left=c.createGain(),right=c.createGain(),merge=c.createChannelMerger(2);
        source.connect(split);split.connect(left,0);split.connect(right,channels===1?0:1);left.connect(merge,0,0);right.connect(merge,0,1);merge.connect(this.master);
        record.source=source;record.nodes=[source,split,left,right,merge];record.gains=[left.gain,right.gain];record.envelope=options.envelope;record.elapsed=elapsed;record.mediaStart=start;record.seek=seek;record.loopLength=length;record.loops=loops;record.audioStart=c.currentTime;
        this.applyGain(record);
        source.onended=()=>this.stopRecord(record);
        source.start(c.currentTime,start+elapsed%length,length*loops-elapsed);
    }
    applyGain(record){
        if(!record.gains)return;const c=this.context,elapsed=record.elapsed+(c.currentTime-record.audioStart);let ownerGain=1,node=this.ownerNodes.get(record.owner);if(node){for(;node;node=node.parent)ownerGain*=(this.ownerVolume.get(node.uid)??100)/100;}else ownerGain=(this.ownerVolume.get(record.owner)??100)/100;
        // This game's original pan calls are retained as a finite channel matrix.
        const pan=Math.max(-100,Math.min(100,this.pan)),balance=[pan>0?1-pan/100:1,pan<0?1+pan/100:1];
        for(const [i,gain]of record.gains.entries()){
            const level=point=>(i?point.rightLevel:point.leftLevel)/32768*ownerGain*balance[i];
            gain.cancelScheduledValues(c.currentTime);gain.setValueAtTime(envelopeAt(record.envelope,elapsed*44100,i?'right':'left')*ownerGain*balance[i],c.currentTime);
            const points=record.envelope||[];
            for(let n=0;n<points.length;n++){
                const first=points[n];let last=first;while(n+1<points.length&&points[n+1].pos44===first.pos44)last=points[++n];
                const pointTime=Math.floor(first.pos44*c.sampleRate/44100)/c.sampleRate;
                if(pointTime>elapsed)gain.linearRampToValueAtTime(level(first),c.currentTime+pointTime-elapsed);
                // Fixed reference emits the first point at this sample, then
                // consumes coincident points before the following sample.
                if(last!==first&&pointTime+1/c.sampleRate>elapsed)gain.setValueAtTime(level(last),c.currentTime+pointTime+1/c.sampleRate-elapsed);
            }
        }
    }
    refreshGains(){for(const record of this.active)this.applyGain(record);}
    /** The fixed original uses the first playing stream as the frame clock.
     * Correct the host's frame accumulator, never skip gameplay callbacks or
     * seek a movie clip. Large discontinuities stop only this stream so its
     * next normal authored block can start it again. This native backend uses
     * actual AudioContext playback time rather than a decoder's read-ahead.
     */
    streamSync(accumulatorMs,{fps=25,toleranceMs=2048/44100*1000,maxSkewMs=1000}={}){
        const none={adjustMs:0,action:'none'};
        if(!this.context||this.context.state!=='running')return none;
        for(const record of this.active){
            if(!record.stream||!record.source||record.stopped||!record.node||record.node.removed||!record.node.playing)continue;
            const soundMs=(record.elapsed+this.context.currentTime-record.audioStart)*1000;
            const timelineMs=Math.max(0,record.node.frame-record.slice.startFrame)*1000/fps+accumulatorMs;
            const skewMs=soundMs-timelineMs,result={...none,id:record.id,owner:record.owner,soundMs,timelineMs,skewMs};
            if(Math.abs(skewMs)>=maxSkewMs){this.stopRecord(record);this.onDiagnostic({type:'stream-resync',id:record.id,owner:record.owner,skewMs});return{...result,action:'restart-at-next-block'};}
            return Math.abs(skewMs)>=toleranceMs?{...result,adjustMs:skewMs,action:'adjust-accumulator'}:result;
        }
        return none;
    }
    async suspend(){if(this.context)await this.context.suspend();}
    async resume(){if(this.context&&this.enabled)await this.context.resume();}
    async dispose(){this.disposed=true;this.stopAll();this.decoded.clear();this.raw.clear();this.pcm?.dispose();this.ownerNodes.clear();this.ownerVolume.clear();this.retiredOwners.clear();await this.context?.close();}
}
