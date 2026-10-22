import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {audioMetadata} from '../audio-assets.js';

// Execute the actual application body. Only its four imported dependencies are
// replaced; all registered event handlers and cue management run unmodified.
// This file is test-only and must never enter the browser build.
const appURL = new URL('../app.js', import.meta.url);
const appSource = readFileSync(appURL, 'utf8');
const importPattern = /^import\s+\{[^}]+\}\s+from\s+['"][^'"]+['"];?\s*$/gm;
assert.equal([...appSource.matchAll(importPattern)].length, 4);
const executable = appSource.replace(importPattern, '');

class Surface {
  constructor() { this.listeners = new Map(); this.hidden = false; this.attributes = {}; this.textContent = ''; this.disabled = false; this.clicks = 0; this.classList = {toggle() {}}; }
  addEventListener(type, callback) {
    const callbacks = this.listeners.get(type) || [];
    callbacks.push(callback); this.listeners.set(type, callbacks);
  }
  async dispatch(type, values = {}) {
    const event = {preventDefault() {}, ...values};
    for (const callback of this.listeners.get(type) || []) await callback(event);
  }
  click() { this.clicks++; return this.dispatch('click'); }
  setAttribute(name, value) { this.attributes[name] = value; }
}

async function application({pointerEvents = true} = {}) {
  const ids = ['game','stage','loading','sound','status','start','help','close-help','replay','notice','more-games-link'];
  const elements = Object.fromEntries(ids.map(id => [id, new Surface()]));
  const rect = {left: 40, top: 70, width: 400, height: 300};
  const capture = [];
  elements.game.width = 800; elements.game.height = 600;
  elements.game.getBoundingClientRect = () => rect;
  elements.game.setPointerCapture = id => capture.push(id);
  const win = new Surface(); win.devicePixelRatio = 2;
  if (pointerEvents) win.PointerEvent = function PointerEvent() {};
  const calls = [], renders = [], frames = [];
  let now = 0;
  const state = {status: 'menu', help: false, frame: 0, goodNum: 0, badNum: 0, score: 0};
  let events = [{type: 'sound', id: 147, loops: 32767, at: 0}];
  const game = {
    advance(time) { calls.push(['advance', time]); state.frame = Math.floor(time / 40); return {...state}; },
    view() { return {...state}; },
    move(x, y) { calls.push(['move', x, y]); },
    action(name) {
      calls.push(['action', name]);
      if (name === 'help') state.help = true;
      if (name === 'close-help') state.help = false;
      if (name === 'start' || name === 'replay') {
        state.status = 'playing'; state.help = false;
        events.push({type: 'sound', id: 220, loops: 32767, at: now});
      }
      if (name === 'menu') state.status = 'menu';
    },
    drainEvents() { const result = events; events = []; return result; },
  };
  const regions = ['start','help','close-help','more-games','replay','cancel','redeem'];
  const renderer = {
    render(view) { renders.push(view); },
    hitTest(x, y) { return y >= 0 && y < 80 && x >= 0 && x < 700 ? regions[Math.floor(x / 100)] : null; },
  };
  let sound;
  class AudioDependency {
    constructor() { sound = this; this.enabled = false; this.attempts = []; this.audible = []; this.stops = 0; }
    async enable() { this.enabled = true; return true; }
    disable() { this.enabled = false; this.stop(); }
    stop() { this.stops++; }
    play(id, elapsed, options) {
      const call = {id, elapsed, loops: options.loops, noMultiple: options.noMultiple};
      this.attempts.push(call); if (this.enabled) this.audible.push(call);
    }
  }
  const errors = [];
  const context = vm.createContext({
    document: {getElementById(id) { assert.ok(elements[id], `unexpected element ${id}`); return elements[id]; }},
    window: win, performance: {now: () => now},
    requestAnimationFrame(callback) { frames.push(callback); },
    console: {error(...args) { errors.push(args); }},
    createMagpieGame() { return game; }, createRenderer: async () => renderer,
    OriginalAudio: AudioDependency, audioMetadata,
  });
  vm.runInContext(executable, context, {filename: appURL.pathname});
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(errors, [], 'application boots with its public dependencies');
  assert.equal(elements.loading.hidden, true);
  const client = (x, y) => ({clientX: rect.left + x * rect.width / 800, clientY: rect.top + y * rect.height / 600});
  return {
    elements, win, game, state, calls, renders, capture, sound, client,
    at(time) { now = time; },
    emit(event) { events.push(event); },
    async pointer(type, x, y, values = {}) {
      const target = type === 'pointerup' ? win : elements.game;
      await target.dispatch(type, {...client(x, y), button: 0, pointerId: 1, pointerType: 'touch', isPrimary: true, ...values});
    },
    touch(id, x, y) { return {identifier: id, ...client(x, y)}; },
    async frame(time) { now = time; const callback = frames.shift(); assert.ok(callback, 'RAF is scheduled'); callback(time); },
  };
}
const actions = app => app.calls.filter(call => call[0] === 'action').map(call => call[1]);
const movements = app => app.calls.filter(call => call[0] === 'move');

