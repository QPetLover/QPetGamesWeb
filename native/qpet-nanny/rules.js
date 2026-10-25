// Explicit rules translated from the fixed Main/Bonus/PopKeys AS3 classes.
// Rendering supplies original display-list bounds and Flash hitTestObject.
export const SOURCE_SHA256 = '5068d5488c397e5a6272c8c8e62ae28db6347780c9178fcfea3dae646fa076bc';
export const STAGE = Object.freeze({ width: 800, height: 600, fps: 25 });
export const ROLES = Object.freeze(['GG1', 'GG2', 'GG3', 'MM1', 'MM2', 'MM3']);
export const DESTINATIONS = Object.freeze({
  90: { x: 80, y: 537, type: 'red', guest: 'keyZ' },
  88: { x: 238, y: 544, type: 'blue', guest: 'keyX' },
  67: { x: 396, y: 540, type: 'orang', guest: 'keyC' },
  86: { x: 554, y: 542, type: 'green', guest: 'keyV' },
  40: { x: 715.5, y: 514.8, type: 'trash', guest: 'trash' },
});

export class NannyRules {
  constructor({ random = Math.random, roleWidth, bonusWidth, collision, writePosition = value => value } = {}) {
    this.random = random;
    this.roleWidth = roleWidth;
    this.bonusWidth = bonusWidth;
    this.collision = collision;
    this.writePosition = writePosition;
    this.events = [];
    this.keys = { left: false, right: false, cState: 0 };
    this.active = false;
    this.nextBonusId = 1;
    this.nextBatchId = 1;
    this.batches = [];
    this.effects = [];
  }

  emit(type, detail = {}) { this.events.push({ type, ...detail }); }
  sound(name) { this.emit('sound', { name }); }
  drainEvents() { const events = this.events; this.events = []; return events; }
  position(object, axis, value) { object[axis] = this.writePosition(value); }

  start() {
    const sex = Math.round(this.random() + 102) === 102 ? 'GG' : 'MM';
    return this.startRole(sex + Math.trunc(this.random() * 3 + 1));
  }

  startRole(kind) {
    if (!ROLES.includes(kind)) throw new RangeError('Unknown original role');
    this.role = { kind, x: 397, y: 412, currentLabel: 'stop', visible: true };
    this.hp = 100;
    this.hpScale = 1;
    this.combo = 0;
    this.vy = 8;
    this.spawnDelay = 2000;
    this.difficultyRunning = true;
    this.score = 0;
    this.scoreText = '0';
    this.comboText = '0';
    this.falling = [];
    this.stack = [];
    this.basketContainer = { x: 397, y: 412, attached: true };
    this.active = true;
    this.result = null;
    this.emit('start', { kind, spawnDelay: this.spawnDelay, difficultyDelay: 5000 });
    return kind;
  }

  keyDown(code) {
    if (!this.active) return;
    if (code === 37) this.keys.left = true;
    else if (code === 39) this.keys.right = true;
    else this.keys.cState = code;
  }

  keyUp(code) {
    if (!this.active) return;
    if (code === 37) this.keys.left = false;
    else if (code === 39) this.keys.right = false;
    else this.keys.cState = 0;
  }

  label(name) {
    if (this.role.currentLabel === name) return;
    this.role.currentLabel = name;
    this.emit('role-label', { name });
  }

  updateScore() { this.scoreText = String(this.score); }
  updateHp() { this.hpScale = this.hp > 100 ? 1 : this.hp / 100; }

  createBonus(index) {
    const type = index < 4 ? ['red', 'blue', 'green', 'orange'][index]
      : ['trash1', 'trash2', 'trash3', 'prize'][Math.trunc(this.random() * 4)];
    return {
      id: this.nextBonusId++, type, vy: this.vy,
      x: this.writePosition(this.random() * 500 + 50), y: 0,
      scale: 2, falling: true, attached: true, decide: true,
    };
  }

  // Separate source Timer callbacks; the host must not round these to 25fps.
  spawnTimer() {
    if (!this.active) return null;
    const bonus = this.createBonus(Math.trunc(this.random() * 8));
    this.falling.push(bonus);
    this.emit('spawn', { bonus });
    return bonus;
  }

  difficultyTimer() {
    if (!this.active || !this.difficultyRunning) return;
    if (this.spawnDelay > 500) this.spawnDelay -= 50;
    else if (this.spawnDelay < 500) this.difficultyRunning = false;
    if (this.vy < 20) this.vy += 0.1;
    // At exactly 500ms the source still replaces/restarts the spawn Timer.
    this.emit('replace-spawn-timer', { milliseconds: this.spawnDelay });
  }

  move() {
    // Source writes this before moving the role, leaving the stack one tick behind.
    this.basketContainer.x = this.role.x;
    if (this.keys.left) { this.position(this.role, 'x', this.role.x - 25); this.label('run'); }
    if (this.keys.right) { this.position(this.role, 'x', this.role.x + 25); this.label('run'); }
    if (!this.roleWidth) throw new Error('Original role geometry is required');
    const width = this.roleWidth(this.role);
    if (this.role.x - width / 2 < 0) this.position(this.role, 'x', width / 2);
    else if (this.role.x + width / 2 > 800) this.position(this.role, 'x', 800 - width / 2);
    if (!this.keys.right && !this.keys.left) this.label('stop');
    if (this.stack.length) {
      const destination = DESTINATIONS[this.keys.cState];
      if (destination) this.throwTop(destination);
      else if (this.keys.cState === 32) this.consumePrize();
      this.keys.cState = 0;
    }
  }

