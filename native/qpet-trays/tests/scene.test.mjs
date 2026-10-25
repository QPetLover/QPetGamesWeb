import test from 'node:test';
import assert from 'node:assert/strict';
import { TraysGame, ROLE_IDS } from '../scene.js';
import { instances } from '../assets/instances.js';
import { timelineSounds } from '../assets/scene-data.js';
const create = () => { const events = [], game = new TraysGame({ random: () => .25, onEvent: event => events.push(event) }); return { game, events }; };

test('original help starts the random role while preserving stage and source stopped clips', () => {
  const { game } = create(); assert.equal(game.status, 'help');
  assert.equal(game.root.frame, 2); assert.equal(game.root.playing, false); assert.equal(game.bed.playing, false); assert.equal(game.mute.playing, false);
  assert.equal(game.named(game.help, 'anStart').id, '1098');
  assert.equal(game.action('start'), true); assert.equal(game.rules.role.kind, 'GG1'); assert.equal(game.status, 'playing');
  assert.equal(game.role.id, '392'); assert.equal(game.role.frame, 80); assert.equal(game.role.playing, false);
  assert.equal(game.named(game.role, 'dishs').children.filter(c => c.dynamic).length, 8);
});

test('all six role ids retain all twelve separate source labels and GG3 offsets', () => {
  const labels = ['leftRun','rightRun','leftStatic','rightStatic','hitDish','hitPerson','lTrip','rTrip','stop','dishBack','dishFront','dishQuick'];
  for (const id of Object.values(ROLE_IDS)) for (const label of labels) assert.ok(instances[id].labels[label]);
  assert.equal(instances['392'].labels.hitDish, 40); assert.equal(instances['1055'].labels.hitDish, 41);
  assert.equal(instances['1055'].labels.dishQuick, 141);
});

test('delivery emits separate500ms timer and changed fire deadline; rendering frames cannot complete it', () => {
  const { game } = create(); game.start();
  game.rules.role.x = 800.01; game.rules.checkOutsize(); game.consumeRules();
  assert.equal(game.rules.role.visible, false); assert.equal(game.rules.totalScore, 8); assert.equal(game.nextFireAt, 2900);
  for (let i=0;i<20;i++) game.tick(); assert.equal(game.rules.role.visible, false);
  game.pollTimers(499); assert.equal(game.rules.role.visible, false);
  game.pollTimers(500); assert.equal(game.rules.role.visible, true); assert.equal(game.rules.srcObject.y, 320);
});

test('Bed frame16 creates the projectile; original land turns to impact and frame42 removes it', () => {
  const { game, events } = create(); game.start(); game.pollTimers(3000);
  assert.equal(game.bed.frame, 2); assert.equal(game.rules.bullets.length, 0);
  // Fixed drawing-frame fixture. This does not assert the browser Timer phase.
  game.rules.active = false;
  for (let i=0;i<14;i++) game.tick(); assert.equal(game.rules.bullets.length, 1);
  const bullet = game.rules.bullets[0], node = game.projectiles.get(bullet);
  assert.equal(bullet.x, 185); assert.equal(node.frame, 1);
  bullet.y = 490; game.rules.tickBullet(bullet); game.rules.checkCollide(); game.consumeRules();
  assert.equal(bullet.y, 495); assert.equal(node.frame, 2);
  for(let i=0;i<40;i++) game.tick(); assert.equal(node.removed, true);
  assert.ok(events.some(e=>e.type==='sound'&&String(e.id)==='1'));
});

test('loss overlays result immediately while each authored role death completes before removal', () => {
  for (const [kind, duration] of [['GG1',89],['GG2',44],['GG3',44],['MM1',89],['MM2',44],['MM3',44]]) {
    const { game, events } = create(); game.rules.startRole(kind); game.consumeRules();
    game.rules.label('hitPerson'); game.rules.clearEvent(); game.consumeRules();
    assert.equal(game.status,'over'); assert.ok(game.over); assert.equal(game.role.removed,false);
    for(let i=0;i<duration;i++) game.tick(); assert.equal(game.role.removed,true,kind);
    const ids=events.filter(e=>e.type==='sound').map(e=>String(e.id));
    assert.deepEqual(ids.slice(-2),['80','2']);
    assert.equal(game.action('replay'),true); assert.equal(game.status,'playing'); assert.equal(game.rules.totalScore,0);
  }
});

test('MM3 trip uses parent147 plus nested720 at original child21; source events retain identity', () => {
  const { game, events } = create(); game.rules.startRole('MM3'); game.consumeRules();
  game.rules.label('lTrip'); game.rules.clearEvent(); game.consumeRules();
  for(let i=0;i<20;i++) game.tick();
  const sound=events.find(e=>e.type==='sound'&&e.id==='720'); assert.ok(sound); assert.equal(sound.timeline,'721'); assert.equal(sound.sourceFrame,21);
  assert.equal(timelineSounds.length,44); assert.equal(timelineSounds.filter(e=>e.timeline==='1060').length,0);
  assert.equal(new Set(timelineSounds.map(e=>e.id)).size,4);
});

test('source bounds include all dynamic plate instances and source color/rotation', () => {
  const { game } = create(); game.start(); game.rules.role.x=400; game.rules.srcObject.x=400; game.tick();
  const anchor=game.named(game.role,'dishs'); const box8=game.bounds(anchor); assert.ok(box8&&box8.every(Number.isFinite));
  assert.equal(game.rules.role.rotation,-90);
  game.rules.role.numDishs=9; game.applyPose(); const box9=game.bounds(anchor);
  assert.ok(box9[1]<box8[1]); assert.equal(anchor.children.filter(c=>c.dynamic).length,9);
});

test('mute toggles original two-frame button and preserves running scene', () => {
  const { game, events } = create(); game.start(); const role=game.role;
  game.action('mute'); assert.equal(game.mute.frame,2); assert.equal(game.role,role); assert.equal(game.rules.active,true);
  game.action('mute'); assert.equal(game.mute.frame,1); assert.deepEqual(events.filter(e=>e.type==='mute').map(e=>e.enabled),[false,true]);
});


test('production quantizes display x writes but retains plain spring Number state',()=>{
 const {game}=create();game.start();game.keyDown(39);game.advance(120);game.keyUp(39);game.advance(160);
 assert.equal(game.rules.role.x,8.7);assert.equal(game.role.matrix[4],174);
 assert.notEqual(game.rules.srcObject.x,Math.trunc(game.rules.srcObject.x*20)/20);
 const {game:bed}=create();bed.rules.random=()=>.123456789;bed.start();bed.pollTimers(3000);
 assert.equal(bed.rules.bed.x,81.6);assert.equal(bed.bed.matrix[4],1632);
});
