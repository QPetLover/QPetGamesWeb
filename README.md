# Q宠游戏 · QPetGamesWeb

**Q宠速配、搭鹊桥、宠爱飞车、宠爱森林、宠爱QQ堂、地下城与勇士 · Q宠版、Q宠爱音速**：从原 SWF 提取矢量、位图、字形、原声、时间轴与 ActionScript 规则，迁移为独立的 HTML / Canvas / JavaScript 网页游戏。网页不加载 SWF，不依赖 Ruffle、Flash 虚拟机或 WASM。

| 游戏 | 原生网页 | 原版对照 | 实现与验证范围 |
| --- | --- | --- | --- |
| Q宠速配 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/) | [classic-014](https://qpetlover.cn/QPetGames/#/play/classic-014) | [迁移说明](native/qpet-match/README.md) |
| 搭鹊桥 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/magpie-bridge/) | [classic-002](https://qpetlover.cn/QPetGames/#/play/classic-002) | [迁移说明](native/magpie-bridge/README.md) |
| QQ飞车（宠爱飞车） | [开始游戏](https://qpetlover.cn/QPetGamesWeb/qpet-racing/) | [classic-003](https://qpetlover.cn/QPetGames/#/play/classic-003) | [迁移说明](native/qpet-racing/README.md) |
| 宠爱森林 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/qpet-forest/) | [happy-forest](https://qpetlover.cn/QPetGames/#/play/happy-forest) | [迁移说明](native/qpet-forest/README.md)：五张原关卡；公开输入首关过关，未声称五关自然连胜 |
| 宠爱QQ堂 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/qpet-qqtang/) | [happy-qqtang](https://qpetlover.cn/QPetGames/#/play/happy-qqtang) | [迁移说明](native/qpet-qqtang/README.md)：五张原地图、单／双人及原道具；未声称自然串通全部五关 |
| 地下城与勇士 · Q宠版 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/qpet-dungeon/) | [happy-dungeon](https://qpetlover.cn/QPetGames/#/play/happy-dungeon) | [迁移说明](native/qpet-dungeon/README.md)：两角色、三关；“宠爱地下城”正式名称及欢乐谷归属尚未证实 |
| Q宠爱音速 | [开始游戏](https://qpetlover.cn/QPetGamesWeb/qpet-sonic/) | [版本与来源](native/qpet-sonic/provenance.json) | [迁移说明](native/qpet-sonic/README.md)：同源人类版三关、规则与原声迁移，企鹅素材按历史截图补制；企鹅原始SWF仍缺 |

`native/games.json` 是公开构建的唯一名单：只有 `published: true` 的条目进入发布目录与首页。已有六款旁保留独立原版链接；音速旁标明「版本与来源」，不将同源人类文件标为企鹅原件。候选可以单独构建预览，仍不会进入公开首页。此前的 SWF / Ruffle 集合不进入原生发布包，旧 `player.html?game=...` 地址显示下架通知。

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
- 森林：移动鼠标或拖动手指控制行走，点击本层种子种植，植物长成后点按攀爬；点击下层长成的植物可向下。
- QQ堂：单人方向键移动、空格放弹；双人 P1 用 WASD／空格，P2 用方向键／回车。手机提供对应双人触控键，建议横屏。
- 地下城：方向键移动，连续两次同方向可跑，X 攻击、C 跳跃、Z 蓄力技能、回车对话。手机横屏提供两侧操作键。
- 音速：方向键左右移动、上跳、下蹲；斜向障碍同时按两个方向。保留糖果王国、万圣之夜、圣诞星空三关；手机提供多指方向按钮。

GitHub Pages 工作流先执行测试、构建和校验，再部署 `dist/`。构建从注册表选择已发布游戏，复制其 HTML / JS / CSS 与允许的静态媒体，再加入旧链接通知 `player.html` / `maintenance.css` 和 `.nojekyll`；不会复制历史游戏或模拟器。校验同时核对首页入口顺序、原版链接与候选不可见，并拒绝 SWF / WASM、动态执行和联网 API；部署后可核对线上字节及旧资源 404：

```sh
python3 scripts/verify.py --url https://qpetlover.cn/QPetGamesWeb/
```

原客户端宿主入口与旧网站导航不属于本地玩法资源。页面会说明这些旧功能的边界，不伪造积分记录、上传或兑换成功。飞车结果页原 `game2()` 方法由旧宿主提供，SWF 内没有其实现，不能据按钮文案推断其已迁移。

## HTML / ZIP 候选

```sh
node scripts/build-native.mjs --xhs
node scripts/build-native.mjs --game=magpie-bridge --xhs
node scripts/build-native.mjs --game=qpet-racing --xhs
node scripts/build-native.mjs --game=qpet-forest --xhs
node scripts/build-native.mjs --game=qpet-qqtang --xhs
node scripts/build-native.mjs --game=qpet-dungeon --xhs
```

各游戏生成注册表 `candidate` 字段指定的独立目录；新增三款分别为 `minitool-forest-candidate/`、`minitool-qqtang-candidate/`、`minitool-dungeon-candidate/`。各含一个 HTML 入口、JS 和 CSS，素材与音频均在包内，并移除网页版的站点导航及外部原版对照链接。它们是面向小红书 HTML 小工具的候选包，尚未实际上传或验证平台验收。去掉 `--xhs` 可单独生成相应 `preview` 目录查看候选，不改变发布状态。

本轮三款固定社区原件的字节大小与 SHA-256 见[来源说明](THIRD_PARTY_NOTICES.md)；社区备份与同期新闻不能证明这些文件等于历史腾讯服务器逐字节原件。原版对照、规则差分、浏览器操作、手机布局与真实触摸分别记录；不会把测试通过或手机模拟截图视作全像素一致、物理手机或小红书验收，也不将显式关卡绘图当作自然全关通关。具体范围见各游戏说明。

原素材、字体及导出辅助代码的来源与许可证说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
