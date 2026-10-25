# Q宠抓鱼

400 × 300、17 fps 原生 HTML / Canvas / JavaScript 迁移。原件为 classic-008，701,876 字节，SHA-256 `515b184d8e53ce556ee0c0f4c12b0f433762a9f0464b94f2c65342c3b5bda2e3`，与 awesome-qpet-games `b82b791a053c51d385b18d98f2d9951929240c50` 的 `archive/games/classic/swf/Q宠抓鱼.swf` 完整文件一致。

- `game-logic.js` 显式迁移原规则、状态与17帧逻辑时钟；`source-scene.js` 保存静态显示列表接线和原命名几何。
- `assets/artwork.js` 是原符号离线转出的静态 Canvas 绘图函数；设备数字来自固定原件比较页实际使用的站酷快乐体。游戏原嵌入字体/文字路径保留。
- `audio-assets.js` 保留29个事件 MPEG 原字节、38个 SOUNDINFO 与3段原连续流切片；声音恢复、静音总线与原暂停/卸载分别处理。
- 产品不运行 SWF、Ruffle、AVM、WASM、原 AS、测试 VM 或动态代码；不需要外部运行资源。原件只用于离线逆向和独立校对。

保留的原件行为：`timeBar` / `timerBar` 命名不符没有自然倒计时；恰好50分的结局为空；A/B结局后进入空白；结算动画内的总分变量作用域错误，原画“总分:”后保持空白（分项及真实规则总分仍正常）。页面增加的结束/重玩与触摸拖动是操作适配。

FFDec衍生绘图 helper 按 GPL-3.0 提供可阅读源码，完整条款见仓库 `licenses/FFDEC-GPL-3.0.txt`。原游戏美术、音频与字体权利仍归各自作者；迁移没有改变其权利。

离线规则/接线测试与浏览器实玩是不同层次。实际对照、固定构建、独立 HTML/ZIP、Chrome手机模拟及未验边界记录在工作区 native-fishing 项目；本目录尚未接入公开目录，发布由主任务统一整合。
