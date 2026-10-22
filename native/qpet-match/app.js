import { QPetMatchGame, FPS, BOARD_LAYOUT } from './game-logic.js';
import { createRenderer } from './renderer.js';
import { OriginalAudio } from './audio.js';
import { FrameClock } from './frame-clock.js';

const canvas = document.getElementById('game');
const loading = document.getElementById('loading');
const soundButton = document.getElementById('sound');
const game = new QPetMatchGame();
const sound = new OriginalAudio();
const clock = new FrameClock(FPS);
const controls = {};
['start', 'help', 'continue', 'retry'].forEach(name => { controls[name] = document.getElementById(name); });
let renderer, lastStatus = '', activePointer = null;
let ready = false, introSoundPlayed = false, endingSoundPlayed = false;
let rootCue = null;
function rootSound(id) { rootCue = {id, start: performance.now()}; sound.play(id); }
let pointer = {x: -1, y: -1, down: false};
const renderView = view => Object.assign({}, view, {
  introFrame: Math.min(47, view.frame + 1), pointer
});

let lastBoardImage = null;
function draw(view, force = false) {
  if (['playing', 'level', 'lost'].includes(view.status)) {
    // Root49 is stopped. Only its explicit native-controlled visual values can
    // change; keep ticking the 30fps rules/audio without repainting identical pixels.
    const image = Object.assign({}, view, {frame: 0, elapsedSeconds: 0}, {pointer});
    const key = JSON.stringify(image);
    if (!force && key === lastBoardImage) return;
    lastBoardImage = key;
  } else lastBoardImage = null;
  renderer.render(renderView(view));
}

