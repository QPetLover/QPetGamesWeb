import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {QPetMatchGame, scanBoard} from '../game-logic.js';

const originalCheck = readFileSync(new URL('./fixtures/original-m-check.as', import.meta.url), 'utf8');
const originalHeart = readFileSync(new URL('./fixtures/original-heart.as', import.meta.url), 'utf8');
const originalParent = readFileSync(new URL('./fixtures/original-parent-frame.as', import.meta.url), 'utf8');
const blank = () => Array.from({length: 10}, () => Array(6).fill(2));
const inactive = () => Array(10).fill(false);
function seeded(seed = 1) { return () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296); }

// Test-only oracle: original decompiled AS function, unchanged. AVM1 missing
// MovieClips/array rows are harmless; these tiny host mocks provide that behavior.
// This oracle and node:vm are never part of browser builds or the game engine.
function originalOracle(board, left, right) {
  const clip = (frame = 1) => ({_currentframe: frame,
    gotoAndStop(n) { this._currentframe = n; }, gotoAndPlay(n) { this._currentframe = n; }});
  const nullClip = Object.assign(clip(), {obj: clip(), effect2_mc: clip()});
  const canvas = new Proxy({_x: 201.8, _y: 13}, {get: (object, key) => key in object ? object[key] : nullClip});
  const names = board.map((row, y) => row.map((_, x) => `pipe${y * 6 + x}`));
  const missingRow = array => new Proxy(array, {get: (object, key) => key in object ? object[key] : []});
  const context = {canvas_mc: canvas, m_Name_Array: missingRow(names), m_Type_Array: missingRow(board),
    m_Clear_Array: [], cy: undefined, hart_mc: {m_Clear_Array: []}, line_sound: clip(),
    m_score: 0, m_mission_s: 0, not_ready: false};
  board.forEach((row, y) => row.forEach((_, x) => {
    canvas[names[y][x]] = {obj: clip(), effect2_mc: clip(), fy: y, fx: x,
      _x: 17.1 + x * 35.2, _y: 17.1 + y * 35.2};
  }));
  left.forEach((active, row) => { context[`start${row}`] = clip(active ? 2 : 1); });
  right.forEach((active, row) => { context[`end${row}`] = clip(active ? 2 : 1); });
  vm.runInNewContext(originalCheck + '\nm_check();', context, {timeout: 1000});
  return {cellFrames: names.map(row => row.map(name => canvas[name].obj._currentframe)),
    left: left.map((_, row) => context[`start${row}`]._currentframe === 2),
    right: right.map((_, row) => context[`end${row}`]._currentframe === 2),
    score: context.m_score, pairs: context.m_mission_s};
}

test('native scan agrees with untouched original AS on 600 seeded boards and endpoint sets', () => {
  const rng = seeded(20261022);
  for (let sample = 0; sample < 600; sample++) {
    const board = Array.from({length: 10}, () => Array.from({length: 6}, () => Math.floor(rng() * 6) + 1));
    if (sample % 3 === 0) board[sample % 10] = Array(6).fill(1);
    const left = Array.from({length: 10}, () => rng() > .5), right = Array.from({length: 10}, () => rng() > .5);
    const expected = originalOracle(board, left, right), actual = scanBoard(board, left, right);
    assert.deepEqual(actual.cellFrames, expected.cellFrames, `board ${sample}`);
    assert.deepEqual(actual.left, expected.left); assert.deepEqual(actual.right, expected.right);
    assert.equal(actual.routes.reduce((sum, route) => sum + route.bonus, 0), expected.score);
    assert.equal(actual.routes.filter(route => route.matched).length, expected.pairs);
  }
});

test('source corner types connect left→down→right and left→up→right, with exact length bonus', () => {
  const board = blank(); board[2] = [1, 1, 5, 2, 2, 2]; board[5] = [2, 2, 3, 1, 1, 1];
  const left = inactive(), right = inactive(); left[2] = true; right[5] = true;
  const result = scanBoard(board, left, right);
  assert.equal(result.routes[0].path.length, 9); assert.equal(result.routes[0].bonus, 90);
  assert.equal(result.routes[0].startRow, 2); assert.equal(result.routes[0].exitRow, 5);
  const upper = blank(); upper[5] = [1, 1, 6, 2, 2, 2]; upper[2] = [2, 2, 4, 1, 1, 1];
  assert.equal(scanBoard(upper).routes[0].exitRow, 2);
});

