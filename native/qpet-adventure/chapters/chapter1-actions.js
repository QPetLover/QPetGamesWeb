/* Native source-derived chapter 1 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c1v0a0(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c1v0a1(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c1v0a2(ctx,owner){

   ctx.stopDrag(owner);

}

export function c1v0a3(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c1v0a4(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c1v0a5(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c1v0a6(ctx,owner){

   ctx.graph.play(owner);

}

export function c1v0a7(ctx,owner){

   ctx.graph.play(owner);

}

export function c1v0a8(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c1v0a9(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c1v0a10(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c1v0a11(ctx,owner){

   if(ctx.bool((owner.parent)?.["gamePause"] == 0))
   {
      (owner.parent)?.["gamePausing"]?.();
      owner.gp = 0;
   }
   else
   {
      owner.gp = 1;
   }
   ctx.graph.goto(owner,"fadeIn");
   ctx.graph.play(owner);

}

export function c1v0a12(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c1v0a13(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c1v0a14(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c1v0a15(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c1v0a16(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c1v0a17(ctx,owner){

   owner._quality = "HIGH";

}

export function c1v0a18(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c1v0a19(ctx,owner){

   owner._quality = "LOW";

}

export function c1v0a20(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c1v0a21(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c1v0a22(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c1v0a23(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c1v0a24(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c1v0a25(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c1v0a26(ctx,owner){

   ctx.graph.play(owner);

}

export function c1v0a27(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v0a28(ctx,owner){
ctx.stopAllSounds?.();

}

export function c1v0a29(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["block2"],"goto",{play:true});
(((owner.parent)?.["_parent"])?.["getItem"])?.["start"]?.();
((owner.parent)?.["_parent"])?.["etShow"]?.("您得到了锤子");
ctx.graph.goto(((owner.parent)?.["_parent"])?.["itemShow"],"event6");

}

export function c1v0a30(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v0a31(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v0a32(ctx,owner){
ctx.stopAllSounds?.();

}

export function c1v0a33(ctx,owner){

}

export function c1v0a34(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a35(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c1v0a36(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a37(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a38(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a39(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a40(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a41(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a42(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a43(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a44(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a45(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a46(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a47(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a48(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a49(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a50(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a51(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v0a52(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a53(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a54(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c1v0a55(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c1v0a56(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a57(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v0a58(ctx,owner){
ctx.stopAllSounds?.();

}

export function c1v0a59(ctx,owner){
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(1);

}

export function c1v0a60(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);

}

export function c1v0a61(ctx,owner){
ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)),{play:true});

}

export function c1v0a62(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a63(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c1v0a64(ctx,owner){
owner.back = function(){
   owner.onEnterFrame = function()
   {
      ctx.trace?.(ctx.add("frameNow=",owner._currentframe));
      ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)));
   };
};
ctx.graph.stop(owner);
if(ctx.bool(owner.onEnterFrame))
{
   (owner.parent)?.["checkTalker"]?.();
}
owner.onEnterFrame = undefined;

}

export function c1v0a65(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c1v0a66(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c1v0a67(ctx,owner){

}

export function c1v0a68(ctx,owner){
if(ctx.bool(ctx.lessEqual(ctx.getBytesTotal(owner.parent),ctx.getBytesLoaded(owner.parent))))
{
   owner.totalb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesTotal(owner.parent))/ctx.num(1000)));
   owner.loadb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesLoaded(owner.parent))/ctx.num(1000)));
   ctx.setField(owner.bar,"_xscale",(ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)));
   owner.percentage = ctx.add((ctx.math)?.["round"]?.((ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)))," %");
   owner.totalb = ctx.add(ctx.add(ctx.add(owner.totalb,"kb"),"/r"),"　]");
   owner.loadb = ctx.add(ctx.add(ctx.add(owner.percentage,"　[　"),owner.loadb),"kb/");
   ctx.graph.stop(owner);
   ctx.setField((owner.loading)?.["loading"],"_visible",0);
   ctx.setField((owner.parent)?.["btn"],"_visible",1);
}
else
{
   owner.totalb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesTotal(owner.parent))/ctx.num(1000)));
   owner.loadb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesLoaded(owner.parent))/ctx.num(1000)));
   ctx.setField(owner.bar,"_xscale",(ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)));
   owner.percentage = ctx.add((ctx.math)?.["round"]?.((ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)))," %");
   owner.totalb = ctx.add(ctx.add(ctx.add(owner.totalb,"kb"),"/r"),"　]");
   owner.loadb = ctx.add(ctx.add(ctx.add(owner.percentage,"　[　"),owner.loadb),"kb/");
}

}

export function c1v0a69(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c1v0a70(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a71(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a72(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c1v0a73(ctx,owner){
owner._visible = 0;
owner.hitted = undefined;
owner.onEnterFrame = function()
{
   if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
   {
      if(ctx.bool(owner.hitted))
      {
         ctx.trace?.("hitted");
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((owner.parent)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((owner.parent)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((owner.parent)?.["player"],"_y");
         owner.oy = ((owner.parent)?.["player"])?.["_y"];
      }
      else
      {
         owner.hitted = 1;
         owner.ox = ((owner.parent)?.["player"])?.["_x"];
         owner.oy = ((owner.parent)?.["player"])?.["_y"];
      }
   }
   else
   {
      owner.hitted = undefined;
   }
};

}

export function c1v0a74(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a75(ctx,owner){
ctx.graph.stop(owner);
owner.onEnterFrame = function()
{
   if(ctx.bool((((owner.parent)?.["_parent"])?.["darkness"])?.["_currentframe"] == 1))
   {
      owner.onEnterFrame = undefined;
      ctx.graph.play(owner);
   }
};

}

export function c1v0a76(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",1);

}

export function c1v0a77(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",0);
ctx.setField(owner.parent,"events",["event3"]);
owner._visible = 0;
ctx.graph.goto((owner.parent)?.["hitter"],1);

}

export function c1v0a78(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a79(ctx,owner){
owner._visible = 0;

}

export function c1v0a80(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a81(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",0);
ctx.setField(owner.parent,"events",["event7","event8"]);
owner._visible = 0;
ctx.graph.goto((owner.parent)?.["hitter"],1);

}

export function c1v0a82(ctx,owner){
ctx.graph.stop(owner);
owner.onEnterFrame = function()
{
   if(ctx.bool((((owner.parent)?.["_parent"])?.["darkness"])?.["_currentframe"] == 1))
   {
      owner.onEnterFrame = undefined;
      ctx.graph.play(owner);
   }
};

}

export function c1v0a83(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",1);

}

export function c1v0a84(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a85(ctx,owner){
owner._visible = 0;

}

export function c1v0a86(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a87(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 646;
      owner.appeary = 396;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 572;
      owner.appeary = 182;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 668;
      owner.appeary = 138;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   default:
      owner.appearx = 365;
      owner.appeary = 257;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
owner.map = "map1";
ctx.setField(owner.parent,"beenMap1",1);
ctx.setField(owner.hitter,"_visible",0);
owner.talkTxts = ["哥哥，你找到宝藏后记得给我买个钻石戒指哦～","一定会的，不管历经千辛万苦，我一定会回来的！到时候你要什么有什么！","你路上要小心啊！即使什么也没有也没关系！但你可一定要回来呀！","深山精灵，我要走了，照顾好布袋爷爷哦！","我办事，你放心！一路平安！","路上小心哦！要是有机会，帮我买点卸妆液吧，感觉脸上的妆，老是卸不干净。。。","遇到的话就帮你带！88！","要出差么，会不会回来过春节呀？","一定会回来的！","好像还有人没有告别呀。。。","孩子，你要快去快回呀。。。"];
owner.talkObj = ["map.point1","map.player.point","map.point1","map.player.point","map.point2","map.point3","map.player.point","map.point4","map.player.point","map.player.point","map.point5"];
owner.talkDirs = [1,0,1,3,2,1,0,0,1,1,3];
owner.talkNext = [1,2,0,4,0,6,0,8,0,0,0];
owner.blocks = ["block0","block1","block2","block3","block4","block7","block8","block9"];
owner.talkAreas = ["talkArea0","talkArea3","talkArea5","talkArea7"];
owner.events = ["event1","event2"];
owner.changes = ["map2"];
owner.changeMovies = ["event000"];
owner.blockx = [148,252,371,416,456,151,193,322];
owner.blocky = [307,282,352,220,380,142,356,118];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);
if(ctx.bool(ctx.add((owner.parent)?.["event4"],(owner.parent)?.["event5"]) == 2))
{
   owner.talkAreas = ["talkArea10","talkArea3","talkArea5","talkArea7"];
   ctx.setField(owner.block11,"_visible",0);
}

}

export function c1v0a88(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 505;
owner.appeary = 100;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map6";
ctx.setField(owner.parent,"beenMap6",1);
ctx.setField(owner.hitter,"_visible",0);
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event6"] != 1)((owner.parent)?.["event10"] == 1)))
{
   owner.events = ["event7","event8"];
   ctx.setField(owner.event9,"_visible",0);
}
else
{
   owner.events = ["event7","event8","event9"];
}
owner.changes = ["map2"];
owner.blocks = ["block0","block1"];
owner.changeMovies = ["event000"];
owner.blockx = [642,448];
owner.blocky = [291,359];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event10"] == 1)((owner.parent)?.["event6"] != 1)))
{
   ctx.setField(owner.block1,"_visible",0);
}
else
{
   ctx.graph.goto(owner.hitter,2);
}

}

export function c1v0a89(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map6":
      owner.appearx = 367;
      owner.appeary = 219;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "as2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 541;
      owner.appeary = 237;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 636;
      owner.appeary = 190;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 724;
      owner.appeary = 154;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
      break;
   default:
      owner.appearx = 45;
      owner.appeary = 61;
      owner._temp_10 = owner.parent;
      owner._temp_9 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
owner.map = "map2";
ctx.setField(owner.parent,"beenMap2",1);
ctx.setField(owner.hitter,"_visible",0);
owner.talkTxts = ["呃︿︿︿船上应该有锤子，改锥和机油吧","快把船修好了的好消息告诉船长吧！","修好了？有老鼠在作怪？我怎么没发现！","那我们起航吧！","太好了！","唔……呜……2年了︿︿︿︿我被你们感动了，那么，起航吧！！！"];
owner.talkObj = ["map.point1","map.point2","map.point1","map.player.point","map.point2","map.point1"];
owner.talkDirs = [1,0,1,0,0,1];
owner.talkNext = [0,0,3,4,5,0];
owner.blocks = ["block0","block1","block2"];
owner.talkAreas = [];
owner.events = ["event3","event6"];
owner.changes = ["map1"];
owner.changeMovies = ["event000","event0","event0","event0","event000"];
owner.blockx = [196,434,268];
owner.blocky = [264,269,251];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);
if(ctx.bool((owner.parent)?.["event3"] == 1))
{
   owner.changes = ["map1","map3","map4","map5","map6"];
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event10"] == 1)((owner.parent)?.["event6"] != 1):logicalLeft)(ctx.add((owner.parent)?.["event4"],(owner.parent)?.["event5"]) == 2)))
{
   ctx.setField(owner.block2,"_visible",1);
   ctx.graph.goto(owner.hitter,2);
   owner.events = ["event3","event6"];
}
else
{
   owner.events = ["event3"];
   ctx.setField(owner.block2,"_visible",0);
}

}

export function c1v0a90(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map3";
ctx.setField(owner.parent,"beenMap3",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event4"];
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   ctx.setField(owner.event4mc,"_visible",0);
   ctx.setField(owner.event4,"_visible",0);
   owner.events = [];
}
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["event00"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c1v0a91(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map4";
ctx.setField(owner.parent,"beenMap4",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = [];
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["event00"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c1v0a92(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 640;
owner.appeary = 249;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map5";
ctx.setField(owner.parent,"beenMap5",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event5"];
if(ctx.bool((owner.parent)?.["event5"] == 1))
{
   ctx.setField(owner.event5mc,"_visible",0);
   ctx.setField(owner.event5,"_visible",0);
   owner.events = [];
}
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["event00"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c1v0a93(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a94(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c1v0a95(ctx,owner){
owner.draging = function(){
   owner.onEnterFrame = function()
   {
      (owner.bb)?.["setVolume"]?.((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));
      ctx.trace?.((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));
      ctx.trace?.((owner.bb)?.["getVolume"]?.());
      ctx.setField((owner.parent)?.["bar"],"_xscale",ctx.bool(ctx.lessEqual((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)),0)) ? 1 : (ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));
   };
};
owner.bb = ctx.sound(owner);
owner._x = (ctx.num((ctx.num((ctx.num((owner.bb)?.["getVolume"]?.())/ctx.num(100)))*ctx.num(70)))-ctx.num(35));
ctx.setField((owner.parent)?.["bar"],"_xscale",ctx.bool(ctx.lessEqual((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)),0)) ? 1 : (ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));

}

export function c1v0a96(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c1v0a97(ctx,owner){
owner.listItem = function(){
   var _loc2_ = 0;
   var _loc3_;
   while(ctx.bool(ctx.less(_loc2_,(((owner.parent)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc3_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc2_),_loc2_);
      ctx.setField(_loc3_,"_x",(ctx.num(_loc2_)*ctx.num(36)));
      ctx.graph.goto(_loc3_,(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc2_]);
      ctx.setField(_loc3_,"aim",(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc2_]);
      _loc2_ = ctx.add(_loc2_,1);
   }
};
owner.newKey = function(key2){
   ctx.setField(owner.gkShow,"_visible",1);
   owner.checkKey = {};
   ctx.setField(owner.checkKey,"onKeyDown",function()
   {
      ctx.setField((owner.parent)?.["_parent"],key2,(ctx.keys)?.["getCode"]?.());
      ctx.setField(owner.allShow,key2,(((owner.parent)?.["_parent"])?.["keyCheck"])?.[(ctx.keys)?.["getCode"]?.()]);
      ctx.trace?.((owner.allShow)?.[key2]);
      ctx.setField(owner.gkShow,"_visible",0);
      (ctx.keys)?.["removeListener"]?.(owner.checkKey);
   });
   (ctx.keys)?.["addListener"]?.(owner.checkKey);
};
ctx.setField((owner.lifeBar)?.["bar"],"_x",((((owner.parent)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_x"]);
ctx.setField(owner.gkShow,"_visible",0);
ctx.setField((owner.allShow)?.["hitter"],"_visible",0);
owner.listItem?.();

}

export function c1v0a98(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a99(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a100(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c1v0a101(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c1v0a102(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);

}

export function c1v0a103(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("in");
owner.onEnterFrame = undefined;
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   ctx.graph.goto(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]],1);
   ctx.setField((owner.parent)?.["movie"],"_visible",1);
   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);
}
else
{
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
   {
      ctx.graph.goto(owner,"fadeOut");
      ctx.graph.play(owner);
   }
   else
   {
      ctx.trace?.(ctx.add("getEventShow=",(owner.parent)?.["getEventShow"]));
      if(ctx.bool((owner.parent)?.["getEventShow"] != 1))
      {
         ctx.graph.goto(owner,"fadeOut");
         ctx.graph.play(owner);
      }
      else
      {
         ctx.graph.goto((owner.parent)?.["getEvent"],"fadeIn",{play:true});
      }
   }
}

}

export function c1v0a104(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c1v0a105(ctx,owner){
ctx.trace?.("fadeIn");
ctx.setField((owner.parent)?.["disBtn"],"_visible",1);
ctx.setField((owner.parent)?.["disBtn"],"useHandCursor",0);
(owner.parent)?.["etClear"]?.();
ctx.trace?.(((owner.parent)?.["movie"])?.["_visible"]);
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   owner.onEnterFrame = function()
   {
      ctx.setField((owner.parent)?.["movie"],"_visible",0);
      ctx.graph.goto(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]],1);
   };
}

}

export function c1v0a106(ctx,owner){
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   ctx.graph.stop(owner);
   ctx.setField(owner.parent,"eventStep",1);
   ctx.graph.play(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]]);
   if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
   {
      owner.i = 0;
      while(ctx.bool(ctx.less(owner.i,(((owner.parent)?.["map"])?.["blocks"])?.["length"])))
      {
         ctx.trace?.("remove");
         ctx.graph.swapDepths(((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]],1);
         ctx.graph.remove(((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]]);
         ctx.trace?.(((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]]);
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      ctx.graph.swapDepths(((owner.parent)?.["map"])?.["topBlock"],1);
      ctx.graph.remove(((owner.parent)?.["map"])?.["topBlock"]);
      ctx.graph.swapDepths(((owner.parent)?.["map"])?.["player"],1);
      ctx.graph.remove(((owner.parent)?.["map"])?.["player"]);
   }
   owner.onEnterFrame = function()
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["skipFrame"]):logicalLeft)((ctx.keys)?.["isDown"]?.((owner.parent)?.["actKey"]))))
      {
         ctx.graph.goto(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]],(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["skipFrame"],{play:true});
      }
      if(ctx.bool(ctx.lessEqual((((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["_totalframes"],(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["_currentframe"])))
      {
         ctx.graph.stop(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]]);
         owner.onEnterFrame = undefined;
         if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
         {
            ctx.graph.goto((owner.parent)?.["map"],(owner.parent)?.["eventNext"]);
         }
         ctx.graph.goto(owner,"fadeIn");
         ctx.graph.play(owner);
      }
   };
}
else
{
   ctx.trace?.("aaa");
   ctx.trace?.((owner.parent)?.["eventStep"]);
   if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
   {
      ctx.graph.goto(((owner.parent)?.["map"])?.["player"],(owner.parent)?.["qqDir"]);
   }
   owner.onEnterFrame = undefined;
   ctx.setField(owner.parent,"gamePause",0);
}

}

export function c1v0a107(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a108(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a109(ctx,owner){
owner.fadeOut = function(){
   ctx.clearInterval?.(owner.delay);
   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);
};
ctx.graph.stop(owner);
ctx.setField(owner.parent,"itemList",[]);
((owner.parent)?.["itemList"])?.["push"]?.((owner.parent)?.["itemNow"]);
ctx.graph.goto((owner.parent)?.["itemShow"],(owner.parent)?.["itemNow"]);
owner.delay = ctx.setInterval(owner,owner.fadeOut,(owner.parent)?.["delayTime"]);

}

export function c1v0a110(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c1v0a111(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c1v0a112(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a113(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a114(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a115(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a116(ctx,owner){

}

export function c1v0a117(ctx,owner){
owner.goBack = function(){
   owner.back = 1;
   owner.onEnterFrame = function()
   {
      ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)));
   };
};
owner.onEnterFrame = undefined;
if(ctx.bool(owner.back == 1))
{
   ctx.graph.goto(owner.parent,3);
}
owner.back = 0;

}

export function c1v0a118(ctx,owner){
owner.hit = 1;
ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(10),owner._currentframe),{play:true});

}

export function c1v0a119(ctx,owner){
ctx.graph.goto(((owner.parent)?.["_parent"])?.["flasher"],2,{play:true});

}

export function c1v0a120(ctx,owner){
((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(((owner.parent)?.["_parent"])?.["lifeHurt"]))))((owner.parent)?.["_parent"],"life");

}

export function c1v0a121(ctx,owner){
owner.hit = 0;

}

export function c1v0a122(ctx,owner){
owner.back = 1;
ctx.graph.goto(owner,1);

}

export function c1v0a123(ctx,owner){
ctx.graph.goto(owner,"actHurt");
ctx.graph.play(owner);

}

export function c1v0a124(ctx,owner){
owner.hit = 0;

}

export function c1v0a125(ctx,owner){
owner.back = 1;
ctx.graph.goto(owner,1);

}

export function c1v0a126(ctx,owner){
owner._visible = 0;

}

export function c1v0a127(ctx,owner){
owner.goBack = function(){
   owner.back = 1;
   owner.onEnterFrame = function()
   {
      ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)));
   };
};
owner.onEnterFrame = undefined;
if(ctx.bool(owner.back == 1))
{
   ctx.graph.goto(owner.parent,3);
}
owner.back = 0;

}

export function c1v0a128(ctx,owner){
owner.hit = 1;

}

export function c1v0a129(ctx,owner){
owner.hit = 0;

}

export function c1v0a130(ctx,owner){
owner.goBack?.();

}

export function c1v0a131(ctx,owner){
owner.hit = 0;

}

export function c1v0a132(ctx,owner){
ctx.graph.goto(owner,"actOut");
owner.goBack?.();

}

export function c1v0a133(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a134(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a135(ctx,owner){
ctx.graph.goto(owner,1);

}

export function c1v0a136(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a137(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a138(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a139(ctx,owner){
owner.init = function(){
   owner.life = 100;
   owner.lifeHurt = 10;
   owner.timer = 30;
   owner.timeStep = 0.04;
   owner.holes = 5;
   owner.lifeStep = 1.93;
   owner.lifex = (-ctx.num(241));
   var i = 0;
   while(ctx.bool(ctx.less(i,owner.holes)))
   {
      ctx.graph.goto((this)?.[ctx.add("hole",i)],3);
      ((old)=>(i=old+1,old))(ctx.num(i));
   }
   owner.am = {};
   ctx.setField(owner.am,"onMouseMove",function()
   {
      if(ctx.bool((owner.arr)?.["_currentframe"] == 1))
      {
         ctx.setField(owner.arr,"_x",owner._xmouse);
         ctx.setField(owner.arr,"_y",owner._ymouse);
      }
   });
   ctx.setField(owner.am,"onMouseDown",function()
   {
      ctx.trace?.(ctx.add(ctx.add(owner._xmouse,"    "),owner._ymouse));
      if(ctx.bool((owner.arr)?.["_currentframe"] == 1))
      {
         var i = 0;
         while(ctx.bool(ctx.less(i,owner.holes)))
         {
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((ctx.graph.named(owner,ctx.add("hole",i)))?.["hitter"])?.["hit"] == 1:logicalLeft)(ctx.hitTest((ctx.graph.named(owner,ctx.add("hole",i)))?.["hitA"],owner._xmouse,owner._ymouse,false))))
            {
               ctx.graph.goto((ctx.graph.named(owner,ctx.add("hole",i)))?.["hitter"],"actHit",{play:true});
               ctx.graph.goto(owner.arr,2,{play:true});
               if(ctx.bool((ctx.graph.named(owner,ctx.add("hole",i)))?.["_currentframe"] == 2))
               {
                  owner.life=(ctx.num(owner.life)-ctx.num(owner.lifeHurt));
               }
            }
            ((old)=>(i=old+1,old))(ctx.num(i));
         }
      }
   });
   (ctx.mouse)?.["addListener"]?.(owner.am);
   ctx.setField(owner.arr,"_visible",1);
   owner.gamePlay?.();
};
owner.gamePlay = function(){
   owner.onEnterFrame = function()
   {
      owner.timer=(ctx.num(owner.timer)-ctx.num(owner.timeStep));
      owner.timec?.();
      var _loc4_;
      var _loc2_;
      var _loc3_;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.lessEqual(owner.life,0))(ctx.lessEqual(owner.timer,0))))
      {
         ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
         owner.gameOver?.();
      }
      else
      {
         ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
         _loc4_ = ctx.randomInt?.(10);
         if(ctx.bool(ctx.less(7,_loc4_)))
         {
            _loc2_ = ctx.randomInt?.(5);
            _loc3_ = ctx.randomInt?.(10);
            if(ctx.bool(((this)?.[ctx.add("hole",_loc2_)])?.["_currentframe"] == 3))
            {
               if(ctx.bool(ctx.less(6,_loc3_)))
               {
                  ctx.graph.goto((this)?.[ctx.add("hole",_loc2_)],2);
               }
               else
               {
                  ctx.graph.goto((this)?.[ctx.add("hole",_loc2_)],1);
               }
            }
         }
      }
   };
};
owner.gameOver = function(){
   owner.onEnterFrame = undefined;
   var _loc3_ = 0;
   while(ctx.bool(ctx.less(_loc3_,owner.holes)))
   {
      ctx.graph.goto((this)?.[ctx.add("hole",_loc3_)],3);
      _loc3_ = ctx.add(_loc3_,1);
   }
   (ctx.mouse)?.["removeListener"]?.(owner.am);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],"_x",((owner.lifeBar)?.["bar"])?.["_x"]);
   ctx.setField(owner.arr,"_visible",0);
   if(ctx.bool(ctx.less(0,owner.life)))
   {
      ctx.graph.play(owner.parent);
   }
   else
   {
      ctx.graph.goto(((owner.parent)?.["_parent"])?.["_parent"],ctx.add((((owner.parent)?.["_parent"])?.["_parent"])?.["_currentframe"],1));
   }
};
owner.timec = function(){
   ctx.bool(ctx.lessEqual(0,owner.timer)) ? undefined : (owner.timer = 0);
   owner.ss = (ctx.math)?.["floor"]?.(owner.timer);
   owner.ms = (ctx.num((ctx.num(owner.timer)-ctx.num(owner.ss)))*ctx.num(100));
   ctx.bool(ctx.lessEqual(10,owner.ss)) ? undefined : (owner.ss = ctx.add("0",owner.ss));
   ctx.bool(ctx.lessEqual(10,owner.ms)) ? undefined : (owner.ms = ctx.add("0",owner.ms));
   owner.timeShow = ctx.add(ctx.add(owner.ss,":"),owner.ms);
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c1v0a140(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a141(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c1v0a142(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a143(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a144(ctx,owner){
owner.skipFrame = 499;

}

export function c1v0a145(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["block1"],"goto",{play:true});
ctx.stopAllSounds?.();

}

export function c1v0a146(ctx,owner){
owner.skipFrame = 0;

}

export function c1v0a147(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a148(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"event10",1);

}

export function c1v0a149(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v0a150(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a151(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v0a152(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a153(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a154(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a155(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(owner.btn,"_visible",0);

}

export function c1v0a156(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v0a157(ctx,owner){
owner.init = function(){
   owner.getItem = ctx.sound(owner);
   (owner.getItem)?.["attachSound"]?.("getItem");
   owner.useItem = ctx.sound(owner);
   (owner.useItem)?.["attachSound"]?.("useItem");
   owner.upKey = 38;
   owner.leftKey = 37;
   owner.downKey = 40;
   owner.rightKey = 39;
   owner.actKey = 32;
   owner.keyCheck = [];
   ctx.setField(owner.keyCheck,0,"unknown");
   ctx.setField(owner.keyCheck,1,"鼠标左键");
   ctx.setField(owner.keyCheck,2,"鼠标右键");
   ctx.setField(owner.keyCheck,3,"unknown");
   ctx.setField(owner.keyCheck,4,"鼠标中键");
   ctx.setField(owner.keyCheck,5,"unknown");
   ctx.setField(owner.keyCheck,6,"unknown");
   ctx.setField(owner.keyCheck,7,"unknown");
   ctx.setField(owner.keyCheck,8,"退格");
   ctx.setField(owner.keyCheck,9,"Tab");
   ctx.setField(owner.keyCheck,10,"unknown");
   ctx.setField(owner.keyCheck,11,"unknown");
   ctx.setField(owner.keyCheck,12,"Clear");
   ctx.setField(owner.keyCheck,13,"回车");
   ctx.setField(owner.keyCheck,14,"unknown");
   ctx.setField(owner.keyCheck,15,"unknown");
   ctx.setField(owner.keyCheck,16,"Shift");
   ctx.setField(owner.keyCheck,17,"Ctrl");
   ctx.setField(owner.keyCheck,18,"Alt");
   ctx.setField(owner.keyCheck,19,"Break");
   ctx.setField(owner.keyCheck,20,"Caps");
   ctx.setField(owner.keyCheck,21,"unknown");
   ctx.setField(owner.keyCheck,22,"unknown");
   ctx.setField(owner.keyCheck,23,"unknown");
   ctx.setField(owner.keyCheck,24,"unknown");
   ctx.setField(owner.keyCheck,25,"unknown");
   ctx.setField(owner.keyCheck,26,"unknown");
   ctx.setField(owner.keyCheck,27,"Esc");
   ctx.setField(owner.keyCheck,28,"unknown");
   ctx.setField(owner.keyCheck,29,"unknown");
   ctx.setField(owner.keyCheck,30,"unknown");
   ctx.setField(owner.keyCheck,31,"unknown");
   ctx.setField(owner.keyCheck,32,"空格键");
   ctx.setField(owner.keyCheck,33,"PageUp");
   ctx.setField(owner.keyCheck,34,"PageDn");
   ctx.setField(owner.keyCheck,35,"End");
   ctx.setField(owner.keyCheck,36,"Home");
   ctx.setField(owner.keyCheck,37,"←");
   ctx.setField(owner.keyCheck,38,"↑");
   ctx.setField(owner.keyCheck,39,"→");
   ctx.setField(owner.keyCheck,40,"↓");
   ctx.setField(owner.keyCheck,41,"unknown");
   ctx.setField(owner.keyCheck,42,"unknown");
   ctx.setField(owner.keyCheck,43,"unknown");
   ctx.setField(owner.keyCheck,44,"截图");
   ctx.setField(owner.keyCheck,45,"Insert");
   ctx.setField(owner.keyCheck,46,"删除");
   ctx.setField(owner.keyCheck,47,"Help");
   ctx.setField(owner.keyCheck,48,"0");
   ctx.setField(owner.keyCheck,49,"1");
   ctx.setField(owner.keyCheck,50,"2");
   ctx.setField(owner.keyCheck,51,"3");
   ctx.setField(owner.keyCheck,52,"4");
   ctx.setField(owner.keyCheck,53,"5");
   ctx.setField(owner.keyCheck,54,"6");
   ctx.setField(owner.keyCheck,55,"7");
   ctx.setField(owner.keyCheck,56,"8");
   ctx.setField(owner.keyCheck,57,"9");
   ctx.setField(owner.keyCheck,58,"unknown");
   ctx.setField(owner.keyCheck,59,"unknown");
   ctx.setField(owner.keyCheck,60,"unknown");
   ctx.setField(owner.keyCheck,61,"unknown");
   ctx.setField(owner.keyCheck,62,"unknown");
   ctx.setField(owner.keyCheck,63,"unknown");
   ctx.setField(owner.keyCheck,64,"unknown");
   ctx.setField(owner.keyCheck,65,"A");
   ctx.setField(owner.keyCheck,66,"B");
   ctx.setField(owner.keyCheck,67,"C");
   ctx.setField(owner.keyCheck,68,"D");
   ctx.setField(owner.keyCheck,69,"E");
   ctx.setField(owner.keyCheck,70,"F");
   ctx.setField(owner.keyCheck,71,"G");
   ctx.setField(owner.keyCheck,72,"H");
   ctx.setField(owner.keyCheck,73,"I");
   ctx.setField(owner.keyCheck,74,"J");
   ctx.setField(owner.keyCheck,75,"K");
   ctx.setField(owner.keyCheck,76,"L");
   ctx.setField(owner.keyCheck,77,"M");
   ctx.setField(owner.keyCheck,78,"N");
   ctx.setField(owner.keyCheck,79,"O");
   ctx.setField(owner.keyCheck,80,"P");
   ctx.setField(owner.keyCheck,81,"Q");
   ctx.setField(owner.keyCheck,82,"R");
   ctx.setField(owner.keyCheck,83,"S");
   ctx.setField(owner.keyCheck,84,"T");
   ctx.setField(owner.keyCheck,85,"U");
   ctx.setField(owner.keyCheck,86,"V");
   ctx.setField(owner.keyCheck,87,"W");
   ctx.setField(owner.keyCheck,88,"X");
   ctx.setField(owner.keyCheck,89,"Y");
   ctx.setField(owner.keyCheck,90,"Z");
   ctx.setField(owner.keyCheck,91,"左Win");
   ctx.setField(owner.keyCheck,92,"右Win");
   ctx.setField(owner.keyCheck,93,"弹出菜单");
   ctx.setField(owner.keyCheck,94,"unknown");
   ctx.setField(owner.keyCheck,95,"Sleep");
   ctx.setField(owner.keyCheck,96,"Num 0");
   ctx.setField(owner.keyCheck,97,"Num 1");
   ctx.setField(owner.keyCheck,98,"Num 2");
   ctx.setField(owner.keyCheck,99,"Num 3");
   ctx.setField(owner.keyCheck,100,"Num 4");
   ctx.setField(owner.keyCheck,101,"Num 5");
   ctx.setField(owner.keyCheck,102,"Num 6");
   ctx.setField(owner.keyCheck,103,"Num 7");
   ctx.setField(owner.keyCheck,104,"Num 8");
   ctx.setField(owner.keyCheck,105,"Num 9");
   ctx.setField(owner.keyCheck,106,"Num *");
   ctx.setField(owner.keyCheck,107,"Num +");
   ctx.setField(owner.keyCheck,108,"unknown");
   ctx.setField(owner.keyCheck,109,"Num -");
   ctx.setField(owner.keyCheck,110,"Num .");
   ctx.setField(owner.keyCheck,111,"Num /");
   ctx.setField(owner.keyCheck,112,"F1");
   ctx.setField(owner.keyCheck,113,"F2");
   ctx.setField(owner.keyCheck,114,"F3");
   ctx.setField(owner.keyCheck,115,"F4");
   ctx.setField(owner.keyCheck,116,"F5");
   ctx.setField(owner.keyCheck,117,"F6");
   ctx.setField(owner.keyCheck,118,"F7");
   ctx.setField(owner.keyCheck,119,"F8");
   ctx.setField(owner.keyCheck,120,"F9");
   ctx.setField(owner.keyCheck,121,"F10");
   ctx.setField(owner.keyCheck,122,"F11");
   ctx.setField(owner.keyCheck,123,"F12");
   ctx.setField(owner.keyCheck,124,"F13");
   ctx.setField(owner.keyCheck,125,"F14");
   ctx.setField(owner.keyCheck,126,"F15");
   ctx.setField(owner.keyCheck,127,"unknown");
   ctx.setField(owner.keyCheck,128,"unknown");
   ctx.setField(owner.keyCheck,129,"unknown");
   ctx.setField(owner.keyCheck,130,"unknown");
   ctx.setField(owner.keyCheck,131,"unknown");
   ctx.setField(owner.keyCheck,132,"unknown");
   ctx.setField(owner.keyCheck,133,"unknown");
   ctx.setField(owner.keyCheck,134,"unknown");
   ctx.setField(owner.keyCheck,135,"unknown");
   ctx.setField(owner.keyCheck,136,"unknown");
   ctx.setField(owner.keyCheck,137,"unknown");
   ctx.setField(owner.keyCheck,138,"unknown");
   ctx.setField(owner.keyCheck,139,"unknown");
   ctx.setField(owner.keyCheck,140,"unknown");
   ctx.setField(owner.keyCheck,141,"unknown");
   ctx.setField(owner.keyCheck,142,"unknown");
   ctx.setField(owner.keyCheck,143,"unknown");
   ctx.setField(owner.keyCheck,144,"Numloc");
   ctx.setField(owner.keyCheck,145,"SclLoc");
   ctx.setField(owner.keyCheck,146,"unknown");
   ctx.setField(owner.keyCheck,147,"unknown");
   ctx.setField(owner.keyCheck,148,"unknown");
   ctx.setField(owner.keyCheck,149,"unknown");
   ctx.setField(owner.keyCheck,150,"unknown");
   ctx.setField(owner.keyCheck,151,"unknown");
   ctx.setField(owner.keyCheck,152,"unknown");
   ctx.setField(owner.keyCheck,153,"unknown");
   ctx.setField(owner.keyCheck,154,"unknown");
   ctx.setField(owner.keyCheck,155,"unknown");
   ctx.setField(owner.keyCheck,156,"unknown");
   ctx.setField(owner.keyCheck,157,"unknown");
   ctx.setField(owner.keyCheck,158,"unknown");
   ctx.setField(owner.keyCheck,159,"unknown");
   ctx.setField(owner.keyCheck,160,"左Shift");
   ctx.setField(owner.keyCheck,161,"右Shift");
   ctx.setField(owner.keyCheck,162,"左Ctrl");
   ctx.setField(owner.keyCheck,163,"右Ctrl");
   ctx.setField(owner.keyCheck,164,"左Alt");
   ctx.setField(owner.keyCheck,165,"右Alt");
   ctx.setField(owner.keyCheck,166,"unknown");
   ctx.setField(owner.keyCheck,167,"unknown");
   ctx.setField(owner.keyCheck,168,"unknown");
   ctx.setField(owner.keyCheck,169,"unknown");
   ctx.setField(owner.keyCheck,170,"unknown");
   ctx.setField(owner.keyCheck,171,"unknown");
   ctx.setField(owner.keyCheck,172,"unknown");
   ctx.setField(owner.keyCheck,173,"unknown");
   ctx.setField(owner.keyCheck,174,"unknown");
   ctx.setField(owner.keyCheck,175,"unknown");
   ctx.setField(owner.keyCheck,176,"unknown");
   ctx.setField(owner.keyCheck,177,"unknown");
   ctx.setField(owner.keyCheck,178,"unknown");
   ctx.setField(owner.keyCheck,179,"unknown");
   ctx.setField(owner.keyCheck,180,"unknown");
   ctx.setField(owner.keyCheck,181,"unknown");
   ctx.setField(owner.keyCheck,182,"unknown");
   ctx.setField(owner.keyCheck,183,"unknown");
   ctx.setField(owner.keyCheck,184,"unknown");
   ctx.setField(owner.keyCheck,185,"unknown");
   ctx.setField(owner.keyCheck,186,":;");
   ctx.setField(owner.keyCheck,187,"+=");
   ctx.setField(owner.keyCheck,188,"<,");
   ctx.setField(owner.keyCheck,189,"_-");
   ctx.setField(owner.keyCheck,190,">.");
   ctx.setField(owner.keyCheck,191,"?/");
   ctx.setField(owner.keyCheck,192,"~");
   ctx.setField(owner.keyCheck,193,"unknown");
   ctx.setField(owner.keyCheck,194,"unknown");
   ctx.setField(owner.keyCheck,195,"unknown");
   ctx.setField(owner.keyCheck,196,"unknown");
   ctx.setField(owner.keyCheck,197,"unknown");
   ctx.setField(owner.keyCheck,198,"unknown");
   ctx.setField(owner.keyCheck,199,"unknown");
   ctx.setField(owner.keyCheck,200,"unknown");
   ctx.setField(owner.keyCheck,201,"unknown");
   ctx.setField(owner.keyCheck,202,"unknown");
   ctx.setField(owner.keyCheck,203,"unknown");
   ctx.setField(owner.keyCheck,204,"unknown");
   ctx.setField(owner.keyCheck,205,"unknown");
   ctx.setField(owner.keyCheck,206,"unknown");
   ctx.setField(owner.keyCheck,207,"unknown");
   ctx.setField(owner.keyCheck,208,"unknown");
   ctx.setField(owner.keyCheck,209,"unknown");
   ctx.setField(owner.keyCheck,210,"unknown");
   ctx.setField(owner.keyCheck,211,"unknown");
   ctx.setField(owner.keyCheck,212,"unknown");
   ctx.setField(owner.keyCheck,213,"unknown");
   ctx.setField(owner.keyCheck,214,"unknown");
   ctx.setField(owner.keyCheck,215,"unknown");
   ctx.setField(owner.keyCheck,216,"unknown");
   ctx.setField(owner.keyCheck,217,"unknown");
   ctx.setField(owner.keyCheck,218,"unknown");
   ctx.setField(owner.keyCheck,219,"{[");
   ctx.setField(owner.keyCheck,220,"|");
   ctx.setField(owner.keyCheck,221,"}]");
   ctx.setField(owner.keyCheck,222,"\'");
   ctx.setField(owner.keyCheck,223,"unknown");
   ctx.setField(owner.keyCheck,224,"unknown");
   ctx.setField(owner.keyCheck,225,"unknown");
   ctx.setField(owner.keyCheck,226,"unknown");
   ctx.setField(owner.keyCheck,227,"unknown");
   ctx.setField(owner.keyCheck,228,"unknown");
   ctx.setField(owner.keyCheck,229,"unknown");
   ctx.setField(owner.keyCheck,230,"unknown");
   ctx.setField(owner.keyCheck,231,"unknown");
   ctx.setField(owner.keyCheck,232,"unknown");
   ctx.setField(owner.keyCheck,233,"unknown");
   ctx.setField(owner.keyCheck,234,"unknown");
   ctx.setField(owner.keyCheck,235,"unknown");
   ctx.setField(owner.keyCheck,236,"unknown");
   ctx.setField(owner.keyCheck,237,"unknown");
   ctx.setField(owner.keyCheck,238,"unknown");
   ctx.setField(owner.keyCheck,239,"unknown");
   ctx.setField(owner.keyCheck,240,"unknown");
   ctx.setField(owner.keyCheck,241,"unknown");
   ctx.setField(owner.keyCheck,242,"unknown");
   ctx.setField(owner.keyCheck,243,"unknown");
   ctx.setField(owner.keyCheck,244,"unknown");
   ctx.setField(owner.keyCheck,245,"unknown");
   ctx.setField(owner.keyCheck,246,"unknown");
   ctx.setField(owner.keyCheck,247,"unknown");
   ctx.setField(owner.keyCheck,248,"unknown");
   ctx.setField(owner.keyCheck,249,"unknown");
   ctx.setField(owner.keyCheck,250,"unknown");
   ctx.setField(owner.keyCheck,251,"unknown");
   ctx.setField(owner.keyCheck,252,"unknown");
   ctx.setField(owner.keyCheck,253,"unknown");
   ctx.setField(owner.keyCheck,254,"unknown");
   ctx.setField(owner.keyCheck,255,"附加码");
   owner.autoTime = 5000;
   owner.speed = 5;
   owner.yspeed = owner.xspeed = (ctx.num(owner.speed)/ctx.num(1.414213562373));
   owner.qqDir = "s";
   owner.oldDir = "s";
   owner.step = 0;
   owner.steps = 2;
   owner.auto = 0;
   owner.xp = 22;
   owner.yp = 9;
   owner.playerSex = 2;
   owner.itemList = [];
   owner.delayTime = 2000;
   ctx.setField((owner.itemShow)?.["btn"],"enabled",0);
   owner.oldMap = "";
   owner.event1 = 0;
   owner.event2 = 0;
   owner.event3 = 0;
   owner.event4 = 0;
   owner.event5 = 0;
   owner.event6 = 0;
   owner.event7 = 0;
   owner.event8 = 0;
   owner.event9 = 0;
   owner.event10 = 0;
   ctx.graph.goto(owner.map,"map1");
   owner.onEnterFrame = function()
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(1000,ctx.getBytesTotal(owner.map)):logicalLeft)(ctx.lessEqual(ctx.getBytesTotal(owner.map),ctx.getBytesLoaded(owner.map)))))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(1000,ctx.getBytesTotal((owner.map)?.["player"])):logicalLeft)(ctx.lessEqual(ctx.getBytesTotal((owner.map)?.["player"]),ctx.getBytesLoaded((owner.map)?.["player"])))))
         {
            ctx.setField((owner.map)?.["player"],"_visible",1);
            ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            owner.onEnterFrame = undefined;
            owner.gamePlay?.();
         }
      }
   };
};
owner.climbDown = function(cx,cy){
   owner.aimX = cx;
   owner.aimY = cy;
   owner.tan = (ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(cy))));
   owner.tt = ctx.bool(ctx.lessEqual(cy,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
   owner.degree = ctx.add((ctx.num((ctx.num((ctx.math)?.["atan"]?.(owner.tan))/ctx.num(3.141592653589793)))*ctx.num(180)),owner.tt);
   owner.speedx = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["cos"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   owner.speedy = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["sin"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.less(owner.degree,(-ctx.num(67.5))))(ctx.lessEqual(247.5,owner.degree))))
   {
      ctx.graph.goto((owner.map)?.["player"],"a");
   }
   else if(ctx.bool(ctx.lessEqual(202.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sa");
   }
   else if(ctx.bool(ctx.lessEqual(157.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"s");
   }
   else if(ctx.bool(ctx.lessEqual(112.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sd");
   }
   else if(ctx.bool(ctx.lessEqual(67.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"d");
   }
   else if(ctx.bool(ctx.lessEqual(22.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"wd");
   }
   else if(ctx.bool(ctx.lessEqual((-ctx.num(22.5)),owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"w");
   }
   else
   {
      ctx.graph.goto((owner.map)?.["player"],"wa");
   }
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
   ctx.setField((owner.map)?.["player"],"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))((owner.map)?.["player"],"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedy)))((owner.map)?.["player"],"_y");
      owner.tempDis=(ctx.num(owner.tempDis)-ctx.num(owner.speed));
      if(ctx.bool(ctx.lessEqual(owner.tempDis,0)))
      {
         ctx.setField((owner.map)?.["player"],"onEnterFrame",undefined);
         ctx.setField((owner.map)?.["player"],"_x",(ctx.num(owner.aimX)-ctx.num(24.5)));
         ctx.setField((owner.map)?.["player"],"_y",ctx.add(owner.aimY,150.5));
         ctx.graph.goto((owner.map)?.["player"],"climbDown");
      }
   });
};
owner.climbUp = function(cx,cy){
   owner.aimX = cx;
   owner.aimY = cy;
   owner.tan = (ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(cy))));
   owner.tt = ctx.bool(ctx.lessEqual(cy,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
   owner.degree = ctx.add((ctx.num((ctx.num((ctx.math)?.["atan"]?.(owner.tan))/ctx.num(3.141592653589793)))*ctx.num(180)),owner.tt);
   owner.speedx = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["cos"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   owner.speedy = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["sin"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.less(owner.degree,(-ctx.num(67.5))))(ctx.lessEqual(247.5,owner.degree))))
   {
      ctx.graph.goto((owner.map)?.["player"],"a");
   }
   else if(ctx.bool(ctx.lessEqual(202.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sa");
   }
   else if(ctx.bool(ctx.lessEqual(157.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"s");
   }
   else if(ctx.bool(ctx.lessEqual(112.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sd");
   }
   else if(ctx.bool(ctx.lessEqual(67.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"d");
   }
   else if(ctx.bool(ctx.lessEqual(22.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"wd");
   }
   else if(ctx.bool(ctx.lessEqual((-ctx.num(22.5)),owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"w");
   }
   else
   {
      ctx.graph.goto((owner.map)?.["player"],"wa");
   }
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
   ctx.setField((owner.map)?.["player"],"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))((owner.map)?.["player"],"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedy)))((owner.map)?.["player"],"_y");
      owner.tempDis=(ctx.num(owner.tempDis)-ctx.num(owner.speed));
      if(ctx.bool(ctx.lessEqual(owner.tempDis,0)))
      {
         ctx.setField((owner.map)?.["player"],"onEnterFrame",undefined);
         ctx.setField((owner.map)?.["player"],"_x",ctx.add(owner.aimX,24.5));
         ctx.setField((owner.map)?.["player"],"_y",(ctx.num(owner.aimY)-ctx.num(150.5)));
         ctx.graph.goto((owner.map)?.["player"],"climbUp");
      }
   });
};
owner.autoActing = function(){
   ctx.clearInterval?.(owner.autoAct);
   owner.auto = 1;
   owner.qqDir = ctx.add((owner.qqDir)?.["slice"]?.(0,(-ctx.num(1))),"3");
   ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
};
owner.gamePlay = function(){
   owner.gamePause = 0;
   ctx.trace?.("play");
   ctx.setField(owner.map,"onEnterFrame",function()
   {
      if(ctx.bool(owner.gamePause != 1))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.upKey)))
         {
            if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.leftKey)))
            {
               if(ctx.bool(owner.qqDir != "wa"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "wa";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               }
            }
            else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.rightKey)))
            {
               if(ctx.bool(owner.qqDir != "wd"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "wd";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               }
            }
            else
            {
               if(ctx.bool(owner.qqDir != "w"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "w";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_y");
               }
            }
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.downKey)))
         {
            if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.leftKey)))
            {
               if(ctx.bool(owner.qqDir != "sa"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "sa";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true))(ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               }
            }
            else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.rightKey)))
            {
               if(ctx.bool(owner.qqDir != "sd"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "sd";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true))(ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               }
            }
            else
            {
               if(ctx.bool(owner.qqDir != "s"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "s";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true))(ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_y");
               }
            }
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.leftKey)))
         {
            if(ctx.bool(owner.qqDir != "a"))
            {
               owner.oldDir = owner.qqDir;
               owner.qqDir = "a";
               owner.step = 0;
               ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            }
            ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_x");
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true)))))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_x");
            }
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.rightKey)))
         {
            if(ctx.bool(owner.qqDir != "d"))
            {
               owner.oldDir = owner.qqDir;
               owner.qqDir = "d";
               owner.step = 0;
               ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            }
            ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_x");
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true)))))
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_x");
            }
         }
         else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(((owner.map)?.["player"])?.["player"])?.["_currentframe"] == (((owner.map)?.["player"])?.["player"])?.["_totalframes"]:logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) == "3"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "2"))))
         {
            if(ctx.bool(ctx.less(owner.steps,owner.step)))
            {
               owner.qqDir=ctx.add(owner.qqDir,"2");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "2")))
            {
               owner.qqDir = ctx.add(owner.oldDir,"2");
            }
            else
            {
               owner.qqDir = ctx.add((owner.qqDir)?.["slice"]?.(0,(-ctx.num(1))),"2");
            }
            owner.oldDir = (owner.qqDir)?.["slice"]?.(0,(-ctx.num(1)));
            owner.step = 0;
            ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            if(ctx.bool(owner.auto == 1))
            {
               owner.auto = 0;
               ctx.graph.goto(((owner.map)?.["player"])?.["player"],(((owner.map)?.["player"])?.["player"])?.["_totalframes"]);
            }
            ctx.clearInterval?.(owner.autoAct);
            owner.autoAct = ctx.setInterval(owner,owner.autoActing,owner.autoTime);
         }
         var tempDepths = ctx.add(ctx.add((ctx.num((ctx.math)?.["round"]?.(((owner.map)?.["player"])?.["_y"]))*ctx.num(10000)),(ctx.num((ctx.math)?.["round"]?.(((owner.map)?.["player"])?.["_x"]))*ctx.num(100))),99);
         ctx.graph.swapDepths((owner.map)?.["player"],tempDepths);
         if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.actKey)))
         {
            var eventShow = 0;
            var i = 0;
            while(ctx.bool(ctx.less(i,((owner.map)?.["events"])?.["length"])))
            {
               if(ctx.bool(ctx.hitTest((owner.map)?.[((owner.map)?.["events"])?.[i]],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true)))
               {
                  eventShow = 1;
                  owner.eventNow = ((owner.map)?.["events"])?.[i];
                  owner.eventNext = "";
                  owner.eventAct = "movie";
                  break;
               }
               ((old)=>(i=old+1,old))(ctx.num(i));
            }
            ctx.trace?.(ctx.add(ctx.add(((owner.map)?.["events"])?.[i],"="),owner[((owner.map)?.["events"])?.[i]]));
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner[((owner.map)?.["events"])?.[i]] != 1:logicalLeft)(eventShow == 1)))
            {
               ctx.trace?.(ctx.add("eventShow=",eventShow));
               switch(((owner.map)?.["events"])?.[i])
               {
                  case "event1":
                     owner.event1 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event2":
                     var tempValue = ctx.add(ctx.add(ctx.add(ctx.add(owner.map1txt0,owner.map1txt3),owner.map1txt5),owner.map1txt7),owner.event1);
                     ctx.trace?.(ctx.add("map1txt7=",owner.map1txt7));
                     ctx.trace?.(ctx.add("tempValue=",tempValue));
                     if(ctx.bool(ctx.less(tempValue,5)))
                     {
                        owner.talk2Obj = 9;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     else
                     {
                        ctx.trace?.("goto");
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNow = ((owner.map)?.["changeMovies"])?.[0];
                        owner.eventNext = ((owner.map)?.["changes"])?.[0];
                        owner.eventAct = "change";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event3":
                     if(ctx.bool(owner.event9 == 1))
                     {
                        owner.talk2Obj = 1;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     else
                     {
                        ctx.setField(owner.map,"changes",["map1","map3","map4","map5","map6"]);
                        owner.event3 = 1;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event4":
                     (owner.getItem)?.["start"]?.();
                     owner.event4 = 1;
                     (owner.itemList)?.["push"]?.("event4");
                     ctx.setField((owner.map)?.["event4mc"],"_visible",0);
                     owner.etShow?.("您得到了改锥");
                     ctx.graph.goto(owner.itemShow,"event4");
                     break;
                  case "event5":
                     (owner.getItem)?.["start"]?.();
                     owner.event5 = 1;
                     (owner.itemList)?.["push"]?.("event5");
                     ctx.setField((owner.map)?.["event5mc"],"_visible",0);
                     owner.etShow?.("您得到了机油");
                     ctx.graph.goto(owner.itemShow,"event5");
                     break;
                  case "event6":
                     owner.event6 = 1;
                     (owner.itemList)?.["push"]?.("event6");
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.getEventShow = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     owner.gamePausing?.();
                     owner.climbDown?.(457,121);
                     break;
                  case "event8":
                     owner.gamePausing?.();
                     owner.climbUp?.(434,286);
                     break;
                  case "event9":
                     owner.event9 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  default:
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
               }
            }
            else
            {
               switch(((owner.map)?.["events"])?.[i])
               {
                  case "event1":
                     owner.talk2Obj = 10;
                     owner.gamePausing?.();
                     owner.talkInit?.();
                     break;
                  case "event3":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.talk2Obj = 2;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     else
                     {
                        owner.talk2Obj = 0;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     break;
                  case "event6":
                     owner.talk2Obj = 1;
                     owner.gamePausing?.();
                     owner.talkInit?.();
               }
            }
            var changeShow = 0;
            var i = 0;
            while(ctx.bool(ctx.less(i,((owner.map)?.["changes"])?.["length"])))
            {
               if(ctx.bool(ctx.hitTest((owner.map)?.[((owner.map)?.["changes"])?.[i]],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true)))
               {
                  changeShow = 1;
                  owner.oldMap = (owner.map)?.["map"];
                  owner.eventNow = ((owner.map)?.["changeMovies"])?.[i];
                  owner.eventNext = ((owner.map)?.["changes"])?.[i];
                  owner.eventAct = "change";
                  break;
               }
               ((old)=>(i=old+1,old))(ctx.num(i));
            }
            ctx.trace?.(changeShow);
            if(ctx.bool(changeShow == 1))
            {
               owner.getEventShow = 0;
               owner.gamePausing?.();
               owner.eventStep = 0;
               ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
               ctx.setField(owner.movie,"_visible",0);
               ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
            }
            var talkAreaShow = 0;
            var i = 0;
            while(ctx.bool(ctx.less(i,((owner.map)?.["talkAreas"])?.["length"])))
            {
               if(ctx.bool(ctx.hitTest((owner.map)?.[((owner.map)?.["talkAreas"])?.[i]],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true)))
               {
                  talkAreaShow = 1;
                  owner.talk2Obj = (((owner.map)?.["talkAreas"])?.[i])?.["substr"]?.(8);
                  break;
               }
               ((old)=>(i=old+1,old))(ctx.num(i));
            }
            ctx.trace?.(talkAreaShow);
            if(ctx.bool(talkAreaShow == 1))
            {
               owner.gamePausing?.();
               owner.talkInit?.();
            }
         }
      }
   });
};
owner.etClear = function(){
   owner.eventTxt = "";
   ctx.clearInterval?.(owner.etTime);
};
owner.etShow = function(etxt){
   ctx.clearInterval?.(owner.etTime);
   owner.eventTxt = etxt;
   owner.etTime = ctx.setInterval(owner,owner.etClear,(ctx.num((etxt)?.["length"])*ctx.num(400)));
};
owner.gamePausing = function(){
   ctx.trace?.("pausing");
   ctx.clearInterval?.(owner.autoAct);
   owner.gamePause = 1;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(((owner.map)?.["player"])?.["player"])?.["_currentframe"] == (((owner.map)?.["player"])?.["player"])?.["_totalframes"]:logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) == "3"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "2"))))
   {
      if(ctx.bool(ctx.less(owner.steps,owner.step)))
      {
         owner.qqDir=ctx.add(owner.qqDir,"2");
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "2")))
      {
         owner.qqDir = ctx.add(owner.oldDir,"2");
      }
      else
      {
         owner.qqDir = ctx.add((owner.qqDir)?.["slice"]?.(0,(-ctx.num(1))),"2");
      }
      owner.oldDir = (owner.qqDir)?.["slice"]?.(0,(-ctx.num(1)));
      owner.step = 0;
      ctx.trace?.(ctx.add("qqdir=",owner.qqDir));
      ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
   }
};
owner.talkInit = function(){
   owner.talkTxts = (owner.map)?.["talkTxts"];
   owner.talkObj = (owner.map)?.["talkObj"];
   owner.talkNext = (owner.map)?.["talkNext"];
   owner.talkDirs = (owner.map)?.["talkDirs"];
   owner.txtDisw = 14;
   owner.txtDish = 14;
   owner.txtLength = 38;
   owner.talkKey = 32;
   owner.txtXmins = [(-ctx.num(135)),(-ctx.num(7)),(-ctx.num(7)),(-ctx.num(135))];
   owner.txtYtemps = [0,0,50,50];
   owner.txtYmins = [(-ctx.num(105)),(-ctx.num(105)),65,65];
   owner.txtOutYa = (-ctx.num(40));
   owner.txtOutSpeed = 5;
   owner.txtW = 10;
   owner.txtH = 4;
   owner.txtDelay = 3;
   owner.talkChecker = {};
   ctx.trace?.(ctx.add("talkObj=",owner.talk2Obj));
   owner.talk2npc?.(owner.talk2Obj);
   ctx.setField(owner.talkChecker,"onKeyDown",function()
   {
      var _loc2_;
      var _loc1_;
      if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.actKey)))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.showAllTxt != 1:logicalLeft)(owner.talking == 1)))
         {
            owner.showAllTxt = 1;
            ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
            owner.txtCount = ctx.bool(owner.ttc != owner.txtCount) ? owner.txtCount : ctx.add(owner.txtCount,1);
            ctx.trace?.((ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(owner.txtCount)/ctx.num(owner.txtLength)),1)))));
            ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
            _loc2_ = owner.txtCount;
            _loc1_ = _loc2_;
            while(ctx.bool(ctx.less(_loc1_,(ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(_loc2_)/ctx.num(owner.txtLength)),1)))))))
            {
               if(ctx.bool((owner.txts)?.[_loc1_] == undefined))
               {
                  break;
               }
               ctx.trace?.(ctx.add("now=",_loc1_));
               owner.txtShow?.(_loc1_);
               _loc1_ = ctx.add(_loc1_,1);
            }
            ctx.trace?.(ctx.add("sc=",_loc2_));
            _loc1_ = (ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.((ctx.num(_loc2_)/ctx.num(owner.txtLength)))));
            while(ctx.bool(ctx.less(_loc1_,(ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(_loc2_)/ctx.num(owner.txtLength)),1)))))))
            {
               if(ctx.bool((owner.txts)?.[_loc1_] == undefined))
               {
                  break;
               }
               ctx.graph.goto(((owner.talker)?.["popup"])?.[ctx.add("talkTxt",_loc1_)],(((owner.talker)?.["popup"])?.[ctx.add("talkTxt",_loc1_)])?.["_totalframes"]);
               _loc1_ = ctx.add(_loc1_,1);
            }
            ctx.trace?.(ctx.add("ftxtCount=",owner.txtCount));
            ((old)=>(owner.txtCount=old+1,old))(ctx.num(owner.txtCount));
            owner.talking = 0;
         }
         else if(ctx.bool(ctx.less(1,(owner.talker)?.["_currentframe"])))
         {
            ctx.trace?.("back");
            (owner.talker)?.["back"]?.();
         }
         else
         {
            ctx.trace?.("talking");
            owner.talk2npc?.(0);
         }
      }
   });
   ctx.setField(owner.talkChecker,"onKeyUp",function()
   {
   });
   (ctx.keys)?.["addListener"]?.(owner.talkChecker);
};
owner.checkTalker = function(){
   owner.showAllTxt = 0;
   ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
   if(ctx.bool(ctx.less(owner.txtCount,(owner.txts)?.["length"])))
   {
      ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
      ctx.graph.goto(owner.talker,"fadeIn",{play:true});
      owner.talking = 1;
   }
   else if(ctx.bool(ctx.less(0,(owner.talkNext)?.[owner.talkCount])))
   {
      owner.talk2npc?.((owner.talkNext)?.[owner.talkCount]);
   }
   else
   {
      (ctx.keys)?.["removeListener"]?.(owner.talkChecker);
      owner.gamePause = 0;
      if(ctx.bool(owner.map2txt5 == 1))
      {
         owner.getEventShow = 0;
         owner.eventNow = "end";
         owner.gamePausing?.();
         owner.eventStep = 0;
         ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
         ctx.setField(owner.movie,"_visible",0);
         ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
      }
   }
};
owner.clearTxts = function(){
   var _loc1_ = owner.txtCount;
   while(ctx.bool(ctx.less(_loc1_,owner.txtLength)))
   {
      ctx.graph.remove(((owner.talker)?.["popup"])?.[ctx.add("talkTxt",_loc1_)]);
      _loc1_ = ctx.add(_loc1_,1);
   }
};
owner.talk2npc = function(count){
   ctx.setField(this,ctx.add(ctx.add((owner.map)?.["map"],"txt"),count),1);
   ctx.trace?.(ctx.add(ctx.add(ctx.add(ctx.add((owner.map)?.["map"],"txt"),count),"="),(this)?.[ctx.add(ctx.add((owner.map)?.["map"],"txt"),count)]));
   owner.talking = 1;
   ctx.trace?.(count);
   ctx.trace?.(ctx.add("JLKJKLJ=",ctx.graph.find((owner.talkObj)?.[count],ctx.root)));
   owner.talkDir = (owner.talkDirs)?.[count];
   owner.txtXmin = (owner.txtXmins)?.[owner.talkDir];
   owner.txtYmin = (owner.txtYmins)?.[owner.talkDir];
   owner.txtYtemp = (owner.txtYtemps)?.[owner.talkDir];
   owner.txtOutY = (ctx.num(owner.txtYmin)-ctx.num(owner.txtOutYa));
   owner.talkTxtNow = (owner.talkTxts)?.[count];
   ctx.setField(owner.talker,"_x",(ctx.graph.find((owner.talkObj)?.[count],ctx.root))?.["_x"]);
   ctx.setField(owner.talker,"_y",ctx.add((ctx.graph.find((owner.talkObj)?.[count],ctx.root))?.["_y"],owner.txtYtemp));
   owner.talkCount = count;
   owner.txtIn?.(owner.talkTxtNow);
   ctx.graph.goto(owner.talker,"fadeIn",{play:true});
};
owner.txtIn = function(txt){
   ctx.trace?.(txt);
   owner.txts = [];
   owner.txts = (txt)?.["split"]?.("");
   owner.txtCount = 0;
   if(ctx.bool(!ctx.bool((owner.txts)?.[owner.txtLength])))
   {
      owner.txtNext = 0;
   }
   else
   {
      owner.txtNext = 1;
   }
};
owner.txtShow = function(tempTxt){
   owner.txtCount = tempTxt;
   var _loc4_ = ctx.add((ctx.num((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))%ctx.num(owner.txtW)))*ctx.num(owner.txtDisw)),owner.txtXmin);
   var _loc3_ = ctx.add((ctx.num((ctx.math)?.["floor"]?.((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))/ctx.num(owner.txtW))))*ctx.num(owner.txtDish)),owner.txtYmin);
   var _loc2_ = ctx.attach((owner.talker)?.["popup"],"talkTxt",ctx.add("talkTxt",owner.txtCount),owner.txtCount);
   ctx.setField(_loc2_,"_x",_loc4_);
   ctx.setField(_loc2_,"_y",_loc3_);
   ctx.setField((_loc2_)?.["txt"],"txt",(owner.txts)?.[owner.txtCount]);
   ctx.trace?.(ctx.add("tc=",owner.txtCount));
   ctx.graph.goto(_loc2_,1,{play:true});
   owner.ttc = owner.txtCount;
   if(ctx.bool(owner.showAllTxt != 1))
   {
      ctx.setField(_loc2_,"onEnterFrame",function()
      {
         if(ctx.bool((this)?.["_currentframe"] == owner.txtDelay))
         {
            if(ctx.bool(owner.showAllTxt != 1))
            {
               ((old)=>(owner.txtCount=old+1,old))(ctx.num(owner.txtCount));
               owner.ttc = owner.txtCount;
            }
            ctx.setField(this,"onEnterFrame",undefined);
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(ctx.num(owner.txtCount)%ctx.num(owner.txtLength)) != 0:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)),owner.txtLength):logicalLeft)((owner.txts)?.[owner.txtCount] != undefined))))
            {
               owner.txtShow?.(owner.txtCount);
            }
            else
            {
               owner.talking = 0;
            }
         }
      });
   }
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c1v1a158(ctx,owner){

   ctx.graph.play(owner);

}

export function c1v1a159(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c1v1a160(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c1v1a161(ctx,owner){

   ctx.stopDrag(owner);

}

export function c1v1a162(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c1v1a163(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c1v1a164(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c1v1a165(ctx,owner){

   ctx.graph.play(owner);

}

export function c1v1a166(ctx,owner){

   ctx.graph.play(owner);

}

export function c1v1a167(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c1v1a168(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c1v1a169(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c1v1a170(ctx,owner){

   if(ctx.bool((owner.parent)?.["gamePause"] == 0))
   {
      (owner.parent)?.["gamePausing"]?.();
      owner.gp = 0;
   }
   else
   {
      owner.gp = 1;
   }
   ctx.graph.goto(owner,"fadeIn");
   ctx.graph.play(owner);

}

export function c1v1a171(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c1v1a172(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c1v1a173(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c1v1a174(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c1v1a175(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c1v1a176(ctx,owner){

   owner._quality = "HIGH";

}

export function c1v1a177(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c1v1a178(ctx,owner){

   owner._quality = "LOW";

}

export function c1v1a179(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c1v1a180(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c1v1a181(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c1v1a182(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c1v1a183(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c1v1a184(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c1v1a185(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v1a186(ctx,owner){
owner.goBack = function(){
   owner.back = 1;
   owner.onEnterFrame = function()
   {
      ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)));
   };
};
owner.onEnterFrame = undefined;
if(ctx.bool(owner.back == 1))
{
   ctx.graph.goto(owner.parent,3);
}
owner.back = 0;

}

export function c1v1a187(ctx,owner){
owner.hit = 1;
ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(10),owner._currentframe),{play:true});

}

export function c1v1a188(ctx,owner){
ctx.graph.goto(((owner.parent)?.["_parent"])?.["flasher"],2,{play:true});

}

export function c1v1a189(ctx,owner){
((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(((owner.parent)?.["_parent"])?.["lifeHurt"]))))((owner.parent)?.["_parent"],"life");

}

export function c1v1a190(ctx,owner){
owner.hit = 0;

}

export function c1v1a191(ctx,owner){
owner.back = 1;
ctx.graph.goto(owner,1);

}

export function c1v1a192(ctx,owner){
ctx.graph.goto(owner,"actHurt");
ctx.graph.play(owner);

}

export function c1v1a193(ctx,owner){
owner.hit = 0;

}

export function c1v1a194(ctx,owner){
owner.back = 1;
ctx.graph.goto(owner,1);

}

export function c1v1a195(ctx,owner){
owner._visible = 0;

}

export function c1v1a196(ctx,owner){
owner.goBack = function(){
   owner.back = 1;
   owner.onEnterFrame = function()
   {
      ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)));
   };
};
owner.onEnterFrame = undefined;
if(ctx.bool(owner.back == 1))
{
   ctx.graph.goto(owner.parent,3);
}
owner.back = 0;

}

export function c1v1a197(ctx,owner){
owner.hit = 1;

}

export function c1v1a198(ctx,owner){
owner.hit = 0;

}

export function c1v1a199(ctx,owner){
owner.goBack?.();

}

export function c1v1a200(ctx,owner){
owner.hit = 0;

}

export function c1v1a201(ctx,owner){
ctx.graph.goto(owner,"actOut");
owner.goBack?.();

}

export function c1v1a202(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a203(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a204(ctx,owner){
ctx.graph.goto(owner,1);

}

export function c1v1a205(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a206(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a207(ctx,owner){
owner.init = function(){
   owner.life = 100;
   owner.lifeHurt = 10;
   owner.timer = 30;
   owner.timeStep = 0.04;
   owner.holes = 5;
   owner.lifeStep = 1.93;
   owner.lifex = (-ctx.num(241));
   var i = 0;
   while(ctx.bool(ctx.less(i,owner.holes)))
   {
      ctx.graph.goto((this)?.[ctx.add("hole",i)],3);
      ((old)=>(i=old+1,old))(ctx.num(i));
   }
   owner.am = {};
   ctx.setField(owner.am,"onMouseMove",function()
   {
      if(ctx.bool((owner.arr)?.["_currentframe"] == 1))
      {
         ctx.setField(owner.arr,"_x",owner._xmouse);
         ctx.setField(owner.arr,"_y",owner._ymouse);
      }
   });
   ctx.setField(owner.am,"onMouseDown",function()
   {
      ctx.trace?.(ctx.add(ctx.add(owner._xmouse,"    "),owner._ymouse));
      if(ctx.bool((owner.arr)?.["_currentframe"] == 1))
      {
         var i = 0;
         while(ctx.bool(ctx.less(i,owner.holes)))
         {
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((ctx.graph.named(owner,ctx.add("hole",i)))?.["hitter"])?.["hit"] == 1:logicalLeft)(ctx.hitTest((ctx.graph.named(owner,ctx.add("hole",i)))?.["hitA"],owner._xmouse,owner._ymouse,false))))
            {
               ctx.graph.goto((ctx.graph.named(owner,ctx.add("hole",i)))?.["hitter"],"actHit",{play:true});
               ctx.graph.goto(owner.arr,2,{play:true});
               if(ctx.bool((ctx.graph.named(owner,ctx.add("hole",i)))?.["_currentframe"] == 2))
               {
                  owner.life=(ctx.num(owner.life)-ctx.num(owner.lifeHurt));
               }
            }
            ((old)=>(i=old+1,old))(ctx.num(i));
         }
      }
   });
   (ctx.mouse)?.["addListener"]?.(owner.am);
   ctx.setField(owner.arr,"_visible",1);
   owner.gamePlay?.();
};
owner.gamePlay = function(){
   owner.onEnterFrame = function()
   {
      owner.timer=(ctx.num(owner.timer)-ctx.num(owner.timeStep));
      owner.timec?.();
      var _loc4_;
      var _loc2_;
      var _loc3_;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.lessEqual(owner.life,0))(ctx.lessEqual(owner.timer,0))))
      {
         ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
         owner.gameOver?.();
      }
      else
      {
         ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
         _loc4_ = ctx.randomInt?.(10);
         if(ctx.bool(ctx.less(7,_loc4_)))
         {
            _loc2_ = ctx.randomInt?.(5);
            _loc3_ = ctx.randomInt?.(10);
            if(ctx.bool(((this)?.[ctx.add("hole",_loc2_)])?.["_currentframe"] == 3))
            {
               if(ctx.bool(ctx.less(6,_loc3_)))
               {
                  ctx.graph.goto((this)?.[ctx.add("hole",_loc2_)],2);
               }
               else
               {
                  ctx.graph.goto((this)?.[ctx.add("hole",_loc2_)],1);
               }
            }
         }
      }
   };
};
owner.gameOver = function(){
   owner.onEnterFrame = undefined;
   var _loc3_ = 0;
   while(ctx.bool(ctx.less(_loc3_,owner.holes)))
   {
      ctx.graph.goto((this)?.[ctx.add("hole",_loc3_)],3);
      _loc3_ = ctx.add(_loc3_,1);
   }
   (ctx.mouse)?.["removeListener"]?.(owner.am);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],"_x",((owner.lifeBar)?.["bar"])?.["_x"]);
   ctx.setField(owner.arr,"_visible",0);
   if(ctx.bool(ctx.less(0,owner.life)))
   {
      ctx.graph.play(owner.parent);
   }
   else
   {
      ctx.graph.goto(((owner.parent)?.["_parent"])?.["_parent"],ctx.add((((owner.parent)?.["_parent"])?.["_parent"])?.["_currentframe"],1));
   }
};
owner.timec = function(){
   ctx.bool(ctx.lessEqual(0,owner.timer)) ? undefined : (owner.timer = 0);
   owner.ss = (ctx.math)?.["floor"]?.(owner.timer);
   owner.ms = (ctx.num((ctx.num(owner.timer)-ctx.num(owner.ss)))*ctx.num(100));
   ctx.bool(ctx.lessEqual(10,owner.ss)) ? undefined : (owner.ss = ctx.add("0",owner.ss));
   ctx.bool(ctx.lessEqual(10,owner.ms)) ? undefined : (owner.ms = ctx.add("0",owner.ms));
   owner.timeShow = ctx.add(ctx.add(owner.ss,":"),owner.ms);
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c1v1a208(ctx,owner){
owner.skipFrame = 469;

}

export function c1v1a209(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["block1"],"goto",{play:true});
ctx.stopAllSounds?.();

}

export function c1v1a210(ctx,owner){
owner.skipFrame = 0;

}

export function c1v1a211(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a212(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"event10",1);

}

export function c1v1a213(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v1a214(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a215(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v1a216(ctx,owner){
ctx.stopAllSounds?.();

}

export function c1v1a217(ctx,owner){

}

export function c1v1a218(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a219(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c1v1a220(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a221(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a222(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a223(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a224(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a225(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a226(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a227(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a228(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a229(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a230(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a231(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a232(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a233(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a234(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a235(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a236(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c1v1a237(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c1v1a238(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a239(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v1a240(ctx,owner){
ctx.stopAllSounds?.();

}

export function c1v1a241(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a242(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c1v1a243(ctx,owner){
owner.back = function(){
   owner.onEnterFrame = function()
   {
      ctx.trace?.(ctx.add("frameNow=",owner._currentframe));
      ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)));
   };
};
ctx.graph.stop(owner);
if(ctx.bool(owner.onEnterFrame))
{
   (owner.parent)?.["checkTalker"]?.();
}
owner.onEnterFrame = undefined;

}

export function c1v1a244(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c1v1a245(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c1v1a246(ctx,owner){

}

export function c1v1a247(ctx,owner){
if(ctx.bool(ctx.lessEqual(ctx.getBytesTotal(owner.parent),ctx.getBytesLoaded(owner.parent))))
{
   owner.totalb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesTotal(owner.parent))/ctx.num(1000)));
   owner.loadb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesLoaded(owner.parent))/ctx.num(1000)));
   ctx.setField(owner.bar,"_xscale",(ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)));
   owner.percentage = ctx.add((ctx.math)?.["round"]?.((ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)))," %");
   owner.totalb = ctx.add(ctx.add(ctx.add(owner.totalb,"kb"),"/r"),"　]");
   owner.loadb = ctx.add(ctx.add(ctx.add(owner.percentage,"　[　"),owner.loadb),"kb/");
   ctx.graph.stop(owner);
   ctx.setField((owner.loading)?.["loading"],"_visible",0);
   ctx.setField((owner.parent)?.["btn"],"_visible",1);
}
else
{
   owner.totalb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesTotal(owner.parent))/ctx.num(1000)));
   owner.loadb = (ctx.math)?.["floor"]?.((ctx.num(ctx.getBytesLoaded(owner.parent))/ctx.num(1000)));
   ctx.setField(owner.bar,"_xscale",(ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)));
   owner.percentage = ctx.add((ctx.math)?.["round"]?.((ctx.num((ctx.num(owner.loadb)/ctx.num(owner.totalb)))*ctx.num(100)))," %");
   owner.totalb = ctx.add(ctx.add(ctx.add(owner.totalb,"kb"),"/r"),"　]");
   owner.loadb = ctx.add(ctx.add(ctx.add(owner.percentage,"　[　"),owner.loadb),"kb/");
}

}

export function c1v1a248(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c1v1a249(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a250(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a251(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c1v1a252(ctx,owner){
owner._visible = 0;
owner.hitted = undefined;
owner.onEnterFrame = function()
{
   if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
   {
      if(ctx.bool(owner.hitted))
      {
         ctx.trace?.("hitted");
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((owner.parent)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((owner.parent)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((owner.parent)?.["player"],"_y");
         owner.oy = ((owner.parent)?.["player"])?.["_y"];
      }
      else
      {
         owner.hitted = 1;
         owner.ox = ((owner.parent)?.["player"])?.["_x"];
         owner.oy = ((owner.parent)?.["player"])?.["_y"];
      }
   }
   else
   {
      owner.hitted = undefined;
   }
};

}

export function c1v1a253(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a254(ctx,owner){
ctx.graph.stop(owner);
owner.onEnterFrame = function()
{
   if(ctx.bool((((owner.parent)?.["_parent"])?.["darkness"])?.["_currentframe"] == 1))
   {
      owner.onEnterFrame = undefined;
      ctx.graph.play(owner);
   }
};

}

export function c1v1a255(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",1);

}

export function c1v1a256(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",0);
ctx.setField(owner.parent,"events",["event3"]);
owner._visible = 0;
ctx.graph.goto((owner.parent)?.["hitter"],1);

}

export function c1v1a257(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a258(ctx,owner){
owner._visible = 0;

}

export function c1v1a259(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a260(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a261(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",0);
ctx.setField(owner.parent,"events",["event7","event8"]);
owner._visible = 0;
ctx.graph.goto((owner.parent)?.["hitter"],1);

}

export function c1v1a262(ctx,owner){
ctx.graph.stop(owner);
owner.onEnterFrame = function()
{
   if(ctx.bool((((owner.parent)?.["_parent"])?.["darkness"])?.["_currentframe"] == 1))
   {
      owner.onEnterFrame = undefined;
      ctx.graph.play(owner);
   }
};

}

export function c1v1a263(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"gamePause",1);

}

export function c1v1a264(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a265(ctx,owner){
owner._visible = 0;

}

export function c1v1a266(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 646;
      owner.appeary = 396;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 572;
      owner.appeary = 182;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 668;
      owner.appeary = 138;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   default:
      owner.appearx = 365;
      owner.appeary = 257;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
owner.map = "map1";
ctx.setField(owner.parent,"beenMap1",1);
ctx.setField(owner.hitter,"_visible",0);
owner.talkTxts = ["哥哥，布袋爷爷交给我一个任务,我不能给你洗衣做饭了…","公事要紧, 你路上要小心啊！早点回来~","好!到时候带礼物给你!","深山精灵，我要走了，照顾好布袋爷爷哦！","我办事，你放心！一路平安！","路上小心哦！要是有机会，帮我买点卸妆液吧，感觉脸上的妆，老是卸不干净。。。","遇到的话就帮你带！88！","要出差么，会不会回来过春节呀？","一定会回来的！","好像还有人没有告别呀。。。","孩子，你要快去快回呀。。。"];
owner.talkObj = ["map.player.point","map.point1","map.player.point","map.player.point","map.point2","map.point3","map.player.point","map.point4","map.player.point","map.player.point","map.point5"];
owner.talkDirs = [1,0,1,3,2,1,0,0,1,1,3];
owner.talkNext = [1,2,0,4,0,6,0,8,0,0,0];
owner.blocks = ["block0","block1","block2","block3","block4","block7","block8","block9"];
owner.talkAreas = ["talkArea0","talkArea3","talkArea5","talkArea7"];
owner.events = ["event1","event2"];
owner.changes = ["map2"];
owner.changeMovies = ["event000"];
owner.blockx = [148,252,371,416,456,151,193,322];
owner.blocky = [307,282,352,220,380,142,356,118];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);
if(ctx.bool(ctx.add((owner.parent)?.["event4"],(owner.parent)?.["event5"]) == 2))
{
   owner.talkAreas = ["talkArea10","talkArea3","talkArea5","talkArea7"];
   ctx.setField(owner.block11,"_visible",0);
}

}

export function c1v1a267(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 505;
owner.appeary = 100;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map6";
ctx.setField(owner.parent,"beenMap6",1);
ctx.setField(owner.hitter,"_visible",0);
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event6"] != 1)((owner.parent)?.["event10"] == 1)))
{
   owner.events = ["event7","event8"];
   ctx.setField(owner.event9,"_visible",0);
}
else
{
   owner.events = ["event7","event8","event9"];
}
owner.changes = ["map2"];
owner.blocks = ["block0","block1"];
owner.changeMovies = ["event000"];
owner.blockx = [642,448];
owner.blocky = [291,359];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event10"] == 1)((owner.parent)?.["event6"] != 1)))
{
   ctx.setField(owner.block1,"_visible",0);
}
else
{
   ctx.graph.goto(owner.hitter,2);
}

}

export function c1v1a268(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map6":
      owner.appearx = 367;
      owner.appeary = 219;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "as2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 541;
      owner.appeary = 237;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 636;
      owner.appeary = 190;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 724;
      owner.appeary = 154;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
      break;
   default:
      owner.appearx = 45;
      owner.appeary = 61;
      owner._temp_10 = owner.parent;
      owner._temp_9 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
owner.map = "map2";
ctx.setField(owner.parent,"beenMap2",1);
ctx.setField(owner.hitter,"_visible",0);
owner.talkTxts = ["呃︿︿︿船上应该有锤子，改锥和机油吧","快把船修好了的好消息告诉船长吧！","修好了？有老鼠在作怪？我怎么没发现！","那我们起航吧！","太好了！","唔……呜……2年了︿︿︿︿我被你们感动了，那么，起航吧！！！"];
owner.talkObj = ["map.point1","map.point2","map.point1","map.player.point","map.point2","map.point1"];
owner.talkDirs = [1,0,1,0,0,1];
owner.talkNext = [0,0,3,4,5,0];
owner.blocks = ["block0","block1","block2"];
owner.talkAreas = [];
owner.events = ["event3","event6"];
owner.changes = ["map1"];
owner.changeMovies = ["event000","event0","event0","event0","event000"];
owner.blockx = [196,434,268];
owner.blocky = [264,269,251];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);
if(ctx.bool((owner.parent)?.["event3"] == 1))
{
   owner.changes = ["map1","map3","map4","map5","map6"];
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event10"] == 1)((owner.parent)?.["event6"] != 1):logicalLeft)(ctx.add((owner.parent)?.["event4"],(owner.parent)?.["event5"]) == 2)))
{
   ctx.setField(owner.block2,"_visible",1);
   ctx.graph.goto(owner.hitter,2);
   owner.events = ["event3","event6"];
}
else
{
   owner.events = ["event3"];
   ctx.setField(owner.block2,"_visible",0);
}

}

export function c1v1a269(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map3";
ctx.setField(owner.parent,"beenMap3",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event4"];
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   ctx.setField(owner.event4mc,"_visible",0);
   ctx.setField(owner.event4,"_visible",0);
   owner.events = [];
}
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["event00"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c1v1a270(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map4";
ctx.setField(owner.parent,"beenMap4",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = [];
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["event00"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c1v1a271(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 640;
owner.appeary = 249;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map5";
ctx.setField(owner.parent,"beenMap5",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event5"];
if(ctx.bool((owner.parent)?.["event5"] == 1))
{
   ctx.setField(owner.event5mc,"_visible",0);
   ctx.setField(owner.event5,"_visible",0);
   owner.events = [];
}
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["event00"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.blocks)?.["length"])))
{
   owner.tempDepths = ctx.add(ctx.add((ctx.num((owner.blocky)?.[owner.i])*ctx.num(10000)),(ctx.num((owner.blockx)?.[owner.i])*ctx.num(100))),owner.i);
   ctx.graph.swapDepths(ctx.graph.named(owner,(owner.blocks)?.[owner.i]),owner.tempDepths);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.events)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.events)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.talkAreas)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.talkAreas)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.changes)?.["length"])))
{
   ctx.setField(ctx.graph.named(owner,(owner.changes)?.[owner.i]),"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c1v1a272(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a273(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c1v1a274(ctx,owner){
owner.draging = function(){
   owner.onEnterFrame = function()
   {
      (owner.bb)?.["setVolume"]?.((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));
      ctx.trace?.((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));
      ctx.trace?.((owner.bb)?.["getVolume"]?.());
      ctx.setField((owner.parent)?.["bar"],"_xscale",ctx.bool(ctx.lessEqual((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)),0)) ? 1 : (ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));
   };
};
owner.bb = ctx.sound(owner);
owner._x = (ctx.num((ctx.num((ctx.num((owner.bb)?.["getVolume"]?.())/ctx.num(100)))*ctx.num(70)))-ctx.num(35));
ctx.setField((owner.parent)?.["bar"],"_xscale",ctx.bool(ctx.lessEqual((ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)),0)) ? 1 : (ctx.num((ctx.num(ctx.add(owner._x,35))/ctx.num(70)))*ctx.num(100)));

}

export function c1v1a275(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c1v1a276(ctx,owner){
owner.listItem = function(){
   var _loc2_ = 0;
   var _loc3_;
   while(ctx.bool(ctx.less(_loc2_,(((owner.parent)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc3_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc2_),_loc2_);
      ctx.setField(_loc3_,"_x",(ctx.num(_loc2_)*ctx.num(36)));
      ctx.graph.goto(_loc3_,(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc2_]);
      ctx.setField(_loc3_,"aim",(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc2_]);
      _loc2_ = ctx.add(_loc2_,1);
   }
};
owner.newKey = function(key2){
   ctx.setField(owner.gkShow,"_visible",1);
   owner.checkKey = {};
   ctx.setField(owner.checkKey,"onKeyDown",function()
   {
      ctx.setField((owner.parent)?.["_parent"],key2,(ctx.keys)?.["getCode"]?.());
      ctx.setField(owner.allShow,key2,(((owner.parent)?.["_parent"])?.["keyCheck"])?.[(ctx.keys)?.["getCode"]?.()]);
      ctx.trace?.((owner.allShow)?.[key2]);
      ctx.setField(owner.gkShow,"_visible",0);
      (ctx.keys)?.["removeListener"]?.(owner.checkKey);
   });
   (ctx.keys)?.["addListener"]?.(owner.checkKey);
};
ctx.setField((owner.lifeBar)?.["bar"],"_x",((((owner.parent)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_x"]);
ctx.setField(owner.gkShow,"_visible",0);
ctx.setField((owner.allShow)?.["hitter"],"_visible",0);
owner.listItem?.();

}

export function c1v1a277(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a278(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a279(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c1v1a280(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c1v1a281(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);

}

export function c1v1a282(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("in");
owner.onEnterFrame = undefined;
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   ctx.graph.goto(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]],1);
   ctx.setField((owner.parent)?.["movie"],"_visible",1);
   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);
}
else
{
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
   {
      ctx.graph.goto(owner,"fadeOut");
      ctx.graph.play(owner);
   }
   else
   {
      ctx.trace?.(ctx.add("getEventShow=",(owner.parent)?.["getEventShow"]));
      if(ctx.bool((owner.parent)?.["getEventShow"] != 1))
      {
         ctx.graph.goto(owner,"fadeOut");
         ctx.graph.play(owner);
      }
      else
      {
         ctx.graph.goto((owner.parent)?.["getEvent"],"fadeIn",{play:true});
      }
   }
}

}

export function c1v1a283(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c1v1a284(ctx,owner){
ctx.trace?.("fadeIn");
ctx.setField((owner.parent)?.["disBtn"],"_visible",1);
ctx.setField((owner.parent)?.["disBtn"],"useHandCursor",0);
(owner.parent)?.["etClear"]?.();
ctx.trace?.(((owner.parent)?.["movie"])?.["_visible"]);
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   owner.onEnterFrame = function()
   {
      ctx.setField((owner.parent)?.["movie"],"_visible",0);
      ctx.graph.goto(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]],1);
   };
}

}

export function c1v1a285(ctx,owner){
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   ctx.graph.stop(owner);
   ctx.setField(owner.parent,"eventStep",1);
   ctx.graph.play(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]]);
   if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
   {
      owner.i = 0;
      while(ctx.bool(ctx.less(owner.i,(((owner.parent)?.["map"])?.["blocks"])?.["length"])))
      {
         ctx.trace?.("remove");
         ctx.graph.swapDepths(((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]],1);
         ctx.graph.remove(((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]]);
         ctx.trace?.(((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]]);
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      ctx.graph.swapDepths(((owner.parent)?.["map"])?.["topBlock"],1);
      ctx.graph.remove(((owner.parent)?.["map"])?.["topBlock"]);
      ctx.graph.swapDepths(((owner.parent)?.["map"])?.["player"],1);
      ctx.graph.remove(((owner.parent)?.["map"])?.["player"]);
   }
   owner.onEnterFrame = function()
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["skipFrame"]):logicalLeft)((ctx.keys)?.["isDown"]?.((owner.parent)?.["actKey"]))))
      {
         ctx.graph.goto(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]],(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["skipFrame"],{play:true});
      }
      if(ctx.bool(ctx.lessEqual((((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["_totalframes"],(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]])?.["_currentframe"])))
      {
         ctx.graph.stop(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]]);
         owner.onEnterFrame = undefined;
         if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
         {
            ctx.graph.goto((owner.parent)?.["map"],(owner.parent)?.["eventNext"]);
         }
         ctx.graph.goto(owner,"fadeIn");
         ctx.graph.play(owner);
      }
   };
}
else
{
   ctx.trace?.("aaa");
   ctx.trace?.((owner.parent)?.["eventStep"]);
   if(ctx.bool((owner.parent)?.["eventAct"] == "change"))
   {
      ctx.graph.goto(((owner.parent)?.["map"])?.["player"],(owner.parent)?.["qqDir"]);
   }
   owner.onEnterFrame = undefined;
   ctx.setField(owner.parent,"gamePause",0);
}

}

export function c1v1a286(ctx,owner){
ctx.trace?.("fadeIn");
ctx.setField((owner.parent)?.["disBtn"],"_visible",1);
ctx.setField((owner.parent)?.["disBtn"],"useHandCursor",0);
(owner.parent)?.["etClear"]?.();
ctx.trace?.(((owner.parent)?.["movie"])?.["_visible"]);
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   owner.onEnterFrame = function()
   {
      ctx.setField((owner.parent)?.["movie"],"_visible",0);
      ctx.graph.goto(((owner.parent)?.["movie"])?.[(owner.parent)?.["eventNow"]],1);
   };
}

}

export function c1v1a287(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a288(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a289(ctx,owner){
owner.fadeOut = function(){
   ctx.clearInterval?.(owner.delay);
   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);
};
ctx.graph.stop(owner);
ctx.setField(owner.parent,"itemList",[]);
((owner.parent)?.["itemList"])?.["push"]?.((owner.parent)?.["itemNow"]);
ctx.graph.goto((owner.parent)?.["itemShow"],(owner.parent)?.["itemNow"]);
owner.delay = ctx.setInterval(owner,owner.fadeOut,(owner.parent)?.["delayTime"]);

}

export function c1v1a290(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c1v1a291(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c1v1a292(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a293(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a294(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a295(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a296(ctx,owner){

}

export function c1v1a297(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a298(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v1a299(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a300(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c1v1a301(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a302(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a303(ctx,owner){
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(1);

}

export function c1v1a304(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);

}

export function c1v1a305(ctx,owner){
ctx.graph.goto(owner,(ctx.num(owner._currentframe)-ctx.num(1)),{play:true});
ctx.stopAllSounds?.();

}

export function c1v1a306(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a307(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c1v1a308(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a309(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a310(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a311(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v1a312(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["block2"],"goto",{play:true});
(((owner.parent)?.["_parent"])?.["getItem"])?.["start"]?.();
((owner.parent)?.["_parent"])?.["etShow"]?.("您得到了锤子");
ctx.graph.goto(((owner.parent)?.["_parent"])?.["itemShow"],"event6");

}

export function c1v1a313(ctx,owner){
ctx.stopAllSounds?.();

}

export function c1v1a314(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c1v1a315(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(owner.btn,"_visible",0);

}

export function c1v1a316(ctx,owner){
ctx.graph.stop(owner);

}

export function c1v1a317(ctx,owner){
owner.init = function(){
   owner.getItem = ctx.sound(owner);
   (owner.getItem)?.["attachSound"]?.("getItem");
   owner.useItem = ctx.sound(owner);
   (owner.useItem)?.["attachSound"]?.("useItem");
   owner.upKey = 38;
   owner.leftKey = 37;
   owner.downKey = 40;
   owner.rightKey = 39;
   owner.actKey = 32;
   owner.keyCheck = [];
   ctx.setField(owner.keyCheck,0,"unknown");
   ctx.setField(owner.keyCheck,1,"鼠标左键");
   ctx.setField(owner.keyCheck,2,"鼠标右键");
   ctx.setField(owner.keyCheck,3,"unknown");
   ctx.setField(owner.keyCheck,4,"鼠标中键");
   ctx.setField(owner.keyCheck,5,"unknown");
   ctx.setField(owner.keyCheck,6,"unknown");
   ctx.setField(owner.keyCheck,7,"unknown");
   ctx.setField(owner.keyCheck,8,"退格");
   ctx.setField(owner.keyCheck,9,"Tab");
   ctx.setField(owner.keyCheck,10,"unknown");
   ctx.setField(owner.keyCheck,11,"unknown");
   ctx.setField(owner.keyCheck,12,"Clear");
   ctx.setField(owner.keyCheck,13,"回车");
   ctx.setField(owner.keyCheck,14,"unknown");
   ctx.setField(owner.keyCheck,15,"unknown");
   ctx.setField(owner.keyCheck,16,"Shift");
   ctx.setField(owner.keyCheck,17,"Ctrl");
   ctx.setField(owner.keyCheck,18,"Alt");
   ctx.setField(owner.keyCheck,19,"Break");
   ctx.setField(owner.keyCheck,20,"Caps");
   ctx.setField(owner.keyCheck,21,"unknown");
   ctx.setField(owner.keyCheck,22,"unknown");
   ctx.setField(owner.keyCheck,23,"unknown");
   ctx.setField(owner.keyCheck,24,"unknown");
   ctx.setField(owner.keyCheck,25,"unknown");
   ctx.setField(owner.keyCheck,26,"unknown");
   ctx.setField(owner.keyCheck,27,"Esc");
   ctx.setField(owner.keyCheck,28,"unknown");
   ctx.setField(owner.keyCheck,29,"unknown");
   ctx.setField(owner.keyCheck,30,"unknown");
   ctx.setField(owner.keyCheck,31,"unknown");
   ctx.setField(owner.keyCheck,32,"空格键");
   ctx.setField(owner.keyCheck,33,"PageUp");
   ctx.setField(owner.keyCheck,34,"PageDn");
   ctx.setField(owner.keyCheck,35,"End");
   ctx.setField(owner.keyCheck,36,"Home");
   ctx.setField(owner.keyCheck,37,"←");
   ctx.setField(owner.keyCheck,38,"↑");
   ctx.setField(owner.keyCheck,39,"→");
   ctx.setField(owner.keyCheck,40,"↓");
   ctx.setField(owner.keyCheck,41,"unknown");
   ctx.setField(owner.keyCheck,42,"unknown");
   ctx.setField(owner.keyCheck,43,"unknown");
   ctx.setField(owner.keyCheck,44,"截图");
   ctx.setField(owner.keyCheck,45,"Insert");
   ctx.setField(owner.keyCheck,46,"删除");
   ctx.setField(owner.keyCheck,47,"Help");
   ctx.setField(owner.keyCheck,48,"0");
   ctx.setField(owner.keyCheck,49,"1");
   ctx.setField(owner.keyCheck,50,"2");
   ctx.setField(owner.keyCheck,51,"3");
   ctx.setField(owner.keyCheck,52,"4");
   ctx.setField(owner.keyCheck,53,"5");
   ctx.setField(owner.keyCheck,54,"6");
   ctx.setField(owner.keyCheck,55,"7");
   ctx.setField(owner.keyCheck,56,"8");
   ctx.setField(owner.keyCheck,57,"9");
   ctx.setField(owner.keyCheck,58,"unknown");
   ctx.setField(owner.keyCheck,59,"unknown");
   ctx.setField(owner.keyCheck,60,"unknown");
   ctx.setField(owner.keyCheck,61,"unknown");
   ctx.setField(owner.keyCheck,62,"unknown");
   ctx.setField(owner.keyCheck,63,"unknown");
   ctx.setField(owner.keyCheck,64,"unknown");
   ctx.setField(owner.keyCheck,65,"A");
   ctx.setField(owner.keyCheck,66,"B");
   ctx.setField(owner.keyCheck,67,"C");
   ctx.setField(owner.keyCheck,68,"D");
   ctx.setField(owner.keyCheck,69,"E");
   ctx.setField(owner.keyCheck,70,"F");
   ctx.setField(owner.keyCheck,71,"G");
   ctx.setField(owner.keyCheck,72,"H");
   ctx.setField(owner.keyCheck,73,"I");
   ctx.setField(owner.keyCheck,74,"J");
   ctx.setField(owner.keyCheck,75,"K");
   ctx.setField(owner.keyCheck,76,"L");
   ctx.setField(owner.keyCheck,77,"M");
   ctx.setField(owner.keyCheck,78,"N");
   ctx.setField(owner.keyCheck,79,"O");
   ctx.setField(owner.keyCheck,80,"P");
   ctx.setField(owner.keyCheck,81,"Q");
   ctx.setField(owner.keyCheck,82,"R");
   ctx.setField(owner.keyCheck,83,"S");
   ctx.setField(owner.keyCheck,84,"T");
   ctx.setField(owner.keyCheck,85,"U");
   ctx.setField(owner.keyCheck,86,"V");
   ctx.setField(owner.keyCheck,87,"W");
   ctx.setField(owner.keyCheck,88,"X");
   ctx.setField(owner.keyCheck,89,"Y");
   ctx.setField(owner.keyCheck,90,"Z");
   ctx.setField(owner.keyCheck,91,"左Win");
   ctx.setField(owner.keyCheck,92,"右Win");
   ctx.setField(owner.keyCheck,93,"弹出菜单");
   ctx.setField(owner.keyCheck,94,"unknown");
   ctx.setField(owner.keyCheck,95,"Sleep");
   ctx.setField(owner.keyCheck,96,"Num 0");
   ctx.setField(owner.keyCheck,97,"Num 1");
   ctx.setField(owner.keyCheck,98,"Num 2");
   ctx.setField(owner.keyCheck,99,"Num 3");
   ctx.setField(owner.keyCheck,100,"Num 4");
   ctx.setField(owner.keyCheck,101,"Num 5");
   ctx.setField(owner.keyCheck,102,"Num 6");
   ctx.setField(owner.keyCheck,103,"Num 7");
   ctx.setField(owner.keyCheck,104,"Num 8");
   ctx.setField(owner.keyCheck,105,"Num 9");
   ctx.setField(owner.keyCheck,106,"Num *");
   ctx.setField(owner.keyCheck,107,"Num +");
   ctx.setField(owner.keyCheck,108,"unknown");
   ctx.setField(owner.keyCheck,109,"Num -");
   ctx.setField(owner.keyCheck,110,"Num .");
   ctx.setField(owner.keyCheck,111,"Num /");
   ctx.setField(owner.keyCheck,112,"F1");
   ctx.setField(owner.keyCheck,113,"F2");
   ctx.setField(owner.keyCheck,114,"F3");
   ctx.setField(owner.keyCheck,115,"F4");
   ctx.setField(owner.keyCheck,116,"F5");
   ctx.setField(owner.keyCheck,117,"F6");
   ctx.setField(owner.keyCheck,118,"F7");
   ctx.setField(owner.keyCheck,119,"F8");
   ctx.setField(owner.keyCheck,120,"F9");
   ctx.setField(owner.keyCheck,121,"F10");
   ctx.setField(owner.keyCheck,122,"F11");
   ctx.setField(owner.keyCheck,123,"F12");
   ctx.setField(owner.keyCheck,124,"F13");
   ctx.setField(owner.keyCheck,125,"F14");
   ctx.setField(owner.keyCheck,126,"F15");
   ctx.setField(owner.keyCheck,127,"unknown");
   ctx.setField(owner.keyCheck,128,"unknown");
   ctx.setField(owner.keyCheck,129,"unknown");
   ctx.setField(owner.keyCheck,130,"unknown");
   ctx.setField(owner.keyCheck,131,"unknown");
   ctx.setField(owner.keyCheck,132,"unknown");
   ctx.setField(owner.keyCheck,133,"unknown");
   ctx.setField(owner.keyCheck,134,"unknown");
   ctx.setField(owner.keyCheck,135,"unknown");
   ctx.setField(owner.keyCheck,136,"unknown");
   ctx.setField(owner.keyCheck,137,"unknown");
   ctx.setField(owner.keyCheck,138,"unknown");
   ctx.setField(owner.keyCheck,139,"unknown");
   ctx.setField(owner.keyCheck,140,"unknown");
   ctx.setField(owner.keyCheck,141,"unknown");
   ctx.setField(owner.keyCheck,142,"unknown");
   ctx.setField(owner.keyCheck,143,"unknown");
   ctx.setField(owner.keyCheck,144,"Numloc");
   ctx.setField(owner.keyCheck,145,"SclLoc");
   ctx.setField(owner.keyCheck,146,"unknown");
   ctx.setField(owner.keyCheck,147,"unknown");
   ctx.setField(owner.keyCheck,148,"unknown");
   ctx.setField(owner.keyCheck,149,"unknown");
   ctx.setField(owner.keyCheck,150,"unknown");
   ctx.setField(owner.keyCheck,151,"unknown");
   ctx.setField(owner.keyCheck,152,"unknown");
   ctx.setField(owner.keyCheck,153,"unknown");
   ctx.setField(owner.keyCheck,154,"unknown");
   ctx.setField(owner.keyCheck,155,"unknown");
   ctx.setField(owner.keyCheck,156,"unknown");
   ctx.setField(owner.keyCheck,157,"unknown");
   ctx.setField(owner.keyCheck,158,"unknown");
   ctx.setField(owner.keyCheck,159,"unknown");
   ctx.setField(owner.keyCheck,160,"左Shift");
   ctx.setField(owner.keyCheck,161,"右Shift");
   ctx.setField(owner.keyCheck,162,"左Ctrl");
   ctx.setField(owner.keyCheck,163,"右Ctrl");
   ctx.setField(owner.keyCheck,164,"左Alt");
   ctx.setField(owner.keyCheck,165,"右Alt");
   ctx.setField(owner.keyCheck,166,"unknown");
   ctx.setField(owner.keyCheck,167,"unknown");
   ctx.setField(owner.keyCheck,168,"unknown");
   ctx.setField(owner.keyCheck,169,"unknown");
   ctx.setField(owner.keyCheck,170,"unknown");
   ctx.setField(owner.keyCheck,171,"unknown");
   ctx.setField(owner.keyCheck,172,"unknown");
   ctx.setField(owner.keyCheck,173,"unknown");
   ctx.setField(owner.keyCheck,174,"unknown");
   ctx.setField(owner.keyCheck,175,"unknown");
   ctx.setField(owner.keyCheck,176,"unknown");
   ctx.setField(owner.keyCheck,177,"unknown");
   ctx.setField(owner.keyCheck,178,"unknown");
   ctx.setField(owner.keyCheck,179,"unknown");
   ctx.setField(owner.keyCheck,180,"unknown");
   ctx.setField(owner.keyCheck,181,"unknown");
   ctx.setField(owner.keyCheck,182,"unknown");
   ctx.setField(owner.keyCheck,183,"unknown");
   ctx.setField(owner.keyCheck,184,"unknown");
   ctx.setField(owner.keyCheck,185,"unknown");
   ctx.setField(owner.keyCheck,186,":;");
   ctx.setField(owner.keyCheck,187,"+=");
   ctx.setField(owner.keyCheck,188,"<,");
   ctx.setField(owner.keyCheck,189,"_-");
   ctx.setField(owner.keyCheck,190,">.");
   ctx.setField(owner.keyCheck,191,"?/");
   ctx.setField(owner.keyCheck,192,"~");
   ctx.setField(owner.keyCheck,193,"unknown");
   ctx.setField(owner.keyCheck,194,"unknown");
   ctx.setField(owner.keyCheck,195,"unknown");
   ctx.setField(owner.keyCheck,196,"unknown");
   ctx.setField(owner.keyCheck,197,"unknown");
   ctx.setField(owner.keyCheck,198,"unknown");
   ctx.setField(owner.keyCheck,199,"unknown");
   ctx.setField(owner.keyCheck,200,"unknown");
   ctx.setField(owner.keyCheck,201,"unknown");
   ctx.setField(owner.keyCheck,202,"unknown");
   ctx.setField(owner.keyCheck,203,"unknown");
   ctx.setField(owner.keyCheck,204,"unknown");
   ctx.setField(owner.keyCheck,205,"unknown");
   ctx.setField(owner.keyCheck,206,"unknown");
   ctx.setField(owner.keyCheck,207,"unknown");
   ctx.setField(owner.keyCheck,208,"unknown");
   ctx.setField(owner.keyCheck,209,"unknown");
   ctx.setField(owner.keyCheck,210,"unknown");
   ctx.setField(owner.keyCheck,211,"unknown");
   ctx.setField(owner.keyCheck,212,"unknown");
   ctx.setField(owner.keyCheck,213,"unknown");
   ctx.setField(owner.keyCheck,214,"unknown");
   ctx.setField(owner.keyCheck,215,"unknown");
   ctx.setField(owner.keyCheck,216,"unknown");
   ctx.setField(owner.keyCheck,217,"unknown");
   ctx.setField(owner.keyCheck,218,"unknown");
   ctx.setField(owner.keyCheck,219,"{[");
   ctx.setField(owner.keyCheck,220,"|");
   ctx.setField(owner.keyCheck,221,"}]");
   ctx.setField(owner.keyCheck,222,"\'");
   ctx.setField(owner.keyCheck,223,"unknown");
   ctx.setField(owner.keyCheck,224,"unknown");
   ctx.setField(owner.keyCheck,225,"unknown");
   ctx.setField(owner.keyCheck,226,"unknown");
   ctx.setField(owner.keyCheck,227,"unknown");
   ctx.setField(owner.keyCheck,228,"unknown");
   ctx.setField(owner.keyCheck,229,"unknown");
   ctx.setField(owner.keyCheck,230,"unknown");
   ctx.setField(owner.keyCheck,231,"unknown");
   ctx.setField(owner.keyCheck,232,"unknown");
   ctx.setField(owner.keyCheck,233,"unknown");
   ctx.setField(owner.keyCheck,234,"unknown");
   ctx.setField(owner.keyCheck,235,"unknown");
   ctx.setField(owner.keyCheck,236,"unknown");
   ctx.setField(owner.keyCheck,237,"unknown");
   ctx.setField(owner.keyCheck,238,"unknown");
   ctx.setField(owner.keyCheck,239,"unknown");
   ctx.setField(owner.keyCheck,240,"unknown");
   ctx.setField(owner.keyCheck,241,"unknown");
   ctx.setField(owner.keyCheck,242,"unknown");
   ctx.setField(owner.keyCheck,243,"unknown");
   ctx.setField(owner.keyCheck,244,"unknown");
   ctx.setField(owner.keyCheck,245,"unknown");
   ctx.setField(owner.keyCheck,246,"unknown");
   ctx.setField(owner.keyCheck,247,"unknown");
   ctx.setField(owner.keyCheck,248,"unknown");
   ctx.setField(owner.keyCheck,249,"unknown");
   ctx.setField(owner.keyCheck,250,"unknown");
   ctx.setField(owner.keyCheck,251,"unknown");
   ctx.setField(owner.keyCheck,252,"unknown");
   ctx.setField(owner.keyCheck,253,"unknown");
   ctx.setField(owner.keyCheck,254,"unknown");
   ctx.setField(owner.keyCheck,255,"附加码");
   owner.autoTime = 5000;
   owner.speed = 5;
   owner.yspeed = owner.xspeed = (ctx.num(owner.speed)/ctx.num(1.414213562373));
   owner.qqDir = "s";
   owner.oldDir = "s";
   owner.step = 0;
   owner.steps = 2;
   owner.auto = 0;
   owner.xp = 22;
   owner.yp = 9;
   owner.playerSex = 2;
   owner.itemList = [];
   owner.delayTime = 2000;
   ctx.setField((owner.itemShow)?.["btn"],"enabled",0);
   owner.oldMap = "";
   owner.event1 = 0;
   owner.event2 = 0;
   owner.event3 = 0;
   owner.event4 = 0;
   owner.event5 = 0;
   owner.event6 = 0;
   owner.event7 = 0;
   owner.event8 = 0;
   owner.event9 = 0;
   owner.event10 = 0;
   ctx.graph.goto(owner.map,"map1");
   owner.onEnterFrame = function()
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(1000,ctx.getBytesTotal(owner.map)):logicalLeft)(ctx.lessEqual(ctx.getBytesTotal(owner.map),ctx.getBytesLoaded(owner.map)))))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(1000,ctx.getBytesTotal((owner.map)?.["player"])):logicalLeft)(ctx.lessEqual(ctx.getBytesTotal((owner.map)?.["player"]),ctx.getBytesLoaded((owner.map)?.["player"])))))
         {
            ctx.setField((owner.map)?.["player"],"_visible",1);
            ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            owner.onEnterFrame = undefined;
            owner.gamePlay?.();
         }
      }
   };
};
owner.climbDown = function(cx,cy){
   owner.aimX = cx;
   owner.aimY = cy;
   owner.tan = (ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(cy))));
   owner.tt = ctx.bool(ctx.lessEqual(cy,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
   owner.degree = ctx.add((ctx.num((ctx.num((ctx.math)?.["atan"]?.(owner.tan))/ctx.num(3.141592653589793)))*ctx.num(180)),owner.tt);
   owner.speedx = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["cos"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   owner.speedy = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["sin"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.less(owner.degree,(-ctx.num(67.5))))(ctx.lessEqual(247.5,owner.degree))))
   {
      ctx.graph.goto((owner.map)?.["player"],"a");
   }
   else if(ctx.bool(ctx.lessEqual(202.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sa");
   }
   else if(ctx.bool(ctx.lessEqual(157.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"s");
   }
   else if(ctx.bool(ctx.lessEqual(112.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sd");
   }
   else if(ctx.bool(ctx.lessEqual(67.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"d");
   }
   else if(ctx.bool(ctx.lessEqual(22.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"wd");
   }
   else if(ctx.bool(ctx.lessEqual((-ctx.num(22.5)),owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"w");
   }
   else
   {
      ctx.graph.goto((owner.map)?.["player"],"wa");
   }
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
   ctx.setField((owner.map)?.["player"],"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))((owner.map)?.["player"],"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedy)))((owner.map)?.["player"],"_y");
      owner.tempDis=(ctx.num(owner.tempDis)-ctx.num(owner.speed));
      if(ctx.bool(ctx.lessEqual(owner.tempDis,0)))
      {
         ctx.setField((owner.map)?.["player"],"onEnterFrame",undefined);
         ctx.setField((owner.map)?.["player"],"_x",(ctx.num(owner.aimX)-ctx.num(24.5)));
         ctx.setField((owner.map)?.["player"],"_y",ctx.add(owner.aimY,150.5));
         ctx.graph.goto((owner.map)?.["player"],"climbDown");
      }
   });
};
owner.climbUp = function(cx,cy){
   owner.aimX = cx;
   owner.aimY = cy;
   owner.tan = (ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(cy))));
   owner.tt = ctx.bool(ctx.lessEqual(cy,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
   owner.degree = ctx.add((ctx.num((ctx.num((ctx.math)?.["atan"]?.(owner.tan))/ctx.num(3.141592653589793)))*ctx.num(180)),owner.tt);
   owner.speedx = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["cos"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   owner.speedy = (ctx.num(owner.speed)*ctx.num((ctx.math)?.["sin"]?.((ctx.num(0.017453292519943295)*ctx.num((ctx.num(owner.degree)-ctx.num(90)))))));
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.less(owner.degree,(-ctx.num(67.5))))(ctx.lessEqual(247.5,owner.degree))))
   {
      ctx.graph.goto((owner.map)?.["player"],"a");
   }
   else if(ctx.bool(ctx.lessEqual(202.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sa");
   }
   else if(ctx.bool(ctx.lessEqual(157.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"s");
   }
   else if(ctx.bool(ctx.lessEqual(112.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"sd");
   }
   else if(ctx.bool(ctx.lessEqual(67.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"d");
   }
   else if(ctx.bool(ctx.lessEqual(22.5,owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"wd");
   }
   else if(ctx.bool(ctx.lessEqual((-ctx.num(22.5)),owner.degree)))
   {
      ctx.graph.goto((owner.map)?.["player"],"w");
   }
   else
   {
      ctx.graph.goto((owner.map)?.["player"],"wa");
   }
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(cx)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(cy)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
   ctx.setField((owner.map)?.["player"],"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))((owner.map)?.["player"],"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedy)))((owner.map)?.["player"],"_y");
      owner.tempDis=(ctx.num(owner.tempDis)-ctx.num(owner.speed));
      if(ctx.bool(ctx.lessEqual(owner.tempDis,0)))
      {
         ctx.setField((owner.map)?.["player"],"onEnterFrame",undefined);
         ctx.setField((owner.map)?.["player"],"_x",ctx.add(owner.aimX,24.5));
         ctx.setField((owner.map)?.["player"],"_y",(ctx.num(owner.aimY)-ctx.num(150.5)));
         ctx.graph.goto((owner.map)?.["player"],"climbUp");
      }
   });
};
owner.autoActing = function(){
   ctx.clearInterval?.(owner.autoAct);
   owner.auto = 1;
   owner.qqDir = ctx.add((owner.qqDir)?.["slice"]?.(0,(-ctx.num(1))),"3");
   ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
};
owner.gamePlay = function(){
   owner.gamePause = 0;
   ctx.trace?.("play");
   ctx.setField(owner.map,"onEnterFrame",function()
   {
      if(ctx.bool(owner.gamePause != 1))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.upKey)))
         {
            if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.leftKey)))
            {
               if(ctx.bool(owner.qqDir != "wa"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "wa";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               }
            }
            else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.rightKey)))
            {
               if(ctx.bool(owner.qqDir != "wd"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "wd";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               }
            }
            else
            {
               if(ctx.bool(owner.qqDir != "w"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "w";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_y");
               }
            }
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.downKey)))
         {
            if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.leftKey)))
            {
               if(ctx.bool(owner.qqDir != "sa"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "sa";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true))(ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               }
            }
            else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.rightKey)))
            {
               if(ctx.bool(owner.qqDir != "sd"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "sd";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.xspeed)))((owner.map)?.["player"],"_x");
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.yspeed)))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true))(ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.xspeed))))((owner.map)?.["player"],"_x");
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.yspeed))))((owner.map)?.["player"],"_y");
               }
            }
            else
            {
               if(ctx.bool(owner.qqDir != "s"))
               {
                  owner.oldDir = owner.qqDir;
                  owner.qqDir = "s";
                  owner.step = 0;
                  ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
               }
               ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_y");
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true))(ctx.hitTest((owner.map)?.["hitter"],((owner.map)?.["player"])?.["_x"],ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true)))))
               {
                  ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_y");
               }
            }
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.leftKey)))
         {
            if(ctx.bool(owner.qqDir != "a"))
            {
               owner.oldDir = owner.qqDir;
               owner.qqDir = "a";
               owner.step = 0;
               ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            }
            ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_x");
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],(ctx.num(((owner.map)?.["player"])?.["_x"])-ctx.num(owner.xp)),((owner.map)?.["player"])?.["_y"],true)))))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_x");
            }
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.rightKey)))
         {
            if(ctx.bool(owner.qqDir != "d"))
            {
               owner.oldDir = owner.qqDir;
               owner.qqDir = "d";
               owner.step = 0;
               ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            }
            ((old)=>(owner.step=old+1,old))(ctx.num(owner.step));
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speed)))((owner.map)?.["player"],"_x");
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),ctx.add(((owner.map)?.["player"])?.["_y"],owner.yp),true))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),(ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(owner.yp)),true))(ctx.hitTest((owner.map)?.["hitter"],ctx.add(((owner.map)?.["player"])?.["_x"],owner.xp),((owner.map)?.["player"])?.["_y"],true)))))
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speed))))((owner.map)?.["player"],"_x");
            }
         }
         else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(((owner.map)?.["player"])?.["player"])?.["_currentframe"] == (((owner.map)?.["player"])?.["player"])?.["_totalframes"]:logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) == "3"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "2"))))
         {
            if(ctx.bool(ctx.less(owner.steps,owner.step)))
            {
               owner.qqDir=ctx.add(owner.qqDir,"2");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "2")))
            {
               owner.qqDir = ctx.add(owner.oldDir,"2");
            }
            else
            {
               owner.qqDir = ctx.add((owner.qqDir)?.["slice"]?.(0,(-ctx.num(1))),"2");
            }
            owner.oldDir = (owner.qqDir)?.["slice"]?.(0,(-ctx.num(1)));
            owner.step = 0;
            ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
            if(ctx.bool(owner.auto == 1))
            {
               owner.auto = 0;
               ctx.graph.goto(((owner.map)?.["player"])?.["player"],(((owner.map)?.["player"])?.["player"])?.["_totalframes"]);
            }
            ctx.clearInterval?.(owner.autoAct);
            owner.autoAct = ctx.setInterval(owner,owner.autoActing,owner.autoTime);
         }
         var tempDepths = ctx.add(ctx.add((ctx.num((ctx.math)?.["round"]?.(((owner.map)?.["player"])?.["_y"]))*ctx.num(10000)),(ctx.num((ctx.math)?.["round"]?.(((owner.map)?.["player"])?.["_x"]))*ctx.num(100))),99);
         ctx.graph.swapDepths((owner.map)?.["player"],tempDepths);
         if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.actKey)))
         {
            var eventShow = 0;
            var i = 0;
            while(ctx.bool(ctx.less(i,((owner.map)?.["events"])?.["length"])))
            {
               if(ctx.bool(ctx.hitTest((owner.map)?.[((owner.map)?.["events"])?.[i]],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true)))
               {
                  eventShow = 1;
                  owner.eventNow = ((owner.map)?.["events"])?.[i];
                  owner.eventNext = "";
                  owner.eventAct = "movie";
                  break;
               }
               ((old)=>(i=old+1,old))(ctx.num(i));
            }
            ctx.trace?.(ctx.add(ctx.add(((owner.map)?.["events"])?.[i],"="),owner[((owner.map)?.["events"])?.[i]]));
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner[((owner.map)?.["events"])?.[i]] != 1:logicalLeft)(eventShow == 1)))
            {
               ctx.trace?.(ctx.add("eventShow=",eventShow));
               switch(((owner.map)?.["events"])?.[i])
               {
                  case "event1":
                     owner.event1 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event2":
                     var tempValue = ctx.add(ctx.add(ctx.add(ctx.add(owner.map1txt0,owner.map1txt3),owner.map1txt5),owner.map1txt7),owner.event1);
                     ctx.trace?.(ctx.add("map1txt7=",owner.map1txt7));
                     ctx.trace?.(ctx.add("tempValue=",tempValue));
                     if(ctx.bool(ctx.less(tempValue,5)))
                     {
                        owner.talk2Obj = 9;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     else
                     {
                        ctx.trace?.("goto");
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNow = ((owner.map)?.["changeMovies"])?.[0];
                        owner.eventNext = ((owner.map)?.["changes"])?.[0];
                        owner.eventAct = "change";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event3":
                     if(ctx.bool(owner.event9 == 1))
                     {
                        owner.talk2Obj = 1;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     else
                     {
                        ctx.setField(owner.map,"changes",["map1","map3","map4","map5","map6"]);
                        owner.event3 = 1;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event4":
                     (owner.getItem)?.["start"]?.();
                     owner.event4 = 1;
                     (owner.itemList)?.["push"]?.("event4");
                     ctx.setField((owner.map)?.["event4mc"],"_visible",0);
                     owner.etShow?.("您得到了改锥");
                     ctx.graph.goto(owner.itemShow,"event4");
                     break;
                  case "event5":
                     (owner.getItem)?.["start"]?.();
                     owner.event5 = 1;
                     (owner.itemList)?.["push"]?.("event5");
                     ctx.setField((owner.map)?.["event5mc"],"_visible",0);
                     owner.etShow?.("您得到了机油");
                     ctx.graph.goto(owner.itemShow,"event5");
                     break;
                  case "event6":
                     owner.event6 = 1;
                     (owner.itemList)?.["push"]?.("event6");
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.getEventShow = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     owner.gamePausing?.();
                     owner.climbDown?.(457,121);
                     break;
                  case "event8":
                     owner.gamePausing?.();
                     owner.climbUp?.(434,286);
                     break;
                  case "event9":
                     owner.event9 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  default:
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
               }
            }
            else
            {
               switch(((owner.map)?.["events"])?.[i])
               {
                  case "event1":
                     owner.talk2Obj = 10;
                     owner.gamePausing?.();
                     owner.talkInit?.();
                     break;
                  case "event3":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.talk2Obj = 2;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     else
                     {
                        owner.talk2Obj = 0;
                        owner.gamePausing?.();
                        owner.talkInit?.();
                     }
                     break;
                  case "event6":
                     owner.talk2Obj = 1;
                     owner.gamePausing?.();
                     owner.talkInit?.();
               }
            }
            var changeShow = 0;
            var i = 0;
            while(ctx.bool(ctx.less(i,((owner.map)?.["changes"])?.["length"])))
            {
               if(ctx.bool(ctx.hitTest((owner.map)?.[((owner.map)?.["changes"])?.[i]],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true)))
               {
                  changeShow = 1;
                  owner.oldMap = (owner.map)?.["map"];
                  owner.eventNow = ((owner.map)?.["changeMovies"])?.[i];
                  owner.eventNext = ((owner.map)?.["changes"])?.[i];
                  owner.eventAct = "change";
                  break;
               }
               ((old)=>(i=old+1,old))(ctx.num(i));
            }
            ctx.trace?.(changeShow);
            if(ctx.bool(changeShow == 1))
            {
               owner.getEventShow = 0;
               owner.gamePausing?.();
               owner.eventStep = 0;
               ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
               ctx.setField(owner.movie,"_visible",0);
               ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
            }
            var talkAreaShow = 0;
            var i = 0;
            while(ctx.bool(ctx.less(i,((owner.map)?.["talkAreas"])?.["length"])))
            {
               if(ctx.bool(ctx.hitTest((owner.map)?.[((owner.map)?.["talkAreas"])?.[i]],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true)))
               {
                  talkAreaShow = 1;
                  owner.talk2Obj = (((owner.map)?.["talkAreas"])?.[i])?.["substr"]?.(8);
                  break;
               }
               ((old)=>(i=old+1,old))(ctx.num(i));
            }
            ctx.trace?.(talkAreaShow);
            if(ctx.bool(talkAreaShow == 1))
            {
               owner.gamePausing?.();
               owner.talkInit?.();
            }
         }
      }
   });
};
owner.etClear = function(){
   owner.eventTxt = "";
   ctx.clearInterval?.(owner.etTime);
};
owner.etShow = function(etxt){
   ctx.clearInterval?.(owner.etTime);
   owner.eventTxt = etxt;
   owner.etTime = ctx.setInterval(owner,owner.etClear,(ctx.num((etxt)?.["length"])*ctx.num(400)));
};
owner.gamePausing = function(){
   ctx.trace?.("pausing");
   ctx.clearInterval?.(owner.autoAct);
   owner.gamePause = 1;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(((owner.map)?.["player"])?.["player"])?.["_currentframe"] == (((owner.map)?.["player"])?.["player"])?.["_totalframes"]:logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) == "3"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.qqDir)?.["substr"]?.((-ctx.num(1))) != "2"))))
   {
      if(ctx.bool(ctx.less(owner.steps,owner.step)))
      {
         owner.qqDir=ctx.add(owner.qqDir,"2");
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "2")))
      {
         owner.qqDir = ctx.add(owner.oldDir,"2");
      }
      else
      {
         owner.qqDir = ctx.add((owner.qqDir)?.["slice"]?.(0,(-ctx.num(1))),"2");
      }
      owner.oldDir = (owner.qqDir)?.["slice"]?.(0,(-ctx.num(1)));
      owner.step = 0;
      ctx.trace?.(ctx.add("qqdir=",owner.qqDir));
      ctx.graph.goto((owner.map)?.["player"],owner.qqDir);
   }
};
owner.talkInit = function(){
   owner.talkTxts = (owner.map)?.["talkTxts"];
   owner.talkObj = (owner.map)?.["talkObj"];
   owner.talkNext = (owner.map)?.["talkNext"];
   owner.talkDirs = (owner.map)?.["talkDirs"];
   owner.txtDisw = 14;
   owner.txtDish = 14;
   owner.txtLength = 38;
   owner.talkKey = 32;
   owner.txtXmins = [(-ctx.num(135)),(-ctx.num(7)),(-ctx.num(7)),(-ctx.num(135))];
   owner.txtYtemps = [0,0,50,50];
   owner.txtYmins = [(-ctx.num(105)),(-ctx.num(105)),65,65];
   owner.txtOutYa = (-ctx.num(40));
   owner.txtOutSpeed = 5;
   owner.txtW = 10;
   owner.txtH = 4;
   owner.txtDelay = 3;
   owner.talkChecker = {};
   ctx.trace?.(ctx.add("talkObj=",owner.talk2Obj));
   owner.talk2npc?.(owner.talk2Obj);
   ctx.setField(owner.talkChecker,"onKeyDown",function()
   {
      var _loc2_;
      var _loc1_;
      if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.actKey)))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.showAllTxt != 1:logicalLeft)(owner.talking == 1)))
         {
            owner.showAllTxt = 1;
            ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
            owner.txtCount = ctx.bool(owner.ttc != owner.txtCount) ? owner.txtCount : ctx.add(owner.txtCount,1);
            ctx.trace?.((ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(owner.txtCount)/ctx.num(owner.txtLength)),1)))));
            ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
            _loc2_ = owner.txtCount;
            _loc1_ = _loc2_;
            while(ctx.bool(ctx.less(_loc1_,(ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(_loc2_)/ctx.num(owner.txtLength)),1)))))))
            {
               if(ctx.bool((owner.txts)?.[_loc1_] == undefined))
               {
                  break;
               }
               ctx.trace?.(ctx.add("now=",_loc1_));
               owner.txtShow?.(_loc1_);
               _loc1_ = ctx.add(_loc1_,1);
            }
            ctx.trace?.(ctx.add("sc=",_loc2_));
            _loc1_ = (ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.((ctx.num(_loc2_)/ctx.num(owner.txtLength)))));
            while(ctx.bool(ctx.less(_loc1_,(ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(_loc2_)/ctx.num(owner.txtLength)),1)))))))
            {
               if(ctx.bool((owner.txts)?.[_loc1_] == undefined))
               {
                  break;
               }
               ctx.graph.goto(((owner.talker)?.["popup"])?.[ctx.add("talkTxt",_loc1_)],(((owner.talker)?.["popup"])?.[ctx.add("talkTxt",_loc1_)])?.["_totalframes"]);
               _loc1_ = ctx.add(_loc1_,1);
            }
            ctx.trace?.(ctx.add("ftxtCount=",owner.txtCount));
            ((old)=>(owner.txtCount=old+1,old))(ctx.num(owner.txtCount));
            owner.talking = 0;
         }
         else if(ctx.bool(ctx.less(1,(owner.talker)?.["_currentframe"])))
         {
            ctx.trace?.("back");
            (owner.talker)?.["back"]?.();
         }
         else
         {
            ctx.trace?.("talking");
            owner.talk2npc?.(0);
         }
      }
   });
   ctx.setField(owner.talkChecker,"onKeyUp",function()
   {
   });
   (ctx.keys)?.["addListener"]?.(owner.talkChecker);
};
owner.checkTalker = function(){
   owner.showAllTxt = 0;
   ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
   if(ctx.bool(ctx.less(owner.txtCount,(owner.txts)?.["length"])))
   {
      ctx.trace?.(ctx.add("txtCount=",owner.txtCount));
      ctx.graph.goto(owner.talker,"fadeIn",{play:true});
      owner.talking = 1;
   }
   else if(ctx.bool(ctx.less(0,(owner.talkNext)?.[owner.talkCount])))
   {
      owner.talk2npc?.((owner.talkNext)?.[owner.talkCount]);
   }
   else
   {
      (ctx.keys)?.["removeListener"]?.(owner.talkChecker);
      owner.gamePause = 0;
      if(ctx.bool(owner.map2txt5 == 1))
      {
         owner.getEventShow = 0;
         owner.eventNow = "end";
         owner.gamePausing?.();
         owner.eventStep = 0;
         ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
         ctx.setField(owner.movie,"_visible",0);
         ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
      }
   }
};
owner.clearTxts = function(){
   var _loc1_ = owner.txtCount;
   while(ctx.bool(ctx.less(_loc1_,owner.txtLength)))
   {
      ctx.graph.remove(((owner.talker)?.["popup"])?.[ctx.add("talkTxt",_loc1_)]);
      _loc1_ = ctx.add(_loc1_,1);
   }
};
owner.talk2npc = function(count){
   ctx.setField(this,ctx.add(ctx.add((owner.map)?.["map"],"txt"),count),1);
   ctx.trace?.(ctx.add(ctx.add(ctx.add(ctx.add((owner.map)?.["map"],"txt"),count),"="),(this)?.[ctx.add(ctx.add((owner.map)?.["map"],"txt"),count)]));
   owner.talking = 1;
   ctx.trace?.(count);
   ctx.trace?.(ctx.add("JLKJKLJ=",ctx.graph.find((owner.talkObj)?.[count],ctx.root)));
   owner.talkDir = (owner.talkDirs)?.[count];
   owner.txtXmin = (owner.txtXmins)?.[owner.talkDir];
   owner.txtYmin = (owner.txtYmins)?.[owner.talkDir];
   owner.txtYtemp = (owner.txtYtemps)?.[owner.talkDir];
   owner.txtOutY = (ctx.num(owner.txtYmin)-ctx.num(owner.txtOutYa));
   owner.talkTxtNow = (owner.talkTxts)?.[count];
   ctx.setField(owner.talker,"_x",(ctx.graph.find((owner.talkObj)?.[count],ctx.root))?.["_x"]);
   ctx.setField(owner.talker,"_y",ctx.add((ctx.graph.find((owner.talkObj)?.[count],ctx.root))?.["_y"],owner.txtYtemp));
   owner.talkCount = count;
   owner.txtIn?.(owner.talkTxtNow);
   ctx.graph.goto(owner.talker,"fadeIn",{play:true});
};
owner.txtIn = function(txt){
   ctx.trace?.(txt);
   owner.txts = [];
   owner.txts = (txt)?.["split"]?.("");
   owner.txtCount = 0;
   if(ctx.bool(!ctx.bool((owner.txts)?.[owner.txtLength])))
   {
      owner.txtNext = 0;
   }
   else
   {
      owner.txtNext = 1;
   }
};
owner.txtShow = function(tempTxt){
   owner.txtCount = tempTxt;
   var _loc4_ = ctx.add((ctx.num((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))%ctx.num(owner.txtW)))*ctx.num(owner.txtDisw)),owner.txtXmin);
   var _loc3_ = ctx.add((ctx.num((ctx.math)?.["floor"]?.((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))/ctx.num(owner.txtW))))*ctx.num(owner.txtDish)),owner.txtYmin);
   var _loc2_ = ctx.attach((owner.talker)?.["popup"],"talkTxt",ctx.add("talkTxt",owner.txtCount),owner.txtCount);
   ctx.setField(_loc2_,"_x",_loc4_);
   ctx.setField(_loc2_,"_y",_loc3_);
   ctx.setField((_loc2_)?.["txt"],"txt",(owner.txts)?.[owner.txtCount]);
   ctx.trace?.(ctx.add("tc=",owner.txtCount));
   ctx.graph.goto(_loc2_,1,{play:true});
   owner.ttc = owner.txtCount;
   if(ctx.bool(owner.showAllTxt != 1))
   {
      ctx.setField(_loc2_,"onEnterFrame",function()
      {
         if(ctx.bool((this)?.["_currentframe"] == owner.txtDelay))
         {
            if(ctx.bool(owner.showAllTxt != 1))
            {
               ((old)=>(owner.txtCount=old+1,old))(ctx.num(owner.txtCount));
               owner.ttc = owner.txtCount;
            }
            ctx.setField(this,"onEnterFrame",undefined);
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(ctx.num(owner.txtCount)%ctx.num(owner.txtLength)) != 0:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)),owner.txtLength):logicalLeft)((owner.txts)?.[owner.txtCount] != undefined))))
            {
               owner.txtShow?.(owner.txtCount);
            }
            else
            {
               owner.talking = 0;
            }
         }
      });
   }
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export const variant0={sourceBytes:4530744,frames:{"3":{"1":(ctx,owner)=>{c1v0a116.call(owner,ctx,owner);}},"16":{"1":(ctx,owner)=>{c1v0a52.call(owner,ctx,owner);}},"26":{"1":(ctx,owner)=>{c1v0a86.call(owner,ctx,owner);}},"35":{"1":(ctx,owner)=>{c1v0a112.call(owner,ctx,owner);}},"36":{"1":(ctx,owner)=>{c1v0a113.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a114.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v0a115.call(owner,ctx,owner);}},"43":{"1":(ctx,owner)=>{c1v0a136.call(owner,ctx,owner);}},"50":{"1":(ctx,owner)=>{c1v0a140.call(owner,ctx,owner);}},"55":{"1":(ctx,owner)=>{c1v0a141.call(owner,ctx,owner);}},"56":{"1":(ctx,owner)=>{c1v0a142.call(owner,ctx,owner);}},"64":{"1":(ctx,owner)=>{c1v0a143.call(owner,ctx,owner);}},"72":{"1":(ctx,owner)=>{c1v0a150.call(owner,ctx,owner);}},"80":{"1":(ctx,owner)=>{c1v0a151.call(owner,ctx,owner);}},"81":{"1":(ctx,owner)=>{c1v0a152.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a153.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v0a154.call(owner,ctx,owner);}},"126":{"1":(ctx,owner)=>{c1v0a30.call(owner,ctx,owner);}},"159":{"1":(ctx,owner)=>{c1v0a51.call(owner,ctx,owner);}},"401":{"1":(ctx,owner)=>{c1v0a117.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v0a118.call(owner,ctx,owner);},"37":(ctx,owner)=>{c1v0a123.call(owner,ctx,owner);},"58":(ctx,owner)=>{c1v0a124.call(owner,ctx,owner);},"82":(ctx,owner)=>{c1v0a125.call(owner,ctx,owner);},"118":(ctx,owner)=>{c1v0a119.call(owner,ctx,owner);c1v0a120.call(owner,ctx,owner);},"129":(ctx,owner)=>{c1v0a121.call(owner,ctx,owner);},"133":(ctx,owner)=>{c1v0a122.call(owner,ctx,owner);}},"403":{"1":(ctx,owner)=>{c1v0a126.call(owner,ctx,owner);}},"413":{"1":(ctx,owner)=>{c1v0a127.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a129.call(owner,ctx,owner);},"10":(ctx,owner)=>{c1v0a128.call(owner,ctx,owner);},"25":(ctx,owner)=>{c1v0a130.call(owner,ctx,owner);},"47":(ctx,owner)=>{c1v0a131.call(owner,ctx,owner);},"58":(ctx,owner)=>{c1v0a132.call(owner,ctx,owner);}},"416":{"1":(ctx,owner)=>{c1v0a133.call(owner,ctx,owner);}},"418":{"1":(ctx,owner)=>{c1v0a134.call(owner,ctx,owner);},"7":(ctx,owner)=>{c1v0a135.call(owner,ctx,owner);}},"430":{"1":(ctx,owner)=>{c1v0a137.call(owner,ctx,owner);}},"432":{"1":(ctx,owner)=>{c1v0a138.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a139.call(owner,ctx,owner);}},"706":{"1":(ctx,owner)=>{c1v0a144.call(owner,ctx,owner);},"499":(ctx,owner)=>{c1v0a146.call(owner,ctx,owner);},"526":(ctx,owner)=>{c1v0a147.call(owner,ctx,owner);},"527":(ctx,owner)=>{c1v0a148.call(owner,ctx,owner);},"552":(ctx,owner)=>{c1v0a149.call(owner,ctx,owner);},"1038":(ctx,owner)=>{c1v0a145.call(owner,ctx,owner);}},"1007":{"1":(ctx,owner)=>{c1v0a27.call(owner,ctx,owner);},"967":(ctx,owner)=>{c1v0a28.call(owner,ctx,owner);c1v0a29.call(owner,ctx,owner);}},"1320":{"1":(ctx,owner)=>{c1v0a31.call(owner,ctx,owner);},"1297":(ctx,owner)=>{c1v0a32.call(owner,ctx,owner);}},"1325":{"1":(ctx,owner)=>{c1v0a33.call(owner,ctx,owner);},"7":(ctx,owner)=>{c1v0a34.call(owner,ctx,owner);}},"1337":{"1":(ctx,owner)=>{c1v0a35.call(owner,ctx,owner);}},"1436":{"9":(ctx,owner)=>{c1v0a36.call(owner,ctx,owner);}},"1444":{"9":(ctx,owner)=>{c1v0a37.call(owner,ctx,owner);}},"1449":{"9":(ctx,owner)=>{c1v0a38.call(owner,ctx,owner);}},"1454":{"9":(ctx,owner)=>{c1v0a39.call(owner,ctx,owner);}},"1459":{"9":(ctx,owner)=>{c1v0a40.call(owner,ctx,owner);}},"1468":{"9":(ctx,owner)=>{c1v0a41.call(owner,ctx,owner);}},"1473":{"9":(ctx,owner)=>{c1v0a42.call(owner,ctx,owner);}},"1482":{"9":(ctx,owner)=>{c1v0a43.call(owner,ctx,owner);}},"1495":{"26":(ctx,owner)=>{c1v0a44.call(owner,ctx,owner);}},"1510":{"28":(ctx,owner)=>{c1v0a45.call(owner,ctx,owner);}},"1525":{"34":(ctx,owner)=>{c1v0a46.call(owner,ctx,owner);}},"1540":{"34":(ctx,owner)=>{c1v0a47.call(owner,ctx,owner);}},"1554":{"32":(ctx,owner)=>{c1v0a48.call(owner,ctx,owner);}},"1571":{"24":(ctx,owner)=>{c1v0a49.call(owner,ctx,owner);}},"1585":{"32":(ctx,owner)=>{c1v0a50.call(owner,ctx,owner);}},"1601":{"24":(ctx,owner)=>{c1v0a53.call(owner,ctx,owner);}},"1627":{"54":(ctx,owner)=>{c1v0a54.call(owner,ctx,owner);}},"1644":{"54":(ctx,owner)=>{c1v0a55.call(owner,ctx,owner);}},"1645":{"1":(ctx,owner)=>{c1v0a56.call(owner,ctx,owner);}},"1948":{"1":(ctx,owner)=>{c1v0a57.call(owner,ctx,owner);},"1396":(ctx,owner)=>{c1v0a58.call(owner,ctx,owner);}},"2228":{"1232":(ctx,owner)=>{c1v0a59.call(owner,ctx,owner);},"1233":(ctx,owner)=>{c1v0a60.call(owner,ctx,owner);},"1234":(ctx,owner)=>{c1v0a61.call(owner,ctx,owner);}},"2238":{"1":(ctx,owner)=>{c1v0a62.call(owner,ctx,owner);}},"2241":{"1":(ctx,owner)=>{c1v0a63.call(owner,ctx,owner);}},"2242":{"1":(ctx,owner)=>{c1v0a64.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v0a65.call(owner,ctx,owner);}},"2245":{"1":(ctx,owner)=>{c1v0a66.call(owner,ctx,owner);}},"2246":{"1":(ctx,owner)=>{c1v0a67.call(owner,ctx,owner);}},"2304":{"1":(ctx,owner)=>{c1v0a68.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a69.call(owner,ctx,owner);}},"2341":{"1":(ctx,owner)=>{c1v0a70.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a72.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v0a71.call(owner,ctx,owner);}},"2416":{"1":(ctx,owner)=>{c1v0a73.call(owner,ctx,owner);}},"2447":{"1":(ctx,owner)=>{c1v0a74.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v0a75.call(owner,ctx,owner);},"4":(ctx,owner)=>{c1v0a76.call(owner,ctx,owner);},"41":(ctx,owner)=>{c1v0a77.call(owner,ctx,owner);}},"2465":{"1":(ctx,owner)=>{c1v0a78.call(owner,ctx,owner);}},"2466":{"1":(ctx,owner)=>{c1v0a79.call(owner,ctx,owner);}},"2592":{"1":(ctx,owner)=>{c1v0a80.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v0a82.call(owner,ctx,owner);},"4":(ctx,owner)=>{c1v0a83.call(owner,ctx,owner);},"112":(ctx,owner)=>{c1v0a81.call(owner,ctx,owner);}},"2595":{"1":(ctx,owner)=>{c1v0a84.call(owner,ctx,owner);}},"2597":{"1":(ctx,owner)=>{c1v0a85.call(owner,ctx,owner);}},"2630":{"1":(ctx,owner)=>{c1v0a87.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v0a89.call(owner,ctx,owner);},"5":(ctx,owner)=>{c1v0a90.call(owner,ctx,owner);},"7":(ctx,owner)=>{c1v0a91.call(owner,ctx,owner);},"9":(ctx,owner)=>{c1v0a92.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v0a88.call(owner,ctx,owner);}},"2689":{"1":(ctx,owner)=>{c1v0a93.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a94.call(owner,ctx,owner);}},"2715":{"1":(ctx,owner)=>{c1v0a95.call(owner,ctx,owner);}},"2728":{"1":(ctx,owner)=>{c1v0a96.call(owner,ctx,owner);}},"2729":{"1":(ctx,owner)=>{c1v0a97.call(owner,ctx,owner);}},"2730":{"1":(ctx,owner)=>{c1v0a98.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a100.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v0a99.call(owner,ctx,owner);},"20":(ctx,owner)=>{c1v0a101.call(owner,ctx,owner);}},"2736":{"1":(ctx,owner)=>{c1v0a102.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a105.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v0a103.call(owner,ctx,owner);},"12":(ctx,owner)=>{c1v0a104.call(owner,ctx,owner);},"20":(ctx,owner)=>{c1v0a106.call(owner,ctx,owner);}},"2742":{"1":(ctx,owner)=>{c1v0a107.call(owner,ctx,owner);}},"2743":{"1":(ctx,owner)=>{c1v0a108.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a110.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v0a109.call(owner,ctx,owner);},"20":(ctx,owner)=>{c1v0a111.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c1v0a155.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v0a156.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v0a157.call(owner,ctx,owner);}}},frameActions:{"3":{"1":[c1v0a116]},"16":{"1":[c1v0a52]},"26":{"1":[c1v0a86]},"35":{"1":[c1v0a112]},"36":{"1":[c1v0a113],"2":[c1v0a114],"3":[c1v0a115]},"43":{"1":[c1v0a136]},"50":{"1":[c1v0a140]},"55":{"1":[c1v0a141]},"56":{"1":[c1v0a142]},"64":{"1":[c1v0a143]},"72":{"1":[c1v0a150]},"80":{"1":[c1v0a151]},"81":{"1":[c1v0a152],"2":[c1v0a153],"3":[c1v0a154]},"126":{"1":[c1v0a30]},"159":{"1":[c1v0a51]},"401":{"1":[c1v0a117],"11":[c1v0a118],"37":[c1v0a123],"58":[c1v0a124],"82":[c1v0a125],"118":[c1v0a119,c1v0a120],"129":[c1v0a121],"133":[c1v0a122]},"403":{"1":[c1v0a126]},"413":{"1":[c1v0a127],"2":[c1v0a129],"10":[c1v0a128],"25":[c1v0a130],"47":[c1v0a131],"58":[c1v0a132]},"416":{"1":[c1v0a133]},"418":{"1":[c1v0a134],"7":[c1v0a135]},"430":{"1":[c1v0a137]},"432":{"1":[c1v0a138],"2":[c1v0a139]},"706":{"1":[c1v0a144],"499":[c1v0a146],"526":[c1v0a147],"527":[c1v0a148],"552":[c1v0a149],"1038":[c1v0a145]},"1007":{"1":[c1v0a27],"967":[c1v0a28,c1v0a29]},"1320":{"1":[c1v0a31],"1297":[c1v0a32]},"1325":{"1":[c1v0a33],"7":[c1v0a34]},"1337":{"1":[c1v0a35]},"1436":{"9":[c1v0a36]},"1444":{"9":[c1v0a37]},"1449":{"9":[c1v0a38]},"1454":{"9":[c1v0a39]},"1459":{"9":[c1v0a40]},"1468":{"9":[c1v0a41]},"1473":{"9":[c1v0a42]},"1482":{"9":[c1v0a43]},"1495":{"26":[c1v0a44]},"1510":{"28":[c1v0a45]},"1525":{"34":[c1v0a46]},"1540":{"34":[c1v0a47]},"1554":{"32":[c1v0a48]},"1571":{"24":[c1v0a49]},"1585":{"32":[c1v0a50]},"1601":{"24":[c1v0a53]},"1627":{"54":[c1v0a54]},"1644":{"54":[c1v0a55]},"1645":{"1":[c1v0a56]},"1948":{"1":[c1v0a57],"1396":[c1v0a58]},"2228":{"1232":[c1v0a59],"1233":[c1v0a60],"1234":[c1v0a61]},"2238":{"1":[c1v0a62]},"2241":{"1":[c1v0a63]},"2242":{"1":[c1v0a64],"11":[c1v0a65]},"2245":{"1":[c1v0a66]},"2246":{"1":[c1v0a67]},"2304":{"1":[c1v0a68],"2":[c1v0a69]},"2341":{"1":[c1v0a70],"2":[c1v0a72],"11":[c1v0a71]},"2416":{"1":[c1v0a73]},"2447":{"1":[c1v0a74],"3":[c1v0a75],"4":[c1v0a76],"41":[c1v0a77]},"2465":{"1":[c1v0a78]},"2466":{"1":[c1v0a79]},"2592":{"1":[c1v0a80],"3":[c1v0a82],"4":[c1v0a83],"112":[c1v0a81]},"2595":{"1":[c1v0a84]},"2597":{"1":[c1v0a85]},"2630":{"1":[c1v0a87],"3":[c1v0a89],"5":[c1v0a90],"7":[c1v0a91],"9":[c1v0a92],"11":[c1v0a88]},"2689":{"1":[c1v0a93],"2":[c1v0a94]},"2715":{"1":[c1v0a95]},"2728":{"1":[c1v0a96]},"2729":{"1":[c1v0a97]},"2730":{"1":[c1v0a98],"2":[c1v0a100],"11":[c1v0a99],"20":[c1v0a101]},"2736":{"1":[c1v0a102],"2":[c1v0a105],"11":[c1v0a103],"12":[c1v0a104],"20":[c1v0a106]},"2742":{"1":[c1v0a107]},"2743":{"1":[c1v0a108],"2":[c1v0a110],"11":[c1v0a109],"20":[c1v0a111]},"main":{"1":[c1v0a155],"2":[c1v0a156],"3":[c1v0a157]}},buttons:{"358":{"release":(ctx,owner)=>{c1v0a26.call(owner,ctx,owner);}},"2231":{"release":(ctx,owner)=>{c1v0a0.call(owner,ctx,owner);}},"2266":{"press":(ctx,owner)=>{c1v0a1.call(owner,ctx,owner);},"release":(ctx,owner)=>{c1v0a2.call(owner,ctx,owner);}},"2271":{"release":(ctx,owner)=>{c1v0a3.call(owner,ctx,owner);}},"2287":{"release":(ctx,owner)=>{c1v0a4.call(owner,ctx,owner);}},"2289":{"release":(ctx,owner)=>{c1v0a5.call(owner,ctx,owner);}},"2308":{"release":(ctx,owner)=>{c1v0a6.call(owner,ctx,owner);}},"2320":{"release":(ctx,owner)=>{c1v0a7.call(owner,ctx,owner);}},"2326":{"release":(ctx,owner)=>{c1v0a8.call(owner,ctx,owner);}},"2331":{"release":(ctx,owner)=>{c1v0a9.call(owner,ctx,owner);}},"2339":{"release":(ctx,owner)=>{c1v0a10.call(owner,ctx,owner);}},"2636":{"release":(ctx,owner)=>{c1v0a11.call(owner,ctx,owner);}},"2676":{"release":(ctx,owner)=>{c1v0a12.call(owner,ctx,owner);}},"2677":{"release":(ctx,owner)=>{c1v0a13.call(owner,ctx,owner);}},"2678":{"release":(ctx,owner)=>{c1v0a14.call(owner,ctx,owner);}},"2679":{"release":(ctx,owner)=>{c1v0a15.call(owner,ctx,owner);}},"2680":{"release":(ctx,owner)=>{c1v0a16.call(owner,ctx,owner);}},"2696":{"release":(ctx,owner)=>{c1v0a17.call(owner,ctx,owner);}},"2699":{"release":(ctx,owner)=>{c1v0a18.call(owner,ctx,owner);}},"2703":{"release":(ctx,owner)=>{c1v0a19.call(owner,ctx,owner);}},"2704":{"release":(ctx,owner)=>{c1v0a20.call(owner,ctx,owner);}},"2706":{"release":(ctx,owner)=>{c1v0a21.call(owner,ctx,owner);}},"2708":{"release":(ctx,owner)=>{c1v0a22.call(owner,ctx,owner);}},"2714":{"press":(ctx,owner)=>{c1v0a23.call(owner,ctx,owner);},"release":(ctx,owner)=>{c1v0a24.call(owner,ctx,owner);}},"2750":{"release":(ctx,owner)=>{c1v0a25.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"3":[],"16":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"26":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"35":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"36":[],"43":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"50":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"55":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"56":[],"64":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"72":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"80":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"81":[],"126":["_totalframes","skipFrame"],"159":["_totalframes","skipFrame"],"358":[],"401":["_currentframe","back","goBack","hit","onEnterFrame"],"403":["_visible"],"413":["_currentframe","back","goBack","hit","onEnterFrame"],"416":[],"418":[],"430":[],"432":["_xmouse","_ymouse","am","arr","gameOver","gamePlay","holes","init","life","lifeBar","lifeHurt","lifeStep","lifex","ms","onEnterFrame","ss","timeShow","timeStep","timec","timer"],"706":["_totalframes","skipFrame"],"1007":["_totalframes","skipFrame"],"1320":["_totalframes","skipFrame"],"1325":[],"1337":["_x","_y","onEnterFrame","x","y"],"1436":[],"1444":[],"1449":[],"1454":[],"1459":[],"1468":[],"1473":[],"1482":[],"1495":[],"1510":[],"1525":[],"1540":[],"1554":[],"1571":[],"1585":[],"1601":[],"1627":[],"1644":[],"1645":[],"1948":["_totalframes","skipFrame"],"2228":["_currentframe"],"2231":["aim"],"2238":[],"2241":[],"2242":["_currentframe","back","onEnterFrame"],"2245":["component","track_mc"],"2246":[],"2266":[],"2271":[],"2287":["qqxflash_home"],"2289":[],"2304":["bar","loadb","loading","percentage","totalb"],"2308":[],"2320":[],"2326":["helper"],"2331":[],"2339":[],"2341":["btn"],"2416":["_visible","hitted","onEnterFrame","ox","oy"],"2447":["_visible","onEnterFrame"],"2465":[],"2466":["_visible"],"2592":["_visible","onEnterFrame"],"2595":[],"2597":["_visible"],"2630":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block1","block11","block2","blocks","blockx","blocky","changeMovies","changes","event4","event4mc","event5","event5mc","event9","events","hitter","i","map","player","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"2636":["gp"],"2676":[],"2677":[],"2678":[],"2679":[],"2680":[],"2689":["actKey","downKey","leftKey","rightKey","upKey"],"2696":["_quality"],"2699":["_quality"],"2703":["_quality"],"2704":[],"2706":["allShow"],"2708":["allShow"],"2714":["draging","onEnterFrame"],"2715":["_x","bb","draging","onEnterFrame"],"2728":["btn"],"2729":["allShow","checkKey","gkShow","itemList","lifeBar","listItem","newKey"],"2730":["btn","gp"],"2736":["i","onEnterFrame"],"2742":[],"2743":["delay","fadeOut","item"],"2750":[],"main":["actKey","aimX","aimY","auto","autoAct","autoActing","autoTime","btn","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map1txt0","map1txt3","map1txt5","map1txt7","map2txt5","movie","oldDir","oldMap","onEnterFrame","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2Obj","talk2npc","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:4933215,frames:{"3":{"1":(ctx,owner)=>{c1v1a296.call(owner,ctx,owner);}},"16":{"1":(ctx,owner)=>{c1v1a214.call(owner,ctx,owner);}},"26":{"1":(ctx,owner)=>{c1v1a259.call(owner,ctx,owner);}},"35":{"1":(ctx,owner)=>{c1v1a292.call(owner,ctx,owner);}},"36":{"1":(ctx,owner)=>{c1v1a293.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a294.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v1a295.call(owner,ctx,owner);}},"43":{"1":(ctx,owner)=>{c1v1a297.call(owner,ctx,owner);}},"50":{"1":(ctx,owner)=>{c1v1a299.call(owner,ctx,owner);}},"55":{"1":(ctx,owner)=>{c1v1a300.call(owner,ctx,owner);}},"56":{"1":(ctx,owner)=>{c1v1a301.call(owner,ctx,owner);}},"64":{"1":(ctx,owner)=>{c1v1a302.call(owner,ctx,owner);}},"72":{"1":(ctx,owner)=>{c1v1a306.call(owner,ctx,owner);}},"80":{"1":(ctx,owner)=>{c1v1a307.call(owner,ctx,owner);}},"81":{"1":(ctx,owner)=>{c1v1a308.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a309.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v1a310.call(owner,ctx,owner);}},"434":{"1":(ctx,owner)=>{c1v1a298.call(owner,ctx,owner);}},"717":{"1232":(ctx,owner)=>{c1v1a303.call(owner,ctx,owner);},"1233":(ctx,owner)=>{c1v1a304.call(owner,ctx,owner);},"1234":(ctx,owner)=>{c1v1a305.call(owner,ctx,owner);}},"932":{"1":(ctx,owner)=>{c1v1a311.call(owner,ctx,owner);},"772":(ctx,owner)=>{c1v1a312.call(owner,ctx,owner);c1v1a313.call(owner,ctx,owner);}},"978":{"1":(ctx,owner)=>{c1v1a314.call(owner,ctx,owner);}},"1011":{"1":(ctx,owner)=>{c1v1a185.call(owner,ctx,owner);}},"1241":{"1":(ctx,owner)=>{c1v1a186.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v1a187.call(owner,ctx,owner);},"37":(ctx,owner)=>{c1v1a192.call(owner,ctx,owner);},"58":(ctx,owner)=>{c1v1a193.call(owner,ctx,owner);},"82":(ctx,owner)=>{c1v1a194.call(owner,ctx,owner);},"118":(ctx,owner)=>{c1v1a188.call(owner,ctx,owner);c1v1a189.call(owner,ctx,owner);},"129":(ctx,owner)=>{c1v1a190.call(owner,ctx,owner);},"133":(ctx,owner)=>{c1v1a191.call(owner,ctx,owner);}},"1243":{"1":(ctx,owner)=>{c1v1a195.call(owner,ctx,owner);}},"1252":{"1":(ctx,owner)=>{c1v1a196.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a198.call(owner,ctx,owner);},"10":(ctx,owner)=>{c1v1a197.call(owner,ctx,owner);},"25":(ctx,owner)=>{c1v1a199.call(owner,ctx,owner);},"47":(ctx,owner)=>{c1v1a200.call(owner,ctx,owner);},"58":(ctx,owner)=>{c1v1a201.call(owner,ctx,owner);}},"1255":{"1":(ctx,owner)=>{c1v1a202.call(owner,ctx,owner);}},"1257":{"1":(ctx,owner)=>{c1v1a203.call(owner,ctx,owner);},"7":(ctx,owner)=>{c1v1a204.call(owner,ctx,owner);}},"1269":{"1":(ctx,owner)=>{c1v1a205.call(owner,ctx,owner);}},"1271":{"1":(ctx,owner)=>{c1v1a206.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a207.call(owner,ctx,owner);}},"1522":{"1":(ctx,owner)=>{c1v1a208.call(owner,ctx,owner);},"469":(ctx,owner)=>{c1v1a210.call(owner,ctx,owner);},"496":(ctx,owner)=>{c1v1a211.call(owner,ctx,owner);},"497":(ctx,owner)=>{c1v1a212.call(owner,ctx,owner);},"522":(ctx,owner)=>{c1v1a213.call(owner,ctx,owner);},"1007":(ctx,owner)=>{c1v1a209.call(owner,ctx,owner);}},"1848":{"1":(ctx,owner)=>{c1v1a215.call(owner,ctx,owner);},"1318":(ctx,owner)=>{c1v1a216.call(owner,ctx,owner);}},"1853":{"1":(ctx,owner)=>{c1v1a217.call(owner,ctx,owner);},"7":(ctx,owner)=>{c1v1a218.call(owner,ctx,owner);}},"1866":{"1":(ctx,owner)=>{c1v1a219.call(owner,ctx,owner);}},"1966":{"9":(ctx,owner)=>{c1v1a220.call(owner,ctx,owner);}},"1974":{"9":(ctx,owner)=>{c1v1a221.call(owner,ctx,owner);}},"1979":{"10":(ctx,owner)=>{c1v1a222.call(owner,ctx,owner);}},"1984":{"9":(ctx,owner)=>{c1v1a223.call(owner,ctx,owner);}},"1989":{"9":(ctx,owner)=>{c1v1a224.call(owner,ctx,owner);}},"1998":{"9":(ctx,owner)=>{c1v1a225.call(owner,ctx,owner);}},"2003":{"9":(ctx,owner)=>{c1v1a226.call(owner,ctx,owner);}},"2021":{"9":(ctx,owner)=>{c1v1a227.call(owner,ctx,owner);}},"2034":{"26":(ctx,owner)=>{c1v1a228.call(owner,ctx,owner);}},"2058":{"26":(ctx,owner)=>{c1v1a229.call(owner,ctx,owner);}},"2072":{"28":(ctx,owner)=>{c1v1a230.call(owner,ctx,owner);}},"2086":{"28":(ctx,owner)=>{c1v1a231.call(owner,ctx,owner);}},"2100":{"32":(ctx,owner)=>{c1v1a232.call(owner,ctx,owner);}},"2116":{"28":(ctx,owner)=>{c1v1a233.call(owner,ctx,owner);}},"2130":{"32":(ctx,owner)=>{c1v1a234.call(owner,ctx,owner);}},"2146":{"28":(ctx,owner)=>{c1v1a235.call(owner,ctx,owner);}},"2170":{"54":(ctx,owner)=>{c1v1a236.call(owner,ctx,owner);}},"2196":{"54":(ctx,owner)=>{c1v1a237.call(owner,ctx,owner);}},"2197":{"1":(ctx,owner)=>{c1v1a238.call(owner,ctx,owner);}},"2243":{"1":(ctx,owner)=>{c1v1a239.call(owner,ctx,owner);},"1393":(ctx,owner)=>{c1v1a240.call(owner,ctx,owner);}},"2253":{"1":(ctx,owner)=>{c1v1a241.call(owner,ctx,owner);}},"2256":{"1":(ctx,owner)=>{c1v1a242.call(owner,ctx,owner);}},"2257":{"1":(ctx,owner)=>{c1v1a243.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v1a244.call(owner,ctx,owner);}},"2260":{"1":(ctx,owner)=>{c1v1a245.call(owner,ctx,owner);}},"2261":{"1":(ctx,owner)=>{c1v1a246.call(owner,ctx,owner);}},"2319":{"1":(ctx,owner)=>{c1v1a247.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a248.call(owner,ctx,owner);}},"2358":{"1":(ctx,owner)=>{c1v1a249.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a251.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v1a250.call(owner,ctx,owner);}},"2431":{"1":(ctx,owner)=>{c1v1a252.call(owner,ctx,owner);}},"2463":{"1":(ctx,owner)=>{c1v1a253.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v1a254.call(owner,ctx,owner);},"4":(ctx,owner)=>{c1v1a255.call(owner,ctx,owner);},"41":(ctx,owner)=>{c1v1a256.call(owner,ctx,owner);}},"2481":{"1":(ctx,owner)=>{c1v1a257.call(owner,ctx,owner);}},"2482":{"1":(ctx,owner)=>{c1v1a258.call(owner,ctx,owner);}},"2602":{"1":(ctx,owner)=>{c1v1a260.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v1a262.call(owner,ctx,owner);},"4":(ctx,owner)=>{c1v1a263.call(owner,ctx,owner);},"112":(ctx,owner)=>{c1v1a261.call(owner,ctx,owner);}},"2605":{"1":(ctx,owner)=>{c1v1a264.call(owner,ctx,owner);}},"2607":{"1":(ctx,owner)=>{c1v1a265.call(owner,ctx,owner);}},"2640":{"1":(ctx,owner)=>{c1v1a266.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v1a268.call(owner,ctx,owner);},"5":(ctx,owner)=>{c1v1a269.call(owner,ctx,owner);},"7":(ctx,owner)=>{c1v1a270.call(owner,ctx,owner);},"9":(ctx,owner)=>{c1v1a271.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v1a267.call(owner,ctx,owner);}},"2710":{"1":(ctx,owner)=>{c1v1a272.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a273.call(owner,ctx,owner);}},"2736":{"1":(ctx,owner)=>{c1v1a274.call(owner,ctx,owner);}},"2749":{"1":(ctx,owner)=>{c1v1a275.call(owner,ctx,owner);}},"2750":{"1":(ctx,owner)=>{c1v1a276.call(owner,ctx,owner);}},"2751":{"1":(ctx,owner)=>{c1v1a277.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a279.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v1a278.call(owner,ctx,owner);},"20":(ctx,owner)=>{c1v1a280.call(owner,ctx,owner);}},"2757":{"1":(ctx,owner)=>{c1v1a281.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a284.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v1a286.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v1a282.call(owner,ctx,owner);},"12":(ctx,owner)=>{c1v1a283.call(owner,ctx,owner);},"20":(ctx,owner)=>{c1v1a285.call(owner,ctx,owner);}},"2763":{"1":(ctx,owner)=>{c1v1a287.call(owner,ctx,owner);}},"2764":{"1":(ctx,owner)=>{c1v1a288.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a290.call(owner,ctx,owner);},"11":(ctx,owner)=>{c1v1a289.call(owner,ctx,owner);},"20":(ctx,owner)=>{c1v1a291.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c1v1a315.call(owner,ctx,owner);},"2":(ctx,owner)=>{c1v1a316.call(owner,ctx,owner);},"3":(ctx,owner)=>{c1v1a317.call(owner,ctx,owner);}}},frameActions:{"3":{"1":[c1v1a296]},"16":{"1":[c1v1a214]},"26":{"1":[c1v1a259]},"35":{"1":[c1v1a292]},"36":{"1":[c1v1a293],"2":[c1v1a294],"3":[c1v1a295]},"43":{"1":[c1v1a297]},"50":{"1":[c1v1a299]},"55":{"1":[c1v1a300]},"56":{"1":[c1v1a301]},"64":{"1":[c1v1a302]},"72":{"1":[c1v1a306]},"80":{"1":[c1v1a307]},"81":{"1":[c1v1a308],"2":[c1v1a309],"3":[c1v1a310]},"434":{"1":[c1v1a298]},"717":{"1232":[c1v1a303],"1233":[c1v1a304],"1234":[c1v1a305]},"932":{"1":[c1v1a311],"772":[c1v1a312,c1v1a313]},"978":{"1":[c1v1a314]},"1011":{"1":[c1v1a185]},"1241":{"1":[c1v1a186],"11":[c1v1a187],"37":[c1v1a192],"58":[c1v1a193],"82":[c1v1a194],"118":[c1v1a188,c1v1a189],"129":[c1v1a190],"133":[c1v1a191]},"1243":{"1":[c1v1a195]},"1252":{"1":[c1v1a196],"2":[c1v1a198],"10":[c1v1a197],"25":[c1v1a199],"47":[c1v1a200],"58":[c1v1a201]},"1255":{"1":[c1v1a202]},"1257":{"1":[c1v1a203],"7":[c1v1a204]},"1269":{"1":[c1v1a205]},"1271":{"1":[c1v1a206],"2":[c1v1a207]},"1522":{"1":[c1v1a208],"469":[c1v1a210],"496":[c1v1a211],"497":[c1v1a212],"522":[c1v1a213],"1007":[c1v1a209]},"1848":{"1":[c1v1a215],"1318":[c1v1a216]},"1853":{"1":[c1v1a217],"7":[c1v1a218]},"1866":{"1":[c1v1a219]},"1966":{"9":[c1v1a220]},"1974":{"9":[c1v1a221]},"1979":{"10":[c1v1a222]},"1984":{"9":[c1v1a223]},"1989":{"9":[c1v1a224]},"1998":{"9":[c1v1a225]},"2003":{"9":[c1v1a226]},"2021":{"9":[c1v1a227]},"2034":{"26":[c1v1a228]},"2058":{"26":[c1v1a229]},"2072":{"28":[c1v1a230]},"2086":{"28":[c1v1a231]},"2100":{"32":[c1v1a232]},"2116":{"28":[c1v1a233]},"2130":{"32":[c1v1a234]},"2146":{"28":[c1v1a235]},"2170":{"54":[c1v1a236]},"2196":{"54":[c1v1a237]},"2197":{"1":[c1v1a238]},"2243":{"1":[c1v1a239],"1393":[c1v1a240]},"2253":{"1":[c1v1a241]},"2256":{"1":[c1v1a242]},"2257":{"1":[c1v1a243],"11":[c1v1a244]},"2260":{"1":[c1v1a245]},"2261":{"1":[c1v1a246]},"2319":{"1":[c1v1a247],"2":[c1v1a248]},"2358":{"1":[c1v1a249],"2":[c1v1a251],"11":[c1v1a250]},"2431":{"1":[c1v1a252]},"2463":{"1":[c1v1a253],"3":[c1v1a254],"4":[c1v1a255],"41":[c1v1a256]},"2481":{"1":[c1v1a257]},"2482":{"1":[c1v1a258]},"2602":{"1":[c1v1a260],"3":[c1v1a262],"4":[c1v1a263],"112":[c1v1a261]},"2605":{"1":[c1v1a264]},"2607":{"1":[c1v1a265]},"2640":{"1":[c1v1a266],"3":[c1v1a268],"5":[c1v1a269],"7":[c1v1a270],"9":[c1v1a271],"11":[c1v1a267]},"2710":{"1":[c1v1a272],"2":[c1v1a273]},"2736":{"1":[c1v1a274]},"2749":{"1":[c1v1a275]},"2750":{"1":[c1v1a276]},"2751":{"1":[c1v1a277],"2":[c1v1a279],"11":[c1v1a278],"20":[c1v1a280]},"2757":{"1":[c1v1a281],"2":[c1v1a284],"3":[c1v1a286],"11":[c1v1a282],"12":[c1v1a283],"20":[c1v1a285]},"2763":{"1":[c1v1a287]},"2764":{"1":[c1v1a288],"2":[c1v1a290],"11":[c1v1a289],"20":[c1v1a291]},"main":{"1":[c1v1a315],"2":[c1v1a316],"3":[c1v1a317]}},buttons:{"1198":{"release":(ctx,owner)=>{c1v1a158.call(owner,ctx,owner);}},"2246":{"release":(ctx,owner)=>{c1v1a159.call(owner,ctx,owner);}},"2281":{"press":(ctx,owner)=>{c1v1a160.call(owner,ctx,owner);},"release":(ctx,owner)=>{c1v1a161.call(owner,ctx,owner);}},"2286":{"release":(ctx,owner)=>{c1v1a162.call(owner,ctx,owner);}},"2302":{"release":(ctx,owner)=>{c1v1a163.call(owner,ctx,owner);}},"2304":{"release":(ctx,owner)=>{c1v1a164.call(owner,ctx,owner);}},"2323":{"release":(ctx,owner)=>{c1v1a165.call(owner,ctx,owner);}},"2336":{"release":(ctx,owner)=>{c1v1a166.call(owner,ctx,owner);}},"2342":{"release":(ctx,owner)=>{c1v1a167.call(owner,ctx,owner);}},"2348":{"release":(ctx,owner)=>{c1v1a168.call(owner,ctx,owner);}},"2356":{"release":(ctx,owner)=>{c1v1a169.call(owner,ctx,owner);}},"2646":{"release":(ctx,owner)=>{c1v1a170.call(owner,ctx,owner);}},"2697":{"release":(ctx,owner)=>{c1v1a171.call(owner,ctx,owner);}},"2698":{"release":(ctx,owner)=>{c1v1a172.call(owner,ctx,owner);}},"2699":{"release":(ctx,owner)=>{c1v1a173.call(owner,ctx,owner);}},"2700":{"release":(ctx,owner)=>{c1v1a174.call(owner,ctx,owner);}},"2701":{"release":(ctx,owner)=>{c1v1a175.call(owner,ctx,owner);}},"2717":{"release":(ctx,owner)=>{c1v1a176.call(owner,ctx,owner);}},"2720":{"release":(ctx,owner)=>{c1v1a177.call(owner,ctx,owner);}},"2724":{"release":(ctx,owner)=>{c1v1a178.call(owner,ctx,owner);}},"2725":{"release":(ctx,owner)=>{c1v1a179.call(owner,ctx,owner);}},"2727":{"release":(ctx,owner)=>{c1v1a180.call(owner,ctx,owner);}},"2729":{"release":(ctx,owner)=>{c1v1a181.call(owner,ctx,owner);}},"2735":{"press":(ctx,owner)=>{c1v1a182.call(owner,ctx,owner);},"release":(ctx,owner)=>{c1v1a183.call(owner,ctx,owner);}},"2771":{"release":(ctx,owner)=>{c1v1a184.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"3":[],"16":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"26":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"35":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"36":[],"43":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"50":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"55":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"56":[],"64":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"72":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"80":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"81":[],"434":["_totalframes","skipFrame"],"717":["_currentframe"],"932":["_totalframes","skipFrame"],"978":["_totalframes","skipFrame"],"1011":["_totalframes","skipFrame"],"1198":[],"1241":["_currentframe","back","goBack","hit","onEnterFrame"],"1243":["_visible"],"1252":["_currentframe","back","goBack","hit","onEnterFrame"],"1255":[],"1257":[],"1269":[],"1271":["_xmouse","_ymouse","am","arr","gameOver","gamePlay","holes","init","life","lifeBar","lifeHurt","lifeStep","lifex","ms","onEnterFrame","ss","timeShow","timeStep","timec","timer"],"1522":["_totalframes","skipFrame"],"1848":["_totalframes","skipFrame"],"1853":[],"1866":["_x","_y","onEnterFrame","x","y"],"1966":[],"1974":[],"1979":[],"1984":[],"1989":[],"1998":[],"2003":[],"2021":[],"2034":[],"2058":[],"2072":[],"2086":[],"2100":[],"2116":[],"2130":[],"2146":[],"2170":[],"2196":[],"2197":[],"2243":["_totalframes","skipFrame"],"2246":["aim"],"2253":[],"2256":[],"2257":["_currentframe","back","onEnterFrame"],"2260":["component","track_mc"],"2261":[],"2281":[],"2286":[],"2302":["qqxflash_home"],"2304":[],"2319":["bar","loadb","loading","percentage","totalb"],"2323":[],"2336":[],"2342":["helper"],"2348":[],"2356":[],"2358":["btn"],"2431":["_visible","hitted","onEnterFrame","ox","oy"],"2463":["_visible","onEnterFrame"],"2481":[],"2482":["_visible"],"2602":["_visible","onEnterFrame"],"2605":[],"2607":["_visible"],"2640":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block1","block11","block2","blocks","blockx","blocky","changeMovies","changes","event4","event4mc","event5","event5mc","event9","events","hitter","i","map","player","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"2646":["gp"],"2697":[],"2698":[],"2699":[],"2700":[],"2701":[],"2710":["actKey","downKey","leftKey","rightKey","upKey"],"2717":["_quality"],"2720":["_quality"],"2724":["_quality"],"2725":[],"2727":["allShow"],"2729":["allShow"],"2735":["draging","onEnterFrame"],"2736":["_x","bb","draging","onEnterFrame"],"2749":["btn"],"2750":["allShow","checkKey","gkShow","itemList","lifeBar","listItem","newKey"],"2751":["btn","gp"],"2757":["i","onEnterFrame"],"2763":[],"2764":["delay","fadeOut","item"],"2771":[],"main":["actKey","aimX","aimY","auto","autoAct","autoActing","autoTime","btn","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map1txt0","map1txt3","map1txt5","map1txt7","map2txt5","movie","oldDir","oldMap","onEnterFrame","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2Obj","talk2npc","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:2231":{"read":["aim"],"write":[]},"0:2266":{"read":[],"write":[]},"0:2271":{"read":[],"write":[]},"0:2287":{"read":["qqxflash_home"],"write":[]},"0:2289":{"read":[],"write":[]},"0:2308":{"read":[],"write":[]},"0:2320":{"read":[],"write":[]},"0:2326":{"read":["helper"],"write":[]},"0:2331":{"read":[],"write":[]},"0:2339":{"read":[],"write":[]},"0:2636":{"read":["gp"],"write":["gp"]},"0:2676":{"read":[],"write":[]},"0:2677":{"read":[],"write":[]},"0:2678":{"read":[],"write":[]},"0:2679":{"read":[],"write":[]},"0:2680":{"read":[],"write":[]},"0:2696":{"read":["_quality"],"write":["_quality"]},"0:2699":{"read":["_quality"],"write":["_quality"]},"0:2703":{"read":["_quality"],"write":["_quality"]},"0:2704":{"read":[],"write":[]},"0:2706":{"read":["allShow"],"write":[]},"0:2708":{"read":["allShow"],"write":[]},"0:2714":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:2750":{"read":[],"write":[]},"0:358":{"read":[],"write":[]},"0:1007":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:126":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1320":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1325":{"read":[],"write":[]},"0:1337":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:1436":{"read":[],"write":[]},"0:1444":{"read":[],"write":[]},"0:1449":{"read":[],"write":[]},"0:1454":{"read":[],"write":[]},"0:1459":{"read":[],"write":[]},"0:1468":{"read":[],"write":[]},"0:1473":{"read":[],"write":[]},"0:1482":{"read":[],"write":[]},"0:1495":{"read":[],"write":[]},"0:1510":{"read":[],"write":[]},"0:1525":{"read":[],"write":[]},"0:1540":{"read":[],"write":[]},"0:1554":{"read":[],"write":[]},"0:1571":{"read":[],"write":[]},"0:1585":{"read":[],"write":[]},"0:159":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:16":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1601":{"read":[],"write":[]},"0:1627":{"read":[],"write":[]},"0:1644":{"read":[],"write":[]},"0:1645":{"read":[],"write":[]},"0:1948":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:2228":{"read":["_currentframe"],"write":[]},"0:2238":{"read":[],"write":[]},"0:2241":{"read":[],"write":[]},"0:2242":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:2245":{"read":["component","track_mc"],"write":["component"]},"0:2246":{"read":[],"write":[]},"0:2304":{"read":["bar","loadb","loading","percentage","totalb"],"write":["loadb","percentage","totalb"]},"0:2341":{"read":["btn"],"write":[]},"0:2416":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2447":{"read":["_visible","onEnterFrame"],"write":["_visible","onEnterFrame"]},"0:2465":{"read":[],"write":[]},"0:2466":{"read":["_visible"],"write":["_visible"]},"0:2592":{"read":["_visible","onEnterFrame"],"write":["_visible","onEnterFrame"]},"0:2595":{"read":[],"write":[]},"0:2597":{"read":["_visible"],"write":["_visible"]},"0:26":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:2630":{"read":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block1","block11","block2","blocks","blockx","blocky","changeMovies","changes","event4","event4mc","event5","event5mc","event9","events","hitter","i","map","player","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"write":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"0:2689":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:2715":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:2728":{"read":["btn"],"write":[]},"0:2729":{"read":["allShow","checkKey","gkShow","itemList","lifeBar","listItem","newKey"],"write":["checkKey","listItem","newKey"]},"0:2730":{"read":["btn","gp"],"write":[]},"0:2736":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:2742":{"read":[],"write":[]},"0:2743":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:35":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:36":{"read":[],"write":[]},"0:3":{"read":[],"write":[]},"0:401":{"read":["_currentframe","back","goBack","hit","onEnterFrame"],"write":["back","goBack","hit","onEnterFrame"]},"0:403":{"read":["_visible"],"write":["_visible"]},"0:413":{"read":["_currentframe","back","goBack","hit","onEnterFrame"],"write":["back","goBack","hit","onEnterFrame"]},"0:416":{"read":[],"write":[]},"0:418":{"read":[],"write":[]},"0:43":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:430":{"read":[],"write":[]},"0:432":{"read":["_xmouse","_ymouse","am","arr","gameOver","gamePlay","holes","init","life","lifeBar","lifeHurt","lifeStep","lifex","ms","onEnterFrame","ss","timeShow","timeStep","timec","timer"],"write":["am","gameOver","gamePlay","holes","init","life","lifeHurt","lifeStep","lifex","ms","onEnterFrame","ss","timeShow","timeStep","timec","timer"]},"0:50":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:55":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:56":{"read":[],"write":[]},"0:64":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:706":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:72":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:80":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:81":{"read":[],"write":[]},"0:main":{"read":["actKey","aimX","aimY","auto","autoAct","autoActing","autoTime","btn","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map1txt0","map1txt3","map1txt5","map1txt7","map2txt5","movie","oldDir","oldMap","onEnterFrame","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2Obj","talk2npc","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","aimX","aimY","auto","autoAct","autoActing","autoTime","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","keyCheck","leftKey","oldDir","oldMap","onEnterFrame","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2Obj","talk2npc","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:1198":{"read":[],"write":[]},"1:2246":{"read":["aim"],"write":[]},"1:2281":{"read":[],"write":[]},"1:2286":{"read":[],"write":[]},"1:2302":{"read":["qqxflash_home"],"write":[]},"1:2304":{"read":[],"write":[]},"1:2323":{"read":[],"write":[]},"1:2336":{"read":[],"write":[]},"1:2342":{"read":["helper"],"write":[]},"1:2348":{"read":[],"write":[]},"1:2356":{"read":[],"write":[]},"1:2646":{"read":["gp"],"write":["gp"]},"1:2697":{"read":[],"write":[]},"1:2698":{"read":[],"write":[]},"1:2699":{"read":[],"write":[]},"1:2700":{"read":[],"write":[]},"1:2701":{"read":[],"write":[]},"1:2717":{"read":["_quality"],"write":["_quality"]},"1:2720":{"read":["_quality"],"write":["_quality"]},"1:2724":{"read":["_quality"],"write":["_quality"]},"1:2725":{"read":[],"write":[]},"1:2727":{"read":["allShow"],"write":[]},"1:2729":{"read":["allShow"],"write":[]},"1:2735":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:2771":{"read":[],"write":[]},"1:1011":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1241":{"read":["_currentframe","back","goBack","hit","onEnterFrame"],"write":["back","goBack","hit","onEnterFrame"]},"1:1243":{"read":["_visible"],"write":["_visible"]},"1:1252":{"read":["_currentframe","back","goBack","hit","onEnterFrame"],"write":["back","goBack","hit","onEnterFrame"]},"1:1255":{"read":[],"write":[]},"1:1257":{"read":[],"write":[]},"1:1269":{"read":[],"write":[]},"1:1271":{"read":["_xmouse","_ymouse","am","arr","gameOver","gamePlay","holes","init","life","lifeBar","lifeHurt","lifeStep","lifex","ms","onEnterFrame","ss","timeShow","timeStep","timec","timer"],"write":["am","gameOver","gamePlay","holes","init","life","lifeHurt","lifeStep","lifex","ms","onEnterFrame","ss","timeShow","timeStep","timec","timer"]},"1:1522":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:16":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1848":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1853":{"read":[],"write":[]},"1:1866":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:1966":{"read":[],"write":[]},"1:1974":{"read":[],"write":[]},"1:1979":{"read":[],"write":[]},"1:1984":{"read":[],"write":[]},"1:1989":{"read":[],"write":[]},"1:1998":{"read":[],"write":[]},"1:2003":{"read":[],"write":[]},"1:2021":{"read":[],"write":[]},"1:2034":{"read":[],"write":[]},"1:2058":{"read":[],"write":[]},"1:2072":{"read":[],"write":[]},"1:2086":{"read":[],"write":[]},"1:2100":{"read":[],"write":[]},"1:2116":{"read":[],"write":[]},"1:2130":{"read":[],"write":[]},"1:2146":{"read":[],"write":[]},"1:2170":{"read":[],"write":[]},"1:2196":{"read":[],"write":[]},"1:2197":{"read":[],"write":[]},"1:2243":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:2253":{"read":[],"write":[]},"1:2256":{"read":[],"write":[]},"1:2257":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:2260":{"read":["component","track_mc"],"write":["component"]},"1:2261":{"read":[],"write":[]},"1:2319":{"read":["bar","loadb","loading","percentage","totalb"],"write":["loadb","percentage","totalb"]},"1:2358":{"read":["btn"],"write":[]},"1:2431":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2463":{"read":["_visible","onEnterFrame"],"write":["_visible","onEnterFrame"]},"1:2481":{"read":[],"write":[]},"1:2482":{"read":["_visible"],"write":["_visible"]},"1:26":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:2602":{"read":["_visible","onEnterFrame"],"write":["_visible","onEnterFrame"]},"1:2605":{"read":[],"write":[]},"1:2607":{"read":["_visible"],"write":["_visible"]},"1:2640":{"read":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block1","block11","block2","blocks","blockx","blocky","changeMovies","changes","event4","event4mc","event5","event5mc","event9","events","hitter","i","map","player","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"write":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"1:2710":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:2736":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:2749":{"read":["btn"],"write":[]},"1:2750":{"read":["allShow","checkKey","gkShow","itemList","lifeBar","listItem","newKey"],"write":["checkKey","listItem","newKey"]},"1:2751":{"read":["btn","gp"],"write":[]},"1:2757":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:2763":{"read":[],"write":[]},"1:2764":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:35":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:36":{"read":[],"write":[]},"1:3":{"read":[],"write":[]},"1:43":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:434":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:50":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:55":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:56":{"read":[],"write":[]},"1:64":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:717":{"read":["_currentframe"],"write":[]},"1:72":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:80":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:81":{"read":[],"write":[]},"1:932":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:978":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:main":{"read":["actKey","aimX","aimY","auto","autoAct","autoActing","autoTime","btn","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map1txt0","map1txt3","map1txt5","map1txt7","map2txt5","movie","oldDir","oldMap","onEnterFrame","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2Obj","talk2npc","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","aimX","aimY","auto","autoAct","autoActing","autoTime","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","keyCheck","leftKey","oldDir","oldMap","onEnterFrame","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2Obj","talk2npc","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
