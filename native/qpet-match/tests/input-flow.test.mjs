import {test} from 'node:test';
import assert from 'node:assert/strict';
import {QPetMatchGame, FPS} from '../game-logic.js';

function seeded(seed) {
  return () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
}

// This player can only read the public view and press/release cells. It builds a
// left-to-right route with at most two corners; it cannot assign a board, score,
// level, clock or animation state. Every press is followed by the real release
// scan and one authored logic frame, so spontaneous routes and disturbances stay
// active throughout the run.
function route(from, to, turn) {
  if (from === to) return Array.from({length: 6}, (_, col) => ({row: from, col, type: 1}));
  const direction = Math.sign(to - from), cells = [];
  for (let col = 0; col < turn; col++) cells.push({row: from, col, type: 1});
  cells.push({row: from, col: turn, type: direction > 0 ? 5 : 6});
  for (let row = from + direction; row !== to; row += direction) cells.push({row, col: turn, type: 2});
  cells.push({row: to, col: turn, type: direction > 0 ? 3 : 4});
  for (let col = turn + 1; col < 6; col++) cells.push({row: to, col, type: 1});
  return cells;
}

function nextPress(view) {
  let best = null;
  view.left.forEach((activeLeft, left) => {
    if (!activeLeft) return;
    view.right.forEach((activeRight, right) => {
      if (!activeRight) return;
      for (let turn = 1; turn <= 4; turn++) {
        const cells = route(left, right, turn);
        const cost = cells.reduce((total, cell) => total + (cell.type - view.board[cell.row][cell.col] + 6) % 6, 0);
        if (!best || cost < best.cost) best = {cost, cells};
      }
    });
  });
  if (!best) return null;
  // Construct from the right end toward the left, reducing incidental ordinary
  // completions while still letting the original scan decide every connection.
  return best.cells.slice().reverse().find(cell => view.board[cell.row][cell.col] !== cell.type) || null;
}

test('public inputs complete all five original levels, ending and new-game restart', () => {
  const game = new QPetMatchGame({rng: seeded(20261023)});
  let now = 0, ticks = 0, presses = 0, lastScore = 0, playingTicks = 0, disturbanceFrames = 0;
  const completed = [], transitions = [];
  game.start(now);
  const advance = () => {
    const before = game.view();
    now += 1000 / FPS; ticks++;
    const after = game.step(now);
    assert.ok(after.score >= lastScore, `score decreased at ${ticks}`);
    assert.equal(after.score % 10, 0);
    assert.ok(Number.isFinite(after.elapsedSeconds));
    assert.ok(after.elapsedSeconds >= 0);
    lastScore = after.score;
    if (before.status === 'playing') playingTicks++;
    if (after.effectFrames.some(row => row.some(frame => frame > 1))) disturbanceFrames++;
    if (before.status === 'playing' && ['level', 'ending'].includes(after.status)) {
      assert.equal(before.pairs, before.target);
      assert.equal(before.displayScore, before.score);
      assert.equal(before.notReady, false);
      completed.push({level: before.level, pairs: before.pairs, target: before.target,
        score: before.score, levelSeconds: before.levelSeconds, elapsedSeconds: before.elapsedSeconds});
    }
    if (after.status !== before.status) transitions.push([before.status, after.status]);
    assert.notEqual(after.status, 'lost', `unexpected timeout: ${JSON.stringify(after)}`);
    return after;
  };
  for (; ticks < 30000 && game.view().status !== 'won';) {
    const view = game.view();
    if (view.status === 'level') {
      assert.equal(game.continueLevel(now), true);
      assert.equal(game.view().status, 'playing');
      continue;
    }
    if (view.status === 'playing' && !view.notReady &&
        view.cellFrames.every(row => row.every(frame => frame <= 2)) && view.pairs < view.target) {
      const cell = nextPress(view);
      if (cell) {
        assert.equal(game.pointerDown(cell.row, cell.col), true);
        game.pointerUp(); presses++;
      }
    }
    advance();
  }
  assert.equal(game.view().status, 'won', `stalled after ${ticks} frames`);
  assert.deepEqual(completed.map(x => [x.level, x.pairs, x.target]),
    [[1, 2, 2], [2, 4, 4], [3, 6, 6], [4, 8, 8], [5, 10, 10]]);
  assert.deepEqual(completed.map(x => x.levelSeconds), [60, 90, 120, 150, 180]);
  assert.ok(completed.every(x => x.elapsedSeconds < x.levelSeconds));
  assert.equal(transitions.filter(([, to]) => to === 'level').length, 4);
  assert.equal(transitions.filter(([, to]) => to === 'ending').length, 1);
  assert.equal(game.view().endingFrame, 193);
  assert.equal(game.view().score, game.view().displayScore);
  assert.ok(game.view().score >= 30 * 6 * 20, '30 valid pairs each contribute at least six pipes');
  assert.ok(presses > 0 && playingTicks > 0 && disturbanceFrames > 0);
  const summary = {seed: 20261023, ticks, presses, playingTicks, disturbanceFrames, score: game.view().score,
    elapsedMs: now, levels: completed};
  console.log(`INPUT_FLOW ${JSON.stringify(summary)}`);
  game.restart(now);
  const restarted = game.view();
  assert.equal(restarted.status, 'playing'); assert.equal(restarted.level, 1);
  assert.equal(restarted.levelSeconds, 60); assert.equal(restarted.target, 2);
  assert.equal(restarted.displayScore, 0);
  // A fresh random board is allowed to connect immediately, so score/pairs need
  // not be zero after start; this assertion preserves that original behavior.
  assert.ok(restarted.score >= 0 && restarted.pairs >= 0);
  assert.equal(restarted.elapsedSeconds, 0);
});
