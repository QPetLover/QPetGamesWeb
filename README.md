# Q宠游戏 · QPetGamesWeb

**Q宠速配、搭鹊桥、QQ飞车（宠爱飞车）**：从原 SWF 提取矢量、位图、字形、原声、时间轴与 ActionScript 规则，迁移为独立的 HTML / Canvas / JavaScript 网页游戏。网页不加载 SWF，不依赖 Ruffle、Flash 虚拟机或 WASM。

| 游戏 | 原生网页 | 原版对照 | 实现与验证范围 |
| --- | --- | --- | --- |
| Q宠速配 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/) | [classic-014](https://qpetlover.cn/QPetGames/#/play/classic-014) | [迁移说明](native/qpet-match/README.md) |
| 搭鹊桥 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/magpie-bridge/) | [classic-002](https://qpetlover.cn/QPetGames/#/play/classic-002) | [迁移说明](native/magpie-bridge/README.md) |
| QQ飞车（宠爱飞车） | [开始游戏](https://qpetlover.cn/QPetGamesWeb/qpet-racing/) | [classic-003](https://qpetlover.cn/QPetGames/#/play/classic-003) | [迁移说明](native/qpet-racing/README.md) |

目前收录三款原生游戏，原版入口由独立仓库维护，只作为外部对照。其余尚未迁移的游戏继续下架；此前的 SWF / Ruffle 集合不进入发布包，旧 `player.html?game=...` 地址显示下架通知。

## 本地运行

需要 Node.js 20 或以上、Python 3.9 或以上。

```sh
npm ci --ignore-scripts
npm test
npm run build
npm run verify
npm start
```

打开 [本地主页](http://127.0.0.1:4178/)，从游戏入口选择：

- 速配：点击管道改变方向，连接两侧有爱心的 Q 宠。
- 搭鹊桥：移动鼠标或拖动手指抓喜鹊。
- 飞车：方向键 ↑ 加速、↓ 减速、← → 转向；Ctrl 使用道具，炸弹按住瞄准、松开发射。手机提供对应触屏按键，建议横屏。原菜单开始按钮固定选择 `sex=2`，保留原粉色角色。

GitHub Pages 工作流先执行测试、构建和校验，再部署 `dist/`。构建白名单包含根目录速配的 HTML / JS / CSS、`magpie-bridge/` 与 `qpet-racing/` 各自的 HTML / JS / CSS、旧链接通知 `player.html` / `maintenance.css` 和 `.nojekyll`，不会复制历史游戏或模拟器。校验拒绝 SWF / WASM、动态执行和联网 API；部署后可核对线上字节及旧资源 404：

```sh
python3 scripts/verify.py --url https://qpetlover.cn/QPetGamesWeb/
```

原客户端宿主入口与旧网站导航不属于本地玩法资源。页面会说明这些旧功能的边界，不伪造积分记录、上传或兑换成功。飞车结果页原 `game2()` 方法由旧宿主提供，SWF 内没有其实现，不能据按钮文案推断其已迁移。

## HTML / ZIP 候选

```sh
node scripts/build-native.mjs --xhs
node scripts/build-native.mjs --game=magpie-bridge --xhs
node scripts/build-native.mjs --game=qpet-racing --xhs
```

分别生成独立目录 `minitool-candidate/`、`minitool-magpie-candidate/`、`minitool-racing-candidate/`，各含一个 HTML 入口、JS 和 CSS，素材与音频均在包内，并移除网页版的外部原版对照链接。它们是面向小红书 HTML 小工具的候选包，尚未实际上传或验证平台验收。

原版对照、规则差分、浏览器操作、手机布局与真实触摸分别记录；不会把测试通过或手机模拟截图视作全像素一致、物理手机或小红书验收。具体范围见各游戏说明。

原素材、字体及导出辅助代码的来源与许可证说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