  consumePrize() {
    const bonus = this.stack.at(-1);
    if (!bonus || bonus.type !== 'prize') return false;
    this.hp = this.hp >= 100 ? 100 : Math.trunc(this.hp + 10);
    this.updateHp();
    const effect = { x: this.basketContainer.x + bonus.x - 30, y: this.basketContainer.y + bonus.y - 50, width: 100, height: 100 };
    this.effects.push(effect);
    this.emit('effect', { effect });
    bonus.attached = false;
    this.stack.pop();
    return true;
  }

  throwTop(destination) {
    if (!this.stack.length) return null;
    this.sound('MKEYPRESS');
    if (destination.type === 'trash') this.sound('MTRASH');
    const batch = { id: this.nextBatchId++, bonuses: [], attached: true };
    this.batches.push(batch);
    let count = 1;
    for (let i = this.stack.length - 1; i > 0; i--) {
      if (this.stack[i].type !== this.stack[i - 1].type) break;
      count++;
    }
    for (let i = 0; i < count; i++) {
      const bonus = this.stack.at(-1);
      this.position(bonus, 'x', this.basketContainer.x + bonus.x);
      this.position(bonus, 'y', this.basketContainer.y + bonus.y);
      bonus.guest = destination.guest;
      if (bonus.type.substr(0, 5) === destination.type) this.score += 100;
      else { this.score -= 100; bonus.decide = false; }
      this.updateScore();
      bonus.targetX = destination.x;
      bonus.targetY = destination.y;
      bonus.moving = true;
      bonus.batch = batch;
      batch.bonuses.push(bonus);
      this.stack.pop();
      if (count < 3) break;
    }
    if (count >= 3) { this.combo += count; this.comboText = String(this.combo); }
    batch.bonuses.at(-1).listensForArrival = true;
    this.emit('throw', { batch });
    return batch;
  }

  checkCollisions() {
    if (!this.collision || !this.bonusWidth) throw new Error('Original collision geometry is required');
    // The source selects the collider once before iterating, even after a catch.
    const top = this.stack.at(-1) || null;
    for (let i = 0; i < this.falling.length; i++) {
      const bonus = this.falling[i];
      if (!this.collision(top, bonus, this)) continue;
      bonus.falling = false;
      this.position(bonus, 'x', -this.bonusWidth(bonus) / 2);
      this.position(bonus, 'y', -this.stack.length * 50 - 35);
      this.stack.push(bonus);
      this.falling.splice(i, 1); // Adjacent entries are skipped by the original loop.
      this.score += 10;
      this.updateScore();
      this.emit('catch', { bonus });
    }
  }

  removeMissed() {
    for (let i = 0; i < this.falling.length; i++) {
      const bonus = this.falling[i];
      if (bonus.y < 450) continue;
      bonus.attached = false;
      this.falling.splice(i, 1);
      this.hp -= 10;
      if (this.hp <= 0) { this.hpScale = 0; this.closeMode = false; this.gameOver(); }
      else this.updateHp();
      // Source gameOver may already have captured the score before this penalty.
      this.score -= 100;
      this.updateScore();
    }
    if (this.score < -400) { this.closeMode = false; this.gameOver(); }
  }

  tickRoot() {
    if (!this.active) return;
    this.move();
    this.checkCollisions();
    this.removeMissed();
    if (this.stack.length >= 6) { this.closeMode = false; this.gameOver(); }
  }

  // Bonus owns its own ENTER_FRAME listeners. Host establishes callback order.
  tickFalling(bonus) { if (bonus.falling) this.position(bonus, 'y', bonus.y + bonus.vy); }
  tickThrown(bonus) {
    if (!bonus.moving) return;
    const dx = bonus.targetX - bonus.x, dy = bonus.targetY - bonus.y;
    if (Math.abs(Math.sqrt(dx * dx + dy * dy)) <= 30) {
      this.position(bonus, 'x', bonus.targetX);
      this.position(bonus, 'y', bonus.targetY);
      bonus.moving = false;
      if (bonus.listensForArrival) this.arrive(bonus);
    } else {
      this.position(bonus, 'x', bonus.x + dx * 0.1);
      this.position(bonus, 'y', bonus.y + dy * 0.1);
    }
  }

  arrive(bonus) {
    if (this.score < -400) { this.closeMode = false; this.gameOver(); }
    if (bonus.decide) { this.sound('MCORRECT'); this.emit('guest-label', { guest: bonus.guest, name: 'right' }); }
    else { this.hp -= 10; this.sound('MERROR'); this.emit('guest-label', { guest: bonus.guest, name: 'wrong' }); }
    // Only the last bonus has this handler; removing it removes the whole batch.
    bonus.batch.attached = false;
    if (this.hp <= 0) { this.hpScale = 0; this.closeMode = false; this.gameOver(); }
    else this.updateHp();
  }

  close() { if (this.active) { this.score = 0; this.closeMode = true; this.gameOver(); } }
  gameOver() {
    if (!this.active) return;
    this.active = false;
    this.difficultyRunning = false;
    this.role.visible = false;
    // PopKeys.clearState resets held arrows but leaves cState untouched.
    this.keys.left = this.keys.right = false;
    for (const bonus of this.falling) bonus.attached = false;
    this.basketContainer.attached = false;
    this.result = { score: this.score, closeMode: this.closeMode };
    this.sound('MDEFEATED');
    this.emit('game-over', { ...this.result, message: `你获得了${this.score}分，要加油哦~\r更多游戏请登录QQ宠物官网。` });
  }
}
