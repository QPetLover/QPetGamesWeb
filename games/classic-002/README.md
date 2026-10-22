# 搭鹊桥

## 原始文件

- 来源：[QPetLover/QPetGames](https://github.com/QPetLover/QPetGames/blob/cac5e2d7636da081a178a2300865eb5090649969/classical_games/swf/QQ%E6%8A%93%E5%96%9C%E9%B9%8A.swf)；源目录 ID：`classic-002`。
- commit：`cac5e2d7636da081a178a2300865eb5090649969`。
- SHA-256：`94007c475f91fed70b35b848b7288faf8d7415cd9f0f0b04533bcba03d8fd3c6`。
- 大小：797,281 字节；CWS / Flash 7 / AVM1 / AS1-2；800 × 600；25 FPS；根时间轴 3 帧。
- 原文件、源 catalog、固定 commit Git LFS pointer 的 oid/size 及交付文件已核对一致；`game.swf` 未修改。
- 封面逐字节复制自 `classical_games/covers/搭鹊桥.png`。
- [原版 Ruffle 对照入口](https://qpetlover.cn/QPetGames/#/play/classic-002)。

## 本轮检查（2026-10-22）

已完成 SHA-256、大小、解压长度、舞台尺寸、帧率与脚本标签静态检查。另已完成下方记录的浏览器开局检查；计分结算、完整通关仍待验证，不能证明 Ruffle 的全部行为与历史 Flash Player 一致。

## 外部资源检查

对解压后的 SWF 做明文 URL、常见资源扩展名与加载 API 名称扫描：

- URL 候选：`http://client.pet.qq.com/cgi-bin/pie_game?cmd=1&gameID=10001&score=`；`http://pet.qq.com/`。

这些是候选字符串，不代表启动必需依赖，可能属于跳转、广告、在线计分或未执行分支。动态拼接的资源地址可能未检出，需通过浏览器另行确认。具体扫描结果保存于 `manifest.json` 的 `inspection.dependencyScan`。

## 已知差异与未覆盖范围

- 后备字体改为原站相同的「站酷快乐体2016修订版」SWF与sans设置；字节已核对，但不代表历史设备字体完全一致。原 SWF 已嵌入的素材保持原文件。
- 未进行历史 Adobe Flash Player 逐帧或音频对照。
- 本目录状态为 `started`，仅覆盖下方真实开局记录。

## 补充脚本审阅

JPEXS 26.4.0 导出脚本只读审阅，原 SWF 未修改：

- `frame_3/DoAction.as:31-37`：pie_game URL 位于结算面板 Panel.dh.onRelease 回调中，触发 go(rs.over_s, gamec)；同一面板有独立 replay 回调。此接口属于点击提交/兑换分数分支，静态代码未显示它是开局前置条件。
- `DefineSprite_214/frame_3/DoAction.as:1 与 __Packages/Enemy.as:84`：原字符串 loadMovie 命中来自 unloadMovie；导出脚本中未发现实际 loadMovie 加载调用。已改用标识符边界扫描排除这种子串误报。

已完成下方浏览器开局检查；结算和重玩仍待验证。

## 首批浏览器验收（2026-10-22）

原菜单与说明可读，点击开始进入抓喜鹊场景，鼠标手套出现；未验收整局与旧积分兑换。

仅据此确认上述基础流程；不等同于完整通关或历史 Flash Player 逐帧一致。
