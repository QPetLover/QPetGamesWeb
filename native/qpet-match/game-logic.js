/* Native port of Q宠速配.swf AVM1 rules, not a SWF runtime.
 * Source: match-export/scripts/frame_49/DoAction.as, sprites 11/53/47/236.
 * Provenance and remaining timeline-order checks: native-qpet-match/reference/rules-audit.md.
 */
export const FPS = 30;
export const BOARD_LAYOUT = Object.freeze({rows: 10, columns: 6, x: 201.8, y: 13,
  firstX: 218.9, firstY: 30.1, pitch: 35.2, tileSize: 34.2});
export const PIPE_PORTS = Object.freeze({1: ['left', 'right'], 2: ['up', 'down'],
  3: ['up', 'right'], 4: ['down', 'right'], 5: ['left', 'down'], 6: ['left', 'up']});
const matrix = value => Array.from({length: 10}, () => Array(6).fill(value));
const copy = board => board.map(row => row.slice());
const inside = (row, col) => row >= 0 && row < 10 && col >= 0 && col < 6;
const center = (row, col) => ({x: BOARD_LAYOUT.firstX + col * 35.2, y: BOARD_LAYOUT.firstY + row * 35.2});
// DefineSprite_54 retains the same obj instance for frames 1–2 (sprite 11)
// and frames 3–6 (sprite 53); effect2_mc is retained across all six frames.
const sameObjectSymbol = (a, b) => (a <= 2) === (b <= 2);

/** The original m_check scan, including its special left-edge restart/visited rule.
 * Returns all left-connected highlights, not merely complete paths. Hearts are
 * consumed in top-to-bottom scan order. A completed path needs no active hearts.
 */
export function scanBoard(board, left = Array(10).fill(false), right = Array(10).fill(false)) {
  const cellFrames = matrix(1), starts = left.slice(), ends = right.slice(), routes = [];
  for (let startRow = 0; startRow < 10; startRow++) {
    let row = startRow, col = 0, from = '', previous = 0, path = [], steps = 0;
    while (inside(row, col)) {
      // The AS uses a degree-two path. This guard exposes malformed inputs; it
      // does not silently shorten a legal path or replace original routing.
      if (++steps > 1200) throw new Error('Original m_check did not terminate');
      const type = board[row][col];
      if (col === 0 && cellFrames[row][col] === 2) break;
      let to = null;
      const leftOK = from === 'left' && [1, 3, 4].includes(previous);
      const rightOK = from === 'right' && [1, 5, 6].includes(previous);
      const upOK = from === 'up' && [2, 4, 5].includes(previous);
      const downOK = from === 'down' && [2, 3, 6].includes(previous);
      if (col === 0 && [1, 5, 6].includes(type)) {
        path = [];
        to = type === 1 ? 'right' : type === 5 ? 'down' : 'up';
        cellFrames[row][col] = 2;
      } else if (type === 1) to = leftOK ? 'right' : rightOK ? 'left' : null;
      else if (type === 2) to = upOK ? 'down' : downOK ? 'up' : null;
      else if (type === 3) to = upOK ? 'right' : rightOK ? 'up' : null;
      else if (type === 4) to = rightOK ? 'down' : downOK ? 'right' : null;
      else if (type === 5) to = leftOK ? 'down' : downOK ? 'left' : null;
      else if (type === 6) to = leftOK ? 'up' : upOK ? 'left' : null;
      if (!to) break;
      if (cellFrames[row][col] === 1) cellFrames[row][col] = 2;
      path.push({row, col});
      previous = type;
      if (to === 'right') { col++; from = 'left'; }
      else if (to === 'left') { col--; from = 'right'; }
      else if (to === 'down') { row++; from = 'up'; }
      else { row--; from = 'down'; }
    }
    if (col === 6 && [1, 3, 4].includes(previous)) {
      const first = path[0], last = path[path.length - 1];
      const matched = !!(starts[first.row] && ends[last.row]);
      path.forEach(cell => { cellFrames[cell.row][cell.col] = 3; });
      if (matched) { starts[first.row] = false; ends[last.row] = false; }
      routes.push({path, startRow: first.row, exitRow: last.row, matched,
        bonus: matched ? path.length * 10 : 0});
    }
  }
  return {cellFrames, routes, left: starts, right: ends};
}

