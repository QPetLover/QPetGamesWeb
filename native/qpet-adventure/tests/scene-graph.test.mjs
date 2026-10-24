import test from 'node:test';
import assert from 'node:assert/strict';
import {SceneGraph,STATIC_DEPTH_OFFSET,multiply,inverse,transformPoint} from '../common/scene-graph.js';

const matrix=[1,0,0,1,0,0];
function fixture(onFrame=()=>{}) {
    const row=(id,depth,born=1,extra={})=>({id,depth,born,matrix:[...matrix],...extra});
    const instances={main:{frames:[[row('actor',1),row('leaf',2,1,{name:'Player'})],
        [row('actor',1),row('leaf',2,1,{name:'Player'})],[row('actor',1,3)]],labels:{menu:1,next:2,rebuild:3}},
        actor:{frames:[[row('leaf',1)],[]],labels:{idle:1,empty:2}}};
    return new SceneGraph({instances,localBounds:{leaf:[0,0,10,10]},linkages:{Player:'actor'},onFrame});
}
test('static placement birth preserves or replaces identity; dynamic depth does not replace authored depth',()=>{
    const g=fixture();g.createRoot();const actor=g.root.children[0];g.stop(actor);
    const dynamic=g.attach(g.root,'Player','Player',1);assert.equal(dynamic.depth,1);
    assert.equal(g.root.children.length,3);assert.equal(g.named(g.root,'PLAYER').depth,2-STATIC_DEPTH_OFFSET);
    g.goto(g.root,2);assert.equal(g.root.children[0],actor);assert.equal(actor.playing,false);
    g.goto(g.root,3);assert.notEqual(g.root.children[0],actor);assert.equal(actor.removed,true);
    assert.equal(dynamic.removed,false);assert.equal(g.named(g.root,'player'),dynamic);
});
test('current-frame geometry, parent transforms, script movement and authored placement changes',()=>{
    const g=fixture();g.createRoot();const actor=g.root.children[0];g.stop(actor);
    actor.x=20.049;actor.y=-3.149;assert.equal(actor.x,20);assert.equal(actor.y,-3.1);
    assert.deepEqual(g.bounds(actor),[20,-3.1,30,6.9]);
    g.goto(g.root,2);assert.equal(actor.x,20,'unchanged authored placement does not overwrite script position');
    g.goto(actor,'EMPTY');assert.equal(g.localBoundsOf(actor),null,'a stopped empty frame has no historical union bounds');
    g.goto(actor,1);const point=g.localToGlobal(actor,4,5);assert.deepEqual(g.globalToLocal(actor,point.x,point.y),{x:4,y:5});
    const old=actor.scaleX;actor.scaleX=NaN;assert.equal(actor.scaleX,old);actor.scaleX=-100;assert.equal(actor.scaleX,-100);
});
test('queued frame code keeps its source frame after another action changes the playhead; removed owners stop streams',()=>{
    const events=[],frames=[];const g=fixture((n,graph,sourceFrame)=>frames.push([n.uid,sourceFrame,n.frame]));g.onEvent=e=>events.push([e.type,e.owner,e.reason]);g.createRoot();
    const actor=g.root.children[0];g.ready=false;g.goto(actor,2);g.goto(actor,1);g.flushActions();
    assert.equal(frames.filter(([uid,f,current])=>uid===actor.uid&&f===2&&current===1).length,1);
    assert.equal(frames.filter(([uid,f])=>uid===actor.uid&&f===1).length,2);
    g.remove(actor);assert(events.some(([type,uid,why])=>type==='stream-stop'&&uid===actor.uid&&why==='remove'));
});
test('timeline advancement snapshots new children and keeps one-frame clips available to chapter callbacks',()=>{
    const g=fixture();g.createRoot();const before=g.root.children[0];g.stop(g.root);g.advance();
    assert.equal(before.frame,2);g.advance();assert.equal(before.frame,1);assert.equal(before.children[0].frame,1);
    assert.equal(before.children[0].age,0,'new child is not advanced twice in its birth pass');
    const first=g.attach(g.root,'actor','same',50),second=g.attach(g.root,'actor','same',60);
    assert.equal(g.named(g.root,'same'),first);g.swapDepths(first,second);assert.equal(g.named(g.root,'same'),second);
});
test('matrix inverses cover transformed stage coordinates',()=>{
    const m=multiply([2,0,0,3,10,-20],[0,1,-1,0,5,6]),p=transformPoint(m,4,-3),q=transformPoint(inverse(m),p.x,p.y);
    assert(Math.abs(q.x-4)<1e-12&&Math.abs(q.y+3)<1e-12);assert.equal(inverse([0,0,0,0,1,1]),null);
});
test('playing a current frame retains its stream; stopping it terminates that owner',()=>{
 const g=fixture(),events=[];g.createRoot();g.onEvent=e=>events.push(e);const node=g.root.children[0];
 g.goto(node,1,{play:true});assert.equal(events.length,0);assert.equal(node.playing,true);
 g.goto(node,1,{play:false});assert.equal(events.at(-1).type,'stream-stop');assert.equal(events.at(-1).owner,node.uid);
 events.length=0;g.goto(node,2,{play:true});assert.equal(events.filter(e=>e.type==='stream-stop'&&e.owner===node.uid).length,1);
});
test('explicit queue preserves per-owner Method then frame action and looks up handler at execution',()=>{
 const calls=[],g=fixture(n=>{if(n.id==='actor'&&n.frame===2){n.onEnterFrame=()=>calls.push('new');calls.push('frame');}});g.createRoot();const node=g.root.children[0];node.onEnterFrame=()=>calls.push('old');calls.length=0;
 g.queueCallback(node,n=>n.onEnterFrame?.());g.advanceNode(node,{deferActions:true});assert.deepEqual(calls,[]);g.flushActions();assert.deepEqual(calls,['old','frame']);
 calls.length=0;g.queueCallback(node,n=>n.onEnterFrame?.());node.onEnterFrame=()=>calls.push('latest');g.flushActions();assert.deepEqual(calls,['latest']);
});
