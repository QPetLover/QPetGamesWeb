# 宠爱QQ堂（原生迁移）

本目录从固定的社区保存SWF反编译原ActionScript2、地图数组、显示列表、矢量/位图/字形及音频，逐项实现独立HTML/Canvas/JavaScript。运行包不载入SWF，不使用Flash、Ruffle、AVM、WASM或动态脚本解释器。原版基准单独提供对照，不进入本游戏运行依赖。

## 固定来源

- 原文件：社区QQ宠物游戏资源`qqtang.swf`，981342B。
- SHA256：`c8b38507e58d1d0b9aedcdd356c91b5638333253654c6508ab505161e5c9630a`。
- SWF7/AS2，760×420，30fps，8根时间轴帧，49脚本单元。
- 社区来源：<https://github.com/xuemian168/qqpet_automation/tree/main/qq-pet-macos/src/assets/game>。相同社区文件不构成官方未修改的证明；本迁移忠实对象是上述固定字节。
- 原版对照：<https://qpetlover.cn/QPetGames/#/play/happy-qqtang>。

## 规则与画面

`game-logic.js`显式迁移606号sprite的14×9格、40px、5张原地图/道具表、4角色/AI、单双人、6→3帧移动、60帧炸弹、逐格爆炸/连锁/能量残留、原一命/保护闪烁、5道具、180秒独立500ms墙钟定时器、1000分通关门槛、时间奖励、独立3000ms结果延迟、所有结局与重玩。来源数组在`stage-data.js`。

`renderer.js`以原深度、矩阵与子时间轴绘制663个原符号，149原位图闭包，复用原按钮四态和原字体轮廓。仅停帧的原地砖作静态缓存。设备动态字体没有嵌入字形，源声明Arial Black/Times New Roman；ASCII使用固定Ruffle0.5基准Noto Sans的静态轮廓、真实metrics与逐字整像素advance，保留原字号/字段位置/对齐。中文保留浏览器可读fallback，未校准；现代基准后备字形不代表历史系统设备字体像素相同。

`audio-assets.js`包含7段原DefineSound MPEG字节，没有重编码；`audio-provenance.json`逐项记录Sound ID、seek/sample数与原触发方法。每关`bgSound(stage%4)`保持50%音量/999次；放弹、爆炸、拾道具保留独立原声。原件54个空SoundStreamHead没有SoundStreamBlock，不另造背景流音轨。

## 输入与宿主边界

单人默认宿主`sex=2`（QMM），代码保留`sex=1`（QGG）；原单人直接开局。双人使用原选人页与松键确认，P1 WASD/Space，P2方向键/Enter；触屏分别映射这两组原键，支持多指与取消/失焦。未把虚构角色选择插入单人路径。

旧QQ宠物`uploadScore`、欢乐榜、兑换与`backUrl`属于已停止的外部宿主服务。保留对应原按钮及明确提示，不伪造积分上传成功。双人原说明不可兑换。`heroDieSmoke`与`youWin`在所选SWF中无linkage/实例，沿用无可见对象，不补画效果。

7段原MPEG保持原字节、seek和采样窗口。原`Sound(game).setVolume(50)`会由父片传到`game.vo_mc`，所以音乐与放弹／爆炸／拾取短声的最终gain均为50%；结果只停止音乐owner，已经发出的短声可继续完成。依据及来源见`audio-provenance.json`，不按变量名把音量设定误当成只影响音乐。

## 构建与测试

```sh
node scripts/build-native.mjs --game=qpet-qqtang
node scripts/build-native.mjs --game=qpet-qqtang --xhs
node --test native/qpet-qqtang/tests/*.test.mjs
```

前两个命令从仓库根运行。独立候选只有HTML/JS/CSS三文件，原素材与音频内联。静态绘图helper来自JPEXS FFDec26.4，GPL-3.0；工具代码许可不改变原游戏素材权利，见仓库licenses。

