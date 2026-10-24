/* PCM data loader and normal Web Audio buffers only. See ../assets/audio-pcm/NOTICE.md. */
import {buildEventLoopPlan,audioBufferFromInterleavedPcm16} from './event-pcm-plan.js';
/** Pure PCM integer interpolation reference, no media decoder or game VM.
 * Numerics follow fixed dasp 0.11.0 Linear<i16> and Converter; source archives
 * and MIT OR Apache-2.0 notices are retained beside this research tool.
 */
export function parsePcm16Wav(bytes) {
  const data=bytes instanceof Uint8Array?bytes:new Uint8Array(bytes);
  const view=new DataView(data.buffer,data.byteOffset,data.byteLength);
  const text=at=>String.fromCharCode(...data.subarray(at,at+4));
  if(text(0)!=='RIFF'||text(8)!=='WAVE'||view.getUint32(4,true)+8!==data.length)
    throw new Error('Expected a complete RIFF/WAVE file');
  let format,payload;
  for(let at=12;at+8<=data.length;) {
    const id=text(at),size=view.getUint32(at+4,true),start=at+8;
    if(start+size>data.length)throw new Error('Truncated WAV chunk');
    if(id==='fmt ') {
      if(size<16)throw new Error('Truncated WAV format');
      format={encoding:view.getUint16(start,true),channels:view.getUint16(start+2,true),
        rate:view.getUint32(start+4,true),align:view.getUint16(start+12,true),bits:view.getUint16(start+14,true)};
    } else if(id==='data')payload={start,size};
    at=start+size+(size&1);
  }
  if(!format||!payload||format.encoding!==1||format.bits!==16||
     ![1,2].includes(format.channels)||format.align!==format.channels*2||payload.size%format.align)
    throw new Error('Expected PCM16 mono/stereo WAV');
  const samples=new Int16Array(payload.size/2);
  for(let i=0;i<samples.length;i++)samples[i]=view.getInt16(payload.start+i*2,true);
  return {...format,samples,frames:samples.length/format.channels};
}

const now=()=>globalThis.performance?.now?.()??Date.now();
const optionsKey=(metadata,rate,options)=>{
  const factor=44100/rate,seek=(metadata.seekSamples||0)&65535;
  return [Math.trunc((options.inPoint||0)/factor)+seek,
    (options.outPoint===undefined?metadata.samples:Math.trunc(options.outPoint/factor))+seek];
};
const fetchBytes=async url=>{
  const response=await fetch(url);
  if(!response.ok)throw new Error('PCM asset HTTP '+response.status+': '+url);
  return new Uint8Array(await response.arrayBuffer());
};

/** One chapter's explicit event identities. The source bodies and accurate-seek
 * prefixes stay at their original rates; the cached playback period is 44100.
 * A long authored loop reuses one period, never a loop-count-sized buffer.
 */
