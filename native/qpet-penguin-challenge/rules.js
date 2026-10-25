// Explicit rules from ORG.Index, ORG.Apenguin, ORG.Mutou and COM classes.
// The renderer supplies actual original hitTestObject / shape hitTestPoint.
export const SOURCE_SHA256 = '11380ec505e2edcc54e00646e487be91bea6fe627199923681b5cef96197aace';
export const STAGE = Object.freeze({ width: 800, height: 600, fps: 24 });
// Fixed comparison baseline AVM2 DisplayObject setter, finite coordinates.
export const toDisplayPixel = value => { const n=Math.trunc(value*20)/20; return Object.is(n,-0)?0:n; };

export class PenguinChallengeRules {
  constructor({ random = Math.random, hitStart, hitPlatform, writePosition = toDisplayPixel } = {}) {
    this.random = random;
    this.hitStart = hitStart;
    this.hitPlatform = hitPlatform;
    this.writePosition = writePosition;
    this.events = [];
    // Source instance-field initializers consume these only once, before loading.
    this._qqLevel = Math.floor(random() * 3) + 1;
    this._qqSex = 102 + Math.floor(random() * 2);
    for (const name of ['_totalF', '_max', '_floor', '_nowF', '_faster', '_oldSpeedNum', '_speed', '_totalScore', '_visibled', '_score', '_oldSpeed', '_oldF', '_startGame', '_AddScore', '_playGameNow']) this[name] = 0;
    this.initialized = false;
    this.rootActive = false;
    this.playerActive = false;
    this.result = null;
  }

  emit(type, detail = {}) { this.events.push({ type, ...detail }); }
  drainEvents() { const events = this.events; this.events = []; return events; }
  position(object, axis, value) { object[axis] = this.writePosition(value); }
  recreatePlatform(platform) {
    // Source round(random*4) may request frame 0; the display host clamps it.
    platform.requestedFrame = Math.round(this.random() * 4);
    this.position(platform, 'x', this.random() * 300 + 150);
  }

  start() {
    if (this.initialized) return this.replay();
    this.bg = { x: 0, y: -1200 };
    this.bgStart = { x: 0, y: 0 };
    this.platforms = Array.from({ length: 8 }, (_, i) => {
      this.random(); // Mutou._xy initializer is overwritten, but still consumes RNG.
      const p = { x: 0, y: 400 - i * 100, _id: i + 1, mascotVisible: false, mascotFrame: 1 };
      this.recreatePlatform(p);
      return p;
    });
    this._floor = 8;
    this.snow = Array.from({ length: 100 }, () => ({
      x: this.writePosition(this.random() * 800 + 100),
      y: this.writePosition(this.random() * -600), alpha: this.random(),
      scale: Math.max(0.3, this.random()),
    }));
    this.walls = [{ y: 0, oldFrame: 1, frame1: 1, frame2: 1 }, { y: 0, oldFrame: 1, frame1: 1, frame2: 1 }];
    this.snowman = { y: 380, active: true };
    this.startWood = { y: 520, active: true };
    this.player = { x: 400, y: 550, frame: 1 };
    this.arrowRotation = 0;
    this.scoreDigits = [1, 1, 1, 1, 1, 1];
    this.initializePlayer();
    this.initialized = this.rootActive = true;
    this.emit('start', { role: (this._qqSex === 102 ? 'Qgg' : 'Qmm') + this._qqLevel });
  }

  initializePlayer() {
    Object.assign(this.player, { _space: 0, _left: 0, _leftLong: 0, _right: 0, _rightLong: 0, _nowJump: 0, _hitWood: 0, _downSpeed: 0, _LR: 0, _LRMove: 0 });
    this.playerActive = true;
  }

  replay() {
    this._speed = this._oldSpeed = this._faster = 0;
    this._startGame = this._score = this._totalScore = 0;
    this._floor = 8;
    this.initializePlayer();
    this.player.x = 400;
    this.player.y = 520;
    for (let i = 0; i < 8; i++) {
      const p = this.platforms[i];
      p.y = 400 - i * 100;
      p._id = i + 1;
      this.recreatePlatform(p);
    }
    Object.assign(this.bgStart, { x: 0, y: 0 });
    Object.assign(this.bg, { x: 0, y: -1200 });
    Object.assign(this.startWood, { y: 520, active: true });
    Object.assign(this.snowman, { y: 380, active: true });
    for (const wall of this.walls) wall.oldFrame = wall.frame1 = wall.frame2 = 1;
    this.rootActive = true;
    this.result = null;
    // Source does not reset _oldF/_max/_AddScore/visual child frames here.
    this.emit('replay');
  }

