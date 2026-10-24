/* Native source-derived chapter 6 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c6v0a0(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c6v0a1(ctx,owner){

   ctx.stopDrag(owner);

}

export function c6v0a2(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c6v0a3(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c6v0a4(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c6v0a5(ctx,owner){

   owner.i = 2;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v0a6(ctx,owner){

   owner.i = 3;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v0a7(ctx,owner){

   owner.i = 4;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v0a8(ctx,owner){

   owner.i = 1;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v0a9(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v0a10(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v0a11(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v0a12(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
      ctx.startDrag(this);
   }

}

export function c6v0a13(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c6v0a14(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v0a15(ctx,owner){

   ctx.graph.play(owner);

}

export function c6v0a16(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c6v0a17(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c6v0a18(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c6v0a19(ctx,owner){

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

export function c6v0a20(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c6v0a21(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c6v0a22(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c6v0a23(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c6v0a24(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c6v0a25(ctx,owner){

   owner._quality = "HIGH";

}

export function c6v0a26(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c6v0a27(ctx,owner){

   owner._quality = "LOW";

}

export function c6v0a28(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c6v0a29(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c6v0a30(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c6v0a31(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c6v0a32(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c6v0a33(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c6v0a34(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c6v0a35(ctx,owner){

   owner.iii = 1;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v0a36(ctx,owner){

   owner.iii = 1;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v0a37(ctx,owner){

   owner.iii = 2;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v0a38(ctx,owner){

   owner.iii = 2;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v0a39(ctx,owner){

   owner.iii = 3;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v0a40(ctx,owner){

   owner.iii = 3;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v0a41(ctx,owner){

   owner.iii = 4;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v0a42(ctx,owner){

   owner.iii = 4;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v0a43(ctx,owner){

   owner.iii = 5;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v0a44(ctx,owner){

   owner.iii = 5;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v0a45(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v0a46(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v0a47(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v0a48(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v0a49(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a50(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a51(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a52(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a53(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v0a54(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c6v0a55(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c6v0a56(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a57(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a58(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a59(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a60(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a61(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a62(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a63(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a64(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a65(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a66(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a67(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a68(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a69(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a70(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a71(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c6v0a72(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c6v0a73(ctx,owner){
owner.init = function(){
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
   owner.npcType = ctx.bool(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["fighting"] != "event15") ? "npc" : "boss";
   ctx.setField((owner.life1)?.["bar"],"_xscale",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["life"]);
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
   owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["upKey"];
   owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["leftKey"];
   owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["downKey"];
   owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["rightKey"];
   owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["actKey"];
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
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?actShow != "Def":logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?actShow != "Walk":logicalLeft)(actShow != "Jump"))))
   {
      owner.canKey = false;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:actShow == "JH")(actShow == "Whack")))
      {
         (owner.fxqggHit2)?.["start"]?.();
      }
      else if(ctx.bool(actShow == "Hit"))
      {
         (owner.fxqggHit1)?.["start"]?.();
      }
   }
   else if(ctx.bool(actShow == "Jump"))
   {
      owner.jumping?.();
   }
   owner.pState = actShow;
   if(ctx.bool(owner.pState == "Hitted"))
   {
      ctx.trace?.(ctx.add("---------------------------------------===================",(this)?.[ctx.add("nscore",owner.nState)]));
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((this)?.[ctx.add("nscore",owner.nState)]))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   else if(ctx.bool(owner.pState == "HitDef"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((this)?.[ctx.add("nscore",owner.nState)])/ctx.num(4))))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   ctx.trace?.(actShow);
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,actShow));
};
owner.nact = function(nactShow){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(ctx.randomInt?.(30),owner.dr):logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.hitMax,owner.nhitted):logicalLeft)(nactShow == "Hitted"))))
   {
      owner.nhitted = 0;
      nactShow = "Def";
      owner.canAct = false;
   }
   var _loc2_;
   if(ctx.bool(nactShow == undefined))
   {
      ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",nactShow),"      "),owner.nState));
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
         _loc2_ = ctx.randomInt?.(30);
         if(ctx.bool(owner.nState == "Jump"))
         {
            if(ctx.bool(ctx.less(_loc2_,owner.hjr)))
            {
               owner.canAct = false;
               owner.nState = "JH";
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
         }
         else
         {
            ctx.trace?.(ctx.add("tempr========================== ",_loc2_));
            if(ctx.bool(ctx.less(_loc2_,owner.h2r)))
            {
               owner.canAct = false;
               owner.nState = "Whack";
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
            else if(ctx.bool(ctx.less(_loc2_,owner.h1r)))
            {
               owner.canAct = false;
               owner.nState = "Hit";
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
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
      owner.nState = nactShow;
   }
   ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",nactShow),"      "),owner.nState));
   if(ctx.bool(owner.nState == "Hitted"))
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((this)?.[ctx.add("score",owner.pState)]))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   else if(ctx.bool(owner.nState == "Def"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((this)?.[ctx.add("score",owner.pState)])/ctx.num(4))))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,owner.nState));
};
owner.gamePlay = function(){
   owner.onEnterFrame = function()
   {
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
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.pState != "Jump":logicalLeft)((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.dir,"Key")]))))
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
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.redir,"Key")]))((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.dir,"Key")]))))
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
         if(ctx.bool((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.dir,"Key")])))
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
         else if(ctx.bool((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.redir,"Key")])))
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
   var _loc3_;
   var _loc2_;
   switch(hitType)
   {
      case 1:
         _loc3_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
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
         _loc3_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_x"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_x"]),((owner.qgg)?.["player"])?.["_x"]);
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_y"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_y"]),((owner.qgg)?.["player"])?.["_y"]);
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
         _loc3_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
   }
   ctx.setField(owner.lightNow,"_x",(ctx.num(ctx.add(_loc3_,ctx.randomInt?.(30)))-ctx.num(5)));
   ctx.setField(owner.lightNow,"_y",(ctx.num(ctx.add(_loc2_,ctx.randomInt?.(30)))-ctx.num(5)));
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

export function c6v0a74(ctx,owner){
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

export function c6v0a75(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c6v0a76(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c6v0a77(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v0a78(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c6v0a79(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a80(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a81(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a82(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a83(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a84(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a85(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a86(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a87(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a88(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a89(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a90(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a91(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a92(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a93(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a94(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a95(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c6v0a96(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c6v0a97(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c6v0a98(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c6v0a99(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c6v0a100(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c6v0a101(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c6v0a102(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["_parent"],"an",1);

}

export function c6v0a103(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);

}

export function c6v0a104(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a105(ctx,owner){

}

export function c6v0a106(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c6v0a107(ctx,owner){

}

export function c6v0a108(ctx,owner){

}

export function c6v0a109(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a110(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a111(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a112(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a113(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a114(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a115(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a116(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a117(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c6v0a118(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a119(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a120(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a121(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v0a122(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a123(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a124(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a125(ctx,owner){
ctx.graph.goto(owner,(((owner.parent)?.["_parent"])?.["_parent"])?.["kadr"]);

}

export function c6v0a126(ctx,owner){
ctx.removeClip(owner);

}

export function c6v0a127(ctx,owner){
ctx.setField(owner.pred,"_visible",false);
owner.i = 1;
owner.rot = 0;
owner.scl = 100;
owner.krot = 8;
owner.kscl = (-ctx.num(2));
owner.kadr = 1;
owner.kadr2 = 1;

}

export function c6v0a128(ctx,owner){
ctx.duplicate(owner.pred,ctx.add("obj",owner.i),owner.i);
owner.rot = ctx.add(ctx.num(owner.rot),ctx.num(owner.krot));
owner.scl = ctx.add(ctx.num(owner.scl),ctx.num(owner.kscl));
owner.krot = ctx.add(ctx.num(owner.krot),1);
owner.kadr = ctx.add(ctx.num(owner.kadr),1);
owner.kadr2 = ctx.add(ctx.num(owner.kadr2),1);
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.less(ctx.num(owner.scl),20))(ctx.less(200,ctx.num(owner.scl)))))
{
   owner.kscl = (-ctx.num(owner.kscl));
}
if(ctx.bool(ctx.less(ctx.num(ctx.randomInt?.(120)),ctx.num(owner.krot))))
{
   owner.krot = (-ctx.num(owner.krot));
}
if(ctx.bool(ctx.less(20,ctx.num(owner.kadr))))
{
   owner.kadr = 1;
}
if(ctx.bool(ctx.less(160,ctx.num(owner.kadr2))))
{
   owner.kadr2 = 160;
}
ctx.setField((this)?.[ctx.add("obj",owner.i)],"_rotation",owner.rot);
ctx.setField((this)?.[ctx.add("obj",owner.i)],"_xscale",owner.scl);
ctx.setField((this)?.[ctx.add("obj",owner.i)],"_yscale",owner.scl);
owner.i = ctx.add(ctx.num(owner.i),1);

}

export function c6v0a129(ctx,owner){
ctx.graph.goto(owner,2,{play:true});

}

export function c6v0a130(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a131(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a132(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a133(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a134(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a135(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c6v0a136(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v0a137(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a138(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a139(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a140(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a141(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a142(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a143(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c6v0a144(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v0a145(ctx,owner){
ctx.trace?.("开始说话");

}

export function c6v0a146(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a147(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a148(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a149(ctx,owner){
ctx.graph.goto(owner,1);

}

export function c6v0a150(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a151(ctx,owner){
owner.skipFrame = 0;

}

export function c6v0a152(ctx,owner){
owner.iii = 3;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v0a153(ctx,owner){
owner.skipFrame = 0;

}

export function c6v0a154(ctx,owner){
owner.iii = 2;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v0a155(ctx,owner){
owner.skipFrame = 0;

}

export function c6v0a156(ctx,owner){
owner.iii = 1;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v0a157(ctx,owner){
ctx.graph.stop(owner);
owner.xxx = (this)?.["_x"];
owner.yyy = (this)?.["_y"];
owner.onMouseUp = function()
{
   ctx.stopDrag(this);
   ctx.setField(this,"_x",owner.xxx);
   ctx.setField(this,"_y",owner.yyy);
};

}

export function c6v0a158(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c6v0a159(ctx,owner){
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

export function c6v0a160(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c6v0a161(ctx,owner){
owner.skipFrame = 0;

}

export function c6v0a162(ctx,owner){
owner.iii = 0;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v0a163(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a164(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a165(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c6v0a166(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a167(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a168(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a169(ctx,owner){
ctx.graph.goto(owner,1);

}

export function c6v0a170(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a171(ctx,owner){
owner.ff = (-ctx.num(1));
owner.ttt = 0;
owner.onEnterFrame = function()
{
   if(ctx.bool(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.[ctx.add("event",owner.iii)] == 1))
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num(owner.ff)*ctx.num(2)))))(this,"_y");
      ((old)=>(owner.ttt=old+1,old))(ctx.num(owner.ttt));
      if(ctx.bool(owner.ttt == 30))
      {
         owner.ttt = 0;
         owner.ff = (-ctx.num(owner.ff));
      }
   }
};

}

export function c6v0a172(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c6v0a173(ctx,owner){
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

export function c6v0a174(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a175(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"changeShow",1);
ctx.setField((owner.parent)?.["_parent"],"oldMap","map1");
ctx.setField((owner.parent)?.["_parent"],"eventNow","event5");
((owner.parent)?.["_parent"])?.["gamePausing"]?.();
ctx.setField((owner.parent)?.["_parent"],"eventNext","map2_22");
ctx.setField((owner.parent)?.["_parent"],"eventAct","change");
ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);

}

export function c6v0a176(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventShow",1);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventNow","event6");
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventNext","");
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventAct","movie");
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event26",1);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"getEventShow",0);
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((owner.parent)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((owner.parent)?.["_parent"])?.["_parent"])?.["movie"],(((owner.parent)?.["_parent"])?.["_parent"])?.["eventNow"],(((owner.parent)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c6v0a177(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a178(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a179(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a180(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 378;
owner.appeary = 224;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","s2"));
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
owner.talkTxts = ["哥哥，刚刚是怎么回事？我们现在是在哪里？？我好怕啊。","我也不知道啊，我们好象中了什么魔法，不过妹妹你不要怕，让我来想想办法 ","狮子船长你知道这到底是怎么回事吗？","我想我们是中了黑暗之眼的魔法了吧！恐怖的黑暗之眼……。","刚刚你抓着手的那是谁？这个魔法阵好象是他留给我们的。"];
owner.talkObj = ["map.point1","map.player.point","map.player.point","map.point0","map.point0"];
owner.talkDirs = [1,1,1,1,1];
owner.talkNext = [1,0,3,4,0];
owner.talkAreas = ["talkArea0","talkArea2"];
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["zu2","zu3"];
owner.events = ["event1","event2","event3","event4"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [Math.trunc?.((owner.zu2)?.["_x"]),Math.trunc?.((owner.zu3)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.zu2)?.["_y"]),Math.trunc?.((owner.zu3)?.["_y"])];
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.tree,2);
   if(ctx.bool((owner.parent)?.["event11"] == 0))
   {
      owner.events = ["event10","event11"];
   }
   else
   {
      owner.events = [];
      ctx.setField(owner.changes,2,"map5");
   }
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

export function c6v0a181(ctx,owner){

   owner.i = 1;
   while(ctx.bool(ctx.less(owner.i,5)))
   {
      ctx.setField(((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"],"iii",owner.i);
      ctx.graph.goto((((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"])?.["mc0"],ctx.add("f",(((((this)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(ctx.num(owner.i)-ctx.num(1))])?.[0]));
      ctx.graph.goto((((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"])?.["mc1"],ctx.add("f",(((((this)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(ctx.num(owner.i)-ctx.num(1))])?.[1]));
      ctx.graph.goto((((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"])?.["mc2"],ctx.add("f",(((((this)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(ctx.num(owner.i)-ctx.num(1))])?.[2]));
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }

}

export function c6v0a182(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
if(ctx.bool((owner.parent)?.["event26"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","stone3","stone4","cao1","cao2"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.stone3)?.["_x"]),Math.trunc?.((owner.stone4)?.["_x"]),Math.trunc?.((owner.cao1)?.["_x"]),Math.trunc?.((owner.cao2)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.stone3)?.["_y"]),Math.trunc?.((owner.stone4)?.["_y"]),Math.trunc?.((owner.cao1)?.["_y"]),Math.trunc?.((owner.cao2)?.["_y"])];
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

export function c6v0a183(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["s1","s2","s3","s4","c1","c2","c3","c4","tree"];
owner.blockx = [Math.trunc?.((owner.s1)?.["_x"]),Math.trunc?.((owner.s2)?.["_x"]),Math.trunc?.((owner.s3)?.["_x"]),Math.trunc?.((owner.s4)?.["_x"]),Math.trunc?.((owner.c1)?.["_x"]),Math.trunc?.((owner.c2)?.["_x"]),Math.trunc?.((owner.c3)?.["_x"]),Math.trunc?.((owner.c4)?.["_x"]),Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.s1)?.["_y"]),Math.trunc?.((owner.s2)?.["_y"]),Math.trunc?.((owner.s3)?.["_y"]),Math.trunc?.((owner.s4)?.["_y"]),Math.trunc?.((owner.c1)?.["_y"]),Math.trunc?.((owner.c2)?.["_y"]),Math.trunc?.((owner.c3)?.["_y"]),Math.trunc?.((owner.c4)?.["_y"]),Math.trunc?.((owner.tree)?.["_y"])];
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
owner.events = ["event24"];
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

export function c6v0a184(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a185(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a186(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["s1","s2","s3","s4","c1","c2","c3","c4","tree"];
owner.blockx = [Math.trunc?.((owner.s1)?.["_x"]),Math.trunc?.((owner.s2)?.["_x"]),Math.trunc?.((owner.s3)?.["_x"]),Math.trunc?.((owner.s4)?.["_x"]),Math.trunc?.((owner.c1)?.["_x"]),Math.trunc?.((owner.c2)?.["_x"]),Math.trunc?.((owner.c3)?.["_x"]),Math.trunc?.((owner.c4)?.["_x"]),Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.s1)?.["_y"]),Math.trunc?.((owner.s2)?.["_y"]),Math.trunc?.((owner.s3)?.["_y"]),Math.trunc?.((owner.s4)?.["_y"]),Math.trunc?.((owner.c1)?.["_y"]),Math.trunc?.((owner.c2)?.["_y"]),Math.trunc?.((owner.c3)?.["_y"]),Math.trunc?.((owner.c4)?.["_y"]),Math.trunc?.((owner.tree)?.["_y"])];
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
if(ctx.bool((owner.parent)?.["event32"] != 1))
{
   owner.events = ["event32"];
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

export function c6v0a187(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
if(ctx.bool((owner.parent)?.["event28"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ss1","ss2","ss3","ss4","cc1","cc2","cc3","cc4"];
owner.blockx = [Math.trunc?.((owner.ss1)?.["_x"]),Math.trunc?.((owner.ss2)?.["_x"]),Math.trunc?.((owner.ss3)?.["_x"]),Math.trunc?.((owner.ss4)?.["_x"]),Math.trunc?.((owner.cc1)?.["_x"]),Math.trunc?.((owner.cc2)?.["_x"]),Math.trunc?.((owner.cc3)?.["_x"]),Math.trunc?.((owner.cc4)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ss1)?.["_y"]),Math.trunc?.((owner.ss2)?.["_y"]),Math.trunc?.((owner.ss3)?.["_y"]),Math.trunc?.((owner.ss4)?.["_y"]),Math.trunc?.((owner.cc1)?.["_y"]),Math.trunc?.((owner.cc2)?.["_y"]),Math.trunc?.((owner.cc3)?.["_y"]),Math.trunc?.((owner.cc4)?.["_y"])];
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

export function c6v0a188(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event28"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a189(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a190(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","stone3","stone4","cao1","cao2","ball"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.stone3)?.["_x"]),Math.trunc?.((owner.stone4)?.["_x"]),Math.trunc?.((owner.cao1)?.["_x"]),Math.trunc?.((owner.cao2)?.["_x"]),Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.stone3)?.["_y"]),Math.trunc?.((owner.stone4)?.["_y"]),Math.trunc?.((owner.cao1)?.["_y"]),Math.trunc?.((owner.cao2)?.["_y"]),Math.trunc?.((owner.ball)?.["_y"])];
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
if(ctx.bool((owner.parent)?.["event25"] != 1))
{
   owner.events = ["event25"];
}
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

export function c6v0a191(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a192(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
if(ctx.bool((owner.parent)?.["event25"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["st1","st2","st3","st4","ca1","ca2"];
owner.blockx = [Math.trunc?.((owner.st1)?.["_x"]),Math.trunc?.((owner.st2)?.["_x"]),Math.trunc?.((owner.st3)?.["_x"]),Math.trunc?.((owner.st4)?.["_x"]),Math.trunc?.((owner.ca1)?.["_x"]),Math.trunc?.((owner.ca2)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.st1)?.["_y"]),Math.trunc?.((owner.st2)?.["_y"]),Math.trunc?.((owner.st3)?.["_y"]),Math.trunc?.((owner.st4)?.["_y"]),Math.trunc?.((owner.ca1)?.["_y"]),Math.trunc?.((owner.ca2)?.["_y"])];
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

export function c6v0a193(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event25"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a194(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,13)))
{
   (owner.blocks)?.["push"]?.(ctx.add("sto",owner.i));
   (owner.blockx)?.["push"]?.(((this)?.[ctx.add("sto",owner.i)])?.["_x"]);
   (owner.blocky)?.["push"]?.(((this)?.[ctx.add("sto",owner.i)])?.["_y"]);
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
owner.events = ["event21"];
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

export function c6v0a195(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree"];
owner.blockx = [Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.tree)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,28)))
{
   (owner.blocks)?.["push"]?.(ctx.add("chun",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("chun",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(((this)?.[ctx.add("chun",owner.i)])?.["_y"]);
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
if(ctx.bool((owner.parent)?.["event29"] != 1))
{
   owner.events = ["event29"];
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

export function c6v0a196(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event28"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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

export function c6v0a197(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a198(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event28"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a199(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ball"];
owner.blockx = [Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ball)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
if(ctx.bool((owner.parent)?.["event28"] != 1))
{
   owner.events = ["event28"];
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

export function c6v0a200(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a201(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.ii = 2;
owner.jj = 2;
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map1"))
{
   owner.appearx = owner.xx;
   owner.appeary = owner.yy;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = owner.dir2);
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 433;
   owner.appeary = 363;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = "map2_22";
owner.dir2 = "";
if(ctx.bool((owner.parent)?.["event11"] == 0))
{
   ctx.graph.goto(owner.yu,1);
}
else
{
   ctx.graph.goto(owner.yu,2);
}
owner.talkTxts = ["找到四季，我会告诉你一切","我们是不是做梦呢……","GG，这里好美哦！"];
owner.talkObj = ["map.point0","map.point1","map.point2"];
owner.talkDirs = [0,0,0];
owner.talkNext = [0,0,0];
owner.talkAreas = ["talkArea0","talkArea1","talkArea2"];
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event32"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event31"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event30"] == 1:logicalLeft)((owner.parent)?.["event29"] == 1)))))
{
   owner.talkTxts = ["太让我吃惊了，你居然真的办到了！好吧，我会遵守承诺的。","嗯！你小子还不赖嘛！","哥哥你真厉害！"];
   owner.talkObj = ["map.point0","map.point1","map.point2"];
   owner.talkDirs = [0,0,0];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea1","talkArea2"];
   owner.events = ["event6"];
}
owner.minScale = 95;
owner.playerScale = 95;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","tree","chuanzhang","qmm","fox"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.tree)?.["_x"]),Math.trunc?.((owner.chuanzhang)?.["_x"]),Math.trunc?.((owner.qmm)?.["_x"]),Math.trunc?.((owner.fox)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.tree)?.["_y"]),Math.trunc?.((owner.chuanzhang)?.["_y"]),Math.trunc?.((owner.qmm)?.["_y"]),Math.trunc?.((owner.fox)?.["_y"])];
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.tree,2);
   if(ctx.bool((owner.parent)?.["event11"] == 0))
   {
      owner.events = ["event10","event11"];
   }
   else
   {
      owner.events = [];
      ctx.setField(owner.changes,2,"map5");
   }
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

export function c6v0a202(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a203(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a204(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a205(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a206(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event27"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("b",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("b",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("b",owner.i)])?.["_y"]));
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

export function c6v0a207(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event27"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a208(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,18)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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
owner.events = ["event23"];
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

export function c6v0a209(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a210(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a211(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,38)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event31"] != 1))
{
   owner.events = ["event31"];
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

export function c6v0a212(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
if(ctx.bool((owner.parent)?.["event25"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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

export function c6v0a213(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a214(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event25"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a215(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a216(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event26"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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

export function c6v0a217(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event26"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a218(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a219(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ball"];
owner.blockx = [Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ball)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,6)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blog",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blog",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blog",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event26"] != 1))
{
   owner.events = ["event26"];
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

export function c6v0a220(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a221(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree"];
owner.blockx = [Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.tree)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,25)))
{
   (owner.blocks)?.["push"]?.(ctx.add("cc",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event30"] != 1))
{
   owner.events = ["event30"];
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

export function c6v0a222(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a223(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a224(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree"];
owner.blockx = [Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.tree)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("cc",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_y"]));
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
owner.events = ["event22"];
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

export function c6v0a225(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event26"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("sr",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_y"]));
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

export function c6v0a226(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event26"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a227(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event27"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("sr",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_y"]));
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

export function c6v0a228(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event27"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v0a229(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a230(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","stone3","stone4","cao1","cao2"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.stone3)?.["_x"]),Math.trunc?.((owner.stone4)?.["_x"]),Math.trunc?.((owner.cao1)?.["_x"]),Math.trunc?.((owner.cao2)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.stone3)?.["_y"]),Math.trunc?.((owner.stone4)?.["_y"]),Math.trunc?.((owner.cao1)?.["_y"]),Math.trunc?.((owner.cao2)?.["_y"])];
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
if(ctx.bool((owner.parent)?.["event28"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
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

export function c6v0a231(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ball"];
owner.blockx = [Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ball)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("srr",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("srr",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("srr",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event27"] != 1))
{
   owner.events = ["event27"];
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

export function c6v0a232(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v0a233(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone12","stone22","stone32","stone42","cao12","cao22"];
owner.blockx = [Math.trunc?.((owner.stone12)?.["_x"]),Math.trunc?.((owner.stone22)?.["_x"]),Math.trunc?.((owner.stone32)?.["_x"]),Math.trunc?.((owner.stone42)?.["_x"]),Math.trunc?.((owner.cao12)?.["_x"]),Math.trunc?.((owner.cao22)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone12)?.["_y"]),Math.trunc?.((owner.stone22)?.["_y"]),Math.trunc?.((owner.stone32)?.["_y"]),Math.trunc?.((owner.stone42)?.["_y"]),Math.trunc?.((owner.cao12)?.["_y"]),Math.trunc?.((owner.cao22)?.["_y"])];
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

export function c6v0a234(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
if(ctx.bool((owner.parent)?.["event25"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone13","stone23","stone33","stone43","cao13","cao23"];
owner.blockx = [Math.trunc?.((owner.stone13)?.["_x"]),Math.trunc?.((owner.stone23)?.["_x"]),Math.trunc?.((owner.stone33)?.["_x"]),Math.trunc?.((owner.stone43)?.["_x"]),Math.trunc?.((owner.cao13)?.["_x"]),Math.trunc?.((owner.cao23)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone13)?.["_y"]),Math.trunc?.((owner.stone23)?.["_y"]),Math.trunc?.((owner.stone33)?.["_y"]),Math.trunc?.((owner.stone43)?.["_y"]),Math.trunc?.((owner.cao13)?.["_y"]),Math.trunc?.((owner.cao23)?.["_y"])];
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

export function c6v0a235(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone14","stone24","stone34","stone44","cao14","cao24"];
owner.blockx = [Math.trunc?.((owner.stone14)?.["_x"]),Math.trunc?.((owner.stone24)?.["_x"]),Math.trunc?.((owner.stone34)?.["_x"]),Math.trunc?.((owner.stone44)?.["_x"]),Math.trunc?.((owner.cao14)?.["_x"]),Math.trunc?.((owner.cao24)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone14)?.["_y"]),Math.trunc?.((owner.stone24)?.["_y"]),Math.trunc?.((owner.stone34)?.["_y"]),Math.trunc?.((owner.stone44)?.["_y"]),Math.trunc?.((owner.cao14)?.["_y"]),Math.trunc?.((owner.cao24)?.["_y"])];
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

export function c6v0a236(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone15","stone25","stone35","stone45","cao15","cao25"];
owner.blockx = [Math.trunc?.((owner.stone15)?.["_x"]),Math.trunc?.((owner.stone25)?.["_x"]),Math.trunc?.((owner.stone35)?.["_x"]),Math.trunc?.((owner.stone45)?.["_x"]),Math.trunc?.((owner.cao15)?.["_x"]),Math.trunc?.((owner.cao25)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone15)?.["_y"]),Math.trunc?.((owner.stone25)?.["_y"]),Math.trunc?.((owner.stone35)?.["_y"]),Math.trunc?.((owner.stone45)?.["_y"]),Math.trunc?.((owner.cao15)?.["_y"]),Math.trunc?.((owner.cao25)?.["_y"])];
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

export function c6v0a237(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone16","stone26","stone36","stone46","cao16","cao26"];
owner.blockx = [Math.trunc?.((owner.stone16)?.["_x"]),Math.trunc?.((owner.stone26)?.["_x"]),Math.trunc?.((owner.stone36)?.["_x"]),Math.trunc?.((owner.stone46)?.["_x"]),Math.trunc?.((owner.cao16)?.["_x"]),Math.trunc?.((owner.cao26)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone16)?.["_y"]),Math.trunc?.((owner.stone26)?.["_y"]),Math.trunc?.((owner.stone36)?.["_y"]),Math.trunc?.((owner.stone46)?.["_y"]),Math.trunc?.((owner.cao16)?.["_y"]),Math.trunc?.((owner.cao26)?.["_y"])];
if(ctx.bool((owner.parent)?.["event27"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
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

export function c6v0a238(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone17","stone27","stone37","stone47","cao17","cao27"];
owner.blockx = [Math.trunc?.((owner.stone17)?.["_x"]),Math.trunc?.((owner.stone27)?.["_x"]),Math.trunc?.((owner.stone37)?.["_x"]),Math.trunc?.((owner.stone47)?.["_x"]),Math.trunc?.((owner.cao17)?.["_x"]),Math.trunc?.((owner.cao27)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone17)?.["_y"]),Math.trunc?.((owner.stone27)?.["_y"]),Math.trunc?.((owner.stone37)?.["_y"]),Math.trunc?.((owner.stone47)?.["_y"]),Math.trunc?.((owner.cao17)?.["_y"]),Math.trunc?.((owner.cao27)?.["_y"])];
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

export function c6v0a239(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a240(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a241(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c6v0a242(ctx,owner){
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

export function c6v0a243(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c6v0a244(ctx,owner){
owner.listItem = function(){
   var _loc3_ = 0;
   var _loc4_;
   while(ctx.bool(ctx.less(_loc3_,(((owner.parent)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc4_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc3_),_loc3_);
      ctx.setField(_loc4_,"_x",(ctx.num(_loc3_)*ctx.num(36)));
      ctx.graph.goto(_loc4_,(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
      ctx.setField(_loc4_,"aim",(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
      ctx.setField(_loc4_,"iii",_loc3_);
      _loc3_ = ctx.add(_loc3_,1);
   }
   owner.itemStep = 0;
   ctx.setField(owner.btnLeft,"_visible",0);
   if(ctx.bool(ctx.lessEqual((((owner.parent)?.["_parent"])?.["itemList"])?.["length"],4)))
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

export function c6v0a245(ctx,owner){

   ctx.graph.goto(owner,((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c6v0a246(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a247(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a248(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c6v0a249(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c6v0a250(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c6v0a251(ctx,owner){
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

export function c6v0a252(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c6v0a253(ctx,owner){
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

export function c6v0a254(ctx,owner){
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
         ctx.trace?.(ctx.add("remove=",((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]]));
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
         ctx.setField((owner.parent)?.["disAll"],"_visible",0);
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

export function c6v0a255(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c6v0a256(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a257(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a258(ctx,owner){
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

export function c6v0a259(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c6v0a260(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c6v0a261(ctx,owner){
owner.skipFrame = 0;
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c6v0a262(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(6);

}

export function c6v0a263(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a264(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a265(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a266(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a267(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a268(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a269(ctx,owner){

   owner.i = 1;
   while(ctx.bool(ctx.lessEqual(owner.i,owner.num)))
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.math)?.["cos"]?.(((owner.parent)?.[ctx.add("snow",owner.i)])?.["dir"]))))((owner.parent)?.[ctx.add("snow",owner.i)],"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],((owner.parent)?.[ctx.add("snow",owner.i)])?.["v"])))((owner.parent)?.[ctx.add("snow",owner.i)],"_y");
      if(ctx.bool(ctx.less(360,((owner.parent)?.[ctx.add("snow",owner.i)])?.["_x"])))
      {
         ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_x",0);
      }
      if(ctx.bool(ctx.less(((owner.parent)?.[ctx.add("snow",owner.i)])?.["_x"],(-ctx.num(360)))))
      {
         ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_x",360);
      }
      if(ctx.bool(ctx.less(400,((owner.parent)?.[ctx.add("snow",owner.i)])?.["_y"])))
      {
         ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_y",0);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }

}

export function c6v0a270(ctx,owner){

   ctx.setField(this,"_visible",false);
   owner.num = 70;
   owner.i = 1;
   while(ctx.bool(ctx.lessEqual(owner.i,owner.num)))
   {
      ctx.attach(owner.parent,"snow",ctx.add("snow",owner.i),owner.i);
      owner.scale = ctx.add(ctx.randomInt?.(60),41);
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_xscale",owner.scale);
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_yscale",owner.scale);
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_x",(ctx.num(ctx.randomInt?.(720))-ctx.num(360)));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_y",(-ctx.num(ctx.randomInt?.(400))));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_rotation",ctx.randomInt?.(360));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"dir",(-ctx.num(ctx.randomInt?.(180))));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"v",ctx.add(ctx.randomInt?.(2),2));
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }

}

export function c6v0a271(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event28",1);

}

export function c6v0a272(ctx,owner){
if(ctx.bool(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
{
   ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["_parent"],"end");
}

}

export function c6v0a273(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a274(ctx,owner){
owner.ri_array = [4,3,2,1,3];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v0a275(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a276(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a277(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a278(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a279(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a280(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a281(ctx,owner){
owner.c = 2;

}

export function c6v0a282(ctx,owner){
if(ctx.bool(ctx.less(40,owner.c)))
{
   ctx.graph.goto(owner,4);
}
else
{
   ctx.cloneSprite(owner,"snow1","snow" & owner.c,ctx.add(16384,(ctx.num(900)-ctx.num(owner.c))));
   ctx.setProperty(owner,"snow" & owner.c,"_x",ctx.add(ctx.getProperty(owner,"snow" & (ctx.num(owner.c)-ctx.num(1)),"_x"),ctx.randomInt?.(200)));
   ctx.setProperty(owner,"snow" & owner.c,"_xscale",ctx.randomInt?.(100));
   ctx.setProperty(owner,"snow" & owner.c,"_yscale",ctx.getProperty(owner,"snow" & owner.c,"_xscale"));
   ctx.setProperty(owner,"snow" & owner.c,"_rotation",ctx.randomInt?.(360));
   owner.c=ctx.add(owner.c,1);
}

}

export function c6v0a283(ctx,owner){
ctx.graph.goto(owner,2,{play:true});

}

export function c6v0a284(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a285(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a286(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a287(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a288(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event27",1);

}

export function c6v0a289(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a290(ctx,owner){
owner.ri_array = [3,4,3,1,3];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v0a291(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a292(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a293(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a294(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a295(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a296(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a297(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a298(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a299(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a300(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event26",1);

}

export function c6v0a301(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a302(ctx,owner){
owner.ri_array = [2,4,3,1,1];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v0a303(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a304(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a305(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a306(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a307(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a308(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a309(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a310(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a311(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event25",1);

}

export function c6v0a312(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a313(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a314(ctx,owner){
owner.ri_array = [1,3,2,3,3];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v0a315(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a316(ctx,owner){
ctx.graph.play(owner);

}

export function c6v0a317(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v0a318(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v0a319(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v0a320(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v0a321(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c6v0a322(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c6v0a323(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a324(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a325(ctx,owner){
owner._visible = 0;

}

export function c6v0a326(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a327(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a328(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c6v0a329(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a330(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a331(ctx,owner){
owner._visible = 0;

}

export function c6v0a332(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a333(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a334(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a335(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a336(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a337(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a338(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a339(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a340(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a341(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a342(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a343(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v0a344(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c6v0a345(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c6v0a346(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a347(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a348(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a349(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a350(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a351(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v0a352(ctx,owner){

}

export function c6v0a353(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v0a354(ctx,owner){
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
   owner.event29 = 0;
   owner.event30 = 0;
   owner.event31 = 0;
   owner.event32 = 0;
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
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event2":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event3":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event4":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event6":
                     ((old)=>(owner.event6=old+1,old))(ctx.num(owner.event6));
                     if(ctx.bool(owner.event6 == 2))
                     {
                        ctx.graph.goto((owner.map)?.["fox"],"kkk");
                     }
                     else if(ctx.bool(owner.event6 == 1))
                     {
                        ctx.graph.goto((owner.map)?.["fox"],2,{play:true});
                        2;
                     }
                     break;
                  case "event21":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event22":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event23":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event24":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event25":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event26":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event27":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event28":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event29":
                     (owner.getItem)?.["start"]?.();
                     owner.event29 = 1;
                     (owner.itemList)?.["push"]?.("item2");
                     ctx.graph.goto(owner.itemShow,"item2");
                     owner.itemNow = "item2";
                     owner.etShow?.("春天的礼品");
                     break;
                  case "event30":
                     (owner.getItem)?.["start"]?.();
                     owner.event30 = 1;
                     (owner.itemList)?.["push"]?.("item3");
                     ctx.graph.goto(owner.itemShow,"item3");
                     owner.itemNow = "item3";
                     owner.etShow?.("夏天的礼品");
                     break;
                  case "event31":
                     (owner.getItem)?.["start"]?.();
                     owner.event31 = 1;
                     (owner.itemList)?.["push"]?.("item4");
                     ctx.graph.goto(owner.itemShow,"item4");
                     owner.itemNow = "item3";
                     owner.etShow?.("秋天的礼品");
                     break;
                  case "event32":
                     (owner.getItem)?.["start"]?.();
                     owner.event32 = 1;
                     (owner.itemList)?.["push"]?.("item5");
                     ctx.graph.goto(owner.itemShow,"item5");
                     owner.itemNow = "item4";
                     owner.etShow?.("冬天的礼品");
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
   var _loc4_ = ctx.add((ctx.num((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))%ctx.num(owner.txtW)))*ctx.num(owner.txtDisw)),owner.txtXmin);
   var _loc3_ = ctx.add((ctx.num((ctx.math)?.["floor"]?.((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))/ctx.num(owner.txtW))))*ctx.num(owner.txtDish)),owner.txtYmin);
   var _loc2_ = ctx.attach((owner.talker)?.["popup"],"talkTxt",ctx.add("talkTxt",owner.txtCount),owner.txtCount);
   ctx.setField(_loc2_,"_x",_loc4_);
   ctx.setField(_loc2_,"_y",_loc3_);
   ctx.setField((_loc2_)?.["txt"],"txt",(owner.txts)?.[owner.txtCount]);
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
   var _loc0_;
   if(ctx.bool((_loc0_ = owner.afterMovieEvent) === 1))
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event4 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event3 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event2 == 1:logicalLeft)(owner.event1 == 1)))))
      {
         ctx.graph.goto((owner.map)?.["topBlocks"],2,{play:true});
      }
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
owner.shui_array = [[3,2,1],[2,3,4],[3,1,2],[4,2,1]];
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();
(owner.itemList)?.["push"]?.("item1");
ctx.graph.goto(owner.itemShow,"item1");
owner.itemNow = "item1";

}

export function c6v0a355(ctx,owner){
owner.oldMap = "";

}

export function c6v1a356(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c6v1a357(ctx,owner){

   ctx.stopDrag(owner);

}

export function c6v1a358(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c6v1a359(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c6v1a360(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c6v1a361(ctx,owner){

   owner.i = 2;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v1a362(ctx,owner){

   owner.i = 3;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v1a363(ctx,owner){

   owner.i = 4;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v1a364(ctx,owner){

   owner.i = 1;
   ctx.graph.play(owner);
   ctx.setField(((((owner.parent)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(owner.parent)?.["iii"]],(ctx.num(owner.ii)-ctx.num(1)),owner.i);

}

export function c6v1a365(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v1a366(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v1a367(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v1a368(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
      ctx.startDrag(this);
   }

}

export function c6v1a369(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c6v1a370(ctx,owner){

   ctx.graph.goto(owner,15);
   owner.c = 0;
   owner.i = 0;
   while(ctx.bool(ctx.less(owner.i,3)))
   {
      if(ctx.bool(((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[owner.i] == ctx.add(owner.iii,1)))
      {
         ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
      }
      if(ctx.bool(owner.c == 3))
      {
         ctx.setField((owner.parent)?.["_parent"],ctx.add("event",ctx.add(owner.iii,1)),1);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }
   ctx.trace?.(1);

}

export function c6v1a371(ctx,owner){

   ctx.graph.play(owner);

}

export function c6v1a372(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c6v1a373(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c6v1a374(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c6v1a375(ctx,owner){

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

export function c6v1a376(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c6v1a377(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c6v1a378(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c6v1a379(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c6v1a380(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c6v1a381(ctx,owner){

   owner._quality = "HIGH";

}

export function c6v1a382(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c6v1a383(ctx,owner){

   owner._quality = "LOW";

}

export function c6v1a384(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c6v1a385(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c6v1a386(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c6v1a387(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c6v1a388(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c6v1a389(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c6v1a390(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c6v1a391(ctx,owner){

   owner.iii = 1;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v1a392(ctx,owner){

   owner.iii = 1;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v1a393(ctx,owner){

   owner.iii = 2;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v1a394(ctx,owner){

   owner.iii = 2;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v1a395(ctx,owner){

   owner.iii = 3;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v1a396(ctx,owner){

   owner.iii = 3;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v1a397(ctx,owner){

   owner.iii = 4;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v1a398(ctx,owner){

   owner.iii = 4;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v1a399(ctx,owner){

   owner.iii = 5;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == (((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],1);
   }
   else
   {
      ctx.graph.next(((this)?.[ctx.add("mc",owner.iii)])?.["mc"]);
   }

}

export function c6v1a400(ctx,owner){

   owner.iii = 5;
   if(ctx.bool((((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_currentframe"] == 1))
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],(((this)?.[ctx.add("mc",owner.iii)])?.["mc"])?.["_totalframes"]);
   }
   else
   {
      ctx.graph.goto(((this)?.[ctx.add("mc",owner.iii)])?.["mc"],((this)?.[ctx.add("mc",owner.iii)])?.["mc"].frame-1);
   }

}

export function c6v1a401(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v1a402(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v1a403(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v1a404(ctx,owner){

   if(ctx.bool((owner.chengong)?.["_currentframe"] == 1))
   {
      owner.c = 0;
      owner.i = 1;
      while(ctx.bool(ctx.less(owner.i,6)))
      {
         if(ctx.bool((((this)?.[ctx.add("mc",owner.i)])?.["mc"])?.["_currentframe"] == (owner.ri_array)?.[(ctx.num(owner.i)-ctx.num(1))]))
         {
            ((old)=>(owner.c=old+1,old))(ctx.num(owner.c));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
      if(ctx.bool(owner.c == 5))
      {
         ctx.graph.goto(owner.chengong,2,{play:true});
      }
      else
      {
         if(ctx.bool(ctx.lessEqual(ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add((((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
         }
         else
         {
            ctx.graph.goto(((((this)?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
         }
         ctx.graph.goto(owner,"end");
         ctx.graph.play(owner);
      }
   }

}

export function c6v1a405(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a406(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a407(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a408(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a409(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a410(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a411(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a412(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v1a413(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c6v1a414(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c6v1a415(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a416(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a417(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a418(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a419(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a420(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a421(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a422(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a423(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a424(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a425(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a426(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a427(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a428(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a429(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a430(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c6v1a431(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c6v1a432(ctx,owner){
owner.init = function(){
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
   owner.npcType = ctx.bool(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["fighting"] != "event15") ? "npc" : "boss";
   ctx.setField((owner.life1)?.["bar"],"_xscale",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["life"]);
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
   owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["upKey"];
   owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["leftKey"];
   owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["downKey"];
   owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["rightKey"];
   owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["actKey"];
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
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?actShow != "Def":logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?actShow != "Walk":logicalLeft)(actShow != "Jump"))))
   {
      owner.canKey = false;
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:actShow == "JH")(actShow == "Whack")))
      {
         (owner.fxqggHit2)?.["start"]?.();
      }
      else if(ctx.bool(actShow == "Hit"))
      {
         (owner.fxqggHit1)?.["start"]?.();
      }
   }
   else if(ctx.bool(actShow == "Jump"))
   {
      owner.jumping?.();
   }
   owner.pState = actShow;
   if(ctx.bool(owner.pState == "Hitted"))
   {
      ctx.trace?.(ctx.add("---------------------------------------===================",(this)?.[ctx.add("nscore",owner.nState)]));
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((this)?.[ctx.add("nscore",owner.nState)]))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   else if(ctx.bool(owner.pState == "HitDef"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((this)?.[ctx.add("nscore",owner.nState)])/ctx.num(4))))))((owner.life1)?.["bar"],"_xscale");
      owner.hiteding?.();
   }
   ctx.trace?.(actShow);
   ctx.graph.goto(owner.qgg,ctx.add(owner.dir,actShow));
};
owner.nact = function(nactShow){
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(ctx.randomInt?.(30),owner.dr):logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.hitMax,owner.nhitted):logicalLeft)(nactShow == "Hitted"))))
   {
      owner.nhitted = 0;
      nactShow = "Def";
      owner.canAct = false;
   }
   var _loc2_;
   if(ctx.bool(nactShow == undefined))
   {
      ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",nactShow),"      "),owner.nState));
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
         _loc2_ = ctx.randomInt?.(30);
         if(ctx.bool(owner.nState == "Jump"))
         {
            if(ctx.bool(ctx.less(_loc2_,owner.hjr)))
            {
               owner.canAct = false;
               owner.nState = "JH";
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
         }
         else
         {
            ctx.trace?.(ctx.add("tempr========================== ",_loc2_));
            if(ctx.bool(ctx.less(_loc2_,owner.h2r)))
            {
               owner.canAct = false;
               owner.nState = "Whack";
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
            }
            else if(ctx.bool(ctx.less(_loc2_,owner.h1r)))
            {
               owner.canAct = false;
               owner.nState = "Hit";
               ((this)?.[ctx.add(ctx.add("fx",owner.npcType),"Hit")])?.["start"]?.();
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
      owner.nState = nactShow;
   }
   ctx.trace?.(ctx.add(ctx.add(ctx.add("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm    ",nactShow),"      "),owner.nState));
   if(ctx.bool(owner.nState == "Hitted"))
   {
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((this)?.[ctx.add("score",owner.pState)]))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   else if(ctx.bool(owner.nState == "Def"))
   {
      (owner.fxhitting)?.["start"]?.();
      ((target,key)=>ctx.setField(target,key,(ctx.num(target?.[key])-ctx.num((ctx.num((this)?.[ctx.add("score",owner.pState)])/ctx.num(4))))))((owner.life2)?.["bar"],"_xscale");
      owner.nhiteding?.();
   }
   ctx.graph.goto(owner.npc,ctx.add(owner.dir2,owner.nState));
};
owner.gamePlay = function(){
   owner.onEnterFrame = function()
   {
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
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.pState != "Jump":logicalLeft)((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.dir,"Key")]))))
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
            else if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.redir,"Key")]))((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.dir,"Key")]))))
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
         if(ctx.bool((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.dir,"Key")])))
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
         else if(ctx.bool((ctx.keys)?.["isDown"]?.((this)?.[ctx.add(owner.redir,"Key")])))
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
   var _loc3_;
   var _loc2_;
   switch(hitType)
   {
      case 1:
         _loc3_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
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
         _loc3_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_x"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_x"]),((owner.qgg)?.["player"])?.["_x"]);
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.qgg)?.["player"])?.["hitter"])?.["_y"])*ctx.num(((owner.qgg)?.["player"])?.["_xscale"])))/ctx.num(100)),(owner.qgg)?.["_y"]),((owner.qgg)?.["player"])?.["_y"]);
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
         _loc3_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_x"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_x"]),((owner.npc)?.["npc"])?.["_x"]);
         _loc2_ = ctx.add(ctx.add((ctx.num((ctx.num((((owner.npc)?.["npc"])?.["hitter"])?.["_y"])*ctx.num(((owner.npc)?.["npc"])?.["_xscale"])))/ctx.num(100)),(owner.npc)?.["_y"]),((owner.npc)?.["npc"])?.["_y"]);
   }
   ctx.setField(owner.lightNow,"_x",(ctx.num(ctx.add(_loc3_,ctx.randomInt?.(30)))-ctx.num(5)));
   ctx.setField(owner.lightNow,"_y",(ctx.num(ctx.add(_loc2_,ctx.randomInt?.(30)))-ctx.num(5)));
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

export function c6v1a433(ctx,owner){
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

export function c6v1a434(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c6v1a435(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c6v1a436(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v1a437(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a438(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c6v1a439(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a440(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a441(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a442(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a443(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a444(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a445(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a446(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a447(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a448(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a449(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a450(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a451(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a452(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a453(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a454(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c6v1a455(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("gp=",(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]));
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c6v1a456(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a457(ctx,owner){

}

export function c6v1a458(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c6v1a459(ctx,owner){

}

export function c6v1a460(ctx,owner){

}

export function c6v1a461(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a462(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a463(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a464(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a465(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a466(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a467(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a468(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a469(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c6v1a470(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a471(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a472(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a473(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c6v1a474(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a475(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a476(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a477(ctx,owner){
ctx.graph.goto(owner,(((owner.parent)?.["_parent"])?.["_parent"])?.["kadr"]);

}

export function c6v1a478(ctx,owner){
ctx.removeClip(owner);

}

export function c6v1a479(ctx,owner){
ctx.setField(owner.pred,"_visible",false);
owner.i = 1;
owner.rot = 0;
owner.scl = 100;
owner.krot = 8;
owner.kscl = (-ctx.num(2));
owner.kadr = 1;
owner.kadr2 = 1;

}

export function c6v1a480(ctx,owner){
ctx.duplicate(owner.pred,ctx.add("obj",owner.i),owner.i);
owner.rot = ctx.add(ctx.num(owner.rot),ctx.num(owner.krot));
owner.scl = ctx.add(ctx.num(owner.scl),ctx.num(owner.kscl));
owner.krot = ctx.add(ctx.num(owner.krot),1);
owner.kadr = ctx.add(ctx.num(owner.kadr),1);
owner.kadr2 = ctx.add(ctx.num(owner.kadr2),1);
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.less(ctx.num(owner.scl),20))(ctx.less(200,ctx.num(owner.scl)))))
{
   owner.kscl = (-ctx.num(owner.kscl));
}
if(ctx.bool(ctx.less(ctx.num(ctx.randomInt?.(120)),ctx.num(owner.krot))))
{
   owner.krot = (-ctx.num(owner.krot));
}
if(ctx.bool(ctx.less(20,ctx.num(owner.kadr))))
{
   owner.kadr = 1;
}
if(ctx.bool(ctx.less(160,ctx.num(owner.kadr2))))
{
   owner.kadr2 = 160;
}
ctx.setField((this)?.[ctx.add("obj",owner.i)],"_rotation",owner.rot);
ctx.setField((this)?.[ctx.add("obj",owner.i)],"_xscale",owner.scl);
ctx.setField((this)?.[ctx.add("obj",owner.i)],"_yscale",owner.scl);
owner.i = ctx.add(ctx.num(owner.i),1);

}

export function c6v1a481(ctx,owner){
ctx.graph.goto(owner,2,{play:true});

}

export function c6v1a482(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a483(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a484(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c6v1a485(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v1a486(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a487(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a488(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a489(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a490(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a491(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a492(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c6v1a493(ctx,owner){
ctx.stopAllSounds?.();

}

export function c6v1a494(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a495(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a496(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a497(ctx,owner){
ctx.graph.goto(owner,1);

}

export function c6v1a498(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a499(ctx,owner){
owner.skipFrame = 0;

}

export function c6v1a500(ctx,owner){
owner.iii = 3;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v1a501(ctx,owner){
owner.skipFrame = 0;

}

export function c6v1a502(ctx,owner){
owner.iii = 2;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v1a503(ctx,owner){
owner.skipFrame = 0;

}

export function c6v1a504(ctx,owner){
owner.iii = 1;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v1a505(ctx,owner){
ctx.graph.stop(owner);
owner.xxx = (this)?.["_x"];
owner.yyy = (this)?.["_y"];
owner.onMouseUp = function()
{
   ctx.stopDrag(this);
   ctx.setField(this,"_x",owner.xxx);
   ctx.setField(this,"_y",owner.yyy);
};

}

export function c6v1a506(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c6v1a507(ctx,owner){
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

export function c6v1a508(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c6v1a509(ctx,owner){
owner.skipFrame = 0;

}

export function c6v1a510(ctx,owner){
owner.iii = 0;
owner.i = 1;
while(ctx.bool(ctx.less(owner.i,4)))
{
   ctx.setField((this)?.[ctx.add("mc",owner.i)],"ii",owner.i);
   ctx.graph.goto((this)?.[ctx.add("mc",owner.i)],ctx.add("f",((((owner.parent)?.["_parent"])?.["shui_array"])?.[owner.iii])?.[(ctx.num(owner.i)-ctx.num(1))]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.graph.stop(owner);

}

export function c6v1a511(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a512(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a513(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c6v1a514(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a515(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a516(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a517(ctx,owner){
ctx.graph.goto(owner,1);

}

export function c6v1a518(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a519(ctx,owner){
owner.ff = (-ctx.num(1));
owner.ttt = 0;
owner.onEnterFrame = function()
{
   if(ctx.bool(((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.[ctx.add("event",owner.iii)] == 1))
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.num(owner.ff)*ctx.num(2)))))(this,"_y");
      ((old)=>(owner.ttt=old+1,old))(ctx.num(owner.ttt));
      if(ctx.bool(owner.ttt == 30))
      {
         owner.ttt = 0;
         owner.ff = (-ctx.num(owner.ff));
      }
   }
};

}

export function c6v1a520(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c6v1a521(ctx,owner){
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

export function c6v1a522(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a523(ctx,owner){
ctx.setField((owner.parent)?.["_parent"],"changeShow",1);
ctx.setField((owner.parent)?.["_parent"],"oldMap","map1");
ctx.setField((owner.parent)?.["_parent"],"eventNow","event5");
((owner.parent)?.["_parent"])?.["gamePausing"]?.();
ctx.setField((owner.parent)?.["_parent"],"eventNext","map2_22");
ctx.setField((owner.parent)?.["_parent"],"eventAct","change");
ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);

}

export function c6v1a524(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventShow",1);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventNow","event6");
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventNext","");
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventAct","movie");
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event26",1);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"getEventShow",0);
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePausing"]?.();
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((owner.parent)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((owner.parent)?.["_parent"])?.["_parent"])?.["movie"],(((owner.parent)?.["_parent"])?.["_parent"])?.["eventNow"],(((owner.parent)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c6v1a525(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a526(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a527(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a528(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 378;
owner.appeary = 224;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","s2"));
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
owner.talkTxts = ["妹妹，刚刚发生了奇怪的事情，我们现在也不知道是在哪里了…","哥哥我们好象中了什么魔法，让我来想想办法吧！","狮子船长你知道这到底是怎么回事吗？","我想我们是中了黑暗之眼的魔法了吧！恐怖的黑暗之眼……。","刚刚你抓着手的那是谁？这个魔法阵好象是他留给我们的。"];
owner.talkObj = ["map.point1","map.player.point","map.player.point","map.point0","map.point0"];
owner.talkDirs = [1,1,1,1,1];
owner.talkNext = [1,0,3,4,0];
owner.talkAreas = ["talkArea0","talkArea2"];
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["zu2","zu3"];
owner.events = ["event1","event2","event3","event4"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [Math.trunc?.((owner.zu2)?.["_x"]),Math.trunc?.((owner.zu3)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.zu2)?.["_y"]),Math.trunc?.((owner.zu3)?.["_y"])];
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.tree,2);
   if(ctx.bool((owner.parent)?.["event11"] == 0))
   {
      owner.events = ["event10","event11"];
   }
   else
   {
      owner.events = [];
      ctx.setField(owner.changes,2,"map5");
   }
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

export function c6v1a529(ctx,owner){

   owner.i = 1;
   while(ctx.bool(ctx.less(owner.i,5)))
   {
      ctx.setField(((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"],"iii",owner.i);
      ctx.graph.goto((((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"])?.["mc0"],ctx.add("f",(((((this)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(ctx.num(owner.i)-ctx.num(1))])?.[0]));
      ctx.graph.goto((((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"])?.["mc1"],ctx.add("f",(((((this)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(ctx.num(owner.i)-ctx.num(1))])?.[1]));
      ctx.graph.goto((((owner.parent)?.[ctx.add("zu",owner.i)])?.["mc"])?.["mc2"],ctx.add("f",(((((this)?.["_parent"])?.["_parent"])?.["shui_array"])?.[(ctx.num(owner.i)-ctx.num(1))])?.[2]));
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }

}

export function c6v1a530(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
if(ctx.bool((owner.parent)?.["event26"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","stone3","stone4","cao1","cao2"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.stone3)?.["_x"]),Math.trunc?.((owner.stone4)?.["_x"]),Math.trunc?.((owner.cao1)?.["_x"]),Math.trunc?.((owner.cao2)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.stone3)?.["_y"]),Math.trunc?.((owner.stone4)?.["_y"]),Math.trunc?.((owner.cao1)?.["_y"]),Math.trunc?.((owner.cao2)?.["_y"])];
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

export function c6v1a531(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["s1","s2","s3","s4","c1","c2","c3","c4","tree"];
owner.blockx = [Math.trunc?.((owner.s1)?.["_x"]),Math.trunc?.((owner.s2)?.["_x"]),Math.trunc?.((owner.s3)?.["_x"]),Math.trunc?.((owner.s4)?.["_x"]),Math.trunc?.((owner.c1)?.["_x"]),Math.trunc?.((owner.c2)?.["_x"]),Math.trunc?.((owner.c3)?.["_x"]),Math.trunc?.((owner.c4)?.["_x"]),Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.s1)?.["_y"]),Math.trunc?.((owner.s2)?.["_y"]),Math.trunc?.((owner.s3)?.["_y"]),Math.trunc?.((owner.s4)?.["_y"]),Math.trunc?.((owner.c1)?.["_y"]),Math.trunc?.((owner.c2)?.["_y"]),Math.trunc?.((owner.c3)?.["_y"]),Math.trunc?.((owner.c4)?.["_y"]),Math.trunc?.((owner.tree)?.["_y"])];
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
owner.events = ["event24"];
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

export function c6v1a532(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a533(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a534(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["s1","s2","s3","s4","c1","c2","c3","c4","tree"];
owner.blockx = [Math.trunc?.((owner.s1)?.["_x"]),Math.trunc?.((owner.s2)?.["_x"]),Math.trunc?.((owner.s3)?.["_x"]),Math.trunc?.((owner.s4)?.["_x"]),Math.trunc?.((owner.c1)?.["_x"]),Math.trunc?.((owner.c2)?.["_x"]),Math.trunc?.((owner.c3)?.["_x"]),Math.trunc?.((owner.c4)?.["_x"]),Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.s1)?.["_y"]),Math.trunc?.((owner.s2)?.["_y"]),Math.trunc?.((owner.s3)?.["_y"]),Math.trunc?.((owner.s4)?.["_y"]),Math.trunc?.((owner.c1)?.["_y"]),Math.trunc?.((owner.c2)?.["_y"]),Math.trunc?.((owner.c3)?.["_y"]),Math.trunc?.((owner.c4)?.["_y"]),Math.trunc?.((owner.tree)?.["_y"])];
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
if(ctx.bool((owner.parent)?.["event32"] != 1))
{
   owner.events = ["event32"];
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

export function c6v1a535(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
if(ctx.bool((owner.parent)?.["event28"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ss1","ss2","ss3","ss4","cc1","cc2","cc3","cc4"];
owner.blockx = [Math.trunc?.((owner.ss1)?.["_x"]),Math.trunc?.((owner.ss2)?.["_x"]),Math.trunc?.((owner.ss3)?.["_x"]),Math.trunc?.((owner.ss4)?.["_x"]),Math.trunc?.((owner.cc1)?.["_x"]),Math.trunc?.((owner.cc2)?.["_x"]),Math.trunc?.((owner.cc3)?.["_x"]),Math.trunc?.((owner.cc4)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ss1)?.["_y"]),Math.trunc?.((owner.ss2)?.["_y"]),Math.trunc?.((owner.ss3)?.["_y"]),Math.trunc?.((owner.ss4)?.["_y"]),Math.trunc?.((owner.cc1)?.["_y"]),Math.trunc?.((owner.cc2)?.["_y"]),Math.trunc?.((owner.cc3)?.["_y"]),Math.trunc?.((owner.cc4)?.["_y"])];
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

export function c6v1a536(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event28"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a537(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a538(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","stone3","stone4","cao1","cao2","ball"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.stone3)?.["_x"]),Math.trunc?.((owner.stone4)?.["_x"]),Math.trunc?.((owner.cao1)?.["_x"]),Math.trunc?.((owner.cao2)?.["_x"]),Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.stone3)?.["_y"]),Math.trunc?.((owner.stone4)?.["_y"]),Math.trunc?.((owner.cao1)?.["_y"]),Math.trunc?.((owner.cao2)?.["_y"]),Math.trunc?.((owner.ball)?.["_y"])];
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
if(ctx.bool((owner.parent)?.["event25"] != 1))
{
   owner.events = ["event25"];
}
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

export function c6v1a539(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a540(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
if(ctx.bool((owner.parent)?.["event25"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["st1","st2","st3","st4","ca1","ca2"];
owner.blockx = [Math.trunc?.((owner.st1)?.["_x"]),Math.trunc?.((owner.st2)?.["_x"]),Math.trunc?.((owner.st3)?.["_x"]),Math.trunc?.((owner.st4)?.["_x"]),Math.trunc?.((owner.ca1)?.["_x"]),Math.trunc?.((owner.ca2)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.st1)?.["_y"]),Math.trunc?.((owner.st2)?.["_y"]),Math.trunc?.((owner.st3)?.["_y"]),Math.trunc?.((owner.st4)?.["_y"]),Math.trunc?.((owner.ca1)?.["_y"]),Math.trunc?.((owner.ca2)?.["_y"])];
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

export function c6v1a541(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event25"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a542(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,13)))
{
   (owner.blocks)?.["push"]?.(ctx.add("sto",owner.i));
   (owner.blockx)?.["push"]?.(((this)?.[ctx.add("sto",owner.i)])?.["_x"]);
   (owner.blocky)?.["push"]?.(((this)?.[ctx.add("sto",owner.i)])?.["_y"]);
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
owner.events = ["event21"];
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

export function c6v1a543(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree"];
owner.blockx = [Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.tree)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,28)))
{
   (owner.blocks)?.["push"]?.(ctx.add("chun",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("chun",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(((this)?.[ctx.add("chun",owner.i)])?.["_y"]);
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
if(ctx.bool((owner.parent)?.["event29"] != 1))
{
   owner.events = ["event29"];
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

export function c6v1a544(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event28"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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

export function c6v1a545(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a546(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event28"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a547(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ball"];
owner.blockx = [Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ball)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("bl",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("bl",owner.i)])?.["_y"]));
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
if(ctx.bool((owner.parent)?.["event28"] != 1))
{
   owner.events = ["event28"];
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

export function c6v1a548(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a549(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.ii = 2;
owner.jj = 2;
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map1"))
{
   owner.appearx = owner.xx;
   owner.appeary = owner.yy;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = owner.dir2);
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 433;
   owner.appeary = 363;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = "map2_22";
owner.dir2 = "";
if(ctx.bool((owner.parent)?.["event11"] == 0))
{
   ctx.graph.goto(owner.yu,1);
}
else
{
   ctx.graph.goto(owner.yu,2);
}
owner.talkTxts = ["找到四季，我会告诉你一切","我们是不是做梦呢……","妹妹，这里好美啊!"];
owner.talkObj = ["map.point0","map.point1","map.point2"];
owner.talkDirs = [0,0,0];
owner.talkNext = [0,0,0];
owner.talkAreas = ["talkArea0","talkArea1","talkArea2"];
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event32"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event31"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event30"] == 1:logicalLeft)((owner.parent)?.["event29"] == 1)))))
{
   owner.talkTxts = ["太让我吃惊了，你居然真的办到了！好吧，我会遵守承诺的。","女生也不比男生差呀～","小妹你真勇敢！"];
   owner.talkObj = ["map.point0","map.point1","map.point2"];
   owner.talkDirs = [0,0,0];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea1","talkArea2"];
   owner.events = ["event6"];
}
owner.minScale = 95;
owner.playerScale = 95;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","tree","chuanzhang","qmm","fox"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.tree)?.["_x"]),Math.trunc?.((owner.chuanzhang)?.["_x"]),Math.trunc?.((owner.qmm)?.["_x"]),Math.trunc?.((owner.fox)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.tree)?.["_y"]),Math.trunc?.((owner.chuanzhang)?.["_y"]),Math.trunc?.((owner.qmm)?.["_y"]),Math.trunc?.((owner.fox)?.["_y"])];
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.tree,2);
   if(ctx.bool((owner.parent)?.["event11"] == 0))
   {
      owner.events = ["event10","event11"];
   }
   else
   {
      owner.events = [];
      ctx.setField(owner.changes,2,"map5");
   }
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

export function c6v1a550(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a551(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a552(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a553(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a554(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event27"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("b",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("b",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("b",owner.i)])?.["_y"]));
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

export function c6v1a555(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event27"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a556(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,18)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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
owner.events = ["event23"];
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

export function c6v1a557(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a558(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a559(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,38)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event31"] != 1))
{
   owner.events = ["event31"];
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

export function c6v1a560(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
if(ctx.bool((owner.parent)?.["event25"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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

export function c6v1a561(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a562(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event25"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"dir2","w2");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",380);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a563(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a564(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event26"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,4)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blo",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blo",owner.i)])?.["_y"]));
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

export function c6v1a565(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event26"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
               ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
               ctx.setField(owner.parent,"yy",40);
               ctx.setField(owner.parent,"dir2","s2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a566(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a567(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ball"];
owner.blockx = [Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ball)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,6)))
{
   (owner.blocks)?.["push"]?.(ctx.add("blog",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blog",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("blog",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event26"] != 1))
{
   owner.events = ["event26"];
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

export function c6v1a568(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["downKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",40);
            ctx.setField(owner.parent,"dir2","s2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a569(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree"];
owner.blockx = [Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.tree)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,25)))
{
   (owner.blocks)?.["push"]?.(ctx.add("cc",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event30"] != 1))
{
   owner.events = ["event30"];
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

export function c6v1a570(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["upKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"ii");
            ctx.setField(owner.parent,"dir2","w2");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ctx.setField(owner.parent,"xx",((owner.parent)?.["player"])?.["_x"]);
            ctx.setField(owner.parent,"yy",380);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a571(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a572(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree"];
owner.blockx = [Math.trunc?.((owner.tree)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.tree)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("cc",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("cc",owner.i)])?.["_y"]));
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
owner.events = ["event22"];
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

export function c6v1a573(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event26"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("sr",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_y"]));
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

export function c6v1a574(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event26"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",40);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","d2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a575(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = [];
owner.blockx = [];
owner.blocky = [];
if(ctx.bool((owner.parent)?.["event27"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("sr",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("sr",owner.i)])?.["_y"]));
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

export function c6v1a576(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["event27"] != 1))
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
               ctx.setField(owner.parent,"xx",720);
               ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
               ctx.setField(owner.parent,"dir2","a2");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]),"i"));
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
               ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
               ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
               ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
            }
         }
      }
   }

}

export function c6v1a577(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["rightKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",40);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","d2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a578(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone1","stone2","stone3","stone4","cao1","cao2"];
owner.blockx = [Math.trunc?.((owner.stone1)?.["_x"]),Math.trunc?.((owner.stone2)?.["_x"]),Math.trunc?.((owner.stone3)?.["_x"]),Math.trunc?.((owner.stone4)?.["_x"]),Math.trunc?.((owner.cao1)?.["_x"]),Math.trunc?.((owner.cao2)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone1)?.["_y"]),Math.trunc?.((owner.stone2)?.["_y"]),Math.trunc?.((owner.stone3)?.["_y"]),Math.trunc?.((owner.stone4)?.["_y"]),Math.trunc?.((owner.cao1)?.["_y"]),Math.trunc?.((owner.cao2)?.["_y"])];
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
if(ctx.bool((owner.parent)?.["event28"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
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

export function c6v1a579(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["ball"];
owner.blockx = [Math.trunc?.((owner.ball)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.ball)?.["_y"])];
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,19)))
{
   (owner.blocks)?.["push"]?.(ctx.add("srr",owner.i));
   (owner.blockx)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("srr",owner.i)])?.["_x"]));
   (owner.blocky)?.["push"]?.(Math.trunc?.(((this)?.[ctx.add("srr",owner.i)])?.["_y"]));
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
if(ctx.bool((owner.parent)?.["event27"] != 1))
{
   owner.events = ["event27"];
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

export function c6v1a580(ctx,owner){

   if(ctx.bool((owner.parent)?.["dir2"] == ""))
   {
      if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["player"])))
      {
         if(ctx.bool((ctx.keys)?.["isDown"]?.((((this)?.["_parent"])?.["_parent"])?.["leftKey"])))
         {
            ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
            ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
            ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old-1);return old;})(owner.parent,"jj");
            ctx.setField(owner.parent,"xx",720);
            ctx.setField(owner.parent,"yy",((owner.parent)?.["player"])?.["_y"]);
            ctx.setField(owner.parent,"dir2","a2");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext",ctx.add(ctx.add("map2_",(owner.parent)?.["ii"]),(owner.parent)?.["jj"]));
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
            ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
            ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
            ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
            ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
            ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);
         }
      }
   }

}

export function c6v1a581(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone12","stone22","stone32","stone42","cao12","cao22"];
owner.blockx = [Math.trunc?.((owner.stone12)?.["_x"]),Math.trunc?.((owner.stone22)?.["_x"]),Math.trunc?.((owner.stone32)?.["_x"]),Math.trunc?.((owner.stone42)?.["_x"]),Math.trunc?.((owner.cao12)?.["_x"]),Math.trunc?.((owner.cao22)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone12)?.["_y"]),Math.trunc?.((owner.stone22)?.["_y"]),Math.trunc?.((owner.stone32)?.["_y"]),Math.trunc?.((owner.stone42)?.["_y"]),Math.trunc?.((owner.cao12)?.["_y"]),Math.trunc?.((owner.cao22)?.["_y"])];
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

export function c6v1a582(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
if(ctx.bool((owner.parent)?.["event25"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
}
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone13","stone23","stone33","stone43","cao13","cao23"];
owner.blockx = [Math.trunc?.((owner.stone13)?.["_x"]),Math.trunc?.((owner.stone23)?.["_x"]),Math.trunc?.((owner.stone33)?.["_x"]),Math.trunc?.((owner.stone43)?.["_x"]),Math.trunc?.((owner.cao13)?.["_x"]),Math.trunc?.((owner.cao23)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone13)?.["_y"]),Math.trunc?.((owner.stone23)?.["_y"]),Math.trunc?.((owner.stone33)?.["_y"]),Math.trunc?.((owner.stone43)?.["_y"]),Math.trunc?.((owner.cao13)?.["_y"]),Math.trunc?.((owner.cao23)?.["_y"])];
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

export function c6v1a583(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone14","stone24","stone34","stone44","cao14","cao24"];
owner.blockx = [Math.trunc?.((owner.stone14)?.["_x"]),Math.trunc?.((owner.stone24)?.["_x"]),Math.trunc?.((owner.stone34)?.["_x"]),Math.trunc?.((owner.stone44)?.["_x"]),Math.trunc?.((owner.cao14)?.["_x"]),Math.trunc?.((owner.cao24)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone14)?.["_y"]),Math.trunc?.((owner.stone24)?.["_y"]),Math.trunc?.((owner.stone34)?.["_y"]),Math.trunc?.((owner.stone44)?.["_y"]),Math.trunc?.((owner.cao14)?.["_y"]),Math.trunc?.((owner.cao24)?.["_y"])];
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

export function c6v1a584(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone15","stone25","stone35","stone45","cao15","cao25"];
owner.blockx = [Math.trunc?.((owner.stone15)?.["_x"]),Math.trunc?.((owner.stone25)?.["_x"]),Math.trunc?.((owner.stone35)?.["_x"]),Math.trunc?.((owner.stone45)?.["_x"]),Math.trunc?.((owner.cao15)?.["_x"]),Math.trunc?.((owner.cao25)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone15)?.["_y"]),Math.trunc?.((owner.stone25)?.["_y"]),Math.trunc?.((owner.stone35)?.["_y"]),Math.trunc?.((owner.stone45)?.["_y"]),Math.trunc?.((owner.cao15)?.["_y"]),Math.trunc?.((owner.cao25)?.["_y"])];
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

export function c6v1a585(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone16","stone26","stone36","stone46","cao16","cao26"];
owner.blockx = [Math.trunc?.((owner.stone16)?.["_x"]),Math.trunc?.((owner.stone26)?.["_x"]),Math.trunc?.((owner.stone36)?.["_x"]),Math.trunc?.((owner.stone46)?.["_x"]),Math.trunc?.((owner.cao16)?.["_x"]),Math.trunc?.((owner.cao26)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone16)?.["_y"]),Math.trunc?.((owner.stone26)?.["_y"]),Math.trunc?.((owner.stone36)?.["_y"]),Math.trunc?.((owner.stone46)?.["_y"]),Math.trunc?.((owner.cao16)?.["_y"]),Math.trunc?.((owner.cao26)?.["_y"])];
if(ctx.bool((owner.parent)?.["event27"] == 1))
{
   ctx.setField(owner.sha,"_visible",false);
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

export function c6v1a586(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = owner.xx;
owner.appeary = owner.yy;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir",owner.dir2));
ctx.graph.goto(owner.player,(owner.parent)?.["qqDir"]);
owner.map = ctx.add(ctx.add("map2_",owner.ii),owner.jj);
owner.minScale = 95;
owner.playerScale = 95;
owner.dir2 = "";
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["stone17","stone27","stone37","stone47","cao17","cao27"];
owner.blockx = [Math.trunc?.((owner.stone17)?.["_x"]),Math.trunc?.((owner.stone27)?.["_x"]),Math.trunc?.((owner.stone37)?.["_x"]),Math.trunc?.((owner.stone47)?.["_x"]),Math.trunc?.((owner.cao17)?.["_x"]),Math.trunc?.((owner.cao27)?.["_x"])];
owner.blocky = [Math.trunc?.((owner.stone17)?.["_y"]),Math.trunc?.((owner.stone27)?.["_y"]),Math.trunc?.((owner.stone37)?.["_y"]),Math.trunc?.((owner.stone47)?.["_y"]),Math.trunc?.((owner.cao17)?.["_y"]),Math.trunc?.((owner.cao27)?.["_y"])];
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

export function c6v1a587(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a588(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a589(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a590(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c6v1a591(ctx,owner){
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

export function c6v1a592(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c6v1a593(ctx,owner){
owner.listItem = function(){
   var _loc3_ = 0;
   var _loc4_;
   while(ctx.bool(ctx.less(_loc3_,(((owner.parent)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc4_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc3_),_loc3_);
      ctx.setField(_loc4_,"_x",(ctx.num(_loc3_)*ctx.num(36)));
      ctx.graph.goto(_loc4_,(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
      ctx.setField(_loc4_,"aim",(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
      ctx.setField(_loc4_,"iii",_loc3_);
      _loc3_ = ctx.add(_loc3_,1);
   }
   owner.itemStep = 0;
   ctx.setField(owner.btnLeft,"_visible",0);
   if(ctx.bool(ctx.lessEqual((((owner.parent)?.["_parent"])?.["itemList"])?.["length"],4)))
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

export function c6v1a594(ctx,owner){

   ctx.graph.goto(owner,((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c6v1a595(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a596(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a597(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c6v1a598(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c6v1a599(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c6v1a600(ctx,owner){
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

export function c6v1a601(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c6v1a602(ctx,owner){
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

export function c6v1a603(ctx,owner){
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
         ctx.trace?.(ctx.add("remove=",((owner.parent)?.["map"])?.[(((owner.parent)?.["map"])?.["blocks"])?.[owner.i]]));
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
         ctx.setField((owner.parent)?.["disAll"],"_visible",0);
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

export function c6v1a604(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c6v1a605(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a606(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a607(ctx,owner){
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

export function c6v1a608(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c6v1a609(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c6v1a610(ctx,owner){
owner.skipFrame = 0;
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c6v1a611(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(6);

}

export function c6v1a612(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a613(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a614(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a615(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a616(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a617(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a618(ctx,owner){

   owner.i = 1;
   while(ctx.bool(ctx.lessEqual(owner.i,owner.num)))
   {
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],(ctx.math)?.["cos"]?.(((owner.parent)?.[ctx.add("snow",owner.i)])?.["dir"]))))((owner.parent)?.[ctx.add("snow",owner.i)],"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],((owner.parent)?.[ctx.add("snow",owner.i)])?.["v"])))((owner.parent)?.[ctx.add("snow",owner.i)],"_y");
      if(ctx.bool(ctx.less(360,((owner.parent)?.[ctx.add("snow",owner.i)])?.["_x"])))
      {
         ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_x",0);
      }
      if(ctx.bool(ctx.less(((owner.parent)?.[ctx.add("snow",owner.i)])?.["_x"],(-ctx.num(360)))))
      {
         ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_x",360);
      }
      if(ctx.bool(ctx.less(400,((owner.parent)?.[ctx.add("snow",owner.i)])?.["_y"])))
      {
         ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_y",0);
      }
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }

}

export function c6v1a619(ctx,owner){

   ctx.setField(this,"_visible",false);
   owner.num = 70;
   owner.i = 1;
   while(ctx.bool(ctx.lessEqual(owner.i,owner.num)))
   {
      ctx.attach(owner.parent,"snow",ctx.add("snow",owner.i),owner.i);
      owner.scale = ctx.add(ctx.randomInt?.(60),41);
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_xscale",owner.scale);
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_yscale",owner.scale);
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_x",(ctx.num(ctx.randomInt?.(720))-ctx.num(360)));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_y",(-ctx.num(ctx.randomInt?.(400))));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"_rotation",ctx.randomInt?.(360));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"dir",(-ctx.num(ctx.randomInt?.(180))));
      ctx.setField((owner.parent)?.[ctx.add("snow",owner.i)],"v",ctx.add(ctx.randomInt?.(2),2));
      ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
   }

}

export function c6v1a620(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event28",1);

}

export function c6v1a621(ctx,owner){
if(ctx.bool(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
{
   ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["_parent"],"end");
}

}

export function c6v1a622(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a623(ctx,owner){
owner.ri_array = [4,3,2,1,3];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v1a624(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a625(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a626(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a627(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a628(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a629(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a630(ctx,owner){
owner.c = 2;

}

export function c6v1a631(ctx,owner){
if(ctx.bool(ctx.less(40,owner.c)))
{
   ctx.graph.goto(owner,4);
}
else
{
   ctx.cloneSprite(owner,"snow1","snow" & owner.c,ctx.add(16384,(ctx.num(900)-ctx.num(owner.c))));
   ctx.setProperty(owner,"snow" & owner.c,"_x",ctx.add(ctx.getProperty(owner,"snow" & (ctx.num(owner.c)-ctx.num(1)),"_x"),ctx.randomInt?.(200)));
   ctx.setProperty(owner,"snow" & owner.c,"_xscale",ctx.randomInt?.(100));
   ctx.setProperty(owner,"snow" & owner.c,"_yscale",ctx.getProperty(owner,"snow" & owner.c,"_xscale"));
   ctx.setProperty(owner,"snow" & owner.c,"_rotation",ctx.randomInt?.(360));
   owner.c=ctx.add(owner.c,1);
}

}

export function c6v1a632(ctx,owner){
ctx.graph.goto(owner,2,{play:true});

}

export function c6v1a633(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a634(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a635(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a636(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a637(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event27",1);

}

export function c6v1a638(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a639(ctx,owner){
owner.ri_array = [3,4,3,1,3];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v1a640(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a641(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a642(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a643(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a644(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a645(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a646(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a647(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a648(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a649(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event26",1);

}

export function c6v1a650(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a651(ctx,owner){
owner.ri_array = [2,4,3,1,1];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v1a652(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a653(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a654(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a655(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a656(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a657(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a658(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a659(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a660(ctx,owner){
ctx.graph.goto(owner.parent,"kkk",{play:true});
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"event25",1);

}

export function c6v1a661(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a662(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a663(ctx,owner){
owner.ri_array = [1,3,2,3,3];
owner.skipFrame = 0;
ctx.graph.stop(owner);

}

export function c6v1a664(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a665(ctx,owner){
ctx.graph.play(owner);

}

export function c6v1a666(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v1a667(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v1a668(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v1a669(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c6v1a670(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c6v1a671(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c6v1a672(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a673(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a674(ctx,owner){
owner._visible = 0;

}

export function c6v1a675(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a676(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a677(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c6v1a678(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a679(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a680(ctx,owner){
owner._visible = 0;

}

export function c6v1a681(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a682(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a683(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a684(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a685(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a686(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a687(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a688(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a689(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a690(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a691(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a692(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c6v1a693(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c6v1a694(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c6v1a695(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a696(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a697(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c6v1a698(ctx,owner){

}

export function c6v1a699(ctx,owner){
ctx.graph.stop(owner);

}

export function c6v1a700(ctx,owner){
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
   owner.event29 = 0;
   owner.event30 = 0;
   owner.event31 = 0;
   owner.event32 = 0;
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
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event2":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event3":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event4":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     break;
                  case "event6":
                     ((old)=>(owner.event6=old+1,old))(ctx.num(owner.event6));
                     if(ctx.bool(owner.event6 == 2))
                     {
                        ctx.graph.goto((owner.map)?.["fox"],"kkk");
                     }
                     else if(ctx.bool(owner.event6 == 1))
                     {
                        ctx.graph.goto((owner.map)?.["fox"],2,{play:true});
                        2;
                     }
                     break;
                  case "event21":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event22":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event23":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event24":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event25":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event26":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event27":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event28":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event29":
                     (owner.getItem)?.["start"]?.();
                     owner.event29 = 1;
                     (owner.itemList)?.["push"]?.("item2");
                     ctx.graph.goto(owner.itemShow,"item2");
                     owner.itemNow = "item2";
                     owner.etShow?.("春天的礼品");
                     break;
                  case "event30":
                     (owner.getItem)?.["start"]?.();
                     owner.event30 = 1;
                     (owner.itemList)?.["push"]?.("item3");
                     ctx.graph.goto(owner.itemShow,"item3");
                     owner.itemNow = "item3";
                     owner.etShow?.("夏天的礼品");
                     break;
                  case "event31":
                     (owner.getItem)?.["start"]?.();
                     owner.event31 = 1;
                     (owner.itemList)?.["push"]?.("item4");
                     ctx.graph.goto(owner.itemShow,"item4");
                     owner.itemNow = "item3";
                     owner.etShow?.("秋天的礼品");
                     break;
                  case "event32":
                     (owner.getItem)?.["start"]?.();
                     owner.event32 = 1;
                     (owner.itemList)?.["push"]?.("item5");
                     ctx.graph.goto(owner.itemShow,"item5");
                     owner.itemNow = "item4";
                     owner.etShow?.("冬天的礼品");
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
   var _loc4_ = ctx.add((ctx.num((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))%ctx.num(owner.txtW)))*ctx.num(owner.txtDisw)),owner.txtXmin);
   var _loc3_ = ctx.add((ctx.num((ctx.math)?.["floor"]?.((ctx.num((ctx.num(owner.txtCount)%ctx.num(owner.txtLength)))/ctx.num(owner.txtW))))*ctx.num(owner.txtDish)),owner.txtYmin);
   var _loc2_ = ctx.attach((owner.talker)?.["popup"],"talkTxt",ctx.add("talkTxt",owner.txtCount),owner.txtCount);
   ctx.setField(_loc2_,"_x",_loc4_);
   ctx.setField(_loc2_,"_y",_loc3_);
   ctx.setField((_loc2_)?.["txt"],"txt",(owner.txts)?.[owner.txtCount]);
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
   var _loc0_;
   if(ctx.bool((_loc0_ = owner.afterMovieEvent) === 1))
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event4 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event3 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event2 == 1:logicalLeft)(owner.event1 == 1)))))
      {
         ctx.graph.goto((owner.map)?.["topBlocks"],2,{play:true});
      }
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
owner.shui_array = [[3,2,1],[2,3,4],[3,1,2],[4,2,1]];
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();
(owner.itemList)?.["push"]?.("item1");
ctx.graph.goto(owner.itemShow,"item1");
owner.itemNow = "item1";

}

export function c6v1a701(ctx,owner){
owner.oldMap = "";

}

export const variant0={sourceBytes:6375536,frames:{"198":{"1":(ctx,owner)=>{c6v0a135.call(owner,ctx,owner);},"711":(ctx,owner)=>{c6v0a136.call(owner,ctx,owner);}},"349":{"1":(ctx,owner)=>{c6v0a261.call(owner,ctx,owner);},"1021":(ctx,owner)=>{c6v0a262.call(owner,ctx,owner);}},"380":{"1":(ctx,owner)=>{c6v0a263.call(owner,ctx,owner);}},"386":{"1":(ctx,owner)=>{c6v0a264.call(owner,ctx,owner);}},"392":{"1":(ctx,owner)=>{c6v0a265.call(owner,ctx,owner);}},"401":{"1":(ctx,owner)=>{c6v0a266.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a268.call(owner,ctx,owner);},"96":(ctx,owner)=>{c6v0a271.call(owner,ctx,owner);},"109":(ctx,owner)=>{c6v0a267.call(owner,ctx,owner);}},"440":{"16":(ctx,owner)=>{c6v0a272.call(owner,ctx,owner);},"41":(ctx,owner)=>{c6v0a273.call(owner,ctx,owner);}},"449":{"1":(ctx,owner)=>{c6v0a274.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a275.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v0a276.call(owner,ctx,owner);}},"453":{"1":(ctx,owner)=>{c6v0a277.call(owner,ctx,owner);}},"459":{"1":(ctx,owner)=>{c6v0a278.call(owner,ctx,owner);}},"465":{"1":(ctx,owner)=>{c6v0a279.call(owner,ctx,owner);}},"471":{"1":(ctx,owner)=>{c6v0a280.call(owner,ctx,owner);}},"478":{"1":(ctx,owner)=>{c6v0a281.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a282.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v0a283.call(owner,ctx,owner);},"4":(ctx,owner)=>{c6v0a284.call(owner,ctx,owner);}},"482":{"90":(ctx,owner)=>{c6v0a285.call(owner,ctx,owner);}},"483":{"1":(ctx,owner)=>{c6v0a286.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a287.call(owner,ctx,owner);},"81":(ctx,owner)=>{c6v0a288.call(owner,ctx,owner);},"93":(ctx,owner)=>{c6v0a289.call(owner,ctx,owner);}},"487":{"1":(ctx,owner)=>{c6v0a290.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a291.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v0a292.call(owner,ctx,owner);}},"491":{"1":(ctx,owner)=>{c6v0a293.call(owner,ctx,owner);}},"493":{"1":(ctx,owner)=>{c6v0a294.call(owner,ctx,owner);}},"499":{"1":(ctx,owner)=>{c6v0a295.call(owner,ctx,owner);}},"505":{"1":(ctx,owner)=>{c6v0a296.call(owner,ctx,owner);}},"511":{"1":(ctx,owner)=>{c6v0a297.call(owner,ctx,owner);}},"517":{"1":(ctx,owner)=>{c6v0a298.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a299.call(owner,ctx,owner);},"81":(ctx,owner)=>{c6v0a300.call(owner,ctx,owner);},"94":(ctx,owner)=>{c6v0a301.call(owner,ctx,owner);}},"523":{"1":(ctx,owner)=>{c6v0a302.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a303.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v0a304.call(owner,ctx,owner);}},"526":{"1":(ctx,owner)=>{c6v0a305.call(owner,ctx,owner);}},"528":{"1":(ctx,owner)=>{c6v0a306.call(owner,ctx,owner);}},"534":{"1":(ctx,owner)=>{c6v0a307.call(owner,ctx,owner);}},"540":{"1":(ctx,owner)=>{c6v0a308.call(owner,ctx,owner);}},"546":{"1":(ctx,owner)=>{c6v0a309.call(owner,ctx,owner);}},"555":{"1":(ctx,owner)=>{c6v0a310.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a313.call(owner,ctx,owner);},"129":(ctx,owner)=>{c6v0a311.call(owner,ctx,owner);},"143":(ctx,owner)=>{c6v0a312.call(owner,ctx,owner);}},"557":{"1":(ctx,owner)=>{c6v0a314.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a315.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v0a316.call(owner,ctx,owner);}},"570":{"1":(ctx,owner)=>{c6v0a317.call(owner,ctx,owner);}},"589":{"1":(ctx,owner)=>{c6v0a318.call(owner,ctx,owner);}},"591":{"1":(ctx,owner)=>{c6v0a319.call(owner,ctx,owner);}},"595":{"1":(ctx,owner)=>{c6v0a320.call(owner,ctx,owner);}},"600":{"1":(ctx,owner)=>{c6v0a321.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a322.call(owner,ctx,owner);},"7":(ctx,owner)=>{c6v0a323.call(owner,ctx,owner);}},"621":{"1":(ctx,owner)=>{c6v0a324.call(owner,ctx,owner);}},"623":{"1":(ctx,owner)=>{c6v0a325.call(owner,ctx,owner);}},"705":{"19":(ctx,owner)=>{c6v0a326.call(owner,ctx,owner);}},"722":{"19":(ctx,owner)=>{c6v0a327.call(owner,ctx,owner);}},"726":{"17":(ctx,owner)=>{c6v0a328.call(owner,ctx,owner);}},"741":{"11":(ctx,owner)=>{c6v0a329.call(owner,ctx,owner);}},"758":{"11":(ctx,owner)=>{c6v0a330.call(owner,ctx,owner);}},"760":{"1":(ctx,owner)=>{c6v0a331.call(owner,ctx,owner);}},"770":{"12":(ctx,owner)=>{c6v0a332.call(owner,ctx,owner);}},"779":{"12":(ctx,owner)=>{c6v0a333.call(owner,ctx,owner);}},"792":{"22":(ctx,owner)=>{c6v0a334.call(owner,ctx,owner);}},"803":{"22":(ctx,owner)=>{c6v0a335.call(owner,ctx,owner);}},"825":{"18":(ctx,owner)=>{c6v0a336.call(owner,ctx,owner);}},"843":{"18":(ctx,owner)=>{c6v0a337.call(owner,ctx,owner);}},"851":{"9":(ctx,owner)=>{c6v0a338.call(owner,ctx,owner);}},"857":{"9":(ctx,owner)=>{c6v0a339.call(owner,ctx,owner);}},"891":{"22":(ctx,owner)=>{c6v0a340.call(owner,ctx,owner);}},"919":{"22":(ctx,owner)=>{c6v0a341.call(owner,ctx,owner);}},"926":{"9":(ctx,owner)=>{c6v0a342.call(owner,ctx,owner);}},"933":{"9":(ctx,owner)=>{c6v0a343.call(owner,ctx,owner);}},"934":{"137":(ctx,owner)=>{c6v0a344.call(owner,ctx,owner);},"144":(ctx,owner)=>{c6v0a345.call(owner,ctx,owner);}},"955":{"16":(ctx,owner)=>{c6v0a346.call(owner,ctx,owner);}},"961":{"8":(ctx,owner)=>{c6v0a347.call(owner,ctx,owner);}},"967":{"13":(ctx,owner)=>{c6v0a348.call(owner,ctx,owner);}},"978":{"22":(ctx,owner)=>{c6v0a349.call(owner,ctx,owner);}},"988":{"20":(ctx,owner)=>{c6v0a350.call(owner,ctx,owner);}},"994":{"8":(ctx,owner)=>{c6v0a351.call(owner,ctx,owner);}},"1006":{"16":(ctx,owner)=>{c6v0a49.call(owner,ctx,owner);}},"1012":{"10":(ctx,owner)=>{c6v0a50.call(owner,ctx,owner);}},"1029":{"1":(ctx,owner)=>{c6v0a51.call(owner,ctx,owner);}},"1046":{"1":(ctx,owner)=>{c6v0a52.call(owner,ctx,owner);},"61":(ctx,owner)=>{c6v0a55.call(owner,ctx,owner);},"120":(ctx,owner)=>{c6v0a53.call(owner,ctx,owner);},"121":(ctx,owner)=>{c6v0a54.call(owner,ctx,owner);}},"1097":{"21":(ctx,owner)=>{c6v0a56.call(owner,ctx,owner);}},"1111":{"21":(ctx,owner)=>{c6v0a57.call(owner,ctx,owner);}},"1117":{"11":(ctx,owner)=>{c6v0a58.call(owner,ctx,owner);}},"1125":{"11":(ctx,owner)=>{c6v0a59.call(owner,ctx,owner);}},"1133":{"12":(ctx,owner)=>{c6v0a60.call(owner,ctx,owner);}},"1140":{"12":(ctx,owner)=>{c6v0a61.call(owner,ctx,owner);}},"1155":{"25":(ctx,owner)=>{c6v0a62.call(owner,ctx,owner);}},"1170":{"25":(ctx,owner)=>{c6v0a63.call(owner,ctx,owner);}},"1182":{"21":(ctx,owner)=>{c6v0a64.call(owner,ctx,owner);}},"1194":{"21":(ctx,owner)=>{c6v0a65.call(owner,ctx,owner);}},"1203":{"11":(ctx,owner)=>{c6v0a66.call(owner,ctx,owner);}},"1211":{"11":(ctx,owner)=>{c6v0a67.call(owner,ctx,owner);}},"1234":{"35":(ctx,owner)=>{c6v0a68.call(owner,ctx,owner);}},"1257":{"35":(ctx,owner)=>{c6v0a69.call(owner,ctx,owner);}},"1263":{"9":(ctx,owner)=>{c6v0a70.call(owner,ctx,owner);}},"1264":{"119":(ctx,owner)=>{c6v0a71.call(owner,ctx,owner);},"126":(ctx,owner)=>{c6v0a72.call(owner,ctx,owner);}},"1265":{"1":(ctx,owner)=>{c6v0a73.call(owner,ctx,owner);}},"1266":{"1":(ctx,owner)=>{c6v0a74.call(owner,ctx,owner);}},"1267":{"1":(ctx,owner)=>{c6v0a75.call(owner,ctx,owner);},"29":(ctx,owner)=>{c6v0a76.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v0a77.call(owner,ctx,owner);}},"1273":{"1":(ctx,owner)=>{c6v0a78.call(owner,ctx,owner);}},"1380":{"9":(ctx,owner)=>{c6v0a79.call(owner,ctx,owner);}},"1387":{"9":(ctx,owner)=>{c6v0a80.call(owner,ctx,owner);}},"1392":{"9":(ctx,owner)=>{c6v0a81.call(owner,ctx,owner);}},"1397":{"9":(ctx,owner)=>{c6v0a82.call(owner,ctx,owner);}},"1402":{"9":(ctx,owner)=>{c6v0a83.call(owner,ctx,owner);}},"1411":{"9":(ctx,owner)=>{c6v0a84.call(owner,ctx,owner);}},"1416":{"9":(ctx,owner)=>{c6v0a85.call(owner,ctx,owner);}},"1425":{"9":(ctx,owner)=>{c6v0a86.call(owner,ctx,owner);}},"1438":{"26":(ctx,owner)=>{c6v0a87.call(owner,ctx,owner);}},"1453":{"28":(ctx,owner)=>{c6v0a88.call(owner,ctx,owner);}},"1469":{"34":(ctx,owner)=>{c6v0a89.call(owner,ctx,owner);}},"1483":{"34":(ctx,owner)=>{c6v0a90.call(owner,ctx,owner);}},"1497":{"32":(ctx,owner)=>{c6v0a91.call(owner,ctx,owner);}},"1515":{"24":(ctx,owner)=>{c6v0a92.call(owner,ctx,owner);}},"1529":{"32":(ctx,owner)=>{c6v0a93.call(owner,ctx,owner);}},"1545":{"24":(ctx,owner)=>{c6v0a94.call(owner,ctx,owner);}},"1567":{"6":(ctx,owner)=>{c6v0a97.call(owner,ctx,owner);},"10":(ctx,owner)=>{c6v0a95.call(owner,ctx,owner);},"24":(ctx,owner)=>{c6v0a96.call(owner,ctx,owner);}},"1588":{"4":(ctx,owner)=>{c6v0a100.call(owner,ctx,owner);},"14":(ctx,owner)=>{c6v0a98.call(owner,ctx,owner);},"24":(ctx,owner)=>{c6v0a99.call(owner,ctx,owner);}},"1613":{"54":(ctx,owner)=>{c6v0a101.call(owner,ctx,owner);}},"1632":{"16":(ctx,owner)=>{c6v0a102.call(owner,ctx,owner);}},"1633":{"54":(ctx,owner)=>{c6v0a103.call(owner,ctx,owner);}},"1634":{"1":(ctx,owner)=>{c6v0a104.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a105.call(owner,ctx,owner);}},"1671":{"1":(ctx,owner)=>{c6v0a106.call(owner,ctx,owner);}},"1672":{"1":(ctx,owner)=>{c6v0a107.call(owner,ctx,owner);}},"1688":{"1":(ctx,owner)=>{c6v0a108.call(owner,ctx,owner);}},"1701":{"1":(ctx,owner)=>{c6v0a109.call(owner,ctx,owner);}},"1711":{"1":(ctx,owner)=>{c6v0a110.call(owner,ctx,owner);}},"1720":{"1":(ctx,owner)=>{c6v0a111.call(owner,ctx,owner);}},"1721":{"1":(ctx,owner)=>{c6v0a112.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a113.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v0a114.call(owner,ctx,owner);}},"1728":{"1":(ctx,owner)=>{c6v0a115.call(owner,ctx,owner);}},"1735":{"1":(ctx,owner)=>{c6v0a116.call(owner,ctx,owner);}},"1740":{"1":(ctx,owner)=>{c6v0a117.call(owner,ctx,owner);}},"1741":{"1":(ctx,owner)=>{c6v0a118.call(owner,ctx,owner);}},"1749":{"1":(ctx,owner)=>{c6v0a119.call(owner,ctx,owner);}},"1757":{"1":(ctx,owner)=>{c6v0a120.call(owner,ctx,owner);}},"1765":{"1":(ctx,owner)=>{c6v0a121.call(owner,ctx,owner);}},"1766":{"1":(ctx,owner)=>{c6v0a122.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a123.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v0a124.call(owner,ctx,owner);}},"1803":{"1":(ctx,owner)=>{c6v0a125.call(owner,ctx,owner);}},"1805":{"25":(ctx,owner)=>{c6v0a126.call(owner,ctx,owner);}},"1807":{"1":(ctx,owner)=>{c6v0a127.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a128.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v0a129.call(owner,ctx,owner);}},"1847":{"82":(ctx,owner)=>{c6v0a130.call(owner,ctx,owner);}},"1859":{"71":(ctx,owner)=>{c6v0a131.call(owner,ctx,owner);}},"1873":{"95":(ctx,owner)=>{c6v0a132.call(owner,ctx,owner);}},"1876":{"27":(ctx,owner)=>{c6v0a133.call(owner,ctx,owner);}},"1975":{"449":(ctx,owner)=>{c6v0a134.call(owner,ctx,owner);}},"2004":{"46":(ctx,owner)=>{c6v0a137.call(owner,ctx,owner);}},"2006":{"20":(ctx,owner)=>{c6v0a138.call(owner,ctx,owner);}},"2008":{"28":(ctx,owner)=>{c6v0a139.call(owner,ctx,owner);}},"2023":{"44":(ctx,owner)=>{c6v0a140.call(owner,ctx,owner);}},"2042":{"29":(ctx,owner)=>{c6v0a141.call(owner,ctx,owner);}},"2078":{"136":(ctx,owner)=>{c6v0a142.call(owner,ctx,owner);}},"2109":{"1":(ctx,owner)=>{c6v0a143.call(owner,ctx,owner);},"360":(ctx,owner)=>{c6v0a145.call(owner,ctx,owner);},"1140":(ctx,owner)=>{c6v0a144.call(owner,ctx,owner);}},"2140":{"1":(ctx,owner)=>{c6v0a146.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v0a150.call(owner,ctx,owner);},"17":(ctx,owner)=>{c6v0a147.call(owner,ctx,owner);},"25":(ctx,owner)=>{c6v0a148.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v0a149.call(owner,ctx,owner);}},"2143":{"1":(ctx,owner)=>{c6v0a151.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a152.call(owner,ctx,owner);}},"2147":{"1":(ctx,owner)=>{c6v0a153.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a154.call(owner,ctx,owner);}},"2150":{"1":(ctx,owner)=>{c6v0a155.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a156.call(owner,ctx,owner);}},"2163":{"1":(ctx,owner)=>{c6v0a157.call(owner,ctx,owner);}},"2166":{"1":(ctx,owner)=>{c6v0a158.call(owner,ctx,owner);}},"2167":{"1":(ctx,owner)=>{c6v0a159.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v0a160.call(owner,ctx,owner);}},"2170":{"1":(ctx,owner)=>{c6v0a161.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a162.call(owner,ctx,owner);}},"2202":{"1":(ctx,owner)=>{c6v0a163.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a165.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v0a164.call(owner,ctx,owner);}},"2221":{"1":(ctx,owner)=>{c6v0a166.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v0a170.call(owner,ctx,owner);},"17":(ctx,owner)=>{c6v0a167.call(owner,ctx,owner);},"25":(ctx,owner)=>{c6v0a168.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v0a169.call(owner,ctx,owner);}},"2222":{"1":(ctx,owner)=>{c6v0a171.call(owner,ctx,owner);}},"2225":{"1":(ctx,owner)=>{c6v0a172.call(owner,ctx,owner);}},"2244":{"1":(ctx,owner)=>{c6v0a173.call(owner,ctx,owner);}},"2249":{"1":(ctx,owner)=>{c6v0a174.call(owner,ctx,owner);},"51":(ctx,owner)=>{c6v0a175.call(owner,ctx,owner);}},"2288":{"46":(ctx,owner)=>{c6v0a176.call(owner,ctx,owner);},"48":(ctx,owner)=>{c6v0a177.call(owner,ctx,owner);}},"2289":{"1":(ctx,owner)=>{c6v0a178.call(owner,ctx,owner);},"21":(ctx,owner)=>{c6v0a179.call(owner,ctx,owner);}},"2535":{"1":(ctx,owner)=>{c6v0a180.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a201.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v0a230.call(owner,ctx,owner);},"4":(ctx,owner)=>{c6v0a233.call(owner,ctx,owner);},"5":(ctx,owner)=>{c6v0a234.call(owner,ctx,owner);},"6":(ctx,owner)=>{c6v0a235.call(owner,ctx,owner);},"7":(ctx,owner)=>{c6v0a236.call(owner,ctx,owner);},"8":(ctx,owner)=>{c6v0a237.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v0a238.call(owner,ctx,owner);},"10":(ctx,owner)=>{c6v0a182.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v0a183.call(owner,ctx,owner);},"12":(ctx,owner)=>{c6v0a186.call(owner,ctx,owner);},"13":(ctx,owner)=>{c6v0a187.call(owner,ctx,owner);},"14":(ctx,owner)=>{c6v0a190.call(owner,ctx,owner);},"15":(ctx,owner)=>{c6v0a192.call(owner,ctx,owner);},"16":(ctx,owner)=>{c6v0a194.call(owner,ctx,owner);},"17":(ctx,owner)=>{c6v0a195.call(owner,ctx,owner);},"18":(ctx,owner)=>{c6v0a196.call(owner,ctx,owner);},"19":(ctx,owner)=>{c6v0a199.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v0a206.call(owner,ctx,owner);},"21":(ctx,owner)=>{c6v0a208.call(owner,ctx,owner);},"22":(ctx,owner)=>{c6v0a211.call(owner,ctx,owner);},"23":(ctx,owner)=>{c6v0a212.call(owner,ctx,owner);},"24":(ctx,owner)=>{c6v0a216.call(owner,ctx,owner);},"25":(ctx,owner)=>{c6v0a219.call(owner,ctx,owner);},"26":(ctx,owner)=>{c6v0a221.call(owner,ctx,owner);},"27":(ctx,owner)=>{c6v0a224.call(owner,ctx,owner);},"28":(ctx,owner)=>{c6v0a225.call(owner,ctx,owner);},"29":(ctx,owner)=>{c6v0a227.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v0a231.call(owner,ctx,owner);}},"2549":{"1":(ctx,owner)=>{c6v0a239.call(owner,ctx,owner);}},"2608":{"1":(ctx,owner)=>{c6v0a240.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a241.call(owner,ctx,owner);}},"2639":{"1":(ctx,owner)=>{c6v0a242.call(owner,ctx,owner);}},"2652":{"1":(ctx,owner)=>{c6v0a243.call(owner,ctx,owner);}},"2653":{"1":(ctx,owner)=>{c6v0a244.call(owner,ctx,owner);}},"2654":{"1":(ctx,owner)=>{c6v0a246.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a248.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v0a247.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v0a249.call(owner,ctx,owner);}},"2661":{"1":(ctx,owner)=>{c6v0a250.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a253.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v0a255.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v0a251.call(owner,ctx,owner);},"12":(ctx,owner)=>{c6v0a252.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v0a254.call(owner,ctx,owner);}},"2671":{"1":(ctx,owner)=>{c6v0a256.call(owner,ctx,owner);}},"2672":{"1":(ctx,owner)=>{c6v0a257.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a259.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v0a258.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v0a260.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c6v0a352.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v0a353.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v0a354.call(owner,ctx,owner);},"4":(ctx,owner)=>{c6v0a355.call(owner,ctx,owner);}}},frameActions:{"198":{"1":[c6v0a135],"711":[c6v0a136]},"349":{"1":[c6v0a261],"1021":[c6v0a262]},"380":{"1":[c6v0a263]},"386":{"1":[c6v0a264]},"392":{"1":[c6v0a265]},"401":{"1":[c6v0a266],"2":[c6v0a268],"96":[c6v0a271],"109":[c6v0a267]},"440":{"16":[c6v0a272],"41":[c6v0a273]},"449":{"1":[c6v0a274],"2":[c6v0a275],"9":[c6v0a276]},"453":{"1":[c6v0a277]},"459":{"1":[c6v0a278]},"465":{"1":[c6v0a279]},"471":{"1":[c6v0a280]},"478":{"1":[c6v0a281],"2":[c6v0a282],"3":[c6v0a283],"4":[c6v0a284]},"482":{"90":[c6v0a285]},"483":{"1":[c6v0a286],"2":[c6v0a287],"81":[c6v0a288],"93":[c6v0a289]},"487":{"1":[c6v0a290],"2":[c6v0a291],"9":[c6v0a292]},"491":{"1":[c6v0a293]},"493":{"1":[c6v0a294]},"499":{"1":[c6v0a295]},"505":{"1":[c6v0a296]},"511":{"1":[c6v0a297]},"517":{"1":[c6v0a298],"2":[c6v0a299],"81":[c6v0a300],"94":[c6v0a301]},"523":{"1":[c6v0a302],"2":[c6v0a303],"9":[c6v0a304]},"526":{"1":[c6v0a305]},"528":{"1":[c6v0a306]},"534":{"1":[c6v0a307]},"540":{"1":[c6v0a308]},"546":{"1":[c6v0a309]},"555":{"1":[c6v0a310],"2":[c6v0a313],"129":[c6v0a311],"143":[c6v0a312]},"557":{"1":[c6v0a314],"2":[c6v0a315],"9":[c6v0a316]},"570":{"1":[c6v0a317]},"589":{"1":[c6v0a318]},"591":{"1":[c6v0a319]},"595":{"1":[c6v0a320]},"600":{"1":[c6v0a321],"2":[c6v0a322],"7":[c6v0a323]},"621":{"1":[c6v0a324]},"623":{"1":[c6v0a325]},"705":{"19":[c6v0a326]},"722":{"19":[c6v0a327]},"726":{"17":[c6v0a328]},"741":{"11":[c6v0a329]},"758":{"11":[c6v0a330]},"760":{"1":[c6v0a331]},"770":{"12":[c6v0a332]},"779":{"12":[c6v0a333]},"792":{"22":[c6v0a334]},"803":{"22":[c6v0a335]},"825":{"18":[c6v0a336]},"843":{"18":[c6v0a337]},"851":{"9":[c6v0a338]},"857":{"9":[c6v0a339]},"891":{"22":[c6v0a340]},"919":{"22":[c6v0a341]},"926":{"9":[c6v0a342]},"933":{"9":[c6v0a343]},"934":{"137":[c6v0a344],"144":[c6v0a345]},"955":{"16":[c6v0a346]},"961":{"8":[c6v0a347]},"967":{"13":[c6v0a348]},"978":{"22":[c6v0a349]},"988":{"20":[c6v0a350]},"994":{"8":[c6v0a351]},"1006":{"16":[c6v0a49]},"1012":{"10":[c6v0a50]},"1029":{"1":[c6v0a51]},"1046":{"1":[c6v0a52],"61":[c6v0a55],"120":[c6v0a53],"121":[c6v0a54]},"1097":{"21":[c6v0a56]},"1111":{"21":[c6v0a57]},"1117":{"11":[c6v0a58]},"1125":{"11":[c6v0a59]},"1133":{"12":[c6v0a60]},"1140":{"12":[c6v0a61]},"1155":{"25":[c6v0a62]},"1170":{"25":[c6v0a63]},"1182":{"21":[c6v0a64]},"1194":{"21":[c6v0a65]},"1203":{"11":[c6v0a66]},"1211":{"11":[c6v0a67]},"1234":{"35":[c6v0a68]},"1257":{"35":[c6v0a69]},"1263":{"9":[c6v0a70]},"1264":{"119":[c6v0a71],"126":[c6v0a72]},"1265":{"1":[c6v0a73]},"1266":{"1":[c6v0a74]},"1267":{"1":[c6v0a75],"29":[c6v0a76],"30":[c6v0a77]},"1273":{"1":[c6v0a78]},"1380":{"9":[c6v0a79]},"1387":{"9":[c6v0a80]},"1392":{"9":[c6v0a81]},"1397":{"9":[c6v0a82]},"1402":{"9":[c6v0a83]},"1411":{"9":[c6v0a84]},"1416":{"9":[c6v0a85]},"1425":{"9":[c6v0a86]},"1438":{"26":[c6v0a87]},"1453":{"28":[c6v0a88]},"1469":{"34":[c6v0a89]},"1483":{"34":[c6v0a90]},"1497":{"32":[c6v0a91]},"1515":{"24":[c6v0a92]},"1529":{"32":[c6v0a93]},"1545":{"24":[c6v0a94]},"1567":{"6":[c6v0a97],"10":[c6v0a95],"24":[c6v0a96]},"1588":{"4":[c6v0a100],"14":[c6v0a98],"24":[c6v0a99]},"1613":{"54":[c6v0a101]},"1632":{"16":[c6v0a102]},"1633":{"54":[c6v0a103]},"1634":{"1":[c6v0a104],"2":[c6v0a105]},"1671":{"1":[c6v0a106]},"1672":{"1":[c6v0a107]},"1688":{"1":[c6v0a108]},"1701":{"1":[c6v0a109]},"1711":{"1":[c6v0a110]},"1720":{"1":[c6v0a111]},"1721":{"1":[c6v0a112],"2":[c6v0a113],"3":[c6v0a114]},"1728":{"1":[c6v0a115]},"1735":{"1":[c6v0a116]},"1740":{"1":[c6v0a117]},"1741":{"1":[c6v0a118]},"1749":{"1":[c6v0a119]},"1757":{"1":[c6v0a120]},"1765":{"1":[c6v0a121]},"1766":{"1":[c6v0a122],"2":[c6v0a123],"3":[c6v0a124]},"1803":{"1":[c6v0a125]},"1805":{"25":[c6v0a126]},"1807":{"1":[c6v0a127],"2":[c6v0a128],"3":[c6v0a129]},"1847":{"82":[c6v0a130]},"1859":{"71":[c6v0a131]},"1873":{"95":[c6v0a132]},"1876":{"27":[c6v0a133]},"1975":{"449":[c6v0a134]},"2004":{"46":[c6v0a137]},"2006":{"20":[c6v0a138]},"2008":{"28":[c6v0a139]},"2023":{"44":[c6v0a140]},"2042":{"29":[c6v0a141]},"2078":{"136":[c6v0a142]},"2109":{"1":[c6v0a143],"360":[c6v0a145],"1140":[c6v0a144]},"2140":{"1":[c6v0a146],"9":[c6v0a150],"17":[c6v0a147],"25":[c6v0a148],"30":[c6v0a149]},"2143":{"1":[c6v0a151],"2":[c6v0a152]},"2147":{"1":[c6v0a153],"2":[c6v0a154]},"2150":{"1":[c6v0a155],"2":[c6v0a156]},"2163":{"1":[c6v0a157]},"2166":{"1":[c6v0a158]},"2167":{"1":[c6v0a159],"11":[c6v0a160]},"2170":{"1":[c6v0a161],"2":[c6v0a162]},"2202":{"1":[c6v0a163],"2":[c6v0a165],"11":[c6v0a164]},"2221":{"1":[c6v0a166],"9":[c6v0a170],"17":[c6v0a167],"25":[c6v0a168],"30":[c6v0a169]},"2222":{"1":[c6v0a171]},"2225":{"1":[c6v0a172]},"2244":{"1":[c6v0a173]},"2249":{"1":[c6v0a174],"51":[c6v0a175]},"2288":{"46":[c6v0a176],"48":[c6v0a177]},"2289":{"1":[c6v0a178],"21":[c6v0a179]},"2535":{"1":[c6v0a180],"2":[c6v0a201],"3":[c6v0a230],"4":[c6v0a233],"5":[c6v0a234],"6":[c6v0a235],"7":[c6v0a236],"8":[c6v0a237],"9":[c6v0a238],"10":[c6v0a182],"11":[c6v0a183],"12":[c6v0a186],"13":[c6v0a187],"14":[c6v0a190],"15":[c6v0a192],"16":[c6v0a194],"17":[c6v0a195],"18":[c6v0a196],"19":[c6v0a199],"20":[c6v0a206],"21":[c6v0a208],"22":[c6v0a211],"23":[c6v0a212],"24":[c6v0a216],"25":[c6v0a219],"26":[c6v0a221],"27":[c6v0a224],"28":[c6v0a225],"29":[c6v0a227],"30":[c6v0a231]},"2549":{"1":[c6v0a239]},"2608":{"1":[c6v0a240],"2":[c6v0a241]},"2639":{"1":[c6v0a242]},"2652":{"1":[c6v0a243]},"2653":{"1":[c6v0a244]},"2654":{"1":[c6v0a246],"2":[c6v0a248],"11":[c6v0a247],"20":[c6v0a249]},"2661":{"1":[c6v0a250],"2":[c6v0a253],"3":[c6v0a255],"11":[c6v0a251],"12":[c6v0a252],"20":[c6v0a254]},"2671":{"1":[c6v0a256]},"2672":{"1":[c6v0a257],"2":[c6v0a259],"11":[c6v0a258],"20":[c6v0a260]},"main":{"1":[c6v0a352],"2":[c6v0a353],"3":[c6v0a354],"4":[c6v0a355]}},buttons:{"363":{"press":(ctx,owner)=>{c6v0a35.call(owner,ctx,owner);}},"364":{"press":(ctx,owner)=>{c6v0a36.call(owner,ctx,owner);}},"365":{"press":(ctx,owner)=>{c6v0a37.call(owner,ctx,owner);}},"366":{"press":(ctx,owner)=>{c6v0a38.call(owner,ctx,owner);}},"367":{"press":(ctx,owner)=>{c6v0a39.call(owner,ctx,owner);}},"368":{"press":(ctx,owner)=>{c6v0a40.call(owner,ctx,owner);}},"369":{"press":(ctx,owner)=>{c6v0a41.call(owner,ctx,owner);}},"370":{"press":(ctx,owner)=>{c6v0a42.call(owner,ctx,owner);}},"371":{"press":(ctx,owner)=>{c6v0a43.call(owner,ctx,owner);}},"372":{"press":(ctx,owner)=>{c6v0a44.call(owner,ctx,owner);}},"374":{"keyPress Space":(ctx,owner)=>{c6v0a45.call(owner,ctx,owner);}},"452":{"keyPress Space":(ctx,owner)=>{c6v0a46.call(owner,ctx,owner);}},"490":{"keyPress Space":(ctx,owner)=>{c6v0a47.call(owner,ctx,owner);}},"548":{"keyPress Space":(ctx,owner)=>{c6v0a48.call(owner,ctx,owner);}},"1659":{"press":(ctx,owner)=>{c6v0a0.call(owner,ctx,owner);},"release":(ctx,owner)=>{c6v0a1.call(owner,ctx,owner);}},"1664":{"release":(ctx,owner)=>{c6v0a2.call(owner,ctx,owner);}},"1684":{"release":(ctx,owner)=>{c6v0a3.call(owner,ctx,owner);}},"1686":{"release":(ctx,owner)=>{c6v0a4.call(owner,ctx,owner);}},"2119":{"press":(ctx,owner)=>{c6v0a5.call(owner,ctx,owner);}},"2127":{"press":(ctx,owner)=>{c6v0a6.call(owner,ctx,owner);}},"2132":{"press":(ctx,owner)=>{c6v0a7.call(owner,ctx,owner);}},"2137":{"press":(ctx,owner)=>{c6v0a8.call(owner,ctx,owner);}},"2142":{"keyPress Space":(ctx,owner)=>{c6v0a9.call(owner,ctx,owner);}},"2146":{"keyPress Space":(ctx,owner)=>{c6v0a10.call(owner,ctx,owner);}},"2149":{"keyPress Space":(ctx,owner)=>{c6v0a11.call(owner,ctx,owner);}},"2153":{"press":(ctx,owner)=>{c6v0a12.call(owner,ctx,owner);},"release":(ctx,owner)=>{c6v0a13.call(owner,ctx,owner);}},"2169":{"keyPress Space":(ctx,owner)=>{c6v0a14.call(owner,ctx,owner);}},"2180":{"release":(ctx,owner)=>{c6v0a15.call(owner,ctx,owner);}},"2186":{"release":(ctx,owner)=>{c6v0a16.call(owner,ctx,owner);}},"2191":{"release":(ctx,owner)=>{c6v0a17.call(owner,ctx,owner);}},"2200":{"release":(ctx,owner)=>{c6v0a18.call(owner,ctx,owner);}},"2541":{"release":(ctx,owner)=>{c6v0a19.call(owner,ctx,owner);}},"2587":{"release":(ctx,owner)=>{c6v0a20.call(owner,ctx,owner);}},"2588":{"release":(ctx,owner)=>{c6v0a21.call(owner,ctx,owner);}},"2589":{"release":(ctx,owner)=>{c6v0a22.call(owner,ctx,owner);}},"2590":{"release":(ctx,owner)=>{c6v0a23.call(owner,ctx,owner);}},"2591":{"release":(ctx,owner)=>{c6v0a24.call(owner,ctx,owner);}},"2619":{"release":(ctx,owner)=>{c6v0a25.call(owner,ctx,owner);}},"2622":{"release":(ctx,owner)=>{c6v0a26.call(owner,ctx,owner);}},"2626":{"release":(ctx,owner)=>{c6v0a27.call(owner,ctx,owner);}},"2628":{"release":(ctx,owner)=>{c6v0a28.call(owner,ctx,owner);}},"2630":{"release":(ctx,owner)=>{c6v0a29.call(owner,ctx,owner);}},"2632":{"release":(ctx,owner)=>{c6v0a30.call(owner,ctx,owner);}},"2638":{"press":(ctx,owner)=>{c6v0a31.call(owner,ctx,owner);},"release":(ctx,owner)=>{c6v0a32.call(owner,ctx,owner);}},"2663":{"release":(ctx,owner)=>{c6v0a33.call(owner,ctx,owner);}},"2680":{"release":(ctx,owner)=>{c6v0a34.call(owner,ctx,owner);}}},clips:[{"parent":"2535","frame":1,"character":"2223","name":"","depth":48,"event":"enterFrame","handler":c6v0a181},{"parent":"2535","frame":11,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a184},{"parent":"2535","frame":11,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a185},{"parent":"2535","frame":13,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a188},{"parent":"2535","frame":13,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a189},{"parent":"2535","frame":14,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a191},{"parent":"2535","frame":15,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a193},{"parent":"2535","frame":18,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a197},{"parent":"2535","frame":18,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a198},{"parent":"2535","frame":19,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a200},{"parent":"2535","frame":2,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a202},{"parent":"2535","frame":2,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a203},{"parent":"2535","frame":2,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a204},{"parent":"2535","frame":2,"character":"2294","name":"","depth":798,"event":"enterFrame","handler":c6v0a205},{"parent":"2535","frame":20,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a207},{"parent":"2535","frame":21,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a209},{"parent":"2535","frame":21,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a210},{"parent":"2535","frame":23,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a213},{"parent":"2535","frame":23,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a214},{"parent":"2535","frame":23,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a215},{"parent":"2535","frame":24,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a217},{"parent":"2535","frame":24,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a218},{"parent":"2535","frame":25,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a220},{"parent":"2535","frame":26,"character":"2294","name":"","depth":792,"event":"enterFrame","handler":c6v0a222},{"parent":"2535","frame":26,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a223},{"parent":"2535","frame":28,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a226},{"parent":"2535","frame":29,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a228},{"parent":"2535","frame":29,"character":"2294","name":"","depth":796,"event":"enterFrame","handler":c6v0a229},{"parent":"2535","frame":30,"character":"2294","name":"","depth":794,"event":"enterFrame","handler":c6v0a232},{"parent":"2653","frame":1,"character":"2549","name":"","depth":11,"event":"enterFrame","handler":c6v0a245},{"parent":"401","frame":7,"character":"351","name":"snow","depth":2,"event":"enterFrame","handler":c6v0a269},{"parent":"401","frame":7,"character":"351","name":"snow","depth":2,"event":"load","handler":c6v0a270}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"198":["_totalframes","mc","skipFrame"],"349":["mc","skipFrame"],"351":["i","num","scale"],"363":["iii"],"364":["iii"],"365":["iii"],"366":["iii"],"367":["iii"],"368":["iii"],"369":["iii"],"370":["iii"],"371":["iii"],"372":["iii"],"374":["c","chengong","i","ri_array"],"380":[],"386":[],"392":[],"401":[],"440":[],"449":["ri_array","skipFrame"],"452":["c","chengong","i","ri_array"],"453":[],"459":[],"465":[],"471":[],"478":["c"],"482":[],"483":[],"487":["ri_array","skipFrame"],"490":["c","chengong","i","ri_array"],"491":[],"493":[],"499":[],"505":[],"511":[],"517":[],"523":["ri_array","skipFrame"],"526":[],"528":[],"534":[],"540":[],"546":[],"548":["c","chengong","i","ri_array"],"555":[],"557":["ri_array","skipFrame"],"570":["_totalframes","skipFrame"],"589":["_totalframes","skipFrame"],"591":["_totalframes","skipFrame"],"595":["_totalframes","skipFrame"],"600":["txt"],"621":[],"623":["_visible"],"705":[],"722":[],"726":[],"741":[],"758":[],"760":["_visible"],"770":[],"779":[],"792":[],"803":[],"825":[],"843":[],"851":[],"857":[],"891":[],"919":[],"926":[],"933":[],"934":[],"955":[],"961":[],"967":[],"978":[],"988":[],"994":[],"1006":[],"1012":[],"1029":[],"1046":[],"1097":[],"1111":[],"1117":[],"1125":[],"1133":[],"1140":[],"1155":[],"1170":[],"1182":[],"1194":[],"1203":[],"1211":[],"1234":[],"1257":[],"1263":[],"1264":[],"1265":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1266":["tt"],"1267":["skipFrame"],"1273":["_x","_y","onEnterFrame","x","y"],"1380":[],"1387":[],"1392":[],"1397":[],"1402":[],"1411":[],"1416":[],"1425":[],"1438":[],"1453":[],"1469":[],"1483":[],"1497":[],"1515":[],"1529":[],"1545":[],"1567":["items"],"1588":["items"],"1613":[],"1632":[],"1633":[],"1634":[],"1659":[],"1664":[],"1671":["component","track_mc"],"1672":[],"1684":["qqxflash_home"],"1686":[],"1688":[],"1701":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1711":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1720":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1721":[],"1728":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1735":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1740":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1741":[],"1749":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1757":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1765":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1766":[],"1803":[],"1805":[],"1807":["i","kadr","kadr2","krot","kscl","pred","rot","scl"],"1847":[],"1859":[],"1873":[],"1876":[],"1975":[],"2004":[],"2006":[],"2008":[],"2023":[],"2042":[],"2078":[],"2109":["_totalframes","mc","skipFrame"],"2119":["i","ii"],"2127":["i","ii"],"2132":["i","ii"],"2137":["i","ii"],"2140":[],"2142":["c","i","iii"],"2143":["i","iii","skipFrame"],"2146":["c","i","iii"],"2147":["i","iii","skipFrame"],"2149":["c","i","iii"],"2150":["i","iii","skipFrame"],"2153":["aim","xxx","yyy"],"2163":["onMouseUp","xxx","yyy"],"2166":[],"2167":["_currentframe","back","onEnterFrame"],"2169":["c","i","iii"],"2170":["i","iii","skipFrame"],"2180":[],"2186":["helper"],"2191":[],"2200":[],"2202":["btn"],"2221":[],"2222":["ff","iii","onEnterFrame","ttt"],"2223":["i"],"2225":["_visible"],"2244":["_visible","hitted","onEnterFrame","ox","oy"],"2249":[],"2288":[],"2289":[],"2294":[],"2535":["_loc0_","_temp_1","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","appearx","appeary","ball","blocks","blockx","blocky","c1","c2","c3","c4","ca1","ca2","cao1","cao12","cao13","cao14","cao15","cao16","cao17","cao2","cao22","cao23","cao24","cao25","cao26","cao27","cc1","cc2","cc3","cc4","changeMovies","changes","chuanzhang","dir2","events","fox","hitter","i","ii","jj","map","minScale","player","playerScale","qmm","s1","s2","s3","s4","sha","ss1","ss2","ss3","ss4","st1","st2","st3","st4","stone1","stone12","stone13","stone14","stone15","stone16","stone17","stone2","stone22","stone23","stone24","stone25","stone26","stone27","stone3","stone32","stone33","stone34","stone35","stone36","stone37","stone4","stone42","stone43","stone44","stone45","stone46","stone47","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tree","xx","yu","yy","zu2","zu3"],"2541":["gp"],"2549":[],"2587":[],"2588":[],"2589":[],"2590":[],"2591":[],"2608":["actKey","downKey","leftKey","rightKey","upKey"],"2619":["_quality"],"2622":["_quality"],"2626":["_quality"],"2628":[],"2630":["allShow"],"2632":["allShow"],"2638":["draging","onEnterFrame"],"2639":["_x","bb","draging","onEnterFrame"],"2652":["btn"],"2653":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2654":["btn","gp"],"2661":["i","onEnterFrame"],"2663":["aim"],"2671":[],"2672":["delay","fadeOut","item"],"2680":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event29","event3","event30","event31","event32","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","shui_array","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:6376749,frames:{"198":{"1":(ctx,owner)=>{c6v1a484.call(owner,ctx,owner);},"711":(ctx,owner)=>{c6v1a485.call(owner,ctx,owner);}},"373":{"1":(ctx,owner)=>{c6v1a610.call(owner,ctx,owner);},"1057":(ctx,owner)=>{c6v1a611.call(owner,ctx,owner);}},"404":{"1":(ctx,owner)=>{c6v1a612.call(owner,ctx,owner);}},"410":{"1":(ctx,owner)=>{c6v1a613.call(owner,ctx,owner);}},"416":{"1":(ctx,owner)=>{c6v1a614.call(owner,ctx,owner);}},"425":{"1":(ctx,owner)=>{c6v1a615.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a617.call(owner,ctx,owner);},"96":(ctx,owner)=>{c6v1a620.call(owner,ctx,owner);},"109":(ctx,owner)=>{c6v1a616.call(owner,ctx,owner);}},"464":{"16":(ctx,owner)=>{c6v1a621.call(owner,ctx,owner);},"41":(ctx,owner)=>{c6v1a622.call(owner,ctx,owner);}},"473":{"1":(ctx,owner)=>{c6v1a623.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a624.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v1a625.call(owner,ctx,owner);}},"477":{"1":(ctx,owner)=>{c6v1a626.call(owner,ctx,owner);}},"483":{"1":(ctx,owner)=>{c6v1a627.call(owner,ctx,owner);}},"489":{"1":(ctx,owner)=>{c6v1a628.call(owner,ctx,owner);}},"495":{"1":(ctx,owner)=>{c6v1a629.call(owner,ctx,owner);}},"502":{"1":(ctx,owner)=>{c6v1a630.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a631.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v1a632.call(owner,ctx,owner);},"4":(ctx,owner)=>{c6v1a633.call(owner,ctx,owner);}},"506":{"90":(ctx,owner)=>{c6v1a634.call(owner,ctx,owner);}},"507":{"1":(ctx,owner)=>{c6v1a635.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a636.call(owner,ctx,owner);},"81":(ctx,owner)=>{c6v1a637.call(owner,ctx,owner);},"93":(ctx,owner)=>{c6v1a638.call(owner,ctx,owner);}},"511":{"1":(ctx,owner)=>{c6v1a639.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a640.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v1a641.call(owner,ctx,owner);}},"515":{"1":(ctx,owner)=>{c6v1a642.call(owner,ctx,owner);}},"517":{"1":(ctx,owner)=>{c6v1a643.call(owner,ctx,owner);}},"523":{"1":(ctx,owner)=>{c6v1a644.call(owner,ctx,owner);}},"529":{"1":(ctx,owner)=>{c6v1a645.call(owner,ctx,owner);}},"535":{"1":(ctx,owner)=>{c6v1a646.call(owner,ctx,owner);}},"541":{"1":(ctx,owner)=>{c6v1a647.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a648.call(owner,ctx,owner);},"81":(ctx,owner)=>{c6v1a649.call(owner,ctx,owner);},"94":(ctx,owner)=>{c6v1a650.call(owner,ctx,owner);}},"547":{"1":(ctx,owner)=>{c6v1a651.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a652.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v1a653.call(owner,ctx,owner);}},"550":{"1":(ctx,owner)=>{c6v1a654.call(owner,ctx,owner);}},"552":{"1":(ctx,owner)=>{c6v1a655.call(owner,ctx,owner);}},"558":{"1":(ctx,owner)=>{c6v1a656.call(owner,ctx,owner);}},"564":{"1":(ctx,owner)=>{c6v1a657.call(owner,ctx,owner);}},"570":{"1":(ctx,owner)=>{c6v1a658.call(owner,ctx,owner);}},"579":{"1":(ctx,owner)=>{c6v1a659.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a662.call(owner,ctx,owner);},"129":(ctx,owner)=>{c6v1a660.call(owner,ctx,owner);},"143":(ctx,owner)=>{c6v1a661.call(owner,ctx,owner);}},"581":{"1":(ctx,owner)=>{c6v1a663.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a664.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v1a665.call(owner,ctx,owner);}},"594":{"1":(ctx,owner)=>{c6v1a666.call(owner,ctx,owner);}},"613":{"1":(ctx,owner)=>{c6v1a667.call(owner,ctx,owner);}},"615":{"1":(ctx,owner)=>{c6v1a668.call(owner,ctx,owner);}},"619":{"1":(ctx,owner)=>{c6v1a669.call(owner,ctx,owner);}},"624":{"1":(ctx,owner)=>{c6v1a670.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a671.call(owner,ctx,owner);},"7":(ctx,owner)=>{c6v1a672.call(owner,ctx,owner);}},"645":{"1":(ctx,owner)=>{c6v1a673.call(owner,ctx,owner);}},"647":{"1":(ctx,owner)=>{c6v1a674.call(owner,ctx,owner);}},"729":{"19":(ctx,owner)=>{c6v1a675.call(owner,ctx,owner);}},"746":{"19":(ctx,owner)=>{c6v1a676.call(owner,ctx,owner);}},"750":{"17":(ctx,owner)=>{c6v1a677.call(owner,ctx,owner);}},"765":{"11":(ctx,owner)=>{c6v1a678.call(owner,ctx,owner);}},"782":{"11":(ctx,owner)=>{c6v1a679.call(owner,ctx,owner);}},"784":{"1":(ctx,owner)=>{c6v1a680.call(owner,ctx,owner);}},"794":{"12":(ctx,owner)=>{c6v1a681.call(owner,ctx,owner);}},"803":{"12":(ctx,owner)=>{c6v1a682.call(owner,ctx,owner);}},"816":{"22":(ctx,owner)=>{c6v1a683.call(owner,ctx,owner);}},"827":{"22":(ctx,owner)=>{c6v1a684.call(owner,ctx,owner);}},"849":{"18":(ctx,owner)=>{c6v1a685.call(owner,ctx,owner);}},"867":{"18":(ctx,owner)=>{c6v1a686.call(owner,ctx,owner);}},"875":{"9":(ctx,owner)=>{c6v1a687.call(owner,ctx,owner);}},"881":{"9":(ctx,owner)=>{c6v1a688.call(owner,ctx,owner);}},"915":{"22":(ctx,owner)=>{c6v1a689.call(owner,ctx,owner);}},"943":{"22":(ctx,owner)=>{c6v1a690.call(owner,ctx,owner);}},"950":{"9":(ctx,owner)=>{c6v1a691.call(owner,ctx,owner);}},"957":{"9":(ctx,owner)=>{c6v1a692.call(owner,ctx,owner);}},"958":{"137":(ctx,owner)=>{c6v1a693.call(owner,ctx,owner);},"144":(ctx,owner)=>{c6v1a694.call(owner,ctx,owner);}},"979":{"16":(ctx,owner)=>{c6v1a695.call(owner,ctx,owner);}},"985":{"8":(ctx,owner)=>{c6v1a696.call(owner,ctx,owner);}},"991":{"13":(ctx,owner)=>{c6v1a697.call(owner,ctx,owner);}},"1002":{"22":(ctx,owner)=>{c6v1a405.call(owner,ctx,owner);}},"1012":{"20":(ctx,owner)=>{c6v1a406.call(owner,ctx,owner);}},"1018":{"8":(ctx,owner)=>{c6v1a407.call(owner,ctx,owner);}},"1030":{"16":(ctx,owner)=>{c6v1a408.call(owner,ctx,owner);}},"1036":{"10":(ctx,owner)=>{c6v1a409.call(owner,ctx,owner);}},"1053":{"1":(ctx,owner)=>{c6v1a410.call(owner,ctx,owner);}},"1070":{"1":(ctx,owner)=>{c6v1a411.call(owner,ctx,owner);},"61":(ctx,owner)=>{c6v1a414.call(owner,ctx,owner);},"120":(ctx,owner)=>{c6v1a412.call(owner,ctx,owner);},"121":(ctx,owner)=>{c6v1a413.call(owner,ctx,owner);}},"1121":{"21":(ctx,owner)=>{c6v1a415.call(owner,ctx,owner);}},"1135":{"21":(ctx,owner)=>{c6v1a416.call(owner,ctx,owner);}},"1141":{"11":(ctx,owner)=>{c6v1a417.call(owner,ctx,owner);}},"1149":{"11":(ctx,owner)=>{c6v1a418.call(owner,ctx,owner);}},"1157":{"12":(ctx,owner)=>{c6v1a419.call(owner,ctx,owner);}},"1164":{"12":(ctx,owner)=>{c6v1a420.call(owner,ctx,owner);}},"1179":{"25":(ctx,owner)=>{c6v1a421.call(owner,ctx,owner);}},"1194":{"25":(ctx,owner)=>{c6v1a422.call(owner,ctx,owner);}},"1206":{"21":(ctx,owner)=>{c6v1a423.call(owner,ctx,owner);}},"1218":{"21":(ctx,owner)=>{c6v1a424.call(owner,ctx,owner);}},"1227":{"11":(ctx,owner)=>{c6v1a425.call(owner,ctx,owner);}},"1235":{"11":(ctx,owner)=>{c6v1a426.call(owner,ctx,owner);}},"1258":{"35":(ctx,owner)=>{c6v1a427.call(owner,ctx,owner);}},"1281":{"35":(ctx,owner)=>{c6v1a428.call(owner,ctx,owner);}},"1287":{"9":(ctx,owner)=>{c6v1a429.call(owner,ctx,owner);}},"1288":{"119":(ctx,owner)=>{c6v1a430.call(owner,ctx,owner);},"126":(ctx,owner)=>{c6v1a431.call(owner,ctx,owner);}},"1289":{"1":(ctx,owner)=>{c6v1a432.call(owner,ctx,owner);}},"1290":{"1":(ctx,owner)=>{c6v1a433.call(owner,ctx,owner);}},"1291":{"1":(ctx,owner)=>{c6v1a434.call(owner,ctx,owner);},"29":(ctx,owner)=>{c6v1a435.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v1a436.call(owner,ctx,owner);}},"1319":{"26":(ctx,owner)=>{c6v1a437.call(owner,ctx,owner);}},"1320":{"1":(ctx,owner)=>{c6v1a438.call(owner,ctx,owner);}},"1427":{"9":(ctx,owner)=>{c6v1a439.call(owner,ctx,owner);}},"1435":{"9":(ctx,owner)=>{c6v1a440.call(owner,ctx,owner);}},"1440":{"10":(ctx,owner)=>{c6v1a441.call(owner,ctx,owner);}},"1445":{"9":(ctx,owner)=>{c6v1a442.call(owner,ctx,owner);}},"1450":{"9":(ctx,owner)=>{c6v1a443.call(owner,ctx,owner);}},"1459":{"9":(ctx,owner)=>{c6v1a444.call(owner,ctx,owner);}},"1463":{"9":(ctx,owner)=>{c6v1a445.call(owner,ctx,owner);}},"1482":{"9":(ctx,owner)=>{c6v1a446.call(owner,ctx,owner);}},"1495":{"26":(ctx,owner)=>{c6v1a447.call(owner,ctx,owner);}},"1509":{"28":(ctx,owner)=>{c6v1a448.call(owner,ctx,owner);}},"1523":{"28":(ctx,owner)=>{c6v1a449.call(owner,ctx,owner);}},"1537":{"32":(ctx,owner)=>{c6v1a450.call(owner,ctx,owner);}},"1553":{"28":(ctx,owner)=>{c6v1a451.call(owner,ctx,owner);}},"1567":{"32":(ctx,owner)=>{c6v1a452.call(owner,ctx,owner);}},"1583":{"28":(ctx,owner)=>{c6v1a453.call(owner,ctx,owner);}},"1633":{"54":(ctx,owner)=>{c6v1a454.call(owner,ctx,owner);}},"1651":{"54":(ctx,owner)=>{c6v1a455.call(owner,ctx,owner);}},"1652":{"1":(ctx,owner)=>{c6v1a456.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a457.call(owner,ctx,owner);}},"1689":{"1":(ctx,owner)=>{c6v1a458.call(owner,ctx,owner);}},"1690":{"1":(ctx,owner)=>{c6v1a459.call(owner,ctx,owner);}},"1706":{"1":(ctx,owner)=>{c6v1a460.call(owner,ctx,owner);}},"1719":{"1":(ctx,owner)=>{c6v1a461.call(owner,ctx,owner);}},"1729":{"1":(ctx,owner)=>{c6v1a462.call(owner,ctx,owner);}},"1738":{"1":(ctx,owner)=>{c6v1a463.call(owner,ctx,owner);}},"1739":{"1":(ctx,owner)=>{c6v1a464.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a465.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v1a466.call(owner,ctx,owner);}},"1746":{"1":(ctx,owner)=>{c6v1a467.call(owner,ctx,owner);}},"1753":{"1":(ctx,owner)=>{c6v1a468.call(owner,ctx,owner);}},"1758":{"1":(ctx,owner)=>{c6v1a469.call(owner,ctx,owner);}},"1759":{"1":(ctx,owner)=>{c6v1a470.call(owner,ctx,owner);}},"1767":{"1":(ctx,owner)=>{c6v1a471.call(owner,ctx,owner);}},"1775":{"1":(ctx,owner)=>{c6v1a472.call(owner,ctx,owner);}},"1783":{"1":(ctx,owner)=>{c6v1a473.call(owner,ctx,owner);}},"1784":{"1":(ctx,owner)=>{c6v1a474.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a475.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v1a476.call(owner,ctx,owner);}},"1821":{"1":(ctx,owner)=>{c6v1a477.call(owner,ctx,owner);}},"1823":{"25":(ctx,owner)=>{c6v1a478.call(owner,ctx,owner);}},"1825":{"1":(ctx,owner)=>{c6v1a479.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a480.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v1a481.call(owner,ctx,owner);}},"1889":{"27":(ctx,owner)=>{c6v1a482.call(owner,ctx,owner);}},"1988":{"449":(ctx,owner)=>{c6v1a483.call(owner,ctx,owner);}},"2017":{"46":(ctx,owner)=>{c6v1a486.call(owner,ctx,owner);}},"2019":{"20":(ctx,owner)=>{c6v1a487.call(owner,ctx,owner);}},"2021":{"28":(ctx,owner)=>{c6v1a488.call(owner,ctx,owner);}},"2037":{"44":(ctx,owner)=>{c6v1a489.call(owner,ctx,owner);}},"2056":{"29":(ctx,owner)=>{c6v1a490.call(owner,ctx,owner);}},"2093":{"136":(ctx,owner)=>{c6v1a491.call(owner,ctx,owner);}},"2123":{"1":(ctx,owner)=>{c6v1a492.call(owner,ctx,owner);},"1140":(ctx,owner)=>{c6v1a493.call(owner,ctx,owner);}},"2154":{"1":(ctx,owner)=>{c6v1a494.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v1a498.call(owner,ctx,owner);},"17":(ctx,owner)=>{c6v1a495.call(owner,ctx,owner);},"25":(ctx,owner)=>{c6v1a496.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v1a497.call(owner,ctx,owner);}},"2157":{"1":(ctx,owner)=>{c6v1a499.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a500.call(owner,ctx,owner);}},"2161":{"1":(ctx,owner)=>{c6v1a501.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a502.call(owner,ctx,owner);}},"2164":{"1":(ctx,owner)=>{c6v1a503.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a504.call(owner,ctx,owner);}},"2177":{"1":(ctx,owner)=>{c6v1a505.call(owner,ctx,owner);}},"2180":{"1":(ctx,owner)=>{c6v1a506.call(owner,ctx,owner);}},"2181":{"1":(ctx,owner)=>{c6v1a507.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v1a508.call(owner,ctx,owner);}},"2183":{"1":(ctx,owner)=>{c6v1a509.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a510.call(owner,ctx,owner);}},"2215":{"1":(ctx,owner)=>{c6v1a511.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a513.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v1a512.call(owner,ctx,owner);}},"2234":{"1":(ctx,owner)=>{c6v1a514.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v1a518.call(owner,ctx,owner);},"17":(ctx,owner)=>{c6v1a515.call(owner,ctx,owner);},"25":(ctx,owner)=>{c6v1a516.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v1a517.call(owner,ctx,owner);}},"2235":{"1":(ctx,owner)=>{c6v1a519.call(owner,ctx,owner);}},"2238":{"1":(ctx,owner)=>{c6v1a520.call(owner,ctx,owner);}},"2257":{"1":(ctx,owner)=>{c6v1a521.call(owner,ctx,owner);}},"2262":{"1":(ctx,owner)=>{c6v1a522.call(owner,ctx,owner);},"51":(ctx,owner)=>{c6v1a523.call(owner,ctx,owner);}},"2299":{"46":(ctx,owner)=>{c6v1a524.call(owner,ctx,owner);},"48":(ctx,owner)=>{c6v1a525.call(owner,ctx,owner);}},"2300":{"1":(ctx,owner)=>{c6v1a526.call(owner,ctx,owner);},"21":(ctx,owner)=>{c6v1a527.call(owner,ctx,owner);}},"2545":{"1":(ctx,owner)=>{c6v1a528.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a549.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v1a578.call(owner,ctx,owner);},"4":(ctx,owner)=>{c6v1a581.call(owner,ctx,owner);},"5":(ctx,owner)=>{c6v1a582.call(owner,ctx,owner);},"6":(ctx,owner)=>{c6v1a583.call(owner,ctx,owner);},"7":(ctx,owner)=>{c6v1a584.call(owner,ctx,owner);},"8":(ctx,owner)=>{c6v1a585.call(owner,ctx,owner);},"9":(ctx,owner)=>{c6v1a586.call(owner,ctx,owner);},"10":(ctx,owner)=>{c6v1a530.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v1a531.call(owner,ctx,owner);},"12":(ctx,owner)=>{c6v1a534.call(owner,ctx,owner);},"13":(ctx,owner)=>{c6v1a535.call(owner,ctx,owner);},"14":(ctx,owner)=>{c6v1a538.call(owner,ctx,owner);},"15":(ctx,owner)=>{c6v1a540.call(owner,ctx,owner);},"16":(ctx,owner)=>{c6v1a542.call(owner,ctx,owner);},"17":(ctx,owner)=>{c6v1a543.call(owner,ctx,owner);},"18":(ctx,owner)=>{c6v1a544.call(owner,ctx,owner);},"19":(ctx,owner)=>{c6v1a547.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v1a554.call(owner,ctx,owner);},"21":(ctx,owner)=>{c6v1a556.call(owner,ctx,owner);},"22":(ctx,owner)=>{c6v1a559.call(owner,ctx,owner);},"23":(ctx,owner)=>{c6v1a560.call(owner,ctx,owner);},"24":(ctx,owner)=>{c6v1a564.call(owner,ctx,owner);},"25":(ctx,owner)=>{c6v1a567.call(owner,ctx,owner);},"26":(ctx,owner)=>{c6v1a569.call(owner,ctx,owner);},"27":(ctx,owner)=>{c6v1a572.call(owner,ctx,owner);},"28":(ctx,owner)=>{c6v1a573.call(owner,ctx,owner);},"29":(ctx,owner)=>{c6v1a575.call(owner,ctx,owner);},"30":(ctx,owner)=>{c6v1a579.call(owner,ctx,owner);}},"2559":{"1":(ctx,owner)=>{c6v1a587.call(owner,ctx,owner);}},"2583":{"26":(ctx,owner)=>{c6v1a588.call(owner,ctx,owner);}},"2627":{"1":(ctx,owner)=>{c6v1a589.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a590.call(owner,ctx,owner);}},"2658":{"1":(ctx,owner)=>{c6v1a591.call(owner,ctx,owner);}},"2671":{"1":(ctx,owner)=>{c6v1a592.call(owner,ctx,owner);}},"2672":{"1":(ctx,owner)=>{c6v1a593.call(owner,ctx,owner);}},"2673":{"1":(ctx,owner)=>{c6v1a595.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a597.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v1a596.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v1a598.call(owner,ctx,owner);}},"2680":{"1":(ctx,owner)=>{c6v1a599.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a602.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v1a604.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v1a600.call(owner,ctx,owner);},"12":(ctx,owner)=>{c6v1a601.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v1a603.call(owner,ctx,owner);}},"2690":{"1":(ctx,owner)=>{c6v1a605.call(owner,ctx,owner);}},"2691":{"1":(ctx,owner)=>{c6v1a606.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a608.call(owner,ctx,owner);},"11":(ctx,owner)=>{c6v1a607.call(owner,ctx,owner);},"20":(ctx,owner)=>{c6v1a609.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c6v1a698.call(owner,ctx,owner);},"2":(ctx,owner)=>{c6v1a699.call(owner,ctx,owner);},"3":(ctx,owner)=>{c6v1a700.call(owner,ctx,owner);},"4":(ctx,owner)=>{c6v1a701.call(owner,ctx,owner);}}},frameActions:{"198":{"1":[c6v1a484],"711":[c6v1a485]},"373":{"1":[c6v1a610],"1057":[c6v1a611]},"404":{"1":[c6v1a612]},"410":{"1":[c6v1a613]},"416":{"1":[c6v1a614]},"425":{"1":[c6v1a615],"2":[c6v1a617],"96":[c6v1a620],"109":[c6v1a616]},"464":{"16":[c6v1a621],"41":[c6v1a622]},"473":{"1":[c6v1a623],"2":[c6v1a624],"9":[c6v1a625]},"477":{"1":[c6v1a626]},"483":{"1":[c6v1a627]},"489":{"1":[c6v1a628]},"495":{"1":[c6v1a629]},"502":{"1":[c6v1a630],"2":[c6v1a631],"3":[c6v1a632],"4":[c6v1a633]},"506":{"90":[c6v1a634]},"507":{"1":[c6v1a635],"2":[c6v1a636],"81":[c6v1a637],"93":[c6v1a638]},"511":{"1":[c6v1a639],"2":[c6v1a640],"9":[c6v1a641]},"515":{"1":[c6v1a642]},"517":{"1":[c6v1a643]},"523":{"1":[c6v1a644]},"529":{"1":[c6v1a645]},"535":{"1":[c6v1a646]},"541":{"1":[c6v1a647],"2":[c6v1a648],"81":[c6v1a649],"94":[c6v1a650]},"547":{"1":[c6v1a651],"2":[c6v1a652],"9":[c6v1a653]},"550":{"1":[c6v1a654]},"552":{"1":[c6v1a655]},"558":{"1":[c6v1a656]},"564":{"1":[c6v1a657]},"570":{"1":[c6v1a658]},"579":{"1":[c6v1a659],"2":[c6v1a662],"129":[c6v1a660],"143":[c6v1a661]},"581":{"1":[c6v1a663],"2":[c6v1a664],"9":[c6v1a665]},"594":{"1":[c6v1a666]},"613":{"1":[c6v1a667]},"615":{"1":[c6v1a668]},"619":{"1":[c6v1a669]},"624":{"1":[c6v1a670],"2":[c6v1a671],"7":[c6v1a672]},"645":{"1":[c6v1a673]},"647":{"1":[c6v1a674]},"729":{"19":[c6v1a675]},"746":{"19":[c6v1a676]},"750":{"17":[c6v1a677]},"765":{"11":[c6v1a678]},"782":{"11":[c6v1a679]},"784":{"1":[c6v1a680]},"794":{"12":[c6v1a681]},"803":{"12":[c6v1a682]},"816":{"22":[c6v1a683]},"827":{"22":[c6v1a684]},"849":{"18":[c6v1a685]},"867":{"18":[c6v1a686]},"875":{"9":[c6v1a687]},"881":{"9":[c6v1a688]},"915":{"22":[c6v1a689]},"943":{"22":[c6v1a690]},"950":{"9":[c6v1a691]},"957":{"9":[c6v1a692]},"958":{"137":[c6v1a693],"144":[c6v1a694]},"979":{"16":[c6v1a695]},"985":{"8":[c6v1a696]},"991":{"13":[c6v1a697]},"1002":{"22":[c6v1a405]},"1012":{"20":[c6v1a406]},"1018":{"8":[c6v1a407]},"1030":{"16":[c6v1a408]},"1036":{"10":[c6v1a409]},"1053":{"1":[c6v1a410]},"1070":{"1":[c6v1a411],"61":[c6v1a414],"120":[c6v1a412],"121":[c6v1a413]},"1121":{"21":[c6v1a415]},"1135":{"21":[c6v1a416]},"1141":{"11":[c6v1a417]},"1149":{"11":[c6v1a418]},"1157":{"12":[c6v1a419]},"1164":{"12":[c6v1a420]},"1179":{"25":[c6v1a421]},"1194":{"25":[c6v1a422]},"1206":{"21":[c6v1a423]},"1218":{"21":[c6v1a424]},"1227":{"11":[c6v1a425]},"1235":{"11":[c6v1a426]},"1258":{"35":[c6v1a427]},"1281":{"35":[c6v1a428]},"1287":{"9":[c6v1a429]},"1288":{"119":[c6v1a430],"126":[c6v1a431]},"1289":{"1":[c6v1a432]},"1290":{"1":[c6v1a433]},"1291":{"1":[c6v1a434],"29":[c6v1a435],"30":[c6v1a436]},"1319":{"26":[c6v1a437]},"1320":{"1":[c6v1a438]},"1427":{"9":[c6v1a439]},"1435":{"9":[c6v1a440]},"1440":{"10":[c6v1a441]},"1445":{"9":[c6v1a442]},"1450":{"9":[c6v1a443]},"1459":{"9":[c6v1a444]},"1463":{"9":[c6v1a445]},"1482":{"9":[c6v1a446]},"1495":{"26":[c6v1a447]},"1509":{"28":[c6v1a448]},"1523":{"28":[c6v1a449]},"1537":{"32":[c6v1a450]},"1553":{"28":[c6v1a451]},"1567":{"32":[c6v1a452]},"1583":{"28":[c6v1a453]},"1633":{"54":[c6v1a454]},"1651":{"54":[c6v1a455]},"1652":{"1":[c6v1a456],"2":[c6v1a457]},"1689":{"1":[c6v1a458]},"1690":{"1":[c6v1a459]},"1706":{"1":[c6v1a460]},"1719":{"1":[c6v1a461]},"1729":{"1":[c6v1a462]},"1738":{"1":[c6v1a463]},"1739":{"1":[c6v1a464],"2":[c6v1a465],"3":[c6v1a466]},"1746":{"1":[c6v1a467]},"1753":{"1":[c6v1a468]},"1758":{"1":[c6v1a469]},"1759":{"1":[c6v1a470]},"1767":{"1":[c6v1a471]},"1775":{"1":[c6v1a472]},"1783":{"1":[c6v1a473]},"1784":{"1":[c6v1a474],"2":[c6v1a475],"3":[c6v1a476]},"1821":{"1":[c6v1a477]},"1823":{"25":[c6v1a478]},"1825":{"1":[c6v1a479],"2":[c6v1a480],"3":[c6v1a481]},"1889":{"27":[c6v1a482]},"1988":{"449":[c6v1a483]},"2017":{"46":[c6v1a486]},"2019":{"20":[c6v1a487]},"2021":{"28":[c6v1a488]},"2037":{"44":[c6v1a489]},"2056":{"29":[c6v1a490]},"2093":{"136":[c6v1a491]},"2123":{"1":[c6v1a492],"1140":[c6v1a493]},"2154":{"1":[c6v1a494],"9":[c6v1a498],"17":[c6v1a495],"25":[c6v1a496],"30":[c6v1a497]},"2157":{"1":[c6v1a499],"2":[c6v1a500]},"2161":{"1":[c6v1a501],"2":[c6v1a502]},"2164":{"1":[c6v1a503],"2":[c6v1a504]},"2177":{"1":[c6v1a505]},"2180":{"1":[c6v1a506]},"2181":{"1":[c6v1a507],"11":[c6v1a508]},"2183":{"1":[c6v1a509],"2":[c6v1a510]},"2215":{"1":[c6v1a511],"2":[c6v1a513],"11":[c6v1a512]},"2234":{"1":[c6v1a514],"9":[c6v1a518],"17":[c6v1a515],"25":[c6v1a516],"30":[c6v1a517]},"2235":{"1":[c6v1a519]},"2238":{"1":[c6v1a520]},"2257":{"1":[c6v1a521]},"2262":{"1":[c6v1a522],"51":[c6v1a523]},"2299":{"46":[c6v1a524],"48":[c6v1a525]},"2300":{"1":[c6v1a526],"21":[c6v1a527]},"2545":{"1":[c6v1a528],"2":[c6v1a549],"3":[c6v1a578],"4":[c6v1a581],"5":[c6v1a582],"6":[c6v1a583],"7":[c6v1a584],"8":[c6v1a585],"9":[c6v1a586],"10":[c6v1a530],"11":[c6v1a531],"12":[c6v1a534],"13":[c6v1a535],"14":[c6v1a538],"15":[c6v1a540],"16":[c6v1a542],"17":[c6v1a543],"18":[c6v1a544],"19":[c6v1a547],"20":[c6v1a554],"21":[c6v1a556],"22":[c6v1a559],"23":[c6v1a560],"24":[c6v1a564],"25":[c6v1a567],"26":[c6v1a569],"27":[c6v1a572],"28":[c6v1a573],"29":[c6v1a575],"30":[c6v1a579]},"2559":{"1":[c6v1a587]},"2583":{"26":[c6v1a588]},"2627":{"1":[c6v1a589],"2":[c6v1a590]},"2658":{"1":[c6v1a591]},"2671":{"1":[c6v1a592]},"2672":{"1":[c6v1a593]},"2673":{"1":[c6v1a595],"2":[c6v1a597],"11":[c6v1a596],"20":[c6v1a598]},"2680":{"1":[c6v1a599],"2":[c6v1a602],"3":[c6v1a604],"11":[c6v1a600],"12":[c6v1a601],"20":[c6v1a603]},"2690":{"1":[c6v1a605]},"2691":{"1":[c6v1a606],"2":[c6v1a608],"11":[c6v1a607],"20":[c6v1a609]},"main":{"1":[c6v1a698],"2":[c6v1a699],"3":[c6v1a700],"4":[c6v1a701]}},buttons:{"387":{"press":(ctx,owner)=>{c6v1a391.call(owner,ctx,owner);}},"388":{"press":(ctx,owner)=>{c6v1a392.call(owner,ctx,owner);}},"389":{"press":(ctx,owner)=>{c6v1a393.call(owner,ctx,owner);}},"390":{"press":(ctx,owner)=>{c6v1a394.call(owner,ctx,owner);}},"391":{"press":(ctx,owner)=>{c6v1a395.call(owner,ctx,owner);}},"392":{"press":(ctx,owner)=>{c6v1a396.call(owner,ctx,owner);}},"393":{"press":(ctx,owner)=>{c6v1a397.call(owner,ctx,owner);}},"394":{"press":(ctx,owner)=>{c6v1a398.call(owner,ctx,owner);}},"395":{"press":(ctx,owner)=>{c6v1a399.call(owner,ctx,owner);}},"396":{"press":(ctx,owner)=>{c6v1a400.call(owner,ctx,owner);}},"398":{"keyPress Space":(ctx,owner)=>{c6v1a401.call(owner,ctx,owner);}},"476":{"keyPress Space":(ctx,owner)=>{c6v1a402.call(owner,ctx,owner);}},"514":{"keyPress Space":(ctx,owner)=>{c6v1a403.call(owner,ctx,owner);}},"572":{"keyPress Space":(ctx,owner)=>{c6v1a404.call(owner,ctx,owner);}},"1677":{"press":(ctx,owner)=>{c6v1a356.call(owner,ctx,owner);},"release":(ctx,owner)=>{c6v1a357.call(owner,ctx,owner);}},"1682":{"release":(ctx,owner)=>{c6v1a358.call(owner,ctx,owner);}},"1702":{"release":(ctx,owner)=>{c6v1a359.call(owner,ctx,owner);}},"1704":{"release":(ctx,owner)=>{c6v1a360.call(owner,ctx,owner);}},"2133":{"press":(ctx,owner)=>{c6v1a361.call(owner,ctx,owner);}},"2141":{"press":(ctx,owner)=>{c6v1a362.call(owner,ctx,owner);}},"2146":{"press":(ctx,owner)=>{c6v1a363.call(owner,ctx,owner);}},"2151":{"press":(ctx,owner)=>{c6v1a364.call(owner,ctx,owner);}},"2156":{"keyPress Space":(ctx,owner)=>{c6v1a365.call(owner,ctx,owner);}},"2160":{"keyPress Space":(ctx,owner)=>{c6v1a366.call(owner,ctx,owner);}},"2163":{"keyPress Space":(ctx,owner)=>{c6v1a367.call(owner,ctx,owner);}},"2167":{"press":(ctx,owner)=>{c6v1a368.call(owner,ctx,owner);},"release":(ctx,owner)=>{c6v1a369.call(owner,ctx,owner);}},"2182":{"keyPress Space":(ctx,owner)=>{c6v1a370.call(owner,ctx,owner);}},"2193":{"release":(ctx,owner)=>{c6v1a371.call(owner,ctx,owner);}},"2199":{"release":(ctx,owner)=>{c6v1a372.call(owner,ctx,owner);}},"2204":{"release":(ctx,owner)=>{c6v1a373.call(owner,ctx,owner);}},"2213":{"release":(ctx,owner)=>{c6v1a374.call(owner,ctx,owner);}},"2551":{"release":(ctx,owner)=>{c6v1a375.call(owner,ctx,owner);}},"2606":{"release":(ctx,owner)=>{c6v1a376.call(owner,ctx,owner);}},"2607":{"release":(ctx,owner)=>{c6v1a377.call(owner,ctx,owner);}},"2608":{"release":(ctx,owner)=>{c6v1a378.call(owner,ctx,owner);}},"2609":{"release":(ctx,owner)=>{c6v1a379.call(owner,ctx,owner);}},"2610":{"release":(ctx,owner)=>{c6v1a380.call(owner,ctx,owner);}},"2638":{"release":(ctx,owner)=>{c6v1a381.call(owner,ctx,owner);}},"2641":{"release":(ctx,owner)=>{c6v1a382.call(owner,ctx,owner);}},"2645":{"release":(ctx,owner)=>{c6v1a383.call(owner,ctx,owner);}},"2647":{"release":(ctx,owner)=>{c6v1a384.call(owner,ctx,owner);}},"2649":{"release":(ctx,owner)=>{c6v1a385.call(owner,ctx,owner);}},"2651":{"release":(ctx,owner)=>{c6v1a386.call(owner,ctx,owner);}},"2657":{"press":(ctx,owner)=>{c6v1a387.call(owner,ctx,owner);},"release":(ctx,owner)=>{c6v1a388.call(owner,ctx,owner);}},"2682":{"release":(ctx,owner)=>{c6v1a389.call(owner,ctx,owner);}},"2699":{"release":(ctx,owner)=>{c6v1a390.call(owner,ctx,owner);}}},clips:[{"parent":"2545","frame":1,"character":"2236","name":"","depth":48,"event":"enterFrame","handler":c6v1a529},{"parent":"2545","frame":11,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a532},{"parent":"2545","frame":11,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a533},{"parent":"2545","frame":13,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a536},{"parent":"2545","frame":13,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a537},{"parent":"2545","frame":14,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a539},{"parent":"2545","frame":15,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a541},{"parent":"2545","frame":18,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a545},{"parent":"2545","frame":18,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a546},{"parent":"2545","frame":19,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a548},{"parent":"2545","frame":2,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a550},{"parent":"2545","frame":2,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a551},{"parent":"2545","frame":2,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a552},{"parent":"2545","frame":2,"character":"2304","name":"","depth":797,"event":"enterFrame","handler":c6v1a553},{"parent":"2545","frame":20,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a555},{"parent":"2545","frame":21,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a557},{"parent":"2545","frame":21,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a558},{"parent":"2545","frame":23,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a561},{"parent":"2545","frame":23,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a562},{"parent":"2545","frame":23,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a563},{"parent":"2545","frame":24,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a565},{"parent":"2545","frame":24,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a566},{"parent":"2545","frame":25,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a568},{"parent":"2545","frame":26,"character":"2304","name":"","depth":791,"event":"enterFrame","handler":c6v1a570},{"parent":"2545","frame":26,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a571},{"parent":"2545","frame":28,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a574},{"parent":"2545","frame":29,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a576},{"parent":"2545","frame":29,"character":"2304","name":"","depth":795,"event":"enterFrame","handler":c6v1a577},{"parent":"2545","frame":30,"character":"2304","name":"","depth":793,"event":"enterFrame","handler":c6v1a580},{"parent":"2672","frame":1,"character":"2559","name":"","depth":11,"event":"enterFrame","handler":c6v1a594},{"parent":"425","frame":7,"character":"375","name":"snow","depth":2,"event":"enterFrame","handler":c6v1a618},{"parent":"425","frame":7,"character":"375","name":"snow","depth":2,"event":"load","handler":c6v1a619}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"198":["_totalframes","mc","skipFrame"],"373":["mc","skipFrame"],"375":["i","num","scale"],"387":["iii"],"388":["iii"],"389":["iii"],"390":["iii"],"391":["iii"],"392":["iii"],"393":["iii"],"394":["iii"],"395":["iii"],"396":["iii"],"398":["c","chengong","i","ri_array"],"404":[],"410":[],"416":[],"425":[],"464":[],"473":["ri_array","skipFrame"],"476":["c","chengong","i","ri_array"],"477":[],"483":[],"489":[],"495":[],"502":["c"],"506":[],"507":[],"511":["ri_array","skipFrame"],"514":["c","chengong","i","ri_array"],"515":[],"517":[],"523":[],"529":[],"535":[],"541":[],"547":["ri_array","skipFrame"],"550":[],"552":[],"558":[],"564":[],"570":[],"572":["c","chengong","i","ri_array"],"579":[],"581":["ri_array","skipFrame"],"594":["_totalframes","skipFrame"],"613":["_totalframes","skipFrame"],"615":["_totalframes","skipFrame"],"619":["_totalframes","skipFrame"],"624":["txt"],"645":[],"647":["_visible"],"729":[],"746":[],"750":[],"765":[],"782":[],"784":["_visible"],"794":[],"803":[],"816":[],"827":[],"849":[],"867":[],"875":[],"881":[],"915":[],"943":[],"950":[],"957":[],"958":[],"979":[],"985":[],"991":[],"1002":[],"1012":[],"1018":[],"1030":[],"1036":[],"1053":[],"1070":[],"1121":[],"1135":[],"1141":[],"1149":[],"1157":[],"1164":[],"1179":[],"1194":[],"1206":[],"1218":[],"1227":[],"1235":[],"1258":[],"1281":[],"1287":[],"1288":[],"1289":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1290":["tt"],"1291":["skipFrame"],"1319":[],"1320":["_x","_y","onEnterFrame","x","y"],"1427":[],"1435":[],"1440":[],"1445":[],"1450":[],"1459":[],"1463":[],"1482":[],"1495":[],"1509":[],"1523":[],"1537":[],"1553":[],"1567":[],"1583":[],"1633":[],"1651":[],"1652":[],"1677":[],"1682":[],"1689":["component","track_mc"],"1690":[],"1702":["qqxflash_home"],"1704":[],"1706":[],"1719":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1729":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1738":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1739":[],"1746":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1753":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1758":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1759":[],"1767":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1775":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1783":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1784":[],"1821":[],"1823":[],"1825":["i","kadr","kadr2","krot","kscl","pred","rot","scl"],"1889":[],"1988":[],"2017":[],"2019":[],"2021":[],"2037":[],"2056":[],"2093":[],"2123":["_totalframes","mc","skipFrame"],"2133":["i","ii"],"2141":["i","ii"],"2146":["i","ii"],"2151":["i","ii"],"2154":[],"2156":["c","i","iii"],"2157":["i","iii","skipFrame"],"2160":["c","i","iii"],"2161":["i","iii","skipFrame"],"2163":["c","i","iii"],"2164":["i","iii","skipFrame"],"2167":["aim","xxx","yyy"],"2177":["onMouseUp","xxx","yyy"],"2180":[],"2181":["_currentframe","back","onEnterFrame"],"2182":["c","i","iii"],"2183":["i","iii","skipFrame"],"2193":[],"2199":["helper"],"2204":[],"2213":[],"2215":["btn"],"2234":[],"2235":["ff","iii","onEnterFrame","ttt"],"2236":["i"],"2238":["_visible"],"2257":["_visible","hitted","onEnterFrame","ox","oy"],"2262":[],"2299":[],"2300":[],"2304":[],"2545":["_loc0_","_temp_1","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","appearx","appeary","ball","blocks","blockx","blocky","c1","c2","c3","c4","ca1","ca2","cao1","cao12","cao13","cao14","cao15","cao16","cao17","cao2","cao22","cao23","cao24","cao25","cao26","cao27","cc1","cc2","cc3","cc4","changeMovies","changes","chuanzhang","dir2","events","fox","hitter","i","ii","jj","map","minScale","player","playerScale","qmm","s1","s2","s3","s4","sha","ss1","ss2","ss3","ss4","st1","st2","st3","st4","stone1","stone12","stone13","stone14","stone15","stone16","stone17","stone2","stone22","stone23","stone24","stone25","stone26","stone27","stone3","stone32","stone33","stone34","stone35","stone36","stone37","stone4","stone42","stone43","stone44","stone45","stone46","stone47","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tree","xx","yu","yy","zu2","zu3"],"2551":["gp"],"2559":[],"2583":[],"2606":[],"2607":[],"2608":[],"2609":[],"2610":[],"2627":["actKey","downKey","leftKey","rightKey","upKey"],"2638":["_quality"],"2641":["_quality"],"2645":["_quality"],"2647":[],"2649":["allShow"],"2651":["allShow"],"2657":["draging","onEnterFrame"],"2658":["_x","bb","draging","onEnterFrame"],"2671":["btn"],"2672":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2673":["btn","gp"],"2680":["i","onEnterFrame"],"2682":["aim"],"2690":[],"2691":["delay","fadeOut","item"],"2699":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event29","event3","event30","event31","event32","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","shui_array","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:1659":{"read":[],"write":[]},"0:1664":{"read":[],"write":[]},"0:1684":{"read":["qqxflash_home"],"write":[]},"0:1686":{"read":[],"write":[]},"0:2119":{"read":["i","ii"],"write":["i"]},"0:2127":{"read":["i","ii"],"write":["i"]},"0:2132":{"read":["i","ii"],"write":["i"]},"0:2137":{"read":["i","ii"],"write":["i"]},"0:2142":{"read":["c","i","iii"],"write":["c","i"]},"0:2146":{"read":["c","i","iii"],"write":["c","i"]},"0:2149":{"read":["c","i","iii"],"write":["c","i"]},"0:2153":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"0:2169":{"read":["c","i","iii"],"write":["c","i"]},"0:2180":{"read":[],"write":[]},"0:2186":{"read":["helper"],"write":[]},"0:2191":{"read":[],"write":[]},"0:2200":{"read":[],"write":[]},"0:2541":{"read":["gp"],"write":["gp"]},"0:2587":{"read":[],"write":[]},"0:2588":{"read":[],"write":[]},"0:2589":{"read":[],"write":[]},"0:2590":{"read":[],"write":[]},"0:2591":{"read":[],"write":[]},"0:2619":{"read":["_quality"],"write":["_quality"]},"0:2622":{"read":["_quality"],"write":["_quality"]},"0:2626":{"read":["_quality"],"write":["_quality"]},"0:2628":{"read":[],"write":[]},"0:2630":{"read":["allShow"],"write":[]},"0:2632":{"read":["allShow"],"write":[]},"0:2638":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:2663":{"read":["aim"],"write":[]},"0:2680":{"read":[],"write":[]},"0:363":{"read":["iii"],"write":["iii"]},"0:364":{"read":["iii"],"write":["iii"]},"0:365":{"read":["iii"],"write":["iii"]},"0:366":{"read":["iii"],"write":["iii"]},"0:367":{"read":["iii"],"write":["iii"]},"0:368":{"read":["iii"],"write":["iii"]},"0:369":{"read":["iii"],"write":["iii"]},"0:370":{"read":["iii"],"write":["iii"]},"0:371":{"read":["iii"],"write":["iii"]},"0:372":{"read":["iii"],"write":["iii"]},"0:374":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"0:452":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"0:490":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"0:548":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"0:1006":{"read":[],"write":[]},"0:1012":{"read":[],"write":[]},"0:1029":{"read":[],"write":[]},"0:1046":{"read":[],"write":[]},"0:1097":{"read":[],"write":[]},"0:1111":{"read":[],"write":[]},"0:1117":{"read":[],"write":[]},"0:1125":{"read":[],"write":[]},"0:1133":{"read":[],"write":[]},"0:1140":{"read":[],"write":[]},"0:1155":{"read":[],"write":[]},"0:1170":{"read":[],"write":[]},"0:1182":{"read":[],"write":[]},"0:1194":{"read":[],"write":[]},"0:1203":{"read":[],"write":[]},"0:1211":{"read":[],"write":[]},"0:1234":{"read":[],"write":[]},"0:1257":{"read":[],"write":[]},"0:1263":{"read":[],"write":[]},"0:1264":{"read":[],"write":[]},"0:1265":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"0:1266":{"read":["tt"],"write":["tt"]},"0:1267":{"read":["skipFrame"],"write":["skipFrame"]},"0:1273":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:1380":{"read":[],"write":[]},"0:1387":{"read":[],"write":[]},"0:1392":{"read":[],"write":[]},"0:1397":{"read":[],"write":[]},"0:1402":{"read":[],"write":[]},"0:1411":{"read":[],"write":[]},"0:1416":{"read":[],"write":[]},"0:1425":{"read":[],"write":[]},"0:1438":{"read":[],"write":[]},"0:1453":{"read":[],"write":[]},"0:1469":{"read":[],"write":[]},"0:1483":{"read":[],"write":[]},"0:1497":{"read":[],"write":[]},"0:1515":{"read":[],"write":[]},"0:1529":{"read":[],"write":[]},"0:1545":{"read":[],"write":[]},"0:1567":{"read":["items"],"write":[]},"0:1588":{"read":["items"],"write":[]},"0:1613":{"read":[],"write":[]},"0:1632":{"read":[],"write":[]},"0:1633":{"read":[],"write":[]},"0:1634":{"read":[],"write":[]},"0:1671":{"read":["component","track_mc"],"write":["component"]},"0:1672":{"read":[],"write":[]},"0:1688":{"read":[],"write":[]},"0:1701":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1711":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1720":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1721":{"read":[],"write":[]},"0:1728":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1735":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1740":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1741":{"read":[],"write":[]},"0:1749":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1757":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1765":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1766":{"read":[],"write":[]},"0:1803":{"read":[],"write":[]},"0:1805":{"read":[],"write":[]},"0:1807":{"read":["i","kadr","kadr2","krot","kscl","pred","rot","scl"],"write":["i","kadr","kadr2","krot","kscl","rot","scl"]},"0:1847":{"read":[],"write":[]},"0:1859":{"read":[],"write":[]},"0:1873":{"read":[],"write":[]},"0:1876":{"read":[],"write":[]},"0:1975":{"read":[],"write":[]},"0:198":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:2004":{"read":[],"write":[]},"0:2006":{"read":[],"write":[]},"0:2008":{"read":[],"write":[]},"0:2023":{"read":[],"write":[]},"0:2042":{"read":[],"write":[]},"0:2078":{"read":[],"write":[]},"0:2109":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:2140":{"read":[],"write":[]},"0:2143":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"0:2147":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"0:2150":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"0:2163":{"read":["onMouseUp","xxx","yyy"],"write":["onMouseUp","xxx","yyy"]},"0:2166":{"read":[],"write":[]},"0:2167":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:2170":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"0:2202":{"read":["btn"],"write":[]},"0:2221":{"read":[],"write":[]},"0:2222":{"read":["ff","iii","onEnterFrame","ttt"],"write":["ff","onEnterFrame","ttt"]},"0:2225":{"read":["_visible"],"write":["_visible"]},"0:2244":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2249":{"read":[],"write":[]},"0:2288":{"read":[],"write":[]},"0:2289":{"read":[],"write":[]},"0:2535":{"read":["_loc0_","_temp_1","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","appearx","appeary","ball","blocks","blockx","blocky","c1","c2","c3","c4","ca1","ca2","cao1","cao12","cao13","cao14","cao15","cao16","cao17","cao2","cao22","cao23","cao24","cao25","cao26","cao27","cc1","cc2","cc3","cc4","changeMovies","changes","chuanzhang","dir2","events","fox","hitter","i","ii","jj","map","minScale","player","playerScale","qmm","s1","s2","s3","s4","sha","ss1","ss2","ss3","ss4","st1","st2","st3","st4","stone1","stone12","stone13","stone14","stone15","stone16","stone17","stone2","stone22","stone23","stone24","stone25","stone26","stone27","stone3","stone32","stone33","stone34","stone35","stone36","stone37","stone4","stone42","stone43","stone44","stone45","stone46","stone47","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tree","xx","yu","yy","zu2","zu3"],"write":["_loc0_","_temp_1","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","dir2","events","i","ii","jj","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"0:2223":{"read":["i"],"write":["i"]},"0:2294":{"read":[],"write":[]},"0:2549":{"read":[],"write":[]},"0:2608":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:2639":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:2652":{"read":["btn"],"write":[]},"0:2653":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"0:2654":{"read":["btn","gp"],"write":[]},"0:2661":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:2671":{"read":[],"write":[]},"0:2672":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:349":{"read":["mc","skipFrame"],"write":["skipFrame"]},"0:380":{"read":[],"write":[]},"0:386":{"read":[],"write":[]},"0:392":{"read":[],"write":[]},"0:401":{"read":[],"write":[]},"0:351":{"read":["i","num","scale"],"write":["i","num","scale"]},"0:440":{"read":[],"write":[]},"0:449":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"0:453":{"read":[],"write":[]},"0:459":{"read":[],"write":[]},"0:465":{"read":[],"write":[]},"0:471":{"read":[],"write":[]},"0:478":{"read":["c"],"write":["c"]},"0:482":{"read":[],"write":[]},"0:483":{"read":[],"write":[]},"0:487":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"0:491":{"read":[],"write":[]},"0:493":{"read":[],"write":[]},"0:499":{"read":[],"write":[]},"0:505":{"read":[],"write":[]},"0:511":{"read":[],"write":[]},"0:517":{"read":[],"write":[]},"0:523":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"0:526":{"read":[],"write":[]},"0:528":{"read":[],"write":[]},"0:534":{"read":[],"write":[]},"0:540":{"read":[],"write":[]},"0:546":{"read":[],"write":[]},"0:555":{"read":[],"write":[]},"0:557":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"0:570":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:589":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:591":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:595":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:600":{"read":["txt"],"write":[]},"0:621":{"read":[],"write":[]},"0:623":{"read":["_visible"],"write":["_visible"]},"0:705":{"read":[],"write":[]},"0:722":{"read":[],"write":[]},"0:726":{"read":[],"write":[]},"0:741":{"read":[],"write":[]},"0:758":{"read":[],"write":[]},"0:760":{"read":["_visible"],"write":["_visible"]},"0:770":{"read":[],"write":[]},"0:779":{"read":[],"write":[]},"0:792":{"read":[],"write":[]},"0:803":{"read":[],"write":[]},"0:825":{"read":[],"write":[]},"0:843":{"read":[],"write":[]},"0:851":{"read":[],"write":[]},"0:857":{"read":[],"write":[]},"0:891":{"read":[],"write":[]},"0:919":{"read":[],"write":[]},"0:926":{"read":[],"write":[]},"0:933":{"read":[],"write":[]},"0:934":{"read":[],"write":[]},"0:955":{"read":[],"write":[]},"0:961":{"read":[],"write":[]},"0:967":{"read":[],"write":[]},"0:978":{"read":[],"write":[]},"0:988":{"read":[],"write":[]},"0:994":{"read":[],"write":[]},"0:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event29","event3","event30","event31","event32","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","shui_array","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event29","event3","event30","event31","event32","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","shui_array","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:1677":{"read":[],"write":[]},"1:1682":{"read":[],"write":[]},"1:1702":{"read":["qqxflash_home"],"write":[]},"1:1704":{"read":[],"write":[]},"1:2133":{"read":["i","ii"],"write":["i"]},"1:2141":{"read":["i","ii"],"write":["i"]},"1:2146":{"read":["i","ii"],"write":["i"]},"1:2151":{"read":["i","ii"],"write":["i"]},"1:2156":{"read":["c","i","iii"],"write":["c","i"]},"1:2160":{"read":["c","i","iii"],"write":["c","i"]},"1:2163":{"read":["c","i","iii"],"write":["c","i"]},"1:2167":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"1:2182":{"read":["c","i","iii"],"write":["c","i"]},"1:2193":{"read":[],"write":[]},"1:2199":{"read":["helper"],"write":[]},"1:2204":{"read":[],"write":[]},"1:2213":{"read":[],"write":[]},"1:2551":{"read":["gp"],"write":["gp"]},"1:2606":{"read":[],"write":[]},"1:2607":{"read":[],"write":[]},"1:2608":{"read":[],"write":[]},"1:2609":{"read":[],"write":[]},"1:2610":{"read":[],"write":[]},"1:2638":{"read":["_quality"],"write":["_quality"]},"1:2641":{"read":["_quality"],"write":["_quality"]},"1:2645":{"read":["_quality"],"write":["_quality"]},"1:2647":{"read":[],"write":[]},"1:2649":{"read":["allShow"],"write":[]},"1:2651":{"read":["allShow"],"write":[]},"1:2657":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:2682":{"read":["aim"],"write":[]},"1:2699":{"read":[],"write":[]},"1:387":{"read":["iii"],"write":["iii"]},"1:388":{"read":["iii"],"write":["iii"]},"1:389":{"read":["iii"],"write":["iii"]},"1:390":{"read":["iii"],"write":["iii"]},"1:391":{"read":["iii"],"write":["iii"]},"1:392":{"read":["iii"],"write":["iii"]},"1:393":{"read":["iii"],"write":["iii"]},"1:394":{"read":["iii"],"write":["iii"]},"1:395":{"read":["iii"],"write":["iii"]},"1:396":{"read":["iii"],"write":["iii"]},"1:398":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"1:476":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"1:514":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"1:572":{"read":["c","chengong","i","ri_array"],"write":["c","i"]},"1:1002":{"read":[],"write":[]},"1:1012":{"read":[],"write":[]},"1:1018":{"read":[],"write":[]},"1:1030":{"read":[],"write":[]},"1:1036":{"read":[],"write":[]},"1:1053":{"read":[],"write":[]},"1:1070":{"read":[],"write":[]},"1:1121":{"read":[],"write":[]},"1:1135":{"read":[],"write":[]},"1:1141":{"read":[],"write":[]},"1:1149":{"read":[],"write":[]},"1:1157":{"read":[],"write":[]},"1:1164":{"read":[],"write":[]},"1:1179":{"read":[],"write":[]},"1:1194":{"read":[],"write":[]},"1:1206":{"read":[],"write":[]},"1:1218":{"read":[],"write":[]},"1:1227":{"read":[],"write":[]},"1:1235":{"read":[],"write":[]},"1:1258":{"read":[],"write":[]},"1:1281":{"read":[],"write":[]},"1:1287":{"read":[],"write":[]},"1:1288":{"read":[],"write":[]},"1:1289":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"1:1290":{"read":["tt"],"write":["tt"]},"1:1291":{"read":["skipFrame"],"write":["skipFrame"]},"1:1319":{"read":[],"write":[]},"1:1320":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:1427":{"read":[],"write":[]},"1:1435":{"read":[],"write":[]},"1:1440":{"read":[],"write":[]},"1:1445":{"read":[],"write":[]},"1:1450":{"read":[],"write":[]},"1:1459":{"read":[],"write":[]},"1:1463":{"read":[],"write":[]},"1:1482":{"read":[],"write":[]},"1:1495":{"read":[],"write":[]},"1:1509":{"read":[],"write":[]},"1:1523":{"read":[],"write":[]},"1:1537":{"read":[],"write":[]},"1:1553":{"read":[],"write":[]},"1:1567":{"read":[],"write":[]},"1:1583":{"read":[],"write":[]},"1:1633":{"read":[],"write":[]},"1:1651":{"read":[],"write":[]},"1:1652":{"read":[],"write":[]},"1:1689":{"read":["component","track_mc"],"write":["component"]},"1:1690":{"read":[],"write":[]},"1:1706":{"read":[],"write":[]},"1:1719":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1729":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1738":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1739":{"read":[],"write":[]},"1:1746":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1753":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1758":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1759":{"read":[],"write":[]},"1:1767":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1775":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1783":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1784":{"read":[],"write":[]},"1:1821":{"read":[],"write":[]},"1:1823":{"read":[],"write":[]},"1:1825":{"read":["i","kadr","kadr2","krot","kscl","pred","rot","scl"],"write":["i","kadr","kadr2","krot","kscl","rot","scl"]},"1:1889":{"read":[],"write":[]},"1:1988":{"read":[],"write":[]},"1:198":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:2017":{"read":[],"write":[]},"1:2019":{"read":[],"write":[]},"1:2021":{"read":[],"write":[]},"1:2037":{"read":[],"write":[]},"1:2056":{"read":[],"write":[]},"1:2093":{"read":[],"write":[]},"1:2123":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:2154":{"read":[],"write":[]},"1:2157":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"1:2161":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"1:2164":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"1:2177":{"read":["onMouseUp","xxx","yyy"],"write":["onMouseUp","xxx","yyy"]},"1:2180":{"read":[],"write":[]},"1:2181":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:2183":{"read":["i","iii","skipFrame"],"write":["i","iii","skipFrame"]},"1:2215":{"read":["btn"],"write":[]},"1:2234":{"read":[],"write":[]},"1:2235":{"read":["ff","iii","onEnterFrame","ttt"],"write":["ff","onEnterFrame","ttt"]},"1:2238":{"read":["_visible"],"write":["_visible"]},"1:2257":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2262":{"read":[],"write":[]},"1:2299":{"read":[],"write":[]},"1:2300":{"read":[],"write":[]},"1:2545":{"read":["_loc0_","_temp_1","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","appearx","appeary","ball","blocks","blockx","blocky","c1","c2","c3","c4","ca1","ca2","cao1","cao12","cao13","cao14","cao15","cao16","cao17","cao2","cao22","cao23","cao24","cao25","cao26","cao27","cc1","cc2","cc3","cc4","changeMovies","changes","chuanzhang","dir2","events","fox","hitter","i","ii","jj","map","minScale","player","playerScale","qmm","s1","s2","s3","s4","sha","ss1","ss2","ss3","ss4","st1","st2","st3","st4","stone1","stone12","stone13","stone14","stone15","stone16","stone17","stone2","stone22","stone23","stone24","stone25","stone26","stone27","stone3","stone32","stone33","stone34","stone35","stone36","stone37","stone4","stone42","stone43","stone44","stone45","stone46","stone47","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tree","xx","yu","yy","zu2","zu3"],"write":["_loc0_","_temp_1","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","dir2","events","i","ii","jj","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"1:2236":{"read":["i"],"write":["i"]},"1:2304":{"read":[],"write":[]},"1:2559":{"read":[],"write":[]},"1:2583":{"read":[],"write":[]},"1:2627":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:2658":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:2671":{"read":["btn"],"write":[]},"1:2672":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"1:2673":{"read":["btn","gp"],"write":[]},"1:2680":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:2690":{"read":[],"write":[]},"1:2691":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:373":{"read":["mc","skipFrame"],"write":["skipFrame"]},"1:404":{"read":[],"write":[]},"1:410":{"read":[],"write":[]},"1:416":{"read":[],"write":[]},"1:425":{"read":[],"write":[]},"1:375":{"read":["i","num","scale"],"write":["i","num","scale"]},"1:464":{"read":[],"write":[]},"1:473":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"1:477":{"read":[],"write":[]},"1:483":{"read":[],"write":[]},"1:489":{"read":[],"write":[]},"1:495":{"read":[],"write":[]},"1:502":{"read":["c"],"write":["c"]},"1:506":{"read":[],"write":[]},"1:507":{"read":[],"write":[]},"1:511":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"1:515":{"read":[],"write":[]},"1:517":{"read":[],"write":[]},"1:523":{"read":[],"write":[]},"1:529":{"read":[],"write":[]},"1:535":{"read":[],"write":[]},"1:541":{"read":[],"write":[]},"1:547":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"1:550":{"read":[],"write":[]},"1:552":{"read":[],"write":[]},"1:558":{"read":[],"write":[]},"1:564":{"read":[],"write":[]},"1:570":{"read":[],"write":[]},"1:579":{"read":[],"write":[]},"1:581":{"read":["ri_array","skipFrame"],"write":["ri_array","skipFrame"]},"1:594":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:613":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:615":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:619":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:624":{"read":["txt"],"write":[]},"1:645":{"read":[],"write":[]},"1:647":{"read":["_visible"],"write":["_visible"]},"1:729":{"read":[],"write":[]},"1:746":{"read":[],"write":[]},"1:750":{"read":[],"write":[]},"1:765":{"read":[],"write":[]},"1:782":{"read":[],"write":[]},"1:784":{"read":["_visible"],"write":["_visible"]},"1:794":{"read":[],"write":[]},"1:803":{"read":[],"write":[]},"1:816":{"read":[],"write":[]},"1:827":{"read":[],"write":[]},"1:849":{"read":[],"write":[]},"1:867":{"read":[],"write":[]},"1:875":{"read":[],"write":[]},"1:881":{"read":[],"write":[]},"1:915":{"read":[],"write":[]},"1:943":{"read":[],"write":[]},"1:950":{"read":[],"write":[]},"1:957":{"read":[],"write":[]},"1:958":{"read":[],"write":[]},"1:979":{"read":[],"write":[]},"1:985":{"read":[],"write":[]},"1:991":{"read":[],"write":[]},"1:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event29","event3","event30","event31","event32","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","shui_array","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event29","event3","event30","event31","event32","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","shui_array","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
