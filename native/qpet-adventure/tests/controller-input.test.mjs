import test from 'node:test';
import assert from 'node:assert/strict';
import {createChapterController} from '../common/chapter-controller.js';

const row=(id,name,depth,matrix=[1,0,0,1,0,0])=>({id,name,depth,matrix});
const stop=(context,node)=>context.graph.stop(node);

test('mouse-up broadcasts inside-out in reverse depth, then Mouse listeners and button releaseOutside',()=>{
    const calls=[];
    const assets={instances:{
        main:{frames:[[row('a','a',1),row('b','b',2),row('button','button',3)]]},
        a:{frames:[[]]},b:{frames:[[row('child','child',1)]]},child:{frames:[[]]},
    },symbolKinds:{button:'button2'}};
    const actions={requiredOwnerFields:{main:['onMouseUp'],a:['onMouseUp'],b:['onMouseUp'],child:['onMouseUp']},frames:{
        main:{1(context,node){stop(context,node);node.onMouseUp=()=>calls.push('root');context.mouse.addListener({onMouseUp(){calls.push('Mouse.listener');}});}},
        a:{1(context,node){stop(context,node);node.visible=false;node.onMouseUp=()=>calls.push('hidden-a');}},
        b:{1(context,node){stop(context,node);node.onMouseUp=()=>calls.push('b-old');}},
        child:{1(context,node){stop(context,node);node.onMouseUp=()=>{calls.push('child');context.root.b.onMouseUp=()=>calls.push('b-latest');};}},
    },clips:[{parent:'main',frame:1,character:'b',depth:2,event:'mouseUp',handler(){calls.push('b-static');}}],buttons:{button:{
        press(){calls.push('press');},release(){calls.push('release');},releaseOutside(){calls.push('releaseOutside');},
    }}};
    let top;
    const controller=createChapterController({chapter:5,actions,assets,pointerTop:()=>top});
    top=controller.root.button;
    assert.equal(controller.press(0,0),true);
    calls.length=0;
    top=null;
    assert.equal(controller.release(900,600),true);
    assert.deepEqual(calls,['child','b-static','b-latest','hidden-a','root','Mouse.listener','releaseOutside']);
    assert(!calls.includes('release'),'release outside must not submit a picked button');
    controller.dispose();
});

function dragFixture(){
    const calls=[];
    const assets={instances:{
        main:{frames:[[row('item','item',1,[1,0,0,1,200,400]),row('target','target',2,[1,0,0,1,4000,4000])]]},
        item:{frames:[[row('button','button',1),row('leaf','drawing',2)]]},
    },symbolKinds:{button:'button2',leaf:'shape',target:'shape'},localBounds:{button:[0,0,10,10],leaf:[0,0,10,10],target:[0,0,10,10]}};
    const actions={frames:{main:{1(context,node){stop(context,node);node.combinations=0;}},item:{1(context,node){
        stop(context,node);
        const origin={x:node._x,y:node._y};
        node.onMouseUp=()=>{
            calls.push('drop');
            if((node._x!==origin.x||node._y!==origin.y)&&context.hitTest(node,context.root.target))context.root.combinations++;
            node._x=origin.x;node._y=origin.y;context.stopDrag();
        };
    }}},buttons:{button:{press(context,owner){context.startDrag(owner);},releaseOutside(){calls.push('outside');}}}};
    let top;
    const controller=createChapterController({chapter:5,actions,assets,pointerTop:()=>top});
    return{controller,calls,pick(value){top=value;}};
}

test('a real drag and release outside still runs the inventory drop callback',()=>{
    const {controller,calls,pick}=dragFixture(),{root,graph,context}=controller;
    pick(root.item.button);
    assert.equal(controller.press(10,20),true);
    assert.equal(context.drag.node,root.item);
    controller.move(200,200);
    assert.equal(graph.overlaps(root.item,root.target),true);
    pick(null);
    assert.equal(controller.release(200,200),true);
    assert.equal(root.combinations,1,'the display-node mouse-up must commit the overlapping drop');
    assert.deepEqual(calls,['drop','outside']);
    assert.deepEqual([root.item._x,root.item._y],[10,20]);
    assert.equal(context.drag,null);
    controller.dispose();
});

test('pointer cancellation restores drag origin without committing a drop or Mouse listener',()=>{
    const {controller,calls,pick}=dragFixture(),{root,context}=controller;
    context.mouse.addListener({onMouseUp(){calls.push('listener');}});
    pick(root.item.button);
    controller.press(10,20);
    controller.move(200,200);
    assert.deepEqual([root.item._x,root.item._y],[200,200]);
    controller.release(200,200,{cancel:true});
    assert.equal(root.combinations,0);
    assert.deepEqual(calls,['outside']);
    assert.equal(context.drag,null);
    assert.equal(context.pointer.down,false);
    assert.deepEqual([root.item._x,root.item._y],[10,20]);
    controller.dispose();
});

test('key-up clears held arrows/Space before callbacks, and disposal clears any remaining keys',()=>{
    const calls=[];
    const assets={instances:{main:{frames:[[row('item','item',1)]]},item:{frames:[[]]}}};
    const actions={frames:{main:{1(context,node){stop(context,node);context.keys.addListener({
        onKeyUp(){calls.push(['listener',context.keys.getCode(),context.keys.isDown(context.keys.getCode())]);},
    });}},item:{1:stop}},clips:[{parent:'main',frame:1,character:'item',depth:1,event:'keyUp',handler(context){calls.push(['clip',context.keys.getCode(),context.keys.isDown(context.keys.getCode())]);}}]};
    const controller=createChapterController({chapter:5,actions,assets}),{context}=controller;
    controller.keyDown(39);controller.keyDown(32);
    assert.equal(context.keys.isDown(39),true);assert.equal(context.keys.isDown(32),true);
    controller.keyUp(39);controller.keyUp(32);
    assert.equal(context.keys.isDown(39),false);assert.equal(context.keys.isDown(32),false);
    assert.deepEqual(calls,[['listener',39,false],['clip',39,false],['listener',32,false],['clip',32,false]]);
    controller.keyDown(37);assert.equal(context.keys.isDown(37),true);
    controller.dispose();assert.equal(context.keys.isDown(37),false);
    const count=calls.length;controller.keyUp(37);controller.release(0,0);
    assert.equal(calls.length,count,'disposed controller must not re-dispatch input');
});
