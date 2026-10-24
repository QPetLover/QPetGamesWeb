import {audioAssets, streams, buttonSounds} from './audio-assets.js';

export function createAudio({audioContextFactory} = {}) {
  let context, enabled = false, pending = false, generation = 0, decoding = null, error = null;
  const buffers = new Map(), channels = new Map(), active = new Set(), events = [];

  async function enable() {
    const request = ++generation;
    pending = true;
    error = null;
    try {
      context ??= audioContextFactory ? audioContextFactory() : new (globalThis.AudioContext || globalThis.webkitAudioContext)();
      await context.resume();
      if (!decoding && buffers.size < Object.keys(audioAssets).length) {
        decoding = Promise.all(Object.entries(audioAssets).filter(([id]) => !buffers.has(id)).map(async ([id, asset]) => {
          try {
            const bytes = Uint8Array.from(atob(asset.data), c => c.charCodeAt(0));
            buffers.set(id, await context.decodeAudioData(bytes.buffer));
            return {status: 'fulfilled'};
          } catch (reason) { return {status: 'rejected', reason}; }
        })).then(results => {
          const failed = results.find(result => result.status === 'rejected');
          if (failed) throw failed.reason;
        });
        decoding.then(() => { decoding = null; }, () => { decoding = null; });
      }
      if (decoding) await decoding;
      if (request !== generation) return false;
      enabled = true;
      pending = false;
      return true;
    } catch (cause) {
      if (request === generation) {
        pending = false;
        enabled = false;
        error = String(cause);
      }
      return false;
    }
  }

  function stopNode(node) {
    if (!node) return;
    try { node.stop(); } catch {}
    try { node.disconnect?.(); } catch {}
    active.delete(node);
  }

  function stop(key) {
    const channel = channels.get(key);
    if (channel) stopNode(channel.node);
    channels.delete(key);
  }

  function play(id, {key = null, offset = 0} = {}) {
    if (!enabled || !buffers.has(id)) return;
    const buffer = buffers.get(id), start = Math.max(0, offset + (audioAssets[id].seek || 0));
    if (start >= buffer.duration) return;
    if (key) stop(key);
    const node = context.createBufferSource();
    node.buffer = buffer;
    node.connect(context.destination);
    active.add(node);
    if (key) channels.set(key, {id, node, offset, started: context.currentTime});
    node.onended = () => {
      active.delete(node);
      try { node.disconnect?.(); } catch {}
      const channel = key && channels.get(key);
      // Retain completed identity so a short stream is not replayed each draw.
      if (channel?.node === node) channel.node = null;
    };
    node.start(0, start);
    events.push({id, key, offset, at: context.currentTime});
    if (events.length > 1000) events.shift();
  }

  function sync(view) {
    if (!enabled) return;
    const wanted = new Map();
    function add(key, id, frame, revision, playing = true) {
      const stream = streams[id];
      if (!stream || !playing || frame < stream.startFrame) return;
      wanted.set(key, {id: stream.sound, offset: Math.max(0, (frame - stream.startFrame) * stream.samplesPerFrame / stream.rate) + stream.seek / stream.rate, revision});
    }
    if (view.status === 'menu') add('menu', 913, (view.sceneAge % 126) + 1, Math.floor(view.sceneAge / 126));
    if (view.status === 'selection') add('selection', 992, view.selectionFrame, Math.floor(view.sceneAge / 84), view.selectionPlaying);
    if (view.player) {
      add('music', 1048, ((view.musicAge ?? view.sceneAge) % 2616) + 1, Math.floor((view.musicAge ?? view.sceneAge) / 2616));
      if (view.talking) add('talk', view.role === 'gunner' ? 912 : 908, view.talkFrame, 0, view.talkPlaying);
      const player = view.player;
      const id = player.state === 'attack' ? (view.role === 'gunner' ? 656 : 391) : player.state === 'fight' ? (view.role === 'gunner' ? 774 : 451) : player.state === 'attacked' ? (view.role === 'gunner' ? 821 : 480) : player.state === 'die' ? (view.role === 'gunner' ? 842 : 494) : null;
      if (id) add('player', id, player.animFrame, player.revision, !player.chargeStopped);
      for (const monster of view.monsters || []) {
        if (monster.removed) continue;
        if (monster.state === 'die') add(monster.id, ({881: 880, 1102: 1101, 1169: 1168, 1269: 1268, 1345: 1344})[monster.symbolId], monster.animFrame, monster.revision, !monster.completed);
      }
    }
    for (const [key] of channels) if (!wanted.has(key)) stop(key);
    for (const [key, desired] of wanted) {
      const channel = channels.get(key);
      if (!channel || channel.id !== desired.id || channel.revision !== desired.revision) {
        play(desired.id, {key, offset: desired.offset});
        const next = channels.get(key);
        if (next) next.revision = desired.revision;
      }
    }
  }

  return {
    enable, sync,
    button(id, transition) { const sound = buttonSounds[id]?.[transition]; if (sound) play(sound); },
    disable() {
      generation++;
      pending = enabled = false;
      for (const node of [...active]) stopNode(node);
      channels.clear();
    },
    get enabled() { return enabled; },
    get pending() { return pending; },
    get error() { return error; },
    events
  };
}
