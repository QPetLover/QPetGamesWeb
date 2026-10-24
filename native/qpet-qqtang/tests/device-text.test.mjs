import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {deviceLineMetrics,drawDeviceLine} from '../device-text.js';

test('verified Noto fallback retains device-font whole-pixel advances and actual ascent',()=>{
 // Original font538: textHeight580. Ruffle0.5 fallback TTF upm1000,
 // ascent1069, digit advance572 and colon advance268.
 const p=JSON.parse(fs.readFileSync(new URL('../assets/device-font-provenance.json',import.meta.url)));
 assert.equal(p.ttfSHA256,'e47bcaaf16673637bb29b8d59fbcd650ea635f32718cf59b8f577e3ef988b975');
 const clock=deviceLineMetrics('02:59',580);
 assert.equal(clock.width,1520);assert.equal(clock.ascent,620);
 assert.deepEqual(clock.advances,[340,340,160,340,340]);
 assert.equal(deviceLineMetrics('0',400).ascent,427);
 assert.equal(deviceLineMetrics('王子',400),null);
});

test('static digit paths draw without system-font calls, preserving center and baseline',()=>{
 const transforms=[],ctx={save(){},restore(){},transform(...m){transforms.push(m);},beginPath(){},moveTo(){},lineTo(){},quadraticCurveTo(){},bezierCurveTo(){},closePath(){},fill(){}};
 assert.equal(drawDeviceLine(ctx,'02:59','#fff',580,-291,0,2326,2),true);
 assert.deepEqual(transforms[0],[Math.fround(.58),0,0,Math.fround(.58),112,620]);
 assert.equal(transforms.length,5);
 assert.equal(drawDeviceLine(ctx,'王子','#000',400,0,0,1000,0),false);
});
