# Q宠游戏 · QPetGamesWeb

首款 **Q宠速配**：从原 SWF 提取矢量素材、时间轴与 ActionScript 规则，迁移为独立的 HTML / Canvas / JavaScript 网页游戏。网页不加载 SWF，不依赖 Ruffle、Flash 虚拟机或 WASM。

- 网页：<https://qpetlover.cn/QPetGamesWeb/>
- 原版对照：<https://qpetlover.cn/QPetGames/#/play/classic-014>
- 实现、来源及验证范围：[native/qpet-match/README.md](native/qpet-match/README.md)

目前只开放这一款。此前的 8 款 SWF / Ruffle 集合已撤下，旧 `player.html?game=...` 地址显示下架通知。原版网站由独立仓库维护。

## 本地运行

需要 Node.js 20 或以上、Python 3.9 或以上。

```sh
npm ci --ignore-scripts
npm test
npm run build
npm run verify
npm start
```

打开 <http://127.0.0.1:4178/>。点击管道改变方向，连接两侧有爱心的 Q 宠；支持鼠标和触摸，手机可横屏游玩。

GitHub Pages 工作流先执行测试、构建和校验，再部署 `dist/`。产物白名单为 `index.html`、`app.js`、`style.css`、旧链接通知 `player.html` / `maintenance.css` 和 `.nojekyll`，不会复制历史游戏或模拟器。校验会拒绝 SWF / WASM、动态执行和联网 API；部署后可核对线上字节及旧资源 404：

```sh
python3 scripts/verify.py --url https://qpetlover.cn/QPetGamesWeb/
```

## HTML / ZIP 候选

```sh
node scripts/build-native.mjs --xhs
```

生成独立目录 `minitool-candidate/`，含一个 HTML 入口、JS 和 CSS，素材与音频均在包内，并移除网页版的外部原版对照链接。它是面向小红书 HTML 小工具的候选包，尚未实际上传或验证平台验收。当前仅验证桌面浏览器和 Chrome 手机模拟，不能视作手机真机测试。

原素材、字体及导出辅助代码的来源与许可证说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
