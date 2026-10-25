import { audioAssets,audioMetadata } from './audio-assets.js';
/** Six original MPEG payloads. The source pauses only BGM on mute and restores
 * its position while muting all channels through SoundMixer.soundTransform. */
export class BlocksAudio {
  constructor(){this.context=null;this.buffers={};this.sources=new Set();this.enabled=false;this.prepared=false;this.musicOffset=0;this.musicStarted=0;this.music=null;}
  async enable(){if(!this.context){const C=globalThis.AudioContext||globalThis.webkitAudioContext;this.context=new C();this.output=this.context.createGain();this.output.connect(this.context.destination);this.output.gain.value=0;}
    await this.context.resume();await Promise.all(Object.entries(audioAssets).map(async([id,data])=>{if(this.buffers[id])return;const bytes=Uint8Array.from(atob(data.split(',')[1]),c=>c.charCodeAt(0));this.buffers[id]=await this.context.decodeAudioData(bytes.buffer);}));
    this.prepared=true;this.enabled=true;this.output.gain.setValueAtTime(1,this.context.currentTime);if(!this.music)this.playMusic();
  }
  disable(){if(!this.enabled)return;this.enabled=false;if(this.music){this.musicOffset=(this.musicOffset+this.context.currentTime-this.musicStarted)%this.musicDuration;this.music.stop();this.sources.delete(this.music);this.music=null;}this.output.gain.setValueAtTime(0,this.context.currentTime);}
  playMusic(){const result=this.play(2,{offset:this.musicOffset,loop:true,volume:0.5});if(result){this.music=result.source;this.musicStarted=this.context.currentTime;this.musicDuration=result.duration;}}
  play(id,{offset=0,loop=false,volume=1}={}){id=String(id);const buffer=this.buffers[id],m=audioMetadata[id];if(!this.prepared||!buffer)return null;
    const seek=Math.max(0,m.seekSamples/m.rate),duration=Math.min(m.samples/m.rate,buffer.duration-seek);if(duration<=0)return null;
    const source=this.context.createBufferSource(),gain=this.context.createGain();source.buffer=buffer;source.originalSoundId=id;gain.gain.value=volume;source.connect(gain);gain.connect(this.output);source.onended=()=>{this.sources.delete(source);source.disconnect();gain.disconnect();};
    if(loop){source.loop=true;source.loopStart=seek;source.loopEnd=seek+duration;source.start(0,seek+offset%duration);}else source.start(0,seek,duration);this.sources.add(source);return{source,duration};
  }
  stop(id){for(const source of [...this.sources])if(source.originalSoundId===String(id)){try{source.stop();}catch{}this.sources.delete(source);}}
}
