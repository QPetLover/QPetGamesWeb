import { audioAssets, audioMetadata } from './audio-assets.js';
export class TraysAudio {
  constructor({ contextFactory } = {}) { this.contextFactory = contextFactory; this.context = null; this.enabled = true; this.buffers = {}; this.sources = new Set(); }
  async prepare() {
    if (!this.context) { const C = globalThis.AudioContext || globalThis.webkitAudioContext; this.context = this.contextFactory ? this.contextFactory() : new C(); this.output = this.context.createGain(); this.output.gain.value = this.enabled ? 1 : 0; this.output.connect(this.context.destination); }
    await Promise.all(Object.entries(audioAssets).map(async ([id, data]) => { if (this.buffers[id]) return; const binary = atob(data.split(',')[1]); const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0)); this.buffers[id] = await this.context.decodeAudioData(bytes.buffer); }));
  }
  async resume() { if (this.context?.state === 'suspended') await this.context.resume(); }
  setEnabled(enabled) { this.enabled = !!enabled; this.output?.gain.setValueAtTime(this.enabled ? 1 : 0, this.context.currentTime); }
  play(id, options = {}) {
    id = String(id); const buffer = this.buffers[id], metadata = audioMetadata[id];
    if (!this.context || !buffer || !metadata) return;
    if (options.stop) { for (const source of [...this.sources]) if (source.originalSoundId === id) source.stop(); return; }
    if (options.noMultiple && [...this.sources].some(source => source.originalSoundId === id)) return;
    const offset = metadata.seekSamples / metadata.rate + (options.inPoint || 0) / 44100;
    const duration = Math.min(buffer.duration - offset, options.outPoint === undefined ? metadata.samples / metadata.rate : options.outPoint / 44100 - (options.inPoint || 0) / 44100);
    if (duration <= 0) return;
    const source = this.context.createBufferSource(); source.buffer = buffer; source.originalSoundId = id; source.connect(this.output);
    source.onended = () => { this.sources.delete(source); source.disconnect(); }; this.sources.add(source);
    const loops = Math.max(1, options.loops || 1);
    if (loops > 1) { source.loop = true; source.loopStart = offset; source.loopEnd = offset + duration; source.start(0, offset); source.stop(this.context.currentTime + duration * loops); }
    else source.start(0, offset, duration);
  }
  handle(event) { if (event.type === 'sound') this.play(event.id, event.options || {}); else if (event.type === 'mute') this.setEnabled(event.enabled); }
}
