import assert from 'node:assert/strict';
import {readFile,writeFile,mkdir,rm,cp,readdir,stat,mkdtemp} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {build,version as esbuildVersion} from 'esbuild';
import {verifyAdventure,inspectAdventurePageModule} from './verify-adventure.mjs';
import {fileURLToPath,pathToFileURL} from 'node:url';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

// Native-only, selected-chapter builds. The repository location is independent
// of the invoking cwd. Intermediate entry modules are removed even on failure.
const REPO=fileURLToPath(new URL('../',import.meta.url));
const NATIVE=path.join(REPO,'native/qpet-adventure');
const options=Object.fromEntries(process.argv.slice(2).map(arg=>{assert(arg.startsWith('--'),'Use --key=value options');const at=arg.indexOf('=');return[arg.slice(2,at<0?undefined:at),at<0?true:arg.slice(at+1)];}));
const allowedOptions=new Set(['mode','entries','output']);
for(const key of Object.keys(options))assert(allowedOptions.has(key),'Unknown option --'+key);
for(const [key,value]of Object.entries(options))assert(typeof value==='string'&&value.length,'Option --'+key+' needs a value');
const mode=options.mode||'web';assert(['web','zip'].includes(mode),'--mode=web|zip');
const host=path.join(NATIVE,'common/host.js');
const template=path.join(NATIVE,'page-template.html');
const css=path.join(NATIVE,'style.css');
const home=path.join(NATIVE,'index.html');
const output=path.resolve(REPO,options.output||'preview-adventure');
const outputRelative=path.relative(REPO,output).split(path.sep).join('/');
assert(/^(?:preview-adventure(?:[/-][a-zA-Z0-9_-]+)*|dist\/adventure(?:[/-][a-zA-Z0-9_-]+)*)$/.test(outputRelative),'Output must be preview-adventure[-suffix][/child] or dist/adventure[/child] inside this repository');
const allEntries=Array.from({length:9},(_,chapter)=>(chapter===0?[0]:[0,1]).map(variant=>({chapter,variant,id:`chapter${chapter}-v${variant}`}))).flat();
const requested=options.entries?new Set(options.entries.split(',')):null;
if(requested)assert(requested.size===options.entries.split(',').length,'Duplicate or empty entry');
const entries=allEntries.filter(e=>!requested||requested.has(e.id));
assert(entries.length&&(!requested||entries.length===requested.size),'Unknown entry; use chapterN-vS');
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const htmlEscape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const folderFor=({chapter,variant})=>path.join(NATIVE,'assets',chapter===1&&variant===0?'chapter1':`chapter${chapter}-variant${variant}`);
const relative=p=>path.relative(REPO,p).split(path.sep).join('/');
const readText=p=>readFile(p,'utf8');
const records=[],copied=new Map();
await Promise.all([host,template,css,home].map(p=>stat(p)));
await mkdir(path.join(REPO,'.build'),{recursive:true});
const temporary=await mkdtemp(path.join(REPO,'.build','adventure-'));
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
try{
const [htmlTemplate,cssBytes,license]=await Promise.all([readText(template),readFile(css),readText(path.join(REPO,'licenses/FFDEC-GPL-3.0.txt'))]);
for(const marker of ['{{TITLE}}','{{SCRIPT_SRC}}','{{STYLE_HREF}}'])assert(htmlTemplate.includes(marker),`Missing template marker ${marker}`);
assert(!/<(?:iframe|object|embed)\b|\bon\w+\s*=/i.test(htmlTemplate),'No embedded runtime or inline event handlers');
const fontFile=path.join(NATIVE,'assets/fonts/myfont.ttf');
const fontBytes=await readFile(fontFile);assert(fontBytes.length>12&&fontBytes.readUInt32BE(0)===0x00010000,'Invalid native TTF');
const noticeFiles=['NOTICE.md','LICENSE-RUFFLE.md','LICENSE-DASP-MIT'].map(name=>path.join(NATIVE,'assets/audio-pcm',name));
const noticeBytes=await Promise.all(noticeFiles.map(file=>readFile(file)));
const notices=noticeBytes.map((bytes,i)=>({source:relative(noticeFiles[i]),bytes:bytes.length,sha256:sha(bytes)}));
const nativeNotices=noticeBytes.map(bytes=>bytes.toString('utf8')).join('\n\n');
const banner=`/* FFDec-derived Canvas helper: GPL-3.0. Corresponding native source and notices:\nhttps://github.com/QPetLover/QPetGamesWeb/tree/main/native/qpet-adventure\nOriginal artwork/audio/font rights remain with their respective authors.\n\n${license}\n\nNative PCM numerical-port notices (no decoder/runtime is shipped):\n${nativeNotices}\n*/`;
const loaderOriginal=`const fetchBytes=async url=>{\n  const response=await fetch(url);\n  if(!response.ok)throw new Error('PCM asset HTTP '+response.status+': '+url);\n  return new Uint8Array(await response.arrayBuffer());\n};`;
const loaderInline=`const fetchBytes=async url=>{\n  const prefix='data:audio/wav;base64,';\n  if(typeof url!=='string'||!url.startsWith(prefix))throw new Error('Expected bundled PCM bytes');\n  const binary=atob(url.slice(prefix.length)),bytes=new Uint8Array(binary.length);\n  for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);\n  return bytes;\n};`;
async function copyShared(source,destination){
 if(copied.has(destination))return;
 await mkdir(path.dirname(destination),{recursive:true});await cp(source,destination);
 const bytes=await readFile(source);copied.set(destination,{path:path.relative(output,destination),bytes:bytes.length,sha256:sha(bytes),source:relative(source)});
}
const navigation=mode==='web'?{home:'../index.html',entries:Object.fromEntries(entries.map(e=>[`${e.chapter}:${e.variant}`,`../${e.id}/`]))}:{home:null,entries:{}};
for(const entry of entries){
 const folder=folderFor(entry),destination=path.join(output,entry.id);
 await rm(destination,{recursive:true,force:true});await mkdir(destination,{recursive:true});
 const audioFile=entry.chapter===1&&entry.variant===0?path.join(NATIVE,'audio-assets.js'):path.join(folder,'audio-assets.js');
 const generated=path.join(temporary,entry.id+'.mjs');
 const importAt=p=>JSON.stringify('./'+path.relative(temporary,p).split(path.sep).join('/'));
 const entryNavigation=mode==='web'?{...navigation,reference:`https://qpetlover.cn/qpet-adventure/reference.html?chapter=${entry.chapter}&variant=${entry.variant}`} : navigation;
 const selectedController=entry.chapter===0?`import {createChapter0Controller as createController} from ${importAt(path.join(NATIVE,'chapters/chapter0-controller.js'))};`:`import {variant${entry.variant} as actions} from ${importAt(path.join(NATIVE,`chapters/chapter${entry.chapter}-actions.js`))};\nimport {createChapterController} from ${importAt(path.join(NATIVE,'common/chapter-controller.js'))};\nconst createController=options=>createChapterController({...options,chapter:${entry.chapter},variant:${entry.variant},actions});`;
 const fontURL=mode==='web'?'../assets/fonts/myfont.ttf':'data:font/ttf;base64,'+fontBytes.toString('base64');
 const source=`import {startAdventure} from ${importAt(host)};\nimport {createArtwork} from ${importAt(path.join(folder,'drawing.js'))};\nimport {collisionPaths} from ${importAt(path.join(folder,'collision-paths.js'))};\nimport {instances,symbolKinds,localBounds,buttonBounds} from ${importAt(path.join(folder,'scene-data.js'))};\nimport {sourceLinkage} from ${importAt(path.join(folder,'linkage.js'))};\nimport {timelineOrder} from ${importAt(path.join(folder,'timeline-order.js'))};\nimport {textBindings} from ${importAt(path.join(folder,'text-bindings.js'))};\nimport * as audioData from ${importAt(audioFile)};\nimport {pcmData} from ${importAt(path.join(folder,'event-pcm.js'))};\n${selectedController}\nvoid startAdventure({chapter:${entry.chapter},variant:${entry.variant},createController,createArtwork,collisionPaths,assets:{instances,symbolKinds,localBounds,buttonBounds,linkages:sourceLinkage,timelineOrder,textBindings},audioData,pcmData,fontURL:${JSON.stringify(fontURL)},navigation:${JSON.stringify(entryNavigation)}});\n`;
 await mkdir(path.dirname(generated),{recursive:true});await writeFile(generated,source);
 const wavs=new Map(),transforms=[],loadedSources=new Map([[generated,sha(source)]]);
 const remember=(file,text)=>{loadedSources.set(file,sha(text));return text;};
 const pcmFile=path.join(folder,'event-pcm.js'),pcm=(await import(pathToFileURL(pcmFile).href)).pcmData;
 const pcmReferences=new Map();
 for(const asset of Object.values(pcm.assets)){pcmReferences.set(fileURLToPath(asset.url),{sha256:asset.wavSHA256,bytes:asset.wavBytes});for(const profile of Object.values(asset.profiles||{}))if(profile.prefixURL)pcmReferences.set(fileURLToPath(profile.prefixURL),{sha256:profile.prefixWavSHA256});}
 const pcmSource=await readText(pcmFile);assert(!/\bimport\s*(?:[({*]|[A-Za-z_$])/.test(pcmSource),'PCM declaration must have no module imports');
 const plugin={name:'fixed-chapter-media',setup(api){
  api.onLoad({filter:/event-pcm\.js$/},async args=>{
   if(args.path===path.join(folder,'event-pcm.js')){
    const original=remember(args.path,await readText(args.path));
    const references=[...original.matchAll(/new URL\("([^\"]+\.wav)",import\.meta\.url\)\.href/g)];
    let contents=original;
    for(const match of references){const file=path.resolve(path.dirname(args.path),match[1]);assert(file.startsWith(path.join(NATIVE,'assets/audio-pcm')+path.sep),'PCM outside fixed media directory');const bytes=await readFile(file),expected=pcmReferences.get(file);assert(expected&&sha(bytes)===expected.sha256&&(expected.bytes===undefined||bytes.length===expected.bytes),'PCM declared SHA/bytes mismatch '+relative(file));assert(bytes.toString('ascii',0,4)==='RIFF'&&bytes.toString('ascii',8,12)==='WAVE','Invalid PCM WAV '+relative(file));wavs.set(file,{bytes:bytes.length,sha256:sha(bytes)});const url=mode==='web'?'../assets/audio-pcm/'+path.basename(file):'data:audio/wav;base64,'+bytes.toString('base64');contents=contents.replace(match[0],JSON.stringify(url));}
    assert(wavs.size===pcmReferences.size,'Unresolved PCM reference');
    transforms.push({source:relative(args.path),sourceSHA256:sha(original),kind:mode==='web'?'fixed-shared-pcm-urls':'inline-exact-pcm-bytes',references:references.length});
    return{contents,loader:'js',resolveDir:path.dirname(args.path)};
   }
   if(args.path===path.join(NATIVE,'common/event-pcm.js')&&mode==='zip'){
    const original=remember(args.path,await readText(args.path));assert(original.includes(loaderOriginal),'PCM loader changed; review standalone adaptation');
    transforms.push({source:relative(args.path),sourceSHA256:sha(original),kind:'default-loader-data-url-only'});
    return{contents:original.replace(loaderOriginal,loaderInline),loader:'js',resolveDir:path.dirname(args.path)};
   }
   return null;
  });
  api.onLoad({filter:/\.m?js$/},async args=>({contents:remember(args.path,await readText(args.path)),loader:'js',resolveDir:path.dirname(args.path)}));
 }};
 const built=await build({absWorkingDir:REPO,entryPoints:[generated],bundle:true,format:'iife',target:['chrome61'],outfile:path.join(destination,'app.js'),minify:true,legalComments:'inline',charset:'utf8',banner:{js:banner},metafile:true,plugins:[plugin],logLevel:'warning'});
 const inputs=[];
 const permittedAssets=new Set(['drawing.js','collision-paths.js','scene-data.js','linkage.js','timeline-order.js','text-bindings.js','event-pcm.js','audio-assets.js']);
 for(const key of Object.keys(built.metafile.inputs)){
  const p=path.resolve(REPO,key);
  const commonFiles=new Set(['host.js','scene-graph.js','renderer.js','audio.js','event-pcm.js','event-pcm-plan.js','event-pcm-model.js','chapter-context.js','chapter-controller.js','progress.js']);
  const selectedActions=path.join(NATIVE,'chapters',`chapter${entry.chapter}-actions.js`),prologueWrapper=entry.chapter===0?path.join(NATIVE,'chapters/chapter0-controller.js'):null;
  assert(p===generated||(path.dirname(p)===path.join(NATIVE,'common')&&commonFiles.has(path.basename(p)))||p===selectedActions||p===prologueWrapper||p===audioFile||(path.dirname(p)===folder&&permittedAssets.has(path.basename(p))),`Unexpected module closure ${relative(p)}`);
  assert(!['artwork.js','instances.js'].includes(path.basename(p)),'Raw duplicate source in release');
  const bytes=await readFile(p);assert(loadedSources.get(p)===sha(bytes),'Source changed during build '+relative(p));inputs.push({path:p===generated?'generated-entry.mjs':relative(p),bytes:bytes.length,sha256:sha(bytes)});
 }
 const app=await readText(path.join(destination,'app.js'));
 assert(!/\beval\s*\(|\bnew\s+Function\s*\(|\bWebAssembly\b|\bXMLHttpRequest\b|\bWebSocket\b|\bimport\s*\(|import\.meta/.test(app),'Unexpected dynamic/runtime dependency');
 assert(!/window\.adventureQA|development-only|manualPaused|\/Users\/|[A-Z]:\\\\Users\\/.test(app),'Development host leaked into formal bundle');
 if(mode==='zip')assert(!/\bfetch\s*\(/.test(app),'Standalone archive must not fetch bytes');
 const versions={js:sha(app).slice(0,16),css:sha(cssBytes).slice(0,16)};
 const html=htmlTemplate.replaceAll('{{TITLE}}',htmlEscape(entry.chapter===0?'冒险岛 · 序章':`冒险岛 · 第${entry.chapter}集`)).replaceAll('{{SCRIPT_SRC}}',`app.js?v=${versions.js}`).replaceAll('{{STYLE_HREF}}',`style.css?v=${versions.css}`);
 await writeFile(path.join(destination,'index.html'),html);await writeFile(path.join(destination,'style.css'),cssBytes);
 await writeFile(path.join(destination,'LICENSE-FFDEC.txt'),license);
 if(mode==='web'){
  await copyShared(fontFile,path.join(output,'assets/fonts/myfont.ttf'));
  for(const file of wavs.keys())await copyShared(file,path.join(output,'assets/audio-pcm',path.basename(file)));
 }
 const files=await Promise.all((await readdir(destination)).sort().map(async name=>{const bytes=await readFile(path.join(destination,name));return{path:name,bytes:bytes.length,sha256:sha(bytes)};}));
 let zip=null;
 if(mode==='zip'){
  const zipFile=path.join(output,entry.id+'.zip');await rm(zipFile,{force:true});
  execFileSync('python3',['-c',`import sys,zipfile,pathlib
base=pathlib.Path(sys.argv[1]); output=pathlib.Path(sys.argv[2])
with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for name in sorted(sys.argv[3:]):
  info=zipfile.ZipInfo(name,(2020,1,1,0,0,0));info.create_system=3;info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o100644 << 16
  z.writestr(info,(base/name).read_bytes(),compress_type=zipfile.ZIP_DEFLATED,compresslevel=9)`,destination,zipFile,...files.map(f=>f.path)],{cwd:REPO});
  const bytes=await readFile(zipFile);zip={path:path.basename(zipFile),bytes:bytes.length,sha256:sha(bytes)};
 }
 records.push({...entry,mode,inputs,transforms,files,zip,outputBytes:files.reduce((n,f)=>n+f.bytes,0),pcmFiles:[...wavs].map(([p,s])=>({source:relative(p),...s}))});
 console.log(JSON.stringify({entry:entry.id,mode,outputBytes:records.at(-1).outputBytes,zipBytes:zip?.bytes??null,sourceModules:inputs.length,pcmFiles:wavs.size}));
}
if(mode==='web'){
 const homeSource=await readText(home);let homeHTML=homeSource;
 const pageModules=['catalog.js','common/progress.js'],modulePaths=pageModules.map(name=>path.join(NATIVE,name)),present=await Promise.all(modulePaths.map(file=>stat(file).then(()=>true,error=>{if(error.code==='ENOENT')return false;throw error;})));
 if(present.some(Boolean)){assert(present.every(Boolean),'Homepage progress modules must be paired');const scripts=[...homeHTML.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];assert(scripts.length===1&&/\btype=["']module["']/.test(scripts[0][1])&&/\bsrc=["'](?:\.\/)?catalog\.js(?:\?v=[a-f0-9]+)?["']/.test(scripts[0][1])&&!scripts[0][2].trim(),'Missing fixed catalog module entry');for(const [index,name]of pageModules.entries()){inspectAdventurePageModule(await readText(modulePaths[index]),name);await copyShared(modulePaths[index],path.join(output,name));}}
 else assert(!/<script\b/i.test(homeHTML),'Homepage script has no fixed module source');
 const active=new Set(entries.map(e=>`${e.chapter}:${e.variant}`));
 homeHTML=homeHTML.replace(/<a\b[^>]*\bdata-entry="([^"]+)"[^>]*>[\s\S]*?<\/a>/g,(anchor,id)=>active.has(id)?anchor:'');
 for(const entry of entries)assert(homeHTML.includes(`data-entry="${entry.chapter}:${entry.variant}"`),'Homepage missing entry '+entry.id);
 await writeFile(path.join(output,'index.html'),homeHTML);await copyShared(css,path.join(output,'style.css'));
 const bytes=Buffer.from(homeHTML);copied.set(path.join(output,'index.html'),{path:'index.html',bytes:bytes.length,sha256:sha(bytes),source:relative(home),sourceBytes:Buffer.byteLength(homeSource),sourceSHA256:sha(homeSource)});
}
const report={notices,toolchain:{node:process.version,esbuild:esbuildVersion,builderSHA256:sha(await readFile(fileURLToPath(import.meta.url))),verifierSHA256:sha(await readFile(path.join(REPO,'scripts/verify-adventure.mjs'))),python:mode==='zip'?execFileSync('python3',['--version'],{encoding:'utf8'}).trim():null},font:{source:relative(fontFile),bytes:fontBytes.length,sha256:sha(fontBytes)},mode,builtAt:new Date().toISOString(),host:relative(host),template:relative(template),output:relative(output),entries:records,shared:[...copied.values()],totalBytes:records.reduce((n,r)=>n+r.outputBytes,0)+[...copied.values()].reduce((n,f)=>n+f.bytes,0),notes:['Fixed selected-variant native JS closure only; no original SWF/AS/XML, raw composite artwork/instances, QA host or game VM.','Web PCM is same-origin fixed WAV; standalone ZIP inlines byte-identical font/PCM and replaces only the native byte loader.','Formal Web uses native sequential progress storage; standalone archives do not read or write progress.','This build does not change registry, other games, deployment or publication.']};
await writeFile(path.join(output,'build-manifest.json'),JSON.stringify(report,null,2)+'\n');
await verifyAdventure(output,{checkInputs:true});
console.log(JSON.stringify({mode,entries:entries.length,totalBytes:report.totalBytes,output:relative(output)}));
}finally{await rm(temporary,{recursive:true,force:true});}
