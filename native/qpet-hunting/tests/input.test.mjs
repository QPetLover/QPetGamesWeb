import test from 'node:test';import assert from 'node:assert/strict';import {HuntingGame} from '../rules.js';import{paintScene}from'../input.js';
test('stationary pointer enters the new scene arrow after display update, without a new mouse move',()=>{
 const game=new HuntingGame();game.chooseRole(0);game.startRole();game.aim({x:35,y:180});let displayed=[];
 // Display picking is a renderer boundary: the snapshot changes only at paint.
 // The authored left-arrow stage region is [0,78]x[0,421]. Source state and
 // timeline transitions here are real, and never supplied by a replacement.
 const renderer={render(){displayed=game.all().filter(n=>n.id==='216');},buttonAt(p){return p.x>=0&&p.x<=78&&p.y>=0&&p.y<=421?displayed[0]||null:null;}};
 const options={inside:true};paintScene(renderer,game,options);assert.equal(game.pan,0);for(let i=0;i<92;i++)game.tick();assert.equal(game.scene,'play');assert.equal(game.pan,0);paintScene(renderer,game,options);assert.equal(game.hover.id,'216');assert.equal(game.pan,-1);
 for(let i=0;i<44;i++){game.tick();paintScene(renderer,game,options);}assert.equal(game.snapshot().bg,-4);assert.equal(game.ammo,55);assert.equal(game.score,0);
 game.replay();paintScene(renderer,game,options);assert.equal(game.hover,null);assert.equal(game.pan,0);
});
test('held phone pan survives aiming a second finger away from the arrow',()=>{const g=new HuntingGame();g.chooseRole(0);g.startRole();for(let i=0;i<92;i++)g.tick();g.hover=g.all().find(n=>n.id==='216');g.aim({x:380,y:210});const renderer={render(){},buttonAt(){return null;}};paintScene(renderer,g,{inside:true,heldPan:-1});assert.equal(g.pan,-1);g.tick();assert.equal(g.snapshot().bg,-348);});