  keyDown(code) {
    if (!this.playerActive) return;
    if (code === 32) this.player._space = 1;
    else if (code === 37) this.player._left = 1;
    else if (code === 39) this.player._right = 1;
  }
  keyUp(code) {
    if (!this.playerActive) return;
    if (code === 32) this.player._space = 0;
    else if (code === 37) this.player._left = this.player._leftLong = 0;
    else if (code === 39) this.player._right = this.player._rightLong = 0;
  }
  playerFrame(frame) {
    if (this.player.frame !== frame) { this.player.frame = frame; this.emit('player-frame', { frame }); }
  }

  tickPlayer() {
    if (!this.playerActive) return;
    if (!this.hitStart || !this.hitPlatform) throw new Error('Original collision geometry is required');
    const p = this.player;
    if (p._downSpeed === 0) { this._oldX = p.x; this._oldY = p.y; }
    if (p._downSpeed === 0 && p._space === 1) this._visibled = 1;
    if (this.hitStart(p, this.startWood)) { p._downSpeed = 0; this.position(p, 'y', this.startWood.y + 5); this._score = 0; }
    if (p._LR < 0) p._LR++;
    else if (p._LR > 0) p._LR--;
    if (p.x <= 140) p._LR = p._LR < 0 ? -p._LR : p._LR;
    else if (p.x >= 660) p._LR = p._LR > 0 ? -p._LR : p._LR;
    this.position(p, 'x', p.x + p._LR);
    if (p._space === 1 && p._downSpeed === 0) {
      if (p._leftLong >= 10 || p._rightLong >= 10) { p._downSpeed = -43; this.playerFrame(6); }
      else if (p._leftLong >= 5 || p._rightLong >= 5) { p._downSpeed = -33; this.playerFrame(5); }
      else { p._downSpeed = -23; this.playerFrame(2); }
      p._nowJump = 1;
    }
    if (p._left === 1) {
      p._rightLong = 0; // Source `_right == 0` is a comparison, not an assignment.
      if (p._LR <= 0 && p._LR > -12) p._LR -= 2;
      else if (p._LR > 0) p._LR = -5;
      p._LRMove = 1;
      if (p.frame !== 3 && p._downSpeed === 0) this.playerFrame(3);
    }
    if (p._right === 1) {
      p._leftLong = 0;
      if (p._LR >= 0 && p._LR < 12) p._LR += 2;
      else if (p._LR < 0) p._LR = 5;
      p._LRMove = 1;
      if (p.frame !== 4 && p._downSpeed === 0) this.playerFrame(4);
    }
    if (p._nowJump === 1 && p._downSpeed >= 2) this.land();
    else if (p._nowJump === 0 && p._hitWood !== 0 && !this.hitPlatform(this.platforms[p._hitWood - 1], p.x, p.y)) {
      p._nowJump = 1;
      if (p._downSpeed === 0) p._downSpeed = 2;
      p._hitWood = 0;
      this.playerFrame(7);
    }
    this.position(p, 'y', p.y + this._speed);
    this.position(p, 'y', p.y + p._downSpeed);
    if (p._downSpeed === 0) p._nowJump = 0;
    if (p._nowJump === 1 && p._downSpeed < 30) p._downSpeed += 2;
    if (p.frame !== 1 && p._LR === 0 && p._nowJump === 0) this.playerFrame(1);
    if (p._left !== 0) p._leftLong++;
    if (p._right !== 0) p._rightLong++;
  }

  land() {
    const p = this.player;
    for (let i = 0; i < 8; i++) {
      const platform = this.platforms[i];
      if (!this.hitPlatform(platform, p.x, p.y)) continue;
      p._hitWood = i + 1;
      p._downSpeed = 0;
      this.playerFrame(1);
      this.position(p, 'y', platform.y + 2);
      this._score = platform._id >>> 0;
      this._AddScore = 0;
      this._totalF = (this._score - this._oldF) >>> 0;
      if (this._totalF === 4 || this._totalF === 5) {
        this._max = (this._max + 1) >>> 0;
        const units = this._totalF === 4 ? 10 : 20;
        this._AddScore = (this._max * units) >>> 0;
        this.emit('add-score', { text: '+ ' + this._max * units * 10 });
      } else this._max = 0;
      this._oldF = this._score;
      this._visibled = 1;
      break;
    }
  }

