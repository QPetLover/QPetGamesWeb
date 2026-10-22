import { audioAssets, audioMetadata } from './audio-assets.js';

// Original MPEG frames from the SWF, loaded from this bundle, without fetch.
export class OriginalAudio {
  constructor() {
    this.enabled = false;
    this.context = null;
    this.decoded = {};
    this.sources = new Set();
  }
  async enable() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;
    if (!this.context) this.context = new AudioContext();
    if (this.context.state === 'suspended') await this.context.resume();
    this.enabled = true;
    await Promise.all(Object.keys(audioAssets).map(async id => {
      if (this.decoded[id]) return;
      const raw = atob(audioAssets[id].split(',')[1]);
      const bytes = new Uint8Array(raw.length);
      for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
      // Callback form also supports the older WebKit/Chrome baseline.
      this.decoded[id] = await new Promise((resolve, reject) => {
        this.context.decodeAudioData(bytes.buffer, resolve, reject);
      });
    }));
    return true;
  }
  stop() {
    this.sources.forEach(source => { try { source.stop(); } catch (_) { /* Already ended. */ } });
    this.sources.clear();
  }
  disable() { this.enabled = false; this.stop(); }
  play(id, elapsedSeconds = 0) {
    if (!this.enabled || !this.context || !this.decoded[id]) return;
    const buffer = this.decoded[id], info = audioMetadata[id];
    if (elapsedSeconds >= info.samples / info.rate) return;
    const source = this.context.createBufferSource();
    source.buffer = buffer;
    source.connect(this.context.destination);
    source.onended = () => { this.sources.delete(source); source.disconnect(); };
    this.sources.add(source);
    const offset = Math.max(0, info.seekSamples / info.rate) + elapsedSeconds;
    source.start(0, Math.min(offset, buffer.duration), Math.min(info.samples / info.rate - elapsedSeconds, Math.max(0, buffer.duration - offset)));
  }
}
