# Q宠游戏 · QPetGamesWeb

收集能在现代浏览器中游玩的 **QQ 宠物经典原版小游戏**。首批收录 **8 款已完成浏览器检查的游戏**，其他经典游戏在逐款确认后继续加入。

本集合使用 **未经修改的 SWF + Ruffle 0.7.1 WebAssembly**。HTML / JavaScript 负责目录、加载和尺寸切换，游戏规则、画面、动画及声音仍由原 SWF 执行。「网页化」不代表已将游戏逻辑转换为原生 JavaScript。

## 两站对照

- [原收藏站 QPetGames](https://qpetlover.cn/QPetGames/)：已部署，使用 Ruffle **0.5.0**，保留原收藏目录和播放环境。
- [新集合 Q宠游戏](https://qpetlover.cn/QPetGamesWeb/)：首批 8 款原版小游戏，使用 Ruffle **0.7.1**。
- 新集合首页每张游戏卡片并列提供「开始游戏」和「原版 Ruffle」，播放器中也保留同款对照链接。
- 两站对应 SWF 的 SHA-256 相同；两站共用同一后备字体，运行时版本不同，因此不能仅凭文件一致宣称显示与行为完全相同。

两个站点共用已有 `qpetlover.cn` 域名，分别使用 `/QPetGames/` 和 `/QPetGamesWeb/` 仓库路径。本仓库已按用户确认公开，通过 GitHub Actions 部署 Pages，并启用强制 HTTPS。

## 首批游戏

点击游戏名称查看来源、文件校验、实际检查项目和未验证范围。**完成浏览器检查不代表逐关通关**；具体范围以各游戏 `manifest.json` 的 `verification` 为准。

| 游戏与验收记录 | 原版 Ruffle 对照 |
| --- | --- |
| [搭鹊桥](games/classic-002/README.md) | [classic-002](https://qpetlover.cn/QPetGames/#/play/classic-002) |
| [QQ 飞车](games/classic-003/README.md) | [classic-003](https://qpetlover.cn/QPetGames/#/play/classic-003) |
| [企鹅的挑战](games/classic-004/README.md) | [classic-004](https://qpetlover.cn/QPetGames/#/play/classic-004) |
| [QQ端盘子](games/classic-006/README.md) | [classic-006](https://qpetlover.cn/QPetGames/#/play/classic-006) |
| [Q宠保姆](games/classic-009/README.md) | [classic-009](https://qpetlover.cn/QPetGames/#/play/classic-009) |
| [QQ宠物狩猎场](games/classic-011/README.md) | [classic-011](https://qpetlover.cn/QPetGames/#/play/classic-011) |
| [Q宠速配](games/qpet-match/README.md) | [classic-014](https://qpetlover.cn/QPetGames/#/play/classic-014) |
| [Q 宠摘星星](games/classic-015/README.md) | [classic-015](https://qpetlover.cn/QPetGames/#/play/classic-015) |

## 本地运行

需要 Node.js 20 或以上、npm，以及 Python 3.9 或以上。首次安装 npm 依赖需要联网；构建后运行时、后备字体和已收录 SWF 全部由本地服务提供。原 SWF 自身包含的外链或历史网络服务不因此恢复。

```sh
npm ci --ignore-scripts
npm run build
npm run verify
npm start
```

打开 <http://127.0.0.1:4178/> 查看全部已收录游戏。若端口被占用，可运行 `npm start -- --port 4180`。服务只监听本机；点击游戏画面解除浏览器音频静音后，从原游戏菜单开始。

单游戏入口为 `player.html?game=<id>`，例如：

- Q宠速配：<http://127.0.0.1:4178/player.html?game=qpet-match>
- 搭鹊桥：<http://127.0.0.1:4178/player.html?game=classic-002>
- QQ 飞车：<http://127.0.0.1:4178/player.html?game=classic-003>

来源 ID `classic-014` 对应本集合保留的早期 ID `qpet-match`；其余游戏沿用原目录 ID。对应关系由清单的 `sourceId` 和 `originalUrl` 固定。

运行后可进一步核对实际 HTTP 交付：

```sh
npm run verify -- --url http://127.0.0.1:4178/
```

`dist/` 是可托管的静态产物，需通过 HTTP 提供，WASM 文件的 MIME 类型为 `application/wasm`。页面资源使用相对路径，支持部署在 GitHub Pages 的仓库子路径。

## GitHub Pages 部署

工作流见 [.github/workflows/pages.yml](.github/workflows/pages.yml)。对 `main` 的推送及手动运行依次执行依赖安装、构建、原文件校验、上传 `dist/`、Pages 部署；拉取请求仅运行构建和校验，不部署。当前 Free 组织下，仓库为私有时工作流同样只构建校验；公开并启用 Pages 后可手动触发部署。

仓库 Settings → Pages 已选择 **GitHub Actions**。后续更新需核查 Actions 的部署结果，并实际读取线上首页、`catalog.json` 和各游戏 SWF；`npm run verify -- --url https://qpetlover.cn/QPetGamesWeb/` 可核对当前本地产物与线上文件。

## 目录、来源与一致性边界

- `games/<id>/`：原始 SWF、封面、来源清单、静态检查和逐游戏对照说明。
- `web/`：游戏目录与通用播放器，不重写游戏规则。
- `assets/fonts/`：与原站相同、已核对 SHA 的字体 SWF 及来源说明。
- `scripts/`：构建、文件一致性校验、本地 HTTP 服务。
- `evidence/`：已归档的实际浏览器验收截图；具体覆盖范围见各游戏记录。
- `dist/`、`node_modules/`：生成目录，不入库。

游戏与封面来自 [QPetLover/QPetGames](https://github.com/QPetLover/QPetGames)，固定源 commit 为 `cac5e2d7636da081a178a2300865eb5090649969`。每款 `manifest.json` 保存原路径、大小、SHA-256、舞台尺寸、帧率和对应原站地址。本仓库自带 SWF 和字体，构建不依赖其它 checkout 或本机绝对路径。

运行时固定为 `@ruffle-rs/ruffle@0.7.1`，npm lockfile 固定分发包与 integrity。使用与原站逐字节相同的「站酷快乐体2016修订版」字体 SWF，并对齐 sans 后备设置；这仍不能代表历史设备字体，字体差异不以修改游戏 SWF 解决。Ruffle 的兼容性也可能影响脚本、音频或显示。没有历史 Adobe Flash Player 的逐帧、逐音频或全部关卡等价结论。第三方内容说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 继续收录经典原版游戏

1. 从源仓库的经典目录取出实际 SWF（不能是 Git LFS 文本指针），确认是 QQ 宠物原版，固定上游 commit、原路径、字节数和 SHA-256。
2. 放入 `game.swf`、封面、`manifest.json`、`README.md` 和静态检查记录，填写 `sourceId` 及对应原站播放链接。
3. 核查附属 SWF、图片、字体、音频和网络／登录依赖，明确必要资源及兼容性差异。
4. 实际检查原菜单、说明、操作、计分、结束和重玩，记录日期、截图、差异和未覆盖项目。加载／开局成功只能按实际范围记录。
5. 完成该款验收后纳入正式目录，再构建、校验和部署；未完成的候选不列入已交付清单。

每款游戏独立验收，不用相似玩法或重写版本代替原版。更新 Ruffle 前须回归已收录游戏。
