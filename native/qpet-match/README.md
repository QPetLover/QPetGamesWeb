# Q宠速配原生迁移

网页入口为 `https://qpetlover.cn/QPetGamesWeb/qpet-match/`，站点根目录是所有游戏共用的游戏大厅。独立 HTML/ZIP 候选不包含站点导航。

源文件为 QPetLover/QPetGames 提交 `cac5e2d7636da081a178a2300865eb5090649969` 的 `classical_games/swf/Q宠速配.swf`。SHA-256：`654f01b4e6a48782ffe10be1750f321e7570d9a96133f1644094017d47b1ab94`。原舞台 500×400，30 FPS。

`game-logic.js` 将原 ActionScript 的连通检查、心形运动、按下/释放行为、计分、五关目标、计时、干扰、重试和结局迁移为 JavaScript。保留源规则中的非直觉行为，包括六种管道按编号循环、左边缘重复扫描、清除逐帧传播及末关失败后的原跳转。

`assets/artwork.js` 包含构建前由 FFDec 提取的 291 个静态矢量/字形/按钮/时间轴符号；`renderer.js` 负责原舞台绘制与必要缓存。派发使用静态函数表，无字节码解析器、虚拟机或运行时 SWF 数据。`audio-assets.js` 是 9 段原音频的内嵌数据，未转码；起始 seek、样本数及哈希见 `audio-provenance.json`。

`app.js` 对接 Canvas、声音开关、鼠标/触摸和布局；`frame-clock.js` 将浏览器刷新率转换为原 30 FPS 逻辑回调。手机缩放只改变舞台显示比例和清晰度，不改变游戏坐标或规则。

## 验证范围

`npm test` 包含：600 个棋盘与原 AS 连通检查差分、原心形运动差分、1440 次原父回调差分、30/60/90/120/144 Hz 调度、长暂停及公开输入 API 的完整五关流程。测试 fixture 内的原 AS 仅供 Node 测试，不打入网页。

实际浏览器已检查菜单、说明、点击开局、管道点击、配对计分、超时与声音开关；Chrome Mobile 模拟器检查竖屏、横屏和触摸操作。实际鼠标完成过 11 管道的有效配对，所得 220 分与原规则相符。五关贯通是逻辑输入测试，尚未完成浏览器内五关逐画面对照。

不宣称与历史 Adobe Flash 的每个像素、字体或音频回调相位完全等价。未嵌入的华康设备字体采用当前原版网站相同的后备字体，见第三方说明；尚未验证手机真机与小红书上传后的容器。

## 素材再导出

日常构建直接使用已提交的静态 JS。需要重提取时，在离线环境用 JPEXS FFDec 26.4.0 从上述原件导出主时间轴 Canvas、管道 sprite54 Canvas 和 XML，再运行：

```sh
python3 native/qpet-match/tools/export-artwork.py \
  --root-canvas /path/to/root/frames.html \
  --helper /path/to/root/canvas.js \
  --pipe-canvas /path/to/DefineSprite_54_pipe_mc/frames.html \
  --xml /path/to/match.xml \
  --output native/qpet-match/assets
```

脚本修复 FFDec 导出的透明径向渐变、按钮四态、设备文字和原软换行，并输出输入哈希及修正记录至 `assets/provenance.json`。原 SWF 与测试/研究文件不进入网页发布产物。许可证见仓库根目录的第三方说明和 `licenses/FFDEC-GPL-3.0.txt`。
