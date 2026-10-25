# Q宠守护使

从 `QPetLover/QPetGames` 固定提交 `a28b5d3928141955b01ba06cdd739974cf5b7ecc` 的 `classical_games/swf/Q宠守护使.swf` 迁移。原件 665,215 字节，SHA256 `6ef3e55d86431714fe8d1da849a37fb5c08844a44accdc469296fe0118377654`，SWF6/AS2，600×210、12fps；FFDec 26.4.0。这里直接运行游戏专用 JavaScript 和原静态矢量/位图，不执行 SWF、字节码或通用 ActionScript 解释器。

- `game-logic.js`：原脚本明确翻译的瞄准、抛物线采样、敌人生成、最新两颗子弹碰撞、连杀/超级雪球、弹量、结局与重玩。XML离线提取的显示列表仅含原静态ID、深度、矩阵、颜色、帧和实例名，状态动作在本游戏JS显式列出。
- `renderer.js` / `assets/artwork.js`：原Canvas路径/渐变/嵌入字体/位图、时间轴、遮罩和按钮状态；全部符号闭包包含动态linkage 60/96/188/229。静态绘图helper来自FFDec，修改源公开于本目录，GPL-3.0见仓库licenses；原游戏素材版权仍属于原作者。
- `audio-assets.js`：36个原DefineSound MPEG payload、58处SOUNDINFO以及4个嵌套MP3流。每个流保留原块sampleCount/signed seek，raw字段只作溯源；固定参考运行时忽略block.seek与latencySeek，连续解码MPEG。`audio.js`执行事件声原in/out、seek、左右声道envelope及按owner连续流；没有合成替代音效。网页声音开关是适配层总线静音，已准备的源时钟继续，重开声音不重播流；首次中途开启按首块记录时间恢复当前相位，原停止、循环与移除仍结束对应owner。
- `app.js`：原逻辑12fps与`getTimer`墙钟分开；迟帧只处理一次原回调，不把浏览器60/120Hz当作游戏速度。后台停止画面帧，恢复时墙钟继续计算原生成/360秒阈值。按12fps绘制，避免重复绘制相同帧。手机点按原舞台区域并保留坐标比例，取消、多指和失焦单独释放。

## 原件行为映射

| 原件证据 | 原生行为 | 离线验证 |
| --- | --- | --- |
| main1/237：frame5帮助，bangzhu.onPress；main2/328f35 | 帮助卡→原剧情→main3 | 原生公开press与实际renderer |
| 395 `fangxiangjd`/`zdyundongx/y` | 57度换算、.35/1.38夹角、原运算结合顺序、逐整数时间采样 | 原AS测试侧VM、28,584数值严格相同 |
| qggpb.hitTest，394/348f5/f9、354f11 | 仅企鹅哥哥区域可瞄准/投掷；第5动画帧出弹，恢复后再投 | 真实app handler与规则测试/连续renderer |
| 395 `zddzd` / `zd1.onzhu`；250f176 | 原弹量条、最新/前一弹、碰水清连杀、普通/超级不同动画 | 持续动作测试及自然耗尽弹量 |
| 395 `shijian` | 海豹30ms起/5900ms间隔；海鸥60s起/13s后30s；雪怪150s起/26s后13s；200s阶段/360s结束 | 墙钟迟回调与边界测试 |
| 188/115/187/186/150/185 | 海豹入水、两次普通命中、停走及恢复、死亡；超级命中395局部+100，与死亡root+100分开 | 正常命中/超级、死亡子树renderer |
| 96/95/94/93 | 海鸥移动/击落/飞近打断；原代码重复检测最新弹，第二分支目标为前一弹 | 连续公开输入击落、死亡renderer；源异常不合理化 |
| 60/59/58/14/57 | 雪怪四次普通命中/超级一击；普通不暂停移动 | 多次命中/超级、死亡renderer |
| 395 `chaojizdshu == 3` | 严格等于3触发10秒超级状态，碰水清零 | 精确边界与实际长局事件 |
| 333f4320 / 395 getTimer | 原4320帧、360s两条结束路径 | 原生边界/所有根结局renderer |
| main7/521f38、main8/547f46、main4/main10、562f68 | 两种死亡→结算→原重玩剧情；分项清零重新开局 | 自然海豹失败后结算10400与公开重玩；雪怪显式分支renderer |
| 490f50/main11→main1 | 原退出动画回到帮助 | 完整renderer分支及规则测试 |
| 95下94旧CLIPACTIONRECORD | 旧稿字段`_root.qg`/`zdd`不属于当前395树；对子静态95的remove无动态父移除效力 | 未作为另一套玩法补造；实际原运行仍待复核 |

