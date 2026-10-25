import { TraysRules, STAGE } from './rules.js';
import { instances, symbolKinds, buttonBounds } from './assets/instances.js';
import { timelineSounds, leafBounds, morphBounds } from './assets/scene-data.js';

const IDENTITY = [1, 0, 0, 1, 0, 0];
export const ROLE_IDS = Object.freeze({ MM1: '201', GG1: '392', MM2: '640', MM3: '760', GG2: '980', GG3: '1055' });
const selectedRoots = new Set([...Object.values(ROLE_IDS), '1072', '1120', '1140', '1144']);
const roleStops = { '201': [1, 29, 110], '392': [1, 29, 110], '640': [1, 29, 110], '760': [1, 29, 111], '980': [1, 29, 110], '1055': [1, 113] };
const endFrames = { '79': 92, '99': 89, '146': 50, '270': 92, '287': 89, '339': 50, '467': 34, '509': 44, '537': 43, '670': 34, '702': 44, '721': 43, '816': 34, '852': 44, '876': 43, '994': 34, '1019': 44, '1037': 43 };
const sounds = new Map();
for (const event of timelineSounds) {
  const key = event.timeline + ':' + event.frame;
  if (!sounds.has(key)) sounds.set(key, []);
  sounds.get(key).push(event);
}
export function multiply(a, b) { return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]; }
export function transformBox(box, matrix) {
  if (!box) return null;
  const points = [];
  for (const x of [box[0], box[2]]) for (const y of [box[1], box[3]]) points.push([matrix[0] * x + matrix[2] * y + matrix[4], matrix[1] * x + matrix[3] * y + matrix[5]]);
  return [Math.min(...points.map(p => p[0])), Math.min(...points.map(p => p[1])), Math.max(...points.map(p => p[0])), Math.max(...points.map(p => p[1]))];
}
function union(boxes) { const valid = boxes.filter(Boolean); return valid.length ? [Math.min(...valid.map(b => b[0])), Math.min(...valid.map(b => b[1])), Math.max(...valid.map(b => b[2])), Math.max(...valid.map(b => b[3]))] : null; }
export const contains = (box, x, y) => !!box && x >= box[0] && x <= box[2] && y >= box[1] && y <= box[3];

/** This game's finite authored drawing timelines. All game decisions live in
 * rules.js and the named frame callbacks below; no SWF parser/actions execute. */
