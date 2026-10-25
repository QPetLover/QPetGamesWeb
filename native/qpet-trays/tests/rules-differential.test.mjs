import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { TraysRules } from '../rules.js';

const asMain = readFileSync(new URL('./fixtures/Main.as', import.meta.url), 'utf8');
const sourceManifest = JSON.parse(readFileSync(new URL('./fixtures/source-assets-map.json', import.meta.url)));
assert.equal(createHash('sha256').update(asMain).digest('hex'), sourceManifest.scripts['frame/Main.as'].sha256);

// Test-only execution of literal bodies from fixed AS3. This is not part of the
// native package. Stubs model only the named display/timer APIs used below.
function body(name) {
  const at = asMain.indexOf('function ' + name + '(');
  assert.ok(at >= 0, name);
  const start = asMain.indexOf('{', at);
  let depth = 1, i = start + 1;
  for (; depth && i < asMain.length; i++) {
    if (asMain[i] === '{') depth++;
    else if (asMain[i] === '}') depth--;
  }
  return asMain.slice(start + 1, i - 1)
    .replace(/var (\w+):(Number|uint|int|Delay|Bullet|Sprite)\b/g, 'var $1')
    .replace(/\(param1\.target as Delay\)/g, '(param1.target)');
}

function makeOracle({ random = () => 0.5, hitDish = () => false, hitRole = () => false, writeX = x => x } = {}) {
  const o = { spring: 0.2, ax: 0, speed: 1, stopSpring: 0.03, vx: 0, moveSpring: 0.00005,
    moveState: 'stop', maxLength: 0, timeDelay: 0, bulletVY: 0, friction: 0,
    role: null, srcObject: {}, bullets: [], bed: { x: 0, y: 91, visible: false, gotoAndPlay() {}, addEventListener() {} },
    createBulletTime: null, bulletCon: null, totalScore: 0,
    totalScoreTxt: { text: '' }, dishNumTxt: { text: '' }, gameSoundControl: { addEventListener() {} },
    active: false, keyboardEnabled: false, sounds: [], delays: [], nextDelayId: 1,
    funGameSoundControl() {}, addChild() {}, contains() { return true; }, removeChild() {}, dispatchEvent() {},
    showOver(message) { this.message = message; }, closeMode: undefined };
  let bedX=0; Object.defineProperty(o.bed,'x',{get(){return bedX;},set(value){bedX=writeX(value);},enumerable:true});
  function Sound(id) { return { play() { o.sounds.push(id); } }; }
  function Timer(delay, repeat = 0) { this.delay = delay; this.repeat = repeat; }
  Timer.prototype.addEventListener = Timer.prototype.reset = Timer.prototype.start = Timer.prototype.stop = function () {};
  function Delay(role) { this.id = o.nextDelayId++; this.mc = role; this.oldX = role.x; this.oldY = role.y; this.milliseconds = 500; role.visible = false; o.delays.push(this); }
  Delay.prototype.addEventListener = Delay.prototype.removeEventListener = function () {};
  function Bullet() { let x=0;Object.defineProperty(this,'x',{get(){return x;},set(value){x=writeX(value);},enumerable:true}); this.y = 0; this.vy = 5; this.outside = false; }
  Bullet.prototype.gotoAndPlay = function () {};
  function Sprite() { this.addChild = function () {}; }
  const stage = {
    addEventListener(type) { if (type === 'enterFrame') o.active = true; if (type === 'keyDown' || type === 'keyUp') o.keyboardEnabled = true; },
    removeEventListener(type) { if (type === 'enterFrame') o.active = false; if (type === 'keyDown' || type === 'keyUp') o.keyboardEnabled = false; }
  };
  o.stage = stage;
  const context = {
    Math: Object.assign(Object.create(Math), { random }),
    GSound: { MFIRE: Sound(4), MLAND: Sound(1), MGAMEOVER: Sound(2), MGETDISH: Sound(5), MTARGETDISH: Sound(3) },
    Keyboard: { LEFT: 37, RIGHT: 39 }, KeyboardEvent: { KEY_DOWN: 'keyDown', KEY_UP: 'keyUp' },
    Event: Object.assign(function () {}, { ENTER_FRAME: 'enterFrame' }),
    MouseEvent: { CLICK: 'click' }, TimerEvent: { TIMER: 'timer' },
    GameEvent: { GAMEBULLET: 'bullet' }, Timer, Delay, Bullet, Sprite,
    ColorTransform: function (...args) { this.args = args; }
  };
  const names = ['initGame', 'onFrameHandler', 'checkOutsize', 'keyDownHandler', 'keyUpHandler', 'showBed', 'createBullet', 'onceComplete', 'checkCollide', 'clearEvent'];
  for (const name of names) o[name] = vm.runInNewContext(`(function(param1) { with (this) { ${body(name)} } })`, context).bind(o);
  o.start = function () {
    let x = 0, carrying = true;
    const role = { y: 460, numDishs: 8, currentLabel: 'stop', playing: false, visible: true,
      gotoAndStop(label) { this.currentLabel = label; this.playing = false; },
      gotoAndPlay(label) { this.currentLabel = label; this.playing = true; },
      hitTestPoint(px, py) { return hitRole(px, py, role); } };
    role.dishs = { visible: true, rotation: 0, transform: { colorTransform: new context.ColorTransform() }, hitTestPoint(px, py) { return hitDish(px, py, role); } };
    Object.defineProperty(role, 'x', { get() { return x; }, set(value) { x = writeX(value); }, enumerable: true });
    Object.defineProperty(role, 'dishStatus', { get() { return carrying; }, set(value) { carrying = value; role.dishs.visible = value; }, enumerable: true });
    this.role = role; this.initGame();
  };
  o.completeDelay = function (id) {
    const index = this.delays.findIndex(delay => delay.id === id);
    if (index < 0) return false;
    const d = this.delays.splice(index, 1)[0];
    d.mc.x = d.oldX; d.mc.y = d.oldY; d.mc.visible = true;
    this.onceComplete({ target: d }); return true;
  };
  o.tick = function () { if (this.active) this.onFrameHandler(); };
  o.keyDown = function (keyCode) { if (this.keyboardEnabled) this.keyDownHandler({ keyCode }); };
  o.keyUp = function (keyCode) { if (this.keyboardEnabled) this.keyUpHandler({ keyCode }); };
  o.fire = function () { if (this.active) this.showBed(); };
  o.start();
  return o;
}

