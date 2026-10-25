"""Offline extraction of original MPEG payloads, source clocks and placements."""
from pathlib import Path
import base64,hashlib,json,struct,xml.etree.ElementTree as E
src=Path('core/QPetGames/classical_games/swf/Q宠摘星星.swf');base=Path('projects/10-25-qpet-originals-release/native-stars');dest=Path(__file__).resolve().parents[1]
r=E.parse(base/'export/source.xml').getroot();ts=list(r.find('tags'));assets={};meta={};events=[];streams=[];linkage={};timeline_counts={}
for t in ts:
 if t.get('type')=='DefineSoundTag':
  assert t.get('soundFormat')=='2';raw=bytes.fromhex(t.get('soundData'));payload=raw[2:];i=t.get('soundId');assets[i]='data:audio/mpeg;base64,'+base64.b64encode(payload).decode();meta[i]={'rate':[5512.5,11025,22050,44100][int(t.get('soundRate'))],'samples':int(t.get('soundSampleCount')),'seekSamples':struct.unpack('<h',raw[:2])[0],'channels':2 if t.get('soundType')=='true'else 1,'bytes':len(payload),'sha256':hashlib.sha256(payload).hexdigest()}
 if t.get('type')=='ExportAssetsTag':linkage.update({n.text:i.text for i,n in zip(t.find('tags'),t.find('names'))})
def scan(items,timeline):
 f=1;head=None;blocks=[]
 for t in items:
  ty=t.get('type')
  if ty=='ShowFrameTag':f+=1
  elif ty in ['SoundStreamHeadTag','SoundStreamHead2Tag']:head=dict(t.attrib)
  elif ty=='SoundStreamBlockTag':
   raw=bytes.fromhex(t.get('streamSoundData'));count,seek=struct.unpack('<Hh',raw[:4]);blocks.append({'frame':f,'samples':count,'seek':seek,'bytes':len(raw)-4,'payload':raw[4:]})
  elif ty=='StartSoundTag':
   s=t.find('soundInfo');o={'noMultiple':s.get('syncNoMultiple')=='true','stop':s.get('syncStop')=='true'}
   for flag,key,attr in [('hasLoops','loops','loopCount'),('hasInPoint','inPoint','inPoint'),('hasOutPoint','outPoint','outPoint')]:
    if s.get(flag)=='true':o[key]=int(s.get(attr))
   if s.get('hasEnvelope')=='true':o['envelope']=[{k:int(v)for k,v in q.attrib.items()if k!='type'}for q in s.find('envelopeRecords')]
   events.append({'timeline':timeline,'frame':f,'id':t.get('soundId'),'options':o})
  elif ty=='DefineSpriteTag':scan(t.find('subTags'),t.get('spriteId'))
 timeline_counts[timeline]=f-1
 if blocks:
  assert timeline=='295' and head['streamSoundCompression']=='2';payload=b''.join(b.pop('payload')for b in blocks);i='stream295';rate=[5512.5,11025,22050,44100][int(head['streamSoundRate'])];samples=sum(b['samples']for b in blocks)
  assets[i]='data:audio/mpeg;base64,'+base64.b64encode(payload).decode();meta[i]={'rate':rate,'samples':samples,'seekSamples':0,'sourceHeaderLatencySeek':int(head.get('latencySeek','0')),'channels':2 if head['streamSoundType']=='true'else 1,'bytes':len(payload),'sha256':hashlib.sha256(payload).hexdigest()};streams.append({'timeline':timeline,'id':i,'head':head,'blocks':blocks,'note':'Original block MPEG bytes concatenated without re-encoding; sampleCount/seek retained per block. Only this authored super-animation stream exists. Fixed deployed Ruffle0.5/a4f5b525 StandardStreamDecoder does not consume block seek or header latencySeek; playback starts at raw MPEG sample zero.'})
scan(ts,'root')
(dest/'audio-assets.js').write_text('/* Original MPEG payloads, unchanged; offline extracted. */\nexport const audioAssets='+json.dumps(assets,separators=(',',':'))+';\nexport const audioMetadata='+json.dumps(meta,separators=(',',':'))+';\nexport const audioTimelineEvents='+json.dumps(events,separators=(',',':'))+';\nexport const timelineCounts='+json.dumps(timeline_counts,separators=(',',':'))+';\n')
provenance={'sourceSHA256':hashlib.sha256(src.read_bytes()).hexdigest(),'sourceBytes':src.stat().st_size,'sourceCommit':'a28b5d3928141955b01ba06cdd739974cf5b7ecc','stage':{'width':650,'height':450,'fps':12,'version':6},'metadata':meta,'timelineEvents':events,'linkage':linkage,'streams':streams}
(dest/'audio-provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2)+'\n');(base/'reference/source-script-hashes.json').write_text(json.dumps({str(p.relative_to(base/'export/scripts')):hashlib.sha256(p.read_bytes()).hexdigest()for p in sorted((base/'export/scripts').rglob('*.as'))},indent=2)+'\n')
print({'sounds':len(assets),'events':len(events),'streams':[(s['timeline'],len(s['blocks']))for s in streams]})