## 复现导出

导出和大体积XML/AS证据留在外层项目 `projects/10-25-qpet-originals-release/native-guardian/`，不进入网页包。

1. FFDec `-swf2xml 原件.swf reference/guardian.xml`。
2. FFDec `-export script,text,sound,image reference/export 原件.swf`。
3. FFDec `-format frame:canvas -export frame reference/canvas 原件.swf`。
4. FFDec `-selectid 60,96,188,229 -format sprite:canvas -export sprite reference/linked 原件.swf`。
5. `python3 tools/export-artwork.py --reference …/reference --source-swf …/原件.swf`，再用`tools/extract-audio.py --reference …/reference`。导出helper/位图/字体/来源元数据均可重建。
6. `node --test native/qpet-guardian/tests/*.test.mjs`。原AS oracle仅在外层测试侧VM，永不进入产品。

## 构建与接入

本游戏沿用仓库 `scripts/build-native.mjs` 的静态 bundle 路径，不需要额外运行包。集成验收后在 `native/games.json` 使用 `id/path: qpet-guardian`、`preview: preview-guardian`、`candidate: minitool-guardian-candidate`、`category: classic`，原件对照为 `https://qpetlover.cn/QPetGames/#/play/classic-001`。随后 `node scripts/build-native.mjs --game=qpet-guardian` 输出网页，追加 `--xhs` 输出移除网站导航的独立候选。未进入 registry 时，外层项目的 `native-guardian/tools/build-preview.mjs` 生成仅本地预览；`--observer` 另生成带DOM观测信息的开发页，禁止部署开发页。

正常操作可在原舞台 `(50,120)` 处点按，等待企鹅恢复站姿后再投掷（约1.5秒）。生产规则短轨迹在六种出生位置中均以5–6次普通投掷取得海豹100分；该离线轨迹只帮助复现，不能替代实际浏览器操作。海豹普通受伤一次不立即加分，第二次命中后，原死亡动画第21帧才加100。

## 验收范围与待验

已完成离线原AS数值差分、生产规则/输入/声音合同、11根场景和三种敌人死亡的实际Napi renderer（1110帧）、公开点击连续约4分31秒含176次投掷/107次命中/自然海豹失败/结算及重玩。长局观察记录原生结果，不声称历史Flash全时序等价。胜利360秒、雪怪失败等另作显式状态/边界检查，不冒称公开输入通关。

Chrome复核发现按钮内部绘图被sprite-hook静默跳过；已修并新增up/over真实像素回归（7237通道差异）和显示区域点击。修复前长局证据单列降格，不能证明按钮可见。

Chrome原件/原生画面对照、实际触摸、声音解码播放/对听、浏览器性能、物理手机、小红书上传容器、线上部署由集成验收单独记录；本目录离线结果不替代这些层。音频已按固定参考源码修正为连续流，250消耗条停止状态不启动流，仍需实际原件对听；且SWF6显示属性量化、回调相位、嵌套帧脚本的完整原运行差分尚未穷尽。

2026-10-25 恢复检查候选：app SHA `8bcb65fd02d042c6c45d2619d6445118a832232d1b65610785ed02d6c4af712d`。根3按钮、超级海豹作用域与音频原停止路径合同通过；新增网页静音后不重播、首次中途开声恢复相位和已移除owner不恢复，合计16项轻量测试通过。实际Chrome原版对照、重新开声、手机触摸和高DPR正常游玩仍由集成检查确认，尚未发布；无需追逐不影响正常游玩的微小像素或采样差异。

## 2026-10-25 浏览器集成核对

Chrome实际查看原件HELP/开局与原生画面。生产逻辑的开发观测包仅追加只读DOM状态，桌面真实连续点按得到海豹HP 2→1→0，7.58秒分项100；继续自然失败结算200并重玩。390×844、DPR3手机触摸模拟实际六次点按、命中并加100，pointercancel释放，横屏844×390与竖屏均无横向溢出；不是物理手机验收。普通事件声与连续流ID按原件映射，正式包WebAudio输出总线测得非零峰值0.33808586；临时静音总线探针测得0，随后开关可恢复。没有声学逐采样等价结论。详细输入与截图留在外层project reports，开发观测和音频探针不进发布包。
