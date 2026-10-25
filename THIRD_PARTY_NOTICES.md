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

## 森林、QQ堂与地下城的固定来源

以下三款从固定社区原件迁移，公开构建由 `native/games.json` 的 `published` 控制。不将社区保存的字节认证为历史腾讯服务器原件。文件取自 [qqpet_automation 游戏资源目录](https://github.com/xuemian168/qqpet_automation/tree/main/qq-pet-macos/src/assets/game)；未取得可归档的上游提交号，以固定大小和 SHA-256 确认输入身份。

| 源文件 | 字节大小 | SHA-256 | 舞台 |
| --- | ---: | --- | --- |
| `Q宠爱森林.swf` | 1,044,839 | `cfc82b0fda9e38bf48151af64422d89e904b32a772c7863fc048ca88c5fe1e1b` | 760×420 / 30 FPS |
| `宠爱QQ堂.swf` | 981,342 | `c8b38507e58d1d0b9aedcdd356c91b5638333253654c6508ab505161e5c9630a` | 760×420 / 30 FPS |
| `QQ地下城与勇士之Q宠版.swf` | 2,689,767 | `b6f281f708ebf6342840141b6d3785dedfc26be80d59ef09fcfe0fea596cef48` | 760×420 / 24 FPS |

- 森林：[`native/qpet-forest/assets/provenance.json`](native/qpet-forest/assets/provenance.json) 记录468个静态符号、7幅原位图及输入哈希；[`native/qpet-forest/audio-provenance.json`](native/qpet-forest/audio-provenance.json) 记录原 MPEG、绑定和 SOUNDINFO；[`native/qpet-forest/assets/font-provenance.json`](native/qpet-forest/assets/font-provenance.json) 保留原嵌入字体的版权字段。
- QQ堂：[`native/qpet-qqtang/assets/provenance.json`](native/qpet-qqtang/assets/provenance.json) 记录663个静态符号、149幅原位图及无损规范化；[`native/qpet-qqtang/audio-provenance.json`](native/qpet-qqtang/audio-provenance.json) 记录7段原 MPEG。未嵌入的设备字体及新增后备字形另见下节。
- 地下城：[`native/qpet-dungeon/assets/provenance.json`](native/qpet-dungeon/assets/provenance.json) 记录1,348个静态符号、153幅原位图与 JPEG/alpha 来源；[`native/qpet-dungeon/assets/audio-provenance.json`](native/qpet-dungeon/assets/audio-provenance.json) 记录18条嵌套 MPEG 流和2段按钮音；[`native/qpet-dungeon/assets/font-provenance.json`](native/qpet-dungeon/assets/font-provenance.json) 保留原嵌入字体的版权字段。“宠爱地下城”正式名称和欢乐谷入口归属尚未取得同期官方证据。

原美术、署名、声音、商标与嵌入字形的权利仍属其原权利人，此来源记录不对它们追加许可。原 AS 测试片段只用于离线验证，不进入网页。三款均为游戏专用 JavaScript 规则和静态绘图，不包含 SWF、解释器或通用 Flash 播放器。

## QQ堂设备字体的静态后备字形

原 font538/596 只声明 Arial Black、font640 声明 Times New Roman，未嵌入轮廓。为对齐本次 Ruffle 0.5.0 独立原件基准的 ASCII 设备文字，使用其 [Noto Sans subset](https://github.com/ruffle-rs/ruffle/blob/v0.5.0/core/assets/notosans.subset.ttf.gz) 离线导出的16个静态 Canvas 字形与 advance。解压 TTF SHA-256 为 `e47bcaaf16673637bb29b8d59fbcd650ea635f32718cf59b8f577e3ef988b975`；压缩来源 SHA-256 为 `7169d53b641ef63abb98fc771ff1c944b53fbeab3ed040ed57d1f01339ffa32b`。网页只包含静态路径，没有 TTF、字体解析器或 Ruffle 运行依赖。

Noto 字形采用 **SIL Open Font License 1.1**，Copyright 2022 The Noto Project Authors。完整版权与 OFL 正文保留在 [`native/qpet-qqtang/assets/device-font.js`](native/qpet-qqtang/assets/device-font.js) 文件首部，构建使用 inline legal comments 将其保留在发布的 `app.js` 中；逐项来源及原 font ID 见 [`native/qpet-qqtang/assets/device-font-provenance.json`](native/qpet-qqtang/assets/device-font-provenance.json)。导出脚本为 [`native/qpet-qqtang/tools/export-device-font.py`](native/qpet-qqtang/tools/export-device-font.py)。这不证明 Noto 等于历史 Flash 所用的系统 Arial Black；原榜单中文保留可读的浏览器后备，尚未校准其字体。

## JPEXS FFDec

### Q宠爱音速

音速使用经用户明确选择的人类角色同源版本，来源 `https://img1.yo4399.com/fl_8/20100705/5.swf`，4,252,418字节，SHA-256 `dd090edfc4d3161b10279b860abfa4a2964487089bccf02f22aac5a2d48bfd0d`。760×420、30fps；三关、障碍序列、规则、原声及嵌入字形由此迁移。企鹅、头像、鼓励和结算角色为参照腾讯历史截图补制的新素材，不能称为找回的原素材。菜单题字轮廓与源中未嵌入的企鹅专属文字为近似绘制。详细身份和各素材哈希见 [`native/qpet-sonic/provenance.json`](native/qpet-sonic/provenance.json)。企鹅原始 SWF 尚未找回，公开目录链接为版本来源说明。原素材与字体权利归原权利人。

[FFDec 26.4.0](https://github.com/jindrapetrik/jpexs-decompiler) 用于构建前导出。`assets/artwork.js` 包含其 Canvas 绘制辅助代码及修改后的静态符号派发、渐变与文字修正。FFDec 的 GPL-3.0 许可证完整副本见 [licenses/FFDEC-GPL-3.0.txt](licenses/FFDEC-GPL-3.0.txt)。本仓库保留可读修改源码，不将原始 ActionScript 字节码、解释器或 Flash 虚拟机打入网页。

## 对照字体

速配、搭鹊桥的部分中文使用未嵌入的华康设备字体。为对齐当前原版网站，原生版将同一后备字体的所需字形转成包内 WOFF2 子集；来源是 [qpet-adventure 的 myfont.swf](https://github.com/QPetLover/qpet-adventure/blob/cbd3a75ee7787d62911c8ee58125931961741752/site/myfont.swf)，源 SHA-256 `3e932db5fd6e3f814978b32c82c85a1a305cb7c349b2ba9d5b3eabfe3e7e837c`。字体内部名「站酷快乐体2016修订版」，版权字段 `(c) Copyright LuiBingKe 2016`。此记录不推断新增字体授权，也不声称其等同历史设备上的华康字形。

## 历史资源

`games/`、`assets/fonts/` 和较早 `evidence/` 保留此前已撤下版本的追溯资料；当前原生构建从明确白名单取文件，不复制这些历史 SWF 或字体 SWF。原版网站的 Ruffle 播放器由另一个仓库维护，只作为外部比较基准。本项目已经移除 Ruffle 依赖，原生包没有 WASM、SWF或模拟器。

## Q宠冒险岛原件与运行边界

冒险岛序章及第1–8集双角色来自 [QPetLover/qpet-adventure@cbd3a75ee7787d62911c8ee58125931961741752](https://github.com/QPetLover/qpet-adventure/tree/cbd3a75ee7787d62911c8ee58125931961741752/site) 的17份 `xmxd_N_S.swf`。原件字节、SHA-256与章节/角色映射保留在 [native/qpet-adventure/README.md](native/qpet-adventure/README.md)。它们用于离线迁移和独立原版对照，原生包不运行SWF、Ruffle、ActionScript解释器或WASM。原游戏角色、美术、声音、商标与字形归各自权利人；社区归档不认证历史服务器逐字节身份，也不追加素材授权。此非官方迁移不恢复腾讯账号、历史积分/上传/排行或通关领奖，不伪造旧服务端成功结果。

设备字体由同归档 `myfont.swf` 离线导出TTF，其版权/字体名与SHA见 [myfont-provenance.json](native/qpet-adventure/assets/fonts/myfont-provenance.json)，用于匹配当前归档对照后备字体，未声称历史宋体像素一致。事件声PCM保留原MPEG身份及离线解码哈希，详见 [provenance.json](native/qpet-adventure/assets/audio-pcm/provenance.json) 与 [PCM NOTICE](native/qpet-adventure/assets/audio-pcm/NOTICE.md)。FFDec helper采用GPL-3.0；有限音频数值函数沿用Ruffle/dasp的MIT选项，许可全文随源码与构建保留。Symphonia只用于离线素材解码，不包含在网站运行时。

## QQ宝宝守猎

原件由 awesome-qpet-games `b82b791a053c51d385b18d98f2d9951929240c50` 保存，归档标题QQ宝宝守猎，游戏标题图为QQ宠物狩猎场；SWF SHA-256 `586642f95a64d87c30076988d600563a85a4643ffe5fad5211a462617e8fd23b`。原画、声音、字形与商标归腾讯或各原作者，社区保存与原生迁移不追加素材授权。静态Canvas helper由JPEXS FFDec26.4导出并修改，遵循GPL-3.0；可读源码与具体音频/字体来源保留于 [native/qpet-hunting](native/qpet-hunting/README.md)。旧账号、收费和兑换服务未恢复；本地练习不伪造提交或兑换成功。

## QQ企鹅穿云

原件来自QPetLover/QPetGames保存的 `classical_games/swf/QQ企鹅穿云.swf`，SHA-256 `1f02ce6d9affb433e95c09fd8bcd05653b1cfb9938afa1e04c0cdfe5eeb66da9`。原画、10段MPEG声音、游戏作品与商标归腾讯或各原作者；素材权利不因社区归档或迁移而改为开源。JPEXS FFDec派生的静态Canvas helper按GPL-3.0，原设备字采用固定校对字体的包内字形，来源见 [迁移说明](native/qpet-clouds/README.md) 及该目录assets的provenance文件。原积分服务不恢复，不伪造上传、排名或账号成功。
