// Native transcription of QQ抓喜鹊.swf AS2 Data, Game and Enemy plus authored
// timeline callbacks. Source hashes and line references live in README.md.
// No Flash bytecode or interpreter is shipped. Time is expressed in milliseconds.
export const MAGPIE_SOURCE = Object.freeze({
  stageWidth: 800, stageHeight: 600, fps: 25,
  gameOffsetX: -0.6, gameOffsetY: 0.05,
  timeLineInitialX: 121.25, timeLineWidth: 126.6,
  playerParentTwipX: 7988, playerParentTwipY: 6001,
});

// Authored per-frame display-list bounds, including alpha-zero zb.
import { collisionBounds } from './assets/collision-bounds.js';

export function createMagpieGame(options = {}) {
  const random = options.random || Math.random;
  let now = Number.isFinite(options.now) ? options.now : 0;
  const origin = now;
  let nextFrame = now + 40;
  let frame = 0;
  let nextId = 0;
  let timers = new Map();
  let events = [];
  let status = 'menu';
  let help = false;
  let sex = options.sex === 'qm' ? 'qm' : 'qq';
  let sessionStarted = now;
  let pointer = { x: -55.1, y: 214.7 };
  let player = { ...pointer, state: 'normal', frame: 1, childFrame: 1 };
  let portrait = { state: 'normal', frame: 1, childFrame: 1 };
  let enemies = [];
  let data;
  let spawnHandle;
  let score = 0;
  let timeUp = false;
  let timeLineX = MAGPIE_SOURCE.timeLineInitialX;
  let timebarVisible = true;
  let panelVisible = false;

  function initializeData() {
    data = {
      gameSpeed: 45, stage_Width: 700, stage_Heigh: 600, skyHight: 50,
      flyHight: 50, newEnemySpeed: 1300, newEnemySpeedUp: 100,
      fastestSpeed: 400, enemySpeedMin: 8, enemyFastestSpeed: 25,
      enemySpeedRange: 3, enemySpeedUp: 0.5, enemyNum: 0,
      goodNum: 0, badNum: 0, hitable: true, gameover: false,
      totalGameTime: 90, playTime: 0, gamePause: false,
    };
  }
  initializeData();

  function emit(type, extra = {}) { events.push({ type, at: now, ...extra }); }
  function sound(id, loops = 1) { emit('sound', { id, loops, noMultiple: [190, 195, 241, 242].includes(id) }); }
  function setTimer(fn, interval) {
    const id = ++nextId;
    timers.set(id, { id, at: now + interval, interval, fn });
    return id;
  }
  function clearTimer(id) { timers.delete(id); }
  function randomInt(max) { return Math.floor(random() * max); }
  // AVM1 MovieClip._x/_y setters store integer Twips, truncating toward zero.
  function assignedPosition(value) { const twips = Math.trunc(value * 20); return twips === 0 ? 0 : twips / 20; }
  function speedUp() {
    if (data.enemySpeedMin + data.enemySpeedUp <= data.enemyFastestSpeed) {
      data.enemySpeedMin += data.enemySpeedUp;
    }
    if (data.newEnemySpeed - data.newEnemySpeedUp >= data.fastestSpeed) {
      data.newEnemySpeed -= data.newEnemySpeedUp;
    }
  }
  function startPortrait(state) {
    if (portrait.state === state) return;
    portrait = { state, frame: state === 'catch' ? 8 : 13, childFrame: 1 };
    sound(state === 'catch' ? 190 : 195);
  }
  function playerBounds() {
    const table = collisionBounds[`player_${player.state}`];
    const b = table[(player.childFrame - 1) % table.length];
    return [b[0] + player.x, b[1] + player.y, b[2] + player.x, b[3] + player.y];
  }
  function hitTest(enemy) {
    const table = collisionBounds[enemy.type === 1 ? 'enemy_good' : 'enemy_bad'];
    const base = table[(enemy.ageFrame - 1) % table.length];
    const x1 = base[0] * enemy.xscale;
    const x2 = base[2] * enemy.xscale;
    const a = [enemy.x + Math.min(x1, x2), enemy.y + base[1], enemy.x + Math.max(x1, x2), enemy.y + base[3]];
    const b = playerBounds();
    return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
  }
  function enemyRun(enemy) {
    // AS tests the previous x and only removes an off-stage bird on the next call.
    const localX = enemy.localX;
    if (localX >= 0 && localX <= data.stage_Width) {
      if (enemy.hitable) {
        if (hitTest(enemy) && data.hitable) {
          if (enemy.type === 1) {
            data.goodNum += 1;
            score = data.goodNum;
            startPortrait('catch');
            if (player.state !== 'gotgood') player = { ...player, state: 'gotgood', frame: 6, childFrame: 1 };
          } else {
            startPortrait('hit');
            player = { ...player, state: 'gotbad', frame: 12, childFrame: 1 };
            // The original calls stopDrag on Enemy, not Player. Pointer following
            // continues while Data.hitable disables future catches and spawns.
            data.hitable = false;
            data.badNum += 1;
          }
          enemy.hitable = false;
          enemy.picFrame = 2;
          emit('collision', { id: enemy.id, enemyType: enemy.type });
        }
        enemy.dy = -Math.sin(enemy.dx) * 2;
        enemy.localX = assignedPosition(enemy.localX + enemy.dx);
        const localY = enemy.localY;
        if (localY > 100 && localY < data.stage_Heigh - 50) enemy.localY = assignedPosition(enemy.localY + enemy.dy);
        enemy.x = enemy.localX + MAGPIE_SOURCE.gameOffsetX;
        enemy.y = enemy.localY + MAGPIE_SOURCE.gameOffsetY;
        // Captured in-range Enemy.run callbacks can never change anything again:
        // hitable is never restored and x stays fixed. Keep the authored clip
        // animation, but omit these provably inert callbacks. If the final move
        // left the range, retain the next call for the original exit speed-up.
        if (!enemy.hitable && enemy.localX >= 0 && enemy.localX <= data.stage_Width) clearTimer(enemy.timer);
      }
    } else {
      speedUp();
      clearTimer(enemy.timer);
      enemy.removed = true;
    }
  }
  function addEnemy() {
    if (!data.hitable || status !== 'playing') return;
    clearTimer(spawnHandle);
    spawnHandle = setTimer(addEnemy, data.newEnemySpeed);
    let dx = data.enemySpeedMin + randomInt(data.enemySpeedRange);
    const fromLeft = randomInt(2) === 1;
    const x = fromLeft ? 0 : data.stage_Width;
    const dy = Math.cos(dx); // The authored init value is replaced at the first run.
    if (!fromLeft) dx = -dx;
    const y = data.skyHight + randomInt(data.stage_Heigh - data.flyHight - data.skyHight);
    const type = randomInt(2) === 1 ? 1 : 2;
    const enemy = {
      id: data.enemyNum, localX: x, localY: y, x: x + MAGPIE_SOURCE.gameOffsetX, y: y + MAGPIE_SOURCE.gameOffsetY,
      dx, dy, xscale: fromLeft ? -1 : 1, type,
      hitable: true, picFrame: 1, picVisible: true, ageFrame: 1, removed: false,
    };
    enemies.push(enemy);
    enemy.timer = setTimer(() => enemyRun(enemy), data.gameSpeed);
    data.enemyNum += 1;
    emit('spawn', { id: enemy.id });
  }
  function finish() {
    emit('stop-sounds');
    timeUp = true;
    status = 'ending';
    panelVisible = true;
    timers.clear();
    enemies = [];
    sound(241);
    sound(242);
    emit('ended', { score, goodNum: data.goodNum, badNum: data.badNum });
  }
  function runGame() {
    if (!data.gamePause && status === 'playing') {
      // The original property is undefined after portrait hit frame 3 unloads sjb.
      if (timebarVisible && timeLineX > 0) timeLineX = assignedPosition(timeLineX - MAGPIE_SOURCE.timeLineWidth / data.totalGameTime);
      else finish();
    }
  }
  function animationTick() {
    frame += 1;
    if (status !== 'playing') return;
    if (player.state === 'normal') player.childFrame = player.childFrame % 18 + 1;
    else if (player.state === 'gotgood') {
      player.childFrame += 1;
      if (player.childFrame >= 16) player = { ...player, state: 'normal', frame: 1, childFrame: 1 };
    } else player.childFrame = Math.min(3, player.childFrame + 1);
    if (portrait.state === 'normal') portrait.childFrame = portrait.childFrame % 24 + 1;
    else if (portrait.state === 'catch') {
      portrait.childFrame += 1;
      if (portrait.childFrame >= 14) portrait = { state: 'normal', frame: 1, childFrame: 1 };
    } else if (portrait.state === 'hit') {
      const finalFrame = sex === 'qm' ? 33 : 27;
      if (portrait.childFrame < finalFrame) {
        portrait.childFrame += 1;
        if (portrait.childFrame === 3) timebarVisible = false;
        if (portrait.childFrame === finalFrame) emit('stop-sounds');
      }
    }
    for (const enemy of enemies) {
      if (enemy.removed) continue;
      enemy.ageFrame += 1;
      if (!enemy.hitable && enemy.picVisible) {
        enemy.picFrame += 1;
        const lastFrame = enemy.type === 1 ? 20 : 4;
        if (enemy.picFrame >= lastFrame) {
          speedUp();
          // Enemy.destroy(this) unloads only pic. Its empty parent stays;
          // the source's remaining Enemy.run callbacks have no observable effect.
          enemy.picVisible = false;
        }
      }
    }
    enemies = enemies.filter(enemy => !enemy.removed);
  }
  function advance(target) {
    if (!Number.isFinite(target) || target < now) return view();
    let event;
    while (true) {
      event = null;
      for (const timer of timers.values()) {
        if (!event || timer.at < event.at || (timer.at === event.at && timer.id < event.id)) event = timer;
      }
      const due = Math.min(nextFrame, event ? event.at : Infinity);
      if (due > target) break;
      now = due;
      if (nextFrame <= (event ? event.at : Infinity)) {
        nextFrame += 40;
        animationTick();
      } else {
        event.at += event.interval;
        event.fn();
      }
    }
    now = target;
    return view();
  }
  function move(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    // Flash first converts the stage mouse Point to Twips, then applies the
    // parent inverse matrix. Parent243 is the integer-twip translation7988,6001.
    // Lock-center startDrag writes those existing local Twips directly.
    const localTwipX = Math.trunc(x * 20) - MAGPIE_SOURCE.playerParentTwipX;
    const localTwipY = Math.trunc(y * 20) - MAGPIE_SOURCE.playerParentTwipY;
    pointer = {
      x: (localTwipX + MAGPIE_SOURCE.playerParentTwipX) / 20,
      y: (localTwipY + MAGPIE_SOURCE.playerParentTwipY) / 20,
    };
    if (status === 'playing') player = { ...player, ...pointer };
  }
  function start() {
    timers = new Map();
    enemies = [];
    initializeData();
    score = 99; // DefineSprite_243 frame_2 sets this before the first catch.
    status = 'playing'; help = false; timeUp = false; panelVisible = false;
    timebarVisible = true; timeLineX = MAGPIE_SOURCE.timeLineInitialX;
    player = { ...pointer, state: 'normal', frame: 1, childFrame: 1 };
    portrait = { state: 'normal', frame: 1, childFrame: 1 };
    sessionStarted = now;
    addEnemy();
    // Preserve the source constructor's second registration: it overwrites the
    // handle created inside addEnemy, leaving the first 1300 ms timer orphaned.
    spawnHandle = setTimer(addEnemy, data.newEnemySpeed);
    setTimer(runGame, 1000);
    sound(220, 32767);
  }
  function action(name) {
    if (name === 'start' && status === 'menu') start();
    else if (name === 'replay' && status === 'ending') start();
    else if (name === 'help' && status === 'menu') help = true;
    else if (name === 'close-help') help = false;
    else if (name === 'menu' && status === 'ending') {
      status = 'menu'; help = false; timeUp = false; panelVisible = false;
      // Compatibility for the original now-offline rs.backUrl Cancel action.
      sound(147, 32767);
    }
    return view();
  }
  function view() {
    // Count the actual quantized assignments, including the final callback
    // that sees non-positive/absent line._x. A continuous width ratio is wrong.
    let secondsToBarEnd = 1;
    if (timebarVisible) {
      let x = timeLineX;
      while (x > 0) {
        x = assignedPosition(x - MAGPIE_SOURCE.timeLineWidth / data.totalGameTime);
        secondsToBarEnd += 1;
      }
    }
    return {
      status, help, sex, frame, rootFrame: status === 'menu' ? 1 : status === 'playing' ? 2 : 4,
      goodNum: data.goodNum, badNum: data.badNum, score, timeUp,
      timeLineX, timebarVisible, remainingSeconds: status === 'playing' ? secondsToBarEnd : 0,
      elapsed: now - sessionStarted, elapsedFromBoot: now - origin,
      hitable: data.hitable, panelVisible,
      player: { ...player }, portrait: { ...portrait },
      enemies: enemies.filter(enemy => !enemy.removed).map(({ timer, removed, localX, localY, ...enemy }) => ({ ...enemy })),
      newEnemySpeed: data.newEnemySpeed, enemySpeedMin: data.enemySpeedMin,
      enemyNum: data.enemyNum,
    };
  }
  sound(147, 32767);
  return { advance, move, action, view, drainEvents() { const result = events; events = []; return result; } };
}
