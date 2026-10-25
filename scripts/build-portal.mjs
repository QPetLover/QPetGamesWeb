import {readFile,mkdir,writeFile,cp,rm} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';

export const CATEGORIES=[
 {id:'happy-valley',title:'欢乐谷'},
 {id:'adventure',title:'冒险岛'},
 {id:'classic',title:'更多小游戏'},
];
export const PORTAL_FONTS=['qpet-rounded.woff2','OFL-ZCOOL-KuaiLe.txt','source.json'];
const CONTROLS={
 'qpet-match':'点击管道改变方向，连接两侧带着爱心的 Q宠。',
 'magpie-bridge':'移动鼠标或拖动手指抓住喜鹊，避开乌鸦。',
 'qpet-racing':'方向键控制驾驶，Ctrl 使用道具。手机使用画面下方的触控按钮。',
 'qpet-forest':'种下种子，沿着长成的植物探索森林。跟随游戏中的提示操作。',
 'qpet-qqtang':'单人使用方向键移动、空格放弹；双人 P1 使用 WASD 和空格，P2 使用方向键和回车。',
 'qpet-dungeon':'方向键移动，X 攻击、C 跳跃、Z 技能、回车对话。手机使用触控按钮。',
 'qpet-sonic':'方向键左右移动、上跳、下蹲，斜向障碍使用两个方向键。手机方向按钮支持同时按下。',
 'qpet-adventure':'方向键移动，空格与人物对话。跟随各关画面中的提示探索和解谜。',
 'qpet-guardian':'在 QGG 所在区域调整角度，点按投出雪球。',
 'qpet-stars':'← → 移动 QGG 托住 QMM；↑ ↓ 微调弹跳角度。手机使用屏幕上的方向按钮。',
 'qpet-penguin-challenge':'左右方向键助跑，空格跳跃。手机可同时按方向和跳跃按钮。',
 'qpet-full-stars':'移动鼠标或在画面上拖动，托起小球，点亮星星。',
 'qpet-nanny':'← → 移动；Z、X、C、V 分别送给红、蓝、橙、绿客人，↓ 丢弃垃圾，空格使用礼物。手机使用下方按钮。',
 'qpet-blocks':'电脑按空格放下积木，首块搭成功后也可点击；手机点按游戏画面。',
 'qpet-trays':'← → 控制移动，保持平衡，把盘子送到右侧。手机使用画面下方的方向按钮。',
 'qpet-fishing':'移动鼠标或拖动手指抓鱼，避开障碍。',
 'qpet-differences':'对照左右两图，点击右图不同之处。手机直接点按右图。',
};
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
export function publishedCatalog(catalog){
 const games=catalog.filter(game=>game.published);
 assert(games.length,'At least one published game');
 assert.equal(new Set(games.map(game=>game.id)).size,games.length,'Unique published IDs');
 assert.equal(new Set(games.map(game=>game.path)).size,games.length,'Unique published paths');
 for(const game of games){
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(game.path||''),'Every game needs a separate safe path: '+game.id);
  assert(!['covers','fonts','games','originals'].includes(game.path),'Game path collides with portal files');
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(game.id||''),'Every detail needs a safe ID');
  assert(CATEGORIES.some(category=>category.id===game.category),'Unknown game category: '+game.id);
  assert(typeof game.summary==='string'&&game.summary.trim(),'Game summary required: '+game.id);
  assert(/^https:\/\/qpetlover\.cn\//.test(game.original)||game.original===game.path+'/#version-notes','Unsupported comparison URL: '+game.id);
  assert(game.cover===undefined||/^covers\/[a-z0-9]+(?:-[a-z0-9]+)*\.png$/.test(game.cover),'Unsafe cover path: '+game.id);
 }
 return games;
}
export const hasOriginalReference=game=>/^https:\/\/qpetlover\.cn\//.test(game.original||'');
export function comparisonHref(game,{prefix=''}={}){
 if(!hasOriginalReference(game))return null;
 const url=new URL(game.original);
 if(url.pathname==='/QPetGames/'&&/^#\/play\/[a-z0-9-]+$/.test(url.hash))return prefix+'originals/'+url.hash;
 return game.original;
}
export function renderSections(catalog,{coverSizes={}}={}){
 const games=publishedCatalog(catalog);
 return CATEGORIES.map(category=>{
  const entries=games.filter(game=>game.category===category.id);
  if(!entries.length)return '';
  const cards=entries.map(game=>`<article class="game-card${game.cover?' has-cover':''}" data-game="${escape(game.id)}">
${game.cover?`<a class="game-cover" href="${escape(game.path)}/" aria-label="${escape(game.title)}"><img src="${escape(game.cover)}" alt="${escape(game.title)}游戏画面" loading="lazy" decoding="async"${coverSizes[game.cover]?` width="${coverSizes[game.cover].width}" height="${coverSizes[game.cover].height}"`:''}></a>`:''}
<div class="card-body"><h3><a class="native-title" href="${escape(game.path)}/">${escape(game.title)}</a></h3>
<div class="game-actions"><a class="play-link" href="${escape(game.path)}/" aria-label="开始游戏：${escape(game.title)}">开始游戏 <span aria-hidden="true">→</span></a><a class="details-link" href="games/${escape(game.id)}/" aria-label="游戏详情：${escape(game.title)}">详情</a></div></div>
</article>`).join('\n');
  return `<section id="${category.id}" class="game-section" data-category="${category.id}" aria-labelledby="${category.id}-title"><div class="section-heading"><h2 id="${category.id}-title">${category.title}</h2></div><div class="game-grid">${cards}</div></section>`;
 }).filter(Boolean).join('\n');
}
export function renderDetail(game,{cssVersion=''}={}){
 const start='../../'+game.path+'/',original=comparisonHref(game,{prefix:'../../'});
 const cover=game.cover?`<div class="detail-cover"><img src="../../${escape(game.cover)}" alt="${escape(game.title)}游戏画面"></div>`:'';
 return `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="description" content="${escape(game.summary)}"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; font-src 'self'; img-src 'self' data:; base-uri 'none'; object-src 'none'; frame-src 'none'"><title>${escape(game.title)} · Q宠游戏</title><link rel="icon" href="data:,"><link rel="preload" href="../../fonts/qpet-rounded.woff2?v=84d9957904eedeac" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="../../portal.css${cssVersion?'?v='+cssVersion:''}"></head>
<body><div class="site-shell"><header class="site-header"><a class="brand" href="../../" aria-label="Q宠游戏大厅"><span class="brand-mark" aria-hidden="true">Q</span><span>Q宠游戏</span></a><nav aria-label="主导航"><a href="../../">返回游戏大厅</a></nav></header><main class="detail-main"><a class="breadcrumb" href="../../#${escape(game.category)}">← ${CATEGORIES.find(category=>category.id===game.category).title}</a><article class="detail-panel" data-game="${escape(game.id)}">${cover}<div class="detail-copy"><h1>${escape(game.title)}</h1><p class="detail-summary">${escape(game.summary)}</p>${CONTROLS[game.id]?`<section class="detail-controls"><h2>怎么玩</h2><p>${escape(CONTROLS[game.id])}</p></section>`:''}<div class="detail-actions"><a class="play-link" href="${escape(start)}">开始游戏 →</a>${original?`<a class="comparison-link" href="${escape(original)}">原版对照 ↗</a>`:''}</div></div></article></main><footer class="detail-footer"><a class="footer-brand" href="../../">Q宠游戏</a><p>旧时光，慢慢玩。</p><a href="../../">返回游戏大厅 ↑</a></footer></div></body></html>\n`;
}
export async function buildPortal({repositoryRoot=fileURLToPath(new URL('../',import.meta.url)),outputDirectory,catalog}={}){
 const root=path.resolve(repositoryRoot),output=outputDirectory||path.join(root,'dist');
 const entries=catalog||JSON.parse(await readFile(path.join(root,'native/games.json'),'utf8'));
 const games=publishedCatalog(entries),template=await readFile(path.join(root,'web/portal.html'),'utf8');
 const css=await readFile(path.join(root,'web/portal.css')),cssVersion=createHash('sha256').update(css).digest('hex').slice(0,16);
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
 const html=template.replace('<!-- category-navigation -->',navigation).replace('<!-- game-sections -->',renderSections(entries,{coverSizes})).replace('{{game-count}}',String(games.length)).replace('portal.css"','portal.css?v='+cssVersion+'"');
 await mkdir(output,{recursive:true});
 await writeFile(path.join(output,'index.html'),html);
 await cp(path.join(root,'web/portal.css'),path.join(output,'portal.css'));
 await rm(path.join(output,'covers'),{recursive:true,force:true});
 for(const cover of Object.keys(coverSizes)){await mkdir(path.dirname(path.join(output,cover)),{recursive:true});await cp(path.join(root,'web',cover),path.join(output,cover));}
 await mkdir(path.join(output,'fonts'),{recursive:true});
 for(const file of PORTAL_FONTS)await cp(path.join(root,'web/fonts',file),path.join(output,'fonts',file));
 await rm(path.join(output,'games'),{recursive:true,force:true});
 const details=[];
 for(const game of games){const file='games/'+game.id+'/index.html';await mkdir(path.dirname(path.join(output,file)),{recursive:true});await writeFile(path.join(output,file),renderDetail(game,{cssVersion}));details.push(file);}
 return{games:games.map(game=>game.id),details,output};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 const output=process.argv.find(arg=>arg.startsWith('--output='))?.slice(9);
 await buildPortal({outputDirectory:output?path.resolve(output):undefined});
}
