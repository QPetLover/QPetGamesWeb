/* PCM-only numerical port; see ../assets/audio-pcm/NOTICE.md. */
/** Fixed game's PCM-only AudioBuffer construction plan.
 * Its source rates (11025/22050/44100) divide 44100 exactly; no timing or
 * envelope is baked into source assets. No SWF, script, bytecode, or VM.
 */
import {renderEventPcm16} from './event-pcm-model.js';
const interpolate=(left,right,phase)=>Math.max(-32768,Math.min(32767,
  Math.trunc(((right/32768-left/32768)*phase+left/32768)*32768)));

export function buildEventLoopPlan(raw,sourceRate,channels,metadata,options={},seekProfile=null){
  const factor=44100/sourceRate;
  if(!Number.isInteger(factor)||factor<1)throw new Error('This fixed-game plan requires an integral source-rate factor');
  const start=Math.trunc((options.inPoint||0)/factor)+((metadata.seekSamples||0)&65535);
  const end=(options.outPoint===undefined?metadata.samples:Math.trunc(options.outPoint/factor))+((metadata.seekSamples||0)&65535);
  if(seekProfile&&(seekProfile.requestedStartFrame!==start||seekProfile.rate!==sourceRate||seekProfile.channels!==channels))throw new Error('Mismatched seek profile');
  if(seekProfile?.prefixFrames>0&&!seekProfile.prefixSamples)throw new Error('Accurate-seek prefix must be loaded');
  const available=seekProfile?.decodedFrames??raw.length/channels-start;
  const loops=options.loops??1;
  if(!Number.isInteger(loops)||loops<0||loops>65535)throw new Error('Expected source u16 loop count');
  const window=Math.max(0,Math.min(end-start+1,available));
  const endTriggered=end-start<available;
  if(loops===0||window<2){
    const limit=Math.max(100000,(Math.max(1,loops)*Math.max(1,window)+2)*factor);
    const finite=renderEventPcm16(raw,sourceRate,channels,metadata,options,limit,seekProfile);
    if(finite.limited)throw new Error('Finite event window exceeded its source-derived bound');
    return{rate:44100,channels,finiteSamples:finite.samples,outputFrames:finite.frames,
      periodSamples:null,tailSamples:null,mode:'degenerate finite source model'};
  }
  const sample=(frame,ch)=>{
    if(seekProfile?.prefixSamples&&frame<seekProfile.prefixFrames)return seekProfile.prefixSamples[frame*channels+ch];
    return raw[((seekProfile?.bodyOffsetFrame??start)+frame)*channels+ch];
  };
  const periodFrames=window*factor,periodSamples=new Int16Array(periodFrames*channels);
  for(let frame=0;frame<window;frame++)for(let phase=0;phase<factor;phase++)for(let ch=0;ch<channels;ch++)
    periodSamples[(frame*factor+phase)*channels+ch]=interpolate(sample(frame,ch),sample((frame+1)%window,ch),phase/factor);
  const outputFrames=Math.max(1,loops*window-(endTriggered?1:0))*factor;
  let tailSamples=null;
  if(!endTriggered){
    tailSamples=new Int16Array(factor*channels);
    for(let phase=0;phase<factor;phase++)for(let ch=0;ch<channels;ch++)tailSamples[phase*channels+ch]=interpolate(sample(window-1,ch),0,phase/factor);
  }
  return{rate:44100,channels,startSample:start,endSampleInclusive:end,sourceWindowFrames:window,
    periodFrames,periodSamples,outputFrames,tailSamples,tailFrames:tailSamples?factor:0,
    mode:endTriggered?'authored end: truncate final source interval':'decoder EOF: replace final interval with zero-right tail'};
}

export function eventPlanSample(plan,frame,channel){
  if(plan.finiteSamples)return plan.finiteSamples[frame*plan.channels+channel];
  if(plan.tailSamples&&frame>=plan.outputFrames-plan.tailFrames)
    return plan.tailSamples[(frame-plan.outputFrames+plan.tailFrames)*plan.channels+channel];
  return plan.periodSamples[(frame%plan.periodFrames)*plan.channels+channel];
}

export function audioBufferFromInterleavedPcm16(context,samples,channels,rate=44100){
  const buffer=context.createBuffer(channels,samples.length/channels,rate);
  for(let ch=0;ch<channels;ch++){const output=buffer.getChannelData(ch);for(let i=0;i<output.length;i++)output[i]=samples[i*channels+ch]/32768;}
  return buffer;
}
