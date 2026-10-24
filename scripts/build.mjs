import {readFile,mkdir,writeFile,rm,cp,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

const root=fileURLToPath(new URL('../',import.meta.url));
const dist=path.join(root,'dist');
const pkg=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
assert.equal(Object.keys(pkg.dependencies||{}).length,0,'No runtime packages are required');
const games=JSON.parse(await readFile(path.join(root,'native/games.json'),'utf8')).filter(game=>game.published);
assert.equal(games.filter(game=>game.path==='').length,1,'One home game');
assert.equal(new Set(games.map(game=>game.path)).size,games.length,'Unique published paths');
// Draft games can be built for comparison, but only audited entries are published.
for(const game of games) execFileSync(process.execPath,[path.join(root,'scripts/build-native.mjs'),'--game='+game.id],{stdio:'inherit'});
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
for(const game of games) await cp(path.join(root,game.preview),path.join(dist,game.path),{recursive:true});
for(const file of ['player.html','maintenance.css']) await cp(path.join(root,'web',file),path.join(dist,file));
await writeFile(path.join(dist,'.nojekyll'),'');
for(const game of games) for(const file of ['index.html','app.js','style.css']) assert((await readdir(path.join(dist,game.path))).includes(file),'Missing native entry: '+game.id+'/'+file);
console.log('Published native games: '+games.map(game=>game.title).join(' / '));
