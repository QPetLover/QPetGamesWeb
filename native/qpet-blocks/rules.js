// Native rules translated from COM.Main / MoveHand / Real_obj / Score / player.
// Geometry and ENTER_FRAME dispatch order are supplied by the source display-list adapter.
export const SOURCE_SHA256 = '56b57345d99360c4c0a1f41586f3b07cbe81475f07edf8751993d61a6d7d1539';
export const STAGE = Object.freeze({ width: 800, height: 600, fps: 24 });
// AVM2 DisplayObject x/y setter: finite pixels -> signed integer twips.
export function displayPosition(value){return Number.isFinite(value)?(Math.trunc(value*20)/20||0):value;}
export const TIMES = Object.freeze({ warning: 4000, autoDrop: 10000, loss: 2000 });

export function classifyAlignment(dx) {
  const d = Math.abs(dx);
  return d < 6 ? 'perfect' : d <= 16 ? 'good' : d < 30 ? 'close' : d < 90 ? 'collapse' : 'outside';
}
export function blockFamily(frame) { return frame >= 1 && frame <= 4 ? 1 : frame <= 8 && frame >= 5 ? 2 : frame <= 12 && frame >= 9 ? 3 : 0; }
export function playerFrame(level, sex, expression) {
  if (![0, 1, 2].includes(level) || ![102, 103].includes(sex) || expression < 1 || expression > 6) throw new RangeError('Unknown source player state');
  return (2 - level) * 12 + (sex === 102 ? 6 : 0) + expression;
}
export function idlePlayerFrame(level, sex, count, t) {
  const base = playerFrame(level, sex, 1);
  if (count < 10) return base;
  return ({ 1: 57, 7: 53, 13: 41, 19: 37, 25: 49, 31: 45 })[base] + (t % 4);
}

