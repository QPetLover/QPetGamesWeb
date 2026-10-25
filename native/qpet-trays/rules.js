// Explicit native rules from the fixed Q宠端盘子 Main/Role/Bullet/Delay AS3 classes.
// Timeline ordering and hitTestPoint geometry belong to the renderer integration.
export const SOURCE_SHA256 = '88efe57892ef034a946571ddb794f738ed9e2b8ccffb9b5e50200ebb3c3b6131';
export const STAGE = Object.freeze({ width: 800, height: 600, fps: 25 });
export const ROLES = Object.freeze(['GG1', 'GG2', 'GG3', 'MM1', 'MM2', 'MM3']);

export class TraysRules {
  constructor({ random = Math.random, hitDish = () => false, hitRole = () => false, writeX = value => value } = {}) {
    this.random = random;
    this.hitDish = hitDish;
    this.hitRole = hitRole;
    this.writeX = writeX;
    this.spring = 0.2;
    this.speed = 1;
    this.stopSpring = 0.03;
    this.moveSpring = 0.00005;
    this.events = [];
    this.delays = [];
    this.nextDelayId = 1;
    this.active = false;
    this.keyboardEnabled = false;
  }

  emit(type, detail = {}) { this.events.push({ type, ...detail }); }
  drainEvents() { const events = this.events; this.events = []; return events; }
  sound(id) { this.emit('sound', { id }); }
  label(name, play = false) {
    this.role.currentLabel = name;
    this.role.playing = play;
    this.emit('role-label', { name, play });
  }
  dishStatus(value) { this.role.dishStatus = value; this.role.dishVisible = value; }

  // Source checkGameStart consumes sex RNG before level RNG on every start/replay.
  start() {
    const sex = Math.round(this.random() + 102) === 102 ? 'GG' : 'MM';
    return this.startRole(sex + Math.trunc(this.random() * 3 + 1));
  }

  startRole(kind) {
    if (!ROLES.includes(kind)) throw new RangeError('Unknown original role');
    this.role = { kind, x: 0, y: 460, numDishs: 8, dishStatus: true, dishVisible: true, visible: true, currentLabel: 'stop', playing: false, rotation: 0, warning: false };
    this.maxLength = 100;
    this.timeDelay = 3000;
    this.friction = 0.9;
    this.moveState = 'stop';
    this.bulletVY = 5;
    this.vx = 0;
    this.ax = 0;
    this.srcObject = { vx: 0, vy: 0, x: 0, y: 360 };
    this.bullets = [];
    this.bed = { x: 0, y: 91, visible: false };
    this.totalScore = 0;
    this.totalScoreText = '0';
    this.dishNumText = '8';
    this.active = true;
    this.keyboardEnabled = true;
    this.emit('start', { kind, timerDelay: this.timeDelay });
    return kind;
  }

  keyDown(keyCode) {
    if (!this.keyboardEnabled) return;
    this.spring = this.moveSpring;
    if (keyCode === 37) {
      this.ax = -Math.abs(this.speed);
      if (this.moveState === 'left') return;
      this.label(this.role.dishStatus ? 'dishBack' : 'leftRun');
      this.moveState = 'left';
    } else if (keyCode === 39) {
      if (this.moveState === 'right') return;
      this.ax = Math.abs(this.speed);
      this.label(this.role.dishStatus ? 'dishFront' : 'rightRun');
      this.moveState = 'right';
    }
  }

  keyUp(keyCode) {
    if (!this.keyboardEnabled) return;
    this.spring = this.stopSpring;
    if (keyCode === 37 || keyCode === 39) this.moveState = 'stop';
  }

  delayRole() {
    const delay = { id: this.nextDelayId++, role: this.role, x: this.role.x, y: this.role.y };
    this.role.visible = false;
    this.delays.push(delay);
    this.emit('delay', { id: delay.id, milliseconds: 500 });
    this.keyboardEnabled = false;
  }

  // Called by the separate 500 ms Timer completion, not by a frame countdown.
  completeDelay(id) {
    const index = this.delays.findIndex(delay => delay.id === id);
    if (index < 0) return false;
    const delay = this.delays.splice(index, 1)[0];
    delay.role.x = this.writeX(delay.x);
    delay.role.y = delay.y;
    delay.role.visible = true;
    this.ax = 0;
    this.vx = 0;
    this.srcObject.vx = 0;
    this.srcObject.vy = 0;
    this.srcObject.y = this.role.y - 50 - this.role.numDishs * 10;
    this.srcObject.x = this.role.x - 10;
    this.keyboardEnabled = true;
    return true;
  }

