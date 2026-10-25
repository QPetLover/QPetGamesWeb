import {readFile,mkdir,writeFile,cp,rm} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

export const CATEGORIES=[
 {id:'happy-valley',title:'欢乐谷',description:'森林、QQ堂和音速，还有社区保存的 Q宠地下城。'},
 {id:'adventure',title:'冒险岛',description:'从启航开始，重温一集接一集的故事。'},
 {id:'classic',title:'更多小游戏',description:'连一段心意，搭一座鹊桥，或来一场飞车比赛。'},
];
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
export function publishedCatalog(catalog){
 const games=catalog.filter(game=>game.published);
 assert(games.length,'At least one published game');
 assert.equal(new Set(games.map(game=>game.id)).size,games.length,'Unique published IDs');
 assert.equal(new Set(games.map(game=>game.path)).size,games.length,'Unique published paths');
 for(const game of games){
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(game.path||''),'Every game needs a separate safe path: '+game.id);
  assert(game.path!=='covers','Game path collides with portal covers');
  assert(CATEGORIES.some(category=>category.id===game.category),'Unknown game category: '+game.id);
  assert(typeof game.summary==='string'&&game.summary.trim(),'Game summary required: '+game.id);
  assert(/^https:\/\/qpetlover\.cn\//.test(game.original)||game.original===game.path+'/#version-notes','Unsupported comparison URL: '+game.id);
  assert(game.cover===undefined||/^covers\/[a-z0-9]+(?:-[a-z0-9]+)*\.png$/.test(game.cover),'Unsafe cover path: '+game.id);
 }
 return games;
}
export function renderSections(catalog,{coverSizes={}}={}){
 const games=publishedCatalog(catalog);
 return CATEGORIES.map(category=>{
  const entries=games.filter(game=>game.category===category.id);
  if(!entries.length)return '';
  const cards=entries.map((game,index)=>`<article class="game-card${game.cover?' has-cover':''}" data-game="${escape(game.id)}">
${game.cover?`<div class="game-cover"><img src="${escape(game.cover)}" alt="${escape(game.title)}游戏开始画面" loading="lazy" decoding="async"${coverSizes[game.cover]?` width="${coverSizes[game.cover].width}" height="${coverSizes[game.cover].height}"`:''}></div>`:''}
<div class="card-top"><span class="card-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span>${game.badge?`<span class="badge">${escape(game.badge)}</span>`:''}</div>
<h3>${escape(game.title)}</h3><p class="game-summary">${escape(game.summary)}</p>${game.sourceNote?`<p class="source-note">${escape(game.sourceNote)}</p>`:''}
<div class="game-actions"><a class="play-link" href="${escape(game.path)}/" aria-label="开始游戏：${escape(game.title)}">开始游戏 <span aria-hidden="true">→</span></a><a class="comparison-link" href="${escape(game.original)}" target="_blank" rel="noopener noreferrer">${escape(game.comparisonLabel||'原版对照')} ↗</a></div>
</article>`).join('\n');
  return `<section id="${category.id}" class="game-section" data-category="${category.id}" aria-labelledby="${category.id}-title"><div class="section-heading"><div><p class="section-kicker">${category.id==='happy-valley'?'一起去玩':category.id==='adventure'?'故事继续':'熟悉的快乐'}</p><h2 id="${category.id}-title">${category.title}</h2></div><p>${category.description}</p></div><div class="game-grid">${cards}</div></section>`;
 }).filter(Boolean).join('\n');
}
export async function buildPortal({repositoryRoot=fileURLToPath(new URL('../',import.meta.url)),outputDirectory,catalog}={}){
 const root=path.resolve(repositoryRoot),output=outputDirectory||path.join(root,'dist');
 const entries=catalog||JSON.parse(await readFile(path.join(root,'native/games.json'),'utf8'));
 const games=publishedCatalog(entries),template=await readFile(path.join(root,'web/portal.html'),'utf8');
 const css=await readFile(path.join(root,'web/portal.css'));
 const coverSizes={};
 for(const game of games){
  if(!game.cover)continue;
  const bytes=await readFile(path.join(root,'web',game.cover));
  assert(bytes.length>=24&&bytes.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),'Cover must be a PNG: '+game.id);
  const width=bytes.readUInt32BE(16),height=bytes.readUInt32BE(20);
  assert(width>0&&height>0&&width<=4096&&height<=4096,'Invalid cover dimensions: '+game.id);
  coverSizes[game.cover]={width,height};
 }
 assert.equal(template.split('<!-- game-sections -->').length,2,'One portal section placeholder');
 assert.equal(template.split('<!-- category-navigation -->').length,2,'One portal navigation placeholder');
 const navigation=CATEGORIES.filter(category=>games.some(game=>game.category===category.id)).map(category=>`<a href="#${category.id}">${category.title}</a>`).join('');
 const html=template.replace('<!-- category-navigation -->',navigation).replace('<!-- game-sections -->',renderSections(entries,{coverSizes})).replace('{{game-count}}',String(games.length)).replace('portal.css"','portal.css?v='+createHash('sha256').update(css).digest('hex').slice(0,16)+'"');
 await mkdir(output,{recursive:true});
 await writeFile(path.join(output,'index.html'),html);
 await cp(path.join(root,'web/portal.css'),path.join(output,'portal.css'));
 await rm(path.join(output,'covers'),{recursive:true,force:true});
 for(const cover of Object.keys(coverSizes)){await mkdir(path.dirname(path.join(output,cover)),{recursive:true});await cp(path.join(root,'web',cover),path.join(output,cover));}
 return{games:games.map(game=>game.id),output};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const output=process.argv.find(arg=>arg.startsWith('--output='))?.slice(9);
 await buildPortal({outputDirectory:output?path.resolve(output):undefined});
}
