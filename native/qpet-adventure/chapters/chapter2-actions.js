/* Native source-derived chapter 2 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c2v0a0(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c2v0a1(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c2v0a2(ctx,owner){

   ctx.stopDrag(owner);

}

export function c2v0a3(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c2v0a4(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c2v0a5(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c2v0a6(ctx,owner){

   ctx.graph.play(owner);

}

export function c2v0a7(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c2v0a8(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c2v0a9(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c2v0a10(ctx,owner){

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

export function c2v0a11(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c2v0a12(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c2v0a13(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c2v0a14(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c2v0a15(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c2v0a16(ctx,owner){

   owner._quality = "HIGH";

}

export function c2v0a17(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c2v0a18(ctx,owner){

   owner._quality = "LOW";

}

export function c2v0a19(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c2v0a20(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c2v0a21(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c2v0a22(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c2v0a23(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c2v0a24(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c2v0a25(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1),{play:true});
}

}

export function c2v0a26(ctx,owner){
owner.skipFrame = 3248;
ctx.trace?.(owner.skipFrame);

}

export function c2v0a27(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["disAll"],"_visible",0);
owner.skipFrame = 0;

}

export function c2v0a28(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.graph.stop(owner);
ctx.stopAllSounds?.();

}

export function c2v0a29(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c2v0a30(ctx,owner){
owner.onEnterFrame = undefined;

}

export function c2v0a31(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(owner.onEnterFrame == undefined))
{
   ((owner.parent)?.["_parent"])?.["gamePlay"]?.();
}
owner.nx = (owner.fish)?.["_x"];
owner.onEnterFrame = function()
{
   ctx.setField(owner.fish,"_xscale",((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],((owner.parent)?.["_parent"])?.["scaleStep"])))(owner.fish,"_yscale"));
   ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num(((owner.parent)?.["_parent"])?.["scaleStep"])*ctx.num(2))))))(owner.fish,"_x");
};

}

export function c2v0a32(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(ctx.lessEqual(((((owner.parent)?.["_parent"])?.["life1"])?.["bar"])?.["_width"],15)))
{
   ctx.stopAllSounds?.();
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"],ctx.add((((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"])?.["_currentframe"],1));
}
else
{
   ctx.graph.goto(owner.parent,"normal");
}

}

export function c2v0a33(ctx,owner){
((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(((owner.parent)?.["_parent"])?.["lifeStep1"]))))((((owner.parent)?.["_parent"])?.["life1"])?.["bar"],"_width");

}

export function c2v0a34(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto(owner.parent,"normal");

}

export function c2v0a35(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto(owner.parent,"normal");

}

export function c2v0a36(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto(owner.parent,"normal");

}

export function c2v0a37(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c2v0a38(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a39(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a40(ctx,owner){
(owner.parent)?.["lightFail"]?.();
ctx.graph.goto(owner,1);

}

export function c2v0a41(ctx,owner){
(owner.parent)?.["lightWin"]?.();
ctx.graph.goto(owner,1);

}

export function c2v0a42(ctx,owner){
ctx.graph.stop(owner);
owner.tt = {};
ctx.setField(owner.tt,"onKeyDown",function()
{
   if(ctx.bool((ctx.keys)?.["isDown"]?.((((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"])))
   {
      (ctx.keys)?.["removeListener"]?.(owner.tt);
      ctx.graph.goto(owner,2);
   }
});
(ctx.keys)?.["addListener"]?.(owner.tt);

}

export function c2v0a43(ctx,owner){
owner.init = function(){
   owner.scaleStep = 0.4;
   owner.tempArrs = [1,1,2,2,3,4,5,5,5,5];
   owner.arrs = [];
   var _loc2_ = 0;
   var _loc1_;
   while(ctx.bool(ctx.less(_loc2_,10)))
   {
      ctx.setField(owner.arrs,_loc2_,[]);
      _loc1_ = 0;
      while(ctx.bool(ctx.less(_loc1_,(owner.tempArrs)?.[_loc2_])))
      {
         ctx.setField((owner.arrs)?.[_loc2_],_loc1_,ctx.add(ctx.randomInt?.(4),1));
         _loc1_ = ctx.add(_loc1_,1);
      }
      _loc2_ = ctx.add(_loc2_,1);
   }
   ctx.setField(owner.a1,"_visible",0);
   ctx.setField(owner.a2,"_visible",0);
   ctx.setField(owner.bar,"_visible",0);
   owner.upKey = 38;
   owner.leftKey = 37;
   owner.downKey = 40;
   owner.rightKey = 39;
   owner.level = 0;
   owner.keyCount = 0;
   owner.barHit = 30;
   owner.bw = 332;
   owner.lifeStep1 = 112.5;
   owner.lifeStep2 = [40,40,45,45,50,50,50,50,55,25];
   owner.ck = {};
   ctx.setField(owner.ck,"onKeyUp",function()
   {
      ctx.trace?.("_____________________");
      ctx.trace?.((ctx.keys)?.["getCode"]?.());
      ctx.trace?.(((owner.arrs)?.[owner.level])?.[owner.keyCount]);
      ctx.trace?.("_____________________");
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 1:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.upKey)))
      {
         owner.lightKey?.();
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 2:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.downKey)))
      {
         owner.lightKey?.();
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 3:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.leftKey)))
      {
         owner.lightKey?.();
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 4:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.rightKey)))
      {
         owner.lightKey?.();
      }
      else
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.barHit)))(owner.bar,"_width");
         owner.checkBar?.();
      }
   });
};
owner.lightKey = function(){
   ctx.setField((owner.arrShow)?.[ctx.add("arrt",owner.keyCount)],"_visible",1);
   ((old)=>(owner.keyCount=old+1,old))(ctx.num(owner.keyCount));
   if(ctx.bool(ctx.lessEqual(((owner.arrs)?.[owner.level])?.["length"],owner.keyCount)))
   {
      ctx.graph.goto(owner.lightShow,"win",{play:true});
      (ctx.keys)?.["removeListener"]?.(owner.ck);
      owner.onEnterFrame = undefined;
      ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",undefined);
      ctx.setField(((owner.bgMovie)?.["movie"])?.["fade"],"_visible",0);
   }
};
owner.lightWin = function(){
   ctx.trace?.(((owner.life2)?.["bar"])?.["_width"]);
   ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((owner.lifeStep2)?.[owner.level]))))((owner.life2)?.["bar"],"_width");
   ctx.trace?.(((owner.life2)?.["bar"])?.["_width"]);
   ((old)=>(owner.level=old+1,old))(ctx.num(owner.level));
   ctx.setField(owner.a1,"_visible",0);
   ctx.setField(owner.a2,"_visible",0);
   ctx.setField(owner.bar,"_visible",0);
   ctx.setField(owner.arrShow,"_visible",0);
   var _loc1_;
   if(ctx.bool(ctx.less(owner.level,10)))
   {
      _loc1_ = ctx.add(ctx.randomInt?.(3),1);
      ctx.graph.goto(owner.bgMovie,ctx.add("hit",_loc1_));
   }
   else
   {
      ctx.graph.goto(owner.bgMovie,"hit4");
   }
};
owner.lightFail = function(){
   ctx.setField(owner.a1,"_visible",0);
   ctx.setField(owner.a2,"_visible",0);
   ctx.setField(owner.bar,"_visible",0);
   ctx.setField(owner.arrShow,"_visible",0);
   ctx.graph.goto(owner.bgMovie,"hitted");
};
owner.levelInit = function(){
   owner.keyCount = 0;
   owner.barStep = ctx.add(4,(ctx.num(owner.level)/ctx.num(2)));
   owner.scaleStep = (ctx.num(owner.barStep)*ctx.num(0.1));
   var _loc1_ = 0;
   while(ctx.bool(ctx.less(_loc1_,5)))
   {
      ctx.graph.remove((owner.arrShow)?.[ctx.add("arr",_loc1_)]);
      ctx.graph.remove((owner.arrShow)?.[ctx.add("arrt",_loc1_)]);
      _loc1_ = ctx.add(_loc1_,1);
   }
   _loc1_ = 0;
   while(ctx.bool(ctx.less(_loc1_,((owner.arrs)?.[owner.level])?.["length"])))
   {
      owner.arrNow = ctx.attach(owner.arrShow,"arr",ctx.add("arr",_loc1_),_loc1_);
      ctx.setField(owner.arrNow,"_x",(ctx.num(60)*ctx.num(_loc1_)));
      ctx.graph.goto(owner.arrNow,((owner.arrs)?.[owner.level])?.[_loc1_]);
      owner.arrNow = ctx.attach(owner.arrShow,"arrt",ctx.add("arrt",_loc1_),ctx.add(_loc1_,5));
      ctx.setField(owner.arrNow,"_x",(ctx.num(60)*ctx.num(_loc1_)));
      ctx.graph.goto(owner.arrNow,((owner.arrs)?.[owner.level])?.[_loc1_]);
      ctx.setField(owner.arrNow,"_visible",0);
      _loc1_ = ctx.add(_loc1_,1);
   }
   ctx.setField(owner.bar,"_width",1);
   (ctx.keys)?.["addListener"]?.(owner.ck);
};
owner.gamePlay = function(){
   owner.levelInit?.();
   ctx.setField(owner.a1,"_visible",1);
   ctx.setField(owner.a2,"_visible",1);
   ctx.setField(owner.bar,"_visible",1);
   ctx.setField(owner.arrShow,"_visible",1);
   owner.onEnterFrame = function()
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.barStep)))(owner.bar,"_width");
      owner.checkBar?.();
   };
};
owner.checkBar = function(){
   if(ctx.bool(ctx.lessEqual(owner.bw,(owner.bar)?.["_width"])))
   {
      ctx.trace?.("hittttttttttttttttttttttttttttt");
      ctx.trace?.(owner.barStep);
      ctx.trace?.(owner.bw);
      ctx.trace?.((owner.bar)?.["_width"]);
      ctx.graph.goto(owner.lightShow,"fail",{play:true});
      ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",undefined);
      owner.tempSteps = 10;
      owner.tempStep = 0;
      owner.tempScale = (ctx.num((ctx.num((((owner.bgMovie)?.["movie"])?.["fish"])?.["_xscale"])-ctx.num(100)))/ctx.num(10));
      owner.tempx = (ctx.num((ctx.num(((owner.bgMovie)?.["movie"])?.["nx"])-ctx.num((((owner.bgMovie)?.["movie"])?.["fish"])?.["_x"])))/ctx.num(10));
      ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",function()
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.tempx)))(((owner.bgMovie)?.["movie"])?.["fish"],"_x");
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.tempScale))))(((owner.bgMovie)?.["movie"])?.["fish"],"_xscale");
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.tempScale))))(((owner.bgMovie)?.["movie"])?.["fish"],"_yscale");
         ((old)=>(owner.tempStep=old+1,old))(ctx.num(owner.tempStep));
         if(ctx.bool(ctx.less(owner.tempSteps,owner.tempStep)))
         {
            ctx.setField(((owner.bgMovie)?.["movie"])?.["fish"],"_x",((owner.bgMovie)?.["movie"])?.["nx"]);
            ctx.setField(((owner.bgMovie)?.["movie"])?.["fish"],"_xscale",100);
            ctx.setField(((owner.bgMovie)?.["movie"])?.["fish"],"_yscale",100);
            ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",undefined);
         }
      });
      (ctx.keys)?.["removeListener"]?.(owner.ck);
      owner.onEnterFrame = undefined;
   }
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c2v0a44(ctx,owner){
owner.skipFrame = 759;

}

export function c2v0a45(ctx,owner){
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(2);

}

export function c2v0a46(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);

}

export function c2v0a47(ctx,owner){
ctx.stopAllSounds?.();

}

export function c2v0a48(ctx,owner){
owner.skipFrame = 0;

}

export function c2v0a49(ctx,owner){
ctx.graph.stop(owner);
owner._quality = "LOW";

}

export function c2v0a50(ctx,owner){
owner._quality = "HIGH";

}

export function c2v0a51(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a52(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c2v0a53(ctx,owner){
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

export function c2v0a54(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c2v0a55(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c2v0a56(ctx,owner){

}

export function c2v0a57(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c2v0a58(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a59(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a60(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a61(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c2v0a62(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1),{play:true});
}

}

export function c2v0a63(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a64(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c2v0a65(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c2v0a66(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a67(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);
ctx.setField(this,"_x",ctx.add(ctx.add((-ctx.num((owner.parent)?.["_x"])),(((owner.parent)?.["_parent"])?.["player"])?.["_x"]),((((owner.parent)?.["_parent"])?.["player"])?.["player"])?.["_x"]));
ctx.setField(this,"_y",ctx.add(ctx.add((-ctx.num((owner.parent)?.["_y"])),(((owner.parent)?.["_parent"])?.["player"])?.["_y"]),((((owner.parent)?.["_parent"])?.["player"])?.["player"])?.["_y"]));

}

export function c2v0a68(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a69(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c2v0a70(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map6":
      owner.appearx = 352;
      owner.appeary = 174;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "as2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 538;
      owner.appeary = 202;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 633;
      owner.appeary = 166;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 724;
      owner.appeary = 133;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
      break;
   default:
      owner.appearx = 334;
      owner.appeary = 236;
      owner._temp_10 = owner.parent;
      owner._temp_9 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
owner.map = "map2";
ctx.setField(owner.parent,"beenMap2",1);
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","block2","block3"];
owner.talkAreas = [];
owner.events = ["event1","event2","event3"];
owner.changes = ["map3","map4","map5","map6"];
owner.changeMovies = ["event0","event0","event0","event000"];
owner.blockx = [188,146,75,258];
owner.blocky = [215,180,256,231];
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
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = owner.i;
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.i)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.i)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.setField(owner.side1,"_visible",0);
ctx.setField(owner.side2,"_visible",0);
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v0a71(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map3";
ctx.setField(owner.parent,"beenMap3",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event4","event5"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1"];
owner.changeMovies = ["event00"];
owner.blockx = [263,63];
owner.blocky = [260,350];
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
owner.i = 4;
while(ctx.bool(ctx.less(owner.i,6)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(4));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v0a72(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map4";
ctx.setField(owner.parent,"beenMap4",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event6","event7","event8"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1","block2"];
owner.changeMovies = ["event00"];
owner.blockx = [415,235,498];
owner.blocky = [255,230,358];
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
owner.i = 6;
while(ctx.bool(ctx.less(owner.i,9)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(6));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v0a73(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 640;
owner.appeary = 249;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map5";
ctx.setField(owner.parent,"beenMap5",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event9","event10"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1"];
owner.changeMovies = ["event00"];
owner.blockx = [300,435];
owner.blocky = [209,225];
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
owner.i = 9;
while(ctx.bool(ctx.less(owner.i,11)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(9));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v0a74(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 505;
owner.appeary = 100;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map6";
ctx.setField(owner.parent,"beenMap6",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event11","event12","event13","event15","event16"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1","block2","block3"];
owner.changeMovies = ["event000"];
owner.blockx = [499,278,169,642];
owner.blocky = [390,190,199,291];
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
owner.i = 11;
while(ctx.bool(ctx.less(owner.i,14)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(11));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v0a75(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a76(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a77(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c2v0a78(ctx,owner){
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

export function c2v0a79(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c2v0a80(ctx,owner){
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
ctx.setField(owner.gkShow,"_visible",0);
ctx.setField((owner.allShow)?.["hitter"],"_visible",0);
owner.listItem?.();

}

export function c2v0a81(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a82(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a83(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c2v0a84(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c2v0a85(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);

}

export function c2v0a86(ctx,owner){
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

export function c2v0a87(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c2v0a88(ctx,owner){
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
ctx.graph.play(owner);

}

export function c2v0a89(ctx,owner){
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
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c2v0a90(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a91(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a92(ctx,owner){
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

export function c2v0a93(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c2v0a94(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c2v0a95(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a96(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a97(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a98(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a99(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a100(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a101(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a102(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a103(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a104(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a105(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a106(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a107(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a108(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a109(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a110(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a111(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a112(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a113(ctx,owner){

}

export function c2v0a114(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a115(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a116(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a117(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a118(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c2v0a119(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c2v0a120(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c2v0a121(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c2v0a122(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c2v0a123(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c2v0a124(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a125(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c2v0a126(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c2v0a127(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a128(ctx,owner){

}

export function c2v0a129(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c2v0a130(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a131(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a132(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a133(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v0a134(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a135(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a136(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a137(ctx,owner){

}

export function c2v0a138(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v0a139(ctx,owner){
owner.init = function(){
   owner.getItem = ctx.sound(owner);
   (owner.getItem)?.["attachSound"]?.("getItem");
   owner.useItem = ctx.sound(owner);
   (owner.useItem)?.["attachSound"]?.("useItem");
   owner.allEvents = 13;
   owner.timeDeading = 1;
   owner.timeStep = 0;
   owner.timeSteps = 25;
   owner.timeNow = 110;
   ctx.setField(owner.disAll,"_visible",1);
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
   owner.qqDir = "s2";
   owner.oldDir = "s2";
   owner.step = 0;
   owner.steps = 2;
   owner.auto = 0;
   owner.xp = 22;
   owner.yp = 9;
   owner.playerSex = 2;
   owner.itemList = [];
   owner.delayTime = 2000;
   ctx.setField((owner.itemShow)?.["btn"],"enabled",0);
   owner.eventAct = "movie";
   owner.oldMap = "map2";
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
   owner.event11 = 0;
   owner.event12 = 0;
   owner.event13 = 0;
   owner.event14 = 0;
   ctx.graph.goto(owner.map,"map2");
   owner.gamePause = 1;
   owner.eventNow = "opening";
   owner.getEventShow = 0;
   owner.eventStep = 0;
   ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
   ctx.setField(owner.movie,"_visible",0);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
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
         if(ctx.bool(owner.timeDeading == 1))
         {
            ((old)=>(owner.timeStep=old+1,old))(ctx.num(owner.timeStep));
            if(ctx.bool(ctx.lessEqual(owner.timeSteps,owner.timeStep)))
            {
               owner.timeStep = 0;
               ((old)=>(owner.timeNow=old-1,old))(ctx.num(owner.timeNow));
               owner.timec?.();
            }
         }
         ctx.trace?.(ctx.add(ctx.add((owner.qqDir)?.["substr"]?.((-ctx.num(1))),"__"),(((owner.map)?.["player"])?.["player"])?.["_currentframe"]));
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
            ctx.trace?.("change");
            if(ctx.bool(ctx.less(owner.steps,owner.step)))
            {
               ctx.trace?.("s1");
               owner.qqDir=ctx.add(owner.qqDir,"2");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "2")))
            {
               ctx.trace?.("s2");
               owner.qqDir = ctx.add(owner.oldDir,"2");
            }
            else
            {
               ctx.trace?.("s3");
               owner.qqDir=ctx.add(owner.qqDir,"2");
            }
            ctx.trace?.(owner.qqDir);
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
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(owner.itemList)?.["length"]):logicalLeft)(ctx.hitTest((owner.map)?.["side1"],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true))))
            {
               ctx.graph.goto(owner.itemShow,1);
               ((old)=>(owner.allEvents=old-1,old))(ctx.num(owner.allEvents));
               owner.gamePausing?.();
               ctx.graph.goto((owner.map)?.["player"],"throw1");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(owner.itemList)?.["length"]):logicalLeft)(ctx.hitTest((owner.map)?.["side2"],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true))))
            {
               ctx.graph.goto(owner.itemShow,1);
               ((old)=>(owner.allEvents=old-1,old))(ctx.num(owner.allEvents));
               owner.gamePausing?.();
               ctx.graph.goto((owner.map)?.["player"],"throw2");
            }
            else
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
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event1 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event2":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event2 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block2"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event3":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event3 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block3"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter3"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event4":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event4 = 1;
                           (owner.itemList)?.["push"]?.("item2");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item2");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event5":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event5 = 1;
                           (owner.itemList)?.["push"]?.("item3");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item3");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event6":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event6 = 1;
                           (owner.itemList)?.["push"]?.("item2");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item2");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event7":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event7 = 1;
                           (owner.itemList)?.["push"]?.("item4");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了箱子");
                           ctx.graph.goto(owner.itemShow,"item4");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event8":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event8 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block2"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event9":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event9 = 1;
                           (owner.itemList)?.["push"]?.("item5");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item5");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event10":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event10 = 1;
                           (owner.itemList)?.["push"]?.("item6");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了行李");
                           ctx.graph.goto(owner.itemShow,"item6");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event11":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event11 = 1;
                           (owner.itemList)?.["push"]?.("item7");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了炮弹");
                           ctx.graph.goto(owner.itemShow,"item7");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event12":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event12 = 1;
                           (owner.itemList)?.["push"]?.("item7");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了炮弹");
                           ctx.graph.goto(owner.itemShow,"item7");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event13":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event13 = 1;
                           (owner.itemList)?.["push"]?.("item7");
                           ctx.setField((owner.map)?.["block2"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                           owner.etShow?.("您得到了炮弹");
                           ctx.graph.goto(owner.itemShow,"item7");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event15":
                        owner.gamePausing?.();
                        owner.climbDown?.(457,121);
                        break;
                     case "event16":
                        owner.gamePausing?.();
                        owner.climbUp?.(434,286);
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
                     owner.talk2obj = (((owner.map)?.["talkAreas"])?.[i])?.["substr"]?.(8);
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
   ctx.trace?.(ctx.add("talkObj=",owner.talk2obj));
   owner.talk2npc?.(owner.talk2obj);
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
owner.checkEvents = function(){
   owner.itemList = [];
   if(ctx.bool(ctx.lessEqual(owner.allEvents,0)))
   {
      owner.timeDeading = 0;
      ctx.setField(owner.timer,"_visible",0);
      owner.eventNow = "event14";
      owner.getEventShow = 0;
      owner.gamePausing?.();
      owner.eventStep = 0;
      ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
      ctx.setField(owner.movie,"_visible",0);
      ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
   }
   else
   {
      owner.etShow?.(ctx.add(ctx.add("还剩",owner.allEvents),"件"));
      owner.gamePlay?.();
   }
};
owner.timec = function(){
   if(ctx.bool(ctx.lessEqual(0,owner.timeNow)))
   {
      owner.mm = (ctx.math)?.["floor"]?.((ctx.num(owner.timeNow)/ctx.num(60)));
      owner.ss = (ctx.num(owner.timeNow)-ctx.num((ctx.num(owner.mm)*ctx.num(60))));
      owner.mmShow = ctx.bool(ctx.lessEqual(10,owner.mm)) ? owner.mm : ctx.add("0",owner.mm);
      owner.ssShow = ctx.bool(ctx.lessEqual(10,owner.ss)) ? owner.ss : ctx.add("0",owner.ss);
      ctx.setField(owner.timer,"timer",ctx.add(ctx.add(owner.mmShow,":"),owner.ssShow));
   }
   else
   {
      owner.gamePausing?.();
      ctx.graph.goto(owner.map,"map2");
      ctx.stopAllSounds?.();
      ctx.graph.next(owner);
   }
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c2v0a140(ctx,owner){
owner.oldMap = "";
owner._quality = "HIGH";

}

export function c2v1a141(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c2v1a142(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c2v1a143(ctx,owner){

   ctx.stopDrag(owner);

}

export function c2v1a144(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c2v1a145(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c2v1a146(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c2v1a147(ctx,owner){

   ctx.graph.play(owner);

}

export function c2v1a148(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c2v1a149(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c2v1a150(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c2v1a151(ctx,owner){

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

export function c2v1a152(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c2v1a153(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c2v1a154(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c2v1a155(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c2v1a156(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c2v1a157(ctx,owner){

   owner._quality = "HIGH";

}

export function c2v1a158(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c2v1a159(ctx,owner){

   owner._quality = "LOW";

}

export function c2v1a160(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c2v1a161(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c2v1a162(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c2v1a163(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c2v1a164(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c2v1a165(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c2v1a166(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1),{play:true});
}

}

export function c2v1a167(ctx,owner){
owner.skipFrame = 3248;
ctx.trace?.(owner.skipFrame);

}

export function c2v1a168(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["disAll"],"_visible",0);
owner.skipFrame = 0;

}

export function c2v1a169(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.graph.stop(owner);
ctx.stopAllSounds?.();

}

export function c2v1a170(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c2v1a171(ctx,owner){
ctx.graph.stop(owner);
((owner.parent)?.["_parent"])?.["gamePlay"]?.();

}

export function c2v1a172(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(ctx.lessEqual(((((owner.parent)?.["_parent"])?.["life1"])?.["bar"])?.["_width"],15)))
{
   ctx.stopAllSounds?.();
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"],ctx.add((((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"])?.["_currentframe"],1));
}
else
{
   ctx.graph.goto(owner.parent,"normal");
}

}

export function c2v1a173(ctx,owner){
((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(((owner.parent)?.["_parent"])?.["lifeStep1"]))))((((owner.parent)?.["_parent"])?.["life1"])?.["bar"],"_width");

}

export function c2v1a174(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto(owner.parent,"normal");

}

export function c2v1a175(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto(owner.parent,"normal");

}

export function c2v1a176(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto(owner.parent,"normal");

}

export function c2v1a177(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c2v1a178(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a179(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a180(ctx,owner){
(owner.parent)?.["lightFail"]?.();
ctx.graph.goto(owner,1);

}

export function c2v1a181(ctx,owner){
(owner.parent)?.["lightWin"]?.();
ctx.graph.goto(owner,1);

}

export function c2v1a182(ctx,owner){
ctx.graph.stop(owner);
owner.tt = {};
ctx.setField(owner.tt,"onKeyDown",function()
{
   if(ctx.bool((ctx.keys)?.["isDown"]?.((((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"])))
   {
      (ctx.keys)?.["removeListener"]?.(owner.tt);
      ctx.graph.goto(owner,2);
   }
});
(ctx.keys)?.["addListener"]?.(owner.tt);

}

export function c2v1a183(ctx,owner){
owner.init = function(){
   owner.scaleStep = 0.4;
   owner.tempArrs = [1,1,2,2,3,4,5,5,5,5];
   owner.arrs = [];
   var _loc2_ = 0;
   var _loc1_;
   while(ctx.bool(ctx.less(_loc2_,10)))
   {
      ctx.setField(owner.arrs,_loc2_,[]);
      _loc1_ = 0;
      while(ctx.bool(ctx.less(_loc1_,(owner.tempArrs)?.[_loc2_])))
      {
         ctx.setField((owner.arrs)?.[_loc2_],_loc1_,ctx.add(ctx.randomInt?.(4),1));
         _loc1_ = ctx.add(_loc1_,1);
      }
      _loc2_ = ctx.add(_loc2_,1);
   }
   ctx.setField(owner.a1,"_visible",0);
   ctx.setField(owner.a2,"_visible",0);
   ctx.setField(owner.bar,"_visible",0);
   owner.upKey = 38;
   owner.leftKey = 37;
   owner.downKey = 40;
   owner.rightKey = 39;
   owner.level = 0;
   owner.keyCount = 0;
   owner.barHit = 30;
   owner.bw = 332;
   owner.lifeStep1 = 112.5;
   owner.lifeStep2 = [40,40,45,45,50,50,50,50,55,25];
   owner.ck = {};
   ctx.setField(owner.ck,"onKeyUp",function()
   {
      ctx.trace?.("_____________________");
      ctx.trace?.((ctx.keys)?.["getCode"]?.());
      ctx.trace?.(((owner.arrs)?.[owner.level])?.[owner.keyCount]);
      ctx.trace?.("_____________________");
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 1:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.upKey)))
      {
         owner.lightKey?.();
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 2:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.downKey)))
      {
         owner.lightKey?.();
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 3:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.leftKey)))
      {
         owner.lightKey?.();
      }
      else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.arrs)?.[owner.level])?.[owner.keyCount] == 4:logicalLeft)((ctx.keys)?.["getCode"]?.() == owner.rightKey)))
      {
         owner.lightKey?.();
      }
      else
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.barHit)))(owner.bar,"_width");
         owner.checkBar?.();
      }
   });
};
owner.lightKey = function(){
   ctx.setField((owner.arrShow)?.[ctx.add("arrt",owner.keyCount)],"_visible",1);
   ((old)=>(owner.keyCount=old+1,old))(ctx.num(owner.keyCount));
   if(ctx.bool(ctx.lessEqual(((owner.arrs)?.[owner.level])?.["length"],owner.keyCount)))
   {
      ctx.graph.goto(owner.lightShow,"win",{play:true});
      (ctx.keys)?.["removeListener"]?.(owner.ck);
      owner.onEnterFrame = undefined;
      ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",undefined);
      ctx.setField(((owner.bgMovie)?.["movie"])?.["fade"],"_visible",0);
   }
};
owner.lightWin = function(){
   ctx.trace?.(((owner.life2)?.["bar"])?.["_width"]);
   ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((owner.lifeStep2)?.[owner.level]))))((owner.life2)?.["bar"],"_width");
   ctx.trace?.(((owner.life2)?.["bar"])?.["_width"]);
   ((old)=>(owner.level=old+1,old))(ctx.num(owner.level));
   ctx.setField(owner.a1,"_visible",0);
   ctx.setField(owner.a2,"_visible",0);
   ctx.setField(owner.bar,"_visible",0);
   ctx.setField(owner.arrShow,"_visible",0);
   var _loc1_;
   if(ctx.bool(ctx.less(owner.level,10)))
   {
      _loc1_ = ctx.add(ctx.randomInt?.(3),1);
      ctx.graph.goto(owner.bgMovie,ctx.add("hit",_loc1_));
   }
   else
   {
      ctx.graph.goto(owner.bgMovie,"hit4");
   }
};
owner.lightFail = function(){
   ctx.setField(owner.a1,"_visible",0);
   ctx.setField(owner.a2,"_visible",0);
   ctx.setField(owner.bar,"_visible",0);
   ctx.setField(owner.arrShow,"_visible",0);
   ctx.graph.goto(owner.bgMovie,"hitted");
};
owner.levelInit = function(){
   owner.keyCount = 0;
   owner.barStep = ctx.add(4,(ctx.num(owner.level)/ctx.num(2)));
   owner.scaleStep = (ctx.num(owner.barStep)*ctx.num(0.1));
   var _loc1_ = 0;
   while(ctx.bool(ctx.less(_loc1_,5)))
   {
      ctx.graph.remove((owner.arrShow)?.[ctx.add("arr",_loc1_)]);
      ctx.graph.remove((owner.arrShow)?.[ctx.add("arrt",_loc1_)]);
      _loc1_ = ctx.add(_loc1_,1);
   }
   _loc1_ = 0;
   while(ctx.bool(ctx.less(_loc1_,((owner.arrs)?.[owner.level])?.["length"])))
   {
      owner.arrNow = ctx.attach(owner.arrShow,"arr",ctx.add("arr",_loc1_),_loc1_);
      ctx.setField(owner.arrNow,"_x",(ctx.num(60)*ctx.num(_loc1_)));
      ctx.graph.goto(owner.arrNow,((owner.arrs)?.[owner.level])?.[_loc1_]);
      owner.arrNow = ctx.attach(owner.arrShow,"arrt",ctx.add("arrt",_loc1_),ctx.add(_loc1_,5));
      ctx.setField(owner.arrNow,"_x",(ctx.num(60)*ctx.num(_loc1_)));
      ctx.graph.goto(owner.arrNow,((owner.arrs)?.[owner.level])?.[_loc1_]);
      ctx.setField(owner.arrNow,"_visible",0);
      _loc1_ = ctx.add(_loc1_,1);
   }
   ctx.setField(owner.bar,"_width",1);
   (ctx.keys)?.["addListener"]?.(owner.ck);
};
owner.gamePlay = function(){
   owner.levelInit?.();
   ctx.setField(owner.a1,"_visible",1);
   ctx.setField(owner.a2,"_visible",1);
   ctx.setField(owner.bar,"_visible",1);
   ctx.setField(owner.arrShow,"_visible",1);
   owner.onEnterFrame = function()
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.barStep)))(owner.bar,"_width");
      owner.checkBar?.();
   };
};
owner.checkBar = function(){
   if(ctx.bool(ctx.lessEqual(owner.bw,(owner.bar)?.["_width"])))
   {
      ctx.trace?.("hittttttttttttttttttttttttttttt");
      ctx.trace?.(owner.barStep);
      ctx.trace?.(owner.bw);
      ctx.trace?.((owner.bar)?.["_width"]);
      ctx.graph.goto(owner.lightShow,"fail",{play:true});
      ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",undefined);
      owner.tempSteps = 10;
      owner.tempStep = 0;
      owner.tempScale = (ctx.num((ctx.num((((owner.bgMovie)?.["movie"])?.["fish"])?.["_xscale"])-ctx.num(100)))/ctx.num(10));
      owner.tempx = (ctx.num((ctx.num(((owner.bgMovie)?.["movie"])?.["nx"])-ctx.num((((owner.bgMovie)?.["movie"])?.["fish"])?.["_x"])))/ctx.num(10));
      ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",function()
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.tempx)))(((owner.bgMovie)?.["movie"])?.["fish"],"_x");
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.tempScale))))(((owner.bgMovie)?.["movie"])?.["fish"],"_xscale");
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.tempScale))))(((owner.bgMovie)?.["movie"])?.["fish"],"_yscale");
         ((old)=>(owner.tempStep=old+1,old))(ctx.num(owner.tempStep));
         if(ctx.bool(ctx.less(owner.tempSteps,owner.tempStep)))
         {
            ctx.setField(((owner.bgMovie)?.["movie"])?.["fish"],"_x",((owner.bgMovie)?.["movie"])?.["nx"]);
            ctx.setField(((owner.bgMovie)?.["movie"])?.["fish"],"_xscale",100);
            ctx.setField(((owner.bgMovie)?.["movie"])?.["fish"],"_yscale",100);
            ctx.setField((owner.bgMovie)?.["movie"],"onEnterFrame",undefined);
         }
      });
      (ctx.keys)?.["removeListener"]?.(owner.ck);
      owner.onEnterFrame = undefined;
   }
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c2v1a184(ctx,owner){
owner.skipFrame = 759;

}

export function c2v1a185(ctx,owner){
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(2);

}

export function c2v1a186(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);

}

export function c2v1a187(ctx,owner){
ctx.stopAllSounds?.();

}

export function c2v1a188(ctx,owner){
owner.skipFrame = 0;

}

export function c2v1a189(ctx,owner){
ctx.graph.stop(owner);
owner._quality = "LOW";

}

export function c2v1a190(ctx,owner){
owner._quality = "HIGH";

}

export function c2v1a191(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a192(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c2v1a193(ctx,owner){
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

export function c2v1a194(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c2v1a195(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c2v1a196(ctx,owner){

}

export function c2v1a197(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
(((owner.parent)?.["_parent"])?.["_parent"])?.["trace1"]?.();
ctx.trace?.("1_______________________________________");
((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["trace1"]?.();
ctx.trace?.("2_______________________________________");
((owner.parent)?.["_parent"])?.["trace1"]?.();
ctx.trace?.("3_______________________________________");
ctx.trace?.(this);
ctx.trace?.("_________________JJ__________________");

}

export function c2v1a198(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a199(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a200(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a201(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c2v1a202(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1),{play:true});
}

}

export function c2v1a203(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a204(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c2v1a205(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c2v1a206(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a207(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);
ctx.setField(this,"_x",ctx.add(ctx.add((-ctx.num((owner.parent)?.["_x"])),(((owner.parent)?.["_parent"])?.["player"])?.["_x"]),((((owner.parent)?.["_parent"])?.["player"])?.["player"])?.["_x"]));
ctx.setField(this,"_y",ctx.add(ctx.add((-ctx.num((owner.parent)?.["_y"])),(((owner.parent)?.["_parent"])?.["player"])?.["_y"]),((((owner.parent)?.["_parent"])?.["player"])?.["player"])?.["_y"]));

}

export function c2v1a208(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a209(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map6":
      owner.appearx = 352;
      owner.appeary = 174;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "as2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 538;
      owner.appeary = 202;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 633;
      owner.appeary = 166;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 724;
      owner.appeary = 133;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
      break;
   default:
      owner.appearx = 334;
      owner.appeary = 236;
      owner._temp_10 = owner.parent;
      owner._temp_9 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
owner.map = "map2";
ctx.setField(owner.parent,"beenMap2",1);
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","block2","block3"];
owner.talkAreas = [];
owner.events = ["event1","event2","event3"];
owner.changes = ["map3","map4","map5","map6"];
owner.changeMovies = ["event0","event0","event0","event000"];
owner.blockx = [188,146,75,258];
owner.blocky = [215,180,256,231];
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
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = owner.i;
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.i)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.i)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.setField(owner.side1,"_visible",0);
ctx.setField(owner.side2,"_visible",0);
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v1a210(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map3";
ctx.setField(owner.parent,"beenMap3",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event4","event5"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1"];
owner.changeMovies = ["event00"];
owner.blockx = [263,63];
owner.blocky = [260,350];
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
owner.i = 4;
while(ctx.bool(ctx.less(owner.i,6)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(4));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v1a211(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 603;
owner.appeary = 301;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map4";
ctx.setField(owner.parent,"beenMap4",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event6","event7","event8"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1","block2"];
owner.changeMovies = ["event00"];
owner.blockx = [415,235,498];
owner.blocky = [255,230,358];
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
owner.i = 6;
while(ctx.bool(ctx.less(owner.i,9)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(6));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v1a212(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 640;
owner.appeary = 249;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map5";
ctx.setField(owner.parent,"beenMap5",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event9","event10"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1"];
owner.changeMovies = ["event00"];
owner.blockx = [300,435];
owner.blocky = [209,225];
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
owner.i = 9;
while(ctx.bool(ctx.less(owner.i,11)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(9));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v1a213(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 505;
owner.appeary = 100;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "map6";
ctx.setField(owner.parent,"beenMap6",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event11","event12","event13","event15","event16"];
owner.changes = ["map2"];
owner.blocks = ["block0","block1","block2","block3"];
owner.changeMovies = ["event000"];
owner.blockx = [499,278,169,642];
owner.blocky = [390,190,199,291];
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
owner.i = 11;
while(ctx.bool(ctx.less(owner.i,14)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 1))
   {
      owner.tt = (ctx.num(owner.i)-ctx.num(11));
      ctx.graph.goto(ctx.graph.named(owner,ctx.add("event",owner.i)),2);
      ctx.graph.goto((owner.hitter)?.[ctx.add("hitter",owner.tt)],2);
      ctx.setField(ctx.graph.named(owner,ctx.add("block",owner.tt)),"_visible",0);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.swapDepths(owner.topBlock,5000000);
ctx.setField(owner.player,"_x",owner.appearx);
ctx.setField(owner.player,"_y",owner.appeary);

}

export function c2v1a214(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a215(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c2v1a216(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a217(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c2v1a218(ctx,owner){
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

export function c2v1a219(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c2v1a220(ctx,owner){
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
ctx.setField(owner.gkShow,"_visible",0);
ctx.setField((owner.allShow)?.["hitter"],"_visible",0);
owner.listItem?.();

}

export function c2v1a221(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a222(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a223(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c2v1a224(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c2v1a225(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);

}

export function c2v1a226(ctx,owner){
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

export function c2v1a227(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c2v1a228(ctx,owner){
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
ctx.graph.play(owner);

}

export function c2v1a229(ctx,owner){
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
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c2v1a230(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a231(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a232(ctx,owner){
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

export function c2v1a233(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c2v1a234(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c2v1a235(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a236(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a237(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a238(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a239(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a240(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a241(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a242(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a243(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a244(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a245(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a246(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a247(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a248(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a249(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a250(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a251(ctx,owner){

}

export function c2v1a252(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a253(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a254(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a255(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a256(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a257(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a258(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c2v1a259(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c2v1a260(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c2v1a261(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a262(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c2v1a263(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c2v1a264(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c2v1a265(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c2v1a266(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c2v1a267(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("gp=",(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]));
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c2v1a268(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a269(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a270(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a271(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a272(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c2v1a273(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a274(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a275(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a276(ctx,owner){

}

export function c2v1a277(ctx,owner){
ctx.graph.stop(owner);

}

export function c2v1a278(ctx,owner){
owner.init = function(){
   owner.getItem = ctx.sound(owner);
   (owner.getItem)?.["attachSound"]?.("getItem");
   owner.useItem = ctx.sound(owner);
   (owner.useItem)?.["attachSound"]?.("useItem");
   owner.allEvents = 13;
   owner.timeDeading = 1;
   owner.timeStep = 0;
   owner.timeSteps = 25;
   owner.timeNow = 110;
   ctx.setField(owner.disAll,"_visible",1);
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
   owner.qqDir = "s2";
   owner.oldDir = "s2";
   owner.step = 0;
   owner.steps = 2;
   owner.auto = 0;
   owner.xp = 22;
   owner.yp = 9;
   owner.playerSex = 2;
   owner.itemList = [];
   owner.delayTime = 2000;
   ctx.setField((owner.itemShow)?.["btn"],"enabled",0);
   owner.eventAct = "movie";
   owner.oldMap = "map2";
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
   owner.event11 = 0;
   owner.event12 = 0;
   owner.event13 = 0;
   owner.event14 = 0;
   ctx.graph.goto(owner.map,"map2");
   owner.gamePause = 1;
   owner.eventNow = "opening";
   owner.getEventShow = 0;
   owner.eventStep = 0;
   ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
   ctx.setField(owner.movie,"_visible",0);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
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
         if(ctx.bool(owner.timeDeading == 1))
         {
            ((old)=>(owner.timeStep=old+1,old))(ctx.num(owner.timeStep));
            if(ctx.bool(ctx.lessEqual(owner.timeSteps,owner.timeStep)))
            {
               owner.timeStep = 0;
               ((old)=>(owner.timeNow=old-1,old))(ctx.num(owner.timeNow));
               owner.timec?.();
            }
         }
         ctx.trace?.(ctx.add(ctx.add((owner.qqDir)?.["substr"]?.((-ctx.num(1))),"__"),(((owner.map)?.["player"])?.["player"])?.["_currentframe"]));
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
            ctx.trace?.("change");
            if(ctx.bool(ctx.less(owner.steps,owner.step)))
            {
               ctx.trace?.("s1");
               owner.qqDir=ctx.add(owner.qqDir,"2");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "3":logicalLeft)((owner.oldDir)?.["substr"]?.((-ctx.num(1))) != "2")))
            {
               ctx.trace?.("s2");
               owner.qqDir = ctx.add(owner.oldDir,"2");
            }
            else
            {
               ctx.trace?.("s3");
               owner.qqDir=ctx.add(owner.qqDir,"2");
            }
            ctx.trace?.(owner.qqDir);
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
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(owner.itemList)?.["length"]):logicalLeft)(ctx.hitTest((owner.map)?.["side1"],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true))))
            {
               ctx.graph.goto(owner.itemShow,1);
               ((old)=>(owner.allEvents=old-1,old))(ctx.num(owner.allEvents));
               owner.gamePausing?.();
               ctx.graph.goto((owner.map)?.["player"],"throw1");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(owner.itemList)?.["length"]):logicalLeft)(ctx.hitTest((owner.map)?.["side2"],((owner.map)?.["player"])?.["_x"],((owner.map)?.["player"])?.["_y"],true))))
            {
               ctx.graph.goto(owner.itemShow,1);
               ((old)=>(owner.allEvents=old-1,old))(ctx.num(owner.allEvents));
               owner.gamePausing?.();
               ctx.graph.goto((owner.map)?.["player"],"throw2");
            }
            else
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
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event1 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event2":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event2 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block2"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event3":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event3 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block3"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter3"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event4":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event4 = 1;
                           (owner.itemList)?.["push"]?.("item2");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item2");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event5":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event5 = 1;
                           (owner.itemList)?.["push"]?.("item3");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item3");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event6":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event6 = 1;
                           (owner.itemList)?.["push"]?.("item2");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item2");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event7":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event7 = 1;
                           (owner.itemList)?.["push"]?.("item4");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了箱子");
                           ctx.graph.goto(owner.itemShow,"item4");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event8":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event8 = 1;
                           (owner.itemList)?.["push"]?.("item1");
                           ctx.setField((owner.map)?.["block2"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                           owner.etShow?.("您得到了木桶");
                           ctx.graph.goto(owner.itemShow,"item1");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event9":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event9 = 1;
                           (owner.itemList)?.["push"]?.("item5");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了椅子");
                           ctx.graph.goto(owner.itemShow,"item5");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event10":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event10 = 1;
                           (owner.itemList)?.["push"]?.("item6");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了行李");
                           ctx.graph.goto(owner.itemShow,"item6");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event11":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event11 = 1;
                           (owner.itemList)?.["push"]?.("item7");
                           ctx.setField((owner.map)?.["block0"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                           owner.etShow?.("您得到了炮弹");
                           ctx.graph.goto(owner.itemShow,"item7");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event12":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event12 = 1;
                           (owner.itemList)?.["push"]?.("item7");
                           ctx.setField((owner.map)?.["block1"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                           owner.etShow?.("您得到了炮弹");
                           ctx.graph.goto(owner.itemShow,"item7");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event13":
                        (owner.getItem)?.["start"]?.();
                        if(ctx.bool(ctx.less((owner.itemList)?.["length"],1)))
                        {
                           owner.event13 = 1;
                           (owner.itemList)?.["push"]?.("item7");
                           ctx.setField((owner.map)?.["block2"],"_visible",0);
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                           owner.etShow?.("您得到了炮弹");
                           ctx.graph.goto(owner.itemShow,"item7");
                        }
                        else
                        {
                           owner.etShow?.("一次只能拿一件");
                        }
                        break;
                     case "event15":
                        owner.gamePausing?.();
                        owner.climbDown?.(457,121);
                        break;
                     case "event16":
                        owner.gamePausing?.();
                        owner.climbUp?.(434,286);
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
                     owner.talk2obj = (((owner.map)?.["talkAreas"])?.[i])?.["substr"]?.(8);
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
   ctx.trace?.(ctx.add("talkObj=",owner.talk2obj));
   owner.talk2npc?.(owner.talk2obj);
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
owner.checkEvents = function(){
   owner.itemList = [];
   if(ctx.bool(ctx.lessEqual(owner.allEvents,0)))
   {
      owner.timeDeading = 0;
      ctx.setField(owner.timer,"_visible",0);
      owner.eventNow = "event14";
      owner.getEventShow = 0;
      owner.gamePausing?.();
      owner.eventStep = 0;
      ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
      ctx.setField(owner.movie,"_visible",0);
      ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
   }
   else
   {
      owner.etShow?.(ctx.add(ctx.add("还剩",owner.allEvents),"件"));
      owner.gamePlay?.();
   }
};
owner.timec = function(){
   if(ctx.bool(ctx.lessEqual(0,owner.timeNow)))
   {
      owner.mm = (ctx.math)?.["floor"]?.((ctx.num(owner.timeNow)/ctx.num(60)));
      owner.ss = (ctx.num(owner.timeNow)-ctx.num((ctx.num(owner.mm)*ctx.num(60))));
      owner.mmShow = ctx.bool(ctx.lessEqual(10,owner.mm)) ? owner.mm : ctx.add("0",owner.mm);
      owner.ssShow = ctx.bool(ctx.lessEqual(10,owner.ss)) ? owner.ss : ctx.add("0",owner.ss);
      ctx.setField(owner.timer,"timer",ctx.add(ctx.add(owner.mmShow,":"),owner.ssShow));
   }
   else
   {
      owner.gamePausing?.();
      ctx.graph.goto(owner.map,"map2");
      ctx.stopAllSounds?.();
      ctx.graph.next(owner);
   }
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c2v1a279(ctx,owner){
owner.oldMap = "";
owner._quality = "HIGH";

}

export function c2v1a280(ctx,owner){
while(ctx.bool(true))
{
}

}

export const variant0={sourceBytes:3643199,frames:{"3":{"1":(ctx,owner)=>{c2v0a113.call(owner,ctx,owner);}},"16":{"1":(ctx,owner)=>{c2v0a58.call(owner,ctx,owner);}},"26":{"1":(ctx,owner)=>{c2v0a95.call(owner,ctx,owner);}},"35":{"1":(ctx,owner)=>{c2v0a105.call(owner,ctx,owner);}},"36":{"1":(ctx,owner)=>{c2v0a107.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a108.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v0a109.call(owner,ctx,owner);}},"43":{"1":(ctx,owner)=>{c2v0a115.call(owner,ctx,owner);}},"50":{"1":(ctx,owner)=>{c2v0a124.call(owner,ctx,owner);}},"55":{"1":(ctx,owner)=>{c2v0a129.call(owner,ctx,owner);}},"56":{"1":(ctx,owner)=>{c2v0a130.call(owner,ctx,owner);}},"64":{"1":(ctx,owner)=>{c2v0a131.call(owner,ctx,owner);}},"72":{"1":(ctx,owner)=>{c2v0a132.call(owner,ctx,owner);}},"80":{"1":(ctx,owner)=>{c2v0a133.call(owner,ctx,owner);}},"81":{"1":(ctx,owner)=>{c2v0a134.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a135.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v0a136.call(owner,ctx,owner);}},"125":{"1":(ctx,owner)=>{c2v0a29.call(owner,ctx,owner);}},"158":{"1":(ctx,owner)=>{c2v0a57.call(owner,ctx,owner);}},"175":{"1":(ctx,owner)=>{c2v0a69.call(owner,ctx,owner);}},"282":{"9":(ctx,owner)=>{c2v0a96.call(owner,ctx,owner);}},"289":{"9":(ctx,owner)=>{c2v0a97.call(owner,ctx,owner);}},"294":{"9":(ctx,owner)=>{c2v0a98.call(owner,ctx,owner);}},"299":{"9":(ctx,owner)=>{c2v0a99.call(owner,ctx,owner);}},"304":{"9":(ctx,owner)=>{c2v0a100.call(owner,ctx,owner);}},"313":{"9":(ctx,owner)=>{c2v0a101.call(owner,ctx,owner);}},"318":{"9":(ctx,owner)=>{c2v0a102.call(owner,ctx,owner);}},"327":{"9":(ctx,owner)=>{c2v0a103.call(owner,ctx,owner);}},"340":{"26":(ctx,owner)=>{c2v0a104.call(owner,ctx,owner);}},"355":{"28":(ctx,owner)=>{c2v0a106.call(owner,ctx,owner);}},"370":{"34":(ctx,owner)=>{c2v0a110.call(owner,ctx,owner);}},"385":{"34":(ctx,owner)=>{c2v0a111.call(owner,ctx,owner);}},"399":{"32":(ctx,owner)=>{c2v0a112.call(owner,ctx,owner);}},"417":{"24":(ctx,owner)=>{c2v0a114.call(owner,ctx,owner);}},"431":{"32":(ctx,owner)=>{c2v0a116.call(owner,ctx,owner);}},"447":{"24":(ctx,owner)=>{c2v0a117.call(owner,ctx,owner);}},"469":{"6":(ctx,owner)=>{c2v0a120.call(owner,ctx,owner);},"10":(ctx,owner)=>{c2v0a118.call(owner,ctx,owner);},"24":(ctx,owner)=>{c2v0a119.call(owner,ctx,owner);}},"490":{"4":(ctx,owner)=>{c2v0a123.call(owner,ctx,owner);},"14":(ctx,owner)=>{c2v0a121.call(owner,ctx,owner);},"24":(ctx,owner)=>{c2v0a122.call(owner,ctx,owner);}},"515":{"54":(ctx,owner)=>{c2v0a125.call(owner,ctx,owner);}},"533":{"54":(ctx,owner)=>{c2v0a126.call(owner,ctx,owner);}},"534":{"1":(ctx,owner)=>{c2v0a127.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a128.call(owner,ctx,owner);}},"1018":{"1":(ctx,owner)=>{c2v0a25.call(owner,ctx,owner);}},"1029":{"1":(ctx,owner)=>{c2v0a26.call(owner,ctx,owner);},"3248":(ctx,owner)=>{c2v0a27.call(owner,ctx,owner);},"3252":(ctx,owner)=>{c2v0a28.call(owner,ctx,owner);}},"1289":{"1":(ctx,owner)=>{c2v0a30.call(owner,ctx,owner);},"47":(ctx,owner)=>{c2v0a31.call(owner,ctx,owner);}},"1312":{"8":(ctx,owner)=>{c2v0a33.call(owner,ctx,owner);},"46":(ctx,owner)=>{c2v0a32.call(owner,ctx,owner);}},"1326":{"30":(ctx,owner)=>{c2v0a34.call(owner,ctx,owner);}},"1330":{"30":(ctx,owner)=>{c2v0a35.call(owner,ctx,owner);}},"1335":{"30":(ctx,owner)=>{c2v0a36.call(owner,ctx,owner);}},"1366":{"243":(ctx,owner)=>{c2v0a37.call(owner,ctx,owner);}},"1367":{"1":(ctx,owner)=>{c2v0a38.call(owner,ctx,owner);}},"1395":{"1":(ctx,owner)=>{c2v0a39.call(owner,ctx,owner);},"39":(ctx,owner)=>{c2v0a41.call(owner,ctx,owner);},"107":(ctx,owner)=>{c2v0a40.call(owner,ctx,owner);}},"1398":{"1":(ctx,owner)=>{c2v0a42.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a43.call(owner,ctx,owner);}},"1530":{"1":(ctx,owner)=>{c2v0a44.call(owner,ctx,owner);},"759":(ctx,owner)=>{c2v0a47.call(owner,ctx,owner);},"760":(ctx,owner)=>{c2v0a48.call(owner,ctx,owner);},"778":(ctx,owner)=>{c2v0a49.call(owner,ctx,owner);},"779":(ctx,owner)=>{c2v0a50.call(owner,ctx,owner);},"1406":(ctx,owner)=>{c2v0a45.call(owner,ctx,owner);},"1407":(ctx,owner)=>{c2v0a46.call(owner,ctx,owner);}},"1540":{"1":(ctx,owner)=>{c2v0a51.call(owner,ctx,owner);}},"1543":{"1":(ctx,owner)=>{c2v0a52.call(owner,ctx,owner);}},"1544":{"1":(ctx,owner)=>{c2v0a53.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v0a54.call(owner,ctx,owner);}},"1547":{"1":(ctx,owner)=>{c2v0a55.call(owner,ctx,owner);}},"1548":{"1":(ctx,owner)=>{c2v0a56.call(owner,ctx,owner);}},"1625":{"1":(ctx,owner)=>{c2v0a59.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a61.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v0a60.call(owner,ctx,owner);}},"1633":{"1":(ctx,owner)=>{c2v0a62.call(owner,ctx,owner);}},"1637":{"1":(ctx,owner)=>{c2v0a63.call(owner,ctx,owner);}},"1640":{"1":(ctx,owner)=>{c2v0a64.call(owner,ctx,owner);}},"1642":{"1":(ctx,owner)=>{c2v0a65.call(owner,ctx,owner);}},"1651":{"1":(ctx,owner)=>{c2v0a66.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a67.call(owner,ctx,owner);}},"1726":{"1":(ctx,owner)=>{c2v0a68.call(owner,ctx,owner);}},"1761":{"1":(ctx,owner)=>{c2v0a70.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v0a71.call(owner,ctx,owner);},"5":(ctx,owner)=>{c2v0a72.call(owner,ctx,owner);},"7":(ctx,owner)=>{c2v0a73.call(owner,ctx,owner);},"9":(ctx,owner)=>{c2v0a74.call(owner,ctx,owner);}},"1775":{"1":(ctx,owner)=>{c2v0a75.call(owner,ctx,owner);}},"1833":{"1":(ctx,owner)=>{c2v0a76.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a77.call(owner,ctx,owner);}},"1860":{"1":(ctx,owner)=>{c2v0a78.call(owner,ctx,owner);}},"1873":{"1":(ctx,owner)=>{c2v0a79.call(owner,ctx,owner);}},"1874":{"1":(ctx,owner)=>{c2v0a80.call(owner,ctx,owner);}},"1875":{"1":(ctx,owner)=>{c2v0a81.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a83.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v0a82.call(owner,ctx,owner);},"20":(ctx,owner)=>{c2v0a84.call(owner,ctx,owner);}},"1886":{"1":(ctx,owner)=>{c2v0a85.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a88.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v0a86.call(owner,ctx,owner);},"12":(ctx,owner)=>{c2v0a87.call(owner,ctx,owner);},"20":(ctx,owner)=>{c2v0a89.call(owner,ctx,owner);}},"1896":{"1":(ctx,owner)=>{c2v0a90.call(owner,ctx,owner);}},"1897":{"1":(ctx,owner)=>{c2v0a91.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a93.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v0a92.call(owner,ctx,owner);},"20":(ctx,owner)=>{c2v0a94.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c2v0a137.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v0a138.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v0a139.call(owner,ctx,owner);},"4":(ctx,owner)=>{c2v0a140.call(owner,ctx,owner);}}},frameActions:{"3":{"1":[c2v0a113]},"16":{"1":[c2v0a58]},"26":{"1":[c2v0a95]},"35":{"1":[c2v0a105]},"36":{"1":[c2v0a107],"2":[c2v0a108],"3":[c2v0a109]},"43":{"1":[c2v0a115]},"50":{"1":[c2v0a124]},"55":{"1":[c2v0a129]},"56":{"1":[c2v0a130]},"64":{"1":[c2v0a131]},"72":{"1":[c2v0a132]},"80":{"1":[c2v0a133]},"81":{"1":[c2v0a134],"2":[c2v0a135],"3":[c2v0a136]},"125":{"1":[c2v0a29]},"158":{"1":[c2v0a57]},"175":{"1":[c2v0a69]},"282":{"9":[c2v0a96]},"289":{"9":[c2v0a97]},"294":{"9":[c2v0a98]},"299":{"9":[c2v0a99]},"304":{"9":[c2v0a100]},"313":{"9":[c2v0a101]},"318":{"9":[c2v0a102]},"327":{"9":[c2v0a103]},"340":{"26":[c2v0a104]},"355":{"28":[c2v0a106]},"370":{"34":[c2v0a110]},"385":{"34":[c2v0a111]},"399":{"32":[c2v0a112]},"417":{"24":[c2v0a114]},"431":{"32":[c2v0a116]},"447":{"24":[c2v0a117]},"469":{"6":[c2v0a120],"10":[c2v0a118],"24":[c2v0a119]},"490":{"4":[c2v0a123],"14":[c2v0a121],"24":[c2v0a122]},"515":{"54":[c2v0a125]},"533":{"54":[c2v0a126]},"534":{"1":[c2v0a127],"2":[c2v0a128]},"1018":{"1":[c2v0a25]},"1029":{"1":[c2v0a26],"3248":[c2v0a27],"3252":[c2v0a28]},"1289":{"1":[c2v0a30],"47":[c2v0a31]},"1312":{"8":[c2v0a33],"46":[c2v0a32]},"1326":{"30":[c2v0a34]},"1330":{"30":[c2v0a35]},"1335":{"30":[c2v0a36]},"1366":{"243":[c2v0a37]},"1367":{"1":[c2v0a38]},"1395":{"1":[c2v0a39],"39":[c2v0a41],"107":[c2v0a40]},"1398":{"1":[c2v0a42],"2":[c2v0a43]},"1530":{"1":[c2v0a44],"759":[c2v0a47],"760":[c2v0a48],"778":[c2v0a49],"779":[c2v0a50],"1406":[c2v0a45],"1407":[c2v0a46]},"1540":{"1":[c2v0a51]},"1543":{"1":[c2v0a52]},"1544":{"1":[c2v0a53],"11":[c2v0a54]},"1547":{"1":[c2v0a55]},"1548":{"1":[c2v0a56]},"1625":{"1":[c2v0a59],"2":[c2v0a61],"11":[c2v0a60]},"1633":{"1":[c2v0a62]},"1637":{"1":[c2v0a63]},"1640":{"1":[c2v0a64]},"1642":{"1":[c2v0a65]},"1651":{"1":[c2v0a66],"2":[c2v0a67]},"1726":{"1":[c2v0a68]},"1761":{"1":[c2v0a70],"3":[c2v0a71],"5":[c2v0a72],"7":[c2v0a73],"9":[c2v0a74]},"1775":{"1":[c2v0a75]},"1833":{"1":[c2v0a76],"2":[c2v0a77]},"1860":{"1":[c2v0a78]},"1873":{"1":[c2v0a79]},"1874":{"1":[c2v0a80]},"1875":{"1":[c2v0a81],"2":[c2v0a83],"11":[c2v0a82],"20":[c2v0a84]},"1886":{"1":[c2v0a85],"2":[c2v0a88],"11":[c2v0a86],"12":[c2v0a87],"20":[c2v0a89]},"1896":{"1":[c2v0a90]},"1897":{"1":[c2v0a91],"2":[c2v0a93],"11":[c2v0a92],"20":[c2v0a94]},"main":{"1":[c2v0a137],"2":[c2v0a138],"3":[c2v0a139],"4":[c2v0a140]}},buttons:{"1533":{"release":(ctx,owner)=>{c2v0a0.call(owner,ctx,owner);}},"1569":{"press":(ctx,owner)=>{c2v0a1.call(owner,ctx,owner);},"release":(ctx,owner)=>{c2v0a2.call(owner,ctx,owner);}},"1574":{"release":(ctx,owner)=>{c2v0a3.call(owner,ctx,owner);}},"1590":{"release":(ctx,owner)=>{c2v0a4.call(owner,ctx,owner);}},"1592":{"release":(ctx,owner)=>{c2v0a5.call(owner,ctx,owner);}},"1603":{"release":(ctx,owner)=>{c2v0a6.call(owner,ctx,owner);}},"1609":{"release":(ctx,owner)=>{c2v0a7.call(owner,ctx,owner);}},"1614":{"release":(ctx,owner)=>{c2v0a8.call(owner,ctx,owner);}},"1623":{"release":(ctx,owner)=>{c2v0a9.call(owner,ctx,owner);}},"1767":{"release":(ctx,owner)=>{c2v0a10.call(owner,ctx,owner);}},"1813":{"release":(ctx,owner)=>{c2v0a11.call(owner,ctx,owner);}},"1814":{"release":(ctx,owner)=>{c2v0a12.call(owner,ctx,owner);}},"1815":{"release":(ctx,owner)=>{c2v0a13.call(owner,ctx,owner);}},"1816":{"release":(ctx,owner)=>{c2v0a14.call(owner,ctx,owner);}},"1817":{"release":(ctx,owner)=>{c2v0a15.call(owner,ctx,owner);}},"1840":{"release":(ctx,owner)=>{c2v0a16.call(owner,ctx,owner);}},"1843":{"release":(ctx,owner)=>{c2v0a17.call(owner,ctx,owner);}},"1847":{"release":(ctx,owner)=>{c2v0a18.call(owner,ctx,owner);}},"1849":{"release":(ctx,owner)=>{c2v0a19.call(owner,ctx,owner);}},"1851":{"release":(ctx,owner)=>{c2v0a20.call(owner,ctx,owner);}},"1853":{"release":(ctx,owner)=>{c2v0a21.call(owner,ctx,owner);}},"1859":{"press":(ctx,owner)=>{c2v0a22.call(owner,ctx,owner);},"release":(ctx,owner)=>{c2v0a23.call(owner,ctx,owner);}},"1905":{"release":(ctx,owner)=>{c2v0a24.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"3":[],"16":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"26":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"35":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"36":[],"43":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"50":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"55":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"56":[],"64":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"72":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"80":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"81":[],"125":["_totalframes","skipFrame"],"158":["_totalframes","skipFrame"],"175":["_x","_y","onEnterFrame","x","y"],"282":[],"289":[],"294":[],"299":[],"304":[],"313":[],"318":[],"327":[],"340":[],"355":[],"370":[],"385":[],"399":[],"417":[],"431":[],"447":[],"469":["items"],"490":["items"],"515":[],"533":[],"534":[],"1018":["_totalframes","a"],"1029":["_totalframes","skipFrame"],"1289":["fish","nx","onEnterFrame"],"1312":[],"1326":[],"1330":[],"1335":[],"1366":[],"1367":[],"1395":[],"1398":["a1","a2","arrNow","arrShow","arrs","bar","barHit","barStep","bgMovie","bw","checkBar","ck","downKey","gamePlay","init","keyCount","leftKey","level","levelInit","life2","lifeStep1","lifeStep2","lightFail","lightKey","lightShow","lightWin","onEnterFrame","rightKey","scaleStep","tempArrs","tempScale","tempStep","tempSteps","tempx","tt","upKey"],"1530":["_quality","skipFrame"],"1533":["aim"],"1540":[],"1543":[],"1544":["_currentframe","back","onEnterFrame"],"1547":["component","track_mc"],"1548":[],"1569":[],"1574":[],"1590":["qqxflash_home"],"1592":[],"1603":[],"1609":["helper"],"1614":[],"1623":[],"1625":["btn"],"1633":["_totalframes","a"],"1637":[],"1640":["_visible"],"1642":["_visible"],"1651":["items"],"1726":[],"1761":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","hitter","i","map","player","side1","side2","talkAreas","tempDepths","topBlock","tt"],"1767":["gp"],"1775":[],"1813":[],"1814":[],"1815":[],"1816":[],"1817":[],"1833":["actKey","downKey","leftKey","rightKey","upKey"],"1840":["_quality"],"1843":["_quality"],"1847":["_quality"],"1849":[],"1851":["allShow"],"1853":["allShow"],"1859":["draging","onEnterFrame"],"1860":["_x","bb","draging","onEnterFrame"],"1873":["btn"],"1874":["allShow","checkKey","gkShow","itemList","listItem","newKey"],"1875":["btn","gp"],"1886":["i","onEnterFrame"],"1896":[],"1897":["delay","fadeOut","item"],"1905":[],"main":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map2txt5","mm","mmShow","movie","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","ss","ssShow","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timec","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:3660069,frames:{"3":{"1":(ctx,owner)=>{c2v1a251.call(owner,ctx,owner);}},"16":{"1":(ctx,owner)=>{c2v1a198.call(owner,ctx,owner);}},"26":{"1":(ctx,owner)=>{c2v1a235.call(owner,ctx,owner);}},"35":{"1":(ctx,owner)=>{c2v1a244.call(owner,ctx,owner);}},"36":{"1":(ctx,owner)=>{c2v1a246.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a247.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v1a248.call(owner,ctx,owner);}},"43":{"1":(ctx,owner)=>{c2v1a254.call(owner,ctx,owner);}},"50":{"1":(ctx,owner)=>{c2v1a261.call(owner,ctx,owner);}},"55":{"1":(ctx,owner)=>{c2v1a266.call(owner,ctx,owner);}},"56":{"1":(ctx,owner)=>{c2v1a269.call(owner,ctx,owner);}},"64":{"1":(ctx,owner)=>{c2v1a270.call(owner,ctx,owner);}},"72":{"1":(ctx,owner)=>{c2v1a271.call(owner,ctx,owner);}},"80":{"1":(ctx,owner)=>{c2v1a272.call(owner,ctx,owner);}},"81":{"1":(ctx,owner)=>{c2v1a273.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a274.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v1a275.call(owner,ctx,owner);}},"126":{"1":(ctx,owner)=>{c2v1a170.call(owner,ctx,owner);}},"159":{"1":(ctx,owner)=>{c2v1a197.call(owner,ctx,owner);}},"179":{"1":(ctx,owner)=>{c2v1a215.call(owner,ctx,owner);}},"286":{"9":(ctx,owner)=>{c2v1a236.call(owner,ctx,owner);}},"293":{"9":(ctx,owner)=>{c2v1a237.call(owner,ctx,owner);}},"298":{"10":(ctx,owner)=>{c2v1a238.call(owner,ctx,owner);}},"303":{"9":(ctx,owner)=>{c2v1a239.call(owner,ctx,owner);}},"308":{"9":(ctx,owner)=>{c2v1a240.call(owner,ctx,owner);}},"317":{"9":(ctx,owner)=>{c2v1a241.call(owner,ctx,owner);}},"322":{"9":(ctx,owner)=>{c2v1a242.call(owner,ctx,owner);}},"340":{"9":(ctx,owner)=>{c2v1a243.call(owner,ctx,owner);}},"353":{"26":(ctx,owner)=>{c2v1a245.call(owner,ctx,owner);}},"377":{"26":(ctx,owner)=>{c2v1a249.call(owner,ctx,owner);}},"391":{"28":(ctx,owner)=>{c2v1a250.call(owner,ctx,owner);}},"405":{"28":(ctx,owner)=>{c2v1a252.call(owner,ctx,owner);}},"419":{"32":(ctx,owner)=>{c2v1a253.call(owner,ctx,owner);}},"435":{"28":(ctx,owner)=>{c2v1a255.call(owner,ctx,owner);}},"449":{"32":(ctx,owner)=>{c2v1a256.call(owner,ctx,owner);}},"465":{"28":(ctx,owner)=>{c2v1a257.call(owner,ctx,owner);}},"489":{"6":(ctx,owner)=>{c2v1a260.call(owner,ctx,owner);},"10":(ctx,owner)=>{c2v1a258.call(owner,ctx,owner);},"24":(ctx,owner)=>{c2v1a259.call(owner,ctx,owner);}},"511":{"4":(ctx,owner)=>{c2v1a264.call(owner,ctx,owner);},"14":(ctx,owner)=>{c2v1a262.call(owner,ctx,owner);},"24":(ctx,owner)=>{c2v1a263.call(owner,ctx,owner);}},"535":{"54":(ctx,owner)=>{c2v1a265.call(owner,ctx,owner);}},"553":{"54":(ctx,owner)=>{c2v1a267.call(owner,ctx,owner);}},"554":{"1":(ctx,owner)=>{c2v1a268.call(owner,ctx,owner);}},"1035":{"1":(ctx,owner)=>{c2v1a166.call(owner,ctx,owner);}},"1046":{"1":(ctx,owner)=>{c2v1a167.call(owner,ctx,owner);},"3248":(ctx,owner)=>{c2v1a168.call(owner,ctx,owner);},"3252":(ctx,owner)=>{c2v1a169.call(owner,ctx,owner);}},"1297":{"47":(ctx,owner)=>{c2v1a171.call(owner,ctx,owner);}},"1320":{"8":(ctx,owner)=>{c2v1a173.call(owner,ctx,owner);},"46":(ctx,owner)=>{c2v1a172.call(owner,ctx,owner);}},"1334":{"30":(ctx,owner)=>{c2v1a174.call(owner,ctx,owner);}},"1338":{"30":(ctx,owner)=>{c2v1a175.call(owner,ctx,owner);}},"1344":{"30":(ctx,owner)=>{c2v1a176.call(owner,ctx,owner);}},"1374":{"243":(ctx,owner)=>{c2v1a177.call(owner,ctx,owner);}},"1375":{"1":(ctx,owner)=>{c2v1a178.call(owner,ctx,owner);}},"1403":{"1":(ctx,owner)=>{c2v1a179.call(owner,ctx,owner);},"39":(ctx,owner)=>{c2v1a181.call(owner,ctx,owner);},"107":(ctx,owner)=>{c2v1a180.call(owner,ctx,owner);}},"1406":{"1":(ctx,owner)=>{c2v1a182.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a183.call(owner,ctx,owner);}},"1532":{"1":(ctx,owner)=>{c2v1a184.call(owner,ctx,owner);},"759":(ctx,owner)=>{c2v1a187.call(owner,ctx,owner);},"760":(ctx,owner)=>{c2v1a188.call(owner,ctx,owner);},"778":(ctx,owner)=>{c2v1a189.call(owner,ctx,owner);},"779":(ctx,owner)=>{c2v1a190.call(owner,ctx,owner);},"1390":(ctx,owner)=>{c2v1a185.call(owner,ctx,owner);},"1391":(ctx,owner)=>{c2v1a186.call(owner,ctx,owner);}},"1542":{"1":(ctx,owner)=>{c2v1a191.call(owner,ctx,owner);}},"1545":{"1":(ctx,owner)=>{c2v1a192.call(owner,ctx,owner);}},"1546":{"1":(ctx,owner)=>{c2v1a193.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v1a194.call(owner,ctx,owner);}},"1549":{"1":(ctx,owner)=>{c2v1a195.call(owner,ctx,owner);}},"1550":{"1":(ctx,owner)=>{c2v1a196.call(owner,ctx,owner);}},"1627":{"1":(ctx,owner)=>{c2v1a199.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a201.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v1a200.call(owner,ctx,owner);}},"1635":{"1":(ctx,owner)=>{c2v1a202.call(owner,ctx,owner);}},"1639":{"1":(ctx,owner)=>{c2v1a203.call(owner,ctx,owner);}},"1642":{"1":(ctx,owner)=>{c2v1a204.call(owner,ctx,owner);}},"1644":{"1":(ctx,owner)=>{c2v1a205.call(owner,ctx,owner);}},"1653":{"1":(ctx,owner)=>{c2v1a206.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a207.call(owner,ctx,owner);}},"1727":{"1":(ctx,owner)=>{c2v1a208.call(owner,ctx,owner);}},"1762":{"1":(ctx,owner)=>{c2v1a209.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v1a210.call(owner,ctx,owner);},"5":(ctx,owner)=>{c2v1a211.call(owner,ctx,owner);},"7":(ctx,owner)=>{c2v1a212.call(owner,ctx,owner);},"9":(ctx,owner)=>{c2v1a213.call(owner,ctx,owner);}},"1776":{"1":(ctx,owner)=>{c2v1a214.call(owner,ctx,owner);}},"1820":{"1":(ctx,owner)=>{c2v1a216.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a217.call(owner,ctx,owner);}},"1847":{"1":(ctx,owner)=>{c2v1a218.call(owner,ctx,owner);}},"1860":{"1":(ctx,owner)=>{c2v1a219.call(owner,ctx,owner);}},"1861":{"1":(ctx,owner)=>{c2v1a220.call(owner,ctx,owner);}},"1862":{"1":(ctx,owner)=>{c2v1a221.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a223.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v1a222.call(owner,ctx,owner);},"20":(ctx,owner)=>{c2v1a224.call(owner,ctx,owner);}},"1873":{"1":(ctx,owner)=>{c2v1a225.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a228.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v1a226.call(owner,ctx,owner);},"12":(ctx,owner)=>{c2v1a227.call(owner,ctx,owner);},"20":(ctx,owner)=>{c2v1a229.call(owner,ctx,owner);}},"1883":{"1":(ctx,owner)=>{c2v1a230.call(owner,ctx,owner);}},"1884":{"1":(ctx,owner)=>{c2v1a231.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a233.call(owner,ctx,owner);},"11":(ctx,owner)=>{c2v1a232.call(owner,ctx,owner);},"20":(ctx,owner)=>{c2v1a234.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c2v1a276.call(owner,ctx,owner);},"2":(ctx,owner)=>{c2v1a277.call(owner,ctx,owner);},"3":(ctx,owner)=>{c2v1a278.call(owner,ctx,owner);},"4":(ctx,owner)=>{c2v1a279.call(owner,ctx,owner);},"5":(ctx,owner)=>{c2v1a280.call(owner,ctx,owner);}}},frameActions:{"3":{"1":[c2v1a251]},"16":{"1":[c2v1a198]},"26":{"1":[c2v1a235]},"35":{"1":[c2v1a244]},"36":{"1":[c2v1a246],"2":[c2v1a247],"3":[c2v1a248]},"43":{"1":[c2v1a254]},"50":{"1":[c2v1a261]},"55":{"1":[c2v1a266]},"56":{"1":[c2v1a269]},"64":{"1":[c2v1a270]},"72":{"1":[c2v1a271]},"80":{"1":[c2v1a272]},"81":{"1":[c2v1a273],"2":[c2v1a274],"3":[c2v1a275]},"126":{"1":[c2v1a170]},"159":{"1":[c2v1a197]},"179":{"1":[c2v1a215]},"286":{"9":[c2v1a236]},"293":{"9":[c2v1a237]},"298":{"10":[c2v1a238]},"303":{"9":[c2v1a239]},"308":{"9":[c2v1a240]},"317":{"9":[c2v1a241]},"322":{"9":[c2v1a242]},"340":{"9":[c2v1a243]},"353":{"26":[c2v1a245]},"377":{"26":[c2v1a249]},"391":{"28":[c2v1a250]},"405":{"28":[c2v1a252]},"419":{"32":[c2v1a253]},"435":{"28":[c2v1a255]},"449":{"32":[c2v1a256]},"465":{"28":[c2v1a257]},"489":{"6":[c2v1a260],"10":[c2v1a258],"24":[c2v1a259]},"511":{"4":[c2v1a264],"14":[c2v1a262],"24":[c2v1a263]},"535":{"54":[c2v1a265]},"553":{"54":[c2v1a267]},"554":{"1":[c2v1a268]},"1035":{"1":[c2v1a166]},"1046":{"1":[c2v1a167],"3248":[c2v1a168],"3252":[c2v1a169]},"1297":{"47":[c2v1a171]},"1320":{"8":[c2v1a173],"46":[c2v1a172]},"1334":{"30":[c2v1a174]},"1338":{"30":[c2v1a175]},"1344":{"30":[c2v1a176]},"1374":{"243":[c2v1a177]},"1375":{"1":[c2v1a178]},"1403":{"1":[c2v1a179],"39":[c2v1a181],"107":[c2v1a180]},"1406":{"1":[c2v1a182],"2":[c2v1a183]},"1532":{"1":[c2v1a184],"759":[c2v1a187],"760":[c2v1a188],"778":[c2v1a189],"779":[c2v1a190],"1390":[c2v1a185],"1391":[c2v1a186]},"1542":{"1":[c2v1a191]},"1545":{"1":[c2v1a192]},"1546":{"1":[c2v1a193],"11":[c2v1a194]},"1549":{"1":[c2v1a195]},"1550":{"1":[c2v1a196]},"1627":{"1":[c2v1a199],"2":[c2v1a201],"11":[c2v1a200]},"1635":{"1":[c2v1a202]},"1639":{"1":[c2v1a203]},"1642":{"1":[c2v1a204]},"1644":{"1":[c2v1a205]},"1653":{"1":[c2v1a206],"2":[c2v1a207]},"1727":{"1":[c2v1a208]},"1762":{"1":[c2v1a209],"3":[c2v1a210],"5":[c2v1a211],"7":[c2v1a212],"9":[c2v1a213]},"1776":{"1":[c2v1a214]},"1820":{"1":[c2v1a216],"2":[c2v1a217]},"1847":{"1":[c2v1a218]},"1860":{"1":[c2v1a219]},"1861":{"1":[c2v1a220]},"1862":{"1":[c2v1a221],"2":[c2v1a223],"11":[c2v1a222],"20":[c2v1a224]},"1873":{"1":[c2v1a225],"2":[c2v1a228],"11":[c2v1a226],"12":[c2v1a227],"20":[c2v1a229]},"1883":{"1":[c2v1a230]},"1884":{"1":[c2v1a231],"2":[c2v1a233],"11":[c2v1a232],"20":[c2v1a234]},"main":{"1":[c2v1a276],"2":[c2v1a277],"3":[c2v1a278],"4":[c2v1a279],"5":[c2v1a280]}},buttons:{"1535":{"release":(ctx,owner)=>{c2v1a141.call(owner,ctx,owner);}},"1571":{"press":(ctx,owner)=>{c2v1a142.call(owner,ctx,owner);},"release":(ctx,owner)=>{c2v1a143.call(owner,ctx,owner);}},"1576":{"release":(ctx,owner)=>{c2v1a144.call(owner,ctx,owner);}},"1592":{"release":(ctx,owner)=>{c2v1a145.call(owner,ctx,owner);}},"1594":{"release":(ctx,owner)=>{c2v1a146.call(owner,ctx,owner);}},"1605":{"release":(ctx,owner)=>{c2v1a147.call(owner,ctx,owner);}},"1611":{"release":(ctx,owner)=>{c2v1a148.call(owner,ctx,owner);}},"1616":{"release":(ctx,owner)=>{c2v1a149.call(owner,ctx,owner);}},"1625":{"release":(ctx,owner)=>{c2v1a150.call(owner,ctx,owner);}},"1768":{"release":(ctx,owner)=>{c2v1a151.call(owner,ctx,owner);}},"1800":{"release":(ctx,owner)=>{c2v1a152.call(owner,ctx,owner);}},"1801":{"release":(ctx,owner)=>{c2v1a153.call(owner,ctx,owner);}},"1802":{"release":(ctx,owner)=>{c2v1a154.call(owner,ctx,owner);}},"1803":{"release":(ctx,owner)=>{c2v1a155.call(owner,ctx,owner);}},"1804":{"release":(ctx,owner)=>{c2v1a156.call(owner,ctx,owner);}},"1827":{"release":(ctx,owner)=>{c2v1a157.call(owner,ctx,owner);}},"1830":{"release":(ctx,owner)=>{c2v1a158.call(owner,ctx,owner);}},"1834":{"release":(ctx,owner)=>{c2v1a159.call(owner,ctx,owner);}},"1836":{"release":(ctx,owner)=>{c2v1a160.call(owner,ctx,owner);}},"1838":{"release":(ctx,owner)=>{c2v1a161.call(owner,ctx,owner);}},"1840":{"release":(ctx,owner)=>{c2v1a162.call(owner,ctx,owner);}},"1846":{"press":(ctx,owner)=>{c2v1a163.call(owner,ctx,owner);},"release":(ctx,owner)=>{c2v1a164.call(owner,ctx,owner);}},"1892":{"release":(ctx,owner)=>{c2v1a165.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"3":[],"16":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"26":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"35":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"36":[],"43":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"50":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"55":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"56":[],"64":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"72":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"80":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"81":[],"126":["_totalframes","skipFrame"],"159":["_totalframes","skipFrame"],"179":["_x","_y","onEnterFrame","x","y"],"286":[],"293":[],"298":[],"303":[],"308":[],"317":[],"322":[],"340":[],"353":[],"377":[],"391":[],"405":[],"419":[],"435":[],"449":[],"465":[],"489":["items"],"511":["items"],"535":[],"553":[],"554":[],"1035":["_totalframes","a"],"1046":["_totalframes","skipFrame"],"1297":[],"1320":[],"1334":[],"1338":[],"1344":[],"1374":[],"1375":[],"1403":[],"1406":["a1","a2","arrNow","arrShow","arrs","bar","barHit","barStep","bgMovie","bw","checkBar","ck","downKey","gamePlay","init","keyCount","leftKey","level","levelInit","life2","lifeStep1","lifeStep2","lightFail","lightKey","lightShow","lightWin","onEnterFrame","rightKey","scaleStep","tempArrs","tempScale","tempStep","tempSteps","tempx","tt","upKey"],"1532":["_quality","skipFrame"],"1535":["aim"],"1542":[],"1545":[],"1546":["_currentframe","back","onEnterFrame"],"1549":["component","track_mc"],"1550":[],"1571":[],"1576":[],"1592":["qqxflash_home"],"1594":[],"1605":[],"1611":["helper"],"1616":[],"1625":[],"1627":["btn"],"1635":["_totalframes","a"],"1639":[],"1642":["_visible"],"1644":["_visible"],"1653":["items"],"1727":[],"1762":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","hitter","i","map","player","side1","side2","talkAreas","tempDepths","topBlock","tt"],"1768":["gp"],"1776":[],"1800":[],"1801":[],"1802":[],"1803":[],"1804":[],"1820":["actKey","downKey","leftKey","rightKey","upKey"],"1827":["_quality"],"1830":["_quality"],"1834":["_quality"],"1836":[],"1838":["allShow"],"1840":["allShow"],"1846":["draging","onEnterFrame"],"1847":["_x","bb","draging","onEnterFrame"],"1860":["btn"],"1861":["allShow","checkKey","gkShow","itemList","listItem","newKey"],"1862":["btn","gp"],"1873":["i","onEnterFrame"],"1883":[],"1884":["delay","fadeOut","item"],"1892":[],"main":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map2txt5","mm","mmShow","movie","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","ss","ssShow","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timec","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:1533":{"read":["aim"],"write":[]},"0:1569":{"read":[],"write":[]},"0:1574":{"read":[],"write":[]},"0:1590":{"read":["qqxflash_home"],"write":[]},"0:1592":{"read":[],"write":[]},"0:1603":{"read":[],"write":[]},"0:1609":{"read":["helper"],"write":[]},"0:1614":{"read":[],"write":[]},"0:1623":{"read":[],"write":[]},"0:1767":{"read":["gp"],"write":["gp"]},"0:1813":{"read":[],"write":[]},"0:1814":{"read":[],"write":[]},"0:1815":{"read":[],"write":[]},"0:1816":{"read":[],"write":[]},"0:1817":{"read":[],"write":[]},"0:1840":{"read":["_quality"],"write":["_quality"]},"0:1843":{"read":["_quality"],"write":["_quality"]},"0:1847":{"read":["_quality"],"write":["_quality"]},"0:1849":{"read":[],"write":[]},"0:1851":{"read":["allShow"],"write":[]},"0:1853":{"read":["allShow"],"write":[]},"0:1859":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:1905":{"read":[],"write":[]},"0:1018":{"read":["_totalframes","a"],"write":["a"]},"0:1029":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:125":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1289":{"read":["fish","nx","onEnterFrame"],"write":["nx","onEnterFrame"]},"0:1312":{"read":[],"write":[]},"0:1326":{"read":[],"write":[]},"0:1330":{"read":[],"write":[]},"0:1335":{"read":[],"write":[]},"0:1366":{"read":[],"write":[]},"0:1367":{"read":[],"write":[]},"0:1395":{"read":[],"write":[]},"0:1398":{"read":["a1","a2","arrNow","arrShow","arrs","bar","barHit","barStep","bgMovie","bw","checkBar","ck","downKey","gamePlay","init","keyCount","leftKey","level","levelInit","life2","lifeStep1","lifeStep2","lightFail","lightKey","lightShow","lightWin","onEnterFrame","rightKey","scaleStep","tempArrs","tempScale","tempStep","tempSteps","tempx","tt","upKey"],"write":["arrNow","arrs","barHit","barStep","bw","checkBar","ck","downKey","gamePlay","init","keyCount","leftKey","level","levelInit","lifeStep1","lifeStep2","lightFail","lightKey","lightWin","onEnterFrame","rightKey","scaleStep","tempArrs","tempScale","tempStep","tempSteps","tempx","tt","upKey"]},"0:1530":{"read":["_quality","skipFrame"],"write":["_quality","skipFrame"]},"0:1540":{"read":[],"write":[]},"0:1543":{"read":[],"write":[]},"0:1544":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:1547":{"read":["component","track_mc"],"write":["component"]},"0:1548":{"read":[],"write":[]},"0:158":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:16":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1625":{"read":["btn"],"write":[]},"0:1633":{"read":["_totalframes","a"],"write":["a"]},"0:1637":{"read":[],"write":[]},"0:1640":{"read":["_visible"],"write":["_visible"]},"0:1642":{"read":["_visible"],"write":["_visible"]},"0:1651":{"read":["items"],"write":[]},"0:1726":{"read":[],"write":[]},"0:175":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:1761":{"read":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","hitter","i","map","player","side1","side2","talkAreas","tempDepths","topBlock","tt"],"write":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","talkAreas","tempDepths","tt"]},"0:1775":{"read":[],"write":[]},"0:1833":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:1860":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:1873":{"read":["btn"],"write":[]},"0:1874":{"read":["allShow","checkKey","gkShow","itemList","listItem","newKey"],"write":["checkKey","listItem","newKey"]},"0:1875":{"read":["btn","gp"],"write":[]},"0:1886":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:1896":{"read":[],"write":[]},"0:1897":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:26":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:282":{"read":[],"write":[]},"0:289":{"read":[],"write":[]},"0:294":{"read":[],"write":[]},"0:299":{"read":[],"write":[]},"0:304":{"read":[],"write":[]},"0:313":{"read":[],"write":[]},"0:318":{"read":[],"write":[]},"0:327":{"read":[],"write":[]},"0:340":{"read":[],"write":[]},"0:35":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:355":{"read":[],"write":[]},"0:36":{"read":[],"write":[]},"0:370":{"read":[],"write":[]},"0:385":{"read":[],"write":[]},"0:399":{"read":[],"write":[]},"0:3":{"read":[],"write":[]},"0:417":{"read":[],"write":[]},"0:43":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:431":{"read":[],"write":[]},"0:447":{"read":[],"write":[]},"0:469":{"read":["items"],"write":[]},"0:490":{"read":["items"],"write":[]},"0:50":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:515":{"read":[],"write":[]},"0:533":{"read":[],"write":[]},"0:534":{"read":[],"write":[]},"0:55":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:56":{"read":[],"write":[]},"0:64":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:72":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:80":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:81":{"read":[],"write":[]},"0:main":{"read":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map2txt5","mm","mmShow","movie","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","ss","ssShow","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timec","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","keyCheck","leftKey","mm","mmShow","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","ss","ssShow","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timec","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:1535":{"read":["aim"],"write":[]},"1:1571":{"read":[],"write":[]},"1:1576":{"read":[],"write":[]},"1:1592":{"read":["qqxflash_home"],"write":[]},"1:1594":{"read":[],"write":[]},"1:1605":{"read":[],"write":[]},"1:1611":{"read":["helper"],"write":[]},"1:1616":{"read":[],"write":[]},"1:1625":{"read":[],"write":[]},"1:1768":{"read":["gp"],"write":["gp"]},"1:1800":{"read":[],"write":[]},"1:1801":{"read":[],"write":[]},"1:1802":{"read":[],"write":[]},"1:1803":{"read":[],"write":[]},"1:1804":{"read":[],"write":[]},"1:1827":{"read":["_quality"],"write":["_quality"]},"1:1830":{"read":["_quality"],"write":["_quality"]},"1:1834":{"read":["_quality"],"write":["_quality"]},"1:1836":{"read":[],"write":[]},"1:1838":{"read":["allShow"],"write":[]},"1:1840":{"read":["allShow"],"write":[]},"1:1846":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:1892":{"read":[],"write":[]},"1:1035":{"read":["_totalframes","a"],"write":["a"]},"1:1046":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:126":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1297":{"read":[],"write":[]},"1:1320":{"read":[],"write":[]},"1:1334":{"read":[],"write":[]},"1:1338":{"read":[],"write":[]},"1:1344":{"read":[],"write":[]},"1:1374":{"read":[],"write":[]},"1:1375":{"read":[],"write":[]},"1:1403":{"read":[],"write":[]},"1:1406":{"read":["a1","a2","arrNow","arrShow","arrs","bar","barHit","barStep","bgMovie","bw","checkBar","ck","downKey","gamePlay","init","keyCount","leftKey","level","levelInit","life2","lifeStep1","lifeStep2","lightFail","lightKey","lightShow","lightWin","onEnterFrame","rightKey","scaleStep","tempArrs","tempScale","tempStep","tempSteps","tempx","tt","upKey"],"write":["arrNow","arrs","barHit","barStep","bw","checkBar","ck","downKey","gamePlay","init","keyCount","leftKey","level","levelInit","lifeStep1","lifeStep2","lightFail","lightKey","lightWin","onEnterFrame","rightKey","scaleStep","tempArrs","tempScale","tempStep","tempSteps","tempx","tt","upKey"]},"1:1532":{"read":["_quality","skipFrame"],"write":["_quality","skipFrame"]},"1:1542":{"read":[],"write":[]},"1:1545":{"read":[],"write":[]},"1:1546":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:1549":{"read":["component","track_mc"],"write":["component"]},"1:1550":{"read":[],"write":[]},"1:159":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:16":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1627":{"read":["btn"],"write":[]},"1:1635":{"read":["_totalframes","a"],"write":["a"]},"1:1639":{"read":[],"write":[]},"1:1642":{"read":["_visible"],"write":["_visible"]},"1:1644":{"read":["_visible"],"write":["_visible"]},"1:1653":{"read":["items"],"write":[]},"1:1727":{"read":[],"write":[]},"1:1762":{"read":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","hitter","i","map","player","side1","side2","talkAreas","tempDepths","topBlock","tt"],"write":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","talkAreas","tempDepths","tt"]},"1:1776":{"read":[],"write":[]},"1:179":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:1820":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:1847":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:1860":{"read":["btn"],"write":[]},"1:1861":{"read":["allShow","checkKey","gkShow","itemList","listItem","newKey"],"write":["checkKey","listItem","newKey"]},"1:1862":{"read":["btn","gp"],"write":[]},"1:1873":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:1883":{"read":[],"write":[]},"1:1884":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:26":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:286":{"read":[],"write":[]},"1:293":{"read":[],"write":[]},"1:298":{"read":[],"write":[]},"1:303":{"read":[],"write":[]},"1:308":{"read":[],"write":[]},"1:317":{"read":[],"write":[]},"1:322":{"read":[],"write":[]},"1:340":{"read":[],"write":[]},"1:35":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:353":{"read":[],"write":[]},"1:36":{"read":[],"write":[]},"1:377":{"read":[],"write":[]},"1:391":{"read":[],"write":[]},"1:3":{"read":[],"write":[]},"1:405":{"read":[],"write":[]},"1:419":{"read":[],"write":[]},"1:43":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:435":{"read":[],"write":[]},"1:449":{"read":[],"write":[]},"1:465":{"read":[],"write":[]},"1:489":{"read":["items"],"write":[]},"1:50":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:511":{"read":["items"],"write":[]},"1:535":{"read":[],"write":[]},"1:55":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:553":{"read":[],"write":[]},"1:554":{"read":[],"write":[]},"1:56":{"read":[],"write":[]},"1:64":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:72":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:80":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:81":{"read":[],"write":[]},"1:main":{"read":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemShow","keyCheck","leftKey","map","map2txt5","mm","mmShow","movie","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","ss","ssShow","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timec","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event2","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","keyCheck","leftKey","mm","mmShow","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","ss","ssShow","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timec","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
