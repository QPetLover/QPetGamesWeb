import { audioAssets, audioMetadata } from './audio-assets.js';

// Original StartSound / DefineButtonSound SOUNDINFO flags for these IDs.
const noMultipleSounds = new Set(['105', '123', '190', '195', '241', '242']);

// The embedded bytes are the original MPEG payloads, with the SWF seek and
// sample count kept separately. Playback never loads files or contacts a server.
export class OriginalAudio {
  constructor() {
    this.enabled = false;
    this.context = null;
    this.decoded = {};
    this.sources = new Set();
    this.decoding = null;
    this.enableGeneration = 0;
  }

  async enable() {
    const generation = ++this.enableGeneration;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;
    if (!this.context) this.context = new AudioContext();
    if (this.context.state === 'suspended') await this.context.resume();
    if (!this.decoding) {
      this.decoding = Promise.all(Object.keys(audioAssets).map(async id => {
        if (this.decoded[id]) return;
        const raw = atob(audioAssets[id].split(',')[1]);
        const bytes = new Uint8Array(raw.length);
        for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
        this.decoded[id] = await new Promise((resolve, reject) => {
          this.context.decodeAudioData(bytes.buffer, resolve, reject);
        });
      }));
    }
    await this.decoding;
    if (generation !== this.enableGeneration) return false;
    this.enabled = true;
    return true;
  }

  stop() {
    this.sources.forEach(source => {
      try { source.stop(); } catch (_) { /* The source may have ended already. */ }
    });
    this.sources.clear();
  }

  disable() {
    this.enableGeneration++;
    this.enabled = false;
    this.stop();
  }

  play(id, elapsedSeconds = 0, options = {}) {
    if (!this.enabled || !this.context || !this.decoded[id]) return;
    if (typeof options === 'number') options = { loops: options };
    const buffer = this.decoded[id], info = audioMetadata[id];
    const duration = info.samples / info.rate;
    const loops = Math.max(1, Math.floor(options.loops || 1));
    const elapsed = Math.max(0, elapsedSeconds);
    if (elapsed >= duration * loops) return;
    const noMultiple = options.noMultiple === undefined ? noMultipleSounds.has(String(id)) : options.noMultiple;
    if (noMultiple && Array.from(this.sources).some(source => source.originalSoundId === String(id))) return;
    const seek = Math.max(0, info.seekSamples / info.rate);
    const end = Math.min(seek + duration, buffer.duration);
    if (end <= seek) return;
    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.originalSoundId = String(id);
    source.connect(this.context.destination);
    source.onended = () => {
      this.sources.delete(source);
      source.disconnect();
    };
    this.sources.add(source);
    const offset = seek + (loops > 1 ? elapsed % duration : elapsed);
    if (loops > 1) {
      source.loop = true;
      source.loopStart = seek;
      source.loopEnd = end;
      source.start(0, Math.min(offset, end));
      source.stop(this.context.currentTime + duration * loops - elapsed);
    } else {
      source.start(0, Math.min(offset, end), Math.min(duration - elapsed, Math.max(0, end - offset)));
    }
    return source;
  }
}