function fixture() {
  const game = new QPetMatchGame({rng: seeded(19)}); game.start(0);
  game.board = blank(); game.left = inactive(); game.right = inactive();
  game.heart = {x: 0, y: 0, visible: false, moving: false, index: 0, path: []};
  game.score = 0; game.displayScore = 0; game.pairs = 0; game.notReady = false;
  game._check(); game.events = []; return game;
}

test('press cycles 1→2→3→4→5→6→1; checking waits for release', () => {
  const game = fixture(); game.board[4] = [1, 1, 1, 1, 1, 6];
  game.pointerDown(4, 5); assert.equal(game.board[4][5], 1); assert.equal(game.notReady, false);
  game.pointerUp(); assert.equal(game.notReady, true); assert.equal(game.score, 0);
  assert.equal(game.pointerDown(0, 0), false);
});

test('ordinary route gives 10 per pipe on clear; matching route gives immediate extra 10 per pipe', () => {
  for (const matched of [false, true]) {
    const game = fixture(); game.board[4] = Array(6).fill(1);
    game.left[4] = matched; game.right[4] = matched; game._check();
    assert.equal(game.score, matched ? 60 : 0); assert.equal(game.pairs, matched ? 1 : 0);
    assert.equal(game.heart.path.length, 7); // Includes original undefined sentinel.
    assert.equal(game.heart.x, 184.7);
    for (let i = 1; i <= 80; i++) {
      game.step(i * 1000 / 30);
      if (game.score >= (matched ? 120 : 60)) break;
    }
    assert.equal(game.score, matched ? 120 : 60);
  }
});

test('heart position and clear trigger match unchanged sprite236 AS on straight and bent routes', () => {
  const routes = [Array.from({length: 6}, (_, col) => ({row: 4, col})),
    [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}, {row: 3, col: 2},
      {row: 4, col: 2}, {row: 5, col: 2}, {row: 5, col: 3}, {row: 5, col: 4}, {row: 5, col: 5}]];
  for (const path of routes) {
    const game = fixture(); let originalClear = 0;
    const canvas = {_x: 201.8, _y: 13};
    path.forEach(({row, col}) => { canvas[`pipe${row * 6 + col}`] = {
      _x: 17.1 + col * 35.2, _y: 17.1 + row * 35.2,
      obj: {gotoAndPlay(frame) { assert.equal(frame, 3); originalClear++; }}
    }; });
    const context = {_parent: {canvas_mc: canvas, hart_speed: 17, m_Clear_Array: []}, stop() {}};
    vm.createContext(context); vm.runInContext(originalHeart, context);
    context.m_Clear_Array = path.map(({row, col}) => `pipe${row * 6 + col}`);
    context.m_Clear_Array.push(undefined);
    context.move_now = true; context._visible = true;
    context._x = 201.8 + 17.1 - 34.2; context._y = 13 + 17.1 + path[0].row * 35.2;
    game.heart = {path: path.concat(null), moving: true, visible: true, index: 0, x: context._x, y: context._y};
    for (let frame = 1; frame <= 100; frame++) {
      context.onEnterFrame.call(context); game._stepHeart();
      assert.deepEqual([game.heart.x, game.heart.y, game.heart.index, game.heart.visible, game.heart.moving],
        [context._x, context._y, context.i, context._visible, context.move_now], `heart frame ${frame}`);
      assert.equal(game._clearPlaying[path[0].row][path[0].col], originalClear === 1);
      if (!context.move_now) break;
    }
    assert.equal(originalClear, 1);
  }
});

test('timeout is rounded percentage ==100, with elapsed time calculated before +33 compensation', () => {
  let game = fixture(); game.step(59699); assert.equal(game.status, 'playing');
  game = fixture(); game.step(59700); assert.equal(game.status, 'lost');
  game = fixture(); game.step(60600); assert.equal(game.status, 'playing'); // Source equality, no >= fix.
  game = fixture(); game.notReady = true; game.step(1000);
  assert.equal(game.elapsedSeconds, 1); assert.equal(game.startTime, 33);
  game.step(1033); assert.equal(game.elapsedSeconds, 1); assert.equal(game.startTime, 66);
});

