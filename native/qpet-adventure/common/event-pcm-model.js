/* PCM-only numerical port; see ../assets/audio-pcm/NOTICE.md. */
/** Explicit PCM event window/loop model. No scripts, bytecode, or media VM.
 * State and EOF ordering follow fixed Ruffle EventSoundStream and dasp Linear.
 * Accurate MPEG seek vs a full PCM lookup is verified separately by the oracle.
 */
export function renderEventPcm16(samples,sourceRate,channels,metadata,options={},limitFrames=5_000_000,seekProfile=null) {
  if(!(samples instanceof Int16Array)||![1,2].includes(channels)||samples.length%channels)
    throw new Error('Expected original interleaved PCM16');
  const frames=samples.length/channels,divisor=44100/sourceRate;
  const skip=(metadata.seekSamples||0)&65535;
  const start=Math.trunc((options.inPoint||0)/divisor)+skip;
  const end=(options.outPoint===undefined?metadata.samples:Math.trunc(options.outPoint/divisor))+skip;
  if(seekProfile&&(seekProfile.requestedStartFrame!==start||seekProfile.rate!==sourceRate||seekProfile.channels!==channels))
    throw new Error('Mismatched accurate-seek profile');
  if(seekProfile?.prefixFrames>0&&!seekProfile.prefixSamples)throw new Error('Accurate-seek prefix must be loaded');
  const available=seekProfile?.decodedFrames??Math.max(0,frames-start);
  let loops=options.loops??1,at=start,current=start,exhausted=false,phase=0;
  if(!Number.isInteger(loops)||loops<0||loops>65535)throw new Error('Expected source u16 loop count');
  const nextLoop=()=>{if(loops>0){loops--;at=start;current=start;}else exhausted=true;};
  nextLoop();
  const next=()=>{
    while(!exhausted) {
      if(at-start<available) {
        const relative=at-start,patch=seekProfile?.prefixSamples;
        const usePatch=patch&&relative<seekProfile.prefixFrames;
        const source=usePatch?patch:samples;
        const index=usePatch?relative:(seekProfile?seekProfile.bodyOffsetFrame+relative:at);
        const frame=Array.from(source.subarray(index*channels,index*channels+channels));at++;current++;
        if(current>end)nextLoop();
        return frame;
      }
      nextLoop();
    }
    return Array(channels).fill(0);
  };
  let left=next(),right=next();const ratio=sourceRate/44100,chunks=[];
  let chunk=new Int16Array(65536),used=0,count=0;
  const push=value=>{if(used===chunk.length){chunks.push(chunk);chunk=new Int16Array(65536);used=0;}chunk[used++]=value;count++;};
  while(!(exhausted&&phase>=1)&&count/channels<limitFrames) {
    while(phase>=1){left=right;right=next();phase-=1;}
    for(let ch=0;ch<channels;ch++) {
      const l=left[ch]/32768,r=right[ch]/32768;
      push(Math.max(-32768,Math.min(32767,Math.trunc(((r-l)*phase+l)*32768))));
    }
    phase+=ratio;
  }
  const samplesOut=new Int16Array(count);let copied=0;
  for(const full of chunks){samplesOut.set(full,copied);copied+=full.length;}
  samplesOut.set(chunk.subarray(0,used),copied);
  return{samples:samplesOut,channels,rate:44100,startSample:start,endSampleInclusive:end,
    frames:count/channels,exhausted:exhausted&&phase>=1,
    limited:count/channels===limitFrames};
}