// These tests assert input -> public dependency effects. They do not access
// application locals, inject board state, or reproduce its handler branches.
test('actual pointer handlers map CSS coordinates and process timers before moving the active finger', async () => {
  const app = await application(); app.calls.length = 0;
  app.at(45);
  await app.pointer('pointermove', 123.5, 223.25, {pointerType: 'mouse'});
  assert.deepEqual(app.calls, [['advance',45],['move',123.5,223.25]]);
  app.calls.length = 0;
  await app.pointer('pointerdown', 50, 20, {pointerId: 11});
  const count = app.calls.length;
  await app.pointer('pointermove', 650, 300, {pointerId: 12, isPrimary: false});
  await app.pointer('pointermove', 650, 300, {pointerId: 12, isPrimary: true});
  await app.pointer('pointerdown', 650, 20, {pointerId: 12, isPrimary: false});
  await app.pointer('pointerup', 650, 20, {pointerId: 12});
  assert.equal(app.calls.length, count, 'secondary finger cannot move, release or replace the primary press');
  assert.deepEqual(app.capture, [11]);
  app.at(46); await app.pointer('pointermove', 200, 250, {pointerId: 11});
  assert.deepEqual(app.calls.slice(-2), [['advance',46],['move',200,250]]);
});

test('actual release handlers require the pressed button and pointercancel releases ownership without starting', async () => {
  const app = await application();
  await app.pointer('pointerdown', 50, 20);
  await app.pointer('pointerup', 150, 20);
  assert.deepEqual(actions(app), [], 'release on a different button does not trigger it');
  await app.pointer('pointerdown', 50, 20, {pointerId: 2});
  await app.pointer('pointercancel', 50, 20, {pointerId: 2});
  await app.pointer('pointerup', 50, 20, {pointerId: 2});
  assert.deepEqual(actions(app), []);
  await app.pointer('pointerdown', 50, 20, {pointerId: 3});
  await app.pointer('pointerup', 50, 20, {pointerId: 3});
  assert.deepEqual(actions(app), ['start'], 'a new press can start after cancellation');
});

test('actual touch fallback follows its active identifier even when another touch is first in changedTouches', async () => {
  const app = await application({pointerEvents: false});
  const dispatch = (type, touches) => app.elements.game.dispatch(type, {changedTouches: touches});
  await dispatch('touchstart', [app.touch(1,50,20)]);
  await dispatch('touchstart', [app.touch(2,650,20)]);
  app.calls.length = 0; app.at(49);
  await dispatch('touchmove', [app.touch(2,650,300), app.touch(1,125,225)]);
  assert.deepEqual(app.calls, [['advance',49],['move',125,225]]);
  const count = app.calls.length;
  await dispatch('touchend', [app.touch(2,50,20)]);
  assert.equal(app.calls.length, count, 'secondary touchend does not release the active touch');
  await dispatch('touchcancel', [app.touch(1,50,20)]);
  assert.deepEqual(actions(app), []);
  await dispatch('touchstart', [app.touch(3,50,20)]);
  await dispatch('touchend', [app.touch(3,50,20)]);
  assert.deepEqual(actions(app), ['start']);
});

test('real button handlers play original 123 on press with noMultiple and original Panel website 105', async () => {
  const app = await application();
  const before = app.sound.attempts.length;
  await app.pointer('pointerdown', 150,20);
  assert.deepEqual(actions(app), [], 'press plays sound before release executes the action');
  assert.equal(app.sound.attempts.length, before + 1);
  assert.equal(app.sound.attempts.at(-1).id,123);
  assert.equal(app.sound.attempts.at(-1).noMultiple,true);
  await app.pointer('pointerup',150,20);
  assert.deepEqual(actions(app), ['help']);
  await app.pointer('pointerdown',250,20);
  assert.equal(app.sound.attempts.filter(call => call.id === 123).length,1, 'a pending original noMultiple button sound is not duplicated');
  await app.pointer('pointerup',250,20);
  assert.deepEqual(actions(app), ['help','close-help']);
  app.state.status = 'ending'; app.at(1000); await app.frame(1000);
  await app.pointer('pointerdown',350,20);
  assert.equal(app.sound.attempts.at(-1).id,105);
  assert.equal(app.sound.attempts.at(-1).noMultiple,true);
  await app.pointer('pointerup',350,20);
  assert.equal(app.elements['more-games-link'].clicks,1);
});

