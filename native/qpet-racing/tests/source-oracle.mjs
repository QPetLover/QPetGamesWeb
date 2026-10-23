// Offline only: execute the unchanged exported AS2 frame functions in node:vm.
// This host models MovieClip properties/timeline scheduling, not game formulas.
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
const fixture = name => readFileSync(new URL(`fixtures/${name}`, import.meta.url), 'utf8');
const LABEL = { normal: 1, bomb: 10, throw: 20, hit: 30, ready: 41 };
function coordinate(object, key, value = 0) {
  let twips = Math.trunc(value * 20);
  Object.defineProperty(object, key, { enumerable: true, configurable: true,
    get: () => twips / 20, set(v) { if (Number.isFinite(v)) twips = Math.trunc(v * 20); } });
}
export function createRacingOracle(random = Math.random, options = {}) {
  let frame = 0, ended = false, objects = [], held = new Set(), context, eventLog = [], executionSerial = 4, playerExecution = 3, postActions = [];
  const sound = id => ({ attachSound() {}, start() { if (id <= 3) eventLog.push(id); } });
  let playerState = 'ready', playerAge = 0, playerChanged = -1;
  function swap(object, value) {
    const target = Math.trunc(value), previous = object.depth;
    const other = [player, ...objects].find(o => o !== object && !o.removed && o.depth === target);
    if (other) other.depth = previous;
    object.depth = target;
  }
  const player = { _xscale: 69.99969482421875, _yscale: 70.06683349609375, depth: 1, swapDepths(d) { swap(player, d); }, gotoAndStop() {} };
  coordinate(player, '_x', 380); coordinate(player, '_y', 316.95);
  function playerGoto(state) { if (playerState !== state) { playerState = state; playerAge = 0; playerChanged = frame; playerExecution = ++executionSerial; } }
  player.qq = { _parent: player, gotoAndStop: playerGoto };
  function originalRectangle(x, y, object, isPlayer) {
    if (!isPlayer && !['normal', 'throw'].includes(object.ns)) return false;
    const m = [object._xscale / 100, object._yscale / 100, object._x, object._y];
    const h = isPlayer ? [1.29644775390625, 1.0023345947265625, -.05] : [1.12359619140625, 1.0034942626953125, -.15];
    // Inverse of root107 movers × instance × hidden hitter transforms.
    const localX = (x - m[2]) / m[0] / h[0];
    const localY = ((y - .05) / 1.000946044921875 - m[3]) / m[1];
    const ly = (localY - h[2]) / h[1];
    return localX >= -57.85 && localX <= 57.85 && ly >= -21.35 && ly <= 21.4;
  }
  player.hitter = { hitTest(x, y) { return originalRectangle(x, y, player, true); } };
  const movers = { qq: player, attachMovie(type, name, depth) {
    for (const o of objects) if (!o.removed && o.depth === depth) o.removeMovieClip();
    let objectState = 'normal', objectAge = 0;
    const o = { type, name, depth, execution: ++executionSerial, _parent: movers, _currentframe: 1, _xscale: 100, _yscale: 100, age: 0, stateChanged: -1,
      state: 'normal',
      gotoAndStop(state) { this._currentframe = typeof state === 'number' ? state : LABEL[state];
        if (typeof state === 'string' && objectState !== state) { objectState = state; o.state = state; objectAge = 0; o.stateChanged = frame; o.animationExecution = ++executionSerial; } },
      gotoAndPlay(f) { o._currentframe = f; o.clipChanged = frame; o.playing = true; },
      swapDepths(d) { swap(o, d); },
      removeMovieClip() { o.removed = true; o.onEnterFrame = undefined; },
      hitTest(x, y) { return options.npcHit?.(x, y, o) || false; },
      ageState() { if (o.stateChanged !== frame) objectAge++; return objectAge; },
    };
    o.animationExecution = ++executionSerial;
    Object.defineProperty(o, 'stateAge', { get: () => objectAge });
    coordinate(o, '_x'); coordinate(o, '_y');
    Object.defineProperties(o, { _X: { get: () => o._x }, _Y: { get: () => o._y } });
    for (const key of ['_xscale', '_yscale']) {
      let value = 100;
      Object.defineProperty(o, key, { enumerable: true, get: () => value, set(v) { if (Number.isFinite(v)) value = Math.fround(v / 100) * 100; } });
    }
    o.hitter = { hitTest(x, y) { return originalRectangle(x, y, o, false); } };
    movers[name] = o; objects.push(o); return o;
  } };
  player._parent = movers;
  const background = count => ({ _currentframe: 1, _totalframes: count, gotoAndStop(f) { this._currentframe = f; }, stop() {} });
  const bg1 = background(12), bg2 = background(35);
  bg2.gotoAndStop = function(f) {
    const previous = this._currentframe; this._currentframe = f;
    if (f === 1 && previous !== 1) postActions.push(() => { roadside[0] = ctx.random(5) + 1; roadside[1] = ctx.random(6) + 1; });
  };
  bg1.endLine = { _currentframe: 1, gotoAndPlay(f) { this._currentframe = f; this.changed = frame; this.playing = true; } };
  const emptyClip = { _y: undefined, hitTest() { return false; }, hitter: { hitTest() { return false; } } };
  const ctx = {
    sex: 2, movers, bg1, bg2, item1: { gotoAndStop() {} }, item2: { gotoAndStop() {} },
    speedArr: {}, topShow: { gotoAndStop() {} }, trace() {}, stop() {}, a1: {},
    random: max => Math.floor(random() * max),
    Key: { isDown: key => held.has(key), getCode: () => ctx.lastKey, addListener() {}, removeListener() {} },
    Sound: function() { const id = (ctx.soundNumber = (ctx.soundNumber || 0) + 1); return sound(id); },
    avm1Clip(value) { return value || emptyClip; },
    gotoAndStop(label) { if (label === '结束') { ended = true; vm.runInContext(fixture('frame-133.as'), context); } },
  };
  movers._parent = ctx;
  context = vm.createContext(ctx);
  // AVM1 reads/calls through undefined produce undefined, whereas JavaScript
  // throws. Only these dereferences need a host adapter; formulas stay unchanged.
  vm.runInContext(fixture('frame-107.as').replace(/nNow\.(hitTest|_y|hitter)/g, 'avm1Clip(nNow).$1'), context);
  const roadside = [ctx.random(5) + 1, ctx.random(6) + 1];
  ctx.gameStart();
  function input(key, down) {
    ctx.lastKey = key; if (down) held.add(key); else held.delete(key);
    if (!ended) (down ? ctx.kd.onKeyDown : ctx.kd.onKeyUp)();
  }
  function callback(name, target) {
    vm.runInContext(`(function(){with(this){${fixture(name)}}})`, context).call(target);
  }
  function playerAnimation(queue) {
    if (playerChanged !== frame) playerAge++;
    const callbackFrame = { bomb: 53, throw: 51, hit: 47 }[playerState];
    if (playerAge + 1 !== callbackFrame) return;
    const generation = playerExecution, state = playerState;
    queue.push({ execution: generation, order: 1, run() {
      if (playerExecution !== generation) return;
      if (state === 'throw') {
        const wrapper = { _parent: player.qq };
        callback('sprite-542-frame_51.as', { _parent: wrapper });
      } else callback(`sprite-${state === 'bomb' ? 525 : 557}-frame_${callbackFrame}.as`, { _parent: player.qq });
    } });
  }
  function objectAnimation(o, queue) {
    o.age++;
    const age = o.ageState() + 1;
    if (o.type.startsWith('npc')) {
      let n, f;
      if (o.ns === 'throw') { n = o.type === 'npc0' ? 182 : 93; f = o.type === 'npc0' ? 47 : 51; }
      else if (o.ns === 'hit') { n = o.type === 'npc0' ? 198 : 118; f = 38; }
      else if (o.ns === 'bomb') { n = o.type === 'npc0' ? 160 : 60; f = 53; }
      if (age === f) {
        const generation = o.animationExecution, state = o.ns;
        queue.push({ execution: generation, order: 1, run() {
          if (o.removed || o.animationExecution !== generation) return;
          if (state === 'throw') callback(`sprite-${n}-frame_${f}.as`, { _parent: { _parent: o } });
          else callback(`sprite-${n}-frame_${f}.as`, { _parent: o });
        } });
      }
    } else if (o.playing && o.clipChanged !== frame) {
      o._currentframe++;
      const end = { bombAim: 6, banana: 5, itemCube: 8 }[o.type];
      if (o._currentframe === end) queue.push({ execution: o.execution, order: 1, run() { if (!o.removed) callback(`sprite-${{ bombAim: 206, banana: 209, itemCube: 221 }[o.type]}-frame_${end}.as`, o); } });
    }
  }
  function tick() {
    frame++;
    const current = objects.filter(o => !o.removed), queue = [];
    playerAnimation(queue); for (const o of current) if (!o.removed) objectAnimation(o, queue);
    for (const o of current) queue.push({ execution: o.execution, order: 0, run() { if (!o.removed && o.onEnterFrame) o.onEnterFrame(); } });
    const line = bg1.endLine;
    if (line.playing && line.changed !== frame && line._currentframe < 9) {
      line._currentframe++; if (line._currentframe === 9) queue.push({ execution: 1, order: 1, run() { ctx.gameEnd(); } });
    }
    queue.push({ execution: 0, order: 0, run() { if (ctx.onEnterFrame) ctx.onEnterFrame(); } });
    queue.sort((a, b) => b.execution - a.execution || a.order - b.order);
    for (const action of queue) action.run();
    for (const action of postActions) action(); postActions = [];
    objects = objects.filter(o => !o.removed);
  }
  function view() { return {
    score: ctx.score, top: ctx.top, speed: ctx.speed, timer: ctx.timer, timerShow: ctx.timerShow, step: ctx.step,
    gameEnding: ctx.gameEnding, ss: ctx.ss, ssa: ctx.ssa, nc: ctx.nc, bs: ctx.bs, kr: ctx.kr,
    npcs: [...ctx.npcs], items: [ctx.i1, ctx.i2],
    background: { bg1: bg1._currentframe, bg2: bg2._currentframe, endLine: bg1.endLine._currentframe, roadside },
    player: { x: player._x, y: player._y, state: playerState },
    entities: objects.map(o => ({ name: o.name, type: o.type, x: o._x, y: o._y, xscale: o._xscale, yscale: o._yscale,
      state: o.state, count: o.count, frame: o._currentframe, depth: o.depth })),
    text: { txt: ctx.txt || '', txt2: ctx.txt2 || '' },
  }; }
  return { tick, input, view, context: ctx, drainSounds() { const a = eventLog; eventLog = []; return a; } };
}
