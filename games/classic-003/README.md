# QQ 飞车

## 原始文件

- 来源：[QPetLover/QPetGames](https://github.com/QPetLover/QPetGames/blob/cac5e2d7636da081a178a2300865eb5090649969/classical_games/swf/QQ%E9%A3%9E%E8%BD%A6.swf)；源目录 ID：`classic-003`。
- commit：`cac5e2d7636da081a178a2300865eb5090649969`。
- SHA-256：`c8ad6b998a57f343ddf9213ca61717bdf0ceb1061b794ca63632a9b4d9f8dd1f`。
- 大小：849,248 字节；CWS / Flash 7 / AVM1 / AS1-2；760 × 420；25 FPS；根时间轴 137 帧。
- 原文件、源 catalog、固定 commit Git LFS pointer 的 oid/size 及交付文件已核对一致；`game.swf` 未修改。
- 封面逐字节复制自 `classical_games/covers/宠爱飞车.jpg`。
- [原版 Ruffle 对照入口](https://qpetlover.cn/QPetGames/#/play/classic-003)。

## 本轮检查（2026-10-22）

已完成 SHA-256、大小、解压长度、舞台尺寸、帧率与脚本标签静态检查。另已完成下方记录的浏览器开局检查；计分结算、完整通关仍待验证，不能证明 Ruffle 的全部行为与历史 Flash Player 一致。

## 外部资源检查

对解压后的 SWF 做明文 URL、常见资源扩展名与加载 API 名称扫描：

- URL 候选：`http://client.pet.qq.com/m16.htm`；`http://speed.qq.com/`；`http://www.3366.com/static/article/99/36699.shtml`。

这些是候选字符串，不代表启动必需依赖，可能属于跳转、广告、在线计分或未执行分支。动态拼接的资源地址可能未检出，需通过浏览器另行确认。具体扫描结果保存于 `manifest.json` 的 `inspection.dependencyScan`。

## 已知差异与未覆盖范围

- 后备字体改为原站相同的「站酷快乐体2016修订版」SWF与sans设置；字节已核对，但不代表历史设备字体完全一致。原 SWF 已嵌入的素材保持原文件。
- 未进行历史 Adobe Flash Player 逐帧或音频对照。
- 本目录状态为 `started`，仅覆盖下方真实开局记录。

## 首批浏览器验收（2026-10-22）

原菜单点击游戏开始进入赛车倒计时和赛道；发送方向上键。未验证整场比赛/结算。

仅据此确认上述基础流程；不等同于完整通关或历史 Flash Player 逐帧一致。
