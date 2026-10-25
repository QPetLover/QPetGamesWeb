# Q宠端盘子

HTML/Canvas/JavaScript 原生迁移候选。尚未注册大厅或发布；本地候选位于 workspace project `projects/10-25-qpet-originals-release/native-trays/preview/`，构建命令为该 project 的 `tools/build-preview.mjs`。生成的 `index.html`、`app.js`、`style.css` 可直接断网打开或作为静态 ZIP 上传。

固定原件为 QPetGames `cac5e2d7636da081a178a2300865eb5090649969` 的 `classical_games/swf/Q宠端盘子.swf`，855,766 B，SHA256 `88efe57892ef034a946571ddb794f738ed9e2b8ccffb9b5e50200ebb3c3b6131`。新归档 awesome-qpet-games `b82b791a053c51d385b18d98f2d9951929240c50` 同 OID；舞台800×600、25fps、AS3。

- `rules.js`：原 Main/Role/Bullet/Delay 的显式规则，源独立Timer、严格边界、仅正速度上限、重玩spring与旧Delay等均保留。
- `scene.js`：六角色72动作入口、18种受击/绊倒子动画末帧、Bed16帧投射和Bullet42帧销毁；由原深度/矩阵/当前显示边界构成碰撞。显示x写回使用基准的toward-zero twip量化，普通弹簧Object仍为double。
- `renderer.js`、`assets/`：原静态矢量/位图、字体、按钮四态与显示列表，不执行SWF字节码；Path2D、不可变位图色变与唯一固定标题glow缓存，抽样RGBA严格一致。额外根分组缓存默认关闭。
- `audio.js`、`audio-assets.js`：9段原MP3无重编码；44个默认角色帧声及5类AS声音事件。原件没有有效背景音乐流，不补造音乐；静音保留时钟。
- `app.js`：桌面方向键、手机按住、pointer cancel、多指、隐藏/旋转释放、4:3画布与DPR适配；“更多游戏”按网页场景返回大厅。

来源与导出修正见 `assets/*provenance.json`；FFDec静态Canvas辅助代码按GPL-3.0使用，构建包带完整许可，原美术/声音权利归原作者。动态设备文字沿用当前原版对照页使用的字体字形，不宣称恢复历史系统字体。

验证记录在 project：27测试、8,000差分输入帧、72动作分段矩阵、Chrome原版开局/结算/重玩、原生实际送达8分与返程取9盘、原声输出/静音恢复、390触摸/取消/旋转，以及断网file://包。没有进行物理真机或小红书容器验收；根/子帧与独立Timer的浏览器调度未做逐事件等价证明，不宣称历史Flash像素/音频逐样本等价。测试VM/只读观察器仅在project，不进入运行包。
