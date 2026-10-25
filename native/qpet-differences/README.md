# Q宠邀你来找茬

原件 classic-005：`QPetLover/QPetGames` `a28b5d3928141955b01ba06cdd739974cf5b7ecc`，`classical_games/swf/Q宠邀你来找茬.swf`，SHA256 `660a57fbfd080557147b980969c1904403bb9ec491e67d392644708b34b4c23f`。SWF6、640×480、12fps。

原生 HTML/Canvas/JavaScript，原图片、矢量、点击热区和声音；不加载SWF/Ruffle/AVM，不依赖网络。对比左右图，按原作仅在右图点击五处不同，按下和释放需落在同一原热区。九轮完成通关；原件存在第十组图片但普通流程不会到达。原随机变量n仍消费一次随机，但原代码从不读取它，不能把关卡改成随机。

计时来自原时间轴，初始45，每14逻辑帧减1，首次超时631帧（约52.58s）。下一关只重置显示数字45并保留子帧相位。每处正确标记从帧2播放到10后计入k，不在点击瞬间立刻加计数。显示层按depth与源Place出生帧保存实例，并保留重名a1..a5按最低depth解析的规则。

唯一原声是Sound48的SWF ADPCM。FFDec26.4解码PCM与独立固定Ruffle0.5规则逐样本相同，5680个可解码样本，5512Hz；源header写5681，并不伪造缺少的一个样本。详见audio-provenance。原作者Q宠记者团署名和画面均保留。原论坛getURL已变为停用说明，不伪造社区服务。

制作证据在外层 `projects/10-25-qpet-originals-release/native-differences/`。12规则/handler/原声测试通过；Chrome原件对照、实际声音和触摸由根代理继续，不据离线截图声称浏览器验收。80状态（10组图片×4标记帧×DPR1/2）缓存对照的完整RGBA及热区严格零差；新版完整713帧生产绘制完成九轮45个原热区命中、自然631帧超时及再重来。

FFDec Canvas helper遵循仓库GPL-3.0。设备数字字形取自固定原件对照页的站酷快乐体2016修订版（仅十个数字Canvas路径），保持该页嵌入fallback的分数位置与advance，不声称历史Flash系统字体一致；原图片/声音权属不因提取而改变。

2026-10-25 接续：新归档 `awesome-qpet-games` b82b791a053c51d385b18d98f2d9951929240c50 / archive/games/classic/swf 的LFS OID与上述完整原件逐字节相同。Chrome原版/原生九轮公开点击均到达胜利，原生自然超时/重玩通过；实际对照修正黑色舞台透明区底色和参考页数字字体。证据在外层 archive-classic-next/reports，原AS/原图片/原音频字节与规则保持。此前离线与旧候选证据仅为各自版本记录，不追认为新版本全量验收。
