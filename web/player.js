// Host integration only. Original SWFs provide all gameplay, artwork and sound.
window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = { autoplay: 'on', unmuteOverlay: 'visible', splashScreen: false };

window.addEventListener('DOMContentLoaded', async () => {
  const status = document.getElementById('player-status');
  const getJSON = async url => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
    return response.json();
  };
  document.getElementById('reload-button').addEventListener('click', () => location.reload());
  document.getElementById('size-button').addEventListener('click', event => {
    const original = document.getElementById('game-frame').classList.toggle('original-size');
    event.currentTarget.textContent = original ? '适应窗口' : '显示原始尺寸';
  });
  try {
    const catalog = await getJSON('catalog.json');
    const selector = document.getElementById('game-select');
    for (const game of catalog) selector.add(new Option(game.title, game.id));
    const requested = new URL(location.href).searchParams.get('game');
    const game = requested ? catalog.find(entry => entry.id === requested) : catalog[0];
    selector.addEventListener('change', () => {
      const url = new URL(location.href);
      url.searchParams.set('game', selector.value);
      location.assign(url);
    });
    if (!game) {
      selector.selectedIndex = -1;
      throw new Error('未找到这款游戏，请从上方列表选择已收录游戏。');
    }
    selector.value = game.id;
    const manifest = await getJSON(game.manifest);
    document.title = `${manifest.title} · Q宠游戏`;
    document.getElementById('game-title').textContent = manifest.title;
    document.getElementById('runtime-version').textContent = `${manifest.rufflePackage} ${manifest.ruffleVersion}（本地自托管）`;
    document.getElementById('swf-hash').textContent = manifest.swfSha256;
    document.getElementById('stage-info').textContent = `${manifest.originalWidth} × ${manifest.originalHeight}，${manifest.originalFrameRate} FPS；保持原始宽高比，不覆盖 SWF 帧率。`;
    document.getElementById('differences').textContent = manifest.verification.knownDifferences.join(' ') || '当前尚未记录差异。';
    document.getElementById('untested').textContent = `尚未验证：${manifest.verification.notTested.join('、')}。`;
    document.getElementById('manifest-link').href = game.manifest;
    document.getElementById('source-link').href = manifest.sourceRepository;
    const frame = document.getElementById('game-frame');
    frame.style.aspectRatio = `${manifest.originalWidth} / ${manifest.originalHeight}`;
    frame.style.setProperty('--original-width', `${manifest.originalWidth}px`);
    frame.setAttribute('aria-label', `${manifest.title}原始游戏画面`);
    const font = manifest.fontFallback;
    if (font) Object.assign(window.RufflePlayer.config, {
      fontSources: [font.servedPath],
      defaultFonts: { sans: [font.suppliedFace], serif: [font.suppliedFace], typewriter: [font.suppliedFace] }
    });
    const player = window.RufflePlayer.newest().createPlayer();
    document.getElementById('player-container').append(player);
    await player.ruffle().load({ url: manifest.servedPath });
    status.textContent = `原版 SWF 已加载 · Ruffle ${manifest.ruffleVersion}`;
  } catch (error) {
    status.textContent = `加载失败：${error.message}`;
    console.error(error);
  }
});
