"""Offline source metadata/audio extraction for fixed 宠爱森林 source."""
from pathlib import Path
import argparse,base64,hashlib,json,re,struct,xml.etree.ElementTree as E
p=argparse.ArgumentParser();p.add_argument('--reference',type=Path,required=True);p.add_argument('--scripts',type=Path,required=True);a=p.parse_args();dest=Path(__file__).resolve().parents[1];ts=list(E.parse(a.reference/'forest.xml').getroot().find('tags'))
assets={};metadata={};events=[];linkage={};stages=[];streamheads=[];streamblocks=[]
for t in ts:
 if t.get('type')=='DefineSoundTag':
  assert t.get('soundFormat')=='2'
  raw=bytes.fromhex(t.get('soundData'));payload=raw[2:];i=t.get('soundId');assets[i]='data:audio/mpeg;base64,'+base64.b64encode(payload).decode();metadata[i]={'rate':[5512.5,11025,22050,44100][int(t.get('soundRate'))],'samples':int(t.get('soundSampleCount')),'seekSamples':struct.unpack('<h',raw[:2])[0],'channels':2 if t.get('soundType')=='true'else 1,'bytes':len(payload),'sha256':hashlib.sha256(payload).hexdigest()}
 if t.get('type')=='ExportAssetsTag':linkage.update({n.text:i.text for i,n in zip(t.find('tags'),t.find('names'))})
def scan(items,timeline):
 f=1
 for t in items:
  if t.get('type')=='ShowFrameTag':f+=1
  if t.get('type') in ['SoundStreamHeadTag','SoundStreamHead2Tag']:streamheads.append({'timeline':timeline,'frame':f,'compression':int(t.get('streamSoundCompression')),'samples':int(t.get('streamSoundSampleCount'))})
  if t.get('type')=='SoundStreamBlockTag':streamblocks.append({'timeline':timeline,'frame':f,'bytes':len(bytes.fromhex(t.get('streamSoundData','')))})
  if t.get('type')=='StartSoundTag':
   s=t.find('soundInfo');o={'noMultiple':s.get('syncNoMultiple')=='true','stop':s.get('syncStop')=='true'}
   for flag,key,attr in [('hasLoops','loops','loopCount'),('hasInPoint','inPoint','inPoint'),('hasOutPoint','outPoint','outPoint')]:
    if s.get(flag)=='true':o[key]=int(s.get(attr))
   if s.get('hasEnvelope')=='true':o['envelope']=[{k:int(v)for k,v in q.attrib.items()if k!='type'}for q in s.find('envelopeRecords')]
   events.append({'timeline':timeline,'frame':f,'id':t.get('soundId'),'options':o})
  if t.get('type')=='DefineSpriteTag':scan(t.find('subTags'),t.get('spriteId'))
scan(ts,'root')
for i in [439,518,522,529,536]:
 s=(a.scripts/f'DefineSprite_{i}/frame_1/DoAction.as').read_text();d={'symbolId':str(i)}
 for name in ['seeds','hitters','npcs','bingos','npcsXArea','npcsSpeed']:d[name]=json.loads(re.search(r'^'+name+r' = (.*);',s,re.M)[1])
 stages.append(d)
(dest/'stage-data.js').write_text('/* Original AS stage arrays, offline extracted without evaluating source. */\nexport const stageData='+json.dumps(stages,separators=(',',':'))+';\n')
(dest/'audio-assets.js').write_text('// Original source MPEG payloads and exact sound bindings.\nexport const audioAssets='+json.dumps(assets,separators=(',',':'))+';\nexport const audioMetadata='+json.dumps(metadata,separators=(',',':'))+';\nexport const audioTimelineEvents='+json.dumps(events,separators=(',',':'))+';\nexport const audioLinkage='+json.dumps(linkage,separators=(',',':'))+';\n')
assert all(h['samples']==0 and h['compression']==0 for h in streamheads) and not streamblocks,'Unexpected source stream audio must be migrated explicitly'
provenance={'sourceSHA256':'cfc82b0fda9e38bf48151af64422d89e904b32a772c7863fc048ca88c5fe1e1b','metadata':metadata,'timelineEvents':events,'linkage':linkage,'stream':{'headCount':len(streamheads),'blockCount':len(streamblocks),'allHeadsZeroSamplePCM':True,'note':'No stream blocks or samples exist; no fabricated stream audio.'}}
(dest/'audio-provenance.json').write_text(json.dumps(provenance,indent=2)+'\n')
(a.reference.parent/'source-script-hashes.json').write_text(json.dumps({str(f.relative_to(a.scripts)):hashlib.sha256(f.read_bytes()).hexdigest()for f in sorted(a.scripts.rglob('*.as'))},indent=2)+'\n')
print({'sounds':len(assets),'events':len(events),'stages':len(stages)})
