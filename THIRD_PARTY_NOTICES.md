# 第三方内容与来源

## 原游戏素材与规则

首款《Q宠速配》的矢量图、字形、时间轴、音频及规则来自 [QPetLover/QPetGames](https://github.com/QPetLover/QPetGames) 的 `classical_games/swf/Q宠速配.swf`，固定源提交 `cac5e2d7636da081a178a2300865eb5090649969`。SWF SHA-256 为 `654f01b4e6a48782ffe10be1750f321e7570d9a96133f1644094017d47b1ab94`，舞台 500×400、30 FPS。

游戏的署名、商标和素材保留原样。本次未找到上游根 LICENSE 对第三方游戏素材授予通用再授权，不对这些素材追加代码许可证。原件用于离线提取和对照；原生网页产物不包含或执行 SWF。

- `native/qpet-match/assets/provenance.json`：原素材导出输入、修正及 SHA。
- `native/qpet-match/audio-provenance.json`：9段原始 MPEG 音频的编号、采样数、seek与SHA，无转码。
- `native/qpet-match/tests/fixtures/`：测试用原 ActionScript 片段；只在 Node 测试中执行，不进入网页产物。

## 搭鹊桥原素材与规则

第二款《搭鹊桥》来自相同上游固定提交的 `classical_games/swf/QQ抓喜鹊.swf`，SHA-256 `94007c475f91fed70b35b848b7288faf8d7415cd9f0f0b04533bcba03d8fd3c6`，800×600、25FPS。`native/magpie-bridge/assets/provenance.json`记录242个静态符号、15张原位图的来源与修正；`audio-provenance.json`记录9段原音频的payload哈希、seek及采样数。设备文字使用与速配相同来源的原站后备字体字形子集。原署名和图形保留，原SWF不进入网页产物；此迁移不对原游戏素材或字体追加授权。FFDec导出helper沿用下述GPL-3.0说明。

## QQ飞车（宠爱飞车）原素材与规则

第三款《QQ飞车》原画题名“宠爱飞车”，来自 `QPetLover/QPetGames@30c70e0457082b25ff024a3253968e3cbb1b714d` 的 `classical_games/swf/QQ飞车.swf`，849,248 bytes，SHA-256 `c8ad6b998a57f343ddf9213ca61717bdf0ceb1061b794ca63632a9b4d9f8dd1f`，760×420、25 FPS。`native/qpet-racing/assets/provenance.json` 记录627个静态绘图/字形/动画符号、30张原位图与导出修正；`audio-provenance.json` 记录12段原 MPEG、1条根流式 MPEG、样本、seek、事件和流块哈希，未转码。原 AS fixture 只进入离线测试，不进入网页。

原图、署名与商标保留，不对原游戏素材追加代码许可。`assets/font-provenance.json` 保留原嵌入字体的名称与版权字段，包括 Franklin Gothic Medium、方正毡笔黑简体、宋体、方正粗圆简体、黑体和 Impact；动态文字复用原字形轮廓，原 `_sans` 设备小字使用系统 Arial / sans-serif 后备，不包含新增字体文件或网络字体请求。此来源记录不推断原游戏或字体授予了新增再授权。FFDec 导出 Canvas helper 沿用下述 GPL-3.0 说明。

## JPEXS FFDec

[FFDec 26.4.0](https://github.com/jindrapetrik/jpexs-decompiler) 用于构建前导出。`assets/artwork.js` 包含其 Canvas 绘制辅助代码及修改后的静态符号派发、渐变与文字修正。FFDec 的 GPL-3.0 许可证完整副本见 [licenses/FFDEC-GPL-3.0.txt](licenses/FFDEC-GPL-3.0.txt)。本仓库保留可读修改源码，不将原始 ActionScript 字节码、解释器或 Flash 虚拟机打入网页。

## 对照字体

速配、搭鹊桥的部分中文使用未嵌入的华康设备字体。为对齐当前原版网站，原生版将同一后备字体的所需字形转成包内 WOFF2 子集；来源是 [qpet-adventure 的 myfont.swf](https://github.com/QPetLover/qpet-adventure/blob/cbd3a75ee7787d62911c8ee58125931961741752/site/myfont.swf)，源 SHA-256 `3e932db5fd6e3f814978b32c82c85a1a305cb7c349b2ba9d5b3eabfe3e7e837c`。字体内部名「站酷快乐体2016修订版」，版权字段 `(c) Copyright LuiBingKe 2016`。此记录不推断新增字体授权，也不声称其等同历史设备上的华康字形。

## 历史资源

`games/`、`assets/fonts/` 和较早 `evidence/` 保留此前已撤下版本的追溯资料；当前原生构建从明确白名单取文件，不复制这些历史 SWF 或字体 SWF。原版网站的 Ruffle 播放器由另一个仓库维护，只作为外部比较基准。本项目已经移除 Ruffle 依赖，原生包没有 WASM、SWF或模拟器。
