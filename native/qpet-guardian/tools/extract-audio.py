from pathlib import Path
import argparse,xml.etree.ElementTree as E,json,base64,hashlib,struct
p=argparse.ArgumentParser();p.add_argument('--reference',type=Path,required=True);a=p.parse_args();dest=Path(__file__).resolve().parents[1];r=E.parse(a.reference/'guardian.xml').getroot();ts=list(r.find('tags'));assets={};meta={};events=[];streams={};heads=[]
for t in ts:
 if t.get('type')=='DefineSoundTag':
  raw=bytes.fromhex(t.get('soundData'));payload=raw[2:];i=t.get('soundId');assets[i]='data:audio/mpeg;base64,'+base64.b64encode(payload).decode();meta[i]={'rate':[5512.5,11025,22050,44100][int(t.get('soundRate'))],'samples':int(t.get('soundSampleCount')),'seekSamples':struct.unpack('<h',raw[:2])[0],'channels':2 if t.get('soundType')=='true' else 1,'bytes':len(payload),'sha256':hashlib.sha256(payload).hexdigest()}
def scan(ts,timeline):
 f=1;head=None;blocks=[];payloads=[];prefix=0
 for t in ts:
  ty=t.get('type')
  if ty=='ShowFrameTag':f+=1
  elif ty=='StartSoundTag':
   s=t.find('soundInfo');o={'noMultiple':s.get('syncNoMultiple')=='true','stop':s.get('syncStop')=='true'}
   for flag,key,attr in [('hasLoops','loops','loopCount'),('hasInPoint','inPoint','inPoint'),('hasOutPoint','outPoint','outPoint')]:
    if s.get(flag)=='true':o[key]=int(s.get(attr))
   if s.get('hasEnvelope')=='true':o['envelope']=[{k:int(v)for k,v in q.attrib.items()if k!='type'}for q in s.find('envelopeRecords')]
   events.append({'timeline':timeline,'frame':f,'id':t.get('soundId'),'options':o})
  elif ty in ['SoundStreamHeadTag','SoundStreamHead2Tag']:head=t.attrib;heads.append({'timeline':timeline,'frame':f,'data':head})
  elif ty=='SoundStreamBlockTag':
   assert head['streamSoundCompression']=='2';raw=bytes.fromhex(t.get('streamSoundData'));count,seek=struct.unpack('<Hh',raw[:4]);blocks.append({'frame':f,'samples':count,'seek':seek,'offset':prefix+seek,'bytes':len(raw)-4,'sha256':hashlib.sha256(raw[4:]).hexdigest()});prefix+=count;payloads.append(raw[4:])
  elif ty=='DefineSpriteTag':scan(t.find('subTags'),t.get('spriteId'))
 if blocks:
  rate=[5512.5,11025,22050,44100][int(head['streamSoundRate'])];payload=b''.join(payloads);sid='stream'+timeline;assets[sid]='data:audio/mpeg;base64,'+base64.b64encode(payload).decode();meta[sid]={'rate':rate,'samples':prefix,'seekSamples':0,'channels':2 if head['streamSoundType']=='true' else 1,'bytes':len(payload),'sha256':hashlib.sha256(payload).hexdigest()}
  for i,b in enumerate(blocks):b['end']=blocks[i+1]['offset'] if i+1<len(blocks) else prefix
  streams[timeline]={'id':sid,'head':head,'blocks':blocks}
scan(ts,'main')
(dest/'audio-assets.js').write_text('// Original MPEG payloads, SOUNDINFO, nested streaming sample positions.\nexport const audioAssets='+json.dumps(assets,separators=(',',':'))+';\nexport const audioMetadata='+json.dumps(meta,separators=(',',':'))+';\nexport const audioTimelineEvents='+json.dumps(events,separators=(',',':'))+';\nexport const audioStreams='+json.dumps(streams,separators=(',',':'))+';\n')
(dest/'audio-provenance.json').write_text(json.dumps({'metadata':meta,'timelineEvents':events,'streams':streams,'heads':heads},indent=2))
report=a.reference.parent/'reports';(report/'source-identity.json').write_text(json.dumps({'commit':'a28b5d3928141955b01ba06cdd739974cf5b7ecc','swf':'classical_games/swf/Q宠守护使.swf','bytes':665215,'sha256':'6ef3e55d86431714fe8d1da849a37fb5c08844a44accdc469296fe0118377654','version':6,'AS':'AS2','stage':[600,210],'fps':12,'ffdec':'26.4.0','ASFiles':len(list((a.reference/'export/scripts').rglob('*.as'))),'audioCount':len(meta),'soundEventCount':len(events)},indent=2))
(report/'source-scripts.json').write_text(json.dumps({str(f.relative_to(a.reference/'export/scripts')):hashlib.sha256(f.read_bytes()).hexdigest() for f in (a.reference/'export/scripts').rglob('*.as')},indent=2))
print('sounds',len(meta),'events',len(events),'streams',len(streams))
