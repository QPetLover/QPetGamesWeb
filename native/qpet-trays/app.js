import { TraysGame } from './scene.js';
import { createRenderer } from './renderer.js';
import { TraysAudio } from './audio.js';

(async () => {
const canvas = document.querySelector('#game'), loading = document.querySelector('#loading'), error = document.querySelector('#error'), soundButton = document.querySelector('#sound-toggle');
const audio = new TraysAudio(); const pointers = new Map(), heldKeys = new Set(); let game, renderer, pressedAction, pointerDirty = false;
function fail(reason) { error.hidden = false; error.textContent = '游戏暂时遇到问题，请刷新后再试。'; console.error(reason); }
try {
  game = new TraysGame({ now: performance.now(), onEvent(event) { audio.handle(event); if (event.type === 'mute') { soundButton.textContent = event.enabled ? '声音：开' : '声音：关'; soundButton.setAttribute('aria-pressed', String(!event.enabled)); } if (event.type === 'exit') location.href = '../'; } });
  [renderer] = await Promise.all([createRenderer(canvas), audio.prepare()]);
  function resize() { const rect = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.max(1, Math.round(rect.width * dpr)); canvas.height = Math.max(1, Math.round(canvas.width * 3 / 4)); renderer.render(game); }
  new ResizeObserver(resize).observe(canvas); resize(); loading.hidden = true;
  soundButton.addEventListener('click', () => { audio.resume().catch(fail); game.action('mute'); pointerDirty = true; });
  const point = event => { const box = canvas.getBoundingClientRect(); return { x: (event.clientX - box.left) * 800 / box.width, y: (event.clientY - box.top) * 600 / box.height }; };
  canvas.addEventListener('pointerdown', event => {
    event.preventDefault(); audio.resume().catch(fail); canvas.focus({ preventScroll: true }); canvas.setPointerCapture(event.pointerId);
    Object.assign(game.pointer, point(event), { down: true }); const action = renderer.hitTest(game.pointer.x, game.pointer.y); pressedAction = action;
    if (action && action !== 'mute') game.action(action); renderer.render(game);
  });
  canvas.addEventListener('pointermove', event => { Object.assign(game.pointer, point(event)); pointerDirty = true; });
  canvas.addEventListener('pointerup', event => {
    Object.assign(game.pointer, point(event), { down: false });
    if (pressedAction === 'mute' && renderer.hitTest(game.pointer.x, game.pointer.y) === 'mute') game.action('mute');
    pressedAction = null; pointerDirty = true;
  });
  canvas.addEventListener('pointercancel', () => { game.pointer.down = false; pressedAction = null; pointerDirty = true; });
  canvas.addEventListener('lostpointercapture', () => { game.pointer.down = false; pressedAction = null; pointerDirty = true; });
  function release() { for (const code of new Set([...heldKeys, ...[...pointers.values()].map(entry => entry.code)])) game.keyUp(code); heldKeys.clear(); pointers.clear(); for (const button of document.querySelectorAll('[data-key]')) button.classList.remove('held'); game.pointer.down = false; pressedAction = null; }
  addEventListener('keydown', event => { if ([37, 39].includes(event.keyCode)) { event.preventDefault(); heldKeys.add(event.keyCode); } audio.resume().catch(fail); game.keyDown(event.keyCode); });
  addEventListener('keyup', event => { if ([37, 39].includes(event.keyCode)) { event.preventDefault(); heldKeys.delete(event.keyCode); } game.keyUp(event.keyCode); });
  for (const button of document.querySelectorAll('[data-key]')) {
    const code = Number(button.dataset.key);
    button.addEventListener('pointerdown', event => { event.preventDefault(); audio.resume().catch(fail); button.setPointerCapture(event.pointerId); pointers.set(event.pointerId, { code, button }); button.classList.add('held'); game.keyDown(code); });
    const stop = event => { const entry = pointers.get(event.pointerId); if (!entry) return; pointers.delete(event.pointerId); game.keyUp(entry.code); if (![...pointers.values()].some(pointer => pointer.button === entry.button)) entry.button.classList.remove('held'); };
    for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(type, stop);
  }
  addEventListener('blur', release); addEventListener('orientationchange', release);
  document.addEventListener('visibilitychange', () => { release(); if (!document.hidden) game.resume(performance.now()); });
  let stopped = false;
  function frame(now) { if (stopped) return; try { if (!document.hidden) { const previousFrame = game.frame; game.advance(now); if (game.frame !== previousFrame || pointerDirty) { renderer.render(game); pointerDirty = false; } } requestAnimationFrame(frame); } catch (reason) { stopped = true; fail(reason); } }
  requestAnimationFrame(frame);
} catch (reason) { loading.hidden = true; fail(reason); }

})();