function pair(options) {
  const native = new TraysRules(options); native.startRole('GG1'); native.drainEvents();
  const source = makeOracle(options);
  return { native, source };
}
function snapshot(p, native) {
  const role = p.role;
  return { spring: p.spring, vx: p.vx, ax: p.ax, moveState: p.moveState, maxLength: p.maxLength,
    timeDelay: p.timeDelay, bulletVY: p.bulletVY, totalScore: p.totalScore,
    totalScoreText: native ? p.totalScoreText : p.totalScoreTxt.text,
    dishNumText: native ? p.dishNumText : p.dishNumTxt.text,
    srcObject: { ...p.srcObject }, active: p.active, keyboardEnabled: p.keyboardEnabled,
    role: { x: role.x, y: role.y, numDishs: role.numDishs, dishStatus: role.dishStatus,
      visible: role.visible, dishVisible: native ? role.dishVisible : role.dishs.visible,
      currentLabel: role.currentLabel, playing: role.playing,
      rotation: native ? role.rotation : role.dishs.rotation,
      warning: native ? role.warning : (role.dishs.transform.colorTransform.args?.length ?? 0) > 0 },
    bullets: Array.from(p.bullets, b => ({ x: b.x, y: b.y, vy: b.vy, outside: b.outside })),
    sounds: native ? p.events.filter(e => e.type === 'sound').map(e => e.id) : p.sounds };
}
function equal(p, label = '') { assert.deepEqual(snapshot(p.native, true), snapshot(p.source, false), label); }
function step(p, count = 1) { for (let i = 0; i < count; i++) { p.native.tickRoot(); p.source.tick(); equal(p, 'tick ' + i); } }
function key(p, direction, down = true) { const name = down ? 'keyDown' : 'keyUp'; p.native[name](direction); p.source[name](direction); equal(p, name); }

