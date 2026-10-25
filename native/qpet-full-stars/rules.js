// Explicit rules from fixed 满天星 v6 payload; no ActionScript runtime.
export const SOURCE_SHA256 = 'd0fad936906e8f52b70468948d454638f61c9f1de449ca2d5ba0ec6cca7af77f';
export const PAYLOAD_SHA256 = '088f51772fa6a107855bb3c0a07db7be51f2949a18227cc243b62e84b0a852f5';
export const STAGE = Object.freeze({ width: 500, height: 400, fps: 25 });
export const displayPosition = value => Math.trunc(value * 20) / 20;
const HIT_BONUS = Object.freeze([0, 30, 100, 200, 300, 400, 500, 500, 500]);

/** Source frame callbacks are separate. Their authored two-frame loops and
 * root/child action ordering belong in the finite scene, not a 60fps physics loop.
 * Sound calls are unresolved source-object requests, not promised audible assets.
 */
export class FullStarsRules {
  constructor({ random = Math.random, writePosition = displayPosition, writeScale = value => value } = {}) {
    this.random = random; this.writePosition = writePosition; this.writeScale = writeScale; this.events = [];
    this.mouse = { x: 0, y: 0 }; this.status = 'menu';
  }
  emit(type, detail = {}) { this.events.push({ type, ...detail }); }
  drainEvents() { return this.events.splice(0); }
  soundRequest(object) { this.emit('source-sound-request', { object, method: 'start' }); }
  randomInt(max) { return Math.floor(this.random() * max); }
  // Root frame44. Positions come from its original twip display list. SWF6
  // arithmetic converts the uninitialised vx/vy/xs/ys values to numeric zero.
  start() {
    this.status = 'playing'; this.energy = 100; this.score = 0; this.speed = 1;
    this.starDelay = 80; this.gravity = .3; this.spring = .2; this.damping = .9; this.maxDistance = 56;
    this.levelDelay = 400; this.level = 0; this.generated = 0; this.finalTotal = 150; this.moonShown = false;
    this.combo = 0; this.nextDepth = 1000; this.stars = new Map(); this.lastCollected = null;
    this.ball = { x: 250, y: -40.25, vx: 0, vy: 0, width: 20, rotation: 0 };
    this.cursor = { x: 99.45, y: 153.3, oldX: 99.45, oldY: 0, scaleX: 100, scaleY: 100, xs: 0, ys: 0 };
    this.meter = { scale: 100, xs: 0, oldEnergy: 100, mode: 'running' };
    this.emit('start');
    this.emit('source-sound-request', { object: 'zloop', method: 'attachSound', linkage: 'loop' });
    this.emit('source-sound-request', { object: 'ztink', method: 'attachSound', linkage: 'tink' });
    this.emit('source-sound-request', { object: 'zblub', method: 'attachSound', linkage: 'blub' });
    this.emit('source-sound-request', { object: 'zloop', method: 'setVolume', value: 0 });
    this.emit('source-sound-request', { object: 'zloop', method: 'start', loops: 100000 });
  }
  levelUpdate() {
    this.level++;
    if (this.level > this.levelDelay) {
      this.level = 0;
      if (this.speed < 2.2) this.speed += .1;
      if (this.starDelay > 40) this.starDelay -= 2;
    }
  }
  checkHits() {
    if (this.combo > 1) {
      const rawBonus = HIT_BONUS[this.combo - 1];
      // SWF6 ToNumber(undefined)==0 for combos outside the authored table.
      this.score += rawBonus === undefined ? 0 : rawBonus;
      this.energy = Math.min(100, this.energy + this.combo * 10);
      const point = this.lastCollected || { x: 0, y: 0 };
      point.x = Math.max(50, Math.min(650, point.x)); point.y = Math.max(50, Math.min(440, point.y));
      this.lastCollected = point;
      this.emit('combo', { count: this.combo, bonus: rawBonus, x: point.x, y: point.y });
    }
    this.combo = 0;
  }
  ballMove() {
    const b = this.ball, write = this.writePosition;
    b.vy += this.gravity; b.x = write(b.x + b.vx); b.y = write(b.y + b.vy);
    const dx = this.mouse.x - b.x, dy = this.mouse.y - b.y, distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.maxDistance) {
      const angle = Math.atan2(dy, dx), tx = this.mouse.x - Math.cos(angle) * this.maxDistance, ty = this.mouse.y - Math.sin(angle) * this.maxDistance;
      b.vx += (tx - b.x) * this.spring; b.vy += (ty - b.y) * this.spring;
      b.vx *= this.damping; b.vy *= this.damping;
    }
    if (b.y > 470) {
      this.checkHits(); b.y = write(-130); b.vy = 0; b.vx = 0; b.x = write(250);
      this.energy -= 20; this.soundRequest('zblub');
    }
    if (b.y < -30) { b.y = write(-30); b.vy = 0; }
    if (b.x > 500 - b.width) { b.x = write(500 - b.width); b.vx *= -.9; }
    if (b.x < b.width) { b.x = write(b.width); b.vx *= -.9; }
  }
  ballFrame2() { this.ballMove(); let angle = (this.ball.rotation + this.ball.vx) % 360; if (angle < -180) angle += 360; else if (angle > 180) angle -= 360; this.ball.rotation = angle; }
  cursorFrame2() {
    const g = this.cursor, b = this.ball, write = this.writePosition, scale = this.writeScale;
    g.x = write(this.mouse.x + (g.x - this.mouse.x) / 1.5); g.y = write(this.mouse.y + (g.y - this.mouse.y) / 1.5);
    const dx = Math.min(20, Math.abs(g.x - g.oldX)), dy = Math.min(20, Math.abs(g.y - g.oldY));
    g.scaleX = scale(g.scaleX + (.5 * dx - .1 * dy)); g.scaleY = scale(g.scaleY + (.5 * dy - .1 * dx));
    g.oldX = g.x; g.oldY = g.y;
    if (Math.abs(b.x - g.x) < this.maxDistance && Math.abs(b.y - g.y) < this.maxDistance) {
      const distance = Math.sqrt((b.x - g.x) ** 2 + (b.y - g.y) ** 2);
      if (distance < this.maxDistance) {
        this.checkHits(); g.scaleX = scale(g.scaleX - .4 * (this.maxDistance - distance)); g.scaleY = scale(g.scaleY - .4 * (this.maxDistance - distance));
      }
    }
    g.xs = g.xs * .8 + (100 - g.scaleX) * .1; g.ys = g.ys * .8 + (100 - g.scaleY) * .1;
    g.scaleX = scale(g.scaleX + g.xs); g.scaleY = scale(g.scaleY + g.ys);
  }
  createStar(x, y) {
    if (this.generated >= this.finalTotal) return null;
    const star = { depth: this.nextDepth, x: this.writePosition(x), y: this.writePosition(y), collected: false, last: false };
    this.stars.set(star.depth, star); this.nextDepth++; this.generated++;
    if (!this.moonShown && this.generated > this.finalTotal - 65) { this.moonShown = true; this.emit('moon-play', { frame: 2 }); }
    if (this.generated === this.finalTotal) star.last = true;
    if (this.nextDepth > 1100) this.nextDepth = 1000;
    this.emit('star-create', { star }); return star;
  }
  firstStar() { return this.createStar(50 + this.randomInt(100), this.randomInt(100)); }
  nextStar() { return this.createStar(50 + this.randomInt(400), -30); }
  starFrame2(star) {
    star.y = this.writePosition(star.y + this.speed);
    if (!star.collected && Math.abs(star.x - this.ball.x) < 40 && Math.abs(star.y - this.ball.y) < 40) {
      const distance = Math.sqrt((star.x - this.ball.x) ** 2 + (star.y - this.ball.y) ** 2);
      if (distance < 40) {
        star.collected = true; this.score += 10; this.combo++; this.lastCollected = { x: star.x, y: star.y - 40 };
        this.soundRequest('ztink'); this.emit('star-shine', { star });
      }
    }
  }
  starFrame4(star) {
    if (!star.collected) { this.energy -= 10; this.soundRequest('zblub'); }
    if (star.last) this.emit('finale-start');
    this.stars.delete(star.depth); this.emit('star-remove', { star });
  }
  meterFrame2() {
    const m = this.meter;
    m.xs = m.xs * .85 + (this.energy - m.scale) * .15; m.scale = this.writeScale(m.scale + m.xs);
    if (m.oldEnergy !== this.energy) {
      this.emit('meter-flash', { frame: 2 }); m.oldEnergy = this.energy;
      if (this.energy <= 0) { m.scale = this.writeScale(1); m.mode = 'loss'; this.emit('meter-loss', { frame: 4 }); }
    }
  }
  meterFrame15() { this.status = 'end'; this.emit('root-goto', { label: 'end', play: true }); }
  // Root51 is reached by the ball's authored finale, not the last-star event.
  finishFrame51() { this.oldScore = this.score; this.bonus = 300; this.score = this.oldScore + this.bonus; this.status = 'fin'; this.emit('finish', { oldScore: this.oldScore, bonus: this.bonus, score: this.score }); }
}
