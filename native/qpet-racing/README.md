# QQ飞车（宠爱飞车）原生迁移

原件为 `QPetLover/QPetGames@30c70e0457082b25ff024a3253968e3cbb1b714d` 的 `classical_games/swf/QQ飞车.swf`，画面题名“宠爱飞车”。SHA-256 `c8ad6b998a57f343ddf9213ca61717bdf0ceb1061b794ca63632a9b4d9f8dd1f`，849,248 bytes，SWF 7 / AS2，760×420、25 fps。网页直接执行原生 HTML / Canvas / JavaScript，不加载 SWF，不包含 Ruffle、AVM、WASM 或动态代码执行。

- [原生游戏](https://qpetlover.cn/QPetGamesWeb/qpet-racing/)
- [原版对照](https://qpetlover.cn/QPetGames/#/play/classic-003)

## 迁移内容与操作

- `game-logic.js`：从原 frame107、frame133 和角色子帧动作迁移驾驶、道具、对手、排名、计时、结算与回调调度。逻辑固定每40ms推进，不随浏览器刷新率加速。
- `renderer.js` / `assets/`：627个原静态绘图、字形及动画符号、30张内嵌原位图，保留开场、菜单、两页说明、倒计时、游戏和结算。按钮四态及 press/release 触发分别取自原件；按状态的绘图缓存保留原变换和动画周期。
- `audio-assets.js` / `audio.js`：12段原 MPEG 加1条根时间轴流式 MPEG，无重新编码。保留原 seek、样本数、有限循环、noMultiple、in/out、envelope 和流式停帧位置；原菜单音乐会跨开局继续。原 AS 调用的 `fx4` 没有导出绑定，仍保持无声，不添加替代音效。
- `app.js`：方向键 ↑ / ↓ / ← / → 驾驶，Ctrl 使用道具；香蕉投掷与炸弹按住瞄准、释放发射保留原输入关系。手机按钮映射到相同按键语义，并处理多指、释放、取消与失焦。

原菜单开始按钮会将 `sex` 固定设为2，因此开局仍为原粉色角色。初始第6名、道具槽为香蕉与炸弹；排名来自对手与玩家纵坐标的交叉，不能替换成按距离或圈数计分。计时按逻辑帧扣减；运动终点线和静止超时沿用各自原分支，不单靠名义“三分钟”另设结束器。满速NPC的除零产生NaN时保留旧坐标、背景子实例移除与重建后的随机消费等原行为也予以保留。

原开始按钮调用的 `game1()` 和结果按钮调用的 `game2()` 来自旧宿主，SWF 没有这些方法实现；本地玩法不读取它们的返回数据。网页保留本局结果，并明确提示旧宿主功能不可用，不伪造积分记录、上传或兑换成功。旧退出与 getURL 按钮作相应说明，不作为运行资源请求。原“再来一次”路线先回菜单，未改成直接重新发车。

## 构建与验证范围

在仓库根目录运行：

```sh
npm ci --ignore-scripts
npm test
npm run build:racing
node scripts/build-native.mjs --game=qpet-racing --xhs
```

`preview-racing/` 用于独立网页预览；`minitool-racing-candidate/` 为去除外部导航的三文件 HTML / ZIP 候选。完整发布使用 `npm run build`，飞车位于 `dist/qpet-racing/`，既有速配与搭鹊桥入口保留。

测试包含原 AS fixture 的离线规则差分、原运行观测回归、WebAudio 合同和真实 app 事件 handler 合同。原件测试副本的实际运行记录用于校准初始化随机顺序、背景子实例重建、NPC/物品与根回调顺序和NaN坐标写入；离线 Canvas 另检查完整开场到菜单以及各场景的直接绘制与缓存绘制。原 AS 与测试宿主只在 Node 测试中使用，不进入网页包。

linked sprite 的位图依赖与主时间轴一并提取，CI 校验全部图片引用、唯一声明和来源表一致。验证另覆盖双方正常、投掷、瞄准、爆炸、受击及动作结束后的连续帧，而非只绘制正常首帧。应用在绘图之前续排下一帧，绘图异常仍会报告，避免一次异常令之后所有回调无声停止。

原件测试副本的真实运动自然终点已记录：进入 `gameEnd()` 时 `step=4498`、`timer=2`，当局第6名、原计分−10；结算画面按原最低分规则显示第6名、0分。该 trace 在结束函数入口记录变量，尚未追加结算帧末尾标记，因此不把它扩展为“结算后最终 timer 仍为2”的实测结论。

这些证据不等于历史 Adobe Flash 的所有像素、声音解码和回调相位完全相同。精确碰撞边缘、所有攻击子回调、实际手机操作及平台容器须按各自实际测试记录判断；手机布局和事件合同不能代替物理手机或小红书上传验收。当前独立包不声称已上传小红书。

## 离线素材再导出

使用 JPEXS FFDec 26.4.0 从固定原件导出：

1. `racing.xml` 与原 ActionScript；
2. 主时间轴 `frame:canvas` 到 `frame-canvas/`；
3. linked sprite 122 / 202 / 206 / 209 / 215 / 221 的 `sprite:canvas`；
4. 用 `tools/unpack-canvas.py` 将可选文本压缩展开为 `linked-unpacked/DefineSprite_<id>_<name>/frames.html`，不执行导出的 JavaScript。

随后执行：

```sh
python3 native/qpet-racing/tools/export-artwork.py --reference <reference-dir> --source-swf <QQ飞车.swf>
```

脚本输出静态绘图函数、按钮状态、原矩阵、字形布局与来源哈希，不输出完整播放器。`assets/provenance.json`、`assets/font-provenance.json` 与 `audio-provenance.json` 保留素材、嵌入字体和原声来源。动态文字优先使用原嵌入字形；原 `_sans` 设备小字使用系统 Arial / sans-serif 后备，不加载网络字体。

素材权利与 FFDec Canvas helper 的 GPL-3.0 说明见根目录 [THIRD_PARTY_NOTICES.md](../../THIRD_PARTY_NOTICES.md) 和 [完整许可证](../../licenses/FFDEC-GPL-3.0.txt)。
