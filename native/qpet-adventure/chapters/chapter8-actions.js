/* Native source-derived chapter 8 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c8v0a0(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c8v0a1(ctx,owner){

   ctx.stopDrag(owner);

}

export function c8v0a2(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c8v0a3(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c8v0a4(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c8v0a5(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
      ctx.startDrag(this);
   }

}

export function c8v0a6(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c8v0a7(ctx,owner){

   ctx.graph.play(owner);

}

export function c8v0a8(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c8v0a9(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c8v0a10(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c8v0a11(ctx,owner){

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

export function c8v0a12(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c8v0a13(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c8v0a14(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c8v0a15(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c8v0a16(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c8v0a17(ctx,owner){

   owner._quality = "HIGH";

}

export function c8v0a18(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c8v0a19(ctx,owner){

   owner._quality = "LOW";

}

export function c8v0a20(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c8v0a21(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c8v0a22(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c8v0a23(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c8v0a24(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c8v0a25(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c8v0a26(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c8v0a27(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a28(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a29(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a30(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a31(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a32(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a33(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a34(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a35(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a36(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c8v0a37(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c8v0a38(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c8v0a39(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c8v0a40(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c8v0a41(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c8v0a42(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a43(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c8v0a44(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["_parent"],"an",1);

}

export function c8v0a45(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);

}

export function c8v0a46(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a47(ctx,owner){

}

export function c8v0a48(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c8v0a49(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c8v0a50(ctx,owner){

}

export function c8v0a51(ctx,owner){

}

export function c8v0a52(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a53(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a54(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a55(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a56(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a57(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a58(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a59(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a60(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c8v0a61(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a62(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a63(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a64(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v0a65(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a66(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a67(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a68(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a69(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a70(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a71(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a72(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a73(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a74(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a75(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a76(ctx,owner){
owner._visible = 0;

}

export function c8v0a77(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a78(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a79(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v0a80(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["suook"] == 2))
{
   ctx.graph.goto(owner,"kkk2");
   ctx.graph.play(owner);
}
else
{
   ctx.graph.goto(owner,"kkk1");
   ctx.graph.play(owner);
}

}

export function c8v0a81(ctx,owner){
ctx.graph.goto(owner,"kkk3");
ctx.graph.play(owner);

}

export function c8v0a82(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a83(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a84(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a85(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v0a86(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["suook"] == 2))
{
   ctx.graph.goto(owner,"kkk2");
   ctx.graph.play(owner);
}
else
{
   ctx.graph.goto(owner,"kkk1");
   ctx.graph.play(owner);
}

}

export function c8v0a87(ctx,owner){
ctx.graph.goto(owner,"kkk3");
ctx.graph.play(owner);

}

export function c8v0a88(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a89(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a90(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a91(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a92(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a93(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a94(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v0a95(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a96(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c8v0a97(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c8v0a98(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a99(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a100(ctx,owner){
owner.skipFrame = 0;
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a101(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(8);

}

export function c8v0a102(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a103(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a104(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a105(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v0a106(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a107(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a108(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v0a109(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v0a110(ctx,owner){
ctx.graph.stop(owner);
ctx.stopAllSounds?.();

}

export function c8v0a111(ctx,owner){
ctx.graph.stop(owner);
owner.xxx = (this)?.["_x"];
owner.yyy = (this)?.["_y"];
owner.onMouseUp = function()
{
   var _loc1_ = owner.parent;
   var _loc3_ = this;
   var _loc2_;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(_loc3_)?.["_y"] != owner.yyy)((_loc3_)?.["_x"] != owner.xxx)))
   {
      ctx.trace?.(ctx.add("itemList=",((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
      if(ctx.bool(ctx.hitTest(_loc3_,((_loc1_)?.["_parent"])?.["allShow"])))
      {
         owner.name1 = ((_loc1_)?.["_parent"])?.["allShow"];
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 37:logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 30:logicalLeft)(owner.aim == "item5"))))
         {
            owner.aim = "item6";
            (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
            (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
            ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
            ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
            ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
            ctx.graph.goto(((_loc1_)?.["_parent"])?.["allShow"],owner.aim);
            ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
            ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
            ctx.graph.goto(owner,"item6");
            (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(owner.iii,1);
            _loc2_ = 0;
            while(ctx.bool(ctx.less(_loc2_,(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
            {
               owner.nn = (_loc1_)?.[ctx.add("item",_loc2_)];
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.nn)?.["aim"] == "item4")((owner.nn)?.["aim"] == "item5")))
               {
                  (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.((owner.nn)?.["iii"],1);
                  ctx.graph.remove(owner.nn);
                  _loc2_ = (ctx.num(_loc2_)-ctx.num(1));
               }
               _loc2_ = ctx.add(_loc2_,1);
            }
         }
      }
      _loc2_ = 0;
      while(ctx.bool(ctx.less(_loc2_,(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
      {
         owner.name1 = (_loc1_)?.[ctx.add("item",_loc2_)];
         ctx.trace?.(ctx.add("name1=",owner.name1));
         if(ctx.bool(ctx.hitTest(_loc3_,owner.name1)))
         {
            ctx.trace?.("碰到");
            ctx.trace?.(ctx.add(ctx.add(ctx.add("aim=",owner.aim),"  aim1="),(owner.name1)?.["aim"]));
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item5":logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item4":logicalLeft)(owner.aim == "item5"))))
            {
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(_loc2_,1);
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(owner.iii,1);
               owner.aim = "item6";
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
               ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
               ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
               ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
               ctx.graph.goto(((_loc1_)?.["_parent"])?.["allShow"],owner.aim);
               ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
               ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
               ctx.graph.goto(owner,"item6");
               ctx.graph.remove(owner.name1);
            }
         }
         _loc2_ = ctx.add(_loc2_,1);
      }
   }
   ctx.stopDrag(_loc3_);
   ctx.setField(_loc3_,"_x",owner.xxx);
   ctx.setField(_loc3_,"_y",owner.yyy);
};

}

export function c8v0a112(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c8v0a113(ctx,owner){
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

export function c8v0a114(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c8v0a115(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a116(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a117(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c8v0a118(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a119(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a120(ctx,owner){
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

export function c8v0a121(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c8v0a122(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a123(ctx,owner){
owner.yy = ctx.add((this)?.["_y"],(owner.mc)?.["_y"]);
owner.xx = ctx.add((this)?.["_x"],(owner.mc)?.["_x"]);
owner.tempDepths = ctx.add(ctx.add((ctx.num(owner.yy)*ctx.num(10000)),(ctx.num(owner.xx)*ctx.num(100))),9);
ctx.trace?.(owner.tempDepths);
ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
{
   ctx.graph.swapDepths(this,5000005);
}
else
{
   ctx.graph.swapDepths(this,owner.tempDepths);
}
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

export function c8v0a124(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a125(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a126(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a127(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a128(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a129(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c8v0a130(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a131(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a132(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a133(ctx,owner){
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
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((_loc1_)?.["player"],"_y");
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

export function c8v0a134(ctx,owner){
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
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((_loc1_)?.["player"],"_y");
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

export function c8v0a135(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a136(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a137(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c8v0a138(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a139(ctx,owner){
ctx.graph.play(owner);

}

export function c8v0a140(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80),400)))
{
   ctx.setField((owner.parent)?.["player"],"_x",(this)?.["_x"]);
   ctx.setField((owner.parent)?.["player"],"_y",(this)?.["_y"]);
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80));
}
else
{
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
   ctx.graph.goto(((this)?.["_parent"])?.["_parent"],2);
}

}

export function c8v0a141(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a142(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a143(ctx,owner){
ctx.graph.stop(owner);
owner.num_array = [6,7,13,14,15,9,3,4,10,11];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,18)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"i",(-ctx.num(2)));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.num_array)?.["length"])))
{
   ctx.setField((this)?.[ctx.add("mc",(owner.num_array)?.[owner.i])],"i",owner.i);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.iii = (-ctx.num(1));
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   var _loc2_ = this;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,18)))
   {
      owner.name1 = (_loc2_)?.[ctx.add("mc",owner.i)];
      if(ctx.bool(ctx.hitTest(owner.name1,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.iii == (owner.name1)?.["i"])(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.math)?.["abs"]?.((ctx.num(owner.iii)-ctx.num((owner.name1)?.["i"]))) == 1)(owner.iii == (-ctx.num(1)))):logicalLeft)(owner.iii != (-ctx.num(2)))))
         {
            ctx.trace?.("还好");
            owner.iii = (owner.name1)?.["i"];
         }
         else
         {
            ctx.trace?.("落下");
            ctx.setField((_loc1_)?.["shuai"],"_x",((_loc1_)?.["player"])?.["_x"]);
            ctx.setField((_loc1_)?.["shuai"],"_y",((_loc1_)?.["player"])?.["_y"]);
            ctx.graph.goto((_loc1_)?.["shuai"],2,{play:true});
            ctx.graph.goto(owner,2,{play:true});
            ctx.setField((_loc1_)?.["player"],"_x",30000);
            ctx.deleteField(owner,"onEnterFrame");
         }
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
};

}

export function c8v0a144(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a145(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a146(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",(owner.parent)?.["map"]);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map2");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"qqdown",1);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c8v0a147(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a148(ctx,owner){
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
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((_loc1_)?.["player"],"_y");
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

export function c8v0a149(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a150(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a151(ctx,owner){
ctx.graph.stop(owner);
owner.num_array = [6,7,8,14,15,9,10,4,5,11];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,18)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"i",(-ctx.num(2)));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.num_array)?.["length"])))
{
   ctx.setField((this)?.[ctx.add("mc",(owner.num_array)?.[owner.i])],"i",owner.i);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.iii = (-ctx.num(1));
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   var _loc2_ = this;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,18)))
   {
      owner.name1 = (_loc2_)?.[ctx.add("mc",owner.i)];
      if(ctx.bool(ctx.hitTest(owner.name1,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.iii == (owner.name1)?.["i"])(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.math)?.["abs"]?.((ctx.num(owner.iii)-ctx.num((owner.name1)?.["i"]))) == 1)(owner.iii == (-ctx.num(1)))):logicalLeft)(owner.iii != (-ctx.num(2)))))
         {
            ctx.trace?.("还好");
            owner.iii = (owner.name1)?.["i"];
         }
         else
         {
            ctx.trace?.("落下");
            ctx.setField((_loc1_)?.["shuai"],"_x",((_loc1_)?.["player"])?.["_x"]);
            ctx.setField((_loc1_)?.["shuai"],"_y",((_loc1_)?.["player"])?.["_y"]);
            ctx.graph.goto((_loc1_)?.["shuai"],2,{play:true});
            ctx.graph.goto(owner,2,{play:true});
            ctx.setField((_loc1_)?.["player"],"_x",30000);
            ctx.deleteField(owner,"onEnterFrame");
         }
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
};

}

export function c8v0a152(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a153(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map1";
owner.appearx = 525;
owner.appeary = 232;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","d2"));
ctx.setField(owner.topBlock,"_visible",false);
owner.events = ["event1","event2"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event3","event000"];
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
ctx.graph.goto(owner.hitter,2);
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
ctx.graph.swapDepths(owner.bl8,5000008);

}

export function c8v0a154(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c8v0a155(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],1);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
      }
   }

}

export function c8v0a156(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c8v0a157(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.talkArea0xxx = (owner.talkArea0)?.["_x"];
ctx.setField(owner.talkArea0,"_x",(-ctx.num(3000)));
owner.map = "map2";
owner.talkTxts = [];
owner.talkObj = [];
owner.talkDirs = [];
owner.talkNext = [];
owner.talkAreas = [];
(owner.talkTxts)?.["push"]?.("哎吆，哎吆……我的腰…");
(owner.talkObj)?.["push"]?.("map.point0");
(owner.talkDirs)?.["push"]?.(3);
(owner.talkNext)?.["push"]?.(0);
(owner.talkAreas)?.["push"]?.("talkArea0");
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   owner.events = ["event6"];
   ctx.graph.goto(owner.bl2,2);
   ctx.graph.goto(owner.bl8,"kkk");
   ctx.graph.goto((owner.hitter)?.["mc1"],1);
   (owner.talkTxts)?.["push"]?.("你继续前进吧，我们守住这里。","哥哥加油！","去吧，现在就看你的了！");
   (owner.talkObj)?.["push"]?.("map.point1","map.point2","map.point3");
   (owner.talkDirs)?.["push"]?.(1,1,1);
   (owner.talkNext)?.["push"]?.(0,0,0);
   (owner.talkAreas)?.["push"]?.("talkArea1","talkArea2","talkArea3");
}
else
{
   owner.events = ["event4"];
   ctx.graph.goto(owner.bl2,1);
   ctx.graph.goto((owner.hitter)?.["mc1"],2);
}
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map1":
      owner.appearx = 91;
      owner.appeary = 357;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         owner.appearx = 55;
         owner.appeary = 32;
         owner._temp_4 = owner.parent;
         owner._temp_3 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
         ctx.graph.goto(owner.hitter,3);
      }
      else
      {
         ctx.trace?.("跌下");
         owner.appearx = (-ctx.num(300));
         owner.appeary = (-ctx.num(300));
         ctx.graph.goto(owner.hitter,2);
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,5);
         ctx.setField(owner.player,"_x",(-ctx.num(3000)));
         ctx.graph.goto(owner.shuai1,2,{play:true});
         ctx.trace?.(owner.shuai1);
         owner._temp_6 = owner.parent;
         owner._temp_5 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      }
      break;
   case "map6":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         owner.appearx = 723;
         owner.appeary = 267;
         owner._temp_8 = owner.parent;
         owner._temp_7 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
         ctx.graph.goto(owner.hitter,3);
      }
      else
      {
         ctx.trace?.("跌下");
         owner.appearx = (-ctx.num(300));
         owner.appeary = (-ctx.num(300));
         ctx.graph.goto(owner.hitter,2);
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,5);
         ctx.setField(owner.player,"_x",(-ctx.num(3000)));
         ctx.graph.goto(owner.shuai2,2,{play:true});
         owner._temp_10 = owner.parent;
         owner._temp_9 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
      }
}
if(ctx.bool((owner.parent)?.["event5"] == 1))
{
   ctx.graph.goto((owner.hitter)?.["mc"],1);
   ctx.graph.goto(owner.bl4,"kkk");
   ctx.setField(owner.talkArea0,"_x",owner.talkArea0xxx);
}
else
{
   ctx.graph.goto((owner.hitter)?.["mc"],2);
   ctx.graph.goto(owner.bl4,1);
}
if(ctx.bool((owner.parent)?.["even2"] != 1))
{
   ctx.setField(owner.even2,"onEnterFrame",function()
   {
      var _loc1_ = this;
      if(ctx.bool(ctx.hitTest(_loc1_,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.bl5);
         ctx.setField(owner.parent,"even2",1);
         (owner.parent)?.["fight"]?.((_loc1_)?.["_name"],owner.bl5,1);
         ctx.setField(_loc1_,"onEnterFrame",undefined);
      }
   });
}
else
{
   ctx.setField(owner.bl5,"_visible",0);
}
if(ctx.bool((owner.parent)?.["even3"] != 1))
{
   ctx.setField(owner.even3,"onEnterFrame",function()
   {
      var _loc1_ = this;
      if(ctx.bool(ctx.hitTest(_loc1_,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.bl6);
         ctx.setField(owner.parent,"even3",1);
         (owner.parent)?.["fight"]?.((_loc1_)?.["_name"],owner.bl6,1);
         ctx.setField(_loc1_,"onEnterFrame",undefined);
      }
   });
}
else
{
   ctx.setField(owner.bl6,"_visible",0);
}
ctx.trace?.(ctx.add("_parent.suook=",(owner.parent)?.["suook"]));
ctx.setField(owner.bl7,"_visible",0);
if(ctx.bool((owner.parent)?.["suook"] == 2))
{
   ctx.graph.goto((owner.hitter)?.["mc"],2);
   ctx.graph.goto(owner.bl4,1);
   owner.talkTxts = [];
   owner.talkObj = [];
   owner.talkDirs = [];
   owner.talkNext = [];
   owner.talkAreas = [];
   if(ctx.bool((owner.parent)?.["even4"] != 1))
   {
      ctx.setField(owner.bl7,"_visible",true);
      ctx.setField(owner.even4,"onEnterFrame",function()
      {
         var _loc1_ = owner.parent;
         var _loc2_ = this;
         if(ctx.bool(ctx.hitTest(_loc2_,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
         {
            ctx.setField(_loc1_,"afterMovieEvent",7);
            ctx.graph.stop(owner.bl7);
            ctx.setField(_loc1_,"even4",1);
            (_loc1_)?.["fight"]?.((_loc2_)?.["_name"],owner.bl7,3);
            ctx.setField(_loc2_,"onEnterFrame",undefined);
         }
      });
   }
   else
   {
      ctx.setField(owner.bl7,"_visible",0);
   }
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 60;
owner.playerScale = 60;
ctx.setField(owner.hitter,"_visible",0);
owner.changes = ["map3"];
owner.changeMovies = ["event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 0;
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
   owner._temp_12 = owner.player;
   owner._temp_11 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_12,owner._temp_11,owner._loc0_);
}
else
{
   owner._temp_14 = owner.player;
   owner._temp_13 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_14,owner._temp_13,owner._loc0_);
}
switch((owner.parent)?.["oldMap"])
{
   case "map6":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,3);
         ctx.setField(owner.changes,1,"map6");
         ctx.graph.swapDepths(owner.bl3,5);
      }
      else
      {
         ctx.graph.swapDepths(owner.bl1,5);
      }
      break;
   case "map3":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,3);
      }
      else
      {
         ctx.graph.swapDepths(owner.bl1,5);
      }
}
ctx.graph.swapDepths(owner.bl5,5000001);
ctx.graph.swapDepths(owner.bl6,5000002);
ctx.graph.swapDepths(owner.bl7,5000003);
if(ctx.bool((owner.parent)?.["qqdown"] == 1))
{
   ctx.setField(owner.parent,"qqdown",0);
}

}

export function c8v0a158(ctx,owner){

   if(ctx.bool(((owner.parent)?.["_parent"])?.["event5"] == 0))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.setField((owner.parent)?.["_parent"],"event5",1);
         ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
         ctx.graph.goto((owner.parent)?.["bl4"],2,{play:true});
         ctx.setField((owner.parent)?.["talkArea0"],"_x",(owner.parent)?.["talkArea0xxx"]);
      }
   }

}

export function c8v0a159(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],1);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl1"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl1"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v0a160(ctx,owner){

   owner.ff = 1;

}

export function c8v0a161(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],5);
         }
      }
   }

}

export function c8v0a162(ctx,owner){

   owner.ff = 1;

}

export function c8v0a163(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],1);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl1"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl1"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v0a164(ctx,owner){

   owner.ff = 1;

}

export function c8v0a165(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],1);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl1"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl1"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v0a166(ctx,owner){

   owner.ff = 1;

}

export function c8v0a167(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event4"] == 1))
            {
               ctx.setField((owner.parent)?.["changes"],1,"map6");
               ctx.graph.goto((owner.parent)?.["hitter"],3);
               ctx.graph.swapDepths((owner.parent)?.["bl3"],5);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("应该再仔细搜索一下");
            }
         }
      }
   }

}

export function c8v0a168(ctx,owner){

   owner.ff = 1;

}

export function c8v0a169(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v0a170(ctx,owner){

   owner.ff = 1;

}

export function c8v0a171(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.setField((owner.parent)?.["changes"],1,"");
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v0a172(ctx,owner){

   owner.ff = 1;

}

export function c8v0a173(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event4"] == 1))
            {
               ctx.setField((owner.parent)?.["changes"],1,"map6");
               ctx.graph.goto((owner.parent)?.["hitter"],3);
               ctx.graph.swapDepths((owner.parent)?.["bl3"],5);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("应该再仔细搜索一下");
            }
         }
      }
   }

}

export function c8v0a174(ctx,owner){

   owner.ff = 1;

}

export function c8v0a175(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.setField((owner.parent)?.["changes"],1,"");
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v0a176(ctx,owner){

   owner.ff = 1;

}

export function c8v0a177(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v0a178(ctx,owner){

   owner.ff = 1;

}

export function c8v0a179(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map3";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 308;
      owner.appeary = 363;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 69;
      owner.appeary = 95;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 744;
      owner.appeary = 221;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
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
owner.changes = ["map4","map5","map2"];
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
ctx.graph.swapDepths(owner.xman,5000005);

}

export function c8v0a180(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map4";
owner.appearx = 688;
owner.appeary = 371;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
if(ctx.bool((owner.parent)?.["event7"] == 0))
{
   owner.events = ["event7"];
   ctx.graph.goto(owner.bl1,1);
   ctx.graph.goto((owner.hitter)?.["mc"],1);
}
else
{
   ctx.graph.goto(owner.bl1,2);
   ctx.graph.goto((owner.hitter)?.["mc"],2);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map3"];
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v0a181(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map5";
owner.appearx = 100;
owner.appeary = 371;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map3"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.kong,"kkk");
}
else
{
   owner.events = ["event8"];
}
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v0a182(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map6";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 448;
      owner.appeary = 390;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map7":
      owner.appearx = 714;
      owner.appeary = 96;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map8":
      owner.appearx = 20;
      owner.appeary = 210;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
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
owner.changes = ["map7","map8","map2"];
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
ctx.graph.swapDepths(owner.xman,5000005);

}

export function c8v0a183(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map7";
owner.appearx = 75;
owner.appeary = 356;
if(ctx.bool((owner.parent)?.["event9"] == 0))
{
   owner.events = ["event9"];
}
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wd2"));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map6"];
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v0a184(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map8";
owner.appearx = 616;
owner.appeary = 385;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
if(ctx.bool((owner.parent)?.["event10"] == 1))
{
   ctx.graph.goto(owner.kong,"kkk");
}
else
{
   owner.events = ["event10"];
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map6"];
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v0a185(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a186(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a187(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a188(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c8v0a189(ctx,owner){
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

export function c8v0a190(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c8v0a191(ctx,owner){
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

export function c8v0a192(ctx,owner){

   ctx.graph.goto(owner,(((((owner.parent)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c8v0a193(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a194(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a195(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c8v0a196(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c8v0a197(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c8v0a198(ctx,owner){
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

export function c8v0a199(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c8v0a200(ctx,owner){
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

export function c8v0a201(ctx,owner){
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

export function c8v0a202(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c8v0a203(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a204(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a205(ctx,owner){
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

export function c8v0a206(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c8v0a207(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c8v0a208(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a209(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a210(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a211(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v0a212(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v0a213(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a214(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a215(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a216(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a217(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a218(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a219(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a220(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a221(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a222(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a223(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool((owner.parent)?.["npcType"] != 2))
{
   ctx.stopAllSounds?.();
   ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);
}
else
{
   ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);
}

}

export function c8v0a224(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c8v0a225(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a226(ctx,owner){
owner._visible = 0;

}

export function c8v0a227(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a228(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a229(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a230(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a231(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a232(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a233(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a234(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a235(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a236(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a237(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a238(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a239(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a240(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a241(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v0a242(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c8v0a243(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c8v0a244(ctx,owner){
owner._visible = 0;

}

export function c8v0a245(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a246(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a247(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c8v0a248(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a249(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a250(ctx,owner){
owner._visible = 0;

}

export function c8v0a251(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a252(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a253(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a254(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a255(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a256(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a257(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a258(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a259(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a260(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a261(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a262(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v0a263(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v0a264(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v0a265(ctx,owner){
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
   owner.npcType = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["bgFrame"];
   ctx.graph.goto(owner.touxiang,((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["bgFrame"]);
   ctx.setField((owner.life1)?.["bar"],"_xscale",(ctx.num((ctx.num(400)-ctx.num(((((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"])))/ctx.num(4)));
   ctx.setField(owner.os,"_visible",0);
   owner.scoreHit = 3;
   owner.scoreWhack = 8;
   owner.scoreJH = 5;
   owner.ngoBack = 1;
   if(ctx.bool(owner.npcType == 1))
   {
      owner.scoreHit = 3;
      owner.scoreWhack = 8;
      owner.scoreJH = 5;
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
   else if(ctx.bool(owner.npcType == 2))
   {
      owner.scoreHit = 1;
      owner.scoreWhack = 1;
      owner.scoreJH = 1;
      owner.nscoreHit = 30;
      owner.nscoreWhack = 30;
      owner.nscoreJH = 40;
      owner.h1r = 3;
      owner.h2r = 1;
      owner.hjr = 1;
      owner.jr = 1;
      owner.dr = 30;
      owner.dhr = 30;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,2);
      ctx.graph.goto(owner,2);
   }
   else
   {
      owner.scoreHit = 13;
      owner.scoreWhack = 18;
      owner.scoreJH = 11;
      owner.nscoreHit = 9;
      owner.nscoreWhack = 13;
      owner.nscoreJH = 10;
      owner.h1r = 6;
      owner.h2r = 3;
      owner.hjr = 4;
      owner.jr = 3;
      owner.dr = 7;
      owner.dhr = 10;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,2);
      ctx.graph.goto(owner,3);
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
   ctx.graph.goto((((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],(ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
   ctx.trace?.((ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
};
owner.gameOver = function(){
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Over"));
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,"Stand"));
   owner.onEnterFrame = undefined;
   ctx.setField(owner.os,"_visible",1);
   ctx.graph.goto(owner.os,"fail",{play:true});
   if(ctx.bool(owner.npcType != 2))
   {
      ctx.graph.goto((((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],(ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
   }
   ctx.trace?.((ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c8v0a266(ctx,owner){
if(ctx.bool((((owner.parent)?.["_parent"])?.["_parent"])?.["bgFrame"] == 2))
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

export function c8v0a267(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c8v0a268(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c8v0a269(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v0a270(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c8v0a271(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a272(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a273(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a274(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a275(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a276(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a277(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a278(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a279(ctx,owner){

}

export function c8v0a280(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v0a281(ctx,owner){
owner.init = function(){
   owner.suook = 0;
   owner.even4 = owner.even3 = owner.even2 = 0;
   owner.afterMovieEvent = 6;
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
                     if(ctx.bool(owner.event1 == 0))
                     {
                        owner.event1 = 1;
                        ctx.setField(owner.map,"changes",["map2"]);
                        (owner.getItem)?.["start"]?.();
                        ctx.graph.goto((owner.map)?.["wang"],2);
                        (owner.itemList)?.["push"]?.("item2");
                        ctx.graph.goto(owner.itemShow,"item2");
                        owner.itemNow = "item2";
                        owner.etShow?.("您得到了魔法吊坠");
                     }
                     break;
                  case "event2":
                     if(ctx.bool(owner.event1 == 0))
                     {
                        owner.etShow?.("好像应该再搜索一下那个怪物");
                     }
                     break;
                  case "event4":
                     if(ctx.bool(owner.event4 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item2"))
                        {
                           owner.event4 = 1;
                           owner.afterMovieEvent = 9;
                           ((owner.map)?.["talkTxts"])?.["push"]?.("你继续前进吧，我们守住这里。","哥哥加油！","去吧，现在就看你的了！");
                           ((owner.map)?.["talkObj"])?.["push"]?.("map.point1","map.point2","map.point3");
                           ((owner.map)?.["talkDirs"])?.["push"]?.(1,1,1);
                           ((owner.map)?.["talkNext"])?.["push"]?.(0,0,0);
                           ((owner.map)?.["talkAreas"])?.["push"]?.("talkArea1","talkArea2","talkArea3");
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["mc1"],1);
                           ctx.graph.goto((owner.map)?.["bl2"],2);
                           i = 0;
                           while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                           {
                              if(ctx.bool((owner.itemList)?.[i] == "item2"))
                              {
                                 (owner.itemList)?.["splice"]?.(i,1);
                              }
                              ((old)=>(i=old+1,old))(ctx.num(i));
                           }
                           ctx.setField(owner.map,"events",["event6"]);
                           owner.itemNow = (owner.itemList)?.[0];
                           ctx.graph.goto(owner.itemShow,owner.itemNow);
                           ctx.trace?.(ctx.add("******",(owner.map)?.["bl2"]));
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,"event4","event4",0);
                        }
                        else
                        {
                           owner.etShow?.("应该可以把什么东西放进去");
                        }
                     }
                     break;
                  case "event6":
                     ctx.trace?.(111111);
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     if(ctx.bool(owner.event7 == 0))
                     {
                        owner.event7 = 1;
                        ctx.graph.goto((owner.map)?.["bl1"],2);
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc"],2);
                        (owner.getItem)?.["start"]?.();
                        ctx.graph.goto((owner.map)?.["wang"],2);
                        (owner.itemList)?.["push"]?.("item3");
                        ctx.graph.goto(owner.itemShow,"item3");
                        owner.itemNow = "item3";
                        owner.etShow?.("您得到了无私的美德之杖");
                     }
                     break;
                  case "event8":
                     if(ctx.bool(owner.event8 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item3"))
                        {
                           if(ctx.bool(owner.suook == 1))
                           {
                              owner.suook = 2;
                           }
                           else
                           {
                              owner.suook = 1;
                           }
                           i = 0;
                           while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                           {
                              if(ctx.bool((owner.itemList)?.[i] == "item3"))
                              {
                                 (owner.itemList)?.["splice"]?.(i,1);
                              }
                              ((old)=>(i=old+1,old))(ctx.num(i));
                           }
                           ctx.graph.goto((owner.map)?.["kong"],2,{play:true});
                           owner.itemNow = (owner.itemList)?.[0];
                           ctx.graph.goto(owner.itemShow,owner.itemNow);
                           owner.event8 = 1;
                           owner.afterMovieEvent = 1;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("需要钥匙来转动");
                        }
                     }
                     break;
                  case "event9":
                     ctx.trace?.("11111111####");
                     if(ctx.bool(owner.event9 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item1"))
                        {
                           owner.event9 = 1;
                           owner.afterMovieEvent = 2;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("好象原来插着什么东西");
                        }
                     }
                     break;
                  case "event10":
                     if(ctx.bool(owner.event10 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item4"))
                        {
                           if(ctx.bool(owner.suook == 1))
                           {
                              owner.suook = 2;
                           }
                           else
                           {
                              owner.suook = 1;
                           }
                           owner.event10 = 1;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else if(ctx.bool(owner.itemNow == "item1"))
                        {
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
                           owner.etShow?.("需要钥匙来转动");
                        }
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc13"],2);
                        owner.event13 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 13;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event14":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc14"],2);
                        owner.event14 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 14;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event15":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc15"],2);
                        owner.event15 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 15;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event16":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc16"],2);
                        owner.event16 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 16;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event18":
                     ctx.graph.goto((owner.map)?.["kulou"],2);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["mc"],2);
                     (owner.getItem)?.["start"]?.();
                     owner.event18 = 1;
                     (owner.itemList)?.["push"]?.("item4");
                     ctx.graph.goto(owner.itemShow,"item4");
                     owner.itemNow = "item4";
                     owner.etShow?.("一个可怜的家伙");
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
         owner.afterMovieEvent = 0;
         break;
      case 2:
         owner.i = 0;
         while(ctx.bool(ctx.less(owner.i,(owner.itemList)?.["length"])))
         {
            if(ctx.bool((owner.itemList)?.[owner.i] == "item1"))
            {
               (owner.itemList)?.["splice"]?.(owner.i,1);
            }
            ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
         }
         ctx.graph.goto((owner.map)?.["kong"],"kkk");
         (owner.getItem)?.["start"]?.();
         ctx.graph.goto((owner.map)?.["wang"],2);
         (owner.itemList)?.["push"]?.("item4");
         ctx.graph.goto(owner.itemShow,"item4");
         owner.itemNow = "item4";
         owner.etShow?.("勇敢的荣誉之剑已被唤醒");
         owner.afterMovieEvent = 0;
         break;
      case 3:
         ctx.graph.goto((owner.map)?.["shu"],2);
         owner.afterMovieEvent = 0;
         break;
      case 4:
         owner.fight?.("","",2);
         owner.afterMovieEvent = 5;
         break;
      case 5:
         owner.getEventShow = 0;
         owner.gamePausing?.();
         owner.eventStep = 0;
         ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
         ctx.setField(owner.movie,"_visible",0);
         owner.eventNow = "opening1";
         ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
         owner.afterMovieEvent = 8;
         ctx.graph.goto((owner.map)?.["bl8"],2,{play:true});
         break;
      case 6:
         owner.afterMovieEvent = 4;
         break;
      case 7:
         owner.getEventShow = 0;
         owner.gamePausing?.();
         owner.eventStep = 0;
         ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
         ctx.setField(owner.movie,"_visible",0);
         owner.eventNow = "end";
         ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
         owner.afterMovieEvent = 0;
         break;
      case 8:
         ctx.setField(owner.lifemc,"_visible",1);
         ctx.setField(owner.lifeBar,"_visible",1);
         ctx.setField(owner.showmc,"_visible",1);
         ctx.setField(owner.itemShow,"_visible",1);
         owner.afterMovieEvent = 0;
         break;
      case 9:
         ctx.graph.goto((owner.map)?.["bl8"],2,{play:true});
         owner.afterMovieEvent = 0;
      default:
         return;
   }
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();
(owner.itemList)?.["push"]?.("item1");
ctx.graph.goto(owner.itemShow,"item1");
owner.itemNow = "item1";
ctx.setField(owner.lifemc,"_visible",false);
ctx.setField(owner.lifeBar,"_visible",false);
ctx.setField(owner.showmc,"_visible",false);
ctx.setField(owner.itemShow,"_visible",false);

}

export function c8v0a282(ctx,owner){
owner.oldMap = "";

}

export function c8v1a283(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c8v1a284(ctx,owner){

   ctx.stopDrag(owner);

}

export function c8v1a285(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c8v1a286(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c8v1a287(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c8v1a288(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
      ctx.startDrag(this);
   }

}

export function c8v1a289(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c8v1a290(ctx,owner){

   ctx.graph.play(owner);

}

export function c8v1a291(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c8v1a292(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c8v1a293(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c8v1a294(ctx,owner){

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

export function c8v1a295(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c8v1a296(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c8v1a297(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c8v1a298(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c8v1a299(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c8v1a300(ctx,owner){

   owner._quality = "HIGH";

}

export function c8v1a301(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c8v1a302(ctx,owner){

   owner._quality = "LOW";

}

export function c8v1a303(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c8v1a304(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c8v1a305(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c8v1a306(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c8v1a307(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c8v1a308(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c8v1a309(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c8v1a310(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a311(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a312(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a313(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a314(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a315(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a316(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a317(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a318(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a319(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a320(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a321(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a322(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a323(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a324(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a325(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a326(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a327(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c8v1a328(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("gp=",(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]));
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c8v1a329(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a330(ctx,owner){

}

export function c8v1a331(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c8v1a332(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c8v1a333(ctx,owner){

}

export function c8v1a334(ctx,owner){

}

export function c8v1a335(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a336(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a337(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a338(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a339(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a340(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a341(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a342(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a343(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c8v1a344(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a345(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a346(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a347(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c8v1a348(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a349(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a350(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a351(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a352(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a353(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a354(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a355(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a356(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a357(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a358(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a359(ctx,owner){
owner._visible = 0;

}

export function c8v1a360(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a361(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a362(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v1a363(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["suook"] == 2))
{
   ctx.graph.goto(owner,"kkk2");
   ctx.graph.play(owner);
}
else
{
   ctx.graph.goto(owner,"kkk1");
   ctx.graph.play(owner);
}

}

export function c8v1a364(ctx,owner){
ctx.graph.goto(owner,"kkk3");
ctx.graph.play(owner);

}

export function c8v1a365(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a366(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a367(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a368(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a369(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v1a370(ctx,owner){
if(ctx.bool(((owner.parent)?.["_parent"])?.["suook"] == 2))
{
   ctx.graph.goto(owner,"kkk2");
   ctx.graph.play(owner);
}
else
{
   ctx.graph.goto(owner,"kkk1");
   ctx.graph.play(owner);
}

}

export function c8v1a371(ctx,owner){
ctx.graph.goto(owner,"kkk3");
ctx.graph.play(owner);

}

export function c8v1a372(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a373(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a374(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a375(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a376(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a377(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v1a378(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c8v1a379(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c8v1a380(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a381(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a382(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a383(ctx,owner){
owner.skipFrame = 0;
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a384(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(8);

}

export function c8v1a385(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a386(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a387(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a388(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v1a389(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a390(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a391(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c8v1a392(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c8v1a393(ctx,owner){
ctx.graph.stop(owner);
ctx.stopAllSounds?.();

}

export function c8v1a394(ctx,owner){
ctx.graph.stop(owner);
owner.xxx = (this)?.["_x"];
owner.yyy = (this)?.["_y"];
owner.onMouseUp = function()
{
   var _loc1_ = owner.parent;
   var _loc3_ = this;
   var _loc2_;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(_loc3_)?.["_y"] != owner.yyy)((_loc3_)?.["_x"] != owner.xxx)))
   {
      ctx.trace?.(ctx.add("itemList=",((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
      if(ctx.bool(ctx.hitTest(_loc3_,((_loc1_)?.["_parent"])?.["allShow"])))
      {
         owner.name1 = ((_loc1_)?.["_parent"])?.["allShow"];
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 37:logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 30:logicalLeft)(owner.aim == "item5"))))
         {
            owner.aim = "item6";
            (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
            (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
            ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
            ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
            ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
            ctx.graph.goto(((_loc1_)?.["_parent"])?.["allShow"],owner.aim);
            ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
            ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
            ctx.graph.goto(owner,"item6");
            (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(owner.iii,1);
            _loc2_ = 0;
            while(ctx.bool(ctx.less(_loc2_,(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
            {
               owner.nn = (_loc1_)?.[ctx.add("item",_loc2_)];
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.nn)?.["aim"] == "item4")((owner.nn)?.["aim"] == "item5")))
               {
                  (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.((owner.nn)?.["iii"],1);
                  ctx.graph.remove(owner.nn);
                  _loc2_ = (ctx.num(_loc2_)-ctx.num(1));
               }
               _loc2_ = ctx.add(_loc2_,1);
            }
         }
      }
      _loc2_ = 0;
      while(ctx.bool(ctx.less(_loc2_,(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
      {
         owner.name1 = (_loc1_)?.[ctx.add("item",_loc2_)];
         ctx.trace?.(ctx.add("name1=",owner.name1));
         if(ctx.bool(ctx.hitTest(_loc3_,owner.name1)))
         {
            ctx.trace?.("碰到");
            ctx.trace?.(ctx.add(ctx.add(ctx.add("aim=",owner.aim),"  aim1="),(owner.name1)?.["aim"]));
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item5":logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item4":logicalLeft)(owner.aim == "item5"))))
            {
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(_loc2_,1);
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(owner.iii,1);
               owner.aim = "item6";
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
               (((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
               ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
               ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
               ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
               ctx.graph.goto(((_loc1_)?.["_parent"])?.["allShow"],owner.aim);
               ctx.graph.goto(((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
               ctx.setField((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
               ctx.graph.goto(owner,"item6");
               ctx.graph.remove(owner.name1);
            }
         }
         _loc2_ = ctx.add(_loc2_,1);
      }
   }
   ctx.stopDrag(_loc3_);
   ctx.setField(_loc3_,"_x",owner.xxx);
   ctx.setField(_loc3_,"_y",owner.yyy);
};

}

export function c8v1a395(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c8v1a396(ctx,owner){
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

export function c8v1a397(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c8v1a398(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a399(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a400(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c8v1a401(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a402(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a403(ctx,owner){
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

export function c8v1a404(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c8v1a405(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a406(ctx,owner){
owner.yy = ctx.add((this)?.["_y"],(owner.mc)?.["_y"]);
owner.xx = ctx.add((this)?.["_x"],(owner.mc)?.["_x"]);
owner.tempDepths = ctx.add(ctx.add((ctx.num(owner.yy)*ctx.num(10000)),(ctx.num(owner.xx)*ctx.num(100))),9);
ctx.trace?.(owner.tempDepths);
ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
{
   ctx.graph.swapDepths(this,5000005);
}
else
{
   ctx.graph.swapDepths(this,owner.tempDepths);
}
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

export function c8v1a407(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a408(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a409(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a410(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a411(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a412(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c8v1a413(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a414(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a415(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a416(ctx,owner){
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
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((_loc1_)?.["player"],"_y");
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

export function c8v1a417(ctx,owner){
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
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((_loc1_)?.["player"],"_y");
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

export function c8v1a418(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a419(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a420(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c8v1a421(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a422(ctx,owner){
ctx.graph.play(owner);

}

export function c8v1a423(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80),400)))
{
   ctx.setField((owner.parent)?.["player"],"_x",(this)?.["_x"]);
   ctx.setField((owner.parent)?.["player"],"_y",(this)?.["_y"]);
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],80));
}
else
{
   ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
   ctx.graph.goto(((this)?.["_parent"])?.["_parent"],2);
}

}

export function c8v1a424(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a425(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a426(ctx,owner){
ctx.graph.stop(owner);
owner.num_array = [6,7,13,14,15,9,3,4,10,11];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,18)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"i",(-ctx.num(2)));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.num_array)?.["length"])))
{
   ctx.setField((this)?.[ctx.add("mc",(owner.num_array)?.[owner.i])],"i",owner.i);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.iii = (-ctx.num(1));
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   var _loc2_ = this;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,18)))
   {
      owner.name1 = (_loc2_)?.[ctx.add("mc",owner.i)];
      if(ctx.bool(ctx.hitTest(owner.name1,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.iii == (owner.name1)?.["i"])(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.math)?.["abs"]?.((ctx.num(owner.iii)-ctx.num((owner.name1)?.["i"]))) == 1)(owner.iii == (-ctx.num(1)))):logicalLeft)(owner.iii != (-ctx.num(2)))))
         {
            ctx.trace?.("还好");
            owner.iii = (owner.name1)?.["i"];
         }
         else
         {
            ctx.trace?.("落下");
            ctx.setField((_loc1_)?.["shuai"],"_x",((_loc1_)?.["player"])?.["_x"]);
            ctx.setField((_loc1_)?.["shuai"],"_y",((_loc1_)?.["player"])?.["_y"]);
            ctx.graph.goto((_loc1_)?.["shuai"],2,{play:true});
            ctx.graph.goto(owner,2,{play:true});
            ctx.setField((_loc1_)?.["player"],"_x",30000);
            ctx.deleteField(owner,"onEnterFrame");
         }
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
};

}

export function c8v1a427(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a428(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a429(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",(owner.parent)?.["map"]);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map2");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"qqdown",1);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c8v1a430(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a431(ctx,owner){
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
         ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],ctx.bool(owner.oy == ((_loc1_)?.["player"])?.["_y"]) ? 0 : (ctx.num((ctx.num(((_loc1_)?.["player"])?.["_y"])-ctx.num(owner.oy)))/ctx.num(1.4)))))((_loc1_)?.["player"],"_y");
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

export function c8v1a432(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a433(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a434(ctx,owner){
ctx.graph.stop(owner);
owner.num_array = [6,7,8,14,15,9,10,4,5,11];
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,18)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"i",(-ctx.num(2)));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.i = 0;
while(ctx.bool(ctx.less(owner.i,(owner.num_array)?.["length"])))
{
   ctx.setField((this)?.[ctx.add("mc",(owner.num_array)?.[owner.i])],"i",owner.i);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
owner.iii = (-ctx.num(1));
owner.onEnterFrame = function()
{
   var _loc1_ = owner.parent;
   var _loc2_ = this;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,18)))
   {
      owner.name1 = (_loc2_)?.[ctx.add("mc",owner.i)];
      if(ctx.bool(ctx.hitTest(owner.name1,((_loc1_)?.["player"])?.["_x"],((_loc1_)?.["player"])?.["_y"],true)))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.iii == (owner.name1)?.["i"])(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.math)?.["abs"]?.((ctx.num(owner.iii)-ctx.num((owner.name1)?.["i"]))) == 1)(owner.iii == (-ctx.num(1)))):logicalLeft)(owner.iii != (-ctx.num(2)))))
         {
            ctx.trace?.("还好");
            owner.iii = (owner.name1)?.["i"];
         }
         else
         {
            ctx.trace?.("落下");
            ctx.setField((_loc1_)?.["shuai"],"_x",((_loc1_)?.["player"])?.["_x"]);
            ctx.setField((_loc1_)?.["shuai"],"_y",((_loc1_)?.["player"])?.["_y"]);
            ctx.graph.goto((_loc1_)?.["shuai"],2,{play:true});
            ctx.graph.goto(owner,2,{play:true});
            ctx.setField((_loc1_)?.["player"],"_x",30000);
            ctx.deleteField(owner,"onEnterFrame");
         }
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
};

}

export function c8v1a435(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a436(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map1";
owner.appearx = 525;
owner.appeary = 232;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","d2"));
ctx.setField(owner.topBlock,"_visible",false);
owner.events = ["event1","event2"];
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 35;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event3","event000"];
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
ctx.graph.goto(owner.hitter,2);
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
ctx.graph.swapDepths(owner.bl8,5000008);

}

export function c8v1a437(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c8v1a438(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],1);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
      }
   }

}

export function c8v1a439(ctx,owner){

   if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.graph.goto((owner.parent)?.["hitter"],2);
         ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
      }
   }

}

export function c8v1a440(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.talkArea0xxx = (owner.talkArea0)?.["_x"];
ctx.setField(owner.talkArea0,"_x",(-ctx.num(3000)));
owner.map = "map2";
owner.talkTxts = [];
owner.talkObj = [];
owner.talkDirs = [];
owner.talkNext = [];
owner.talkAreas = [];
(owner.talkTxts)?.["push"]?.("哎吆，哎吆……我的腰…");
(owner.talkObj)?.["push"]?.("map.point0");
(owner.talkDirs)?.["push"]?.(3);
(owner.talkNext)?.["push"]?.(0);
(owner.talkAreas)?.["push"]?.("talkArea0");
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   owner.events = ["event6"];
   ctx.graph.goto(owner.bl2,2);
   ctx.graph.goto(owner.bl8,"kkk");
   ctx.graph.goto((owner.hitter)?.["mc1"],1);
   (owner.talkTxts)?.["push"]?.("你继续前进吧，我们守住这里。","妹妹加油！","去吧，现在就看你的了！");
   (owner.talkObj)?.["push"]?.("map.point1","map.point2","map.point3");
   (owner.talkDirs)?.["push"]?.(1,1,1);
   (owner.talkNext)?.["push"]?.(0,0,0);
   (owner.talkAreas)?.["push"]?.("talkArea1","talkArea2","talkArea3");
}
else
{
   owner.events = ["event4"];
   ctx.graph.goto(owner.bl2,1);
   ctx.graph.goto((owner.hitter)?.["mc1"],2);
}
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map1":
      owner.appearx = 91;
      owner.appeary = 357;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         owner.appearx = 55;
         owner.appeary = 32;
         owner._temp_4 = owner.parent;
         owner._temp_3 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
         ctx.graph.goto(owner.hitter,3);
      }
      else
      {
         ctx.trace?.("跌下");
         owner.appearx = (-ctx.num(300));
         owner.appeary = (-ctx.num(300));
         ctx.graph.goto(owner.hitter,2);
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,5);
         ctx.setField(owner.player,"_x",(-ctx.num(3000)));
         ctx.graph.goto(owner.shuai1,2,{play:true});
         ctx.trace?.(owner.shuai1);
         owner._temp_6 = owner.parent;
         owner._temp_5 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      }
      break;
   case "map6":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         owner.appearx = 723;
         owner.appeary = 267;
         owner._temp_8 = owner.parent;
         owner._temp_7 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
         ctx.graph.goto(owner.hitter,3);
      }
      else
      {
         ctx.trace?.("跌下");
         owner.appearx = (-ctx.num(300));
         owner.appeary = (-ctx.num(300));
         ctx.graph.goto(owner.hitter,2);
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,5);
         ctx.setField(owner.player,"_x",(-ctx.num(3000)));
         ctx.graph.goto(owner.shuai2,2,{play:true});
         owner._temp_10 = owner.parent;
         owner._temp_9 = "qqDir";
         ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
         ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
      }
}
if(ctx.bool((owner.parent)?.["event5"] == 1))
{
   ctx.graph.goto((owner.hitter)?.["mc"],1);
   ctx.graph.goto(owner.bl4,"kkk");
   ctx.setField(owner.talkArea0,"_x",owner.talkArea0xxx);
}
else
{
   ctx.graph.goto((owner.hitter)?.["mc"],2);
   ctx.graph.goto(owner.bl4,1);
}
if(ctx.bool((owner.parent)?.["even2"] != 1))
{
   ctx.setField(owner.even2,"onEnterFrame",function()
   {
      var _loc1_ = this;
      if(ctx.bool(ctx.hitTest(_loc1_,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.bl5);
         ctx.setField(owner.parent,"even2",1);
         (owner.parent)?.["fight"]?.((_loc1_)?.["_name"],owner.bl5,1);
         ctx.setField(_loc1_,"onEnterFrame",undefined);
      }
   });
}
else
{
   ctx.setField(owner.bl5,"_visible",0);
}
if(ctx.bool((owner.parent)?.["even3"] != 1))
{
   ctx.setField(owner.even3,"onEnterFrame",function()
   {
      var _loc1_ = this;
      if(ctx.bool(ctx.hitTest(_loc1_,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.bl6);
         ctx.setField(owner.parent,"even3",1);
         (owner.parent)?.["fight"]?.((_loc1_)?.["_name"],owner.bl6,1);
         ctx.setField(_loc1_,"onEnterFrame",undefined);
      }
   });
}
else
{
   ctx.setField(owner.bl6,"_visible",0);
}
ctx.trace?.(ctx.add("_parent.suook=",(owner.parent)?.["suook"]));
ctx.setField(owner.bl7,"_visible",0);
if(ctx.bool((owner.parent)?.["suook"] == 2))
{
   ctx.graph.goto((owner.hitter)?.["mc"],2);
   ctx.graph.goto(owner.bl4,1);
   owner.talkTxts = [];
   owner.talkObj = [];
   owner.talkDirs = [];
   owner.talkNext = [];
   owner.talkAreas = [];
   if(ctx.bool((owner.parent)?.["even4"] != 1))
   {
      ctx.setField(owner.bl7,"_visible",true);
      ctx.setField(owner.even4,"onEnterFrame",function()
      {
         var _loc1_ = owner.parent;
         var _loc2_ = this;
         if(ctx.bool(ctx.hitTest(_loc2_,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
         {
            ctx.setField(_loc1_,"afterMovieEvent",7);
            ctx.graph.stop(owner.bl7);
            ctx.setField(_loc1_,"even4",1);
            (_loc1_)?.["fight"]?.((_loc2_)?.["_name"],owner.bl7,3);
            ctx.setField(_loc2_,"onEnterFrame",undefined);
         }
      });
   }
   else
   {
      ctx.setField(owner.bl7,"_visible",0);
   }
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 60;
owner.playerScale = 60;
ctx.setField(owner.hitter,"_visible",0);
owner.changes = ["map3"];
owner.changeMovies = ["event000","event000"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 0;
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
   owner._temp_12 = owner.player;
   owner._temp_11 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_12,owner._temp_11,owner._loc0_);
}
else
{
   owner._temp_14 = owner.player;
   owner._temp_13 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_14,owner._temp_13,owner._loc0_);
}
switch((owner.parent)?.["oldMap"])
{
   case "map6":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,3);
         ctx.setField(owner.changes,1,"map6");
         ctx.graph.swapDepths(owner.bl3,5);
      }
      else
      {
         ctx.graph.swapDepths(owner.bl1,5);
      }
      break;
   case "map3":
      if(ctx.bool((owner.parent)?.["qqdown"] != 1))
      {
         ctx.setField(owner.topBlock,"_visible",false);
         ctx.graph.swapDepths(owner.bl1,3);
      }
      else
      {
         ctx.graph.swapDepths(owner.bl1,5);
      }
}
ctx.graph.swapDepths(owner.bl5,5000001);
ctx.graph.swapDepths(owner.bl6,5000002);
ctx.graph.swapDepths(owner.bl7,5000003);
if(ctx.bool((owner.parent)?.["qqdown"] == 1))
{
   ctx.setField(owner.parent,"qqdown",0);
}

}

export function c8v1a441(ctx,owner){

   if(ctx.bool(((owner.parent)?.["_parent"])?.["event5"] == 0))
   {
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],false)))
      {
         ctx.setField((owner.parent)?.["_parent"],"event5",1);
         ctx.graph.goto(((owner.parent)?.["hitter"])?.["mc"],1);
         ctx.graph.goto((owner.parent)?.["bl4"],2,{play:true});
         ctx.setField((owner.parent)?.["talkArea0"],"_x",(owner.parent)?.["talkArea0xxx"]);
      }
   }

}

export function c8v1a442(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],1);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl1"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl1"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v1a443(ctx,owner){

   owner.ff = 1;

}

export function c8v1a444(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 1))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",false);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],5);
         }
      }
   }

}

export function c8v1a445(ctx,owner){

   owner.ff = 1;

}

export function c8v1a446(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],1);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl1"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl1"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v1a447(ctx,owner){

   owner.ff = 1;

}

export function c8v1a448(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],1);
            ctx.setField((owner.parent)?.["topBlock"],"_visible",true);
            ctx.graph.swapDepths((owner.parent)?.["bl1"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl1"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl1"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v1a449(ctx,owner){

   owner.ff = 1;

}

export function c8v1a450(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event4"] == 1))
            {
               ctx.setField((owner.parent)?.["changes"],1,"map6");
               ctx.graph.goto((owner.parent)?.["hitter"],3);
               ctx.graph.swapDepths((owner.parent)?.["bl3"],5);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("应该再仔细搜索一下");
            }
         }
      }
   }

}

export function c8v1a451(ctx,owner){

   owner.ff = 1;

}

export function c8v1a452(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v1a453(ctx,owner){

   owner.ff = 1;

}

export function c8v1a454(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.setField((owner.parent)?.["changes"],1,"");
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v1a455(ctx,owner){

   owner.ff = 1;

}

export function c8v1a456(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 2))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event4"] == 1))
            {
               ctx.setField((owner.parent)?.["changes"],1,"map6");
               ctx.graph.goto((owner.parent)?.["hitter"],3);
               ctx.graph.swapDepths((owner.parent)?.["bl3"],5);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("应该再仔细搜索一下");
            }
         }
      }
   }

}

export function c8v1a457(ctx,owner){

   owner.ff = 1;

}

export function c8v1a458(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.setField((owner.parent)?.["changes"],1,"");
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v1a459(ctx,owner){

   owner.ff = 1;

}

export function c8v1a460(ctx,owner){

   if(ctx.bool(owner.ff == 1))
   {
      if(ctx.bool(((owner.parent)?.["hitter"])?.["_currentframe"] == 3))
      {
         if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["player"])?.["_x"],((owner.parent)?.["player"])?.["_y"],true)))
         {
            ctx.graph.goto((owner.parent)?.["hitter"],2);
            ctx.graph.swapDepths((owner.parent)?.["bl3"],ctx.add(ctx.add((ctx.num(((owner.parent)?.["bl3"])?.["_y"])*ctx.num(10000)),(ctx.num(((owner.parent)?.["bl3"])?.["_x"])*ctx.num(100))),0));
         }
      }
   }

}

export function c8v1a461(ctx,owner){

   owner.ff = 1;

}

export function c8v1a462(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map3";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 308;
      owner.appeary = 363;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 69;
      owner.appeary = 95;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map5":
      owner.appearx = 744;
      owner.appeary = 221;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
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
owner.changes = ["map4","map5","map2"];
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
ctx.graph.swapDepths(owner.xman,5000005);

}

export function c8v1a463(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map4";
owner.appearx = 688;
owner.appeary = 371;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
if(ctx.bool((owner.parent)?.["event7"] == 0))
{
   owner.events = ["event7"];
   ctx.graph.goto(owner.bl1,1);
   ctx.graph.goto((owner.hitter)?.["mc"],1);
}
else
{
   ctx.graph.goto(owner.bl1,2);
   ctx.graph.goto((owner.hitter)?.["mc"],2);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map3"];
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v1a464(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map5";
owner.appearx = 100;
owner.appeary = 371;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map3"];
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.kong,"kkk");
}
else
{
   owner.events = ["event8"];
}
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v1a465(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map6";
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 448;
      owner.appeary = 390;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map7":
      owner.appearx = 714;
      owner.appeary = 96;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "a2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map8":
      owner.appearx = 20;
      owner.appeary = 210;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "d2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
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
owner.changes = ["map7","map8","map2"];
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
ctx.graph.swapDepths(owner.xman,5000005);

}

export function c8v1a466(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map7";
owner.appearx = 75;
owner.appeary = 356;
if(ctx.bool((owner.parent)?.["event9"] == 0))
{
   owner.events = ["event9"];
}
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wd2"));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map6"];
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v1a467(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map8";
owner.appearx = 616;
owner.appeary = 385;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","wa2"));
if(ctx.bool((owner.parent)?.["event10"] == 1))
{
   ctx.graph.goto(owner.kong,"kkk");
}
else
{
   owner.events = ["event10"];
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.changeMovies = ["event000","event000"];
owner.changes = ["map6"];
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
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c8v1a468(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a469(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a470(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a471(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c8v1a472(ctx,owner){
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

export function c8v1a473(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c8v1a474(ctx,owner){
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

export function c8v1a475(ctx,owner){

   ctx.graph.goto(owner,(((((owner.parent)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c8v1a476(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a477(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a478(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c8v1a479(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c8v1a480(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c8v1a481(ctx,owner){
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

export function c8v1a482(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c8v1a483(ctx,owner){
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

export function c8v1a484(ctx,owner){
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

export function c8v1a485(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c8v1a486(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a487(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a488(ctx,owner){
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

export function c8v1a489(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c8v1a490(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c8v1a491(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a492(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a493(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a494(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v1a495(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v1a496(ctx,owner){
owner._visible = 0;

}

export function c8v1a497(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a498(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a499(ctx,owner){
owner._visible = 0;

}

export function c8v1a500(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a501(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a502(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a503(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a504(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a505(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a506(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a507(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a508(ctx,owner){
ctx.graph.stop(owner);
if(ctx.bool((owner.parent)?.["npcType"] != 2))
{
   ctx.stopAllSounds?.();
   ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);
}
else
{
   ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);
}

}

export function c8v1a509(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c8v1a510(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a511(ctx,owner){
owner._visible = 0;

}

export function c8v1a512(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a513(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a514(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a515(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a516(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a517(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a518(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a519(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a520(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a521(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a522(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a523(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a524(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a525(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a526(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c8v1a527(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c8v1a528(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c8v1a529(ctx,owner){
owner._visible = 0;

}

export function c8v1a530(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a531(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a532(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c8v1a533(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a534(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a535(ctx,owner){
owner._visible = 0;

}

export function c8v1a536(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a537(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a538(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a539(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a540(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a541(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a542(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a543(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a544(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a545(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a546(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a547(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c8v1a548(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v1a549(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c8v1a550(ctx,owner){
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
   owner.npcType = ((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["bgFrame"];
   ctx.graph.goto(owner.touxiang,((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["bgFrame"]);
   ctx.setField((owner.life1)?.["bar"],"_xscale",(ctx.num((ctx.num(400)-ctx.num(((((((_loc1_)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"])))/ctx.num(4)));
   ctx.setField(owner.os,"_visible",0);
   owner.scoreHit = 3;
   owner.scoreWhack = 8;
   owner.scoreJH = 5;
   owner.ngoBack = 1;
   if(ctx.bool(owner.npcType == 1))
   {
      owner.scoreHit = 3;
      owner.scoreWhack = 8;
      owner.scoreJH = 5;
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
   else if(ctx.bool(owner.npcType == 2))
   {
      owner.scoreHit = 1;
      owner.scoreWhack = 1;
      owner.scoreJH = 1;
      owner.nscoreHit = 30;
      owner.nscoreWhack = 30;
      owner.nscoreJH = 40;
      owner.h1r = 3;
      owner.h2r = 1;
      owner.hjr = 1;
      owner.jr = 1;
      owner.dr = 30;
      owner.dhr = 30;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,2);
      ctx.graph.goto(owner,2);
   }
   else
   {
      owner.scoreHit = 13;
      owner.scoreWhack = 18;
      owner.scoreJH = 11;
      owner.nscoreHit = 9;
      owner.nscoreWhack = 13;
      owner.nscoreJH = 10;
      owner.h1r = 6;
      owner.h2r = 3;
      owner.hjr = 4;
      owner.jr = 3;
      owner.dr = 7;
      owner.dhr = 10;
      owner.gbr = 10;
      owner.br = 1;
      ctx.graph.goto(owner.shadow2,2);
      ctx.graph.goto(owner,3);
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
   ctx.graph.goto((((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],(ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
   ctx.trace?.((ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
};
owner.gameOver = function(){
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,"Over"));
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,"Stand"));
   owner.onEnterFrame = undefined;
   ctx.setField(owner.os,"_visible",1);
   ctx.graph.goto(owner.os,"fail",{play:true});
   if(ctx.bool(owner.npcType != 2))
   {
      ctx.graph.goto((((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],(ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
   }
   ctx.trace?.((ctx.num(400)-ctx.num(Math.trunc?.((ctx.num((ctx.num(((owner.life1)?.["bar"])?.["_xscale"])/ctx.num(100)))*ctx.num(400))))));
};
ctx.graph.stop(owner);
owner.init?.();

}

export function c8v1a551(ctx,owner){
if(ctx.bool((((owner.parent)?.["_parent"])?.["_parent"])?.["bgFrame"] == 2))
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

export function c8v1a552(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c8v1a553(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c8v1a554(ctx,owner){
ctx.stopAllSounds?.();

}

export function c8v1a555(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c8v1a556(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a557(ctx,owner){

}

export function c8v1a558(ctx,owner){
ctx.graph.stop(owner);

}

export function c8v1a559(ctx,owner){
owner.init = function(){
   owner.suook = 0;
   owner.even4 = owner.even3 = owner.even2 = 0;
   owner.afterMovieEvent = 6;
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
                     if(ctx.bool(owner.event1 == 0))
                     {
                        owner.event1 = 1;
                        ctx.setField(owner.map,"changes",["map2"]);
                        (owner.getItem)?.["start"]?.();
                        ctx.graph.goto((owner.map)?.["wang"],2);
                        (owner.itemList)?.["push"]?.("item2");
                        ctx.graph.goto(owner.itemShow,"item2");
                        owner.itemNow = "item2";
                        owner.etShow?.("您得到了魔法吊坠");
                     }
                     break;
                  case "event2":
                     if(ctx.bool(owner.event1 == 0))
                     {
                        owner.etShow?.("好像应该再搜索一下那个怪物");
                     }
                     break;
                  case "event4":
                     if(ctx.bool(owner.event4 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item2"))
                        {
                           owner.event4 = 1;
                           owner.afterMovieEvent = 9;
                           ((owner.map)?.["talkTxts"])?.["push"]?.("你继续前进吧，我们守住这里。","妹妹加油！","去吧，现在就看你的了！");
                           ((owner.map)?.["talkObj"])?.["push"]?.("map.point1","map.point2","map.point3");
                           ((owner.map)?.["talkDirs"])?.["push"]?.(1,1,1);
                           ((owner.map)?.["talkNext"])?.["push"]?.(0,0,0);
                           ((owner.map)?.["talkAreas"])?.["push"]?.("talkArea1","talkArea2","talkArea3");
                           ctx.graph.goto(((owner.map)?.["hitter"])?.["mc1"],1);
                           ctx.graph.goto((owner.map)?.["bl2"],2);
                           i = 0;
                           while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                           {
                              if(ctx.bool((owner.itemList)?.[i] == "item2"))
                              {
                                 (owner.itemList)?.["splice"]?.(i,1);
                              }
                              ((old)=>(i=old+1,old))(ctx.num(i));
                           }
                           ctx.setField(owner.map,"events",["event6"]);
                           owner.itemNow = (owner.itemList)?.[0];
                           ctx.graph.goto(owner.itemShow,owner.itemNow);
                           ctx.trace?.(ctx.add("******",(owner.map)?.["bl2"]));
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,"event4","event4",0);
                        }
                        else
                        {
                           owner.etShow?.("应该可以把什么东西放进去");
                        }
                     }
                     break;
                  case "event6":
                     ctx.trace?.(111111);
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     if(ctx.bool(owner.event7 == 0))
                     {
                        owner.event7 = 1;
                        ctx.graph.goto((owner.map)?.["bl1"],2);
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc"],2);
                        (owner.getItem)?.["start"]?.();
                        ctx.graph.goto((owner.map)?.["wang"],2);
                        (owner.itemList)?.["push"]?.("item3");
                        ctx.graph.goto(owner.itemShow,"item3");
                        owner.itemNow = "item3";
                        owner.etShow?.("您得到了无私的美德之杖");
                     }
                     break;
                  case "event8":
                     if(ctx.bool(owner.event8 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item3"))
                        {
                           if(ctx.bool(owner.suook == 1))
                           {
                              owner.suook = 2;
                           }
                           else
                           {
                              owner.suook = 1;
                           }
                           i = 0;
                           while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                           {
                              if(ctx.bool((owner.itemList)?.[i] == "item3"))
                              {
                                 (owner.itemList)?.["splice"]?.(i,1);
                              }
                              ((old)=>(i=old+1,old))(ctx.num(i));
                           }
                           ctx.graph.goto((owner.map)?.["kong"],2,{play:true});
                           owner.itemNow = (owner.itemList)?.[0];
                           ctx.graph.goto(owner.itemShow,owner.itemNow);
                           owner.event8 = 1;
                           owner.afterMovieEvent = 1;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("需要钥匙来转动");
                        }
                     }
                     break;
                  case "event9":
                     ctx.trace?.("11111111####");
                     if(ctx.bool(owner.event9 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item1"))
                        {
                           owner.event9 = 1;
                           owner.afterMovieEvent = 2;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("好象原来插着什么东西");
                        }
                     }
                     break;
                  case "event10":
                     if(ctx.bool(owner.event10 == 0))
                     {
                        if(ctx.bool(owner.itemNow == "item4"))
                        {
                           if(ctx.bool(owner.suook == 1))
                           {
                              owner.suook = 2;
                           }
                           else
                           {
                              owner.suook = 1;
                           }
                           owner.event10 = 1;
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else if(ctx.bool(owner.itemNow == "item1"))
                        {
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
                           owner.etShow?.("需要钥匙来转动");
                        }
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc13"],2);
                        owner.event13 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 13;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event14":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc14"],2);
                        owner.event14 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 14;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event15":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc15"],2);
                        owner.event15 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 15;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event16":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc16"],2);
                        owner.event16 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 16;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        owner.eventNow = "event12";
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event18":
                     ctx.graph.goto((owner.map)?.["kulou"],2);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["mc"],2);
                     (owner.getItem)?.["start"]?.();
                     owner.event18 = 1;
                     (owner.itemList)?.["push"]?.("item4");
                     ctx.graph.goto(owner.itemShow,"item4");
                     owner.itemNow = "item4";
                     owner.etShow?.("一个可怜的家伙");
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
         owner.afterMovieEvent = 0;
         break;
      case 2:
         owner.i = 0;
         while(ctx.bool(ctx.less(owner.i,(owner.itemList)?.["length"])))
         {
            if(ctx.bool((owner.itemList)?.[owner.i] == "item1"))
            {
               (owner.itemList)?.["splice"]?.(owner.i,1);
            }
            ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
         }
         ctx.graph.goto((owner.map)?.["kong"],"kkk");
         (owner.getItem)?.["start"]?.();
         ctx.graph.goto((owner.map)?.["wang"],2);
         (owner.itemList)?.["push"]?.("item4");
         ctx.graph.goto(owner.itemShow,"item4");
         owner.itemNow = "item4";
         owner.etShow?.("勇敢的荣誉之剑已被唤醒");
         owner.afterMovieEvent = 0;
         break;
      case 3:
         ctx.graph.goto((owner.map)?.["shu"],2);
         owner.afterMovieEvent = 0;
         break;
      case 4:
         owner.fight?.("","",2);
         owner.afterMovieEvent = 5;
         break;
      case 5:
         owner.getEventShow = 0;
         owner.gamePausing?.();
         owner.eventStep = 0;
         ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
         ctx.setField(owner.movie,"_visible",0);
         owner.eventNow = "opening1";
         ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
         owner.afterMovieEvent = 8;
         ctx.graph.goto((owner.map)?.["bl8"],2,{play:true});
         break;
      case 6:
         owner.afterMovieEvent = 4;
         break;
      case 7:
         owner.getEventShow = 0;
         owner.gamePausing?.();
         owner.eventStep = 0;
         ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
         ctx.setField(owner.movie,"_visible",0);
         owner.eventNow = "end";
         ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
         owner.afterMovieEvent = 0;
         break;
      case 8:
         ctx.setField(owner.lifemc,"_visible",1);
         ctx.setField(owner.lifeBar,"_visible",1);
         ctx.setField(owner.showmc,"_visible",1);
         ctx.setField(owner.itemShow,"_visible",1);
         owner.afterMovieEvent = 0;
         break;
      case 9:
         ctx.graph.goto((owner.map)?.["bl8"],2,{play:true});
         owner.afterMovieEvent = 0;
      default:
         return;
   }
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();
(owner.itemList)?.["push"]?.("item1");
ctx.graph.goto(owner.itemShow,"item1");
owner.itemNow = "item1";
ctx.setField(owner.lifemc,"_visible",false);
ctx.setField(owner.lifeBar,"_visible",false);
ctx.setField(owner.showmc,"_visible",false);
ctx.setField(owner.itemShow,"_visible",false);

}

export function c8v1a560(ctx,owner){
owner.oldMap = "";

}

export const variant0={sourceBytes:5751545,frames:{"18":{"1":(ctx,owner)=>{c8v0a96.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a97.call(owner,ctx,owner);},"7":(ctx,owner)=>{c8v0a98.call(owner,ctx,owner);}},"44":{"1":(ctx,owner)=>{c8v0a225.call(owner,ctx,owner);}},"46":{"1":(ctx,owner)=>{c8v0a226.call(owner,ctx,owner);}},"102":{"19":(ctx,owner)=>{c8v0a28.call(owner,ctx,owner);}},"117":{"19":(ctx,owner)=>{c8v0a42.call(owner,ctx,owner);}},"121":{"17":(ctx,owner)=>{c8v0a48.call(owner,ctx,owner);}},"134":{"11":(ctx,owner)=>{c8v0a68.call(owner,ctx,owner);}},"150":{"11":(ctx,owner)=>{c8v0a75.call(owner,ctx,owner);}},"152":{"1":(ctx,owner)=>{c8v0a76.call(owner,ctx,owner);}},"158":{"7":(ctx,owner)=>{c8v0a82.call(owner,ctx,owner);}},"164":{"7":(ctx,owner)=>{c8v0a88.call(owner,ctx,owner);}},"175":{"22":(ctx,owner)=>{c8v0a91.call(owner,ctx,owner);}},"185":{"22":(ctx,owner)=>{c8v0a95.call(owner,ctx,owner);}},"203":{"18":(ctx,owner)=>{c8v0a99.call(owner,ctx,owner);}},"218":{"18":(ctx,owner)=>{c8v0a102.call(owner,ctx,owner);}},"225":{"9":(ctx,owner)=>{c8v0a106.call(owner,ctx,owner);}},"231":{"9":(ctx,owner)=>{c8v0a107.call(owner,ctx,owner);}},"261":{"22":(ctx,owner)=>{c8v0a186.call(owner,ctx,owner);}},"287":{"22":(ctx,owner)=>{c8v0a208.call(owner,ctx,owner);}},"297":{"9":(ctx,owner)=>{c8v0a209.call(owner,ctx,owner);}},"306":{"9":(ctx,owner)=>{c8v0a210.call(owner,ctx,owner);}},"307":{"137":(ctx,owner)=>{c8v0a211.call(owner,ctx,owner);},"144":(ctx,owner)=>{c8v0a212.call(owner,ctx,owner);}},"328":{"16":(ctx,owner)=>{c8v0a213.call(owner,ctx,owner);}},"335":{"8":(ctx,owner)=>{c8v0a214.call(owner,ctx,owner);}},"341":{"13":(ctx,owner)=>{c8v0a215.call(owner,ctx,owner);}},"352":{"22":(ctx,owner)=>{c8v0a216.call(owner,ctx,owner);}},"362":{"20":(ctx,owner)=>{c8v0a217.call(owner,ctx,owner);}},"369":{"8":(ctx,owner)=>{c8v0a218.call(owner,ctx,owner);}},"381":{"16":(ctx,owner)=>{c8v0a219.call(owner,ctx,owner);}},"387":{"10":(ctx,owner)=>{c8v0a220.call(owner,ctx,owner);}},"404":{"1":(ctx,owner)=>{c8v0a221.call(owner,ctx,owner);}},"422":{"1":(ctx,owner)=>{c8v0a222.call(owner,ctx,owner);},"61":(ctx,owner)=>{c8v0a224.call(owner,ctx,owner);},"121":(ctx,owner)=>{c8v0a223.call(owner,ctx,owner);}},"473":{"21":(ctx,owner)=>{c8v0a227.call(owner,ctx,owner);}},"487":{"21":(ctx,owner)=>{c8v0a228.call(owner,ctx,owner);}},"495":{"11":(ctx,owner)=>{c8v0a229.call(owner,ctx,owner);}},"502":{"11":(ctx,owner)=>{c8v0a230.call(owner,ctx,owner);}},"510":{"12":(ctx,owner)=>{c8v0a231.call(owner,ctx,owner);}},"517":{"12":(ctx,owner)=>{c8v0a232.call(owner,ctx,owner);}},"532":{"25":(ctx,owner)=>{c8v0a233.call(owner,ctx,owner);}},"547":{"25":(ctx,owner)=>{c8v0a234.call(owner,ctx,owner);}},"559":{"21":(ctx,owner)=>{c8v0a235.call(owner,ctx,owner);}},"571":{"21":(ctx,owner)=>{c8v0a236.call(owner,ctx,owner);}},"580":{"11":(ctx,owner)=>{c8v0a237.call(owner,ctx,owner);}},"588":{"11":(ctx,owner)=>{c8v0a238.call(owner,ctx,owner);}},"611":{"35":(ctx,owner)=>{c8v0a239.call(owner,ctx,owner);}},"634":{"35":(ctx,owner)=>{c8v0a240.call(owner,ctx,owner);}},"640":{"9":(ctx,owner)=>{c8v0a241.call(owner,ctx,owner);}},"641":{"119":(ctx,owner)=>{c8v0a242.call(owner,ctx,owner);},"126":(ctx,owner)=>{c8v0a243.call(owner,ctx,owner);}},"642":{"1":(ctx,owner)=>{c8v0a244.call(owner,ctx,owner);}},"681":{"19":(ctx,owner)=>{c8v0a245.call(owner,ctx,owner);}},"688":{"19":(ctx,owner)=>{c8v0a246.call(owner,ctx,owner);}},"692":{"17":(ctx,owner)=>{c8v0a247.call(owner,ctx,owner);}},"701":{"11":(ctx,owner)=>{c8v0a248.call(owner,ctx,owner);}},"708":{"11":(ctx,owner)=>{c8v0a249.call(owner,ctx,owner);}},"709":{"1":(ctx,owner)=>{c8v0a250.call(owner,ctx,owner);}},"715":{"7":(ctx,owner)=>{c8v0a251.call(owner,ctx,owner);}},"716":{"7":(ctx,owner)=>{c8v0a252.call(owner,ctx,owner);}},"727":{"22":(ctx,owner)=>{c8v0a253.call(owner,ctx,owner);}},"734":{"22":(ctx,owner)=>{c8v0a254.call(owner,ctx,owner);}},"748":{"18":(ctx,owner)=>{c8v0a255.call(owner,ctx,owner);}},"755":{"18":(ctx,owner)=>{c8v0a256.call(owner,ctx,owner);}},"762":{"9":(ctx,owner)=>{c8v0a257.call(owner,ctx,owner);}},"767":{"9":(ctx,owner)=>{c8v0a258.call(owner,ctx,owner);}},"796":{"22":(ctx,owner)=>{c8v0a259.call(owner,ctx,owner);}},"814":{"22":(ctx,owner)=>{c8v0a260.call(owner,ctx,owner);}},"823":{"9":(ctx,owner)=>{c8v0a261.call(owner,ctx,owner);}},"832":{"9":(ctx,owner)=>{c8v0a262.call(owner,ctx,owner);}},"833":{"137":(ctx,owner)=>{c8v0a263.call(owner,ctx,owner);},"144":(ctx,owner)=>{c8v0a264.call(owner,ctx,owner);}},"834":{"1":(ctx,owner)=>{c8v0a265.call(owner,ctx,owner);}},"835":{"1":(ctx,owner)=>{c8v0a266.call(owner,ctx,owner);}},"836":{"1":(ctx,owner)=>{c8v0a267.call(owner,ctx,owner);},"30":(ctx,owner)=>{c8v0a268.call(owner,ctx,owner);},"31":(ctx,owner)=>{c8v0a269.call(owner,ctx,owner);}},"842":{"1":(ctx,owner)=>{c8v0a270.call(owner,ctx,owner);}},"949":{"9":(ctx,owner)=>{c8v0a271.call(owner,ctx,owner);}},"956":{"9":(ctx,owner)=>{c8v0a272.call(owner,ctx,owner);}},"961":{"9":(ctx,owner)=>{c8v0a273.call(owner,ctx,owner);}},"966":{"9":(ctx,owner)=>{c8v0a274.call(owner,ctx,owner);}},"971":{"9":(ctx,owner)=>{c8v0a275.call(owner,ctx,owner);}},"980":{"9":(ctx,owner)=>{c8v0a276.call(owner,ctx,owner);}},"985":{"9":(ctx,owner)=>{c8v0a277.call(owner,ctx,owner);}},"994":{"9":(ctx,owner)=>{c8v0a278.call(owner,ctx,owner);}},"1007":{"26":(ctx,owner)=>{c8v0a27.call(owner,ctx,owner);}},"1022":{"28":(ctx,owner)=>{c8v0a29.call(owner,ctx,owner);}},"1037":{"34":(ctx,owner)=>{c8v0a30.call(owner,ctx,owner);}},"1051":{"34":(ctx,owner)=>{c8v0a31.call(owner,ctx,owner);}},"1065":{"32":(ctx,owner)=>{c8v0a32.call(owner,ctx,owner);}},"1083":{"24":(ctx,owner)=>{c8v0a33.call(owner,ctx,owner);}},"1097":{"32":(ctx,owner)=>{c8v0a34.call(owner,ctx,owner);}},"1113":{"24":(ctx,owner)=>{c8v0a35.call(owner,ctx,owner);}},"1135":{"6":(ctx,owner)=>{c8v0a38.call(owner,ctx,owner);},"10":(ctx,owner)=>{c8v0a36.call(owner,ctx,owner);},"24":(ctx,owner)=>{c8v0a37.call(owner,ctx,owner);}},"1155":{"4":(ctx,owner)=>{c8v0a41.call(owner,ctx,owner);},"14":(ctx,owner)=>{c8v0a39.call(owner,ctx,owner);},"24":(ctx,owner)=>{c8v0a40.call(owner,ctx,owner);}},"1180":{"54":(ctx,owner)=>{c8v0a43.call(owner,ctx,owner);}},"1199":{"16":(ctx,owner)=>{c8v0a44.call(owner,ctx,owner);}},"1200":{"54":(ctx,owner)=>{c8v0a45.call(owner,ctx,owner);}},"1201":{"1":(ctx,owner)=>{c8v0a46.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a47.call(owner,ctx,owner);}},"1238":{"1":(ctx,owner)=>{c8v0a49.call(owner,ctx,owner);}},"1239":{"1":(ctx,owner)=>{c8v0a50.call(owner,ctx,owner);}},"1255":{"1":(ctx,owner)=>{c8v0a51.call(owner,ctx,owner);}},"1268":{"1":(ctx,owner)=>{c8v0a52.call(owner,ctx,owner);}},"1278":{"1":(ctx,owner)=>{c8v0a53.call(owner,ctx,owner);}},"1287":{"1":(ctx,owner)=>{c8v0a54.call(owner,ctx,owner);}},"1288":{"1":(ctx,owner)=>{c8v0a55.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a56.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v0a57.call(owner,ctx,owner);}},"1295":{"1":(ctx,owner)=>{c8v0a58.call(owner,ctx,owner);}},"1302":{"1":(ctx,owner)=>{c8v0a59.call(owner,ctx,owner);}},"1307":{"1":(ctx,owner)=>{c8v0a60.call(owner,ctx,owner);}},"1308":{"1":(ctx,owner)=>{c8v0a61.call(owner,ctx,owner);}},"1316":{"1":(ctx,owner)=>{c8v0a62.call(owner,ctx,owner);}},"1324":{"1":(ctx,owner)=>{c8v0a63.call(owner,ctx,owner);}},"1332":{"1":(ctx,owner)=>{c8v0a64.call(owner,ctx,owner);}},"1333":{"1":(ctx,owner)=>{c8v0a65.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a66.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v0a67.call(owner,ctx,owner);}},"1362":{"1":(ctx,owner)=>{c8v0a69.call(owner,ctx,owner);c8v0a70.call(owner,ctx,owner);}},"1367":{"1":(ctx,owner)=>{c8v0a71.call(owner,ctx,owner);}},"1446":{"1":(ctx,owner)=>{c8v0a72.call(owner,ctx,owner);c8v0a73.call(owner,ctx,owner);c8v0a74.call(owner,ctx,owner);}},"1556":{"1":(ctx,owner)=>{c8v0a77.call(owner,ctx,owner);c8v0a78.call(owner,ctx,owner);},"45":(ctx,owner)=>{c8v0a80.call(owner,ctx,owner);},"99":(ctx,owner)=>{c8v0a81.call(owner,ctx,owner);},"401":(ctx,owner)=>{c8v0a79.call(owner,ctx,owner);}},"1635":{"1":(ctx,owner)=>{c8v0a83.call(owner,ctx,owner);c8v0a84.call(owner,ctx,owner);},"45":(ctx,owner)=>{c8v0a86.call(owner,ctx,owner);},"99":(ctx,owner)=>{c8v0a87.call(owner,ctx,owner);},"401":(ctx,owner)=>{c8v0a85.call(owner,ctx,owner);}},"1714":{"1":(ctx,owner)=>{c8v0a89.call(owner,ctx,owner);c8v0a90.call(owner,ctx,owner);}},"1782":{"1":(ctx,owner)=>{c8v0a92.call(owner,ctx,owner);c8v0a93.call(owner,ctx,owner);},"312":(ctx,owner)=>{c8v0a94.call(owner,ctx,owner);}},"2158":{"1":(ctx,owner)=>{c8v0a100.call(owner,ctx,owner);},"1681":(ctx,owner)=>{c8v0a101.call(owner,ctx,owner);}},"2228":{"1":(ctx,owner)=>{c8v0a103.call(owner,ctx,owner);c8v0a104.call(owner,ctx,owner);},"320":(ctx,owner)=>{c8v0a105.call(owner,ctx,owner);}},"2329":{"1":(ctx,owner)=>{c8v0a108.call(owner,ctx,owner);c8v0a109.call(owner,ctx,owner);},"298":(ctx,owner)=>{c8v0a110.call(owner,ctx,owner);}},"2344":{"1":(ctx,owner)=>{c8v0a111.call(owner,ctx,owner);}},"2347":{"1":(ctx,owner)=>{c8v0a112.call(owner,ctx,owner);}},"2348":{"1":(ctx,owner)=>{c8v0a113.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v0a114.call(owner,ctx,owner);}},"2379":{"1":(ctx,owner)=>{c8v0a115.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a117.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v0a116.call(owner,ctx,owner);}},"2385":{"1":(ctx,owner)=>{c8v0a118.call(owner,ctx,owner);}},"2386":{"1":(ctx,owner)=>{c8v0a119.call(owner,ctx,owner);}},"2388":{"1":(ctx,owner)=>{c8v0a120.call(owner,ctx,owner);}},"2394":{"1":(ctx,owner)=>{c8v0a121.call(owner,ctx,owner);}},"2405":{"1":(ctx,owner)=>{c8v0a122.call(owner,ctx,owner);}},"2406":{"1":(ctx,owner)=>{c8v0a123.call(owner,ctx,owner);}},"2409":{"1":(ctx,owner)=>{c8v0a124.call(owner,ctx,owner);},"13":(ctx,owner)=>{c8v0a125.call(owner,ctx,owner);}},"2416":{"1":(ctx,owner)=>{c8v0a126.call(owner,ctx,owner);}},"2418":{"1":(ctx,owner)=>{c8v0a127.call(owner,ctx,owner);}},"2421":{"1":(ctx,owner)=>{c8v0a128.call(owner,ctx,owner);}},"2422":{"1":(ctx,owner)=>{c8v0a129.call(owner,ctx,owner);}},"2424":{"1":(ctx,owner)=>{c8v0a130.call(owner,ctx,owner);}},"2428":{"1":(ctx,owner)=>{c8v0a131.call(owner,ctx,owner);}},"2433":{"1":(ctx,owner)=>{c8v0a132.call(owner,ctx,owner);}},"2435":{"1":(ctx,owner)=>{c8v0a133.call(owner,ctx,owner);}},"2437":{"1":(ctx,owner)=>{c8v0a134.call(owner,ctx,owner);}},"2446":{"1":(ctx,owner)=>{c8v0a135.call(owner,ctx,owner);},"19":(ctx,owner)=>{c8v0a136.call(owner,ctx,owner);}},"2447":{"1":(ctx,owner)=>{c8v0a137.call(owner,ctx,owner);}},"2459":{"1":(ctx,owner)=>{c8v0a138.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a139.call(owner,ctx,owner);},"28":(ctx,owner)=>{c8v0a140.call(owner,ctx,owner);}},"2496":{"1":(ctx,owner)=>{c8v0a141.call(owner,ctx,owner);},"50":(ctx,owner)=>{c8v0a142.call(owner,ctx,owner);}},"2519":{"1":(ctx,owner)=>{c8v0a143.call(owner,ctx,owner);},"17":(ctx,owner)=>{c8v0a144.call(owner,ctx,owner);}},"2526":{"1":(ctx,owner)=>{c8v0a145.call(owner,ctx,owner);},"19":(ctx,owner)=>{c8v0a146.call(owner,ctx,owner);}},"2533":{"1":(ctx,owner)=>{c8v0a147.call(owner,ctx,owner);}},"2538":{"1":(ctx,owner)=>{c8v0a148.call(owner,ctx,owner);}},"2548":{"1":(ctx,owner)=>{c8v0a149.call(owner,ctx,owner);},"12":(ctx,owner)=>{c8v0a150.call(owner,ctx,owner);}},"2565":{"1":(ctx,owner)=>{c8v0a151.call(owner,ctx,owner);}},"2582":{"1":(ctx,owner)=>{c8v0a152.call(owner,ctx,owner);}},"2583":{"1":(ctx,owner)=>{c8v0a153.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a157.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v0a179.call(owner,ctx,owner);},"4":(ctx,owner)=>{c8v0a180.call(owner,ctx,owner);},"5":(ctx,owner)=>{c8v0a181.call(owner,ctx,owner);},"6":(ctx,owner)=>{c8v0a182.call(owner,ctx,owner);},"7":(ctx,owner)=>{c8v0a183.call(owner,ctx,owner);},"8":(ctx,owner)=>{c8v0a184.call(owner,ctx,owner);}},"2597":{"1":(ctx,owner)=>{c8v0a185.call(owner,ctx,owner);}},"2662":{"1":(ctx,owner)=>{c8v0a187.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a188.call(owner,ctx,owner);}},"2693":{"1":(ctx,owner)=>{c8v0a189.call(owner,ctx,owner);}},"2707":{"1":(ctx,owner)=>{c8v0a190.call(owner,ctx,owner);}},"2708":{"1":(ctx,owner)=>{c8v0a191.call(owner,ctx,owner);}},"2709":{"1":(ctx,owner)=>{c8v0a193.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a195.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v0a194.call(owner,ctx,owner);},"20":(ctx,owner)=>{c8v0a196.call(owner,ctx,owner);}},"2717":{"1":(ctx,owner)=>{c8v0a197.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a200.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v0a202.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v0a198.call(owner,ctx,owner);},"12":(ctx,owner)=>{c8v0a199.call(owner,ctx,owner);},"20":(ctx,owner)=>{c8v0a201.call(owner,ctx,owner);}},"2727":{"1":(ctx,owner)=>{c8v0a203.call(owner,ctx,owner);}},"2728":{"1":(ctx,owner)=>{c8v0a204.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a206.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v0a205.call(owner,ctx,owner);},"20":(ctx,owner)=>{c8v0a207.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c8v0a279.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v0a280.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v0a281.call(owner,ctx,owner);},"4":(ctx,owner)=>{c8v0a282.call(owner,ctx,owner);}}},frameActions:{"18":{"1":[c8v0a96],"2":[c8v0a97],"7":[c8v0a98]},"44":{"1":[c8v0a225]},"46":{"1":[c8v0a226]},"102":{"19":[c8v0a28]},"117":{"19":[c8v0a42]},"121":{"17":[c8v0a48]},"134":{"11":[c8v0a68]},"150":{"11":[c8v0a75]},"152":{"1":[c8v0a76]},"158":{"7":[c8v0a82]},"164":{"7":[c8v0a88]},"175":{"22":[c8v0a91]},"185":{"22":[c8v0a95]},"203":{"18":[c8v0a99]},"218":{"18":[c8v0a102]},"225":{"9":[c8v0a106]},"231":{"9":[c8v0a107]},"261":{"22":[c8v0a186]},"287":{"22":[c8v0a208]},"297":{"9":[c8v0a209]},"306":{"9":[c8v0a210]},"307":{"137":[c8v0a211],"144":[c8v0a212]},"328":{"16":[c8v0a213]},"335":{"8":[c8v0a214]},"341":{"13":[c8v0a215]},"352":{"22":[c8v0a216]},"362":{"20":[c8v0a217]},"369":{"8":[c8v0a218]},"381":{"16":[c8v0a219]},"387":{"10":[c8v0a220]},"404":{"1":[c8v0a221]},"422":{"1":[c8v0a222],"61":[c8v0a224],"121":[c8v0a223]},"473":{"21":[c8v0a227]},"487":{"21":[c8v0a228]},"495":{"11":[c8v0a229]},"502":{"11":[c8v0a230]},"510":{"12":[c8v0a231]},"517":{"12":[c8v0a232]},"532":{"25":[c8v0a233]},"547":{"25":[c8v0a234]},"559":{"21":[c8v0a235]},"571":{"21":[c8v0a236]},"580":{"11":[c8v0a237]},"588":{"11":[c8v0a238]},"611":{"35":[c8v0a239]},"634":{"35":[c8v0a240]},"640":{"9":[c8v0a241]},"641":{"119":[c8v0a242],"126":[c8v0a243]},"642":{"1":[c8v0a244]},"681":{"19":[c8v0a245]},"688":{"19":[c8v0a246]},"692":{"17":[c8v0a247]},"701":{"11":[c8v0a248]},"708":{"11":[c8v0a249]},"709":{"1":[c8v0a250]},"715":{"7":[c8v0a251]},"716":{"7":[c8v0a252]},"727":{"22":[c8v0a253]},"734":{"22":[c8v0a254]},"748":{"18":[c8v0a255]},"755":{"18":[c8v0a256]},"762":{"9":[c8v0a257]},"767":{"9":[c8v0a258]},"796":{"22":[c8v0a259]},"814":{"22":[c8v0a260]},"823":{"9":[c8v0a261]},"832":{"9":[c8v0a262]},"833":{"137":[c8v0a263],"144":[c8v0a264]},"834":{"1":[c8v0a265]},"835":{"1":[c8v0a266]},"836":{"1":[c8v0a267],"30":[c8v0a268],"31":[c8v0a269]},"842":{"1":[c8v0a270]},"949":{"9":[c8v0a271]},"956":{"9":[c8v0a272]},"961":{"9":[c8v0a273]},"966":{"9":[c8v0a274]},"971":{"9":[c8v0a275]},"980":{"9":[c8v0a276]},"985":{"9":[c8v0a277]},"994":{"9":[c8v0a278]},"1007":{"26":[c8v0a27]},"1022":{"28":[c8v0a29]},"1037":{"34":[c8v0a30]},"1051":{"34":[c8v0a31]},"1065":{"32":[c8v0a32]},"1083":{"24":[c8v0a33]},"1097":{"32":[c8v0a34]},"1113":{"24":[c8v0a35]},"1135":{"6":[c8v0a38],"10":[c8v0a36],"24":[c8v0a37]},"1155":{"4":[c8v0a41],"14":[c8v0a39],"24":[c8v0a40]},"1180":{"54":[c8v0a43]},"1199":{"16":[c8v0a44]},"1200":{"54":[c8v0a45]},"1201":{"1":[c8v0a46],"2":[c8v0a47]},"1238":{"1":[c8v0a49]},"1239":{"1":[c8v0a50]},"1255":{"1":[c8v0a51]},"1268":{"1":[c8v0a52]},"1278":{"1":[c8v0a53]},"1287":{"1":[c8v0a54]},"1288":{"1":[c8v0a55],"2":[c8v0a56],"3":[c8v0a57]},"1295":{"1":[c8v0a58]},"1302":{"1":[c8v0a59]},"1307":{"1":[c8v0a60]},"1308":{"1":[c8v0a61]},"1316":{"1":[c8v0a62]},"1324":{"1":[c8v0a63]},"1332":{"1":[c8v0a64]},"1333":{"1":[c8v0a65],"2":[c8v0a66],"3":[c8v0a67]},"1362":{"1":[c8v0a69,c8v0a70]},"1367":{"1":[c8v0a71]},"1446":{"1":[c8v0a72,c8v0a73,c8v0a74]},"1556":{"1":[c8v0a77,c8v0a78],"45":[c8v0a80],"99":[c8v0a81],"401":[c8v0a79]},"1635":{"1":[c8v0a83,c8v0a84],"45":[c8v0a86],"99":[c8v0a87],"401":[c8v0a85]},"1714":{"1":[c8v0a89,c8v0a90]},"1782":{"1":[c8v0a92,c8v0a93],"312":[c8v0a94]},"2158":{"1":[c8v0a100],"1681":[c8v0a101]},"2228":{"1":[c8v0a103,c8v0a104],"320":[c8v0a105]},"2329":{"1":[c8v0a108,c8v0a109],"298":[c8v0a110]},"2344":{"1":[c8v0a111]},"2347":{"1":[c8v0a112]},"2348":{"1":[c8v0a113],"11":[c8v0a114]},"2379":{"1":[c8v0a115],"2":[c8v0a117],"11":[c8v0a116]},"2385":{"1":[c8v0a118]},"2386":{"1":[c8v0a119]},"2388":{"1":[c8v0a120]},"2394":{"1":[c8v0a121]},"2405":{"1":[c8v0a122]},"2406":{"1":[c8v0a123]},"2409":{"1":[c8v0a124],"13":[c8v0a125]},"2416":{"1":[c8v0a126]},"2418":{"1":[c8v0a127]},"2421":{"1":[c8v0a128]},"2422":{"1":[c8v0a129]},"2424":{"1":[c8v0a130]},"2428":{"1":[c8v0a131]},"2433":{"1":[c8v0a132]},"2435":{"1":[c8v0a133]},"2437":{"1":[c8v0a134]},"2446":{"1":[c8v0a135],"19":[c8v0a136]},"2447":{"1":[c8v0a137]},"2459":{"1":[c8v0a138],"2":[c8v0a139],"28":[c8v0a140]},"2496":{"1":[c8v0a141],"50":[c8v0a142]},"2519":{"1":[c8v0a143],"17":[c8v0a144]},"2526":{"1":[c8v0a145],"19":[c8v0a146]},"2533":{"1":[c8v0a147]},"2538":{"1":[c8v0a148]},"2548":{"1":[c8v0a149],"12":[c8v0a150]},"2565":{"1":[c8v0a151]},"2582":{"1":[c8v0a152]},"2583":{"1":[c8v0a153],"2":[c8v0a157],"3":[c8v0a179],"4":[c8v0a180],"5":[c8v0a181],"6":[c8v0a182],"7":[c8v0a183],"8":[c8v0a184]},"2597":{"1":[c8v0a185]},"2662":{"1":[c8v0a187],"2":[c8v0a188]},"2693":{"1":[c8v0a189]},"2707":{"1":[c8v0a190]},"2708":{"1":[c8v0a191]},"2709":{"1":[c8v0a193],"2":[c8v0a195],"11":[c8v0a194],"20":[c8v0a196]},"2717":{"1":[c8v0a197],"2":[c8v0a200],"3":[c8v0a202],"11":[c8v0a198],"12":[c8v0a199],"20":[c8v0a201]},"2727":{"1":[c8v0a203]},"2728":{"1":[c8v0a204],"2":[c8v0a206],"11":[c8v0a205],"20":[c8v0a207]},"main":{"1":[c8v0a279],"2":[c8v0a280],"3":[c8v0a281],"4":[c8v0a282]}},buttons:{"1226":{"press":(ctx,owner)=>{c8v0a0.call(owner,ctx,owner);},"release":(ctx,owner)=>{c8v0a1.call(owner,ctx,owner);}},"1231":{"release":(ctx,owner)=>{c8v0a2.call(owner,ctx,owner);}},"1251":{"release":(ctx,owner)=>{c8v0a3.call(owner,ctx,owner);}},"1253":{"release":(ctx,owner)=>{c8v0a4.call(owner,ctx,owner);}},"2332":{"press":(ctx,owner)=>{c8v0a5.call(owner,ctx,owner);},"release":(ctx,owner)=>{c8v0a6.call(owner,ctx,owner);}},"2357":{"release":(ctx,owner)=>{c8v0a7.call(owner,ctx,owner);}},"2363":{"release":(ctx,owner)=>{c8v0a8.call(owner,ctx,owner);}},"2368":{"release":(ctx,owner)=>{c8v0a9.call(owner,ctx,owner);}},"2377":{"release":(ctx,owner)=>{c8v0a10.call(owner,ctx,owner);}},"2589":{"release":(ctx,owner)=>{c8v0a11.call(owner,ctx,owner);}},"2635":{"release":(ctx,owner)=>{c8v0a12.call(owner,ctx,owner);}},"2636":{"release":(ctx,owner)=>{c8v0a13.call(owner,ctx,owner);}},"2637":{"release":(ctx,owner)=>{c8v0a14.call(owner,ctx,owner);}},"2638":{"release":(ctx,owner)=>{c8v0a15.call(owner,ctx,owner);}},"2639":{"release":(ctx,owner)=>{c8v0a16.call(owner,ctx,owner);}},"2673":{"release":(ctx,owner)=>{c8v0a17.call(owner,ctx,owner);}},"2676":{"release":(ctx,owner)=>{c8v0a18.call(owner,ctx,owner);}},"2680":{"release":(ctx,owner)=>{c8v0a19.call(owner,ctx,owner);}},"2682":{"release":(ctx,owner)=>{c8v0a20.call(owner,ctx,owner);}},"2684":{"release":(ctx,owner)=>{c8v0a21.call(owner,ctx,owner);}},"2686":{"release":(ctx,owner)=>{c8v0a22.call(owner,ctx,owner);}},"2692":{"press":(ctx,owner)=>{c8v0a23.call(owner,ctx,owner);},"release":(ctx,owner)=>{c8v0a24.call(owner,ctx,owner);}},"2719":{"release":(ctx,owner)=>{c8v0a25.call(owner,ctx,owner);}},"2736":{"release":(ctx,owner)=>{c8v0a26.call(owner,ctx,owner);}}},clips:[{"parent":"2583","frame":1,"character":"2411","name":"","depth":30,"event":"enterFrame","handler":c8v0a154},{"parent":"2583","frame":1,"character":"2411","name":"","depth":32,"event":"enterFrame","handler":c8v0a155},{"parent":"2583","frame":1,"character":"2411","name":"","depth":34,"event":"enterFrame","handler":c8v0a156},{"parent":"2583","frame":2,"character":"2394","name":"","depth":68,"event":"enterFrame","handler":c8v0a158},{"parent":"2583","frame":2,"character":"2411","name":"","depth":15,"event":"enterFrame","handler":c8v0a159},{"parent":"2583","frame":2,"character":"2411","name":"","depth":15,"event":"load","handler":c8v0a160},{"parent":"2583","frame":2,"character":"2411","name":"","depth":17,"event":"enterFrame","handler":c8v0a161},{"parent":"2583","frame":2,"character":"2411","name":"","depth":17,"event":"load","handler":c8v0a162},{"parent":"2583","frame":2,"character":"2411","name":"","depth":19,"event":"enterFrame","handler":c8v0a163},{"parent":"2583","frame":2,"character":"2411","name":"","depth":19,"event":"load","handler":c8v0a164},{"parent":"2583","frame":2,"character":"2411","name":"","depth":21,"event":"enterFrame","handler":c8v0a165},{"parent":"2583","frame":2,"character":"2411","name":"","depth":21,"event":"load","handler":c8v0a166},{"parent":"2583","frame":2,"character":"2411","name":"","depth":27,"event":"enterFrame","handler":c8v0a167},{"parent":"2583","frame":2,"character":"2411","name":"","depth":27,"event":"load","handler":c8v0a168},{"parent":"2583","frame":2,"character":"2411","name":"","depth":29,"event":"enterFrame","handler":c8v0a169},{"parent":"2583","frame":2,"character":"2411","name":"","depth":29,"event":"load","handler":c8v0a170},{"parent":"2583","frame":2,"character":"2411","name":"","depth":31,"event":"enterFrame","handler":c8v0a171},{"parent":"2583","frame":2,"character":"2411","name":"","depth":31,"event":"load","handler":c8v0a172},{"parent":"2583","frame":2,"character":"2411","name":"","depth":33,"event":"enterFrame","handler":c8v0a173},{"parent":"2583","frame":2,"character":"2411","name":"","depth":33,"event":"load","handler":c8v0a174},{"parent":"2583","frame":2,"character":"2411","name":"","depth":35,"event":"enterFrame","handler":c8v0a175},{"parent":"2583","frame":2,"character":"2411","name":"","depth":35,"event":"load","handler":c8v0a176},{"parent":"2583","frame":2,"character":"2411","name":"","depth":37,"event":"enterFrame","handler":c8v0a177},{"parent":"2583","frame":2,"character":"2411","name":"","depth":37,"event":"load","handler":c8v0a178},{"parent":"2708","frame":1,"character":"2597","name":"","depth":11,"event":"enterFrame","handler":c8v0a192}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"18":["txt"],"44":[],"46":["_visible"],"102":[],"117":[],"121":[],"134":[],"150":[],"152":["_visible"],"158":[],"164":[],"175":[],"185":[],"203":[],"218":[],"225":[],"231":[],"261":[],"287":[],"297":[],"306":[],"307":[],"328":[],"335":[],"341":[],"352":[],"362":[],"369":[],"381":[],"387":[],"404":[],"422":[],"473":[],"487":[],"495":[],"502":[],"510":[],"517":[],"532":[],"547":[],"559":[],"571":[],"580":[],"588":[],"611":[],"634":[],"640":[],"641":[],"642":["_visible"],"681":[],"688":[],"692":[],"701":[],"708":[],"709":["_visible"],"715":[],"716":[],"727":[],"734":[],"748":[],"755":[],"762":[],"767":[],"796":[],"814":[],"823":[],"832":[],"833":[],"834":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","touxiang","upKey","x1","x2","xMax","xMin"],"835":["tt"],"836":["skipFrame"],"842":["_x","_y","onEnterFrame","x","y"],"949":[],"956":[],"961":[],"966":[],"971":[],"980":[],"985":[],"994":[],"1007":[],"1022":[],"1037":[],"1051":[],"1065":[],"1083":[],"1097":[],"1113":[],"1135":["items"],"1155":["items"],"1180":[],"1199":[],"1200":[],"1201":[],"1226":[],"1231":[],"1238":["component","track_mc"],"1239":[],"1251":["qqxflash_home"],"1253":[],"1255":[],"1268":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1278":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1287":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1288":[],"1295":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1302":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1307":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1308":[],"1316":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1324":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1332":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1333":[],"1362":["_totalframes","mc","skipFrame"],"1367":["_totalframes","skipFrame"],"1446":["_totalframes","mc","skipFrame"],"1556":["_totalframes","mc","skipFrame"],"1635":["_totalframes","mc","skipFrame"],"1714":["_totalframes","mc","skipFrame"],"1782":["_totalframes","mc","skipFrame"],"2158":["mc","skipFrame"],"2228":["_totalframes","mc","skipFrame"],"2329":["_totalframes","mc","skipFrame"],"2332":["aim","xxx","yyy"],"2344":["aim","iii","name1","nn","onMouseUp","xxx","yyy"],"2347":[],"2348":["_currentframe","back","onEnterFrame"],"2357":[],"2363":["helper"],"2368":[],"2377":[],"2379":["btn"],"2385":[],"2386":[],"2388":["_visible","hitted","onEnterFrame"],"2394":["_visible"],"2405":[],"2406":["mc","onEnterFrame","tempDepths","xx","yy"],"2409":[],"2411":["ff"],"2416":[],"2418":[],"2421":[],"2422":["_visible"],"2424":[],"2428":[],"2433":[],"2435":["_visible","hitted","onEnterFrame","ox","oy"],"2437":["_visible","hitted","onEnterFrame","ox","oy"],"2446":[],"2447":["_visible"],"2459":[],"2496":[],"2519":["i","iii","name1","num_array","onEnterFrame"],"2526":[],"2533":[],"2538":["_visible","hitted","onEnterFrame","ox","oy"],"2548":[],"2565":["i","iii","name1","num_array","onEnterFrame"],"2582":[],"2583":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl2","bl3","bl4","bl5","bl6","bl7","bl8","blocks","blockx","blocky","changeMovies","changes","even2","even3","even4","events","hitter","i","kong","map","minScale","player","playerScale","shuai1","shuai2","talkArea0","talkArea0xxx","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman"],"2589":["gp"],"2597":[],"2635":[],"2636":[],"2637":[],"2638":[],"2639":[],"2662":["actKey","downKey","leftKey","rightKey","upKey"],"2673":["_quality"],"2676":["_quality"],"2680":["_quality"],"2682":[],"2684":["allShow"],"2686":["allShow"],"2692":["draging","onEnterFrame"],"2693":["_x","bb","draging","onEnterFrame"],"2707":["btn"],"2708":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2709":["btn","gp"],"2717":["i","onEnterFrame"],"2719":["aim"],"2727":[],"2728":["delay","fadeOut","item"],"2736":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","even2","even3","even4","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","i","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifemc","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","showmc","speed","speedx","speedy","step","steps","suook","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:5892650,frames:{"18":{"1":(ctx,owner)=>{c8v1a378.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a379.call(owner,ctx,owner);},"7":(ctx,owner)=>{c8v1a380.call(owner,ctx,owner);}},"44":{"1":(ctx,owner)=>{c8v1a510.call(owner,ctx,owner);}},"46":{"1":(ctx,owner)=>{c8v1a511.call(owner,ctx,owner);}},"105":{"19":(ctx,owner)=>{c8v1a316.call(owner,ctx,owner);}},"120":{"19":(ctx,owner)=>{c8v1a326.call(owner,ctx,owner);}},"125":{"17":(ctx,owner)=>{c8v1a331.call(owner,ctx,owner);}},"138":{"11":(ctx,owner)=>{c8v1a348.call(owner,ctx,owner);}},"154":{"11":(ctx,owner)=>{c8v1a358.call(owner,ctx,owner);}},"156":{"1":(ctx,owner)=>{c8v1a359.call(owner,ctx,owner);}},"162":{"7":(ctx,owner)=>{c8v1a365.call(owner,ctx,owner);}},"168":{"7":(ctx,owner)=>{c8v1a366.call(owner,ctx,owner);}},"179":{"22":(ctx,owner)=>{c8v1a374.call(owner,ctx,owner);}},"190":{"22":(ctx,owner)=>{c8v1a381.call(owner,ctx,owner);}},"208":{"18":(ctx,owner)=>{c8v1a382.call(owner,ctx,owner);}},"224":{"18":(ctx,owner)=>{c8v1a385.call(owner,ctx,owner);}},"231":{"9":(ctx,owner)=>{c8v1a389.call(owner,ctx,owner);}},"238":{"9":(ctx,owner)=>{c8v1a390.call(owner,ctx,owner);}},"271":{"22":(ctx,owner)=>{c8v1a469.call(owner,ctx,owner);}},"299":{"22":(ctx,owner)=>{c8v1a491.call(owner,ctx,owner);}},"309":{"9":(ctx,owner)=>{c8v1a492.call(owner,ctx,owner);}},"321":{"9":(ctx,owner)=>{c8v1a493.call(owner,ctx,owner);}},"322":{"137":(ctx,owner)=>{c8v1a494.call(owner,ctx,owner);},"144":(ctx,owner)=>{c8v1a495.call(owner,ctx,owner);}},"323":{"1":(ctx,owner)=>{c8v1a496.call(owner,ctx,owner);}},"344":{"16":(ctx,owner)=>{c8v1a497.call(owner,ctx,owner);}},"351":{"8":(ctx,owner)=>{c8v1a498.call(owner,ctx,owner);}},"353":{"1":(ctx,owner)=>{c8v1a499.call(owner,ctx,owner);}},"358":{"13":(ctx,owner)=>{c8v1a500.call(owner,ctx,owner);}},"369":{"22":(ctx,owner)=>{c8v1a501.call(owner,ctx,owner);}},"379":{"20":(ctx,owner)=>{c8v1a502.call(owner,ctx,owner);}},"386":{"8":(ctx,owner)=>{c8v1a503.call(owner,ctx,owner);}},"398":{"16":(ctx,owner)=>{c8v1a504.call(owner,ctx,owner);}},"404":{"10":(ctx,owner)=>{c8v1a505.call(owner,ctx,owner);}},"421":{"1":(ctx,owner)=>{c8v1a506.call(owner,ctx,owner);}},"437":{"1":(ctx,owner)=>{c8v1a507.call(owner,ctx,owner);},"61":(ctx,owner)=>{c8v1a509.call(owner,ctx,owner);},"121":(ctx,owner)=>{c8v1a508.call(owner,ctx,owner);}},"488":{"21":(ctx,owner)=>{c8v1a512.call(owner,ctx,owner);}},"502":{"21":(ctx,owner)=>{c8v1a513.call(owner,ctx,owner);}},"509":{"11":(ctx,owner)=>{c8v1a514.call(owner,ctx,owner);}},"517":{"11":(ctx,owner)=>{c8v1a515.call(owner,ctx,owner);}},"525":{"12":(ctx,owner)=>{c8v1a516.call(owner,ctx,owner);}},"532":{"12":(ctx,owner)=>{c8v1a517.call(owner,ctx,owner);}},"547":{"25":(ctx,owner)=>{c8v1a518.call(owner,ctx,owner);}},"562":{"25":(ctx,owner)=>{c8v1a519.call(owner,ctx,owner);}},"574":{"21":(ctx,owner)=>{c8v1a520.call(owner,ctx,owner);}},"586":{"21":(ctx,owner)=>{c8v1a521.call(owner,ctx,owner);}},"595":{"11":(ctx,owner)=>{c8v1a522.call(owner,ctx,owner);}},"603":{"11":(ctx,owner)=>{c8v1a523.call(owner,ctx,owner);}},"626":{"35":(ctx,owner)=>{c8v1a524.call(owner,ctx,owner);}},"649":{"35":(ctx,owner)=>{c8v1a525.call(owner,ctx,owner);}},"655":{"9":(ctx,owner)=>{c8v1a526.call(owner,ctx,owner);}},"656":{"119":(ctx,owner)=>{c8v1a527.call(owner,ctx,owner);},"126":(ctx,owner)=>{c8v1a528.call(owner,ctx,owner);}},"657":{"1":(ctx,owner)=>{c8v1a529.call(owner,ctx,owner);}},"707":{"19":(ctx,owner)=>{c8v1a530.call(owner,ctx,owner);}},"718":{"19":(ctx,owner)=>{c8v1a531.call(owner,ctx,owner);}},"722":{"17":(ctx,owner)=>{c8v1a532.call(owner,ctx,owner);}},"730":{"11":(ctx,owner)=>{c8v1a533.call(owner,ctx,owner);}},"739":{"11":(ctx,owner)=>{c8v1a534.call(owner,ctx,owner);}},"740":{"1":(ctx,owner)=>{c8v1a535.call(owner,ctx,owner);}},"746":{"7":(ctx,owner)=>{c8v1a536.call(owner,ctx,owner);}},"750":{"7":(ctx,owner)=>{c8v1a537.call(owner,ctx,owner);}},"761":{"22":(ctx,owner)=>{c8v1a538.call(owner,ctx,owner);}},"771":{"22":(ctx,owner)=>{c8v1a539.call(owner,ctx,owner);}},"785":{"18":(ctx,owner)=>{c8v1a540.call(owner,ctx,owner);}},"795":{"18":(ctx,owner)=>{c8v1a541.call(owner,ctx,owner);}},"802":{"9":(ctx,owner)=>{c8v1a542.call(owner,ctx,owner);}},"808":{"9":(ctx,owner)=>{c8v1a543.call(owner,ctx,owner);}},"839":{"22":(ctx,owner)=>{c8v1a544.call(owner,ctx,owner);}},"861":{"22":(ctx,owner)=>{c8v1a545.call(owner,ctx,owner);}},"870":{"9":(ctx,owner)=>{c8v1a546.call(owner,ctx,owner);}},"882":{"9":(ctx,owner)=>{c8v1a547.call(owner,ctx,owner);}},"883":{"137":(ctx,owner)=>{c8v1a548.call(owner,ctx,owner);},"144":(ctx,owner)=>{c8v1a549.call(owner,ctx,owner);}},"884":{"1":(ctx,owner)=>{c8v1a550.call(owner,ctx,owner);}},"885":{"1":(ctx,owner)=>{c8v1a551.call(owner,ctx,owner);}},"886":{"1":(ctx,owner)=>{c8v1a552.call(owner,ctx,owner);},"30":(ctx,owner)=>{c8v1a553.call(owner,ctx,owner);},"31":(ctx,owner)=>{c8v1a554.call(owner,ctx,owner);}},"898":{"1":(ctx,owner)=>{c8v1a555.call(owner,ctx,owner);}},"998":{"9":(ctx,owner)=>{c8v1a556.call(owner,ctx,owner);}},"1006":{"9":(ctx,owner)=>{c8v1a310.call(owner,ctx,owner);}},"1011":{"10":(ctx,owner)=>{c8v1a311.call(owner,ctx,owner);}},"1016":{"9":(ctx,owner)=>{c8v1a312.call(owner,ctx,owner);}},"1021":{"9":(ctx,owner)=>{c8v1a313.call(owner,ctx,owner);}},"1030":{"9":(ctx,owner)=>{c8v1a314.call(owner,ctx,owner);}},"1034":{"9":(ctx,owner)=>{c8v1a315.call(owner,ctx,owner);}},"1053":{"9":(ctx,owner)=>{c8v1a317.call(owner,ctx,owner);}},"1066":{"26":(ctx,owner)=>{c8v1a318.call(owner,ctx,owner);}},"1090":{"26":(ctx,owner)=>{c8v1a319.call(owner,ctx,owner);}},"1104":{"28":(ctx,owner)=>{c8v1a320.call(owner,ctx,owner);}},"1118":{"28":(ctx,owner)=>{c8v1a321.call(owner,ctx,owner);}},"1132":{"32":(ctx,owner)=>{c8v1a322.call(owner,ctx,owner);}},"1148":{"28":(ctx,owner)=>{c8v1a323.call(owner,ctx,owner);}},"1163":{"32":(ctx,owner)=>{c8v1a324.call(owner,ctx,owner);}},"1179":{"28":(ctx,owner)=>{c8v1a325.call(owner,ctx,owner);}},"1229":{"54":(ctx,owner)=>{c8v1a327.call(owner,ctx,owner);}},"1247":{"54":(ctx,owner)=>{c8v1a328.call(owner,ctx,owner);}},"1248":{"1":(ctx,owner)=>{c8v1a329.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a330.call(owner,ctx,owner);}},"1285":{"1":(ctx,owner)=>{c8v1a332.call(owner,ctx,owner);}},"1286":{"1":(ctx,owner)=>{c8v1a333.call(owner,ctx,owner);}},"1302":{"1":(ctx,owner)=>{c8v1a334.call(owner,ctx,owner);}},"1315":{"1":(ctx,owner)=>{c8v1a335.call(owner,ctx,owner);}},"1325":{"1":(ctx,owner)=>{c8v1a336.call(owner,ctx,owner);}},"1334":{"1":(ctx,owner)=>{c8v1a337.call(owner,ctx,owner);}},"1335":{"1":(ctx,owner)=>{c8v1a338.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a339.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v1a340.call(owner,ctx,owner);}},"1342":{"1":(ctx,owner)=>{c8v1a341.call(owner,ctx,owner);}},"1349":{"1":(ctx,owner)=>{c8v1a342.call(owner,ctx,owner);}},"1354":{"1":(ctx,owner)=>{c8v1a343.call(owner,ctx,owner);}},"1355":{"1":(ctx,owner)=>{c8v1a344.call(owner,ctx,owner);}},"1363":{"1":(ctx,owner)=>{c8v1a345.call(owner,ctx,owner);}},"1371":{"1":(ctx,owner)=>{c8v1a346.call(owner,ctx,owner);}},"1379":{"1":(ctx,owner)=>{c8v1a347.call(owner,ctx,owner);}},"1380":{"1":(ctx,owner)=>{c8v1a349.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a350.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v1a351.call(owner,ctx,owner);}},"1409":{"1":(ctx,owner)=>{c8v1a352.call(owner,ctx,owner);c8v1a353.call(owner,ctx,owner);}},"1414":{"1":(ctx,owner)=>{c8v1a354.call(owner,ctx,owner);}},"1505":{"1":(ctx,owner)=>{c8v1a355.call(owner,ctx,owner);c8v1a356.call(owner,ctx,owner);c8v1a357.call(owner,ctx,owner);}},"1618":{"1":(ctx,owner)=>{c8v1a360.call(owner,ctx,owner);c8v1a361.call(owner,ctx,owner);},"45":(ctx,owner)=>{c8v1a363.call(owner,ctx,owner);},"99":(ctx,owner)=>{c8v1a364.call(owner,ctx,owner);},"401":(ctx,owner)=>{c8v1a362.call(owner,ctx,owner);}},"1699":{"1":(ctx,owner)=>{c8v1a367.call(owner,ctx,owner);c8v1a368.call(owner,ctx,owner);},"45":(ctx,owner)=>{c8v1a370.call(owner,ctx,owner);},"99":(ctx,owner)=>{c8v1a371.call(owner,ctx,owner);},"409":(ctx,owner)=>{c8v1a369.call(owner,ctx,owner);}},"1777":{"1":(ctx,owner)=>{c8v1a372.call(owner,ctx,owner);c8v1a373.call(owner,ctx,owner);}},"1845":{"1":(ctx,owner)=>{c8v1a375.call(owner,ctx,owner);c8v1a376.call(owner,ctx,owner);},"312":(ctx,owner)=>{c8v1a377.call(owner,ctx,owner);}},"2234":{"1":(ctx,owner)=>{c8v1a383.call(owner,ctx,owner);},"1681":(ctx,owner)=>{c8v1a384.call(owner,ctx,owner);}},"2304":{"1":(ctx,owner)=>{c8v1a386.call(owner,ctx,owner);c8v1a387.call(owner,ctx,owner);},"320":(ctx,owner)=>{c8v1a388.call(owner,ctx,owner);}},"2413":{"1":(ctx,owner)=>{c8v1a391.call(owner,ctx,owner);c8v1a392.call(owner,ctx,owner);},"298":(ctx,owner)=>{c8v1a393.call(owner,ctx,owner);}},"2428":{"1":(ctx,owner)=>{c8v1a394.call(owner,ctx,owner);}},"2431":{"1":(ctx,owner)=>{c8v1a395.call(owner,ctx,owner);}},"2432":{"1":(ctx,owner)=>{c8v1a396.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v1a397.call(owner,ctx,owner);}},"2463":{"1":(ctx,owner)=>{c8v1a398.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a400.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v1a399.call(owner,ctx,owner);}},"2469":{"1":(ctx,owner)=>{c8v1a401.call(owner,ctx,owner);}},"2470":{"1":(ctx,owner)=>{c8v1a402.call(owner,ctx,owner);}},"2472":{"1":(ctx,owner)=>{c8v1a403.call(owner,ctx,owner);}},"2478":{"1":(ctx,owner)=>{c8v1a404.call(owner,ctx,owner);}},"2489":{"1":(ctx,owner)=>{c8v1a405.call(owner,ctx,owner);}},"2490":{"1":(ctx,owner)=>{c8v1a406.call(owner,ctx,owner);}},"2493":{"1":(ctx,owner)=>{c8v1a407.call(owner,ctx,owner);},"13":(ctx,owner)=>{c8v1a408.call(owner,ctx,owner);}},"2500":{"1":(ctx,owner)=>{c8v1a409.call(owner,ctx,owner);}},"2502":{"1":(ctx,owner)=>{c8v1a410.call(owner,ctx,owner);}},"2505":{"1":(ctx,owner)=>{c8v1a411.call(owner,ctx,owner);}},"2506":{"1":(ctx,owner)=>{c8v1a412.call(owner,ctx,owner);}},"2508":{"1":(ctx,owner)=>{c8v1a413.call(owner,ctx,owner);}},"2512":{"1":(ctx,owner)=>{c8v1a414.call(owner,ctx,owner);}},"2517":{"1":(ctx,owner)=>{c8v1a415.call(owner,ctx,owner);}},"2519":{"1":(ctx,owner)=>{c8v1a416.call(owner,ctx,owner);}},"2521":{"1":(ctx,owner)=>{c8v1a417.call(owner,ctx,owner);}},"2531":{"1":(ctx,owner)=>{c8v1a418.call(owner,ctx,owner);},"19":(ctx,owner)=>{c8v1a419.call(owner,ctx,owner);}},"2532":{"1":(ctx,owner)=>{c8v1a420.call(owner,ctx,owner);}},"2544":{"1":(ctx,owner)=>{c8v1a421.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a422.call(owner,ctx,owner);},"28":(ctx,owner)=>{c8v1a423.call(owner,ctx,owner);}},"2580":{"1":(ctx,owner)=>{c8v1a424.call(owner,ctx,owner);},"50":(ctx,owner)=>{c8v1a425.call(owner,ctx,owner);}},"2603":{"1":(ctx,owner)=>{c8v1a426.call(owner,ctx,owner);},"17":(ctx,owner)=>{c8v1a427.call(owner,ctx,owner);}},"2610":{"1":(ctx,owner)=>{c8v1a428.call(owner,ctx,owner);},"19":(ctx,owner)=>{c8v1a429.call(owner,ctx,owner);}},"2617":{"1":(ctx,owner)=>{c8v1a430.call(owner,ctx,owner);}},"2622":{"1":(ctx,owner)=>{c8v1a431.call(owner,ctx,owner);}},"2632":{"1":(ctx,owner)=>{c8v1a432.call(owner,ctx,owner);},"12":(ctx,owner)=>{c8v1a433.call(owner,ctx,owner);}},"2649":{"1":(ctx,owner)=>{c8v1a434.call(owner,ctx,owner);}},"2666":{"1":(ctx,owner)=>{c8v1a435.call(owner,ctx,owner);}},"2667":{"1":(ctx,owner)=>{c8v1a436.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a440.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v1a462.call(owner,ctx,owner);},"4":(ctx,owner)=>{c8v1a463.call(owner,ctx,owner);},"5":(ctx,owner)=>{c8v1a464.call(owner,ctx,owner);},"6":(ctx,owner)=>{c8v1a465.call(owner,ctx,owner);},"7":(ctx,owner)=>{c8v1a466.call(owner,ctx,owner);},"8":(ctx,owner)=>{c8v1a467.call(owner,ctx,owner);}},"2681":{"1":(ctx,owner)=>{c8v1a468.call(owner,ctx,owner);}},"2754":{"1":(ctx,owner)=>{c8v1a470.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a471.call(owner,ctx,owner);}},"2785":{"1":(ctx,owner)=>{c8v1a472.call(owner,ctx,owner);}},"2799":{"1":(ctx,owner)=>{c8v1a473.call(owner,ctx,owner);}},"2800":{"1":(ctx,owner)=>{c8v1a474.call(owner,ctx,owner);}},"2801":{"1":(ctx,owner)=>{c8v1a476.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a478.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v1a477.call(owner,ctx,owner);},"20":(ctx,owner)=>{c8v1a479.call(owner,ctx,owner);}},"2809":{"1":(ctx,owner)=>{c8v1a480.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a483.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v1a485.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v1a481.call(owner,ctx,owner);},"12":(ctx,owner)=>{c8v1a482.call(owner,ctx,owner);},"20":(ctx,owner)=>{c8v1a484.call(owner,ctx,owner);}},"2819":{"1":(ctx,owner)=>{c8v1a486.call(owner,ctx,owner);}},"2820":{"1":(ctx,owner)=>{c8v1a487.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a489.call(owner,ctx,owner);},"11":(ctx,owner)=>{c8v1a488.call(owner,ctx,owner);},"20":(ctx,owner)=>{c8v1a490.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c8v1a557.call(owner,ctx,owner);},"2":(ctx,owner)=>{c8v1a558.call(owner,ctx,owner);},"3":(ctx,owner)=>{c8v1a559.call(owner,ctx,owner);},"4":(ctx,owner)=>{c8v1a560.call(owner,ctx,owner);}}},frameActions:{"18":{"1":[c8v1a378],"2":[c8v1a379],"7":[c8v1a380]},"44":{"1":[c8v1a510]},"46":{"1":[c8v1a511]},"105":{"19":[c8v1a316]},"120":{"19":[c8v1a326]},"125":{"17":[c8v1a331]},"138":{"11":[c8v1a348]},"154":{"11":[c8v1a358]},"156":{"1":[c8v1a359]},"162":{"7":[c8v1a365]},"168":{"7":[c8v1a366]},"179":{"22":[c8v1a374]},"190":{"22":[c8v1a381]},"208":{"18":[c8v1a382]},"224":{"18":[c8v1a385]},"231":{"9":[c8v1a389]},"238":{"9":[c8v1a390]},"271":{"22":[c8v1a469]},"299":{"22":[c8v1a491]},"309":{"9":[c8v1a492]},"321":{"9":[c8v1a493]},"322":{"137":[c8v1a494],"144":[c8v1a495]},"323":{"1":[c8v1a496]},"344":{"16":[c8v1a497]},"351":{"8":[c8v1a498]},"353":{"1":[c8v1a499]},"358":{"13":[c8v1a500]},"369":{"22":[c8v1a501]},"379":{"20":[c8v1a502]},"386":{"8":[c8v1a503]},"398":{"16":[c8v1a504]},"404":{"10":[c8v1a505]},"421":{"1":[c8v1a506]},"437":{"1":[c8v1a507],"61":[c8v1a509],"121":[c8v1a508]},"488":{"21":[c8v1a512]},"502":{"21":[c8v1a513]},"509":{"11":[c8v1a514]},"517":{"11":[c8v1a515]},"525":{"12":[c8v1a516]},"532":{"12":[c8v1a517]},"547":{"25":[c8v1a518]},"562":{"25":[c8v1a519]},"574":{"21":[c8v1a520]},"586":{"21":[c8v1a521]},"595":{"11":[c8v1a522]},"603":{"11":[c8v1a523]},"626":{"35":[c8v1a524]},"649":{"35":[c8v1a525]},"655":{"9":[c8v1a526]},"656":{"119":[c8v1a527],"126":[c8v1a528]},"657":{"1":[c8v1a529]},"707":{"19":[c8v1a530]},"718":{"19":[c8v1a531]},"722":{"17":[c8v1a532]},"730":{"11":[c8v1a533]},"739":{"11":[c8v1a534]},"740":{"1":[c8v1a535]},"746":{"7":[c8v1a536]},"750":{"7":[c8v1a537]},"761":{"22":[c8v1a538]},"771":{"22":[c8v1a539]},"785":{"18":[c8v1a540]},"795":{"18":[c8v1a541]},"802":{"9":[c8v1a542]},"808":{"9":[c8v1a543]},"839":{"22":[c8v1a544]},"861":{"22":[c8v1a545]},"870":{"9":[c8v1a546]},"882":{"9":[c8v1a547]},"883":{"137":[c8v1a548],"144":[c8v1a549]},"884":{"1":[c8v1a550]},"885":{"1":[c8v1a551]},"886":{"1":[c8v1a552],"30":[c8v1a553],"31":[c8v1a554]},"898":{"1":[c8v1a555]},"998":{"9":[c8v1a556]},"1006":{"9":[c8v1a310]},"1011":{"10":[c8v1a311]},"1016":{"9":[c8v1a312]},"1021":{"9":[c8v1a313]},"1030":{"9":[c8v1a314]},"1034":{"9":[c8v1a315]},"1053":{"9":[c8v1a317]},"1066":{"26":[c8v1a318]},"1090":{"26":[c8v1a319]},"1104":{"28":[c8v1a320]},"1118":{"28":[c8v1a321]},"1132":{"32":[c8v1a322]},"1148":{"28":[c8v1a323]},"1163":{"32":[c8v1a324]},"1179":{"28":[c8v1a325]},"1229":{"54":[c8v1a327]},"1247":{"54":[c8v1a328]},"1248":{"1":[c8v1a329],"2":[c8v1a330]},"1285":{"1":[c8v1a332]},"1286":{"1":[c8v1a333]},"1302":{"1":[c8v1a334]},"1315":{"1":[c8v1a335]},"1325":{"1":[c8v1a336]},"1334":{"1":[c8v1a337]},"1335":{"1":[c8v1a338],"2":[c8v1a339],"3":[c8v1a340]},"1342":{"1":[c8v1a341]},"1349":{"1":[c8v1a342]},"1354":{"1":[c8v1a343]},"1355":{"1":[c8v1a344]},"1363":{"1":[c8v1a345]},"1371":{"1":[c8v1a346]},"1379":{"1":[c8v1a347]},"1380":{"1":[c8v1a349],"2":[c8v1a350],"3":[c8v1a351]},"1409":{"1":[c8v1a352,c8v1a353]},"1414":{"1":[c8v1a354]},"1505":{"1":[c8v1a355,c8v1a356,c8v1a357]},"1618":{"1":[c8v1a360,c8v1a361],"45":[c8v1a363],"99":[c8v1a364],"401":[c8v1a362]},"1699":{"1":[c8v1a367,c8v1a368],"45":[c8v1a370],"99":[c8v1a371],"409":[c8v1a369]},"1777":{"1":[c8v1a372,c8v1a373]},"1845":{"1":[c8v1a375,c8v1a376],"312":[c8v1a377]},"2234":{"1":[c8v1a383],"1681":[c8v1a384]},"2304":{"1":[c8v1a386,c8v1a387],"320":[c8v1a388]},"2413":{"1":[c8v1a391,c8v1a392],"298":[c8v1a393]},"2428":{"1":[c8v1a394]},"2431":{"1":[c8v1a395]},"2432":{"1":[c8v1a396],"11":[c8v1a397]},"2463":{"1":[c8v1a398],"2":[c8v1a400],"11":[c8v1a399]},"2469":{"1":[c8v1a401]},"2470":{"1":[c8v1a402]},"2472":{"1":[c8v1a403]},"2478":{"1":[c8v1a404]},"2489":{"1":[c8v1a405]},"2490":{"1":[c8v1a406]},"2493":{"1":[c8v1a407],"13":[c8v1a408]},"2500":{"1":[c8v1a409]},"2502":{"1":[c8v1a410]},"2505":{"1":[c8v1a411]},"2506":{"1":[c8v1a412]},"2508":{"1":[c8v1a413]},"2512":{"1":[c8v1a414]},"2517":{"1":[c8v1a415]},"2519":{"1":[c8v1a416]},"2521":{"1":[c8v1a417]},"2531":{"1":[c8v1a418],"19":[c8v1a419]},"2532":{"1":[c8v1a420]},"2544":{"1":[c8v1a421],"2":[c8v1a422],"28":[c8v1a423]},"2580":{"1":[c8v1a424],"50":[c8v1a425]},"2603":{"1":[c8v1a426],"17":[c8v1a427]},"2610":{"1":[c8v1a428],"19":[c8v1a429]},"2617":{"1":[c8v1a430]},"2622":{"1":[c8v1a431]},"2632":{"1":[c8v1a432],"12":[c8v1a433]},"2649":{"1":[c8v1a434]},"2666":{"1":[c8v1a435]},"2667":{"1":[c8v1a436],"2":[c8v1a440],"3":[c8v1a462],"4":[c8v1a463],"5":[c8v1a464],"6":[c8v1a465],"7":[c8v1a466],"8":[c8v1a467]},"2681":{"1":[c8v1a468]},"2754":{"1":[c8v1a470],"2":[c8v1a471]},"2785":{"1":[c8v1a472]},"2799":{"1":[c8v1a473]},"2800":{"1":[c8v1a474]},"2801":{"1":[c8v1a476],"2":[c8v1a478],"11":[c8v1a477],"20":[c8v1a479]},"2809":{"1":[c8v1a480],"2":[c8v1a483],"3":[c8v1a485],"11":[c8v1a481],"12":[c8v1a482],"20":[c8v1a484]},"2819":{"1":[c8v1a486]},"2820":{"1":[c8v1a487],"2":[c8v1a489],"11":[c8v1a488],"20":[c8v1a490]},"main":{"1":[c8v1a557],"2":[c8v1a558],"3":[c8v1a559],"4":[c8v1a560]}},buttons:{"1273":{"press":(ctx,owner)=>{c8v1a283.call(owner,ctx,owner);},"release":(ctx,owner)=>{c8v1a284.call(owner,ctx,owner);}},"1278":{"release":(ctx,owner)=>{c8v1a285.call(owner,ctx,owner);}},"1298":{"release":(ctx,owner)=>{c8v1a286.call(owner,ctx,owner);}},"1300":{"release":(ctx,owner)=>{c8v1a287.call(owner,ctx,owner);}},"2416":{"press":(ctx,owner)=>{c8v1a288.call(owner,ctx,owner);},"release":(ctx,owner)=>{c8v1a289.call(owner,ctx,owner);}},"2441":{"release":(ctx,owner)=>{c8v1a290.call(owner,ctx,owner);}},"2447":{"release":(ctx,owner)=>{c8v1a291.call(owner,ctx,owner);}},"2452":{"release":(ctx,owner)=>{c8v1a292.call(owner,ctx,owner);}},"2461":{"release":(ctx,owner)=>{c8v1a293.call(owner,ctx,owner);}},"2673":{"release":(ctx,owner)=>{c8v1a294.call(owner,ctx,owner);}},"2727":{"release":(ctx,owner)=>{c8v1a295.call(owner,ctx,owner);}},"2728":{"release":(ctx,owner)=>{c8v1a296.call(owner,ctx,owner);}},"2729":{"release":(ctx,owner)=>{c8v1a297.call(owner,ctx,owner);}},"2730":{"release":(ctx,owner)=>{c8v1a298.call(owner,ctx,owner);}},"2731":{"release":(ctx,owner)=>{c8v1a299.call(owner,ctx,owner);}},"2765":{"release":(ctx,owner)=>{c8v1a300.call(owner,ctx,owner);}},"2768":{"release":(ctx,owner)=>{c8v1a301.call(owner,ctx,owner);}},"2772":{"release":(ctx,owner)=>{c8v1a302.call(owner,ctx,owner);}},"2774":{"release":(ctx,owner)=>{c8v1a303.call(owner,ctx,owner);}},"2776":{"release":(ctx,owner)=>{c8v1a304.call(owner,ctx,owner);}},"2778":{"release":(ctx,owner)=>{c8v1a305.call(owner,ctx,owner);}},"2784":{"press":(ctx,owner)=>{c8v1a306.call(owner,ctx,owner);},"release":(ctx,owner)=>{c8v1a307.call(owner,ctx,owner);}},"2811":{"release":(ctx,owner)=>{c8v1a308.call(owner,ctx,owner);}},"2828":{"release":(ctx,owner)=>{c8v1a309.call(owner,ctx,owner);}}},clips:[{"parent":"2667","frame":1,"character":"2495","name":"","depth":30,"event":"enterFrame","handler":c8v1a437},{"parent":"2667","frame":1,"character":"2495","name":"","depth":32,"event":"enterFrame","handler":c8v1a438},{"parent":"2667","frame":1,"character":"2495","name":"","depth":34,"event":"enterFrame","handler":c8v1a439},{"parent":"2667","frame":2,"character":"2478","name":"","depth":68,"event":"enterFrame","handler":c8v1a441},{"parent":"2667","frame":2,"character":"2495","name":"","depth":15,"event":"enterFrame","handler":c8v1a442},{"parent":"2667","frame":2,"character":"2495","name":"","depth":15,"event":"load","handler":c8v1a443},{"parent":"2667","frame":2,"character":"2495","name":"","depth":17,"event":"enterFrame","handler":c8v1a444},{"parent":"2667","frame":2,"character":"2495","name":"","depth":17,"event":"load","handler":c8v1a445},{"parent":"2667","frame":2,"character":"2495","name":"","depth":19,"event":"enterFrame","handler":c8v1a446},{"parent":"2667","frame":2,"character":"2495","name":"","depth":19,"event":"load","handler":c8v1a447},{"parent":"2667","frame":2,"character":"2495","name":"","depth":21,"event":"enterFrame","handler":c8v1a448},{"parent":"2667","frame":2,"character":"2495","name":"","depth":21,"event":"load","handler":c8v1a449},{"parent":"2667","frame":2,"character":"2495","name":"","depth":27,"event":"enterFrame","handler":c8v1a450},{"parent":"2667","frame":2,"character":"2495","name":"","depth":27,"event":"load","handler":c8v1a451},{"parent":"2667","frame":2,"character":"2495","name":"","depth":29,"event":"enterFrame","handler":c8v1a452},{"parent":"2667","frame":2,"character":"2495","name":"","depth":29,"event":"load","handler":c8v1a453},{"parent":"2667","frame":2,"character":"2495","name":"","depth":31,"event":"enterFrame","handler":c8v1a454},{"parent":"2667","frame":2,"character":"2495","name":"","depth":31,"event":"load","handler":c8v1a455},{"parent":"2667","frame":2,"character":"2495","name":"","depth":33,"event":"enterFrame","handler":c8v1a456},{"parent":"2667","frame":2,"character":"2495","name":"","depth":33,"event":"load","handler":c8v1a457},{"parent":"2667","frame":2,"character":"2495","name":"","depth":35,"event":"enterFrame","handler":c8v1a458},{"parent":"2667","frame":2,"character":"2495","name":"","depth":35,"event":"load","handler":c8v1a459},{"parent":"2667","frame":2,"character":"2495","name":"","depth":37,"event":"enterFrame","handler":c8v1a460},{"parent":"2667","frame":2,"character":"2495","name":"","depth":37,"event":"load","handler":c8v1a461},{"parent":"2800","frame":1,"character":"2681","name":"","depth":11,"event":"enterFrame","handler":c8v1a475}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"18":["txt"],"44":[],"46":["_visible"],"105":[],"120":[],"125":[],"138":[],"154":[],"156":["_visible"],"162":[],"168":[],"179":[],"190":[],"208":[],"224":[],"231":[],"238":[],"271":[],"299":[],"309":[],"321":[],"322":[],"323":["_visible"],"344":[],"351":[],"353":["_visible"],"358":[],"369":[],"379":[],"386":[],"398":[],"404":[],"421":[],"437":[],"488":[],"502":[],"509":[],"517":[],"525":[],"532":[],"547":[],"562":[],"574":[],"586":[],"595":[],"603":[],"626":[],"649":[],"655":[],"656":[],"657":["_visible"],"707":[],"718":[],"722":[],"730":[],"739":[],"740":["_visible"],"746":[],"750":[],"761":[],"771":[],"785":[],"795":[],"802":[],"808":[],"839":[],"861":[],"870":[],"882":[],"883":[],"884":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","touxiang","upKey","x1","x2","xMax","xMin"],"885":["tt"],"886":["skipFrame"],"898":["_x","_y","onEnterFrame","x","y"],"998":[],"1006":[],"1011":[],"1016":[],"1021":[],"1030":[],"1034":[],"1053":[],"1066":[],"1090":[],"1104":[],"1118":[],"1132":[],"1148":[],"1163":[],"1179":[],"1229":[],"1247":[],"1248":[],"1273":[],"1278":[],"1285":["component","track_mc"],"1286":[],"1298":["qqxflash_home"],"1300":[],"1302":[],"1315":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1325":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1334":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1335":[],"1342":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1349":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1354":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1355":[],"1363":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1371":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1379":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1380":[],"1409":["_totalframes","mc","skipFrame"],"1414":["_totalframes","skipFrame"],"1505":["_totalframes","mc","skipFrame"],"1618":["_totalframes","mc","skipFrame"],"1699":["_totalframes","mc","skipFrame"],"1777":["_totalframes","mc","skipFrame"],"1845":["_totalframes","mc","skipFrame"],"2234":["mc","skipFrame"],"2304":["_totalframes","mc","skipFrame"],"2413":["_totalframes","mc","skipFrame"],"2416":["aim","xxx","yyy"],"2428":["aim","iii","name1","nn","onMouseUp","xxx","yyy"],"2431":[],"2432":["_currentframe","back","onEnterFrame"],"2441":[],"2447":["helper"],"2452":[],"2461":[],"2463":["btn"],"2469":[],"2470":[],"2472":["_visible","hitted","onEnterFrame"],"2478":["_visible"],"2489":[],"2490":["mc","onEnterFrame","tempDepths","xx","yy"],"2493":[],"2495":["ff"],"2500":[],"2502":[],"2505":[],"2506":["_visible"],"2508":[],"2512":[],"2517":[],"2519":["_visible","hitted","onEnterFrame","ox","oy"],"2521":["_visible","hitted","onEnterFrame","ox","oy"],"2531":[],"2532":["_visible"],"2544":[],"2580":[],"2603":["i","iii","name1","num_array","onEnterFrame"],"2610":[],"2617":[],"2622":["_visible","hitted","onEnterFrame","ox","oy"],"2632":[],"2649":["i","iii","name1","num_array","onEnterFrame"],"2666":[],"2667":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl2","bl3","bl4","bl5","bl6","bl7","bl8","blocks","blockx","blocky","changeMovies","changes","even2","even3","even4","events","hitter","i","kong","map","minScale","player","playerScale","shuai1","shuai2","talkArea0","talkArea0xxx","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman"],"2673":["gp"],"2681":[],"2727":[],"2728":[],"2729":[],"2730":[],"2731":[],"2754":["actKey","downKey","leftKey","rightKey","upKey"],"2765":["_quality"],"2768":["_quality"],"2772":["_quality"],"2774":[],"2776":["allShow"],"2778":["allShow"],"2784":["draging","onEnterFrame"],"2785":["_x","bb","draging","onEnterFrame"],"2799":["btn"],"2800":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2801":["btn","gp"],"2809":["i","onEnterFrame"],"2811":["aim"],"2819":[],"2820":["delay","fadeOut","item"],"2828":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","even2","even3","even4","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","i","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifemc","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","showmc","speed","speedx","speedy","step","steps","suook","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:1226":{"read":[],"write":[]},"0:1231":{"read":[],"write":[]},"0:1251":{"read":["qqxflash_home"],"write":[]},"0:1253":{"read":[],"write":[]},"0:2332":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"0:2357":{"read":[],"write":[]},"0:2363":{"read":["helper"],"write":[]},"0:2368":{"read":[],"write":[]},"0:2377":{"read":[],"write":[]},"0:2589":{"read":["gp"],"write":["gp"]},"0:2635":{"read":[],"write":[]},"0:2636":{"read":[],"write":[]},"0:2637":{"read":[],"write":[]},"0:2638":{"read":[],"write":[]},"0:2639":{"read":[],"write":[]},"0:2673":{"read":["_quality"],"write":["_quality"]},"0:2676":{"read":["_quality"],"write":["_quality"]},"0:2680":{"read":["_quality"],"write":["_quality"]},"0:2682":{"read":[],"write":[]},"0:2684":{"read":["allShow"],"write":[]},"0:2686":{"read":["allShow"],"write":[]},"0:2692":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:2719":{"read":["aim"],"write":[]},"0:2736":{"read":[],"write":[]},"0:1007":{"read":[],"write":[]},"0:102":{"read":[],"write":[]},"0:1022":{"read":[],"write":[]},"0:1037":{"read":[],"write":[]},"0:1051":{"read":[],"write":[]},"0:1065":{"read":[],"write":[]},"0:1083":{"read":[],"write":[]},"0:1097":{"read":[],"write":[]},"0:1113":{"read":[],"write":[]},"0:1135":{"read":["items"],"write":[]},"0:1155":{"read":["items"],"write":[]},"0:117":{"read":[],"write":[]},"0:1180":{"read":[],"write":[]},"0:1199":{"read":[],"write":[]},"0:1200":{"read":[],"write":[]},"0:1201":{"read":[],"write":[]},"0:121":{"read":[],"write":[]},"0:1238":{"read":["component","track_mc"],"write":["component"]},"0:1239":{"read":[],"write":[]},"0:1255":{"read":[],"write":[]},"0:1268":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1278":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1287":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1288":{"read":[],"write":[]},"0:1295":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1302":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1307":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1308":{"read":[],"write":[]},"0:1316":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1324":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1332":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1333":{"read":[],"write":[]},"0:134":{"read":[],"write":[]},"0:1362":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:1367":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1446":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:150":{"read":[],"write":[]},"0:152":{"read":["_visible"],"write":["_visible"]},"0:1556":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:158":{"read":[],"write":[]},"0:1635":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:164":{"read":[],"write":[]},"0:1714":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:175":{"read":[],"write":[]},"0:1782":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:185":{"read":[],"write":[]},"0:18":{"read":["txt"],"write":[]},"0:203":{"read":[],"write":[]},"0:2158":{"read":["mc","skipFrame"],"write":["skipFrame"]},"0:218":{"read":[],"write":[]},"0:2228":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:225":{"read":[],"write":[]},"0:231":{"read":[],"write":[]},"0:2329":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:2344":{"read":["aim","iii","name1","nn","onMouseUp","xxx","yyy"],"write":["aim","name1","nn","onMouseUp","xxx","yyy"]},"0:2347":{"read":[],"write":[]},"0:2348":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:2379":{"read":["btn"],"write":[]},"0:2385":{"read":[],"write":[]},"0:2386":{"read":[],"write":[]},"0:2388":{"read":["_visible","hitted","onEnterFrame"],"write":["_visible","hitted","onEnterFrame"]},"0:2394":{"read":["_visible"],"write":["_visible"]},"0:2405":{"read":[],"write":[]},"0:2406":{"read":["mc","onEnterFrame","tempDepths","xx","yy"],"write":["onEnterFrame","tempDepths","xx","yy"]},"0:2409":{"read":[],"write":[]},"0:2416":{"read":[],"write":[]},"0:2418":{"read":[],"write":[]},"0:2421":{"read":[],"write":[]},"0:2422":{"read":["_visible"],"write":["_visible"]},"0:2424":{"read":[],"write":[]},"0:2428":{"read":[],"write":[]},"0:2433":{"read":[],"write":[]},"0:2435":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2437":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2446":{"read":[],"write":[]},"0:2447":{"read":["_visible"],"write":["_visible"]},"0:2459":{"read":[],"write":[]},"0:2496":{"read":[],"write":[]},"0:2519":{"read":["i","iii","name1","num_array","onEnterFrame"],"write":["i","iii","name1","num_array","onEnterFrame"]},"0:2526":{"read":[],"write":[]},"0:2533":{"read":[],"write":[]},"0:2538":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2548":{"read":[],"write":[]},"0:2565":{"read":["i","iii","name1","num_array","onEnterFrame"],"write":["i","iii","name1","num_array","onEnterFrame"]},"0:2582":{"read":[],"write":[]},"0:2583":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl2","bl3","bl4","bl5","bl6","bl7","bl8","blocks","blockx","blocky","changeMovies","changes","even2","even3","even4","events","hitter","i","kong","map","minScale","player","playerScale","shuai1","shuai2","talkArea0","talkArea0xxx","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","minScale","playerScale","talkArea0xxx","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"0:2411":{"read":["ff"],"write":["ff"]},"0:2597":{"read":[],"write":[]},"0:261":{"read":[],"write":[]},"0:2662":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:2693":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:2707":{"read":["btn"],"write":[]},"0:2708":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"0:2709":{"read":["btn","gp"],"write":[]},"0:2717":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:2727":{"read":[],"write":[]},"0:2728":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:287":{"read":[],"write":[]},"0:297":{"read":[],"write":[]},"0:306":{"read":[],"write":[]},"0:307":{"read":[],"write":[]},"0:328":{"read":[],"write":[]},"0:335":{"read":[],"write":[]},"0:341":{"read":[],"write":[]},"0:352":{"read":[],"write":[]},"0:362":{"read":[],"write":[]},"0:369":{"read":[],"write":[]},"0:381":{"read":[],"write":[]},"0:387":{"read":[],"write":[]},"0:404":{"read":[],"write":[]},"0:422":{"read":[],"write":[]},"0:44":{"read":[],"write":[]},"0:46":{"read":["_visible"],"write":["_visible"]},"0:473":{"read":[],"write":[]},"0:487":{"read":[],"write":[]},"0:495":{"read":[],"write":[]},"0:502":{"read":[],"write":[]},"0:510":{"read":[],"write":[]},"0:517":{"read":[],"write":[]},"0:532":{"read":[],"write":[]},"0:547":{"read":[],"write":[]},"0:559":{"read":[],"write":[]},"0:571":{"read":[],"write":[]},"0:580":{"read":[],"write":[]},"0:588":{"read":[],"write":[]},"0:611":{"read":[],"write":[]},"0:634":{"read":[],"write":[]},"0:640":{"read":[],"write":[]},"0:641":{"read":[],"write":[]},"0:642":{"read":["_visible"],"write":["_visible"]},"0:681":{"read":[],"write":[]},"0:688":{"read":[],"write":[]},"0:692":{"read":[],"write":[]},"0:701":{"read":[],"write":[]},"0:708":{"read":[],"write":[]},"0:709":{"read":["_visible"],"write":["_visible"]},"0:715":{"read":[],"write":[]},"0:716":{"read":[],"write":[]},"0:727":{"read":[],"write":[]},"0:734":{"read":[],"write":[]},"0:748":{"read":[],"write":[]},"0:755":{"read":[],"write":[]},"0:762":{"read":[],"write":[]},"0:767":{"read":[],"write":[]},"0:796":{"read":[],"write":[]},"0:814":{"read":[],"write":[]},"0:823":{"read":[],"write":[]},"0:832":{"read":[],"write":[]},"0:833":{"read":[],"write":[]},"0:834":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","touxiang","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"0:835":{"read":["tt"],"write":["tt"]},"0:836":{"read":["skipFrame"],"write":["skipFrame"]},"0:842":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:949":{"read":[],"write":[]},"0:956":{"read":[],"write":[]},"0:961":{"read":[],"write":[]},"0:966":{"read":[],"write":[]},"0:971":{"read":[],"write":[]},"0:980":{"read":[],"write":[]},"0:985":{"read":[],"write":[]},"0:994":{"read":[],"write":[]},"0:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","even2","even3","even4","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","i","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifemc","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","showmc","speed","speedx","speedy","step","steps","suook","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","even2","even3","even4","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","i","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","suook","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:1273":{"read":[],"write":[]},"1:1278":{"read":[],"write":[]},"1:1298":{"read":["qqxflash_home"],"write":[]},"1:1300":{"read":[],"write":[]},"1:2416":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"1:2441":{"read":[],"write":[]},"1:2447":{"read":["helper"],"write":[]},"1:2452":{"read":[],"write":[]},"1:2461":{"read":[],"write":[]},"1:2673":{"read":["gp"],"write":["gp"]},"1:2727":{"read":[],"write":[]},"1:2728":{"read":[],"write":[]},"1:2729":{"read":[],"write":[]},"1:2730":{"read":[],"write":[]},"1:2731":{"read":[],"write":[]},"1:2765":{"read":["_quality"],"write":["_quality"]},"1:2768":{"read":["_quality"],"write":["_quality"]},"1:2772":{"read":["_quality"],"write":["_quality"]},"1:2774":{"read":[],"write":[]},"1:2776":{"read":["allShow"],"write":[]},"1:2778":{"read":["allShow"],"write":[]},"1:2784":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:2811":{"read":["aim"],"write":[]},"1:2828":{"read":[],"write":[]},"1:1006":{"read":[],"write":[]},"1:1011":{"read":[],"write":[]},"1:1016":{"read":[],"write":[]},"1:1021":{"read":[],"write":[]},"1:1030":{"read":[],"write":[]},"1:1034":{"read":[],"write":[]},"1:105":{"read":[],"write":[]},"1:1053":{"read":[],"write":[]},"1:1066":{"read":[],"write":[]},"1:1090":{"read":[],"write":[]},"1:1104":{"read":[],"write":[]},"1:1118":{"read":[],"write":[]},"1:1132":{"read":[],"write":[]},"1:1148":{"read":[],"write":[]},"1:1163":{"read":[],"write":[]},"1:1179":{"read":[],"write":[]},"1:120":{"read":[],"write":[]},"1:1229":{"read":[],"write":[]},"1:1247":{"read":[],"write":[]},"1:1248":{"read":[],"write":[]},"1:125":{"read":[],"write":[]},"1:1285":{"read":["component","track_mc"],"write":["component"]},"1:1286":{"read":[],"write":[]},"1:1302":{"read":[],"write":[]},"1:1315":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1325":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1334":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1335":{"read":[],"write":[]},"1:1342":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1349":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1354":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1355":{"read":[],"write":[]},"1:1363":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1371":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1379":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:138":{"read":[],"write":[]},"1:1380":{"read":[],"write":[]},"1:1409":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:1414":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1505":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:154":{"read":[],"write":[]},"1:156":{"read":["_visible"],"write":["_visible"]},"1:1618":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:162":{"read":[],"write":[]},"1:168":{"read":[],"write":[]},"1:1699":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:1777":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:179":{"read":[],"write":[]},"1:1845":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:18":{"read":["txt"],"write":[]},"1:190":{"read":[],"write":[]},"1:208":{"read":[],"write":[]},"1:2234":{"read":["mc","skipFrame"],"write":["skipFrame"]},"1:224":{"read":[],"write":[]},"1:2304":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:231":{"read":[],"write":[]},"1:238":{"read":[],"write":[]},"1:2413":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:2428":{"read":["aim","iii","name1","nn","onMouseUp","xxx","yyy"],"write":["aim","name1","nn","onMouseUp","xxx","yyy"]},"1:2431":{"read":[],"write":[]},"1:2432":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:2463":{"read":["btn"],"write":[]},"1:2469":{"read":[],"write":[]},"1:2470":{"read":[],"write":[]},"1:2472":{"read":["_visible","hitted","onEnterFrame"],"write":["_visible","hitted","onEnterFrame"]},"1:2478":{"read":["_visible"],"write":["_visible"]},"1:2489":{"read":[],"write":[]},"1:2490":{"read":["mc","onEnterFrame","tempDepths","xx","yy"],"write":["onEnterFrame","tempDepths","xx","yy"]},"1:2493":{"read":[],"write":[]},"1:2500":{"read":[],"write":[]},"1:2502":{"read":[],"write":[]},"1:2505":{"read":[],"write":[]},"1:2506":{"read":["_visible"],"write":["_visible"]},"1:2508":{"read":[],"write":[]},"1:2512":{"read":[],"write":[]},"1:2517":{"read":[],"write":[]},"1:2519":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2521":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2531":{"read":[],"write":[]},"1:2532":{"read":["_visible"],"write":["_visible"]},"1:2544":{"read":[],"write":[]},"1:2580":{"read":[],"write":[]},"1:2603":{"read":["i","iii","name1","num_array","onEnterFrame"],"write":["i","iii","name1","num_array","onEnterFrame"]},"1:2610":{"read":[],"write":[]},"1:2617":{"read":[],"write":[]},"1:2622":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2632":{"read":[],"write":[]},"1:2649":{"read":["i","iii","name1","num_array","onEnterFrame"],"write":["i","iii","name1","num_array","onEnterFrame"]},"1:2666":{"read":[],"write":[]},"1:2667":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","bl1","bl2","bl3","bl4","bl5","bl6","bl7","bl8","blocks","blockx","blocky","changeMovies","changes","even2","even3","even4","events","hitter","i","kong","map","minScale","player","playerScale","shuai1","shuai2","talkArea0","talkArea0xxx","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","xman"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","minScale","playerScale","talkArea0xxx","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"1:2495":{"read":["ff"],"write":["ff"]},"1:2681":{"read":[],"write":[]},"1:271":{"read":[],"write":[]},"1:2754":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:2785":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:2799":{"read":["btn"],"write":[]},"1:2800":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"1:2801":{"read":["btn","gp"],"write":[]},"1:2809":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:2819":{"read":[],"write":[]},"1:2820":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:299":{"read":[],"write":[]},"1:309":{"read":[],"write":[]},"1:321":{"read":[],"write":[]},"1:322":{"read":[],"write":[]},"1:323":{"read":["_visible"],"write":["_visible"]},"1:344":{"read":[],"write":[]},"1:351":{"read":[],"write":[]},"1:353":{"read":["_visible"],"write":["_visible"]},"1:358":{"read":[],"write":[]},"1:369":{"read":[],"write":[]},"1:379":{"read":[],"write":[]},"1:386":{"read":[],"write":[]},"1:398":{"read":[],"write":[]},"1:404":{"read":[],"write":[]},"1:421":{"read":[],"write":[]},"1:437":{"read":[],"write":[]},"1:44":{"read":[],"write":[]},"1:46":{"read":["_visible"],"write":["_visible"]},"1:488":{"read":[],"write":[]},"1:502":{"read":[],"write":[]},"1:509":{"read":[],"write":[]},"1:517":{"read":[],"write":[]},"1:525":{"read":[],"write":[]},"1:532":{"read":[],"write":[]},"1:547":{"read":[],"write":[]},"1:562":{"read":[],"write":[]},"1:574":{"read":[],"write":[]},"1:586":{"read":[],"write":[]},"1:595":{"read":[],"write":[]},"1:603":{"read":[],"write":[]},"1:626":{"read":[],"write":[]},"1:649":{"read":[],"write":[]},"1:655":{"read":[],"write":[]},"1:656":{"read":[],"write":[]},"1:657":{"read":["_visible"],"write":["_visible"]},"1:707":{"read":[],"write":[]},"1:718":{"read":[],"write":[]},"1:722":{"read":[],"write":[]},"1:730":{"read":[],"write":[]},"1:739":{"read":[],"write":[]},"1:740":{"read":["_visible"],"write":["_visible"]},"1:746":{"read":[],"write":[]},"1:750":{"read":[],"write":[]},"1:761":{"read":[],"write":[]},"1:771":{"read":[],"write":[]},"1:785":{"read":[],"write":[]},"1:795":{"read":[],"write":[]},"1:802":{"read":[],"write":[]},"1:808":{"read":[],"write":[]},"1:839":{"read":[],"write":[]},"1:861":{"read":[],"write":[]},"1:870":{"read":[],"write":[]},"1:882":{"read":[],"write":[]},"1:883":{"read":[],"write":[]},"1:884":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","touxiang","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"1:885":{"read":["tt"],"write":["tt"]},"1:886":{"read":["skipFrame"],"write":["skipFrame"]},"1:898":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:998":{"read":[],"write":[]},"1:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","even2","even3","even4","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","i","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifemc","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","showmc","speed","speedx","speedy","step","steps","suook","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","even2","even3","even4","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","i","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","suook","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
