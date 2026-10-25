# Q宠摘星星

classic-015 原件：`QPetLover/QPetGames` `a28b5d3928141955b01ba06cdd739974cf5b7ecc`，`classical_games/swf/Q宠摘星星.swf`，598472B，SHA256 `87e573aad836d4ea3ff168f55c9ba9128edf8b1a651382bc875f6be3550c2fac`。SWF6、650×450、12fps。不要与《满天星》混同。

HTML/Canvas/JavaScript 游戏，原矢量静态导出、原 MPEG 字节及手工迁移游戏规则；运行时没有 SWF、Ruffle、AVM、字节码解释器或外部请求。原件对照使用独立链接 classic-015。

网页声音开关使用静音总线，已准备的声音保持源时钟。唯一的超级状态流`stream295`按原事件记录起点，首次中途开启声音只播放仍有效的余段；退出超级状态、死亡或切场景的原stop事件清除记录，不会重播或复活。原MPEG、事件seek、线性左右包络及计分规则不变。

← → 移动托住QMM的QGG；↑ ↓ 每次keydown微调0.03弧度；保留12fps逻辑、原轨迹、源命中几何、分数和结束动画。手机方向键保持按下，500ms后按33ms重复，松开／取消／失焦释放；这是触摸适配，原件使用系统键盘repeat。隐藏标签暂停，并扣除隐藏期间墙钟，恢复时不补跑隐藏时间。

原 AS/时间轴/声音映射及分层证据在外层 project `projects/10-25-qpet-originals-release/native-stars/`。`tests/source-rules` 只在测试侧运行固定原AS片段及宿主适配器，绝不进入产品。

JPEXS FFDec 26.4 的静态 Canvas helpers 遵循仓库 GPL-3.0 许可；原始游戏图像/声音权利归各自作者，提取不改变权属。设备数字字体使用静态 OFL Noto Sans 子集匹配固定 Ruffle0.5 参考页的fallback，不宣称历史 Adobe Flash 系统字体完全一致。

2026-10-25声音开关候选（历史验收起点）：21项轻量测试通过，外层`native-stars/preview/app.js` SHA256 `1be5e7d88d069fc123927d7c7201d9069106be36d6a195e42522a20fc0ae0374`。外层`tools/build-preview.mjs`可复建；`--observer`生成只读DOM观测开发页，禁止部署该开发页。

本轮Chrome已实际检查原件HELP→原画开始→正常游戏→自然失败39分结算；同源原生候选实际完成原画开始、方向控制、自然计分10/33/37、失败和重玩。390×844竖屏及844×390横屏真实触摸注入无横向溢出，右+上双指及取消后按键/owners清空；真实WebAudio输出峰值0.8774，声音关闭/恢复对应总线0/1，原事件与超级流实际派发。最终静态包`205980df…3695e`与验收候选仅注释差异；其HELP、四键和站内链接已实际显示，正式包再次点按开局未因工具失去连接而确认，不将工具故障记为产品bug。完整QA记录在外层`reports/chrome-final-acceptance.json`。

未验证物理手机、小红书容器、逐样本声学等价或手动四轮自然连胜；离线798帧与规则边界检查覆盖了另行标记的结局分支，不代称这些实际设备或自然通关检查。