function fitCanvas() {
  // Only rendering resolution changes. Every rule and pointer uses 500×400.
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.round(rect.width * ratio));
  const height = Math.max(1, Math.round(width * 400 / 500));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width; canvas.height = height;
  }
}
function syncControls(view) {
  const menuReady = view.status !== 'intro' || view.frame >= 46;
  const key = view.status + ':' + menuReady;
  if (key === lastStatus) return;
  lastStatus = key;
  controls.start.hidden = !menuReady || !['intro', 'help', 'won'].includes(view.status);
  controls.help.hidden = !menuReady || view.status !== 'intro';
  controls.continue.hidden = view.status !== 'level';
  controls.retry.hidden = view.status !== 'lost';
  const labels = {intro: '开始菜单', help: '游戏说明', playing: '游戏进行中', level: '进入下一关', lost: '时间到，再来一次', ending: '通关动画', won: '通关完成'};
  document.getElementById('status').textContent = labels[view.status] || '';
}
function consumeEvents() {
  game.drainEvents().forEach(event => {
    if (event.type === 'start') { sound.stop(); rootSound(274); endingSoundPlayed = false; }
    else if (event.type === 'sound') sound.play(event.id);
    else if (event.type === 'ending') { sound.stop(); rootCue = null; endingSoundPlayed = false; }
  });
}
function action(name) {
  if (!ready) return;
  if (game.view().status === 'intro' && game.view().frame < 46) return;
  const now = performance.now();
  if (name === 'start') { sound.stop(); game.start(now); }
  else if (name === 'help') { if (game.view().status === 'lost') { sound.stop(); rootCue = null; } game.showHelp(); }
  else if (name === 'continue') game.continueLevel(now);
  else if (name === 'restart' || name === 'retry') {
    sound.stop();
    if (game.view().status === 'won') game.restart(now); else game.retry(now);
  }
  else if (name === 'mute') { sound.stop(); rootCue = null; }
  else return;
  consumeEvents();
  const view = game.view();
  draw(view); syncControls(view);
}
function point(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  return {x: (clientX - rect.left) * 500 / rect.width, y: (clientY - rect.top) * 400 / rect.height};
}
function cellAt(p) {
  const col = Math.floor((p.x - BOARD_LAYOUT.x) / BOARD_LAYOUT.pitch);
  const row = Math.floor((p.y - BOARD_LAYOUT.y) / BOARD_LAYOUT.pitch);
  if (row < 0 || row >= 10 || col < 0 || col >= 6) return null;
  // The authored tiles are 34.2px with a 1px gap, not a continuous grid.
  if (p.x - BOARD_LAYOUT.x - col * BOARD_LAYOUT.pitch > BOARD_LAYOUT.tileSize ||
      p.y - BOARD_LAYOUT.y - row * BOARD_LAYOUT.pitch > BOARD_LAYOUT.tileSize) return null;
  return {row, col};
}
function down(p, id) {
  if (!ready || activePointer) return;
  const view = game.view();
  if (view.status === 'intro' && view.frame < 46) return;
  pointer = {x: p.x, y: p.y, down: true};
  activePointer = {id, action: renderer.hitTest(p.x, p.y, view.status)};
  // Source buttons 158/164 start on press; menu help and result buttons release.
  if (activePointer.action === 'start' && ['intro', 'help'].includes(view.status)) {
    activePointer.action = null; action('start'); return;
  }
  const cell = cellAt(p);
  if (cell) game.pointerDown(cell.row, cell.col);
  consumeEvents(); draw(game.view());
}
function up(p, id, cancelled) {
  if (!ready) return;
  pointer = {x: p.x, y: p.y, down: false};
  if (!activePointer) {
    // The original root onMouseUp also runs when the press began outside it.
    if (!cancelled) { game.pointerUp(); consumeEvents(); draw(game.view()); }
    return;
  }
  if (activePointer.id !== id) return;
  const pressed = activePointer; activePointer = null;
  if (!cancelled) {
    const hit = renderer.hitTest(p.x, p.y, game.view().status);
    if (pressed.action && hit === pressed.action) action(hit);
    else game.pointerUp();
  } else {
    // Touch cancellation releases a press already applied to the board.
    game.pointerUp();
  }
  consumeEvents(); draw(game.view());
}
function move(event) {
  const p = point(event.clientX, event.clientY);
  pointer = {x: p.x, y: p.y, down: !!activePointer};
}
if ('PointerEvent' in window) {
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerleave', () => { if (!activePointer) pointer = {x:-1, y:-1, down:false}; });
  canvas.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.isPrimary === false) return;
    event.preventDefault();
    down(point(event.clientX, event.clientY), event.pointerId);
    if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
  });
  window.addEventListener('pointerup', event => { event.preventDefault(); up(point(event.clientX, event.clientY), event.pointerId, false); });
  canvas.addEventListener('pointercancel', event => { up(point(event.clientX, event.clientY), event.pointerId, true); });
} else {
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseleave', () => { if (!activePointer) pointer = {x:-1, y:-1, down:false}; });
  canvas.addEventListener('mousedown', event => { if (event.button === 0) { event.preventDefault(); down(point(event.clientX, event.clientY), 'mouse'); } });
  window.addEventListener('mouseup', event => { if (event.button === 0) up(point(event.clientX, event.clientY), 'mouse', false); });
  canvas.addEventListener('touchstart', event => { event.preventDefault(); const t = event.changedTouches[0]; down(point(t.clientX, t.clientY), t.identifier); }, {passive: false});
  canvas.addEventListener('touchend', event => { event.preventDefault(); const t = event.changedTouches[0]; up(point(t.clientX, t.clientY), t.identifier, false); }, {passive: false});
  canvas.addEventListener('touchcancel', event => { const t = event.changedTouches[0]; up(point(t.clientX, t.clientY), t.identifier, true); }, {passive: false});
}
Object.keys(controls).forEach(name => controls[name].addEventListener('click', () => action(name)));
soundButton.addEventListener('click', async () => {
  if (sound.enabled) { sound.disable(); soundButton.textContent = '开启声音'; soundButton.setAttribute('aria-pressed', 'false'); }
  else {
    try {
      if (!await sound.enable()) throw new Error('Audio unsupported');
      soundButton.textContent = '关闭声音'; soundButton.setAttribute('aria-pressed', 'true');
      if (rootCue) sound.play(rootCue.id, (performance.now() - rootCue.start) / 1000);
    } catch (_) { sound.disable(); soundButton.textContent = '声音不可用'; }
  }
});
function resized() { fitCanvas(); if (ready) draw(game.view(), true); }
window.addEventListener('resize', resized);
if (window.visualViewport) window.visualViewport.addEventListener('resize', resized);
if (window.ResizeObserver) new ResizeObserver(resized).observe(document.getElementById('stage'));
function tick(now) {
  if (!ready) return;
  if (clock.accept(now)) {
    // Keep the authored 30fps callbacks and pass the real getTimer-style clock.
    // A missed browser frame is not turned into extra rule callbacks.
    const view = game.step(now);
    if (view.status === 'intro' && view.frame >= 1 && !introSoundPlayed) { rootSound(124); introSoundPlayed = true; }
    if (view.status === 'ending' && view.endingFrame >= 53 && !endingSoundPlayed) { rootSound(291); endingSoundPlayed = true; }
    consumeEvents(); draw(view); syncControls(view);
  }
  requestAnimationFrame(tick);
}
async function boot() {
  try {
    fitCanvas(); renderer = await createRenderer(canvas); ready = true;
    loading.hidden = true; draw(game.view()); syncControls(game.view());
    clock.reset(performance.now()); requestAnimationFrame(tick);
  } catch (error) {
    loading.textContent = '游戏资源未能加载，请刷新重试。';
    console.error('Game initialization failed', error);
  }
}
boot();
