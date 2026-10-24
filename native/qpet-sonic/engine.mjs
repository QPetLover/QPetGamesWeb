// Rules transcribed from the fixed SWF6 human derivative, not reconstructed
// from the screenshots. Source mapping is kept in the task's reports folder.
import { LEVELS } from './assets/levels.mjs';

export const FPS = 30;
export const STAGES = ['糖果王国', '万圣之夜', '圣诞星空'];
export const CUE_KEYS = [[], [37], [39], [38], [40], [37,38], [37,40], [39,38], [39,40], [37], [39]];
export const ACTIONS = {
  1: {pose:0, duration:Infinity},
  2: {pose:4, duration:8},
  3: {pose:5, duration:8},
  4: {pose:6, duration:7},
  5: {pose:7, duration:6},
  6: {pose:8, duration:5},
  7: {pose:9, duration:6},
  8: {pose:10, duration:5},
  9: {pose:11, duration:6},
  24: {pose:6, duration:6},
  25: {pose:7, duration:5},
};

export class SonicGame {
  constructor(emit = () => {}) {
    this.emit = emit;
    this.keys = new Set();
    this.phase = 'menu';
    this.level = 1;
    this.score = 0;
    this.damage = 1;
    this.tick = 0;
    this.backgroundTick = 0;
    this.resultTick = 0;
    this.soundPosition = 0;
    this.events = [];
    this.queue = [];
    this.manFrame = 1;
    this.manTick = 0;
    this.num1 = 0;
    this.flag = 1;
  }
  start(level = 1, keepScore = false) {
    if (!keepScore) this.score = 0;
    this.level = Math.max(1, Math.min(3, level));
    this.sequence = LEVELS[this.level - 1];
    this.phase = 'intro';
    this.damage = 1;
    this.tick = 0;
    this.backgroundTick = 0;
    this.resultTick = 0;
    this.sequenceIndex = 23; // source iii; iii25 begins at zero.
    this.sequenceCounter = 0;
    this.introTick = 0;
    this.hurtTick = 0;
    this.finishTick = 0;
    this.soundPosition = 0;
    this.events = [];
    this.queue = [];
    this.manFrame = 1;
    this.manTick = 0;
    this.num1 = 0;
    this.flag = 1;
    this.sun = {frame:1, tick:0};
    this.emit('stage', {level:this.level});
  }
  key(code, down) {
    if (down) this.keys.add(code);
    else { this.keys.delete(code); this.flag = 1; }
  }
  releaseAll() {
    if (this.keys.size) this.flag = 1;
    this.keys.clear();
  }
  setMan(frame) {
    frame = ({kkk:20, kk1:24, kk2:25, sss:26})[frame] ?? frame;
    // A repeated gotoAndStop to the same frame preserves the child instance.
    if (this.manFrame !== frame) this.manTick = 0;
    this.manFrame = frame;
  }
  input() {
    const first = this.queue[0];
    const comboReady = first && first.frame >= 14 && this.phase === 'playing';
    if (this.manFrame === 20) return;
    if (this.keys.has(37)) {
      if (this.keys.has(38)) {
        if (comboReady && first.type === 5) { this.num1 = 5; this.setMan(6); }
        else if (this.manFrame < 6) this.setMan('kk1');
      } else if (this.keys.has(40)) {
        if (comboReady && first.type === 6) { this.num1 = 6; this.setMan(7); }
        else if (this.manFrame < 6) this.setMan('kk2');
      } else if (this.manFrame === 1 && this.flag === 1) {
        this.flag = 0; this.num1 = 1; this.setMan(2);
      }
    } else if (this.keys.has(39)) {
      if (this.keys.has(38)) {
        if (comboReady && first.type === 7) { this.num1 = 7; this.setMan(8); }
        else if (this.manFrame < 6) this.setMan('kk1');
      } else if (this.keys.has(40)) {
        if (comboReady && first.type === 8) { this.num1 = 8; this.setMan(9); }
        else if (this.manFrame < 6) this.setMan('kk2');
      } else if (this.manFrame === 1 && this.flag === 1) {
        this.flag = 0; this.num1 = 2; this.setMan(3);
      }
    } else if (this.keys.has(38)) {
      if (this.manFrame === 1 && this.flag === 1) {
        this.flag = 0; this.num1 = 3; this.setMan(4);
      }
    } else if (this.keys.has(40)) {
      if (this.manFrame === 1 && this.flag === 1) {
        this.flag = 0; this.num1 = 4; this.setMan(5);
      }
    }
  }
  addScore(amount) {
    if (this.sun.frame === 1 && Math.trunc(this.score / 500) !== Math.trunc((this.score + amount) / 500)) {
      this.sun = {frame:2, tick:0};
      this.emit('sun', {frame:2});
    }
    this.score += amount;
  }
  resolve() {
    const cue = this.queue[0];
    if (!cue || cue.frame < 18 || this.phase !== 'playing') return;
    const type = cue.type, num = this.num1;
    if (type <= 2 && type === num && cue.coinFrame === 1) {
      cue.coinFrame = 2;
      cue.collected = true;
      this.addScore(10);
      this.emit('coin', {type});
    } else if (type > 2 && (
      (cue.frame >= 23 && type !== num) ||
      (((type - 1) % 2 + 1) !== num && num !== 0 && type >= 9) ||
      (type !== num && num !== 0 && type < 5)
    )) {
      if (this.sun.frame === 1) { this.sun = {frame:3,tick:0}; this.emit('sun', {frame:3}); }
      this.damage += 5;
      cue.hit = true;
      this.phase = 'hurt';
      this.hurtTick = 0;
      this.setMan(20);
      this.queue.shift();
      this.emit('hurt', {type, damage:this.damage});
    } else if (type > 2 && (
      (((type - 1) % 2 + 1) === num && type >= 9) || (type === num && type < 9)
    )) {
      this.queue.shift();
      cue.passed = true;
      this.addScore(20);
      this.num1 = 0;
      this.emit('pass', {type});
    }
  }
  animateMan() {
    this.manTick++;
    if (this.manFrame === 20) {
      if (this.manTick === 1) this.emit('sound', {id:397});
      if (this.manTick >= 23) {
        if (this.damage < 100) { this.num1 = 0; this.setMan(1); }
        else { this.phase = 'over'; this.emit('over', {score:this.score}); }
      }
    } else {
      const duration = ACTIONS[this.manFrame]?.duration;
      if (duration && this.manTick >= duration - 1) { this.num1 = 0; this.setMan(1); }
    }
  }
  advanceWorld() {
    if (this.sequenceIndex === this.sequence.length) {
      this.phase = 'finishing'; this.finishTick = 0; this.setMan('sss');
      return;
    }
    for (const event of this.events) event.frame++;
    for (const event of this.queue.slice()) {
      if (event.frame >= 28 && this.queue[0] === event) this.queue.shift();
    }
    this.events = this.events.filter(event => event.frame < 29);
    this.sequenceCounter++;
    this.sequenceIndex = Math.round(this.sequenceCounter);
    const type = this.sequence[this.sequenceIndex];
    if (type > 0) {
      const event = {type, frame:2, index:this.sequenceIndex, coinFrame:1};
      this.events.push(event); this.queue.push(event);
    }
    this.soundPosition += 1000 / FPS;
  }
  step() {
    if (this.phase === 'menu') {this.tick++;return;}
    if (['over','clear','victory'].includes(this.phase)) {
      this.resultTick++;
      this.animateSun();
      if(this.resultTick===(this.phase==='victory'?2:1))this.emit('sound',{id:this.phase==='over'?711:746});
      return;
    }
    this.tick++;
    if(this.phase!=='hurt')this.backgroundTick++;
    this.animateMan();
    this.animateSun();
    if (this.phase === 'intro') {
      this.input();
      this.introTick++;
      if (this.introTick === 4) this.emit('sound', {id:504});
      if (this.introTick === 42) this.emit('sound', {id:505});
      if (this.introTick >= 44) { this.phase = 'playing'; this.emit('music', {level:this.level, offset:0}); }
      return;
    }
    if (this.phase === 'hurt') {
      if (++this.hurtTick >= 25 && this.damage < 100) {
        this.phase = 'playing'; this.emit('music', {level:this.level,offset:this.soundPosition / 1000});
      }
      this.input();
      return;
    }
    if (this.phase === 'finishing') {
      if (++this.finishTick >= 14) {
        this.phase = this.level === 3 ? 'victory' : 'clear';
        this.emit('clear', {level:this.level, score:this.score});
      }
      return;
    }
    if (this.phase === 'playing') { this.advanceWorld(); this.input(); this.resolve(); }
  }
  animateSun() {
    if (this.sun.frame !== 1) this.sun.tick++;
    if ((this.sun.frame === 2 && this.sun.tick >= 85) || (this.sun.frame === 3 && this.sun.tick >= 62)) this.sun = {frame:1,tick:0};
  }
  get progress() { return this.sequence ? (this.sequenceIndex - 19) / this.sequence.length : 0; }
  get pose() {
    if (this.phase === 'over') return 14;
    if (this.phase === 'victory' || this.phase === 'clear') return 15;
    if (this.manFrame === 20) return 13;
    const action = ACTIONS[this.manFrame];
    return action ? (this.manFrame === 1 ? Math.floor(this.tick / 3) % 4 : action.pose) : 0;
  }
}
