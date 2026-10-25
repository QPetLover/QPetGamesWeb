import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { TraysAudio } from '../audio.js';
import { audioAssets, audioMetadata } from '../audio-assets.js';
import { readFileSync } from 'node:fs';
const source = JSON.parse(readFileSync(new URL('./fixtures/source-audio.json', import.meta.url)));
function context() {
  const sources=[], decodes=[];
  return { currentTime:2, state:'suspended', destination:{}, sources, decodes,
    async resume(){this.state='running';},
    createGain(){return { gain:{value:1,setValueAtTime(value){this.value=value;}},connect(){} };},
    async decodeAudioData(data){decodes.push(new Uint8Array(data));return {duration:8};},
    createBufferSource(){const source={connect(){},disconnect(){},start(...args){this.started=args;},stop(...args){this.stopped=args;}};sources.push(source);return source;}
  };
}

test('nine production MPEG payloads match the independently parsed original tags',()=>{
  assert.equal(Object.keys(audioAssets).length,9);assert.equal(Object.values(audioMetadata).reduce((sum,m)=>sum+m.bytes,0),17327);
  for(const[id,url]of Object.entries(audioAssets)){
    const bytes=Buffer.from(url.split(',')[1],'base64'),m=source.sounds[id];
    assert.equal(createHash('sha256').update(bytes).digest('hex'),m.mpegSHA256);
    assert.equal(audioMetadata[id].samples,m.samples);assert.equal(audioMetadata[id].seekSamples,m.seekSamples);
  }
});

test('capture, delivery and game-over retain different buffers and original declared durations',async()=>{
  const ctx=context(),audio=new TraysAudio({contextFactory:()=>ctx});await audio.prepare();await audio.resume();assert.equal(ctx.decodes.length,9);
  for(const id of ['5','3','2']){audio.play(id);const started=ctx.sources.at(-1);assert.equal(started.originalSoundId,id);assert.equal(started.buffer,audio.buffers[id]);assert.deepEqual(started.started,[0,0,source.sounds[id].samples/source.sounds[id].rate]);}
  assert.notEqual(audio.buffers['5'],audio.buffers['3']);
});

test('original default frame sounds overlap; noMultiple only suppresses when explicitly set',async()=>{
  const ctx=context(),audio=new TraysAudio({contextFactory:()=>ctx});await audio.prepare();audio.play('177');audio.play('177');assert.equal(ctx.sources.length,2);
  audio.play('177',{noMultiple:true});assert.equal(ctx.sources.length,2);
  audio.play('80');audio.play('2');assert.equal(ctx.sources.length,4);
});

test('mute keeps source clocks and later original frame events instead of stopping or replaying',async()=>{
  const ctx=context(),audio=new TraysAudio({contextFactory:()=>ctx});await audio.prepare();audio.play('80');const first=ctx.sources[0];
  audio.setEnabled(false);assert.equal(audio.output.gain.value,0);assert.equal(first.stopped,undefined);
  audio.play('720');assert.equal(ctx.sources.length,2);
  audio.setEnabled(true);assert.equal(audio.output.gain.value,1);assert.equal(ctx.sources.length,2);assert.equal(first.stopped,undefined);
});
