/** Copy the independently pinned Ruffle comparison module; never a native-game runtime. */
import {readFile,readdir,lstat,mkdir,cp,rm} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {verifyOriginalRoutes} from './original-routes.mjs';

const DEFAULT_ROOT=fileURLToPath(new URL('../',import.meta.url));
export function safeOriginalPath(name){
 assert(typeof name==='string'&&name.length&&!name.includes('\\')&&!name.startsWith('/')&&name===path.posix.normalize(name)&&!name.split('/').some(part=>part==='..'||part==='.'),'Unsafe originals path: '+name);
 assert(!/reskin/i.test(name),'Retired reskin in originals module');return name;
}
async function filesIn(folder,prefix=''){
 const result=[];
 for(const entry of await readdir(path.join(folder,prefix),{withFileTypes:true})){
  const name=prefix?prefix+'/'+entry.name:entry.name;
  assert(!entry.isSymbolicLink(),'Symlink in originals: '+name);
  if(entry.isDirectory())result.push(...await filesIn(folder,name));
  else{assert(entry.isFile(),'Unsupported originals entry: '+name);result.push(safeOriginalPath(name));}
 }return result.sort();
}
export async function verifyOriginals({repositoryRoot=DEFAULT_ROOT,directory,checkRoutes=true}={}){
 const root=path.resolve(repositoryRoot),folder=path.resolve(directory||path.join(root,'web/originals'));
 assert(!(await lstat(folder)).isSymbolicLink(),'Originals root must not be a symlink');
 const manifest=JSON.parse(await readFile(path.join(root,'web/originals-manifest.json'),'utf8'));
 assert.equal(manifest.schemaVersion,1,'Unknown originals manifest');
 assert.equal(manifest.modulePath,'originals','Originals must remain isolated');
 assert(Array.isArray(manifest.files)&&manifest.files.length===manifest.fileCount,'Fixed originals file count');
 const names=manifest.files.map(file=>safeOriginalPath(file.path));
 assert.equal(new Set(names).size,names.length,'Duplicate originals manifest path');
 assert.deepEqual(await filesIn(folder),[...names].sort(),'Originals exact whitelist differs');
 const checks=[];
 for(const file of manifest.files){
  assert(Number.isSafeInteger(file.bytes)&&file.bytes>=0&&/^[a-f0-9]{64}$/.test(file.sha256),'Invalid originals identity: '+file.path);
  const data=await readFile(path.join(folder,file.path));
  assert.equal(data.length,file.bytes,'Originals size differs: '+file.path);
  assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256,'Originals SHA differs: '+file.path);
  checks.push({file:file.path,bytes:data.length,sha256:file.sha256});
 }
 const catalog=JSON.parse(await readFile(path.join(folder,'assets/data/games.json'),'utf8'));
 const ids=[...Array.from({length:16},(_,index)=>`classic-${String(index+1).padStart(3,'0')}`),'happy-forest','happy-qqtang','happy-dungeon'];
 assert.deepEqual(catalog.games.map(game=>game.id).sort(),ids.sort(),'Original catalog must contain19 fixed games');
 assert.equal(manifest.games.length,19,'Original game identity count');
 assert.equal(catalog.ruffleSource,'assets/vendor/ruffle/ruffle.js','Pinned Ruffle entry');
 assert.equal(catalog.fontSource,'assets/fonts/original-comparison.swf','Original font must be local');
 assert.equal(names.filter(name=>name.toLowerCase().endsWith('.swf')).length,20,'19 game SWFs plus one local font SWF');
 assert(['FWS','CWS','ZWS'].includes((await readFile(path.join(folder,catalog.fontSource))).subarray(0,3).toString()),'Invalid local original font');
 for(const game of catalog.games){
  const identity=manifest.games.find(item=>item.id===game.id);assert(identity,'Missing original identity: '+game.id);
  assert.equal(game.swf,identity.path,'Original path differs: '+game.id);
  assert.equal(game.sha256,identity.sha256,'Original catalog SHA differs: '+game.id);
  assert.equal(game.sizeBytes,identity.bytes,'Original catalog size differs: '+game.id);
  assert.equal(game.playable,true);assert.equal(game.kind,game.id.startsWith('classic-')?'classic':'archive');
  assert(game.swf.startsWith(game.kind==='classic'?'classical_games/swf/':'community_games/swf/'),'Original path category differs');
  const data=await readFile(path.join(folder,game.swf));
  assert(['FWS','CWS','ZWS'].includes(data.subarray(0,3).toString()),'Invalid original SWF: '+game.id);
  assert.equal(data.length,identity.bytes);assert.equal(createHash('sha256').update(data).digest('hex'),identity.sha256);
  for(const name of [game.cover,game.originalCover].filter(Boolean))assert(names.includes(safeOriginalPath(name)),'Missing original cover');
 }
 const runtime=names.filter(name=>name.startsWith('assets/vendor/ruffle/'));
 assert.equal(runtime.length,7,'Ruffle runtime must retain its7 fixed files');
 assert.equal(runtime.filter(name=>name.endsWith('.wasm')).length,2);
 for(const name of runtime.filter(name=>name.endsWith('.wasm')))assert((await readFile(path.join(folder,name))).subarray(0,4).equals(Buffer.from([0,97,115,109])),'Invalid Ruffle WASM');
 const routes=checkRoutes?await verifyOriginalRoutes({directory:folder}):null;
 return{result:'passed',modulePath:'originals',engine:'Ruffle',fileCount:checks.length,gameCount:19,fontSWFs:1,runtimeFiles:runtime.length,sourceManifest:'web/originals-manifest.json',externalDependencies:manifest.externalDependencies||[],routes,files:checks};
}
export async function buildOriginals({repositoryRoot=DEFAULT_ROOT,outputDirectory}={}){
 const root=path.resolve(repositoryRoot),output=path.resolve(outputDirectory||path.join(root,'dist'));
 const report=await verifyOriginals({repositoryRoot:root});
 await mkdir(output,{recursive:true});await rm(path.join(output,'originals'),{recursive:true,force:true});
 await cp(path.join(root,'web/originals'),path.join(output,'originals'),{recursive:true});
 await verifyOriginals({repositoryRoot:root,directory:path.join(output,'originals')});
 return report;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const verify=process.argv.find(arg=>arg.startsWith('--verify='))?.slice(9);
 const output=process.argv.find(arg=>arg.startsWith('--output='))?.slice(9);
 console.log(JSON.stringify(verify?await verifyOriginals({directory:verify}):await buildOriginals({outputDirectory:output})));
}
