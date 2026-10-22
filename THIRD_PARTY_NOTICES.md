# 第三方内容与来源

## 游戏、封面与截图

首批 8 款经典游戏的 SWF 与封面来自 [QPetLover/QPetGames](https://github.com/QPetLover/QPetGames) 的固定 commit `cac5e2d7636da081a178a2300865eb5090649969`，均位于上游 `classical_games/`。后续仅逐款加入已经核验的 QQ 宠物经典原版游戏。

每款原路径、字节数、SWF SHA-256、封面路径与封面 SHA-256 记录在 `games/<id>/manifest.json`；[首批游戏](README.md#首批游戏)链接到各款说明和原站 Ruffle 对照页。游戏中的署名、商标及素材保留原样。`evidence/` 中截图来自对应游戏的实际运行。

本次检查未在上游仓库找到授予这些游戏素材通用许可的根 LICENSE。此来源记录不将公开可下载视为再授权；本仓库没有给第三方 SWF、封面或游戏素材追加代码许可证。

## Ruffle

本集合使用官方 npm 包 `@ruffle-rs/ruffle@0.7.1`；上游：[ruffle-rs/ruffle](https://github.com/ruffle-rs/ruffle)。

依赖使用 MIT / Apache-2.0 双许可。构建从锁定的 npm 包原样复制运行时及 `LICENSE_MIT`、`LICENSE_APACHE` 到 `dist/vendor/ruffle/`，不将生成运行时提交到源码仓库。

[原收藏站](https://qpetlover.cn/QPetGames/)保留其已有的 Ruffle 0.5.0 环境。本集合的逐款对照链接指向原站相同 SWF，不代表两个运行时在所有细节上等价。

## 原站共用字体

文件：`assets/fonts/original-site-font.swf`，从[原站字体资源](https://qpetlover.cn/qpet-adventure/myfont.swf)取得，未经修改。

固定来源：[QPetLover/qpet-adventure](https://github.com/QPetLover/qpet-adventure/blob/cbd3a75ee7787d62911c8ee58125931961741752/site/myfont.swf)，commit `cbd3a75ee7787d62911c8ee58125931961741752`；路径 `site/myfont.swf`。

SHA-256：`3e932db5fd6e3f814978b32c82c85a1a305cb7c349b2ba9d5b3eabfe3e7e837c`；大小 2,055,402 字节，与上游校验清单一致。内部字体名「站酷快乐体2016修订版」，7,746 字形，内嵌版权字段 `(c) Copyright LuiBingKe 2016`。

本集合与原站采用同一 `fontSources` 资源及 `defaultFonts.sans` 设置。来源说明不追加或推断字体许可，也不将本文件套用之前 Noto 字体的 OFL 许可。此前版本中的 Noto 字体已移出当前分发；旧提交及当时许可记录仍保留在 Git 历史中。

此字体对齐当前原站 Ruffle 后备字形，不能称为历史 Flash 请求的华康海报体；历史设备字体的完全一致性未验收。
