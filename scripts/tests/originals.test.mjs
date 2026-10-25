import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath} from 'node:url';
import {buildOriginals,verifyOriginals,safeOriginalPath} from '../build-originals.mjs';
import {copyOriginalFixture} from './originals-fixture.mjs';
const REPO=fileURLToPath(new URL('../../',import.meta.url));
function fixture(){const root=fs.mkdtempSync(path.join(os.tmpdir(),'qpet-originals-'));copyOriginalFixture({repositoryRoot:REPO,destination:root});return root;}
test('original comparison stays isolated with19 load contracts and11 native/8 detail destinations',async()=>{
 const root=fixture();try{const report=await buildOriginals({repositoryRoot:root});assert.equal(report.engine,'Ruffle');assert.equal(report.gameCount,19);assert.equal(report.fontSWFs,1);assert.equal(report.runtimeFiles,7);assert.equal(report.routes.nativeCardRoutes,11);assert.equal(report.routes.originalOnlyCards,8);assert.equal(report.routes.originalPlayerRoutes,19);assert.equal(report.routes.gameplayRun,false);assert(fs.existsSync(path.join(root,'dist/originals/index.html')));assert(!fs.existsSync(path.join(root,'dist/index.html')));}finally{fs.rmSync(root,{recursive:true,force:true});}
});
test('fixed originals closure rejects a modified runtime, extra source and traversal',async()=>{
 const root=fixture();try{
  await buildOriginals({repositoryRoot:root});const folder=path.join(root,'dist/originals'),runtime=path.join(folder,'assets/vendor/ruffle/ruffle.js'),old=fs.readFileSync(runtime);fs.appendFileSync(runtime,'changed');await assert.rejects(verifyOriginals({repositoryRoot:root,directory:folder}),/Originals size differs|Originals SHA differs/);fs.writeFileSync(runtime,old);
  const extra=path.join(folder,'qa-probe.js');fs.writeFileSync(extra,'1');await assert.rejects(verifyOriginals({repositoryRoot:root,directory:folder}),/exact whitelist/);fs.unlinkSync(extra);
  for(const name of ['../index.html','/index.html','a/../index.html','reskin_games/a.swf','a\\b'])assert.throws(()=>safeOriginalPath(name));
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});
