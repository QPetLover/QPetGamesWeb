# QQ宠物狩猎场

## 原始文件

- 来源：[QPetLover/QPetGames](https://github.com/QPetLover/QPetGames/blob/cac5e2d7636da081a178a2300865eb5090649969/classical_games/swf/QQ%E5%AE%9D%E5%AE%9D%E5%AE%88%E7%8C%8E.swf)；源目录 ID：`classic-011`。
- commit：`cac5e2d7636da081a178a2300865eb5090649969`。
- SHA-256：`586642f95a64d87c30076988d600563a85a4643ffe5fad5211a462617e8fd23b`。
- 大小：1,232,553 字节；CWS / Flash 6 / AVM1 / AS1-2；760 × 420；25 FPS；根时间轴 14 帧。
- 原文件、源 catalog、固定 commit Git LFS pointer 的 oid/size 及交付文件已核对一致；`game.swf` 未修改。
- 封面逐字节复制自 `classical_games/covers/Q宠守猎.jpg`。
- [原版 Ruffle 对照入口](https://qpetlover.cn/QPetGames/#/play/classic-011)。

## 本轮检查（2026-10-22）

已完成 SHA-256、大小、解压长度、舞台尺寸、帧率与脚本标签静态检查。另已完成下方记录的浏览器开局检查；计分结算、完整通关仍待验证，不能证明 Ruffle 的全部行为与历史 Flash Player 一致。

## 外部资源检查

对解压后的 SWF 做明文 URL、常见资源扩展名与加载 API 名称扫描：

- URL 候选：`http://client.pet.qq.com/cgi-bin/hunter?step=0&localtime=`；`http://client.pet.qq.com/cgi-bin/hunter?step=1&localtime=`；`http://client.pet.qq.com/cgi-bin/hunter?step=2&score=`；`http://client.pet.qq.com/index1.html`；`http://imgcache.qq.com/pet/swf/m1.swf`；`http://pay.qq.com`。
- 资源文件候选：`//imgcache.qq.com/pet/swf/m1.swf`。

这些是候选字符串，不代表启动必需依赖，可能属于跳转、广告、在线计分或未执行分支。动态拼接的资源地址可能未检出，需通过浏览器另行确认。具体扫描结果保存于 `manifest.json` 的 `inspection.dependencyScan`。

## 已知差异与未覆盖范围

- 后备字体改为原站相同的「站酷快乐体2016修订版」SWF与sans设置；字节已核对，但不代表历史设备字体完全一致。原 SWF 已嵌入的素材保持原文件。
- 未进行历史 Adobe Flash Player 逐帧或音频对照。
- 本目录状态为 `started`，仅覆盖下方真实开局记录。

## 补充脚本审阅

JPEXS 26.4.0 导出脚本只读审阅，原 SWF 未修改：

- `DefineButton2_133/BUTTONCONDACTION on(release).as:2-64`：主开始按钮先禁用自身并请求 hunter?step=0，再根据 XML 响应切换状态；请求失败会显示「现在狩猎场里的人太多了，请等一会儿再来。」并跳转 err。
- `DefineButton2_165 与 DefineButton2_173 的 on(release)`：男女角色开始按钮请求 hunter?step=1，只有相应响应结果码才进入 gg_start/mm_start，失败进入 err。启动流程存在明确的旧服务交互，浏览器应重点验收。
- `DefineSprite_318/frame_79/DoAction.as:10`：hunter?step=2 位于分数提交逻辑。
- `DefineButton2_160/BUTTONCONDACTION on(release).as:2-3`：m1.swf 加载与 pay.qq.com 跳转处于同一按钮回调；该资源属于这个按钮分支，不能仅因文件名存在就判断为初始画面所需。

代码含旧服务交互；本次实际浏览器能够开局，详见下方记录。旧接口的当前服务状态、奖励及服务器结算未验收。

## 首批浏览器验收（2026-10-22）

原菜单与角色页两次开始后进入狩猎场，显示子弹55与得分HUD，已实际鼠标射击。源码有旧hunter接口，但本次开局成功；奖励/服务器结算未验证。

仅据此确认上述基础流程；不等同于完整通关或历史 Flash Player 逐帧一致。