test('disturbance consumes random draws at >7s even while connected, but does not start its animation', () => {
  const game = fixture(); let draws = 0; game.rng = () => { draws++; return .1; };
  game.notReady = true; game.step(7000); assert.equal(draws, 0);
  game.step(7001); assert.equal(draws, 2); assert.equal(game.effectTime, 7001);
  assert.ok(game.effectFrames.every(row => row.every(frame => frame === 1)));
});

test('source level transition waits for displayed score and uses 60/90/120/150/180 seconds', () => {
  const game = fixture(); game.pairs = 2; game.score = 10;
  game.step(33); assert.equal(game.displayScore, 5); assert.equal(game.level, 1);
  game.step(66); assert.equal(game.displayScore, 10); assert.equal(game.level, 1);
  game.step(99); assert.equal(game.level, 2); assert.equal(game.status, 'level');
  assert.equal(game.levelSeconds, 90); assert.equal(game.target, 4); assert.equal(game.pipesVisible, false);
  game.continueLevel(5000); assert.equal(game.startTime, 5000); assert.equal(game.effectTime, 5000);
});

test('source fifth-level game-over retry follows frame51 ending branch, distinct from new game', () => {
  const game = fixture(); game.level = 5; game.status = 'lost'; game.retry(500);
  assert.equal(game.status, 'ending'); assert.equal(game.endingFrame, 50);
  game.restart(600); assert.equal(game.status, 'playing'); assert.equal(game.level, 1);
});

test('timeline audio uses XML instance names: line_sound273, line_mc271, corn252', () => {
  let game = fixture(); game.effectFrames[3][3] = 24; game._effectStarted[3][3] = 0;
  game.step(33);
  assert.deepEqual(game.drainEvents().filter(event => event.type === 'sound').map(event => event.id), [44]);
  game = fixture(); game.board[4] = Array(6).fill(1); game.left[4] = true; game.right[4] = true;
  game._check(); assert.equal(game.lineSoundFrame, 2);
  assert.deepEqual(game.drainEvents().filter(event => event.type === 'sound').map(event => event.id), [272]);
  game.step(33); assert.equal(game.lineSoundFrame, 3); assert.equal(game.perfect, true);
  assert.equal(game.lineFrame, 1); // No script starts line_mc.
  assert.ok(!game.drainEvents().some(event => event.type === 'sound' && event.id === 270));
  game.lineSoundFrame = 50; game.step(66); assert.equal(game.lineSoundFrame, 1);
  game.lineFrame = 2; game.step(99); assert.equal(game.lineFrame, 20); assert.equal(game.perfect, false);
  game = fixture(); game.level = 3; game.target = 6; game.pairs = 6;
  game.step(33);
  assert.equal(game.cornFrame, 2);
  assert.deepEqual(game.drainEvents().filter(event => event.type === 'sound').map(event => event.id), [257]);
  game.step(66); assert.equal(game.cornFrame, 3);
});

// Isolate the original parent callback from child MovieClip callbacks. The
// original f_score and level_up bodies are unedited; only Flash host objects and
// board creation are mocked here. This deliberately does not claim child/parent
// scheduling equivalence, which requires observing the actual original player.
function parentOracle(state, nowMs, draws) {
  const actions = [], root = {};
  const clip = name => ({gotoAndStop(frame) { actions.push([name, frame]); },
    gotoAndPlay(frame) { actions.push([name, frame]); }});
  for (const [prefix, count] of [['score', 8], ['ms1_', 4], ['ms2_', 4]])
    for (let n = 1; n <= count; n++) root[`${prefix}${n}`] = clip(`${prefix}${n}`);
  Object.assign(root, {
    _root: root, m_level: state.level, m_mission: state.target, m_mission_s: state.pairs,
    m_score: state.score, now_score: state.displayScore, not_ready: state.notReady,
    level_time: state.levelSeconds, start_time: state.startTime, effect_time: state.effectTime,
    b_time: undefined,
    game_start: state.status === 'playing',
    score_sound: {start() { actions.push(['score-sound']); }},
    level_mc: Object.assign(clip('level'), {_currentframe: state.level + 1}),
    time_bar: clip('time'), game_over: clip('game-over'),
    corn_plus5: clip('corn'), levelup_mc: clip('level-up'),
    canvas_mc: new Proxy({}, {get() { return {effect2_mc: clip('disturb')}; }}),
    Math: Object.assign(Object.create(Math), {random: () => draws.shift()}),
    getTimer: () => nowMs,
    int: value => Number(value) | 0,
    init_pipe() { actions.push(['init-board']); },
    init_point(count) { actions.push(['init-points', count]); },
    m_check() { actions.push(['check']); },
    hide_pipe() { actions.push(['hide']); },
    stopAllSounds() { actions.push(['stop-sounds']); },
    play() { actions.push(['play-ending']); }
  });
  vm.runInNewContext(originalParent, root, {timeout: 1000});
  root.onEnterFrame.call(root);
  return {root, actions};
}

