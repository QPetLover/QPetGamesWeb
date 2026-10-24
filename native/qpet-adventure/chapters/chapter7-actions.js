/* Native source-derived chapter 7 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c7v0a0(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c7v0a1(ctx,owner){

   ctx.stopDrag(owner);

}

export function c7v0a2(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c7v0a3(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c7v0a4(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c7v0a5(ctx,owner){

   if(ctx.bool(ctx.less(((owner.parent)?.["ttt"])?.["length"],10)))
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],((owner.parent)?.["t_array"])?.[owner.i])))(owner.parent,"ttt");
   }

}

export function c7v0a6(ctx,owner){

   owner.ttt = "";

}

export function c7v0a7(ctx,owner){

   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.ttt == "QQPET")(owner.ttt == "qqpet")))
   {
      ctx.graph.goto(owner.parent,3,{play:true});
   }
   else
   {
      ctx.graph.goto(owner.parent,"kkk");
   }

}

export function c7v0a8(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
   }

}

export function c7v0a9(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c7v0a10(ctx,owner){

   ctx.graph.play(owner);

}

export function c7v0a11(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c7v0a12(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c7v0a13(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c7v0a14(ctx,owner){

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

export function c7v0a15(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c7v0a16(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c7v0a17(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c7v0a18(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c7v0a19(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c7v0a20(ctx,owner){

   owner._quality = "HIGH";

}

export function c7v0a21(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c7v0a22(ctx,owner){

   owner._quality = "LOW";

}

export function c7v0a23(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c7v0a24(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c7v0a25(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c7v0a26(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c7v0a27(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c7v0a28(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c7v0a29(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c7v0a30(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a31(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a32(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a33(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a34(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a35(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a36(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c7v0a37(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c7v0a38(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c7v0a39(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a40(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a41(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c7v0a42(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c7v0a43(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c7v0a44(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c7v0a45(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["_parent"],"an",1);

}

export function c7v0a46(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);

}

export function c7v0a47(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a48(ctx,owner){

}

export function c7v0a49(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c7v0a50(ctx,owner){

}

export function c7v0a51(ctx,owner){

}

export function c7v0a52(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a53(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a54(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a55(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a56(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a57(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a58(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a59(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a60(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c7v0a61(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a62(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a63(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a64(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a65(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v0a66(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a67(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a68(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a69(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c7v0a70(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c7v0a71(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a72(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a73(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(2));

}

export function c7v0a74(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a75(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a76(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a77(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a78(ctx,owner){
owner.ttt = "";
owner.t_array = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,22)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"i",owner.i);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}

}

export function c7v0a79(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a80(ctx,owner){
owner.skipFrame = 0;
owner.ttt = "";

}

export function c7v0a81(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a82(ctx,owner){
ctx.graph.stop(owner);
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(7);

}

export function c7v0a83(ctx,owner){
ctx.graph.play(owner);

}

export function c7v0a84(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80),400)))
{
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80));
}
else
{
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
}
if(ctx.bool((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
{
   ctx.graph.goto(((this)?.["_parent"])?.["_parent"],"end");
}

}

export function c7v0a85(ctx,owner){
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c7v0a86(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a87(ctx,owner){
owner._visible = 0;

}

export function c7v0a88(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a89(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a90(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a91(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c7v0a92(ctx,owner){
ctx.stopAllSounds?.();

}

export function c7v0a93(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c7v0a94(ctx,owner){
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

export function c7v0a95(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c7v0a96(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a97(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a98(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c7v0a99(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a100(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a101(ctx,owner){
ctx.graph.play(owner);

}

export function c7v0a102(ctx,owner){
owner._visible = 0;
owner.hitted = undefined;
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   if(ctx.bool(ctx.hitTest(this,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
   {
      if(ctx.bool(owner.hitted))
      {
         ctx.trace?.("hitted");
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4))))))((_loc1_)?.["player"],"_y");
         owner.oy = ((_loc1_)?.["player"])?.["_y"];
      }
      else
      {
         owner.hitted = 1;
         owner.ox = ((_loc1_)?.["player"])?.["_x"];
         owner.oy = ((_loc1_)?.["player"])?.["_y"];
      }
   }
   else
   {
      owner.hitted = undefined;
   }
};

}

export function c7v0a103(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c7v0a104(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a105(ctx,owner){
ctx.graph.stop(owner);
owner.v;

}

export function c7v0a106(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a107(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a108(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a109(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a110(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a111(ctx,owner){
ctx.graph.stop(owner);
((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],40)))((owner.parent)?.["player"],"_x");
ctx.graph.goto((owner.parent)?.["hitter"],3);

}

export function c7v0a112(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a113(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a114(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a115(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a116(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(((owner.parent)?.["_parent"])?.["itemNow"] == "item3"))
{
   ctx.graph.play(owner);
   ctx.setField(owner.parent,"events",["event11"]);
   ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",11);
   ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
   ctx.setField((owner.parent)?.["_parent"],"eventNow","qqo");
   ctx.setField((owner.parent)?.["_parent"],"eventNext","");
   ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
   ctx.setField((owner.parent)?.["_parent"],"event10",1);
   ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
   ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
   ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
   ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
   ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
   ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
}
else
{
   ctx.graph.stop(owner);
   ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
   ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map5");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","qqd");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map3");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
   ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
   ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
   ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
}

}

export function c7v0a117(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a118(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"itemNow","item4");
(((owner.parent)?.["_parent"])?.["itemList"])?.["push"]?.("item4");
((owner.parent)?.["_parent"])?.["etShow"]?.("你得到毒刺");
ctx.setField((owner.parent)?.["_parent"],"event10",1);
(((owner.parent)?.["_parent"])?.["getItem"])?.["start"]?.();
((owner.parent)?.["changes"])?.["push"]?.("map4");
((owner.parent)?.["changes"])?.["push"]?.("map7");
((owner.parent)?.["changes"])?.["push"]?.("map8");

}

export function c7v0a119(ctx,owner){
ctx.setField((owner.parent)?.["player"],"_visible",true);
ctx.setField((owner.parent)?.["player"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["player"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
((owner.parent)?.["changes"])?.["push"]?.("map4");
((owner.parent)?.["changes"])?.["push"]?.("map7");
((owner.parent)?.["changes"])?.["push"]?.("map8");

}

export function c7v0a120(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a121(ctx,owner){
ctx.graph.play(owner);

}

export function c7v0a122(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map5");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map3");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],owner.eventNow,owner.eventNow,0);

}

export function c7v0a123(ctx,owner){
ctx.graph.play(owner);

}

export function c7v0a124(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a125(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a126(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a127(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a128(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["event14"] == 0))
{
   ctx.graph.goto(owner.mc,2);
}
else
{
   ctx.graph.goto(owner.mc,1);
}

}

export function c7v0a129(ctx,owner){
owner._visible = 0;
owner.hitted = undefined;
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   var _loc2_ = this;
   if(ctx.bool(((_loc1_)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(_loc2_,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((_loc2_)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],1)))((_loc1_)?.["player"],"_y");
         }
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((_loc2_)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(1))))((_loc1_)?.["player"],"_y");
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(0.5))))((_loc1_)?.["player"],"_x");
         }
      }
   }
};

}

export function c7v0a130(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c7v0a131(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a132(ctx,owner){
ctx.setField((owner.mc)?.["mc"],"_visible",false);

}

export function c7v0a133(ctx,owner){

   if(ctx.bool(owner.an != 1))
   {
      if(ctx.bool((((owner.parent)?.["_parent"])?.["hitter"])?.["_currentframe"] == 2))
      {
         owner.an = 1;
         owner.ttt = 0;
         ctx.setField(((owner.parent)?.["mc"])?.["mc"],"_visible",true);
         ((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
         ctx.graph.stop(owner.parent);
      }
   }
   else
   {
      ((old)=>(owner.ttt=old+1,old))(ctx.num(owner.ttt));
      if(ctx.bool(owner.ttt == 4))
      {
         ctx.graph.stop(owner.parent);
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"changeShow",1);
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"oldMap","map6");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNow","hitqq");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNext","map3");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventAct","change");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"getEventShow",0);
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventStep",0);
         ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
         ctx.setField(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
         ctx.attach(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],0);
      }
   }

}

export function c7v0a134(ctx,owner){

   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((((this)?.["_parent"])?.["_parent"])?.["hitter"])?.["_currentframe"] == 2:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["xman"],(((this)?.["_parent"])?.["_parent"])?.["player"]))(ctx.less(ctx.add(((owner.parent)?.["xman"])?.["_y"],(owner.parent)?.["_y"]),((((this)?.["_parent"])?.["_parent"])?.["player"])?.["_y"])):logicalLeft)(owner.an != 1))))
   {
      owner.an = 1;
      ctx.graph.stop((this)?.["_parent"]);
      ((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"changeShow",1);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"oldMap","map6");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNow","hitqq");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNext","map3");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventAct","change");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"getEventShow",0);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventStep",0);
      ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
      ctx.setField(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
      ctx.attach(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],0);
   }

}

export function c7v0a135(ctx,owner){
ctx.graph.goto(owner.mc,"kkk",{play:true});

}

export function c7v0a136(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["event14"] == 1))
{
   ctx.setField((owner.parent)?.["_parent"],"event14",2);
   ctx.graph.goto(owner,"kkk");
   ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
}

}

export function c7v0a137(ctx,owner){

   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((((this)?.["_parent"])?.["_parent"])?.["hitter"])?.["_currentframe"] == 2:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["xman"],(((this)?.["_parent"])?.["_parent"])?.["player"]))(ctx.less(ctx.add(((owner.parent)?.["xman"])?.["_y"],(owner.parent)?.["_y"]),((((this)?.["_parent"])?.["_parent"])?.["player"])?.["_y"])):logicalLeft)(owner.an != 1))))
   {
      owner.an = 1;
      ctx.trace?.("trace");
      ((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
      ctx.graph.stop((this)?.["_parent"]);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"changeShow",1);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"oldMap","map6");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNow","hitqq");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNext","map3");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventAct","change");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"getEventShow",0);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventStep",0);
      ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
      ctx.setField(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
      ctx.attach(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],0);
   }

}

export function c7v0a138(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c7v0a139(ctx,owner){
owner.yy = ctx.add((this)?.["_y"],(owner.mc)?.["_y"]);
owner.xx = ctx.add((this)?.["_x"],(owner.mc)?.["_x"]);
ctx.setField((owner.parent)?.["_parent"],"event14",2);
owner.tempDepths = ctx.add(ctx.add((ctx.num(owner.yy)*ctx.num(10000)),(ctx.num(owner.xx)*ctx.num(100))),9);
ctx.trace?.(ctx.add("tempDepths=",owner.tempDepths));
ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
{
   ctx.graph.swapDepths(this,5000005);
}
else
{
   ctx.graph.swapDepths(this,owner.tempDepths);
}
((owner.parent)?.["events"])?.["push"]?.("event16");
ctx.graph.stop(owner);
owner.onEnterFrame = function()
{
   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      ctx.graph.swapDepths(this,5000005);
   }
   else
   {
      ctx.graph.swapDepths(this,owner.tempDepths);
   }
};

}

export function c7v0a140(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 414;
owner.appeary = 266;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
ctx.graph.goto(owner.player,"wa2");
owner.map = "map1";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
if(ctx.bool((owner.parent)?.["event11"] == 0))
{
   ctx.graph.goto(owner.yu,1);
}
else
{
   ctx.graph.goto(owner.yu,2);
}
owner.talkTxts = ["遇到问题随时联络我，我的魔法也许可以帮到你。","哥哥你要小心啊！我们在这里等你！","放心吧，有我在，不会有事情的！"];
owner.talkObj = ["map.point0","map.point1","map.point2"];
owner.talkDirs = [0,0,0];
owner.talkNext = [0,0,0];
owner.talkAreas = ["talkArea0","talkArea1","talkArea2"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bbl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bbl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bbl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event1","event2","event3","event4","event5","event6"];
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c7v0a141(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map1":
      owner.appearx = 500;
      owner.appeary = 220;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 687;
      owner.appeary = 237;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      ctx.graph.goto(owner.hitter,2);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = "map2";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
if(ctx.bool((owner.parent)?.["event7"] == 0))
{
   ctx.graph.goto(owner.bl3,1);
   owner.events = ["event7"];
   ctx.graph.goto(owner.door,1);
}
else
{
   ctx.graph.goto(owner.door,"kkk");
   ctx.graph.goto(owner.bl3,2);
   owner.changes = ["map3"];
   owner.changeMovies = ["event000"];
}
if(ctx.bool((owner.parent)?.["event8"] == 0))
{
   ctx.graph.goto(owner.bl1,1);
   (owner.events)?.["push"]?.("event8");
}
else
{
   ctx.graph.goto(owner.door,"kkk");
   ctx.graph.goto(owner.bl1,2);
}
owner.talkTxts = ["我一定要揭开这里的秘密，不能就这么回去！"];
owner.talkObj = ["map.player.point"];
owner.talkDirs = [0];
owner.talkNext = [0];
owner.talkAreas = ["talkArea0"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,5)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
(owner.blocks)?.["push"]?.("nn");
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v0a142(ctx,owner){

   if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
   {
      ctx.graph.swapDepths((owner.parent)?.["topBlock"],5000000);
      ctx.setField((owner.parent)?.["nn"],"_name","bl1");
      ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["blocky"])?.[0])*ctx.num(10000)),(ctx.num(((owner.parent)?.["blockx"])?.[0])*ctx.num(100))),0));
      ctx.graph.goto((owner.parent)?.["hitter"],1);
   }

}

export function c7v0a143(ctx,owner){

   if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
   {
      ctx.graph.swapDepths((owner.parent)?.["topBlock"],2);
      ctx.graph.swapDepths((owner.parent)?.["nn"],1);
      ctx.graph.swapDepths((owner.parent)?.["bl1"],1);
      ctx.setField((owner.parent)?.["bl1"],"_name","nn");
      ctx.graph.goto((owner.parent)?.["hitter"],2);
   }

}

export function c7v0a144(ctx,owner){

   if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
   {
      ctx.graph.swapDepths((owner.parent)?.["topBlock"],4);
      ctx.graph.swapDepths((owner.parent)?.["bl1"],3);
      ctx.setField((owner.parent)?.["bl1"],"_name","nn");
      ctx.graph.goto((owner.parent)?.["hitter"],2);
   }

}

export function c7v0a145(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
ctx.setField(owner.topBlock,"_visible",false);
owner.map = "map3";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 442;
      owner.appeary = 191;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 60;
      owner.appeary = 362;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   default:
      owner.appearx = 320;
      owner.appeary = 208;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      ctx.graph.goto(owner.hitter,2);
      ctx.setField(owner.topBlock,"_visible",true);
      owner.events = ["event13"];
      ctx.setField(owner.door,"_visible",false);
      ctx.trace?.("被关");
      if(ctx.bool(ctx.lessEqual(ctx.add(((((this)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80),400)))
      {
         ctx.graph.goto((((this)?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add(((((this)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80));
      }
      else
      {
         ctx.graph.goto((((this)?.["_parent"])?.["lifeBar"])?.["bar"],400);
      }
      if(ctx.bool(((((this)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
      {
         ctx.graph.goto((this)?.["_parent"],"end");
      }
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
else
{
   owner._temp_10 = owner.player;
   owner._temp_9 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}

}

export function c7v0a146(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map4";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map3":
      owner.appearx = 704;
      owner.appeary = 360;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 250;
      owner.appeary = 190;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map3"];
if(ctx.bool((owner.parent)?.["event9"] == 0))
{
   ctx.graph.goto(owner.door,1);
   owner.events = ["event9"];
}
else
{
   ctx.graph.goto(owner.door,3);
   (owner.changes)?.["push"]?.("map5");
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v0a147(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map5";
owner.changes = [];
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map4":
      owner.appearx = 283;
      owner.appeary = 379;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      if(ctx.bool((owner.parent)?.["event10"] != 0))
      {
         ctx.graph.stop(owner.xman);
         ctx.setField(owner.man,"_visible",false);
         owner.changes = ["map4","map7","map8"];
      }
      break;
   case "map6":
      owner.appearx = 227;
      owner.appeary = 146;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      ctx.graph.stop(owner.xman);
      ctx.setField(owner.man,"_visible",false);
      owner.changes = ["map4","map7","map8"];
      break;
   case "map7":
      owner.appearx = 432;
      owner.appeary = 324;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      ctx.graph.stop(owner.xman);
      ctx.setField(owner.man,"_visible",false);
      owner.changes = ["map4","map7","map8"];
      break;
   case "map8":
      owner.appearx = 334;
      owner.appeary = 224;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
      ctx.graph.stop(owner.xman);
      ctx.setField(owner.man,"_visible",false);
      owner.changes = ["map4","map7","map8"];
}
if(ctx.bool((owner.parent)?.["event11"] == 0))
{
   if(ctx.bool((owner.parent)?.["event10"] == 1))
   {
      ctx.graph.goto(owner.door,1);
      owner.events = ["event11"];
   }
}
else
{
   ctx.graph.goto(owner.door,3);
   (owner.changes)?.["push"]?.("map6");
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("xl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("xl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("xl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_10 = owner.player;
   owner._temp_9 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
else
{
   owner._temp_12 = owner.player;
   owner._temp_11 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_12,owner._temp_11,owner._loc0_);
}

}

export function c7v0a148(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map6";
owner.appearx = 32;
owner.appeary = 316;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wd2"));
owner.changes = ["map5"];
owner.events = ["event14","event15"];
if(ctx.bool((owner.parent)?.["event14"] != 0))
{
   ctx.trace?.("已经晕倒");
   ctx.graph.goto(owner.xman,"kkk");
   ctx.graph.goto((owner.xman)?.["mc"],"kkk");
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
(owner.blocks)?.["push"]?.("xman");
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}
ctx.graph.swapDepths(owner.xman,5000005);

}

export function c7v0a149(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c7v0a150(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],1);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
      }
   }

}

export function c7v0a151(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c7v0a152(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map7";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.appearx = 368;
      owner.appeary = 363;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map9":
      owner.appearx = 315;
      owner.appeary = 208;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map5","map9"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v0a153(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map8";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.appearx = 394;
      owner.appeary = 363;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map9":
      owner.appearx = 441;
      owner.appeary = 204;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map5","map9"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v0a154(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map9";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map7":
      owner.appearx = 462;
      owner.appeary = 386;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map8":
      owner.appearx = 382;
      owner.appeary = 222;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map7","map8"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v0a155(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a156(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a157(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c7v0a158(ctx,owner){
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

export function c7v0a159(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c7v0a160(ctx,owner){
owner.listItem = function(){
   var _loc3_ = owner.parent;
   var _loc1_ = 0;
   var _loc2_;
   while(ctx.bool(ctx.less(_loc1_,(((_loc3_)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc2_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc1_),_loc1_);
      ctx.setField(_loc2_,"_x",(ctx.num(_loc1_)*ctx.num(36)));
      ctx.graph.goto(_loc2_,(((_loc3_)?.["_parent"])?.["itemList"])?.[_loc1_]);
      ctx.setField(_loc2_,"aim",(((_loc3_)?.["_parent"])?.["itemList"])?.[_loc1_]);
      ctx.setField(_loc2_,"iii",_loc1_);
      _loc1_ = ctx.add(_loc1_,1);
   }
   owner.itemStep = 0;
   ctx.setField(owner.btnLeft,"_visible",0);
   if(ctx.bool(ctx.lessEqual((((_loc3_)?.["_parent"])?.["itemList"])?.["length"],4)))
   {
      ctx.setField(owner.btnRight,"_visible",0);
   }
   ctx.setField(owner.btnLeft,"onRelease",function()
   {
      ctx.setField(owner.btnRight,"_visible",1);
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],36)))(owner.itemList,"_x");
      ((old)=>(owner.itemStep=old+1,old))(ctx.num(owner.itemStep));
      if(ctx.bool(ctx.lessEqual(0,owner.itemStep)))
      {
         ctx.setField(this,"_visible",0);
      }
   });
   ctx.setField(owner.btnRight,"onRelease",function()
   {
      ctx.setField(owner.btnLeft,"_visible",1);
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(36))))(owner.itemList,"_x");
      ((old)=>(owner.itemStep=old-1,old))(ctx.num(owner.itemStep));
      if(ctx.bool(ctx.lessEqual(owner.itemStep,ctx.add((-ctx.num((((owner.parent)?.["_parent"])?.["itemList"])?.["length"])),4))))
      {
         ctx.setField(this,"_visible",0);
      }
   });
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
owner.tf = ctx.bool(ctx.lessEqual((ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4))),0)) ? 1 : (ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4)));
ctx.graph.goto(owner.timebar,owner.tf);
owner.listItem?.();

}

export function c7v0a161(ctx,owner){

   ctx.graph.goto(owner,(((((owner.parent)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c7v0a162(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a163(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a164(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c7v0a165(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c7v0a166(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c7v0a167(ctx,owner){
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

export function c7v0a168(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c7v0a169(ctx,owner){
ctx.trace?.("fadeIn");
ctx.setField((owner.parent)?.["disBtn"],"_visible",1);
ctx.setField((owner.parent)?.["disBtn"],"useHandCursor",0);
(owner.parent)?.["etClear"]?.();
ctx.trace?.(((owner.parent)?.["movie"])?.["_visible"]);
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   owner.onEnterFrame = function()
   {
      var _loc1_ = owner.parent;
      ctx.setField((_loc1_)?.["movie"],"_visible",0);
      ctx.graph.goto(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]],1);
   };
}
ctx.graph.play(owner);

}

export function c7v0a170(ctx,owner){
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
      var _loc1_ = owner.parent;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["skipFrame"]):logicalLeft)((ctx.keys)?.["isDown"]?.((_loc1_)?.["actKey"]))))
      {
         ctx.graph.goto(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]],(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["skipFrame"],{play:true});
      }
      if(ctx.bool(ctx.lessEqual((((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["_totalframes"],(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["_currentframe"])))
      {
         ctx.graph.stop(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]]);
         owner.onEnterFrame = undefined;
         if(ctx.bool((_loc1_)?.["eventAct"] == "change"))
         {
            ctx.graph.goto((_loc1_)?.["map"],(_loc1_)?.["eventNext"]);
         }
         ctx.setField((_loc1_)?.["disAll"],"_visible",0);
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

export function c7v0a171(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c7v0a172(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a173(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a174(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a175(ctx,owner){
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

export function c7v0a176(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c7v0a177(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c7v0a178(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a179(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c7v0a180(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a181(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a182(ctx,owner){
owner._visible = 0;

}

export function c7v0a183(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a184(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a185(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a186(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a187(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a188(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a189(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a190(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a191(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a192(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a193(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a194(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v0a195(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c7v0a196(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c7v0a197(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a198(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a199(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a200(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a201(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a202(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a203(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a204(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a205(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a206(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a207(ctx,owner){
ctx.stopAllSounds?.();

}

export function c7v0a208(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c7v0a209(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c7v0a210(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v0a211(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a212(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a213(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a214(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a215(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a216(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a217(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a218(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a219(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a220(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a221(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a222(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a223(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a224(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a225(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a226(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v0a227(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c7v0a228(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c7v0a229(ctx,owner){
owner.init = function(){
   var _loc1_ = owner.parent;
   owner.fxbossHitted2 = ctx.sound(owner);
   (owner.fxbossHitted2)?.["attachSound"]?.("fxbossHitted2");
   owner.fxbossHitted1 = ctx.sound(owner);
   (owner.fxbossHitted1)?.["attachSound"]?.("fxbossHitted1");
   owner.fxqggHitted2 = ctx.sound(owner);
   (owner.fxqggHitted2)?.["attachSound"]?.("fxqggHitted2");
   owner.fxqggHitted1 = ctx.sound(owner);
   (owner.fxqggHitted1)?.["attachSound"]?.("fxqggHitted1");
   owner.fxnpcHitted2 = ctx.sound(owner);
   (owner.fxnpcHitted2)?.["attachSound"]?.("fxnpcHitted2");
   owner.fxnpcHitted1 = ctx.sound(owner);
   (owner.fxnpcHitted1)?.["attachSound"]?.("fxnpcHitted1");
   owner.fxqggHit2 = ctx.sound(owner);
   (owner.fxqggHit2)?.["attachSound"]?.("fxqggHit2");
   owner.fxqggHit1 = ctx.sound(owner);
   (owner.fxqggHit1)?.["attachSound"]?.("fxqggHit1");
   owner.fxbossHit = ctx.sound(owner);
   (owner.fxbossHit)?.["attachSound"]?.("fxbossHit");
   owner.fxnpcHit = ctx.sound(owner);
   (owner.fxnpcHit)?.["attachSound"]?.("fxnpcHit");
   owner.fxhitting = ctx.sound(owner);
   (owner.fxhitting)?.["attachSound"]?.("fxhitting");
   owner.npcType = ctx.bool(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["fighting"] != "event15") ? "npc" : "boss";
   ctx.setField((owner.life1)?.["bar"],"_xscale",((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["life"]);
   ctx.setField(owner.os,"_visible",0);
   owner.scoreHit = 3;
   owner.scoreWhack = 8;
   owner.scoreJH = 5;
   owner.ngoBack = 1;
   if(ctx.bool(owner.npcType == "npc"))
   {
      owner.nscoreHit = 3;
      owner.nscoreWhack = 5;
      owner.nscoreJH = 4;
      owner.h1r = 3;
      owner.h2r = 1;
      owner.hjr = 1;
      owner.jr = 1;
      owner.dr = 3;
      owner.dhr = 5;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,1);
   }
   else
   {
      owner.nscoreHit = 4;
      owner.nscoreWhack = 9;
      owner.nscoreJH = 6;
      owner.h1r = 6;
      owner.h2r = 3;
      owner.hjr = 4;
      owner.jr = 3;
      owner.dr = 7;
      owner.dhr = 10;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,2);
      ctx.graph.goto(owner,2);
   }
   owner.normalY = 370;
   owner.xMin = 50;
   owner.xMax = 700;
   owner.lightCount = 0;
   owner.jumpArr = [28,40,30,21,8,2,0,(-ctx.num(2)),(-ctx.num(12)),(-ctx.num(21)),(-ctx.num(24)),(-ctx.num(30)),(-ctx.num(40))];
   owner.njumpArr = [25,16,9,4,1,0,(-ctx.num(1)),(-ctx.num(4)),(-ctx.num(9)),(-ctx.num(16)),(-ctx.num(25))];
   owner.speedx = 7;
   owner.upKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["upKey"];
   owner.leftKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["leftKey"];
   owner.downKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["downKey"];
   owner.rightKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["rightKey"];
   owner.actKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["actKey"];
   owner.fired = 0;
   owner.hitSpeed = 4;
   owner.dir = "right";
   owner.redir = "left";
   owner.dir2 = "left";
   owner.redir2 = "right";
   owner.pState = "stand";
   owner.nState = "stand";
   owner.hitMax = 2;
   owner.nhitted = 0;
   owner.disMin = 130;
   owner.dis2 = 70;
   owner.baseline = 380;
   owner.canAct = true;
   ctx.setField(owner.ss,"_visible",0);
   owner.canKey = true;
   owner.gamePlay?.();
};
owner.checkDir = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "right":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "left";
      owner.redir = "right";
      owner.pState = "right2left";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "left":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "right";
      owner.redir = "left";
      owner.pState = "left2right";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
};
owner.checkNpcDir = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "right":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx1");
      owner.canAct = false;
      owner.dir2 = "left";
      owner.redir2 = "right";
      owner.nState = "right2left";
      ctx.graph.goto(owner.npc,owner.nState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "left":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx2");
      owner.canAct = false;
      owner.dir2 = "right";
      owner.redir2 = "left";
      owner.nState = "left2right";
      ctx.graph.goto(owner.npc,owner.nState);
   }
};
owner.checkAct = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "right":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "left";
      owner.redir = "right";
      owner.pState = "right2left";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "left":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "right";
      owner.redir = "left";
      owner.pState = "left2right";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
   else
   {
      owner.canKey = true;
      owner.pState = "Stand";
      ctx.graph.goto(owner.qgg,ctx.add(owner.dir,owner.pState));
   }
   ctx.trace?.(ctx.add("dir=",owner.dir));
};
owner.checkNpcAct = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "right":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx1");
      owner.canAct = false;
      owner.dir2 = "left";
      owner.redir2 = "right";
      owner.nState = "right2left";
      ctx.graph.goto(owner.npc,owner.nState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "left":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx2");
      owner.canAct = false;
      owner.dir2 = "right";
      owner.redir2 = "left";
      owner.nState = "left2right";
      ctx.graph.goto(owner.npc,owner.nState);
   }
   else
   {
      ctx.trace?.("xxxxxxxx3");
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(ctx.randomInt?.(30),owner.dhr):logicalLeft)(owner.nState == "Def")))
      {
         owner.nact?.("Hit");
      }
      else
      {
         owner.nState = "Walk";
         owner.canAct = true;
         owner.nact?.();
      }
   }
   ctx.trace?.(ctx.add("dir2=",owner.dir2));
};
owner.jumping = function(){
   owner.jc = 0;
   ctx.setField(owner.jumper,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((owner.jumpArr)?.[owner.jc]))))(owner.qgg,"_y");
      ((old)=>(owner.jc=old+1,old))(ctx.num(owner.jc));
      if(ctx.bool(ctx.lessEqual((owner.jumpArr)?.["length"],owner.jc)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.hiteding = function(){
   ctx.trace?.("jkjljlkj;jlajfdadsfas");
   owner.hc = 0;
   ctx.setField(owner.jumper,"onEnterFrame",undefined);
   ctx.setField(owner.hitter,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(ctx.bool(owner.dir != "right") ? (-ctx.num(owner.hitSpeed)) : owner.hitSpeed))))(owner.qgg,"_x");
      if(ctx.bool(ctx.less((owner.qgg)?.["_y"],owner.baseline)))
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num((ctx.num(owner.baseline)-ctx.num((owner.qgg)?.["_y"])))/ctx.num(2)))))(owner.qgg,"_y");
      }
      ((old)=>(owner.hc=old+1,old))(ctx.num(owner.hc));
      if(ctx.bool(ctx.less(4,owner.hc)))
      {
         ctx.setField(owner.qgg,"_y",owner.baseline);
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.njumping = function(){
   owner.njc = 0;
   ctx.setField(owner.njumper,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((owner.njumpArr)?.[owner.njc]))))(owner.npc,"_y");
      ((old)=>(owner.njc=old+1,old))(ctx.num(owner.njc));
      if(ctx.bool(ctx.lessEqual((owner.njumpArr)?.["length"],owner.njc)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.nhiteding = function(){
   ctx.trace?.("jkjljlkj;jlajfdadsfas");
   ((old)=>(owner.nhitted=old+1,old))(ctx.num(owner.nhitted));
   owner.nhc = 0;
   ctx.setField(owner.njumper,"onEnterFrame",undefined);
   ctx.setField(owner.nhitter,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(ctx.bool(owner.dir2 != "right") ? (-ctx.num(owner.hitSpeed)) : owner.hitSpeed))))(owner.npc,"_x");
      if(ctx.bool(ctx.less((owner.npc)?.["_y"],owner.baseline)))
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num((ctx.num(owner.baseline)-ctx.num((owner.npc)?.["_y"])))/ctx.num(2)))))(owner.npc,"_y");
      }
      ((old)=>(owner.nhc=old+1,old))(ctx.num(owner.nhc));
      if(ctx.bool(ctx.less(4,owner.nhc)))
      {
         ctx.setField(owner.npc,"_y",owner.baseline);
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.act = function(actShow){
   var _loc1_ = actShow;
   var _loc2_ = this;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?_loc1_ != "Def":logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?_loc1_ != "Walk":logicalLeft)(_loc1_ != "Jump"))))
   {
      owner.canKey = false;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:_loc1_ == "JH")(_loc1_ == "Whack")))
      {
         (owner.fxqggHit2)?.["start"]?.();
      }
      else if(ctx.bool(_loc1_ == "Hit"))
      {
         (owner.fxqggHit1)?.["start"]?.();
      }
   }
   else if(ctx.bool(_loc1_ == "Jump"))
   {
      owner.jumping?.();
   }
   owner.pState = _loc1_;
   if(ctx.bool(owner.pState == "Hitted"))
   {
      ctx.trace?.(ctx.add("---------------------------------------===================",(_loc2_)?.[ctx.add("nscore",owner.nState)]));
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((_loc2_)?.[ctx.add("nscore",owner.nState)]))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   else if(ctx.bool(owner.pState == "HitDef"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((_loc2_)?.[ctx.add("nscore",owner.nState)])/ctx.num(4))))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   ctx.trace?.(_loc1_);
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,_loc1_));
};
owner.nact = function(nactShow){
   var _loc2_ = nactShow;
   var _loc3_ = this;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(ctx.randomInt?.(30),owner.dr):logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.hitMax,owner.nhitted):logicalLeft)(_loc2_ == "Hitted"))))
   {
      owner.nhitted = 0;
      _loc2_ = "Def";
      owner.canAct = false;
   }
   var _loc1_;
   if(ctx.bool(_loc2_ == undefined))
   {
      ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",_loc2_),"      "),owner.nState));
      if(ctx.bool(ctx.less(owner.disMin,(ctx.math)?.["abs"]?.((ctx.num((owner.qgg)?.["_x"])-ctx.num((owner.npc)?.["_x"]))))))
      {
         if(ctx.bool(owner.nState != "Jump"))
         {
            if(ctx.bool(ctx.less(38,ctx.randomInt?.(30))))
            {
               owner.nState = "Jump";
               owner.njumping?.();
            }
            else
            {
               owner.nState = "Walk";
            }
         }
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.nState == "Walk")(owner.nState == "Jump")))
         {
            if(ctx.bool(owner.dir2 == "right"))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.npc,"_x");
            }
            else
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.npc,"_x");
            }
            owner.checkNpcDir?.();
         }
      }
      else if(ctx.bool(owner.canAct))
      {
         ctx.trace?.("ok");
         _loc1_ = ctx.randomInt?.(30);
         if(ctx.bool(owner.nState == "Jump"))
         {
            if(ctx.bool(ctx.less(_loc1_,owner.hjr)))
            {
               owner.canAct = false;
               owner.nState = "JH";
               ((_loc3_)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
         }
         else
         {
            ctx.trace?.(ctx.add("tempr========================== ",_loc1_));
            if(ctx.bool(ctx.less(_loc1_,owner.h2r)))
            {
               owner.canAct = false;
               owner.nState = "Whack";
               ((_loc3_)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
            else if(ctx.bool(ctx.less(_loc1_,owner.h1r)))
            {
               owner.canAct = false;
               owner.nState = "Hit";
               ((_loc3_)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
            else if(ctx.bool(ctx.less(ctx.randomInt?.(30),owner.jr)))
            {
               owner.nState = "Jump";
               owner.njumping?.();
            }
            else
            {
               owner.nState = "Stand";
            }
         }
      }
   }
   else
   {
      owner.canAct = false;
      owner.nState = _loc2_;
   }
   ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",_loc2_),"      "),owner.nState));
   if(ctx.bool(owner.nState == "Hitted"))
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((_loc3_)?.[ctx.add("score",owner.pState)]))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   else if(ctx.bool(owner.nState == "Def"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((_loc3_)?.[ctx.add("score",owner.pState)])/ctx.num(4))))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,owner.nState));
};
owner.gamePlay = function(){
   var _loc1_ = this;
   owner.onEnterFrame = function()
   {
      var _loc1_ = this;
      if(ctx.bool(ctx.less(((owner.life1)?.["bar"])?.["_xscale"],1)))
      {
         owner.gameOver?.();
      }
      else if(ctx.bool(ctx.less(((owner.life2)?.["bar"])?.["_xscale"],1)))
      {
         owner.gameWin?.();
      }
      if(ctx.bool(!ctx.bool((ctx.keys)?.["isDown"]?.(owner.actKey))))
      {
         owner.fired = 0;
      }
      if(ctx.bool(owner.canKey))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.fired == 0:logicalLeft)((ctx.keys)?.["isDown"]?.(owner.actKey))))
         {
            owner.fired = 1;
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.pState != "Jump":logicalLeft)((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.dir,"Key")]))))
            {
               (owner.fxqggHit2)?.["start"]?.();
               owner.act?.("Whack");
            }
            else if(ctx.bool(owner.pState == "Jump"))
            {
               if(ctx.bool(ctx.less(((owner.qgg)?.["player"])?.["_currentframe"],10)))
               {
                  (owner.fxqggHit1)?.["start"]?.();
                  owner.act?.("JH");
               }
            }
            else
            {
               (owner.fxqggHit1)?.["start"]?.();
               owner.act?.("Hit");
            }
         }
         else if(ctx.bool(owner.pState != "Jump"))
         {
            if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.downKey)))
            {
               owner.act?.("Def");
            }
            else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.upKey)))
            {
               owner.act?.("Jump");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.redir,"Key")]))((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.dir,"Key")]))))
            {
               owner.act?.("Walk");
            }
            else
            {
               ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Stand"));
            }
         }
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.pState == "JH")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.pState == "Jump")(owner.pState == "Walk"))))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.dir,"Key")])))
         {
            if(ctx.bool(owner.dir == "right"))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.qgg,"_x");
            }
            else
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.qgg,"_x");
            }
            ctx.bool(owner.pState != "Walk") ? undefined : owner.checkDir?.();
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.redir,"Key")])))
         {
            if(ctx.bool(owner.redir == "right"))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num(owner.speedx)/ctx.num(2)))))(owner.qgg,"_x");
            }
            else
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num(owner.speedx)/ctx.num(2))))))(owner.qgg,"_x");
            }
            ctx.bool(owner.pState != "Walk") ? undefined : owner.checkDir?.();
         }
         else if(ctx.bool(owner.pState == "Walk"))
         {
            owner.checkAct?.();
         }
      }
      if(ctx.bool(ctx.hitTest(((owner.npc)?.["npc"])?.["hitter"],((owner.qgg)?.["player"])?.["body"])))
      {
         owner.hitting?.(1);
      }
      else if(ctx.bool(ctx.hitTest(((owner.qgg)?.["player"])?.["hitter"],((owner.npc)?.["npc"])?.["body"])))
      {
         owner.hitting?.(2);
      }
      else if(ctx.bool(ctx.hitTest(((owner.qgg)?.["player"])?.["hitter"],((owner.npc)?.["npc"])?.["hitter"])))
      {
         owner.hitting?.(3);
      }
      else
      {
         if(ctx.bool(owner.canAct))
         {
            owner.nact?.();
         }
         ctx.setField(owner.ss,"_visible",0);
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.normalY,(owner.npc)?.["_y"]):logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.normalY,(owner.qgg)?.["_y"]):logicalLeft)(ctx.less((ctx.math)?.["abs"]?.((ctx.num((owner.qgg)?.["_x"])-ctx.num((owner.npc)?.["_x"]))),owner.dis2)))))
      {
         if(ctx.bool(owner.dir == "right"))
         {
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.qgg,"_x");
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.npc,"_x");
         }
         else
         {
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.qgg,"_x");
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.npc,"_x");
         }
      }
      if(ctx.bool(ctx.less((owner.qgg)?.["_x"],owner.xMin)))
      {
         ctx.setField(owner.qgg,"_x",owner.xMin);
      }
      else if(ctx.bool(ctx.less(owner.xMax,(owner.qgg)?.["_x"])))
      {
         ctx.setField(owner.qgg,"_x",owner.xMax);
      }
      if(ctx.bool(ctx.less((owner.npc)?.["_x"],owner.xMin)))
      {
         ctx.setField(owner.npc,"_x",owner.xMin);
      }
      else if(ctx.bool(ctx.less(owner.xMax,(owner.npc)?.["_x"])))
      {
         ctx.setField(owner.npc,"_x",owner.xMax);
      }
      owner.x1 = (owner.qgg)?.["_x"];
      owner.x2 = (owner.npc)?.["_x"];
      ctx.setField(owner.shadow1,"_x",(owner.qgg)?.["_x"]);
      ctx.setField(owner.shadow2,"_x",(owner.npc)?.["_x"]);
      ctx.setField(owner.shadow1,"_xscale",ctx.setField(owner.shadow1,"_yscale",(ctx.num(100)-ctx.num((ctx.num((ctx.num(380)-ctx.num((owner.qgg)?.["_y"])))*ctx.num(0.2))))));
      ctx.setField(owner.shadow2,"_xscale",ctx.setField(owner.shadow2,"_yscale",(ctx.num(100)-ctx.num((ctx.num((ctx.num(380)-ctx.num((owner.npc)?.["_y"])))*ctx.num(0.2))))));
   };
};
owner.hitting = function(hitType){
   ctx.graph.goto(owner.ss,hitType);
   ctx.setField(owner.ss,"_visible",1);
   ((old)=>(owner.lightCount=old+1,old))(ctx.num(owner.lightCount));
   owner.lightNow = ctx.attach(owner.lights,"light",ctx.add("light",owner.lightCount),owner.lightCount);
   ctx.setField(owner.lightNow,"_rotation",ctx.randomInt?.(360));
   ctx.trace?.("hit----------------------------------------------------");
   var _loc2_;
   var _loc1_;
   switch(hitType)
   {
      case 1:
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc1_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
         if(ctx.bool(owner.pState != "Def"))
         {
            if(ctx.bool(owner.nState == "Hit"))
            {
               (owner.fxqggHitted1)?.["start"]?.();
            }
            else
            {
               (owner.fxqggHitted2)?.["start"]?.();
            }
            owner.act?.("Hitted");
         }
         else
         {
            owner.act?.("HitDef");
         }
         break;
      case 2:
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_x"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_x"]),((owner.qgg)?.["player"])?.["_x"]);
         _loc1_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_y"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_y"]),((owner.qgg)?.["player"])?.["_y"]);
         if(ctx.bool(owner.nState != "Def"))
         {
            if(ctx.bool(owner.pState == "Hit"))
            {
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hitted1")])?.["start"]?.();
            }
            else
            {
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hitted2")])?.["start"]?.();
            }
            owner.nact?.("Hitted");
         }
         break;
      case 3:
         (owner.fxhitting)?.["start"]?.();
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc1_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
   }
   ctx.setField(owner.lightNow,"_x",(ctx.num(ctx.add(_loc2_,ctx.randomInt?.(30)))-ctx.num(5)));
   ctx.setField(owner.lightNow,"_y",(ctx.num(ctx.add(_loc1_,ctx.randomInt?.(30)))-ctx.num(5)));
};
owner.gameWin = function(){
   owner.onEnterFrame = undefined;
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Stand"));
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,"Over"));
   ctx.setField(owner.os,"_visible",1);
   ctx.graph.goto(owner.os,"win",{play:true});
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"life",((owner.life1)?.["bar"])?.["_xscale"]);
};
owner.gameOver = function(){
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Over"));
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,"Stand"));
   owner.onEnterFrame = undefined;
   ctx.setField(owner.os,"_visible",1);
   ctx.graph.goto(owner.os,"fail",{play:true});
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"life",((owner.life1)?.["bar"])?.["_xscale"]);
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c7v0a230(ctx,owner){
if(ctx.bool((((owner.parent)?.["_parent"])?.["_parent"])?.["fighting"] == "event4"))
{
   ctx.graph.stop(owner);
   owner.tt = {};
   ctx.setField(owner.tt,"onKeyDown",function()
   {
      if(ctx.bool((ctx.keys)?.["isDown"]?.(32)))
      {
         (ctx.keys)?.["removeListener"]?.(owner.tt);
         ctx.graph.goto(owner,2);
      }
   });
   (ctx.keys)?.["addListener"]?.(owner.tt);
}
else
{
   ctx.graph.goto(owner,2);
}

}

export function c7v0a231(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c7v0a232(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c7v0a233(ctx,owner){
ctx.stopAllSounds?.();

}

export function c7v0a234(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c7v0a235(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a236(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a237(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a238(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a239(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a240(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a241(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a242(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a243(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a244(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a245(ctx,owner){

}

export function c7v0a246(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v0a247(ctx,owner){
owner.init = function(){
   owner.afterMovieEvent = 0;
   owner.life = 100;
   owner.lifex = (-ctx.num(241));
   owner.lifeStep = 1.93;
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
   owner.nspeed = owner.speed = 5;
   owner.nyspeed = owner.nxspeed = owner.yspeed = owner.xspeed = (ctx.num(owner.speed)/ctx.num(1.414213562373));
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
   owner.event15 = 0;
   owner.event16 = 0;
   owner.event17 = 0;
   owner.event18 = 0;
   owner.event19 = 0;
   owner.event20 = 0;
   owner.event21 = 0;
   owner.event22 = 0;
   owner.event23 = 0;
   owner.event24 = 0;
   owner.event25 = 0;
   owner.event26 = 0;
   owner.event27 = 0;
   owner.event28 = 0;
   owner.event30 = 0;
   owner.event31 = 0;
   owner.eventAct = "movie";
   owner.oldMap = "map1";
   ctx.graph.goto(owner.map,"map1");
   owner.gamePause = 1;
   owner.eventNow = "opening";
   owner.getEventShow = 0;
   owner.eventStep = 0;
   ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
   ctx.setField(owner.movie,"_visible",0);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
};
owner.climbDown = function(cx,cy){
   var _loc1_ = cy;
   var _loc2_ = cx;
   owner.aimX = _loc2_;
   owner.aimY = _loc1_;
   owner.tan = (ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(_loc1_))));
   owner.tt = ctx.bool(ctx.lessEqual(_loc1_,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
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
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
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
   var _loc1_ = cy;
   var _loc2_ = cx;
   owner.aimX = _loc2_;
   owner.aimY = _loc1_;
   owner.tan = (ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(_loc1_))));
   owner.tt = ctx.bool(ctx.lessEqual(_loc1_,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
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
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
   ctx.setField((owner.map)?.["player"],"onEnterFrame",function()
   {
      if(ctx.bool(((owner.map)?.["player"])?.["an"] != 1))
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))((owner.map)?.["player"],"_x");
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedy)))((owner.map)?.["player"],"_y");
         owner.tempDis=(ctx.num(owner.tempDis)-ctx.num(owner.speed));
         if(ctx.bool(ctx.lessEqual(owner.tempDis,0)))
         {
            ctx.setField((owner.map)?.["player"],"_x",ctx.add(owner.aimX,24.5));
            ctx.setField((owner.map)?.["player"],"_y",(ctx.num(owner.aimY)-ctx.num(150.5)));
            ctx.graph.goto((owner.map)?.["player"],"climbUp");
         }
      }
      else
      {
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(3))))((owner.map)?.["player"],"_y");
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],4.285714285714286)))((((owner.map)?.["player"])?.["player"])?.["hitter"],"_y");
         if(ctx.bool(ctx.less(((owner.map)?.["player"])?.["_y"],(-ctx.num(100)))))
         {
            owner.changeShow = 1;
            owner.oldMap = (owner.map)?.["map"];
            owner.eventNow = "event000";
            owner.eventNext = "map7";
            owner.eventAct = "change";
            owner.getEventShow = 0;
            owner.eventStep = 0;
            ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
            ctx.setField(owner.movie,"_visible",0);
            ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
            ctx.deleteField((owner.map)?.["player"],"onEnterFrame");
         }
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
   ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
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
               owner.qqDir=ctx.add(owner.qqDir,"2");
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
         if(ctx.bool((owner.map)?.["playerScale"] != (owner.map)?.["minScale"]))
         {
            ctx.setField((owner.map)?.["player"],"_xscale",ctx.setField((owner.map)?.["player"],"_yscale",ctx.add((ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])/ctx.num(420)))*ctx.num((owner.map)?.["playerScale"])),(owner.map)?.["minScale"])));
            owner.xspeed = owner.yspeed = (ctx.num((ctx.num(owner.nyspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
            owner.speed = (ctx.num((ctx.num(owner.nspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
         }
         else
         {
            owner.yspeed = owner.xspeed = (ctx.num((ctx.num(owner.nxspeed)*ctx.num((owner.map)?.["playerScale"])))/ctx.num(100));
            owner.speed = (ctx.num((ctx.num(owner.nspeed)*ctx.num((owner.map)?.["playerScale"])))/ctx.num(100));
         }
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
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner[((owner.map)?.["events"])?.[i]] != 1:logicalLeft)(eventShow == 1)))
            {
               switch(((owner.map)?.["events"])?.[i])
               {
                  case "event1":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event1 == 0:logicalLeft)(owner.itemNow == "item1")))
                     {
                        ((old)=>(owner.event1=old+1,old))(ctx.num(owner.event1));
                        ctx.graph.goto((owner.map)?.["door"],2,{play:true});
                        ctx.setField(owner.map,"changes",["map2"]);
                        ctx.setField(owner.map,"changeMovies",["event000"]);
                     }
                     else
                     {
                        owner.etShow?.("需要特殊物品才能打开大门");
                     }
                     break;
                  case "event2":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event2";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event3":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event2";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event4":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event4";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event5":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event3";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event6":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event4";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event7 == 0:logicalLeft)(owner.itemNow == "item1")))
                     {
                        owner.event7 = 1;
                        ctx.graph.goto((owner.map)?.["door"],2,{play:true});
                        ctx.graph.goto((owner.map)?.["bl3"],2);
                        ctx.setField(owner.map,"changes",["map3"]);
                        ctx.setField(owner.map,"changeMovies",["event000"]);
                        i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == "item1"))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        ctx.graph.goto(owner.itemShow,(owner.itemList)?.[0]);
                        owner.itemNow = (owner.itemList)?.[0];
                        owner.afterMovieEvent = 10;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("你需要把什么东西放进去");
                     }
                     break;
                  case "event8":
                     if(ctx.bool(owner.event8 != 1))
                     {
                        ctx.graph.goto((owner.map)?.["bl1"],2);
                        (owner.getItem)?.["start"]?.();
                        owner.event8 = 1;
                        (owner.itemList)?.["push"]?.("item3");
                        ctx.graph.goto(owner.itemShow,"item3");
                        owner.itemNow = "item3";
                        owner.etShow?.("你得到一块木板");
                     }
                     break;
                  case "event9":
                     if(ctx.bool(owner.event9 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item2"))
                        {
                           ctx.graph.goto((owner.map)?.["door"],2);
                           owner.event9 = 1;
                           owner.afterMovieEvent = 1;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           owner.eventNow = "event9";
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("怎样才能打开大门呢");
                        }
                     }
                     break;
                  case "event11":
                     if(ctx.bool(owner.event11 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item2"))
                        {
                           ctx.graph.goto((owner.map)?.["door"],2);
                           owner.event11 = 1;
                           owner.afterMovieEvent = 2;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           owner.eventNow = "event11";
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("怎样才能打开大门呢");
                        }
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto((owner.map)?.["topBlock"],2,{play:true});
                        ctx.setField(owner.map,"events",[]);
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event13";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("快请求帮助，逃出去吧");
                     }
                     break;
                  case "event14":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event14 == 0:logicalLeft)(((owner.map)?.["hitter"])?.["_currentframe"] == 2)))
                     {
                        if(ctx.bool(owner.itemNow == "item4"))
                        {
                           owner.event14 = 1;
                           i = 0;
                           while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                           {
                              if(ctx.bool((owner.itemList)?.[i] == "item4"))
                              {
                                 (owner.itemList)?.["splice"]?.(i,1);
                              }
                              ((old)=>(i=old+1,old))(ctx.num(i));
                           }
                           ctx.graph.goto(owner.itemShow,(owner.itemList)?.[0]);
                           owner.itemNow = (owner.itemList)?.[0];
                        }
                        else
                        {
                           owner.etShow?.("这是一口水井");
                        }
                     }
                     break;
                  case "event15":
                     if(ctx.bool(owner.event14 == 2))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event15";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event16":
                     owner.etShow?.("昏睡中的独眼怪");
                     break;
                  case "event19":
                     if(ctx.bool(owner.itemNow == "item3"))
                     {
                        ctx.setField((owner.map)?.["topBlock"],"_x",0);
                        ctx.setField((owner.map)?.["topBlock"],"_y",0);
                        ctx.graph.goto((owner.map)?.["topBlock"],2);
                        ctx.graph.goto((owner.map)?.["yu"],2);
                        owner.event19 = 1;
                        i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == "item3"))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        ctx.graph.goto(owner.itemShow,"item1");
                        owner.itemNow = "item1";
                     }
                     else
                     {
                        owner.etShow?.("怎样才能把鸟引下来呢?");
                     }
                     break;
                  case "event20":
                     ctx.trace?.(123456);
                     ctx.graph.swapDepths((owner.map)?.["teng1"],1);
                     ctx.setField(owner.map,"tengf",1);
                     owner.gamePausing?.();
                     ctx.setField((owner.map)?.["player"],"mapname","map7");
                     owner.climbUp?.(93,196);
                     break;
                  case "event21":
                     ctx.graph.swapDepths((owner.map)?.["teng2"],1);
                     ctx.setField(owner.map,"tengf",2);
                     owner.gamePausing?.();
                     ctx.setField((owner.map)?.["player"],"mapname","map7");
                     owner.climbUp?.(164,187);
                     break;
                  case "event22":
                     ctx.graph.swapDepths((owner.map)?.["teng3"],1);
                     ctx.setField(owner.map,"tengf",3);
                     owner.gamePausing?.();
                     ctx.setField((owner.map)?.["player"],"mapname","map7");
                     owner.climbUp?.(225,130);
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
            owner.txtCount = ctx.bool(owner.ttc != owner.txtCount) ? owner.txtCount : ctx.add(owner.txtCount,1);
            _loc2_ = owner.txtCount;
            _loc1_ = _loc2_;
            while(ctx.bool(ctx.less(_loc1_,(ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(_loc2_)/ctx.num(owner.txtLength)),1)))))))
            {
               if(ctx.bool((owner.txts)?.[_loc1_] == undefined))
               {
                  break;
               }
               owner.txtShow?.(_loc1_);
               _loc1_ = ctx.add(_loc1_,1);
            }
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
            ((old)=>(owner.txtCount=old+1,old))(ctx.num(owner.txtCount));
            owner.talking = 0;
         }
         else if(ctx.bool(ctx.less(1,(owner.talker)?.["_currentframe"])))
         {
            (owner.talker)?.["back"]?.();
         }
         else
         {
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
   if(ctx.bool(ctx.less(owner.txtCount,(owner.txts)?.["length"])))
   {
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
   owner.talking = 1;
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
   var _loc3_ = ctx.add((ctx.num((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))%ctx.num(owner.txtW)))*ctx.num(owner.txtDisw)),owner.txtXmin);
   var _loc2_ = ctx.add((ctx.num((ctx.math)?.["floor"]?.((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))/ctx.num(owner.txtW))))*ctx.num(owner.txtDish)),owner.txtYmin);
   var _loc1_ = ctx.attach((owner.talker)?.["popup"],"talkTxt",ctx.add("talkTxt",owner.txtCount),owner.txtCount);
   ctx.setField(_loc1_,"_x",_loc3_);
   ctx.setField(_loc1_,"_y",_loc2_);
   ctx.setField((_loc1_)?.["txt"],"txt",(owner.txts)?.[owner.txtCount]);
   ctx.graph.goto(_loc1_,1,{play:true});
   owner.ttc = owner.txtCount;
   if(ctx.bool(owner.showAllTxt != 1))
   {
      ctx.setField(_loc1_,"onEnterFrame",function()
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
owner.fight = function(fightEvent,fo,bf){
   owner.fighting = fightEvent;
   owner.bgFrame = bf;
   owner.fightObj = fo;
   ctx.setField(this,fightEvent,1);
   owner.getEventShow = 0;
   owner.gamePausing?.();
   owner.eventStep = 0;
   owner.eventNow = "fighting";
   owner.eventNext = "";
   owner.eventAct = "movie";
   ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
   ctx.setField(owner.movie,"_visible",0);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
};
owner.newlife = function(nlv){
   ctx.bool(ctx.lessEqual((ctx.num(owner.life)-ctx.num(nlv)),0)) ? (owner.life = 0) : (owner.life=(ctx.num(owner.life)-ctx.num(nlv)));
   ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
   if(ctx.bool(owner.life == 0))
   {
      ctx.graph.next(owner);
   }
};
owner.ameEvent = function(){
   switch(owner.afterMovieEvent)
   {
      case 1:
         ((owner.map)?.["changes"])?.["push"]?.("map5");
         break;
      case 2:
         ((owner.map)?.["changes"])?.["push"]?.("map6");
         break;
      case 3:
         ctx.graph.goto((owner.map)?.["shu"],2);
         break;
      case 4:
         (owner.getItem)?.["start"]?.();
         ctx.graph.goto((owner.map)?.["wang"],2);
         (owner.itemList)?.["push"]?.("item5");
         ctx.graph.goto(owner.itemShow,"item5");
         owner.itemNow = "item5";
         owner.etShow?.("您得到了藤蔓");
         break;
      case 5:
         ctx.graph.goto(((owner.map)?.["hitter"])?.[ctx.add("mc",owner.treenum)],2);
         ctx.graph.goto((owner.map)?.[ctx.add("tree",owner.treenum)],2,{play:true});
         ctx.graph.goto(((owner.map)?.["topBlock"])?.[ctx.add("tree",owner.treenum)],2,{play:true});
         break;
      case 6:
         ctx.graph.goto(((owner.map)?.["topBlock"])?.["taopao"],2,{play:true});
         break;
      case 10:
         ctx.graph.goto((owner.map)?.["door"],"kkk");
         break;
      case 11:
         owner.itemNow = "item4";
         (owner.itemList)?.["push"]?.("item4");
         owner.etShow?.("你得到毒刺");
         owner.event10 = 1;
         (owner.getItem)?.["start"]?.();
         ((owner.map)?.["changes"])?.["push"]?.("map4");
         ((owner.map)?.["changes"])?.["push"]?.("map7");
         ((owner.map)?.["changes"])?.["push"]?.("map8");
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();
(owner.itemList)?.["push"]?.("item5");
(owner.itemList)?.["push"]?.("item1");
ctx.graph.goto(owner.itemShow,"item1");
owner.itemNow = "item1";
(owner.itemList)?.["push"]?.("item2");

}

export function c7v0a248(ctx,owner){
owner.oldMap = "";

}

export function c7v1a249(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c7v1a250(ctx,owner){

   ctx.stopDrag(owner);

}

export function c7v1a251(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c7v1a252(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c7v1a253(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c7v1a254(ctx,owner){

   if(ctx.bool(ctx.less(((owner.parent)?.["ttt"])?.["length"],10)))
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],((owner.parent)?.["t_array"])?.[owner.i])))(owner.parent,"ttt");
   }

}

export function c7v1a255(ctx,owner){

   owner.ttt = "";

}

export function c7v1a256(ctx,owner){

   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.ttt == "QQPET")(owner.ttt == "qqpet")))
   {
      ctx.graph.goto(owner.parent,3,{play:true});
   }
   else
   {
      ctx.graph.goto(owner.parent,"kkk");
   }

}

export function c7v1a257(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
   }

}

export function c7v1a258(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c7v1a259(ctx,owner){

   ctx.graph.play(owner);

}

export function c7v1a260(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c7v1a261(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c7v1a262(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c7v1a263(ctx,owner){

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

export function c7v1a264(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c7v1a265(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c7v1a266(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c7v1a267(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c7v1a268(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c7v1a269(ctx,owner){

   owner._quality = "HIGH";

}

export function c7v1a270(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c7v1a271(ctx,owner){

   owner._quality = "LOW";

}

export function c7v1a272(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c7v1a273(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c7v1a274(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c7v1a275(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c7v1a276(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c7v1a277(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c7v1a278(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c7v1a279(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a280(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a281(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a282(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a283(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a284(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a285(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a286(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a287(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a288(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a289(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c7v1a290(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c7v1a291(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a292(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a293(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a294(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a295(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a296(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a297(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a298(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a299(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a300(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a301(ctx,owner){
ctx.stopAllSounds?.();

}

export function c7v1a302(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c7v1a303(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c7v1a304(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a305(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a306(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a307(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a308(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a309(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a310(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a311(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a312(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a313(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a314(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a315(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a316(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a317(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a318(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c7v1a319(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c7v1a320(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c7v1a321(ctx,owner){
owner.init = function(){
   var _loc1_ = owner.parent;
   owner.fxbossHitted2 = ctx.sound(owner);
   (owner.fxbossHitted2)?.["attachSound"]?.("fxbossHitted2");
   owner.fxbossHitted1 = ctx.sound(owner);
   (owner.fxbossHitted1)?.["attachSound"]?.("fxbossHitted1");
   owner.fxqggHitted2 = ctx.sound(owner);
   (owner.fxqggHitted2)?.["attachSound"]?.("fxqggHitted2");
   owner.fxqggHitted1 = ctx.sound(owner);
   (owner.fxqggHitted1)?.["attachSound"]?.("fxqggHitted1");
   owner.fxnpcHitted2 = ctx.sound(owner);
   (owner.fxnpcHitted2)?.["attachSound"]?.("fxnpcHitted2");
   owner.fxnpcHitted1 = ctx.sound(owner);
   (owner.fxnpcHitted1)?.["attachSound"]?.("fxnpcHitted1");
   owner.fxqggHit2 = ctx.sound(owner);
   (owner.fxqggHit2)?.["attachSound"]?.("fxqggHit2");
   owner.fxqggHit1 = ctx.sound(owner);
   (owner.fxqggHit1)?.["attachSound"]?.("fxqggHit1");
   owner.fxbossHit = ctx.sound(owner);
   (owner.fxbossHit)?.["attachSound"]?.("fxbossHit");
   owner.fxnpcHit = ctx.sound(owner);
   (owner.fxnpcHit)?.["attachSound"]?.("fxnpcHit");
   owner.fxhitting = ctx.sound(owner);
   (owner.fxhitting)?.["attachSound"]?.("fxhitting");
   owner.npcType = ctx.bool(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["fighting"] != "event15") ? "npc" : "boss";
   ctx.setField((owner.life1)?.["bar"],"_xscale",((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["life"]);
   ctx.setField(owner.os,"_visible",0);
   owner.scoreHit = 3;
   owner.scoreWhack = 8;
   owner.scoreJH = 5;
   owner.ngoBack = 1;
   if(ctx.bool(owner.npcType == "npc"))
   {
      owner.nscoreHit = 3;
      owner.nscoreWhack = 5;
      owner.nscoreJH = 4;
      owner.h1r = 3;
      owner.h2r = 1;
      owner.hjr = 1;
      owner.jr = 1;
      owner.dr = 3;
      owner.dhr = 5;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,1);
   }
   else
   {
      owner.nscoreHit = 4;
      owner.nscoreWhack = 9;
      owner.nscoreJH = 6;
      owner.h1r = 6;
      owner.h2r = 3;
      owner.hjr = 4;
      owner.jr = 3;
      owner.dr = 7;
      owner.dhr = 10;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,2);
      ctx.graph.goto(owner,2);
   }
   owner.normalY = 370;
   owner.xMin = 50;
   owner.xMax = 700;
   owner.lightCount = 0;
   owner.jumpArr = [28,40,30,21,8,2,0,(-ctx.num(2)),(-ctx.num(12)),(-ctx.num(21)),(-ctx.num(24)),(-ctx.num(30)),(-ctx.num(40))];
   owner.njumpArr = [25,16,9,4,1,0,(-ctx.num(1)),(-ctx.num(4)),(-ctx.num(9)),(-ctx.num(16)),(-ctx.num(25))];
   owner.speedx = 7;
   owner.upKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["upKey"];
   owner.leftKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["leftKey"];
   owner.downKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["downKey"];
   owner.rightKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["rightKey"];
   owner.actKey = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["actKey"];
   owner.fired = 0;
   owner.hitSpeed = 4;
   owner.dir = "right";
   owner.redir = "left";
   owner.dir2 = "left";
   owner.redir2 = "right";
   owner.pState = "stand";
   owner.nState = "stand";
   owner.hitMax = 2;
   owner.nhitted = 0;
   owner.disMin = 130;
   owner.dis2 = 70;
   owner.baseline = 380;
   owner.canAct = true;
   ctx.setField(owner.ss,"_visible",0);
   owner.canKey = true;
   owner.gamePlay?.();
};
owner.checkDir = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "right":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "left";
      owner.redir = "right";
      owner.pState = "right2left";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "left":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "right";
      owner.redir = "left";
      owner.pState = "left2right";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
};
owner.checkNpcDir = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "right":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx1");
      owner.canAct = false;
      owner.dir2 = "left";
      owner.redir2 = "right";
      owner.nState = "right2left";
      ctx.graph.goto(owner.npc,owner.nState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "left":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx2");
      owner.canAct = false;
      owner.dir2 = "right";
      owner.redir2 = "left";
      owner.nState = "left2right";
      ctx.graph.goto(owner.npc,owner.nState);
   }
};
owner.checkAct = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "right":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "left";
      owner.redir = "right";
      owner.pState = "right2left";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir == "left":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      owner.canKey = false;
      owner.dir = "right";
      owner.redir = "left";
      owner.pState = "left2right";
      ctx.graph.goto(owner.qgg,owner.pState);
   }
   else
   {
      owner.canKey = true;
      owner.pState = "Stand";
      ctx.graph.goto(owner.qgg,ctx.add(owner.dir,owner.pState));
   }
   ctx.trace?.(ctx.add("dir=",owner.dir));
};
owner.checkNpcAct = function(){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "right":logicalLeft)(ctx.less((owner.qgg)?.["_x"],(owner.npc)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx1");
      owner.canAct = false;
      owner.dir2 = "left";
      owner.redir2 = "right";
      owner.nState = "right2left";
      ctx.graph.goto(owner.npc,owner.nState);
   }
   else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.dir2 == "left":logicalLeft)(ctx.less((owner.npc)?.["_x"],(owner.qgg)?.["_x"]))))
   {
      ctx.trace?.("xxxxxxxx2");
      owner.canAct = false;
      owner.dir2 = "right";
      owner.redir2 = "left";
      owner.nState = "left2right";
      ctx.graph.goto(owner.npc,owner.nState);
   }
   else
   {
      ctx.trace?.("xxxxxxxx3");
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(ctx.randomInt?.(30),owner.dhr):logicalLeft)(owner.nState == "Def")))
      {
         owner.nact?.("Hit");
      }
      else
      {
         owner.nState = "Walk";
         owner.canAct = true;
         owner.nact?.();
      }
   }
   ctx.trace?.(ctx.add("dir2=",owner.dir2));
};
owner.jumping = function(){
   owner.jc = 0;
   ctx.setField(owner.jumper,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((owner.jumpArr)?.[owner.jc]))))(owner.qgg,"_y");
      ((old)=>(owner.jc=old+1,old))(ctx.num(owner.jc));
      if(ctx.bool(ctx.lessEqual((owner.jumpArr)?.["length"],owner.jc)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.hiteding = function(){
   ctx.trace?.("jkjljlkj;jlajfdadsfas");
   owner.hc = 0;
   ctx.setField(owner.jumper,"onEnterFrame",undefined);
   ctx.setField(owner.hitter,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(ctx.bool(owner.dir != "right") ? (-ctx.num(owner.hitSpeed)) : owner.hitSpeed))))(owner.qgg,"_x");
      if(ctx.bool(ctx.less((owner.qgg)?.["_y"],owner.baseline)))
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num((ctx.num(owner.baseline)-ctx.num((owner.qgg)?.["_y"])))/ctx.num(2)))))(owner.qgg,"_y");
      }
      ((old)=>(owner.hc=old+1,old))(ctx.num(owner.hc));
      if(ctx.bool(ctx.less(4,owner.hc)))
      {
         ctx.setField(owner.qgg,"_y",owner.baseline);
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.njumping = function(){
   owner.njc = 0;
   ctx.setField(owner.njumper,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((owner.njumpArr)?.[owner.njc]))))(owner.npc,"_y");
      ((old)=>(owner.njc=old+1,old))(ctx.num(owner.njc));
      if(ctx.bool(ctx.lessEqual((owner.njumpArr)?.["length"],owner.njc)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.nhiteding = function(){
   ctx.trace?.("jkjljlkj;jlajfdadsfas");
   ((old)=>(owner.nhitted=old+1,old))(ctx.num(owner.nhitted));
   owner.nhc = 0;
   ctx.setField(owner.njumper,"onEnterFrame",undefined);
   ctx.setField(owner.nhitter,"onEnterFrame",function()
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(ctx.bool(owner.dir2 != "right") ? (-ctx.num(owner.hitSpeed)) : owner.hitSpeed))))(owner.npc,"_x");
      if(ctx.bool(ctx.less((owner.npc)?.["_y"],owner.baseline)))
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num((ctx.num(owner.baseline)-ctx.num((owner.npc)?.["_y"])))/ctx.num(2)))))(owner.npc,"_y");
      }
      ((old)=>(owner.nhc=old+1,old))(ctx.num(owner.nhc));
      if(ctx.bool(ctx.less(4,owner.nhc)))
      {
         ctx.setField(owner.npc,"_y",owner.baseline);
         ctx.setField(this,"onEnterFrame",undefined);
      }
   });
};
owner.act = function(actShow){
   var _loc1_ = actShow;
   var _loc2_ = this;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?_loc1_ != "Def":logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?_loc1_ != "Walk":logicalLeft)(_loc1_ != "Jump"))))
   {
      owner.canKey = false;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:_loc1_ == "JH")(_loc1_ == "Whack")))
      {
         (owner.fxqggHit2)?.["start"]?.();
      }
      else if(ctx.bool(_loc1_ == "Hit"))
      {
         (owner.fxqggHit1)?.["start"]?.();
      }
   }
   else if(ctx.bool(_loc1_ == "Jump"))
   {
      owner.jumping?.();
   }
   owner.pState = _loc1_;
   if(ctx.bool(owner.pState == "Hitted"))
   {
      ctx.trace?.(ctx.add("---------------------------------------===================",(_loc2_)?.[ctx.add("nscore",owner.nState)]));
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((_loc2_)?.[ctx.add("nscore",owner.nState)]))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   else if(ctx.bool(owner.pState == "HitDef"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((_loc2_)?.[ctx.add("nscore",owner.nState)])/ctx.num(4))))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   ctx.trace?.(_loc1_);
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,_loc1_));
};
owner.nact = function(nactShow){
   var _loc2_ = nactShow;
   var _loc3_ = this;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(ctx.randomInt?.(30),owner.dr):logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.hitMax,owner.nhitted):logicalLeft)(_loc2_ == "Hitted"))))
   {
      owner.nhitted = 0;
      _loc2_ = "Def";
      owner.canAct = false;
   }
   var _loc1_;
   if(ctx.bool(_loc2_ == undefined))
   {
      ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",_loc2_),"      "),owner.nState));
      if(ctx.bool(ctx.less(owner.disMin,(ctx.math)?.["abs"]?.((ctx.num((owner.qgg)?.["_x"])-ctx.num((owner.npc)?.["_x"]))))))
      {
         if(ctx.bool(owner.nState != "Jump"))
         {
            if(ctx.bool(ctx.less(38,ctx.randomInt?.(30))))
            {
               owner.nState = "Jump";
               owner.njumping?.();
            }
            else
            {
               owner.nState = "Walk";
            }
         }
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.nState == "Walk")(owner.nState == "Jump")))
         {
            if(ctx.bool(owner.dir2 == "right"))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.npc,"_x");
            }
            else
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.npc,"_x");
            }
            owner.checkNpcDir?.();
         }
      }
      else if(ctx.bool(owner.canAct))
      {
         ctx.trace?.("ok");
         _loc1_ = ctx.randomInt?.(30);
         if(ctx.bool(owner.nState == "Jump"))
         {
            if(ctx.bool(ctx.less(_loc1_,owner.hjr)))
            {
               owner.canAct = false;
               owner.nState = "JH";
               ((_loc3_)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
         }
         else
         {
            ctx.trace?.(ctx.add("tempr========================== ",_loc1_));
            if(ctx.bool(ctx.less(_loc1_,owner.h2r)))
            {
               owner.canAct = false;
               owner.nState = "Whack";
               ((_loc3_)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
            else if(ctx.bool(ctx.less(_loc1_,owner.h1r)))
            {
               owner.canAct = false;
               owner.nState = "Hit";
               ((_loc3_)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
            else if(ctx.bool(ctx.less(ctx.randomInt?.(30),owner.jr)))
            {
               owner.nState = "Jump";
               owner.njumping?.();
            }
            else
            {
               owner.nState = "Stand";
            }
         }
      }
   }
   else
   {
      owner.canAct = false;
      owner.nState = _loc2_;
   }
   ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",_loc2_),"      "),owner.nState));
   if(ctx.bool(owner.nState == "Hitted"))
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((_loc3_)?.[ctx.add("score",owner.pState)]))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   else if(ctx.bool(owner.nState == "Def"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((_loc3_)?.[ctx.add("score",owner.pState)])/ctx.num(4))))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,owner.nState));
};
owner.gamePlay = function(){
   var _loc1_ = this;
   owner.onEnterFrame = function()
   {
      var _loc1_ = this;
      if(ctx.bool(ctx.less(((owner.life1)?.["bar"])?.["_xscale"],1)))
      {
         owner.gameOver?.();
      }
      else if(ctx.bool(ctx.less(((owner.life2)?.["bar"])?.["_xscale"],1)))
      {
         owner.gameWin?.();
      }
      if(ctx.bool(!ctx.bool((ctx.keys)?.["isDown"]?.(owner.actKey))))
      {
         owner.fired = 0;
      }
      if(ctx.bool(owner.canKey))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.fired == 0:logicalLeft)((ctx.keys)?.["isDown"]?.(owner.actKey))))
         {
            owner.fired = 1;
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.pState != "Jump":logicalLeft)((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.dir,"Key")]))))
            {
               (owner.fxqggHit2)?.["start"]?.();
               owner.act?.("Whack");
            }
            else if(ctx.bool(owner.pState == "Jump"))
            {
               if(ctx.bool(ctx.less(((owner.qgg)?.["player"])?.["_currentframe"],10)))
               {
                  (owner.fxqggHit1)?.["start"]?.();
                  owner.act?.("JH");
               }
            }
            else
            {
               (owner.fxqggHit1)?.["start"]?.();
               owner.act?.("Hit");
            }
         }
         else if(ctx.bool(owner.pState != "Jump"))
         {
            if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.downKey)))
            {
               owner.act?.("Def");
            }
            else if(ctx.bool((ctx.keys)?.["isDown"]?.(owner.upKey)))
            {
               owner.act?.("Jump");
            }
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.redir,"Key")]))((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.dir,"Key")]))))
            {
               owner.act?.("Walk");
            }
            else
            {
               ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Stand"));
            }
         }
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.pState == "JH")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.pState == "Jump")(owner.pState == "Walk"))))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.dir,"Key")])))
         {
            if(ctx.bool(owner.dir == "right"))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.qgg,"_x");
            }
            else
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.qgg,"_x");
            }
            ctx.bool(owner.pState != "Walk") ? undefined : owner.checkDir?.();
         }
         else if(ctx.bool((ctx.keys)?.["isDown"]?.((_loc1_)?.[ctx.add(owner.redir,"Key")])))
         {
            if(ctx.bool(owner.redir == "right"))
            {
               ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num(owner.speedx)/ctx.num(2)))))(owner.qgg,"_x");
            }
            else
            {
               ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num(owner.speedx)/ctx.num(2))))))(owner.qgg,"_x");
            }
            ctx.bool(owner.pState != "Walk") ? undefined : owner.checkDir?.();
         }
         else if(ctx.bool(owner.pState == "Walk"))
         {
            owner.checkAct?.();
         }
      }
      if(ctx.bool(ctx.hitTest(((owner.npc)?.["npc"])?.["hitter"],((owner.qgg)?.["player"])?.["body"])))
      {
         owner.hitting?.(1);
      }
      else if(ctx.bool(ctx.hitTest(((owner.qgg)?.["player"])?.["hitter"],((owner.npc)?.["npc"])?.["body"])))
      {
         owner.hitting?.(2);
      }
      else if(ctx.bool(ctx.hitTest(((owner.qgg)?.["player"])?.["hitter"],((owner.npc)?.["npc"])?.["hitter"])))
      {
         owner.hitting?.(3);
      }
      else
      {
         if(ctx.bool(owner.canAct))
         {
            owner.nact?.();
         }
         ctx.setField(owner.ss,"_visible",0);
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.normalY,(owner.npc)?.["_y"]):logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.normalY,(owner.qgg)?.["_y"]):logicalLeft)(ctx.less((ctx.math)?.["abs"]?.((ctx.num((owner.qgg)?.["_x"])-ctx.num((owner.npc)?.["_x"]))),owner.dis2)))))
      {
         if(ctx.bool(owner.dir == "right"))
         {
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.qgg,"_x");
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.npc,"_x");
         }
         else
         {
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))(owner.qgg,"_x");
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(owner.speedx))))(owner.npc,"_x");
         }
      }
      if(ctx.bool(ctx.less((owner.qgg)?.["_x"],owner.xMin)))
      {
         ctx.setField(owner.qgg,"_x",owner.xMin);
      }
      else if(ctx.bool(ctx.less(owner.xMax,(owner.qgg)?.["_x"])))
      {
         ctx.setField(owner.qgg,"_x",owner.xMax);
      }
      if(ctx.bool(ctx.less((owner.npc)?.["_x"],owner.xMin)))
      {
         ctx.setField(owner.npc,"_x",owner.xMin);
      }
      else if(ctx.bool(ctx.less(owner.xMax,(owner.npc)?.["_x"])))
      {
         ctx.setField(owner.npc,"_x",owner.xMax);
      }
      owner.x1 = (owner.qgg)?.["_x"];
      owner.x2 = (owner.npc)?.["_x"];
      ctx.setField(owner.shadow1,"_x",(owner.qgg)?.["_x"]);
      ctx.setField(owner.shadow2,"_x",(owner.npc)?.["_x"]);
      ctx.setField(owner.shadow1,"_xscale",ctx.setField(owner.shadow1,"_yscale",(ctx.num(100)-ctx.num((ctx.num((ctx.num(380)-ctx.num((owner.qgg)?.["_y"])))*ctx.num(0.2))))));
      ctx.setField(owner.shadow2,"_xscale",ctx.setField(owner.shadow2,"_yscale",(ctx.num(100)-ctx.num((ctx.num((ctx.num(380)-ctx.num((owner.npc)?.["_y"])))*ctx.num(0.2))))));
   };
};
owner.hitting = function(hitType){
   ctx.graph.goto(owner.ss,hitType);
   ctx.setField(owner.ss,"_visible",1);
   ((old)=>(owner.lightCount=old+1,old))(ctx.num(owner.lightCount));
   owner.lightNow = ctx.attach(owner.lights,"light",ctx.add("light",owner.lightCount),owner.lightCount);
   ctx.setField(owner.lightNow,"_rotation",ctx.randomInt?.(360));
   ctx.trace?.("hit----------------------------------------------------");
   var _loc2_;
   var _loc1_;
   switch(hitType)
   {
      case 1:
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc1_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
         if(ctx.bool(owner.pState != "Def"))
         {
            if(ctx.bool(owner.nState == "Hit"))
            {
               (owner.fxqggHitted1)?.["start"]?.();
            }
            else
            {
               (owner.fxqggHitted2)?.["start"]?.();
            }
            owner.act?.("Hitted");
         }
         else
         {
            owner.act?.("HitDef");
         }
         break;
      case 2:
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_x"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_x"]),((owner.qgg)?.["player"])?.["_x"]);
         _loc1_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_y"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_y"]),((owner.qgg)?.["player"])?.["_y"]);
         if(ctx.bool(owner.nState != "Def"))
         {
            if(ctx.bool(owner.pState == "Hit"))
            {
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hitted1")])?.["start"]?.();
            }
            else
            {
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hitted2")])?.["start"]?.();
            }
            owner.nact?.("Hitted");
         }
         break;
      case 3:
         (owner.fxhitting)?.["start"]?.();
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc1_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
   }
   ctx.setField(owner.lightNow,"_x",(ctx.num(ctx.add(_loc2_,ctx.randomInt?.(30)))-ctx.num(5)));
   ctx.setField(owner.lightNow,"_y",(ctx.num(ctx.add(_loc1_,ctx.randomInt?.(30)))-ctx.num(5)));
};
owner.gameWin = function(){
   owner.onEnterFrame = undefined;
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Stand"));
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,"Over"));
   ctx.setField(owner.os,"_visible",1);
   ctx.graph.goto(owner.os,"win",{play:true});
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"life",((owner.life1)?.["bar"])?.["_xscale"]);
};
owner.gameOver = function(){
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Over"));
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,"Stand"));
   owner.onEnterFrame = undefined;
   ctx.setField(owner.os,"_visible",1);
   ctx.graph.goto(owner.os,"fail",{play:true});
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"life",((owner.life1)?.["bar"])?.["_xscale"]);
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c7v1a322(ctx,owner){
if(ctx.bool((((owner.parent)?.["_parent"])?.["_parent"])?.["fighting"] == "event4"))
{
   ctx.graph.stop(owner);
   owner.tt = {};
   ctx.setField(owner.tt,"onKeyDown",function()
   {
      if(ctx.bool((ctx.keys)?.["isDown"]?.(32)))
      {
         (ctx.keys)?.["removeListener"]?.(owner.tt);
         ctx.graph.goto(owner,2);
      }
   });
   (ctx.keys)?.["addListener"]?.(owner.tt);
}
else
{
   ctx.graph.goto(owner,2);
}

}

export function c7v1a323(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c7v1a324(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c7v1a325(ctx,owner){
ctx.stopAllSounds?.();

}

export function c7v1a326(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c7v1a327(ctx,owner){

}

export function c7v1a328(ctx,owner){

}

export function c7v1a329(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a330(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a331(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a332(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a333(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a334(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a335(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a336(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a337(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c7v1a338(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a339(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a340(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a341(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c7v1a342(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a343(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a344(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a345(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a346(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(2));

}

export function c7v1a347(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a348(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a349(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a350(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a351(ctx,owner){
owner.ttt = "";
owner.t_array = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C"];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,22)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"i",owner.i);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}

}

export function c7v1a352(ctx,owner){
owner.skipFrame = 0;
owner.ttt = "";

}

export function c7v1a353(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a354(ctx,owner){
ctx.graph.stop(owner);
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(7);

}

export function c7v1a355(ctx,owner){
ctx.graph.play(owner);

}

export function c7v1a356(ctx,owner){
if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80),400)))
{
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80));
}
else
{
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
}
if(ctx.bool((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
{
   ctx.graph.goto(((this)?.["_parent"])?.["_parent"],"end");
}

}

export function c7v1a357(ctx,owner){
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c7v1a358(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a359(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a360(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a361(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a362(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c7v1a363(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c7v1a364(ctx,owner){
ctx.stopAllSounds?.();

}

export function c7v1a365(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c7v1a366(ctx,owner){
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

export function c7v1a367(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c7v1a368(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a369(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a370(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c7v1a371(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a372(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a373(ctx,owner){
ctx.graph.play(owner);

}

export function c7v1a374(ctx,owner){
owner._visible = 0;
owner.hitted = undefined;
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   if(ctx.bool(ctx.hitTest(this,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
   {
      if(ctx.bool(owner.hitted))
      {
         ctx.trace?.("hitted");
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4))))))((_loc1_)?.["player"],"_y");
         owner.oy = ((_loc1_)?.["player"])?.["_y"];
      }
      else
      {
         owner.hitted = 1;
         owner.ox = ((_loc1_)?.["player"])?.["_x"];
         owner.oy = ((_loc1_)?.["player"])?.["_y"];
      }
   }
   else
   {
      owner.hitted = undefined;
   }
};

}

export function c7v1a375(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c7v1a376(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a377(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a378(ctx,owner){
ctx.graph.stop(owner);
owner.v;

}

export function c7v1a379(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a380(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a381(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a382(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a383(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a384(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a385(ctx,owner){
ctx.graph.stop(owner);
((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],40)))((owner.parent)?.["player"],"_x");
ctx.graph.goto((owner.parent)?.["hitter"],3);

}

export function c7v1a386(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a387(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a388(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a389(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a390(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(((owner.parent)?.["_parent"])?.["itemNow"] == "item3"))
{
   ctx.graph.play(owner);
   ctx.setField(owner.parent,"events",["event11"]);
   ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",11);
   ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
   ctx.setField((owner.parent)?.["_parent"],"eventNow","qqo");
   ctx.setField((owner.parent)?.["_parent"],"eventNext","");
   ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
   ctx.setField((owner.parent)?.["_parent"],"event10",1);
   ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
   ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
   ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
   ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
   ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
   ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
}
else
{
   ctx.graph.stop(owner);
   ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
   ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map5");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","qqd");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map3");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
   ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
   ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
   ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
   ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
   ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
}

}

export function c7v1a391(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a392(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a393(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"itemNow","item4");
(((owner.parent)?.["_parent"])?.["itemList"])?.["push"]?.("item4");
((owner.parent)?.["_parent"])?.["etShow"]?.("你得到毒刺");
ctx.setField((owner.parent)?.["_parent"],"event10",1);
(((owner.parent)?.["_parent"])?.["getItem"])?.["start"]?.();
((owner.parent)?.["changes"])?.["push"]?.("map4");
((owner.parent)?.["changes"])?.["push"]?.("map7");
((owner.parent)?.["changes"])?.["push"]?.("map8");

}

export function c7v1a394(ctx,owner){
ctx.setField((owner.parent)?.["player"],"_visible",true);
ctx.setField((owner.parent)?.["player"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["player"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
((owner.parent)?.["changes"])?.["push"]?.("map4");
((owner.parent)?.["changes"])?.["push"]?.("map7");
((owner.parent)?.["changes"])?.["push"]?.("map8");

}

export function c7v1a395(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a396(ctx,owner){
ctx.graph.play(owner);

}

export function c7v1a397(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map5");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map3");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],owner.eventNow,owner.eventNow,0);

}

export function c7v1a398(ctx,owner){
ctx.graph.play(owner);

}

export function c7v1a399(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a400(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a401(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a402(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a403(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["event14"] == 0))
{
   ctx.graph.goto(owner.mc,2);
}
else
{
   ctx.graph.goto(owner.mc,1);
}

}

export function c7v1a404(ctx,owner){
owner._visible = 0;
owner.hitted = undefined;
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   var _loc2_ = this;
   if(ctx.bool(((_loc1_)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(_loc2_,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((_loc2_)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],1)))((_loc1_)?.["player"],"_y");
         }
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((_loc2_)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(1))))((_loc1_)?.["player"],"_y");
            ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(0.5))))((_loc1_)?.["player"],"_x");
         }
      }
   }
};

}

export function c7v1a405(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c7v1a406(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a407(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a408(ctx,owner){
ctx.setField((owner.mc)?.["mc"],"_visible",false);

}

export function c7v1a409(ctx,owner){

   if(ctx.bool(owner.an != 1))
   {
      if(ctx.bool((((owner.parent)?.["_parent"])?.["hitter"])?.["_currentframe"] == 2))
      {
         owner.an = 1;
         owner.ttt = 0;
         ctx.setField(((owner.parent)?.["mc"])?.["mc"],"_visible",true);
         ((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
         ctx.graph.stop(owner.parent);
      }
   }
   else
   {
      ((old)=>(owner.ttt=old+1,old))(ctx.num(owner.ttt));
      if(ctx.bool(owner.ttt == 4))
      {
         ctx.graph.stop(owner.parent);
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"changeShow",1);
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"oldMap","map6");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNow","hitqq");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNext","map3");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventAct","change");
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"getEventShow",0);
         ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventStep",0);
         ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
         ctx.setField(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
         ctx.attach(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],0);
      }
   }

}

export function c7v1a410(ctx,owner){

   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((((this)?.["_parent"])?.["_parent"])?.["hitter"])?.["_currentframe"] == 2:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["xman"],(((this)?.["_parent"])?.["_parent"])?.["player"]))(ctx.less(ctx.add(((owner.parent)?.["xman"])?.["_y"],(owner.parent)?.["_y"]),((((this)?.["_parent"])?.["_parent"])?.["player"])?.["_y"])):logicalLeft)(owner.an != 1))))
   {
      owner.an = 1;
      ctx.graph.stop((this)?.["_parent"]);
      ((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"changeShow",1);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"oldMap","map6");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNow","hitqq");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNext","map3");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventAct","change");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"getEventShow",0);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventStep",0);
      ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
      ctx.setField(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
      ctx.attach(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],0);
   }

}

export function c7v1a411(ctx,owner){
ctx.graph.goto(owner.mc,"kkk",{play:true});

}

export function c7v1a412(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["event14"] == 1))
{
   ctx.setField((owner.parent)?.["_parent"],"event14",2);
   ctx.graph.goto(owner,"kkk");
   ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
}

}

export function c7v1a413(ctx,owner){

   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((((this)?.["_parent"])?.["_parent"])?.["hitter"])?.["_currentframe"] == 2:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["xman"],(((this)?.["_parent"])?.["_parent"])?.["player"]))(ctx.less(ctx.add(((owner.parent)?.["xman"])?.["_y"],(owner.parent)?.["_y"]),((((this)?.["_parent"])?.["_parent"])?.["player"])?.["_y"])):logicalLeft)(owner.an != 1))))
   {
      owner.an = 1;
      ctx.trace?.("trace");
      ((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
      ctx.graph.stop((this)?.["_parent"]);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"changeShow",1);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"oldMap","map6");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNow","hitqq");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventNext","map3");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventAct","change");
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"getEventShow",0);
      ctx.setField((((this)?.["_parent"])?.["_parent"])?.["_parent"],"eventStep",0);
      ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
      ctx.setField(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
      ctx.attach(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["movie"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["eventNow"],0);
   }

}

export function c7v1a414(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c7v1a415(ctx,owner){
owner.yy = ctx.add((this)?.["_y"],(owner.mc)?.["_y"]);
owner.xx = ctx.add((this)?.["_x"],(owner.mc)?.["_x"]);
ctx.setField((owner.parent)?.["_parent"],"event14",2);
owner.tempDepths = ctx.add(ctx.add((ctx.num(owner.yy)*ctx.num(10000)),(ctx.num(owner.xx)*ctx.num(100))),9);
ctx.trace?.(ctx.add("tempDepths=",owner.tempDepths));
ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
{
   ctx.graph.swapDepths(this,5000005);
}
else
{
   ctx.graph.swapDepths(this,owner.tempDepths);
}
((owner.parent)?.["events"])?.["push"]?.("event16");
ctx.graph.stop(owner);
owner.onEnterFrame = function()
{
   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      ctx.graph.swapDepths(this,5000005);
   }
   else
   {
      ctx.graph.swapDepths(this,owner.tempDepths);
   }
};

}

export function c7v1a416(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 414;
owner.appeary = 266;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
ctx.graph.goto(owner.player,"wa2");
owner.map = "map1";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
if(ctx.bool((owner.parent)?.["event11"] == 0))
{
   ctx.graph.goto(owner.yu,1);
}
else
{
   ctx.graph.goto(owner.yu,2);
}
owner.talkTxts = ["遇到问题随时联络我，我的魔法也许可以帮到你。","妹妹你要小心啊！我们在这里等你！","放心吧，有我在，不会有事情的！"];
owner.talkObj = ["map.point0","map.point1","map.point2"];
owner.talkDirs = [0,0,0];
owner.talkNext = [0,0,0];
owner.talkAreas = ["talkArea0","talkArea1","talkArea2"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bbl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bbl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bbl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.events = ["event1","event2","event3","event4","event5","event6"];
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c7v1a417(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map1":
      owner.appearx = 500;
      owner.appeary = 220;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 687;
      owner.appeary = 237;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      ctx.graph.goto(owner.hitter,2);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = "map2";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
if(ctx.bool((owner.parent)?.["event7"] == 0))
{
   ctx.graph.goto(owner.bl3,1);
   owner.events = ["event7"];
   ctx.graph.goto(owner.door,1);
}
else
{
   ctx.graph.goto(owner.door,"kkk");
   ctx.graph.goto(owner.bl3,2);
   owner.changes = ["map3"];
   owner.changeMovies = ["event000"];
}
if(ctx.bool((owner.parent)?.["event8"] == 0))
{
   ctx.graph.goto(owner.bl1,1);
   (owner.events)?.["push"]?.("event8");
}
else
{
   ctx.graph.goto(owner.door,"kkk");
   ctx.graph.goto(owner.bl1,2);
}
owner.talkTxts = ["我一定要揭开这里的秘密，不能就这么回去！"];
owner.talkObj = ["map.player.point"];
owner.talkDirs = [0];
owner.talkNext = [0];
owner.talkAreas = ["talkArea0"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,5)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
(owner.blocks)?.["push"]?.("nn");
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v1a418(ctx,owner){

   if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
   {
      ctx.graph.swapDepths((owner.parent)?.["topBlock"],5000000);
      ctx.setField((owner.parent)?.["nn"],"_name","bl1");
      ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["blocky"])?.[0])*ctx.num(10000)),(ctx.num(((owner.parent)?.["blockx"])?.[0])*ctx.num(100))),0));
      ctx.graph.goto((owner.parent)?.["hitter"],1);
   }

}

export function c7v1a419(ctx,owner){

   if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
   {
      ctx.graph.swapDepths((owner.parent)?.["topBlock"],2);
      ctx.graph.swapDepths((owner.parent)?.["nn"],1);
      ctx.graph.swapDepths((owner.parent)?.["bl1"],1);
      ctx.setField((owner.parent)?.["bl1"],"_name","nn");
      ctx.graph.goto((owner.parent)?.["hitter"],2);
   }

}

export function c7v1a420(ctx,owner){

   if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
   {
      ctx.graph.swapDepths((owner.parent)?.["topBlock"],4);
      ctx.graph.swapDepths((owner.parent)?.["bl1"],3);
      ctx.setField((owner.parent)?.["bl1"],"_name","nn");
      ctx.graph.goto((owner.parent)?.["hitter"],2);
   }

}

export function c7v1a421(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
ctx.setField(owner.topBlock,"_visible",false);
owner.map = "map3";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 442;
      owner.appeary = 191;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 60;
      owner.appeary = 362;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   default:
      owner.appearx = 320;
      owner.appeary = 208;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      ctx.graph.goto(owner.hitter,2);
      ctx.setField(owner.topBlock,"_visible",true);
      owner.events = ["event13"];
      ctx.setField(owner.door,"_visible",false);
      ctx.trace?.("被关");
      if(ctx.bool(ctx.lessEqual(ctx.add(((((this)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80),400)))
      {
         ctx.graph.goto((((this)?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add(((((this)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80));
      }
      else
      {
         ctx.graph.goto((((this)?.["_parent"])?.["lifeBar"])?.["bar"],400);
      }
      if(ctx.bool(((((this)?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
      {
         ctx.graph.goto((this)?.["_parent"],"end");
      }
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
else
{
   owner._temp_10 = owner.player;
   owner._temp_9 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}

}

export function c7v1a422(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map4";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map3":
      owner.appearx = 704;
      owner.appeary = 360;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 250;
      owner.appeary = 190;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map3"];
if(ctx.bool((owner.parent)?.["event9"] == 0))
{
   ctx.graph.goto(owner.door,1);
   owner.events = ["event9"];
}
else
{
   ctx.graph.goto(owner.door,3);
   (owner.changes)?.["push"]?.("map5");
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v1a423(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map5";
owner.changes = [];
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map4":
      owner.appearx = 283;
      owner.appeary = 379;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      if(ctx.bool((owner.parent)?.["event10"] != 0))
      {
         ctx.graph.stop(owner.xman);
         ctx.setField(owner.man,"_visible",false);
         owner.changes = ["map4","map7","map8"];
      }
      break;
   case "map6":
      owner.appearx = 227;
      owner.appeary = 146;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      ctx.graph.stop(owner.xman);
      ctx.setField(owner.man,"_visible",false);
      owner.changes = ["map4","map7","map8"];
      break;
   case "map7":
      owner.appearx = 432;
      owner.appeary = 324;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      ctx.graph.stop(owner.xman);
      ctx.setField(owner.man,"_visible",false);
      owner.changes = ["map4","map7","map8"];
      break;
   case "map8":
      owner.appearx = 334;
      owner.appeary = 224;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
      ctx.graph.stop(owner.xman);
      ctx.setField(owner.man,"_visible",false);
      owner.changes = ["map4","map7","map8"];
}
if(ctx.bool((owner.parent)?.["event11"] == 0))
{
   if(ctx.bool((owner.parent)?.["event10"] == 1))
   {
      ctx.graph.goto(owner.door,1);
      owner.events = ["event11"];
   }
}
else
{
   ctx.graph.goto(owner.door,3);
   (owner.changes)?.["push"]?.("map6");
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("xl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("xl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("xl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_10 = owner.player;
   owner._temp_9 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
else
{
   owner._temp_12 = owner.player;
   owner._temp_11 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_12,owner._temp_11,owner._loc0_);
}

}

export function c7v1a424(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map6";
owner.appearx = 32;
owner.appeary = 316;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wd2"));
owner.changes = ["map5"];
owner.events = ["event14","event15"];
if(ctx.bool((owner.parent)?.["event14"] != 0))
{
   ctx.trace?.("已经晕倒");
   ctx.graph.goto(owner.xman,"kkk");
   ctx.graph.goto((owner.xman)?.["mc"],"kkk");
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
(owner.blocks)?.["push"]?.("xman");
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}
ctx.graph.swapDepths(owner.xman,5000005);

}

export function c7v1a425(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c7v1a426(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],1);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
      }
   }

}

export function c7v1a427(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c7v1a428(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map7";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.appearx = 368;
      owner.appeary = 363;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map9":
      owner.appearx = 315;
      owner.appeary = 208;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map5","map9"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v1a429(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map8";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.appearx = 394;
      owner.appeary = 363;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map9":
      owner.appearx = 441;
      owner.appeary = 204;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map5","map9"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v1a430(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map9";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map7":
      owner.appearx = 462;
      owner.appeary = 386;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map8":
      owner.appearx = 382;
      owner.appeary = 222;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.changes = ["map7","map8"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,8)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
else
{
   owner._temp_8 = owner.player;
   owner._temp_7 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c7v1a431(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a432(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a433(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a434(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a435(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a436(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c7v1a437(ctx,owner){
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

export function c7v1a438(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a439(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c7v1a440(ctx,owner){
owner.listItem = function(){
   var _loc3_ = owner.parent;
   var _loc1_ = 0;
   var _loc2_;
   while(ctx.bool(ctx.less(_loc1_,(((_loc3_)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc2_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc1_),_loc1_);
      ctx.setField(_loc2_,"_x",(ctx.num(_loc1_)*ctx.num(36)));
      ctx.graph.goto(_loc2_,(((_loc3_)?.["_parent"])?.["itemList"])?.[_loc1_]);
      ctx.setField(_loc2_,"aim",(((_loc3_)?.["_parent"])?.["itemList"])?.[_loc1_]);
      ctx.setField(_loc2_,"iii",_loc1_);
      _loc1_ = ctx.add(_loc1_,1);
   }
   owner.itemStep = 0;
   ctx.setField(owner.btnLeft,"_visible",0);
   if(ctx.bool(ctx.lessEqual((((_loc3_)?.["_parent"])?.["itemList"])?.["length"],4)))
   {
      ctx.setField(owner.btnRight,"_visible",0);
   }
   ctx.setField(owner.btnLeft,"onRelease",function()
   {
      ctx.setField(owner.btnRight,"_visible",1);
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],36)))(owner.itemList,"_x");
      ((old)=>(owner.itemStep=old+1,old))(ctx.num(owner.itemStep));
      if(ctx.bool(ctx.lessEqual(0,owner.itemStep)))
      {
         ctx.setField(this,"_visible",0);
      }
   });
   ctx.setField(owner.btnRight,"onRelease",function()
   {
      ctx.setField(owner.btnLeft,"_visible",1);
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(36))))(owner.itemList,"_x");
      ((old)=>(owner.itemStep=old-1,old))(ctx.num(owner.itemStep));
      if(ctx.bool(ctx.lessEqual(owner.itemStep,ctx.add((-ctx.num((((owner.parent)?.["_parent"])?.["itemList"])?.["length"])),4))))
      {
         ctx.setField(this,"_visible",0);
      }
   });
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
owner.tf = ctx.bool(ctx.lessEqual((ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4))),0)) ? 1 : (ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4)));
ctx.graph.goto(owner.timebar,owner.tf);
owner.listItem?.();

}

export function c7v1a441(ctx,owner){

   ctx.graph.goto(owner,(((((owner.parent)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c7v1a442(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a443(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a444(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c7v1a445(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c7v1a446(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c7v1a447(ctx,owner){
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

export function c7v1a448(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c7v1a449(ctx,owner){
ctx.trace?.("fadeIn");
ctx.setField((owner.parent)?.["disBtn"],"_visible",1);
ctx.setField((owner.parent)?.["disBtn"],"useHandCursor",0);
(owner.parent)?.["etClear"]?.();
ctx.trace?.(((owner.parent)?.["movie"])?.["_visible"]);
if(ctx.bool((owner.parent)?.["eventStep"] == 0))
{
   owner.onEnterFrame = function()
   {
      var _loc1_ = owner.parent;
      ctx.setField((_loc1_)?.["movie"],"_visible",0);
      ctx.graph.goto(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]],1);
   };
}
ctx.graph.play(owner);

}

export function c7v1a450(ctx,owner){
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
      var _loc1_ = owner.parent;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["skipFrame"]):logicalLeft)((ctx.keys)?.["isDown"]?.((_loc1_)?.["actKey"]))))
      {
         ctx.graph.goto(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]],(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["skipFrame"],{play:true});
      }
      if(ctx.bool(ctx.lessEqual((((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["_totalframes"],(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]])?.["_currentframe"])))
      {
         ctx.graph.stop(((_loc1_)?.["movie"])?.[(_loc1_)?.["eventNow"]]);
         owner.onEnterFrame = undefined;
         if(ctx.bool((_loc1_)?.["eventAct"] == "change"))
         {
            ctx.graph.goto((_loc1_)?.["map"],(_loc1_)?.["eventNext"]);
         }
         ctx.setField((_loc1_)?.["disAll"],"_visible",0);
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

export function c7v1a451(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c7v1a452(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a453(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a454(ctx,owner){
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

export function c7v1a455(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c7v1a456(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c7v1a457(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a458(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a459(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a460(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a461(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a462(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a463(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a464(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a465(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a466(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a467(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a468(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a469(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a470(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a471(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a472(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a473(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a474(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a475(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a476(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a477(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a478(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a479(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a480(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a481(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a482(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c7v1a483(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c7v1a484(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c7v1a485(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c7v1a486(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c7v1a487(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c7v1a488(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c7v1a489(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c7v1a490(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["_parent"],"an",1);

}

export function c7v1a491(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);

}

export function c7v1a492(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a493(ctx,owner){

}

export function c7v1a494(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a495(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a496(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a497(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a498(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c7v1a499(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c7v1a500(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c7v1a501(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a502(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a503(ctx,owner){
owner._visible = 0;

}

export function c7v1a504(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a505(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a506(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c7v1a507(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a508(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a509(ctx,owner){
owner._visible = 0;

}

export function c7v1a510(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a511(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c7v1a512(ctx,owner){

}

export function c7v1a513(ctx,owner){
ctx.graph.stop(owner);

}

export function c7v1a514(ctx,owner){
owner.init = function(){
   owner.afterMovieEvent = 0;
   owner.life = 100;
   owner.lifex = (-ctx.num(241));
   owner.lifeStep = 1.93;
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
   owner.nspeed = owner.speed = 5;
   owner.nyspeed = owner.nxspeed = owner.yspeed = owner.xspeed = (ctx.num(owner.speed)/ctx.num(1.414213562373));
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
   owner.event15 = 0;
   owner.event16 = 0;
   owner.event17 = 0;
   owner.event18 = 0;
   owner.event19 = 0;
   owner.event20 = 0;
   owner.event21 = 0;
   owner.event22 = 0;
   owner.event23 = 0;
   owner.event24 = 0;
   owner.event25 = 0;
   owner.event26 = 0;
   owner.event27 = 0;
   owner.event28 = 0;
   owner.event30 = 0;
   owner.event31 = 0;
   owner.eventAct = "movie";
   owner.oldMap = "map1";
   ctx.graph.goto(owner.map,"map1");
   owner.gamePause = 1;
   owner.eventNow = "opening";
   owner.getEventShow = 0;
   owner.eventStep = 0;
   ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
   ctx.setField(owner.movie,"_visible",0);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
};
owner.climbDown = function(cx,cy){
   var _loc1_ = cy;
   var _loc2_ = cx;
   owner.aimX = _loc2_;
   owner.aimY = _loc1_;
   owner.tan = (ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(_loc1_))));
   owner.tt = ctx.bool(ctx.lessEqual(_loc1_,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
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
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
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
   var _loc1_ = cy;
   var _loc2_ = cx;
   owner.aimX = _loc2_;
   owner.aimY = _loc1_;
   owner.tan = (ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))/ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])-ctx.num(_loc1_))));
   owner.tt = ctx.bool(ctx.lessEqual(_loc1_,((owner.map)?.["player"])?.["_y"])) ? 0 : 180;
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
   owner.tempDis = (ctx.math)?.["sqrt"]?.(ctx.add((ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))*ctx.num((ctx.num(_loc2_)-ctx.num(((owner.map)?.["player"])?.["_x"])))),(ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"])))*ctx.num((ctx.num(_loc1_)-ctx.num(((owner.map)?.["player"])?.["_y"]))))));
   ctx.setField((owner.map)?.["player"],"onEnterFrame",function()
   {
      if(ctx.bool(((owner.map)?.["player"])?.["an"] != 1))
      {
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedx)))((owner.map)?.["player"],"_x");
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.speedy)))((owner.map)?.["player"],"_y");
         owner.tempDis=(ctx.num(owner.tempDis)-ctx.num(owner.speed));
         if(ctx.bool(ctx.lessEqual(owner.tempDis,0)))
         {
            ctx.setField((owner.map)?.["player"],"_x",ctx.add(owner.aimX,24.5));
            ctx.setField((owner.map)?.["player"],"_y",(ctx.num(owner.aimY)-ctx.num(150.5)));
            ctx.graph.goto((owner.map)?.["player"],"climbUp");
         }
      }
      else
      {
         ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num(3))))((owner.map)?.["player"],"_y");
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],4.285714285714286)))((((owner.map)?.["player"])?.["player"])?.["hitter"],"_y");
         if(ctx.bool(ctx.less(((owner.map)?.["player"])?.["_y"],(-ctx.num(100)))))
         {
            owner.changeShow = 1;
            owner.oldMap = (owner.map)?.["map"];
            owner.eventNow = "event000";
            owner.eventNext = "map7";
            owner.eventAct = "change";
            owner.getEventShow = 0;
            owner.eventStep = 0;
            ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
            ctx.setField(owner.movie,"_visible",0);
            ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
            ctx.deleteField((owner.map)?.["player"],"onEnterFrame");
         }
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
   ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
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
               owner.qqDir=ctx.add(owner.qqDir,"2");
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
         if(ctx.bool((owner.map)?.["playerScale"] != (owner.map)?.["minScale"]))
         {
            ctx.setField((owner.map)?.["player"],"_xscale",ctx.setField((owner.map)?.["player"],"_yscale",ctx.add((ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])/ctx.num(420)))*ctx.num((owner.map)?.["playerScale"])),(owner.map)?.["minScale"])));
            owner.xspeed = owner.yspeed = (ctx.num((ctx.num(owner.nyspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
            owner.speed = (ctx.num((ctx.num(owner.nspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
         }
         else
         {
            owner.yspeed = owner.xspeed = (ctx.num((ctx.num(owner.nxspeed)*ctx.num((owner.map)?.["playerScale"])))/ctx.num(100));
            owner.speed = (ctx.num((ctx.num(owner.nspeed)*ctx.num((owner.map)?.["playerScale"])))/ctx.num(100));
         }
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
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner[((owner.map)?.["events"])?.[i]] != 1:logicalLeft)(eventShow == 1)))
            {
               switch(((owner.map)?.["events"])?.[i])
               {
                  case "event1":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event1 == 0:logicalLeft)(owner.itemNow == "item1")))
                     {
                        ((old)=>(owner.event1=old+1,old))(ctx.num(owner.event1));
                        ctx.graph.goto((owner.map)?.["door"],2,{play:true});
                        ctx.setField(owner.map,"changes",["map2"]);
                        ctx.setField(owner.map,"changeMovies",["event000"]);
                     }
                     else
                     {
                        owner.etShow?.("需要特殊物品才能打开大门");
                     }
                     break;
                  case "event2":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event2";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event3":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event2";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event4":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event4";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event5":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event3";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event6":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "event4";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event7 == 0:logicalLeft)(owner.itemNow == "item1")))
                     {
                        owner.event7 = 1;
                        ctx.graph.goto((owner.map)?.["door"],2,{play:true});
                        ctx.graph.goto((owner.map)?.["bl3"],2);
                        ctx.setField(owner.map,"changes",["map3"]);
                        ctx.setField(owner.map,"changeMovies",["event000"]);
                        i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == "item1"))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        ctx.graph.goto(owner.itemShow,(owner.itemList)?.[0]);
                        owner.itemNow = (owner.itemList)?.[0];
                        owner.afterMovieEvent = 10;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("你需要把什么东西放进去");
                     }
                     break;
                  case "event8":
                     if(ctx.bool(owner.event8 != 1))
                     {
                        ctx.graph.goto((owner.map)?.["bl1"],2);
                        (owner.getItem)?.["start"]?.();
                        owner.event8 = 1;
                        (owner.itemList)?.["push"]?.("item3");
                        ctx.graph.goto(owner.itemShow,"item3");
                        owner.itemNow = "item3";
                        owner.etShow?.("你得到一块木板");
                     }
                     break;
                  case "event9":
                     if(ctx.bool(owner.event9 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item2"))
                        {
                           ctx.graph.goto((owner.map)?.["door"],2);
                           owner.event9 = 1;
                           owner.afterMovieEvent = 1;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           owner.eventNow = "event9";
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("怎样才能打开大门呢");
                        }
                     }
                     break;
                  case "event11":
                     if(ctx.bool(owner.event11 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item2"))
                        {
                           ctx.graph.goto((owner.map)?.["door"],2);
                           owner.event11 = 1;
                           owner.afterMovieEvent = 2;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           owner.eventNow = "event11";
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("怎样才能打开大门呢");
                        }
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto((owner.map)?.["topBlock"],2,{play:true});
                        ctx.setField(owner.map,"events",[]);
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event13";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("快请求帮助，逃出去吧");
                     }
                     break;
                  case "event14":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event14 == 0:logicalLeft)(((owner.map)?.["hitter"])?.["_currentframe"] == 2)))
                     {
                        if(ctx.bool(owner.itemNow == "item4"))
                        {
                           owner.event14 = 1;
                           i = 0;
                           while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                           {
                              if(ctx.bool((owner.itemList)?.[i] == "item4"))
                              {
                                 (owner.itemList)?.["splice"]?.(i,1);
                              }
                              ((old)=>(i=old+1,old))(ctx.num(i));
                           }
                           ctx.graph.goto(owner.itemShow,(owner.itemList)?.[0]);
                           owner.itemNow = (owner.itemList)?.[0];
                        }
                        else
                        {
                           owner.etShow?.("这是一口水井");
                        }
                     }
                     break;
                  case "event15":
                     if(ctx.bool(owner.event14 == 2))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event15";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event16":
                     owner.etShow?.("昏睡中的独眼怪");
                     break;
                  case "event19":
                     if(ctx.bool(owner.itemNow == "item3"))
                     {
                        ctx.setField((owner.map)?.["topBlock"],"_x",0);
                        ctx.setField((owner.map)?.["topBlock"],"_y",0);
                        ctx.graph.goto((owner.map)?.["topBlock"],2);
                        ctx.graph.goto((owner.map)?.["yu"],2);
                        owner.event19 = 1;
                        i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == "item3"))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        ctx.graph.goto(owner.itemShow,"item1");
                        owner.itemNow = "item1";
                     }
                     else
                     {
                        owner.etShow?.("怎样才能把鸟引下来呢?");
                     }
                     break;
                  case "event20":
                     ctx.trace?.(123456);
                     ctx.graph.swapDepths((owner.map)?.["teng1"],1);
                     ctx.setField(owner.map,"tengf",1);
                     owner.gamePausing?.();
                     ctx.setField((owner.map)?.["player"],"mapname","map7");
                     owner.climbUp?.(93,196);
                     break;
                  case "event21":
                     ctx.graph.swapDepths((owner.map)?.["teng2"],1);
                     ctx.setField(owner.map,"tengf",2);
                     owner.gamePausing?.();
                     ctx.setField((owner.map)?.["player"],"mapname","map7");
                     owner.climbUp?.(164,187);
                     break;
                  case "event22":
                     ctx.graph.swapDepths((owner.map)?.["teng3"],1);
                     ctx.setField(owner.map,"tengf",3);
                     owner.gamePausing?.();
                     ctx.setField((owner.map)?.["player"],"mapname","map7");
                     owner.climbUp?.(225,130);
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
            owner.txtCount = ctx.bool(owner.ttc != owner.txtCount) ? owner.txtCount : ctx.add(owner.txtCount,1);
            _loc2_ = owner.txtCount;
            _loc1_ = _loc2_;
            while(ctx.bool(ctx.less(_loc1_,(ctx.num(owner.txtLength)*ctx.num((ctx.math)?.["floor"]?.(ctx.add((ctx.num(_loc2_)/ctx.num(owner.txtLength)),1)))))))
            {
               if(ctx.bool((owner.txts)?.[_loc1_] == undefined))
               {
                  break;
               }
               owner.txtShow?.(_loc1_);
               _loc1_ = ctx.add(_loc1_,1);
            }
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
            ((old)=>(owner.txtCount=old+1,old))(ctx.num(owner.txtCount));
            owner.talking = 0;
         }
         else if(ctx.bool(ctx.less(1,(owner.talker)?.["_currentframe"])))
         {
            (owner.talker)?.["back"]?.();
         }
         else
         {
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
   if(ctx.bool(ctx.less(owner.txtCount,(owner.txts)?.["length"])))
   {
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
   owner.talking = 1;
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
   var _loc3_ = ctx.add((ctx.num((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))%ctx.num(owner.txtW)))*ctx.num(owner.txtDisw)),owner.txtXmin);
   var _loc2_ = ctx.add((ctx.num((ctx.math)?.["floor"]?.((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))/ctx.num(owner.txtW))))*ctx.num(owner.txtDish)),owner.txtYmin);
   var _loc1_ = ctx.attach((owner.talker)?.["popup"],"talkTxt",ctx.add("talkTxt",owner.txtCount),owner.txtCount);
   ctx.setField(_loc1_,"_x",_loc3_);
   ctx.setField(_loc1_,"_y",_loc2_);
   ctx.setField((_loc1_)?.["txt"],"txt",(owner.txts)?.[owner.txtCount]);
   ctx.graph.goto(_loc1_,1,{play:true});
   owner.ttc = owner.txtCount;
   if(ctx.bool(owner.showAllTxt != 1))
   {
      ctx.setField(_loc1_,"onEnterFrame",function()
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
owner.fight = function(fightEvent,fo,bf){
   owner.fighting = fightEvent;
   owner.bgFrame = bf;
   owner.fightObj = fo;
   ctx.setField(this,fightEvent,1);
   owner.getEventShow = 0;
   owner.gamePausing?.();
   owner.eventStep = 0;
   owner.eventNow = "fighting";
   owner.eventNext = "";
   owner.eventAct = "movie";
   ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
   ctx.setField(owner.movie,"_visible",0);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
};
owner.newlife = function(nlv){
   ctx.bool(ctx.lessEqual((ctx.num(owner.life)-ctx.num(nlv)),0)) ? (owner.life = 0) : (owner.life=(ctx.num(owner.life)-ctx.num(nlv)));
   ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
   if(ctx.bool(owner.life == 0))
   {
      ctx.graph.next(owner);
   }
};
owner.ameEvent = function(){
   switch(owner.afterMovieEvent)
   {
      case 1:
         ((owner.map)?.["changes"])?.["push"]?.("map5");
         break;
      case 2:
         ((owner.map)?.["changes"])?.["push"]?.("map6");
         break;
      case 3:
         ctx.graph.goto((owner.map)?.["shu"],2);
         break;
      case 4:
         (owner.getItem)?.["start"]?.();
         ctx.graph.goto((owner.map)?.["wang"],2);
         (owner.itemList)?.["push"]?.("item5");
         ctx.graph.goto(owner.itemShow,"item5");
         owner.itemNow = "item5";
         owner.etShow?.("您得到了藤蔓");
         break;
      case 5:
         ctx.graph.goto(((owner.map)?.["hitter"])?.[ctx.add("mc",owner.treenum)],2);
         ctx.graph.goto((owner.map)?.[ctx.add("tree",owner.treenum)],2,{play:true});
         ctx.graph.goto(((owner.map)?.["topBlock"])?.[ctx.add("tree",owner.treenum)],2,{play:true});
         break;
      case 6:
         ctx.graph.goto(((owner.map)?.["topBlock"])?.["taopao"],2,{play:true});
         break;
      case 10:
         ctx.graph.goto((owner.map)?.["door"],"kkk");
         break;
      case 11:
         owner.itemNow = "item4";
         (owner.itemList)?.["push"]?.("item4");
         owner.etShow?.("你得到毒刺");
         owner.event10 = 1;
         (owner.getItem)?.["start"]?.();
         ((owner.map)?.["changes"])?.["push"]?.("map4");
         ((owner.map)?.["changes"])?.["push"]?.("map7");
         ((owner.map)?.["changes"])?.["push"]?.("map8");
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();
(owner.itemList)?.["push"]?.("item5");
(owner.itemList)?.["push"]?.("item1");
ctx.graph.goto(owner.itemShow,"item1");
owner.itemNow = "item1";
(owner.itemList)?.["push"]?.("item2");

}

export function c7v1a515(ctx,owner){
owner.oldMap = "";

}

export const variant0={sourceBytes:7185684,frames:{"58":{"1":(ctx,owner)=>{c7v0a210.call(owner,ctx,owner);},"98":(ctx,owner)=>{c7v0a211.call(owner,ctx,owner);}},"109":{"1":(ctx,owner)=>{c7v0a39.call(owner,ctx,owner);},"151":(ctx,owner)=>{c7v0a40.call(owner,ctx,owner);}},"127":{"1":(ctx,owner)=>{c7v0a62.call(owner,ctx,owner);}},"132":{"1":(ctx,owner)=>{c7v0a69.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a70.call(owner,ctx,owner);},"7":(ctx,owner)=>{c7v0a71.call(owner,ctx,owner);}},"157":{"1":(ctx,owner)=>{c7v0a79.call(owner,ctx,owner);}},"159":{"1":(ctx,owner)=>{c7v0a87.call(owner,ctx,owner);}},"240":{"19":(ctx,owner)=>{c7v0a172.call(owner,ctx,owner);}},"257":{"19":(ctx,owner)=>{c7v0a178.call(owner,ctx,owner);}},"261":{"17":(ctx,owner)=>{c7v0a179.call(owner,ctx,owner);}},"276":{"11":(ctx,owner)=>{c7v0a180.call(owner,ctx,owner);}},"293":{"11":(ctx,owner)=>{c7v0a181.call(owner,ctx,owner);}},"295":{"1":(ctx,owner)=>{c7v0a182.call(owner,ctx,owner);}},"305":{"12":(ctx,owner)=>{c7v0a183.call(owner,ctx,owner);}},"314":{"12":(ctx,owner)=>{c7v0a184.call(owner,ctx,owner);}},"327":{"22":(ctx,owner)=>{c7v0a185.call(owner,ctx,owner);}},"338":{"22":(ctx,owner)=>{c7v0a186.call(owner,ctx,owner);}},"360":{"18":(ctx,owner)=>{c7v0a187.call(owner,ctx,owner);}},"378":{"18":(ctx,owner)=>{c7v0a188.call(owner,ctx,owner);}},"386":{"9":(ctx,owner)=>{c7v0a189.call(owner,ctx,owner);}},"392":{"9":(ctx,owner)=>{c7v0a190.call(owner,ctx,owner);}},"426":{"22":(ctx,owner)=>{c7v0a191.call(owner,ctx,owner);}},"454":{"22":(ctx,owner)=>{c7v0a192.call(owner,ctx,owner);}},"461":{"9":(ctx,owner)=>{c7v0a193.call(owner,ctx,owner);}},"468":{"9":(ctx,owner)=>{c7v0a194.call(owner,ctx,owner);}},"469":{"137":(ctx,owner)=>{c7v0a195.call(owner,ctx,owner);},"144":(ctx,owner)=>{c7v0a196.call(owner,ctx,owner);}},"490":{"16":(ctx,owner)=>{c7v0a197.call(owner,ctx,owner);}},"496":{"8":(ctx,owner)=>{c7v0a198.call(owner,ctx,owner);}},"502":{"13":(ctx,owner)=>{c7v0a199.call(owner,ctx,owner);}},"513":{"22":(ctx,owner)=>{c7v0a200.call(owner,ctx,owner);}},"523":{"20":(ctx,owner)=>{c7v0a201.call(owner,ctx,owner);}},"529":{"8":(ctx,owner)=>{c7v0a202.call(owner,ctx,owner);}},"540":{"16":(ctx,owner)=>{c7v0a203.call(owner,ctx,owner);}},"546":{"10":(ctx,owner)=>{c7v0a204.call(owner,ctx,owner);}},"563":{"1":(ctx,owner)=>{c7v0a205.call(owner,ctx,owner);}},"580":{"1":(ctx,owner)=>{c7v0a206.call(owner,ctx,owner);},"61":(ctx,owner)=>{c7v0a209.call(owner,ctx,owner);},"120":(ctx,owner)=>{c7v0a207.call(owner,ctx,owner);},"121":(ctx,owner)=>{c7v0a208.call(owner,ctx,owner);}},"631":{"21":(ctx,owner)=>{c7v0a212.call(owner,ctx,owner);}},"645":{"21":(ctx,owner)=>{c7v0a213.call(owner,ctx,owner);}},"651":{"11":(ctx,owner)=>{c7v0a214.call(owner,ctx,owner);}},"658":{"11":(ctx,owner)=>{c7v0a215.call(owner,ctx,owner);}},"666":{"12":(ctx,owner)=>{c7v0a216.call(owner,ctx,owner);}},"673":{"12":(ctx,owner)=>{c7v0a217.call(owner,ctx,owner);}},"688":{"25":(ctx,owner)=>{c7v0a218.call(owner,ctx,owner);}},"703":{"25":(ctx,owner)=>{c7v0a219.call(owner,ctx,owner);}},"715":{"21":(ctx,owner)=>{c7v0a220.call(owner,ctx,owner);}},"727":{"21":(ctx,owner)=>{c7v0a221.call(owner,ctx,owner);}},"736":{"11":(ctx,owner)=>{c7v0a222.call(owner,ctx,owner);}},"743":{"11":(ctx,owner)=>{c7v0a223.call(owner,ctx,owner);}},"766":{"35":(ctx,owner)=>{c7v0a224.call(owner,ctx,owner);}},"789":{"35":(ctx,owner)=>{c7v0a225.call(owner,ctx,owner);}},"795":{"9":(ctx,owner)=>{c7v0a226.call(owner,ctx,owner);}},"796":{"119":(ctx,owner)=>{c7v0a227.call(owner,ctx,owner);},"126":(ctx,owner)=>{c7v0a228.call(owner,ctx,owner);}},"797":{"1":(ctx,owner)=>{c7v0a229.call(owner,ctx,owner);}},"798":{"1":(ctx,owner)=>{c7v0a230.call(owner,ctx,owner);}},"799":{"1":(ctx,owner)=>{c7v0a231.call(owner,ctx,owner);},"29":(ctx,owner)=>{c7v0a232.call(owner,ctx,owner);},"30":(ctx,owner)=>{c7v0a233.call(owner,ctx,owner);}},"805":{"1":(ctx,owner)=>{c7v0a234.call(owner,ctx,owner);}},"912":{"9":(ctx,owner)=>{c7v0a235.call(owner,ctx,owner);}},"919":{"9":(ctx,owner)=>{c7v0a236.call(owner,ctx,owner);}},"924":{"9":(ctx,owner)=>{c7v0a237.call(owner,ctx,owner);}},"929":{"9":(ctx,owner)=>{c7v0a238.call(owner,ctx,owner);}},"934":{"9":(ctx,owner)=>{c7v0a239.call(owner,ctx,owner);}},"943":{"9":(ctx,owner)=>{c7v0a240.call(owner,ctx,owner);}},"948":{"9":(ctx,owner)=>{c7v0a241.call(owner,ctx,owner);}},"957":{"9":(ctx,owner)=>{c7v0a242.call(owner,ctx,owner);}},"970":{"26":(ctx,owner)=>{c7v0a243.call(owner,ctx,owner);}},"985":{"28":(ctx,owner)=>{c7v0a244.call(owner,ctx,owner);}},"1001":{"34":(ctx,owner)=>{c7v0a30.call(owner,ctx,owner);}},"1015":{"34":(ctx,owner)=>{c7v0a31.call(owner,ctx,owner);}},"1029":{"32":(ctx,owner)=>{c7v0a32.call(owner,ctx,owner);}},"1047":{"24":(ctx,owner)=>{c7v0a33.call(owner,ctx,owner);}},"1061":{"32":(ctx,owner)=>{c7v0a34.call(owner,ctx,owner);}},"1077":{"24":(ctx,owner)=>{c7v0a35.call(owner,ctx,owner);}},"1099":{"6":(ctx,owner)=>{c7v0a38.call(owner,ctx,owner);},"10":(ctx,owner)=>{c7v0a36.call(owner,ctx,owner);},"24":(ctx,owner)=>{c7v0a37.call(owner,ctx,owner);}},"1120":{"4":(ctx,owner)=>{c7v0a43.call(owner,ctx,owner);},"14":(ctx,owner)=>{c7v0a41.call(owner,ctx,owner);},"24":(ctx,owner)=>{c7v0a42.call(owner,ctx,owner);}},"1145":{"54":(ctx,owner)=>{c7v0a44.call(owner,ctx,owner);}},"1164":{"16":(ctx,owner)=>{c7v0a45.call(owner,ctx,owner);}},"1165":{"54":(ctx,owner)=>{c7v0a46.call(owner,ctx,owner);}},"1166":{"1":(ctx,owner)=>{c7v0a47.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a48.call(owner,ctx,owner);}},"1203":{"1":(ctx,owner)=>{c7v0a49.call(owner,ctx,owner);}},"1204":{"1":(ctx,owner)=>{c7v0a50.call(owner,ctx,owner);}},"1220":{"1":(ctx,owner)=>{c7v0a51.call(owner,ctx,owner);}},"1233":{"1":(ctx,owner)=>{c7v0a52.call(owner,ctx,owner);}},"1243":{"1":(ctx,owner)=>{c7v0a53.call(owner,ctx,owner);}},"1252":{"1":(ctx,owner)=>{c7v0a54.call(owner,ctx,owner);}},"1253":{"1":(ctx,owner)=>{c7v0a55.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a56.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v0a57.call(owner,ctx,owner);}},"1260":{"1":(ctx,owner)=>{c7v0a58.call(owner,ctx,owner);}},"1267":{"1":(ctx,owner)=>{c7v0a59.call(owner,ctx,owner);}},"1272":{"1":(ctx,owner)=>{c7v0a60.call(owner,ctx,owner);}},"1273":{"1":(ctx,owner)=>{c7v0a61.call(owner,ctx,owner);}},"1281":{"1":(ctx,owner)=>{c7v0a63.call(owner,ctx,owner);}},"1289":{"1":(ctx,owner)=>{c7v0a64.call(owner,ctx,owner);}},"1297":{"1":(ctx,owner)=>{c7v0a65.call(owner,ctx,owner);}},"1298":{"1":(ctx,owner)=>{c7v0a66.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a67.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v0a68.call(owner,ctx,owner);}},"1341":{"82":(ctx,owner)=>{c7v0a72.call(owner,ctx,owner);}},"1395":{"1":(ctx,owner)=>{c7v0a73.call(owner,ctx,owner);},"151":(ctx,owner)=>{c7v0a74.call(owner,ctx,owner);}},"1414":{"1":(ctx,owner)=>{c7v0a75.call(owner,ctx,owner);}},"1427":{"1":(ctx,owner)=>{c7v0a76.call(owner,ctx,owner);}},"1484":{"1":(ctx,owner)=>{c7v0a77.call(owner,ctx,owner);}},"1502":{"1":(ctx,owner)=>{c7v0a78.call(owner,ctx,owner);}},"1571":{"1":(ctx,owner)=>{c7v0a80.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a81.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v0a85.call(owner,ctx,owner);},"219":(ctx,owner)=>{c7v0a82.call(owner,ctx,owner);},"221":(ctx,owner)=>{c7v0a83.call(owner,ctx,owner);},"261":(ctx,owner)=>{c7v0a84.call(owner,ctx,owner);}},"1574":{"1":(ctx,owner)=>{c7v0a86.call(owner,ctx,owner);}},"1593":{"1":(ctx,owner)=>{c7v0a88.call(owner,ctx,owner);}},"1599":{"1":(ctx,owner)=>{c7v0a89.call(owner,ctx,owner);}},"1604":{"1":(ctx,owner)=>{c7v0a90.call(owner,ctx,owner);}},"1940":{"1":(ctx,owner)=>{c7v0a91.call(owner,ctx,owner);},"1118":(ctx,owner)=>{c7v0a92.call(owner,ctx,owner);}},"1958":{"1":(ctx,owner)=>{c7v0a93.call(owner,ctx,owner);}},"1959":{"1":(ctx,owner)=>{c7v0a94.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v0a95.call(owner,ctx,owner);}},"1990":{"1":(ctx,owner)=>{c7v0a96.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a98.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v0a97.call(owner,ctx,owner);}},"1998":{"1":(ctx,owner)=>{c7v0a99.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a101.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v0a100.call(owner,ctx,owner);}},"2002":{"1":(ctx,owner)=>{c7v0a102.call(owner,ctx,owner);}},"2003":{"1":(ctx,owner)=>{c7v0a103.call(owner,ctx,owner);}},"2048":{"1":(ctx,owner)=>{c7v0a104.call(owner,ctx,owner);}},"2051":{"1":(ctx,owner)=>{c7v0a105.call(owner,ctx,owner);}},"2060":{"1":(ctx,owner)=>{c7v0a106.call(owner,ctx,owner);}},"2068":{"1":(ctx,owner)=>{c7v0a107.call(owner,ctx,owner);}},"2078":{"1":(ctx,owner)=>{c7v0a108.call(owner,ctx,owner);},"5":(ctx,owner)=>{c7v0a109.call(owner,ctx,owner);}},"2091":{"1":(ctx,owner)=>{c7v0a110.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v0a111.call(owner,ctx,owner);}},"2100":{"1":(ctx,owner)=>{c7v0a112.call(owner,ctx,owner);}},"2111":{"8":(ctx,owner)=>{c7v0a113.call(owner,ctx,owner);}},"2112":{"1":(ctx,owner)=>{c7v0a114.call(owner,ctx,owner);}},"2131":{"55":(ctx,owner)=>{c7v0a116.call(owner,ctx,owner);},"120":(ctx,owner)=>{c7v0a115.call(owner,ctx,owner);}},"2180":{"1":(ctx,owner)=>{c7v0a117.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a121.call(owner,ctx,owner);},"90":(ctx,owner)=>{c7v0a122.call(owner,ctx,owner);},"97":(ctx,owner)=>{c7v0a123.call(owner,ctx,owner);},"133":(ctx,owner)=>{c7v0a118.call(owner,ctx,owner);},"136":(ctx,owner)=>{c7v0a119.call(owner,ctx,owner);},"137":(ctx,owner)=>{c7v0a120.call(owner,ctx,owner);}},"2184":{"6":(ctx,owner)=>{c7v0a124.call(owner,ctx,owner);}},"2185":{"1":(ctx,owner)=>{c7v0a125.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v0a126.call(owner,ctx,owner);}},"2196":{"1":(ctx,owner)=>{c7v0a127.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a128.call(owner,ctx,owner);}},"2198":{"1":(ctx,owner)=>{c7v0a129.call(owner,ctx,owner);}},"2230":{"24":(ctx,owner)=>{c7v0a130.call(owner,ctx,owner);}},"2249":{"48":(ctx,owner)=>{c7v0a131.call(owner,ctx,owner);}},"2250":{"148":(ctx,owner)=>{c7v0a132.call(owner,ctx,owner);},"208":(ctx,owner)=>{c7v0a135.call(owner,ctx,owner);},"250":(ctx,owner)=>{c7v0a136.call(owner,ctx,owner);},"366":(ctx,owner)=>{c7v0a138.call(owner,ctx,owner);},"367":(ctx,owner)=>{c7v0a139.call(owner,ctx,owner);}},"2265":{"1":(ctx,owner)=>{c7v0a140.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a141.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v0a145.call(owner,ctx,owner);},"4":(ctx,owner)=>{c7v0a146.call(owner,ctx,owner);},"5":(ctx,owner)=>{c7v0a147.call(owner,ctx,owner);},"6":(ctx,owner)=>{c7v0a148.call(owner,ctx,owner);},"7":(ctx,owner)=>{c7v0a152.call(owner,ctx,owner);},"8":(ctx,owner)=>{c7v0a153.call(owner,ctx,owner);},"9":(ctx,owner)=>{c7v0a154.call(owner,ctx,owner);}},"2279":{"1":(ctx,owner)=>{c7v0a155.call(owner,ctx,owner);}},"2343":{"1":(ctx,owner)=>{c7v0a156.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a157.call(owner,ctx,owner);}},"2374":{"1":(ctx,owner)=>{c7v0a158.call(owner,ctx,owner);}},"2388":{"1":(ctx,owner)=>{c7v0a159.call(owner,ctx,owner);}},"2389":{"1":(ctx,owner)=>{c7v0a160.call(owner,ctx,owner);}},"2390":{"1":(ctx,owner)=>{c7v0a162.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a164.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v0a163.call(owner,ctx,owner);},"20":(ctx,owner)=>{c7v0a165.call(owner,ctx,owner);}},"2397":{"1":(ctx,owner)=>{c7v0a166.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a169.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v0a171.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v0a167.call(owner,ctx,owner);},"12":(ctx,owner)=>{c7v0a168.call(owner,ctx,owner);},"20":(ctx,owner)=>{c7v0a170.call(owner,ctx,owner);}},"2407":{"1":(ctx,owner)=>{c7v0a173.call(owner,ctx,owner);}},"2408":{"1":(ctx,owner)=>{c7v0a174.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a176.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v0a175.call(owner,ctx,owner);},"20":(ctx,owner)=>{c7v0a177.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c7v0a245.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v0a246.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v0a247.call(owner,ctx,owner);},"4":(ctx,owner)=>{c7v0a248.call(owner,ctx,owner);}}},frameActions:{"58":{"1":[c7v0a210],"98":[c7v0a211]},"109":{"1":[c7v0a39],"151":[c7v0a40]},"127":{"1":[c7v0a62]},"132":{"1":[c7v0a69],"2":[c7v0a70],"7":[c7v0a71]},"157":{"1":[c7v0a79]},"159":{"1":[c7v0a87]},"240":{"19":[c7v0a172]},"257":{"19":[c7v0a178]},"261":{"17":[c7v0a179]},"276":{"11":[c7v0a180]},"293":{"11":[c7v0a181]},"295":{"1":[c7v0a182]},"305":{"12":[c7v0a183]},"314":{"12":[c7v0a184]},"327":{"22":[c7v0a185]},"338":{"22":[c7v0a186]},"360":{"18":[c7v0a187]},"378":{"18":[c7v0a188]},"386":{"9":[c7v0a189]},"392":{"9":[c7v0a190]},"426":{"22":[c7v0a191]},"454":{"22":[c7v0a192]},"461":{"9":[c7v0a193]},"468":{"9":[c7v0a194]},"469":{"137":[c7v0a195],"144":[c7v0a196]},"490":{"16":[c7v0a197]},"496":{"8":[c7v0a198]},"502":{"13":[c7v0a199]},"513":{"22":[c7v0a200]},"523":{"20":[c7v0a201]},"529":{"8":[c7v0a202]},"540":{"16":[c7v0a203]},"546":{"10":[c7v0a204]},"563":{"1":[c7v0a205]},"580":{"1":[c7v0a206],"61":[c7v0a209],"120":[c7v0a207],"121":[c7v0a208]},"631":{"21":[c7v0a212]},"645":{"21":[c7v0a213]},"651":{"11":[c7v0a214]},"658":{"11":[c7v0a215]},"666":{"12":[c7v0a216]},"673":{"12":[c7v0a217]},"688":{"25":[c7v0a218]},"703":{"25":[c7v0a219]},"715":{"21":[c7v0a220]},"727":{"21":[c7v0a221]},"736":{"11":[c7v0a222]},"743":{"11":[c7v0a223]},"766":{"35":[c7v0a224]},"789":{"35":[c7v0a225]},"795":{"9":[c7v0a226]},"796":{"119":[c7v0a227],"126":[c7v0a228]},"797":{"1":[c7v0a229]},"798":{"1":[c7v0a230]},"799":{"1":[c7v0a231],"29":[c7v0a232],"30":[c7v0a233]},"805":{"1":[c7v0a234]},"912":{"9":[c7v0a235]},"919":{"9":[c7v0a236]},"924":{"9":[c7v0a237]},"929":{"9":[c7v0a238]},"934":{"9":[c7v0a239]},"943":{"9":[c7v0a240]},"948":{"9":[c7v0a241]},"957":{"9":[c7v0a242]},"970":{"26":[c7v0a243]},"985":{"28":[c7v0a244]},"1001":{"34":[c7v0a30]},"1015":{"34":[c7v0a31]},"1029":{"32":[c7v0a32]},"1047":{"24":[c7v0a33]},"1061":{"32":[c7v0a34]},"1077":{"24":[c7v0a35]},"1099":{"6":[c7v0a38],"10":[c7v0a36],"24":[c7v0a37]},"1120":{"4":[c7v0a43],"14":[c7v0a41],"24":[c7v0a42]},"1145":{"54":[c7v0a44]},"1164":{"16":[c7v0a45]},"1165":{"54":[c7v0a46]},"1166":{"1":[c7v0a47],"2":[c7v0a48]},"1203":{"1":[c7v0a49]},"1204":{"1":[c7v0a50]},"1220":{"1":[c7v0a51]},"1233":{"1":[c7v0a52]},"1243":{"1":[c7v0a53]},"1252":{"1":[c7v0a54]},"1253":{"1":[c7v0a55],"2":[c7v0a56],"3":[c7v0a57]},"1260":{"1":[c7v0a58]},"1267":{"1":[c7v0a59]},"1272":{"1":[c7v0a60]},"1273":{"1":[c7v0a61]},"1281":{"1":[c7v0a63]},"1289":{"1":[c7v0a64]},"1297":{"1":[c7v0a65]},"1298":{"1":[c7v0a66],"2":[c7v0a67],"3":[c7v0a68]},"1341":{"82":[c7v0a72]},"1395":{"1":[c7v0a73],"151":[c7v0a74]},"1414":{"1":[c7v0a75]},"1427":{"1":[c7v0a76]},"1484":{"1":[c7v0a77]},"1502":{"1":[c7v0a78]},"1571":{"1":[c7v0a80],"2":[c7v0a81],"3":[c7v0a85],"219":[c7v0a82],"221":[c7v0a83],"261":[c7v0a84]},"1574":{"1":[c7v0a86]},"1593":{"1":[c7v0a88]},"1599":{"1":[c7v0a89]},"1604":{"1":[c7v0a90]},"1940":{"1":[c7v0a91],"1118":[c7v0a92]},"1958":{"1":[c7v0a93]},"1959":{"1":[c7v0a94],"11":[c7v0a95]},"1990":{"1":[c7v0a96],"2":[c7v0a98],"11":[c7v0a97]},"1998":{"1":[c7v0a99],"2":[c7v0a101],"11":[c7v0a100]},"2002":{"1":[c7v0a102]},"2003":{"1":[c7v0a103]},"2048":{"1":[c7v0a104]},"2051":{"1":[c7v0a105]},"2060":{"1":[c7v0a106]},"2068":{"1":[c7v0a107]},"2078":{"1":[c7v0a108],"5":[c7v0a109]},"2091":{"1":[c7v0a110],"11":[c7v0a111]},"2100":{"1":[c7v0a112]},"2111":{"8":[c7v0a113]},"2112":{"1":[c7v0a114]},"2131":{"55":[c7v0a116],"120":[c7v0a115]},"2180":{"1":[c7v0a117],"2":[c7v0a121],"90":[c7v0a122],"97":[c7v0a123],"133":[c7v0a118],"136":[c7v0a119],"137":[c7v0a120]},"2184":{"6":[c7v0a124]},"2185":{"1":[c7v0a125],"3":[c7v0a126]},"2196":{"1":[c7v0a127],"2":[c7v0a128]},"2198":{"1":[c7v0a129]},"2230":{"24":[c7v0a130]},"2249":{"48":[c7v0a131]},"2250":{"148":[c7v0a132],"208":[c7v0a135],"250":[c7v0a136],"366":[c7v0a138],"367":[c7v0a139]},"2265":{"1":[c7v0a140],"2":[c7v0a141],"3":[c7v0a145],"4":[c7v0a146],"5":[c7v0a147],"6":[c7v0a148],"7":[c7v0a152],"8":[c7v0a153],"9":[c7v0a154]},"2279":{"1":[c7v0a155]},"2343":{"1":[c7v0a156],"2":[c7v0a157]},"2374":{"1":[c7v0a158]},"2388":{"1":[c7v0a159]},"2389":{"1":[c7v0a160]},"2390":{"1":[c7v0a162],"2":[c7v0a164],"11":[c7v0a163],"20":[c7v0a165]},"2397":{"1":[c7v0a166],"2":[c7v0a169],"3":[c7v0a171],"11":[c7v0a167],"12":[c7v0a168],"20":[c7v0a170]},"2407":{"1":[c7v0a173]},"2408":{"1":[c7v0a174],"2":[c7v0a176],"11":[c7v0a175],"20":[c7v0a177]},"main":{"1":[c7v0a245],"2":[c7v0a246],"3":[c7v0a247],"4":[c7v0a248]}},buttons:{"1191":{"press":(ctx,owner)=>{c7v0a0.call(owner,ctx,owner);},"release":(ctx,owner)=>{c7v0a1.call(owner,ctx,owner);}},"1196":{"release":(ctx,owner)=>{c7v0a2.call(owner,ctx,owner);}},"1216":{"release":(ctx,owner)=>{c7v0a3.call(owner,ctx,owner);}},"1218":{"release":(ctx,owner)=>{c7v0a4.call(owner,ctx,owner);}},"1492":{"press":(ctx,owner)=>{c7v0a5.call(owner,ctx,owner);}},"1495":{"press":(ctx,owner)=>{c7v0a6.call(owner,ctx,owner);}},"1498":{"press":(ctx,owner)=>{c7v0a7.call(owner,ctx,owner);}},"1943":{"press":(ctx,owner)=>{c7v0a8.call(owner,ctx,owner);},"release":(ctx,owner)=>{c7v0a9.call(owner,ctx,owner);}},"1968":{"release":(ctx,owner)=>{c7v0a10.call(owner,ctx,owner);}},"1974":{"release":(ctx,owner)=>{c7v0a11.call(owner,ctx,owner);}},"1979":{"release":(ctx,owner)=>{c7v0a12.call(owner,ctx,owner);}},"1988":{"release":(ctx,owner)=>{c7v0a13.call(owner,ctx,owner);}},"2271":{"release":(ctx,owner)=>{c7v0a14.call(owner,ctx,owner);}},"2317":{"release":(ctx,owner)=>{c7v0a15.call(owner,ctx,owner);}},"2318":{"release":(ctx,owner)=>{c7v0a16.call(owner,ctx,owner);}},"2319":{"release":(ctx,owner)=>{c7v0a17.call(owner,ctx,owner);}},"2320":{"release":(ctx,owner)=>{c7v0a18.call(owner,ctx,owner);}},"2321":{"release":(ctx,owner)=>{c7v0a19.call(owner,ctx,owner);}},"2354":{"release":(ctx,owner)=>{c7v0a20.call(owner,ctx,owner);}},"2357":{"release":(ctx,owner)=>{c7v0a21.call(owner,ctx,owner);}},"2361":{"release":(ctx,owner)=>{c7v0a22.call(owner,ctx,owner);}},"2363":{"release":(ctx,owner)=>{c7v0a23.call(owner,ctx,owner);}},"2365":{"release":(ctx,owner)=>{c7v0a24.call(owner,ctx,owner);}},"2367":{"release":(ctx,owner)=>{c7v0a25.call(owner,ctx,owner);}},"2373":{"press":(ctx,owner)=>{c7v0a26.call(owner,ctx,owner);},"release":(ctx,owner)=>{c7v0a27.call(owner,ctx,owner);}},"2399":{"release":(ctx,owner)=>{c7v0a28.call(owner,ctx,owner);}},"2416":{"release":(ctx,owner)=>{c7v0a29.call(owner,ctx,owner);}}},clips:[{"parent":"2250","frame":149,"character":"2219","name":"","depth":20,"event":"enterFrame","handler":c7v0a133},{"parent":"2250","frame":2,"character":"2219","name":"","depth":4,"event":"enterFrame","handler":c7v0a134},{"parent":"2250","frame":252,"character":"2219","name":"","depth":4,"event":"enterFrame","handler":c7v0a137},{"parent":"2265","frame":2,"character":"2053","name":"","depth":57,"event":"enterFrame","handler":c7v0a142},{"parent":"2265","frame":2,"character":"2053","name":"","depth":59,"event":"enterFrame","handler":c7v0a143},{"parent":"2265","frame":2,"character":"2053","name":"","depth":61,"event":"enterFrame","handler":c7v0a144},{"parent":"2265","frame":6,"character":"2252","name":"","depth":51,"event":"enterFrame","handler":c7v0a149},{"parent":"2265","frame":6,"character":"2252","name":"","depth":53,"event":"enterFrame","handler":c7v0a150},{"parent":"2265","frame":6,"character":"2252","name":"","depth":55,"event":"enterFrame","handler":c7v0a151},{"parent":"2389","frame":1,"character":"2279","name":"","depth":11,"event":"enterFrame","handler":c7v0a161}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"58":["_totalframes","skipFrame"],"109":["_totalframes","skipFrame"],"127":["_totalframes","skipFrame"],"132":["txt"],"157":[],"159":["_visible"],"240":[],"257":[],"261":[],"276":[],"293":[],"295":["_visible"],"305":[],"314":[],"327":[],"338":[],"360":[],"378":[],"386":[],"392":[],"426":[],"454":[],"461":[],"468":[],"469":[],"490":[],"496":[],"502":[],"513":[],"523":[],"529":[],"540":[],"546":[],"563":[],"580":[],"631":[],"645":[],"651":[],"658":[],"666":[],"673":[],"688":[],"703":[],"715":[],"727":[],"736":[],"743":[],"766":[],"789":[],"795":[],"796":[],"797":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"798":["tt"],"799":["skipFrame"],"805":["_x","_y","onEnterFrame","x","y"],"912":[],"919":[],"924":[],"929":[],"934":[],"943":[],"948":[],"957":[],"970":[],"985":[],"1001":[],"1015":[],"1029":[],"1047":[],"1061":[],"1077":[],"1099":["items"],"1120":["items"],"1145":[],"1164":[],"1165":[],"1166":[],"1191":[],"1196":[],"1203":["component","track_mc"],"1204":[],"1216":["qqxflash_home"],"1218":[],"1220":[],"1233":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1243":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1252":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1253":[],"1260":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1267":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1272":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1273":[],"1281":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1289":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1297":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1298":[],"1341":[],"1395":["_totalframes","skipFrame"],"1414":["_totalframes","skipFrame"],"1427":["_totalframes","skipFrame"],"1484":["_totalframes","skipFrame"],"1492":["i"],"1495":["ttt"],"1498":["ttt"],"1502":["i","t_array","ttt"],"1571":["mc","skipFrame","ttt"],"1574":["_totalframes","skipFrame"],"1593":["_totalframes","skipFrame"],"1599":["_totalframes","skipFrame"],"1604":["_totalframes","skipFrame"],"1940":["_totalframes","mc","skipFrame"],"1943":["aim","xxx","yyy"],"1958":[],"1959":["_currentframe","back","onEnterFrame"],"1968":[],"1974":["helper"],"1979":[],"1988":[],"1990":["btn"],"1998":[],"2002":["_visible","hitted","onEnterFrame","ox","oy"],"2003":["_visible"],"2048":[],"2051":["v"],"2053":[],"2060":[],"2068":[],"2078":[],"2091":[],"2100":[],"2111":[],"2112":[],"2131":[],"2180":["eventNow","mc"],"2184":[],"2185":[],"2196":["mc"],"2198":["_visible","hitted","onEnterFrame"],"2219":["an","ttt"],"2230":[],"2249":[],"2250":["mc","onEnterFrame","tempDepths","xx","yy"],"2252":[],"2265":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl3","blocks","blockx","blocky","changeMovies","changes","door","events","hitter","i","man","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman","yu"],"2271":["gp"],"2279":[],"2317":[],"2318":[],"2319":[],"2320":[],"2321":[],"2343":["actKey","downKey","leftKey","rightKey","upKey"],"2354":["_quality"],"2357":["_quality"],"2361":["_quality"],"2363":[],"2365":["allShow"],"2367":["allShow"],"2373":["draging","onEnterFrame"],"2374":["_x","bb","draging","onEnterFrame"],"2388":["btn"],"2389":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2390":["btn","gp"],"2397":["i","onEnterFrame"],"2399":["aim"],"2407":[],"2408":["delay","fadeOut","item"],"2416":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:7286084,frames:{"22":{"1":(ctx,owner)=>{c7v1a362.call(owner,ctx,owner);}},"234":{"9":(ctx,owner)=>{c7v1a376.call(owner,ctx,owner);}},"239":{"9":(ctx,owner)=>{c7v1a381.call(owner,ctx,owner);}},"247":{"9":(ctx,owner)=>{c7v1a391.call(owner,ctx,owner);}},"255":{"9":(ctx,owner)=>{c7v1a406.call(owner,ctx,owner);}},"260":{"9":(ctx,owner)=>{c7v1a432.call(owner,ctx,owner);}},"265":{"10":(ctx,owner)=>{c7v1a434.call(owner,ctx,owner);}},"270":{"9":(ctx,owner)=>{c7v1a438.call(owner,ctx,owner);}},"275":{"9":(ctx,owner)=>{c7v1a457.call(owner,ctx,owner);}},"280":{"9":(ctx,owner)=>{c7v1a458.call(owner,ctx,owner);}},"285":{"9":(ctx,owner)=>{c7v1a459.call(owner,ctx,owner);}},"294":{"9":(ctx,owner)=>{c7v1a460.call(owner,ctx,owner);}},"303":{"9":(ctx,owner)=>{c7v1a461.call(owner,ctx,owner);}},"308":{"9":(ctx,owner)=>{c7v1a462.call(owner,ctx,owner);}},"312":{"9":(ctx,owner)=>{c7v1a463.call(owner,ctx,owner);}},"321":{"9":(ctx,owner)=>{c7v1a464.call(owner,ctx,owner);}},"338":{"9":(ctx,owner)=>{c7v1a465.call(owner,ctx,owner);}},"351":{"26":(ctx,owner)=>{c7v1a466.call(owner,ctx,owner);}},"364":{"26":(ctx,owner)=>{c7v1a467.call(owner,ctx,owner);}},"379":{"28":(ctx,owner)=>{c7v1a468.call(owner,ctx,owner);}},"403":{"26":(ctx,owner)=>{c7v1a469.call(owner,ctx,owner);}},"419":{"34":(ctx,owner)=>{c7v1a470.call(owner,ctx,owner);}},"433":{"28":(ctx,owner)=>{c7v1a471.call(owner,ctx,owner);}},"447":{"34":(ctx,owner)=>{c7v1a472.call(owner,ctx,owner);}},"461":{"28":(ctx,owner)=>{c7v1a473.call(owner,ctx,owner);}},"475":{"32":(ctx,owner)=>{c7v1a474.call(owner,ctx,owner);}},"489":{"32":(ctx,owner)=>{c7v1a475.call(owner,ctx,owner);}},"507":{"24":(ctx,owner)=>{c7v1a476.call(owner,ctx,owner);}},"523":{"28":(ctx,owner)=>{c7v1a477.call(owner,ctx,owner);}},"537":{"32":(ctx,owner)=>{c7v1a478.call(owner,ctx,owner);}},"552":{"32":(ctx,owner)=>{c7v1a479.call(owner,ctx,owner);}},"568":{"24":(ctx,owner)=>{c7v1a480.call(owner,ctx,owner);}},"584":{"28":(ctx,owner)=>{c7v1a481.call(owner,ctx,owner);}},"606":{"6":(ctx,owner)=>{c7v1a484.call(owner,ctx,owner);},"10":(ctx,owner)=>{c7v1a482.call(owner,ctx,owner);},"24":(ctx,owner)=>{c7v1a483.call(owner,ctx,owner);}},"626":{"4":(ctx,owner)=>{c7v1a487.call(owner,ctx,owner);},"14":(ctx,owner)=>{c7v1a485.call(owner,ctx,owner);},"24":(ctx,owner)=>{c7v1a486.call(owner,ctx,owner);}},"646":{"54":(ctx,owner)=>{c7v1a488.call(owner,ctx,owner);}},"666":{"54":(ctx,owner)=>{c7v1a489.call(owner,ctx,owner);}},"685":{"16":(ctx,owner)=>{c7v1a490.call(owner,ctx,owner);}},"686":{"54":(ctx,owner)=>{c7v1a491.call(owner,ctx,owner);}},"687":{"1":(ctx,owner)=>{c7v1a492.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a493.call(owner,ctx,owner);}},"735":{"1":(ctx,owner)=>{c7v1a494.call(owner,ctx,owner);},"98":(ctx,owner)=>{c7v1a495.call(owner,ctx,owner);}},"787":{"1":(ctx,owner)=>{c7v1a496.call(owner,ctx,owner);},"151":(ctx,owner)=>{c7v1a497.call(owner,ctx,owner);}},"805":{"1":(ctx,owner)=>{c7v1a498.call(owner,ctx,owner);}},"810":{"1":(ctx,owner)=>{c7v1a499.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a500.call(owner,ctx,owner);},"7":(ctx,owner)=>{c7v1a501.call(owner,ctx,owner);}},"834":{"1":(ctx,owner)=>{c7v1a502.call(owner,ctx,owner);}},"836":{"1":(ctx,owner)=>{c7v1a503.call(owner,ctx,owner);}},"917":{"19":(ctx,owner)=>{c7v1a504.call(owner,ctx,owner);}},"934":{"19":(ctx,owner)=>{c7v1a505.call(owner,ctx,owner);}},"938":{"17":(ctx,owner)=>{c7v1a506.call(owner,ctx,owner);}},"953":{"11":(ctx,owner)=>{c7v1a507.call(owner,ctx,owner);}},"970":{"11":(ctx,owner)=>{c7v1a508.call(owner,ctx,owner);}},"972":{"1":(ctx,owner)=>{c7v1a509.call(owner,ctx,owner);}},"982":{"12":(ctx,owner)=>{c7v1a510.call(owner,ctx,owner);}},"991":{"12":(ctx,owner)=>{c7v1a511.call(owner,ctx,owner);}},"1004":{"22":(ctx,owner)=>{c7v1a279.call(owner,ctx,owner);}},"1015":{"22":(ctx,owner)=>{c7v1a280.call(owner,ctx,owner);}},"1037":{"18":(ctx,owner)=>{c7v1a281.call(owner,ctx,owner);}},"1055":{"18":(ctx,owner)=>{c7v1a282.call(owner,ctx,owner);}},"1063":{"9":(ctx,owner)=>{c7v1a283.call(owner,ctx,owner);}},"1069":{"9":(ctx,owner)=>{c7v1a284.call(owner,ctx,owner);}},"1103":{"22":(ctx,owner)=>{c7v1a285.call(owner,ctx,owner);}},"1131":{"22":(ctx,owner)=>{c7v1a286.call(owner,ctx,owner);}},"1138":{"9":(ctx,owner)=>{c7v1a287.call(owner,ctx,owner);}},"1145":{"9":(ctx,owner)=>{c7v1a288.call(owner,ctx,owner);}},"1146":{"137":(ctx,owner)=>{c7v1a289.call(owner,ctx,owner);},"144":(ctx,owner)=>{c7v1a290.call(owner,ctx,owner);}},"1167":{"16":(ctx,owner)=>{c7v1a291.call(owner,ctx,owner);}},"1173":{"8":(ctx,owner)=>{c7v1a292.call(owner,ctx,owner);}},"1179":{"13":(ctx,owner)=>{c7v1a293.call(owner,ctx,owner);}},"1190":{"22":(ctx,owner)=>{c7v1a294.call(owner,ctx,owner);}},"1200":{"20":(ctx,owner)=>{c7v1a295.call(owner,ctx,owner);}},"1206":{"8":(ctx,owner)=>{c7v1a296.call(owner,ctx,owner);}},"1217":{"16":(ctx,owner)=>{c7v1a297.call(owner,ctx,owner);}},"1223":{"10":(ctx,owner)=>{c7v1a298.call(owner,ctx,owner);}},"1240":{"1":(ctx,owner)=>{c7v1a299.call(owner,ctx,owner);}},"1257":{"1":(ctx,owner)=>{c7v1a300.call(owner,ctx,owner);},"61":(ctx,owner)=>{c7v1a303.call(owner,ctx,owner);},"120":(ctx,owner)=>{c7v1a301.call(owner,ctx,owner);},"121":(ctx,owner)=>{c7v1a302.call(owner,ctx,owner);}},"1308":{"21":(ctx,owner)=>{c7v1a304.call(owner,ctx,owner);}},"1322":{"21":(ctx,owner)=>{c7v1a305.call(owner,ctx,owner);}},"1328":{"11":(ctx,owner)=>{c7v1a306.call(owner,ctx,owner);}},"1335":{"11":(ctx,owner)=>{c7v1a307.call(owner,ctx,owner);}},"1343":{"12":(ctx,owner)=>{c7v1a308.call(owner,ctx,owner);}},"1350":{"12":(ctx,owner)=>{c7v1a309.call(owner,ctx,owner);}},"1365":{"25":(ctx,owner)=>{c7v1a310.call(owner,ctx,owner);}},"1380":{"25":(ctx,owner)=>{c7v1a311.call(owner,ctx,owner);}},"1392":{"21":(ctx,owner)=>{c7v1a312.call(owner,ctx,owner);}},"1404":{"21":(ctx,owner)=>{c7v1a313.call(owner,ctx,owner);}},"1413":{"11":(ctx,owner)=>{c7v1a314.call(owner,ctx,owner);}},"1420":{"11":(ctx,owner)=>{c7v1a315.call(owner,ctx,owner);}},"1443":{"35":(ctx,owner)=>{c7v1a316.call(owner,ctx,owner);}},"1466":{"35":(ctx,owner)=>{c7v1a317.call(owner,ctx,owner);}},"1472":{"9":(ctx,owner)=>{c7v1a318.call(owner,ctx,owner);}},"1473":{"119":(ctx,owner)=>{c7v1a319.call(owner,ctx,owner);},"126":(ctx,owner)=>{c7v1a320.call(owner,ctx,owner);}},"1474":{"1":(ctx,owner)=>{c7v1a321.call(owner,ctx,owner);}},"1475":{"1":(ctx,owner)=>{c7v1a322.call(owner,ctx,owner);}},"1476":{"1":(ctx,owner)=>{c7v1a323.call(owner,ctx,owner);},"29":(ctx,owner)=>{c7v1a324.call(owner,ctx,owner);},"30":(ctx,owner)=>{c7v1a325.call(owner,ctx,owner);}},"1513":{"1":(ctx,owner)=>{c7v1a326.call(owner,ctx,owner);}},"1514":{"1":(ctx,owner)=>{c7v1a327.call(owner,ctx,owner);}},"1530":{"1":(ctx,owner)=>{c7v1a328.call(owner,ctx,owner);}},"1543":{"1":(ctx,owner)=>{c7v1a329.call(owner,ctx,owner);}},"1553":{"1":(ctx,owner)=>{c7v1a330.call(owner,ctx,owner);}},"1562":{"1":(ctx,owner)=>{c7v1a331.call(owner,ctx,owner);}},"1563":{"1":(ctx,owner)=>{c7v1a332.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a333.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v1a334.call(owner,ctx,owner);}},"1570":{"1":(ctx,owner)=>{c7v1a335.call(owner,ctx,owner);}},"1577":{"1":(ctx,owner)=>{c7v1a336.call(owner,ctx,owner);}},"1582":{"1":(ctx,owner)=>{c7v1a337.call(owner,ctx,owner);}},"1583":{"1":(ctx,owner)=>{c7v1a338.call(owner,ctx,owner);}},"1591":{"1":(ctx,owner)=>{c7v1a339.call(owner,ctx,owner);}},"1599":{"1":(ctx,owner)=>{c7v1a340.call(owner,ctx,owner);}},"1607":{"1":(ctx,owner)=>{c7v1a341.call(owner,ctx,owner);}},"1608":{"1":(ctx,owner)=>{c7v1a342.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a343.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v1a344.call(owner,ctx,owner);}},"1660":{"82":(ctx,owner)=>{c7v1a345.call(owner,ctx,owner);}},"1712":{"1":(ctx,owner)=>{c7v1a346.call(owner,ctx,owner);},"151":(ctx,owner)=>{c7v1a347.call(owner,ctx,owner);}},"1734":{"1":(ctx,owner)=>{c7v1a348.call(owner,ctx,owner);}},"1747":{"1":(ctx,owner)=>{c7v1a349.call(owner,ctx,owner);}},"1804":{"1":(ctx,owner)=>{c7v1a350.call(owner,ctx,owner);}},"1822":{"1":(ctx,owner)=>{c7v1a351.call(owner,ctx,owner);}},"1892":{"1":(ctx,owner)=>{c7v1a352.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a353.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v1a357.call(owner,ctx,owner);},"219":(ctx,owner)=>{c7v1a354.call(owner,ctx,owner);},"221":(ctx,owner)=>{c7v1a355.call(owner,ctx,owner);},"261":(ctx,owner)=>{c7v1a356.call(owner,ctx,owner);}},"1895":{"1":(ctx,owner)=>{c7v1a358.call(owner,ctx,owner);}},"1914":{"1":(ctx,owner)=>{c7v1a359.call(owner,ctx,owner);}},"1920":{"1":(ctx,owner)=>{c7v1a360.call(owner,ctx,owner);}},"1925":{"1":(ctx,owner)=>{c7v1a361.call(owner,ctx,owner);}},"2256":{"1":(ctx,owner)=>{c7v1a363.call(owner,ctx,owner);},"1142":(ctx,owner)=>{c7v1a364.call(owner,ctx,owner);}},"2274":{"1":(ctx,owner)=>{c7v1a365.call(owner,ctx,owner);}},"2275":{"1":(ctx,owner)=>{c7v1a366.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v1a367.call(owner,ctx,owner);}},"2306":{"1":(ctx,owner)=>{c7v1a368.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a370.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v1a369.call(owner,ctx,owner);}},"2314":{"1":(ctx,owner)=>{c7v1a371.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a373.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v1a372.call(owner,ctx,owner);}},"2318":{"1":(ctx,owner)=>{c7v1a374.call(owner,ctx,owner);}},"2319":{"1":(ctx,owner)=>{c7v1a375.call(owner,ctx,owner);}},"2363":{"1":(ctx,owner)=>{c7v1a377.call(owner,ctx,owner);}},"2366":{"1":(ctx,owner)=>{c7v1a378.call(owner,ctx,owner);}},"2375":{"1":(ctx,owner)=>{c7v1a379.call(owner,ctx,owner);}},"2383":{"1":(ctx,owner)=>{c7v1a380.call(owner,ctx,owner);}},"2393":{"1":(ctx,owner)=>{c7v1a382.call(owner,ctx,owner);},"5":(ctx,owner)=>{c7v1a383.call(owner,ctx,owner);}},"2406":{"1":(ctx,owner)=>{c7v1a384.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v1a385.call(owner,ctx,owner);}},"2415":{"1":(ctx,owner)=>{c7v1a386.call(owner,ctx,owner);}},"2426":{"8":(ctx,owner)=>{c7v1a387.call(owner,ctx,owner);}},"2427":{"1":(ctx,owner)=>{c7v1a388.call(owner,ctx,owner);}},"2443":{"55":(ctx,owner)=>{c7v1a390.call(owner,ctx,owner);},"120":(ctx,owner)=>{c7v1a389.call(owner,ctx,owner);}},"2490":{"1":(ctx,owner)=>{c7v1a392.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a396.call(owner,ctx,owner);},"90":(ctx,owner)=>{c7v1a397.call(owner,ctx,owner);},"97":(ctx,owner)=>{c7v1a398.call(owner,ctx,owner);},"133":(ctx,owner)=>{c7v1a393.call(owner,ctx,owner);},"136":(ctx,owner)=>{c7v1a394.call(owner,ctx,owner);},"137":(ctx,owner)=>{c7v1a395.call(owner,ctx,owner);}},"2494":{"6":(ctx,owner)=>{c7v1a399.call(owner,ctx,owner);}},"2495":{"1":(ctx,owner)=>{c7v1a400.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v1a401.call(owner,ctx,owner);}},"2506":{"1":(ctx,owner)=>{c7v1a402.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a403.call(owner,ctx,owner);}},"2508":{"1":(ctx,owner)=>{c7v1a404.call(owner,ctx,owner);}},"2542":{"24":(ctx,owner)=>{c7v1a405.call(owner,ctx,owner);}},"2561":{"48":(ctx,owner)=>{c7v1a407.call(owner,ctx,owner);}},"2562":{"148":(ctx,owner)=>{c7v1a408.call(owner,ctx,owner);},"208":(ctx,owner)=>{c7v1a411.call(owner,ctx,owner);},"250":(ctx,owner)=>{c7v1a412.call(owner,ctx,owner);},"366":(ctx,owner)=>{c7v1a414.call(owner,ctx,owner);},"367":(ctx,owner)=>{c7v1a415.call(owner,ctx,owner);}},"2577":{"1":(ctx,owner)=>{c7v1a416.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a417.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v1a421.call(owner,ctx,owner);},"4":(ctx,owner)=>{c7v1a422.call(owner,ctx,owner);},"5":(ctx,owner)=>{c7v1a423.call(owner,ctx,owner);},"6":(ctx,owner)=>{c7v1a424.call(owner,ctx,owner);},"7":(ctx,owner)=>{c7v1a428.call(owner,ctx,owner);},"8":(ctx,owner)=>{c7v1a429.call(owner,ctx,owner);},"9":(ctx,owner)=>{c7v1a430.call(owner,ctx,owner);}},"2591":{"1":(ctx,owner)=>{c7v1a431.call(owner,ctx,owner);}},"2617":{"26":(ctx,owner)=>{c7v1a433.call(owner,ctx,owner);}},"2666":{"1":(ctx,owner)=>{c7v1a435.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a436.call(owner,ctx,owner);}},"2698":{"1":(ctx,owner)=>{c7v1a437.call(owner,ctx,owner);}},"2712":{"1":(ctx,owner)=>{c7v1a439.call(owner,ctx,owner);}},"2713":{"1":(ctx,owner)=>{c7v1a440.call(owner,ctx,owner);}},"2714":{"1":(ctx,owner)=>{c7v1a442.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a444.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v1a443.call(owner,ctx,owner);},"20":(ctx,owner)=>{c7v1a445.call(owner,ctx,owner);}},"2721":{"1":(ctx,owner)=>{c7v1a446.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a449.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v1a451.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v1a447.call(owner,ctx,owner);},"12":(ctx,owner)=>{c7v1a448.call(owner,ctx,owner);},"20":(ctx,owner)=>{c7v1a450.call(owner,ctx,owner);}},"2731":{"1":(ctx,owner)=>{c7v1a452.call(owner,ctx,owner);}},"2732":{"1":(ctx,owner)=>{c7v1a453.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a455.call(owner,ctx,owner);},"11":(ctx,owner)=>{c7v1a454.call(owner,ctx,owner);},"20":(ctx,owner)=>{c7v1a456.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c7v1a512.call(owner,ctx,owner);},"2":(ctx,owner)=>{c7v1a513.call(owner,ctx,owner);},"3":(ctx,owner)=>{c7v1a514.call(owner,ctx,owner);},"4":(ctx,owner)=>{c7v1a515.call(owner,ctx,owner);}}},frameActions:{"22":{"1":[c7v1a362]},"234":{"9":[c7v1a376]},"239":{"9":[c7v1a381]},"247":{"9":[c7v1a391]},"255":{"9":[c7v1a406]},"260":{"9":[c7v1a432]},"265":{"10":[c7v1a434]},"270":{"9":[c7v1a438]},"275":{"9":[c7v1a457]},"280":{"9":[c7v1a458]},"285":{"9":[c7v1a459]},"294":{"9":[c7v1a460]},"303":{"9":[c7v1a461]},"308":{"9":[c7v1a462]},"312":{"9":[c7v1a463]},"321":{"9":[c7v1a464]},"338":{"9":[c7v1a465]},"351":{"26":[c7v1a466]},"364":{"26":[c7v1a467]},"379":{"28":[c7v1a468]},"403":{"26":[c7v1a469]},"419":{"34":[c7v1a470]},"433":{"28":[c7v1a471]},"447":{"34":[c7v1a472]},"461":{"28":[c7v1a473]},"475":{"32":[c7v1a474]},"489":{"32":[c7v1a475]},"507":{"24":[c7v1a476]},"523":{"28":[c7v1a477]},"537":{"32":[c7v1a478]},"552":{"32":[c7v1a479]},"568":{"24":[c7v1a480]},"584":{"28":[c7v1a481]},"606":{"6":[c7v1a484],"10":[c7v1a482],"24":[c7v1a483]},"626":{"4":[c7v1a487],"14":[c7v1a485],"24":[c7v1a486]},"646":{"54":[c7v1a488]},"666":{"54":[c7v1a489]},"685":{"16":[c7v1a490]},"686":{"54":[c7v1a491]},"687":{"1":[c7v1a492],"2":[c7v1a493]},"735":{"1":[c7v1a494],"98":[c7v1a495]},"787":{"1":[c7v1a496],"151":[c7v1a497]},"805":{"1":[c7v1a498]},"810":{"1":[c7v1a499],"2":[c7v1a500],"7":[c7v1a501]},"834":{"1":[c7v1a502]},"836":{"1":[c7v1a503]},"917":{"19":[c7v1a504]},"934":{"19":[c7v1a505]},"938":{"17":[c7v1a506]},"953":{"11":[c7v1a507]},"970":{"11":[c7v1a508]},"972":{"1":[c7v1a509]},"982":{"12":[c7v1a510]},"991":{"12":[c7v1a511]},"1004":{"22":[c7v1a279]},"1015":{"22":[c7v1a280]},"1037":{"18":[c7v1a281]},"1055":{"18":[c7v1a282]},"1063":{"9":[c7v1a283]},"1069":{"9":[c7v1a284]},"1103":{"22":[c7v1a285]},"1131":{"22":[c7v1a286]},"1138":{"9":[c7v1a287]},"1145":{"9":[c7v1a288]},"1146":{"137":[c7v1a289],"144":[c7v1a290]},"1167":{"16":[c7v1a291]},"1173":{"8":[c7v1a292]},"1179":{"13":[c7v1a293]},"1190":{"22":[c7v1a294]},"1200":{"20":[c7v1a295]},"1206":{"8":[c7v1a296]},"1217":{"16":[c7v1a297]},"1223":{"10":[c7v1a298]},"1240":{"1":[c7v1a299]},"1257":{"1":[c7v1a300],"61":[c7v1a303],"120":[c7v1a301],"121":[c7v1a302]},"1308":{"21":[c7v1a304]},"1322":{"21":[c7v1a305]},"1328":{"11":[c7v1a306]},"1335":{"11":[c7v1a307]},"1343":{"12":[c7v1a308]},"1350":{"12":[c7v1a309]},"1365":{"25":[c7v1a310]},"1380":{"25":[c7v1a311]},"1392":{"21":[c7v1a312]},"1404":{"21":[c7v1a313]},"1413":{"11":[c7v1a314]},"1420":{"11":[c7v1a315]},"1443":{"35":[c7v1a316]},"1466":{"35":[c7v1a317]},"1472":{"9":[c7v1a318]},"1473":{"119":[c7v1a319],"126":[c7v1a320]},"1474":{"1":[c7v1a321]},"1475":{"1":[c7v1a322]},"1476":{"1":[c7v1a323],"29":[c7v1a324],"30":[c7v1a325]},"1513":{"1":[c7v1a326]},"1514":{"1":[c7v1a327]},"1530":{"1":[c7v1a328]},"1543":{"1":[c7v1a329]},"1553":{"1":[c7v1a330]},"1562":{"1":[c7v1a331]},"1563":{"1":[c7v1a332],"2":[c7v1a333],"3":[c7v1a334]},"1570":{"1":[c7v1a335]},"1577":{"1":[c7v1a336]},"1582":{"1":[c7v1a337]},"1583":{"1":[c7v1a338]},"1591":{"1":[c7v1a339]},"1599":{"1":[c7v1a340]},"1607":{"1":[c7v1a341]},"1608":{"1":[c7v1a342],"2":[c7v1a343],"3":[c7v1a344]},"1660":{"82":[c7v1a345]},"1712":{"1":[c7v1a346],"151":[c7v1a347]},"1734":{"1":[c7v1a348]},"1747":{"1":[c7v1a349]},"1804":{"1":[c7v1a350]},"1822":{"1":[c7v1a351]},"1892":{"1":[c7v1a352],"2":[c7v1a353],"3":[c7v1a357],"219":[c7v1a354],"221":[c7v1a355],"261":[c7v1a356]},"1895":{"1":[c7v1a358]},"1914":{"1":[c7v1a359]},"1920":{"1":[c7v1a360]},"1925":{"1":[c7v1a361]},"2256":{"1":[c7v1a363],"1142":[c7v1a364]},"2274":{"1":[c7v1a365]},"2275":{"1":[c7v1a366],"11":[c7v1a367]},"2306":{"1":[c7v1a368],"2":[c7v1a370],"11":[c7v1a369]},"2314":{"1":[c7v1a371],"2":[c7v1a373],"11":[c7v1a372]},"2318":{"1":[c7v1a374]},"2319":{"1":[c7v1a375]},"2363":{"1":[c7v1a377]},"2366":{"1":[c7v1a378]},"2375":{"1":[c7v1a379]},"2383":{"1":[c7v1a380]},"2393":{"1":[c7v1a382],"5":[c7v1a383]},"2406":{"1":[c7v1a384],"11":[c7v1a385]},"2415":{"1":[c7v1a386]},"2426":{"8":[c7v1a387]},"2427":{"1":[c7v1a388]},"2443":{"55":[c7v1a390],"120":[c7v1a389]},"2490":{"1":[c7v1a392],"2":[c7v1a396],"90":[c7v1a397],"97":[c7v1a398],"133":[c7v1a393],"136":[c7v1a394],"137":[c7v1a395]},"2494":{"6":[c7v1a399]},"2495":{"1":[c7v1a400],"3":[c7v1a401]},"2506":{"1":[c7v1a402],"2":[c7v1a403]},"2508":{"1":[c7v1a404]},"2542":{"24":[c7v1a405]},"2561":{"48":[c7v1a407]},"2562":{"148":[c7v1a408],"208":[c7v1a411],"250":[c7v1a412],"366":[c7v1a414],"367":[c7v1a415]},"2577":{"1":[c7v1a416],"2":[c7v1a417],"3":[c7v1a421],"4":[c7v1a422],"5":[c7v1a423],"6":[c7v1a424],"7":[c7v1a428],"8":[c7v1a429],"9":[c7v1a430]},"2591":{"1":[c7v1a431]},"2617":{"26":[c7v1a433]},"2666":{"1":[c7v1a435],"2":[c7v1a436]},"2698":{"1":[c7v1a437]},"2712":{"1":[c7v1a439]},"2713":{"1":[c7v1a440]},"2714":{"1":[c7v1a442],"2":[c7v1a444],"11":[c7v1a443],"20":[c7v1a445]},"2721":{"1":[c7v1a446],"2":[c7v1a449],"3":[c7v1a451],"11":[c7v1a447],"12":[c7v1a448],"20":[c7v1a450]},"2731":{"1":[c7v1a452]},"2732":{"1":[c7v1a453],"2":[c7v1a455],"11":[c7v1a454],"20":[c7v1a456]},"main":{"1":[c7v1a512],"2":[c7v1a513],"3":[c7v1a514],"4":[c7v1a515]}},buttons:{"1501":{"press":(ctx,owner)=>{c7v1a249.call(owner,ctx,owner);},"release":(ctx,owner)=>{c7v1a250.call(owner,ctx,owner);}},"1506":{"release":(ctx,owner)=>{c7v1a251.call(owner,ctx,owner);}},"1526":{"release":(ctx,owner)=>{c7v1a252.call(owner,ctx,owner);}},"1528":{"release":(ctx,owner)=>{c7v1a253.call(owner,ctx,owner);}},"1812":{"press":(ctx,owner)=>{c7v1a254.call(owner,ctx,owner);}},"1815":{"press":(ctx,owner)=>{c7v1a255.call(owner,ctx,owner);}},"1818":{"press":(ctx,owner)=>{c7v1a256.call(owner,ctx,owner);}},"2259":{"press":(ctx,owner)=>{c7v1a257.call(owner,ctx,owner);},"release":(ctx,owner)=>{c7v1a258.call(owner,ctx,owner);}},"2284":{"release":(ctx,owner)=>{c7v1a259.call(owner,ctx,owner);}},"2290":{"release":(ctx,owner)=>{c7v1a260.call(owner,ctx,owner);}},"2295":{"release":(ctx,owner)=>{c7v1a261.call(owner,ctx,owner);}},"2304":{"release":(ctx,owner)=>{c7v1a262.call(owner,ctx,owner);}},"2583":{"release":(ctx,owner)=>{c7v1a263.call(owner,ctx,owner);}},"2640":{"release":(ctx,owner)=>{c7v1a264.call(owner,ctx,owner);}},"2641":{"release":(ctx,owner)=>{c7v1a265.call(owner,ctx,owner);}},"2642":{"release":(ctx,owner)=>{c7v1a266.call(owner,ctx,owner);}},"2643":{"release":(ctx,owner)=>{c7v1a267.call(owner,ctx,owner);}},"2644":{"release":(ctx,owner)=>{c7v1a268.call(owner,ctx,owner);}},"2677":{"release":(ctx,owner)=>{c7v1a269.call(owner,ctx,owner);}},"2680":{"release":(ctx,owner)=>{c7v1a270.call(owner,ctx,owner);}},"2684":{"release":(ctx,owner)=>{c7v1a271.call(owner,ctx,owner);}},"2687":{"release":(ctx,owner)=>{c7v1a272.call(owner,ctx,owner);}},"2689":{"release":(ctx,owner)=>{c7v1a273.call(owner,ctx,owner);}},"2691":{"release":(ctx,owner)=>{c7v1a274.call(owner,ctx,owner);}},"2697":{"press":(ctx,owner)=>{c7v1a275.call(owner,ctx,owner);},"release":(ctx,owner)=>{c7v1a276.call(owner,ctx,owner);}},"2723":{"release":(ctx,owner)=>{c7v1a277.call(owner,ctx,owner);}},"2740":{"release":(ctx,owner)=>{c7v1a278.call(owner,ctx,owner);}}},clips:[{"parent":"2562","frame":149,"character":"2529","name":"","depth":15,"event":"enterFrame","handler":c7v1a409},{"parent":"2562","frame":2,"character":"2529","name":"","depth":4,"event":"enterFrame","handler":c7v1a410},{"parent":"2562","frame":252,"character":"2529","name":"","depth":4,"event":"enterFrame","handler":c7v1a413},{"parent":"2577","frame":2,"character":"2368","name":"","depth":58,"event":"enterFrame","handler":c7v1a418},{"parent":"2577","frame":2,"character":"2368","name":"","depth":60,"event":"enterFrame","handler":c7v1a419},{"parent":"2577","frame":2,"character":"2368","name":"","depth":62,"event":"enterFrame","handler":c7v1a420},{"parent":"2577","frame":6,"character":"2564","name":"","depth":46,"event":"enterFrame","handler":c7v1a425},{"parent":"2577","frame":6,"character":"2564","name":"","depth":48,"event":"enterFrame","handler":c7v1a426},{"parent":"2577","frame":6,"character":"2564","name":"","depth":50,"event":"enterFrame","handler":c7v1a427},{"parent":"2713","frame":1,"character":"2591","name":"","depth":11,"event":"enterFrame","handler":c7v1a441}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"22":["_x","_y","onEnterFrame","x","y"],"234":[],"239":[],"247":[],"255":[],"260":[],"265":[],"270":[],"275":[],"280":[],"285":[],"294":[],"303":[],"308":[],"312":[],"321":[],"338":[],"351":[],"364":[],"379":[],"403":[],"419":[],"433":[],"447":[],"461":[],"475":[],"489":[],"507":[],"523":[],"537":[],"552":[],"568":[],"584":[],"606":["items"],"626":["items"],"646":[],"666":[],"685":[],"686":[],"687":[],"735":["_totalframes","skipFrame"],"787":["_totalframes","skipFrame"],"805":["_totalframes","skipFrame"],"810":["txt"],"834":[],"836":["_visible"],"917":[],"934":[],"938":[],"953":[],"970":[],"972":["_visible"],"982":[],"991":[],"1004":[],"1015":[],"1037":[],"1055":[],"1063":[],"1069":[],"1103":[],"1131":[],"1138":[],"1145":[],"1146":[],"1167":[],"1173":[],"1179":[],"1190":[],"1200":[],"1206":[],"1217":[],"1223":[],"1240":[],"1257":[],"1308":[],"1322":[],"1328":[],"1335":[],"1343":[],"1350":[],"1365":[],"1380":[],"1392":[],"1404":[],"1413":[],"1420":[],"1443":[],"1466":[],"1472":[],"1473":[],"1474":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1475":["tt"],"1476":["skipFrame"],"1501":[],"1506":[],"1513":["component","track_mc"],"1514":[],"1526":["qqxflash_home"],"1528":[],"1530":[],"1543":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1553":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1562":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1563":[],"1570":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1577":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1582":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1583":[],"1591":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1599":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1607":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1608":[],"1660":[],"1712":["_totalframes","skipFrame"],"1734":["_totalframes","skipFrame"],"1747":["_totalframes","skipFrame"],"1804":["_totalframes","skipFrame"],"1812":["i"],"1815":["ttt"],"1818":["ttt"],"1822":["i","t_array","ttt"],"1892":["mc","skipFrame","ttt"],"1895":["_totalframes","skipFrame"],"1914":["_totalframes","skipFrame"],"1920":["_totalframes","skipFrame"],"1925":["_totalframes","skipFrame"],"2256":["_totalframes","mc","skipFrame"],"2259":["aim","xxx","yyy"],"2274":[],"2275":["_currentframe","back","onEnterFrame"],"2284":[],"2290":["helper"],"2295":[],"2304":[],"2306":["btn"],"2314":[],"2318":["_visible","hitted","onEnterFrame","ox","oy"],"2319":["_visible"],"2363":[],"2366":["v"],"2368":[],"2375":[],"2383":[],"2393":[],"2406":[],"2415":[],"2426":[],"2427":[],"2443":[],"2490":["eventNow","mc"],"2494":[],"2495":[],"2506":["mc"],"2508":["_visible","hitted","onEnterFrame"],"2529":["an","ttt"],"2542":[],"2561":[],"2562":["mc","onEnterFrame","tempDepths","xx","yy"],"2564":[],"2577":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl3","blocks","blockx","blocky","changeMovies","changes","door","events","hitter","i","man","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman","yu"],"2583":["gp"],"2591":[],"2617":[],"2640":[],"2641":[],"2642":[],"2643":[],"2644":[],"2666":["actKey","downKey","leftKey","rightKey","upKey"],"2677":["_quality"],"2680":["_quality"],"2684":["_quality"],"2687":[],"2689":["allShow"],"2691":["allShow"],"2697":["draging","onEnterFrame"],"2698":["_x","bb","draging","onEnterFrame"],"2712":["btn"],"2713":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2714":["btn","gp"],"2721":["i","onEnterFrame"],"2723":["aim"],"2731":[],"2732":["delay","fadeOut","item"],"2740":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:1191":{"read":[],"write":[]},"0:1196":{"read":[],"write":[]},"0:1216":{"read":["qqxflash_home"],"write":[]},"0:1218":{"read":[],"write":[]},"0:1492":{"read":["i"],"write":[]},"0:1495":{"read":["ttt"],"write":["ttt"]},"0:1498":{"read":["ttt"],"write":[]},"0:1943":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"0:1968":{"read":[],"write":[]},"0:1974":{"read":["helper"],"write":[]},"0:1979":{"read":[],"write":[]},"0:1988":{"read":[],"write":[]},"0:2271":{"read":["gp"],"write":["gp"]},"0:2317":{"read":[],"write":[]},"0:2318":{"read":[],"write":[]},"0:2319":{"read":[],"write":[]},"0:2320":{"read":[],"write":[]},"0:2321":{"read":[],"write":[]},"0:2354":{"read":["_quality"],"write":["_quality"]},"0:2357":{"read":["_quality"],"write":["_quality"]},"0:2361":{"read":["_quality"],"write":["_quality"]},"0:2363":{"read":[],"write":[]},"0:2365":{"read":["allShow"],"write":[]},"0:2367":{"read":["allShow"],"write":[]},"0:2373":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:2399":{"read":["aim"],"write":[]},"0:2416":{"read":[],"write":[]},"0:1001":{"read":[],"write":[]},"0:1015":{"read":[],"write":[]},"0:1029":{"read":[],"write":[]},"0:1047":{"read":[],"write":[]},"0:1061":{"read":[],"write":[]},"0:1077":{"read":[],"write":[]},"0:1099":{"read":["items"],"write":[]},"0:109":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1120":{"read":["items"],"write":[]},"0:1145":{"read":[],"write":[]},"0:1164":{"read":[],"write":[]},"0:1165":{"read":[],"write":[]},"0:1166":{"read":[],"write":[]},"0:1203":{"read":["component","track_mc"],"write":["component"]},"0:1204":{"read":[],"write":[]},"0:1220":{"read":[],"write":[]},"0:1233":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1243":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1252":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1253":{"read":[],"write":[]},"0:1260":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1267":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1272":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1273":{"read":[],"write":[]},"0:127":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1281":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1289":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1297":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1298":{"read":[],"write":[]},"0:132":{"read":["txt"],"write":[]},"0:1341":{"read":[],"write":[]},"0:1395":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1414":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1427":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1484":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1502":{"read":["i","t_array","ttt"],"write":["i","t_array","ttt"]},"0:157":{"read":[],"write":[]},"0:1571":{"read":["mc","skipFrame","ttt"],"write":["skipFrame","ttt"]},"0:1574":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:159":{"read":["_visible"],"write":["_visible"]},"0:1593":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1599":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1604":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1940":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:1958":{"read":[],"write":[]},"0:1959":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:1990":{"read":["btn"],"write":[]},"0:1998":{"read":[],"write":[]},"0:2002":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2003":{"read":["_visible"],"write":["_visible"]},"0:2048":{"read":[],"write":[]},"0:2051":{"read":["v"],"write":[]},"0:2060":{"read":[],"write":[]},"0:2068":{"read":[],"write":[]},"0:2078":{"read":[],"write":[]},"0:2091":{"read":[],"write":[]},"0:2100":{"read":[],"write":[]},"0:2111":{"read":[],"write":[]},"0:2112":{"read":[],"write":[]},"0:2131":{"read":[],"write":[]},"0:2180":{"read":["eventNow","mc"],"write":[]},"0:2184":{"read":[],"write":[]},"0:2185":{"read":[],"write":[]},"0:2196":{"read":["mc"],"write":[]},"0:2198":{"read":["_visible","hitted","onEnterFrame"],"write":["_visible","hitted","onEnterFrame"]},"0:2230":{"read":[],"write":[]},"0:2249":{"read":[],"write":[]},"0:2250":{"read":["mc","onEnterFrame","tempDepths","xx","yy"],"write":["onEnterFrame","tempDepths","xx","yy"]},"0:2219":{"read":["an","ttt"],"write":["an","ttt"]},"0:2265":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl3","blocks","blockx","blocky","changeMovies","changes","door","events","hitter","i","man","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman","yu"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"0:2053":{"read":[],"write":[]},"0:2252":{"read":[],"write":[]},"0:2279":{"read":[],"write":[]},"0:2343":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:2374":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:2388":{"read":["btn"],"write":[]},"0:2389":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"0:2390":{"read":["btn","gp"],"write":[]},"0:2397":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:240":{"read":[],"write":[]},"0:2407":{"read":[],"write":[]},"0:2408":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:257":{"read":[],"write":[]},"0:261":{"read":[],"write":[]},"0:276":{"read":[],"write":[]},"0:293":{"read":[],"write":[]},"0:295":{"read":["_visible"],"write":["_visible"]},"0:305":{"read":[],"write":[]},"0:314":{"read":[],"write":[]},"0:327":{"read":[],"write":[]},"0:338":{"read":[],"write":[]},"0:360":{"read":[],"write":[]},"0:378":{"read":[],"write":[]},"0:386":{"read":[],"write":[]},"0:392":{"read":[],"write":[]},"0:426":{"read":[],"write":[]},"0:454":{"read":[],"write":[]},"0:461":{"read":[],"write":[]},"0:468":{"read":[],"write":[]},"0:469":{"read":[],"write":[]},"0:490":{"read":[],"write":[]},"0:496":{"read":[],"write":[]},"0:502":{"read":[],"write":[]},"0:513":{"read":[],"write":[]},"0:523":{"read":[],"write":[]},"0:529":{"read":[],"write":[]},"0:540":{"read":[],"write":[]},"0:546":{"read":[],"write":[]},"0:563":{"read":[],"write":[]},"0:580":{"read":[],"write":[]},"0:58":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:631":{"read":[],"write":[]},"0:645":{"read":[],"write":[]},"0:651":{"read":[],"write":[]},"0:658":{"read":[],"write":[]},"0:666":{"read":[],"write":[]},"0:673":{"read":[],"write":[]},"0:688":{"read":[],"write":[]},"0:703":{"read":[],"write":[]},"0:715":{"read":[],"write":[]},"0:727":{"read":[],"write":[]},"0:736":{"read":[],"write":[]},"0:743":{"read":[],"write":[]},"0:766":{"read":[],"write":[]},"0:789":{"read":[],"write":[]},"0:795":{"read":[],"write":[]},"0:796":{"read":[],"write":[]},"0:797":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"0:798":{"read":["tt"],"write":["tt"]},"0:799":{"read":["skipFrame"],"write":["skipFrame"]},"0:805":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:912":{"read":[],"write":[]},"0:919":{"read":[],"write":[]},"0:924":{"read":[],"write":[]},"0:929":{"read":[],"write":[]},"0:934":{"read":[],"write":[]},"0:943":{"read":[],"write":[]},"0:948":{"read":[],"write":[]},"0:957":{"read":[],"write":[]},"0:970":{"read":[],"write":[]},"0:985":{"read":[],"write":[]},"0:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:1501":{"read":[],"write":[]},"1:1506":{"read":[],"write":[]},"1:1526":{"read":["qqxflash_home"],"write":[]},"1:1528":{"read":[],"write":[]},"1:1812":{"read":["i"],"write":[]},"1:1815":{"read":["ttt"],"write":["ttt"]},"1:1818":{"read":["ttt"],"write":[]},"1:2259":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"1:2284":{"read":[],"write":[]},"1:2290":{"read":["helper"],"write":[]},"1:2295":{"read":[],"write":[]},"1:2304":{"read":[],"write":[]},"1:2583":{"read":["gp"],"write":["gp"]},"1:2640":{"read":[],"write":[]},"1:2641":{"read":[],"write":[]},"1:2642":{"read":[],"write":[]},"1:2643":{"read":[],"write":[]},"1:2644":{"read":[],"write":[]},"1:2677":{"read":["_quality"],"write":["_quality"]},"1:2680":{"read":["_quality"],"write":["_quality"]},"1:2684":{"read":["_quality"],"write":["_quality"]},"1:2687":{"read":[],"write":[]},"1:2689":{"read":["allShow"],"write":[]},"1:2691":{"read":["allShow"],"write":[]},"1:2697":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:2723":{"read":["aim"],"write":[]},"1:2740":{"read":[],"write":[]},"1:1004":{"read":[],"write":[]},"1:1015":{"read":[],"write":[]},"1:1037":{"read":[],"write":[]},"1:1055":{"read":[],"write":[]},"1:1063":{"read":[],"write":[]},"1:1069":{"read":[],"write":[]},"1:1103":{"read":[],"write":[]},"1:1131":{"read":[],"write":[]},"1:1138":{"read":[],"write":[]},"1:1145":{"read":[],"write":[]},"1:1146":{"read":[],"write":[]},"1:1167":{"read":[],"write":[]},"1:1173":{"read":[],"write":[]},"1:1179":{"read":[],"write":[]},"1:1190":{"read":[],"write":[]},"1:1200":{"read":[],"write":[]},"1:1206":{"read":[],"write":[]},"1:1217":{"read":[],"write":[]},"1:1223":{"read":[],"write":[]},"1:1240":{"read":[],"write":[]},"1:1257":{"read":[],"write":[]},"1:1308":{"read":[],"write":[]},"1:1322":{"read":[],"write":[]},"1:1328":{"read":[],"write":[]},"1:1335":{"read":[],"write":[]},"1:1343":{"read":[],"write":[]},"1:1350":{"read":[],"write":[]},"1:1365":{"read":[],"write":[]},"1:1380":{"read":[],"write":[]},"1:1392":{"read":[],"write":[]},"1:1404":{"read":[],"write":[]},"1:1413":{"read":[],"write":[]},"1:1420":{"read":[],"write":[]},"1:1443":{"read":[],"write":[]},"1:1466":{"read":[],"write":[]},"1:1472":{"read":[],"write":[]},"1:1473":{"read":[],"write":[]},"1:1474":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"1:1475":{"read":["tt"],"write":["tt"]},"1:1476":{"read":["skipFrame"],"write":["skipFrame"]},"1:1513":{"read":["component","track_mc"],"write":["component"]},"1:1514":{"read":[],"write":[]},"1:1530":{"read":[],"write":[]},"1:1543":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1553":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1562":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1563":{"read":[],"write":[]},"1:1570":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1577":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1582":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1583":{"read":[],"write":[]},"1:1591":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1599":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1607":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1608":{"read":[],"write":[]},"1:1660":{"read":[],"write":[]},"1:1712":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1734":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1747":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1804":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1822":{"read":["i","t_array","ttt"],"write":["i","t_array","ttt"]},"1:1892":{"read":["mc","skipFrame","ttt"],"write":["skipFrame","ttt"]},"1:1895":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1914":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1920":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1925":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:22":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:2256":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:2274":{"read":[],"write":[]},"1:2275":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:2306":{"read":["btn"],"write":[]},"1:2314":{"read":[],"write":[]},"1:2318":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2319":{"read":["_visible"],"write":["_visible"]},"1:234":{"read":[],"write":[]},"1:2363":{"read":[],"write":[]},"1:2366":{"read":["v"],"write":[]},"1:2375":{"read":[],"write":[]},"1:2383":{"read":[],"write":[]},"1:239":{"read":[],"write":[]},"1:2393":{"read":[],"write":[]},"1:2406":{"read":[],"write":[]},"1:2415":{"read":[],"write":[]},"1:2426":{"read":[],"write":[]},"1:2427":{"read":[],"write":[]},"1:2443":{"read":[],"write":[]},"1:247":{"read":[],"write":[]},"1:2490":{"read":["eventNow","mc"],"write":[]},"1:2494":{"read":[],"write":[]},"1:2495":{"read":[],"write":[]},"1:2506":{"read":["mc"],"write":[]},"1:2508":{"read":["_visible","hitted","onEnterFrame"],"write":["_visible","hitted","onEnterFrame"]},"1:2542":{"read":[],"write":[]},"1:255":{"read":[],"write":[]},"1:2561":{"read":[],"write":[]},"1:2562":{"read":["mc","onEnterFrame","tempDepths","xx","yy"],"write":["onEnterFrame","tempDepths","xx","yy"]},"1:2529":{"read":["an","ttt"],"write":["an","ttt"]},"1:2577":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl3","blocks","blockx","blocky","changeMovies","changes","door","events","hitter","i","man","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman","yu"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"1:2368":{"read":[],"write":[]},"1:2564":{"read":[],"write":[]},"1:2591":{"read":[],"write":[]},"1:260":{"read":[],"write":[]},"1:2617":{"read":[],"write":[]},"1:265":{"read":[],"write":[]},"1:2666":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:2698":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:270":{"read":[],"write":[]},"1:2712":{"read":["btn"],"write":[]},"1:2713":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"1:2714":{"read":["btn","gp"],"write":[]},"1:2721":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:2731":{"read":[],"write":[]},"1:2732":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:275":{"read":[],"write":[]},"1:280":{"read":[],"write":[]},"1:285":{"read":[],"write":[]},"1:294":{"read":[],"write":[]},"1:303":{"read":[],"write":[]},"1:308":{"read":[],"write":[]},"1:312":{"read":[],"write":[]},"1:321":{"read":[],"write":[]},"1:338":{"read":[],"write":[]},"1:351":{"read":[],"write":[]},"1:364":{"read":[],"write":[]},"1:379":{"read":[],"write":[]},"1:403":{"read":[],"write":[]},"1:419":{"read":[],"write":[]},"1:433":{"read":[],"write":[]},"1:447":{"read":[],"write":[]},"1:461":{"read":[],"write":[]},"1:475":{"read":[],"write":[]},"1:489":{"read":[],"write":[]},"1:507":{"read":[],"write":[]},"1:523":{"read":[],"write":[]},"1:537":{"read":[],"write":[]},"1:552":{"read":[],"write":[]},"1:568":{"read":[],"write":[]},"1:584":{"read":[],"write":[]},"1:606":{"read":["items"],"write":[]},"1:626":{"read":["items"],"write":[]},"1:646":{"read":[],"write":[]},"1:666":{"read":[],"write":[]},"1:685":{"read":[],"write":[]},"1:686":{"read":[],"write":[]},"1:687":{"read":[],"write":[]},"1:735":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:787":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:805":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:810":{"read":["txt"],"write":[]},"1:834":{"read":[],"write":[]},"1:836":{"read":["_visible"],"write":["_visible"]},"1:917":{"read":[],"write":[]},"1:934":{"read":[],"write":[]},"1:938":{"read":[],"write":[]},"1:953":{"read":[],"write":[]},"1:970":{"read":[],"write":[]},"1:972":{"read":["_visible"],"write":["_visible"]},"1:982":{"read":[],"write":[]},"1:991":{"read":[],"write":[]},"1:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
