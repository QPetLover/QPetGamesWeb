import {audioAssets,audioMetadata} from './audio-assets.js';
/** Original MPEG bytes; sound info positions use 44,100-Hz units. Stereo
 * envelope gains remain independent, including mono-source L/R differences. */
export class OriginalAudio {
 constructor({audioContextFactory}={}){this.factory=audioContextFactory;this.context=null;this.enabled=false;this.decoded={};this.sources=new Set();this.generation=0;}
 async enable(){const generation=++this.generation;const C=globalThis.AudioContext||globalThis.webkitAudioContext;if(!this.context)this.context=this.factory?this.factory():new C();if(this.context.state==='suspended')await this.context.resume();await Promise.all(Object.entries(audioAssets).map(async([id,data])=>{if(this.decoded[id])return;const raw=atob(data.split(',')[1]),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));this.decoded[id]=await this.context.decodeAudioData(bytes.buffer);}));if(generation!==this.generation)return false;this.enabled=true;return true;}
 stop(id){for(const source of [...this.sources])if(id===undefined||source.originalSoundId===String(id)){try{source.stop();}catch{}this.sources.delete(source);}}
 disable(){this.generation++;this.enabled=false;this.stop();}
 play(id,elapsed=0,options={}){id=String(id);if(options.stop){this.stop(id);return;}const buffer=this.decoded[id],m=audioMetadata[id];if(!this.enabled||!buffer||!m)return;if(options.noMultiple&&[...this.sources].some(s=>s.originalSoundId===id))return;
  const start=(options.inPoint||0)/44100,end=options.outPoint===undefined?m.samples/m.rate:options.outPoint/44100,seek=Math.max(0,m.seekSamples/m.rate),duration=Math.min(end-start,buffer.duration-seek-start),loops=Math.max(1,options.loops||1);if(duration<=0||elapsed>=duration*loops)return;
  const source=this.context.createBufferSource();source.buffer=buffer;source.originalSoundId=id;const nodes=[];
  if(options.envelope?.length){const env=options.envelope;const split=this.context.createChannelSplitter(2),merge=this.context.createChannelMerger(2);source.connect(split);nodes.push(split,merge);for(let channel=0;channel<2;channel++){const gain=this.context.createGain();split.connect(gain,m.channels===1?0:channel);gain.connect(merge,0,channel);nodes.push(gain);for(const point of env)gain.gain.setValueAtTime(point[channel?'rightLevel':'leftLevel']/32768,this.context.currentTime+Math.max(0,point.pos44/44100-elapsed));}merge.connect(this.context.destination);}else source.connect(this.context.destination);
  source.onended=()=>{this.sources.delete(source);source.disconnect();for(const node of nodes)node.disconnect();};this.sources.add(source);const phase=elapsed%duration,remaining=duration*loops-elapsed;
  if(loops>1){source.loop=true;source.loopStart=seek+start;source.loopEnd=seek+start+duration;source.start(0,seek+start+phase);source.stop(this.context.currentTime+remaining);}else source.start(0,seek+start+phase,Math.min(remaining,duration-phase));return source;
 }
 handle(event){if(event.type==='sound')return this.play(event.id,0,event.options||{});if(event.type==='stop-sounds')this.stop();}
}