test('parent callbacks agree with original AS across timer, score, timeout and level boundaries', () => {
  const cases = [];
  for (const status of ['playing', 'level', 'lost'])
    for (const level of [1, 3, 4, 5])
      for (const notReady of [false, true])
        for (const completed of [false, true])
          for (const scoreLag of [0, 5, 30])
            for (const nowMs of [7000, 7001, 59699, 59700, 60600])
              cases.push({status, level, notReady, target: level * 2,
                pairs: completed ? level * 2 : 0, score: 100, displayScore: 100 - scoreLag,
                levelSeconds: level === 1 ? 60 : 60 + (level - 1) * 30,
                startTime: 0, effectTime: 0, nowMs});
  for (const state of cases) {
    const expected = parentOracle(state, state.nowMs, [.4, .7]);
    const game = fixture(), actions = [];
    Object.assign(game, state);
    game.rng = (() => { const draws = [.4, .7]; return () => draws.shift(); })();
    game._initBoard = () => actions.push(['init-board']);
    game._initPoints = count => actions.push(['init-points', count]);
    game._check = () => actions.push(['check']);
    game._stepHeart = game._stepCells = game._stepAuxiliary = () => {};
    game.step(state.nowMs);
    const original = expected.root;
    assert.deepEqual([game.level, game.target, game.pairs, game.score, game.displayScore,
      game.levelSeconds, game.startTime, game.effectTime],
      [original.m_level, original.m_mission, original.m_mission_s, original.m_score, original.now_score,
        original.level_time, original.start_time, original.effect_time], JSON.stringify(state));
    if (state.status === 'playing') assert.equal(game.elapsedSeconds, original.b_time);
    assert.deepEqual(actions, expected.actions.filter(a => ['init-board', 'init-points', 'check'].includes(a[0])));
    const events = game.drainEvents();
    assert.equal(events.some(e => e.type === 'timeout'), expected.actions.some(a => a[0] === 'game-over'));
    assert.equal(events.some(e => e.type === 'ending'), expected.actions.some(a => a[0] === 'play-ending'));
    assert.equal(events.filter(e => e.type === 'sound' && e.id === 1).length,
      expected.actions.filter(a => a[0] === 'score-sound').length);
    assert.equal(events.some(e => e.type === 'disturb-start'), expected.actions.some(a => a[0] === 'disturb'));
    assert.equal(events.some(e => e.type === 'level'), expected.actions.some(a => a[0] === 'level-up'));
  }
});

test('retry below level five reinitializes score, board, clocks and all child timeline state', () => {
  const game = fixture();
  game.level = 4; game.target = 8; game.pairs = 7; game.score = 1230;
  game.displayScore = 1210; game.status = 'lost';
  game.lineSoundFrame = 30; game.lineFrame = 19; game.cornFrame = 44;
  game.effectFrames[0][0] = 22; game.cellFrames[0][0] = 8; game._clearPlaying[0][0] = true;
  game.retry(12345);
  assert.deepEqual([game.status, game.level, game.target, game.pairs, game.score, game.displayScore,
    game.levelSeconds, game.startTime, game.effectTime, game.lineSoundFrame, game.lineFrame, game.cornFrame],
    ['playing', 1, 2, 0, 0, 0, 60, 12345, 12345, 1, 1, 1]);
  assert.ok(game.effectFrames.every(row => row.every(frame => frame === 1)));
  assert.ok(game._clearPlaying.every(row => row.every(playing => !playing)));
});
