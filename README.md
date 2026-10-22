# Q宠游戏 · QPetGamesWeb

收集能在现代浏览器中游玩的 QQ 宠物小游戏，优先保留原游戏的画面、设定、动画、声音和操作。

当前采用 **原始 SWF + Ruffle WebAssembly**。HTML / JavaScript 只负责网页容器和游戏选择，原游戏字节码由 Ruffle 执行。「网页化」尚不意味着游戏逻辑已经转换为原生 JavaScript。

## 已收录

| 游戏 | 方式 | 已验证 | 已知边界 |
| --- | --- | --- | --- |
| [Q宠速配](games/qpet-match/README.md) | 未修改 SWF + Ruffle 0.7.1 | 菜单、说明、点击、普通连通与加分、超时、重玩 | 中文后备字体有字形差异，完整配对和通关未验收 |

![Q宠速配原版菜单](evidence/qpet-match/original-ready.jpg)

## 本地运行

需要 Node.js 20 或以上、npm，以及 Python 3.9 或以上。首次安装 npm 依赖需要联网；构建后运行时、字体和游戏资源全部由本地服务提供。

```sh
npm ci --ignore-scripts
npm run build
npm run verify
npm start
```

打开 <http://127.0.0.1:4178/>。若端口被占用，可运行 `npm start -- --port 4180`。服务只监听本机；点击游戏画面解除浏览器音频静音后，从原游戏菜单开始。

运行后可进一步核对实际 HTTP 交付：

```sh
npm run verify -- --url http://127.0.0.1:4178/
```

`dist/` 是可托管的静态产物，需通过 HTTP 提供，WASM 文件的 MIME 类型为 `application/wasm`。当前仓库未配置公开部署。

## 目录与来源

- `games/<id>/`：原始 SWF、来源清单和逐游戏对照说明。
- `web/`：通用播放器网页，只处理选择、加载、缩放和重新载入。
- `assets/fonts/`：已核对 SHA 的中文后备字体及 OFL 授权。
- `scripts/`：构建、文件一致性校验、本地 HTTP 服务。
- `evidence/`：已完成的实际浏览器验收截图。
- `dist/`、`node_modules/`：生成目录，不入库。

原游戏来自 [QPetLover/QPetGames](https://github.com/QPetLover/QPetGames)，源 commit、路径、大小和 SHA-256 均保存在每款游戏的 `manifest.json`。本仓库自带 SWF 和字体，构建不依赖其它 checkout 或本机绝对路径。

运行时固定为 `@ruffle-rs/ruffle@0.7.1`，npm lockfile 固定分发包和 integrity。第三方授权说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 收录下一款游戏

1. 从源仓库取出实际 SWF（不能是 Git LFS 文本指针），固定上游 commit、原路径、字节数和 SHA-256。
2. 新建 `games/<id>/`，放入 `game.swf`、`manifest.json` 和 `README.md`，参考首款清单。`servedPath` 必须是 `games/<id>/game.swf`。
3. 核查附属 SWF、图片、字体、音频和网络/登录依赖。存在附属资源或 FlashVars 需求时，先明确记录并补齐支持，再标为可运行；当前构建仅收录单 SWF 游戏。
4. 运行构建和校验；构建自动生成游戏列表，入口支持 `?game=<id>`。
5. 实际走完原菜单、说明、操作、计分、结束和重玩，记录验证日期、截图、差异和未覆盖项目。

每款游戏独立验收。不得用重写的玩法代替原版，也不能用文件相同来推断所有模拟行为都完全相同。若将来确需原生移植，应作为独立实现明确标记并逐项对照。更新 Ruffle 前须回归已收录游戏。