  tickRoot() {
    if (!this.rootActive) return;
    const p = this.player;
    if (p.y < 80) this._faster = Math.abs(p._downSpeed);
    if (this._faster <= 0) this._faster = 0;
    else { this.position(p, 'y', p.y + this._faster); this._faster -= 2; }
    if (p.y >= 680) {
      this._speed = 0;
      this.playerActive = false;
      this.playerFrame(1);
      this.rootActive = false;
      this._faster = 0;
      this.quit();
    }
    if (this._startGame === 0 && p.y <= 300) { this._speed = 1; this._startGame = 1; }
  }

  quit() {
    this._oldSpeed = this._speed;
    this._speed = 0;
    this.rootActive = this.playerActive = false;
    this.result = { score: this._totalScore * 10 + this._score * 10 };
    this.emit('game-over', this.result);
  }
  resume() { this._speed = this._oldSpeed; this.rootActive = this.playerActive = true; }

  tickPlatform(platform) {
    if (this._floor <= 8) {
      platform.mascotVisible = false;
      platform.mascotFrame = this._qqSex === 102 ? this._qqLevel : this._qqLevel * 2;
    }
    this.position(platform, 'y', platform.y + this._speed + this._faster);
    if (platform.y < 700) return;
    this.recreatePlatform(platform);
    platform._id = (platform._id + 8) >>> 0;
    this.position(platform, 'y', platform.y - 800);
    this._floor = (this._floor + 1) >>> 0;
    platform.mascotVisible = this._floor % 20 === 0;
    if (platform.mascotVisible) {
      const value = Math.trunc(this._floor / 10) >>> 0;
      platform.numberValue = value;
      platform.number1 = value % 10 + 1;
      platform.number2 = value >= 10 ? Number(String(value).slice(0, 1)) + 1 : 11;
    }
  }

  tickClock() {
    if (this._speed > 0) {
      this.arrowRotation += 2;
      if (this.arrowRotation > 180) this.arrowRotation -= 360;
      if (this.arrowRotation === 0) { this.emit('clock-play'); this._speed++; }
    } else if (this._speed === 0 && this._oldSpeed === 0) this.arrowRotation = 0;
    if (this._AddScore !== 0) { this._totalScore = (this._totalScore + this._AddScore) >>> 0; this._AddScore = 0; }
    let text = String((this._totalScore + this._score) >>> 0);
    if (text.length < 5) text = text.padStart(5, '0');
    // Source takes the first five digits even for values longer than five.
    for (let i = 5; i > 0; i--) this.scoreDigits[i] = Number(text.slice(i - 1, i)) + 1;
  }

  tickBackgrounds() {
    // The two first ENTER_FRAME buckets were registered in this order.
    if (this.bgStart.y < 700) this.position(this.bgStart, 'y', this.bgStart.y + (this._speed + this._faster) / 40);
    this.position(this.bg, 'y', this.bg.y + (this._speed + this._faster) / 40);
    if (this.bg.y >= -60) this.bg.y = -600;
  }
  tickWall(wall) {
    this.position(wall, 'y', wall.y + this._speed + this._faster);
    if (wall.y < -6) return;
    wall.y = -600;
    const range = this._floor >= 50 && this._floor < 100 ? 1 : this._floor >= 100 && this._floor < 150 ? 6 : this._floor > 200 ? 11 : null;
    if (range !== null) { wall.frame1 = wall.oldFrame; wall.frame2 = Math.round(this.random() * 5 + range); wall.oldFrame = wall.frame2; }
  }
  tickStartObject(object) {
    if (!object.active) return;
    this.position(object, 'y', object.y + this._speed + this._faster);
    if (object.y >= 700) object.active = false;
  }
  respawnSnow(flake) {
    flake.y = 0;
    this.position(flake, 'x', this.random() * 800 + 100);
    flake.alpha = this.random();
    flake.scale = Math.max(0.3, this.random());
  }
  tickSnow() {
    for (const flake of this.snow) {
      this.position(flake, 'x', flake.x - 1);
      this.position(flake, 'y', flake.y + flake.scale * 5);
      if (flake.y > 600) this.respawnSnow(flake);
      if (flake.x < 0) this.respawnSnow(flake);
    }
  }

  tick({afterPlatform=()=>{},events=()=>{},afterStage=()=>{}}={}) {
    if(!this.initialized)return;
    this.tickBackgrounds();
    for(let i=0;i<8;i++){this.tickPlatform(this.platforms[i]);afterPlatform(i);}
    this.tickSnow();for(const wall of this.walls)this.tickWall(wall);
    this.tickStartObject(this.snowman);this.tickStartObject(this.startWood);
    // One Stage broadcast bucket holds Apenguin then Index listeners. These
    // precede later SnowPice and MyTime buckets even though Index subscribed last.
    this.tickPlayer();events();this.tickRoot();events();afterStage();
    this.tickClock();events();
  }

}
