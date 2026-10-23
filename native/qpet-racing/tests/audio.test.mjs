import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { OriginalAudio } from '../audio.js';
import { audioAssets, audioMetadata, audioTimelineEvents, streamMetadata } from '../audio-assets.js';

class AudioContextStub {
  constructor() { this.state = 'running'; this.currentTime = 10; this.destination = {}; this.created = []; this.gains = []; }
  decodeAudioData(bytes, success) { success({ duration: 100, bytes }); }
  createBufferSource() {
    const source = { connect() {}, disconnect() {}, start(...args) { this.startArgs = args; }, stop(...args) { this.stopArgs = args; } };
    this.created.push(source); return source;
  }
  createGain() { const gain = { gain: { value: 1 }, connect() {}, disconnect() {} }; this.gains.push(gain); return gain; }
}
async function setup() {
  const context = new AudioContextStub();
  const audio = new OriginalAudio({ audioContextFactory: () => context });
  assert.equal(await audio.enable(), true);
  return { audio, context };
}
const nearly = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-10, `${actual} != ${expected}`);

test('all 12 original sounds and the MP3 stream retain their recorded MPEG bytes', async () => {
  const provenance = JSON.parse(await readFile(new URL('../audio-provenance.json', import.meta.url)));
  assert.equal(provenance.source.sha256, 'c8ad6b998a57f343ddf9213ca61717bdf0ceb1061b794ca63632a9b4d9f8dd1f');
  assert.equal(Object.keys(audioAssets).length, 13);
  for (const [id, data] of Object.entries(audioAssets)) {
    const bytes = Buffer.from(data.split(',')[1], 'base64');
    assert.equal(bytes.length, provenance.sounds[id].bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), provenance.sounds[id].sha256);
    assert.equal(bytes[0], 0xff);
    assert.equal(bytes[1] & 0xe0, 0xe0);
    assert.equal(audioMetadata[id].rate, 11025);
  }
  assert.equal(provenance.exportAssets.fx1, '1');
  assert.equal(provenance.exportAssets.fx2, '2');
  assert.equal(provenance.exportAssets.fx3, '3');
  assert.equal(provenance.exportAssets.fx4, undefined);
});

test('all 22 source frame events include distinct hit, throw, aim, countdown and menu sounds', () => {
  assert.deepEqual(audioTimelineEvents.map(({spriteId,frame,id}) => [spriteId,frame,id]), [
    [60,2,'36'],[93,35,'71'],[118,2,'104'],[160,2,'36'],[182,30,'71'],[198,2,'104'],
    [206,1,'205'],[null,1,'259'],[null,22,'259'],[null,56,'319'],[null,95,'356'],
    [394,9,'391'],[465,2,'36'],[483,34,'71'],[497,2,'104'],[525,2,'36'],
    [542,34,'71'],[557,2,'104'],[622,2,'604'],[622,20,'604'],[622,38,'604'],[622,56,'3']
  ]);
});

test('a newly delivered short event starts at the original seek, without RAF lateness cropping', async () => {
  const { audio, context } = await setup();
  audio.handle({ type: 'sound', id: 3, at: -400, options: {} });
  const source = context.created[0];
  nearly(source.startArgs[1], 1661 / 11025);
  nearly(source.startArgs[2], 6354 / 11025);
  assert.equal(audio.play('fx4'), undefined);
  assert.equal(context.created.length, 1);
});

test('SOUNDINFO in and out positions use 44100 Hz independently of the MP3 rate', async () => {
  const { audio, context } = await setup();
  audio.playTimeline(null, 1);
  audio.playTimeline(null, 22);
  nearly(context.created[0].startArgs[1], 1661 / 11025 + 800 / 44100);
  nearly(context.created[0].startArgs[2], 25379 / 11025 - 800 / 44100);
  nearly(context.created[1].startArgs[1], 1661 / 11025);
  nearly(context.created[1].startArgs[2], 77778 / 44100);
});

test('menu retains finite loop count, noMultiple and the effective last envelope at pos44 zero', async () => {
  const { audio, context } = await setup();
  const elapsed = 5.125;
  const [source] = audio.playTimeline(null, 95, elapsed);
  const info = audioMetadata[356], duration = info.samples / info.rate;
  assert.equal(source.loop, true);
  nearly(source.loopStart, info.seekSamples / info.rate);
  nearly(source.loopEnd, (info.seekSamples + info.samples) / info.rate);
  nearly(source.startArgs[1], info.seekSamples / info.rate + elapsed % duration);
  nearly(source.stopArgs[0], context.currentTime + 32767 * duration - elapsed);
  assert.equal(context.gains[0].gain.value, 1);
  assert.deepEqual(audio.playTimeline(null, 95), [undefined]);
  assert.equal(context.created.length, 1);
  source.onended();
  assert.ok(audio.playTimeline(null, 95)[0]);
});

test('each nonempty MP3 stream block agrees with the root frame time and preserved seek', async () => {
  const provenance = JSON.parse(await readFile(new URL('../audio-provenance.json', import.meta.url)));
  let decoded = 0, blocks = 0;
  for (const block of provenance.stream.blocks) {
    if (block.bytes) {
      assert.equal(decoded + block.seekSamples, 1633 + (block.frame - 46) * 441);
      blocks++;
    }
    decoded += block.samples;
  }
  assert.equal(blocks, 27);
  assert.equal(decoded, 25344);
  assert.equal(streamMetadata.samples, decoded - 1633);
});

test('stream follows root playback, pauses at a stop frame and seeks on jumps', async () => {
  const { audio, context } = await setup();
  assert.equal(audio.syncStream(45, true), undefined);
  const first = audio.syncStream(46, true);
  nearly(first.startArgs[1], 1633 / 11025);
  context.currentTime += 1 / 25;
  assert.equal(audio.syncStream(47, true), first);
  context.currentTime += 1 / 25;
  const jumped = audio.syncStream(56, true);
  assert.notEqual(jumped, first);
  nearly(jumped.startArgs[1], 1633 / 11025 + 10 / 25);
  audio.syncStream(95, false);
  assert.equal(audio.streamSource, null);
  assert.deepEqual(jumped.stopArgs, []);
  const resumed = audio.syncStream(96, true);
  nearly(resumed.startArgs[1], 1633 / 11025 + 50 / 25);
  audio.syncStream(107, false);
  assert.equal(audio.streamSource, null);
});

test('stopAllSounds and disabling stop active sounds and invalidate pending enable', async () => {
  const { audio, context } = await setup();
  audio.play(1); audio.play(2); audio.playTimeline(null,95);
  assert.equal(audio.sources.size, 3);
  audio.handle({type:'stopAllSounds'});
  assert.equal(audio.sources.size, 0);
  audio.play(3);
  audio.disable();
  assert.equal(audio.enabled, false);
  assert.equal(audio.sources.size, 0);
  assert.equal(audio.play(3), undefined);
  assert.equal(context.created.length, 4);
  let resolveDecode;
  const deferred = new AudioContextStub();
  deferred.decodeAudioData = (_, success) => { resolveDecode ||= []; resolveDecode.push(success); };
  const pending = new OriginalAudio({audioContextFactory:()=>deferred});
  const enabled = pending.enable();
  pending.disable();
  resolveDecode.forEach(resolve => resolve({duration:100}));
  assert.equal(await enabled, false);
  assert.equal(pending.enabled, false);
});
