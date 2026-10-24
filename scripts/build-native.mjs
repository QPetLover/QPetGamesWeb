import {build} from 'esbuild';
import {readFile, writeFile, mkdir, rm, cp, readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const game = process.argv.find(arg=>arg.startsWith('--game='))?.slice(7) || 'qpet-match';
const catalog=JSON.parse(await readFile(path.join(root,'native/games.json'),'utf8'));
const entry=catalog.find(item=>item.id===game);
assert(entry,'Unknown native game');
const source = path.join(root, 'native',game);
// Public deployment copies this native build; the minitool candidate stays separate.
const xhs = process.argv.includes('--xhs');
const output = path.join(root,xhs?entry.candidate:entry.preview);
await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});
if(entry.builder==='embedded-python') {
  execFileSync('python3',[path.join(source,'build.py'),'--web','--out',output],{stdio:'inherit'});
  console.log(`Native ${game}: embedded media, readable static JS and no external runtime.`);
  process.exit(0);
}
const license=await readFile(path.join(root,'licenses/FFDEC-GPL-3.0.txt'),'utf8');
const notice=`/* FFDec-derived Canvas helper: GPL-3.0. Modified, readable source and notices:\nhttps://github.com/QPetLover/QPetGamesWeb/tree/main/native/${game}\nOriginal game artwork/audio/font rights remain with their respective authors.\n\n${license}\n*/`;
await build({entryPoints:[path.join(source,'app.js')],bundle:true,format:'iife',target:['chrome61'],
  outfile:path.join(output,'app.js'),minify:false,legalComments:'inline',charset:'utf8',banner:{js:notice}});
let html = await readFile(path.join(source,'index.html'),'utf8');
html = html.replace('type="module" src="app.js"','defer src="app.js"');
if(entry.path==='') {
  const marker='<!-- published-game-links -->';
  assert.equal(html.split(marker).length,2,'One published game-list placeholder on the home page');
  const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const links=catalog.filter(item=>item.published).map(item=>{
    const href=item.path?item.path+'/':'./';
    return `<div data-game="${escapeHtml(item.id)}"><a href="${escapeHtml(href)}"${item.id===game?' aria-current="page"':''}>${escapeHtml(item.title)}</a><a href="${escapeHtml(item.original)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.comparisonLabel||'原版对照')} ↗</a></div>`;
  }).join('');
  html=html.replace(marker,links);
}
if (xhs) html = html.replace(/<!-- web-only:start -->[\s\S]*?<!-- web-only:end -->/g, '');
else {
  // A new deploy must not silently keep executing an older cached bundle.
  for(const file of ['app.js','style.css']) {
    const bytes=await readFile(file==='app.js'?path.join(output,file):path.join(source,file));
    const version=createHash('sha256').update(bytes).digest('hex').slice(0,16);
    html=html.replace(`${file}"`,`${file}?v=${version}"`);
  }
}
await writeFile(path.join(output,'index.html'),html);
await cp(path.join(source,'style.css'),path.join(output,'style.css'));
// Artwork, glyphs and sound are compiled into app.js; no duplicate source modules.
// Standalone media, when present, are copied with a file-type allowlist.
const mediaExt = new Set(['.png','.jpg','.jpeg','.gif','.webp','.svg','.woff','.woff2']);
async function copyMedia(dir, relative='assets') {
  for (const entry of await readdir(dir,{withFileTypes:true})) {
    const p=path.join(dir,entry.name), rel=path.join(relative,entry.name);
    if (entry.isDirectory()) await copyMedia(p,rel);
    else if (mediaExt.has(path.extname(entry.name))) {
      await mkdir(path.dirname(path.join(output,rel)),{recursive:true});
      await cp(p,path.join(output,rel));
    }
  }
}
await copyMedia(path.join(source,'assets'));
const files=[];
async function scan(dir) { for(const entry of await readdir(dir,{withFileTypes:true})) {
  const p=path.join(dir,entry.name);
  if(entry.isDirectory()) await scan(p); else files.push(p);
}}
await scan(output);
const allow = new Set(['.html','.js','.css','.png','.jpg','.jpeg','.gif','.webp','.svg','.woff','.woff2','.json']);
for(const file of files) assert(allow.has(path.extname(file)), `Not allowed in a minitool: ${file}`);
assert.equal(files.filter(p=>p.endsWith('.html')).length,1,'One HTML entry');
const js = await readFile(path.join(output,'app.js'),'utf8');
assert(!/\beval\s*\(|\bnew\s+Function\s*\(|\bWebAssembly\b|\.swf["']|ruffle/i.test(js),'Forbidden runtime/dynamic evaluation');
assert(!/\bfetch\s*\(|\bXMLHttpRequest\b|\bWebSocket\b|\bimport\s*\(/.test(js),'No request APIs or dynamic imports');
assert(!/<(?:iframe|object|embed)\b|\bon\w+\s*=/i.test(html),'No embedded runtime or inline event handlers');
console.log(`Native ${xhs?'minitool candidate':'web preview'}: ${files.length} files at ${output}. No SWF, WASM or dynamic execution.`);
