/* Native source-derived chapter 5 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c5v0a0(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c5v0a1(ctx,owner){

   ctx.stopDrag(owner);

}

export function c5v0a2(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c5v0a3(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c5v0a4(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c5v0a5(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
      ctx.startDrag(this);
   }

}

export function c5v0a6(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c5v0a7(ctx,owner){

   ctx.graph.play(owner);

}

export function c5v0a8(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c5v0a9(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c5v0a10(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c5v0a11(ctx,owner){

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

export function c5v0a12(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c5v0a13(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c5v0a14(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c5v0a15(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c5v0a16(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c5v0a17(ctx,owner){

   owner._quality = "HIGH";

}

export function c5v0a18(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c5v0a19(ctx,owner){

   owner._quality = "LOW";

}

export function c5v0a20(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c5v0a21(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c5v0a22(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c5v0a23(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c5v0a24(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c5v0a25(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c5v0a26(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c5v0a27(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a28(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v0a29(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c5v0a30(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c5v0a31(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a32(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a33(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a34(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a35(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a36(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a37(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a38(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a39(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a40(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a41(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a42(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a43(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a44(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a45(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a46(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c5v0a47(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c5v0a48(ctx,owner){
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

export function c5v0a49(ctx,owner){
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

export function c5v0a50(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c5v0a51(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c5v0a52(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v0a53(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c5v0a54(ctx,owner){

}

export function c5v0a55(ctx,owner){

}

export function c5v0a56(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a57(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a58(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a59(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a60(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a61(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a62(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a63(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a64(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c5v0a65(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a66(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a67(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a68(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v0a69(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a70(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a71(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a72(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a73(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a74(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a75(ctx,owner){
owner.skipFrame = 0;

}

export function c5v0a76(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(5);

}

export function c5v0a77(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a78(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a79(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a80(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a81(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a82(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a83(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a84(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a85(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a86(ctx,owner){
ctx.graph.stop(owner);
owner.xxx = (this)?.["_x"];
owner.yyy = (this)?.["_y"];
owner.onMouseUp = function()
{
   var _loc4_;
   var _loc3_;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(this)?.["_y"] != owner.yyy)((this)?.["_x"] != owner.xxx)))
   {
      ctx.trace?.(ctx.add("itemList=",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["_parent"])?.["allShow"])))
      {
         owner.name1 = ((owner.parent)?.["_parent"])?.["allShow"];
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 37:logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 30:logicalLeft)(owner.aim == "item5"))))
         {
            owner.aim = "item6";
            (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
            (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
            ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
            ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
            ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
            ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
            ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
            ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
            ctx.graph.goto(owner,"item6");
            (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(owner.iii,1);
            ctx.trace?.(ctx.add("测试",owner.iii));
            ctx.trace?.(ctx.add("测试_array=",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
            _loc4_ = 0;
            while(ctx.bool(ctx.less(_loc4_,(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
            {
               owner.ar = (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.[_loc4_];
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.ar == "item4")(owner.ar == "item5")))
               {
                  (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(_loc4_,1);
                  _loc4_ = (ctx.num(_loc4_)-ctx.num(1));
               }
               _loc4_ = ctx.add(_loc4_,1);
            }
            _loc4_ = 0;
            while(ctx.bool(ctx.less(_loc4_,5)))
            {
               owner.nn = (owner.parent)?.[ctx.add("item",_loc4_)];
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.nn)?.["aim"] == "item4")((owner.nn)?.["aim"] == "item5")))
               {
                  ctx.graph.remove(owner.nn);
                  _loc4_ = (ctx.num(_loc4_)-ctx.num(1));
               }
               _loc4_ = ctx.add(_loc4_,1);
            }
            ctx.trace?.(ctx.add("测试_array=",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
         }
      }
      _loc4_ = 0;
      while(ctx.bool(ctx.less(_loc4_,(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
      {
         owner.name1 = (owner.parent)?.[ctx.add("item",_loc4_)];
         ctx.trace?.(ctx.add("name1=",owner.name1));
         if(ctx.bool(ctx.hitTest(this,owner.name1)))
         {
            ctx.trace?.("碰到");
            ctx.trace?.(ctx.add(ctx.add(ctx.add("aim=",owner.aim),"  aim1="),(owner.name1)?.["aim"]));
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item5":logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item4":logicalLeft)(owner.aim == "item5"))))
            {
               _loc3_ = 0;
               while(ctx.bool(ctx.less(_loc3_,(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
               {
                  owner.ar = (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.[_loc3_];
                  if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.ar == "item4")(owner.ar == "item5")))
                  {
                     (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(_loc3_,1);
                     _loc3_ = (ctx.num(_loc3_)-ctx.num(1));
                  }
                  _loc3_ = ctx.add(_loc3_,1);
               }
               owner.aim = "item6";
               (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
               (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
               ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
               ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
               ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
               ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
               ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
               ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
               ctx.graph.goto(owner,"item6");
               ctx.graph.remove(owner.name1);
            }
         }
         _loc4_ = ctx.add(_loc4_,1);
      }
   }
   ctx.stopDrag(this);
   ctx.setField(this,"_x",owner.xxx);
   ctx.setField(this,"_y",owner.yyy);
};

}

export function c5v0a87(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c5v0a88(ctx,owner){
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

export function c5v0a89(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c5v0a90(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c5v0a91(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a92(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a93(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a94(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a95(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a96(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a97(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a98(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a99(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a100(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a101(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a102(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a103(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a104(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a105(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a106(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a107(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c5v0a108(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c5v0a109(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c5v0a110(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c5v0a111(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c5v0a112(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c5v0a113(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c5v0a114(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["_parent"],"an",1);

}

export function c5v0a115(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);

}

export function c5v0a116(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a117(ctx,owner){

}

export function c5v0a118(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a119(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a120(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c5v0a121(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c5v0a122(ctx,owner){
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

export function c5v0a123(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a124(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a125(ctx,owner){
ctx.graph.goto(owner.parent,3);

}

export function c5v0a126(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a127(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a128(ctx,owner){
ctx.graph.goto(owner.parent,3);

}

export function c5v0a129(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",548);
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_y",280);
ctx.graph.goto(((owner.parent)?.["_parent"])?.["player"],"wa2");
ctx.graph.swapDepths(owner.parent,1);

}

export function c5v0a130(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a131(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a132(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a133(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a134(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a135(ctx,owner){
ctx.graph.goto(owner.parent,3);

}

export function c5v0a136(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a137(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a138(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a139(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a140(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a141(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a142(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a143(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a144(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a145(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a146(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a147(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a148(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a149(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a150(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a151(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",(owner.parent)?.["_x"]);
ctx.graph.swapDepths(owner.parent,((owner.parent)?.["_parent"])?.["player"]);
ctx.graph.goto(owner.parent,"kkk");

}

export function c5v0a152(ctx,owner){
if(ctx.bool(ctx.lessEqual(ctx.add(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
{
   ctx.graph.goto((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
}
else
{
   ctx.graph.goto((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
}
if(ctx.bool(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
{
   ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["_parent"],"end");
}

}

export function c5v0a153(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a154(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a155(ctx,owner){
ctx.graph.play(owner);

}

export function c5v0a156(ctx,owner){
ctx.setField((owner.parent)?.["player"],"_x",ctx.add(ctx.add((owner.mc)?.["_x"],(this)?.["_x"]),10));
ctx.setField((owner.parent)?.["player"],"_y",ctx.add(ctx.add((owner.mc)?.["_y"],(this)?.["_y"]),25));
ctx.setField((owner.parent)?.["player"],"_visible",true);
ctx.setField((owner.parent)?.["player"],"_xscale",70);
ctx.setField((owner.parent)?.["player"],"_yscale",70);

}

export function c5v0a157(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c5v0a158(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a159(ctx,owner){
if(ctx.bool(ctx.hitTest(owner.hit,((owner.parent)?.["_parent"])?.["player"])))
{
   if(ctx.bool(owner._xscale == 100))
   {
      ctx.graph.swapDepths(((owner.parent)?.["_parent"])?.["player"],((owner.parent)?.["_parent"])?.["man"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_x",(((owner.parent)?.["_parent"])?.["player"])?.["_x"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_y",(((owner.parent)?.["_parent"])?.["player"])?.["_y"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",(-ctx.num(200)));
      ctx.graph.goto(((owner.parent)?.["_parent"])?.["man"],1);
   }
   else
   {
      ctx.graph.swapDepths(((owner.parent)?.["_parent"])?.["player"],((owner.parent)?.["_parent"])?.["man"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_x",(((owner.parent)?.["_parent"])?.["player"])?.["_x"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_y",(((owner.parent)?.["_parent"])?.["player"])?.["_y"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",(-ctx.num(200)));
      ctx.graph.goto(((owner.parent)?.["_parent"])?.["man"],2);
   }
}

}

export function c5v0a160(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c5v0a161(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a162(ctx,owner){
ctx.trace?.(ctx.add("_parent.ying",(owner.parent)?.["ying"]));
ctx.graph.goto((owner.parent)?.["ying"],1);

}

export function c5v0a163(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a164(ctx,owner){
ctx.graph.goto(owner.parent,2);

}

export function c5v0a165(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a166(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a167(ctx,owner){

   if(ctx.bool(owner._currentframe == 1))
   {
      if(ctx.bool((owner.parent)?.["_currentframe"] == 2))
      {
         ctx.graph.goto(owner.parent,3);
      }
   }
   if(ctx.bool(owner._currentframe == 1))
   {
      ((old)=>(owner.randomttt=old-1,old))(ctx.num(owner.randomttt));
      if(ctx.bool(owner.randomttt == 0))
      {
         if(ctx.bool(ctx.less((this)?.["_x"],360)))
         {
            owner._xscale = (-ctx.num(100));
         }
         else
         {
            owner._xscale = 100;
         }
         owner.randomttt = ctx.add(ctx.randomInt?.(100),80);
         ctx.graph.goto(owner,2,{play:true});
      }
      if(ctx.bool(owner.ttt == 0))
      {
         owner.xxx = (ctx.num(ctx.add((((owner.parent)?.["_parent"])?.["player"])?.["_x"],ctx.randomInt?.(30)))-ctx.num(15));
         owner.yyy = (ctx.num(ctx.add((((owner.parent)?.["_parent"])?.["player"])?.["_y"],ctx.randomInt?.(30)))-ctx.num(15));
         owner.vx = (ctx.num((ctx.num(owner.xxx)-ctx.num((this)?.["_x"])))/ctx.num(20));
         owner.vy = (ctx.num((ctx.num(owner.yyy)-ctx.num((this)?.["_y"])))/ctx.num(20));
         if(ctx.bool(ctx.less(ctx.randomInt?.(100),5)))
         {
            owner.ttt = ctx.add(ctx.randomInt?.(10),20);
            owner.vx = (ctx.num(ctx.randomInt?.(10))-ctx.num(5));
            owner.vy = (ctx.num(ctx.randomInt?.(10))-ctx.num(5));
         }
      }
      else
      {
         ((old)=>(owner.ttt=old-1,old))(ctx.num(owner.ttt));
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,owner.vx):logicalLeft)(ctx.less(700,(this)?.["_x"]))))
      {
         owner.vx = (-ctx.num(ctx.randomInt?.(5)));
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.vx,0):logicalLeft)(ctx.less((this)?.["_x"],100))))
      {
         owner.vx = ctx.randomInt?.(5);
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,owner.vy):logicalLeft)(ctx.less(380,(this)?.["_y"]))))
      {
         owner.vy = (-ctx.num(ctx.randomInt?.(5)));
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.vy,0):logicalLeft)(ctx.less((this)?.["_y"],270))))
      {
         owner.vy = ctx.randomInt?.(5);
      }
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.vx)))(this,"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.vy)))(this,"_y");
   }

}

export function c5v0a168(ctx,owner){

   owner.ttt = 0;
   owner.xxx = (ctx.num(ctx.add(((owner.parent)?.["player"])?.["_x"],ctx.randomInt?.(20)))-ctx.num(10));
   owner.yyy = (ctx.num(ctx.add(((owner.parent)?.["player"])?.["_x"],ctx.randomInt?.(20)))-ctx.num(10));
   owner.randomttt = ctx.add(ctx.randomInt?.(50),50);

}

export function c5v0a169(ctx,owner){
ctx.graph.goto(owner.ying,1);

}

export function c5v0a170(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a171(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a172(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v0a173(ctx,owner){
ctx.graph.play(owner);

}

export function c5v0a174(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(owner.parent,"an",1);
ctx.setField((owner.parent)?.["man"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["man"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
ctx.setField((owner.parent)?.["man"],"minx",164);
ctx.setField((owner.parent)?.["man"],"maxx",369);
ctx.setField((owner.parent)?.["man"],"name1",(owner.parent)?.["hit1"]);

}

export function c5v0a175(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a176(ctx,owner){
ctx.graph.play(owner);

}

export function c5v0a177(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["man"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["man"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
ctx.setField((owner.parent)?.["man"],"minx",192);
ctx.setField((owner.parent)?.["man"],"maxx",414);
ctx.setField(owner.parent,"an",1);
ctx.setField((owner.parent)?.["man"],"name1",(owner.parent)?.["hit2"]);

}

export function c5v0a178(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v0a179(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a180(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v0a181(ctx,owner){
ctx.graph.play(owner);

}

export function c5v0a182(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map8");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v0a183(ctx,owner){
ctx.graph.play(owner);

}

export function c5v0a184(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a185(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],owner.eventNow,owner.eventNow,0);

}

export function c5v0a186(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map8");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v0a187(ctx,owner){
ctx.graph.play(owner);

}

export function c5v0a188(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(owner.parent,"an",1);
ctx.setField((owner.parent)?.["man"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["man"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
ctx.setField((owner.parent)?.["man"],"minx",203);
ctx.setField((owner.parent)?.["man"],"maxx",379);
ctx.setField((owner.parent)?.["man"],"name1",(owner.parent)?.["hit1"]);

}

export function c5v0a189(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a190(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 208;
      owner.appeary = 343;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 695;
      owner.appeary = 321;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   default:
      owner.appearx = 419;
      owner.appeary = 189;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
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
if(ctx.bool((owner.parent)?.["event1"] == 0))
{
   owner.talkTxts = ["船长，你到底对黑暗之眼有多少了解呢。我们现在该怎么办？","关于黑暗之眼我也只是耳听目详，没有亲自进入到其中过，还是先寻找入口吧。","小妹，你别担心，让我先来找找入口。","恩，哥哥，加油。"];
   owner.talkObj = ["map.player.point","map.point1","map.player.point","map.point0"];
   owner.talkDirs = [0,0,1,0];
   owner.talkNext = [1,0,3,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
else
{
   owner.talkTxts = ["船上有我的荣誉宝剑忘记带下来，也许可以帮上忙"," ","船上也许可以找到有用的东西呢"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   owner.talkTxts = [];
   owner.talkObj = [];
   owner.talkDirs = [];
   owner.talkNext = [];
   owner.talkAreas = [];
}
if(ctx.bool((owner.parent)?.["event6"] == 2))
{
   owner.talkTxts = ["我的荣誉宝剑不可能这么钝的！"," ","哥哥别着急，也许还有别的办法。"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event8"] == 1)((owner.parent)?.["event7"] == 1)))
{
   owner.talkTxts = ["恐怖的黑暗之眼，唔…我们走吧。"," ","让我们进去看个究竟吧"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","man1","man2"];
owner.events = ["event1","event11"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [245,160,269,329];
owner.blocky = [180,211,241,216];
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

export function c5v0a191(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 640;
owner.appeary = 249;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "mapx2";
ctx.setField(owner.parent,"beenMap5",1);
ctx.setField(owner.hitter,"_visible",0);
if(ctx.bool((owner.parent)?.["event5"] == 0))
{
   (owner.events)?.["push"]?.("event5");
   ctx.graph.goto((owner.topBlock)?.["pijiu"],1);
}
else
{
   ctx.graph.goto((owner.topBlock)?.["pijiu"],2);
}
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["waichu1"];
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

export function c5v0a192(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map1":
      owner.appearx = 535;
      owner.appeary = 384;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 448;
      owner.appeary = 237;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "mapx1":
      owner.appearx = 529;
      owner.appeary = 193;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   case "mapx2":
      owner.appearx = 637;
      owner.appeary = 147;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
owner.map = "map2";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
if(ctx.bool((owner.parent)?.["event1"] == 0))
{
   owner.talkTxts = ["船长，你到底对黑暗之眼有多少了解呢。我们现在该怎么办？","关于黑暗之眼我也只是耳听目详，没有亲自进入到其中过，还是先寻找入口吧。","小妹，你别担心，让我先来找找入口。","恩，哥哥，加油。"];
   owner.talkObj = ["map.player.point","map.point1","map.player.point","map.point0"];
   owner.talkDirs = [0,0,1,0];
   owner.talkNext = [1,0,3,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
else
{
   owner.talkTxts = ["船上有我的荣誉宝剑忘记带下来，也许可以帮上忙","","船上也许可以找到有用的东西呢"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
owner.minScale = 90;
owner.playerScale = 90;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","block2"];
owner.events = ["event31"];
owner.changes = ["map1","map3","mapx1","mapx2"];
owner.changeMovies = ["event000","kaimen","kaimen","kaimen"];
owner.blockx = [120,25,534];
owner.blocky = [264,239,315];
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

export function c5v0a193(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.blocks = ["yizhi","shafa","zuo"];
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) === "map2"))
{
   owner.appearx = 592;
   owner.appeary = 287;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
owner.map = "map3";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
owner.events = [];
if(ctx.bool((owner.parent)?.["event4"] == 0))
{
   if(ctx.bool((owner.parent)?.["event3"] == 0))
   {
      ctx.graph.goto((owner.hitter)?.["mc1"],1);
      (owner.events)?.["push"]?.("event2","event3");
      ctx.graph.goto(owner.yizhi,1);
      ctx.graph.goto(owner.baojian,1);
      owner.blockx = [336];
      owner.blocky = [356];
   }
   else
   {
      ctx.graph.goto((owner.hitter)?.["mc1"],2);
      (owner.events)?.["push"]?.("event4");
      ctx.graph.goto(owner.yizhi,3);
      owner.blockx = [3];
      owner.blocky = [3];
   }
}
else
{
   ctx.graph.goto((owner.hitter)?.["mc1"],2);
   ctx.graph.goto(owner.baojian,2);
   ctx.graph.goto(owner.yizhi,3);
   owner.blockx = [3];
   owner.blocky = [3];
}
ctx.setField(owner.blockx,1,490);
ctx.setField(owner.blocky,1,360);
ctx.setField(owner.blockx,2,490);
ctx.setField(owner.blocky,2,350);
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.changes = ["map2"];
owner.changeMovies = ["waichu1"];
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
   owner._temp_4 = owner.player;
   owner._temp_3 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
else
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}

}

export function c5v0a194(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) === "map1"))
{
   owner.appearx = 100;
   owner.appeary = 400;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
owner.map = "map4";
ctx.graph.goto(owner.shu,1);
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
owner.events = [];
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   if(ctx.bool((owner.parent)?.["event5"] == 0))
   {
      owner.events = ["event6"];
   }
   else if(ctx.bool((owner.parent)?.["event7"] == 0))
   {
      owner.events = ["event7"];
   }
   else if(ctx.bool((owner.parent)?.["event8"] == 0))
   {
      ctx.graph.goto(owner.shu,3);
      owner.events = ["event8"];
   }
   else
   {
      ctx.graph.goto(owner.shu,4);
   }
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1"];
owner.changes = ["map1"];
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
   owner._temp_4 = owner.player;
   owner._temp_3 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
else
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}

}

export function c5v0a195(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) === "map1"))
{
   owner.appearx = 117;
   owner.appeary = 296;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
owner.map = "map5";
owner.events = [];
owner.i = 12;
while(ctx.bool(ctx.less(owner.i,17)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 0))
   {
      ctx.graph.goto((this)?.[ctx.add("tree",owner.i)],1);
      ctx.graph.goto((owner.hitter)?.[ctx.add("mc",owner.i)],1);
      ctx.graph.goto((owner.topBlock)?.[ctx.add("tree",owner.i)],1);
      (owner.events)?.["push"]?.(ctx.add("event",owner.i));
   }
   else
   {
      ctx.graph.goto((owner.topBlock)?.[ctx.add("tree",owner.i)],((owner.topBlock)?.[ctx.add("tree",owner.i)])?.["_currentframe"]);
      ctx.graph.goto((owner.hitter)?.[ctx.add("mc",owner.i)],2);
      ctx.graph.goto((this)?.[ctx.add("tree",owner.i)],((this)?.[ctx.add("tree",owner.i)])?.["_currentframe"]);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
if(ctx.bool((owner.parent)?.["event12"] == 0))
{
   owner.tr;
}
else
{
   ctx.graph.goto(owner.yu,2);
}
owner.talkTxts = ["这些植物好象确实很怕我的烈酒呢~！","哥哥，怎么办，前面好象过不去呢。","妹妹别着急，我来想想办法。"];
owner.talkObj = ["map.point0","map.point1","map.player.point"];
owner.talkDirs = [1,1,1];
owner.talkNext = [0,2,0];
owner.talkAreas = ["talkArea0","talkArea1"];
owner.minScale = 60;
owner.playerScale = 60;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree12","block1"];
owner.changes = ["map6"];
owner.changeMovies = ["waichu"];
owner.blockx = [275,460];
owner.blocky = [386,373];
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
   owner._temp_4 = owner.player;
   owner._temp_3 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
else
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}

}

export function c5v0a196(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.graph.goto((owner.topBlock)?.["taopao"],"kkk");
ctx.graph.goto(owner.man,"kkk");
ctx.attach(owner,"player","player",1);
ctx.setField(owner.h3,"an",0);
owner.events = [];
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.events = [];
      ctx.setField(owner.h3,"an",1);
      ctx.graph.goto((owner.topBlock)?.["ying"],"kkk");
      ctx.graph.goto((owner.topBlock)?.["taopao"],1);
      owner.talkTxts = ["也许要有麻烦了……","哥哥，好大一个鸟窝啊！"];
      owner.talkObj = ["map.point0","map.point1"];
      owner.talkDirs = [1,1,1];
      owner.talkNext = [0,0,0];
      owner.talkAreas = ["talkArea0","talkArea1"];
      owner.appearx = 119;
      owner.appeary = 305;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map7":
      ctx.graph.goto((owner.topBlock)?.["ying"],1,{play:true});
      ctx.setField(owner.player,"_x",(-ctx.num(50)));
      ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],2,{play:true});
      ctx.setField(owner.player,"_visible",false);
      ctx.setField(owner.player,"_xscale",1);
      ctx.setField(owner.player,"_yscale",1);
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map6";
if(ctx.bool((owner.parent)?.["event18"] == 0))
{
   ctx.graph.goto(owner.kulou,1);
   ctx.graph.goto((owner.hitter)?.["mc"],1);
   (owner.events)?.["push"]?.("event18");
}
else
{
   ctx.graph.goto(owner.kulou,2);
   ctx.graph.goto((owner.hitter)?.["mc"],2);
}
if(ctx.bool((owner.parent)?.["event19"] == 0))
{
   ctx.graph.goto(owner.topBlock,1);
   (owner.events)?.["push"]?.("event19");
}
else
{
   ctx.setField(owner.topBlock,"_x",0);
   ctx.setField(owner.topBlock,"_y",0);
   ctx.graph.goto(owner.topBlock,3);
   ctx.graph.goto((owner.topBlock)?.["yu"],2);
}
(owner.events)?.["push"]?.("event20","event21","event22");
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["cao1","teng1","teng2","teng3","zhu","zu2","cao2"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [0,94,154,221,533,327,465];
owner.blocky = [367,189,162,112,240,136,258];
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

export function c5v0a197(ctx,owner){

   if(ctx.bool(owner.an == 1))
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["h1"],(owner.parent)?.["player"]))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["h2"],(owner.parent)?.["player"]))(ctx.hitTest(this,(owner.parent)?.["player"])))))
      {
         ctx.trace?.(111);
         owner.an = 0;
         ctx.setField(owner.parent,"talkAreas",[]);
         ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
         ctx.setField((owner.parent)?.["_parent"],"eventNow","zao");
         ctx.setField((owner.parent)?.["_parent"],"eventNext","");
         ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
         ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
         ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
         ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
         ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
         ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
         ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
         ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",6);
      }
   }

}

export function c5v0a198(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map7";
ctx.setField(owner.player,"_visible",false);
if(ctx.bool((owner.parent)?.["oldMap"] == "map6"))
{
   if(ctx.bool((owner.parent)?.["event19"] == 0))
   {
      ctx.setField((this)?.["teng1"],"_visible",false);
      ctx.setField((this)?.["teng2"],"_visible",false);
      ctx.setField((this)?.["teng3"],"_visible",false);
      ctx.setField((this)?.[ctx.add("teng",owner.tengf)],"_visible",true);
      ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],1);
   }
   else
   {
      ctx.graph.goto(owner.long,1);
      ctx.setField((this)?.["teng1"],"_visible",false);
      ctx.setField((this)?.["teng2"],"_visible",false);
      ctx.setField((this)?.["teng3"],"_visible",false);
      ctx.setField((this)?.[ctx.add("teng",owner.tengf)],"_visible",true);
      ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],2,{play:true});
   }
}
else
{
   ctx.graph.goto(owner.long,1);
   ctx.setField((this)?.["teng1"],"_visible",false);
   ctx.setField((this)?.["teng2"],"_visible",false);
   ctx.setField((this)?.["teng3"],"_visible",false);
   ctx.setField((this)?.[ctx.add("teng",owner.tengf)],"_visible",true);
   ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],"kkk",{play:true});
}
owner.an = 0;
if(ctx.bool((owner.parent)?.["event26"] == 0))
{
   ctx.graph.goto(owner.wang,1);
}
else
{
   ctx.graph.goto(owner.wang,2);
}

}

export function c5v0a199(ctx,owner){

   if(ctx.bool((owner.parent)?.["an"] == 1))
   {
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["leftKey"])))
      {
         owner.fram = "a";
         ctx.graph.goto(owner,"a");
         if(ctx.bool(ctx.less(owner.minx,owner._x)))
         {
            owner._x = (ctx.num(owner._x)-ctx.num(5));
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["rightKey"])))
      {
         owner.fram = "d";
         ctx.graph.goto(owner,"d");
         if(ctx.bool(ctx.less(owner._x,owner.maxx)))
         {
            owner._x = ctx.add(owner._x,5);
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["actKey"])))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["_parent"])?.["event26"] == 0:logicalLeft)(ctx.hitTest(this,(owner.parent)?.["event26"]))))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["itemNow"] == "item1"))
            {
               ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
               ctx.setField((owner.parent)?.["_parent"],"eventNow","event26");
               ctx.setField((owner.parent)?.["_parent"],"eventNext","");
               ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
               ctx.setField((owner.parent)?.["_parent"],"event26",1);
               ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
               ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
               ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",4);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("这块藤蔓正好做网,砍下来如何?");
            }
         }
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event23"])))
         {
            ctx.setField(owner.parent,"an",0);
            ctx.setField(this,"_x",(-ctx.num(200)));
            ctx.graph.goto((owner.parent)?.["teng1"],"kkk",{play:true});
         }
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event24"])))
         {
            ctx.setField(owner.parent,"an",0);
            ctx.setField(this,"_x",(-ctx.num(200)));
            ctx.graph.goto((owner.parent)?.["teng2"],"kkk",{play:true});
         }
      }
      owner.i = 0;
      while(ctx.bool(ctx.less(owner.i,20)))
      {
         owner._y = ctx.add(owner._y,0.5);
         if(ctx.bool(ctx.hitTest(owner.name1,(this)?.["_x"],(this)?.["_y"],true)))
         {
            owner._y = (ctx.num(owner._y)-ctx.num(1));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
   }

}

export function c5v0a200(ctx,owner){

   ctx.graph.goto(owner,ctx.add(owner.fram,"2"));

}

export function c5v0a201(ctx,owner){


}

export function c5v0a202(ctx,owner){
owner.an = 0;

}

export function c5v0a203(ctx,owner){

   if(ctx.bool((owner.parent)?.["an"] == 1))
   {
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["leftKey"])))
      {
         owner.fram = "a";
         ctx.graph.goto(owner,"a");
         if(ctx.bool(ctx.less(owner.minx,owner._x)))
         {
            owner._x = (ctx.num(owner._x)-ctx.num(5));
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["rightKey"])))
      {
         owner.fram = "d";
         ctx.graph.goto(owner,"d");
         if(ctx.bool(ctx.less(owner._x,owner.maxx)))
         {
            owner._x = ctx.add(owner._x,5);
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["actKey"])))
      {
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event30"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["itemNow"] == "item6"))
            {
               ctx.setField(owner.parent,"an",0);
               ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
               ctx.setField((owner.parent)?.["_parent"],"eventNow","end");
               ctx.setField((owner.parent)?.["_parent"],"eventNext","");
               ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
               ctx.setField((owner.parent)?.["_parent"],"event30",1);
               ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
               ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("占据有利地形了,我能用什么武器灭鸟呢?");
            }
         }
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event25"])))
         {
            ctx.setField(owner.parent,"an",0);
            ctx.setField(this,"_x",(-ctx.num(200)));
            ctx.graph.goto((owner.parent)?.["teng1"],"kkk",{play:true});
         }
      }
      owner.i = 0;
      while(ctx.bool(ctx.less(owner.i,20)))
      {
         owner._y = ctx.add(owner._y,0.5);
         if(ctx.bool(ctx.hitTest(owner.name1,(this)?.["_x"],(this)?.["_y"],true)))
         {
            owner._y = (ctx.num(owner._y)-ctx.num(1));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
   }

}

export function c5v0a204(ctx,owner){

   ctx.graph.goto(owner,ctx.add(owner.fram,"2"));

}

export function c5v0a205(ctx,owner){


}

export function c5v0a206(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 576;
owner.appeary = 300;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "mapx1";
ctx.setField(owner.parent,"beenMap4",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = [];
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["waichu1"];
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

export function c5v0a207(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a208(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a209(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c5v0a210(ctx,owner){
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

export function c5v0a211(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c5v0a212(ctx,owner){
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

export function c5v0a213(ctx,owner){

   ctx.graph.goto(owner,((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c5v0a214(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a215(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a216(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c5v0a217(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c5v0a218(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c5v0a219(ctx,owner){
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

export function c5v0a220(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c5v0a221(ctx,owner){
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

export function c5v0a222(ctx,owner){
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

export function c5v0a223(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c5v0a224(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a225(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a226(ctx,owner){
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

export function c5v0a227(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c5v0a228(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c5v0a229(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a230(ctx,owner){
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c5v0a231(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v0a232(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a233(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v0a234(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a235(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v0a236(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c5v0a237(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c5v0a238(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a239(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a240(ctx,owner){
owner._visible = 0;

}

export function c5v0a241(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a242(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a243(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c5v0a244(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a245(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a246(ctx,owner){
owner._visible = 0;

}

export function c5v0a247(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a248(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a249(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a250(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a251(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a252(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a253(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a254(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a255(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a256(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a257(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a258(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v0a259(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c5v0a260(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c5v0a261(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a262(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a263(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a264(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a265(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a266(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a267(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a268(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v0a269(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a270(ctx,owner){

}

export function c5v0a271(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v0a272(ctx,owner){
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
                  case "event31":
                     ctx.trace?.("event31event31event31event31event31");
                     owner.etShow?.("门被关上了");
                     break;
                  case "event1":
                     ctx.setField(owner.map,"talkTxts",["船上有我的荣誉宝剑忘记带下来，也许可以帮上忙","","船上也许可以找到有用的东西呢"]);
                     ctx.setField(owner.map,"talkObj",["map.point1","","map.point0"]);
                     ctx.setField(owner.map,"talkDirs",[1,1,1]);
                     ctx.setField(owner.map,"talkNext",[0,0,0]);
                     ctx.setField(owner.map,"talkAreas",["talkArea0","talkArea2"]);
                     owner.event1 = 2;
                     owner.etShow?.("粗壮的藤蔓交织在一起，挡住去路，尝试寻找其它的入口。");
                     break;
                  case "event11":
                     (owner.getItem)?.["start"]?.();
                     ctx.graph.goto((owner.map)?.["yu"],2);
                     owner.event11 = 1;
                     if(ctx.bool(owner.event8 == 1))
                     {
                        ctx.setField(owner.map,"events",[]);
                        ctx.setField((owner.map)?.["changes"],2,"map5");
                     }
                     (owner.itemList)?.["push"]?.("item3");
                     ctx.graph.goto(owner.itemShow,"item3");
                     owner.itemNow = "item3";
                     owner.etShow?.("得到鱼肉");
                     break;
                  case "event2":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event3":
                     owner.afterMovieEvent = 2;
                     ctx.graph.goto((owner.map)?.["yizhi"],2);
                     ctx.setField(owner.map,"events",[]);
                     if(ctx.bool(owner.event5 == 0))
                     {
                        ((owner.map)?.["events"])?.["push"]?.("event5");
                     }
                     ((owner.map)?.["events"])?.["push"]?.("event4");
                     owner.event3 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["mc1"],2);
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event4":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     owner.event4 = 1;
                     break;
                  case "event5":
                     ctx.setField(((owner.map)?.["topBlock"])?.["pijiu"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event5 = 1;
                     (owner.itemList)?.["push"]?.("item2");
                     ctx.graph.goto(owner.itemShow,"item2");
                     owner.itemNow = "item2";
                     owner.etShow?.("您得到了烈酒");
                     break;
                  case "event6":
                     if(ctx.bool(owner.itemNow == "item1"))
                     {
                        owner.event6 = 2;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event7":
                     ctx.trace?.(ctx.add("*****",owner.itemNow));
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.setField(owner.map,"events",["event8"]);
                        owner.event7 = 1;
                        owner.afterMovieEvent = 3;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event8":
                     ctx.trace?.(ctx.add("&&&&&&&&",owner.itemNow));
                     if(ctx.bool(owner.itemNow == "item1"))
                     {
                        ctx.graph.goto((owner.map)?.["shu"],4);
                        owner.event8 = 1;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event10":
                     owner.etShow?.("等等,好像这个海滩我还有地方没有仔细看过呢?");
                     break;
                  case "event12":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc12"],2);
                        owner.event12 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 12;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
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
   switch(owner.afterMovieEvent)
   {
      case 1:
         (owner.getItem)?.["start"]?.();
         ctx.graph.goto((owner.map)?.["baojian"],3);
         (owner.itemList)?.["push"]?.("item1");
         ctx.graph.goto(owner.itemShow,"item1");
         owner.itemNow = "item1";
         owner.etShow?.("您得到了宝剑");
         break;
      case 2:
         ctx.graph.swapDepths((owner.map)?.["yizhi"],1);
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
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c5v0a273(ctx,owner){
owner.oldMap = "";

}

export function c5v1a274(ctx,owner){

   ctx.startDrag(owner,"_parent.",0);

}

export function c5v1a275(ctx,owner){

   ctx.stopDrag(owner);

}

export function c5v1a276(ctx,owner){

   ctx.graph.goto(owner,3);

}

export function c5v1a277(ctx,owner){

   ctx.externalLink?.(owner.qqxflash_home,"_blank");

}

export function c5v1a278(ctx,owner){

   ctx.externalLink?.("http://gcs.qq.com");

}

export function c5v1a279(ctx,owner){

   if(ctx.bool((this)?.["_name"] != "itemShow"))
   {
      owner.xxx = (this)?.["_x"];
      owner.yyy = (this)?.["_y"];
      ctx.startDrag(this);
   }

}

export function c5v1a280(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
   ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
   ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);

}

export function c5v1a281(ctx,owner){

   ctx.graph.play(owner);

}

export function c5v1a282(ctx,owner){

   ctx.graph.goto(owner.helper,"fadeIn",{play:true});

}

export function c5v1a283(ctx,owner){

   ctx.graph.goto(owner.parent,1);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.unload((owner.parent)?.["movie"]);

}

export function c5v1a284(ctx,owner){

   ctx.graph.goto(owner,"fadeOut");
   ctx.graph.play(owner);

}

export function c5v1a285(ctx,owner){

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

export function c5v1a286(ctx,owner){

   (owner.parent)?.["newKey"]?.("rightKey");

}

export function c5v1a287(ctx,owner){

   (owner.parent)?.["newKey"]?.("leftKey");

}

export function c5v1a288(ctx,owner){

   (owner.parent)?.["newKey"]?.("downKey");

}

export function c5v1a289(ctx,owner){

   (owner.parent)?.["newKey"]?.("upKey");

}

export function c5v1a290(ctx,owner){

   (owner.parent)?.["newKey"]?.("actKey");

}

export function c5v1a291(ctx,owner){

   owner._quality = "HIGH";

}

export function c5v1a292(ctx,owner){

   owner._quality = "MEDIUM";

}

export function c5v1a293(ctx,owner){

   owner._quality = "LOW";

}

export function c5v1a294(ctx,owner){

   ctx.graph.goto(owner.parent,"fadeOut",{play:true});

}

export function c5v1a295(ctx,owner){

   ctx.graph.goto(owner.allShow,"setKey");

}

export function c5v1a296(ctx,owner){

   ctx.graph.goto(owner.allShow,"help");

}

export function c5v1a297(ctx,owner){

   ctx.startDrag(this,true,(-ctx.num(35)),0,35,0);
   owner.draging?.();

}

export function c5v1a298(ctx,owner){

   ctx.stopDrag(this);
   owner.onEnterFrame = undefined;

}

export function c5v1a299(ctx,owner){

   ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);

}

export function c5v1a300(ctx,owner){

   ctx.stopAllSounds?.();
   ctx.graph.goto(owner,3);

}

export function c5v1a301(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a302(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a303(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a304(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a305(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a306(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a307(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a308(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a309(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a310(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a311(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a312(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a313(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a314(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a315(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a316(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c5v1a317(ctx,owner){
ctx.setField((owner.parent)?.["shadow2"],"_visible",0);

}

export function c5v1a318(ctx,owner){
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

export function c5v1a319(ctx,owner){
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

export function c5v1a320(ctx,owner){
owner.skipFrame = 0;
ctx.trace?.("fightStart");

}

export function c5v1a321(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["fightObj"],"_visible",0);
ctx.trace?.(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
ctx.trace?.((((owner.parent)?.["_parent"])?.["map"])?.[((owner.parent)?.["_parent"])?.["fightObj"]]);
ctx.trace?.(((owner.parent)?.["_parent"])?.["fightObj"]);

}

export function c5v1a322(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v1a323(ctx,owner){
owner.component = owner.parent;
(owner.component)?.["registerSkinElement"]?.(owner.track_mc,"scrollTrack");

}

export function c5v1a324(ctx,owner){

}

export function c5v1a325(ctx,owner){

}

export function c5v1a326(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a327(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a328(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a329(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a330(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a331(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a332(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a333(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a334(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");

}

export function c5v1a335(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a336(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a337(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"arrow");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a338(ctx,owner){
owner.component = (owner.parent)?.["_parent"];
(owner.component)?.["registerSkinElement"]?.(owner.arrow_mc,"foregroundDisabled");
(owner.component)?.["registerSkinElement"]?.(owner.face_mc,"face");
(owner.component)?.["registerSkinElement"]?.(owner.shadow_mc,"shadow");
(owner.component)?.["registerSkinElement"]?.(owner.darkshadow_mc,"darkshadow");
(owner.component)?.["registerSkinElement"]?.(owner.highlight_mc,"highlight");
(owner.component)?.["registerSkinElement"]?.(owner.highlight3D_mc,"highlight3D");

}

export function c5v1a339(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a340(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a341(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a342(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a343(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a344(ctx,owner){
owner.skipFrame = 0;
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c5v1a345(ctx,owner){
ctx.stopAllSounds?.();
ctx.graph.stop(owner);
(((owner.parent)?.["_parent"])?.["_parent"])?.["mOver"]?.(5);

}

export function c5v1a346(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a347(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a348(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a349(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a350(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a351(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a352(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a353(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a354(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a355(ctx,owner){
ctx.graph.stop(owner);
owner.xxx = (this)?.["_x"];
owner.yyy = (this)?.["_y"];
owner.onMouseUp = function()
{
   var _loc4_;
   var _loc3_;
   if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(this)?.["_y"] != owner.yyy)((this)?.["_x"] != owner.xxx)))
   {
      ctx.trace?.(ctx.add("itemList=",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
      if(ctx.bool(ctx.hitTest(this,((owner.parent)?.["_parent"])?.["allShow"])))
      {
         owner.name1 = ((owner.parent)?.["_parent"])?.["allShow"];
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 37:logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["_currentframe"] == 30:logicalLeft)(owner.aim == "item5"))))
         {
            owner.aim = "item6";
            (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
            (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
            ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
            ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
            ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
            ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
            ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
            ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
            ctx.graph.goto(owner,"item6");
            (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(owner.iii,1);
            ctx.trace?.(ctx.add("测试",owner.iii));
            ctx.trace?.(ctx.add("测试_array=",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
            _loc4_ = 0;
            while(ctx.bool(ctx.less(_loc4_,(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
            {
               owner.ar = (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.[_loc4_];
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.ar == "item4")(owner.ar == "item5")))
               {
                  (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(_loc4_,1);
                  _loc4_ = (ctx.num(_loc4_)-ctx.num(1));
               }
               _loc4_ = ctx.add(_loc4_,1);
            }
            _loc4_ = 0;
            while(ctx.bool(ctx.less(_loc4_,5)))
            {
               owner.nn = (owner.parent)?.[ctx.add("item",_loc4_)];
               if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.nn)?.["aim"] == "item4")((owner.nn)?.["aim"] == "item5")))
               {
                  ctx.graph.remove(owner.nn);
                  _loc4_ = (ctx.num(_loc4_)-ctx.num(1));
               }
               _loc4_ = ctx.add(_loc4_,1);
            }
            ctx.trace?.(ctx.add("测试_array=",((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"]));
         }
      }
      _loc4_ = 0;
      while(ctx.bool(ctx.less(_loc4_,(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
      {
         owner.name1 = (owner.parent)?.[ctx.add("item",_loc4_)];
         ctx.trace?.(ctx.add("name1=",owner.name1));
         if(ctx.bool(ctx.hitTest(this,owner.name1)))
         {
            ctx.trace?.("碰到");
            ctx.trace?.(ctx.add(ctx.add(ctx.add("aim=",owner.aim),"  aim1="),(owner.name1)?.["aim"]));
            if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item5":logicalLeft)(owner.aim == "item4"))(((logicalLeft)=>ctx.bool(logicalLeft)?(owner.name1)?.["aim"] == "item4":logicalLeft)(owner.aim == "item5"))))
            {
               _loc3_ = 0;
               while(ctx.bool(ctx.less(_loc3_,(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["length"])))
               {
                  owner.ar = (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.[_loc3_];
                  if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:owner.ar == "item4")(owner.ar == "item5")))
                  {
                     (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["splice"]?.(_loc3_,1);
                     _loc3_ = (ctx.num(_loc3_)-ctx.num(1));
                  }
                  _loc3_ = ctx.add(_loc3_,1);
               }
               owner.aim = "item6";
               (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["getItem"])?.["start"]?.();
               (((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemList"])?.["push"]?.("item6");
               ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],"item6");
               ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow","item6");
               ((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["etShow"]?.("组合成功");
               ctx.graph.goto(((owner.parent)?.["_parent"])?.["allShow"],owner.aim);
               ctx.graph.goto(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["itemShow"],owner.aim);
               ctx.setField((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"],"itemNow",owner.aim);
               ctx.graph.goto(owner,"item6");
               ctx.graph.remove(owner.name1);
            }
         }
         _loc4_ = ctx.add(_loc4_,1);
      }
   }
   ctx.stopDrag(this);
   ctx.setField(this,"_x",owner.xxx);
   ctx.setField(this,"_y",owner.yyy);
};

}

export function c5v1a356(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.(ctx.add("talkDIr=",((owner.parent)?.["_parent"])?.["talkDir"]));
ctx.graph.goto(owner,ctx.add(((owner.parent)?.["_parent"])?.["talkDir"],1));

}

export function c5v1a357(ctx,owner){
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

export function c5v1a358(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.("kkkk");
(owner.parent)?.["txtShow"]?.((owner.parent)?.["txtCount"]);

}

export function c5v1a359(ctx,owner){
owner.vars["x"] = owner._x;
owner.vars["y"] = owner._y;
owner.onEnterFrame = function()
{
   owner._x = ctx.add(owner.vars["x"],(owner.parent)?.["_x"]);
   owner._y = ctx.add(owner.vars["y"],(owner.parent)?.["_y"]);
};

}

export function c5v1a360(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a361(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a362(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a363(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a364(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a365(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a366(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a367(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a368(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a369(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a370(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a371(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a372(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a373(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a374(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a375(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a376(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a377(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a378(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a379(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a380(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a381(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a382(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a383(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a384(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a385(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a386(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a387(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a388(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a389(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a390(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a391(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a392(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c5v1a393(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","wa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c5v1a394(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c5v1a395(ctx,owner){
ctx.graph.goto((((owner.parent)?.["_parent"])?.["topBlock"])?.["itemsMovie"],2,{play:true});

}

export function c5v1a396(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sd");
(((owner.parent)?.["_parent"])?.["_parent"])?.["checkEvents"]?.();

}

export function c5v1a397(ctx,owner){
ctx.graph.goto(owner.items,((((owner.parent)?.["_parent"])?.["_parent"])?.["itemList"])?.[0]);

}

export function c5v1a398(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"qqDir","sa");
(((owner.parent)?.["_parent"])?.["_parent"])?.["gamePlay"]?.();

}

export function c5v1a399(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);
ctx.setField(((owner.parent)?.["_parent"])?.["_parent"],"gamePause",0);

}

export function c5v1a400(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["_parent"],"an",1);

}

export function c5v1a401(ctx,owner){
ctx.graph.stop(owner);
ctx.trace?.((((owner.parent)?.["_parent"])?.["_parent"])?.["gamePause"]);

}

export function c5v1a402(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a403(ctx,owner){

}

export function c5v1a404(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a405(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a406(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c5v1a407(ctx,owner){
owner._visible = 0;
ctx.graph.stop(owner);

}

export function c5v1a408(ctx,owner){
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

export function c5v1a409(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a410(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a411(ctx,owner){
ctx.graph.goto(owner.parent,3);

}

export function c5v1a412(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a413(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a414(ctx,owner){
ctx.graph.goto(owner.parent,3);

}

export function c5v1a415(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",548);
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_y",280);
ctx.graph.goto(((owner.parent)?.["_parent"])?.["player"],"wa2");
ctx.graph.swapDepths(owner.parent,1);

}

export function c5v1a416(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a417(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a418(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a419(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a420(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a421(ctx,owner){
ctx.graph.goto(owner.parent,3);

}

export function c5v1a422(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a423(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a424(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a425(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a426(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a427(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a428(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a429(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a430(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a431(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a432(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a433(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a434(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a435(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a436(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a437(ctx,owner){
ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",(owner.parent)?.["_x"]);
ctx.graph.swapDepths(owner.parent,((owner.parent)?.["_parent"])?.["player"]);
ctx.graph.goto(owner.parent,"kkk");

}

export function c5v1a438(ctx,owner){
if(ctx.bool(ctx.lessEqual(ctx.add(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135),400)))
{
   ctx.graph.goto((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],ctx.add(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"],135));
}
else
{
   ctx.graph.goto((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"],400);
}
if(ctx.bool(((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"] == 400))
{
   ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["_parent"],"end");
}

}

export function c5v1a439(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a440(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a441(ctx,owner){
ctx.graph.play(owner);

}

export function c5v1a442(ctx,owner){
ctx.setField((owner.parent)?.["player"],"_x",ctx.add(ctx.add((owner.mc)?.["_x"],(this)?.["_x"]),10));
ctx.setField((owner.parent)?.["player"],"_y",ctx.add(ctx.add((owner.mc)?.["_y"],(this)?.["_y"]),25));
ctx.setField((owner.parent)?.["player"],"_visible",true);
ctx.setField((owner.parent)?.["player"],"_xscale",70);
ctx.setField((owner.parent)?.["player"],"_yscale",70);

}

export function c5v1a443(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c5v1a444(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a445(ctx,owner){
if(ctx.bool(ctx.hitTest(owner.hit,((owner.parent)?.["_parent"])?.["player"])))
{
   if(ctx.bool(owner._xscale == 100))
   {
      ctx.graph.swapDepths(((owner.parent)?.["_parent"])?.["player"],((owner.parent)?.["_parent"])?.["man"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_x",(((owner.parent)?.["_parent"])?.["player"])?.["_x"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_y",(((owner.parent)?.["_parent"])?.["player"])?.["_y"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",(-ctx.num(200)));
      ctx.graph.goto(((owner.parent)?.["_parent"])?.["man"],1);
   }
   else
   {
      ctx.graph.swapDepths(((owner.parent)?.["_parent"])?.["player"],((owner.parent)?.["_parent"])?.["man"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_x",(((owner.parent)?.["_parent"])?.["player"])?.["_x"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["man"],"_y",(((owner.parent)?.["_parent"])?.["player"])?.["_y"]);
      ctx.setField(((owner.parent)?.["_parent"])?.["player"],"_x",(-ctx.num(200)));
      ctx.graph.goto(((owner.parent)?.["_parent"])?.["man"],2);
   }
}

}

export function c5v1a446(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c5v1a447(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a448(ctx,owner){
ctx.trace?.(ctx.add("_parent.ying",(owner.parent)?.["ying"]));
ctx.graph.goto((owner.parent)?.["ying"],1);

}

export function c5v1a449(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a450(ctx,owner){
ctx.graph.goto(owner.parent,2);

}

export function c5v1a451(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a452(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a453(ctx,owner){

   if(ctx.bool(owner._currentframe == 1))
   {
      if(ctx.bool((owner.parent)?.["_currentframe"] == 2))
      {
         ctx.graph.goto(owner.parent,3);
      }
   }
   if(ctx.bool(owner._currentframe == 1))
   {
      ((old)=>(owner.randomttt=old-1,old))(ctx.num(owner.randomttt));
      if(ctx.bool(owner.randomttt == 0))
      {
         if(ctx.bool(ctx.less((this)?.["_x"],360)))
         {
            owner._xscale = (-ctx.num(100));
         }
         else
         {
            owner._xscale = 100;
         }
         owner.randomttt = ctx.add(ctx.randomInt?.(100),80);
         ctx.graph.goto(owner,2,{play:true});
      }
      if(ctx.bool(owner.ttt == 0))
      {
         owner.xxx = (ctx.num(ctx.add((((owner.parent)?.["_parent"])?.["player"])?.["_x"],ctx.randomInt?.(30)))-ctx.num(15));
         owner.yyy = (ctx.num(ctx.add((((owner.parent)?.["_parent"])?.["player"])?.["_y"],ctx.randomInt?.(30)))-ctx.num(15));
         owner.vx = (ctx.num((ctx.num(owner.xxx)-ctx.num((this)?.["_x"])))/ctx.num(20));
         owner.vy = (ctx.num((ctx.num(owner.yyy)-ctx.num((this)?.["_y"])))/ctx.num(20));
         if(ctx.bool(ctx.less(ctx.randomInt?.(100),5)))
         {
            owner.ttt = ctx.add(ctx.randomInt?.(10),20);
            owner.vx = (ctx.num(ctx.randomInt?.(10))-ctx.num(5));
            owner.vy = (ctx.num(ctx.randomInt?.(10))-ctx.num(5));
         }
      }
      else
      {
         ((old)=>(owner.ttt=old-1,old))(ctx.num(owner.ttt));
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,owner.vx):logicalLeft)(ctx.less(700,(this)?.["_x"]))))
      {
         owner.vx = (-ctx.num(ctx.randomInt?.(5)));
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.vx,0):logicalLeft)(ctx.less((this)?.["_x"],100))))
      {
         owner.vx = ctx.randomInt?.(5);
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(0,owner.vy):logicalLeft)(ctx.less(380,(this)?.["_y"]))))
      {
         owner.vy = (-ctx.num(ctx.randomInt?.(5)));
      }
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?ctx.less(owner.vy,0):logicalLeft)(ctx.less((this)?.["_y"],270))))
      {
         owner.vy = ctx.randomInt?.(5);
      }
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.vx)))(this,"_x");
      ((target,key)=>ctx.setField(target,key,ctx.add(target?.[key],owner.vy)))(this,"_y");
   }

}

export function c5v1a454(ctx,owner){

   owner.ttt = 0;
   owner.xxx = (ctx.num(ctx.add(((owner.parent)?.["player"])?.["_x"],ctx.randomInt?.(20)))-ctx.num(10));
   owner.yyy = (ctx.num(ctx.add(((owner.parent)?.["player"])?.["_x"],ctx.randomInt?.(20)))-ctx.num(10));
   owner.randomttt = ctx.add(ctx.randomInt?.(50),50);

}

export function c5v1a455(ctx,owner){
ctx.graph.goto(owner.ying,1);

}

export function c5v1a456(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a457(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a458(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v1a459(ctx,owner){
ctx.graph.play(owner);

}

export function c5v1a460(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(owner.parent,"an",1);
ctx.setField((owner.parent)?.["man"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["man"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
ctx.setField((owner.parent)?.["man"],"minx",164);
ctx.setField((owner.parent)?.["man"],"maxx",369);
ctx.setField((owner.parent)?.["man"],"name1",(owner.parent)?.["hit1"]);

}

export function c5v1a461(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a462(ctx,owner){
ctx.graph.play(owner);

}

export function c5v1a463(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["man"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["man"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
ctx.setField((owner.parent)?.["man"],"minx",192);
ctx.setField((owner.parent)?.["man"],"maxx",414);
ctx.setField(owner.parent,"an",1);
ctx.setField((owner.parent)?.["man"],"name1",(owner.parent)?.["hit2"]);

}

export function c5v1a464(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v1a465(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a466(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v1a467(ctx,owner){
ctx.graph.play(owner);

}

export function c5v1a468(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map8");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v1a469(ctx,owner){
ctx.graph.play(owner);

}

export function c5v1a470(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a471(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map6");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],owner.eventNow,owner.eventNow,0);

}

export function c5v1a472(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(((this)?.["_parent"])?.["_parent"],"changeShow",1);
ctx.setField(((this)?.["_parent"])?.["_parent"],"oldMap","map8");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNow","event000");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventNext","map7");
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventAct","change");
ctx.setField(((this)?.["_parent"])?.["_parent"],"getEventShow",0);
ctx.setField(((this)?.["_parent"])?.["_parent"],"eventStep",0);
ctx.graph.goto((((this)?.["_parent"])?.["_parent"])?.["darkness"],"fadeIn",{play:true});
ctx.setField((((this)?.["_parent"])?.["_parent"])?.["movie"],"_visible",0);
ctx.attach((((this)?.["_parent"])?.["_parent"])?.["movie"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],(((this)?.["_parent"])?.["_parent"])?.["eventNow"],0);

}

export function c5v1a473(ctx,owner){
ctx.graph.play(owner);

}

export function c5v1a474(ctx,owner){
ctx.graph.stop(owner);
ctx.setField(owner.parent,"an",1);
ctx.setField((owner.parent)?.["man"],"_x",ctx.add((owner.mc)?.["_x"],(this)?.["_x"]));
ctx.setField((owner.parent)?.["man"],"_y",ctx.add((owner.mc)?.["_y"],(this)?.["_y"]));
ctx.setField((owner.parent)?.["man"],"minx",203);
ctx.setField((owner.parent)?.["man"],"maxx",379);
ctx.setField((owner.parent)?.["man"],"name1",(owner.parent)?.["hit1"]);

}

export function c5v1a475(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a476(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map2":
      owner.appearx = 208;
      owner.appeary = 343;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map4":
      owner.appearx = 695;
      owner.appeary = 321;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   default:
      owner.appearx = 419;
      owner.appeary = 189;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}
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
if(ctx.bool((owner.parent)?.["event1"] == 0))
{
   owner.talkTxts = ["船长，你到底对黑暗之眼有多少了解呢。我们现在该怎么办？","关于黑暗之眼我也只是耳听目详，没有亲自进入到其中过，还是先寻找入口吧。","哥哥，你看我们现在该怎么办。","先找找入口吧！"];
   owner.talkObj = ["map.player.point","map.point1","map.player.point","map.point0"];
   owner.talkDirs = [0,0,1,0];
   owner.talkNext = [1,0,3,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
else
{
   owner.talkTxts = ["船上有我的荣誉宝剑忘记带下来，也许可以帮上忙"," ","船上也许可以找到有用的东西呢"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   owner.talkTxts = [];
   owner.talkObj = [];
   owner.talkDirs = [];
   owner.talkNext = [];
   owner.talkAreas = [];
}
if(ctx.bool((owner.parent)?.["event6"] == 2))
{
   owner.talkTxts = ["我的荣誉宝剑不可能这么钝的！"," ","妹妹我相信你一定能做到的！"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:(owner.parent)?.["event8"] == 1)((owner.parent)?.["event7"] == 1)))
{
   owner.talkTxts = ["恐怖的黑暗之眼，唔…我们走吧。"," ","让我们进去看个究竟吧"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","man1","man2"];
owner.events = ["event1","event11"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [245,160,269,329];
owner.blocky = [180,211,241,216];
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

export function c5v1a477(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 640;
owner.appeary = 249;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "mapx2";
ctx.setField(owner.parent,"beenMap5",1);
ctx.setField(owner.hitter,"_visible",0);
if(ctx.bool((owner.parent)?.["event5"] == 0))
{
   (owner.events)?.["push"]?.("event5");
   ctx.graph.goto((owner.topBlock)?.["pijiu"],1);
}
else
{
   ctx.graph.goto((owner.topBlock)?.["pijiu"],2);
}
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["waichu1"];
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

export function c5v1a478(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map1":
      owner.appearx = 535;
      owner.appeary = 384;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map3":
      owner.appearx = 448;
      owner.appeary = 237;
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sd2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
      break;
   case "mapx1":
      owner.appearx = 529;
      owner.appeary = 193;
      owner._temp_6 = owner.parent;
      owner._temp_5 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
      break;
   case "mapx2":
      owner.appearx = 637;
      owner.appeary = 147;
      owner._temp_8 = owner.parent;
      owner._temp_7 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wa2");
      ctx.setField(owner._temp_8,owner._temp_7,owner._loc0_);
}
owner.map = "map2";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
if(ctx.bool((owner.parent)?.["event1"] == 0))
{
   owner.talkTxts = ["船长，你到底对黑暗之眼有多少了解呢。我们现在该怎么办？","关于黑暗之眼我也只是耳听目详，没有亲自进入到其中过，还是先寻找入口吧。","哥哥，你看我们现在该怎么办。","先找找入口吧！"];
   owner.talkObj = ["map.player.point","map.point1","map.player.point","map.point0"];
   owner.talkDirs = [0,0,1,0];
   owner.talkNext = [1,0,3,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
else
{
   owner.talkTxts = ["船上有我的荣誉宝剑忘记带下来，也许可以帮上忙","","船上也许可以找到有用的东西呢"];
   owner.talkObj = ["map.point1","","map.point0"];
   owner.talkDirs = [1,1,1];
   owner.talkNext = [0,0,0];
   owner.talkAreas = ["talkArea0","talkArea2"];
}
owner.minScale = 90;
owner.playerScale = 90;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1","block2"];
owner.events = ["event31"];
owner.changes = ["map1","map3","mapx1","mapx2"];
owner.changeMovies = ["event000","kaimen","kaimen","kaimen"];
owner.blockx = [120,25,534];
owner.blocky = [264,239,315];
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

export function c5v1a479(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.blocks = ["yizhi","shafa","zuo"];
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) === "map2"))
{
   owner.appearx = 592;
   owner.appeary = 287;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
owner.map = "map3";
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
owner.events = [];
if(ctx.bool((owner.parent)?.["event4"] == 0))
{
   if(ctx.bool((owner.parent)?.["event3"] == 0))
   {
      ctx.graph.goto((owner.hitter)?.["mc1"],1);
      (owner.events)?.["push"]?.("event2","event3");
      ctx.graph.goto(owner.yizhi,1);
      ctx.graph.goto(owner.baojian,1);
      owner.blockx = [336];
      owner.blocky = [356];
   }
   else
   {
      ctx.graph.goto((owner.hitter)?.["mc1"],2);
      (owner.events)?.["push"]?.("event4");
      ctx.graph.goto(owner.yizhi,3);
      owner.blockx = [3];
      owner.blocky = [3];
   }
}
else
{
   ctx.graph.goto((owner.hitter)?.["mc1"],2);
   ctx.graph.goto(owner.baojian,2);
   ctx.graph.goto(owner.yizhi,3);
   owner.blockx = [3];
   owner.blocky = [3];
}
ctx.setField(owner.blockx,1,490);
ctx.setField(owner.blocky,1,360);
ctx.setField(owner.blockx,2,490);
ctx.setField(owner.blocky,2,350);
owner.minScale = 100;
owner.playerScale = 100;
ctx.setField(owner.hitter,"_visible",0);
owner.changes = ["map2"];
owner.changeMovies = ["waichu1"];
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
   owner._temp_4 = owner.player;
   owner._temp_3 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
else
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}

}

export function c5v1a480(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) === "map1"))
{
   owner.appearx = 100;
   owner.appeary = 400;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
owner.map = "map4";
ctx.graph.goto(owner.shu,1);
ctx.trace?.(ctx.add((owner.parent)?.["event1"],"====="));
owner.events = [];
if(ctx.bool((owner.parent)?.["event4"] == 1))
{
   if(ctx.bool((owner.parent)?.["event5"] == 0))
   {
      owner.events = ["event6"];
   }
   else if(ctx.bool((owner.parent)?.["event7"] == 0))
   {
      owner.events = ["event7"];
   }
   else if(ctx.bool((owner.parent)?.["event8"] == 0))
   {
      ctx.graph.goto(owner.shu,3);
      owner.events = ["event8"];
   }
   else
   {
      ctx.graph.goto(owner.shu,4);
   }
}
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["block0","block1"];
owner.changes = ["map1"];
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
   owner._temp_4 = owner.player;
   owner._temp_3 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
else
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}

}

export function c5v1a481(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner._loc0_ = undefined;
if(ctx.bool((owner._loc0_ = (owner.parent)?.["oldMap"]) === "map1"))
{
   owner.appearx = 117;
   owner.appeary = 296;
   owner._temp_2 = owner.parent;
   owner._temp_1 = "qqDir";
   ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
   ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
}
owner.map = "map5";
owner.events = [];
owner.i = 12;
while(ctx.bool(ctx.less(owner.i,17)))
{
   if(ctx.bool((owner.parent)?.[ctx.add("event",owner.i)] == 0))
   {
      ctx.graph.goto((this)?.[ctx.add("tree",owner.i)],1);
      ctx.graph.goto((owner.hitter)?.[ctx.add("mc",owner.i)],1);
      ctx.graph.goto((owner.topBlock)?.[ctx.add("tree",owner.i)],1);
      (owner.events)?.["push"]?.(ctx.add("event",owner.i));
   }
   else
   {
      ctx.graph.goto((owner.topBlock)?.[ctx.add("tree",owner.i)],((owner.topBlock)?.[ctx.add("tree",owner.i)])?.["_currentframe"]);
      ctx.graph.goto((owner.hitter)?.[ctx.add("mc",owner.i)],2);
      ctx.graph.goto((this)?.[ctx.add("tree",owner.i)],((this)?.[ctx.add("tree",owner.i)])?.["_currentframe"]);
   }
   ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
}
if(ctx.bool((owner.parent)?.["event12"] == 0))
{
   owner.tr;
}
else
{
   ctx.graph.goto(owner.yu,2);
}
owner.talkTxts = ["这些植物好象确实很怕我的烈酒呢~！","哥哥，怎么办，前面好象过不去呢。","妹妹你别着急，一定有办法。"];
owner.talkObj = ["map.point0","map.point1","map.player.point"];
owner.talkDirs = [1,1,1];
owner.talkNext = [0,2,0];
owner.talkAreas = ["talkArea0","talkArea1"];
owner.minScale = 60;
owner.playerScale = 60;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["tree12","block1"];
owner.changes = ["map6"];
owner.changeMovies = ["waichu"];
owner.blockx = [275,460];
owner.blocky = [386,373];
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
   owner._temp_4 = owner.player;
   owner._temp_3 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = ctx.add((ctx.num((ctx.num((owner.player)?.["_y"])/ctx.num(420)))*ctx.num(owner.playerScale)),owner.minScale));
   ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
else
{
   owner._temp_6 = owner.player;
   owner._temp_5 = "_xscale";
   ctx.setField(owner.player,"_yscale",owner._loc0_ = owner.playerScale);
   ctx.setField(owner._temp_6,owner._temp_5,owner._loc0_);
}

}

export function c5v1a482(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.graph.goto((owner.topBlock)?.["taopao"],"kkk");
ctx.graph.goto(owner.man,"kkk");
ctx.attach(owner,"player","player",1);
ctx.setField(owner.h3,"an",0);
owner.events = [];
owner._loc0_ = undefined;
switch((owner.parent)?.["oldMap"])
{
   case "map5":
      owner.events = [];
      ctx.setField(owner.h3,"an",1);
      ctx.graph.goto((owner.topBlock)?.["ying"],"kkk");
      ctx.graph.goto((owner.topBlock)?.["taopao"],1);
      owner.talkTxts = ["也许要有麻烦了……","好大一个鸟窝啊！"];
      owner.talkObj = ["map.point0","map.point1"];
      owner.talkDirs = [1,1,1];
      owner.talkNext = [0,0,0];
      owner.talkAreas = ["talkArea0","talkArea1"];
      owner.appearx = 119;
      owner.appeary = 305;
      owner._temp_2 = owner.parent;
      owner._temp_1 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "wd2");
      ctx.setField(owner._temp_2,owner._temp_1,owner._loc0_);
      break;
   case "map7":
      ctx.graph.goto((owner.topBlock)?.["ying"],1,{play:true});
      ctx.setField(owner.player,"_x",(-ctx.num(50)));
      ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],2,{play:true});
      ctx.setField(owner.player,"_visible",false);
      ctx.setField(owner.player,"_xscale",1);
      ctx.setField(owner.player,"_yscale",1);
      owner._temp_4 = owner.parent;
      owner._temp_3 = "qqDir";
      ctx.setField(owner.parent,"oldDir",owner._loc0_ = "sa2");
      ctx.setField(owner._temp_4,owner._temp_3,owner._loc0_);
}
owner.map = "map6";
if(ctx.bool((owner.parent)?.["event18"] == 0))
{
   ctx.graph.goto(owner.kulou,1);
   ctx.graph.goto((owner.hitter)?.["mc"],1);
   (owner.events)?.["push"]?.("event18");
}
else
{
   ctx.graph.goto(owner.kulou,2);
   ctx.graph.goto((owner.hitter)?.["mc"],2);
}
if(ctx.bool((owner.parent)?.["event19"] == 0))
{
   ctx.graph.goto(owner.topBlock,1);
   (owner.events)?.["push"]?.("event19");
}
else
{
   ctx.setField(owner.topBlock,"_x",0);
   ctx.setField(owner.topBlock,"_y",0);
   ctx.graph.goto(owner.topBlock,3);
   ctx.graph.goto((owner.topBlock)?.["yu"],2);
}
(owner.events)?.["push"]?.("event20","event21","event22");
owner.minScale = 70;
owner.playerScale = 70;
ctx.setField(owner.hitter,"_visible",0);
owner.blocks = ["cao1","teng1","teng2","teng3","zhu","zu2","cao2"];
owner.changes = ["map2","map4"];
owner.changeMovies = ["event000","event000","jinru"];
owner.blockx = [0,94,154,221,533,327,465];
owner.blocky = [367,189,162,112,240,136,258];
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

export function c5v1a483(ctx,owner){

   if(ctx.bool(owner.an == 1))
   {
      if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["h1"],(owner.parent)?.["player"]))(((logicalLeft)=>ctx.bool(logicalLeft)?logicalLeft:ctx.hitTest((owner.parent)?.["h2"],(owner.parent)?.["player"]))(ctx.hitTest(this,(owner.parent)?.["player"])))))
      {
         ctx.trace?.(111);
         owner.an = 0;
         ctx.setField(owner.parent,"talkAreas",[]);
         ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
         ctx.setField((owner.parent)?.["_parent"],"eventNow","zao");
         ctx.setField((owner.parent)?.["_parent"],"eventNext","");
         ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
         ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
         ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
         ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
         ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
         ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
         ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
         ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",6);
      }
   }

}

export function c5v1a484(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.map = "map7";
ctx.setField(owner.player,"_visible",false);
if(ctx.bool((owner.parent)?.["oldMap"] == "map6"))
{
   if(ctx.bool((owner.parent)?.["event19"] == 0))
   {
      ctx.setField((this)?.["teng1"],"_visible",false);
      ctx.setField((this)?.["teng2"],"_visible",false);
      ctx.setField((this)?.["teng3"],"_visible",false);
      ctx.setField((this)?.[ctx.add("teng",owner.tengf)],"_visible",true);
      ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],1);
   }
   else
   {
      ctx.graph.goto(owner.long,1);
      ctx.setField((this)?.["teng1"],"_visible",false);
      ctx.setField((this)?.["teng2"],"_visible",false);
      ctx.setField((this)?.["teng3"],"_visible",false);
      ctx.setField((this)?.[ctx.add("teng",owner.tengf)],"_visible",true);
      ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],2,{play:true});
   }
}
else
{
   ctx.graph.goto(owner.long,1);
   ctx.setField((this)?.["teng1"],"_visible",false);
   ctx.setField((this)?.["teng2"],"_visible",false);
   ctx.setField((this)?.["teng3"],"_visible",false);
   ctx.setField((this)?.[ctx.add("teng",owner.tengf)],"_visible",true);
   ctx.graph.goto((this)?.[ctx.add("teng",owner.tengf)],"kkk",{play:true});
}
owner.an = 0;
if(ctx.bool((owner.parent)?.["event26"] == 0))
{
   ctx.graph.goto(owner.wang,1);
}
else
{
   ctx.graph.goto(owner.wang,2);
}

}

export function c5v1a485(ctx,owner){

   if(ctx.bool((owner.parent)?.["an"] == 1))
   {
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["leftKey"])))
      {
         owner.fram = "a";
         ctx.graph.goto(owner,"a");
         if(ctx.bool(ctx.less(owner.minx,owner._x)))
         {
            owner._x = (ctx.num(owner._x)-ctx.num(5));
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["rightKey"])))
      {
         owner.fram = "d";
         ctx.graph.goto(owner,"d");
         if(ctx.bool(ctx.less(owner._x,owner.maxx)))
         {
            owner._x = ctx.add(owner._x,5);
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["actKey"])))
      {
         if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["_parent"])?.["event26"] == 0:logicalLeft)(ctx.hitTest(this,(owner.parent)?.["event26"]))))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["itemNow"] == "item1"))
            {
               ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
               ctx.setField((owner.parent)?.["_parent"],"eventNow","event26");
               ctx.setField((owner.parent)?.["_parent"],"eventNext","");
               ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
               ctx.setField((owner.parent)?.["_parent"],"event26",1);
               ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
               ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
               ctx.setField((owner.parent)?.["_parent"],"afterMovieEvent",4);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("这块藤蔓正好做网,砍下来如何?");
            }
         }
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event23"])))
         {
            ctx.setField(owner.parent,"an",0);
            ctx.setField(this,"_x",(-ctx.num(200)));
            ctx.graph.goto((owner.parent)?.["teng1"],"kkk",{play:true});
         }
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event24"])))
         {
            ctx.setField(owner.parent,"an",0);
            ctx.setField(this,"_x",(-ctx.num(200)));
            ctx.graph.goto((owner.parent)?.["teng2"],"kkk",{play:true});
         }
      }
      owner.i = 0;
      while(ctx.bool(ctx.less(owner.i,20)))
      {
         owner._y = ctx.add(owner._y,0.5);
         if(ctx.bool(ctx.hitTest(owner.name1,(this)?.["_x"],(this)?.["_y"],true)))
         {
            owner._y = (ctx.num(owner._y)-ctx.num(1));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
   }

}

export function c5v1a486(ctx,owner){

   ctx.graph.goto(owner,ctx.add(owner.fram,"2"));

}

export function c5v1a487(ctx,owner){


}

export function c5v1a488(ctx,owner){
owner.an = 0;

}

export function c5v1a489(ctx,owner){

   if(ctx.bool((owner.parent)?.["an"] == 1))
   {
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["leftKey"])))
      {
         owner.fram = "a";
         ctx.graph.goto(owner,"a");
         if(ctx.bool(ctx.less(owner.minx,owner._x)))
         {
            owner._x = (ctx.num(owner._x)-ctx.num(5));
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["rightKey"])))
      {
         owner.fram = "d";
         ctx.graph.goto(owner,"d");
         if(ctx.bool(ctx.less(owner._x,owner.maxx)))
         {
            owner._x = ctx.add(owner._x,5);
         }
      }
      if(ctx.bool((ctx.keys)?.["isDown"]?.(((owner.parent)?.["_parent"])?.["actKey"])))
      {
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event30"])))
         {
            if(ctx.bool(((owner.parent)?.["_parent"])?.["itemNow"] == "item6"))
            {
               ctx.setField(owner.parent,"an",0);
               ctx.setField((owner.parent)?.["_parent"],"eventShow",1);
               ctx.setField((owner.parent)?.["_parent"],"eventNow","end");
               ctx.setField((owner.parent)?.["_parent"],"eventNext","");
               ctx.setField((owner.parent)?.["_parent"],"eventAct","movie");
               ctx.setField((owner.parent)?.["_parent"],"event30",1);
               ctx.setField((owner.parent)?.["_parent"],"getEventShow",0);
               ((owner.parent)?.["_parent"])?.["gamePausing"]?.();
               ctx.setField((owner.parent)?.["_parent"],"eventStep",0);
               ctx.graph.goto(((owner.parent)?.["_parent"])?.["darkness"],"fadeIn",{play:true});
               ctx.setField(((owner.parent)?.["_parent"])?.["movie"],"_visible",0);
               ctx.attach(((owner.parent)?.["_parent"])?.["movie"],((owner.parent)?.["_parent"])?.["eventNow"],((owner.parent)?.["_parent"])?.["eventNow"],0);
            }
            else
            {
               ((owner.parent)?.["_parent"])?.["etShow"]?.("占据有利地形了,我能用什么武器灭鸟呢?");
            }
         }
         if(ctx.bool(ctx.hitTest(this,(owner.parent)?.["event25"])))
         {
            ctx.setField(owner.parent,"an",0);
            ctx.setField(this,"_x",(-ctx.num(200)));
            ctx.graph.goto((owner.parent)?.["teng1"],"kkk",{play:true});
         }
      }
      owner.i = 0;
      while(ctx.bool(ctx.less(owner.i,20)))
      {
         owner._y = ctx.add(owner._y,0.5);
         if(ctx.bool(ctx.hitTest(owner.name1,(this)?.["_x"],(this)?.["_y"],true)))
         {
            owner._y = (ctx.num(owner._y)-ctx.num(1));
         }
         ((old)=>(owner.i=old+1,old))(ctx.num(owner.i));
      }
   }

}

export function c5v1a490(ctx,owner){

   ctx.graph.goto(owner,ctx.add(owner.fram,"2"));

}

export function c5v1a491(ctx,owner){


}

export function c5v1a492(ctx,owner){
ctx.trace?.(ctx.add("oldMap=",(owner.parent)?.["oldMap"]));
ctx.attach(owner,"player","player",1);
owner.appearx = 576;
owner.appeary = 300;
ctx.setField(owner.parent,"qqDir",ctx.setField(owner.parent,"oldDir","sa2"));
owner.map = "mapx1";
ctx.setField(owner.parent,"beenMap4",1);
ctx.setField(owner.hitter,"_visible",0);
owner.events = [];
owner.changes = ["map2"];
owner.blocks = [];
owner.changeMovies = ["waichu1"];
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

export function c5v1a493(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a494(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a495(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a496(ctx,owner){
owner.upKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["upKey"]];
owner.downKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["downKey"]];
owner.leftKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["leftKey"]];
owner.rightKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["rightKey"]];
owner.actKey = ((((owner.parent)?.["_parent"])?.["_parent"])?.["keyCheck"])?.[(((owner.parent)?.["_parent"])?.["_parent"])?.["actKey"]];
ctx.trace?.(ctx.add("upKey=",owner.upKey));

}

export function c5v1a497(ctx,owner){
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

export function c5v1a498(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c5v1a499(ctx,owner){
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

export function c5v1a500(ctx,owner){

   ctx.graph.goto(owner,((((((this)?.["_parent"])?.["_parent"])?.["_parent"])?.["lifeBar"])?.["bar"])?.["_currentframe"]);

}

export function c5v1a501(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a502(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a503(ctx,owner){
ctx.setField(owner.btn,"useHandCursor",0);

}

export function c5v1a504(ctx,owner){
if(ctx.bool(owner.gp == 0))
{
   (owner.parent)?.["gamePlay"]?.();
}
if(ctx.bool(((logicalLeft)=>ctx.bool(logicalLeft)?((owner.parent)?.["map"])?.["map"] == "map3":logicalLeft)((owner.parent)?.["itemNow"] == "item5")))
{
   ctx.setField(((owner.parent)?.["map"])?.["topBlock"],"_alpha",60);
}

}

export function c5v1a505(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["disBtn"],"_visible",0);
if(ctx.bool((owner.parent)?.["afterMovieEvent"] != 0))
{
   (owner.parent)?.["ameEvent"]?.();
}

}

export function c5v1a506(ctx,owner){
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

export function c5v1a507(ctx,owner){
ctx.trace?.("fadeOut");

}

export function c5v1a508(ctx,owner){
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

export function c5v1a509(ctx,owner){
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

export function c5v1a510(ctx,owner){
ctx.trace?.("mark-----------------------");

}

export function c5v1a511(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a512(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a513(ctx,owner){
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

export function c5v1a514(ctx,owner){
ctx.graph.goto(owner.item,(owner.parent)?.["itemNow"]);

}

export function c5v1a515(ctx,owner){
ctx.graph.goto((owner.parent)?.["darkness"],"fadeOut",{play:true});

}

export function c5v1a516(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c5v1a517(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v1a518(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v1a519(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));
ctx.setField(this,"_x",(-ctx.num((owner.mc)?.["_x"])));
ctx.setField(this,"_y",(-ctx.num((owner.mc)?.["_y"])));

}

export function c5v1a520(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v1a521(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a522(ctx,owner){
owner.skipFrame = (ctx.num(owner._totalframes)-ctx.num(1));

}

export function c5v1a523(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c5v1a524(ctx,owner){
ctx.bool((owner.txt)?.["txt"] != undefined) ? undefined : ctx.graph.remove(this);

}

export function c5v1a525(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a526(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a527(ctx,owner){
owner._visible = 0;

}

export function c5v1a528(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a529(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a530(ctx,owner){
ctx.graph.goto(owner,1,{play:true});

}

export function c5v1a531(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a532(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a533(ctx,owner){
owner._visible = 0;

}

export function c5v1a534(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a535(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a536(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a537(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a538(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a539(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a540(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a541(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a542(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a543(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a544(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a545(ctx,owner){
((owner.parent)?.["_parent"])?.["checkAct"]?.();

}

export function c5v1a546(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c5v1a547(ctx,owner){
ctx.setField((owner.parent)?.["shadow1"],"_visible",0);

}

export function c5v1a548(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a549(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a550(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a551(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a552(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a553(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a554(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a555(ctx,owner){
((owner.parent)?.["_parent"])?.["checkNpcAct"]?.();

}

export function c5v1a556(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a557(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a558(ctx,owner){
ctx.stopAllSounds?.();

}

export function c5v1a559(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.next(((((owner.parent)?.["_parent"])?.["_parent"])?.["_parent"])?.["_parent"]);

}

export function c5v1a560(ctx,owner){
ctx.graph.stop(owner);
ctx.graph.play(((owner.parent)?.["_parent"])?.["_parent"]);

}

export function c5v1a561(ctx,owner){

}

export function c5v1a562(ctx,owner){
ctx.graph.stop(owner);

}

export function c5v1a563(ctx,owner){
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
                  case "event31":
                     ctx.trace?.("event31event31event31event31event31");
                     owner.etShow?.("门被关上了");
                     break;
                  case "event1":
                     ctx.setField(owner.map,"talkTxts",["船上有我的荣誉宝剑忘记带下来，也许可以帮上忙","","船上也许可以找到有用的东西呢"]);
                     ctx.setField(owner.map,"talkObj",["map.point1","","map.point0"]);
                     ctx.setField(owner.map,"talkDirs",[1,1,1]);
                     ctx.setField(owner.map,"talkNext",[0,0,0]);
                     ctx.setField(owner.map,"talkAreas",["talkArea0","talkArea2"]);
                     owner.event1 = 2;
                     owner.etShow?.("粗壮的藤蔓交织在一起，挡住去路，尝试寻找其它的入口。");
                     break;
                  case "event11":
                     (owner.getItem)?.["start"]?.();
                     ctx.graph.goto((owner.map)?.["yu"],2);
                     owner.event11 = 1;
                     if(ctx.bool(owner.event8 == 1))
                     {
                        ctx.setField(owner.map,"events",[]);
                        ctx.setField((owner.map)?.["changes"],2,"map5");
                     }
                     (owner.itemList)?.["push"]?.("item3");
                     ctx.graph.goto(owner.itemShow,"item3");
                     owner.itemNow = "item3";
                     owner.etShow?.("得到鱼肉");
                     break;
                  case "event2":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event3":
                     owner.afterMovieEvent = 2;
                     ctx.graph.goto((owner.map)?.["yizhi"],2);
                     ctx.setField(owner.map,"events",[]);
                     if(ctx.bool(owner.event5 == 0))
                     {
                        ((owner.map)?.["events"])?.["push"]?.("event5");
                     }
                     ((owner.map)?.["events"])?.["push"]?.("event4");
                     owner.event3 = 1;
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(((owner.map)?.["hitter"])?.["mc1"],2);
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     break;
                  case "event4":
                     owner.getEventShow = 0;
                     owner.gamePausing?.();
                     owner.eventStep = 0;
                     ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                     ctx.setField(owner.movie,"_visible",0);
                     ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     owner.afterMovieEvent = 1;
                     owner.event4 = 1;
                     break;
                  case "event5":
                     ctx.setField(((owner.map)?.["topBlock"])?.["pijiu"],"_visible",0);
                     (owner.getItem)?.["start"]?.();
                     owner.event5 = 1;
                     (owner.itemList)?.["push"]?.("item2");
                     ctx.graph.goto(owner.itemShow,"item2");
                     owner.itemNow = "item2";
                     owner.etShow?.("您得到了烈酒");
                     break;
                  case "event6":
                     if(ctx.bool(owner.itemNow == "item1"))
                     {
                        owner.event6 = 2;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event7":
                     ctx.trace?.(ctx.add("*****",owner.itemNow));
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.setField(owner.map,"events",["event8"]);
                        owner.event7 = 1;
                        owner.afterMovieEvent = 3;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
                     }
                     break;
                  case "event8":
                     ctx.trace?.(ctx.add("&&&&&&&&",owner.itemNow));
                     if(ctx.bool(owner.itemNow == "item1"))
                     {
                        ctx.graph.goto((owner.map)?.["shu"],4);
                        owner.event8 = 1;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     break;
                  case "event10":
                     owner.etShow?.("等等,好像这个海滩我还有地方没有仔细看过呢?");
                     break;
                  case "event12":
                     if(ctx.bool(owner.itemNow == "item2"))
                     {
                        ctx.graph.goto(((owner.map)?.["hitter"])?.["mc12"],2);
                        owner.event12 = 1;
                        owner.afterMovieEvent = 5;
                        owner.treenum = 12;
                        owner.getEventShow = 0;
                        owner.gamePausing?.();
                        owner.eventStep = 0;
                        ctx.graph.goto(owner.darkness,"fadeIn",{play:true});
                        ctx.setField(owner.movie,"_visible",0);
                        ctx.attach(owner.movie,owner.eventNow,owner.eventNow,0);
                     }
                     else
                     {
                        owner.etShow?.("您需要一点酒");
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
   switch(owner.afterMovieEvent)
   {
      case 1:
         (owner.getItem)?.["start"]?.();
         ctx.graph.goto((owner.map)?.["baojian"],3);
         (owner.itemList)?.["push"]?.("item1");
         ctx.graph.goto(owner.itemShow,"item1");
         owner.itemNow = "item1";
         owner.etShow?.("您得到了宝剑");
         break;
      case 2:
         ctx.graph.swapDepths((owner.map)?.["yizhi"],1);
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
   }
   owner.afterMovieEvent = 0;
};
ctx.graph.stop(owner);
ctx.setField(ctx.stage,"scaleMode","noScale");
owner.init?.();

}

export function c5v1a564(ctx,owner){
owner.oldMap = "";

}

export const variant0={sourceBytes:5542048,frames:{"405":{"1":(ctx,owner)=>{c5v0a229.call(owner,ctx,owner);c5v0a230.call(owner,ctx,owner);},"2088":(ctx,owner)=>{c5v0a231.call(owner,ctx,owner);}},"470":{"1":(ctx,owner)=>{c5v0a232.call(owner,ctx,owner);},"155":(ctx,owner)=>{c5v0a233.call(owner,ctx,owner);}},"514":{"1":(ctx,owner)=>{c5v0a234.call(owner,ctx,owner);}},"555":{"1":(ctx,owner)=>{c5v0a235.call(owner,ctx,owner);}},"560":{"1":(ctx,owner)=>{c5v0a236.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a237.call(owner,ctx,owner);},"7":(ctx,owner)=>{c5v0a238.call(owner,ctx,owner);}},"581":{"1":(ctx,owner)=>{c5v0a239.call(owner,ctx,owner);}},"583":{"1":(ctx,owner)=>{c5v0a240.call(owner,ctx,owner);}},"665":{"19":(ctx,owner)=>{c5v0a241.call(owner,ctx,owner);}},"682":{"19":(ctx,owner)=>{c5v0a242.call(owner,ctx,owner);}},"686":{"17":(ctx,owner)=>{c5v0a243.call(owner,ctx,owner);}},"701":{"11":(ctx,owner)=>{c5v0a244.call(owner,ctx,owner);}},"718":{"11":(ctx,owner)=>{c5v0a245.call(owner,ctx,owner);}},"720":{"1":(ctx,owner)=>{c5v0a246.call(owner,ctx,owner);}},"730":{"12":(ctx,owner)=>{c5v0a247.call(owner,ctx,owner);}},"739":{"12":(ctx,owner)=>{c5v0a248.call(owner,ctx,owner);}},"752":{"22":(ctx,owner)=>{c5v0a249.call(owner,ctx,owner);}},"763":{"22":(ctx,owner)=>{c5v0a250.call(owner,ctx,owner);}},"785":{"18":(ctx,owner)=>{c5v0a251.call(owner,ctx,owner);}},"803":{"18":(ctx,owner)=>{c5v0a252.call(owner,ctx,owner);}},"811":{"9":(ctx,owner)=>{c5v0a253.call(owner,ctx,owner);}},"817":{"9":(ctx,owner)=>{c5v0a254.call(owner,ctx,owner);}},"851":{"22":(ctx,owner)=>{c5v0a255.call(owner,ctx,owner);}},"879":{"22":(ctx,owner)=>{c5v0a256.call(owner,ctx,owner);}},"886":{"9":(ctx,owner)=>{c5v0a257.call(owner,ctx,owner);}},"893":{"9":(ctx,owner)=>{c5v0a258.call(owner,ctx,owner);}},"894":{"137":(ctx,owner)=>{c5v0a259.call(owner,ctx,owner);},"144":(ctx,owner)=>{c5v0a260.call(owner,ctx,owner);}},"915":{"16":(ctx,owner)=>{c5v0a261.call(owner,ctx,owner);}},"921":{"8":(ctx,owner)=>{c5v0a262.call(owner,ctx,owner);}},"927":{"13":(ctx,owner)=>{c5v0a263.call(owner,ctx,owner);}},"938":{"22":(ctx,owner)=>{c5v0a264.call(owner,ctx,owner);}},"948":{"20":(ctx,owner)=>{c5v0a265.call(owner,ctx,owner);}},"954":{"8":(ctx,owner)=>{c5v0a266.call(owner,ctx,owner);}},"965":{"16":(ctx,owner)=>{c5v0a267.call(owner,ctx,owner);}},"971":{"10":(ctx,owner)=>{c5v0a268.call(owner,ctx,owner);}},"988":{"1":(ctx,owner)=>{c5v0a269.call(owner,ctx,owner);}},"1005":{"1":(ctx,owner)=>{c5v0a27.call(owner,ctx,owner);},"61":(ctx,owner)=>{c5v0a30.call(owner,ctx,owner);},"120":(ctx,owner)=>{c5v0a28.call(owner,ctx,owner);},"121":(ctx,owner)=>{c5v0a29.call(owner,ctx,owner);}},"1056":{"21":(ctx,owner)=>{c5v0a31.call(owner,ctx,owner);}},"1070":{"21":(ctx,owner)=>{c5v0a32.call(owner,ctx,owner);}},"1076":{"11":(ctx,owner)=>{c5v0a33.call(owner,ctx,owner);}},"1084":{"11":(ctx,owner)=>{c5v0a34.call(owner,ctx,owner);}},"1092":{"12":(ctx,owner)=>{c5v0a35.call(owner,ctx,owner);}},"1099":{"12":(ctx,owner)=>{c5v0a36.call(owner,ctx,owner);}},"1114":{"25":(ctx,owner)=>{c5v0a37.call(owner,ctx,owner);}},"1129":{"25":(ctx,owner)=>{c5v0a38.call(owner,ctx,owner);}},"1141":{"21":(ctx,owner)=>{c5v0a39.call(owner,ctx,owner);}},"1153":{"21":(ctx,owner)=>{c5v0a40.call(owner,ctx,owner);}},"1162":{"11":(ctx,owner)=>{c5v0a41.call(owner,ctx,owner);}},"1169":{"11":(ctx,owner)=>{c5v0a42.call(owner,ctx,owner);}},"1192":{"35":(ctx,owner)=>{c5v0a43.call(owner,ctx,owner);}},"1215":{"35":(ctx,owner)=>{c5v0a44.call(owner,ctx,owner);}},"1221":{"9":(ctx,owner)=>{c5v0a45.call(owner,ctx,owner);}},"1222":{"119":(ctx,owner)=>{c5v0a46.call(owner,ctx,owner);},"126":(ctx,owner)=>{c5v0a47.call(owner,ctx,owner);}},"1223":{"1":(ctx,owner)=>{c5v0a48.call(owner,ctx,owner);}},"1224":{"1":(ctx,owner)=>{c5v0a49.call(owner,ctx,owner);}},"1225":{"1":(ctx,owner)=>{c5v0a50.call(owner,ctx,owner);},"29":(ctx,owner)=>{c5v0a51.call(owner,ctx,owner);},"30":(ctx,owner)=>{c5v0a52.call(owner,ctx,owner);}},"1262":{"1":(ctx,owner)=>{c5v0a53.call(owner,ctx,owner);}},"1263":{"1":(ctx,owner)=>{c5v0a54.call(owner,ctx,owner);}},"1279":{"1":(ctx,owner)=>{c5v0a55.call(owner,ctx,owner);}},"1292":{"1":(ctx,owner)=>{c5v0a56.call(owner,ctx,owner);}},"1302":{"1":(ctx,owner)=>{c5v0a57.call(owner,ctx,owner);}},"1311":{"1":(ctx,owner)=>{c5v0a58.call(owner,ctx,owner);}},"1312":{"1":(ctx,owner)=>{c5v0a59.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a60.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v0a61.call(owner,ctx,owner);}},"1319":{"1":(ctx,owner)=>{c5v0a62.call(owner,ctx,owner);}},"1326":{"1":(ctx,owner)=>{c5v0a63.call(owner,ctx,owner);}},"1331":{"1":(ctx,owner)=>{c5v0a64.call(owner,ctx,owner);}},"1332":{"1":(ctx,owner)=>{c5v0a65.call(owner,ctx,owner);}},"1340":{"1":(ctx,owner)=>{c5v0a66.call(owner,ctx,owner);}},"1348":{"1":(ctx,owner)=>{c5v0a67.call(owner,ctx,owner);}},"1356":{"1":(ctx,owner)=>{c5v0a68.call(owner,ctx,owner);}},"1357":{"1":(ctx,owner)=>{c5v0a69.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a70.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v0a71.call(owner,ctx,owner);}},"1396":{"1":(ctx,owner)=>{c5v0a72.call(owner,ctx,owner);}},"1430":{"1":(ctx,owner)=>{c5v0a73.call(owner,ctx,owner);}},"1659":{"1072":(ctx,owner)=>{c5v0a74.call(owner,ctx,owner);}},"1660":{"1":(ctx,owner)=>{c5v0a75.call(owner,ctx,owner);},"1070":(ctx,owner)=>{c5v0a76.call(owner,ctx,owner);}},"1702":{"1":(ctx,owner)=>{c5v0a77.call(owner,ctx,owner);}},"1790":{"1":(ctx,owner)=>{c5v0a78.call(owner,ctx,owner);}},"1829":{"1":(ctx,owner)=>{c5v0a79.call(owner,ctx,owner);}},"1843":{"1":(ctx,owner)=>{c5v0a80.call(owner,ctx,owner);}},"1879":{"1":(ctx,owner)=>{c5v0a81.call(owner,ctx,owner);}},"1918":{"1":(ctx,owner)=>{c5v0a82.call(owner,ctx,owner);}},"1937":{"1":(ctx,owner)=>{c5v0a83.call(owner,ctx,owner);}},"1964":{"1":(ctx,owner)=>{c5v0a84.call(owner,ctx,owner);}},"1969":{"1":(ctx,owner)=>{c5v0a85.call(owner,ctx,owner);}},"1980":{"1":(ctx,owner)=>{c5v0a86.call(owner,ctx,owner);}},"1983":{"1":(ctx,owner)=>{c5v0a87.call(owner,ctx,owner);}},"1984":{"1":(ctx,owner)=>{c5v0a88.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v0a89.call(owner,ctx,owner);}},"1989":{"1":(ctx,owner)=>{c5v0a90.call(owner,ctx,owner);}},"2096":{"9":(ctx,owner)=>{c5v0a91.call(owner,ctx,owner);}},"2103":{"9":(ctx,owner)=>{c5v0a92.call(owner,ctx,owner);}},"2108":{"9":(ctx,owner)=>{c5v0a93.call(owner,ctx,owner);}},"2113":{"9":(ctx,owner)=>{c5v0a94.call(owner,ctx,owner);}},"2118":{"9":(ctx,owner)=>{c5v0a95.call(owner,ctx,owner);}},"2127":{"9":(ctx,owner)=>{c5v0a96.call(owner,ctx,owner);}},"2132":{"9":(ctx,owner)=>{c5v0a97.call(owner,ctx,owner);}},"2141":{"9":(ctx,owner)=>{c5v0a98.call(owner,ctx,owner);}},"2154":{"26":(ctx,owner)=>{c5v0a99.call(owner,ctx,owner);}},"2169":{"28":(ctx,owner)=>{c5v0a100.call(owner,ctx,owner);}},"2185":{"34":(ctx,owner)=>{c5v0a101.call(owner,ctx,owner);}},"2199":{"34":(ctx,owner)=>{c5v0a102.call(owner,ctx,owner);}},"2213":{"32":(ctx,owner)=>{c5v0a103.call(owner,ctx,owner);}},"2231":{"24":(ctx,owner)=>{c5v0a104.call(owner,ctx,owner);}},"2245":{"32":(ctx,owner)=>{c5v0a105.call(owner,ctx,owner);}},"2261":{"24":(ctx,owner)=>{c5v0a106.call(owner,ctx,owner);}},"2283":{"6":(ctx,owner)=>{c5v0a109.call(owner,ctx,owner);},"10":(ctx,owner)=>{c5v0a107.call(owner,ctx,owner);},"24":(ctx,owner)=>{c5v0a108.call(owner,ctx,owner);}},"2303":{"4":(ctx,owner)=>{c5v0a112.call(owner,ctx,owner);},"14":(ctx,owner)=>{c5v0a110.call(owner,ctx,owner);},"24":(ctx,owner)=>{c5v0a111.call(owner,ctx,owner);}},"2328":{"54":(ctx,owner)=>{c5v0a113.call(owner,ctx,owner);}},"2347":{"16":(ctx,owner)=>{c5v0a114.call(owner,ctx,owner);}},"2348":{"54":(ctx,owner)=>{c5v0a115.call(owner,ctx,owner);}},"2349":{"1":(ctx,owner)=>{c5v0a116.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a117.call(owner,ctx,owner);}},"2381":{"1":(ctx,owner)=>{c5v0a118.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a120.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v0a119.call(owner,ctx,owner);}},"2388":{"1":(ctx,owner)=>{c5v0a121.call(owner,ctx,owner);}},"2390":{"1":(ctx,owner)=>{c5v0a122.call(owner,ctx,owner);}},"2391":{"1":(ctx,owner)=>{c5v0a123.call(owner,ctx,owner);}},"2393":{"1":(ctx,owner)=>{c5v0a124.call(owner,ctx,owner);}},"2418":{"10":(ctx,owner)=>{c5v0a125.call(owner,ctx,owner);}},"2419":{"1":(ctx,owner)=>{c5v0a126.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v0a127.call(owner,ctx,owner);}},"2424":{"9":(ctx,owner)=>{c5v0a129.call(owner,ctx,owner);},"10":(ctx,owner)=>{c5v0a128.call(owner,ctx,owner);}},"2426":{"1":(ctx,owner)=>{c5v0a130.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a131.call(owner,ctx,owner);}},"2434":{"1":(ctx,owner)=>{c5v0a132.call(owner,ctx,owner);}},"2453":{"1":(ctx,owner)=>{c5v0a133.call(owner,ctx,owner);},"34":(ctx,owner)=>{c5v0a134.call(owner,ctx,owner);}},"2467":{"22":(ctx,owner)=>{c5v0a135.call(owner,ctx,owner);}},"2479":{"9":(ctx,owner)=>{c5v0a136.call(owner,ctx,owner);}},"2483":{"1":(ctx,owner)=>{c5v0a137.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v0a138.call(owner,ctx,owner);}},"2488":{"1":(ctx,owner)=>{c5v0a139.call(owner,ctx,owner);}},"2500":{"7":(ctx,owner)=>{c5v0a140.call(owner,ctx,owner);}},"2510":{"7":(ctx,owner)=>{c5v0a141.call(owner,ctx,owner);}},"2515":{"6":(ctx,owner)=>{c5v0a142.call(owner,ctx,owner);}},"2521":{"7":(ctx,owner)=>{c5v0a143.call(owner,ctx,owner);}},"2535":{"8":(ctx,owner)=>{c5v0a144.call(owner,ctx,owner);}},"2550":{"7":(ctx,owner)=>{c5v0a145.call(owner,ctx,owner);}},"2552":{"7":(ctx,owner)=>{c5v0a146.call(owner,ctx,owner);}},"2554":{"7":(ctx,owner)=>{c5v0a147.call(owner,ctx,owner);}},"2561":{"7":(ctx,owner)=>{c5v0a148.call(owner,ctx,owner);}},"2566":{"1":(ctx,owner)=>{c5v0a149.call(owner,ctx,owner);}},"2568":{"1":(ctx,owner)=>{c5v0a150.call(owner,ctx,owner);}},"2581":{"2":(ctx,owner)=>{c5v0a152.call(owner,ctx,owner);},"14":(ctx,owner)=>{c5v0a151.call(owner,ctx,owner);}},"2582":{"1":(ctx,owner)=>{c5v0a153.call(owner,ctx,owner);}},"2596":{"1":(ctx,owner)=>{c5v0a154.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a155.call(owner,ctx,owner);},"55":(ctx,owner)=>{c5v0a156.call(owner,ctx,owner);}},"2602":{"127":(ctx,owner)=>{c5v0a157.call(owner,ctx,owner);}},"2615":{"1":(ctx,owner)=>{c5v0a158.call(owner,ctx,owner);},"14":(ctx,owner)=>{c5v0a159.call(owner,ctx,owner);},"33":(ctx,owner)=>{c5v0a160.call(owner,ctx,owner);}},"2621":{"1":(ctx,owner)=>{c5v0a161.call(owner,ctx,owner);},"38":(ctx,owner)=>{c5v0a162.call(owner,ctx,owner);},"39":(ctx,owner)=>{c5v0a163.call(owner,ctx,owner);}},"2627":{"23":(ctx,owner)=>{c5v0a164.call(owner,ctx,owner);}},"2643":{"1":(ctx,owner)=>{c5v0a165.call(owner,ctx,owner);}},"2644":{"1":(ctx,owner)=>{c5v0a166.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a169.call(owner,ctx,owner);}},"2649":{"1":(ctx,owner)=>{c5v0a170.call(owner,ctx,owner);}},"2673":{"1":(ctx,owner)=>{c5v0a171.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a173.call(owner,ctx,owner);},"93":(ctx,owner)=>{c5v0a174.call(owner,ctx,owner);},"151":(ctx,owner)=>{c5v0a172.call(owner,ctx,owner);}},"2676":{"1":(ctx,owner)=>{c5v0a175.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a176.call(owner,ctx,owner);},"49":(ctx,owner)=>{c5v0a177.call(owner,ctx,owner);},"84":(ctx,owner)=>{c5v0a178.call(owner,ctx,owner);}},"2678":{"1":(ctx,owner)=>{c5v0a179.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a181.call(owner,ctx,owner);},"93":(ctx,owner)=>{c5v0a182.call(owner,ctx,owner);},"94":(ctx,owner)=>{c5v0a183.call(owner,ctx,owner);},"169":(ctx,owner)=>{c5v0a180.call(owner,ctx,owner);}},"2680":{"1":(ctx,owner)=>{c5v0a184.call(owner,ctx,owner);}},"2694":{"69":(ctx,owner)=>{c5v0a185.call(owner,ctx,owner);}},"2698":{"2":(ctx,owner)=>{c5v0a187.call(owner,ctx,owner);},"93":(ctx,owner)=>{c5v0a188.call(owner,ctx,owner);},"155":(ctx,owner)=>{c5v0a186.call(owner,ctx,owner);}},"2738":{"1":(ctx,owner)=>{c5v0a189.call(owner,ctx,owner);}},"2740":{"1":(ctx,owner)=>{c5v0a190.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a192.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v0a193.call(owner,ctx,owner);},"4":(ctx,owner)=>{c5v0a194.call(owner,ctx,owner);},"5":(ctx,owner)=>{c5v0a195.call(owner,ctx,owner);},"6":(ctx,owner)=>{c5v0a196.call(owner,ctx,owner);},"7":(ctx,owner)=>{c5v0a198.call(owner,ctx,owner);},"8":(ctx,owner)=>{c5v0a202.call(owner,ctx,owner);},"9":(ctx,owner)=>{c5v0a206.call(owner,ctx,owner);},"10":(ctx,owner)=>{c5v0a191.call(owner,ctx,owner);}},"2754":{"1":(ctx,owner)=>{c5v0a207.call(owner,ctx,owner);}},"2816":{"1":(ctx,owner)=>{c5v0a208.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a209.call(owner,ctx,owner);}},"2847":{"1":(ctx,owner)=>{c5v0a210.call(owner,ctx,owner);}},"2860":{"1":(ctx,owner)=>{c5v0a211.call(owner,ctx,owner);}},"2861":{"1":(ctx,owner)=>{c5v0a212.call(owner,ctx,owner);}},"2862":{"1":(ctx,owner)=>{c5v0a214.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a216.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v0a215.call(owner,ctx,owner);},"20":(ctx,owner)=>{c5v0a217.call(owner,ctx,owner);}},"2869":{"1":(ctx,owner)=>{c5v0a218.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a221.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v0a223.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v0a219.call(owner,ctx,owner);},"12":(ctx,owner)=>{c5v0a220.call(owner,ctx,owner);},"20":(ctx,owner)=>{c5v0a222.call(owner,ctx,owner);}},"2879":{"1":(ctx,owner)=>{c5v0a224.call(owner,ctx,owner);}},"2880":{"1":(ctx,owner)=>{c5v0a225.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a227.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v0a226.call(owner,ctx,owner);},"20":(ctx,owner)=>{c5v0a228.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c5v0a270.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v0a271.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v0a272.call(owner,ctx,owner);},"4":(ctx,owner)=>{c5v0a273.call(owner,ctx,owner);}}},frameActions:{"405":{"1":[c5v0a229,c5v0a230],"2088":[c5v0a231]},"470":{"1":[c5v0a232],"155":[c5v0a233]},"514":{"1":[c5v0a234]},"555":{"1":[c5v0a235]},"560":{"1":[c5v0a236],"2":[c5v0a237],"7":[c5v0a238]},"581":{"1":[c5v0a239]},"583":{"1":[c5v0a240]},"665":{"19":[c5v0a241]},"682":{"19":[c5v0a242]},"686":{"17":[c5v0a243]},"701":{"11":[c5v0a244]},"718":{"11":[c5v0a245]},"720":{"1":[c5v0a246]},"730":{"12":[c5v0a247]},"739":{"12":[c5v0a248]},"752":{"22":[c5v0a249]},"763":{"22":[c5v0a250]},"785":{"18":[c5v0a251]},"803":{"18":[c5v0a252]},"811":{"9":[c5v0a253]},"817":{"9":[c5v0a254]},"851":{"22":[c5v0a255]},"879":{"22":[c5v0a256]},"886":{"9":[c5v0a257]},"893":{"9":[c5v0a258]},"894":{"137":[c5v0a259],"144":[c5v0a260]},"915":{"16":[c5v0a261]},"921":{"8":[c5v0a262]},"927":{"13":[c5v0a263]},"938":{"22":[c5v0a264]},"948":{"20":[c5v0a265]},"954":{"8":[c5v0a266]},"965":{"16":[c5v0a267]},"971":{"10":[c5v0a268]},"988":{"1":[c5v0a269]},"1005":{"1":[c5v0a27],"61":[c5v0a30],"120":[c5v0a28],"121":[c5v0a29]},"1056":{"21":[c5v0a31]},"1070":{"21":[c5v0a32]},"1076":{"11":[c5v0a33]},"1084":{"11":[c5v0a34]},"1092":{"12":[c5v0a35]},"1099":{"12":[c5v0a36]},"1114":{"25":[c5v0a37]},"1129":{"25":[c5v0a38]},"1141":{"21":[c5v0a39]},"1153":{"21":[c5v0a40]},"1162":{"11":[c5v0a41]},"1169":{"11":[c5v0a42]},"1192":{"35":[c5v0a43]},"1215":{"35":[c5v0a44]},"1221":{"9":[c5v0a45]},"1222":{"119":[c5v0a46],"126":[c5v0a47]},"1223":{"1":[c5v0a48]},"1224":{"1":[c5v0a49]},"1225":{"1":[c5v0a50],"29":[c5v0a51],"30":[c5v0a52]},"1262":{"1":[c5v0a53]},"1263":{"1":[c5v0a54]},"1279":{"1":[c5v0a55]},"1292":{"1":[c5v0a56]},"1302":{"1":[c5v0a57]},"1311":{"1":[c5v0a58]},"1312":{"1":[c5v0a59],"2":[c5v0a60],"3":[c5v0a61]},"1319":{"1":[c5v0a62]},"1326":{"1":[c5v0a63]},"1331":{"1":[c5v0a64]},"1332":{"1":[c5v0a65]},"1340":{"1":[c5v0a66]},"1348":{"1":[c5v0a67]},"1356":{"1":[c5v0a68]},"1357":{"1":[c5v0a69],"2":[c5v0a70],"3":[c5v0a71]},"1396":{"1":[c5v0a72]},"1430":{"1":[c5v0a73]},"1659":{"1072":[c5v0a74]},"1660":{"1":[c5v0a75],"1070":[c5v0a76]},"1702":{"1":[c5v0a77]},"1790":{"1":[c5v0a78]},"1829":{"1":[c5v0a79]},"1843":{"1":[c5v0a80]},"1879":{"1":[c5v0a81]},"1918":{"1":[c5v0a82]},"1937":{"1":[c5v0a83]},"1964":{"1":[c5v0a84]},"1969":{"1":[c5v0a85]},"1980":{"1":[c5v0a86]},"1983":{"1":[c5v0a87]},"1984":{"1":[c5v0a88],"11":[c5v0a89]},"1989":{"1":[c5v0a90]},"2096":{"9":[c5v0a91]},"2103":{"9":[c5v0a92]},"2108":{"9":[c5v0a93]},"2113":{"9":[c5v0a94]},"2118":{"9":[c5v0a95]},"2127":{"9":[c5v0a96]},"2132":{"9":[c5v0a97]},"2141":{"9":[c5v0a98]},"2154":{"26":[c5v0a99]},"2169":{"28":[c5v0a100]},"2185":{"34":[c5v0a101]},"2199":{"34":[c5v0a102]},"2213":{"32":[c5v0a103]},"2231":{"24":[c5v0a104]},"2245":{"32":[c5v0a105]},"2261":{"24":[c5v0a106]},"2283":{"6":[c5v0a109],"10":[c5v0a107],"24":[c5v0a108]},"2303":{"4":[c5v0a112],"14":[c5v0a110],"24":[c5v0a111]},"2328":{"54":[c5v0a113]},"2347":{"16":[c5v0a114]},"2348":{"54":[c5v0a115]},"2349":{"1":[c5v0a116],"2":[c5v0a117]},"2381":{"1":[c5v0a118],"2":[c5v0a120],"11":[c5v0a119]},"2388":{"1":[c5v0a121]},"2390":{"1":[c5v0a122]},"2391":{"1":[c5v0a123]},"2393":{"1":[c5v0a124]},"2418":{"10":[c5v0a125]},"2419":{"1":[c5v0a126],"3":[c5v0a127]},"2424":{"9":[c5v0a129],"10":[c5v0a128]},"2426":{"1":[c5v0a130],"2":[c5v0a131]},"2434":{"1":[c5v0a132]},"2453":{"1":[c5v0a133],"34":[c5v0a134]},"2467":{"22":[c5v0a135]},"2479":{"9":[c5v0a136]},"2483":{"1":[c5v0a137],"3":[c5v0a138]},"2488":{"1":[c5v0a139]},"2500":{"7":[c5v0a140]},"2510":{"7":[c5v0a141]},"2515":{"6":[c5v0a142]},"2521":{"7":[c5v0a143]},"2535":{"8":[c5v0a144]},"2550":{"7":[c5v0a145]},"2552":{"7":[c5v0a146]},"2554":{"7":[c5v0a147]},"2561":{"7":[c5v0a148]},"2566":{"1":[c5v0a149]},"2568":{"1":[c5v0a150]},"2581":{"2":[c5v0a152],"14":[c5v0a151]},"2582":{"1":[c5v0a153]},"2596":{"1":[c5v0a154],"2":[c5v0a155],"55":[c5v0a156]},"2602":{"127":[c5v0a157]},"2615":{"1":[c5v0a158],"14":[c5v0a159],"33":[c5v0a160]},"2621":{"1":[c5v0a161],"38":[c5v0a162],"39":[c5v0a163]},"2627":{"23":[c5v0a164]},"2643":{"1":[c5v0a165]},"2644":{"1":[c5v0a166],"2":[c5v0a169]},"2649":{"1":[c5v0a170]},"2673":{"1":[c5v0a171],"2":[c5v0a173],"93":[c5v0a174],"151":[c5v0a172]},"2676":{"1":[c5v0a175],"2":[c5v0a176],"49":[c5v0a177],"84":[c5v0a178]},"2678":{"1":[c5v0a179],"2":[c5v0a181],"93":[c5v0a182],"94":[c5v0a183],"169":[c5v0a180]},"2680":{"1":[c5v0a184]},"2694":{"69":[c5v0a185]},"2698":{"2":[c5v0a187],"93":[c5v0a188],"155":[c5v0a186]},"2738":{"1":[c5v0a189]},"2740":{"1":[c5v0a190],"2":[c5v0a192],"3":[c5v0a193],"4":[c5v0a194],"5":[c5v0a195],"6":[c5v0a196],"7":[c5v0a198],"8":[c5v0a202],"9":[c5v0a206],"10":[c5v0a191]},"2754":{"1":[c5v0a207]},"2816":{"1":[c5v0a208],"2":[c5v0a209]},"2847":{"1":[c5v0a210]},"2860":{"1":[c5v0a211]},"2861":{"1":[c5v0a212]},"2862":{"1":[c5v0a214],"2":[c5v0a216],"11":[c5v0a215],"20":[c5v0a217]},"2869":{"1":[c5v0a218],"2":[c5v0a221],"3":[c5v0a223],"11":[c5v0a219],"12":[c5v0a220],"20":[c5v0a222]},"2879":{"1":[c5v0a224]},"2880":{"1":[c5v0a225],"2":[c5v0a227],"11":[c5v0a226],"20":[c5v0a228]},"main":{"1":[c5v0a270],"2":[c5v0a271],"3":[c5v0a272],"4":[c5v0a273]}},buttons:{"1250":{"press":(ctx,owner)=>{c5v0a0.call(owner,ctx,owner);},"release":(ctx,owner)=>{c5v0a1.call(owner,ctx,owner);}},"1255":{"release":(ctx,owner)=>{c5v0a2.call(owner,ctx,owner);}},"1275":{"release":(ctx,owner)=>{c5v0a3.call(owner,ctx,owner);}},"1277":{"release":(ctx,owner)=>{c5v0a4.call(owner,ctx,owner);}},"1972":{"press":(ctx,owner)=>{c5v0a5.call(owner,ctx,owner);},"release":(ctx,owner)=>{c5v0a6.call(owner,ctx,owner);}},"2359":{"release":(ctx,owner)=>{c5v0a7.call(owner,ctx,owner);}},"2365":{"release":(ctx,owner)=>{c5v0a8.call(owner,ctx,owner);}},"2370":{"release":(ctx,owner)=>{c5v0a9.call(owner,ctx,owner);}},"2379":{"release":(ctx,owner)=>{c5v0a10.call(owner,ctx,owner);}},"2746":{"release":(ctx,owner)=>{c5v0a11.call(owner,ctx,owner);}},"2792":{"release":(ctx,owner)=>{c5v0a12.call(owner,ctx,owner);}},"2793":{"release":(ctx,owner)=>{c5v0a13.call(owner,ctx,owner);}},"2794":{"release":(ctx,owner)=>{c5v0a14.call(owner,ctx,owner);}},"2795":{"release":(ctx,owner)=>{c5v0a15.call(owner,ctx,owner);}},"2796":{"release":(ctx,owner)=>{c5v0a16.call(owner,ctx,owner);}},"2827":{"release":(ctx,owner)=>{c5v0a17.call(owner,ctx,owner);}},"2830":{"release":(ctx,owner)=>{c5v0a18.call(owner,ctx,owner);}},"2834":{"release":(ctx,owner)=>{c5v0a19.call(owner,ctx,owner);}},"2836":{"release":(ctx,owner)=>{c5v0a20.call(owner,ctx,owner);}},"2838":{"release":(ctx,owner)=>{c5v0a21.call(owner,ctx,owner);}},"2840":{"release":(ctx,owner)=>{c5v0a22.call(owner,ctx,owner);}},"2846":{"press":(ctx,owner)=>{c5v0a23.call(owner,ctx,owner);},"release":(ctx,owner)=>{c5v0a24.call(owner,ctx,owner);}},"2871":{"release":(ctx,owner)=>{c5v0a25.call(owner,ctx,owner);}},"2888":{"release":(ctx,owner)=>{c5v0a26.call(owner,ctx,owner);}}},clips:[{"parent":"2644","frame":1,"character":"2615","name":"","depth":3,"event":"enterFrame","handler":c5v0a167},{"parent":"2644","frame":1,"character":"2615","name":"","depth":3,"event":"load","handler":c5v0a168},{"parent":"2740","frame":6,"character":"2651","name":"","depth":279,"event":"enterFrame","handler":c5v0a197},{"parent":"2740","frame":7,"character":"2349","name":"player","depth":28,"event":"enterFrame","handler":c5v0a199},{"parent":"2740","frame":7,"character":"2349","name":"player","depth":28,"event":"keyUp","handler":c5v0a200},{"parent":"2740","frame":7,"character":"2349","name":"player","depth":28,"event":"load","handler":c5v0a201},{"parent":"2740","frame":8,"character":"2349","name":"player","depth":28,"event":"enterFrame","handler":c5v0a203},{"parent":"2740","frame":8,"character":"2349","name":"player","depth":28,"event":"keyUp","handler":c5v0a204},{"parent":"2740","frame":8,"character":"2349","name":"player","depth":28,"event":"load","handler":c5v0a205},{"parent":"2861","frame":1,"character":"2754","name":"","depth":11,"event":"enterFrame","handler":c5v0a213}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"405":["_totalframes","mc","skipFrame"],"470":["_totalframes","skipFrame"],"514":["_totalframes","skipFrame"],"555":["_totalframes","skipFrame"],"560":["txt"],"581":[],"583":["_visible"],"665":[],"682":[],"686":[],"701":[],"718":[],"720":["_visible"],"730":[],"739":[],"752":[],"763":[],"785":[],"803":[],"811":[],"817":[],"851":[],"879":[],"886":[],"893":[],"894":[],"915":[],"921":[],"927":[],"938":[],"948":[],"954":[],"965":[],"971":[],"988":[],"1005":[],"1056":[],"1070":[],"1076":[],"1084":[],"1092":[],"1099":[],"1114":[],"1129":[],"1141":[],"1153":[],"1162":[],"1169":[],"1192":[],"1215":[],"1221":[],"1222":[],"1223":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1224":["tt"],"1225":["skipFrame"],"1250":[],"1255":[],"1262":["component","track_mc"],"1263":[],"1275":["qqxflash_home"],"1277":[],"1279":[],"1292":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1302":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1311":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1312":[],"1319":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1326":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1331":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1332":[],"1340":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1348":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1356":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1357":[],"1396":["_totalframes","skipFrame"],"1430":["_totalframes","skipFrame"],"1659":[],"1660":["skipFrame"],"1702":["_totalframes","skipFrame"],"1790":["_totalframes","skipFrame"],"1829":["_totalframes","skipFrame"],"1843":["_totalframes","skipFrame"],"1879":["_totalframes","skipFrame"],"1918":["_totalframes","skipFrame"],"1937":["_totalframes","skipFrame"],"1964":["_totalframes","skipFrame"],"1969":["_totalframes","skipFrame"],"1972":["aim","xxx","yyy"],"1980":["aim","ar","iii","name1","nn","onMouseUp","xxx","yyy"],"1983":[],"1984":["_currentframe","back","onEnterFrame"],"1989":["_x","_y","onEnterFrame","x","y"],"2096":[],"2103":[],"2108":[],"2113":[],"2118":[],"2127":[],"2132":[],"2141":[],"2154":[],"2169":[],"2185":[],"2199":[],"2213":[],"2231":[],"2245":[],"2261":[],"2283":["items"],"2303":["items"],"2328":[],"2347":[],"2348":[],"2349":["_x","_y","fram","i","maxx","minx","name1"],"2359":[],"2365":["helper"],"2370":[],"2379":[],"2381":["btn"],"2388":["_visible"],"2390":["_visible","hitted","onEnterFrame","ox","oy"],"2391":[],"2393":[],"2418":[],"2419":[],"2424":[],"2426":[],"2434":[],"2453":[],"2467":[],"2479":[],"2483":[],"2488":[],"2500":[],"2510":[],"2515":[],"2521":[],"2535":[],"2550":[],"2552":[],"2554":[],"2561":[],"2566":[],"2568":[],"2581":[],"2582":[],"2596":["mc"],"2602":[],"2615":["_currentframe","_xscale","hit","randomttt","ttt","vx","vy","xxx","yyy"],"2621":[],"2627":[],"2643":[],"2644":["ying"],"2649":[],"2651":["an"],"2673":["mc"],"2676":["mc"],"2678":[],"2680":[],"2694":["eventNow"],"2698":["mc"],"2738":[],"2740":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","an","appearx","appeary","baojian","blocks","blockx","blocky","changeMovies","changes","events","h3","hitter","i","kulou","long","man","map","minScale","player","playerScale","shu","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","tengf","topBlock","tr","tree","wang","yizhi","yu"],"2746":["gp"],"2754":[],"2792":[],"2793":[],"2794":[],"2795":[],"2796":[],"2816":["actKey","downKey","leftKey","rightKey","upKey"],"2827":["_quality"],"2830":["_quality"],"2834":["_quality"],"2836":[],"2838":["allShow"],"2840":["allShow"],"2846":["draging","onEnterFrame"],"2847":["_x","bb","draging","onEnterFrame"],"2860":["btn"],"2861":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"2862":["btn","gp"],"2869":["i","onEnterFrame"],"2871":["aim"],"2879":[],"2880":["delay","fadeOut","item"],"2888":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const variant1={sourceBytes:5777568,frames:{"396":{"1":(ctx,owner)=>{c5v1a516.call(owner,ctx,owner);},"2217":(ctx,owner)=>{c5v1a517.call(owner,ctx,owner);},"2220":(ctx,owner)=>{c5v1a518.call(owner,ctx,owner);}},"465":{"1":(ctx,owner)=>{c5v1a519.call(owner,ctx,owner);},"155":(ctx,owner)=>{c5v1a520.call(owner,ctx,owner);}},"510":{"1":(ctx,owner)=>{c5v1a521.call(owner,ctx,owner);}},"543":{"1":(ctx,owner)=>{c5v1a522.call(owner,ctx,owner);}},"548":{"1":(ctx,owner)=>{c5v1a523.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a524.call(owner,ctx,owner);},"7":(ctx,owner)=>{c5v1a525.call(owner,ctx,owner);}},"569":{"1":(ctx,owner)=>{c5v1a526.call(owner,ctx,owner);}},"571":{"1":(ctx,owner)=>{c5v1a527.call(owner,ctx,owner);}},"653":{"19":(ctx,owner)=>{c5v1a528.call(owner,ctx,owner);}},"670":{"19":(ctx,owner)=>{c5v1a529.call(owner,ctx,owner);}},"674":{"17":(ctx,owner)=>{c5v1a530.call(owner,ctx,owner);}},"689":{"11":(ctx,owner)=>{c5v1a531.call(owner,ctx,owner);}},"706":{"11":(ctx,owner)=>{c5v1a532.call(owner,ctx,owner);}},"708":{"1":(ctx,owner)=>{c5v1a533.call(owner,ctx,owner);}},"718":{"12":(ctx,owner)=>{c5v1a534.call(owner,ctx,owner);}},"727":{"12":(ctx,owner)=>{c5v1a535.call(owner,ctx,owner);}},"740":{"22":(ctx,owner)=>{c5v1a536.call(owner,ctx,owner);}},"751":{"22":(ctx,owner)=>{c5v1a537.call(owner,ctx,owner);}},"773":{"18":(ctx,owner)=>{c5v1a538.call(owner,ctx,owner);}},"791":{"18":(ctx,owner)=>{c5v1a539.call(owner,ctx,owner);}},"799":{"9":(ctx,owner)=>{c5v1a540.call(owner,ctx,owner);}},"805":{"9":(ctx,owner)=>{c5v1a541.call(owner,ctx,owner);}},"839":{"22":(ctx,owner)=>{c5v1a542.call(owner,ctx,owner);}},"867":{"22":(ctx,owner)=>{c5v1a543.call(owner,ctx,owner);}},"874":{"9":(ctx,owner)=>{c5v1a544.call(owner,ctx,owner);}},"881":{"9":(ctx,owner)=>{c5v1a545.call(owner,ctx,owner);}},"882":{"137":(ctx,owner)=>{c5v1a546.call(owner,ctx,owner);},"144":(ctx,owner)=>{c5v1a547.call(owner,ctx,owner);}},"903":{"16":(ctx,owner)=>{c5v1a548.call(owner,ctx,owner);}},"909":{"8":(ctx,owner)=>{c5v1a549.call(owner,ctx,owner);}},"915":{"13":(ctx,owner)=>{c5v1a550.call(owner,ctx,owner);}},"926":{"22":(ctx,owner)=>{c5v1a551.call(owner,ctx,owner);}},"936":{"20":(ctx,owner)=>{c5v1a552.call(owner,ctx,owner);}},"942":{"8":(ctx,owner)=>{c5v1a553.call(owner,ctx,owner);}},"953":{"16":(ctx,owner)=>{c5v1a554.call(owner,ctx,owner);}},"959":{"10":(ctx,owner)=>{c5v1a555.call(owner,ctx,owner);}},"976":{"1":(ctx,owner)=>{c5v1a556.call(owner,ctx,owner);}},"993":{"1":(ctx,owner)=>{c5v1a557.call(owner,ctx,owner);},"61":(ctx,owner)=>{c5v1a560.call(owner,ctx,owner);},"120":(ctx,owner)=>{c5v1a558.call(owner,ctx,owner);},"121":(ctx,owner)=>{c5v1a559.call(owner,ctx,owner);}},"1044":{"21":(ctx,owner)=>{c5v1a301.call(owner,ctx,owner);}},"1058":{"21":(ctx,owner)=>{c5v1a302.call(owner,ctx,owner);}},"1064":{"11":(ctx,owner)=>{c5v1a303.call(owner,ctx,owner);}},"1072":{"11":(ctx,owner)=>{c5v1a304.call(owner,ctx,owner);}},"1080":{"12":(ctx,owner)=>{c5v1a305.call(owner,ctx,owner);}},"1087":{"12":(ctx,owner)=>{c5v1a306.call(owner,ctx,owner);}},"1102":{"25":(ctx,owner)=>{c5v1a307.call(owner,ctx,owner);}},"1117":{"25":(ctx,owner)=>{c5v1a308.call(owner,ctx,owner);}},"1129":{"21":(ctx,owner)=>{c5v1a309.call(owner,ctx,owner);}},"1141":{"21":(ctx,owner)=>{c5v1a310.call(owner,ctx,owner);}},"1150":{"11":(ctx,owner)=>{c5v1a311.call(owner,ctx,owner);}},"1157":{"11":(ctx,owner)=>{c5v1a312.call(owner,ctx,owner);}},"1180":{"35":(ctx,owner)=>{c5v1a313.call(owner,ctx,owner);}},"1203":{"35":(ctx,owner)=>{c5v1a314.call(owner,ctx,owner);}},"1209":{"9":(ctx,owner)=>{c5v1a315.call(owner,ctx,owner);}},"1210":{"119":(ctx,owner)=>{c5v1a316.call(owner,ctx,owner);},"126":(ctx,owner)=>{c5v1a317.call(owner,ctx,owner);}},"1211":{"1":(ctx,owner)=>{c5v1a318.call(owner,ctx,owner);}},"1212":{"1":(ctx,owner)=>{c5v1a319.call(owner,ctx,owner);}},"1213":{"1":(ctx,owner)=>{c5v1a320.call(owner,ctx,owner);},"29":(ctx,owner)=>{c5v1a321.call(owner,ctx,owner);},"30":(ctx,owner)=>{c5v1a322.call(owner,ctx,owner);}},"1250":{"1":(ctx,owner)=>{c5v1a323.call(owner,ctx,owner);}},"1251":{"1":(ctx,owner)=>{c5v1a324.call(owner,ctx,owner);}},"1267":{"1":(ctx,owner)=>{c5v1a325.call(owner,ctx,owner);}},"1280":{"1":(ctx,owner)=>{c5v1a326.call(owner,ctx,owner);}},"1290":{"1":(ctx,owner)=>{c5v1a327.call(owner,ctx,owner);}},"1299":{"1":(ctx,owner)=>{c5v1a328.call(owner,ctx,owner);}},"1300":{"1":(ctx,owner)=>{c5v1a329.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a330.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v1a331.call(owner,ctx,owner);}},"1307":{"1":(ctx,owner)=>{c5v1a332.call(owner,ctx,owner);}},"1314":{"1":(ctx,owner)=>{c5v1a333.call(owner,ctx,owner);}},"1319":{"1":(ctx,owner)=>{c5v1a334.call(owner,ctx,owner);}},"1320":{"1":(ctx,owner)=>{c5v1a335.call(owner,ctx,owner);}},"1328":{"1":(ctx,owner)=>{c5v1a336.call(owner,ctx,owner);}},"1336":{"1":(ctx,owner)=>{c5v1a337.call(owner,ctx,owner);}},"1344":{"1":(ctx,owner)=>{c5v1a338.call(owner,ctx,owner);}},"1345":{"1":(ctx,owner)=>{c5v1a339.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a340.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v1a341.call(owner,ctx,owner);}},"1384":{"1":(ctx,owner)=>{c5v1a342.call(owner,ctx,owner);}},"1418":{"1":(ctx,owner)=>{c5v1a343.call(owner,ctx,owner);}},"1628":{"1":(ctx,owner)=>{c5v1a344.call(owner,ctx,owner);},"1075":(ctx,owner)=>{c5v1a345.call(owner,ctx,owner);}},"1675":{"1":(ctx,owner)=>{c5v1a346.call(owner,ctx,owner);}},"1765":{"1":(ctx,owner)=>{c5v1a347.call(owner,ctx,owner);}},"1805":{"1":(ctx,owner)=>{c5v1a348.call(owner,ctx,owner);}},"1817":{"1":(ctx,owner)=>{c5v1a349.call(owner,ctx,owner);}},"1854":{"1":(ctx,owner)=>{c5v1a350.call(owner,ctx,owner);}},"1895":{"1":(ctx,owner)=>{c5v1a351.call(owner,ctx,owner);}},"1915":{"1":(ctx,owner)=>{c5v1a352.call(owner,ctx,owner);}},"1943":{"1":(ctx,owner)=>{c5v1a353.call(owner,ctx,owner);}},"1948":{"1":(ctx,owner)=>{c5v1a354.call(owner,ctx,owner);}},"1962":{"1":(ctx,owner)=>{c5v1a355.call(owner,ctx,owner);}},"1965":{"1":(ctx,owner)=>{c5v1a356.call(owner,ctx,owner);}},"1966":{"1":(ctx,owner)=>{c5v1a357.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v1a358.call(owner,ctx,owner);}},"1973":{"1":(ctx,owner)=>{c5v1a359.call(owner,ctx,owner);}},"2183":{"9":(ctx,owner)=>{c5v1a360.call(owner,ctx,owner);}},"2188":{"9":(ctx,owner)=>{c5v1a361.call(owner,ctx,owner);}},"2196":{"9":(ctx,owner)=>{c5v1a362.call(owner,ctx,owner);}},"2204":{"9":(ctx,owner)=>{c5v1a363.call(owner,ctx,owner);}},"2209":{"9":(ctx,owner)=>{c5v1a364.call(owner,ctx,owner);}},"2214":{"10":(ctx,owner)=>{c5v1a365.call(owner,ctx,owner);}},"2219":{"9":(ctx,owner)=>{c5v1a366.call(owner,ctx,owner);}},"2224":{"9":(ctx,owner)=>{c5v1a367.call(owner,ctx,owner);}},"2229":{"9":(ctx,owner)=>{c5v1a368.call(owner,ctx,owner);}},"2234":{"9":(ctx,owner)=>{c5v1a369.call(owner,ctx,owner);}},"2243":{"9":(ctx,owner)=>{c5v1a370.call(owner,ctx,owner);}},"2252":{"9":(ctx,owner)=>{c5v1a371.call(owner,ctx,owner);}},"2257":{"9":(ctx,owner)=>{c5v1a372.call(owner,ctx,owner);}},"2261":{"9":(ctx,owner)=>{c5v1a373.call(owner,ctx,owner);}},"2270":{"9":(ctx,owner)=>{c5v1a374.call(owner,ctx,owner);}},"2287":{"9":(ctx,owner)=>{c5v1a375.call(owner,ctx,owner);}},"2300":{"26":(ctx,owner)=>{c5v1a376.call(owner,ctx,owner);}},"2313":{"26":(ctx,owner)=>{c5v1a377.call(owner,ctx,owner);}},"2328":{"28":(ctx,owner)=>{c5v1a378.call(owner,ctx,owner);}},"2352":{"26":(ctx,owner)=>{c5v1a379.call(owner,ctx,owner);}},"2368":{"34":(ctx,owner)=>{c5v1a380.call(owner,ctx,owner);}},"2382":{"28":(ctx,owner)=>{c5v1a381.call(owner,ctx,owner);}},"2396":{"34":(ctx,owner)=>{c5v1a382.call(owner,ctx,owner);}},"2410":{"28":(ctx,owner)=>{c5v1a383.call(owner,ctx,owner);}},"2424":{"32":(ctx,owner)=>{c5v1a384.call(owner,ctx,owner);}},"2438":{"32":(ctx,owner)=>{c5v1a385.call(owner,ctx,owner);}},"2456":{"24":(ctx,owner)=>{c5v1a386.call(owner,ctx,owner);}},"2472":{"28":(ctx,owner)=>{c5v1a387.call(owner,ctx,owner);}},"2486":{"32":(ctx,owner)=>{c5v1a388.call(owner,ctx,owner);}},"2500":{"32":(ctx,owner)=>{c5v1a389.call(owner,ctx,owner);}},"2516":{"24":(ctx,owner)=>{c5v1a390.call(owner,ctx,owner);}},"2532":{"28":(ctx,owner)=>{c5v1a391.call(owner,ctx,owner);}},"2554":{"6":(ctx,owner)=>{c5v1a394.call(owner,ctx,owner);},"10":(ctx,owner)=>{c5v1a392.call(owner,ctx,owner);},"24":(ctx,owner)=>{c5v1a393.call(owner,ctx,owner);}},"2574":{"4":(ctx,owner)=>{c5v1a397.call(owner,ctx,owner);},"14":(ctx,owner)=>{c5v1a395.call(owner,ctx,owner);},"24":(ctx,owner)=>{c5v1a396.call(owner,ctx,owner);}},"2599":{"54":(ctx,owner)=>{c5v1a398.call(owner,ctx,owner);}},"2624":{"54":(ctx,owner)=>{c5v1a399.call(owner,ctx,owner);}},"2643":{"16":(ctx,owner)=>{c5v1a400.call(owner,ctx,owner);}},"2644":{"54":(ctx,owner)=>{c5v1a401.call(owner,ctx,owner);}},"2645":{"1":(ctx,owner)=>{c5v1a402.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a403.call(owner,ctx,owner);}},"2677":{"1":(ctx,owner)=>{c5v1a404.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a406.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v1a405.call(owner,ctx,owner);}},"2684":{"1":(ctx,owner)=>{c5v1a407.call(owner,ctx,owner);}},"2686":{"1":(ctx,owner)=>{c5v1a408.call(owner,ctx,owner);}},"2688":{"1":(ctx,owner)=>{c5v1a409.call(owner,ctx,owner);}},"2690":{"1":(ctx,owner)=>{c5v1a410.call(owner,ctx,owner);}},"2716":{"10":(ctx,owner)=>{c5v1a411.call(owner,ctx,owner);}},"2717":{"1":(ctx,owner)=>{c5v1a412.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v1a413.call(owner,ctx,owner);}},"2722":{"9":(ctx,owner)=>{c5v1a415.call(owner,ctx,owner);},"10":(ctx,owner)=>{c5v1a414.call(owner,ctx,owner);}},"2724":{"1":(ctx,owner)=>{c5v1a416.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a417.call(owner,ctx,owner);}},"2732":{"1":(ctx,owner)=>{c5v1a418.call(owner,ctx,owner);}},"2751":{"1":(ctx,owner)=>{c5v1a419.call(owner,ctx,owner);},"34":(ctx,owner)=>{c5v1a420.call(owner,ctx,owner);}},"2765":{"22":(ctx,owner)=>{c5v1a421.call(owner,ctx,owner);}},"2777":{"9":(ctx,owner)=>{c5v1a422.call(owner,ctx,owner);}},"2781":{"1":(ctx,owner)=>{c5v1a423.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v1a424.call(owner,ctx,owner);}},"2786":{"1":(ctx,owner)=>{c5v1a425.call(owner,ctx,owner);}},"2798":{"7":(ctx,owner)=>{c5v1a426.call(owner,ctx,owner);}},"2809":{"7":(ctx,owner)=>{c5v1a427.call(owner,ctx,owner);}},"2814":{"6":(ctx,owner)=>{c5v1a428.call(owner,ctx,owner);}},"2820":{"7":(ctx,owner)=>{c5v1a429.call(owner,ctx,owner);}},"2834":{"8":(ctx,owner)=>{c5v1a430.call(owner,ctx,owner);}},"2849":{"7":(ctx,owner)=>{c5v1a431.call(owner,ctx,owner);}},"2851":{"7":(ctx,owner)=>{c5v1a432.call(owner,ctx,owner);}},"2853":{"7":(ctx,owner)=>{c5v1a433.call(owner,ctx,owner);}},"2860":{"7":(ctx,owner)=>{c5v1a434.call(owner,ctx,owner);}},"2865":{"1":(ctx,owner)=>{c5v1a435.call(owner,ctx,owner);}},"2867":{"1":(ctx,owner)=>{c5v1a436.call(owner,ctx,owner);}},"2880":{"2":(ctx,owner)=>{c5v1a438.call(owner,ctx,owner);},"14":(ctx,owner)=>{c5v1a437.call(owner,ctx,owner);}},"2881":{"1":(ctx,owner)=>{c5v1a439.call(owner,ctx,owner);}},"2895":{"1":(ctx,owner)=>{c5v1a440.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a441.call(owner,ctx,owner);},"50":(ctx,owner)=>{c5v1a442.call(owner,ctx,owner);}},"2902":{"127":(ctx,owner)=>{c5v1a443.call(owner,ctx,owner);}},"2915":{"1":(ctx,owner)=>{c5v1a444.call(owner,ctx,owner);},"14":(ctx,owner)=>{c5v1a445.call(owner,ctx,owner);},"33":(ctx,owner)=>{c5v1a446.call(owner,ctx,owner);}},"2921":{"1":(ctx,owner)=>{c5v1a447.call(owner,ctx,owner);},"38":(ctx,owner)=>{c5v1a448.call(owner,ctx,owner);},"39":(ctx,owner)=>{c5v1a449.call(owner,ctx,owner);}},"2928":{"23":(ctx,owner)=>{c5v1a450.call(owner,ctx,owner);}},"2944":{"1":(ctx,owner)=>{c5v1a451.call(owner,ctx,owner);}},"2945":{"1":(ctx,owner)=>{c5v1a452.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a455.call(owner,ctx,owner);}},"2950":{"1":(ctx,owner)=>{c5v1a456.call(owner,ctx,owner);}},"2975":{"1":(ctx,owner)=>{c5v1a457.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a459.call(owner,ctx,owner);},"93":(ctx,owner)=>{c5v1a460.call(owner,ctx,owner);},"151":(ctx,owner)=>{c5v1a458.call(owner,ctx,owner);}},"2977":{"1":(ctx,owner)=>{c5v1a461.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a462.call(owner,ctx,owner);},"47":(ctx,owner)=>{c5v1a463.call(owner,ctx,owner);},"80":(ctx,owner)=>{c5v1a464.call(owner,ctx,owner);}},"2979":{"1":(ctx,owner)=>{c5v1a465.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a467.call(owner,ctx,owner);},"93":(ctx,owner)=>{c5v1a468.call(owner,ctx,owner);},"94":(ctx,owner)=>{c5v1a469.call(owner,ctx,owner);},"169":(ctx,owner)=>{c5v1a466.call(owner,ctx,owner);}},"2981":{"1":(ctx,owner)=>{c5v1a470.call(owner,ctx,owner);}},"2996":{"69":(ctx,owner)=>{c5v1a471.call(owner,ctx,owner);}},"3000":{"2":(ctx,owner)=>{c5v1a473.call(owner,ctx,owner);},"93":(ctx,owner)=>{c5v1a474.call(owner,ctx,owner);},"155":(ctx,owner)=>{c5v1a472.call(owner,ctx,owner);}},"3040":{"1":(ctx,owner)=>{c5v1a475.call(owner,ctx,owner);}},"3042":{"1":(ctx,owner)=>{c5v1a476.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a478.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v1a479.call(owner,ctx,owner);},"4":(ctx,owner)=>{c5v1a480.call(owner,ctx,owner);},"5":(ctx,owner)=>{c5v1a481.call(owner,ctx,owner);},"6":(ctx,owner)=>{c5v1a482.call(owner,ctx,owner);},"7":(ctx,owner)=>{c5v1a484.call(owner,ctx,owner);},"8":(ctx,owner)=>{c5v1a488.call(owner,ctx,owner);},"9":(ctx,owner)=>{c5v1a492.call(owner,ctx,owner);},"10":(ctx,owner)=>{c5v1a477.call(owner,ctx,owner);}},"3056":{"1":(ctx,owner)=>{c5v1a493.call(owner,ctx,owner);}},"3081":{"26":(ctx,owner)=>{c5v1a494.call(owner,ctx,owner);}},"3128":{"1":(ctx,owner)=>{c5v1a495.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a496.call(owner,ctx,owner);}},"3159":{"1":(ctx,owner)=>{c5v1a497.call(owner,ctx,owner);}},"3172":{"1":(ctx,owner)=>{c5v1a498.call(owner,ctx,owner);}},"3173":{"1":(ctx,owner)=>{c5v1a499.call(owner,ctx,owner);}},"3174":{"1":(ctx,owner)=>{c5v1a501.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a503.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v1a502.call(owner,ctx,owner);},"20":(ctx,owner)=>{c5v1a504.call(owner,ctx,owner);}},"3181":{"1":(ctx,owner)=>{c5v1a505.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a508.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v1a510.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v1a506.call(owner,ctx,owner);},"12":(ctx,owner)=>{c5v1a507.call(owner,ctx,owner);},"20":(ctx,owner)=>{c5v1a509.call(owner,ctx,owner);}},"3191":{"1":(ctx,owner)=>{c5v1a511.call(owner,ctx,owner);}},"3192":{"1":(ctx,owner)=>{c5v1a512.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a514.call(owner,ctx,owner);},"11":(ctx,owner)=>{c5v1a513.call(owner,ctx,owner);},"20":(ctx,owner)=>{c5v1a515.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c5v1a561.call(owner,ctx,owner);},"2":(ctx,owner)=>{c5v1a562.call(owner,ctx,owner);},"3":(ctx,owner)=>{c5v1a563.call(owner,ctx,owner);},"4":(ctx,owner)=>{c5v1a564.call(owner,ctx,owner);}}},frameActions:{"396":{"1":[c5v1a516],"2217":[c5v1a517],"2220":[c5v1a518]},"465":{"1":[c5v1a519],"155":[c5v1a520]},"510":{"1":[c5v1a521]},"543":{"1":[c5v1a522]},"548":{"1":[c5v1a523],"2":[c5v1a524],"7":[c5v1a525]},"569":{"1":[c5v1a526]},"571":{"1":[c5v1a527]},"653":{"19":[c5v1a528]},"670":{"19":[c5v1a529]},"674":{"17":[c5v1a530]},"689":{"11":[c5v1a531]},"706":{"11":[c5v1a532]},"708":{"1":[c5v1a533]},"718":{"12":[c5v1a534]},"727":{"12":[c5v1a535]},"740":{"22":[c5v1a536]},"751":{"22":[c5v1a537]},"773":{"18":[c5v1a538]},"791":{"18":[c5v1a539]},"799":{"9":[c5v1a540]},"805":{"9":[c5v1a541]},"839":{"22":[c5v1a542]},"867":{"22":[c5v1a543]},"874":{"9":[c5v1a544]},"881":{"9":[c5v1a545]},"882":{"137":[c5v1a546],"144":[c5v1a547]},"903":{"16":[c5v1a548]},"909":{"8":[c5v1a549]},"915":{"13":[c5v1a550]},"926":{"22":[c5v1a551]},"936":{"20":[c5v1a552]},"942":{"8":[c5v1a553]},"953":{"16":[c5v1a554]},"959":{"10":[c5v1a555]},"976":{"1":[c5v1a556]},"993":{"1":[c5v1a557],"61":[c5v1a560],"120":[c5v1a558],"121":[c5v1a559]},"1044":{"21":[c5v1a301]},"1058":{"21":[c5v1a302]},"1064":{"11":[c5v1a303]},"1072":{"11":[c5v1a304]},"1080":{"12":[c5v1a305]},"1087":{"12":[c5v1a306]},"1102":{"25":[c5v1a307]},"1117":{"25":[c5v1a308]},"1129":{"21":[c5v1a309]},"1141":{"21":[c5v1a310]},"1150":{"11":[c5v1a311]},"1157":{"11":[c5v1a312]},"1180":{"35":[c5v1a313]},"1203":{"35":[c5v1a314]},"1209":{"9":[c5v1a315]},"1210":{"119":[c5v1a316],"126":[c5v1a317]},"1211":{"1":[c5v1a318]},"1212":{"1":[c5v1a319]},"1213":{"1":[c5v1a320],"29":[c5v1a321],"30":[c5v1a322]},"1250":{"1":[c5v1a323]},"1251":{"1":[c5v1a324]},"1267":{"1":[c5v1a325]},"1280":{"1":[c5v1a326]},"1290":{"1":[c5v1a327]},"1299":{"1":[c5v1a328]},"1300":{"1":[c5v1a329],"2":[c5v1a330],"3":[c5v1a331]},"1307":{"1":[c5v1a332]},"1314":{"1":[c5v1a333]},"1319":{"1":[c5v1a334]},"1320":{"1":[c5v1a335]},"1328":{"1":[c5v1a336]},"1336":{"1":[c5v1a337]},"1344":{"1":[c5v1a338]},"1345":{"1":[c5v1a339],"2":[c5v1a340],"3":[c5v1a341]},"1384":{"1":[c5v1a342]},"1418":{"1":[c5v1a343]},"1628":{"1":[c5v1a344],"1075":[c5v1a345]},"1675":{"1":[c5v1a346]},"1765":{"1":[c5v1a347]},"1805":{"1":[c5v1a348]},"1817":{"1":[c5v1a349]},"1854":{"1":[c5v1a350]},"1895":{"1":[c5v1a351]},"1915":{"1":[c5v1a352]},"1943":{"1":[c5v1a353]},"1948":{"1":[c5v1a354]},"1962":{"1":[c5v1a355]},"1965":{"1":[c5v1a356]},"1966":{"1":[c5v1a357],"11":[c5v1a358]},"1973":{"1":[c5v1a359]},"2183":{"9":[c5v1a360]},"2188":{"9":[c5v1a361]},"2196":{"9":[c5v1a362]},"2204":{"9":[c5v1a363]},"2209":{"9":[c5v1a364]},"2214":{"10":[c5v1a365]},"2219":{"9":[c5v1a366]},"2224":{"9":[c5v1a367]},"2229":{"9":[c5v1a368]},"2234":{"9":[c5v1a369]},"2243":{"9":[c5v1a370]},"2252":{"9":[c5v1a371]},"2257":{"9":[c5v1a372]},"2261":{"9":[c5v1a373]},"2270":{"9":[c5v1a374]},"2287":{"9":[c5v1a375]},"2300":{"26":[c5v1a376]},"2313":{"26":[c5v1a377]},"2328":{"28":[c5v1a378]},"2352":{"26":[c5v1a379]},"2368":{"34":[c5v1a380]},"2382":{"28":[c5v1a381]},"2396":{"34":[c5v1a382]},"2410":{"28":[c5v1a383]},"2424":{"32":[c5v1a384]},"2438":{"32":[c5v1a385]},"2456":{"24":[c5v1a386]},"2472":{"28":[c5v1a387]},"2486":{"32":[c5v1a388]},"2500":{"32":[c5v1a389]},"2516":{"24":[c5v1a390]},"2532":{"28":[c5v1a391]},"2554":{"6":[c5v1a394],"10":[c5v1a392],"24":[c5v1a393]},"2574":{"4":[c5v1a397],"14":[c5v1a395],"24":[c5v1a396]},"2599":{"54":[c5v1a398]},"2624":{"54":[c5v1a399]},"2643":{"16":[c5v1a400]},"2644":{"54":[c5v1a401]},"2645":{"1":[c5v1a402],"2":[c5v1a403]},"2677":{"1":[c5v1a404],"2":[c5v1a406],"11":[c5v1a405]},"2684":{"1":[c5v1a407]},"2686":{"1":[c5v1a408]},"2688":{"1":[c5v1a409]},"2690":{"1":[c5v1a410]},"2716":{"10":[c5v1a411]},"2717":{"1":[c5v1a412],"3":[c5v1a413]},"2722":{"9":[c5v1a415],"10":[c5v1a414]},"2724":{"1":[c5v1a416],"2":[c5v1a417]},"2732":{"1":[c5v1a418]},"2751":{"1":[c5v1a419],"34":[c5v1a420]},"2765":{"22":[c5v1a421]},"2777":{"9":[c5v1a422]},"2781":{"1":[c5v1a423],"3":[c5v1a424]},"2786":{"1":[c5v1a425]},"2798":{"7":[c5v1a426]},"2809":{"7":[c5v1a427]},"2814":{"6":[c5v1a428]},"2820":{"7":[c5v1a429]},"2834":{"8":[c5v1a430]},"2849":{"7":[c5v1a431]},"2851":{"7":[c5v1a432]},"2853":{"7":[c5v1a433]},"2860":{"7":[c5v1a434]},"2865":{"1":[c5v1a435]},"2867":{"1":[c5v1a436]},"2880":{"2":[c5v1a438],"14":[c5v1a437]},"2881":{"1":[c5v1a439]},"2895":{"1":[c5v1a440],"2":[c5v1a441],"50":[c5v1a442]},"2902":{"127":[c5v1a443]},"2915":{"1":[c5v1a444],"14":[c5v1a445],"33":[c5v1a446]},"2921":{"1":[c5v1a447],"38":[c5v1a448],"39":[c5v1a449]},"2928":{"23":[c5v1a450]},"2944":{"1":[c5v1a451]},"2945":{"1":[c5v1a452],"2":[c5v1a455]},"2950":{"1":[c5v1a456]},"2975":{"1":[c5v1a457],"2":[c5v1a459],"93":[c5v1a460],"151":[c5v1a458]},"2977":{"1":[c5v1a461],"2":[c5v1a462],"47":[c5v1a463],"80":[c5v1a464]},"2979":{"1":[c5v1a465],"2":[c5v1a467],"93":[c5v1a468],"94":[c5v1a469],"169":[c5v1a466]},"2981":{"1":[c5v1a470]},"2996":{"69":[c5v1a471]},"3000":{"2":[c5v1a473],"93":[c5v1a474],"155":[c5v1a472]},"3040":{"1":[c5v1a475]},"3042":{"1":[c5v1a476],"2":[c5v1a478],"3":[c5v1a479],"4":[c5v1a480],"5":[c5v1a481],"6":[c5v1a482],"7":[c5v1a484],"8":[c5v1a488],"9":[c5v1a492],"10":[c5v1a477]},"3056":{"1":[c5v1a493]},"3081":{"26":[c5v1a494]},"3128":{"1":[c5v1a495],"2":[c5v1a496]},"3159":{"1":[c5v1a497]},"3172":{"1":[c5v1a498]},"3173":{"1":[c5v1a499]},"3174":{"1":[c5v1a501],"2":[c5v1a503],"11":[c5v1a502],"20":[c5v1a504]},"3181":{"1":[c5v1a505],"2":[c5v1a508],"3":[c5v1a510],"11":[c5v1a506],"12":[c5v1a507],"20":[c5v1a509]},"3191":{"1":[c5v1a511]},"3192":{"1":[c5v1a512],"2":[c5v1a514],"11":[c5v1a513],"20":[c5v1a515]},"main":{"1":[c5v1a561],"2":[c5v1a562],"3":[c5v1a563],"4":[c5v1a564]}},buttons:{"1238":{"press":(ctx,owner)=>{c5v1a274.call(owner,ctx,owner);},"release":(ctx,owner)=>{c5v1a275.call(owner,ctx,owner);}},"1243":{"release":(ctx,owner)=>{c5v1a276.call(owner,ctx,owner);}},"1263":{"release":(ctx,owner)=>{c5v1a277.call(owner,ctx,owner);}},"1265":{"release":(ctx,owner)=>{c5v1a278.call(owner,ctx,owner);}},"1951":{"press":(ctx,owner)=>{c5v1a279.call(owner,ctx,owner);},"release":(ctx,owner)=>{c5v1a280.call(owner,ctx,owner);}},"2655":{"release":(ctx,owner)=>{c5v1a281.call(owner,ctx,owner);}},"2661":{"release":(ctx,owner)=>{c5v1a282.call(owner,ctx,owner);}},"2666":{"release":(ctx,owner)=>{c5v1a283.call(owner,ctx,owner);}},"2675":{"release":(ctx,owner)=>{c5v1a284.call(owner,ctx,owner);}},"3048":{"release":(ctx,owner)=>{c5v1a285.call(owner,ctx,owner);}},"3104":{"release":(ctx,owner)=>{c5v1a286.call(owner,ctx,owner);}},"3105":{"release":(ctx,owner)=>{c5v1a287.call(owner,ctx,owner);}},"3106":{"release":(ctx,owner)=>{c5v1a288.call(owner,ctx,owner);}},"3107":{"release":(ctx,owner)=>{c5v1a289.call(owner,ctx,owner);}},"3108":{"release":(ctx,owner)=>{c5v1a290.call(owner,ctx,owner);}},"3139":{"release":(ctx,owner)=>{c5v1a291.call(owner,ctx,owner);}},"3142":{"release":(ctx,owner)=>{c5v1a292.call(owner,ctx,owner);}},"3146":{"release":(ctx,owner)=>{c5v1a293.call(owner,ctx,owner);}},"3148":{"release":(ctx,owner)=>{c5v1a294.call(owner,ctx,owner);}},"3150":{"release":(ctx,owner)=>{c5v1a295.call(owner,ctx,owner);}},"3152":{"release":(ctx,owner)=>{c5v1a296.call(owner,ctx,owner);}},"3158":{"press":(ctx,owner)=>{c5v1a297.call(owner,ctx,owner);},"release":(ctx,owner)=>{c5v1a298.call(owner,ctx,owner);}},"3183":{"release":(ctx,owner)=>{c5v1a299.call(owner,ctx,owner);}},"3200":{"release":(ctx,owner)=>{c5v1a300.call(owner,ctx,owner);}}},clips:[{"parent":"2945","frame":1,"character":"2915","name":"","depth":3,"event":"enterFrame","handler":c5v1a453},{"parent":"2945","frame":1,"character":"2915","name":"","depth":3,"event":"load","handler":c5v1a454},{"parent":"3042","frame":6,"character":"2952","name":"","depth":273,"event":"enterFrame","handler":c5v1a483},{"parent":"3042","frame":7,"character":"2645","name":"player","depth":25,"event":"enterFrame","handler":c5v1a485},{"parent":"3042","frame":7,"character":"2645","name":"player","depth":25,"event":"keyUp","handler":c5v1a486},{"parent":"3042","frame":7,"character":"2645","name":"player","depth":25,"event":"load","handler":c5v1a487},{"parent":"3042","frame":8,"character":"2645","name":"player","depth":25,"event":"enterFrame","handler":c5v1a489},{"parent":"3042","frame":8,"character":"2645","name":"player","depth":25,"event":"keyUp","handler":c5v1a490},{"parent":"3042","frame":8,"character":"2645","name":"player","depth":25,"event":"load","handler":c5v1a491},{"parent":"3173","frame":1,"character":"3056","name":"","depth":11,"event":"enterFrame","handler":c5v1a500}],initializers:{FlashGuard:(ctx,owner)=>{ctx.setField(owner,"_visible",false);ctx.graph.stop(owner);}},requiredOwnerFields:{"396":["_totalframes","mc","skipFrame"],"465":["_totalframes","mc","skipFrame"],"510":["_totalframes","skipFrame"],"543":["_totalframes","skipFrame"],"548":["txt"],"569":[],"571":["_visible"],"653":[],"670":[],"674":[],"689":[],"706":[],"708":["_visible"],"718":[],"727":[],"740":[],"751":[],"773":[],"791":[],"799":[],"805":[],"839":[],"867":[],"874":[],"881":[],"882":[],"903":[],"909":[],"915":[],"926":[],"936":[],"942":[],"953":[],"959":[],"976":[],"993":[],"1044":[],"1058":[],"1064":[],"1072":[],"1080":[],"1087":[],"1102":[],"1117":[],"1129":[],"1141":[],"1150":[],"1157":[],"1180":[],"1203":[],"1209":[],"1210":[],"1211":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"1212":["tt"],"1213":["skipFrame"],"1238":[],"1243":[],"1250":["component","track_mc"],"1251":[],"1263":["qqxflash_home"],"1265":[],"1267":[],"1280":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1290":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1299":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1300":[],"1307":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1314":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1319":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1320":[],"1328":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1336":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1344":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"1345":[],"1384":["_totalframes","skipFrame"],"1418":["_totalframes","skipFrame"],"1628":["mc","skipFrame"],"1675":["_totalframes","skipFrame"],"1765":["_totalframes","skipFrame"],"1805":["_totalframes","skipFrame"],"1817":["_totalframes","skipFrame"],"1854":["_totalframes","skipFrame"],"1895":["_totalframes","skipFrame"],"1915":["_totalframes","skipFrame"],"1943":["_totalframes","skipFrame"],"1948":["_totalframes","skipFrame"],"1951":["aim","xxx","yyy"],"1962":["aim","ar","iii","name1","nn","onMouseUp","xxx","yyy"],"1965":[],"1966":["_currentframe","back","onEnterFrame"],"1973":["_x","_y","onEnterFrame","x","y"],"2183":[],"2188":[],"2196":[],"2204":[],"2209":[],"2214":[],"2219":[],"2224":[],"2229":[],"2234":[],"2243":[],"2252":[],"2257":[],"2261":[],"2270":[],"2287":[],"2300":[],"2313":[],"2328":[],"2352":[],"2368":[],"2382":[],"2396":[],"2410":[],"2424":[],"2438":[],"2456":[],"2472":[],"2486":[],"2500":[],"2516":[],"2532":[],"2554":["items"],"2574":["items"],"2599":[],"2624":[],"2643":[],"2644":[],"2645":["_x","_y","fram","i","maxx","minx","name1"],"2655":[],"2661":["helper"],"2666":[],"2675":[],"2677":["btn"],"2684":["_visible"],"2686":["_visible","hitted","onEnterFrame","ox","oy"],"2688":[],"2690":[],"2716":[],"2717":[],"2722":[],"2724":[],"2732":[],"2751":[],"2765":[],"2777":[],"2781":[],"2786":[],"2798":[],"2809":[],"2814":[],"2820":[],"2834":[],"2849":[],"2851":[],"2853":[],"2860":[],"2865":[],"2867":[],"2880":[],"2881":[],"2895":["mc"],"2902":[],"2915":["_currentframe","_xscale","hit","randomttt","ttt","vx","vy","xxx","yyy"],"2921":[],"2928":[],"2944":[],"2945":["ying"],"2950":[],"2952":["an"],"2975":["mc"],"2977":["mc"],"2979":[],"2981":[],"2996":["eventNow"],"3000":["mc"],"3040":[],"3042":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","an","appearx","appeary","baojian","blocks","blockx","blocky","changeMovies","changes","events","h3","hitter","i","kulou","long","man","map","minScale","player","playerScale","shu","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","tengf","topBlock","tr","tree","wang","yizhi","yu"],"3048":["gp"],"3056":[],"3081":[],"3104":[],"3105":[],"3106":[],"3107":[],"3108":[],"3128":["actKey","downKey","leftKey","rightKey","upKey"],"3139":["_quality"],"3142":["_quality"],"3146":["_quality"],"3148":[],"3150":["allShow"],"3152":["allShow"],"3158":["draging","onEnterFrame"],"3159":["_x","bb","draging","onEnterFrame"],"3172":["btn"],"3173":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"3174":["btn","gp"],"3181":["i","onEnterFrame"],"3183":["aim"],"3191":[],"3192":["delay","fadeOut","item"],"3200":[],"main":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
export const bindings={"0:1250":{"read":[],"write":[]},"0:1255":{"read":[],"write":[]},"0:1275":{"read":["qqxflash_home"],"write":[]},"0:1277":{"read":[],"write":[]},"0:1972":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"0:2359":{"read":[],"write":[]},"0:2365":{"read":["helper"],"write":[]},"0:2370":{"read":[],"write":[]},"0:2379":{"read":[],"write":[]},"0:2746":{"read":["gp"],"write":["gp"]},"0:2792":{"read":[],"write":[]},"0:2793":{"read":[],"write":[]},"0:2794":{"read":[],"write":[]},"0:2795":{"read":[],"write":[]},"0:2796":{"read":[],"write":[]},"0:2827":{"read":["_quality"],"write":["_quality"]},"0:2830":{"read":["_quality"],"write":["_quality"]},"0:2834":{"read":["_quality"],"write":["_quality"]},"0:2836":{"read":[],"write":[]},"0:2838":{"read":["allShow"],"write":[]},"0:2840":{"read":["allShow"],"write":[]},"0:2846":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"0:2871":{"read":["aim"],"write":[]},"0:2888":{"read":[],"write":[]},"0:1005":{"read":[],"write":[]},"0:1056":{"read":[],"write":[]},"0:1070":{"read":[],"write":[]},"0:1076":{"read":[],"write":[]},"0:1084":{"read":[],"write":[]},"0:1092":{"read":[],"write":[]},"0:1099":{"read":[],"write":[]},"0:1114":{"read":[],"write":[]},"0:1129":{"read":[],"write":[]},"0:1141":{"read":[],"write":[]},"0:1153":{"read":[],"write":[]},"0:1162":{"read":[],"write":[]},"0:1169":{"read":[],"write":[]},"0:1192":{"read":[],"write":[]},"0:1215":{"read":[],"write":[]},"0:1221":{"read":[],"write":[]},"0:1222":{"read":[],"write":[]},"0:1223":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"0:1224":{"read":["tt"],"write":["tt"]},"0:1225":{"read":["skipFrame"],"write":["skipFrame"]},"0:1262":{"read":["component","track_mc"],"write":["component"]},"0:1263":{"read":[],"write":[]},"0:1279":{"read":[],"write":[]},"0:1292":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1302":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1311":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1312":{"read":[],"write":[]},"0:1319":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1326":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1331":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1332":{"read":[],"write":[]},"0:1340":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1348":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1356":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"0:1357":{"read":[],"write":[]},"0:1396":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1430":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1659":{"read":[],"write":[]},"0:1660":{"read":["skipFrame"],"write":["skipFrame"]},"0:1702":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1790":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1829":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1843":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1879":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1918":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1937":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1964":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1969":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:1980":{"read":["aim","ar","iii","name1","nn","onMouseUp","xxx","yyy"],"write":["aim","ar","name1","nn","onMouseUp","xxx","yyy"]},"0:1983":{"read":[],"write":[]},"0:1984":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"0:1989":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"0:2096":{"read":[],"write":[]},"0:2103":{"read":[],"write":[]},"0:2108":{"read":[],"write":[]},"0:2113":{"read":[],"write":[]},"0:2118":{"read":[],"write":[]},"0:2127":{"read":[],"write":[]},"0:2132":{"read":[],"write":[]},"0:2141":{"read":[],"write":[]},"0:2154":{"read":[],"write":[]},"0:2169":{"read":[],"write":[]},"0:2185":{"read":[],"write":[]},"0:2199":{"read":[],"write":[]},"0:2213":{"read":[],"write":[]},"0:2231":{"read":[],"write":[]},"0:2245":{"read":[],"write":[]},"0:2261":{"read":[],"write":[]},"0:2283":{"read":["items"],"write":[]},"0:2303":{"read":["items"],"write":[]},"0:2328":{"read":[],"write":[]},"0:2347":{"read":[],"write":[]},"0:2348":{"read":[],"write":[]},"0:2349":{"read":["_x","_y","fram","i","maxx","minx","name1"],"write":["_x","_y","fram","i"]},"0:2381":{"read":["btn"],"write":[]},"0:2388":{"read":["_visible"],"write":["_visible"]},"0:2390":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"0:2391":{"read":[],"write":[]},"0:2393":{"read":[],"write":[]},"0:2418":{"read":[],"write":[]},"0:2419":{"read":[],"write":[]},"0:2424":{"read":[],"write":[]},"0:2426":{"read":[],"write":[]},"0:2434":{"read":[],"write":[]},"0:2453":{"read":[],"write":[]},"0:2467":{"read":[],"write":[]},"0:2479":{"read":[],"write":[]},"0:2483":{"read":[],"write":[]},"0:2488":{"read":[],"write":[]},"0:2500":{"read":[],"write":[]},"0:2510":{"read":[],"write":[]},"0:2515":{"read":[],"write":[]},"0:2521":{"read":[],"write":[]},"0:2535":{"read":[],"write":[]},"0:2550":{"read":[],"write":[]},"0:2552":{"read":[],"write":[]},"0:2554":{"read":[],"write":[]},"0:2561":{"read":[],"write":[]},"0:2566":{"read":[],"write":[]},"0:2568":{"read":[],"write":[]},"0:2581":{"read":[],"write":[]},"0:2582":{"read":[],"write":[]},"0:2596":{"read":["mc"],"write":[]},"0:2602":{"read":[],"write":[]},"0:2615":{"read":["_currentframe","_xscale","hit","randomttt","ttt","vx","vy","xxx","yyy"],"write":["_xscale","randomttt","ttt","vx","vy","xxx","yyy"]},"0:2621":{"read":[],"write":[]},"0:2627":{"read":[],"write":[]},"0:2643":{"read":[],"write":[]},"0:2644":{"read":["ying"],"write":[]},"0:2649":{"read":[],"write":[]},"0:2673":{"read":["mc"],"write":[]},"0:2676":{"read":["mc"],"write":[]},"0:2678":{"read":[],"write":[]},"0:2680":{"read":[],"write":[]},"0:2694":{"read":["eventNow"],"write":[]},"0:2698":{"read":["mc"],"write":[]},"0:2738":{"read":[],"write":[]},"0:2740":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","an","appearx","appeary","baojian","blocks","blockx","blocky","changeMovies","changes","events","h3","hitter","i","kulou","long","man","map","minScale","player","playerScale","shu","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","tengf","topBlock","tr","tree","wang","yizhi","yu"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","an","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"0:2651":{"read":["an"],"write":["an"]},"0:2754":{"read":[],"write":[]},"0:2816":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"0:2847":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"0:2860":{"read":["btn"],"write":[]},"0:2861":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"0:2862":{"read":["btn","gp"],"write":[]},"0:2869":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"0:2879":{"read":[],"write":[]},"0:2880":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"0:405":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"0:470":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:514":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:555":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"0:560":{"read":["txt"],"write":[]},"0:581":{"read":[],"write":[]},"0:583":{"read":["_visible"],"write":["_visible"]},"0:665":{"read":[],"write":[]},"0:682":{"read":[],"write":[]},"0:686":{"read":[],"write":[]},"0:701":{"read":[],"write":[]},"0:718":{"read":[],"write":[]},"0:720":{"read":["_visible"],"write":["_visible"]},"0:730":{"read":[],"write":[]},"0:739":{"read":[],"write":[]},"0:752":{"read":[],"write":[]},"0:763":{"read":[],"write":[]},"0:785":{"read":[],"write":[]},"0:803":{"read":[],"write":[]},"0:811":{"read":[],"write":[]},"0:817":{"read":[],"write":[]},"0:851":{"read":[],"write":[]},"0:879":{"read":[],"write":[]},"0:886":{"read":[],"write":[]},"0:893":{"read":[],"write":[]},"0:894":{"read":[],"write":[]},"0:915":{"read":[],"write":[]},"0:921":{"read":[],"write":[]},"0:927":{"read":[],"write":[]},"0:938":{"read":[],"write":[]},"0:948":{"read":[],"write":[]},"0:954":{"read":[],"write":[]},"0:965":{"read":[],"write":[]},"0:971":{"read":[],"write":[]},"0:988":{"read":[],"write":[]},"0:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]},"1:1238":{"read":[],"write":[]},"1:1243":{"read":[],"write":[]},"1:1263":{"read":["qqxflash_home"],"write":[]},"1:1265":{"read":[],"write":[]},"1:1951":{"read":["aim","xxx","yyy"],"write":["xxx","yyy"]},"1:2655":{"read":[],"write":[]},"1:2661":{"read":["helper"],"write":[]},"1:2666":{"read":[],"write":[]},"1:2675":{"read":[],"write":[]},"1:3048":{"read":["gp"],"write":["gp"]},"1:3104":{"read":[],"write":[]},"1:3105":{"read":[],"write":[]},"1:3106":{"read":[],"write":[]},"1:3107":{"read":[],"write":[]},"1:3108":{"read":[],"write":[]},"1:3139":{"read":["_quality"],"write":["_quality"]},"1:3142":{"read":["_quality"],"write":["_quality"]},"1:3146":{"read":["_quality"],"write":["_quality"]},"1:3148":{"read":[],"write":[]},"1:3150":{"read":["allShow"],"write":[]},"1:3152":{"read":["allShow"],"write":[]},"1:3158":{"read":["draging","onEnterFrame"],"write":["onEnterFrame"]},"1:3183":{"read":["aim"],"write":[]},"1:3200":{"read":[],"write":[]},"1:1044":{"read":[],"write":[]},"1:1058":{"read":[],"write":[]},"1:1064":{"read":[],"write":[]},"1:1072":{"read":[],"write":[]},"1:1080":{"read":[],"write":[]},"1:1087":{"read":[],"write":[]},"1:1102":{"read":[],"write":[]},"1:1117":{"read":[],"write":[]},"1:1129":{"read":[],"write":[]},"1:1141":{"read":[],"write":[]},"1:1150":{"read":[],"write":[]},"1:1157":{"read":[],"write":[]},"1:1180":{"read":[],"write":[]},"1:1203":{"read":[],"write":[]},"1:1209":{"read":[],"write":[]},"1:1210":{"read":[],"write":[]},"1:1211":{"read":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitter","hitting","hjr","init","jc","jr","jumpArr","jumper","jumping","leftKey","life1","life2","lightCount","lightNow","lights","nState","nact","ngoBack","nhc","nhiteding","nhitted","nhitter","njc","njumpArr","njumper","njumping","normalY","npc","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","os","pState","qgg","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","shadow1","shadow2","speedx","ss","upKey","x1","x2","xMax","xMin"],"write":["act","actKey","baseline","br","canAct","canKey","checkAct","checkDir","checkNpcAct","checkNpcDir","dhr","dir","dir2","dis2","disMin","downKey","dr","fired","fxbossHit","fxbossHitted1","fxbossHitted2","fxhitting","fxnpcHit","fxnpcHitted1","fxnpcHitted2","fxqggHit1","fxqggHit2","fxqggHitted1","fxqggHitted2","gameOver","gamePlay","gameWin","gbr","h1r","h2r","hc","hitMax","hitSpeed","hiteding","hitting","hjr","init","jc","jr","jumpArr","jumping","leftKey","lightCount","lightNow","nState","nact","ngoBack","nhc","nhiteding","nhitted","njc","njumpArr","njumping","normalY","npcType","nscoreHit","nscoreJH","nscoreWhack","onEnterFrame","pState","redir","redir2","rightKey","scoreHit","scoreJH","scoreWhack","speedx","upKey","x1","x2","xMax","xMin"]},"1:1212":{"read":["tt"],"write":["tt"]},"1:1213":{"read":["skipFrame"],"write":["skipFrame"]},"1:1250":{"read":["component","track_mc"],"write":["component"]},"1:1251":{"read":[],"write":[]},"1:1267":{"read":[],"write":[]},"1:1280":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1290":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1299":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1300":{"read":[],"write":[]},"1:1307":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1314":{"read":["component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1319":{"read":["component","darkshadow_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1320":{"read":[],"write":[]},"1:1328":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1336":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1344":{"read":["arrow_mc","component","darkshadow_mc","face_mc","highlight3D_mc","highlight_mc","shadow_mc"],"write":["component"]},"1:1345":{"read":[],"write":[]},"1:1384":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1418":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1628":{"read":["mc","skipFrame"],"write":["skipFrame"]},"1:1675":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1765":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1805":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1817":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1854":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1895":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1915":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1943":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1948":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:1962":{"read":["aim","ar","iii","name1","nn","onMouseUp","xxx","yyy"],"write":["aim","ar","name1","nn","onMouseUp","xxx","yyy"]},"1:1965":{"read":[],"write":[]},"1:1966":{"read":["_currentframe","back","onEnterFrame"],"write":["back","onEnterFrame"]},"1:1973":{"read":["_x","_y","onEnterFrame","x","y"],"write":["_x","_y","onEnterFrame","x","y"]},"1:2183":{"read":[],"write":[]},"1:2188":{"read":[],"write":[]},"1:2196":{"read":[],"write":[]},"1:2204":{"read":[],"write":[]},"1:2209":{"read":[],"write":[]},"1:2214":{"read":[],"write":[]},"1:2219":{"read":[],"write":[]},"1:2224":{"read":[],"write":[]},"1:2229":{"read":[],"write":[]},"1:2234":{"read":[],"write":[]},"1:2243":{"read":[],"write":[]},"1:2252":{"read":[],"write":[]},"1:2257":{"read":[],"write":[]},"1:2261":{"read":[],"write":[]},"1:2270":{"read":[],"write":[]},"1:2287":{"read":[],"write":[]},"1:2300":{"read":[],"write":[]},"1:2313":{"read":[],"write":[]},"1:2328":{"read":[],"write":[]},"1:2352":{"read":[],"write":[]},"1:2368":{"read":[],"write":[]},"1:2382":{"read":[],"write":[]},"1:2396":{"read":[],"write":[]},"1:2410":{"read":[],"write":[]},"1:2424":{"read":[],"write":[]},"1:2438":{"read":[],"write":[]},"1:2456":{"read":[],"write":[]},"1:2472":{"read":[],"write":[]},"1:2486":{"read":[],"write":[]},"1:2500":{"read":[],"write":[]},"1:2516":{"read":[],"write":[]},"1:2532":{"read":[],"write":[]},"1:2554":{"read":["items"],"write":[]},"1:2574":{"read":["items"],"write":[]},"1:2599":{"read":[],"write":[]},"1:2624":{"read":[],"write":[]},"1:2643":{"read":[],"write":[]},"1:2644":{"read":[],"write":[]},"1:2645":{"read":["_x","_y","fram","i","maxx","minx","name1"],"write":["_x","_y","fram","i"]},"1:2677":{"read":["btn"],"write":[]},"1:2684":{"read":["_visible"],"write":["_visible"]},"1:2686":{"read":["_visible","hitted","onEnterFrame","ox","oy"],"write":["_visible","hitted","onEnterFrame","ox","oy"]},"1:2688":{"read":[],"write":[]},"1:2690":{"read":[],"write":[]},"1:2716":{"read":[],"write":[]},"1:2717":{"read":[],"write":[]},"1:2722":{"read":[],"write":[]},"1:2724":{"read":[],"write":[]},"1:2732":{"read":[],"write":[]},"1:2751":{"read":[],"write":[]},"1:2765":{"read":[],"write":[]},"1:2777":{"read":[],"write":[]},"1:2781":{"read":[],"write":[]},"1:2786":{"read":[],"write":[]},"1:2798":{"read":[],"write":[]},"1:2809":{"read":[],"write":[]},"1:2814":{"read":[],"write":[]},"1:2820":{"read":[],"write":[]},"1:2834":{"read":[],"write":[]},"1:2849":{"read":[],"write":[]},"1:2851":{"read":[],"write":[]},"1:2853":{"read":[],"write":[]},"1:2860":{"read":[],"write":[]},"1:2865":{"read":[],"write":[]},"1:2867":{"read":[],"write":[]},"1:2880":{"read":[],"write":[]},"1:2881":{"read":[],"write":[]},"1:2895":{"read":["mc"],"write":[]},"1:2902":{"read":[],"write":[]},"1:2915":{"read":["_currentframe","_xscale","hit","randomttt","ttt","vx","vy","xxx","yyy"],"write":["_xscale","randomttt","ttt","vx","vy","xxx","yyy"]},"1:2921":{"read":[],"write":[]},"1:2928":{"read":[],"write":[]},"1:2944":{"read":[],"write":[]},"1:2945":{"read":["ying"],"write":[]},"1:2950":{"read":[],"write":[]},"1:2975":{"read":["mc"],"write":[]},"1:2977":{"read":["mc"],"write":[]},"1:2979":{"read":[],"write":[]},"1:2981":{"read":[],"write":[]},"1:2996":{"read":["eventNow"],"write":[]},"1:3000":{"read":["mc"],"write":[]},"1:3040":{"read":[],"write":[]},"1:3042":{"read":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","an","appearx","appeary","baojian","blocks","blockx","blocky","changeMovies","changes","events","h3","hitter","i","kulou","long","man","map","minScale","player","playerScale","shu","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths","tengf","topBlock","tr","tree","wang","yizhi","yu"],"write":["_loc0_","_temp_1","_temp_10","_temp_11","_temp_12","_temp_2","_temp_3","_temp_4","_temp_5","_temp_6","_temp_7","_temp_8","_temp_9","an","appearx","appeary","blocks","blockx","blocky","changeMovies","changes","events","i","map","minScale","playerScale","talkAreas","talkDirs","talkNext","talkObj","talkTxts","tempDepths"]},"1:2952":{"read":["an"],"write":["an"]},"1:3056":{"read":[],"write":[]},"1:3081":{"read":[],"write":[]},"1:3128":{"read":["actKey","downKey","leftKey","rightKey","upKey"],"write":["actKey","downKey","leftKey","rightKey","upKey"]},"1:3159":{"read":["_x","bb","draging","onEnterFrame"],"write":["_x","bb","draging","onEnterFrame"]},"1:3172":{"read":["btn"],"write":[]},"1:3173":{"read":["allShow","btnLeft","btnRight","checkKey","gkShow","itemList","itemStep","listItem","newKey","tf","timebar"],"write":["checkKey","itemStep","listItem","newKey","tf"]},"1:3174":{"read":["btn","gp"],"write":[]},"1:3181":{"read":["i","onEnterFrame"],"write":["i","onEnterFrame"]},"1:3191":{"read":[],"write":[]},"1:3192":{"read":["delay","fadeOut","item"],"write":["delay","fadeOut"]},"1:396":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:465":{"read":["_totalframes","mc","skipFrame"],"write":["skipFrame"]},"1:510":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:543":{"read":["_totalframes","skipFrame"],"write":["skipFrame"]},"1:548":{"read":["txt"],"write":[]},"1:569":{"read":[],"write":[]},"1:571":{"read":["_visible"],"write":["_visible"]},"1:653":{"read":[],"write":[]},"1:670":{"read":[],"write":[]},"1:674":{"read":[],"write":[]},"1:689":{"read":[],"write":[]},"1:706":{"read":[],"write":[]},"1:708":{"read":["_visible"],"write":["_visible"]},"1:718":{"read":[],"write":[]},"1:727":{"read":[],"write":[]},"1:740":{"read":[],"write":[]},"1:751":{"read":[],"write":[]},"1:773":{"read":[],"write":[]},"1:791":{"read":[],"write":[]},"1:799":{"read":[],"write":[]},"1:805":{"read":[],"write":[]},"1:839":{"read":[],"write":[]},"1:867":{"read":[],"write":[]},"1:874":{"read":[],"write":[]},"1:881":{"read":[],"write":[]},"1:882":{"read":[],"write":[]},"1:903":{"read":[],"write":[]},"1:909":{"read":[],"write":[]},"1:915":{"read":[],"write":[]},"1:926":{"read":[],"write":[]},"1:936":{"read":[],"write":[]},"1:942":{"read":[],"write":[]},"1:953":{"read":[],"write":[]},"1:959":{"read":[],"write":[]},"1:976":{"read":[],"write":[]},"1:993":{"read":[],"write":[]},"1:main":{"read":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","darkness","degree","delayTime","disAll","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","itemShow","keyCheck","leftKey","life","lifeBar","lifeStep","lifex","map","map2txt5","movie","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talker","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","timer","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"],"write":["actKey","afterMovieEvent","aimX","aimY","allEvents","ameEvent","auto","autoAct","autoActing","autoTime","bgFrame","changeShow","checkEvents","checkTalker","clearTxts","climbDown","climbUp","degree","delayTime","downKey","etClear","etShow","etTime","event1","event10","event11","event12","event13","event14","event15","event16","event17","event18","event19","event2","event20","event21","event22","event23","event24","event25","event26","event27","event28","event3","event30","event31","event4","event5","event6","event7","event8","event9","eventAct","eventNext","eventNow","eventStep","eventTxt","fight","fightObj","fighting","gamePause","gamePausing","gamePlay","getEventShow","getItem","init","itemList","itemNow","keyCheck","leftKey","life","lifeStep","lifex","newlife","nspeed","nxspeed","nyspeed","oldDir","oldMap","playerSex","qqDir","rightKey","showAllTxt","speed","speedx","speedy","step","steps","talk2npc","talk2obj","talkChecker","talkCount","talkDir","talkDirs","talkInit","talkKey","talkNext","talkObj","talkTxtNow","talkTxts","talking","tan","tempDis","timeDeading","timeNow","timeStep","timeSteps","treenum","tt","ttc","txtCount","txtDelay","txtDish","txtDisw","txtH","txtIn","txtLength","txtNext","txtOutSpeed","txtOutY","txtOutYa","txtShow","txtW","txtXmin","txtXmins","txtYmin","txtYmins","txtYtemp","txtYtemps","txts","upKey","useItem","xp","xspeed","yp","yspeed"]}};
