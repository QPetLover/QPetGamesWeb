/* Native source-derived chapter 3 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c3v0a0(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c3v0a1(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c3v0a2(ctx,owner){

   ctx.stopDrag(owner);

}

export function c3v0a3(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c3v0a4(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c3v0a5(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c3v0a6(ctx,owner){

   ctx.graph.play(owner);

}

export function c3v0a7(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c3v0a8(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c3v0a9(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c3v0a10(ctx,owner){

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

export function c3v0a11(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c3v0a12(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c3v0a13(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c3v0a14(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c3v0a15(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c3v0a16(ctx,owner){

   owner._quality = "HIGH";

}

export function c3v0a17(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c3v0a18(ctx,owner){

   owner._quality = "LOW";

}

export function c3v0a19(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c3v0a20(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c3v0a21(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c3v0a22(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c3v0a23(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c3v0a24(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c3v0a25(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v0a26(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["door"],2);

}

export function c3v0a27(ctx,owner){
ctx.graph.remove(owner.parent);

}

export function c3v0a28(ctx,owner){
ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1));

}

export function c3v0a29(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c3v0a30(ctx,owner){
owner._visible = 0;

}

export function c3v0a31(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a32(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a33(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c3v0a34(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a35(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a36(ctx,owner){
owner._visible = 0;

}

export function c3v0a37(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a38(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a39(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a40(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a41(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a42(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a43(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a44(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a45(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a46(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a47(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a48(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v0a49(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c3v0a50(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c3v0a51(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a52(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a53(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a54(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a55(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a56(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a57(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a58(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a59(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a60(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a61(ctx,owner){
ctx.stopAllSounds?.();

}

export function c3v0a62(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c3v0a63(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c3v0a64(ctx,owner){

}

export function c3v0a65(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a66(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a67(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a68(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a69(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a70(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a71(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a72(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a73(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a74(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a75(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a76(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a77(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a78(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a79(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v0a80(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c3v0a81(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c3v0a82(ctx,owner){
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
   owner.npcType = ctx.bool(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["event21"] != 1) ? "npc" : "boss";
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

export function c3v0a83(ctx,owner){
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

export function c3v0a84(ctx,owner){
owner.skipFrame = 306;
ctx.setField((owner.parent)?.["_parent"],"bgFrame",2);

}

export function c3v0a85(ctx,owner){
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(3);

}

export function c3v0a86(ctx,owner){
ctx.stopAllSounds?.();
owner.skipFrame = 0;

}

export function c3v0a87(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a88(ctx,owner){

}

export function c3v0a89(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c3v0a90(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c3v0a91(ctx,owner){
ctx.stopAllSounds?.();

}

export function c3v0a92(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a93(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c3v0a94(ctx,owner){
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

export function c3v0a95(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c3v0a96(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c3v0a97(ctx,owner){

}

export function c3v0a98(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a99(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a100(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c3v0a101(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a102(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a103(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c3v0a104(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a105(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c3v0a106(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1),{play:true});
}

}

export function c3v0a107(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a108(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a109(ctx,owner){
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

export function c3v0a110(ctx,owner){
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
      owner.appearx = 315;
      owner.appeary = 307;
      owner._temp_10 = owner.parent;
      owner._temp_9 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
owner.map = "map1";
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","block2"];
owner.talkAreas = [];
owner.events = ["event2","event23","event1","event22"];
owner.changes = [];
owner.changeMovies = [];
owner.blockx = [336,260,331];
owner.blocky = [355,262,256];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_14,owner._temp_13,owner._loc0_);
}

}

export function c3v0a111(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map3"))
{
   owner.appearx = 483;
   owner.appeary = 320;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 339;
   owner.appeary = 120;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map2";
owner.talkTxts = ["哥哥，我好怕哦。。。","不要怕，我去找狮子船长，你在这里等一下！"];
owner.talkObj = ["map.point0","map.player.point"];
owner.talkDirs = [0,1];
owner.talkNext = [1,0];
owner.minScale = 0;
owner.playerScale = 190;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = ["talkArea0"];
owner.changes = ["map3"];
owner.changeMovies = ["event000"];
if(ctx.bool((owner.parent)?.["event3"] == 1))
{
   owner.events = [];
   ctx.setField(owner.block0,"_visible",0);
   ctx.graph.goto((owner.hitter)?.["hitter0"],2);
}
else
{
   owner.events = ["event3"];
}
owner.blocks = ["block0","block1","block2"];
if(ctx.bool((owner.parent)?.["event4"] != 1))
{
   ctx.setField(owner.event4,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block1);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block1,1);
      }
   });
}
else
{
   ctx.setField(owner.block1,"_visible",0);
}
owner.blockx = [668,384,416];
owner.blocky = [221,186,393];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v0a112(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 308;
   owner.appeary = 345;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 385;
   owner.appeary = 157;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map3";
owner.minScale = 15;
owner.playerScale = 130;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000"];
owner.events = ["event5","event6","event7"];
owner.blocks = ["block10","block1","block2","block3"];
ctx.trace?.(ctx.add("event5=",(owner.parent)?.["event5"]));
owner.k = 0;
while(ctx.bool(ctx.less(owner.k,(owner.events)?.["length"])))
{
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event5":logicalLeft)((owner.parent)?.["event5"] == 1)))
   {
      ctx.trace?.(ctx.add("event5xxx=",(owner.parent)?.["event5"]));
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block10,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter0"],2);
   }
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event6":logicalLeft)((owner.parent)?.["event6"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block1,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter1"],2);
   }
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event7":logicalLeft)((owner.parent)?.["event7"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block2,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter2"],2);
   }
   ((old)=>(owner.k=old+1,old))(ctx.num(owner.k));
}
if(ctx.bool((owner.parent)?.["event8"] != 1))
{
   ctx.setField(owner.event8,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block3);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block3,2);
      }
   });
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
owner.blockx = [193,10,20,398];
owner.blocky = [314,10,20,166];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v0a113(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 485;
   owner.appeary = 221;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 485;
   owner.appeary = 221;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map5";
owner.minScale = 0;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event14"];
owner.blocks = ["block0"];
owner.blockx = [592];
owner.blocky = [270];
if(ctx.bool((owner.parent)?.["event14"] == 1))
{
   ctx.setField(owner.event14,"_visible",0);
   ctx.setField((owner.topBlock)?.["event14mc"],"_visible",0);
   owner.events = [];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v0a114(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 461;
   owner.appeary = 223;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 461;
   owner.appeary = 223;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map6";
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event15","event16"];
owner.blocks = ["block0","block1","block2","block3","block4","block5"];
owner.k = 0;
while(ctx.bool(ctx.less(owner.k,(owner.events)?.["length"])))
{
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event15":logicalLeft)((owner.parent)?.["event15"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block0,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter0"],2);
   }
   ((old)=>(owner.k=old+1,old))(ctx.num(owner.k));
}
if(ctx.bool((owner.parent)?.["event16"] == 1))
{
   ctx.graph.goto(owner.door,2);
}
if(ctx.bool((owner.parent)?.["event17"] != 1))
{
   ctx.setField(owner.event17,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block2,1);
      }
   });
}
else
{
   ctx.setField(owner.block2,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event18"] != 1))
{
   ctx.setField(owner.event18,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block3,1);
      }
   });
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event19"] != 1))
{
   ctx.setField(owner.event19,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block4,1);
      }
   });
}
else
{
   ctx.setField(owner.block4,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event20"] != 1))
{
   ctx.setField(owner.event20,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block5,1);
      }
   });
}
else
{
   ctx.setField(owner.block5,"_visible",0);
}
owner.blockx = [728,279,578,374,251,350];
owner.blocky = [392,366,331,374,286,194];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v0a115(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.appearx = 372;
      owner.appeary = 205;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map6":
      owner.appearx = 98;
      owner.appeary = 283;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map7":
      owner.appearx = 665;
      owner.appeary = 283;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   default:
      owner.appearx = 370;
      owner.appeary = 370;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
owner.map = "map4";
owner.minScale = 0;
owner.playerScale = 130;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map3","map5"];
owner.changeMovies = ["event000","event000"];
owner.events = ["event12","event13","event9"];
owner.blocks = ["block0","block1","block2","block3","block4"];
owner.k = 0;
while(ctx.bool(ctx.less(owner.k,(owner.events)?.["length"])))
{
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event9":logicalLeft)((owner.parent)?.["event9"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block2,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter2"],2);
   }
   ((old)=>(owner.k=old+1,old))(ctx.num(owner.k));
}
if(ctx.bool((owner.parent)?.["event10"] != 1))
{
   ctx.setField(owner.event10,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block3,1);
      }
   });
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event11"] != 1))
{
   ctx.setField(owner.event11,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block4,1);
      }
   });
}
else
{
   ctx.setField(owner.block4,"_visible",0);
}
owner.blockx = [312,435,20,398];
owner.blocky = [253,254,20,166];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_12,owner._temp_11,owner._loc0_);
}

}

export function c3v0a116(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 370;
   owner.appeary = 370;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 322;
   owner.appeary = 370;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map7";
owner.minScale = 70;
owner.playerScale = 0;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event21"];
owner.blocks = [];
owner.blockx = [312,435,20,398];
owner.blocky = [253,254,20,166];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v0a117(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a118(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a119(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a120(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c3v0a121(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a122(ctx,owner){
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

export function c3v0a123(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c3v0a124(ctx,owner){
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
owner.tf = ctx.bool(ctx.lessEqual((ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4))),0)) ? 1 : (ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4)));
ctx.graph.goto(owner.timebar,owner.tf);
owner.listItem?.();

}

export function c3v0a125(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a126(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a127(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c3v0a128(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c3v0a129(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);

}

export function c3v0a130(ctx,owner){
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

export function c3v0a131(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c3v0a132(ctx,owner){
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

export function c3v0a133(ctx,owner){
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

export function c3v0a134(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c3v0a135(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a136(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a137(ctx,owner){
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

export function c3v0a138(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c3v0a139(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c3v0a140(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a141(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a142(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a143(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a144(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a145(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a146(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a147(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a148(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a149(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a150(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a151(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a152(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a153(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a154(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a155(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c3v0a156(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c3v0a157(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c3v0a158(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c3v0a159(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c3v0a160(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c3v0a161(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c3v0a162(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a163(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c3v0a164(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a165(ctx,owner){

}

export function c3v0a166(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a167(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a168(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a169(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a170(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a171(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c3v0a172(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v0a173(ctx,owner){
ctx.stopAllSounds?.();

}

export function c3v0a174(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a175(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v0a176(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a177(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v0a178(ctx,owner){
ctx.graph.goto(((owner.parent)?.["_parent"])?.["itemShow"],"item1");
ctx.setField((((owner.parent)?.["_parent"])?.["map"])?.["event24mc"],"_visible",0);

}

export function c3v0a179(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a180(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v0a181(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v0a182(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a183(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a184(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a185(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v0a186(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.setField((owner.parent)?.["_parent"],"life",ctx.bool(ctx.lessEqual(ctx.add(((owner.parent)?.["_parent"])?.["life"],20),100)) ? ctx.add(((owner.parent)?.["_parent"])?.["life"],20) : 100);
}

}

export function c3v0a187(ctx,owner){
owner.lifeUp = ctx.bool(ctx.lessEqual(ctx.add(((owner.parent)?.["_parent"])?.["life"],20),100)) ? 20 : (ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"]));
owner.lifeUp = ctx.add("+",owner.lifeUp);

}

export function c3v0a188(ctx,owner){

}

export function c3v0a189(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a190(ctx,owner){

}

export function c3v0a191(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v0a192(ctx,owner){
owner.init = function(){
   owner.life = 80;
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
   owner.eventAct = "movie";
   owner.oldMap = "map1";
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
   ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
   ctx.setField(owner.map,"onEnterFrame",function()
   {
      if(ctx.bool(owner.gamePause != 1))
      {
         ctx.trace?.(ctx.add("player=",((owner.map)?.["player"])?.["_visible"]));
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
         if(ctx.bool((owner.map)?.["playerScale"] != 100))
         {
            ctx.setField((owner.map)?.["player"],"_xscale",ctx.setField((owner.map)?.["player"],"_yscale",ctx.add((ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])/ctx.num(420)))*ctx.num((owner.map)?.["playerScale"])),(owner.map)?.["minScale"])));
            owner.xspeed = owner.yspeed = (ctx.num((ctx.num(owner.nyspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
            owner.speed = (ctx.num((ctx.num(owner.nspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
         }
         else
         {
            owner.yspeed = owner.xspeed = owner.nxspeed;
            owner.speed = owner.nspeed;
         }
         ctx.trace?.(ctx.add("y==============================",((owner.map)?.["player"])?.["_y"]));
         ctx.trace?.(ctx.add("yscale==============================",((owner.map)?.["player"])?.["_yscale"]));
         ctx.trace?.(ctx.add("yspeed==============================",owner.yspeed));
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
                  case "event22":
                     owner.event0 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event23":
                     if(ctx.bool(owner.event24 == 1))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event23 = 1;
                        (owner.itemList)?.["push"]?.("item2");
                        ctx.graph.goto(owner.itemShow,"item2");
                        owner.itemNow = "item2";
                        owner.etShow?.("您得到了条破被子");
                     }
                     else
                     {
                        owner.etShow?.("床上有条破被子");
                     }
                     break;
                  case "event1":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block2"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                     owner.event6 = 2;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event2":
                     if(ctx.bool(owner.event24 == 1))
                     {
                        if(ctx.bool(owner.event23 == 1))
                        {
                           owner.event2 = 1;
                           owner.eventNow = "event2";
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           owner.oldMap = (owner.map)?.["map"];
                           owner.eventNext = "map2";
                           owner.eventAct = "change";
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("好高啊，得找个绳子");
                        }
                     }
                     else
                     {
                        (owner.itemList)?.["push"]?.("item1");
                        owner.itemNow = "item1";
                        owner.event24 = 1;
                        owner.getEventShow = 1;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.eventNow = "event24";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event3":
                     ctx.setField(owner.map,"events",[]);
                     ctx.setField((owner.map)?.["block0"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                     owner.event3 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event4":
                     break;
                  case "event5":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block10"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                     owner.event5 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event6":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block1"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                     owner.event6 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block2"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                     owner.event7 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event8":
                     break;
                  case "event9":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block2"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                     owner.event9 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event12":
                     if(ctx.bool(owner.event14 == 1))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map6";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您得找到钥匙才能打开");
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.event16 == 1))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map7";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("门打不开");
                     }
                     break;
                  case "event14":
                     if(ctx.bool(owner.event14 != 1))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event14 = 1;
                        (owner.itemList)?.["push"]?.("item3");
                        ctx.setField(((owner.map)?.["topBlock"])?.["event14mc"],"_visible",0);
                        owner.etShow?.("您得到了钥匙");
                        ctx.graph.goto(owner.itemShow,"item3");
                        owner.itemNow = "item3";
                     }
                     break;
                  case "event15":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block0"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                     owner.event15 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event16":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event20 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event19 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(owner.event17 == 1)))))
                     {
                        owner.event16 = 1;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("请先消灭房间里的所有敌人！");
                     }
                     break;
                  case "event21":
                     owner.event21 = 1;
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
   ctx.trace?.(owner.eventNow);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c3v0a193(ctx,owner){
owner.oldMap = "";
owner._quality = "HIGH";

}

export function c3v1a194(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c3v1a195(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c3v1a196(ctx,owner){

   ctx.stopDrag(owner);

}

export function c3v1a197(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c3v1a198(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c3v1a199(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c3v1a200(ctx,owner){

   ctx.graph.play(owner);

}

export function c3v1a201(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c3v1a202(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c3v1a203(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c3v1a204(ctx,owner){

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

export function c3v1a205(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c3v1a206(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c3v1a207(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c3v1a208(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c3v1a209(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c3v1a210(ctx,owner){

   owner._quality = "HIGH";

}

export function c3v1a211(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c3v1a212(ctx,owner){

   owner._quality = "LOW";

}

export function c3v1a213(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c3v1a214(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c3v1a215(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c3v1a216(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c3v1a217(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c3v1a218(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c3v1a219(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v1a220(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.setField((owner.parent)?.["_parent"],"life",ctx.bool(ctx.lessEqual(ctx.add(((owner.parent)?.["_parent"])?.["life"],20),100)) ? ctx.add(((owner.parent)?.["_parent"])?.["life"],20) : 100);
}

}

export function c3v1a221(ctx,owner){
owner.lifeUp = ctx.bool(ctx.lessEqual(ctx.add(((owner.parent)?.["_parent"])?.["life"],20),100)) ? 20 : (ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"]));
owner.lifeUp = ctx.add("+",owner.lifeUp);

}

export function c3v1a222(ctx,owner){
ctx.graph.remove(owner.parent);

}

export function c3v1a223(ctx,owner){
ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1));

}

export function c3v1a224(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v1a225(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["door"],2);

}

export function c3v1a226(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c3v1a227(ctx,owner){
owner._visible = 0;

}

export function c3v1a228(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a229(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a230(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c3v1a231(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a232(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a233(ctx,owner){
owner._visible = 0;

}

export function c3v1a234(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a235(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a236(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a237(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a238(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a239(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a240(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a241(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a242(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a243(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a244(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a245(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c3v1a246(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c3v1a247(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c3v1a248(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a249(ctx,owner){

}

export function c3v1a250(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a251(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a252(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a253(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a254(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a255(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a256(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a257(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a258(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a259(ctx,owner){
ctx.stopAllSounds?.();

}

export function c3v1a260(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c3v1a261(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c3v1a262(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a263(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a264(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a265(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a266(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a267(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a268(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a269(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a270(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a271(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a272(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a273(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a274(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a275(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a276(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c3v1a277(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c3v1a278(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c3v1a279(ctx,owner){
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
   owner.npcType = ctx.bool(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["event21"] != 1) ? "npc" : "boss";
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

export function c3v1a280(ctx,owner){
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

export function c3v1a281(ctx,owner){
owner.skipFrame = 306;
ctx.setField((owner.parent)?.["_parent"],"bgFrame",2);

}

export function c3v1a282(ctx,owner){
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(3);

}

export function c3v1a283(ctx,owner){
ctx.stopAllSounds?.();
owner.skipFrame = 0;

}

export function c3v1a284(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a285(ctx,owner){

}

export function c3v1a286(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c3v1a287(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c3v1a288(ctx,owner){
ctx.stopAllSounds?.();

}

export function c3v1a289(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a290(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c3v1a291(ctx,owner){
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

export function c3v1a292(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c3v1a293(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c3v1a294(ctx,owner){

}

export function c3v1a295(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a296(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a297(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c3v1a298(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a299(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a300(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a301(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c3v1a302(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a303(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c3v1a304(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a305(ctx,owner){
if(ctx.bool(!ctx.bool(owner.a)))
{
   owner.a = 1;
   ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1),{play:true});
}

}

export function c3v1a306(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a307(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a308(ctx,owner){
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

export function c3v1a309(ctx,owner){
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
      owner.appearx = 315;
      owner.appeary = 307;
      owner._temp_10 = owner.parent;
      owner._temp_9 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_10,owner._temp_9,owner._loc0_);
}
owner.map = "map1";
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","block2"];
owner.talkAreas = [];
owner.events = ["event2","event23","event1","event22"];
owner.changes = [];
owner.changeMovies = ["event0","event0","event0","event000"];
owner.blockx = [336,260,331,258];
owner.blocky = [355,262,256,231];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_14,owner._temp_13,owner._loc0_);
}

}

export function c3v1a310(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map3"))
{
   owner.appearx = 483;
   owner.appeary = 320;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 339;
   owner.appeary = 120;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map2";
owner.talkTxts = ["小妹，你要去哪里。。。","不要怕，我去找狮子船长，你在这里等一下！"];
owner.talkObj = ["map.point0","map.player.point"];
owner.talkDirs = [0,1];
owner.talkNext = [1,0];
owner.minScale = 0;
owner.playerScale = 190;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = ["talkArea0"];
owner.changes = ["map3"];
owner.changeMovies = ["event000"];
if(ctx.bool((owner.parent)?.["event3"] == 1))
{
   owner.events = [];
   ctx.setField(owner.block0,"_visible",0);
   ctx.graph.goto((owner.hitter)?.["hitter0"],2);
}
else
{
   owner.events = ["event3"];
}
owner.blocks = ["block0","block1","block2"];
if(ctx.bool((owner.parent)?.["event4"] != 1))
{
   ctx.setField(owner.event4,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block1);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block1,1);
      }
   });
}
else
{
   ctx.setField(owner.block1,"_visible",0);
}
owner.blockx = [668,384,416];
owner.blocky = [221,186,393];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v1a311(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 308;
   owner.appeary = 345;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 385;
   owner.appeary = 157;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map3";
owner.minScale = 15;
owner.playerScale = 130;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000"];
owner.events = ["event5","event6","event7"];
owner.blocks = ["block10","block1","block2","block3"];
ctx.trace?.(ctx.add("event5=",(owner.parent)?.["event5"]));
owner.k = 0;
while(ctx.bool(ctx.less(owner.k,(owner.events)?.["length"])))
{
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event5":logicalLeft)((owner.parent)?.["event5"] == 1)))
   {
      ctx.trace?.(ctx.add("event5xxx=",(owner.parent)?.["event5"]));
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block10,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter0"],2);
   }
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event6":logicalLeft)((owner.parent)?.["event6"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block1,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter1"],2);
   }
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event7":logicalLeft)((owner.parent)?.["event7"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block2,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter2"],2);
   }
   ((old)=>(owner.k=old+1,old))(ctx.num(owner.k));
}
if(ctx.bool((owner.parent)?.["event8"] != 1))
{
   ctx.setField(owner.event8,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block3);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block3,2);
      }
   });
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
owner.blockx = [193,10,20,398];
owner.blocky = [314,10,20,166];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v1a312(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 485;
   owner.appeary = 221;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 485;
   owner.appeary = 221;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map5";
owner.minScale = 0;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event14"];
owner.blocks = ["block0"];
owner.blockx = [592];
owner.blocky = [270];
if(ctx.bool((owner.parent)?.["event14"] == 1))
{
   ctx.setField(owner.event14,"_visible",0);
   ctx.setField((owner.topBlock)?.["event14mc"],"_visible",0);
   owner.events = [];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v1a313(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 461;
   owner.appeary = 223;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 461;
   owner.appeary = 223;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map6";
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event15","event16"];
owner.blocks = ["block0","block1","block2","block3","block4","block5"];
owner.k = 0;
while(ctx.bool(ctx.less(owner.k,(owner.events)?.["length"])))
{
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event15":logicalLeft)((owner.parent)?.["event15"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block0,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter0"],2);
   }
   ((old)=>(owner.k=old+1,old))(ctx.num(owner.k));
}
if(ctx.bool((owner.parent)?.["event16"] == 1))
{
   ctx.graph.goto(owner.door,2);
}
if(ctx.bool((owner.parent)?.["event17"] != 1))
{
   ctx.setField(owner.event17,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block2,1);
      }
   });
}
else
{
   ctx.setField(owner.block2,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event18"] != 1))
{
   ctx.setField(owner.event18,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block3,1);
      }
   });
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event19"] != 1))
{
   ctx.setField(owner.event19,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block4,1);
      }
   });
}
else
{
   ctx.setField(owner.block4,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event20"] != 1))
{
   ctx.setField(owner.event20,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block5,1);
      }
   });
}
else
{
   ctx.setField(owner.block5,"_visible",0);
}
owner.blockx = [728,279,578,374,251,350];
owner.blocky = [392,366,331,374,286,194];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v1a314(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.appearx = 372;
      owner.appeary = 205;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "s2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map6":
      owner.appearx = 98;
      owner.appeary = 283;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "map7":
      owner.appearx = 665;
      owner.appeary = 283;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   default:
      owner.appearx = 370;
      owner.appeary = 370;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
owner.map = "map4";
owner.minScale = 0;
owner.playerScale = 130;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map3","map5"];
owner.changeMovies = ["event000","event000"];
owner.events = ["event12","event13","event9"];
owner.blocks = ["block0","block1","block2","block3","block4"];
owner.k = 0;
while(ctx.bool(ctx.less(owner.k,(owner.events)?.["length"])))
{
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.events)?.[owner.k] == "event9":logicalLeft)((owner.parent)?.["event9"] == 1)))
   {
      (owner.events)?.["splice"]?.(owner.k,1);
      ctx.setField(owner.block2,"_visible",0);
      ctx.graph.goto((owner.hitter)?.["hitter2"],2);
   }
   ((old)=>(owner.k=old+1,old))(ctx.num(owner.k));
}
if(ctx.bool((owner.parent)?.["event10"] != 1))
{
   ctx.setField(owner.event10,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block3,1);
      }
   });
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event11"] != 1))
{
   ctx.setField(owner.event11,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block4,1);
      }
   });
}
else
{
   ctx.setField(owner.block4,"_visible",0);
}
owner.blockx = [312,435,20,398];
owner.blocky = [253,254,20,166];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_12,owner._temp_11,owner._loc0_);
}

}

export function c3v1a315(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map4"))
{
   owner.appearx = 370;
   owner.appeary = 370;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "w2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 322;
   owner.appeary = 370;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map7";
owner.minScale = 70;
owner.playerScale = 0;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event21"];
owner.blocks = [];
owner.blockx = [312,435,20,398];
owner.blocky = [253,254,20,166];
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
if(ctx.bool(owner.playerScale != 100))
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
   ctx.setField(owner.player,"_yscale",owner._loc0_ = 100);
   ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}

}

export function c3v1a316(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a317(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a318(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a319(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c3v1a320(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a321(ctx,owner){
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

export function c3v1a322(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c3v1a323(ctx,owner){
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
owner.tf = ctx.bool(ctx.lessEqual((ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4))),0)) ? 1 : (ctx.math)?.["round"]?.((ctx.num((ctx.num(100)-ctx.num(((owner.parent)?.["_parent"])?.["life"])))*ctx.num(4)));
ctx.graph.goto(owner.timebar,owner.tf);
owner.listItem?.();

}

export function c3v1a324(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a325(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a326(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c3v1a327(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}

}

export function c3v1a328(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);

}

export function c3v1a329(ctx,owner){
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

export function c3v1a330(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c3v1a331(ctx,owner){
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

export function c3v1a332(ctx,owner){
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

export function c3v1a333(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c3v1a334(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a335(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a336(ctx,owner){
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

export function c3v1a337(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c3v1a338(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c3v1a339(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a340(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a341(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a342(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a343(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a344(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a345(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a346(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a347(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a348(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a349(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a350(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a351(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a352(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c3v1a353(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a354(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("gp=",(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]));
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c3v1a355(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a356(ctx,owner){

}

export function c3v1a357(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a358(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a359(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a360(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a361(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a362(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c3v1a363(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v1a364(ctx,owner){
ctx.stopAllSounds?.();

}

export function c3v1a365(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a366(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v1a367(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a368(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v1a369(ctx,owner){
ctx.graph.goto(((owner.parent)?.["_parent"])?.["itemShow"],"item1");
ctx.setField((((owner.parent)?.["_parent"])?.["map"])?.["event24mc"],"_visible",0);

}

export function c3v1a370(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a371(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c3v1a372(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c3v1a373(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a374(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a375(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a376(ctx,owner){

}

export function c3v1a377(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a378(ctx,owner){

}

export function c3v1a379(ctx,owner){
ctx.graph.stop(owner);

}

export function c3v1a380(ctx,owner){
owner.init = function(){
   owner.life = 80;
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
   owner.eventAct = "movie";
   owner.oldMap = "map1";
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
   ctx.setField((owner.lifeBar)?.["bar"],"_x",ctx.add(owner.lifex,(ctx.num(owner.life)*ctx.num(owner.lifeStep))));
   ctx.setField(owner.map,"onEnterFrame",function()
   {
      if(ctx.bool(owner.gamePause != 1))
      {
         ctx.trace?.(ctx.add("player=",((owner.map)?.["player"])?.["_visible"]));
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
         if(ctx.bool((owner.map)?.["playerScale"] != 100))
         {
            ctx.setField((owner.map)?.["player"],"_xscale",ctx.setField((owner.map)?.["player"],"_yscale",ctx.add((ctx.num((ctx.num(((owner.map)?.["player"])?.["_y"])/ctx.num(420)))*ctx.num((owner.map)?.["playerScale"])),(owner.map)?.["minScale"])));
            owner.xspeed = owner.yspeed = (ctx.num((ctx.num(owner.nyspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
            owner.speed = (ctx.num((ctx.num(owner.nspeed)*ctx.num(((owner.map)?.["player"])?.["_yscale"])))/ctx.num(100));
         }
         else
         {
            owner.yspeed = owner.xspeed = owner.nxspeed;
            owner.speed = owner.nspeed;
         }
         ctx.trace?.(ctx.add("y==============================",((owner.map)?.["player"])?.["_y"]));
         ctx.trace?.(ctx.add("yscale==============================",((owner.map)?.["player"])?.["_yscale"]));
         ctx.trace?.(ctx.add("yspeed==============================",owner.yspeed));
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
                  case "event22":
                     owner.event0 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event23":
                     if(ctx.bool(owner.event24 == 1))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event23 = 1;
                        (owner.itemList)?.["push"]?.("item2");
                        ctx.graph.goto(owner.itemShow,"item2");
                        owner.itemNow = "item2";
                        owner.etShow?.("您得到了条破被子");
                     }
                     else
                     {
                        owner.etShow?.("床上有条破被子");
                     }
                     break;
                  case "event1":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block2"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                     owner.event6 = 2;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event2":
                     if(ctx.bool(owner.event24 == 1))
                     {
                        if(ctx.bool(owner.event23 == 1))
                        {
                           owner.event2 = 1;
                           owner.eventNow = "event2";
                           owner.getEventShow = 0;
                           owner.gamePausing?.();
                           owner.eventStep = 0;
                           owner.oldMap = (owner.map)?.["map"];
                           owner.eventNext = "map2";
                           owner.eventAct = "change";
                           ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                           ctx.setField(owner.movie,"_visible",0);
                           ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                        }
                        else
                        {
                           owner.etShow?.("好高啊，得找个绳子");
                        }
                     }
                     else
                     {
                        (owner.itemList)?.["push"]?.("item1");
                        owner.itemNow = "item1";
                        owner.event24 = 1;
                        owner.getEventShow = 1;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.eventNow = "event24";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event3":
                     ctx.setField(owner.map,"events",[]);
                     ctx.setField((owner.map)?.["block0"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                     owner.event3 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event4":
                     break;
                  case "event5":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block10"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                     owner.event5 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event6":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block1"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter1"],2);
                     owner.event6 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event7":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block2"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                     owner.event7 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event8":
                     break;
                  case "event9":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block2"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter2"],2);
                     owner.event9 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event12":
                     if(ctx.bool(owner.event14 == 1))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map6";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您得找到钥匙才能打开");
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.event16 == 1))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map7";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("门打不开");
                     }
                     break;
                  case "event14":
                     if(ctx.bool(owner.event14 != 1))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event14 = 1;
                        (owner.itemList)?.["push"]?.("item3");
                        ctx.setField(((owner.map)?.["topBlock"])?.["event14mc"],"_visible",0);
                        owner.etShow?.("您得到了钥匙");
                        ctx.graph.goto(owner.itemShow,"item3");
                        owner.itemNow = "item3";
                     }
                     break;
                  case "event15":
                     var k = 0;
                     while(ctx.bool(ctx.less(k,((owner.map)?.["events"])?.["length"])))
                     {
                        if(ctx.bool(((owner.map)?.["events"])?.[k] == owner.eventNow))
                        {
                           ((owner.map)?.["events"])?.["splice"]?.(k,1);
                        }
                        ((old)=>(k=old+1,old))(ctx.num(k));
                     }
                     ctx.setField((owner.map)?.["block0"],"_visible",0);
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["hitter0"],2);
                     owner.event15 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     owner.eventNow = "getLife";
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event16":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event20 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event19 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(owner.event17 == 1)))))
                     {
                        owner.event16 = 1;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("请先消灭房间里的所有敌人！");
                     }
                     break;
                  case "event21":
                     owner.event21 = 1;
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
   ctx.trace?.(owner.eventNow);
   ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c3v1a381(ctx,owner){
owner.oldMap = "";
owner._quality = "HIGH";

}

export const variant0={sourceBytes:3575085,frames:{"15":{"1":(ctx,owner)=>{c3v0a64.call(owner,ctx,owner);}},"28":{"1":(ctx,owner)=>{c3v0a145.call(owner,ctx,owner);}},"38":{"1":(ctx,owner)=>{c3v0a153.call(owner,ctx,owner);}},"47":{"1":(ctx,owner)=>{c3v0a162.call(owner,ctx,owner);}},"48":{"1":(ctx,owner)=>{c3v0a166.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a167.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v0a168.call(owner,ctx,owner);}},"55":{"1":(ctx,owner)=>{c3v0a169.call(owner,ctx,owner);}},"62":{"1":(ctx,owner)=>{c3v0a170.call(owner,ctx,owner);}},"67":{"1":(ctx,owner)=>{c3v0a171.call(owner,ctx,owner);}},"68":{"1":(ctx,owner)=>{c3v0a174.call(owner,ctx,owner);}},"76":{"1":(ctx,owner)=>{c3v0a176.call(owner,ctx,owner);}},"84":{"1":(ctx,owner)=>{c3v0a179.call(owner,ctx,owner);}},"92":{"1":(ctx,owner)=>{c3v0a181.call(owner,ctx,owner);}},"93":{"1":(ctx,owner)=>{c3v0a182.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a183.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v0a184.call(owner,ctx,owner);}},"98":{"1":(ctx,owner)=>{c3v0a188.call(owner,ctx,owner);},"7":(ctx,owner)=>{c3v0a189.call(owner,ctx,owner);}},"105":{"5":(ctx,owner)=>{c3v0a27.call(owner,ctx,owner);}},"106":{"1":(ctx,owner)=>{c3v0a28.call(owner,ctx,owner);}},"115":{"1":(ctx,owner)=>{c3v0a29.call(owner,ctx,owner);}},"222":{"9":(ctx,owner)=>{c3v0a108.call(owner,ctx,owner);}},"229":{"9":(ctx,owner)=>{c3v0a118.call(owner,ctx,owner);}},"234":{"9":(ctx,owner)=>{c3v0a121.call(owner,ctx,owner);}},"239":{"9":(ctx,owner)=>{c3v0a140.call(owner,ctx,owner);}},"244":{"9":(ctx,owner)=>{c3v0a141.call(owner,ctx,owner);}},"253":{"9":(ctx,owner)=>{c3v0a142.call(owner,ctx,owner);}},"258":{"9":(ctx,owner)=>{c3v0a143.call(owner,ctx,owner);}},"267":{"9":(ctx,owner)=>{c3v0a144.call(owner,ctx,owner);}},"280":{"26":(ctx,owner)=>{c3v0a146.call(owner,ctx,owner);}},"295":{"28":(ctx,owner)=>{c3v0a147.call(owner,ctx,owner);}},"311":{"34":(ctx,owner)=>{c3v0a148.call(owner,ctx,owner);}},"326":{"34":(ctx,owner)=>{c3v0a149.call(owner,ctx,owner);}},"340":{"32":(ctx,owner)=>{c3v0a150.call(owner,ctx,owner);}},"358":{"24":(ctx,owner)=>{c3v0a151.call(owner,ctx,owner);}},"372":{"32":(ctx,owner)=>{c3v0a152.call(owner,ctx,owner);}},"388":{"24":(ctx,owner)=>{c3v0a154.call(owner,ctx,owner);}},"410":{"6":(ctx,owner)=>{c3v0a157.call(owner,ctx,owner);},"10":(ctx,owner)=>{c3v0a155.call(owner,ctx,owner);},"24":(ctx,owner)=>{c3v0a156.call(owner,ctx,owner);}},"431":{"4":(ctx,owner)=>{c3v0a160.call(owner,ctx,owner);},"14":(ctx,owner)=>{c3v0a158.call(owner,ctx,owner);},"24":(ctx,owner)=>{c3v0a159.call(owner,ctx,owner);}},"456":{"54":(ctx,owner)=>{c3v0a161.call(owner,ctx,owner);}},"474":{"54":(ctx,owner)=>{c3v0a163.call(owner,ctx,owner);}},"475":{"1":(ctx,owner)=>{c3v0a164.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a165.call(owner,ctx,owner);}},"689":{"1":(ctx,owner)=>{c3v0a172.call(owner,ctx,owner);},"564":(ctx,owner)=>{c3v0a173.call(owner,ctx,owner);}},"723":{"1":(ctx,owner)=>{c3v0a175.call(owner,ctx,owner);}},"775":{"1":(ctx,owner)=>{c3v0a177.call(owner,ctx,owner);},"189":(ctx,owner)=>{c3v0a178.call(owner,ctx,owner);}},"891":{"1":(ctx,owner)=>{c3v0a180.call(owner,ctx,owner);}},"966":{"1":(ctx,owner)=>{c3v0a185.call(owner,ctx,owner);},"26":(ctx,owner)=>{c3v0a187.call(owner,ctx,owner);},"180":(ctx,owner)=>{c3v0a186.call(owner,ctx,owner);}},"1046":{"1":(ctx,owner)=>{c3v0a25.call(owner,ctx,owner);},"117":(ctx,owner)=>{c3v0a26.call(owner,ctx,owner);}},"1167":{"1":(ctx,owner)=>{c3v0a30.call(owner,ctx,owner);}},"1248":{"19":(ctx,owner)=>{c3v0a31.call(owner,ctx,owner);}},"1265":{"19":(ctx,owner)=>{c3v0a32.call(owner,ctx,owner);}},"1269":{"17":(ctx,owner)=>{c3v0a33.call(owner,ctx,owner);}},"1284":{"11":(ctx,owner)=>{c3v0a34.call(owner,ctx,owner);}},"1301":{"11":(ctx,owner)=>{c3v0a35.call(owner,ctx,owner);}},"1303":{"1":(ctx,owner)=>{c3v0a36.call(owner,ctx,owner);}},"1313":{"12":(ctx,owner)=>{c3v0a37.call(owner,ctx,owner);}},"1322":{"12":(ctx,owner)=>{c3v0a38.call(owner,ctx,owner);}},"1335":{"22":(ctx,owner)=>{c3v0a39.call(owner,ctx,owner);}},"1346":{"22":(ctx,owner)=>{c3v0a40.call(owner,ctx,owner);}},"1368":{"18":(ctx,owner)=>{c3v0a41.call(owner,ctx,owner);}},"1386":{"18":(ctx,owner)=>{c3v0a42.call(owner,ctx,owner);}},"1394":{"9":(ctx,owner)=>{c3v0a43.call(owner,ctx,owner);}},"1399":{"9":(ctx,owner)=>{c3v0a44.call(owner,ctx,owner);}},"1433":{"22":(ctx,owner)=>{c3v0a45.call(owner,ctx,owner);}},"1459":{"22":(ctx,owner)=>{c3v0a46.call(owner,ctx,owner);}},"1466":{"9":(ctx,owner)=>{c3v0a47.call(owner,ctx,owner);}},"1473":{"9":(ctx,owner)=>{c3v0a48.call(owner,ctx,owner);}},"1474":{"137":(ctx,owner)=>{c3v0a49.call(owner,ctx,owner);},"144":(ctx,owner)=>{c3v0a50.call(owner,ctx,owner);}},"1495":{"16":(ctx,owner)=>{c3v0a51.call(owner,ctx,owner);}},"1501":{"8":(ctx,owner)=>{c3v0a52.call(owner,ctx,owner);}},"1507":{"13":(ctx,owner)=>{c3v0a53.call(owner,ctx,owner);}},"1518":{"22":(ctx,owner)=>{c3v0a54.call(owner,ctx,owner);}},"1528":{"20":(ctx,owner)=>{c3v0a55.call(owner,ctx,owner);}},"1534":{"8":(ctx,owner)=>{c3v0a56.call(owner,ctx,owner);}},"1546":{"16":(ctx,owner)=>{c3v0a57.call(owner,ctx,owner);}},"1552":{"10":(ctx,owner)=>{c3v0a58.call(owner,ctx,owner);}},"1569":{"1":(ctx,owner)=>{c3v0a59.call(owner,ctx,owner);}},"1586":{"1":(ctx,owner)=>{c3v0a60.call(owner,ctx,owner);},"61":(ctx,owner)=>{c3v0a63.call(owner,ctx,owner);},"120":(ctx,owner)=>{c3v0a61.call(owner,ctx,owner);},"121":(ctx,owner)=>{c3v0a62.call(owner,ctx,owner);}},"1639":{"21":(ctx,owner)=>{c3v0a65.call(owner,ctx,owner);}},"1653":{"21":(ctx,owner)=>{c3v0a66.call(owner,ctx,owner);}},"1660":{"11":(ctx,owner)=>{c3v0a67.call(owner,ctx,owner);}},"1666":{"11":(ctx,owner)=>{c3v0a68.call(owner,ctx,owner);}},"1674":{"12":(ctx,owner)=>{c3v0a69.call(owner,ctx,owner);}},"1681":{"12":(ctx,owner)=>{c3v0a70.call(owner,ctx,owner);}},"1696":{"25":(ctx,owner)=>{c3v0a71.call(owner,ctx,owner);}},"1711":{"25":(ctx,owner)=>{c3v0a72.call(owner,ctx,owner);}},"1723":{"21":(ctx,owner)=>{c3v0a73.call(owner,ctx,owner);}},"1735":{"21":(ctx,owner)=>{c3v0a74.call(owner,ctx,owner);}},"1744":{"11":(ctx,owner)=>{c3v0a75.call(owner,ctx,owner);}},"1750":{"11":(ctx,owner)=>{c3v0a76.call(owner,ctx,owner);}},"1773":{"35":(ctx,owner)=>{c3v0a77.call(owner,ctx,owner);}},"1796":{"35":(ctx,owner)=>{c3v0a78.call(owner,ctx,owner);}},"1802":{"9":(ctx,owner)=>{c3v0a79.call(owner,ctx,owner);}},"1803":{"119":(ctx,owner)=>{c3v0a80.call(owner,ctx,owner);},"126":(ctx,owner)=>{c3v0a81.call(owner,ctx,owner);}},"1804":{"1":(ctx,owner)=>{c3v0a82.call(owner,ctx,owner);}},"1805":{"1":(ctx,owner)=>{c3v0a83.call(owner,ctx,owner);}},"1992":{"1":(ctx,owner)=>{c3v0a84.call(owner,ctx,owner);},"306":(ctx,owner)=>{c3v0a86.call(owner,ctx,owner);},"321":(ctx,owner)=>{c3v0a87.call(owner,ctx,owner);},"335":(ctx,owner)=>{c3v0a88.call(owner,ctx,owner);},"1365":(ctx,owner)=>{c3v0a85.call(owner,ctx,owner);}},"1997":{"1":(ctx,owner)=>{c3v0a89.call(owner,ctx,owner);},"29":(ctx,owner)=>{c3v0a90.call(owner,ctx,owner);},"30":(ctx,owner)=>{c3v0a91.call(owner,ctx,owner);}},"2006":{"1":(ctx,owner)=>{c3v0a92.call(owner,ctx,owner);}},"2009":{"1":(ctx,owner)=>{c3v0a93.call(owner,ctx,owner);}},"2010":{"1":(ctx,owner)=>{c3v0a94.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v0a95.call(owner,ctx,owner);}},"2013":{"1":(ctx,owner)=>{c3v0a96.call(owner,ctx,owner);}},"2014":{"1":(ctx,owner)=>{c3v0a97.call(owner,ctx,owner);}},"2090":{"1":(ctx,owner)=>{c3v0a98.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a100.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v0a99.call(owner,ctx,owner);}},"2110":{"32":(ctx,owner)=>{c3v0a101.call(owner,ctx,owner);}},"2119":{"1":(ctx,owner)=>{c3v0a102.call(owner,ctx,owner);}},"2122":{"1":(ctx,owner)=>{c3v0a103.call(owner,ctx,owner);}},"2151":{"28":(ctx,owner)=>{c3v0a104.call(owner,ctx,owner);}},"2161":{"1":(ctx,owner)=>{c3v0a105.call(owner,ctx,owner);}},"2205":{"1":(ctx,owner)=>{c3v0a106.call(owner,ctx,owner);}},"2219":{"1":(ctx,owner)=>{c3v0a107.call(owner,ctx,owner);}},"2252":{"1":(ctx,owner)=>{c3v0a109.call(owner,ctx,owner);}},"2255":{"1":(ctx,owner)=>{c3v0a110.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a111.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v0a112.call(owner,ctx,owner);},"4":(ctx,owner)=>{c3v0a113.call(owner,ctx,owner);},"5":(ctx,owner)=>{c3v0a114.call(owner,ctx,owner);},"6":(ctx,owner)=>{c3v0a115.call(owner,ctx,owner);},"7":(ctx,owner)=>{c3v0a116.call(owner,ctx,owner);}},"2269":{"1":(ctx,owner)=>{c3v0a117.call(owner,ctx,owner);}},"2329":{"1":(ctx,owner)=>{c3v0a119.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a120.call(owner,ctx,owner);}},"2356":{"1":(ctx,owner)=>{c3v0a122.call(owner,ctx,owner);}},"2369":{"1":(ctx,owner)=>{c3v0a123.call(owner,ctx,owner);}},"2370":{"1":(ctx,owner)=>{c3v0a124.call(owner,ctx,owner);}},"2371":{"1":(ctx,owner)=>{c3v0a125.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a127.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v0a126.call(owner,ctx,owner);},"20":(ctx,owner)=>{c3v0a128.call(owner,ctx,owner);}},"2378":{"1":(ctx,owner)=>{c3v0a129.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a132.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v0a134.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v0a130.call(owner,ctx,owner);},"12":(ctx,owner)=>{c3v0a131.call(owner,ctx,owner);},"20":(ctx,owner)=>{c3v0a133.call(owner,ctx,owner);}},"2386":{"1":(ctx,owner)=>{c3v0a135.call(owner,ctx,owner);}},"2387":{"1":(ctx,owner)=>{c3v0a136.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a138.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v0a137.call(owner,ctx,owner);},"20":(ctx,owner)=>{c3v0a139.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c3v0a190.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v0a191.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v0a192.call(owner,ctx,owner);},"4":(ctx,owner)=>{c3v0a193.call(owner,ctx,owner);}}},frameActions:{"15":{"1":[c3v0a64]},"28":{"1":[c3v0a145]},"38":{"1":[c3v0a153]},"47":{"1":[c3v0a162]},"48":{"1":[c3v0a166],"2":[c3v0a167],"3":[c3v0a168]},"55":{"1":[c3v0a169]},"62":{"1":[c3v0a170]},"67":{"1":[c3v0a171]},"68":{"1":[c3v0a174]},"76":{"1":[c3v0a176]},"84":{"1":[c3v0a179]},"92":{"1":[c3v0a181]},"93":{"1":[c3v0a182],"2":[c3v0a183],"3":[c3v0a184]},"98":{"1":[c3v0a188],"7":[c3v0a189]},"105":{"5":[c3v0a27]},"106":{"1":[c3v0a28]},"115":{"1":[c3v0a29]},"222":{"9":[c3v0a108]},"229":{"9":[c3v0a118]},"234":{"9":[c3v0a121]},"239":{"9":[c3v0a140]},"244":{"9":[c3v0a141]},"253":{"9":[c3v0a142]},"258":{"9":[c3v0a143]},"267":{"9":[c3v0a144]},"280":{"26":[c3v0a146]},"295":{"28":[c3v0a147]},"311":{"34":[c3v0a148]},"326":{"34":[c3v0a149]},"340":{"32":[c3v0a150]},"358":{"24":[c3v0a151]},"372":{"32":[c3v0a152]},"388":{"24":[c3v0a154]},"410":{"6":[c3v0a157],"10":[c3v0a155],"24":[c3v0a156]},"431":{"4":[c3v0a160],"14":[c3v0a158],"24":[c3v0a159]},"456":{"54":[c3v0a161]},"474":{"54":[c3v0a163]},"475":{"1":[c3v0a164],"2":[c3v0a165]},"689":{"1":[c3v0a172],"564":[c3v0a173]},"723":{"1":[c3v0a175]},"775":{"1":[c3v0a177],"189":[c3v0a178]},"891":{"1":[c3v0a180]},"966":{"1":[c3v0a185],"26":[c3v0a187],"180":[c3v0a186]},"1046":{"1":[c3v0a25],"117":[c3v0a26]},"1167":{"1":[c3v0a30]},"1248":{"19":[c3v0a31]},"1265":{"19":[c3v0a32]},"1269":{"17":[c3v0a33]},"1284":{"11":[c3v0a34]},"1301":{"11":[c3v0a35]},"1303":{"1":[c3v0a36]},"1313":{"12":[c3v0a37]},"1322":{"12":[c3v0a38]},"1335":{"22":[c3v0a39]},"1346":{"22":[c3v0a40]},"1368":{"18":[c3v0a41]},"1386":{"18":[c3v0a42]},"1394":{"9":[c3v0a43]},"1399":{"9":[c3v0a44]},"1433":{"22":[c3v0a45]},"1459":{"22":[c3v0a46]},"1466":{"9":[c3v0a47]},"1473":{"9":[c3v0a48]},"1474":{"137":[c3v0a49],"144":[c3v0a50]},"1495":{"16":[c3v0a51]},"1501":{"8":[c3v0a52]},"1507":{"13":[c3v0a53]},"1518":{"22":[c3v0a54]},"1528":{"20":[c3v0a55]},"1534":{"8":[c3v0a56]},"1546":{"16":[c3v0a57]},"1552":{"10":[c3v0a58]},"1569":{"1":[c3v0a59]},"1586":{"1":[c3v0a60],"61":[c3v0a63],"120":[c3v0a61],"121":[c3v0a62]},"1639":{"21":[c3v0a65]},"1653":{"21":[c3v0a66]},"1660":{"11":[c3v0a67]},"1666":{"11":[c3v0a68]},"1674":{"12":[c3v0a69]},"1681":{"12":[c3v0a70]},"1696":{"25":[c3v0a71]},"1711":{"25":[c3v0a72]},"1723":{"21":[c3v0a73]},"1735":{"21":[c3v0a74]},"1744":{"11":[c3v0a75]},"1750":{"11":[c3v0a76]},"1773":{"35":[c3v0a77]},"1796":{"35":[c3v0a78]},"1802":{"9":[c3v0a79]},"1803":{"119":[c3v0a80],"126":[c3v0a81]},"1804":{"1":[c3v0a82]},"1805":{"1":[c3v0a83]},"1992":{"1":[c3v0a84],"306":[c3v0a86],"321":[c3v0a87],"335":[c3v0a88],"1365":[c3v0a85]},"1997":{"1":[c3v0a89],"29":[c3v0a90],"30":[c3v0a91]},"2006":{"1":[c3v0a92]},"2009":{"1":[c3v0a93]},"2010":{"1":[c3v0a94],"11":[c3v0a95]},"2013":{"1":[c3v0a96]},"2014":{"1":[c3v0a97]},"2090":{"1":[c3v0a98],"2":[c3v0a100],"11":[c3v0a99]},"2110":{"32":[c3v0a101]},"2119":{"1":[c3v0a102]},"2122":{"1":[c3v0a103]},"2151":{"28":[c3v0a104]},"2161":{"1":[c3v0a105]},"2205":{"1":[c3v0a106]},"2219":{"1":[c3v0a107]},"2252":{"1":[c3v0a109]},"2255":{"1":[c3v0a110],"2":[c3v0a111],"3":[c3v0a112],"4":[c3v0a113],"5":[c3v0a114],"6":[c3v0a115],"7":[c3v0a116]},"2269":{"1":[c3v0a117]},"2329":{"1":[c3v0a119],"2":[c3v0a120]},"2356":{"1":[c3v0a122]},"2369":{"1":[c3v0a123]},"2370":{"1":[c3v0a124]},"2371":{"1":[c3v0a125],"2":[c3v0a127],"11":[c3v0a126],"20":[c3v0a128]},"2378":{"1":[c3v0a129],"2":[c3v0a132],"3":[c3v0a134],"11":[c3v0a130],"12":[c3v0a131],"20":[c3v0a133]},"2386":{"1":[c3v0a135]},"2387":{"1":[c3v0a136],"2":[c3v0a138],"11":[c3v0a137],"20":[c3v0a139]},"main":{"1":[c3v0a190],"2":[c3v0a191],"3":[c3v0a192],"4":[c3v0a193]}},buttons:{"2000":{"release":(ctx,owner)=>{c3v0a0.call(owner,ctx,owner);}},"2034":{"press":(ctx,owner)=>{c3v0a1.call(owner,ctx,owner);},"release":(ctx,owner)=>{c3v0a2.call(owner,ctx,owner);}},"2039":{"release":(ctx,owner)=>{c3v0a3.call(owner,ctx,owner);}},"2055":{"release":(ctx,owner)=>{c3v0a4.call(owner,ctx,owner);}},"2057":{"release":(ctx,owner)=>{c3v0a5.call(owner,ctx,owner);}},"2068":{"release":(ctx,owner)=>{c3v0a6.call(owner,ctx,owner);}},"2074":{"release":(ctx,owner)=>{c3v0a7.call(owner,ctx,owner);}},"2079":{"release":(ctx,owner)=>{c3v0a8.call(owner,ctx,owner);}},"2088":{"release":(ctx,owner)=>{c3v0a9.call(owner,ctx,owner);}},"2261":{"release":(ctx,owner)=>{c3v0a10.call(owner,ctx,owner);}},"2307":{"release":(ctx,owner)=>{c3v0a11.call(owner,ctx,owner);}},"2308":{"release":(ctx,owner)=>{c3v0a12.call(owner,ctx,owner);}},"2309":{"release":(ctx,owner)=>{c3v0a13.call(owner,ctx,owner);}},"2310":{"release":(ctx,owner)=>{c3v0a14.call(owner,ctx,owner);}},"2311":{"release":(ctx,owner)=>{c3v0a15.call(owner,ctx,owner);}},"2336":{"release":(ctx,owner)=>{c3v0a16.call(owner,ctx,owner);}},"2339":{"release":(ctx,owner)=>{c3v0a17.call(owner,ctx,owner);}},"2343":{"release":(ctx,owner)=>{c3v0a18.call(owner,ctx,owner);}},"2345":{"release":(ctx,owner)=>{c3v0a19.call(owner,ctx,owner);}},"2347":{"release":(ctx,owner)=>{c3v0a20.call(owner,ctx,owner);}},"2349":{"release":(ctx,owner)=>{c3v0a21.call(owner,ctx,owner);}},"2355":{"press":(ctx,owner)=>{c3v0a22.call(owner,ctx,owner);},"release":(ctx,owner)=>{c3v0a23.call(owner,ctx,owner);}},"2395":{"release":(ctx,owner)=>{c3v0a24.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"15":[],"28":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"38":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"47":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"48":[],"55":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"62":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"67":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"68":[],"76":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"84":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"92":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"93":[],"98":[],"105":[],"106":["_totalframes"],"115":["_x","_y","onEnterFrame","x","y"],"222":[],"229":[],"234":[],"239":[],"244":[],"253":[],"258":[],"267":[],"280":[],"295":[],"311":[],"326":[],"340":[],"358":[],"372":[],"388":[],"410":["items"],"431":["items"],"456":[],"474":[],"475":[],"689":["_totalframes","skipFrame"],"723":["_totalframes","skipFrame"],"775":["_totalframes","skipFrame"],"891":["_totalframes","skipFrame"],"966":["_totalframes","a","lifeUp","skipFrame"],"1046":["_totalframes","skipFrame"],"1167":["_visible"],"1248":[],"1265":[],"1269":[],"1284":[],"1301":[],"1303":["_visible"],"1313":[],"1322":[],"1335":[],"1346":[],"1368":[],"1386":[],"1394":[],"1399":[],"1433":[],"1459":[],"1466":[],"1473":[],"1474":[],"1495":[],"1501":[],"1507":[],"1518":[],"1528":[],"1534":[],"1546":[],"1552":[],"1569":[],"1586":[],"1639":[],"1653":[],"1660":[],"1666":[],"1674":[],"1681":[],"1696":[],"1711":[],"1723":[],"1735":[],"1744":[],"1750":[],"1773":[],"1796":[],"1802":[],"1803":[],"1804":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1805":["tt"],"1992":["skipFrame"],"1997":["skipFrame"],"2000":["aim"],"2006":[],"2009":[],"2010":["_currentframe","back","onEnterFrame"],"2013":["component","track_mc"],"2014":[],"2034":[],"2039":[],"2055":["qqxflash_home"],"2057":[],"2068":[],"2074":["helper"],"2079":[],"2088":[],"2090":["btn"],"2110":[],"2119":[],"2122":["_visible"],"2151":[],"2161":["_visible"],"2205":["_totalframes","a"],"2219":[],"2252":["_visible","hitted","onEnterFrame","ox","oy"],"2255":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block10","block2","block3","block4","block5","blocks","blockx","blocky","changeMovies","changes","door","event10","event11","event14","event17","event18","event19","event20","event4","event8","events","hitter","i","k","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"2261":["gp"],"2269":[],"2307":[],"2308":[],"2309":[],"2310":[],"2311":[],"2329":["actKey","downKey","leftKey","rightKey","upKey"],"2336":["_quality"],"2339":["_quality"],"2343":["_quality"],"2345":[],"2347":["allShow"],"2349":["allShow"],"2355":["draging","onEnterFrame"],"2356":["_x","bb","draging","onEnterFrame"],"2369":["btn"],"2370":["allShow","checkKey","gkShow","itemList","listItem","newKey","tf","timebar"],"2371":["btn","gp"],"2378":["i","onEnterFrame"],"2386":[],"2387":["delay","fadeOut","item"],"2395":[],"main":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event0","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:3696408,frames:{"15":{"1":(ctx,owner)=>{c3v1a249.call(owner,ctx,owner);}},"28":{"1":(ctx,owner)=>{c3v1a342.call(owner,ctx,owner);}},"38":{"1":(ctx,owner)=>{c3v1a349.call(owner,ctx,owner);}},"47":{"1":(ctx,owner)=>{c3v1a353.call(owner,ctx,owner);}},"48":{"1":(ctx,owner)=>{c3v1a357.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a358.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v1a359.call(owner,ctx,owner);}},"55":{"1":(ctx,owner)=>{c3v1a360.call(owner,ctx,owner);}},"62":{"1":(ctx,owner)=>{c3v1a361.call(owner,ctx,owner);}},"67":{"1":(ctx,owner)=>{c3v1a362.call(owner,ctx,owner);}},"68":{"1":(ctx,owner)=>{c3v1a365.call(owner,ctx,owner);}},"76":{"1":(ctx,owner)=>{c3v1a367.call(owner,ctx,owner);}},"84":{"1":(ctx,owner)=>{c3v1a370.call(owner,ctx,owner);}},"92":{"1":(ctx,owner)=>{c3v1a372.call(owner,ctx,owner);}},"93":{"1":(ctx,owner)=>{c3v1a373.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a374.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v1a375.call(owner,ctx,owner);}},"98":{"1":(ctx,owner)=>{c3v1a376.call(owner,ctx,owner);},"7":(ctx,owner)=>{c3v1a377.call(owner,ctx,owner);}},"105":{"5":(ctx,owner)=>{c3v1a222.call(owner,ctx,owner);}},"106":{"1":(ctx,owner)=>{c3v1a223.call(owner,ctx,owner);}},"116":{"1":(ctx,owner)=>{c3v1a226.call(owner,ctx,owner);}},"223":{"9":(ctx,owner)=>{c3v1a299.call(owner,ctx,owner);}},"230":{"9":(ctx,owner)=>{c3v1a304.call(owner,ctx,owner);}},"235":{"10":(ctx,owner)=>{c3v1a307.call(owner,ctx,owner);}},"240":{"9":(ctx,owner)=>{c3v1a317.call(owner,ctx,owner);}},"245":{"9":(ctx,owner)=>{c3v1a320.call(owner,ctx,owner);}},"254":{"9":(ctx,owner)=>{c3v1a339.call(owner,ctx,owner);}},"259":{"9":(ctx,owner)=>{c3v1a340.call(owner,ctx,owner);}},"278":{"9":(ctx,owner)=>{c3v1a341.call(owner,ctx,owner);}},"291":{"26":(ctx,owner)=>{c3v1a343.call(owner,ctx,owner);}},"315":{"26":(ctx,owner)=>{c3v1a344.call(owner,ctx,owner);}},"329":{"28":(ctx,owner)=>{c3v1a345.call(owner,ctx,owner);}},"343":{"28":(ctx,owner)=>{c3v1a346.call(owner,ctx,owner);}},"357":{"32":(ctx,owner)=>{c3v1a347.call(owner,ctx,owner);}},"373":{"28":(ctx,owner)=>{c3v1a348.call(owner,ctx,owner);}},"388":{"32":(ctx,owner)=>{c3v1a350.call(owner,ctx,owner);}},"404":{"28":(ctx,owner)=>{c3v1a351.call(owner,ctx,owner);}},"454":{"54":(ctx,owner)=>{c3v1a352.call(owner,ctx,owner);}},"472":{"54":(ctx,owner)=>{c3v1a354.call(owner,ctx,owner);}},"473":{"1":(ctx,owner)=>{c3v1a355.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a356.call(owner,ctx,owner);}},"687":{"1":(ctx,owner)=>{c3v1a363.call(owner,ctx,owner);},"564":(ctx,owner)=>{c3v1a364.call(owner,ctx,owner);}},"721":{"1":(ctx,owner)=>{c3v1a366.call(owner,ctx,owner);}},"771":{"1":(ctx,owner)=>{c3v1a368.call(owner,ctx,owner);},"189":(ctx,owner)=>{c3v1a369.call(owner,ctx,owner);}},"892":{"1":(ctx,owner)=>{c3v1a371.call(owner,ctx,owner);}},"1000":{"1":(ctx,owner)=>{c3v1a219.call(owner,ctx,owner);},"26":(ctx,owner)=>{c3v1a221.call(owner,ctx,owner);},"180":(ctx,owner)=>{c3v1a220.call(owner,ctx,owner);}},"1081":{"1":(ctx,owner)=>{c3v1a224.call(owner,ctx,owner);},"117":(ctx,owner)=>{c3v1a225.call(owner,ctx,owner);}},"1203":{"1":(ctx,owner)=>{c3v1a227.call(owner,ctx,owner);}},"1308":{"19":(ctx,owner)=>{c3v1a228.call(owner,ctx,owner);}},"1327":{"19":(ctx,owner)=>{c3v1a229.call(owner,ctx,owner);}},"1332":{"17":(ctx,owner)=>{c3v1a230.call(owner,ctx,owner);}},"1356":{"11":(ctx,owner)=>{c3v1a231.call(owner,ctx,owner);}},"1374":{"11":(ctx,owner)=>{c3v1a232.call(owner,ctx,owner);}},"1376":{"1":(ctx,owner)=>{c3v1a233.call(owner,ctx,owner);}},"1388":{"12":(ctx,owner)=>{c3v1a234.call(owner,ctx,owner);}},"1397":{"12":(ctx,owner)=>{c3v1a235.call(owner,ctx,owner);}},"1410":{"22":(ctx,owner)=>{c3v1a236.call(owner,ctx,owner);}},"1425":{"22":(ctx,owner)=>{c3v1a237.call(owner,ctx,owner);}},"1448":{"18":(ctx,owner)=>{c3v1a238.call(owner,ctx,owner);}},"1476":{"18":(ctx,owner)=>{c3v1a239.call(owner,ctx,owner);}},"1484":{"9":(ctx,owner)=>{c3v1a240.call(owner,ctx,owner);}},"1491":{"9":(ctx,owner)=>{c3v1a241.call(owner,ctx,owner);}},"1528":{"22":(ctx,owner)=>{c3v1a242.call(owner,ctx,owner);}},"1557":{"22":(ctx,owner)=>{c3v1a243.call(owner,ctx,owner);}},"1564":{"9":(ctx,owner)=>{c3v1a244.call(owner,ctx,owner);}},"1574":{"9":(ctx,owner)=>{c3v1a245.call(owner,ctx,owner);}},"1575":{"137":(ctx,owner)=>{c3v1a246.call(owner,ctx,owner);},"144":(ctx,owner)=>{c3v1a247.call(owner,ctx,owner);}},"1596":{"16":(ctx,owner)=>{c3v1a248.call(owner,ctx,owner);}},"1602":{"8":(ctx,owner)=>{c3v1a250.call(owner,ctx,owner);}},"1608":{"13":(ctx,owner)=>{c3v1a251.call(owner,ctx,owner);}},"1619":{"22":(ctx,owner)=>{c3v1a252.call(owner,ctx,owner);}},"1629":{"20":(ctx,owner)=>{c3v1a253.call(owner,ctx,owner);}},"1635":{"8":(ctx,owner)=>{c3v1a254.call(owner,ctx,owner);}},"1647":{"16":(ctx,owner)=>{c3v1a255.call(owner,ctx,owner);}},"1653":{"10":(ctx,owner)=>{c3v1a256.call(owner,ctx,owner);}},"1670":{"1":(ctx,owner)=>{c3v1a257.call(owner,ctx,owner);}},"1687":{"1":(ctx,owner)=>{c3v1a258.call(owner,ctx,owner);},"61":(ctx,owner)=>{c3v1a261.call(owner,ctx,owner);},"120":(ctx,owner)=>{c3v1a259.call(owner,ctx,owner);},"121":(ctx,owner)=>{c3v1a260.call(owner,ctx,owner);}},"1740":{"21":(ctx,owner)=>{c3v1a262.call(owner,ctx,owner);}},"1754":{"21":(ctx,owner)=>{c3v1a263.call(owner,ctx,owner);}},"1760":{"11":(ctx,owner)=>{c3v1a264.call(owner,ctx,owner);}},"1767":{"11":(ctx,owner)=>{c3v1a265.call(owner,ctx,owner);}},"1775":{"12":(ctx,owner)=>{c3v1a266.call(owner,ctx,owner);}},"1782":{"12":(ctx,owner)=>{c3v1a267.call(owner,ctx,owner);}},"1797":{"25":(ctx,owner)=>{c3v1a268.call(owner,ctx,owner);}},"1812":{"25":(ctx,owner)=>{c3v1a269.call(owner,ctx,owner);}},"1824":{"21":(ctx,owner)=>{c3v1a270.call(owner,ctx,owner);}},"1836":{"21":(ctx,owner)=>{c3v1a271.call(owner,ctx,owner);}},"1845":{"11":(ctx,owner)=>{c3v1a272.call(owner,ctx,owner);}},"1852":{"11":(ctx,owner)=>{c3v1a273.call(owner,ctx,owner);}},"1875":{"35":(ctx,owner)=>{c3v1a274.call(owner,ctx,owner);}},"1898":{"35":(ctx,owner)=>{c3v1a275.call(owner,ctx,owner);}},"1904":{"9":(ctx,owner)=>{c3v1a276.call(owner,ctx,owner);}},"1905":{"119":(ctx,owner)=>{c3v1a277.call(owner,ctx,owner);},"126":(ctx,owner)=>{c3v1a278.call(owner,ctx,owner);}},"1906":{"1":(ctx,owner)=>{c3v1a279.call(owner,ctx,owner);}},"1907":{"1":(ctx,owner)=>{c3v1a280.call(owner,ctx,owner);}},"2106":{"1":(ctx,owner)=>{c3v1a281.call(owner,ctx,owner);},"306":(ctx,owner)=>{c3v1a283.call(owner,ctx,owner);},"321":(ctx,owner)=>{c3v1a284.call(owner,ctx,owner);},"335":(ctx,owner)=>{c3v1a285.call(owner,ctx,owner);},"1374":(ctx,owner)=>{c3v1a282.call(owner,ctx,owner);}},"2111":{"1":(ctx,owner)=>{c3v1a286.call(owner,ctx,owner);},"29":(ctx,owner)=>{c3v1a287.call(owner,ctx,owner);},"30":(ctx,owner)=>{c3v1a288.call(owner,ctx,owner);}},"2123":{"1":(ctx,owner)=>{c3v1a289.call(owner,ctx,owner);}},"2126":{"1":(ctx,owner)=>{c3v1a290.call(owner,ctx,owner);}},"2127":{"1":(ctx,owner)=>{c3v1a291.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v1a292.call(owner,ctx,owner);}},"2130":{"1":(ctx,owner)=>{c3v1a293.call(owner,ctx,owner);}},"2131":{"1":(ctx,owner)=>{c3v1a294.call(owner,ctx,owner);}},"2207":{"1":(ctx,owner)=>{c3v1a295.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a297.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v1a296.call(owner,ctx,owner);}},"2227":{"32":(ctx,owner)=>{c3v1a298.call(owner,ctx,owner);}},"2236":{"1":(ctx,owner)=>{c3v1a300.call(owner,ctx,owner);}},"2239":{"1":(ctx,owner)=>{c3v1a301.call(owner,ctx,owner);}},"2268":{"24":(ctx,owner)=>{c3v1a302.call(owner,ctx,owner);}},"2278":{"1":(ctx,owner)=>{c3v1a303.call(owner,ctx,owner);}},"2322":{"1":(ctx,owner)=>{c3v1a305.call(owner,ctx,owner);}},"2336":{"1":(ctx,owner)=>{c3v1a306.call(owner,ctx,owner);}},"2369":{"1":(ctx,owner)=>{c3v1a308.call(owner,ctx,owner);}},"2372":{"1":(ctx,owner)=>{c3v1a309.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a310.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v1a311.call(owner,ctx,owner);},"4":(ctx,owner)=>{c3v1a312.call(owner,ctx,owner);},"5":(ctx,owner)=>{c3v1a313.call(owner,ctx,owner);},"6":(ctx,owner)=>{c3v1a314.call(owner,ctx,owner);},"7":(ctx,owner)=>{c3v1a315.call(owner,ctx,owner);}},"2386":{"1":(ctx,owner)=>{c3v1a316.call(owner,ctx,owner);}},"2432":{"1":(ctx,owner)=>{c3v1a318.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a319.call(owner,ctx,owner);}},"2459":{"1":(ctx,owner)=>{c3v1a321.call(owner,ctx,owner);}},"2472":{"1":(ctx,owner)=>{c3v1a322.call(owner,ctx,owner);}},"2473":{"1":(ctx,owner)=>{c3v1a323.call(owner,ctx,owner);}},"2474":{"1":(ctx,owner)=>{c3v1a324.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a326.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v1a325.call(owner,ctx,owner);},"20":(ctx,owner)=>{c3v1a327.call(owner,ctx,owner);}},"2481":{"1":(ctx,owner)=>{c3v1a328.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a331.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v1a333.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v1a329.call(owner,ctx,owner);},"12":(ctx,owner)=>{c3v1a330.call(owner,ctx,owner);},"20":(ctx,owner)=>{c3v1a332.call(owner,ctx,owner);}},"2489":{"1":(ctx,owner)=>{c3v1a334.call(owner,ctx,owner);}},"2490":{"1":(ctx,owner)=>{c3v1a335.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a337.call(owner,ctx,owner);},"11":(ctx,owner)=>{c3v1a336.call(owner,ctx,owner);},"20":(ctx,owner)=>{c3v1a338.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c3v1a378.call(owner,ctx,owner);},"2":(ctx,owner)=>{c3v1a379.call(owner,ctx,owner);},"3":(ctx,owner)=>{c3v1a380.call(owner,ctx,owner);},"4":(ctx,owner)=>{c3v1a381.call(owner,ctx,owner);}}},frameActions:{"15":{"1":[c3v1a249]},"28":{"1":[c3v1a342]},"38":{"1":[c3v1a349]},"47":{"1":[c3v1a353]},"48":{"1":[c3v1a357],"2":[c3v1a358],"3":[c3v1a359]},"55":{"1":[c3v1a360]},"62":{"1":[c3v1a361]},"67":{"1":[c3v1a362]},"68":{"1":[c3v1a365]},"76":{"1":[c3v1a367]},"84":{"1":[c3v1a370]},"92":{"1":[c3v1a372]},"93":{"1":[c3v1a373],"2":[c3v1a374],"3":[c3v1a375]},"98":{"1":[c3v1a376],"7":[c3v1a377]},"105":{"5":[c3v1a222]},"106":{"1":[c3v1a223]},"116":{"1":[c3v1a226]},"223":{"9":[c3v1a299]},"230":{"9":[c3v1a304]},"235":{"10":[c3v1a307]},"240":{"9":[c3v1a317]},"245":{"9":[c3v1a320]},"254":{"9":[c3v1a339]},"259":{"9":[c3v1a340]},"278":{"9":[c3v1a341]},"291":{"26":[c3v1a343]},"315":{"26":[c3v1a344]},"329":{"28":[c3v1a345]},"343":{"28":[c3v1a346]},"357":{"32":[c3v1a347]},"373":{"28":[c3v1a348]},"388":{"32":[c3v1a350]},"404":{"28":[c3v1a351]},"454":{"54":[c3v1a352]},"472":{"54":[c3v1a354]},"473":{"1":[c3v1a355],"2":[c3v1a356]},"687":{"1":[c3v1a363],"564":[c3v1a364]},"721":{"1":[c3v1a366]},"771":{"1":[c3v1a368],"189":[c3v1a369]},"892":{"1":[c3v1a371]},"1000":{"1":[c3v1a219],"26":[c3v1a221],"180":[c3v1a220]},"1081":{"1":[c3v1a224],"117":[c3v1a225]},"1203":{"1":[c3v1a227]},"1308":{"19":[c3v1a228]},"1327":{"19":[c3v1a229]},"1332":{"17":[c3v1a230]},"1356":{"11":[c3v1a231]},"1374":{"11":[c3v1a232]},"1376":{"1":[c3v1a233]},"1388":{"12":[c3v1a234]},"1397":{"12":[c3v1a235]},"1410":{"22":[c3v1a236]},"1425":{"22":[c3v1a237]},"1448":{"18":[c3v1a238]},"1476":{"18":[c3v1a239]},"1484":{"9":[c3v1a240]},"1491":{"9":[c3v1a241]},"1528":{"22":[c3v1a242]},"1557":{"22":[c3v1a243]},"1564":{"9":[c3v1a244]},"1574":{"9":[c3v1a245]},"1575":{"137":[c3v1a246],"144":[c3v1a247]},"1596":{"16":[c3v1a248]},"1602":{"8":[c3v1a250]},"1608":{"13":[c3v1a251]},"1619":{"22":[c3v1a252]},"1629":{"20":[c3v1a253]},"1635":{"8":[c3v1a254]},"1647":{"16":[c3v1a255]},"1653":{"10":[c3v1a256]},"1670":{"1":[c3v1a257]},"1687":{"1":[c3v1a258],"61":[c3v1a261],"120":[c3v1a259],"121":[c3v1a260]},"1740":{"21":[c3v1a262]},"1754":{"21":[c3v1a263]},"1760":{"11":[c3v1a264]},"1767":{"11":[c3v1a265]},"1775":{"12":[c3v1a266]},"1782":{"12":[c3v1a267]},"1797":{"25":[c3v1a268]},"1812":{"25":[c3v1a269]},"1824":{"21":[c3v1a270]},"1836":{"21":[c3v1a271]},"1845":{"11":[c3v1a272]},"1852":{"11":[c3v1a273]},"1875":{"35":[c3v1a274]},"1898":{"35":[c3v1a275]},"1904":{"9":[c3v1a276]},"1905":{"119":[c3v1a277],"126":[c3v1a278]},"1906":{"1":[c3v1a279]},"1907":{"1":[c3v1a280]},"2106":{"1":[c3v1a281],"306":[c3v1a283],"321":[c3v1a284],"335":[c3v1a285],"1374":[c3v1a282]},"2111":{"1":[c3v1a286],"29":[c3v1a287],"30":[c3v1a288]},"2123":{"1":[c3v1a289]},"2126":{"1":[c3v1a290]},"2127":{"1":[c3v1a291],"11":[c3v1a292]},"2130":{"1":[c3v1a293]},"2131":{"1":[c3v1a294]},"2207":{"1":[c3v1a295],"2":[c3v1a297],"11":[c3v1a296]},"2227":{"32":[c3v1a298]},"2236":{"1":[c3v1a300]},"2239":{"1":[c3v1a301]},"2268":{"24":[c3v1a302]},"2278":{"1":[c3v1a303]},"2322":{"1":[c3v1a305]},"2336":{"1":[c3v1a306]},"2369":{"1":[c3v1a308]},"2372":{"1":[c3v1a309],"2":[c3v1a310],"3":[c3v1a311],"4":[c3v1a312],"5":[c3v1a313],"6":[c3v1a314],"7":[c3v1a315]},"2386":{"1":[c3v1a316]},"2432":{"1":[c3v1a318],"2":[c3v1a319]},"2459":{"1":[c3v1a321]},"2472":{"1":[c3v1a322]},"2473":{"1":[c3v1a323]},"2474":{"1":[c3v1a324],"2":[c3v1a326],"11":[c3v1a325],"20":[c3v1a327]},"2481":{"1":[c3v1a328],"2":[c3v1a331],"3":[c3v1a333],"11":[c3v1a329],"12":[c3v1a330],"20":[c3v1a332]},"2489":{"1":[c3v1a334]},"2490":{"1":[c3v1a335],"2":[c3v1a337],"11":[c3v1a336],"20":[c3v1a338]},"main":{"1":[c3v1a378],"2":[c3v1a379],"3":[c3v1a380],"4":[c3v1a381]}},buttons:{"2114":{"release":(ctx,owner)=>{c3v1a194.call(owner,ctx,owner);}},"2151":{"press":(ctx,owner)=>{c3v1a195.call(owner,ctx,owner);},"release":(ctx,owner)=>{c3v1a196.call(owner,ctx,owner);}},"2156":{"release":(ctx,owner)=>{c3v1a197.call(owner,ctx,owner);}},"2172":{"release":(ctx,owner)=>{c3v1a198.call(owner,ctx,owner);}},"2174":{"release":(ctx,owner)=>{c3v1a199.call(owner,ctx,owner);}},"2185":{"release":(ctx,owner)=>{c3v1a200.call(owner,ctx,owner);}},"2191":{"release":(ctx,owner)=>{c3v1a201.call(owner,ctx,owner);}},"2196":{"release":(ctx,owner)=>{c3v1a202.call(owner,ctx,owner);}},"2205":{"release":(ctx,owner)=>{c3v1a203.call(owner,ctx,owner);}},"2378":{"release":(ctx,owner)=>{c3v1a204.call(owner,ctx,owner);}},"2410":{"release":(ctx,owner)=>{c3v1a205.call(owner,ctx,owner);}},"2411":{"release":(ctx,owner)=>{c3v1a206.call(owner,ctx,owner);}},"2412":{"release":(ctx,owner)=>{c3v1a207.call(owner,ctx,owner);}},"2413":{"release":(ctx,owner)=>{c3v1a208.call(owner,ctx,owner);}},"2414":{"release":(ctx,owner)=>{c3v1a209.call(owner,ctx,owner);}},"2439":{"release":(ctx,owner)=>{c3v1a210.call(owner,ctx,owner);}},"2442":{"release":(ctx,owner)=>{c3v1a211.call(owner,ctx,owner);}},"2446":{"release":(ctx,owner)=>{c3v1a212.call(owner,ctx,owner);}},"2448":{"release":(ctx,owner)=>{c3v1a213.call(owner,ctx,owner);}},"2450":{"release":(ctx,owner)=>{c3v1a214.call(owner,ctx,owner);}},"2452":{"release":(ctx,owner)=>{c3v1a215.call(owner,ctx,owner);}},"2458":{"press":(ctx,owner)=>{c3v1a216.call(owner,ctx,owner);},"release":(ctx,owner)=>{c3v1a217.call(owner,ctx,owner);}},"2498":{"release":(ctx,owner)=>{c3v1a218.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"15":[],"28":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"38":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"47":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"48":[],"55":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"62":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"67":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"68":[],"76":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"84":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"92":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"93":[],"98":[],"105":[],"106":["_totalframes"],"116":["_x","_y","onEnterFrame","x","y"],"223":[],"230":[],"235":[],"240":[],"245":[],"254":[],"259":[],"278":[],"291":[],"315":[],"329":[],"343":[],"357":[],"373":[],"388":[],"404":[],"454":[],"472":[],"473":[],"687":["_totalframes","skipFrame"],"721":["_totalframes","skipFrame"],"771":["_totalframes","skipFrame"],"892":["_totalframes","skipFrame"],"1000":["_totalframes","a","lifeUp","skipFrame"],"1081":["_totalframes","skipFrame"],"1203":["_visible"],"1308":[],"1327":[],"1332":[],"1356":[],"1374":[],"1376":["_visible"],"1388":[],"1397":[],"1410":[],"1425":[],"1448":[],"1476":[],"1484":[],"1491":[],"1528":[],"1557":[],"1564":[],"1574":[],"1575":[],"1596":[],"1602":[],"1608":[],"1619":[],"1629":[],"1635":[],"1647":[],"1653":[],"1670":[],"1687":[],"1740":[],"1754":[],"1760":[],"1767":[],"1775":[],"1782":[],"1797":[],"1812":[],"1824":[],"1836":[],"1845":[],"1852":[],"1875":[],"1898":[],"1904":[],"1905":[],"1906":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1907":["tt"],"2106":["skipFrame"],"2111":["skipFrame"],"2114":["aim"],"2123":[],"2126":[],"2127":["_currentframe","back","onEnterFrame"],"2130":["component","track_mc"],"2131":[],"2151":[],"2156":[],"2172":["qqxflash_home"],"2174":[],"2185":[],"2191":["helper"],"2196":[],"2205":[],"2207":["btn"],"2227":[],"2236":[],"2239":["_visible"],"2268":[],"2278":["_visible"],"2322":["_totalframes","a"],"2336":[],"2369":["_visible","hitted","onEnterFrame","ox","oy"],"2372":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block10","block2","block3","block4","block5","blocks","blockx","blocky","changeMovies","changes","door","event10","event11","event14","event17","event18","event19","event20","event4","event8","events","hitter","i","k","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"2378":["gp"],"2386":[],"2410":[],"2411":[],"2412":[],"2413":[],"2414":[],"2432":["actKey","downKey","leftKey","rightKey","upKey"],"2439":["_quality"],"2442":["_quality"],"2446":["_quality"],"2448":[],"2450":["allShow"],"2452":["allShow"],"2458":["draging","onEnterFrame"],"2459":["_x","bb","draging","onEnterFrame"],"2472":["btn"],"2473":["allShow","checkKey","gkShow","itemList","listItem","newKey","tf","timebar"],"2474":["btn","gp"],"2481":["i","onEnterFrame"],"2489":[],"2490":["delay","fadeOut","item"],"2498":[],"main":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event0","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:2000":{"read":["aim"],"write":[]},"0:2034":{"read":[],"write":[]},"0:2039":{"read":[],"write":[]},"0:2055":{"read":["qqxflash_home"],"write":[]},"0:2057":{"read":[],"write":[]},"0:2068":{"read":[],"write":[]},"0:2074":{"read":["helper"],"write":[]},"0:2079":{"read":[],"write":[]},"0:2088":{"read":[],"write":[]},"0:2261":{"read":["gp"],"write":["gp"]},"0:2307":{"read":[],"write":[]},"0:2308":{"read":[],"write":[]},"0:2309":{"read":[],"write":[]},"0:2310":{"read":[],"write":[]},"0:2311":{"read":[],"write":[]},"0:2336":{"read":["_quality"],"write":["_quality"]},"0:2339":{"read":["_quality"],"write":["_quality"]},"0:2343":{"read":["_quality"],"write":["_quality"]},"0:2345":{"read":[],"write":[]},"0:2347":{"read":["allShow"],"write":[]},"0:2349":{"read":["allShow"],"write":[]},"0:2355":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:2395":{"read":[],"write":[]},"0:1046":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:105":{"read":[],"write":[]},"0:106":{"read":["_totalframes"],"write":[]},"0:115":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:1167":{"read":["_visible"],"write":["_visible"]},"0:1248":{"read":[],"write":[]},"0:1265":{"read":[],"write":[]},"0:1269":{"read":[],"write":[]},"0:1284":{"read":[],"write":[]},"0:1301":{"read":[],"write":[]},"0:1303":{"read":["_visible"],"write":["_visible"]},"0:1313":{"read":[],"write":[]},"0:1322":{"read":[],"write":[]},"0:1335":{"read":[],"write":[]},"0:1346":{"read":[],"write":[]},"0:1368":{"read":[],"write":[]},"0:1386":{"read":[],"write":[]},"0:1394":{"read":[],"write":[]},"0:1399":{"read":[],"write":[]},"0:1433":{"read":[],"write":[]},"0:1459":{"read":[],"write":[]},"0:1466":{"read":[],"write":[]},"0:1473":{"read":[],"write":[]},"0:1474":{"read":[],"write":[]},"0:1495":{"read":[],"write":[]},"0:1501":{"read":[],"write":[]},"0:1507":{"read":[],"write":[]},"0:1518":{"read":[],"write":[]},"0:1528":{"read":[],"write":[]},"0:1534":{"read":[],"write":[]},"0:1546":{"read":[],"write":[]},"0:1552":{"read":[],"write":[]},"0:1569":{"read":[],"write":[]},"0:1586":{"read":[],"write":[]},"0:15":{"read":[],"write":[]},"0:1639":{"read":[],"write":[]},"0:1653":{"read":[],"write":[]},"0:1660":{"read":[],"write":[]},"0:1666":{"read":[],"write":[]},"0:1674":{"read":[],"write":[]},"0:1681":{"read":[],"write":[]},"0:1696":{"read":[],"write":[]},"0:1711":{"read":[],"write":[]},"0:1723":{"read":[],"write":[]},"0:1735":{"read":[],"write":[]},"0:1744":{"read":[],"write":[]},"0:1750":{"read":[],"write":[]},"0:1773":{"read":[],"write":[]},"0:1796":{"read":[],"write":[]},"0:1802":{"read":[],"write":[]},"0:1803":{"read":[],"write":[]},"0:1804":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"0:1805":{"read":["tt"],"write":["tt"]},"0:1992":{"read":["skipFrame"],"write":["skipFrame"]},"0:1997":{"read":["skipFrame"],"write":["skipFrame"]},"0:2006":{"read":[],"write":[]},"0:2009":{"read":[],"write":[]},"0:2010":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:2013":{"read":["component","track_mc"],"write":["component"]},"0:2014":{"read":[],"write":[]},"0:2090":{"read":["btn"],"write":[]},"0:2110":{"read":[],"write":[]},"0:2119":{"read":[],"write":[]},"0:2122":{"read":["_visible"],"write":["_visible"]},"0:2151":{"read":[],"write":[]},"0:2161":{"read":["_visible"],"write":["_visible"]},"0:2205":{"read":["_totalframes","a"],"write":["a"]},"0:2219":{"read":[],"write":[]},"0:222":{"read":[],"write":[]},"0:2252":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2255":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block10","block2","block3","block4","block5","blocks","blockx","blocky","changeMovies","changes","door","event10","event11","event14","event17","event18","event19","event20","event4","event8","events","hitter","i","k","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","k","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"0:2269":{"read":[],"write":[]},"0:229":{"read":[],"write":[]},"0:2329":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:234":{"read":[],"write":[]},"0:2356":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:2369":{"read":["btn"],"write":[]},"0:2370":{"read":["allShow","checkKey","gkShow","itemList","listItem","newKey","tf","timebar"],"write":["checkKey","listItem","newKey","tf"]},"0:2371":{"read":["btn","gp"],"write":[]},"0:2378":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:2386":{"read":[],"write":[]},"0:2387":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:239":{"read":[],"write":[]},"0:244":{"read":[],"write":[]},"0:253":{"read":[],"write":[]},"0:258":{"read":[],"write":[]},"0:267":{"read":[],"write":[]},"0:28":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:280":{"read":[],"write":[]},"0:295":{"read":[],"write":[]},"0:311":{"read":[],"write":[]},"0:326":{"read":[],"write":[]},"0:340":{"read":[],"write":[]},"0:358":{"read":[],"write":[]},"0:372":{"read":[],"write":[]},"0:38":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:388":{"read":[],"write":[]},"0:410":{"read":["items"],"write":[]},"0:431":{"read":["items"],"write":[]},"0:456":{"read":[],"write":[]},"0:47":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:474":{"read":[],"write":[]},"0:475":{"read":[],"write":[]},"0:48":{"read":[],"write":[]},"0:55":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:62":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:67":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:689":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:68":{"read":[],"write":[]},"0:723":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:76":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:775":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:84":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:891":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:92":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:93":{"read":[],"write":[]},"0:966":{"read":["_totalframes","a","lifeUp","skipFrame"],"write":["a","lifeUp","skipFrame"]},"0:98":{"read":[],"write":[]},"0:main":{"read":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event0","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event0","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:2114":{"read":["aim"],"write":[]},"1:2151":{"read":[],"write":[]},"1:2156":{"read":[],"write":[]},"1:2172":{"read":["qqxflash_home"],"write":[]},"1:2174":{"read":[],"write":[]},"1:2185":{"read":[],"write":[]},"1:2191":{"read":["helper"],"write":[]},"1:2196":{"read":[],"write":[]},"1:2205":{"read":[],"write":[]},"1:2378":{"read":["gp"],"write":["gp"]},"1:2410":{"read":[],"write":[]},"1:2411":{"read":[],"write":[]},"1:2412":{"read":[],"write":[]},"1:2413":{"read":[],"write":[]},"1:2414":{"read":[],"write":[]},"1:2439":{"read":["_quality"],"write":["_quality"]},"1:2442":{"read":["_quality"],"write":["_quality"]},"1:2446":{"read":["_quality"],"write":["_quality"]},"1:2448":{"read":[],"write":[]},"1:2450":{"read":["allShow"],"write":[]},"1:2452":{"read":["allShow"],"write":[]},"1:2458":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:2498":{"read":[],"write":[]},"1:1000":{"read":["_totalframes","a","lifeUp","skipFrame"],"write":["a","lifeUp","skipFrame"]},"1:105":{"read":[],"write":[]},"1:106":{"read":["_totalframes"],"write":[]},"1:1081":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:116":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:1203":{"read":["_visible"],"write":["_visible"]},"1:1308":{"read":[],"write":[]},"1:1327":{"read":[],"write":[]},"1:1332":{"read":[],"write":[]},"1:1356":{"read":[],"write":[]},"1:1374":{"read":[],"write":[]},"1:1376":{"read":["_visible"],"write":["_visible"]},"1:1388":{"read":[],"write":[]},"1:1397":{"read":[],"write":[]},"1:1410":{"read":[],"write":[]},"1:1425":{"read":[],"write":[]},"1:1448":{"read":[],"write":[]},"1:1476":{"read":[],"write":[]},"1:1484":{"read":[],"write":[]},"1:1491":{"read":[],"write":[]},"1:1528":{"read":[],"write":[]},"1:1557":{"read":[],"write":[]},"1:1564":{"read":[],"write":[]},"1:1574":{"read":[],"write":[]},"1:1575":{"read":[],"write":[]},"1:1596":{"read":[],"write":[]},"1:15":{"read":[],"write":[]},"1:1602":{"read":[],"write":[]},"1:1608":{"read":[],"write":[]},"1:1619":{"read":[],"write":[]},"1:1629":{"read":[],"write":[]},"1:1635":{"read":[],"write":[]},"1:1647":{"read":[],"write":[]},"1:1653":{"read":[],"write":[]},"1:1670":{"read":[],"write":[]},"1:1687":{"read":[],"write":[]},"1:1740":{"read":[],"write":[]},"1:1754":{"read":[],"write":[]},"1:1760":{"read":[],"write":[]},"1:1767":{"read":[],"write":[]},"1:1775":{"read":[],"write":[]},"1:1782":{"read":[],"write":[]},"1:1797":{"read":[],"write":[]},"1:1812":{"read":[],"write":[]},"1:1824":{"read":[],"write":[]},"1:1836":{"read":[],"write":[]},"1:1845":{"read":[],"write":[]},"1:1852":{"read":[],"write":[]},"1:1875":{"read":[],"write":[]},"1:1898":{"read":[],"write":[]},"1:1904":{"read":[],"write":[]},"1:1905":{"read":[],"write":[]},"1:1906":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"1:1907":{"read":["tt"],"write":["tt"]},"1:2106":{"read":["skipFrame"],"write":["skipFrame"]},"1:2111":{"read":["skipFrame"],"write":["skipFrame"]},"1:2123":{"read":[],"write":[]},"1:2126":{"read":[],"write":[]},"1:2127":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:2130":{"read":["component","track_mc"],"write":["component"]},"1:2131":{"read":[],"write":[]},"1:2207":{"read":["btn"],"write":[]},"1:2227":{"read":[],"write":[]},"1:223":{"read":[],"write":[]},"1:2236":{"read":[],"write":[]},"1:2239":{"read":["_visible"],"write":["_visible"]},"1:2268":{"read":[],"write":[]},"1:2278":{"read":["_visible"],"write":["_visible"]},"1:230":{"read":[],"write":[]},"1:2322":{"read":["_totalframes","a"],"write":["a"]},"1:2336":{"read":[],"write":[]},"1:235":{"read":[],"write":[]},"1:2369":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2372":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block10","block2","block3","block4","block5","blocks","blockx","blocky","changeMovies","changes","door","event10","event11","event14","event17","event18","event19","event20","event4","event8","events","hitter","i","k","map","minScale","player","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_13","_temp_14","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","k","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"1:2386":{"read":[],"write":[]},"1:240":{"read":[],"write":[]},"1:2432":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:245":{"read":[],"write":[]},"1:2459":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:2472":{"read":["btn"],"write":[]},"1:2473":{"read":["allShow","checkKey","gkShow","itemList","listItem","newKey","tf","timebar"],"write":["checkKey","listItem","newKey","tf"]},"1:2474":{"read":["btn","gp"],"write":[]},"1:2481":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:2489":{"read":[],"write":[]},"1:2490":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:254":{"read":[],"write":[]},"1:259":{"read":[],"write":[]},"1:278":{"read":[],"write":[]},"1:28":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:291":{"read":[],"write":[]},"1:315":{"read":[],"write":[]},"1:329":{"read":[],"write":[]},"1:343":{"read":[],"write":[]},"1:357":{"read":[],"write":[]},"1:373":{"read":[],"write":[]},"1:38":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:388":{"read":[],"write":[]},"1:404":{"read":[],"write":[]},"1:454":{"read":[],"write":[]},"1:47":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:472":{"read":[],"write":[]},"1:473":{"read":[],"write":[]},"1:48":{"read":[],"write":[]},"1:55":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:62":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:67":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:687":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:68":{"read":[],"write":[]},"1:721":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:76":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:771":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:84":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:892":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:92":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:93":{"read":[],"write":[]},"1:98":{"read":[],"write":[]},"1:main":{"read":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event0","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["_quality","actKey","aimX","aimY","allEvents","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event0","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
