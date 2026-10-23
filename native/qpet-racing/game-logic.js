// Native transcription of QQ飞车.swf frame 107 and authored timeline callbacks.
// The ActionScript fixtures are test inputs only; no AS/SWF interpreter ships.
import { audioTimelineEvents } from './audio-assets.js';

export const RACING_SOURCE = Object.freeze({ width: 760, height: 420, fps: 25, frameMs: 40,
  labels: { menu: 95, help: 99, help2: 103, game: 107, end: 133 },
  ftime: [0, 25, 50, 75, 125, 175, 0], atime: [0, 0, 375, 250, 175, 125, 75],
  abomb: [0, 25, 20, 15, 10, 5, 0], abanana: [0, 60, 50, 40, 30, 20, 10],
  aimTime: [0, 5, 10, 15, 20, 25, 0] });
const STATE_FRAME = Object.freeze({ normal: 1, bomb: 10, throw: 20, hit: 30, ready: 41 });
const KEY = { ArrowUp: 38, ArrowDown: 40, ArrowLeft: 37, ArrowRight: 39, Control: 17,
  up: 38, down: 40, left: 37, right: 39, item: 17 };
// The source's zero-denominator NPC motion yields NaN: AVM1 ignores that write.
// Finite assigned pixels are truncated to Twips.
const position = (value, previous = 0) => Number.isFinite(value) ? Math.trunc(value * 20) / 20 : previous;
const scale = value => Number.isFinite(value) ? Math.fround(value / 100) * 100 : 100;

