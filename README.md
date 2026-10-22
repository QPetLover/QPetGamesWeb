# Q宠游戏 · QPetGamesWeb

本站准备将 QQ 宠物游戏制作成原生 HTML / Canvas / JavaScript 网页游戏。首款为 **Q宠速配**，完成原版对照后再开放。

## 当前公开状态

此前发布的 8 款 SWF / Ruffle 游戏已从本次发布产物中全部撤下。当前构建只包含「Q宠速配正在重新制作。完成原版对照后开放。」提示页；旧 `player.html?game=...` 地址显示「游戏已下架」，不能继续游玩。

- 新站：<https://qpetlover.cn/QPetGamesWeb/>
- 原版对照站：<https://qpetlover.cn/QPetGames/>，由独立仓库维护，本次未修改。

只有实际部署本次构建后，线上才会显示此状态；以 GitHub Pages 部署结果和线上核验为准。

## 本地运行与发布边界

需要 Node.js 20 或以上、Python 3.9 或以上。

```sh
npm ci --ignore-scripts
npm run build
npm run verify
npm start
```

构建使用明确的文件白名单，只输出 `index.html`、替代旧播放器的 `player.html`、`maintenance.css` 和 `.nojekyll`。不复制历史游戏、字体、目录清单、模拟器或原生开发中间产物，不输出任何 SWF / WASM。项目已移除 Ruffle npm 依赖。

已有 SWF、来源记录、截图和早期实现仅用于追溯及原版对照，不能据此称原生复刻已经完成。`native/` 中后续开发的内容必须通过原版对照和单独发布检查后，才可加入发布白名单。

GitHub Pages 工作流执行构建、校验和部署。当前校验要求发布产物严格只有上述 4 个文件；旧可玩资源或任何新游戏文件进入产物都会使校验失败。