// Formula comparison with identity display writes. Flash display quantization,
// real hit bounds and independent ENTER_FRAME ordering remain integration work.
test('source init and all keyboard frame branches agree over 4,000 sampled frames', () => {
  const p = pair(); equal(p);
  let seed = 31415;
  const rng = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 2 ** 32; };
  for (let i = 0; i < 4000; i++) {
    if (!p.native.active) { p.native.startRole('GG1'); p.source.start(); }
    const input = Math.floor(rng() * 6);
    if (input < 3) key(p, [37, 39, 65][input]);
    else key(p, [37, 39, 65][input - 3], false);
    step(p);
  }
});

test('strict boundary, HUD lag and separate 500 ms completion follow source', () => {
  const p = pair();
  p.native.role.x = p.source.role.x = 800;
  p.native.srcObject.x = p.source.srcObject.x = 800;
  step(p); assert.equal(p.native.totalScore, 0);
  p.native.role.x = p.source.role.x = 800.01;
  step(p);
  assert.equal(p.native.totalScore, 8); assert.equal(p.native.role.numDishs, 9);
  assert.equal(p.native.dishNumText, '8'); assert.equal(p.native.role.visible, false);
  step(p, 40); assert.equal(p.native.role.visible, false, 'frames do not replace independent Timer');
  p.native.completeDelay(1); p.source.completeDelay(1); equal(p);
  p.native.role.x = p.source.role.x = -0.01;
  step(p);
  assert.equal(p.native.dishNumText, '9'); assert.equal(p.native.role.visible, false);
  p.native.completeDelay(2); p.source.completeDelay(2); equal(p);
});

test('source intentionally has no negative speed clamp', () => {
  const p = pair(); p.native.role.x = p.source.role.x = 600;
  p.native.dishStatus(false); p.source.role.dishStatus = false;
  key(p, 37); step(p, 20);
  assert.equal(p.native.vx, -20);
});

test('delivery ramps clamp at maxLength40, Timer500 and bulletVY30', () => {
  const p = pair();
  for (let i = 0; i < 27; i++) {
    p.native.dishStatus(true); p.source.role.dishStatus = true;
    p.native.role.x = p.source.role.x = 800.01;
    p.native.checkOutsize(); p.source.checkOutsize(); equal(p);
    p.native.completeDelay(i + 1); p.source.completeDelay(i + 1); equal(p);
  }
  assert.equal(p.native.maxLength, 40); assert.equal(p.native.timeDelay, 500); assert.equal(p.native.bulletVY, 30);
  assert.equal(p.native.totalScore, (8 + 34) * 27 / 2);
});

test('fire Timer plays cue and delays projectile until authored Bed frame16', () => {
  const p = pair({ random: () => 0.25 });
  p.native.fireTimer(); p.source.fire(); equal(p); assert.equal(p.native.bullets.length, 0);
  const bullet = p.native.bedFrame16(); p.source.createBullet(); equal(p);
  assert.deepEqual({ x: bullet.x, y: bullet.y, vy: bullet.vy }, { x: 185, y: 151, vy: 5 });
  // Literal Bullet onFrameHandler has no random or source dependencies beyond Sound.
  while (!bullet.outside) {
    p.native.tickBullet(bullet);
    const b = p.source.bullets[0];
    b.y += b.vy;
    if (b.y > 490) { p.source.sounds.push(1); b.outside = true; }
    equal(p);
  }
  assert.equal(bullet.y, 491); step(p); assert.equal(p.native.bullets.length, 0);
});