export function createRacingGame(options = {}) {
  const random = options.random || Math.random;
  const randomInt = max => Math.floor(random() * max);
  let now = Number.isFinite(options.now) ? options.now : 0;
  let nextFrame = now + 40, frame = 0, rootFrame = 1, sceneAge = 0, status = 'intro';
  let events = [], held = new Set(), serial = 0, executionSerial = 4;
  let sex = 2, score = 0, top = 6, speed = 0, timer = 4500, step = 0, gameEnding = 0;
  let ss = 0, ssa = 0, nc = 0, bs = 1, kr = 1, i1 = 2, i2 = 3, npcs = [];
  let player, entities = [], nNow, ab, ba, fb, bomb, iNow;
  let bg1 = 1, bg2 = 1, endLine = 1, endLineChangedFrame = -1, countdownFrame = 1, countdownCC;
  let roadside = [1, 1], txt = '', txt2 = '';

  function emit(type, extra = {}) { events.push({ type, at: now, ...extra }); }
  function sound(id, extra = {}) { emit('sound', { id, ...extra }); }
  function timelineSound(spriteId, currentFrame) {
    for (const event of audioTimelineEvents) if (event.spriteId === spriteId && event.frame === currentFrame)
      sound(event.id, { options: event.options, spriteId, sourceFrame: currentFrame });
  }
  timelineSound(null, 1);
  function setState(object, state) {
    if (object.state !== state) { object.state = state; object.stateFrame = STATE_FRAME[state]; object.stateAge = 0; object.animFrame = 1; object.stateChangedFrame = frame; object.animationExecution = ++executionSerial; }
  }
  function reset(construct = true) {
    gameEnding = 0; score = 0; ssa = 0; top = 6; timer = 4500; speed = 0;
    ss = 0; nc = 0; bs = 1; i1 = 2; i2 = 3; kr = 1; step = 0;
    nNow = ab = ba = fb = bomb = iNow = undefined;
    entities = []; executionSerial = 4; bg1 = bg2 = endLine = 1; endLineChangedFrame = -1; countdownFrame = 1; countdownCC = undefined;
    // Root/child frame-action ordering is recorded with the original-runtime trace.
    npcs = construct ? [0, randomInt(2), randomInt(2), randomInt(2), randomInt(2), randomInt(2)] : [];
    roadside = construct ? [randomInt(5) + 1, randomInt(6) + 1] : [1, 1];
    player = { name: 'qq', type: 'player', symbolId: 560, frame: sex, x: 380, y: 316.95,
      xscale: 69.99969482421875, yscale: 70.06683349609375, depth: 1, state: 'ready', stateFrame: 41,
      stateAge: 0, animFrame: 1, age: 0, stateChangedFrame: frame, animationExecution: 3 };
    txt = ''; txt2 = '';
  }
  reset(false);
  function enter(nextStatus, atFrame) { status = nextStatus; rootFrame = atFrame; sceneAge = 0; timelineSound(null, atFrame); }
  function action(name) {
    if (name === 'start' && status === 'menu') { sex = 2; reset(); enter('countdown', 107); emit('host', { method: 'game1' }); return true; }
    if ((name === 'help' || name === 'previous') && ['menu', 'help2'].includes(status)) { enter('help', 99); return true; }
    if (name === 'next' && status === 'help') { enter('help2', 103); return true; }
    if ((name === 'back' || name === 'replay') && ['help', 'help2', 'ended'].includes(status)) {
      if (status === 'ended') emit('stop-sounds'); enter('menu', 95); return true;
    }
    if (name === 'redeem' && status === 'ended') { emit('stop-sounds'); emit('host', { method: 'game2', score }); return true; }
    return false;
  }
  function remove(object) { if (object) { object.removed = true; object.active = false; } }
  function nextCount() { nc = nc <= 99 ? nc + 1 : 1; return nc; }
  function attach(type, name, depth) {
    // Flash permits duplicate instance names. Only an occupied depth is replaced.
    for (const old of entities) if (!old.removed && old.depth === depth) remove(old);
    const object = { serial: ++serial, execution: ++executionSerial, type, name, symbolId: { npc0: 202, npc1: 122, bombAim: 206, banana: 209, bomb: 215, itemCube: 221 }[type],
      frame: 1, age: 0, x: 0, y: 0, xscale: 100, yscale: 100, depth, active: true, removed: false,
      state: 'normal', stateFrame: 1, stateAge: 0, animFrame: 1, createdFrame: frame };
    object.animationExecution = ++executionSerial;
    entities.push(object); timelineSound(object.symbolId, 1); return object;
  }
  function swapDepth(object, value) {
    const target = Math.trunc(value), previous = object.depth;
    const occupant = [player, ...entities].find(other => other !== object && !other.removed && other.depth === target);
    if (occupant) occupant.depth = previous;
    object.depth = target;
  }
  function changeTop(amount) { top += amount; }
  function npcOut() {
    const count = nextCount(); nNow = attach(`npc${npcs[top - 1]}`, `npc${count}`, count);
    Object.assign(nNow, { count, x: randomInt(140) + 310, y: 170, xscale: scale(20), yscale: scale(20) });
    nNow.yspeedn = (speed - 180) / 10;
    nNow.xspeed = ((nNow.x - 310) * 760 / 140 - nNow.x) / 300 * nNow.yspeedn; bs = 0;
  }
  function npcIn() {
    const count = nextCount(); nNow = attach(`npc${npcs[top]}`, `npc${count}`, count);
    Object.assign(nNow, { count, x: randomInt(760), y: 470, xscale: scale(120), yscale: scale(120) });
    nNow.yspeedn = (speed - 180) / 10;
    nNow.xspeed = (nNow.x - nNow.x * 140 / 760 - 310) / 300 * nNow.yspeedn; bs = 0;
  }
  function itemOut(type, ix, iy, it) {
    const count = nextCount(); const object = attach(type, `npc${count}`, count); iNow = object;
    Object.assign(object, { count, it, yspeedn: speed / 30 });
    if (!ix) {
      object.x = randomInt(140) + 310; object.y = 170;
      object.xspeed = ((object.x - 310) * 760 / 140 - object.x) / 300 * object.yspeedn;
    } else {
      object.x = position(ix); object.y = position(iy);
      object.xspeed = ((object.x - 310) * 760 / 140 - object.x) / 300 * object.yspeedn * 1.1;
    }
    object.xscale = object.yscale = scale((object.y - 170) / 300 * 100 + 20);
    return object;
  }
  function qqThrow() { itemOut('banana', player.x - 110 * player.xscale / 100, player.y + 100 * player.xscale / 100, 'qq'); }
  function npcThrow() { if (nNow && !nNow.removed) itemOut('banana', nNow.x - 110 * nNow.xscale / 100, nNow.y + 100 * nNow.xscale / 100); }
  function bombAim() {
    ba = attach('bombAim', 'bombAim', 99999); ba.role = 'enemy-aim'; ba.x = player.x; ba.y = player.y;
    ba.steps = RACING_SOURCE.aimTime[top]; ba.step = 0;
  }
  function aimBomb() {
    ab = attach('bombAim', 'aimBomb', 100000); ab.role = 'player-aim'; ab.steps = randomInt(5) + 5; ab.step = 0;
  }
  function consume() { i1 = i2; i2 = 1; }
  function fire(x, y) {
    remove(ab); ab = undefined; sound(2, { source: 'fx2' });
    const count = nextCount(); fb = attach('bomb', 'fb', count);
    Object.assign(fb, { role: 'player-bomb', count, x: position(player.x <= 380 ? player.x - 80 : player.x + 80), y: position(player.y + 100) });
    fb.xspeed = (x - fb.x) / 10; fb.yspeed = (y - fb.y) / 10;
    fb.xscale = fb.yscale = scale((fb.y - 170) / 300 * 100 + 20);
  }
  function npcFire(x, y) {
    sound(2, { source: 'fx2' }); const count = nextCount(); bomb = attach('bomb', 'bomb', count);
    Object.assign(bomb, { role: 'enemy-bomb', count, x: randomInt(600) + 160, y: 470, xscale: scale(120), yscale: scale(120) });
    bomb.xspeed = (x - bomb.x) / 10; bomb.yspeed = (y - 470) / 10;
  }
  function input(key, down) {
    const code = typeof key === 'number' ? key : KEY[key]; if (!code) return;
    if (down) held.add(code); else held.delete(code);
    if (status !== 'playing') return;
    // Original Key listener fires for any keydown while Control is held.
    if (down && held.has(17) && i1 > 1 && player.state === 'normal' && kr === 1) {
      kr = 0;
      if (i1 === 2) { ssa = 0; setState(player, 'throw'); consume(); }
      else if (!fb) aimBomb();
    } else if (!down && code === 17) {
      kr = 1;
      if (ab && i1 === 3) {
        if (nNow && nNow.y < player.y + 100) { fire(ab.x, ab.y); consume(); }
        else { remove(ab); ab = undefined; consume(); sound(1, { source: 'fx1' }); }
      }
    }
  }
  function checkSpeed(change) {
    if (speed + change < 0) speed = 0;
    else if (speed + change < 180) speed += change;
    else { speed = 180; ss++; if (ss > RACING_SOURCE.atime[top] && !nNow && top > 1) { ss = 0; npcOut(); } }
    speed = Math.round(speed);
  }
  function endGame() {
    if (gameEnding) return;
    gameEnding = 1; speed = 0; setState(player, 'ready');
    enter('ended', 133); txt = `你获得了第${top}名，要再来一盘么？`;
    score += [0, 100, 80, 60, 40, 20, 0][top]; if (score < 0) score = 0;
    txt2 = `本次您共获得${score}分`;
    emit('game-end', { top, score });
  }
  function rootTick() {
    let roadsideRecreated = false;
    if (['normal', 'ready', 'throw'].includes(player.state)) {
      const change = held.has(38) ? 1 : held.has(40) ? -1.6 : -0.6; checkSpeed(change);
      const move = speed / 20;
      if (held.has(37)) player.x = position(Math.max(160, player.x - move), player.x);
      else if (held.has(39)) player.x = position(Math.min(610, player.x + move), player.x);
      if (speed > 0 && player.state === 'ready') setState(player, 'normal');
      else if (speed === 0) setState(player, 'ready');
    } else if (player.state !== 'throw') checkSpeed(-5);
    if (speed > 0) {
      const increment = Math.floor(speed / 46) + 1;
      bg1 = bg1 + increment <= 12 ? bg1 + increment : 1;
      const nextBackground = bg2 + increment;
      bg2 = nextBackground <= 35 ? nextBackground : 1;
      roadsideRecreated = nextBackground > 35;
      if (speed > 120 && randomInt(100) < 1) itemOut('itemCube');
    }
    if (top < 6) {
      if (speed < 180) { ssa++; if (ssa > RACING_SOURCE.ftime[top] && !nNow) { ssa = 0; npcIn(); } }
      else if (randomInt(1000) < RACING_SOURCE.abomb[top] && !ba) bombAim();
    }
    timer--; step++;
    if (timer === 8 && speed > 0) { endLine = 2; endLineChangedFrame = frame; }
    if (timer <= 0) endGame();
    // bg2 frame31 removes both roadside children. Wrapping to frame1 creates
    // them anew; their queued first-frame actions run after the root callback.
    if (roadsideRecreated) roadside = [randomInt(5) + 1, randomInt(6) + 1];
  }
  function rectangleHit(object, x, y, isPlayer = false) {
    if (!object || object.removed || (!isPlayer && !['normal', 'throw'].includes(object.state))) return false;
    const sx = object.xscale / 100, sy = object.yscale / 100;
    const hx = isPlayer ? 1.29644775390625 : 1.12359619140625, hy = isPlayer ? 1.0023345947265625 : 1.0034942626953125;
    const offset = isPlayer ? -0.05 : -0.15;
    const left = object.x - 57.85 * sx * hx, right = object.x + 57.85 * sx * hx;
    const upper = (object.y + (-21.35 * hy + offset) * sy) * 1.000946044921875 + 0.05;
    const lower = (object.y + (21.4 * hy + offset) * sy) * 1.000946044921875 + 0.05;
    return x >= left && x <= right && y >= upper && y <= lower;
  }
  function runObject(object) {
    if (object.removed || !object.active) return;
    if (gameEnding) { if (object.type.startsWith('npc')) setState(object, 'ready'); return; }
    if (object.type.startsWith('npc')) {
      bs = object.state === 'hit' || object.state === 'bomb' ? bs - 10 : 0; ss = 0; ssa = 0;
      object.yspeed = (speed - 180 - bs) / 10;
      object.x = position(object.x + object.xspeed * object.yspeed / object.yspeedn, object.x);
      object.y = position(object.y + object.yspeed, object.y);
      object.xscale = object.yscale = scale((object.y - 170) / 300 * 100 + 20);
      swapDepth(object, object.y * 100 + object.count);
      if (object.y > player.y && object.y - object.yspeed <= player.y) changeTop(-1);
      else if (object.y < player.y && object.y - object.yspeed >= player.y) changeTop(1);
      // random() is evaluated before the height/state conjuncts, every NPC tick.
      if (randomInt(100) < RACING_SOURCE.abanana[top] && object.y < 210 && object.state === 'normal') setState(object, 'throw');
      if (object.y > 470 || object.y < 170) { remove(object); nNow = undefined; }
    } else if (object.type === 'banana' || object.type === 'itemCube') {
      object.yspeed = speed / 30;
      object.x = position(object.x + object.xspeed * object.yspeed / object.yspeedn, object.x);
      object.y = position(object.y + object.yspeed, object.y);
      object.xscale = object.yscale = scale((object.y - 170) / 300 * 100 + 20);
      swapDepth(object, object.y * 100 + object.count);
      if (object.y > 470 || object.y < 170) { remove(object); iNow = undefined; }
      else if (object.frame === 1 && rectangleHit(player, object.x, object.y, true)) {
        if (object.type === 'banana') { score -= 5; setState(player, 'hit'); }
        else { sound(3, { source: 'fx3' }); if (i2 === 1 && !ab) { i2 = i1; i1 = randomInt(2) + 2; } }
        object.active = false; iNow = undefined; object.frame = 2; object.clipFrameChanged = frame;
      } else if (object.type === 'banana' && object.it === 'qq' && nNow && object.frame === 1
          && options.hitTestNPC?.(entityView(nNow), object.x, object.y)) {
        score += 5; setState(nNow, 'hit'); remove(object);
      }
    } else if (object.role === 'enemy-aim') {
      object.step++; if (object.step >= object.steps) { object.active = false; object.frame = 2; object.clipFrameChanged = frame; }
    } else if (object.role === 'player-aim') {
      object.step++;
      if (nNow && nNow.y < player.y + 100) {
        object.x = position(nNow.x + (object.step >= object.steps ? 0 : randomInt(100) - 50), object.x);
        object.y = position(nNow.y + (object.step >= object.steps ? 0 : randomInt(100) - 50), object.y);
      } else { object.x = 380; object.y = 170; }
      if (object.step > 25) { remove(object); ab = undefined; consume(); sound(1, { source: 'fx1' }); }
    } else if (object.type === 'bomb') {
      object.x = position(object.x + object.xspeed, object.x); object.y = position(object.y + object.yspeed, object.y);
      object.xscale = object.yscale = scale((object.y - 170) / 300 * 100 + 20);
      swapDepth(object, object.y * 100 + object.count);
      if (object.role === 'player-bomb') {
        if (!nNow || object.y < nNow.y - 50) { remove(object); fb = undefined; }
        else if (rectangleHit(nNow, object.x, object.y)) { score += 5; setState(nNow, 'bomb'); remove(object); fb = undefined; }
      } else if (object.y < player.y - 50) { remove(object); bomb = undefined; remove(ba); ba = undefined; }
      else if (rectangleHit(player, object.x, object.y, true)) {
        ss = 0; score -= 5; setState(player, 'bomb'); remove(object); bomb = undefined; remove(ba); ba = undefined;
      }
    }
  }
  function animationTick(object, isPlayer = false, queue = []) {
    if (object.removed) return;
    object.age++;
    if (object.stateChangedFrame !== frame) object.stateAge++;
    object.animFrame = object.stateAge + 1;
    let sprite, callbackFrame;
    if (isPlayer) {
      sprite = sex === 2 ? { bomb: 525, throw: 542, hit: 557 }[object.state] : { bomb: 465, throw: 483, hit: 497 }[object.state];
      callbackFrame = sex === 2 ? { bomb: 53, throw: 51, hit: 47 }[object.state] : { bomb: 56, throw: 51, hit: 39 }[object.state];
    } else if (object.type.startsWith('npc')) {
      sprite = object.type === 'npc0' ? { bomb: 160, throw: 182, hit: 198 }[object.state] : { bomb: 60, throw: 93, hit: 118 }[object.state];
      callbackFrame = object.type === 'npc0' ? { bomb: 53, throw: 47, hit: 38 }[object.state] : { bomb: 53, throw: 51, hit: 38 }[object.state];
    }
    if (sprite) timelineSound(sprite, object.animFrame);
    if (callbackFrame && object.animFrame === callbackFrame) {
      const generation = object.animationExecution;
      queue.push({ execution: generation, order: 1, run() {
        if (object.removed || object.animationExecution !== generation) return;
        if (object.state === 'throw') { if (isPlayer) qqThrow(); else npcThrow(); setState(object, 'normal'); }
        else setState(object, isPlayer ? 'ready' : 'normal');
      } });
    }
    if (object.type === 'bombAim' && object.frame > 1 && object.clipFrameChanged !== frame) {
      object.frame++;
      if (object.frame === 6) queue.push({ execution: object.execution, order: 1, run() { if (!object.removed) { npcFire(object.x, object.y); remove(object); } } });
    } else if (['banana', 'itemCube'].includes(object.type) && object.frame > 1 && object.clipFrameChanged !== frame) {
      object.frame++; if (object.frame === (object.type === 'banana' ? 5 : 8)) queue.push({ execution: object.execution, order: 1, run() { remove(object); } });
    }
  }
  function tick() {
    frame++; sceneAge++;
    if (status === 'intro') {
      rootFrame++;
      if (rootFrame === 95) enter('menu', 95);
      else timelineSound(null, rootFrame);
      return;
    }
    if (!['countdown', 'playing', 'ended'].includes(status)) return;
    const queue = [];
    const objects = entities.filter(object => !object.removed);
    if (status === 'countdown') {
      countdownFrame = Math.min(82, countdownFrame + 1); timelineSound(622, countdownFrame);
      if ([8, 26, 44, 62].includes(countdownFrame)) countdownCC = [8, 26, 44, 62].indexOf(countdownFrame) + 1;
      if (countdownFrame === 82) queue.push({ execution: 4, order: 1, run() { status = 'playing'; swapDepth(player, player.y * 100); emit('game-start'); } });
    }
    // AVM1 scans clips in reverse instantiation order, queues enterFrame before
    // the clip's frame action, and then drains the default action queue FIFO.
    // State children have their own creation order when goto changes the state.
    const scans = [{ execution: player.animationExecution, run() { animationTick(player, true, queue); } },
      ...objects.map(object => ({ execution: object.animationExecution, run() { animationTick(object, false, queue); } }))];
    scans.sort((a, b) => b.execution - a.execution);
    for (const scan of scans) scan.run();
    for (const object of objects) queue.push({ execution: object.execution, order: 0, run() { runObject(object); } });
    if (endLine > 1 && endLine < 9 && endLineChangedFrame !== frame) {
      endLine++; timelineSound(394, endLine);
      if (endLine === 9) queue.push({ execution: 1, order: 1, run: endGame });
    }
    queue.push({ execution: 0, order: 0, run() { if (status === 'playing') rootTick(); } });
    queue.sort((a, b) => b.execution - a.execution || a.order - b.order);
    for (const callback of queue) callback.run();
    entities = entities.filter(object => !object.removed);
  }
  function advance(to) {
    if (!Number.isFinite(to) || to < now) return;
    while (nextFrame <= to) { now = nextFrame; nextFrame += 40; tick(); }
    now = to;
  }
  function timerText() {
    const min = Math.floor(timer / 25 / 60), sec = Math.floor((timer - min * 1500) / 25), cent = timer - min * 1500 - sec * 25;
    return `时间：${String(min).padStart(2, '0')}’${String(sec).padStart(2, '0')}’${String(cent).padStart(2, '0')}`;
  }
  function entityView(object) { return { ...object, frame: object.type.startsWith('npc') ? object.stateFrame : object.frame }; }
  function view() { return { now, frame, rootFrame, rootPlaying: status === 'intro', sceneAge, status, sex, score, top, speed, timer,
    timerShow: timerText(), step, gameEnding, ss, ssa, nc, bs, kr, npcs: [...npcs], items: [i1, i2], background: { bg1, bg2, endLine, roadside: [...roadside] },
    speedRotation: speed / 180 * 180 - 90, player: { ...player }, countdownFrame, countdownCC,
    entities: entities.filter(object => !object.removed).map(entityView), text: { txt, txt2 } }; }
  return { advance, input, action, view, drainEvents() { const result = events; events = []; return result; } };
}
