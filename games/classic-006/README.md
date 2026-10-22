# QQ端盘子

## 原始文件

- 来源：[QPetLover/QPetGames](https://github.com/QPetLover/QPetGames/blob/cac5e2d7636da081a178a2300865eb5090649969/classical_games/swf/Q%E5%AE%A0%E7%AB%AF%E7%9B%98%E5%AD%90.swf)；源目录 ID：`classic-006`。
- commit：`cac5e2d7636da081a178a2300865eb5090649969`。
- SHA-256：`88efe57892ef034a946571ddb794f738ed9e2b8ccffb9b5e50200ebb3c3b6131`。
- 大小：855,766 字节；CWS / Flash 9 / AVM2 / AS3；800 × 600；25 FPS；根时间轴 2 帧。
- 原文件、源 catalog、固定 commit Git LFS pointer 的 oid/size 及交付文件已核对一致；`game.swf` 未修改。
- 封面逐字节复制自 `classical_games/covers/Q宠端盘子.jpg`。
- [原版 Ruffle 对照入口](https://qpetlover.cn/QPetGames/#/play/classic-006)。

## 本轮检查（2026-10-22）

已完成 SHA-256、大小、解压长度、舞台尺寸、帧率与脚本标签静态检查。另已完成下方记录的浏览器开局检查；计分结算、完整通关仍待验证，不能证明 Ruffle 的全部行为与历史 Flash Player 一致。

## 外部资源检查

对解压后的 SWF 做明文 URL、常见资源扩展名与加载 API 名称扫描：

- URL 候选：`http://pet.qq.com/`。
- Adobe/W3C 元数据 URL 及 `flash.xml` 命名空间字符串（如有）单独记录，不作为资源依赖。

这些是候选字符串，不代表启动必需依赖，可能属于跳转、广告、在线计分或未执行分支。动态拼接的资源地址可能未检出，需通过浏览器另行确认。具体扫描结果保存于 `manifest.json` 的 `inspection.dependencyScan`。

## 已知差异与未覆盖范围

- 后备字体改为原站相同的「站酷快乐体2016修订版」SWF与sans设置；字节已核对，但不代表历史设备字体完全一致。原 SWF 已嵌入的素材保持原文件。
- 未进行历史 Adobe Flash Player 逐帧或音频对照。
- 本目录状态为 `started`，仅覆盖下方真实开局记录。

## 首批浏览器验收（2026-10-22）

已查看原规则、点击开始进入端盘子场景并发送右方向键；未验证整局积分/结束。

仅据此确认上述基础流程；不等同于完整通关或历史 Flash Player 逐帧一致。