export class BlocksRules {
  constructor({ random = Math.random } = {}) {
    this.random = random;
    this.events = [];
    this.phase = 'loading';
    this.i = 0;
  }
  emit(type, detail = {}) { this.events.push({ type, ...detail }); }
  drainEvents() { const result = this.events; this.events = []; return result; }
  // Main.kkk randomizes sex then age once, retaining them on every replay.
  load() {
    this.sex = Math.trunc(this.random() * 2 + 102);
    this.level = Math.trunc(this.random() * 3);
    this.phase = 'cover';
    this.mark = 0; this.combo = 0; this.a = 1;
    this.emit('music-start', { id: 2, volume: 0.5 });
  }
  start({ handX, handY, collisionHeight } = {}) {
    if (![handX, handY, collisionHeight].every(Number.isFinite)) throw new TypeError('Source hand placement and collision height are required');
    if (this.sex === undefined) this.load();
    this.phase = 'ready'; this.i = 0; this.mark = 0; this.combo = 0; this.a = 1;
    this.bricks = [null];
    this.target = { x: 403, y: 503, width: 62, height: collisionHeight };
    this.hand = { x: displayPosition(handX), y: displayPosition(handY), vx: 5, right: true, t: 1, active: true };
    this.player = { x: 158, y: 300, right: true, down: true, t: 1, active: true, frame: playerFrame(this.level, this.sex, 1) };
    this.backgroundY = 0; this.baseY = 0; this.arrowX = undefined; this.arrowVisible = true;
    this.scoreT = 1; this.warning = false; this.waitingLoss = false;
    this.keyboardEnabled = true;
    // Main.init installs Space but not stage CLICK until the first successful stack.
    this.mouseEnabled = false;
    this.nextBlock(); this.armTimers(); this.emit('exit-enabled', {enabled:true}); this.emit('start');
  }
  nextBlock() { this.blockFrame = Math.trunc(this.random() * (this.i < 3 ? 4 : 12) + 1); this.emit('hand-block', { frame: this.blockFrame }); }
  armTimers() { this.emit('timer-start', { name: 'autoDrop', milliseconds: TIMES.autoDrop }); this.emit('timer-start', { name: 'warning', milliseconds: TIMES.warning }); }
  stopTimers() { this.emit('timer-stop', { name: 'autoDrop' }); this.emit('timer-stop', { name: 'warning' }); this.warning = false; this.emit('warning', { visible: false }); }
  expression(n) { this.player.frame = playerFrame(this.level, this.sex, n); this.emit('player-frame', { frame: this.player.frame }); }
  warn() { if (this.phase !== 'ready') return false; this.warning = true; this.emit('warning', { visible: true }); return true; }
  drop(source = 'keyboard') {
    if (this.phase !== 'ready' || source === 'mouse' && !this.mouseEnabled || source === 'keyboard' && !this.keyboardEnabled) return false;
    if (!['keyboard', 'mouse', 'timer', 'touch'].includes(source)) throw new RangeError('Unknown input');
    ++this.i; this.stopTimers(); this.phase = 'dropping'; this.mouseEnabled = false; this.keyboardEnabled = false;
    this.bricks[this.i] = { frame: this.blockFrame, x: displayPosition(this.hand.x + 200), y: displayPosition(this.hand.y + 180), ay: 0, vy: 1, rotation: 0, active: true, thrown: false, right: true, landed: false };
    this.expression(2); this.emit('sound', { id: 1 }); this.emit('hand-open');
    return true;
  }
  // Separate frame callbacks; caller keeps the actual Flash instance order.
  tickHand() {
    const h = this.hand;
    if (!h?.active) return;
    if (this.i / 10 === h.t) { h.vx = 5 + h.t; ++h.t; }
    if (h.x <= -40) h.right = true;
    if (h.x >= 440) h.right = false;
    h.x = displayPosition(h.x + (h.right ? h.vx : -h.vx));
  }
  tickPlayer() {
    const p = this.player;
    if (!p?.active) return;
    if (this.i / 10 === p.t) ++p.t;
    if (p.x <= 85) p.right = true;
    if (p.x >= 178) p.right = false;
    if (p.y <= 250) p.down = true;
    if (p.y >= 345) p.down = false;
    p.x = displayPosition(p.x + (p.right ? 1 : -1)); p.y = displayPosition(p.y + (p.down ? 1 : -1));
  }
  tickBrick(index) {
    const b = this.bricks[index];
    if (!b?.active) return;
    b.ay += b.vy; b.y = displayPosition(b.y + b.ay);
    if (b.thrown) { b.x = displayPosition(b.x + (b.right ? 30 : -30)); b.rotation += b.right ? 50 : -50; }
    if (b.y > 700) b.active = false;
  }
  // Main.crash consumes hitTestObject from original bounds, not invented circles.
  crash({ hit, landedWidth } = {}) {
    if (this.phase !== 'dropping') return 'inactive';
    const b = this.bricks[this.i];
    if (b.y > 700) {
      this.emit('sound-stop', { id: 1 }); b.active = false; this.expression(3); this.stopTimers(); this.finish();
    }
    if (this.i === 10) this.arrowVisible = false;
    if (!hit) return this.phase === 'result' ? 'miss' : 'falling';
    if (!Number.isFinite(landedWidth)) throw new TypeError('Original landed block width is required');
    this.emit('sound-stop', { id: 1 }); b.active = false;
    if (this.backgroundY <= 90) this.backgroundY += 30;
    const alignment = classifyAlignment(b.x - this.target.x);
    const family = blockFamily(b.frame);
    // Source removes crash even if a geometrically unusual hit has no rule branch.
    this.phase = 'unresolved';
    if (!family || alignment === 'outside') return 'outside';
    if (alignment === 'collapse') {
      this.stopTimers(); this.expression(4);
      const right = b.x - this.target.x > 0;
      for (const index of this.i > 1 ? [this.i, this.i - 1] : [this.i]) {
        this.bricks[index].active = true; this.bricks[index].thrown = true; this.bricks[index].right = right;
      }
      this.phase = 'collapsing'; this.waitingLoss = true;
      this.emit('exit-enabled', { enabled: false });
      this.emit('timer-start', { name: 'loss', milliseconds: TIMES.loss });
      return alignment;
    }
    b.landed = true; this.emit('block-ok', { index: this.i });
    const rise = family === 1 ? 43 : family === 2 ? 36 : 29;
    b.y = displayPosition(b.y + (family === 1 ? 18 : family === 2 ? 20 : 2));
    if (family === 1 && this.i < 3) this.target.y -= rise;
    else {
      this.baseY += rise;
      for (let index = this.i; index >= 1; --index) this.bricks[index].y = displayPosition(this.bricks[index].y + rise);
    }
    this.target.x = displayPosition(b.x); this.target.width = landedWidth - (family === 3 ? 25 : 36);
    this.arrowX = b.x; this.mouseEnabled = true; this.keyboardEnabled = true;
    this.nextBlock(); this.emit('hand-play');
    if (alignment === 'perfect') {
      if (this.i / 10 !== this.a) this.expression(5); else ++this.a;
      ++this.combo; this.emit('combo', { value: this.combo });
      this.integrateCount(); this.mark += 7 * this.combo; this.armTimers();
      this.emit('feedback', { frame: 5 });
    } else {
      this.combo = 0; this.integrateCount(); this.mark += 7; this.armTimers();
      if (this.i / 10 !== this.a) this.expression(alignment === 'good' ? 5 : 3); else ++this.a;
      this.emit('feedback', { frame: alignment === 'good' ? 3 : 4 });
    }
    this.phase = 'ready'; this.emit('score', { value: this.mark, count: this.i });
    return alignment;
  }
  integrateCount() {
    if (this.i / 10 === this.scoreT) { this.expression(6); ++this.scoreT; this.emit('speed-play'); }
  }
  lossElapsed() { if (!this.waitingLoss) return false; this.waitingLoss = false; this.finish(); return true; }
  finish() {
    this.hand.active = false; this.player.active = false; this.mouseEnabled = false; this.keyboardEnabled = false;
    this.phase = 'result'; this.emit('result', { score: this.mark });
  }
  quit() { this.stopTimers(); if (this.hand) this.hand.active = false; if (this.player) this.player.active = false; if (this.bricks?.[this.i]) this.bricks[this.i].active = false; this.mouseEnabled = false; this.keyboardEnabled = false; this.phase = 'quit'; this.emit('exit'); }
}
