/** The original 25fps clock. A source step is also a paint commit; an extra
 * wall-time paint throttle would turn25fps into20fps on a60Hz display. */
export class SourceFrameClock{
 constructor(fps,now){this.step=1000/fps;this.last=now;this.pending=0;}
 reset(now){this.last=now;this.pending=0;}
 advance(now,visible=true){if(!visible){this.reset(now);return 0;}this.pending+=Math.min(250,Math.max(0,now-this.last));this.last=now;const steps=Math.floor((this.pending+1e-9)/this.step);this.pending-=steps*this.step;return steps;}
}
