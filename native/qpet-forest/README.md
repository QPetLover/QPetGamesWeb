# 宠爱森林：原生网页迁移

此目录是 HTML / Canvas / JavaScript 游戏。五张原关卡、角色、种植／攀爬／下降／跌落、NPC、奖励、计分、计时、生命、过关、结局和重玩由原 AS2 及时间轴逐项迁移。SWF 仅是离线逆向输入与独立原版基准；运行包不包含 SWF、Ruffle、AVM、WASM 或测试 VM。

## 固定来源

- 社区备份：[qqpet_automation 的 Q宠爱森林.swf](https://raw.githubusercontent.com/xuemian168/qqpet_automation/main/qq-pet-macos/src/assets/game/Q%E5%AE%A0%E7%88%B1%E6%A3%AE%E6%9E%97.swf)。未取得可归档的上游提交号，以以下固定字节为准。
- SHA256：`cfc82b0fda9e38bf48151af64422d89e904b32a772c7863fc048ca88c5fe1e1b`，1,044,839 B。
- CWS / SWF6 / AS2，760×420，30 fps，主时间轴165帧；128个脚本单元、37个文本导出。
- 提取工具 JPEXS FFDec 26.4.0。原版对照使用另站的 Ruffle 0.5.0。社区文件不等于经过历史腾讯服务器字节认证的版本，也不将 Ruffle 行为概括为所有 Adobe Flash 行为。
- 静态提取物的输入及输出散列见 `assets/provenance.json`，原声 MPEG、绑定与 SOUNDINFO 见 `audio-provenance.json`。

原素材的著作权不因提取而改变。FFDec 静态 Canvas helper 保留 GPL-3.0 来源注释，源码随本仓库提供；原素材权利与工具／新增代码许可分别处理。

## 实现分工

| 文件 | 作用 |
| --- | --- |
| `game-logic.js` | 游戏专用状态与原帧动作、源碰撞矩形、计时／关卡／清理逻辑 |
| `renderer.js` | 原显示列表的深度、矩阵、颜色变换、按钮状态、原文字和绘制接线 |
| `assets/artwork.js` | 468个静态原素材绘图函数，7幅内嵌原位图及原字形；无脚本执行器 |
| `assets/instances.js` | 主／子显示列表、按钮 HitTest 状态和原边界 |
| `stage-data.js` | 五关各自的六组原 AS 数组 |
| `audio.js` | 原 MPEG 的 seek、in/out、loops、stop、noMultiple、左右包络与用户手势启声 |
| `app.js` | 公开菜单与实际 pointer handler、比例／DPR、RAF 和声音接线 |

为保持原件行为，仍保留源文件的一些异常：第六次受伤才失败；分钟边界出现 `2:60`；未定义 `k` 在 SWF6 数值运算中按0处理（不是 JS 的 NaN，也不改成 `mk`）；缺少的数组实例不补造；第5关同名 `npc4` 初始化两次；属性写回采用 twip 截断。各关不会恢复生命。

精确对齐时源码可能把0/0结果写向`_xscale`。固定原版基准的属性setter拒绝NaN、保留旧朝向；本实现保留该行为，避免普通JS字段存入NaN后无法攀爬。原AS独立公式与真实app handlers＋production renderer均覆盖此边界，未改目标坐标、容差或动作锁。

`getTimer` 是独立墙钟，由原 onEnterFrame 每次最多扣一秒并重新计时；30 fps 动画补帧不代替墙钟。新建关卡／倒数／回调不在出生帧提前运行；QGG/QMM 与相机顺序由本款原运行 trace 校准。原件没有可达调用启动的 `fireShow` 停在帧1；其原矢量保留，不新增烟花玩法。

旧 `encrypt` / `upload_score` 只提交账号和积分，不参与本地玩法初始化。该历史腾讯服务没有恢复，原生版提示服务停用，不请求旧接口，不显示伪造的提交成功。原服务表单的网络流程属于明确缺口。

## 构建和检查

在仓库根目录运行（Node ≥20）：

```sh
npm ci
node --test native/qpet-forest/tests/*.test.mjs
node scripts/build-native.mjs --game=qpet-forest
node scripts/build-native.mjs --game=qpet-forest --xhs
```

本款由注册表纳入网站公开构建。标准包输出 `preview-forest/`；独立小工具候选输出 `minitool-forest-candidate/`。每包只有相对路径的 `index.html`、`style.css`、`app.js`，图片／原声均内嵌；独立包移除站点跳转。通过 HTTP 打开入口即可，不需 Flash 或 Ruffle。小红书上传、平台容器、物理手机尚需分别验收，不能由此构建成功推定。

离线重导出时，先核对输入哈希；使用 FFDec 帮助中对应的 `-swf2xml`、脚本／媒体导出及 Canvas frame／linked sprite141 导出，准备：

```text
reference/forest.xml
reference/frame-unpacked/{frames.html,canvas.js}
reference/linked-unpacked/DefineSprite_141_plusScore/frames.html
reference/media/image/...
```

然后执行：

```sh
python3 tools/unpack-canvas.py --help
python3 tools/export-artwork.py --reference REFERENCE --source-swf FIXED_SWF
python3 tools/extract-data.py --reference REFERENCE --scripts SCRIPT_EXPORT
```

`unpack-canvas.py` 的解包仅在离线工具中进行，不能打进网页。此原件的 JPEG3 198 含分段 JPEG，浏览器／Skia 不稳定，采用 FFDec 导出的无损原 RGBA PNG；其他不透明图保留原导出 JPEG，未做有损重编码。链接素材引用闭包必须覆盖全部7幅图片。

## 验证层级与限制

本次项目证据放在 workspace `projects/10-24-qpet-happy-valley-native/qpet-forest/`，不随游戏运行包发布。

- 规则：30项测试通过，含固定源 AS 差分、五关数组、公开种植／攀爬／下降、背景中途取消、上层选择下层未成长种子、六伤失败／重玩、源计时边界、精确对齐的scale setter、资源／音频绑定及实际 app handler 合同测试。
- 原运行：独立只加 trace 的重编译副本及纯原版分别记录。原输入两次攀爬实际到第2层；本款 fixture 校准了相机与 QGG 先于 QMM。副本和纯原件散列严格分开，不将副本称为字节相同原件。
- 生产 renderer：1000帧连续公开动作／自然失败，以及668帧显式状态覆盖两角色全部211帧和恢复、两类种子、五张图、结局。后者是显式状态绘图，不能冒充自然五关通关。
- 静态对照：五张地图在相同显示状态下，与原未改 FFDec stage 函数绘制逐像素0差异；该检查验证矩阵／层级／CXFORM，不证明所有历史运行相位。
- 原生公开输入：固定随机种子的全新生产逻辑通过第一关11株、自然过关与继续第2关。详见 `reports/public-first-level-replay.json`；这不是浏览器事件或完整五关通关证明。
- 浏览器及模拟触摸：主任务绕过缓存并核实加载app `964a336748a5711ec27ee92a222045109e4c36a31e571699d6dfb9f39329b1d0`，Chrome844×390/DPR2实际touch完成左线两株/两次攀爬到floor2、135分；下降、完整跌落恢复、自然失败141分、重玩归0分/5生命/03:30、双指cancel/lostcapture后重新种植45分均已检查。竖屏390×844/DPR2画布374×206.68完整且无横向溢出。
- 实际原声：真实touch启声后按钮“关闭声音”、AudioContext running，观察跌落335两次与非致命受击1的原窗口调度并保存浏览器混音录音。全11段原声/17事件已独立对XML；录音的解码、峰值、静音和时间戳检查见项目最终报告。录音存在和局部相关性不等于所有音效/叠加听感已精确等价。
- 装饰奖励闪光的最后独立探针记录了相位32／6／21及后续字形构造；相位先于字形、末帧14的两个随机字形在父对象销毁前执行，已纳入回归。全部32种初始相位未逐一原运行采样。五关自然连胜、所有同时碰撞边界、物理真机及小红书容器尚未验收；不以离线单测或浏览器模拟触摸代替。

逐原 AS 单元映射和证据缺口见项目 `reports/behavior-coverage.md`／`.json`。部署与最终浏览器验收由主任务统一完成。
