/** Static native-package verification, not a browser/gameplay acceptance test. */
import assert from 'node:assert/strict';
import {readFile,readdir,lstat,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
const REPO=fileURLToPath(new URL('../',import.meta.url));
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const COMMON=new Set(['host.js','scene-graph.js','renderer.js','bitmap-cache.js','audio.js','event-pcm.js','event-pcm-plan.js','event-pcm-model.js','chapter-context.js','chapter-controller.js']);
const OPTIONAL_COMMON=new Set(['progress.js']);
const ASSETS=new Set(['drawing.js','collision-paths.js','scene-data.js','linkage.js','timeline-order.js','text-bindings.js','event-pcm.js','audio-assets.js']);
const ENTRY=/^chapter([0-8])-v([01])$/;
const posix=p=>p.split(path.sep).join('/');
function safeRelative(value){assert(typeof value==='string'&&value&&!path.isAbsolute(value)&&!value.split(/[\\/]/).includes('..'),'Unsafe manifest path');return value;}
function requiredInput(input,entry){
 const name=safeRelative(input.path);if(name==='generated-entry.mjs')return;
 const base='native/qpet-adventure/',folder=base+'assets/'+(entry.chapter===1&&entry.variant===0?'chapter1':`chapter${entry.chapter}-variant${entry.variant}`)+'/';
 assert(name===base+`chapters/chapter${entry.chapter}-actions.js`||entry.chapter===0&&name===base+'chapters/chapter0-controller.js'||name.startsWith(base+'common/')&&(COMMON.has(name.slice((base+'common/').length))||OPTIONAL_COMMON.has(name.slice((base+'common/').length)))||name.startsWith(folder)&&ASSETS.has(name.slice(folder.length))||entry.chapter===1&&entry.variant===0&&name===base+'audio-assets.js','Unexpected native closure input '+name);
}
export function inspectAdventureApp(source,mode){
 // No parser is shipped or needed here: the fixed esbuild input allowlist is the
 // executable closure. These checks cover accidental dynamic API additions.
 assert(!/\beval\s*\(|\bnew\s+(?:Function|Proxy)\s*\(|\bWebAssembly\b|\bXMLHttpRequest\b|\bWebSocket\b|\bimport\s*\(|import\.meta|\bwith\s*\(/.test(source),'Runtime/dynamic evaluation in native package');
 assert(!/window\.adventureQA|development-only|manualPaused|\/Users\/|[A-Z]:\\Users\\/.test(source),'Debug host or machine path in native package');
 if(mode==='zip')assert(!/\bfetch\s*\(/.test(source),'Standalone package must not fetch');
 const media=new Map();for(const match of source.matchAll(/data:([^;,"'\s]+);base64,([A-Za-z0-9+/=]+)/g)){
  const mime=match[1].toLowerCase();assert(['image/png','image/jpeg','audio/mpeg','audio/wav','font/ttf'].includes(mime),'Unexpected inline media type '+match[1]);
  const bytes=Buffer.from(match[2],'base64'),hash=sha(bytes);media.set(mime+':'+hash,{mime,bytes:bytes.length,sha256:hash});
 }
 return media;
}
export function inspectAdventurePageModule(source,name){
 assert(['catalog.js','common/progress.js'].includes(name),'Unexpected homepage module');
 inspectAdventureApp(source,'web');
 assert(!/\bfetch\s*\(|\brequire\s*\(/.test(source),'Homepage modules only use local native state');
 const imports=[...source.matchAll(/\b(?:import|export)\s+(?:(?:[\w$*{},\s]+)\s+from\s*)?["']([^"']+)["']/g)].map(m=>m[1]);
 if(name==='catalog.js')assert(imports.length===1&&/^\.\/common\/progress\.js(?:\?v=[a-f0-9]{16})?$/.test(imports[0]),'Unexpected homepage module import');
 else assert.deepEqual(imports,[],'Unexpected homepage module import');
}
export async function verifyAdventure(directory,{checkInputs=false,writeReport=true}={}){
 const root=path.resolve(directory),manifest=JSON.parse(await readFile(path.join(root,'build-manifest.json'),'utf8'));
 assert(['web','zip'].includes(manifest.mode)&&manifest.entries?.length,'Invalid native build manifest');
 if(manifest.mode==='zip')assert(!(manifest.shared||[]).length,'Standalone ZIP has no homepage/shared modules');
 const expected=new Map(),ids=new Set(),results=[];
 function expect(name,record){safeRelative(name);assert(!expected.has(name),'Duplicate output manifest path '+name);expected.set(name,record);}
 for(const entry of manifest.entries){
  const m=ENTRY.exec(entry.id);assert(m&&+m[1]===entry.chapter&&+m[2]===entry.variant&&!(entry.chapter===0&&entry.variant!==0),'Invalid entry');assert(!ids.has(entry.id),'Duplicate entry');ids.add(entry.id);
  assert(entry.mode===manifest.mode,'Entry mode mismatch');
  assert.deepEqual(entry.files.map(f=>f.path).sort(),['LICENSE-FFDEC.txt','app.js','index.html','style.css'],'Only four fixed per-entry files may ship');
  const nativeBase='native/qpet-adventure/',assetBase=nativeBase+'assets/'+(entry.chapter===1&&entry.variant===0?'chapter1':`chapter${entry.chapter}-variant${entry.variant}`)+'/';
  const required=new Set(['generated-entry.mjs',...COMMON].map(p=>p==='generated-entry.mjs'?p:nativeBase+'common/'+p));
  for(const p of ASSETS)required.add(p==='audio-assets.js'&&entry.chapter===1&&entry.variant===0?nativeBase+p:assetBase+p);
  required.add(nativeBase+`chapters/chapter${entry.chapter}-actions.js`);if(entry.chapter===0)required.add(nativeBase+'chapters/chapter0-controller.js');
  for(const optional of OPTIONAL_COMMON)if(entry.inputs.some(p=>p.path===nativeBase+'common/'+optional))required.add(nativeBase+'common/'+optional);
  assert(entry.inputs.length===required.size&&entry.inputs.every(p=>required.has(p.path)),'Incomplete or duplicated native closure');
  for(const input of entry.inputs){requiredInput(input,entry);if(checkInputs&&input.path!=='generated-entry.mjs'){const bytes=await readFile(path.join(REPO,input.path));assert(bytes.length===input.bytes&&sha(bytes)===input.sha256,'Source changed after build '+input.path);}}
  for(const file of entry.files)expect(entry.id+'/'+file.path,file);
  if(entry.zip)expect(entry.zip.path,entry.zip);
  const app=await readFile(path.join(root,entry.id,'app.js'),'utf8'),html=await readFile(path.join(root,entry.id,'index.html'),'utf8'),media=inspectAdventureApp(app,manifest.mode);
  assert(!/<(?:iframe|object|embed)\b|\bon\w+\s*=|\{\{(?:TITLE|SCRIPT_SRC|STYLE_HREF)\}\}/i.test(html),'Unexpected HTML runtime or unresolved template');
  assert((html.match(/<script\b/g)||[]).length===1&&/<script defer src="app\.js\?v=[a-f0-9]{16}"><\/script>/.test(html),'One local deferred IIFE entry is required');
  assert(/href="style\.css\?v=[a-f0-9]{16}"/.test(html),'Missing local stylesheet');
  const js=entry.files.find(f=>f.path==='app.js'),css=entry.files.find(f=>f.path==='style.css');assert(html.includes('app.js?v='+js.sha256.slice(0,16))&&html.includes('style.css?v='+css.sha256.slice(0,16)),'HTML cache version mismatch');
  if(manifest.mode==='web'){
   assert(app.includes(`https://qpetlover.cn/qpet-adventure/reference.html?chapter=${entry.chapter}&variant=${entry.variant}`),'Incorrect per-chapter original link');
   assert(app.includes('../assets/fonts/myfont.ttf'),'Missing explicit native font URL');
   for(const pcm of entry.pcmFiles)assert(app.includes('../assets/audio-pcm/'+path.basename(pcm.source)),'PCM URL missing from app');
  }else{
   assert(manifest.font&&media.has('font/ttf:'+manifest.font.sha256),'Standalone font bytes missing');
   for(const pcm of entry.pcmFiles)assert(media.get('audio/wav:'+pcm.sha256)?.bytes===pcm.bytes,'Standalone PCM bytes missing');
   const expectedFiles=Object.fromEntries(entry.files.map(f=>[f.path,{bytes:f.bytes,sha256:f.sha256}]));
   const zipResult=JSON.parse(execFileSync('python3',['-c',`import sys,zipfile,hashlib,json\nwith zipfile.ZipFile(sys.argv[1]) as z:\n names=z.namelist()\n if len(names)!=len(set(names)):raise ValueError('Duplicate ZIP path')\n result={n:{'bytes':len(z.read(n)),'sha256':hashlib.sha256(z.read(n)).hexdigest()} for n in names}\n print(json.dumps(result,sort_keys=True))`,path.join(root,entry.zip.path)],{encoding:'utf8'}));
   assert.deepEqual(zipResult,expectedFiles,'ZIP content differs from verified entry');
  }
  results.push({id:entry.id,inputModules:entry.inputs.length,files:entry.files.length,inlineMedia:media.size,pcmFiles:entry.pcmFiles.length});
 }
 for(const shared of manifest.shared||[]){assert(shared.path==='index.html'||shared.path==='style.css'||['catalog.js','common/progress.js'].includes(shared.path)||/^assets\/(?:fonts\/myfont\.ttf|audio-pcm\/[a-f0-9]+(?:-\d+)?\.wav)$/.test(shared.path),'Unexpected shared output '+shared.path);expect(shared.path,shared);}
 if(manifest.mode==='web'){
  assert(expected.has('index.html')&&expected.has('style.css')&&expected.get('assets/fonts/myfont.ttf')?.sha256===manifest.font?.sha256,'Missing Web home/styles/native font');
  for(const entry of manifest.entries)for(const pcm of entry.pcmFiles){const out=expected.get('assets/audio-pcm/'+path.basename(pcm.source));assert(out?.bytes===pcm.bytes&&out?.sha256===pcm.sha256,'Missing or mismatched shared PCM');}
  const home=await readFile(path.join(root,'index.html'),'utf8');
  const modules=['catalog.js','common/progress.js'],hasModules=modules.some(name=>expected.has(name)),scripts=[...home.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  if(hasModules){assert(modules.every(name=>expected.has(name)),'Homepage progress modules must be paired');assert(scripts.length===1&&/\btype=["']module["']/.test(scripts[0][1])&&/\bsrc=["'](?:\.\/)?catalog\.js(?:\?v=[a-f0-9]+)?["']/.test(scripts[0][1])&&!scripts[0][2].trim(),'Missing fixed catalog module entry');for(const name of modules)inspectAdventurePageModule(await readFile(path.join(root,name),'utf8'),name);}else assert(scripts.length===0,'Unmanifested homepage script');
  if(hasModules){const catalog=await readFile(path.join(root,'catalog.js'),'utf8'),version=/\.\/common\/progress\.js\?v=([a-f0-9]{16})/.exec(catalog);if(version)assert.equal(version[1],expected.get('common/progress.js').sha256.slice(0,16),'Homepage progress cache version mismatch');}
  const links=[...home.matchAll(/data-entry="([0-8]):([01])"[^>]*href="\.\/([^"/]+)\/"/g)];
  assert(links.length===ids.size,'Homepage entries differ from built subset');for(const match of links)assert(ids.has(match[3])&&match[3]===`chapter${match[1]}-v${match[2]}`,'Homepage broken entry');
 }
 const actual=[];async function walk(dir,rel=''){for(const row of await readdir(dir,{withFileTypes:true})){const r=posix(path.join(rel,row.name)),p=path.join(dir,row.name),st=await lstat(p);assert(!st.isSymbolicLink(),'Output symlink rejected');if(row.isDirectory())await walk(p,r);else actual.push(r);}}await walk(root);
 for(const file of actual){if(['build-manifest.json','verification.json'].includes(file))continue;assert(expected.has(file),'Unmanifested output '+file);}
 for(const [file,record] of expected){const bytes=await readFile(path.join(root,file));assert(bytes.length===record.bytes&&sha(bytes)===record.sha256,'Output SHA/bytes mismatch '+file);if(file.endsWith('.wav'))assert(bytes.toString('ascii',0,4)==='RIFF'&&bytes.toString('ascii',8,12)==='WAVE','Invalid WAV');if(file.endsWith('.ttf'))assert(bytes.readUInt32BE(0)===0x00010000,'Invalid native TTF');}
 const report={passed:true,mode:manifest.mode,entries:results.length,files:expected.size,rows:results,scope:'Static input/output closure, media/TTF hashes, HTML URLs, exact ZIP contents. No browser/playability/mobile/audio acceptance.'};
 if(writeReport)await writeFile(path.join(root,'verification.json'),JSON.stringify(report,null,2)+'\n');return report;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const args=process.argv.slice(2),input=args.find(a=>!a.startsWith('--'))||'preview-adventure';assert(args.every(a=>a===input||a==='--inputs'),'Usage: node scripts/verify-adventure.mjs [output] [--inputs]');
 console.log(JSON.stringify(await verifyAdventure(path.resolve(REPO,input),{checkInputs:args.includes('--inputs')})));
}
