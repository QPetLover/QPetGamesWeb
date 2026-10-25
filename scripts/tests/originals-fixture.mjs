/** Small fixed-identity route fixture: production UI and paths, inert media payloads. */
import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
export function copyOriginalFixture({repositoryRoot,destination}){
 const manifest=JSON.parse(fs.readFileSync(path.join(repositoryRoot,'web/originals-manifest.json'),'utf8'));
 const catalog=JSON.parse(fs.readFileSync(path.join(repositoryRoot,'web/originals/assets/data/games.json'),'utf8'));
 const source=path.join(repositoryRoot,'web/originals'),output=path.join(destination,'web/originals');
 const digest=data=>createHash('sha256').update(data).digest('hex');
 const put=(name,data)=>{const file=path.join(output,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,data);return data;};
 for(const file of manifest.files){
  let data;
  if(file.path.endsWith('.swf'))data=Buffer.from('FWS\x06\x10\0\0\0fixture:'+file.path);
  else if(file.path.endsWith('.wasm'))data=Buffer.from([0,97,115,109,1,0,0,0]);
  else data=fs.readFileSync(path.join(source,file.path));
  put(file.path,data);file.bytes=data.length;file.sha256=digest(data);
 }
 for(const game of catalog.games){
  const file=manifest.files.find(file=>file.path===game.swf);game.sizeBytes=file.bytes;game.sha256=file.sha256;
  const identity=manifest.games.find(item=>item.id===game.id);identity.bytes=file.bytes;identity.sha256=file.sha256;
 }
 const catalogBytes=put('assets/data/games.json',Buffer.from(JSON.stringify(catalog)));
 const entry=manifest.files.find(file=>file.path==='assets/data/games.json');entry.bytes=catalogBytes.length;entry.sha256=digest(catalogBytes);
 fs.writeFileSync(path.join(destination,'web/originals-manifest.json'),JSON.stringify(manifest));
 return{manifest,output};
}
