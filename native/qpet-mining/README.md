# Q宠挖矿

760×420、25Hz，原静态矢量/位图、显式JavaScript玩法与原MP3事件声；产品不加载SWF、Ruffle、AVM、WASM或外部资源。

原件 classic-013，SWF6/AS2，1806518B，SHA256 `66494abc71e425f8390fdcd9c3d40bbaa4236412be2a07e63c381ea6b3808291`。完整归档来自 awesome-qpet-games 固定提交 `b82b791a053c51d385b18d98f2d9951929240c50` 的 classic/swf/Q宠挖矿.swf；LFS OID与实际载荷一致。

- `game.js`：root frame4 285行原方法和相关帧动作的显式迁移。两矿区类型1–3/4–6、10块碎石、1个加速器、12个原隐藏点、90秒、左右加速调角、下键/空格/鼠标放钩、大小影响回收、每区6矿与结算重玩。
- `scene.js`：固定静态时间轴、独立子片段时钟、原深度/出生范围保留，立即goto更新子节点；每轮碰撞重新取当前hitter，首个命中闭钩帧即删除该碰撞区。
- `renderer.js` / `assets/`：离线FFDec静态路径、原位图、四态按钮、完整显示列表和原设备字体对照字形；隐藏标记不绘制但碰撞保留隐藏hitter几何。没有动态AS执行。
- `audio.js` / `audio-assets.js`：原5段MP3、seek/sample窗口、9按钮移入音、os1/os2分类、root4/结算帧音。
- `app.js`：保持舞台比例/DPR、触屏左右与放钩、多指按键释放、取消/失焦清理、原声开关和宿主返回/重开。

网页适配：失效的parent.Start账户扣费入口改为直接选择普通/钻石矿区，不模拟扣费、登录或账户成功；原uploadScore/元宝兑换不请求，点原兑换按钮会说明本页不支持。页面局中“重新开始”直接执行原restart，回到首矿区并重置90秒，不重新播放仅在root4进入时触发的音频。手机触屏是原输入语义适配，不改变玩法。

原图、音频、字体权利归原作者。静态Canvas辅助代码派生自FFDec26.4，遵循仓库GPL-3.0许可和署名；不为原游戏素材另行主张新许可。协作记录、固定AS/XML/Canvas导出、受控测试SWF和独立候选包位于workspace native-mining项目，不进入运行包。

离线源码测试：`node --test native/qpet-mining/tests/*.test.mjs`。浏览器、手机、原件对照与资源闭包验收应查看项目报告，单元测试不能代替这些验收。物理手机与小红书专用容器仍需目标平台实测。
