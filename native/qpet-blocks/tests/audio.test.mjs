import test from 'node:test';
import assert from 'node:assert/strict';
import { BlocksAudio } from '../audio.js';
import { audioMetadata } from '../audio-assets.js';
class Context {
 constructor(){this.currentTime=0;this.destination={};this.decoded=0;this.gains=[];}
 async resume(){}
 async decodeAudioData(bytes){this.decoded++;assert.ok(bytes.byteLength>100);return{duration:100};}
 createGain(){const gain={gain:{value:1,setValueAtTime(v){this.value=v;}},connect(){},disconnect(){}};this.gains.push(gain);return gain;}
 createBufferSource(){return{connect(){},disconnect(){},start(...args){this.startArgs=args;},stop(){this.stopped=true;}};}
}
test('six unchanged source sounds decode, BGM loops at half volume and source seek',async()=>{globalThis.AudioContext=Context;const a=new BlocksAudio();await a.enable();assert.equal(a.context.decoded,6);assert.equal(a.sources.size,1);assert.equal(a.music.originalSoundId,'2');assert.equal(a.context.gains[1].gain.value,0.5);assert.equal(a.music.loop,true);assert.equal(a.music.loopStart,audioMetadata['2'].seekSamples/audioMetadata['2'].rate);assert.equal(a.music.loopEnd-a.music.loopStart,audioMetadata['2'].samples/audioMetadata['2'].rate);});
test('mute pauses only BGM, saves position and does not restart one-shot effects',async()=>{globalThis.AudioContext=Context;const a=new BlocksAudio();await a.enable();const effect=a.play(1).source,original=a.music;a.context.currentTime=4;a.disable();assert.equal(a.output.gain.value,0);assert.equal(original.stopped,true);assert.equal(effect.stopped,undefined);assert.equal(a.musicOffset,4);a.context.currentTime=14;await a.enable();assert.equal(a.context.decoded,6);assert.equal(a.music.startArgs[1],4+a.music.loopStart);assert.equal(a.sources.has(effect),true);a.stop(1);assert.equal(effect.stopped,true);assert.equal(a.sources.has(a.music),true);});
