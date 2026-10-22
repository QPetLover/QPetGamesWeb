# 搭鹊桥原生迁移

原件为 `QPetLover/QPetGames@cac5e2d7636da081a178a2300865eb5090649969` 的 `classical_games/swf/QQ抓喜鹊.swf`；SHA-256 `94007c475f91fed70b35b848b7288faf8d7415cd9f0f0b04533bcba03d8fd3c6`。舞台800×600、25FPS。网页独立使用HTML/Canvas/JavaScript，不加载或执行SWF，不包含Ruffle/AVM/WASM。

## 迁移内容

- `game-logic.js`：直接迁移原Data/Game/Enemy及子时间轴脚本；25fps动画、45ms移动和1000ms时间条分开调度，保留原随机调用顺序和两个生成timer的节奏。
- `renderer.js` / `assets/`：242个原静态符号、15张原内嵌图、按钮四态、原设备文字布局和结束Panel；静态层/角色帧缓存不改变规则或原动画帧。
- `audio-assets.js` / `audio.js`：9段原MPEG payload，保留原seek、样本、循环次数和noMultiple。原菜单与游戏循环在源码中会重叠，未擅自替换为另一首背景音乐。
- `app.js`：800×600坐标映射、鼠标移动与触摸拖动、按下音/释放动作、声音开关及原版对照入口。多指操作只跟随当前手指。

保留源脚本的非直觉行为：初始root score=99但喜鹊数为0；原90秒参数按实际时间条位置按原twip坐标量化在第85次秒回调结束；碰乌鸦后hit肖像第3帧移除时间条，随后下一秒回调结束；碰撞按完整对象包围框而非不透明像素；连续抓鸟停在相同父帧时不重建子动画。原客户端积分服务已失效，本包仅保留本地结果和重玩，不发送积分兑换请求；“更多游戏”网页版返回Q宠游戏入口。

## 构建与验证

在仓库根目录运行：

```sh
npm ci --ignore-scripts
npm test
npm run build:magpie
node scripts/build-native.mjs --game=magpie-bridge --xhs
```

`preview-magpie/`供网页预览；`minitool-magpie-candidate/`去除外部导航、仅3文件，供独立HTML/ZIP候选。项目完整发布使用`npm run build`，桥入口位于`dist/magpie-bridge/`，速配根入口保留。

13项规则测试直接执行测试fixture内原AS方法和时间轴作为oracle，覆盖5个随机完整计时流程（原AS与独立twip属性setter）、生成/轨迹/加速、100余次公开输入捕获、好坏鸟动画、重玩、47帧边界和越界捕获。另有6项真实app事件handler合同回归，检查多指、取消、坐标顺序和音频恢复。原AS与输入合同的Node VM仅在测试中使用，不进入网页。

原版/原生实际画面与输入仍需以本次交付的验证报告为准。不宣称历史Adobe Flash的精确回调相位或每个像素完全等价；设备字体沿用当前原版站后备字体，未等同历史华康字体。手机模拟测试不能代替物理手机或小红书上传验收。

## 离线素材再导出

使用JPEXS FFDec26.4.0对固定原件导出XML、主时间轴Canvas、Enemy37未裁切Canvas后，按`tools/export-artwork.py --help`提供reference目录。脚本输出静态派发表、四态按钮、矩阵和来源哈希，不生成或执行AS解释器。`assets/provenance.json`与`audio-provenance.json`保留输入/内容SHA。

素材与导出helper许可见根目录`THIRD_PARTY_NOTICES.md`及`licenses/FFDEC-GPL-3.0.txt`。
