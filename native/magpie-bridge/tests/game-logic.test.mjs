import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createMagpieGame, MAGPIE_SOURCE } from '../game-logic.js';
import { collisionBounds } from '../assets/collision-bounds.js';
import { createSourceOracle, independentBounds } from './source-oracle.mjs';

function rng(seed) { let s = seed >>> 0; return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296); }
function near(a, b, path = '') {
  if (typeof a === 'number' && typeof b === 'number') assert.ok(Math.abs(a - b) < 1e-8, `${path}: ${a} != ${b}`);
  else if (Array.isArray(a)) { assert.equal(a.length, b.length, path); a.forEach((value, i) => near(value, b[i], `${path}[${i}]`)); }
  else if (a && typeof a === 'object') { for (const key of Object.keys(a)) near(a[key], b[key], `${path}.${key}`); }
  else assert.equal(a, b, path);
}
function pair(seed = 1, randomFactory) {
  const native = createMagpieGame({ random: randomFactory ? randomFactory() : rng(seed) });
  const source = createSourceOracle(randomFactory ? randomFactory() : rng(seed));
  native.move(1000, 1000); source.move(1000, 1000);
  native.action('start'); source.start();
  return { native, source };
}
function compare(native, source, at) {
  const a = native.view(), b = source.view();
  const keys = ['status', 'frame', 'goodNum', 'badNum', 'score', 'timeUp', 'hitable', 'timebarVisible', 'newEnemySpeed', 'enemySpeedMin', 'enemyNum', 'player', 'portrait', 'panelVisible'];
  for (const key of keys) near(a[key], b[key], `${at}.${key}`);
  if (a.timebarVisible) near(a.timeLineX, b.timeLineX, `${at}.timeLineX`);
  const enemies = a.enemies.map(({ id, ...enemy }) => enemy);
  near(enemies, b.enemies, `${at}.enemies`);
  const relevant = events => events.filter(event => event.type === 'sound' || event.type === 'stop-sounds');
  near(relevant(native.drainEvents()), relevant(source.drainEvents()), `${at}.audio`);
}
function cycle(values) { return () => { let i = 0; return () => values[i++ % values.length]; }; }

test('production bounds match independent Flash f32/twip bounds at all 47 frames', () => {
  assert.deepEqual(collisionBounds.enemy_good, independentBounds.goodEnemy);
  assert.deepEqual(collisionBounds.enemy_bad, independentBounds.badEnemy);
  assert.deepEqual(collisionBounds.player_normal, independentBounds.playerNormal);
  assert.deepEqual(collisionBounds.player_gotgood, independentBounds.playerGotGood);
  assert.deepEqual(collisionBounds.player_gotbad, independentBounds.playerGotBad);
});

test('extracted original AS methods remain exact immutable test fixtures', () => {
  const hashes = { Data: '4b05b27dcbe7bef2f4c334ba31f7f5d650065c8a8129d1dcfcc3f6eead3ca90b', Game: '684a284f5b73afbba08c97cf1c321e270574769000fbace4b8b04f3e6da57ce7', Enemy: '3a783db8b9f5b6c79e6e4a4bf865fd84a6f1070c917b9236b2181edc8d6d5c55' };
  for (const name of ['Data', 'Game', 'Enemy']) {
    const text = readFileSync(new URL(`fixtures/${name}.as`, import.meta.url));
    assert.ok(text.length > 400);
    assert.equal(createHash('sha256').update(text).digest('hex'), hashes[name]);
    assert.ok(text.includes(Buffer.from(`class ${name} extends MovieClip`)));
  }
});

test('6000+ source callback samples: seeded spawn, movement, acceleration and natural ending', () => {
  for (const seed of [1, 17, 20060707, 20261023, 0xffffffff]) {
    const { native, source } = pair(seed);
    compare(native, source, 0);
    for (let time = 73; time < 88500; time += 73) {
      native.advance(time); source.advance(time); compare(native, source, time);
    }
    assert.equal(native.view().status, 'ending');
    assert.equal(native.view().enemySpeedMin, 25);
    assert.equal(native.view().newEnemySpeed, 400);
    assert.equal(native.view().score, 99); // Source frame 2 default survives no catches.
  }
});