export class TraysGame {
  constructor({ random = Math.random, onEvent = () => {}, now = 0 } = {}) {
    this.now = now; this.lastTime = now; this.accumulator = 0; this.uid = 0;
    this.onEvent = onEvent; this.status = 'help'; this.frame = 0;
    this.pointer = { x: 0, y: 0, down: false }; this.soundEnabled = true;
    this.delayDeadlines = new Map(); this.nextFireAt = Infinity; this.projectiles = new Map();
    this.rules = new TraysRules({ random, writeX: value => Math.trunc(value * 20) / 20, hitDish: (x, y) => this.hitDish(x, y), hitRole: (x, y) => this.hitRole(x, y) });
    this.root = this.make('main', null, { name: 'root' });
    this.goto(this.root, 2, false);
    this.bed = this.named(this.root, 'bed'); this.bed.visible = false;
    this.mute = this.named(this.root, 'gameSoundControl');
    this.help = this.attach('1120', { x: 15.2, y: 26.7, name: 'help' });
  }
  emit(event) { this.onEvent({ ...event, frame: this.frame, now: this.now }); }
  make(id, parent, row = {}) {
    const node = { id: String(id), uid: ++this.uid, parent, frame: 1, playing: true, children: [], visible: true, removed: false, matrix: [...(row.matrix || IDENTITY)], color: row.color, name: row.name, depth: row.depth ?? 0, born: row.born ?? 1, ratio: row.ratio || 0, dynamic: !!row.dynamic };
    this.sync(node); this.frameEvent(node); return node;
  }
  sync(node) {
    if (!instances[node.id]) return;
    const old = node.children; const next = [];
    for (const row of instances[node.id].frames[node.frame - 1] || []) {
      let child = old.find(c => !c.dynamic && !c.removed && c.id === row.id && c.depth === row.depth && c.born === row.born);
      if (!child) child = this.make(row.id, node, row);
      else { child.matrix = [...row.matrix]; child.color = row.color; child.name = row.name; child.ratio = row.ratio || 0; }
      next.push(child);
    }
    for (const child of old) if (child.dynamic && !child.removed) next.push(child); else if (!next.includes(child)) this.remove(child);
    node.children = next;
  }
  remove(node) {
    if (!node || node.removed) return;
    node.removed = true;
    for (const child of node.children) this.remove(child);
    if (node.parent) node.parent.children = node.parent.children.filter(c => c !== node);
  }
  named(node, name) { return node?.children.find(child => !child.removed && child.name === name); }
  goto(node, frame, play = false) {
    if (!node || node.removed) return;
    frame = typeof frame === 'string' ? instances[node.id]?.labels[frame] : frame;
    if (!frame) return;
    node.playing = play;
    if (node.frame === frame) return;
    node.frame = frame; this.sync(node); this.frameEvent(node);
  }
  attach(id, { x = 0, y = 0, name = '', parent = this.root } = {}) {
    const node = this.make(id, parent, { matrix: [1, 0, 0, 1, x * 20, y * 20], name, dynamic: true });
    parent.children.push(node); return node;
  }
  frameEvent(node) {
    for (const event of sounds.get(node.id + ':' + node.frame) || []) this.emit({ type: 'sound', id: event.id, options: event.options, timeline: node.id, sourceFrame: node.frame, owner: node.uid });
    if (node.id === 'main' || (roleStops[node.id] || []).includes(node.frame) || ['1171', '1206', '1140'].includes(node.id) && node.frame === 1) node.playing = false;
    if (node.id === '1171' && node.frame === 16) { this.rules.bedFrame16(); this.consumeRules(); }
    if (node.id === '1140' && node.frame === 42) this.remove(node);
    if (endFrames[node.id] === node.frame) {
      node.playing = false;
      let ancestor = node.parent;
      while (ancestor && !Object.values(ROLE_IDS).includes(ancestor.id)) ancestor = ancestor.parent;
      this.remove(ancestor);
    }
  }
  consumeRules() {
    for (const event of this.rules.drainEvents()) {
      if (event.type === 'sound') this.emit(event);
      else if (event.type === 'role-label') this.goto(this.role, event.name, event.play);
      else if (event.type === 'start') {
        this.remove(this.help); this.remove(this.over); this.remove(this.role);
        for (const node of this.projectiles.values()) this.remove(node);
        this.projectiles.clear(); this.containerVisible = true;
        this.role = this.attach(ROLE_IDS[event.kind], { name: 'role', y: 460 });
        this.goto(this.role, 'stop', false);
        this.setDishCount(); this.nextFireAt = this.now + event.timerDelay;
        this.status = 'playing'; this.bed.visible = false;
        this.emit(event);
      } else if (event.type === 'delay') this.delayDeadlines.set(event.id, this.now + event.milliseconds);
      else if (event.type === 'timer-delay') this.nextFireAt = this.now + event.milliseconds;
      else if (event.type === 'bed-play') { this.bed.matrix[4] = event.x * 20; this.bed.matrix[5] = event.y * 20; this.bed.visible = true; this.goto(this.bed, 2, true); }
      else if (event.type === 'bullet-create') {
        const bullet = this.attach('1140', { x: event.bullet.x, y: event.bullet.y, name: 'bullet' });
        bullet.visible = this.containerVisible; bullet.bullet = event.bullet;
        this.projectiles.set(event.bullet, bullet);
      } else if (event.type === 'bullet-impact') this.goto(this.projectiles.get(event.bullet), 2, true);
      else if (event.type === 'game-over') {
        this.status = 'over'; this.containerVisible = false; this.nextFireAt = Infinity;
        for (const node of this.projectiles.values()) this.remove(node);
        this.projectiles.clear(); this.over = this.attach('1072', { name: 'over' });
        this.resultMessage = event.message; this.emit(event);
      }
    }
    this.applyPose();
  }
  setDishCount() {
    const anchor = this.named(this.role, 'dishs');
    if (!anchor) return;
    for (const child of [...anchor.children]) if (child.dynamic) this.remove(child);
    for (let i = 0; i < this.rules.role.numDishs; i++) this.attach('1144', { x: i * 7, y: 10, name: 'dish' + i, parent: anchor });
    this.dishCount = this.rules.role.numDishs;
  }
  applyPose() {
    if (this.role && !this.role.removed && this.rules.role) {
      const pose = this.rules.role;
      this.role.matrix[4] = pose.x * 20; this.role.matrix[5] = pose.y * 20; this.role.visible = pose.visible;
      if (this.dishCount !== pose.numDishs) this.setDishCount();
      const anchor = this.named(this.role, 'dishs');
      if (anchor) {
        anchor.visible = pose.dishVisible;
        const m = anchor.matrix, sx = Math.hypot(m[0], m[1]), sy = sx ? (m[0] * m[3] - m[1] * m[2]) / sx : Math.hypot(m[2], m[3]);
        const angle = pose.rotation * Math.PI / 180;
        anchor.matrix = [Math.cos(angle) * sx, Math.sin(angle) * sx, -Math.sin(angle) * sy, Math.cos(angle) * sy, m[4], m[5]];
        anchor.color = pose.warning ? [128, 0, 0, 0, 0, 0, 0, 153.6] : null;
      }
    }
    for (const [bullet, node] of this.projectiles) { node.matrix[4] = bullet.x * 20; node.matrix[5] = bullet.y * 20; }
  }
  localBox(node) {
    if (!node || node.removed) return null;
    if (instances[node.id]) return union(node.children.filter(child => !child.removed).map(child => transformBox(this.localBox(child), child.matrix)));
    if (morphBounds[node.id]) { const [a, b] = morphBounds[node.id], ratio = node.ratio / 65535; return a.map((value, i) => value + (b[i] - value) * ratio); }
    return leafBounds[node.id] || buttonBounds[node.id]?.map(value => value * 20) || null;
  }
  worldMatrix(node) { return node.parent ? multiply(this.worldMatrix(node.parent), node.matrix) : node.matrix; }
  bounds(node) { const box = transformBox(this.localBox(node), this.worldMatrix(node)); return box?.map(value => value / 20) || null; }
  hitDish(x, y) { return !!this.role && !this.role.removed && contains(this.bounds(this.named(this.role, 'dishs')), x, y); }
  hitRole(x, y) { return !!this.role && !this.role.removed && contains(this.bounds(this.role), x, y); }
  start() { this.rules.start(); this.consumeRules(); }
  keyDown(code) { this.rules.keyDown(code); this.consumeRules(); }
  keyUp(code) { this.rules.keyUp(code); this.consumeRules(); }
  action(name) {
    if ((name === 'start' && this.status === 'help') || (name === 'replay' && this.status === 'over')) { this.emit({ type: 'sound', id: '4', options: {} }); this.start(); return true; }
    if (name === 'mute') { this.soundEnabled = !this.soundEnabled; this.goto(this.mute, this.soundEnabled ? 1 : 2, false); this.emit({ type: 'mute', enabled: this.soundEnabled }); return true; }
    if (name === 'exit') { this.emit({ type: 'exit' }); return true; }
    return false;
  }
  pollTimers(now) {
    this.now = now;
    for (const [id, due] of [...this.delayDeadlines]) if (due <= now) { this.delayDeadlines.delete(id); this.rules.completeDelay(id); this.applyPose(); }
    if (this.rules.active && this.nextFireAt <= now) { this.rules.fireTimer(); this.nextFireAt = now + this.rules.timeDelay; this.consumeRules(); }
  }
  tick() {
    this.frame++;
    const nodes = [];
    const collect = node => { if (node.removed) return; nodes.push(node); for (const child of node.children) collect(child); };
    collect(this.root);
    for (const node of nodes) {
      if (node.removed || !node.playing || !instances[node.id] || instances[node.id].frames.length === 1) continue;
      node.frame = node.frame % instances[node.id].frames.length + 1; this.sync(node); this.frameEvent(node);
    }
    // Finite native callbacks. Child frame advancement and root callbacks stay
    // separate from the independent 500ms / projectile Timers.
    for (const [bullet, node] of this.projectiles) if (!node.removed && !bullet.outside) this.rules.tickBullet(bullet);
    this.rules.tickRoot(); this.consumeRules();
  }
  advance(now) {
    if (!Number.isFinite(now)) return;
    this.pollTimers(now);
    this.accumulator += Math.min(250, Math.max(0, now - this.lastTime)); this.lastTime = now;
    while (this.accumulator >= 1000 / STAGE.fps) { this.accumulator -= 1000 / STAGE.fps; this.tick(); }
  }
  resume(now) { this.lastTime = now; this.accumulator = 0; }
  drawingFactor(id) { return id === 'main' || selectedRoots.has(id) ? 1 / 20 : 1; }
  kind(id) { return id === 'main' ? 'main' : symbolKinds[id]; }
  snapshot() { return { status: this.status, frame: this.frame, role: this.rules.role ? { ...this.rules.role } : null, score: this.rules.totalScore ?? 0, bullets: this.rules.bullets?.length ?? 0, roleFrame: this.role?.frame, nextFireAt: this.nextFireAt, pendingDelays: this.delayDeadlines.size }; }
}
