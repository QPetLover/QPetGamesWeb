/* Native source-derived chapter 4 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c4v0a0(ctx,owner){

   ctx.bool((owner.b1)?.["_currentframe"] != (owner.b1)?.["_totalframes"]) ? ctx.graph.goto(owner.b1,ctx.add((owner.b1)?.["_currentframe"],1)) : ctx.graph.goto(owner.b1,1);

}

export function c4v0a1(ctx,owner){

   ctx.bool((owner.b1)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b1,(ctx.num((owner.b1)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b1,(owner.b1)?.["_totalframes"]);

}

export function c4v0a2(ctx,owner){

   ctx.bool((owner.b2)?.["_currentframe"] != (owner.b2)?.["_totalframes"]) ? ctx.graph.goto(owner.b2,ctx.add((owner.b2)?.["_currentframe"],1)) : ctx.graph.goto(owner.b2,1);

}

export function c4v0a3(ctx,owner){

   ctx.bool((owner.b2)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b2,(ctx.num((owner.b2)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b2,(owner.b2)?.["_totalframes"]);

}

export function c4v0a4(ctx,owner){

   ctx.bool((owner.b3)?.["_currentframe"] != (owner.b3)?.["_totalframes"]) ? ctx.graph.goto(owner.b3,ctx.add((owner.b3)?.["_currentframe"],1)) : ctx.graph.goto(owner.b3,1);

}

export function c4v0a5(ctx,owner){

   ctx.bool((owner.b3)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b3,(ctx.num((owner.b3)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b3,(owner.b3)?.["_totalframes"]);

}

export function c4v0a6(ctx,owner){

   ctx.bool((owner.b4)?.["_currentframe"] != (owner.b4)?.["_totalframes"]) ? ctx.graph.goto(owner.b4,ctx.add((owner.b4)?.["_currentframe"],1)) : ctx.graph.goto(owner.b4,1);

}

export function c4v0a7(ctx,owner){

   ctx.bool((owner.b4)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b4,(ctx.num((owner.b4)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b4,(owner.b4)?.["_totalframes"]);

}

export function c4v0a8(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c4v0a9(ctx,owner){

   ctx.graph.play(owner);

}

export function c4v0a10(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c4v0a11(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c4v0a12(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c4v0a13(ctx,owner){

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

export function c4v0a14(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c4v0a15(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c4v0a16(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c4v0a17(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c4v0a18(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c4v0a19(ctx,owner){

   owner._quality = "HIGH";

}

export function c4v0a20(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c4v0a21(ctx,owner){

   owner._quality = "LOW";

}

export function c4v0a22(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c4v0a23(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c4v0a24(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c4v0a25(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c4v0a26(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c4v0a27(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c4v0a28(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c4v0a29(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c4v0a30(ctx,owner){

   ctx.stopDrag(owner);

}

export function c4v0a31(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c4v0a32(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c4v0a33(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c4v0a34(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a35(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a36(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a37(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a38(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a39(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a40(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a41(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a42(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a43(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a44(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a45(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a46(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a47(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a48(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a49(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c4v0a50(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a51(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a52(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c4v0a53(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c4v0a54(ctx,owner){
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

export function c4v0a55(ctx,owner){
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

export function c4v0a56(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c4v0a57(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c4v0a58(ctx,owner){
ctx.stopAllSounds?.();

}

export function c4v0a59(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v0a60(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a61(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a62(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v0a63(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a64(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v0a65(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a66(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a67(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a68(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a69(ctx,owner){
owner.skipFrame = 8;

}

export function c4v0a70(ctx,owner){
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.b4)?.["_currentframe"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.b3)?.["_currentframe"] == 5:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.b2)?.["_currentframe"] == 3:logicalLeft)((owner.b1)?.["_currentframe"] == 2)))))
{
   ctx.setField((owner.parent)?.["_parent"],"event14",1);
   ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",1);
   ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["block0"],2);
   ctx.setField(((owner.parent)?.["_parent"])?.["map"],"talkAreas",["talkArea0"]);
   owner.mcr = 1;
   ctx.graph.goto(owner,"r1");
   ctx.graph.play(owner);
}
else
{
   ((owner.parent)?.["_parent"])?.["newlife"]?.(5);
   owner.mcr = 2;
   ctx.graph.goto(owner,"r2");
   ctx.graph.play(owner);
}

}

export function c4v0a71(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v0a72(ctx,owner){
ctx.graph.goto(owner.mc,owner.mcr);

}

export function c4v0a73(ctx,owner){
ctx.graph.goto(owner,owner.skipFrame,{play:true});

}

export function c4v0a74(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v0a75(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a76(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a77(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a78(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a79(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a80(ctx,owner){

}

export function c4v0a81(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a82(ctx,owner){
ctx.graph.remove(owner.parent);

}

export function c4v0a83(ctx,owner){
ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1));

}

export function c4v0a84(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c4v0a85(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(4);

}

export function c4v0a86(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v0a87(ctx,owner){
ctx.stopAllSounds?.();

}

export function c4v0a88(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a89(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c4v0a90(ctx,owner){
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

export function c4v0a91(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c4v0a92(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a93(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a94(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c4v0a95(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a96(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a97(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c4v0a98(ctx,owner){
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

export function c4v0a99(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a100(ctx,owner){
((owner.parent)?.["_parent"])?.["gamePlay"]?.();

}

export function c4v0a101(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto((owner.parent)?.["event10"],2);

}

export function c4v0a102(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a103(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a104(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a105(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a106(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a107(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a108(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c4v0a109(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a110(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",((owner.parent)?.["_parent"])?.["tx"]);
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_y",((owner.parent)?.["_parent"])?.["ty"]);
(((owner.parent)?.["_parent"])?.["_parent"])?.["newlife"]?.(10);

}

export function c4v0a111(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);
ctx.setField((owner.parent)?.["_parent"],"hitted",0);

}

export function c4v0a112(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 232;
      owner.appeary = 391;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 115;
      owner.appeary = 204;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   default:
      owner.appearx = 376;
      owner.appeary = 379;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
owner.map = "map1";
owner.talkTxts = ["小妹，你在这等等我，我去找狮子船长。","救救我呀，放我出去。。。","你有看见一只看起来很颓废的狮子吗？","我知道了，那个醉醺醺的狮子是你们的朋友吧。我知道他在哪里，但先要帮助我出去！"];
owner.talkObj = ["map.player.point","map.point0","map.player.point","map.point0"];
owner.talkDirs = [0,0,1,0];
owner.talkNext = [0,2,3,0];
if(ctx.bool((owner.parent)?.["event14"] == 0))
{
   owner.talkAreas = ["talkArea0","talkArea1"];
   ctx.graph.goto(owner.block0,1);
   ctx.graph.goto(owner.door,1);
}
else
{
   owner.talkAreas = ["talkArea0"];
   ctx.graph.goto(owner.block0,2);
   ctx.graph.goto(owner.door,(owner.door)?.["_totalframes"]);
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1"];
owner.events = ["event1","event22","event23"];
owner.changes = ["map2"];
owner.changeMovies = ["event000","event000"];
owner.blockx = [268,460];
owner.blocky = [351,373];
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

export function c4v0a113(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map3"))
{
   owner.appearx = 522;
   owner.appeary = 179;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 331;
   owner.appeary = 235;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map2";
owner.talkTxts = [];
owner.talkObj = [];
owner.talkDirs = [];
owner.talkNext = [];
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map1","map3"];
owner.changeMovies = ["event000","event000"];
owner.events = ["event4","event5","event7"];
owner.blocks = ["block0","block1","block2"];
owner.blockx = [291,398,254];
owner.blocky = [371,354,274];
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   ctx.setField(owner.head1,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event5"] == 1))
{
   ctx.setField(owner.head2,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event2"] != 1))
{
   ctx.setField(owner.event2,"onEnterFrame",function()
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
if(ctx.bool((owner.parent)?.["event3"] != 1))
{
   ctx.setField(owner.event3,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block2);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block2,1);
      }
   });
}
else
{
   ctx.setField(owner.block2,"_visible",0);
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

export function c4v0a114(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 395;
owner.appeary = 389;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","w2"));
if(ctx.bool((owner.parent)?.["itemNow"] == "item5"))
{
   ctx.setField(owner.topBlock,"_alpha",60);
}
owner.map = "map3";
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map2"];
owner.changeMovies = ["event000"];
owner.events = ["event6","event8","event9","event10","event11","event12","event13"];
owner.blocks = [];
if(ctx.bool((owner.parent)?.["event6"] == 1))
{
   ctx.setField(owner.head3,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.light1,2);
   if(ctx.bool((owner.parent)?.["event9"] == 1))
   {
      ctx.graph.goto(owner.light2,2);
      ctx.graph.goto(owner.topBlock,4);
   }
   else
   {
      ctx.graph.goto(owner.topBlock,2);
   }
}
else if(ctx.bool((owner.parent)?.["event9"] == 1))
{
   ctx.graph.goto(owner.light2,2);
   if(ctx.bool((owner.parent)?.["event8"] == 1))
   {
      ctx.graph.goto(owner.light1,2);
      ctx.graph.goto(owner.topBlock,4);
   }
   else
   {
      ctx.graph.goto(owner.topBlock,3);
   }
}
else
{
   ctx.graph.goto(owner.topBlock,1);
}
if(ctx.bool((owner.parent)?.["event10"] == 1))
{
   ctx.graph.goto(owner.flag,(owner.flag)?.["_totalframes"]);
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c4v0a115(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map1"))
{
   owner.appearx = 502;
   owner.appeary = 209;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 134;
   owner.appeary = 384;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map4";
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map1"];
owner.changeMovies = ["event000"];
owner.events = ["event15","event16","event17","event18","event19"];
owner.blocks = ["block0","block1","block2","block3","block4","block5","block6"];
owner.blockx = [222,254,450,520,110,475,627];
owner.blocky = [331,225,222,300,339,400,352];
if(ctx.bool((owner.parent)?.["event16"] != 0))
{
   ctx.graph.goto(owner.block1,(owner.parent)?.["head1"]);
}
else
{
   ctx.setField(owner.block1,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event17"] != 0))
{
   ctx.graph.goto(owner.block2,(owner.parent)?.["head2"]);
}
else
{
   ctx.setField(owner.block2,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event18"] != 0))
{
   ctx.graph.goto(owner.block3,(owner.parent)?.["head3"]);
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event18"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event17"] == 1:logicalLeft)((owner.parent)?.["event16"] == 1))))
{
   ctx.graph.goto(owner.sdoor,(owner._sdoor)?.["_totalframes"]);
}
if(ctx.bool((owner.parent)?.["event15"] != 1))
{
   ctx.setField(owner.event15,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block0);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block0,2);
      }
   });
}
else
{
   ctx.setField(owner.block0,"_visible",0);
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

export function c4v0a116(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 380;
owner.appeary = 392;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","w2"));
owner.map = "map5";
owner.minScale = 50;
owner.playerScale = 80;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event20","event21"];
owner.blocks = [];
owner.hitted = 0;
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,6)))
{
   ctx.setField((this)?.[ctx.add("hitter",owner.i)],"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.setField(owner.hitter1,"onEnterFrame",function()
{
   var _loc3_;
   if(ctx.bool(owner.hitted == 0))
   {
      _loc3_ = 1;
      while(ctx.bool(ctx.lessEqual(_loc3_,6)))
      {
         if(ctx.bool(ctx.hitTest(((this)?.["_parent"])?.[ctx.add("hitter",_loc3_)],(owner.player)?.["_x"],(owner.player)?.["_y"],true)))
         {
            owner.hitted = 1;
            ctx.setField(owner.parent,"gamePause",1);
            ctx.graph.goto((owner.topBlock)?.[ctx.add("fire",_loc3_)],2,{play:true});
            break;
         }
         _loc3_ = ctx.add(_loc3_,1);
      }
      if(ctx.bool(owner.hitted == 0))
      {
         owner.tx = (owner.player)?.["_x"];
         owner.ty = (owner.player)?.["_y"];
      }
   }
});
owner.blockx = [];
owner.blocky = [];
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

export function c4v0a117(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a118(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a119(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c4v0a120(ctx,owner){
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

export function c4v0a121(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c4v0a122(ctx,owner){
owner.listItem = function(){
   var _loc3_ = 0;
   var _loc4_;
   while(ctx.bool(ctx.less(_loc3_,(((owner.parent)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc4_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc3_),_loc3_);
      ctx.setField(_loc4_,"_x",(ctx.num(_loc3_)*ctx.num(36)));
      ctx.graph.goto(_loc4_,(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
      ctx.setField(_loc4_,"aim",(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
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

export function c4v0a123(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a124(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a125(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c4v0a126(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c4v0a127(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c4v0a128(ctx,owner){
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

export function c4v0a129(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c4v0a130(ctx,owner){
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

export function c4v0a131(ctx,owner){
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

export function c4v0a132(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c4v0a133(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a134(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a135(ctx,owner){
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

export function c4v0a136(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c4v0a137(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c4v0a138(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a139(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a140(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a141(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a142(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a143(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a144(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a145(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a146(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a147(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a148(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a149(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a150(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a151(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a152(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a153(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a154(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c4v0a155(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c4v0a156(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c4v0a157(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c4v0a158(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c4v0a159(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c4v0a160(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c4v0a161(ctx,owner){

}

export function c4v0a162(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c4v0a163(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c4v0a164(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a165(ctx,owner){

}

export function c4v0a166(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a167(ctx,owner){
owner._visible = 0;

}

export function c4v0a168(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a169(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a170(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c4v0a171(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a172(ctx,owner){

}

export function c4v0a173(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a174(ctx,owner){
owner._visible = 0;

}

export function c4v0a175(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a176(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a177(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a178(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a179(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a180(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a181(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a182(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a183(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a184(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a185(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a186(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a187(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v0a188(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c4v0a189(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c4v0a190(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a191(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a192(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a193(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a194(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a195(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a196(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a197(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a198(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v0a199(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a200(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a201(ctx,owner){
ctx.stopAllSounds?.();

}

export function c4v0a202(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c4v0a203(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c4v0a204(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v0a205(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a206(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a207(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a208(ctx,owner){

}

export function c4v0a209(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v0a210(ctx,owner){
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
   (owner.itemList)?.["push"]?.("item1");
   ctx.graph.goto(owner.itemShow,"item1");
   owner.itemNow = "item1";
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
                     if(ctx.bool(owner.event14 == 0))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event4":
                     ctx.setField((owner.map)?.["head1"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event4 = 1;
                     (owner.itemList)?.["push"]?.("item2");
                     ctx.graph.goto(owner.itemShow,"item2");
                     owner.itemNow = "item2";
                     owner.etShow?.("您得到了一个骷髅");
                     break;
                  case "event5":
                     ctx.setField((owner.map)?.["head2"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event5 = 1;
                     (owner.itemList)?.["push"]?.("item3");
                     ctx.graph.goto(owner.itemShow,"item3");
                     owner.itemNow = "item3";
                     owner.etShow?.("您得到了一个骷髅");
                     break;
                  case "event6":
                     ctx.setField((owner.map)?.["head3"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event6 = 1;
                     (owner.itemList)?.["push"]?.("item4");
                     ctx.graph.goto(owner.itemShow,"item4");
                     owner.itemNow = "item4";
                     owner.etShow?.("您得到了一个骷髅");
                     break;
                  case "event7":
                     (owner.getItem)?.["start"]?.();
                     owner.event7 = 1;
                     (owner.itemList)?.["push"]?.("item5");
                     ctx.graph.goto(owner.itemShow,"item5");
                     owner.itemNow = "item5";
                     owner.etShow?.("您得到了一个火把");
                     break;
                  case "event8":
                     if(ctx.bool(owner.itemNow == "item5"))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event8 = 1;
                        ctx.graph.goto((owner.map)?.["light1"],2);
                        if(ctx.bool(owner.event9 == 1))
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],4);
                        }
                        else
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],2);
                        }
                        owner.etShow?.("您点亮了一个火炬");
                     }
                     else
                     {
                        owner.etShow?.("您需要一个火把");
                     }
                     break;
                  case "event9":
                     if(ctx.bool(owner.itemNow == "item5"))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event9 = 1;
                        ctx.graph.goto((owner.map)?.["light2"],2);
                        if(ctx.bool(owner.event8 == 1))
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],4);
                        }
                        else
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],3);
                        }
                        owner.etShow?.("您点亮了一个火炬");
                     }
                     else
                     {
                        owner.etShow?.("您需要一个火把");
                     }
                     break;
                  case "event10":
                     if(ctx.bool(owner.itemNow == "item5"))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event10 = 1;
                        ctx.graph.goto((owner.map)?.["flag"],2,{play:true});
                        owner.etShow?.("您点燃了窗帘");
                     }
                     else
                     {
                        owner.etShow?.("您需要一个火把");
                     }
                     break;
                  case "event11":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event12":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event16":
                     ctx.trace?.(owner.itemList);
                     ctx.trace?.("///////////////////////////////");
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item4")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item3")(owner.itemNow == "item2"))))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event16 = 1;
                        owner.head1 = (ctx.num(ctx.num((owner.itemNow)?.["slice"]?.((-ctx.num(1)))))-ctx.num(1));
                        ctx.setField((owner.map)?.["block1"],"_visible",1);
                        ctx.graph.goto((owner.map)?.["block1"],owner.head1);
                        var i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == owner.itemNow))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                              owner.itemNow = (owner.itemList)?.[(ctx.num((owner.itemList)?.["length"])-ctx.num(1))];
                              ctx.graph.goto(owner.itemShow,owner.itemNow);
                              break;
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                        {
                           ctx.graph.goto((owner.map)?.["sdoor"],2,{play:true});
                        }
                     }
                     else
                     {
                        owner.etShow?.("这里可以安装一个骷髅什么的");
                     }
                     ctx.trace?.(owner.itemList);
                     break;
                  case "event17":
                     ctx.trace?.(owner.itemList);
                     ctx.trace?.("///////////////////////////////");
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item4")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item3")(owner.itemNow == "item2"))))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event17 = 1;
                        owner.head2 = (ctx.num(ctx.num((owner.itemNow)?.["slice"]?.((-ctx.num(1)))))-ctx.num(1));
                        ctx.setField((owner.map)?.["block2"],"_visible",1);
                        ctx.graph.goto((owner.map)?.["block2"],owner.head2);
                        var i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == owner.itemNow))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                              owner.itemNow = (owner.itemList)?.[(ctx.num((owner.itemList)?.["length"])-ctx.num(1))];
                              ctx.graph.goto(owner.itemShow,owner.itemNow);
                              break;
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                     }
                     else
                     {
                        owner.etShow?.("这里可以安装一个骷髅什么的");
                     }
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                     {
                        ctx.graph.goto((owner.map)?.["sdoor"],2,{play:true});
                     }
                     ctx.trace?.(owner.itemList);
                     break;
                  case "event18":
                     ctx.trace?.(owner.itemList);
                     ctx.trace?.("///////////////////////////////");
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item4")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item3")(owner.itemNow == "item2"))))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event18 = 1;
                        owner.head3 = (ctx.num(ctx.num((owner.itemNow)?.["slice"]?.((-ctx.num(1)))))-ctx.num(1));
                        ctx.setField((owner.map)?.["block3"],"_visible",1);
                        ctx.graph.goto((owner.map)?.["block3"],owner.head3);
                        var i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == owner.itemNow))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                              owner.itemNow = (owner.itemList)?.[(ctx.num((owner.itemList)?.["length"])-ctx.num(1))];
                              ctx.graph.goto(owner.itemShow,owner.itemNow);
                              break;
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                        {
                           ctx.graph.goto((owner.map)?.["sdoor"],2,{play:true});
                        }
                     }
                     else
                     {
                        owner.etShow?.("这里可以安装一个骷髅什么的");
                     }
                     ctx.trace?.(owner.itemList);
                     break;
                  case "event19":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map5";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event20":
                     owner.etShow?.("石碑上写着“满月的神奇数字将保佑你躲过火！”");
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
                  case "event22":
                     if(ctx.bool(owner.event14 == 1))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map4";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event23":
                     owner.etShow?.("还没有找到船长，不能回去！");
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
      ctx.graph.goto((owner.map)?.["door"],2,{play:true});
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c4v0a211(ctx,owner){
owner.oldMap = "";

}

export function c4v1a212(ctx,owner){

   ctx.bool((owner.b1)?.["_currentframe"] != (owner.b1)?.["_totalframes"]) ? ctx.graph.goto(owner.b1,ctx.add((owner.b1)?.["_currentframe"],1)) : ctx.graph.goto(owner.b1,1);

}

export function c4v1a213(ctx,owner){

   ctx.bool((owner.b1)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b1,(ctx.num((owner.b1)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b1,(owner.b1)?.["_totalframes"]);

}

export function c4v1a214(ctx,owner){

   ctx.bool((owner.b2)?.["_currentframe"] != (owner.b2)?.["_totalframes"]) ? ctx.graph.goto(owner.b2,ctx.add((owner.b2)?.["_currentframe"],1)) : ctx.graph.goto(owner.b2,1);

}

export function c4v1a215(ctx,owner){

   ctx.bool((owner.b2)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b2,(ctx.num((owner.b2)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b2,(owner.b2)?.["_totalframes"]);

}

export function c4v1a216(ctx,owner){

   ctx.bool((owner.b3)?.["_currentframe"] != (owner.b3)?.["_totalframes"]) ? ctx.graph.goto(owner.b3,ctx.add((owner.b3)?.["_currentframe"],1)) : ctx.graph.goto(owner.b3,1);

}

export function c4v1a217(ctx,owner){

   ctx.bool((owner.b3)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b3,(ctx.num((owner.b3)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b3,(owner.b3)?.["_totalframes"]);

}

export function c4v1a218(ctx,owner){

   ctx.bool((owner.b4)?.["_currentframe"] != (owner.b4)?.["_totalframes"]) ? ctx.graph.goto(owner.b4,ctx.add((owner.b4)?.["_currentframe"],1)) : ctx.graph.goto(owner.b4,1);

}

export function c4v1a219(ctx,owner){

   ctx.bool((owner.b4)?.["_currentframe"] != 1) ? ctx.graph.goto(owner.b4,(ctx.num((owner.b4)?.["_currentframe"])-ctx.num(1))) : ctx.graph.goto(owner.b4,(owner.b4)?.["_totalframes"]);

}

export function c4v1a220(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c4v1a221(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c4v1a222(ctx,owner){

   ctx.stopDrag(owner);

}

export function c4v1a223(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c4v1a224(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c4v1a225(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c4v1a226(ctx,owner){

   ctx.graph.play(owner);

}

export function c4v1a227(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c4v1a228(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c4v1a229(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c4v1a230(ctx,owner){

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

export function c4v1a231(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c4v1a232(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c4v1a233(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c4v1a234(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c4v1a235(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c4v1a236(ctx,owner){

   owner._quality = "HIGH";

}

export function c4v1a237(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c4v1a238(ctx,owner){

   owner._quality = "LOW";

}

export function c4v1a239(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c4v1a240(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c4v1a241(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c4v1a242(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c4v1a243(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c4v1a244(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c4v1a245(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c4v1a246(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a247(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a248(ctx,owner){
ctx.graph.remove(owner.parent);

}

export function c4v1a249(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a250(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a251(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a252(ctx,owner){
ctx.graph.goto(owner,ctx.add(ctx.randomInt?.(owner._totalframes),1));

}

export function c4v1a253(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a254(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a255(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a256(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a257(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a258(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a259(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a260(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c4v1a261(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a262(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a263(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a264(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c4v1a265(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c4v1a266(ctx,owner){
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

export function c4v1a267(ctx,owner){
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

export function c4v1a268(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c4v1a269(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c4v1a270(ctx,owner){
ctx.stopAllSounds?.();

}

export function c4v1a271(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v1a272(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a273(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v1a274(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a275(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v1a276(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a277(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a278(ctx,owner){
owner.skipFrame = 8;

}

export function c4v1a279(ctx,owner){
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.b4)?.["_currentframe"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.b3)?.["_currentframe"] == 5:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.b2)?.["_currentframe"] == 3:logicalLeft)((owner.b1)?.["_currentframe"] == 2)))))
{
   ctx.setField((owner.parent)?.["_parent"],"event14",1);
   ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",1);
   ctx.graph.goto((((owner.parent)?.["_parent"])?.["map"])?.["block0"],2);
   ctx.setField(((owner.parent)?.["_parent"])?.["map"],"talkAreas",["talkArea0"]);
   owner.mcr = 1;
   ctx.graph.goto(owner,"r1");
   ctx.graph.play(owner);
}
else
{
   ((owner.parent)?.["_parent"])?.["newlife"]?.(5);
   owner.mcr = 2;
   ctx.graph.goto(owner,"r2");
   ctx.graph.play(owner);
}

}

export function c4v1a280(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v1a281(ctx,owner){
ctx.graph.goto(owner.mc,owner.mcr);

}

export function c4v1a282(ctx,owner){
ctx.graph.goto(owner,owner.skipFrame,{play:true});

}

export function c4v1a283(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v1a284(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a285(ctx,owner){

}

export function c4v1a286(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(4);

}

export function c4v1a287(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c4v1a288(ctx,owner){
ctx.stopAllSounds?.();

}

export function c4v1a289(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a290(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c4v1a291(ctx,owner){
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

export function c4v1a292(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c4v1a293(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c4v1a294(ctx,owner){

}

export function c4v1a295(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a296(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a297(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c4v1a298(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a299(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a300(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a301(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c4v1a302(ctx,owner){
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

export function c4v1a303(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a304(ctx,owner){
((owner.parent)?.["_parent"])?.["gamePlay"]?.();

}

export function c4v1a305(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.goto((owner.parent)?.["event10"],2);

}

export function c4v1a306(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a307(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a308(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a309(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a310(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a311(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a312(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c4v1a313(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a314(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a315(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",((owner.parent)?.["_parent"])?.["tx"]);
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_y",((owner.parent)?.["_parent"])?.["ty"]);
(((owner.parent)?.["_parent"])?.["_parent"])?.["newlife"]?.(10);

}

export function c4v1a316(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);
ctx.setField((owner.parent)?.["_parent"],"hitted",0);

}

export function c4v1a317(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 232;
      owner.appeary = 391;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 115;
      owner.appeary = 204;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   default:
      owner.appearx = 376;
      owner.appeary = 379;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
owner.map = "map1";
owner.talkTxts = ["哥哥，你在这等等我，我去找狮子船长。","救救我呀，放我出去。。。","你有看见一只看起来很颓废的狮子吗？","我知道了，那个醉醺醺的狮子是你们的朋友吧。我知道他在哪里，但先要帮助我出去！"];
owner.talkObj = ["map.player.point","map.point0","map.player.point","map.point0"];
owner.talkDirs = [0,0,1,0];
owner.talkNext = [0,2,3,0];
if(ctx.bool((owner.parent)?.["event14"] == 0))
{
   owner.talkAreas = ["talkArea0","talkArea1"];
   ctx.graph.goto(owner.block0,1);
   ctx.graph.goto(owner.door,1);
}
else
{
   owner.talkAreas = ["talkArea0"];
   ctx.graph.goto(owner.block0,2);
   ctx.graph.goto(owner.door,(owner.door)?.["_totalframes"]);
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1"];
owner.events = ["event1","event22","event23"];
owner.changes = ["map2"];
owner.changeMovies = ["event000","event000"];
owner.blockx = [268,460];
owner.blocky = [351,373];
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

export function c4v1a318(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map3"))
{
   owner.appearx = 522;
   owner.appeary = 179;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 331;
   owner.appeary = 235;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map2";
owner.talkTxts = [];
owner.talkObj = [];
owner.talkDirs = [];
owner.talkNext = [];
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map1","map3"];
owner.changeMovies = ["event000","event000"];
owner.events = ["event4","event5","event7"];
owner.blocks = ["block0","block1","block2"];
owner.blockx = [291,398,254];
owner.blocky = [371,354,274];
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   ctx.setField(owner.head1,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event5"] == 1))
{
   ctx.setField(owner.head2,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event2"] != 1))
{
   ctx.setField(owner.event2,"onEnterFrame",function()
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
if(ctx.bool((owner.parent)?.["event3"] != 1))
{
   ctx.setField(owner.event3,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block2);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block2,1);
      }
   });
}
else
{
   ctx.setField(owner.block2,"_visible",0);
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

export function c4v1a319(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 395;
owner.appeary = 389;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","w2"));
if(ctx.bool((owner.parent)?.["itemNow"] == "item5"))
{
   ctx.setField(owner.topBlock,"_alpha",60);
}
owner.map = "map3";
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map2"];
owner.changeMovies = ["event000"];
owner.events = ["event6","event8","event9","event10","event11","event12","event13"];
owner.blocks = [];
if(ctx.bool((owner.parent)?.["event6"] == 1))
{
   ctx.setField(owner.head3,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event8"] == 1))
{
   ctx.graph.goto(owner.light1,2);
   if(ctx.bool((owner.parent)?.["event9"] == 1))
   {
      ctx.graph.goto(owner.light2,2);
      ctx.graph.goto(owner.topBlock,4);
   }
   else
   {
      ctx.graph.goto(owner.topBlock,2);
   }
}
else if(ctx.bool((owner.parent)?.["event9"] == 1))
{
   ctx.graph.goto(owner.light2,2);
   if(ctx.bool((owner.parent)?.["event8"] == 1))
   {
      ctx.graph.goto(owner.light1,2);
      ctx.graph.goto(owner.topBlock,4);
   }
   else
   {
      ctx.graph.goto(owner.topBlock,3);
   }
}
else
{
   ctx.graph.goto(owner.topBlock,1);
}
if(ctx.bool((owner.parent)?.["event10"] == 1))
{
   ctx.graph.goto(owner.flag,(owner.flag)?.["_totalframes"]);
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
if(ctx.bool(owner.playerScale != owner.minScale))
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale)));
}
else
{
   ctx.setField(owner.player,"_xscale",ctx.setField(owner.player,"_yscale",owner.playerScale));
}

}

export function c4v1a320(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) !== "map1"))
{
   owner.appearx = 502;
   owner.appeary = 209;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
else
{
   owner.appearx = 134;
   owner.appeary = 384;
   owner._temp_4 = owner.parent;
   owner._temp_3 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map4";
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map1"];
owner.changeMovies = ["event000"];
owner.events = ["event15","event16","event17","event18","event19"];
owner.blocks = ["block0","block1","block2","block3","block4","block5","block6"];
owner.blockx = [222,254,450,520,110,475,627];
owner.blocky = [331,225,222,300,339,400,352];
if(ctx.bool((owner.parent)?.["event16"] != 0))
{
   ctx.graph.goto(owner.block1,(owner.parent)?.["head1"]);
}
else
{
   ctx.setField(owner.block1,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event17"] != 0))
{
   ctx.graph.goto(owner.block2,(owner.parent)?.["head2"]);
}
else
{
   ctx.setField(owner.block2,"_visible",0);
}
if(ctx.bool((owner.parent)?.["event18"] != 0))
{
   ctx.graph.goto(owner.block3,(owner.parent)?.["head3"]);
}
else
{
   ctx.setField(owner.block3,"_visible",0);
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event18"] == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.parent)?.["event17"] == 1:logicalLeft)((owner.parent)?.["event16"] == 1))))
{
   ctx.graph.goto(owner.sdoor,(owner._sdoor)?.["_totalframes"]);
}
if(ctx.bool((owner.parent)?.["event15"] != 1))
{
   ctx.setField(owner.event15,"onEnterFrame",function()
   {
      if(ctx.bool(ctx.hitTest(this,(owner.player)?.["_x"],(owner.player)?.["_y"],false)))
      {
         ctx.graph.stop(owner.block0);
         ctx.setField(this,"onEnterFrame",undefined);
         (owner.parent)?.["fight"]?.((this)?.["_name"],owner.block0,2);
      }
   });
}
else
{
   ctx.setField(owner.block0,"_visible",0);
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

export function c4v1a321(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 380;
owner.appeary = 392;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","w2"));
owner.map = "map5";
owner.minScale = 50;
owner.playerScale = 80;
ctx.setField(owner.hitter,"_visible",0);
owner.talkAreas = [];
owner.changes = ["map4"];
owner.changeMovies = ["event000"];
owner.events = ["event20","event21"];
owner.blocks = [];
owner.hitted = 0;
owner.i = 1;
while(ctx.bool(ctx.lessEqual(owner.i,6)))
{
   ctx.setField((this)?.[ctx.add("hitter",owner.i)],"_visible",0);
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
ctx.setField(owner.hitter1,"onEnterFrame",function()
{
   var _loc3_;
   if(ctx.bool(owner.hitted == 0))
   {
      _loc3_ = 1;
      while(ctx.bool(ctx.lessEqual(_loc3_,6)))
      {
         if(ctx.bool(ctx.hitTest(((this)?.["_parent"])?.[ctx.add("hitter",_loc3_)],(owner.player)?.["_x"],(owner.player)?.["_y"],true)))
         {
            owner.hitted = 1;
            ctx.setField(owner.parent,"gamePause",1);
            ctx.graph.goto((owner.topBlock)?.[ctx.add("fire",_loc3_)],2,{play:true});
            break;
         }
         _loc3_ = ctx.add(_loc3_,1);
      }
      if(ctx.bool(owner.hitted == 0))
      {
         owner.tx = (owner.player)?.["_x"];
         owner.ty = (owner.player)?.["_y"];
      }
   }
});
owner.blockx = [];
owner.blocky = [];
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

export function c4v1a322(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a323(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a324(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a325(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c4v1a326(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a327(ctx,owner){
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

export function c4v1a328(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c4v1a329(ctx,owner){
owner.listItem = function(){
   var _loc3_ = 0;
   var _loc4_;
   while(ctx.bool(ctx.less(_loc3_,(((owner.parent)?.["_parent"])?.["itemList"])?.["length"])))
   {
      _loc4_ = ctx.attach(owner.itemList,"items",ctx.add("item",_loc3_),_loc3_);
      ctx.setField(_loc4_,"_x",(ctx.num(_loc3_)*ctx.num(36)));
      ctx.graph.goto(_loc4_,(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
      ctx.setField(_loc4_,"aim",(((owner.parent)?.["_parent"])?.["itemList"])?.[_loc3_]);
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

export function c4v1a330(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a331(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a332(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c4v1a333(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c4v1a334(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c4v1a335(ctx,owner){
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

export function c4v1a336(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c4v1a337(ctx,owner){
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

export function c4v1a338(ctx,owner){
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

export function c4v1a339(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c4v1a340(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a341(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a342(ctx,owner){
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

export function c4v1a343(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c4v1a344(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c4v1a345(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a346(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a347(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a348(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a349(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a350(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a351(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a352(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a353(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a354(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a355(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a356(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a357(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a358(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a359(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a360(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c4v1a361(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a362(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("gp=",(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]));
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c4v1a363(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a364(ctx,owner){

}

export function c4v1a365(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a366(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a367(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a368(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a369(ctx,owner){
owner._visible = 0;

}

export function c4v1a370(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a371(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a372(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a373(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a374(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c4v1a375(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a376(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a377(ctx,owner){
owner._visible = 0;

}

export function c4v1a378(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c4v1a379(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a380(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a381(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a382(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a383(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a384(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a385(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a386(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a387(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a388(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a389(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a390(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a391(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a392(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a393(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c4v1a394(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c4v1a395(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c4v1a396(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a397(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a398(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a399(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a400(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c4v1a401(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a402(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a403(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a404(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a405(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a406(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a407(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c4v1a408(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a409(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a410(ctx,owner){
ctx.stopAllSounds?.();

}

export function c4v1a411(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c4v1a412(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c4v1a413(ctx,owner){

}

export function c4v1a414(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a415(ctx,owner){

}

export function c4v1a416(ctx,owner){
ctx.graph.stop(owner);

}

export function c4v1a417(ctx,owner){
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
   (owner.itemList)?.["push"]?.("item1");
   ctx.graph.goto(owner.itemShow,"item1");
   owner.itemNow = "item1";
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
                     if(ctx.bool(owner.event14 == 0))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event4":
                     ctx.setField((owner.map)?.["head1"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event4 = 1;
                     (owner.itemList)?.["push"]?.("item2");
                     ctx.graph.goto(owner.itemShow,"item2");
                     owner.itemNow = "item2";
                     owner.etShow?.("您得到了一个骷髅");
                     break;
                  case "event5":
                     ctx.setField((owner.map)?.["head2"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event5 = 1;
                     (owner.itemList)?.["push"]?.("item3");
                     ctx.graph.goto(owner.itemShow,"item3");
                     owner.itemNow = "item3";
                     owner.etShow?.("您得到了一个骷髅");
                     break;
                  case "event6":
                     ctx.setField((owner.map)?.["head3"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event6 = 1;
                     (owner.itemList)?.["push"]?.("item4");
                     ctx.graph.goto(owner.itemShow,"item4");
                     owner.itemNow = "item4";
                     owner.etShow?.("您得到了一个骷髅");
                     break;
                  case "event7":
                     (owner.getItem)?.["start"]?.();
                     owner.event7 = 1;
                     (owner.itemList)?.["push"]?.("item5");
                     ctx.graph.goto(owner.itemShow,"item5");
                     owner.itemNow = "item5";
                     owner.etShow?.("您得到了一个火把");
                     break;
                  case "event8":
                     if(ctx.bool(owner.itemNow == "item5"))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event8 = 1;
                        ctx.graph.goto((owner.map)?.["light1"],2);
                        if(ctx.bool(owner.event9 == 1))
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],4);
                        }
                        else
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],2);
                        }
                        owner.etShow?.("您点亮了一个火炬");
                     }
                     else
                     {
                        owner.etShow?.("您需要一个火把");
                     }
                     break;
                  case "event9":
                     if(ctx.bool(owner.itemNow == "item5"))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event9 = 1;
                        ctx.graph.goto((owner.map)?.["light2"],2);
                        if(ctx.bool(owner.event8 == 1))
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],4);
                        }
                        else
                        {
                           ctx.graph.goto((owner.map)?.["topBlock"],3);
                        }
                        owner.etShow?.("您点亮了一个火炬");
                     }
                     else
                     {
                        owner.etShow?.("您需要一个火把");
                     }
                     break;
                  case "event10":
                     if(ctx.bool(owner.itemNow == "item5"))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event10 = 1;
                        ctx.graph.goto((owner.map)?.["flag"],2,{play:true});
                        owner.etShow?.("您点燃了窗帘");
                     }
                     else
                     {
                        owner.etShow?.("您需要一个火把");
                     }
                     break;
                  case "event11":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event12":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event13":
                     if(ctx.bool(owner.event10 == 1))
                     {
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event16":
                     ctx.trace?.(owner.itemList);
                     ctx.trace?.("///////////////////////////////");
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item4")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item3")(owner.itemNow == "item2"))))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event16 = 1;
                        owner.head1 = (ctx.num(ctx.num((owner.itemNow)?.["slice"]?.((-ctx.num(1)))))-ctx.num(1));
                        ctx.setField((owner.map)?.["block1"],"_visible",1);
                        ctx.graph.goto((owner.map)?.["block1"],owner.head1);
                        var i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == owner.itemNow))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                              owner.itemNow = (owner.itemList)?.[(ctx.num((owner.itemList)?.["length"])-ctx.num(1))];
                              ctx.graph.goto(owner.itemShow,owner.itemNow);
                              break;
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                        {
                           ctx.graph.goto((owner.map)?.["sdoor"],2,{play:true});
                        }
                     }
                     else
                     {
                        owner.etShow?.("这里可以安装一个骷髅什么的");
                     }
                     ctx.trace?.(owner.itemList);
                     break;
                  case "event17":
                     ctx.trace?.(owner.itemList);
                     ctx.trace?.("///////////////////////////////");
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item4")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item3")(owner.itemNow == "item2"))))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event17 = 1;
                        owner.head2 = (ctx.num(ctx.num((owner.itemNow)?.["slice"]?.((-ctx.num(1)))))-ctx.num(1));
                        ctx.setField((owner.map)?.["block2"],"_visible",1);
                        ctx.graph.goto((owner.map)?.["block2"],owner.head2);
                        var i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == owner.itemNow))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                              owner.itemNow = (owner.itemList)?.[(ctx.num((owner.itemList)?.["length"])-ctx.num(1))];
                              ctx.graph.goto(owner.itemShow,owner.itemNow);
                              break;
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                     }
                     else
                     {
                        owner.etShow?.("这里可以安装一个骷髅什么的");
                     }
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                     {
                        ctx.graph.goto((owner.map)?.["sdoor"],2,{play:true});
                     }
                     ctx.trace?.(owner.itemList);
                     break;
                  case "event18":
                     ctx.trace?.(owner.itemList);
                     ctx.trace?.("///////////////////////////////");
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item4")(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.itemNow == "item3")(owner.itemNow == "item2"))))
                     {
                        (owner.getItem)?.["start"]?.();
                        owner.event18 = 1;
                        owner.head3 = (ctx.num(ctx.num((owner.itemNow)?.["slice"]?.((-ctx.num(1)))))-ctx.num(1));
                        ctx.setField((owner.map)?.["block3"],"_visible",1);
                        ctx.graph.goto((owner.map)?.["block3"],owner.head3);
                        var i = 0;
                        while(ctx.bool(ctx.less(i,(owner.itemList)?.["length"])))
                        {
                           if(ctx.bool((owner.itemList)?.[i] == owner.itemNow))
                           {
                              (owner.itemList)?.["splice"]?.(i,1);
                              owner.itemNow = (owner.itemList)?.[(ctx.num((owner.itemList)?.["length"])-ctx.num(1))];
                              ctx.graph.goto(owner.itemShow,owner.itemNow);
                              break;
                           }
                           ((old)=>(i=old+1,old))(ctx.num(i));
                        }
                        if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                        {
                           ctx.graph.goto((owner.map)?.["sdoor"],2,{play:true});
                        }
                     }
                     else
                     {
                        owner.etShow?.("这里可以安装一个骷髅什么的");
                     }
                     ctx.trace?.(owner.itemList);
                     break;
                  case "event19":
                     if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event18 == 1:logicalLeft)(((logicalLeft)=>ctx.bool(logicalLeft)?owner.event17 == 1:logicalLeft)(owner.event16 == 1))))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map5";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event20":
                     owner.etShow?.("石碑上写着“满月的神奇数字将保佑你躲过火！”");
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
                  case "event22":
                     if(ctx.bool(owner.event14 == 1))
                     {
                        owner.eventNow = "event000";
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        owner.oldMap = (owner.map)?.["map"];
                        owner.eventNext = "map4";
                        owner.eventAct = "change";
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event23":
                     owner.etShow?.("还没有找到船长，不能回去！");
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
      ctx.graph.goto((owner.map)?.["door"],2,{play:true});
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c4v1a418(ctx,owner){
owner.oldMap = "";

}

export const variant0={sourceBytes:3100930,frames:{"47":{"1":(ctx,owner)=>{c4v0a157.call(owner,ctx,owner);}},"48":{"1":(ctx,owner)=>{c4v0a161.call(owner,ctx,owner);}},"65":{"1":(ctx,owner)=>{c4v0a172.call(owner,ctx,owner);}},"78":{"1":(ctx,owner)=>{c4v0a183.call(owner,ctx,owner);}},"88":{"1":(ctx,owner)=>{c4v0a192.call(owner,ctx,owner);}},"97":{"1":(ctx,owner)=>{c4v0a204.call(owner,ctx,owner);}},"98":{"1":(ctx,owner)=>{c4v0a205.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a206.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v0a207.call(owner,ctx,owner);}},"105":{"1":(ctx,owner)=>{c4v0a39.call(owner,ctx,owner);}},"112":{"1":(ctx,owner)=>{c4v0a46.call(owner,ctx,owner);}},"117":{"1":(ctx,owner)=>{c4v0a49.call(owner,ctx,owner);}},"118":{"1":(ctx,owner)=>{c4v0a61.call(owner,ctx,owner);}},"126":{"1":(ctx,owner)=>{c4v0a67.call(owner,ctx,owner);}},"134":{"1":(ctx,owner)=>{c4v0a68.call(owner,ctx,owner);}},"142":{"1":(ctx,owner)=>{c4v0a76.call(owner,ctx,owner);}},"143":{"1":(ctx,owner)=>{c4v0a77.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a78.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v0a79.call(owner,ctx,owner);}},"147":{"1":(ctx,owner)=>{c4v0a80.call(owner,ctx,owner);},"7":(ctx,owner)=>{c4v0a81.call(owner,ctx,owner);}},"154":{"5":(ctx,owner)=>{c4v0a82.call(owner,ctx,owner);}},"155":{"1":(ctx,owner)=>{c4v0a83.call(owner,ctx,owner);}},"163":{"1":(ctx,owner)=>{c4v0a84.call(owner,ctx,owner);}},"270":{"9":(ctx,owner)=>{c4v0a138.call(owner,ctx,owner);}},"277":{"9":(ctx,owner)=>{c4v0a139.call(owner,ctx,owner);}},"282":{"9":(ctx,owner)=>{c4v0a140.call(owner,ctx,owner);}},"287":{"9":(ctx,owner)=>{c4v0a141.call(owner,ctx,owner);}},"292":{"9":(ctx,owner)=>{c4v0a142.call(owner,ctx,owner);}},"301":{"9":(ctx,owner)=>{c4v0a143.call(owner,ctx,owner);}},"306":{"9":(ctx,owner)=>{c4v0a144.call(owner,ctx,owner);}},"315":{"9":(ctx,owner)=>{c4v0a145.call(owner,ctx,owner);}},"328":{"26":(ctx,owner)=>{c4v0a146.call(owner,ctx,owner);}},"343":{"28":(ctx,owner)=>{c4v0a147.call(owner,ctx,owner);}},"358":{"34":(ctx,owner)=>{c4v0a148.call(owner,ctx,owner);}},"372":{"34":(ctx,owner)=>{c4v0a149.call(owner,ctx,owner);}},"386":{"32":(ctx,owner)=>{c4v0a150.call(owner,ctx,owner);}},"404":{"24":(ctx,owner)=>{c4v0a151.call(owner,ctx,owner);}},"418":{"32":(ctx,owner)=>{c4v0a152.call(owner,ctx,owner);}},"434":{"24":(ctx,owner)=>{c4v0a153.call(owner,ctx,owner);}},"456":{"6":(ctx,owner)=>{c4v0a156.call(owner,ctx,owner);},"10":(ctx,owner)=>{c4v0a154.call(owner,ctx,owner);},"24":(ctx,owner)=>{c4v0a155.call(owner,ctx,owner);}},"476":{"4":(ctx,owner)=>{c4v0a160.call(owner,ctx,owner);},"14":(ctx,owner)=>{c4v0a158.call(owner,ctx,owner);},"24":(ctx,owner)=>{c4v0a159.call(owner,ctx,owner);}},"501":{"54":(ctx,owner)=>{c4v0a162.call(owner,ctx,owner);}},"517":{"54":(ctx,owner)=>{c4v0a163.call(owner,ctx,owner);}},"518":{"1":(ctx,owner)=>{c4v0a164.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a165.call(owner,ctx,owner);}},"539":{"1":(ctx,owner)=>{c4v0a166.call(owner,ctx,owner);}},"541":{"1":(ctx,owner)=>{c4v0a167.call(owner,ctx,owner);}},"622":{"19":(ctx,owner)=>{c4v0a168.call(owner,ctx,owner);}},"639":{"19":(ctx,owner)=>{c4v0a169.call(owner,ctx,owner);}},"643":{"17":(ctx,owner)=>{c4v0a170.call(owner,ctx,owner);}},"658":{"11":(ctx,owner)=>{c4v0a171.call(owner,ctx,owner);}},"675":{"11":(ctx,owner)=>{c4v0a173.call(owner,ctx,owner);}},"677":{"1":(ctx,owner)=>{c4v0a174.call(owner,ctx,owner);}},"687":{"12":(ctx,owner)=>{c4v0a175.call(owner,ctx,owner);}},"696":{"12":(ctx,owner)=>{c4v0a176.call(owner,ctx,owner);}},"709":{"22":(ctx,owner)=>{c4v0a177.call(owner,ctx,owner);}},"720":{"22":(ctx,owner)=>{c4v0a178.call(owner,ctx,owner);}},"742":{"18":(ctx,owner)=>{c4v0a179.call(owner,ctx,owner);}},"760":{"18":(ctx,owner)=>{c4v0a180.call(owner,ctx,owner);}},"768":{"9":(ctx,owner)=>{c4v0a181.call(owner,ctx,owner);}},"774":{"9":(ctx,owner)=>{c4v0a182.call(owner,ctx,owner);}},"808":{"22":(ctx,owner)=>{c4v0a184.call(owner,ctx,owner);}},"836":{"22":(ctx,owner)=>{c4v0a185.call(owner,ctx,owner);}},"843":{"9":(ctx,owner)=>{c4v0a186.call(owner,ctx,owner);}},"850":{"9":(ctx,owner)=>{c4v0a187.call(owner,ctx,owner);}},"851":{"137":(ctx,owner)=>{c4v0a188.call(owner,ctx,owner);},"144":(ctx,owner)=>{c4v0a189.call(owner,ctx,owner);}},"872":{"16":(ctx,owner)=>{c4v0a190.call(owner,ctx,owner);}},"878":{"8":(ctx,owner)=>{c4v0a191.call(owner,ctx,owner);}},"884":{"13":(ctx,owner)=>{c4v0a193.call(owner,ctx,owner);}},"895":{"22":(ctx,owner)=>{c4v0a194.call(owner,ctx,owner);}},"905":{"20":(ctx,owner)=>{c4v0a195.call(owner,ctx,owner);}},"910":{"8":(ctx,owner)=>{c4v0a196.call(owner,ctx,owner);}},"922":{"16":(ctx,owner)=>{c4v0a197.call(owner,ctx,owner);}},"928":{"10":(ctx,owner)=>{c4v0a198.call(owner,ctx,owner);}},"945":{"1":(ctx,owner)=>{c4v0a199.call(owner,ctx,owner);}},"962":{"1":(ctx,owner)=>{c4v0a200.call(owner,ctx,owner);},"61":(ctx,owner)=>{c4v0a203.call(owner,ctx,owner);},"120":(ctx,owner)=>{c4v0a201.call(owner,ctx,owner);},"121":(ctx,owner)=>{c4v0a202.call(owner,ctx,owner);}},"1013":{"21":(ctx,owner)=>{c4v0a34.call(owner,ctx,owner);}},"1027":{"21":(ctx,owner)=>{c4v0a35.call(owner,ctx,owner);}},"1032":{"11":(ctx,owner)=>{c4v0a36.call(owner,ctx,owner);}},"1040":{"11":(ctx,owner)=>{c4v0a37.call(owner,ctx,owner);}},"1048":{"12":(ctx,owner)=>{c4v0a38.call(owner,ctx,owner);}},"1055":{"12":(ctx,owner)=>{c4v0a40.call(owner,ctx,owner);}},"1070":{"25":(ctx,owner)=>{c4v0a41.call(owner,ctx,owner);}},"1085":{"25":(ctx,owner)=>{c4v0a42.call(owner,ctx,owner);}},"1097":{"21":(ctx,owner)=>{c4v0a43.call(owner,ctx,owner);}},"1109":{"21":(ctx,owner)=>{c4v0a44.call(owner,ctx,owner);}},"1118":{"11":(ctx,owner)=>{c4v0a45.call(owner,ctx,owner);}},"1125":{"11":(ctx,owner)=>{c4v0a47.call(owner,ctx,owner);}},"1148":{"35":(ctx,owner)=>{c4v0a48.call(owner,ctx,owner);}},"1171":{"35":(ctx,owner)=>{c4v0a50.call(owner,ctx,owner);}},"1177":{"9":(ctx,owner)=>{c4v0a51.call(owner,ctx,owner);}},"1178":{"119":(ctx,owner)=>{c4v0a52.call(owner,ctx,owner);},"126":(ctx,owner)=>{c4v0a53.call(owner,ctx,owner);}},"1179":{"1":(ctx,owner)=>{c4v0a54.call(owner,ctx,owner);}},"1180":{"1":(ctx,owner)=>{c4v0a55.call(owner,ctx,owner);}},"1181":{"1":(ctx,owner)=>{c4v0a56.call(owner,ctx,owner);},"29":(ctx,owner)=>{c4v0a57.call(owner,ctx,owner);},"30":(ctx,owner)=>{c4v0a58.call(owner,ctx,owner);}},"1188":{"1":(ctx,owner)=>{c4v0a59.call(owner,ctx,owner);},"8":(ctx,owner)=>{c4v0a60.call(owner,ctx,owner);}},"1191":{"1":(ctx,owner)=>{c4v0a62.call(owner,ctx,owner);},"8":(ctx,owner)=>{c4v0a63.call(owner,ctx,owner);}},"1194":{"1":(ctx,owner)=>{c4v0a64.call(owner,ctx,owner);},"8":(ctx,owner)=>{c4v0a65.call(owner,ctx,owner);}},"1204":{"1":(ctx,owner)=>{c4v0a66.call(owner,ctx,owner);}},"1417":{"1":(ctx,owner)=>{c4v0a69.call(owner,ctx,owner);},"6":(ctx,owner)=>{c4v0a75.call(owner,ctx,owner);},"18":(ctx,owner)=>{c4v0a70.call(owner,ctx,owner);},"19":(ctx,owner)=>{c4v0a71.call(owner,ctx,owner);},"58":(ctx,owner)=>{c4v0a73.call(owner,ctx,owner);},"59":(ctx,owner)=>{c4v0a74.call(owner,ctx,owner);},"482":(ctx,owner)=>{c4v0a72.call(owner,ctx,owner);}},"1672":{"1602":(ctx,owner)=>{c4v0a85.call(owner,ctx,owner);}},"1980":{"1":(ctx,owner)=>{c4v0a86.call(owner,ctx,owner);},"988":(ctx,owner)=>{c4v0a87.call(owner,ctx,owner);}},"1988":{"1":(ctx,owner)=>{c4v0a88.call(owner,ctx,owner);}},"1991":{"1":(ctx,owner)=>{c4v0a89.call(owner,ctx,owner);}},"1992":{"1":(ctx,owner)=>{c4v0a90.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v0a91.call(owner,ctx,owner);}},"2024":{"1":(ctx,owner)=>{c4v0a92.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a94.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v0a93.call(owner,ctx,owner);}},"2055":{"1":(ctx,owner)=>{c4v0a95.call(owner,ctx,owner);},"34":(ctx,owner)=>{c4v0a96.call(owner,ctx,owner);}},"2059":{"1":(ctx,owner)=>{c4v0a97.call(owner,ctx,owner);}},"2061":{"1":(ctx,owner)=>{c4v0a98.call(owner,ctx,owner);}},"2114":{"1":(ctx,owner)=>{c4v0a99.call(owner,ctx,owner);},"34":(ctx,owner)=>{c4v0a100.call(owner,ctx,owner);},"35":(ctx,owner)=>{c4v0a101.call(owner,ctx,owner);}},"2117":{"1":(ctx,owner)=>{c4v0a102.call(owner,ctx,owner);}},"2121":{"1":(ctx,owner)=>{c4v0a103.call(owner,ctx,owner);}},"2125":{"1":(ctx,owner)=>{c4v0a104.call(owner,ctx,owner);}},"2148":{"1":(ctx,owner)=>{c4v0a105.call(owner,ctx,owner);},"44":(ctx,owner)=>{c4v0a106.call(owner,ctx,owner);}},"2151":{"1":(ctx,owner)=>{c4v0a107.call(owner,ctx,owner);}},"2154":{"1":(ctx,owner)=>{c4v0a108.call(owner,ctx,owner);}},"2180":{"1":(ctx,owner)=>{c4v0a109.call(owner,ctx,owner);},"10":(ctx,owner)=>{c4v0a110.call(owner,ctx,owner);},"16":(ctx,owner)=>{c4v0a111.call(owner,ctx,owner);}},"2182":{"1":(ctx,owner)=>{c4v0a112.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a113.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v0a114.call(owner,ctx,owner);},"4":(ctx,owner)=>{c4v0a115.call(owner,ctx,owner);},"5":(ctx,owner)=>{c4v0a116.call(owner,ctx,owner);}},"2196":{"1":(ctx,owner)=>{c4v0a117.call(owner,ctx,owner);}},"2248":{"1":(ctx,owner)=>{c4v0a118.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a119.call(owner,ctx,owner);}},"2279":{"1":(ctx,owner)=>{c4v0a120.call(owner,ctx,owner);}},"2292":{"1":(ctx,owner)=>{c4v0a121.call(owner,ctx,owner);}},"2293":{"1":(ctx,owner)=>{c4v0a122.call(owner,ctx,owner);}},"2294":{"1":(ctx,owner)=>{c4v0a123.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a125.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v0a124.call(owner,ctx,owner);},"20":(ctx,owner)=>{c4v0a126.call(owner,ctx,owner);}},"2301":{"1":(ctx,owner)=>{c4v0a127.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a130.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v0a132.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v0a128.call(owner,ctx,owner);},"12":(ctx,owner)=>{c4v0a129.call(owner,ctx,owner);},"20":(ctx,owner)=>{c4v0a131.call(owner,ctx,owner);}},"2311":{"1":(ctx,owner)=>{c4v0a133.call(owner,ctx,owner);}},"2312":{"1":(ctx,owner)=>{c4v0a134.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a136.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v0a135.call(owner,ctx,owner);},"20":(ctx,owner)=>{c4v0a137.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c4v0a208.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v0a209.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v0a210.call(owner,ctx,owner);},"4":(ctx,owner)=>{c4v0a211.call(owner,ctx,owner);}}},frameActions:{"47":{"1":[c4v0a157]},"48":{"1":[c4v0a161]},"65":{"1":[c4v0a172]},"78":{"1":[c4v0a183]},"88":{"1":[c4v0a192]},"97":{"1":[c4v0a204]},"98":{"1":[c4v0a205],"2":[c4v0a206],"3":[c4v0a207]},"105":{"1":[c4v0a39]},"112":{"1":[c4v0a46]},"117":{"1":[c4v0a49]},"118":{"1":[c4v0a61]},"126":{"1":[c4v0a67]},"134":{"1":[c4v0a68]},"142":{"1":[c4v0a76]},"143":{"1":[c4v0a77],"2":[c4v0a78],"3":[c4v0a79]},"147":{"1":[c4v0a80],"7":[c4v0a81]},"154":{"5":[c4v0a82]},"155":{"1":[c4v0a83]},"163":{"1":[c4v0a84]},"270":{"9":[c4v0a138]},"277":{"9":[c4v0a139]},"282":{"9":[c4v0a140]},"287":{"9":[c4v0a141]},"292":{"9":[c4v0a142]},"301":{"9":[c4v0a143]},"306":{"9":[c4v0a144]},"315":{"9":[c4v0a145]},"328":{"26":[c4v0a146]},"343":{"28":[c4v0a147]},"358":{"34":[c4v0a148]},"372":{"34":[c4v0a149]},"386":{"32":[c4v0a150]},"404":{"24":[c4v0a151]},"418":{"32":[c4v0a152]},"434":{"24":[c4v0a153]},"456":{"6":[c4v0a156],"10":[c4v0a154],"24":[c4v0a155]},"476":{"4":[c4v0a160],"14":[c4v0a158],"24":[c4v0a159]},"501":{"54":[c4v0a162]},"517":{"54":[c4v0a163]},"518":{"1":[c4v0a164],"2":[c4v0a165]},"539":{"1":[c4v0a166]},"541":{"1":[c4v0a167]},"622":{"19":[c4v0a168]},"639":{"19":[c4v0a169]},"643":{"17":[c4v0a170]},"658":{"11":[c4v0a171]},"675":{"11":[c4v0a173]},"677":{"1":[c4v0a174]},"687":{"12":[c4v0a175]},"696":{"12":[c4v0a176]},"709":{"22":[c4v0a177]},"720":{"22":[c4v0a178]},"742":{"18":[c4v0a179]},"760":{"18":[c4v0a180]},"768":{"9":[c4v0a181]},"774":{"9":[c4v0a182]},"808":{"22":[c4v0a184]},"836":{"22":[c4v0a185]},"843":{"9":[c4v0a186]},"850":{"9":[c4v0a187]},"851":{"137":[c4v0a188],"144":[c4v0a189]},"872":{"16":[c4v0a190]},"878":{"8":[c4v0a191]},"884":{"13":[c4v0a193]},"895":{"22":[c4v0a194]},"905":{"20":[c4v0a195]},"910":{"8":[c4v0a196]},"922":{"16":[c4v0a197]},"928":{"10":[c4v0a198]},"945":{"1":[c4v0a199]},"962":{"1":[c4v0a200],"61":[c4v0a203],"120":[c4v0a201],"121":[c4v0a202]},"1013":{"21":[c4v0a34]},"1027":{"21":[c4v0a35]},"1032":{"11":[c4v0a36]},"1040":{"11":[c4v0a37]},"1048":{"12":[c4v0a38]},"1055":{"12":[c4v0a40]},"1070":{"25":[c4v0a41]},"1085":{"25":[c4v0a42]},"1097":{"21":[c4v0a43]},"1109":{"21":[c4v0a44]},"1118":{"11":[c4v0a45]},"1125":{"11":[c4v0a47]},"1148":{"35":[c4v0a48]},"1171":{"35":[c4v0a50]},"1177":{"9":[c4v0a51]},"1178":{"119":[c4v0a52],"126":[c4v0a53]},"1179":{"1":[c4v0a54]},"1180":{"1":[c4v0a55]},"1181":{"1":[c4v0a56],"29":[c4v0a57],"30":[c4v0a58]},"1188":{"1":[c4v0a59],"8":[c4v0a60]},"1191":{"1":[c4v0a62],"8":[c4v0a63]},"1194":{"1":[c4v0a64],"8":[c4v0a65]},"1204":{"1":[c4v0a66]},"1417":{"1":[c4v0a69],"6":[c4v0a75],"18":[c4v0a70],"19":[c4v0a71],"58":[c4v0a73],"59":[c4v0a74],"482":[c4v0a72]},"1672":{"1602":[c4v0a85]},"1980":{"1":[c4v0a86],"988":[c4v0a87]},"1988":{"1":[c4v0a88]},"1991":{"1":[c4v0a89]},"1992":{"1":[c4v0a90],"11":[c4v0a91]},"2024":{"1":[c4v0a92],"2":[c4v0a94],"11":[c4v0a93]},"2055":{"1":[c4v0a95],"34":[c4v0a96]},"2059":{"1":[c4v0a97]},"2061":{"1":[c4v0a98]},"2114":{"1":[c4v0a99],"34":[c4v0a100],"35":[c4v0a101]},"2117":{"1":[c4v0a102]},"2121":{"1":[c4v0a103]},"2125":{"1":[c4v0a104]},"2148":{"1":[c4v0a105],"44":[c4v0a106]},"2151":{"1":[c4v0a107]},"2154":{"1":[c4v0a108]},"2180":{"1":[c4v0a109],"10":[c4v0a110],"16":[c4v0a111]},"2182":{"1":[c4v0a112],"2":[c4v0a113],"3":[c4v0a114],"4":[c4v0a115],"5":[c4v0a116]},"2196":{"1":[c4v0a117]},"2248":{"1":[c4v0a118],"2":[c4v0a119]},"2279":{"1":[c4v0a120]},"2292":{"1":[c4v0a121]},"2293":{"1":[c4v0a122]},"2294":{"1":[c4v0a123],"2":[c4v0a125],"11":[c4v0a124],"20":[c4v0a126]},"2301":{"1":[c4v0a127],"2":[c4v0a130],"3":[c4v0a132],"11":[c4v0a128],"12":[c4v0a129],"20":[c4v0a131]},"2311":{"1":[c4v0a133]},"2312":{"1":[c4v0a134],"2":[c4v0a136],"11":[c4v0a135],"20":[c4v0a137]},"main":{"1":[c4v0a208],"2":[c4v0a209],"3":[c4v0a210],"4":[c4v0a211]}},buttons:{"35":{"press":(ctx,owner)=>{c4v0a29.call(owner,ctx,owner);},"release":(ctx,owner)=>{c4v0a30.call(owner,ctx,owner);}},"40":{"release":(ctx,owner)=>{c4v0a31.call(owner,ctx,owner);}},"61":{"release":(ctx,owner)=>{c4v0a32.call(owner,ctx,owner);}},"63":{"release":(ctx,owner)=>{c4v0a33.call(owner,ctx,owner);}},"1207":{"release":(ctx,owner)=>{c4v0a0.call(owner,ctx,owner);}},"1208":{"release":(ctx,owner)=>{c4v0a1.call(owner,ctx,owner);}},"1209":{"release":(ctx,owner)=>{c4v0a2.call(owner,ctx,owner);}},"1210":{"release":(ctx,owner)=>{c4v0a3.call(owner,ctx,owner);}},"1211":{"release":(ctx,owner)=>{c4v0a4.call(owner,ctx,owner);}},"1212":{"release":(ctx,owner)=>{c4v0a5.call(owner,ctx,owner);}},"1213":{"release":(ctx,owner)=>{c4v0a6.call(owner,ctx,owner);}},"1214":{"release":(ctx,owner)=>{c4v0a7.call(owner,ctx,owner);}},"1983":{"release":(ctx,owner)=>{c4v0a8.call(owner,ctx,owner);}},"2002":{"release":(ctx,owner)=>{c4v0a9.call(owner,ctx,owner);}},"2008":{"release":(ctx,owner)=>{c4v0a10.call(owner,ctx,owner);}},"2013":{"release":(ctx,owner)=>{c4v0a11.call(owner,ctx,owner);}},"2022":{"release":(ctx,owner)=>{c4v0a12.call(owner,ctx,owner);}},"2188":{"release":(ctx,owner)=>{c4v0a13.call(owner,ctx,owner);}},"2234":{"release":(ctx,owner)=>{c4v0a14.call(owner,ctx,owner);}},"2235":{"release":(ctx,owner)=>{c4v0a15.call(owner,ctx,owner);}},"2236":{"release":(ctx,owner)=>{c4v0a16.call(owner,ctx,owner);}},"2237":{"release":(ctx,owner)=>{c4v0a17.call(owner,ctx,owner);}},"2238":{"release":(ctx,owner)=>{c4v0a18.call(owner,ctx,owner);}},"2259":{"release":(ctx,owner)=>{c4v0a19.call(owner,ctx,owner);}},"2262":{"release":(ctx,owner)=>{c4v0a20.call(owner,ctx,owner);}},"2266":{"release":(ctx,owner)=>{c4v0a21.call(owner,ctx,owner);}},"2268":{"release":(ctx,owner)=>{c4v0a22.call(owner,ctx,owner);}},"2270":{"release":(ctx,owner)=>{c4v0a23.call(owner,ctx,owner);}},"2272":{"release":(ctx,owner)=>{c4v0a24.call(owner,ctx,owner);}},"2278":{"press":(ctx,owner)=>{c4v0a25.call(owner,ctx,owner);},"release":(ctx,owner)=>{c4v0a26.call(owner,ctx,owner);}},"2303":{"release":(ctx,owner)=>{c4v0a27.call(owner,ctx,owner);}},"2320":{"release":(ctx,owner)=>{c4v0a28.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"35":[],"40":[],"47":["component","track_mc"],"48":[],"61":["qqxflash_home"],"63":[],"65":[],"78":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"88":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"97":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"98":[],"105":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"112":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"117":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"118":[],"126":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"134":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"142":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"143":[],"147":[],"154":[],"155":["_totalframes"],"163":["_x","_y","onEnterFrame","x","y"],"270":[],"277":[],"282":[],"287":[],"292":[],"301":[],"306":[],"315":[],"328":[],"343":[],"358":[],"372":[],"386":[],"404":[],"418":[],"434":[],"456":["items"],"476":["items"],"501":[],"517":[],"518":[],"539":[],"541":["_visible"],"622":[],"639":[],"643":[],"658":[],"675":[],"677":["_visible"],"687":[],"696":[],"709":[],"720":[],"742":[],"760":[],"768":[],"774":[],"808":[],"836":[],"843":[],"850":[],"851":[],"872":[],"878":[],"884":[],"895":[],"905":[],"910":[],"922":[],"928":[],"945":[],"962":[],"1013":[],"1027":[],"1032":[],"1040":[],"1048":[],"1055":[],"1070":[],"1085":[],"1097":[],"1109":[],"1118":[],"1125":[],"1148":[],"1171":[],"1177":[],"1178":[],"1179":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1180":["tt"],"1181":["skipFrame"],"1188":["_totalframes","skipFrame"],"1191":["_totalframes","skipFrame"],"1194":["_totalframes","skipFrame"],"1204":[],"1207":["b1"],"1208":["b1"],"1209":["b2"],"1210":["b2"],"1211":["b3"],"1212":["b3"],"1213":["b4"],"1214":["b4"],"1417":["_totalframes","b1","b2","b3","b4","mc","mcr","skipFrame"],"1672":[],"1980":["_totalframes","skipFrame"],"1983":["aim"],"1988":[],"1991":[],"1992":["_currentframe","back","onEnterFrame"],"2002":[],"2008":["helper"],"2013":[],"2022":[],"2024":["btn"],"2055":[],"2059":["_visible"],"2061":["_visible","hitted","onEnterFrame","ox","oy"],"2114":[],"2117":[],"2121":[],"2125":[],"2148":[],"2151":[],"2154":["_visible"],"2180":[],"2182":["_loc0_","_sdoor","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block2","block3","blocks","blockx","blocky","changeMovies","changes","door","event15","event2","event3","events","flag","head1","head2","head3","hitted","hitter","hitter1","i","light1","light2","map","minScale","player","playerScale","sdoor","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tx","ty"],"2188":["gp"],"2196":[],"2234":[],"2235":[],"2236":[],"2237":[],"2238":[],"2248":["actKey","downKey","leftKey","rightKey","upKey"],"2259":["_quality"],"2262":["_quality"],"2266":["_quality"],"2268":[],"2270":["allShow"],"2272":["allShow"],"2278":["draging","onEnterFrame"],"2279":["_x","bb","draging","onEnterFrame"],"2292":["btn"],"2293":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2294":["btn","gp"],"2301":["i","onEnterFrame"],"2303":["aim"],"2311":[],"2312":["delay","fadeOut","item"],"2320":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","head1","head2","head3","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:3421040,frames:{"15":{"1":(ctx,owner)=>{c4v1a285.call(owner,ctx,owner);}},"28":{"1":(ctx,owner)=>{c4v1a350.call(owner,ctx,owner);}},"38":{"1":(ctx,owner)=>{c4v1a357.call(owner,ctx,owner);}},"47":{"1":(ctx,owner)=>{c4v1a361.call(owner,ctx,owner);}},"48":{"1":(ctx,owner)=>{c4v1a365.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a366.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v1a367.call(owner,ctx,owner);}},"55":{"1":(ctx,owner)=>{c4v1a370.call(owner,ctx,owner);}},"62":{"1":(ctx,owner)=>{c4v1a373.call(owner,ctx,owner);}},"67":{"1":(ctx,owner)=>{c4v1a378.call(owner,ctx,owner);}},"68":{"1":(ctx,owner)=>{c4v1a381.call(owner,ctx,owner);}},"76":{"1":(ctx,owner)=>{c4v1a385.call(owner,ctx,owner);}},"84":{"1":(ctx,owner)=>{c4v1a390.call(owner,ctx,owner);}},"92":{"1":(ctx,owner)=>{c4v1a400.call(owner,ctx,owner);}},"93":{"1":(ctx,owner)=>{c4v1a404.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a405.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v1a406.call(owner,ctx,owner);}},"98":{"1":(ctx,owner)=>{c4v1a413.call(owner,ctx,owner);},"7":(ctx,owner)=>{c4v1a414.call(owner,ctx,owner);}},"105":{"5":(ctx,owner)=>{c4v1a248.call(owner,ctx,owner);}},"106":{"1":(ctx,owner)=>{c4v1a252.call(owner,ctx,owner);}},"116":{"1":(ctx,owner)=>{c4v1a260.call(owner,ctx,owner);}},"223":{"9":(ctx,owner)=>{c4v1a313.call(owner,ctx,owner);}},"230":{"9":(ctx,owner)=>{c4v1a323.call(owner,ctx,owner);}},"235":{"10":(ctx,owner)=>{c4v1a326.call(owner,ctx,owner);}},"240":{"9":(ctx,owner)=>{c4v1a345.call(owner,ctx,owner);}},"245":{"9":(ctx,owner)=>{c4v1a346.call(owner,ctx,owner);}},"254":{"9":(ctx,owner)=>{c4v1a347.call(owner,ctx,owner);}},"259":{"9":(ctx,owner)=>{c4v1a348.call(owner,ctx,owner);}},"278":{"9":(ctx,owner)=>{c4v1a349.call(owner,ctx,owner);}},"291":{"26":(ctx,owner)=>{c4v1a351.call(owner,ctx,owner);}},"315":{"26":(ctx,owner)=>{c4v1a352.call(owner,ctx,owner);}},"329":{"28":(ctx,owner)=>{c4v1a353.call(owner,ctx,owner);}},"343":{"28":(ctx,owner)=>{c4v1a354.call(owner,ctx,owner);}},"357":{"32":(ctx,owner)=>{c4v1a355.call(owner,ctx,owner);}},"373":{"28":(ctx,owner)=>{c4v1a356.call(owner,ctx,owner);}},"388":{"32":(ctx,owner)=>{c4v1a358.call(owner,ctx,owner);}},"404":{"28":(ctx,owner)=>{c4v1a359.call(owner,ctx,owner);}},"454":{"54":(ctx,owner)=>{c4v1a360.call(owner,ctx,owner);}},"472":{"54":(ctx,owner)=>{c4v1a362.call(owner,ctx,owner);}},"473":{"1":(ctx,owner)=>{c4v1a363.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a364.call(owner,ctx,owner);}},"494":{"1":(ctx,owner)=>{c4v1a368.call(owner,ctx,owner);}},"496":{"1":(ctx,owner)=>{c4v1a369.call(owner,ctx,owner);}},"599":{"19":(ctx,owner)=>{c4v1a371.call(owner,ctx,owner);}},"618":{"19":(ctx,owner)=>{c4v1a372.call(owner,ctx,owner);}},"621":{"17":(ctx,owner)=>{c4v1a374.call(owner,ctx,owner);}},"643":{"11":(ctx,owner)=>{c4v1a375.call(owner,ctx,owner);}},"662":{"11":(ctx,owner)=>{c4v1a376.call(owner,ctx,owner);}},"664":{"1":(ctx,owner)=>{c4v1a377.call(owner,ctx,owner);}},"676":{"12":(ctx,owner)=>{c4v1a379.call(owner,ctx,owner);}},"685":{"12":(ctx,owner)=>{c4v1a380.call(owner,ctx,owner);}},"698":{"22":(ctx,owner)=>{c4v1a382.call(owner,ctx,owner);}},"713":{"22":(ctx,owner)=>{c4v1a383.call(owner,ctx,owner);}},"736":{"18":(ctx,owner)=>{c4v1a384.call(owner,ctx,owner);}},"764":{"18":(ctx,owner)=>{c4v1a386.call(owner,ctx,owner);}},"772":{"9":(ctx,owner)=>{c4v1a387.call(owner,ctx,owner);}},"781":{"9":(ctx,owner)=>{c4v1a388.call(owner,ctx,owner);}},"819":{"22":(ctx,owner)=>{c4v1a389.call(owner,ctx,owner);}},"850":{"22":(ctx,owner)=>{c4v1a391.call(owner,ctx,owner);}},"857":{"9":(ctx,owner)=>{c4v1a392.call(owner,ctx,owner);}},"867":{"9":(ctx,owner)=>{c4v1a393.call(owner,ctx,owner);}},"868":{"137":(ctx,owner)=>{c4v1a394.call(owner,ctx,owner);},"144":(ctx,owner)=>{c4v1a395.call(owner,ctx,owner);}},"889":{"16":(ctx,owner)=>{c4v1a396.call(owner,ctx,owner);}},"895":{"8":(ctx,owner)=>{c4v1a397.call(owner,ctx,owner);}},"901":{"13":(ctx,owner)=>{c4v1a398.call(owner,ctx,owner);}},"912":{"22":(ctx,owner)=>{c4v1a399.call(owner,ctx,owner);}},"922":{"20":(ctx,owner)=>{c4v1a401.call(owner,ctx,owner);}},"928":{"8":(ctx,owner)=>{c4v1a402.call(owner,ctx,owner);}},"939":{"16":(ctx,owner)=>{c4v1a403.call(owner,ctx,owner);}},"945":{"10":(ctx,owner)=>{c4v1a407.call(owner,ctx,owner);}},"962":{"1":(ctx,owner)=>{c4v1a408.call(owner,ctx,owner);}},"979":{"1":(ctx,owner)=>{c4v1a409.call(owner,ctx,owner);},"61":(ctx,owner)=>{c4v1a412.call(owner,ctx,owner);},"120":(ctx,owner)=>{c4v1a410.call(owner,ctx,owner);},"121":(ctx,owner)=>{c4v1a411.call(owner,ctx,owner);}},"1030":{"21":(ctx,owner)=>{c4v1a246.call(owner,ctx,owner);}},"1044":{"21":(ctx,owner)=>{c4v1a247.call(owner,ctx,owner);}},"1050":{"11":(ctx,owner)=>{c4v1a249.call(owner,ctx,owner);}},"1058":{"11":(ctx,owner)=>{c4v1a250.call(owner,ctx,owner);}},"1066":{"12":(ctx,owner)=>{c4v1a251.call(owner,ctx,owner);}},"1073":{"12":(ctx,owner)=>{c4v1a253.call(owner,ctx,owner);}},"1088":{"25":(ctx,owner)=>{c4v1a254.call(owner,ctx,owner);}},"1103":{"25":(ctx,owner)=>{c4v1a255.call(owner,ctx,owner);}},"1115":{"21":(ctx,owner)=>{c4v1a256.call(owner,ctx,owner);}},"1127":{"21":(ctx,owner)=>{c4v1a257.call(owner,ctx,owner);}},"1136":{"11":(ctx,owner)=>{c4v1a258.call(owner,ctx,owner);}},"1144":{"11":(ctx,owner)=>{c4v1a259.call(owner,ctx,owner);}},"1167":{"35":(ctx,owner)=>{c4v1a261.call(owner,ctx,owner);}},"1190":{"35":(ctx,owner)=>{c4v1a262.call(owner,ctx,owner);}},"1196":{"9":(ctx,owner)=>{c4v1a263.call(owner,ctx,owner);}},"1197":{"119":(ctx,owner)=>{c4v1a264.call(owner,ctx,owner);},"126":(ctx,owner)=>{c4v1a265.call(owner,ctx,owner);}},"1198":{"1":(ctx,owner)=>{c4v1a266.call(owner,ctx,owner);}},"1199":{"1":(ctx,owner)=>{c4v1a267.call(owner,ctx,owner);}},"1200":{"1":(ctx,owner)=>{c4v1a268.call(owner,ctx,owner);},"29":(ctx,owner)=>{c4v1a269.call(owner,ctx,owner);},"30":(ctx,owner)=>{c4v1a270.call(owner,ctx,owner);}},"1207":{"1":(ctx,owner)=>{c4v1a271.call(owner,ctx,owner);},"8":(ctx,owner)=>{c4v1a272.call(owner,ctx,owner);}},"1210":{"1":(ctx,owner)=>{c4v1a273.call(owner,ctx,owner);},"8":(ctx,owner)=>{c4v1a274.call(owner,ctx,owner);}},"1213":{"1":(ctx,owner)=>{c4v1a275.call(owner,ctx,owner);},"8":(ctx,owner)=>{c4v1a276.call(owner,ctx,owner);}},"1223":{"1":(ctx,owner)=>{c4v1a277.call(owner,ctx,owner);}},"1445":{"1":(ctx,owner)=>{c4v1a278.call(owner,ctx,owner);},"6":(ctx,owner)=>{c4v1a284.call(owner,ctx,owner);},"18":(ctx,owner)=>{c4v1a279.call(owner,ctx,owner);},"19":(ctx,owner)=>{c4v1a280.call(owner,ctx,owner);},"58":(ctx,owner)=>{c4v1a282.call(owner,ctx,owner);},"59":(ctx,owner)=>{c4v1a283.call(owner,ctx,owner);},"482":(ctx,owner)=>{c4v1a281.call(owner,ctx,owner);}},"1700":{"1598":(ctx,owner)=>{c4v1a286.call(owner,ctx,owner);}},"2007":{"1":(ctx,owner)=>{c4v1a287.call(owner,ctx,owner);},"988":(ctx,owner)=>{c4v1a288.call(owner,ctx,owner);}},"2015":{"1":(ctx,owner)=>{c4v1a289.call(owner,ctx,owner);}},"2018":{"1":(ctx,owner)=>{c4v1a290.call(owner,ctx,owner);}},"2019":{"1":(ctx,owner)=>{c4v1a291.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v1a292.call(owner,ctx,owner);}},"2022":{"1":(ctx,owner)=>{c4v1a293.call(owner,ctx,owner);}},"2023":{"1":(ctx,owner)=>{c4v1a294.call(owner,ctx,owner);}},"2099":{"1":(ctx,owner)=>{c4v1a295.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a297.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v1a296.call(owner,ctx,owner);}},"2124":{"24":(ctx,owner)=>{c4v1a298.call(owner,ctx,owner);}},"2129":{"1":(ctx,owner)=>{c4v1a299.call(owner,ctx,owner);},"34":(ctx,owner)=>{c4v1a300.call(owner,ctx,owner);}},"2133":{"1":(ctx,owner)=>{c4v1a301.call(owner,ctx,owner);}},"2135":{"1":(ctx,owner)=>{c4v1a302.call(owner,ctx,owner);}},"2188":{"1":(ctx,owner)=>{c4v1a303.call(owner,ctx,owner);},"34":(ctx,owner)=>{c4v1a304.call(owner,ctx,owner);},"35":(ctx,owner)=>{c4v1a305.call(owner,ctx,owner);}},"2191":{"1":(ctx,owner)=>{c4v1a306.call(owner,ctx,owner);}},"2195":{"1":(ctx,owner)=>{c4v1a307.call(owner,ctx,owner);}},"2199":{"1":(ctx,owner)=>{c4v1a308.call(owner,ctx,owner);}},"2222":{"1":(ctx,owner)=>{c4v1a309.call(owner,ctx,owner);},"44":(ctx,owner)=>{c4v1a310.call(owner,ctx,owner);}},"2225":{"1":(ctx,owner)=>{c4v1a311.call(owner,ctx,owner);}},"2228":{"1":(ctx,owner)=>{c4v1a312.call(owner,ctx,owner);}},"2254":{"1":(ctx,owner)=>{c4v1a314.call(owner,ctx,owner);},"10":(ctx,owner)=>{c4v1a315.call(owner,ctx,owner);},"16":(ctx,owner)=>{c4v1a316.call(owner,ctx,owner);}},"2256":{"1":(ctx,owner)=>{c4v1a317.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a318.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v1a319.call(owner,ctx,owner);},"4":(ctx,owner)=>{c4v1a320.call(owner,ctx,owner);},"5":(ctx,owner)=>{c4v1a321.call(owner,ctx,owner);}},"2270":{"1":(ctx,owner)=>{c4v1a322.call(owner,ctx,owner);}},"2330":{"1":(ctx,owner)=>{c4v1a324.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a325.call(owner,ctx,owner);}},"2361":{"1":(ctx,owner)=>{c4v1a327.call(owner,ctx,owner);}},"2374":{"1":(ctx,owner)=>{c4v1a328.call(owner,ctx,owner);}},"2375":{"1":(ctx,owner)=>{c4v1a329.call(owner,ctx,owner);}},"2376":{"1":(ctx,owner)=>{c4v1a330.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a332.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v1a331.call(owner,ctx,owner);},"20":(ctx,owner)=>{c4v1a333.call(owner,ctx,owner);}},"2383":{"1":(ctx,owner)=>{c4v1a334.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a337.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v1a339.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v1a335.call(owner,ctx,owner);},"12":(ctx,owner)=>{c4v1a336.call(owner,ctx,owner);},"20":(ctx,owner)=>{c4v1a338.call(owner,ctx,owner);}},"2393":{"1":(ctx,owner)=>{c4v1a340.call(owner,ctx,owner);}},"2394":{"1":(ctx,owner)=>{c4v1a341.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a343.call(owner,ctx,owner);},"11":(ctx,owner)=>{c4v1a342.call(owner,ctx,owner);},"20":(ctx,owner)=>{c4v1a344.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c4v1a415.call(owner,ctx,owner);},"2":(ctx,owner)=>{c4v1a416.call(owner,ctx,owner);},"3":(ctx,owner)=>{c4v1a417.call(owner,ctx,owner);},"4":(ctx,owner)=>{c4v1a418.call(owner,ctx,owner);}}},frameActions:{"15":{"1":[c4v1a285]},"28":{"1":[c4v1a350]},"38":{"1":[c4v1a357]},"47":{"1":[c4v1a361]},"48":{"1":[c4v1a365],"2":[c4v1a366],"3":[c4v1a367]},"55":{"1":[c4v1a370]},"62":{"1":[c4v1a373]},"67":{"1":[c4v1a378]},"68":{"1":[c4v1a381]},"76":{"1":[c4v1a385]},"84":{"1":[c4v1a390]},"92":{"1":[c4v1a400]},"93":{"1":[c4v1a404],"2":[c4v1a405],"3":[c4v1a406]},"98":{"1":[c4v1a413],"7":[c4v1a414]},"105":{"5":[c4v1a248]},"106":{"1":[c4v1a252]},"116":{"1":[c4v1a260]},"223":{"9":[c4v1a313]},"230":{"9":[c4v1a323]},"235":{"10":[c4v1a326]},"240":{"9":[c4v1a345]},"245":{"9":[c4v1a346]},"254":{"9":[c4v1a347]},"259":{"9":[c4v1a348]},"278":{"9":[c4v1a349]},"291":{"26":[c4v1a351]},"315":{"26":[c4v1a352]},"329":{"28":[c4v1a353]},"343":{"28":[c4v1a354]},"357":{"32":[c4v1a355]},"373":{"28":[c4v1a356]},"388":{"32":[c4v1a358]},"404":{"28":[c4v1a359]},"454":{"54":[c4v1a360]},"472":{"54":[c4v1a362]},"473":{"1":[c4v1a363],"2":[c4v1a364]},"494":{"1":[c4v1a368]},"496":{"1":[c4v1a369]},"599":{"19":[c4v1a371]},"618":{"19":[c4v1a372]},"621":{"17":[c4v1a374]},"643":{"11":[c4v1a375]},"662":{"11":[c4v1a376]},"664":{"1":[c4v1a377]},"676":{"12":[c4v1a379]},"685":{"12":[c4v1a380]},"698":{"22":[c4v1a382]},"713":{"22":[c4v1a383]},"736":{"18":[c4v1a384]},"764":{"18":[c4v1a386]},"772":{"9":[c4v1a387]},"781":{"9":[c4v1a388]},"819":{"22":[c4v1a389]},"850":{"22":[c4v1a391]},"857":{"9":[c4v1a392]},"867":{"9":[c4v1a393]},"868":{"137":[c4v1a394],"144":[c4v1a395]},"889":{"16":[c4v1a396]},"895":{"8":[c4v1a397]},"901":{"13":[c4v1a398]},"912":{"22":[c4v1a399]},"922":{"20":[c4v1a401]},"928":{"8":[c4v1a402]},"939":{"16":[c4v1a403]},"945":{"10":[c4v1a407]},"962":{"1":[c4v1a408]},"979":{"1":[c4v1a409],"61":[c4v1a412],"120":[c4v1a410],"121":[c4v1a411]},"1030":{"21":[c4v1a246]},"1044":{"21":[c4v1a247]},"1050":{"11":[c4v1a249]},"1058":{"11":[c4v1a250]},"1066":{"12":[c4v1a251]},"1073":{"12":[c4v1a253]},"1088":{"25":[c4v1a254]},"1103":{"25":[c4v1a255]},"1115":{"21":[c4v1a256]},"1127":{"21":[c4v1a257]},"1136":{"11":[c4v1a258]},"1144":{"11":[c4v1a259]},"1167":{"35":[c4v1a261]},"1190":{"35":[c4v1a262]},"1196":{"9":[c4v1a263]},"1197":{"119":[c4v1a264],"126":[c4v1a265]},"1198":{"1":[c4v1a266]},"1199":{"1":[c4v1a267]},"1200":{"1":[c4v1a268],"29":[c4v1a269],"30":[c4v1a270]},"1207":{"1":[c4v1a271],"8":[c4v1a272]},"1210":{"1":[c4v1a273],"8":[c4v1a274]},"1213":{"1":[c4v1a275],"8":[c4v1a276]},"1223":{"1":[c4v1a277]},"1445":{"1":[c4v1a278],"6":[c4v1a284],"18":[c4v1a279],"19":[c4v1a280],"58":[c4v1a282],"59":[c4v1a283],"482":[c4v1a281]},"1700":{"1598":[c4v1a286]},"2007":{"1":[c4v1a287],"988":[c4v1a288]},"2015":{"1":[c4v1a289]},"2018":{"1":[c4v1a290]},"2019":{"1":[c4v1a291],"11":[c4v1a292]},"2022":{"1":[c4v1a293]},"2023":{"1":[c4v1a294]},"2099":{"1":[c4v1a295],"2":[c4v1a297],"11":[c4v1a296]},"2124":{"24":[c4v1a298]},"2129":{"1":[c4v1a299],"34":[c4v1a300]},"2133":{"1":[c4v1a301]},"2135":{"1":[c4v1a302]},"2188":{"1":[c4v1a303],"34":[c4v1a304],"35":[c4v1a305]},"2191":{"1":[c4v1a306]},"2195":{"1":[c4v1a307]},"2199":{"1":[c4v1a308]},"2222":{"1":[c4v1a309],"44":[c4v1a310]},"2225":{"1":[c4v1a311]},"2228":{"1":[c4v1a312]},"2254":{"1":[c4v1a314],"10":[c4v1a315],"16":[c4v1a316]},"2256":{"1":[c4v1a317],"2":[c4v1a318],"3":[c4v1a319],"4":[c4v1a320],"5":[c4v1a321]},"2270":{"1":[c4v1a322]},"2330":{"1":[c4v1a324],"2":[c4v1a325]},"2361":{"1":[c4v1a327]},"2374":{"1":[c4v1a328]},"2375":{"1":[c4v1a329]},"2376":{"1":[c4v1a330],"2":[c4v1a332],"11":[c4v1a331],"20":[c4v1a333]},"2383":{"1":[c4v1a334],"2":[c4v1a337],"3":[c4v1a339],"11":[c4v1a335],"12":[c4v1a336],"20":[c4v1a338]},"2393":{"1":[c4v1a340]},"2394":{"1":[c4v1a341],"2":[c4v1a343],"11":[c4v1a342],"20":[c4v1a344]},"main":{"1":[c4v1a415],"2":[c4v1a416],"3":[c4v1a417],"4":[c4v1a418]}},buttons:{"1226":{"release":(ctx,owner)=>{c4v1a212.call(owner,ctx,owner);}},"1227":{"release":(ctx,owner)=>{c4v1a213.call(owner,ctx,owner);}},"1228":{"release":(ctx,owner)=>{c4v1a214.call(owner,ctx,owner);}},"1229":{"release":(ctx,owner)=>{c4v1a215.call(owner,ctx,owner);}},"1230":{"release":(ctx,owner)=>{c4v1a216.call(owner,ctx,owner);}},"1231":{"release":(ctx,owner)=>{c4v1a217.call(owner,ctx,owner);}},"1232":{"release":(ctx,owner)=>{c4v1a218.call(owner,ctx,owner);}},"1233":{"release":(ctx,owner)=>{c4v1a219.call(owner,ctx,owner);}},"2010":{"release":(ctx,owner)=>{c4v1a220.call(owner,ctx,owner);}},"2043":{"press":(ctx,owner)=>{c4v1a221.call(owner,ctx,owner);},"release":(ctx,owner)=>{c4v1a222.call(owner,ctx,owner);}},"2048":{"release":(ctx,owner)=>{c4v1a223.call(owner,ctx,owner);}},"2064":{"release":(ctx,owner)=>{c4v1a224.call(owner,ctx,owner);}},"2066":{"release":(ctx,owner)=>{c4v1a225.call(owner,ctx,owner);}},"2077":{"release":(ctx,owner)=>{c4v1a226.call(owner,ctx,owner);}},"2083":{"release":(ctx,owner)=>{c4v1a227.call(owner,ctx,owner);}},"2088":{"release":(ctx,owner)=>{c4v1a228.call(owner,ctx,owner);}},"2097":{"release":(ctx,owner)=>{c4v1a229.call(owner,ctx,owner);}},"2262":{"release":(ctx,owner)=>{c4v1a230.call(owner,ctx,owner);}},"2316":{"release":(ctx,owner)=>{c4v1a231.call(owner,ctx,owner);}},"2317":{"release":(ctx,owner)=>{c4v1a232.call(owner,ctx,owner);}},"2318":{"release":(ctx,owner)=>{c4v1a233.call(owner,ctx,owner);}},"2319":{"release":(ctx,owner)=>{c4v1a234.call(owner,ctx,owner);}},"2320":{"release":(ctx,owner)=>{c4v1a235.call(owner,ctx,owner);}},"2341":{"release":(ctx,owner)=>{c4v1a236.call(owner,ctx,owner);}},"2344":{"release":(ctx,owner)=>{c4v1a237.call(owner,ctx,owner);}},"2348":{"release":(ctx,owner)=>{c4v1a238.call(owner,ctx,owner);}},"2350":{"release":(ctx,owner)=>{c4v1a239.call(owner,ctx,owner);}},"2352":{"release":(ctx,owner)=>{c4v1a240.call(owner,ctx,owner);}},"2354":{"release":(ctx,owner)=>{c4v1a241.call(owner,ctx,owner);}},"2360":{"press":(ctx,owner)=>{c4v1a242.call(owner,ctx,owner);},"release":(ctx,owner)=>{c4v1a243.call(owner,ctx,owner);}},"2385":{"release":(ctx,owner)=>{c4v1a244.call(owner,ctx,owner);}},"2402":{"release":(ctx,owner)=>{c4v1a245.call(owner,ctx,owner);}}},clips:[],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"15":[],"28":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"38":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"47":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"48":[],"55":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"62":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"67":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"68":[],"76":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"84":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"92":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"93":[],"98":[],"105":[],"106":["_totalframes"],"116":["_x","_y","onEnterFrame","x","y"],"223":[],"230":[],"235":[],"240":[],"245":[],"254":[],"259":[],"278":[],"291":[],"315":[],"329":[],"343":[],"357":[],"373":[],"388":[],"404":[],"454":[],"472":[],"473":[],"494":[],"496":["_visible"],"599":[],"618":[],"621":[],"643":[],"662":[],"664":["_visible"],"676":[],"685":[],"698":[],"713":[],"736":[],"764":[],"772":[],"781":[],"819":[],"850":[],"857":[],"867":[],"868":[],"889":[],"895":[],"901":[],"912":[],"922":[],"928":[],"939":[],"945":[],"962":[],"979":[],"1030":[],"1044":[],"1050":[],"1058":[],"1066":[],"1073":[],"1088":[],"1103":[],"1115":[],"1127":[],"1136":[],"1144":[],"1167":[],"1190":[],"1196":[],"1197":[],"1198":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1199":["tt"],"1200":["skipFrame"],"1207":["_totalframes","skipFrame"],"1210":["_totalframes","skipFrame"],"1213":["_totalframes","skipFrame"],"1223":[],"1226":["b1"],"1227":["b1"],"1228":["b2"],"1229":["b2"],"1230":["b3"],"1231":["b3"],"1232":["b4"],"1233":["b4"],"1445":["_totalframes","b1","b2","b3","b4","mc","mcr","skipFrame"],"1700":[],"2007":["_totalframes","skipFrame"],"2010":["aim"],"2015":[],"2018":[],"2019":["_currentframe","back","onEnterFrame"],"2022":["component","track_mc"],"2023":[],"2043":[],"2048":[],"2064":["qqxflash_home"],"2066":[],"2077":[],"2083":["helper"],"2088":[],"2097":[],"2099":["btn"],"2124":[],"2129":[],"2133":["_visible"],"2135":["_visible","hitted","onEnterFrame","ox","oy"],"2188":[],"2191":[],"2195":[],"2199":[],"2222":[],"2225":[],"2228":["_visible"],"2254":[],"2256":["_loc0_","_sdoor","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block2","block3","blocks","blockx","blocky","changeMovies","changes","door","event15","event2","event3","events","flag","head1","head2","head3","hitted","hitter","hitter1","i","light1","light2","map","minScale","player","playerScale","sdoor","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tx","ty"],"2262":["gp"],"2270":[],"2316":[],"2317":[],"2318":[],"2319":[],"2320":[],"2330":["actKey","downKey","leftKey","rightKey","upKey"],"2341":["_quality"],"2344":["_quality"],"2348":["_quality"],"2350":[],"2352":["allShow"],"2354":["allShow"],"2360":["draging","onEnterFrame"],"2361":["_x","bb","draging","onEnterFrame"],"2374":["btn"],"2375":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2376":["btn","gp"],"2383":["i","onEnterFrame"],"2385":["aim"],"2393":[],"2394":["delay","fadeOut","item"],"2402":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","head1","head2","head3","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:1207":{"read":["b1"],"write":[]},"0:1208":{"read":["b1"],"write":[]},"0:1209":{"read":["b2"],"write":[]},"0:1210":{"read":["b2"],"write":[]},"0:1211":{"read":["b3"],"write":[]},"0:1212":{"read":["b3"],"write":[]},"0:1213":{"read":["b4"],"write":[]},"0:1214":{"read":["b4"],"write":[]},"0:1983":{"read":["aim"],"write":[]},"0:2002":{"read":[],"write":[]},"0:2008":{"read":["helper"],"write":[]},"0:2013":{"read":[],"write":[]},"0:2022":{"read":[],"write":[]},"0:2188":{"read":["gp"],"write":["gp"]},"0:2234":{"read":[],"write":[]},"0:2235":{"read":[],"write":[]},"0:2236":{"read":[],"write":[]},"0:2237":{"read":[],"write":[]},"0:2238":{"read":[],"write":[]},"0:2259":{"read":["_quality"],"write":["_quality"]},"0:2262":{"read":["_quality"],"write":["_quality"]},"0:2266":{"read":["_quality"],"write":["_quality"]},"0:2268":{"read":[],"write":[]},"0:2270":{"read":["allShow"],"write":[]},"0:2272":{"read":["allShow"],"write":[]},"0:2278":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:2303":{"read":["aim"],"write":[]},"0:2320":{"read":[],"write":[]},"0:35":{"read":[],"write":[]},"0:40":{"read":[],"write":[]},"0:61":{"read":["qqxflash_home"],"write":[]},"0:63":{"read":[],"write":[]},"0:1013":{"read":[],"write":[]},"0:1027":{"read":[],"write":[]},"0:1032":{"read":[],"write":[]},"0:1040":{"read":[],"write":[]},"0:1048":{"read":[],"write":[]},"0:105":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1055":{"read":[],"write":[]},"0:1070":{"read":[],"write":[]},"0:1085":{"read":[],"write":[]},"0:1097":{"read":[],"write":[]},"0:1109":{"read":[],"write":[]},"0:1118":{"read":[],"write":[]},"0:112":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1125":{"read":[],"write":[]},"0:1148":{"read":[],"write":[]},"0:117":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1171":{"read":[],"write":[]},"0:1177":{"read":[],"write":[]},"0:1178":{"read":[],"write":[]},"0:1179":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"0:1180":{"read":["tt"],"write":["tt"]},"0:1181":{"read":["skipFrame"],"write":["skipFrame"]},"0:1188":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:118":{"read":[],"write":[]},"0:1191":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1194":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1204":{"read":[],"write":[]},"0:126":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:134":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1417":{"read":["_totalframes","b1","b2","b3","b4","mc","mcr","skipFrame"],"write":["mcr","skipFrame"]},"0:142":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:143":{"read":[],"write":[]},"0:147":{"read":[],"write":[]},"0:154":{"read":[],"write":[]},"0:155":{"read":["_totalframes"],"write":[]},"0:163":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:1672":{"read":[],"write":[]},"0:1980":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1988":{"read":[],"write":[]},"0:1991":{"read":[],"write":[]},"0:1992":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:2024":{"read":["btn"],"write":[]},"0:2055":{"read":[],"write":[]},"0:2059":{"read":["_visible"],"write":["_visible"]},"0:2061":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2114":{"read":[],"write":[]},"0:2117":{"read":[],"write":[]},"0:2121":{"read":[],"write":[]},"0:2125":{"read":[],"write":[]},"0:2148":{"read":[],"write":[]},"0:2151":{"read":[],"write":[]},"0:2154":{"read":["_visible"],"write":["_visible"]},"0:2180":{"read":[],"write":[]},"0:2182":{"read":["_loc0_","_sdoor","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block2","block3","blocks","blockx","blocky","changeMovies","changes","door","event15","event2","event3","events","flag","head1","head2","head3","hitted","hitter","hitter1","i","light1","light2","map","minScale","player","playerScale","sdoor","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tx","ty"],"write":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","hitted","i","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","tx","ty"]},"0:2196":{"read":[],"write":[]},"0:2248":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:2279":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:2292":{"read":["btn"],"write":[]},"0:2293":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"0:2294":{"read":["btn","gp"],"write":[]},"0:2301":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:2311":{"read":[],"write":[]},"0:2312":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:270":{"read":[],"write":[]},"0:277":{"read":[],"write":[]},"0:282":{"read":[],"write":[]},"0:287":{"read":[],"write":[]},"0:292":{"read":[],"write":[]},"0:301":{"read":[],"write":[]},"0:306":{"read":[],"write":[]},"0:315":{"read":[],"write":[]},"0:328":{"read":[],"write":[]},"0:343":{"read":[],"write":[]},"0:358":{"read":[],"write":[]},"0:372":{"read":[],"write":[]},"0:386":{"read":[],"write":[]},"0:404":{"read":[],"write":[]},"0:418":{"read":[],"write":[]},"0:434":{"read":[],"write":[]},"0:456":{"read":["items"],"write":[]},"0:47":{"read":["component","track_mc"],"write":["component"]},"0:476":{"read":["items"],"write":[]},"0:48":{"read":[],"write":[]},"0:501":{"read":[],"write":[]},"0:517":{"read":[],"write":[]},"0:518":{"read":[],"write":[]},"0:539":{"read":[],"write":[]},"0:541":{"read":["_visible"],"write":["_visible"]},"0:622":{"read":[],"write":[]},"0:639":{"read":[],"write":[]},"0:643":{"read":[],"write":[]},"0:658":{"read":[],"write":[]},"0:65":{"read":[],"write":[]},"0:675":{"read":[],"write":[]},"0:677":{"read":["_visible"],"write":["_visible"]},"0:687":{"read":[],"write":[]},"0:696":{"read":[],"write":[]},"0:709":{"read":[],"write":[]},"0:720":{"read":[],"write":[]},"0:742":{"read":[],"write":[]},"0:760":{"read":[],"write":[]},"0:768":{"read":[],"write":[]},"0:774":{"read":[],"write":[]},"0:78":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:808":{"read":[],"write":[]},"0:836":{"read":[],"write":[]},"0:843":{"read":[],"write":[]},"0:850":{"read":[],"write":[]},"0:851":{"read":[],"write":[]},"0:872":{"read":[],"write":[]},"0:878":{"read":[],"write":[]},"0:88":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:884":{"read":[],"write":[]},"0:895":{"read":[],"write":[]},"0:905":{"read":[],"write":[]},"0:910":{"read":[],"write":[]},"0:922":{"read":[],"write":[]},"0:928":{"read":[],"write":[]},"0:945":{"read":[],"write":[]},"0:962":{"read":[],"write":[]},"0:97":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:98":{"read":[],"write":[]},"0:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","head1","head2","head3","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","head1","head2","head3","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:1226":{"read":["b1"],"write":[]},"1:1227":{"read":["b1"],"write":[]},"1:1228":{"read":["b2"],"write":[]},"1:1229":{"read":["b2"],"write":[]},"1:1230":{"read":["b3"],"write":[]},"1:1231":{"read":["b3"],"write":[]},"1:1232":{"read":["b4"],"write":[]},"1:1233":{"read":["b4"],"write":[]},"1:2010":{"read":["aim"],"write":[]},"1:2043":{"read":[],"write":[]},"1:2048":{"read":[],"write":[]},"1:2064":{"read":["qqxflash_home"],"write":[]},"1:2066":{"read":[],"write":[]},"1:2077":{"read":[],"write":[]},"1:2083":{"read":["helper"],"write":[]},"1:2088":{"read":[],"write":[]},"1:2097":{"read":[],"write":[]},"1:2262":{"read":["gp"],"write":["gp"]},"1:2316":{"read":[],"write":[]},"1:2317":{"read":[],"write":[]},"1:2318":{"read":[],"write":[]},"1:2319":{"read":[],"write":[]},"1:2320":{"read":[],"write":[]},"1:2341":{"read":["_quality"],"write":["_quality"]},"1:2344":{"read":["_quality"],"write":["_quality"]},"1:2348":{"read":["_quality"],"write":["_quality"]},"1:2350":{"read":[],"write":[]},"1:2352":{"read":["allShow"],"write":[]},"1:2354":{"read":["allShow"],"write":[]},"1:2360":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:2385":{"read":["aim"],"write":[]},"1:2402":{"read":[],"write":[]},"1:1030":{"read":[],"write":[]},"1:1044":{"read":[],"write":[]},"1:105":{"read":[],"write":[]},"1:1050":{"read":[],"write":[]},"1:1058":{"read":[],"write":[]},"1:1066":{"read":[],"write":[]},"1:106":{"read":["_totalframes"],"write":[]},"1:1073":{"read":[],"write":[]},"1:1088":{"read":[],"write":[]},"1:1103":{"read":[],"write":[]},"1:1115":{"read":[],"write":[]},"1:1127":{"read":[],"write":[]},"1:1136":{"read":[],"write":[]},"1:1144":{"read":[],"write":[]},"1:116":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:1167":{"read":[],"write":[]},"1:1190":{"read":[],"write":[]},"1:1196":{"read":[],"write":[]},"1:1197":{"read":[],"write":[]},"1:1198":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"1:1199":{"read":["tt"],"write":["tt"]},"1:1200":{"read":["skipFrame"],"write":["skipFrame"]},"1:1207":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1210":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1213":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1223":{"read":[],"write":[]},"1:1445":{"read":["_totalframes","b1","b2","b3","b4","mc","mcr","skipFrame"],"write":["mcr","skipFrame"]},"1:15":{"read":[],"write":[]},"1:1700":{"read":[],"write":[]},"1:2007":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:2015":{"read":[],"write":[]},"1:2018":{"read":[],"write":[]},"1:2019":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:2022":{"read":["component","track_mc"],"write":["component"]},"1:2023":{"read":[],"write":[]},"1:2099":{"read":["btn"],"write":[]},"1:2124":{"read":[],"write":[]},"1:2129":{"read":[],"write":[]},"1:2133":{"read":["_visible"],"write":["_visible"]},"1:2135":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2188":{"read":[],"write":[]},"1:2191":{"read":[],"write":[]},"1:2195":{"read":[],"write":[]},"1:2199":{"read":[],"write":[]},"1:2222":{"read":[],"write":[]},"1:2225":{"read":[],"write":[]},"1:2228":{"read":["_visible"],"write":["_visible"]},"1:223":{"read":[],"write":[]},"1:2254":{"read":[],"write":[]},"1:2256":{"read":["_loc0_","_sdoor","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","block0","block1","block2","block3","blocks","blockx","blocky","changeMovies","changes","door","event15","event2","event3","events","flag","head1","head2","head3","hitted","hitter","hitter1","i","light1","light2","map","minScale","player","playerScale","sdoor","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","topBlock","tx","ty"],"write":["_loc0_","_temp_1","_temp_10","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","hitted","i","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","tx","ty"]},"1:2270":{"read":[],"write":[]},"1:230":{"read":[],"write":[]},"1:2330":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:235":{"read":[],"write":[]},"1:2361":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:2374":{"read":["btn"],"write":[]},"1:2375":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"1:2376":{"read":["btn","gp"],"write":[]},"1:2383":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:2393":{"read":[],"write":[]},"1:2394":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:240":{"read":[],"write":[]},"1:245":{"read":[],"write":[]},"1:254":{"read":[],"write":[]},"1:259":{"read":[],"write":[]},"1:278":{"read":[],"write":[]},"1:28":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:291":{"read":[],"write":[]},"1:315":{"read":[],"write":[]},"1:329":{"read":[],"write":[]},"1:343":{"read":[],"write":[]},"1:357":{"read":[],"write":[]},"1:373":{"read":[],"write":[]},"1:38":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:388":{"read":[],"write":[]},"1:404":{"read":[],"write":[]},"1:454":{"read":[],"write":[]},"1:47":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:472":{"read":[],"write":[]},"1:473":{"read":[],"write":[]},"1:48":{"read":[],"write":[]},"1:494":{"read":[],"write":[]},"1:496":{"read":["_visible"],"write":["_visible"]},"1:55":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:599":{"read":[],"write":[]},"1:618":{"read":[],"write":[]},"1:62":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:621":{"read":[],"write":[]},"1:643":{"read":[],"write":[]},"1:662":{"read":[],"write":[]},"1:664":{"read":["_visible"],"write":["_visible"]},"1:67":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:676":{"read":[],"write":[]},"1:685":{"read":[],"write":[]},"1:68":{"read":[],"write":[]},"1:698":{"read":[],"write":[]},"1:713":{"read":[],"write":[]},"1:736":{"read":[],"write":[]},"1:76":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:764":{"read":[],"write":[]},"1:772":{"read":[],"write":[]},"1:781":{"read":[],"write":[]},"1:819":{"read":[],"write":[]},"1:84":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:850":{"read":[],"write":[]},"1:857":{"read":[],"write":[]},"1:867":{"read":[],"write":[]},"1:868":{"read":[],"write":[]},"1:889":{"read":[],"write":[]},"1:895":{"read":[],"write":[]},"1:901":{"read":[],"write":[]},"1:912":{"read":[],"write":[]},"1:92":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:922":{"read":[],"write":[]},"1:928":{"read":[],"write":[]},"1:939":{"read":[],"write":[]},"1:93":{"read":[],"write":[]},"1:945":{"read":[],"write":[]},"1:962":{"read":[],"write":[]},"1:979":{"read":[],"write":[]},"1:98":{"read":[],"write":[]},"1:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","head1","head2","head3","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event3","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","head1","head2","head3","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