test('source initial orphan timer stays active while the current spawn delay accelerates', () => {
  const { native, source } = pair(7);
  for (let at = 0; at <= 20000; at += 50) {
    native.advance(at); source.advance(at); compare(native, source, at);
  }
  assert.ok(native.view().enemyNum > 28, 'orphan registration adds birds beyond one changing timer');
  assert.equal(native.view().newEnemySpeed, 400);
});

test('public pointer catches a good magpie, follows exact off frames and speeds up on frame 20', () => {
  const { native, source } = pair(1, cycle([0, 0.9, 0.3, 0.9]));
  const bird = native.view().enemies[0];
  native.move(bird.x, bird.y); source.move(bird.x, bird.y);
  native.advance(45); source.advance(45); compare(native, source, 45);
  assert.equal(native.view().goodNum, 1);
  assert.equal(native.view().score, 1);
  assert.equal(native.view().player.state, 'gotgood');
  native.move(1000, 1000); source.move(1000, 1000);
  for (const at of [79, 80, 120, 560, 640, 759, 760, 800, 1000]) {
    native.advance(at); source.advance(at); compare(native, source, at);
  }
  assert.equal(native.view().enemies[0].picVisible, false);
  assert.equal(native.view().enemySpeedMin, 8.5);
  assert.equal(native.view().newEnemySpeed, 1200);
  assert.equal(native.view().player.state, 'normal');
});

test('bad hit preserves dragged Player, unloads time bar on hit frame 3, finishes next second', () => {
  const { native, source } = pair(1, cycle([0.2, 0.9, 0.3, 0.1]));
  const bird = native.view().enemies[0];
  native.move(bird.x, bird.y); source.move(bird.x, bird.y);
  native.advance(45); source.advance(45); compare(native, source, 45);
  assert.equal(native.view().badNum, 1);
  assert.equal(native.view().hitable, false);
  native.move(450, 250); source.move(450, 250);
  assert.equal(native.view().player.x, 450);
  for (const at of [79, 80, 119, 120, 999, 1000, 1300]) {
    native.advance(at); source.advance(at); compare(native, source, at);
    if (at === 119) assert.equal(native.view().timebarVisible, true);
    if (at === 120) assert.equal(native.view().timebarVisible, false);
    if (at === 999) assert.equal(native.view().status, 'playing');
  }
  assert.equal(native.view().status, 'ending');
  assert.equal(native.view().panelVisible, true);
  assert.equal(native.view().score, 99);
});

test('sequential public pointer catches compare source same-frame child reuse, 2/3 digit score and replay', () => {
  const { native, source } = pair(1, cycle([0.2, 0.9, 0.5, 0.9]));
  for (let at = 0; at <= 84000; at += 15) {
    const bird = native.view().enemies.find(enemy => enemy.hitable);
    if (bird) { native.move(bird.x, bird.y); source.move(bird.x, bird.y); }
    native.advance(at); source.advance(at);
    if (at % 135 === 0) compare(native, source, at);
  }
  assert.ok(native.view().goodNum >= 100, `caught ${native.view().goodNum}`);
  native.advance(85000); source.advance(85000); compare(native, source, 85000);
  assert.equal(native.view().status, 'ending');
  native.action('replay'); source.start(); compare(native, source, 85000);
  assert.equal(native.view().goodNum, 0);
  assert.equal(native.view().enemySpeedMin, 8);
  assert.equal(native.view().score, 99);
});

test('natural timer uses original width/90 subtraction and checks before subtracting', () => {
  const { native } = pair(7);
  near(MAGPIE_SOURCE.timeLineWidth, 126.6);
  assert.equal(native.view().remainingSeconds, 85);
  native.advance(1000); assert.equal(native.view().timeLineX, 119.8); assert.equal(native.view().remainingSeconds, 84);
  native.advance(83000); assert.equal(native.view().status, 'playing'); assert.ok(native.view().timeLineX > 0); assert.equal(native.view().remainingSeconds, 2);
  native.advance(84000); assert.equal(native.view().status, 'playing'); assert.equal(native.view().timeLineX, -0.5); assert.equal(native.view().remainingSeconds, 1);
  native.advance(84999); assert.equal(native.view().status, 'playing');
  native.advance(85000); assert.equal(native.view().status, 'ending'); assert.equal(native.view().remainingSeconds, 0);
});