原件/完整XML/Canvas导出/只加trace的调度探针/原版与原生实测记录保存在工作区项目`10-24-qpet-happy-valley-native/qpet-qqtang`。测试侧`source-functions.as`是固定原AS纯规则片段，Node vm仅离线oracle，不进入构建包。规则单测、完整renderer动作、浏览器对照、触屏合同和真机/平台验收分别报告；不能把显式画面探针当成公开输入通关。

`tests/source-gameover.as`保留完整原gameover函数用于独立分支oracle：超时败局直接生成无近身计分回调的heroExp，不经过普通受击的烟雾随机深度或加1000回调；超时泡只播放原103帧子片。单／双人及贴脸AI的回归验证了该区别，没有把显式超时状态测试称为浏览器自然180秒一局。

重玩／下一关按原map2→init3在下一逻辑tick重建地图、角色和timer；首次进入仍从frame1等待两tick。原AS函数与当帧无新RNG／timer、旧显示关卡保留的回归分别记录，旧子回调跨该tick的全部运行次序没有追加原运行日志，不声称该边界穷尽等价。

### 当前浏览器核对范围

2026-10-25主任务重新打开带`qa=713e4adf5285096c`的入口并记录浏览器DOM实际脚本`app.js?v=713e4adf5285096c`，与冻结的`713e4adf…`包对应。Chrome横屏844×390／DPR2实际开启原声、进入单人，真实`pointerType=touch`按住放弹键约3.2秒，观察爆炸及10分，随后自然死亡至单人四按钮LOSE；实际触摸“再玩”，即时观察分数清零。同一放弹键两指按住，松开一指仍为pressed[32]，再touchCancel清为[]；该边界这次有真实触摸事件与观察，不再仅是离线输入合同。浏览器错误记录为空，另保留本次音频录制及34条WebAudio事件，但不据录音存在宣称与原版声学完全相同。

此前功能实玩还包括菜单与两页说明、再玩后03:00、单人低分重试的两按钮LOSE（原panel6）；返回菜单后明确选双人，核对双人选人和两头像LOSE。横屏双人四指83／32／40／13同时pressed，放弹后P1得10分，touchCancel后全部释放；竖屏390×844／DPR2画布366×202.26，没有横向溢出。此前记录当时没有同步保存DOM脚本URL，服务器请求713e4候选的日志另作旁证，不能倒写成每个旧步骤都做了独立DOM版本核验。

主任务已并排核对原版与原生760CSS舞台截图，计时和分数字形的大小、位置外观与现代Ruffle后备相符；两图场景及帧内容不同，没有做同帧像素差，也不代表历史系统字体。声音已核原MPEG字节、seek/sample事件及父gain=.5，并保留原生running上下文与原生／Ruffle实际录音分析；未声称人耳已逐声对听或主观完全一致。以上触摸是Chrome手机模拟，物理手机和小红书平台未验。39项离线检查、完整renderer历史矩阵与浏览器操作分别记账，未声称自然五关连胜、180秒自然超时或历史Flash完全一致。具体证据见工作区项目`reports/browser-final-audit.md`。

## 导出复现

离线以FFDec导出`qqtang.xml`、根时间轴Canvas、12个动态linked sprite Canvas；先用`tools/unpack-canvas.py`展开导出器文字字典，再用`tools/export-artwork.py --reference PROJECT/reference --source-swf ORIGINAL`生成静态绘图和来源表。默认无损PNG，不运行导出器播放器。这个老件JPEG内部存在EOI/SOI分段，直接保留JPEG3载荷会被现代浏览器拒绝；本版使用FFDec无损解码PNG并验证全149图，不采用占位图或有损重编码。

SWF的计时/分数等device字体只声明Arial Black/Times New Roman，没有嵌入字形。ASCII采用已核Ruffle0.5基准内置Noto Sans的16个静态Canvas字形，保留原字段字号、实际font ascent及device逐字整像素advance；没有字体加载器或Ruffle依赖。原字库来源、TTF哈希与OFL许可证见`assets/device-font-provenance.json`及`assets/device-font.js`。这校准的是现代原件对照页的fallback，不证明历史Flash的系统Arial Black字形相同。榜单中文保留原文字和浏览器可读fallback，尚未校准；不会为复现模拟器缺字而删掉原名字。
