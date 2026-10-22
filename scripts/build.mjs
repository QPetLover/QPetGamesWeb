import {readFile,mkdir,copyFile,writeFile,rm,readdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';

const root=fileURLToPath(new URL('../',import.meta.url));
const dist=path.join(root,'dist');
const pkg=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
assert.equal(Object.keys(pkg.dependencies||{}).length,0,'No runtime packages are required');
// Only the two audited native games are published. Originals stay external.
execFileSync(process.execPath,[path.join(root,'scripts/build-native.mjs')],{stdio:'inherit'});
execFileSync(process.execPath,[path.join(root,'scripts/build-native.mjs'),'--game=magpie-bridge'],{stdio:'inherit'});
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
const native=['index.html','app.js','style.css'];
for(const file of native) await copyFile(path.join(root,'preview-native',file),path.join(dist,file));
await mkdir(path.join(dist,'magpie-bridge'),{recursive:true});
for(const file of native) await copyFile(path.join(root,'preview-magpie',file),path.join(dist,'magpie-bridge',file));
for(const file of ['player.html','maintenance.css']) await copyFile(path.join(root,'web',file),path.join(dist,file));
await writeFile(path.join(dist,'.nojekyll'),'');
assert.deepEqual((await readdir(dist)).sort(),[...native,'magpie-bridge','player.html','maintenance.css','.nojekyll'].sort());
assert.deepEqual((await readdir(path.join(dist,'magpie-bridge'))).sort(),native.sort());
console.log('Published build contains native Q宠速配 / 搭鹊桥 and the withdrawn-link notice.');
