import test from 'node:test';
import assert from 'node:assert/strict';
import {createBitmapColorCache} from '../common/bitmap-cache.js';

test('bitmap colors stay distinct by original image and full color key',()=>{
    const c=createBitmapColorCache(),a={},b={},x={width:2,height:2},y={width:2,height:2};
    c.put(a,'0,0,0,0,256,256,256,95',x);c.put(b,'0,0,0,0,256,256,256,95',y);
    assert.equal(c.get(a,'0,0,0,0,256,256,256,95'),x);assert.equal(c.get(b,'0,0,0,0,256,256,256,95'),y);
    assert.equal(c.get(a,'0,0,0,0,256,256,256,96'),undefined);
});
test('byte and count limits evict least recently used without changing retained pixels',()=>{
    const c=createBitmapColorCache({maxBytes:32,maxEntries:2}),image={},a={width:2,height:2,pixels:[1]},b={width:2,height:2,pixels:[2]},d={width:2,height:2,pixels:[3]};
    c.put(image,'a',a);c.put(image,'b',b);assert.equal(c.get(image,'a'),a);c.put(image,'d',d);
    assert.equal(c.get(image,'b'),undefined);assert.equal(c.get(image,'a'),a);assert.equal(c.get(image,'d'),d);assert.deepEqual(b.pixels,[2]);assert.equal(b.width,2);
    assert.equal(c.stats().bytes,32);assert.equal(c.stats().entries,2);assert.equal(c.stats().evictions,1);
    c.put(image,'huge',{width:100,height:100});assert.equal(c.get(image,'huge'),undefined);assert.equal(c.stats().bytes,32);
    c.clear();assert.equal(c.stats().bytes,0);assert.equal(c.get(image,'a'),undefined);
});
test('count bound also applies to tiny bitmaps and disabled cache retains nothing',()=>{
    const c=createBitmapColorCache({maxBytes:1000,maxEntries:2}),image={};for(let i=0;i<20;i++)c.put(image,''+i,{width:1,height:1});assert.equal(c.stats().entries,2);assert.equal(c.stats().bytes,8);
    const off=createBitmapColorCache({maxBytes:0});off.put(image,'x',{width:1,height:1});assert.equal(off.get(image,'x'),undefined);
});
test('immutable bitmap patterns are reused per context and share the byte limit',()=>{
    const c=createBitmapColorCache({maxBytes:64,maxEntries:3}),image={width:2,height:2};let calls=0;
    const a={createPattern(i,repeat){assert.equal(i,image);assert.equal(repeat,'repeat');return{n:++calls};}},b={createPattern(){return{n:++calls};}};
    const one=c.pattern(a,image);assert.equal(c.pattern(a,image),one);assert.notEqual(c.pattern(b,image),one);assert.equal(calls,2);assert.equal(c.stats().bytes,64);
    c.put(image,'color',{width:2,height:2});assert(c.stats().bytes<=64);assert(c.stats().entries<=3);
    assert.notEqual(c.pattern(a,image),one);assert.equal(calls,3);
});
test('two 12 MiB bitmap working units remain hot across repeated full-frame order',()=>{
    const c=createBitmapColorCache(),sources=[{},{}],ctx={createPattern(image){return{image};}};
    function frame(){for(const source of sources){let color=c.get(source,'same');if(!color){color={width:1024,height:1024};c.put(source,'same',color);}c.pattern(ctx,color);}}
    frame();const cold=c.stats();assert.equal(cold.bytes,24*1024*1024);assert.equal(cold.evictions,0);
    for(let i=0;i<20;i++)frame();assert.equal(c.stats().misses,cold.misses);assert.equal(c.stats().evictions,0);assert(c.stats().bytes<=c.stats().maxBytes);
});
test('oversized pattern is not admitted to evict its source and other resident textures',()=>{
    const c=createBitmapColorCache({maxBytes:64,maxEntries:8}),source={},small={width:1,height:1},ctx={createPattern(image){return{image};}};
    c.put(source,'resident',small);c.pattern(ctx,small);const before=c.stats();
    const large={width:3,height:3};for(let i=0;i<10;i++)c.pattern(ctx,large);
    assert.equal(c.stats().bytes,before.bytes);assert.equal(c.stats().evictions,before.evictions);assert.equal(c.stats().skippedOversizePatterns,10);assert.equal(c.get(source,'resident'),small);
});
