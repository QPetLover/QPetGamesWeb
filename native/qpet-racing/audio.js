import { audioAssets, audioMetadata, audioTimelineEvents, streamMetadata } from './audio-assets.js';

const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));

// All audio in this game is original MPEG. Timing parameters remain separate
// from those bytes: DefineSound seek uses the source sample rate, SOUNDINFO
// in/out/envelope positions always use 44,100 samples per second.
export class OriginalAudio {
  constructor({ audioContextFactory } = {}) {
    this.enabled = false;
    this.context = null;
    this.decoded = {};
    this.sources = new Set();
    this.decoding = null;
    this.enableGeneration = 0;
    this.audioContextFactory = audioContextFactory;
    this.streamSource = null;
    this.streamFrame = null;
    this.streamAnchor = null;
  }

  async enable() {
    const generation = ++this.enableGeneration;
    const AudioContext = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!this.context) {
      if (!this.audioContextFactory && !AudioContext) return false;
      this.context = this.audioContextFactory ? this.audioContextFactory() : new AudioContext();
    }
    if (this.context.state === 'suspended') await this.context.resume();
    if (!this.decoding) {
      this.decoding = Promise.all(Object.entries(audioAssets).map(async ([id, data]) => {
        if (this.decoded[id]) return;
        const raw = atob(data.slice(data.indexOf(',') + 1));
        const bytes = Uint8Array.from(raw, character => character.charCodeAt(0));
        this.decoded[id] = await new Promise((resolve, reject) => {
          this.context.decodeAudioData(bytes.buffer, resolve, reject);
        });
      })).catch(error => { this.decoding = null; throw error; });
    }
    await this.decoding;
    if (generation !== this.enableGeneration) return false;
    this.enabled = true;
    return true;
  }

  stop(id) {
    for (const source of Array.from(this.sources)) {
      if (id !== undefined && source.originalSoundId !== String(id)) continue;
      try { source.stop(); } catch (_) { /* Already ended. */ }
      this.sources.delete(source);
      if (source === this.streamSource) this.streamSource = null;
    }
    if (id === undefined || String(id) === streamMetadata.id) {
      this.streamSource = null;
      this.streamAnchor = null;
      this.streamFrame = null;
    }
  }

  disable() {
    this.enableGeneration++;
    this.enabled = false;
    this.stop();
  }

  play(id, elapsedSeconds = 0, options = {}) {
    id = String(id);
    if (options.stop) { this.stop(id); return; }
    if (!this.enabled || !this.context || !this.decoded[id] || !audioMetadata[id]) return;
    const buffer = this.decoded[id], info = audioMetadata[id];
    const fullDuration = info.samples / info.rate;
    const seek = Math.max(0, info.seekSamples / info.rate);
    const inPoint = clamp(Number(options.inPoint || 0) / 44100, 0, fullDuration);
    const outPoint = options.outPoint === undefined ? fullDuration : clamp(Number(options.outPoint) / 44100, inPoint, fullDuration);
    const duration = Math.min(outPoint - inPoint, Math.max(0, buffer.duration - seek - inPoint));
    const loops = Math.max(1, Math.floor(Number(options.loops) || 1));
    const elapsed = Math.max(0, Number(elapsedSeconds) || 0);
    if (duration <= 0 || elapsed >= duration * loops) return;
    if (options.noMultiple && Array.from(this.sources).some(source => source.originalSoundId === id)) return;
    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.originalSoundId = id;
    // The only envelope in QQ飞车 is ID356's three records at pos44=0;
    // the last record is full level for both channels. Preserve it in data,
    // and apply its effective level rather than invent an audible fade.
    const envelope = options.envelope;
    let gain = null;
    if (envelope?.length) {
      if (!envelope.every(point => point.pos44 === 0)) throw new Error('Unexpected source sound envelope');
      const last = envelope[envelope.length - 1];
      if (last.leftLevel !== last.rightLevel) throw new Error('Unexpected asymmetric source sound envelope');
      gain = this.context.createGain();
      gain.gain.value = last.leftLevel / 32768;
      source.connect(gain);
      gain.connect(this.context.destination);
    } else source.connect(this.context.destination);
    const phase = elapsed % duration;
    const offset = seek + inPoint + phase;
    const remaining = duration * loops - elapsed;
    source.originalStartedAt = this.context.currentTime;
    source.originalElapsedAtStart = elapsed;
    source.onended = () => {
      this.sources.delete(source);
      source.disconnect();
      gain?.disconnect();
      if (source === this.streamSource) this.streamSource = null;
    };
    this.sources.add(source);
    if (loops > 1) {
      source.loop = true;
      source.loopStart = seek + inPoint;
      source.loopEnd = seek + inPoint + duration;
      source.start(0, offset);
      source.stop(this.context.currentTime + remaining);
    } else source.start(0, offset, Math.min(remaining, duration - phase));
    return source;
  }

  // Useful to replay exactly the selected original frame event; the game logic
  // owns entry/lifetime semantics, so rendering/caching never dispatches audio.
  playTimeline(spriteId, frame, elapsedSeconds = 0) {
    return audioTimelineEvents
      .filter(event => event.spriteId === spriteId && event.frame === frame)
      .map(event => this.play(event.id, elapsedSeconds, event.options));
  }

  handle(event) {
    if (event.type === 'stopAllSounds' || event.type === 'stop-sounds') { this.stop(); return; }
    if (event.type === 'sound') return this.play(event.id, 0, event.options || {});
  }

  // MP3 stream chunks are concatenated offline without re-encoding. Their
  // per-block seeks equal firstSeek + elapsedFrames*441 - decodedBeforeBlock.
  // Resuming/jumping seeks the continuous payload; stopped root frames pause it.
  syncStream(rootFrame, rootPlaying = true) {
    const frame = Number(rootFrame);
    const elapsed = (frame - streamMetadata.firstFrame) / streamMetadata.fps;
    const duration = streamMetadata.samples / streamMetadata.rate;
    if (!this.enabled || !rootPlaying || elapsed < 0 || elapsed >= duration) {
      if (this.streamSource) this.stop(streamMetadata.id);
      this.streamFrame = frame;
      return;
    }
    const now = this.context.currentTime;
    const expected = this.streamAnchor ? this.streamAnchor.elapsed + now - this.streamAnchor.at : null;
    const jumped = this.streamFrame !== null && frame !== this.streamFrame && frame !== this.streamFrame + 1;
    if (!this.streamSource || jumped || Math.abs(expected - elapsed) > 2 / streamMetadata.fps) {
      this.stop(streamMetadata.id);
      this.streamSource = this.play(streamMetadata.id, elapsed);
      this.streamAnchor = { elapsed, at: now };
    }
    this.streamFrame = frame;
    return this.streamSource;
  }
}