test('menu/help/start and unavailable legacy back compatibility stay in public actions', () => {
  const game = createMagpieGame({ random: rng(1) });
  game.action('help'); assert.equal(game.view().help, true);
  game.action('close-help'); assert.equal(game.view().help, false);
  game.action('help'); game.action('start'); assert.equal(game.view().status, 'playing');
  assert.equal(game.view().help, false);
  game.advance(85000); game.action('menu'); assert.equal(game.view().status, 'menu');
  const before = game.view(); game.advance(NaN); game.move(NaN, 0); game.advance(-10);
  assert.deepEqual(game.view(), before);
});


test('public pointer uses animated twip bounds at just-inside and just-outside edges', () => {
  for (const inset of [-0.05, 0.05]) {
    const { native, source } = pair(1, cycle([0, 0.9, 0.3, 0.9]));
    const bird = native.view().enemies[0];
    const b = independentBounds.goodEnemy[1], p = independentBounds.playerNormal[1];
    const enemyRight = bird.x - b[0];
    const pointerX = enemyRight - p[0] + inset;
    native.move(pointerX, bird.y); source.move(pointerX, bird.y);
    native.advance(45); source.advance(45); compare(native, source, 45);
    assert.equal(native.view().goodNum, inset < 0 ? 1 : 0);
  }
});

test('captured bird whose final movement crosses edge still exits on the next 45ms callback', () => {
  const { native, source } = pair(1, cycle([0, 0.1, 0.3, 0.9]));
  native.advance(3915); source.advance(3915); compare(native, source, 3915);
  const bird = native.view().enemies.find(enemy => enemy.id === 0);
  near(bird.x, 3.4);
  native.move(bird.x, bird.y); source.move(bird.x, bird.y);
  native.advance(3960); source.advance(3960); compare(native, source, 3960);
  assert.equal(native.view().goodNum, 1);
  assert.ok(native.view().enemies[0].x < MAGPIE_SOURCE.gameOffsetX);
  native.move(1000, 1000); source.move(1000, 1000);
  for (const at of [4004, 4005, 4040, 4800]) {
    native.advance(at); source.advance(at); compare(native, source, at);
  }
  assert.equal(native.view().enemies.some(enemy => enemy.id === 0), false);
  assert.equal(native.view().enemySpeedMin, 8.5);
  assert.equal(native.view().newEnemySpeed, 1200);
});

test('original Enemy y assignments accumulate truncated twips and stop at the authored y guard', () => {
  const { native, source } = pair(1, cycle([0, 0.9, 0.3, 0.9]));
  native.advance(450); source.advance(450); compare(native, source, 450);
  assert.equal(native.view().enemies[0].y, 180.05); // local200 -> ten assignments of -sin(8)*2 -> local180
  native.advance(2250); source.advance(2250); compare(native, source, 2250);
  assert.equal(native.view().enemies[0].y, 100.05);
  native.advance(2295); source.advance(2295); compare(native, source, 2295);
  assert.equal(native.view().enemies[0].y, 100.05); // Source only changes y when y>100.
});

test('lock-center pointer quantizes stage Point before the integer-twip parent inverse', () => {
  const { native, source } = pair(7);
  for (const [x, y, expectedX, expectedY] of [
    [399.411, 300.049, 399.4, 300],
    [398.999, -1.01, 398.95, -1],
    [0.031, -0.031, 0, 0],
    [450.079, 250.079, 450.05, 250.05],
  ]) {
    native.move(x, y); source.move(x, y); compare(native, source, 'pointer');
    assert.equal(native.view().player.x, expectedX);
    assert.equal(native.view().player.y, expectedY);
  }
});
