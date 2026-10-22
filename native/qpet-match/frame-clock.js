// Gate requestAnimationFrame onto the authored frame rate. A delayed browser
// callback advances once with the actual time; missed frames are not replayed.
export class FrameClock {
  constructor(fps, origin = 0) {
    this.fps = fps;
    this.reset(origin);
  }
  reset(origin) {
    this.origin = origin;
    this.lastFrame = 0;
  }
  accept(now) {
    // Absolute frame indices avoid modulo roundoff replaying a boundary. The
    // epsilon is 0.0000034 ms at 30fps, only for floating-point boundary noise.
    const frame = Math.floor((now - this.origin) * this.fps / 1000 + 1e-7);
    if (frame <= this.lastFrame) return false;
    this.lastFrame = frame;
    return true;
  }
}