for (const [carrying, label, hitDish, expected] of [[true, 'dishFront', true, 'hitDish'], [true, 'dishFront', false, 'hitPerson'], [false, 'leftRun', false, 'lTrip'], [false, 'rightStatic', false, 'rTrip']]) {
  test(`collision source branch: ${expected}`, () => {
    const p = pair({ hitDish: () => hitDish, hitRole: () => true });
    p.native.dishStatus(carrying); p.source.role.dishStatus = carrying;
    p.native.role.currentLabel = p.source.role.currentLabel = label;
    p.native.bedFrame16(); p.source.createBullet();
    step(p); assert.equal(p.native.role.currentLabel, expected); assert.equal(p.native.active, false);
  });
}

test('sway warning and loss boundaries preserve strict comparisons', () => {
  for (const offset of [100 - 100 / 3 - 0.01, 100 - 100 / 3 + 0.01, 100, 100.01, -100.01]) {
    const p = pair(); p.native.role.x = p.source.role.x = 300;
    p.native.srcObject.x = p.source.srcObject.x = 300 - offset;
    step(p);
    assert.equal(p.native.active, Math.abs(offset) <= 100);
  }
});

test('two start RNG draws keep original role sex and level mapping', () => {
  for (const [sex, level, expected] of [[0, 0, 'GG1'], [0.499, 0.5, 'GG2'], [0.5, 0.999, 'MM3'], [0.999, 0, 'MM1']]) {
    const draws = [sex, level]; const game = new TraysRules({ random: () => draws.shift() });
    assert.equal(game.start(), expected); assert.equal(draws.length, 0);
  }
});

test('replay retains spring as in source initGame and pending Delay uses current role', () => {
  const p = pair(); key(p, 39); key(p, 39, false);
  p.native.role.x = p.source.role.x = 800.01;
  p.native.checkOutsize(); p.source.checkOutsize();
  p.native.startRole('GG1'); p.source.start(); equal(p);
  assert.equal(p.native.spring, 0.03);
  // The source old Delay still completes; its event handler reads current role.
  p.native.completeDelay(1); p.source.completeDelay(1); equal(p);
  assert.equal(p.native.srcObject.y, 330);
});

test('empty-hand dish-only hit is ignored and already-outside bullets are removed', () => {
  const p = pair({ hitDish: () => true });
  p.native.dishStatus(false); p.source.role.dishStatus = false;
  p.native.bedFrame16(); p.source.createBullet(); step(p);
  assert.equal(p.native.active, true);
  p.native.bullets[0].outside = p.source.bullets[0].outside = true;
  p.native.bedFrame16(); p.source.createBullet();
  p.native.bullets[1].outside = p.source.bullets[1].outside = true;
  step(p); assert.equal(p.native.bullets.length, 0);
});

// Official AVM2 display setters use Twips::from_pixels (toward-zero i32).
// srcObject is a plain Object, so its spring state keeps full Number precision.
test('display twip setters agree with literal AS over 4,000 inputs and bed RNG',()=>{
 const p=pair({writeX:x=>Math.trunc(x*20)/20,random:()=>.123456789});let seed=9281;
 for(let i=0;i<4000;i++){
  if(!p.native.active){p.native.startRole('GG1');p.source.start();}
  seed=(Math.imul(seed,1664525)+1013904223)>>>0;const k=[37,39,65][seed%3];key(p,k,!!(seed&4));step(p);
 }
 p.native.startRole('GG1');p.source.start();p.native.fireTimer();p.source.fire();equal(p);
 assert.equal(p.native.bed.x,81.6);p.native.bedFrame16();p.source.createBullet();equal(p);
 assert.equal(p.native.bullets[0].x,111.6);
 key(p,39);step(p,4);key(p,39,false);step(p,4);
 assert.notEqual(p.native.srcObject.x,Math.trunc(p.native.srcObject.x*20)/20);
});
