# 第三方内容与来源

## 原游戏

`games/qpet-match/game.swf` 来自 `QPetLover/QPetGames` 的固定 commit `cac5e2d7636da081a178a2300865eb5090649969`，路径 `classical_games/swf/Q宠速配.swf`。SHA-256 见同目录清单。游戏中的署名、商标及素材保留原样。

本次检查未在上游仓库找到授予这些游戏素材通用许可的根 LICENSE。此来源记录不将公开可下载视为再授权；本仓库没有给第三方 SWF 追加代码许可证。`evidence/` 中截图来自该游戏的实际运行。

## Ruffle

官方 npm 包：`@ruffle-rs/ruffle@0.7.1`，上游 <https://github.com/ruffle-rs/ruffle>。

依赖使用 MIT / Apache-2.0 双许可。构建从原 npm 包原样复制运行时及 `LICENSE_MIT`、`LICENSE_APACHE` 到 `dist/vendor/ruffle/`，不将生成运行时提交到源码仓库。

## Noto Sans CJK SC

文件：`assets/fonts/NotoSansCJKsc-Regular.otf`。

上游：<https://github.com/notofonts/noto-cjk>，路径 `Sans/OTF/SimplifiedChinese/NotoSansCJKsc-Regular.otf`。

SHA-256：`2c76254f6fc379fddfce0a7e84fb5385bb135d3e399294f6eeb6680d0365b74b`。

许可证：SIL Open Font License 1.1，完整文本见同目录 `OFL.txt`。该字体仅补齐原文件未嵌入的中文设备文字，不是原请求的「华康海报体W12(P)」字体。
