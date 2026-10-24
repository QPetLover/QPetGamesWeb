import test from 'node:test';import assert from 'node:assert/strict';
import {streamSlice,envelopeAt,AdventureAudio} from '../common/audio.js';

test('continuous MPEG reader includes zero-byte block and tolerates a missing frame until source underflow',()=>{
 const stream={head:{samples:648,latencySeek:1633},blocks:[{frame:114,samples:1728,seek:265,bytes:104},{frame:115,samples:576,seek:337,bytes:104},{frame:116,samples:576,seek:409,bytes:104},{frame:117,samples:0,seek:-1129,bytes:0},{frame:149,samples:1152,seek:198,bytes:208}]};
 const slice=streamSlice(stream,0,160);assert.deepEqual(slice,{startFrame:114,endFrame:119,byteOffset:0,bytes:312,lastBlock:3});
 const next=streamSlice(stream,4,160);assert.equal(next.byteOffset,312);assert.equal(next.startFrame,149);assert.equal(next.bytes,208);assert.equal(next.endFrame,151);
});
test('source stereo envelope interpolates a resumed position, including leading/trailing holds',()=>{
 const points=[{pos44:44100,leftLevel:16384,rightLevel:32768},{pos44:88200,leftLevel:32768,rightLevel:0}];
 assert.equal(envelopeAt(points,0,'left'),0.5);assert.equal(envelopeAt(points,66150,'left'),0.75);assert.equal(envelopeAt(points,66150,'right'),0.5);assert.equal(envelopeAt(points,100000,'right'),0);
});
test('event multiplicity, source 32-channel ceiling, owner stream stop and global Sound.stop remain distinct',()=>{
 const a=new AdventureAudio({assets:{'1':'data:audio/mpeg;base64,AA=='},metadata:{'1':{rate:100,samples:100}},streams:{},timelineEvents:[],linkage:{hit:'1'}});
 a.eventSound('1',{},5);a.eventSound('1',{},5);assert.equal(a.active.size,2);
 a.eventSound('1',{noMultiple:true},6);assert.equal(a.active.size,2);
 a.handle({type:'stream-stop',owner:5});assert.equal(a.active.size,2);
 a.handle({type:'sound-stop',scope:'owner',owner:5});assert.equal(a.active.size,0);
 for(let i=0;i<40;i++)a.eventSound('1',{},i);assert.equal(a.active.size,32);
 a.setTime(1001);assert.equal(a.active.size,0);
 a.eventSound('1',{},5);a.handle({type:'sound-stop',scope:'sound-id',id:'missing'});assert.equal(a.active.size,1);a.handle({type:'sound-stop',scope:'sound-id',id:'1'});assert.equal(a.active.size,0);
 a.eventSound('1',{},5);a.handle({type:'stop-sounds'});assert.equal(a.active.size,0);
});
test('chapter2 coincident envelope points advance after one output sample; envelope time does not restart with an audio loop',()=>{
 const points=[{pos44:0,leftLevel:13875,rightLevel:12989},{pos44:0,leftLevel:8856,rightLevel:12989},{pos44:0,leftLevel:8856,rightLevel:10037},{pos44:0,leftLevel:8856,rightLevel:32768},{pos44:0,leftLevel:32768,rightLevel:32768}];
 assert.equal(envelopeAt(points,0,'left'),13875/32768);assert.equal(envelopeAt(points,1,'left'),1);
 const calls=[[],[]],gains=calls.map(out=>({cancelScheduledValues(){},setValueAtTime(v,t){out.push(['set',v,t]);},linearRampToValueAtTime(v,t){out.push(['ramp',v,t]);}}));
 const a=new AdventureAudio({assets:{},metadata:{},streams:{},timelineEvents:[]});a.context={currentTime:0,sampleRate:48000};a.applyGain({gains,elapsed:0,audioStart:0,envelope:points,loopLength:1,mediaStart:8,seek:0,owner:null});
 assert.deepEqual(calls[0],[['set',13875/32768,0],['set',1,1/48000]]);
 calls[0].length=0;calls[1].length=0;a.context.currentTime=1.5;
 a.applyGain({gains,elapsed:0,audioStart:0,envelope:[{pos44:0,leftLevel:0,rightLevel:0},{pos44:88200,leftLevel:32768,rightLevel:32768}],loopLength:1,mediaStart:8,seek:0,owner:null});
 assert.equal(calls[0][0][1],0.75,'independent envelope continues past the source loop rather than using 0.5 seconds');
});
test('stream playback corrects source-frame accumulation without seeking game state',()=>{
 const diagnostics=[],a=new AdventureAudio({assets:{},metadata:{},streams:{},timelineEvents:[],onDiagnostic:e=>diagnostics.push(e)});
 a.context={currentTime:3,state:'running'};const node={frame:11,playing:true,removed:false},record={stream:true,id:'stream9',owner:7,node,source:{stop(){}},elapsed:0,audioStart:2.5,slice:{startFrame:1},nodes:[]};a.active.add(record);a.streamOwners.set(7,record);
 const ahead=a.streamSync(20);assert.equal(ahead.soundMs,500);assert.equal(ahead.timelineMs,420);assert.equal(ahead.adjustMs,80);assert.equal(ahead.action,'adjust-accumulator');assert.equal(node.frame,11);
 a.context.currentTime=2.75;const behind=a.streamSync(0);assert.equal(behind.adjustMs,-150,'negative accumulation waits for audio, no movie goto');
 a.context.currentTime=2.91;assert.equal(a.streamSync(0).adjustMs,0,'within original backend tolerance');
 a.context.state='suspended';a.context.currentTime=8;assert.equal(a.streamSync(0).action,'none');assert.equal(a.active.size,1);
 a.context.state='running';const restart=a.streamSync(0);assert.equal(restart.action,'restart-at-next-block');assert.equal(a.active.size,0);assert.equal(a.streamOwners.size,0);assert.equal(node.frame,11);assert.equal(diagnostics[0].type,'stream-resync');
});
