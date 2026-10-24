const SOUND_FILES={1:'1_sou3.mp3',2:'2_sou2.mp3',3:'3_sou1.mp3',397:'397.mp3',504:'504.mp3',505:'505.mp3',711:'711.mp3',746:'746.mp3'};
export class GameAudio {
  constructor() {this.context=null;this.buffers=new Map();this.voices=new Set();this.music=null;this.muted=false;this.offset=0;this.startedAt=0;}
  async prepare() {
    const Context=globalThis.AudioContext||globalThis.webkitAudioContext;
    if(!Context)return;
    this.context=new Context();this.gain=this.context.createGain();this.gain.connect(this.context.destination);
    await Promise.all(Object.entries(SOUND_FILES).map(async([id,file])=>{
      const url=new URL('./assets/sounds/'+file,import.meta.url).href;
      const response=await fetch(url);if(!response.ok)throw new Error('音频读取失败：'+file);
      this.buffers.set(Number(id),await this.context.decodeAudioData(await response.arrayBuffer()));
    }));
  }
  async unlock(){if(this.context?.state==='suspended')await this.context.resume();}
  mute(value){this.muted=value;if(this.gain)this.gain.gain.value=value?0:1;}
  sound(id) {
    const buffer=this.buffers.get(id);if(!buffer||!this.context)return;
    const source=this.context.createBufferSource();source.buffer=buffer;source.connect(this.gain);
    this.voices.add(source);source.onended=()=>this.voices.delete(source);source.start();
  }
  musicPosition(){return this.music&&this.context?this.offset+(this.context.currentTime-this.startedAt):this.offset;}
  pauseMusic(){const value=this.musicPosition();if(this.music){try{this.music.stop();}catch{}this.music=null;}this.offset=value;return value;}
  playMusic(level,offset=0) {
    this.pauseMusic();this.offset=offset;
    const buffer=this.buffers.get(4-level);if(!buffer||!this.context||offset>=buffer.duration)return;
    this.music=this.context.createBufferSource();this.music.buffer=buffer;this.music.connect(this.gain);
    this.startedAt=this.context.currentTime;this.music.start(0,offset);
  }
  stopAll(){this.pauseMusic();this.offset=0;for(const voice of this.voices){try{voice.stop();}catch{}}this.voices.clear();}
}
