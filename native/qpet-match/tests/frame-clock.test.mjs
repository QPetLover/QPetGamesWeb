import test from 'node:test';
import assert from 'node:assert/strict';
import {FrameClock} from '../frame-clock.js';

test('30fps rule callbacks stay at authored rate on common display refresh rates', () => {
  for (const refresh of [30, 60, 60.05, 90, 120, 144]) {
    const origin = 245678.125;
    const clock = new FrameClock(30, origin);
    let callbacks = 0;
    for (let frame = 1; frame <= Math.floor(refresh * 10); frame++) {
      if (clock.accept(origin + frame * 1000 / refresh)) callbacks++;
    }
    assert.ok(Math.abs(callbacks - 300) <= 1,
      `${refresh}Hz generated ${callbacks} callbacks in 10 seconds`);
  }
});

test('a long browser pause runs once at real time without replaying missed callbacks', () => {
  const clock = new FrameClock(30);
  assert.equal(clock.accept(0), false);
  assert.equal(clock.accept(1000 / 30), true);
  assert.equal(clock.accept(1000 / 30), false);
  assert.equal(clock.accept(5000), true);
  assert.equal(clock.accept(5000), false);
  assert.equal(clock.accept(5001), false);
  assert.equal(clock.accept(5000 + 1000 / 30), true);
});

test('30 authored busy callbacks compensate 990ms rather than one second', () => {
  const clock = new FrameClock(30);
  let startTime = 0, callbacks = 0;
  for (let frame = 1; frame <= 120; frame++) {
    if (clock.accept(frame * 1000 / 120)) { startTime += 33; callbacks++; }
  }
  assert.equal(callbacks, 30);
  assert.equal(startTime, 990);
});

test('reset begins a fresh browser clock and does not retain its previous frame index', () => {
  const clock = new FrameClock(30);
  assert.equal(clock.accept(10000), true);
  clock.reset(20000);
  assert.equal(clock.accept(20000), false);
  assert.equal(clock.accept(20000 + 1000 / 30), true);
});
