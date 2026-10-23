import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createRacingGame } from '../game-logic.js';
import { createRacingOracle } from './source-oracle.mjs';

function seeded(seed) { return () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }; }
function ready(seed = 31) {
  const game = createRacingGame({ random: seeded(seed) }); game.advance(3760); game.action('start'); game.advance(7000); game.drainEvents(); return game;
}
function comparable(v) {
  return { score: v.score, top: v.top, speed: v.speed, timer: v.timer, timerShow: v.timerShow, step: v.step,
    gameEnding: v.gameEnding, ss: v.ss, ssa: v.ssa, nc: v.nc, bs: v.bs, kr: v.kr, npcs: v.npcs,
    items: v.items, background: v.background, player: { x: v.player.x, y: v.player.y, state: v.player.state },
    entities: v.entities.map(o => ({ name: o.name, type: o.type, x: o.x, y: o.y, xscale: o.xscale, yscale: o.yscale,
      state: o.state, count: o.count, frame: o.frame, depth: o.depth })), text: v.text };
}
function compare(seed, ticks, actions) {
  const game = ready(seed), oracle = createRacingOracle(seeded(seed));
  oracle.tick(); // Countdown frame 82 installs the root handler before its queued call.
  for (let f = 1; f <= ticks; f++) {
    for (const [key, down] of actions(f, game.view())) { game.input(key, down); oracle.input(key, down); }
    game.advance(7000 + f * 40); oracle.tick();
    assert.deepEqual(comparable(game.view()), oracle.view(), `source divergence at playing frame ${f}`);
    assert.deepEqual(game.drainEvents().filter(e => e.source?.startsWith('fx')).map(e => e.id), oracle.drainSounds(), `AS sound divergence at ${f}`);
  }
  return game;
}
test('root scene navigation and exact authored countdown gates game-start', () => {
  const game = createRacingGame({ random: () => .5 });
  game.advance(3720); assert.equal(game.view().rootFrame, 94); assert.equal(game.action('start'), false);
  game.advance(3760); assert.equal(game.view().rootFrame, 95); assert.equal(game.view().rootPlaying, false);
  assert.equal(game.action('help'), true); assert.equal(game.view().rootFrame, 99);
  assert.equal(game.action('next'), true); assert.equal(game.view().rootFrame, 103);
  game.action('back'); game.action('start'); game.advance(6960);
  assert.equal(game.view().countdownFrame, 81); assert.equal(game.view().step, 0);
  game.advance(7000); assert.equal(game.view().status, 'playing'); assert.equal(game.view().timer, 4499);
  const count = game.drainEvents().filter(e => e.spriteId === 622);
  assert.deepEqual(count.map(e => [e.sourceFrame, e.id]), [[2, '604'], [20, '604'], [38, '604'], [56, '3']]);
});
test('stationary full three-minute game matches unchanged AS2 every frame including result', () => {
  const game = compare(7, 4500, () => []);
  assert.equal(game.view().status, 'ended'); assert.equal(game.view().top, 6); assert.equal(game.view().score, 0);
});
test('acceleration, braking, steering and coasting match source in 1000 frame trace', () => {
  const game = compare(12345, 1000, f => {
    const actions = [];
    if (f === 1) actions.push([38, true], [37, true]);
    if (f === 120) actions.push([37, false], [39, true]);
    if (f === 190) actions.push([38, false], [40, true]);
    if (f === 240) actions.push([40, false]);
    if (f === 330) actions.push([39, false], [38, true]);
    if (f === 800) actions.push([38, false]);
    return actions;
  });
  assert.ok(game.view().player.x >= 160 && game.view().player.x <= 610);
});
test('banana animation, held Control guard, aim failure and rearming match source', () => {
  compare(739, 700, f => {
    const events = [];
    if (f === 1) events.push([38, true]);
    if ([20, 100, 150, 290, 320, 450].includes(f)) events.push([17, true]);
    if ([50, 130, 180, 310, 340, 470].includes(f)) events.push([17, false]);
    return events;
  });
});
test('maximum-speed NPC spawning, zero-denominator positions and random ordering match source', () => {
  const game = compare(119, 1500, f => f === 1 ? [[38, true]] : []);
  assert.ok(game.view().entities.some(e => e.type.startsWith('npc')));
});
test('complete attack run matches AS: bombs hit, rivals change rank, player is hit, result bonus applies', () => {
  let hold = 0, successes = 0, injuries = 0, ranks = new Set(), previousScore = 0;
  const game = compare(719, 4499, (f, view) => {
    ranks.add(view.top);
    if (view.score > previousScore) successes++;
    if (view.score < previousScore) injuries++;
    previousScore = view.score;
    const actions = f === 1 ? [[38, true]] : [];
    if (!hold && view.player.state === 'normal' && (view.items[0] === 2 || view.items[0] === 3 && view.entities.some(o => o.type.startsWith('npc') && o.y < 416.95))) {
      actions.push([17, true]); hold = 1;
    } else if (hold) { hold++; if (hold === 12) { actions.push([17, false]); hold = 0; } }
    return actions;
  });
  assert.ok(successes > 1); assert.ok(injuries > 1); assert.ok(ranks.size >= 2);
  assert.equal(game.view().timer, 2); assert.equal(game.view().status, 'ended');
  assert.equal(game.view().top, 4); assert.equal(game.view().score, 45);
});
test('reachable nc wrap keeps the old NPC when a new item reuses its instance name', () => {
  const game = createRacingGame({ random: () => 0 }); game.advance(3760); game.action('start'); game.advance(7000);
  const oracle = createRacingOracle(() => 0); game.input(38, true); oracle.input(38, true);
  oracle.input(38, false); oracle.tick(); oracle.input(38, true);
  let duplicateSeen = false;
  for (let f = 1; f <= 600; f++) {
    game.advance(7000 + f * 40); oracle.tick();
    const view = game.view(); assert.deepEqual(comparable(view), oracle.view(), `wrap trace frame ${f}`);
    const sameName = view.entities.filter(o => o.name === 'npc35');
    if (sameName.length > 1) { duplicateSeen = true; assert.ok(sameName.some(o => o.type === 'npc0' && o.y === 170)); }
  }
  assert.equal(duplicateSeen, true);
  assert.ok(game.view().entities.some(o => o.type === 'npc0' && o.name === 'npc35'));
});
test('root menu music starts once, game init does not stop it, replay stops then restarts', () => {
  const game = ready(5); game.advance(187000);
  assert.equal(game.view().status, 'ended'); game.drainEvents(); game.action('replay');
  assert.deepEqual(game.drainEvents().map(e => [e.type, e.id]), [['stop-sounds', undefined], ['sound', '356']]);
});
test('original throw sound/frame, deferred banana creation and 26-frame aim expiry stay distinct', () => {
  const game = createRacingGame({ random: () => .5 }); game.advance(3760); game.action('start'); game.advance(7000);
  game.input(38, true); game.advance(7040); game.drainEvents(); game.input(17, true);
  assert.deepEqual(game.drainEvents(), []); // fx4 has no authored linkage.
  game.advance(7040 + 32 * 40); assert.equal(game.view().entities.some(o => o.type === 'banana'), false);
  game.advance(7040 + 33 * 40);
  assert.deepEqual(game.drainEvents().filter(e => e.type === 'sound').map(e => [e.id, e.sourceFrame]), [['71', 34]]);
  game.advance(7040 + 50 * 40); assert.equal(game.view().entities.some(o => o.type === 'banana'), true);
  game.input(17, false); game.input(17, true);
  assert.equal(game.view().entities.some(o => o.role === 'player-aim'), true);
  assert.deepEqual(game.drainEvents().filter(e => e.type === 'sound').map(e => e.id), ['205']);
  game.advance(9040 + 25 * 40); assert.equal(game.view().entities.some(o => o.role === 'player-aim'), true);
  game.advance(9040 + 26 * 40); assert.equal(game.view().entities.some(o => o.role === 'player-aim'), false);
  assert.deepEqual(game.view().items, [1, 1]);
  assert.deepEqual(game.drainEvents().filter(e => e.source === 'fx1').map(e => e.id), [1]);
});
test('invalid time updates do not advance the simulation and held controls retain source key priority', () => {
  const game = ready(5), before = game.view(); game.advance(NaN); game.advance(-1);
  assert.deepEqual(game.view(), before);
  game.input(38, true); game.input(40, true); game.input(37, true); game.input(39, true); game.advance(7040);
  assert.equal(game.view().speed, 1); assert.equal(game.view().player.x, 379.95);
});
test('bg2 frame31 removes roadside clips and wrap to frame1 consumes two new random values', () => {
  let calls = 0; const values = [.1, .2, .3, .4, .5, .6, .7, .8, .9];
  const game = createRacingGame({ random: () => values[calls++ % values.length] });
  game.advance(3760); assert.equal(calls, 0); game.action('start'); game.advance(7000);
  assert.equal(calls, 7); assert.deepEqual(game.view().background.roadside, [4, 5]);
  game.input(38, true); game.advance(7000 + 34 * 40);
  assert.equal(game.view().background.bg2, 35); assert.equal(calls, 7);
  game.advance(7000 + 35 * 40);
  assert.equal(game.view().background.bg2, 1); assert.equal(calls, 9);
  assert.deepEqual(game.view().background.roadside, [5, 6]);
});
test('native public inputs reproduce independently recorded original-runtime speed/timer, wraps and NaN NPC retention', () => {
  const observed = JSON.parse(readFileSync(new URL('fixtures/original-runtime-observations.json', import.meta.url)));
  // A constant source selects the observed x338 for the first rival. The
  // original RNG sequence is not replayed; random item/NPC states are excluded.
  const game = createRacingGame({ random: () => .2 }); game.advance(3760); game.action('start'); game.input(38, true);
  const wraps = []; let previousBG = 1;
  for (const [step, speed, timer] of observed.root) {
    if (step === 371) game.input(38, false);
    game.advance(7000 + (step - 1) * 40);
    const view = game.view(); assert.deepEqual([view.step, view.speed, view.timer], [step, speed, timer]);
    if (view.background.bg2 === 1 && previousBG !== 1) wraps.push(step);
    previousBG = view.background.bg2;
  }
  assert.deepEqual(wraps, observed.roadsideWrapAfterRootStep);
  assert.equal(observed.firstNPC.step, '254');
  assert.equal(observed.npcAfter.length, 116);
  for (const [, x, y] of observed.npcAfter) assert.deepEqual([x, y], [338, 170]);
  const npc = game.view().entities.find(o => o.type.startsWith('npc'));
  assert.deepEqual([npc.x, npc.y], [338, 170]);
});
test('independent exported frame fixtures remain byte-exact', () => {
  const manifest = JSON.parse(readFileSync(new URL('fixtures/source-hashes.json', import.meta.url)));
  for (const [name, expected] of Object.entries(manifest)) assert.equal(createHash('sha256').update(readFileSync(new URL(`fixtures/${name}`, import.meta.url))).digest('hex'), expected, name);
});