export class QPetMatchGame {
  constructor({rng = Math.random} = {}) {
    this.rng = rng;
    this.events = [];
    this.status = 'intro';
    this.frame = 0;
    this.board = matrix(1);
    this.cellFrames = matrix(1);
    this.effectFrames = matrix(1);
    this.left = Array(10).fill(false);
    this.right = Array(10).fill(false);
    this.level = 1; this.target = 2; this.pairs = 0;
    this.score = 0; this.displayScore = 0; this.levelSeconds = 60;
    this.timeFrame = 1; this.elapsedSeconds = 0;
    this.heart = {x: 0, y: 0, visible: false, moving: false, index: 0, path: []};
    this.pipesVisible = false; this.notReady = false; this.perfect = false;
    this.lineSoundFrame = 1; this.lineFrame = 1; this.cornFrame = 1;
    this._lineStarted = -1; this._lineMcStarted = -1; this._cornStarted = -1;
    this._clearDefined = true;
    this._clearStarted = matrix(-1); this._effectStarted = matrix(-1);
    this._next = matrix(null);
    this._clearPlaying = matrix(false);
  }
  _emit(type, detail = {}) { this.events.push(Object.assign({type, frame: this.frame}, detail)); }
  _random(count) { return Math.floor(this.rng() * count); }
  showIntro() { this.status = 'intro'; this.pipesVisible = false; }
  showHelp() { this.status = 'help'; this.pipesVisible = false; }
  start(nowMs = 0) {
    this.frame = 0; this.score = 0; this.displayScore = 0;
    this.level = 1; this.target = 2; this.pairs = 0; this.levelSeconds = 60;
    this.status = 'playing'; this.startTime = nowMs; this.effectTime = nowMs;
    this.nowMs = nowMs; this.elapsedSeconds = 0; this.timeFrame = 1;
    this.left.fill(false); this.right.fill(false);
    this.notReady = false; this.perfect = false; this._clearDefined = true;
    this.lineSoundFrame = 1; this.lineFrame = 1; this.cornFrame = 1;
    this._lineStarted = -1; this._lineMcStarted = -1; this._cornStarted = -1;
    this.heart = {x: 0, y: 0, visible: false, moving: false, index: 0, path: []};
    this.events = []; this._initBoard(); this._initPoints(this.target); this._check();
    this.pipesVisible = true;
    this._emit('start');
    return this.view();
  }
  restart(nowMs = this.nowMs) { return this.start(nowMs); }
  // Original game-over button 261 plays frame 50; frame 51 branches on level,
  // not success. In level 5 it therefore enters the ending even after timeout.
  retry(nowMs = this.nowMs) {
    if (this.status === 'lost' && this.level === 5) this._beginEnding();
    else this.start(nowMs);
  }
  _initBoard() {
    this.board = Array.from({length: 10}, () => Array.from({length: 6}, () => this._random(6) + 1));
    this.cellFrames = matrix(1); this.effectFrames = matrix(1);
    this._clearPlaying = matrix(false); this._clearStarted = matrix(-1);
    this._effectStarted = matrix(-1); this._next = matrix(null);
  }
  _initPoints(count) {
    [this.left, this.right].forEach(points => {
      let selected = 0;
      while (selected < count) {
        const row = this._random(10);
        if (!points[row]) { points[row] = true; selected++; }
      }
    });
  }
  _check() {
    if (!this._clearDefined) this.notReady = false;
    const result = scanBoard(this.board, this.left, this.right);
    this.cellFrames = result.cellFrames; this._clearPlaying = matrix(false);
    this.left = result.left; this.right = result.right;
    for (const route of result.routes) {
      this.notReady = true;
      route.path.forEach((cell, i) => {
        this._next[cell.row][cell.col] = route.path[i + 1] || null;
        this.effectFrames[cell.row][cell.col] = 1;
        // AS writes a single shared heart path without truncating old tails.
        this.heart.path[i] = cell;
      });
      this.heart.path[route.path.length] = null; // AS i <= cl adds undefined sentinel.
      const point = center(route.path[0].row, route.path[0].col);
      this.heart.x = point.x - 34.2; this.heart.y = point.y;
      this.heart.visible = true; this.heart.moving = true;
      if (route.matched) {
        if (this.lineSoundFrame === 1) {
          this.lineSoundFrame = 2; this._lineStarted = this.frame;
          this._emit('sound', {id: 272, source: 'sprite273.frame2'});
        }
        this.score += route.bonus; this.pairs++; this.perfect = true;
        this._emit('match', {route});
      } else this._emit('connection', {route});
    }
    this._clearDefined = true;
    return result;
  }
  pointerDown(row, col) {
    if (this.status !== 'playing' || this.notReady || !inside(row, col)) return false;
    const previous = this.board[row][col], next = previous % 6 + 1;
    this.board[row][col] = next;
    if (!sameObjectSymbol(previous, next)) {
      this.cellFrames[row][col] = 1;
      this._clearPlaying[row][col] = false;
    }
    this._emit('click', {row, col, pipeType: this.board[row][col]});
    this._emit('sound', {id: 2, source: 'click_mc.start'});
    return true;
  }
  pointerUp() {
    const nowClick = !this.cellFrames.some(row => row.some(frame => frame > 2));
    if (!this.notReady && this.status === 'playing' && nowClick) this._check();
    if (!this._clearDefined) this.notReady = false;
  }
  continueLevel(nowMs = this.nowMs) {
    if (this.status !== 'level') return false;
    this.startTime = nowMs; this.effectTime = nowMs; this.nowMs = nowMs;
    this.status = 'playing'; this.pipesVisible = true;
    this._emit('continue'); return true;
  }
  _nextLevel() {
    const previousLevel = this.level;
    this.levelSeconds += 30; this.level++; this.target = this.level * 2; this.pairs = 0;
    this._initBoard(); this._initPoints(this.target); this._check();
    this.status = 'level'; this.pipesVisible = false;
    this._emit('sound', {id: 257, source: 'sprite258.frame1'});
    if (previousLevel === 3 || previousLevel === 4) {
      this.cornFrame = 2; this._cornStarted = this.frame;
    }
    this._emit('level', {level: this.level, cornBonusAnimation: previousLevel === 3 || previousLevel === 4});
  }
  _beginEnding() {
    this.status = 'ending'; this.endingFrame = 50; this.pipesVisible = false;
    this._emit('ending');
  }
  _playClear(cell) {
    if (!cell) return;
    this.cellFrames[cell.row][cell.col] = 3;
    this._clearPlaying[cell.row][cell.col] = true;
    this._clearStarted[cell.row][cell.col] = this.frame;
  }
  _stepHeart() {
    const heart = this.heart;
    if (!heart.moving) { heart.visible = false; return; }
    const cell = heart.path[heart.index];
    if (!cell) return; // undefined AS coordinates produce NaN and no motion.
    const point = center(cell.row, cell.col), x = Math.floor(point.x), y = Math.floor(point.y);
    if (x === heart.x && y === heart.y) heart.index++;
    if (Math.abs(heart.x - x) < 10) heart.x = x;
    if (Math.abs(heart.y - y) < 10) heart.y = y;
    if (x > heart.x) heart.x += 17;
    else if (x < heart.x) heart.x -= 17;
    else if (y > heart.y) heart.y += 17;
    else if (y < heart.y) heart.y -= 17;
    else if (heart.path.length === heart.index + 1) {
      this._playClear(heart.path[0]);
      heart.path = []; this._clearDefined = false;
      heart.visible = false; heart.index = 0; heart.moving = false;
    }
  }
  _stepCells() {
    for (let row = 0; row < 10; row++) for (let col = 0; col < 6; col++) {
      if (this._clearPlaying[row][col] && this._clearStarted[row][col] < this.frame) {
        const frame = ++this.cellFrames[row][col];
        if (frame === 4) { this._playClear(this._next[row][col]); this._next[row][col] = null; }
        if (frame === 10) {
          const previousType = this.board[row][col], type = this._random(6) + 1;
          this.board[row][col] = type; this._clearPlaying[row][col] = false;
          this.cellFrames[row][col] = sameObjectSymbol(type, previousType) ? 10 : 1;
          this.score += 10; this._clearDefined = false;
          this._emit('clear', {row, col, pipeType: type, points: 10});
          if (col === 5 && !this._next[row][col]) this._check();
          this.notReady = false; // Source sets this after (not before) m_check.
        }
      } else if (!this._clearPlaying[row][col] && this.cellFrames[row][col] === 10) {
        this.cellFrames[row][col] = 1;
      }
      if (this.effectFrames[row][col] > 1 && this._effectStarted[row][col] < this.frame) {
        const effectFrame = ++this.effectFrames[row][col];
        if (effectFrame === 25) this._emit('sound', {id: 44, source: 'sprite47.frame25', row, col});
        else if (effectFrame === 49) {
          if (this.cellFrames[row][col] === 1) {
            this.board[row][col] = this._random(6) + 1;
            this._emit('disturb', {row, col, pipeType: this.board[row][col]});
          }
          if (!this.notReady) this._check();
        } else if (effectFrame === 50) this.effectFrames[row][col] = 1;
      }
    }
  }
  _stepAuxiliary() {
    if (this.lineSoundFrame > 1 && this._lineStarted < this.frame) {
      if (++this.lineSoundFrame > 50) this.lineSoundFrame = 1;
    }
    // line_mc is sprite271, distinct from line_sound (sprite273). No original
    // script starts line_mc; retain its frame action without inventing a trigger.
    if (this.lineFrame > 1 && this._lineMcStarted < this.frame) {
      this.lineFrame++;
      if (this.lineFrame === 3 && this.perfect) {
        this.perfect = false; this.lineFrame = 20;
      } else if (this.lineFrame === 4) {
        this._emit('sound', {id: 270, source: 'sprite271.frame4'});
      } else if (this.lineFrame > 20) this.lineFrame = 1;
    }
    if (this.cornFrame > 1 && this._cornStarted < this.frame) {
      if (++this.cornFrame > 45) this.cornFrame = 1;
    }
  }
  /** Call once per authored 30 fps frame, passing the monotonic millisecond clock.
   * Do not call once per display refresh, or replace +33 compensation with a pause.
   */
  step(nowMs) {
    this.nowMs = nowMs; this.frame++;
    if (this.status === 'ending') {
      if (++this.endingFrame >= 193) { this.endingFrame = 193; this.status = 'won'; this._emit('ending-complete'); }
      return this.view();
    }
    if (!['playing', 'level', 'lost'].includes(this.status)) return this.view();
    if (this.status === 'playing') {
      if ((nowMs - this.effectTime) / 1000 > 7) {
        const col = this._random(6), row = this._random(10);
        if (!this.notReady) {
          this.effectFrames[row][col] = 2; this._effectStarted[row][col] = this.frame;
          this._emit('disturb-start', {row, col});
        }
        this.effectTime = nowMs;
      }
      this.elapsedSeconds = (nowMs - this.startTime) / 1000;
      if (this.notReady) this.startTime += 33;
      const got = Math.round(100 * this.elapsedSeconds / this.levelSeconds);
      this.timeFrame = Math.max(1, Math.min(100, got));
      if (got === 100) {
        this.pipesVisible = false; this.status = 'lost'; this._emit('timeout');
      }
      // Kept after timeout exactly as in the source's one onEnterFrame body.
      if (this.displayScore === this.score && this.target === this.pairs && !this.notReady) {
        if (this.level === 5) this._beginEnding();
        else this._nextLevel();
      }
    }
    if (this.displayScore < this.score) {
      this.displayScore += 5; this._emit('score-tick');
      this._emit('sound', {id: 1, source: 'score_mc.start'});
    }
    // Explicit authored child timeline callbacks. Their relative phase still
    // requires visual comparison with the original player (see audit).
    this._stepHeart(); this._stepCells(); this._stepAuxiliary();
    return this.view();
  }
  view() {
    return {status: this.status, frame: this.frame, board: copy(this.board),
      cellFrames: copy(this.cellFrames), effectFrames: copy(this.effectFrames),
      left: this.left.slice(), right: this.right.slice(), level: this.level,
      target: this.target, pairs: this.pairs, score: this.score, displayScore: this.displayScore,
      levelSeconds: this.levelSeconds, elapsedSeconds: this.elapsedSeconds,
      timeFrame: this.timeFrame, notReady: this.notReady, pipesVisible: this.pipesVisible,
      heart: {x: this.heart.x, y: this.heart.y, visible: this.heart.visible},
      perfect: this.perfect, lineSoundFrame: this.lineSoundFrame, lineFrame: this.lineFrame, cornFrame: this.cornFrame,
      endingFrame: this.endingFrame || null};
  }
  drainEvents() { const events = this.events; this.events = []; return events; }
}
