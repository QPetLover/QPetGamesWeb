import test from 'node:test';import assert from 'node:assert/strict';
import {SceneGraph} from '../common/scene-graph.js';import {AdventureRenderer} from '../common/renderer.js';
const I=[1,0,0,1,0,0],row=(id,depth,extra={})=>({id,depth,matrix:I,...extra});
function fixture(rows){const graph=new SceneGraph({instances:{main:{frames:[rows]},button:{frames:Array.from({length:4},()=>[row('wide',1)])}},symbolKinds:{button:'button1',wide:'shape1',mask:'shape2',inner:'shape3'},localBounds:{wide:[0,0,100,100],mask:[0,0,30,100],inner:[40,0,80,100]}});graph.createRoot();const renderer=new AdventureRenderer({canvas:{getContext:()=>({})},graph,artwork:{prepare(){}},hooks:{}});return{graph,renderer};}
test('mouse picking clips the candidate and falls through to a lower button outside the mask',()=>{
 const {graph:g,renderer:r}=fixture([row('button',0,{name:'below'}),row('mask',1,{clipDepth:3}),row('button',2,{name:'clipped'})]);
 assert.equal(r.buttonAt(20,20).name,'clipped');assert.equal(r.buttonAt(60,20).name,'below');
 g.named(g.root,'clipped').visible=false;assert.equal(r.buttonAt(20,20).name,'below');
 g.named(g.root,'clipped').visible=true;g.root.children.find(n=>n.id==='mask').visible=false;assert.equal(r.buttonAt(20,20).name,'below','invisible mask empties its candidate coverage');
 assert.equal(r.pointHit(g.named(g.root,'clipped'),20,20),true,'AS geometry remains separate from mouse visibility');
});
test('AVM1 nested masks return a candidate at its nearest successful covering mask',()=>{
 const {renderer:r}=fixture([row('mask',1,{clipDepth:5}),row('inner',2,{clipDepth:4}),row('button',3,{name:'insideInner'})]);
 assert.equal(r.buttonAt(60,20).name,'insideInner','fixed AVM1 picker returns at inner mask, not an invented all-mask intersection');
 assert.equal(r.buttonAt(90,20),null);
});
test('AS shape geometry keeps hidden colliders and the fixed clip-depth boundary convention',()=>{
 const {graph:g,renderer:r}=fixture([row('mask',1,{clipDepth:3}),row('button',2,{name:'clipped'})]);const b=g.named(g.root,'clipped');b.visible=false;
 assert.equal(r.pointHit(b,60,20),true);assert.equal(r.pointHit(g.root,60,20),false);assert.equal(r.pointHit(g.root,20,20),true);assert.equal(r.buttonAt(20,20),null);
 b.visible=true;g.root.children[0].clipDepth=2;assert.equal(r.pointHit(g.root,60,20),true,'fixed source shape test uses >= clipDepth at the final depth');assert.equal(r.buttonAt(60,20),null,'mouse picker uses its separate inclusive candidate rule');
});
test('removing the last displayed child does not resurrect static sprite hit geometry',()=>{
 const {graph:g,renderer:r}=fixture([row('button',1,{name:'container'})]);const node=g.named(g.root,'container');assert.equal(r.pointHit(node,10,10),true);for(const child of [...node.children])g.remove(child);assert.equal(node.children.length,0);assert.equal(r.pointHit(node,10,10),false);
});
