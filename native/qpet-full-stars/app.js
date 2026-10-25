import { FullStarsGame } from './scene.js';
import { createRenderer } from './renderer.js';

(async () => {
  const canvas = document.querySelector('#game'), loading = document.querySelector('#loading'), error = document.querySelector('#error');
  const scoreKey = 'qpet-full-stars:oristarry:ang';
  let activePointer = null, pressedAction = null, pointerDirty = false;
  function fail(reason) { error.hidden = false; error.textContent = '游戏暂时遇到问题，请刷新后再试。'; console.error(reason); }
  try {
    const game = new FullStarsGame({ now: performance.now(), loadScore() { try { const value = localStorage.getItem(scoreKey); return value === null ? false : Number(value); } catch { return false; } }, saveScore(score) { try { localStorage.setItem(scoreKey, String(score)); } catch {} } });
    const renderer = await createRenderer(canvas);
    function resize() { const rect = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.max(1, Math.round(rect.width * dpr)); canvas.height = Math.max(1, Math.round(canvas.width * 4 / 5)); renderer.render(game); }
    new ResizeObserver(resize).observe(canvas); resize(); loading.hidden = true;
    function point(event) { const rect = canvas.getBoundingClientRect(); game.point((event.clientX - rect.left) * 500 / rect.width, (event.clientY - rect.top) * 400 / rect.height); pointerDirty = true; }
    function release() { activePointer = null; pressedAction = null; game.pointer.down = false; pointerDirty = true; }
    canvas.addEventListener('pointerdown', event => {
      if (activePointer !== null) return;
      event.preventDefault(); canvas.focus({ preventScroll: true }); activePointer = event.pointerId; canvas.setPointerCapture(event.pointerId);
      point(event); game.pointer.down = true; pressedAction = renderer.hitTest(game.pointer.x, game.pointer.y); renderer.render(game);
    });
    canvas.addEventListener('pointermove', event => { if (activePointer !== null && event.pointerId !== activePointer) return; if (event.pointerType !== 'mouse' && event.pointerId !== activePointer) return; point(event); });
    canvas.addEventListener('pointerup', event => {
      if (event.pointerId !== activePointer) return;
      point(event); const releasedAction = renderer.hitTest(game.pointer.x, game.pointer.y), action = pressedAction; release();
      if (action && releasedAction === action) game.action(action);
    });
    for (const type of ['pointercancel', 'lostpointercapture']) canvas.addEventListener(type, event => { if (event.pointerId === activePointer) release(); });
    addEventListener('blur', release); addEventListener('orientationchange', release);
    document.addEventListener('visibilitychange', () => { release(); if (!document.hidden) game.resume(performance.now()); });
    let stopped = false;
    function frame(now) { if (stopped) return; try { if (!document.hidden) { const previous = game.frame; game.advance(now); if (game.frame !== previous || pointerDirty) { renderer.render(game); pointerDirty = false; } } requestAnimationFrame(frame); } catch (reason) { stopped = true; fail(reason); } }
    game.resume(performance.now()); requestAnimationFrame(frame);
  } catch (reason) { loading.hidden = true; fail(reason); }
})();