export class EventPcmBank{
  constructor({data,metadata,context,loadBytes=fetchBytes,onDiagnostic=()=>{}}){
    Object.assign(this,{data,metadata,context,loadBytes,onDiagnostic});
    this.loaded=new Map();this.loading=new Map();this.cache=new Map();this.pending=new Map();this.disposed=false;
    this.metrics={package:data.package,wavBytes:0,rawPCMBytes:0,prefixPCMBytes:0,
      periodAudioBufferBytes:0,tailAudioBufferBytes:0,totalAudioBufferBytes:0,
      maxTemporaryPCMBytes:0,loadParseMs:0,buildMs:0,maxBuildMs:0,plans:[],ready:false};
  }
  async load(identity){
    if(this.loaded.has(identity))return this.loaded.get(identity);
    if(this.loading.has(identity))return this.loading.get(identity);
    const work=(async()=>{
      const asset=this.data.assets[identity];if(!asset)throw new Error('Missing PCM identity '+identity);
      const bytes=await this.loadBytes(asset.url),at=now(),body=parsePcm16Wav(bytes);
      if(body.rate!==asset.rate||body.channels!==asset.channels||body.frames!==asset.frames)
        throw new Error('PCM asset format differs from its source manifest: '+identity);
      this.metrics.wavBytes+=bytes.length;this.metrics.rawPCMBytes+=body.samples.byteLength;
      this.metrics.loadParseMs+=now()-at;
      const profiles={};
      for(const [key,profile]of Object.entries(asset.profiles)){
        profiles[key]={...profile};
        if(profile.prefixFrames){
          const prefixBytes=await this.loadBytes(profile.prefixURL),start=now(),prefix=parsePcm16Wav(prefixBytes);
          if(prefix.rate!==body.rate||prefix.channels!==body.channels||prefix.frames!==profile.prefixFrames)
            throw new Error('Accurate-seek prefix format differs from its source manifest: '+identity+':'+key);
          profiles[key].prefixSamples=prefix.samples;this.metrics.wavBytes+=prefixBytes.length;
          this.metrics.prefixPCMBytes+=prefix.samples.byteLength;this.metrics.loadParseMs+=now()-start;
        }
      }
      if(this.disposed)throw new Error('PCM bank disposed');
      const loaded={...body,profiles};this.loaded.set(identity,loaded);return loaded;
    })();
    this.loading.set(identity,work);
    try{return await work;}catch(error){this.loading.delete(identity);throw error;}
  }
  identity(id){const definition=this.data.definitions[id];if(!definition)throw new Error('Missing canonical event definition '+id);return definition.asset;}
  key(id,options={}){
    const identity=this.identity(id),asset=this.data.assets[identity],metadata=this.metadata[id];
    if(!metadata)throw new Error('Missing original event metadata '+id);
    const [start,end]=optionsKey(metadata,asset.rate,options),window=Math.min(end-start+1,asset.profiles[start]?.decodedFrames??Infinity);
    // The ordinary cycle is independent of loop count. Degenerate source
    // windows use the directly verified finite model instead.
    return identity+':'+start+':'+end+':'+((options.loops??1)===0||window<2?(options.loops??1):'period');
  }
  get(id,options={}){
    const prepared=this.cache.get(this.key(id,options));if(!prepared)return null;
    const loops=options.loops??1;
    if(!Number.isInteger(loops)||loops<0||loops>65535)throw new Error('Expected original u16 event loop count');
    const outputFrames=prepared.finite?prepared.outputFrames:
      Math.max(1,loops*prepared.sourceWindowFrames-(prepared.endTriggered?1:0))*prepared.factor;
    return{...prepared,outputFrames,duration:outputFrames/44100};
  }
  async prepare(id,options={}){
    const key=this.key(id,options),existing=this.get(id,options);if(existing)return existing;
    if(this.pending.has(key)){await this.pending.get(key);return this.get(id,options);}
    const work=(async()=>{
      const identity=this.identity(id),raw=await this.load(identity),metadata=this.metadata[id];
      if(this.disposed)throw new Error('PCM bank disposed');
      const [start,end]=optionsKey(metadata,raw.rate,options),profile=raw.profiles[start];
      // Unknown accurate MPEG seeks must be audited offline. Falling back to
      // a raw PCM cut silently changes the decoder's cold-start samples.
      if(!profile)throw new Error('Unaudited canonical event seek '+identity+':'+start);
      const finite=(options.loops??1)===0||Math.min(end-start+1,profile.decodedFrames)<2;
      const at=now(),plan=buildEventLoopPlan(raw.samples,raw.rate,raw.channels,metadata,
        {...options,loops:finite?(options.loops??1):1},profile);
      const samples=plan.finiteSamples??plan.periodSamples;
      const buffer=audioBufferFromInterleavedPcm16(this.context,samples,raw.channels);
      const tail=plan.tailSamples?audioBufferFromInterleavedPcm16(this.context,plan.tailSamples,raw.channels):null;
      const temporary=samples.byteLength+(plan.tailSamples?.byteLength??0);
      const bufferBytes=buffer.length*buffer.numberOfChannels*4,tailBytes=tail?tail.length*tail.numberOfChannels*4:0;
      const ms=now()-at;
      const prepared={identity,buffer,tail,finite:!!plan.finiteSamples,channels:raw.channels,
        factor:44100/raw.rate,sourceWindowFrames:plan.sourceWindowFrames,
        endTriggered:plan.mode.startsWith('authored end'),periodFrames:buffer.length,
        tailFrames:plan.tailFrames??0,outputFrames:plan.outputFrames,mode:plan.mode};
      this.cache.set(key,prepared);this.metrics.periodAudioBufferBytes+=bufferBytes;
      this.metrics.tailAudioBufferBytes+=tailBytes;this.metrics.totalAudioBufferBytes+=bufferBytes+tailBytes;
      this.metrics.maxTemporaryPCMBytes=Math.max(this.metrics.maxTemporaryPCMBytes,temporary);
      this.metrics.buildMs+=ms;this.metrics.maxBuildMs=Math.max(this.metrics.maxBuildMs,ms);
      this.metrics.plans.push({key,id:String(id),sourceRate:raw.rate,channels:raw.channels,
        sourceWindowFrames:plan.sourceWindowFrames,periodFrames:buffer.length,tailFrames:plan.tailFrames??0,
        bufferBytes,tailBytes,temporaryPCMBytes:temporary,buildMs:ms});
    })();
    this.pending.set(key,work);
    try{await work;return this.get(id,options);}finally{this.pending.delete(key);}
  }
  async warmup(events=[]){
    const at=now();
    // Bound concurrent fetches. PCM construction stays single-threaded and
    // yields between periods while the chapter's loading cover is still up.
    const identities=Object.keys(this.data.assets);
    for(let i=0;i<identities.length;i+=4)await Promise.all(identities.slice(i,i+4).map(id=>this.load(id)));
    const requests=[...Object.keys(this.data.definitions).map(id=>({id,options:{}})),
      ...events.filter(event=>!event.options?.stop)];
    for(const {id,options={}}of requests){await this.prepare(String(id),options);await new Promise(resolve=>setTimeout(resolve,0));}
    this.metrics.ready=true;this.metrics.warmupWallMs=now()-at;
    this.onDiagnostic({type:'event-pcm-ready',package:this.data.package,
      periodCount:this.cache.size,totalAudioBufferBytes:this.metrics.totalAudioBufferBytes,
      rawPCMBytes:this.metrics.rawPCMBytes,prefixPCMBytes:this.metrics.prefixPCMBytes,
      warmupWallMs:this.metrics.warmupWallMs,maxBuildMs:this.metrics.maxBuildMs});
    return this.metrics;
  }
  dispose(){this.disposed=true;this.loaded.clear();this.loading.clear();this.cache.clear();this.pending.clear();}
}
