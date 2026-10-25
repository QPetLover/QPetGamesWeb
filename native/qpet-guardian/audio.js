import {audioAssets,audioMetadata} from './audio-assets.js';
/** Original MPEG bytes; sound info positions use 44,100-Hz units. Stereo
 * envelope gains remain independent, including mono-source L/R differences. */
export class OriginalAudio {
 constructor({audioContextFactory,clock=()=>globalThis.performance.now()/1000}={}){this.factory=audioContextFactory;this.clock=clock;this.context=null;this.output=null;this.prepared=false;this.enabled=false;this.decoded={};this.sources=new Set();this.generation=0;this.streamOwners=new Map();this.streamStates=new Map();}
 async enable(){const generation=++this.generation;const C=globalThis.AudioContext||globalThis.webkitAudioContext;if(!this.context)this.context=this.factory?this.factory():new C();if(!this.output){this.output=this.context.createGain();this.output.gain.setValueAtTime(0,this.context.currentTime);this.output.connect(this.context.destination);}if(this.context.state==='suspended')await this.context.resume();await Promise.all(Object.entries(audioAssets).map(async([id,data])=>{if(this.decoded[id])return;const raw=atob(data.split(',')[1]),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));this.decoded[id]=await this.context.decodeAudioData(bytes.buffer);}));this.prepared=true;if(generation!==this.generation)return false;this.enabled=true;this.output.gain.setValueAtTime(1,this.context.currentTime);for(const[owner,state]of this.streamStates)this.startStream(owner,state);return true;}
 stop(id){for(const source of [...this.sources])if(id===undefined||source.originalSoundId===String(id)){try{source.stop();}catch{}this.sources.delete(source);if(source.streamOwner!==undefined)this.streamOwners.delete(source.streamOwner);}for(const[owner,state]of this.streamStates)if(id===undefined||state.id===String(id))this.streamStates.delete(owner);}
 /** A webpage mute control must not restart an authored stream. Once ready,
  * keep its source clock and original stop/removal events behind a silent bus. */
 disable(){this.generation++;this.enabled=false;this.output?.gain.setValueAtTime(0,this.context.currentTime);}
 play(id,elapsed=0,options={}){id=String(id);if(options.stop){this.stop(id);return;}const buffer=this.decoded[id],m=audioMetadata[id];if((!this.enabled&&!this.prepared)||!buffer||!m)return;if(options.noMultiple&&[...this.sources].some(s=>s.originalSoundId===id))return;
  const start=(options.inPoint||0)/44100,end=options.outPoint===undefined?m.samples/m.rate:options.outPoint/44100,seek=Math.max(0,m.seekSamples/m.rate),duration=Math.min(end-start,buffer.duration-seek-start),loops=Math.max(1,options.loops||1);if(duration<=0||elapsed>=duration*loops)return;
  const source=this.context.createBufferSource();source.buffer=buffer;source.originalSoundId=id;const nodes=[];
  if(options.envelope?.length){const env=options.envelope;const split=this.context.createChannelSplitter(2),merge=this.context.createChannelMerger(2);source.connect(split);nodes.push(split,merge);for(let channel=0;channel<2;channel++){const gain=this.context.createGain();split.connect(gain,m.channels===1?0:channel);gain.connect(merge,0,channel);nodes.push(gain);for(const point of env)gain.gain[point===env[0]?'setValueAtTime':'linearRampToValueAtTime'](point[channel?'rightLevel':'leftLevel']/32768,this.context.currentTime+Math.max(0,point.pos44/44100-elapsed));}merge.connect(this.output||this.context.destination);}else source.connect(this.output||this.context.destination);
  source.onended=()=>{this.sources.delete(source);source.disconnect();for(const node of nodes)node.disconnect();};this.sources.add(source);const phase=elapsed%duration,remaining=duration*loops-elapsed;
  if(loops>1){source.loop=true;source.loopStart=seek+start;source.loopEnd=seek+start+duration;source.start(0,seek+start+phase);source.stop(this.context.currentTime+remaining);}else source.start(0,seek+start+phase,Math.min(remaining,duration-phase));return source;
 }
 /** Fixed guardian paths: 14 walk, 57 death and 521 defeat start at
  * their first MPEG block and continue until loop/removal/stop. 250 is authored
  * stopped and never starts a stream. Fixed a4f5b5 reference StandardStreamDecoder strips
  * block headers, ignores block seek/latencySeek and decodes contiguous MPEG;
  * no per-frame slicing or invented silence. Metadata preserves raw headers.
  */
 playStream(event){let state=this.streamStates.get(event.owner),first=false;if(!state){if(event.blockIndex!==0)return; // Source-specific actual paths are first-block starts.
   state={id:String(event.id),startedAt:this.clock()};this.streamStates.set(event.owner,state);first=true;}
  return this.startStream(event.owner,state,first?0:undefined);
 }
 startStream(owner,state,phase){if((!this.enabled&&!this.prepared)||this.streamOwners.has(owner))return;const buffer=this.decoded[state.id];if(!buffer)return;const offset=phase??Math.max(0,this.clock()-state.startedAt);if(offset>=buffer.duration)return;
  const source=this.context.createBufferSource();source.buffer=buffer;source.originalSoundId=state.id;source.streamOwner=owner;source.connect(this.output||this.context.destination);source.onended=()=>{this.sources.delete(source);if(this.streamOwners.get(owner)===source)this.streamOwners.delete(owner);source.disconnect();};this.sources.add(source);this.streamOwners.set(owner,source);source.start(0,offset);return source;
 }
 stopStream(owner){this.streamStates.delete(owner);this.streamOwners.delete(owner);for(const source of [...this.sources])if(source.streamOwner===owner){try{source.stop();}catch{}this.sources.delete(source);}}
 handle(event){if(event.type==='stream')return this.playStream(event);if(event.type==='stream-stop')return this.stopStream(event.owner);if(event.type==='sound')return this.play(event.id,0,event.options||{});if(event.type==='stop-sounds')this.stop();}
}
