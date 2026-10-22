// Test-only execution of extracted AS2 method bodies. This is not in any build.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const read = name => readFileSync(new URL(`fixtures/${name}`, import.meta.url), 'utf8');
export const independentBounds = JSON.parse(read('independent-bounds.json'));
function methods(source) {
  const result = {};
  for (const match of source.matchAll(/(?:static\s+)?function\s+(\w+)\(([^)]*)\)\s*\{/g)) {
    let depth = 1, end = match.index + match[0].length;
    const start = end;
    while (depth) { if (source[end] === '{') depth++; else if (source[end] === '}') depth--; end++; }
    result[match[1]] = { args: match[2], body: source.slice(start, end - 1).replace(/\band\b/g, '&&').replace(/\bsuper\(\);/g, '') };
  }
  return result;
}
function rectangle(bounds, x, y, mirror = 1) {
  return [x + Math.min(bounds[0] * mirror, bounds[2] * mirror), y + bounds[1], x + Math.max(bounds[0] * mirror, bounds[2] * mirror), y + bounds[3]];
}
export function createSourceOracle(random, startNow = 0) {
  let now = startNow, nextFrame = now + 40, id = 0, entries = [], frame = 0;
  let handles = new Map();
  function before(a, b) { return a.due < b.due || (a.due === b.due && a.id < b.id); }
  function push(value) {
    let n = entries.length; entries.push(value);
    while (n > 0) { const parent = (n - 1) >> 1; if (!before(value, entries[parent])) break; entries[n] = entries[parent]; n = parent; }
    entries[n] = value;
  }
  function pop() {
    const first = entries[0], last = entries.pop();
    if (entries.length) {
      let n = 0;
      while (n * 2 + 1 < entries.length) { let child = n * 2 + 1; if (child + 1 < entries.length && before(entries[child + 1], entries[child])) child++; if (!before(entries[child], last)) break; entries[n] = entries[child]; n = child; }
      entries[n] = last;
    }
    return first;
  }
  // Independent property host: AS method bodies assign through these accessors.
  function positionProperty(object, name, initial = 0) {
    let storedTwips = Math.trunc(initial * 20);
    Object.defineProperty(object, name, { enumerable: true, configurable: true,
      get() { return storedTwips / 20; },
      set(value) { if (Number.isFinite(value)) storedTwips = Math.trunc(value * 20); },
    });
  }
  let enemies = [], playing = false, help = false, timebarVisible = true;
  let pointer = { x: -55.1, y: 214.7 };
  let player = { state: 'normal', frame: 1, childFrame: 1, ...pointer };
  let portrait = { state: 'normal', frame: 1, childFrame: 1 };
  let events = [];
  const Data = {};
  for (const m of read('Data.as').matchAll(/static var (\w+);/g)) Data[m[1]] = undefined;
  let root = { score: 0, timeUp: false, panelVisible: false, game2() { root.panelVisible = true; } };
  const emit = (type, extra = {}) => events.push({ type, at: now, ...extra });
  const sound = (number, loops = 1) => emit('sound', { id: number, loops, noMultiple: [190, 195, 241, 242].includes(number) });
  const ctx = vm.createContext({
    Data, _root: root, random: max => Math.floor(random() * max),
    setInterval(target, method, period) { const timerId = ++id; const timer = { id: timerId, target, method, period, due: now + period }; handles.set(timerId, timer); push(timer); return timerId; },
    clearInterval(timerId) { handles.delete(timerId); },
    stopAllSounds() { emit('stop-sounds'); }, trace() {}, stop() {},
    Mouse: { show() {}, hide() {} }, sex: undefined,
  });
  function load(className) {
    const found = methods(read(`${className}.as`)); const proto = {};
    for (const [name, f] of Object.entries(found)) proto[name] = vm.runInContext(`(function(${f.args}){${f.body}})`, ctx);
    return proto;
  }
  const init = methods(read('Data.as')).init;
  Data.init = vm.runInContext(`(function(){with(Data){${init.body}}})`, ctx);
  Data.init();
  const enemyMethods = load('Enemy'), gameMethods = load('Game');
  const timeline = Object.fromEntries(['good-off-last', 'bad-off-last', 'player-good-last', 'portrait-catch-last', 'portrait-hit-unload', 'portrait-hit-last', 'start'].map(name => [name, vm.runInContext(`(function(){with(this){${read(`${name}.as`)}}})`, ctx)]));
  const digit = () => ({ _visible: true, gotoAndStop() {} });
  let parent;
  function setPortrait(state) {
    if (portrait.state === state) return;
    portrait = { state, frame: state === 'catch' ? 8 : 13, childFrame: 1 };
    sound(state === 'catch' ? 190 : 195);
  }
  function setPlayer(state) {
    if (player.state === state) return;
    player = { ...player, state, frame: state === 'gotgood' ? 6 : state === 'gotbad' ? 12 : 1, childFrame: 1 };
  }
  function enemyHit(enemy) {
    const b = enemy.enemyType === 1 ? independentBounds.goodEnemy : independentBounds.badEnemy;
    const bound = b[(enemy.ageFrame - 1) % b.length];
    const playerTable = independentBounds[player.state === 'normal' ? 'playerNormal' : player.state === 'gotgood' ? 'playerGotGood' : 'playerGotBad'];
    const pb = playerTable[(player.childFrame - 1) % playerTable.length];
    const a = rectangle(bound, enemy._x - 0.6, enemy._y + 0.05, enemy._xscale === -100 ? -1 : 1);
    const c = rectangle(pb, player.x, player.y);
    return a[0] <= c[2] && a[2] >= c[0] && a[1] <= c[3] && a[3] >= c[1];
  }
  let game;
  function start() {
    entries = []; handles = new Map(); enemies = []; playing = true; help = false; timebarVisible = true;
    Data.init(); root.score = 99; root.timeUp = false; root.panelVisible = false;
    player = { ...pointer, state: 'normal', frame: 1, childFrame: 1 };
    portrait = { state: 'normal', frame: 1, childFrame: 1 };
    const line = {};
    positionProperty(line, '_x', independentBounds.line.initialX);
    Object.defineProperty(line, '_width', { get() { return independentBounds.line.calculatedWidth; } });
    parent = {
      sjb: { line, unloadMovie() { timebarVisible = false; parent.sjb.line = { _x: undefined }; } },
      Player: { startDrag() {}, gotoAndStop: setPlayer },
      player_pic: { gotoAndStop() {}, pic: { gotoAndStop: setPortrait } },
      num1: digit(), num2: digit(), num3: digit(),
      gotoAndStop(label) { if (label === 'win') { playing = false; root.timeUp = true; sound(241); sound(242); } },
    };
    game = Object.assign({
      _parent: parent, getNextHighestDepth() { return 1; },
      removeMovieClip() { entries = []; handles = new Map(); enemies = []; },
      attachMovie(_name, name) {
        const enemy = Object.assign({
          _parent: game, _xscale: 100, ageFrame: 1, picFrame: 1, picVisible: true,
          gotoAndStop() {}, stopDrag() {}, hitTest() { return enemyHit(this); },
          unloadMovie() { this.removed = true; },
        }, enemyMethods);
        positionProperty(enemy, '_x'); positionProperty(enemy, '_y');
        enemy.pic = {
          gotoAndPlay() { enemy.picFrame = 2; },
          unloadMovie() { enemy.picVisible = false; },
          _parent: enemy,
        };
        game[name] = enemy; enemies.push(enemy);
      },
    }, gameMethods);
    parent.game = game;
    game.Game();
    timeline.start.call(parent);
    sound(220, 32767);
  }
  function animation() {
    frame++;
    if (!playing) return;
    if (player.state === 'normal') player.childFrame = player.childFrame % 18 + 1;
    else if (player.state === 'gotgood') {
      player.childFrame++;
      if (player.childFrame === 16) timeline['player-good-last'].call({ _parent: parent.Player });
    } else player.childFrame = Math.min(3, player.childFrame + 1);
    if (portrait.state === 'normal') portrait.childFrame = portrait.childFrame % 24 + 1;
    else if (portrait.state === 'catch') {
      portrait.childFrame++;
      if (portrait.childFrame === 14) timeline['portrait-catch-last'].call({ _parent: { gotoAndStop() { portrait = { state: 'normal', frame: 1, childFrame: 1 }; } } });
    } else {
      const end = 27;
      if (portrait.childFrame < end) {
        portrait.childFrame++;
        if (portrait.childFrame === 3) timeline['portrait-hit-unload'].call({ _parent: { _parent: { _parent: parent } } });
        if (portrait.childFrame === end) timeline['portrait-hit-last'].call({});
      }
    }
    for (const enemy of enemies) {
      if (enemy.removed) continue;
      enemy.ageFrame++;
      if (!enemy.hitable && enemy.picVisible) {
        enemy.picFrame++;
        if (enemy.picFrame === (enemy.enemyType === 1 ? 20 : 4)) timeline[enemy.enemyType === 1 ? 'good-off-last' : 'bad-off-last'].call(enemy.pic);
      }
    }
    enemies = enemies.filter(enemy => !enemy.removed);
  }
  function advance(to) {
    while (true) {
      while (entries.length && handles.get(entries[0].id) !== entries[0]) pop();
      const timer = entries[0];
      if (Math.min(nextFrame, timer ? timer.due : Infinity) > to) break;
      if (nextFrame <= (timer ? timer.due : Infinity)) { now = nextFrame; nextFrame += 40; animation(); }
      else { pop(); now = timer.due; timer.due += timer.period; push(timer); timer.target[timer.method](); }
    }
    now = to;
  }
  function move(x, y) {
    // Independent native-player host: Point::from_pixels -> parent inverse.
    const stage = { x: Math.trunc(x * 20), y: Math.trunc(y * 20) };
    const local = { x: stage.x - 7988, y: stage.y - 6001 };
    pointer = { x: (local.x + 7988) / 20, y: (local.y + 6001) / 20 };
    if (playing) player = { ...player, ...pointer };
  }
  function view() {
    return {
      frame, status: playing ? 'playing' : root.timeUp ? 'ending' : 'menu',
      goodNum: Data.goodNum, badNum: Data.badNum, score: root.score, timeUp: root.timeUp,
      hitable: Data.hitable, timebarVisible, timeLineX: parent ? parent.sjb.line._x : 121.25,
      newEnemySpeed: Data.newEnemySpeed, enemySpeedMin: Data.enemySpeedMin, enemyNum: Data.enemyNum,
      player, portrait, panelVisible: root.panelVisible,
      enemies: enemies.filter(enemy => !enemy.removed).map(enemy => ({
        x: enemy._x - 0.6, y: enemy._y + 0.05, dx: enemy.dx, dy: enemy.dy,
        xscale: enemy._xscale === -100 ? -1 : 1, type: enemy.enemyType,
        hitable: enemy.hitable, picFrame: enemy.picFrame, picVisible: enemy.picVisible, ageFrame: enemy.ageFrame,
      })),
    };
  }
  sound(147, 32767);
  return { advance, move, view, start, drainEvents() { const copy = events; events = []; return copy; }, getParent() { return parent; } };
}
