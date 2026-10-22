import {build} from 'esbuild';
import {readFile, writeFile, mkdir, rm, cp, readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'native/qpet-match');
// Public deployment copies this native build; the minitool candidate stays separate.
const xhs = process.argv.includes('--xhs');
const output = path.join(root, xhs ? 'minitool-candidate' : 'preview-native');
await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});
await build({entryPoints:[path.join(source,'app.js')],bundle:true,format:'iife',target:['chrome61'],
  outfile:path.join(output,'app.js'),minify:false,legalComments:'inline',charset:'utf8'});
let html = await readFile(path.join(source,'index.html'),'utf8');
html = html.replace('type="module" src="app.js"','defer src="app.js"');
if (xhs) html = html.replace(/<!-- web-only:start -->[\s\S]*?<!-- web-only:end -->/g, '');
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
