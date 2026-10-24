import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {QQtangGame} from '../game-logic.js';
import {instances} from '../assets/instances.js';
import {stages} from '../stage-data.js';

const source=fs.readFileSync(new URL('./source-stage-transitions.as',import.meta.url),'utf8');
test('restart/nextStage enter source map2 now and rebuild at init3 on next tick; first begin stays2 ticks',()=>{
 assert.equal(instances[606].labels.map,2);
 for(const action of['restart','next-stage']){
  let rng=0,created=0,serial=0;const intervals=new Map(),timeouts=new Map();
  const scheduler={now:()=>0,setInterval(fn){created++;const id=++serial;intervals.set(id,fn);return id;},clearInterval(id){intervals.delete(id);},setTimeout(fn){const id=++serial;timeouts.set(id,fn);return id;},clearTimeout(id){timeouts.delete(id);}};
  const g=new QQtangGame({startStage:3,random:()=>{rng++;return 0;},scheduler});
  g.action('single');g.tick();assert.equal(g.status,'setup');assert.equal(rng,0);
  g.tick();assert.equal(g.status,'playing');assert.equal(rng,4);assert.equal(created,1);
  g.scores[0].score=55;g.scores[0].totalScore=155;g.gameover('lose');
  const done=[...timeouts.values()][0];timeouts.clear();done();assert.equal(g.status,'result');
  const scores=g.scores.map(s=>({...s})),calls=[],parent={};
  for(let i=0;i<4;i++)parent['heroObj'+(i+1)]=scores[i];
  const scope={stageNum:g.stage,_parent:parent,gotoAndStop(label){calls.push(['goto',label]);},play(){calls.push(['play']);}};
  vm.runInNewContext(source,scope);scope[action==='restart'?'restart':'nextStage']();
  assert.deepEqual(calls,[['goto','map'],['play']]);
  const grid=g.grid,heroes=g.heroes,timer=g.timer,oldRng=rng,oldCreated=created;
  g.action(action);assert.equal(g.stage,scope.stageNum);assert.deepEqual(g.scores,scores);
  assert.equal(g.status,'setup');assert.equal(g.setupDelay,1);assert.equal(g.level,3);
  assert.equal(g.grid,grid);assert.equal(g.heroes,heroes);assert.equal(g.timer,timer);
  assert.equal(rng,oldRng);assert.equal(created,oldCreated);assert.equal(intervals.size,0);
  g.tick();assert.equal(g.status,'playing');assert.equal(g.level,action==='restart'?1:4);
  assert.notEqual(g.grid,grid);assert.notEqual(g.heroes,heroes);assert.equal(rng,oldRng+4);
  assert.equal(created,oldCreated+1);assert.equal(intervals.size,1);assert.equal(g.timer,180);
  const stage=stages[g.stage-1];assert.deepEqual(g.heroes.map(h=>[h.x,h.y]),stage.heroMap);
  assert.deepEqual(g.grid.map(row=>row.map(c=>c.bg)),stage.map.map(row=>row.map(cell=>cell[0])));
 }
});
