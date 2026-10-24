import {readFile,mkdir,writeFile,rm,cp,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

export async function buildSite({repositoryRoot=fileURLToPath(new URL('../',import.meta.url)),run=execFileSync}={}){
const root=path.resolve(repositoryRoot);
const dist=path.join(root,'dist');
const pkg=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
assert.equal(Object.keys(pkg.dependencies||{}).length,0,'No runtime packages are required');
const games=JSON.parse(await readFile(path.join(root,'native/games.json'),'utf8')).filter(game=>game.published);
assert.equal(games.filter(game=>game.path==='').length,1,'One home game');
assert.equal(new Set(games.map(game=>game.path)).size,games.length,'Unique published paths');
// Draft games can be built for comparison, but only audited entries are published.
for(const game of games){
  if(game.kind==='chapters'){
    assert(game.id==='qpet-adventure'&&game.path&&game.preview==='preview-adventure','Unsupported chapter package');
    run(process.execPath,[path.join(root,'scripts/build-adventure.mjs'),'--mode=web','--output='+game.preview],{stdio:'inherit',cwd:root});
  }else{
    assert(game.kind===undefined,'Unknown published game kind');
    run(process.execPath,[path.join(root,'scripts/build-native.mjs'),'--game='+game.id],{stdio:'inherit',cwd:root});
  }
}
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
for(const game of games) await cp(path.join(root,game.preview),path.join(dist,game.path),{recursive:true});
for(const file of ['player.html','maintenance.css']) await cp(path.join(root,'web',file),path.join(dist,file));
await writeFile(path.join(dist,'.nojekyll'),'');
for(const game of games){
 const needed=game.kind==='chapters'?['index.html','style.css','build-manifest.json','verification.json']:['index.html','app.js','style.css'];
 for(const file of needed)assert((await readdir(path.join(dist,game.path))).includes(file),'Missing native entry: '+game.id+'/'+file);
 if(game.kind==='chapters'){const manifest=JSON.parse(await readFile(path.join(dist,game.path,'build-manifest.json'),'utf8'));assert(manifest.mode==='web'&&manifest.entries?.length,'A chapter game needs a verified Web build');}
}
console.log('Published native games: '+games.map(game=>game.title).join(' / '));
return {dist,games:games.map(game=>game.id)};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await buildSite();
