import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import { BlocksRules,displayPosition } from '../rules.js';
const mainAS = readFileSync(new URL('./fixtures/Main.as', import.meta.url), 'utf8');
const fixedSource=JSON.parse(readFileSync(new URL('./fixtures/source.json',import.meta.url)));
for(const[name,expected]of Object.entries(fixedSource.files)){const bytes=readFileSync(new URL('./fixtures/'+name,import.meta.url));assert.equal(bytes.length,expected.bytes);assert.equal(createHash('sha256').update(bytes).digest('hex'),expected.sha256);}
function sourceMethod(source, name) {
  const needle = new RegExp('function ' + name + '\\([^)]*\\)\\s*:\\s*\\w+\\s*\\{');
  const match = needle.exec(source); assert.ok(match, name);
  let depth = 1, end = match.index + match[0].length;
  for (; depth; ++end) { if (source[end] === '{') ++depth; else if (source[end] === '}') --depth; }
  return source.slice(match.index + match[0].length, end - 1).replace(/\bvar\s+(\w+)\s*:\s*(?:\*|\w+)/g, 'var $1');
}
const crashBody = sourceMethod(mainAS, 'crash');
function oracle({ i, frame, dx, combo, a, backgroundY }) {
  const timerCalls = [], reactions = [], context = {};
  const brick = () => ({ x: displayPosition(403 + dx), y: 470, width: 108, currentFrame: frame, mc: { gotoAndStop() {} }, Delete() {}, gameOver(first, right) { this.thrown = true; this.right = right; }, hitTestObject() { return true; } });
  const bricks = Array.from({ length: i + 1 }, () => brick());
  let nextFrame;
  Object.assign(context, {
    _brick: bricks, _i: i, _mc: { x: 403, y: 503, width: 62 }, _background: { y: backgroundY }, _Back1: { y: 0 },
    _number: combo, a, _mark: 21, _Level: 1, _sex: 102,
    _ply: Object.fromEntries([2, 3, 4, 5, 6].map(n => ['biaoqing' + n, () => reactions.push(n)])),
    _Hand: { hand_in: { gotoAndStop(value) { nextFrame = Math.trunc(value); } }, play() {} },
    _score: { darrow: { x: 402.4, visible: true }, double_hit() {}, integration() { if (i / 10 === 1) reactions.push(6); }, integration2() {}, play_text: { currentFrame: 1, gotoAndStop() {}, mc: { play() {} } } },
    _time1: { removeEventListener() {}, stop() {} }, time_over: { visible: false, gotoAndStop() {} },
    stage: { addEventListener() {} }, drop_channel: { stop() {} }, removeEventListener() {},
    trace() {}, soundAndExit: { _stop() {} },
    timerover() {}, timerover1() {}, LOSS() {}, OnKeyDown() {}, OnKeyDown2() {}, crash() {},
    Event: { ENTER_FRAME: 'enterFrame' }, MouseEvent: { CLICK: 'click' }, KeyboardEvent: { KEY_DOWN: 'keyDown' }, TimerEvent: { TIMER: 'timer' },
    Math: Object.assign(Object.create(Math), { random: () => 0.625 }),
    Timer: class { constructor(delay) { timerCalls.push(delay); } addEventListener() {} start() {} },
  });
  let random = 1; Object.defineProperty(context, '_random', { get() { return random; }, set(v) { random = Math.trunc(v); } });
  vm.runInNewContext(crashBody, context, { timeout: 1000 });
  return { mark: context._mark, combo: context._number, a: context.a, target: context._mc, backgroundY: context._background.y, baseY: context._Back1.y, bricks: bricks.slice(1).map(b => ({ x: b.x, y: b.y, thrown: !!b.thrown, right: b.right ?? true })), arrowVisible: context._score.darrow.visible, nextFrame, reaction: reactions.at(-1), timerCalls };
}
function nativeState(options) {
  const { i, frame, dx, combo, a, backgroundY } = options;
  const g = new BlocksRules({ random: () => 0.625 }); g.load(); g.start({ handX: -39.95, handY: 19.9, collisionHeight: 1 }); g.drainEvents();
  g.i = i; g.mark = 21; g.combo = combo; g.a = a; g.backgroundY = backgroundY; g.phase = 'dropping';
  g.bricks = Array.from({ length: i + 1 }, () => ({ x: displayPosition(403 + dx), y: 470, frame, ay: 0, vy: 1, active: true, thrown: false, right: true }));
  g.crash({ hit: true, landedWidth: 108 }); const events = g.drainEvents();
  return { mark: g.mark, combo: g.combo, a: g.a, target: { x: g.target.x, y: g.target.y, width: g.target.width }, backgroundY: g.backgroundY, baseY: g.baseY, bricks: g.bricks.slice(1).map(b => ({ x: b.x, y: b.y, thrown: b.thrown, right: b.right })), arrowVisible: g.arrowVisible, nextFrame: events.find(e => e.type === 'hand-block')?.frame, reaction: events.filter(e => e.type === 'player-frame').map(e => ((e.frame - 1) % 6) + 1).at(-1), timerCalls: events.filter(e => e.type === 'timer-start').map(e => e.milliseconds) };
}

test('unmodified Main.crash AS body agrees for every shape, boundary, direction and camera branch', () => {
  let count = 0;
  for (const i of [1, 2, 3, 9, 10, 11, 20]) for (let frame = 1; frame <= 12; ++frame) for (const dx of [-90, -89.99, -30, -29.99, -16.01, -16, -6, -5.99, 0, 5.99, 6, 16, 16.01, 29.99, 30, 89.99, 90]) for (const backgroundY of [0, 90, 120]) {
    const options = { i, frame, dx, combo: 3, a: 1, backgroundY };
    assert.deepEqual(nativeState(options), oracle(options), JSON.stringify(options)); ++count;
  }
  assert.equal(count, 4284);
});

test('unmodified hand Move body agrees over 6000 source ticks including speed boundaries', () => {
  const move = sourceMethod(readFileSync(new URL('./fixtures/MoveHand.as', import.meta.url), 'utf8'), 'Move');
  const g = new BlocksRules(); g.load(); g.start({ handX: -39.95, handY: 19.9, collisionHeight: 1 });
  const source = { hand_in: { x: -39.95 }, vx: 5, t: 1, _move: true, parent: { _i: 0 } };
  let sourceTwips=-799;Object.defineProperty(source.hand_in,'x',{get(){return sourceTwips/20;},set(v){sourceTwips=Math.trunc(v*20);},configurable:true});
  const fn = vm.runInNewContext('(function(){' + move + '})', source);
  for (let tick = 0; tick < 6000; ++tick) {
    g.i = Math.floor(tick / 75); source.parent._i = g.i; fn.call(source); g.tickHand();
    assert.deepEqual({ x: g.hand.x, vx: g.hand.vx, t: g.hand.t, right: g.hand.right }, { x: source.hand_in.x, vx: source.vx, t: source.t, right: source._move });
  }
});
