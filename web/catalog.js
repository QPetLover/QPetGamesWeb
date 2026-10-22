const previousGame = new URL(location.href).searchParams.get('game');
if (previousGame) location.replace(`player.html?game=${encodeURIComponent(previousGame)}`);

const grid = document.getElementById('game-grid');
const count = document.getElementById('game-count');
const total = document.getElementById('collection-total');
const search = document.getElementById('search');
const emptyState = document.getElementById('empty-state');
const clearSearch = document.getElementById('clear-search');
let games = [];

function render() {
  grid.replaceChildren();
  const query = search.value.trim().toLocaleLowerCase('zh-CN');
  const selected = games.filter(game => `${game.title} ${game.baseTitle || ''}`.toLocaleLowerCase('zh-CN').includes(query));
  count.textContent = query ? `找到 ${selected.length} 款 · 共收藏 ${games.length} 款` : `${games.length} 款老朋友，等你来玩`;
  total.textContent = String(games.length).padStart(2, '0');
  emptyState.hidden = selected.length > 0;

  for (const game of selected) {
    const playUrl = `player.html?game=${encodeURIComponent(game.id)}`;
    const card = document.createElement('article');
    card.className = 'game-card';

    const picture = document.createElement('a');
    picture.className = 'cover-link';
    picture.href = playUrl;
    picture.setAttribute('aria-label', `开始玩${game.title}`);
    const cover = document.createElement('img');
    cover.src = game.cover;
    cover.alt = '';
    cover.loading = 'lazy';
    cover.decoding = 'async';
    picture.append(cover);

    const body = document.createElement('div');
    body.className = 'card-body';
    const caption = document.createElement('div');
    caption.className = 'card-caption';
    const number = document.createElement('span');
    number.textContent = `NO. ${String(games.indexOf(game) + 1).padStart(2, '0')}`;
    const collectionName = document.createElement('span');
    collectionName.textContent = 'QQ 宠物';
    caption.append(number, collectionName);
    const heading = document.createElement('h3');
    heading.textContent = game.title;

    const links = document.createElement('div');
    links.className = 'card-links';
    const play = document.createElement('a');
    play.className = 'play-link';
    play.href = playUrl;
    play.setAttribute('aria-label', `开始游戏：${game.title}`);
    const playIcon = document.createElement('span');
    playIcon.className = 'play-icon';
    playIcon.setAttribute('aria-hidden', 'true');
    playIcon.textContent = '▶';
    play.append(playIcon, document.createTextNode('开始游戏'));

    const original = document.createElement('a');
    original.className = 'compare-link';
    original.href = game.originalUrl;
    original.target = '_blank';
    original.rel = 'noopener noreferrer';
    original.textContent = '原版 Ruffle ↗';
    original.setAttribute('aria-label', `打开${game.title}的原版 Ruffle，新标签页`);
    links.append(play, original);
    body.append(caption, heading, links);
    card.append(picture, body);
    grid.append(card);
  }
  grid.setAttribute('aria-busy', 'false');
}

search.addEventListener('input', render);
clearSearch.addEventListener('click', () => {
  search.value = '';
  render();
  search.focus();
});

fetch('catalog.json').then(response => {
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}).then(data => {
  // The build selects the published games; this collection only presents originals.
  if (!Array.isArray(data)) throw new Error('Invalid catalog');
  games = data.filter(game => game.kind === 'classic');
  render();
}).catch(() => {
  grid.setAttribute('aria-busy', 'false');
  count.textContent = '收藏册暂时没能打开，请刷新页面再试。';
  total.textContent = '—';
});
