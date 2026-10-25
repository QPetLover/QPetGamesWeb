"""Offline ADPCM decode cross-check; adapted from Ruffle v0.5.0 GPL-3.0.
https://github.com/ruffle-rs/ruffle/blob/v0.5.0/core/src/backend/audio/decoders/adpcm.rs
No decoder is included in the game's runtime.
"""
from pathlib import Path
import xml.etree.ElementTree as E,struct,wave,hashlib,json,base64
base=Path('projects/10-25-qpet-originals-release/native-differences');dest=Path(__file__).resolve().parents[1];root=E.parse(base/'export/source.xml').getroot();tag=next(t for t in root.find('tags')if t.get('type')=='DefineSoundTag');raw=bytes.fromhex(tag.get('soundData'));assert tag.get('soundFormat')=='1' and tag.get('soundType')=='false'
steps=[7,8,9,10,11,12,13,14,16,17,19,21,23,25,28,31,34,37,41,45,50,55,60,66,73,80,88,97,107,118,130,143,157,173,190,209,230,253,279,307,337,371,408,449,494,544,598,658,724,796,876,963,1060,1166,1282,1411,1552,1707,1878,2066,2272,2499,2749,3024,3327,3660,4026,4428,4871,5358,5894,6484,7132,7845,8630,9493,10442,11487,12635,13899,15289,16818,18500,20350,22385,24623,27086,29794,32767];indices=[[-1,2],[-1,-1,2,4],[-1,-1,-1,-1,2,4,6,8],[-1,-1,-1,-1,-1,-1,-1,-1,1,2,4,6,8,10,13,16]]
bit=0
def read(n):
 global bit
 if bit+n>len(raw)*8:raise EOFError
 v=0
 for _ in range(n):v=(v<<1)|((raw[bit//8]>>(7-bit%8))&1);bit+=1
 return v
bits=read(2)+2;sample_num=0;pcm=[]
try:
 while True:
  if sample_num==0:
   sample=read(16);sample=sample-65536 if sample>=32768 else sample;index=read(6)
  sample_num=(sample_num+1)%4095;code=read(bits);mag=code&((1<<(bits-1))-1);step=steps[index];delta=step>>(bits-1)
  for k in range(bits-1):
   if mag&(1<<k):delta+=step>>(bits-2-k)
  sample=max(-32768,sample-delta)if code&(1<<(bits-1))else min(32767,sample+delta);index=max(0,min(88,index+indices[bits-2][mag]));pcm.append(sample)
except EOFError:pass
wav=base/'reference/wav/48.wav'
with wave.open(str(wav))as w:info={'rate':w.getframerate(),'samples':w.getnframes(),'channels':w.getnchannels(),'width':w.getsampwidth()};ffdec_pcm=w.readframes(w.getnframes())
ours=struct.pack('<'+'h'*len(pcm),*pcm);comparison={'decoder':'Ruffle v0.5.0 ADPCM rules, offline Python translation','bitsPerSample':bits,'decodedSamples':len(pcm),'ffdecSamples':info['samples'],'samePCM':ours==ffdec_pcm,'pcmSHA256':hashlib.sha256(ours).hexdigest()};assert comparison['samePCM'],comparison
source=Path('core/QPetGames/classical_games/swf/Q宠邀你来找茬.swf');v={'sourceCommit':'a28b5d3928141955b01ba06cdd739974cf5b7ecc','sourceSHA256':hashlib.sha256(source.read_bytes()).hexdigest(),'sourceBytes':source.stat().st_size,'soundId':'48','sourceEncoding':'SWF ADPCM (format1)','sourceRateFlag':0,'referenceSampleRate':5512,'nominalRate':5512.5,'sourceSampleCountHeader':int(tag.get('soundSampleCount')),'sourcePayloadBytes':len(raw),'sourcePayloadSHA256':hashlib.sha256(raw).hexdigest(),'exportedWAV':{'bytes':wav.stat().st_size,'sha256':hashlib.sha256(wav.read_bytes()).hexdigest(),**info},'method':'FFDec26.4 ADPCM to PCM WAV, independently cross-checked against fixed Ruffle0.5 decoder rules; no source resampling/denoising/replacement','decodeComparison':comparison,'sampleCountNote':'Header5681; both independent decoders produce5680 available samples. WAV preserves those exact samples, does not fabricate a missing sample. Reference integer sample rate5512 retained.','bindings':[],'streams':[]}
def scan(ts,name):
 f=1
 for q in ts:
  ty=q.get('type')
  if ty=='ShowFrameTag':f+=1
  elif ty=='StartSoundTag':v['bindings'].append({'timeline':name,'frame':f,'id':q.get('soundId'),'info':q.find('soundInfo').attrib})
  elif ty=='SoundStreamBlockTag':v['streams'].append({'timeline':name,'frame':f,'bytes':len(q.get('streamSoundData',''))//2})
  elif ty=='DefineSpriteTag':scan(q.find('subTags'),q.get('spriteId'))
scan(root.find('tags'),'root');(dest/'audio-provenance.json').write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');(dest/'audio-assets.js').write_text('/* Original SWF ADPCM decoded to identical PCM by two independent decoders. */\nexport const sound48='+json.dumps('data:audio/wav;base64,'+base64.b64encode(wav.read_bytes()).decode())+';\nexport const soundMetadata='+json.dumps(info)+';\n');(base/'reports/adpcm-decode-comparison.json').write_text(json.dumps(comparison,indent=2)+'\n');print(comparison)
