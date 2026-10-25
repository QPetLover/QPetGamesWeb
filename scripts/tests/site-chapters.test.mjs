/** Small synthetic site plus an existing chapter sample; never rebuilds 17 chapters. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {buildSite} from '../build.mjs';
import {CATEGORIES,publishedCatalog,renderSections} from '../build-portal.mjs';
const REPO=fileURLToPath(new URL('../../',import.meta.url)),BUILD=path.join(REPO,'.build');
function setup({chapterPublished=false,sample}={}){
 fs.mkdirSync(BUILD,{recursive:true});const root=fs.mkdtempSync(path.join(BUILD,'site-test-')),calls=[];
 const registry=JSON.parse(fs.readFileSync(path.join(REPO,'native/games.json'))),ordinary=registry.filter(g=>g.published&&g.kind!=='chapters');
 const adventure={...registry.find(g=>g.id==='qpet-adventure'),published:chapterPublished};
 const draft={id:'unverified-draft',title:'未验候选',path:'unverified-draft',published:false,category:'classic',summary:'不应公开',original:'https://qpetlover.cn/QPetGames/#/play/unverified',cover:'covers/unverified-draft.png'};
 const catalog=[...ordinary,adventure,draft];
 function put(name,data){const file=path.join(root,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,data);}
 put('package.json','{"dependencies":{}}');put('native/games.json',JSON.stringify(catalog));
 for(const f of['player.html','maintenance.css','portal.html','portal.css'])put('web/'+f,fs.readFileSync(path.join(REPO,'web',f)));
 for(const g of ordinary)if(g.cover)put('web/'+g.cover,fs.readFileSync(path.join(REPO,'web',g.cover)));
 put('web/'+draft.cover,fs.readFileSync(path.join(REPO,'web/covers/qpet-match.png')));
 for(const g of ordinary)if(g.builder!=='embedded-python')put(`native/${g.id}/assets/pixel.png`,Buffer.from([137,80,78,71]));
 fs.mkdirSync(path.join(root,'scripts'),{recursive:true});for(const f of['verify.py','verify-adventure.mjs'])fs.copyFileSync(path.join(REPO,'scripts',f),path.join(root,'scripts',f));
 function run(_command,args){calls.push(args);if(path.basename(args[0])==='build-adventure.mjs'){assert(sample,'An existing one-chapter sample is required');assert.deepEqual(args.slice(1),['--mode=web','--output=preview-adventure']);fs.cpSync(sample,path.join(root,'preview-adventure'),{recursive:true});return;}assert.equal(path.basename(args[0]),'build-native.mjs');const g=ordinary.find(g=>args[1]==='--game='+g.id);assert(g);put(g.preview+'/app.js','"use strict";document.querySelector("canvas");');put(g.preview+'/style.css','body{}');if(g.builder!=='embedded-python')put(g.preview+'/assets/pixel.png',Buffer.from([137,80,78,71]));put(g.preview+'/index.html','<canvas></canvas><script defer src="app.js"></script>');}
 const verify=()=>spawnSync('python3',[path.join(root,'scripts/verify.py')],{cwd:root,encoding:'utf8',maxBuffer:4*1024*1024});
 return{root,catalog,ordinary,calls,run,put,verify,cleanup:()=>fs.rmSync(root,{recursive:true,force:true})};
}
const grouped=catalog=>CATEGORIES.flatMap(category=>catalog.filter(g=>g.published&&g.category===category.id).map(g=>g.id));
test('static portal groups published games, separates every route and hides draft chapters',async()=>{
 const f=setup();try{
  const result=await buildSite({repositoryRoot:f.root,run:f.run});assert.equal(result.games.length,f.ordinary.length);assert.equal(f.calls.length,f.ordinary.length);assert(f.calls.every(a=>path.basename(a[0])==='build-native.mjs'));
  const check=f.verify();assert.equal(check.status,0,check.stderr);const report=JSON.parse(check.stdout);assert.deepEqual(report.homeLinksVerified,grouped(f.catalog));
  const html=fs.readFileSync(path.join(f.root,'dist/index.html'),'utf8');assert(!html.includes('<canvas'));assert(html.includes('href="qpet-match/"'));assert(!html.includes('href="#adventure"'));assert(!html.includes('unverified-draft'));assert(!fs.existsSync(path.join(f.root,'dist/app.js')));assert(fs.existsSync(path.join(f.root,'dist/qpet-match/app.js')));assert(!fs.existsSync(path.join(f.root,'dist/qpet-adventure')));
  assert(!fs.existsSync(path.join(f.root,'dist',f.catalog.at(-1).cover)));for(const g of f.ordinary)if(g.cover)assert(fs.readFileSync(path.join(f.root,'web',g.cover)).equals(fs.readFileSync(path.join(f.root,'dist',g.cover))));
  assert(html.includes('版本与来源'));assert(html.includes('企鹅素材按历史截图补制'));assert(html.includes('欢乐谷归属尚未证实'));
 }finally{f.cleanup();}
});
test('portal rejects root-game collisions and verification catches swapped comparison, group and draft links',async()=>{
 const f=setup();try{
  const rootGame=f.catalog.map(g=>g.id==='qpet-match'?{...g,path:''}:g);assert.throws(()=>publishedCatalog(rootGame),/separate safe path/);
  assert.throws(()=>renderSections(f.catalog.map(g=>g.id==='qpet-match'?{...g,category:'unknown'}:g)),/Unknown game category/);
  assert.throws(()=>renderSections(f.catalog.map(g=>g.id==='qpet-match'?{...g,cover:'../escape.png'}:g)),/Unsafe cover path/);
  await buildSite({repositoryRoot:f.root,run:f.run});const file=path.join(f.root,'dist/index.html'),good=fs.readFileSync(file,'utf8');
  const game=f.catalog.find(g=>g.id==='qpet-match');fs.writeFileSync(file,good.replace(game.original,'https://qpetlover.cn/QPetGames/#/play/wrong'));let check=f.verify();assert.notEqual(check.status,0);assert.match(check.stderr,/incorrect original comparison/);
  fs.writeFileSync(file,good.replace('data-category="classic"','data-category="adventure"'));check=f.verify();assert.notEqual(check.status,0);assert.match(check.stderr,/Section anchor|categories/);
  fs.writeFileSync(file,good.replace('</main>','<a href="unverified-draft/">草稿</a></main>'));check=f.verify();assert.notEqual(check.status,0);assert.match(check.stderr,/draft linked/);
  fs.writeFileSync(file,good.replace('src="covers/qpet-match.png"','src="covers/qpet-racing.png"'));check=f.verify();assert.notEqual(check.status,0);assert.match(check.stderr,/incorrect cover/);
  fs.writeFileSync(file,good);const cover=path.join(f.root,'dist/covers/qpet-match.png');fs.appendFileSync(cover,'changed');check=f.verify();assert.notEqual(check.status,0);assert.match(check.stderr,/exact source pixels/);
 }finally{f.cleanup();}
});
const sample=process.env.ADVENTURE_SAMPLE?path.resolve(process.env.ADVENTURE_SAMPLE):path.join(REPO,'preview-adventure-web-sample');
test('published chapters keep their verified subtree and live beside the static portal',{skip:!fs.existsSync(path.join(sample,'build-manifest.json'))},async()=>{
 const f=setup({chapterPublished:true,sample});try{
  await buildSite({repositoryRoot:f.root,run:f.run});assert.equal(f.calls.length,f.ordinary.length+1);assert.equal(path.basename(f.calls.at(-1)[0]),'build-adventure.mjs');const check=f.verify();assert.equal(check.status,0,check.stderr);const report=JSON.parse(check.stdout);assert.deepEqual(report.homeLinksVerified,grouped(f.catalog));
  assert(fs.readFileSync(path.join(f.root,'dist/index.html'),'utf8').includes('href="qpet-adventure/"'));
  const app=path.join(f.root,'dist/magpie-bridge/app.js'),old=fs.readFileSync(app);fs.appendFileSync(app,'fetch("./unexpected")');const badLegacy=f.verify();assert.notEqual(badLegacy.status,0);assert.match(badLegacy.stderr,/Forbidden runtime feature/);fs.writeFileSync(app,old);
  fs.writeFileSync(path.join(f.root,'dist/qpet-adventure/unexpected.swf'),'FWS');const badChapter=f.verify();assert.notEqual(badChapter.status,0);assert.match(badChapter.stderr,/Unmanifested output/);
 }finally{f.cleanup();}
});
