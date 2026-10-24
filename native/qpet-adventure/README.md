# Q宠冒险岛原生迁移

[原生选关页](https://qpetlover.cn/QPetGamesWeb/qpet-adventure/) · [逐集原版对照](https://qpetlover.cn/qpet-adventure/reference.html?chapter=1&variant=0)

序章与第1–8集迁移为 HTML / Canvas / JavaScript，共17个入口：序章只有角色0，其余每集保留角色0、1两种源文件。舞台760×420，原逻辑25fps。素材、时间轴和章节回调从固定SWF离线提取，运行时使用静态绘图与普通JavaScript规则，不加载SWF、Ruffle、ActionScript解释器或WASM。

## 固定来源

原件来自 [QPetLover/qpet-adventure](https://github.com/QPetLover/qpet-adventure/tree/cbd3a75ee7787d62911c8ee58125931961741752)，固定提交 `cbd3a75ee7787d62911c8ee58125931961741752` 的 `site/`。下表固定输入身份；它证明本次迁移所用的归档字节，不认证其与历史腾讯服务器文件逐字节一致。原SWF保留在归档仓库，不进入原生发布包。

| 章节:角色 | 源文件 | 字节 | SHA-256 |
| --- | --- | ---: | --- |
| `0:0` | `xmxd_0_0.swf` | 2,665,908 | `b002bcfa00f4dde41915d8404a1d0ccd929310779d04bd013c826fd9eaacafa8` |
| `1:0` | `xmxd_1_0.swf` | 4,530,744 | `b7da73f6486bbee3c76516938c43b20407edad5cfff532b1b37d021f6eac2a68` |
| `1:1` | `xmxd_1_1.swf` | 4,933,215 | `89eb7cb04d65f2670c8d1bee2cac35c86699189aacdefe2bc7133fca0bbe7852` |
| `2:0` | `xmxd_2_0.swf` | 3,643,199 | `974002a3fd1945ca4f898b52439598031895bb7b4a03f0f8f61c48cb55a2df89` |
| `2:1` | `xmxd_2_1.swf` | 3,660,069 | `83ba17eecacebd760298d22b18680e7e1efe0109f896ab8555af04a6897e6c33` |
| `3:0` | `xmxd_3_0.swf` | 3,575,085 | `ad5331eb30a5741d8efdcac7dbf8b158202676ebfd0d991ea610d86c16c41b98` |
| `3:1` | `xmxd_3_1.swf` | 3,696,408 | `07b05236ae2211eaa7befdcf52d9ca21fbaf245e6a4d161879021780ab98c266` |
| `4:0` | `xmxd_4_0.swf` | 3,100,930 | `fc4c489426b4fbafac0b500093a43491869fd30bbd341890b7cfdc6355602c85` |
| `4:1` | `xmxd_4_1.swf` | 3,421,040 | `69bae3798c0e0e414f775da562ad8c8c63707efd64bd6accc24f709d4b21339d` |
| `5:0` | `xmxd_5_0.swf` | 5,542,048 | `a2bb68b8e97e7454e0b9ee84def0b138be754bbe091780acb73814fc43da63cd` |
| `5:1` | `xmxd_5_1.swf` | 5,777,568 | `a408c22148142dc415e8916dab07b76116263c13c6b21172f849a7e18b4795b1` |
| `6:0` | `xmxd_6_0.swf` | 6,375,536 | `37775dcb50780c0a9824b6ec0bbb9aeb1af0383123a02aa56fb0d9ad0e8da3d1` |
| `6:1` | `xmxd_6_1.swf` | 6,376,749 | `5e861760a8b1e3b479e1c87dcc9bbccfbc6c94821d933cbaf048066768431db9` |
| `7:0` | `xmxd_7_0.swf` | 7,185,684 | `f7f95b4658ea15e8ea317c6a8ff25f4e3f7ce37fd07f33958dcec6574011ea3d` |
| `7:1` | `xmxd_7_1.swf` | 7,286,084 | `c0be6027a337c247d0cefb6418e18e757cf19224d03ea9040e70fb21935e991e` |
| `8:0` | `xmxd_8_0.swf` | 5,751,545 | `2e29f2672376d2cdb223ebb8d61bb69e01eddfabccb76daf55efcb4ddb528cd4` |
| `8:1` | `xmxd_8_1.swf` | 5,892,650 | `25df512e7688db3670398f71d73e77f93ab34fe4949a69e5e867aff072374242` |

章节对应：1《启航》、2《爱情之爆发力》、3《贼窝》、4《密室》、5《黑暗之眼》、6《巨树》、7《巨树之颠》、8《大结局—宝藏》。

`assets/chapter1/` 对应1:0，其余目录按 `assets/chapterN-variantS/` 对应N:S。`drawing.js` 是静态绘图，`scene-data.js` 是原显示列表，`chapters/chapterN-actions.js` 是章节专用普通JavaScript回调；这些文件供共用场景、输入、文字与声音模块使用，不是SWF播放器。

设备对话字体从同一归档的 `myfont.swf` 导出，源SHA-256为 `3e932db5fd6e3f814978b32c82c85a1a305cb7c349b2ba9d5b3eabfe3e7e837c`；TTF为 `assets/fonts/myfont.ttf`，SHA-256为 `ab3508878a875e78703a481a198a5ace048685a0b4e858acf10c7242e4844a99`。字体内部名“站酷快乐体2016修订版”，版权字段含 `(c) Copyright LuiBingKe 2016`。这是当前归档对照页使用的后备字体，不声称等于历史宋体。完整元数据见 [myfont-provenance.json](assets/fonts/myfont-provenance.json)。

事件声WAV由原MPEG离线解码，保留原采样率和真实声道；原MPEG仍在各章 `audio-assets.js`。声音身份、原件SHA与PCM哈希见 [PCM来源映射](assets/audio-pcm/provenance.json)，处理与许可见 [PCM说明](assets/audio-pcm/NOTICE.md)。流式声音继续使用原MPEG；未做替换配乐或降噪。

## 操作与进度

电脑默认方向键移动，空格互动或攻击；各集原说明和改键设置仍适用。手机使用触屏方向键与互动键，支持同时按住多个键，取消触摸或失焦时释放输入；横屏可获得较大画面。点击游戏画面或声音按钮后启用声音。

正式Web首页从第1集开始，原章节完成回调 `mOver(n)` 才推进下一集；两角色共用本机进度。已通关可以重玩，重复通关、失败、重开及序章不会多开关。首页与直链均检查进度，未解锁入口提示先完成前集。保存键为 `qpetlover.qpet-adventure.native.progress.v1`，不继承原版调试存档。优先localStorage，异常时降级sessionStorage；两者都不可用时只能保留当前页内存，跨页不能保存。

原腾讯账号登录、Q币/积分、历史排行榜、旧上传接口和通关领奖不在本地功能范围内。游戏完成会显示本集完成、下一集或返回选关，不伪造账号关联、服务端记录或奖励领取成功。站内进度只保存在当前浏览器。

## 构建与独立包

在仓库根目录安装依赖后：

```sh
node scripts/build-adventure.mjs --mode=web
node scripts/verify-adventure.mjs preview-adventure
node scripts/build-adventure.mjs --mode=zip --entries=chapter1-v0 --output=preview-adventure-zip
```

Web构建生成选关首页与17个独立入口，共享原字体/PCM文件。ZIP按所选入口内嵌字体和声音，解压后可单独打开；没有站点选关页时不读取或写入正式Web进度，也不限制章节。完整Web构建已做静态闭包与媒体字节校验；ZIP目前核过章节样本，未宣称17份ZIP或小红书实际上传全部验收。

## 验证范围

生产SceneGraph与章节回调的端点路线夹具覆盖第1–8集及现存两角色；后续章节也覆盖失败与原重试按钮再通关，序章覆盖播放、跳过与进入第1集请求。路线使用显式RNG、选中对象身份或位置/碰撞夹具来隔离规则接线，均经原剧情链走到源完成回调，不直接调用完成或跳到结尾。这证明规则链和端点接通，不等于整集由人类在真实碰撞画面下通关。

Chrome已检查局部原版/原生画面、开场与操作、声音触发及手机模拟布局/触摸；尚未逐集人工通关，也不声称物理手机、小红书入口或全部声音逐样本等价。仓库内 `tests/` 覆盖场景树、输入、声音生命周期和renderer接口；构建/验包另在 `scripts/tests/`。发布检查以正常游玩和明显问题为准。

## 归属与许可

这是非官方怀旧迁移，与腾讯、QQ或原Q宠团队无隶属关系。原角色、商标、美术、声音、字体和原游戏资源属于各自权利人；归档来源不等于授予新增素材许可，不对这些内容追加代码授权。参见 [归档仓库NOTICE](https://github.com/QPetLover/qpet-adventure/blob/cbd3a75ee7787d62911c8ee58125931961741752/NOTICE.md) 与 [本仓库第三方说明](../../THIRD_PARTY_NOTICES.md)。FFDec静态Canvas helper的GPL-3.0正文及PCM有限数值函数的MIT许可随源码和构建保留；离线使用的解码器没有进入网站运行时。