  checkOutsize() {
    if (this.role.x < 0) {
      this.vx = 0;
      this.ax = 0;
      this.role.x = this.writeX(0);
      if (!this.role.dishStatus) {
        this.sound(5);
        this.delayRole();
        this.label('stop');
        this.dishStatus(true);
        this.srcObject.x = this.role.x;
        this.dishNumText = String(this.role.numDishs);
      }
    }
    if (this.role.x > 800) {
      this.vx = 0;
      this.ax = 0;
      this.role.x = this.writeX(800);
      if (this.role.dishStatus) {
        this.sound(3);
        this.delayRole();
        this.label('leftRun');
        this.dishStatus(false);
        if (this.maxLength > 40) this.maxLength -= 5;
        if (this.timeDelay > 500) {
          this.timeDelay -= 100;
          this.bulletVY += 1;
          this.emit('timer-delay', { milliseconds: this.timeDelay });
        }
        this.totalScore += this.role.numDishs;
        this.totalScoreText = String(this.totalScore);
        this.role.numDishs = (this.role.numDishs + 1) >>> 0;
      }
    }
  }

  checkCollide() {
    for (let i = 0; i < this.bullets.length; i++) {
      const bullet = this.bullets[i];
      if (bullet.outside) {
        this.emit('bullet-impact', { bullet });
        this.bullets.splice(i--, 1);
      } else {
        if (this.hitDish(bullet.x, bullet.y, this.role) && this.role.dishStatus) {
          bullet.outside = true;
          this.emit('bullet-impact', { bullet });
          this.bullets.splice(i, 1);
          this.role.dishVisible = false;
          this.label('hitDish');
          this.closeMode = false;
          this.clearEvent();
          return;
        }
        if (this.hitRole(bullet.x, bullet.y, this.role)) {
          bullet.outside = true;
          this.emit('bullet-impact', { bullet });
          this.bullets.splice(i, 1);
          this.role.dishVisible = false;
          this.label(this.role.dishStatus ? 'hitPerson' : ['leftRun', 'leftStatic'].includes(this.role.currentLabel) ? 'lTrip' : 'rTrip');
          this.closeMode = false;
          this.clearEvent();
          return;
        }
      }
    }
  }

  clearEvent() {
    this.sound(2);
    this.dishStatus(false);
    this.bullets = [];
    this.active = false;
    this.keyboardEnabled = false;
    this.emit('game-over', { score: this.totalScore, message: `你获得了${this.totalScore}分，要加油哦~\r更多游戏请登录QQ宠物官网。` });
  }

  // Call once per original root ENTER_FRAME. The active check belongs at entry;
  // removing the source listener does not interrupt its already-running handler.
  tickRoot() {
    if (!this.active) return;
    this.checkCollide();
    this.checkOutsize();
    switch (this.moveState) {
      case 'left': this.vx += this.ax; break;
      case 'right':
        this.vx += this.ax;
        if (this.role.dishStatus && this.vx > 6 && this.role.currentLabel !== 'dishQuick') this.label('dishQuick');
        break;
      case 'stop':
        if (this.role.dishStatus && Math.abs(this.vx) < 1 && this.role.currentLabel !== 'stop') this.label('stop', true);
        else if (!this.role.dishStatus && Math.abs(this.vx) < 1) {
          if (this.role.currentLabel !== 'leftStatic' && this.role.currentLabel === 'leftRun') this.label('leftStatic');
          else if (this.role.currentLabel !== 'rightStatic' && this.role.currentLabel === 'rightRun') this.label('rightStatic');
        }
        this.vx *= 0.9;
        break;
    }
    // The original clamps only positive velocity. Preserve this asymmetry.
    if (this.vx > 10) this.vx = 10;
    this.role.x = this.writeX(this.role.x + this.vx);
    if (!this.role.dishStatus) return;
    const dx = this.role.x - this.srcObject.x;
    this.srcObject.vx += dx * this.spring;
    this.srcObject.vx *= this.friction;
    this.srcObject.x += this.srcObject.vx;
    if (Math.abs(dx) > this.maxLength) {
      this.label(this.role.dishStatus ? 'hitPerson' : ['leftRun', 'leftStatic'].includes(this.role.currentLabel) ? 'lTrip' : 'rTrip');
      this.closeMode = false;
      this.clearEvent();
    } else this.role.warning = Math.abs(dx) > this.maxLength - this.maxLength / 3;
    this.role.rotation = Math.atan2(this.srcObject.y - this.role.y, this.srcObject.x - this.role.x) * 180 / Math.PI;
  }

  // Called by the independent createBulletTime Timer, including its delay changes.
  fireTimer() {
    if (!this.active) return;
    this.sound(4);
    this.bed.x = this.writeX(this.random() * 580 + 10);
    this.bed.y = 91;
    this.bed.visible = true;
    this.emit('bed-play', { frame: 2, x: this.bed.x, y: this.bed.y });
  }

  // Authored Bed_5 frame 16 dispatches GameBullet. Do not spawn at fireTimer().
  bedFrame16() {
    const bullet = { x: this.writeX(this.bed.x + 30), y: this.bed.y + 60, vy: this.bulletVY, outside: false };
    this.bullets.push(bullet);
    this.bed.visible = false;
    this.emit('bullet-create', { bullet });
    return bullet;
  }

  // Original Bullet owns a separate ENTER_FRAME handler; host determines order.
  tickBullet(bullet) {
    if (bullet.outside) return;
    bullet.y += bullet.vy;
    if (bullet.y > 490) {
      this.sound(1);
      bullet.outside = true;
    }
  }
}
