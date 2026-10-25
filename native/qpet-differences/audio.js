import{sound48,soundMetadata}from'./audio-assets.js';
/** Only the original ADPCM click cue, decoded offline to exact PCM. No music
 * is invented; simultaneous source cues overlap, with no noMultiple flag. */
export class OriginalAudio{
 constructor({audioContextFactory}={}){this.factory=audioContextFactory;this.context=null;this.buffer=null;this.enabled=false;this.generation=0;this.sources=new Set();}
 async enable(){const generation=++this.generation;const C=globalThis.AudioContext||globalThis.webkitAudioContext;if(!this.context)this.context=this.factory?this.factory():new C();if(this.context.state==='suspended')await this.context.resume();if(!this.buffer){const raw=atob(sound48.split(',')[1]),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0));this.buffer=await this.context.decodeAudioData(bytes.buffer);}if(generation!==this.generation)return false;this.enabled=true;return true;}
 disable(){this.generation++;this.enabled=false;for(const s of this.sources){try{s.stop();}catch{}}this.sources.clear();}
 handle(e){if(e.type!=='sound'||e.id!=='48'||!this.enabled||!this.buffer)return;const s=this.context.createBufferSource();s.buffer=this.buffer;s.connect(this.context.destination);s.onended=()=>{this.sources.delete(s);s.disconnect();};this.sources.add(s);s.start(0,0,Math.min(this.buffer.duration,soundMetadata.samples/soundMetadata.rate));return s;}
}