test('registered help/start and original Panel actions preserve replay, local cancel and historical redeem notice', async () => {
  const app = await application();
  await app.elements.help.click(); assert.equal(app.state.help,true);
  await app.elements['close-help'].click(); assert.equal(app.state.help,false);
  await app.elements.start.click(); assert.equal(app.state.status,'playing');
  app.state.status = 'ending'; await app.frame(1000);
  await app.pointer('pointerdown',450,20); await app.pointer('pointerup',450,20);
  assert.equal(actions(app).at(-1),'replay'); assert.equal(app.state.status,'playing');
  app.state.status = 'ending'; await app.frame(2000);
  await app.pointer('pointerdown',650,20); await app.pointer('pointerup',650,20);
  assert.match(app.elements.notice.textContent,/历史积分兑换服务已不可用/);
  assert.equal(actions(app).at(-1),'replay', 'redeem never invokes a fake game/backend action');
  await app.pointer('pointerdown',550,20); await app.pointer('pointerup',550,20);
  assert.equal(actions(app).at(-1),'menu'); assert.equal(app.state.status,'menu');
  assert.equal(app.elements.notice.textContent,'');
});

test('actual sound toggle resumes both original loops at elapsed phases and stop-sounds clears every cue', async () => {
  const app = await application();
  app.at(10); await app.pointer('pointerdown',50,20); await app.pointer('pointerup',50,20);
  app.at(1000); await app.elements.sound.click();
  assert.deepEqual(app.sound.audible.map(call=>call.id),[147,220]);
  assert.deepEqual(app.sound.audible.map(call=>call.loops),[32767,32767]);
  assert.deepEqual(app.sound.audible.map(call=>call.elapsed),[1,0.99]);
  app.at(1500); await app.elements.sound.click(); assert.equal(app.sound.enabled,false);
  const count = app.sound.audible.length;
  app.at(3000); await app.elements.sound.click();
  assert.deepEqual(app.sound.audible.slice(count).map(call=>[call.id,call.elapsed]),[[147,3],[220,2.99]]);
  app.emit({type:'stop-sounds',at:4000}); await app.frame(4000);
  app.at(4500); await app.elements.sound.click();
  const stoppedCount=app.sound.audible.length;
  app.at(9000); await app.elements.sound.click();
  assert.equal(app.sound.audible.length,stoppedCount,'muting after stop-sounds cannot resurrect either loop');
  assert.ok(app.sound.stops>=3);
});

test('new catch and hit StartSound cues keep their full attacks after a delayed animation callback', async () => {
  const app = await application();
  await app.elements.sound.click();
  // The original sound190 is only 2752/11025 seconds long. Previously a RAF
  // later than this interval passed an elapsed phase that discarded it, even
  // though this is the first time the StartSound event has reached the player.
  app.emit({type:'sound',id:190,loops:1,noMultiple:true,at:45});
  await app.frame(400);
  assert.deepEqual(app.sound.audible.at(-1),{id:190,elapsed:0,loops:1,noMultiple:true});
  app.emit({type:'sound',id:195,loops:1,noMultiple:true,at:405});
  await app.frame(420);
  assert.deepEqual(app.sound.audible.at(-1),{id:195,elapsed:0,loops:1,noMultiple:true});
  // The distinct authored sound IDs can overlap; only duplicates of one ID
  // are suppressed, for their actual playback interval rather than source time.
  app.emit({type:'sound',id:190,loops:1,noMultiple:true,at:450});
  await app.frame(500);
  assert.equal(app.sound.audible.filter(cue=>cue.id===190).length,1);
  app.emit({type:'sound',id:190,loops:1,noMultiple:true,at:600});
  await app.frame(651);
  assert.equal(app.sound.audible.filter(cue=>cue.id===190).length,2);
  assert.equal(app.sound.audible.at(-1).elapsed,0);
});
