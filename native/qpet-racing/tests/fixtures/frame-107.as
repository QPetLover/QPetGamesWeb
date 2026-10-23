function init()
{
   var _loc2_ = 1;
   while(_loc2_ <= 20)
   {
      this["fx" + _loc2_] = new Sound();
      this["fx" + _loc2_].attachSound("fx" + _loc2_);
      _loc2_ = _loc2_ + 1;
   }
   gameEnding = 0;
   score = 0;
   ssa = 0;
   downKey = 40;
   upKey = 38;
   leftKey = 37;
   rightKey = 39;
   ctrlKey = 17;
   top = 6;
   tf = 25;
   endFrame = 8;
   ftime = [0,1 * tf,2 * tf,3 * tf,5 * tf,7 * tf,0];
   atime = [0,0,15 * tf,10 * tf,7 * tf,5 * tf,3 * tf];
   abomb = [0,25,20,15,10,5,0];
   abanana = [0,60,50,40,30,20,10];
   aimTime = [0,5,10,15,20,25,0];
   timer = 180 * tf;
   refreshTime();
   speedn = 180;
   speedMax = 180;
   movers.qq.gotoAndStop(sex);
   speed = 0;
   bg1.gotoAndStop(1);
   bg2.gotoAndStop(1);
   qqState = "ready";
   movers.qq.qq.gotoAndStop(qqState);
   qnk = 10;
   qik = 30;
   xMin = 160;
   xMax = 610;
   nc = 0;
   ss = 0;
   i1 = 2;
   i2 = 3;
   bs = 1;
   npcs = [0,random(2),random(2),random(2),random(2),random(2)];
   item1.gotoAndStop(i1);
   item2.gotoAndStop(i2);
   fb = undefined;
   bomb = undefined;
   ab = undefined;
   nNow = undefined;
   ba = undefined;
   speedArr._rotation = -90;
   speeda = 1;
   topShow.gotoAndStop(top);
   bf1 = bg1._totalframes;
   bf2 = bg2._totalframes;
   kr = 1;
   kd = {};
   kd.onKeyDown = function()
   {
      if(Key.isDown(ctrlKey) && i1 > 1 && qqState == "normal" && kr == 1)
      {
         kr = 0;
         if(i1 == 2)
         {
            ssa = 0;
            fx4.start();
            qqState = "throw";
            movers.qq.qq.gotoAndStop(qqState);
            i1 = i2;
            i2 = 1;
            item1.gotoAndStop(i1);
            item2.gotoAndStop(i2);
         }
         else if(fb == undefined)
         {
            aimBomb();
         }
      }
   };
   kd.onKeyUp = function()
   {
      if(Key.getCode() == ctrlKey)
      {
         kr = 1;
         if(ab != undefined && i1 == 3)
         {
            if(nNow != undefined && nNow._y < movers.qq._y + 100)
            {
               fx4.start();
               fire(ab._x,ab._y);
               i1 = i2;
               i2 = 1;
               item1.gotoAndStop(i1);
               item2.gotoAndStop(i2);
            }
            else
            {
               ab.removeMovieClip();
               ab = undefined;
               i1 = i2;
               i2 = 1;
               item1.gotoAndStop(i1);
               item2.gotoAndStop(i2);
               fx1.start();
            }
         }
      }
   };
}
function refreshTime()
{
   var _loc1_ = Math.floor(timer / tf / 60);
   var _loc2_ = Math.floor((timer - _loc1_ * 60 * tf) / tf);
   var _loc3_ = timer - _loc1_ * 60 * tf - _loc2_ * tf;
   _loc1_ >= 10 ? undefined : (_loc1_ = "0" + _loc1_);
   _loc2_ >= 10 ? undefined : (_loc2_ = "0" + _loc2_);
   _loc3_ >= 10 ? undefined : (_loc3_ = "0" + _loc3_);
   timerShow = "时间：" + _loc1_ + "’" + _loc2_ + "’" + _loc3_ + "";
}
function checkSpeed(cs)
{
   if(speed + cs < 0)
   {
      speed = 0;
   }
   else if(speed + cs < speedMax)
   {
      speed += cs;
   }
   else
   {
      speed = speedMax;
      ss++;
      if(ss > atime[top] && nNow == undefined && top > 1)
      {
         ss = 0;
         npcOut();
      }
   }
   speed = Math.round(speed);
}
function npcIn()
{
   nc <= 99 ? nc++ : (nc = 1);
   nNow = movers.attachMovie("npc" + npcs[top],"npc" + nc,nc);
   nNow.ns = "normal";
   nNow._x = random(760);
   nNow._y = 470;
   nNow._xscale = nNow._yscale = 120;
   nNow.gotoAndStop("normal");
   nNow.count = nc;
   nNow.yspeedn = (speed - speedn) / qnk;
   nNow.xspeed = (nNow._x - nNow._x * 140 / 760 - 310) / 300 * nNow.yspeedn;
   npcAct(nNow);
}
function npcOut()
{
   nc <= 99 ? nc++ : (nc = 1);
   nNow = movers.attachMovie("npc" + npcs[top - 1],"npc" + nc,nc);
   nNow.ns = "normal";
   nNow.count = nc;
   nNow._x = random(140) + 310;
   nNow._y = 170;
   nNow._xscale = nNow._yscale = 20;
   nNow.gotoAndStop(1);
   nNow.yspeedn = (speed - speedn) / qnk;
   nNow.xspeed = ((nNow._x - 310) * 760 / 140 - nNow._x) / 300 * nNow.yspeedn;
   npcAct(nNow);
}
function itemOut(obj, ix, iy, it)
{
   nc <= 99 ? nc++ : (nc = 1);
   iNow = movers.attachMovie(obj,"npc" + nc,nc);
   iNow.objType = obj;
   iNow.count = nc;
   iNow.it = it;
   var _loc4_;
   if(!ix)
   {
      iNow._x = random(140) + 310;
      iNow._y = 170;
      iNow.yspeedn = speed / qik;
      iNow.xspeed = ((iNow._x - 310) * 760 / 140 - iNow._x) / 300 * iNow.yspeedn;
   }
   else
   {
      iNow._x = ix;
      iNow._y = iy;
      iNow.yspeedn = speed / qik;
      _loc4_ = 310 - iy + 170;
      iNow.xspeed = (iNow._x - (iy - 170) * 380 / 1.16 / (iy - 170)) / (iy - 170) / 1.16 * iNow.yspeedn;
      iNow.xspeed = ((iNow._x - 310) * 760 / 140 - iNow._x) / 300 * iNow.yspeedn * 1.1;
      trace(iNow.xspeed);
   }
   iNow._xscale = iNow._yscale = (iNow._y - 170) / 300 * 100 + 20;
   iNow.gotoAndStop(1);
   iNow.onEnterFrame = function()
   {
      if(gameEnding == 0)
      {
         this.yspeed = speed / qik;
         this._x += this.xspeed * this.yspeed / this.yspeedn;
         this._y += this.yspeed;
         this._xscale = this._yscale = (this._y - 170) / 300 * 100 + 20;
         this.swapDepths(this._y * 100 + this.count);
         if(this._y > 470 || this._y < 170)
         {
            this.onEnterFrame = undefined;
            iNow = undefined;
            this.removeMovieClip();
         }
         else if(movers.qq.hitter.hitTest(this._x,this._y,true) && this._currentframe == 1)
         {
            switch(this.objType)
            {
               case "banana":
                  score -= 5;
                  qqState = "hit";
                  movers.qq.qq.gotoAndStop("hit");
                  break;
               case "itemCube":
                  fx3.start();
                  if(i2 == 1 && ab == undefined)
                  {
                     i2 = i1;
                     i1 = random(2) + 2;
                     item1.gotoAndStop(i1);
                     item2.gotoAndStop(i2);
                  }
            }
            this.onEnterFrame = undefined;
            iNow = undefined;
            this.gotoAndPlay(2);
         }
         else if(this.objType == "banana" && this.it == "qq" && nNow.hitTest(this._x,this._y,true) && this._currentframe == 1)
         {
            score += 5;
            nNow.ns = "hit";
            nNow.gotoAndStop(nNow.ns);
            this.onEnterFrame = undefined;
            this.removeMovieClip();
         }
      }
   };
}
function changeTop(ct)
{
   top += ct;
   topShow.gotoAndStop(top);
}
function npcThrow()
{
   itemOut("banana",nNow._x - 110 * nNow._xscale / 100,nNow._y + 100 * nNow._xscale / 100);
}
function qqThrow()
{
   itemOut("banana",movers.qq._x - 110 * movers.qq._xscale / 100,movers.qq._y + 100 * movers.qq._xscale / 100,"qq");
}
function npcAct(na)
{
   bs = 0;
   na.onEnterFrame = function()
   {
      if(gameEnding == 0)
      {
         if(this.ns == "hit" || this.ns == "bomb")
         {
            bs -= 10;
         }
         else
         {
            bs = 0;
         }
         ss = 0;
         ssa = 0;
         this.yspeed = (speed - speedn - bs) / qnk;
         this._x += this.xspeed * this.yspeed / this.yspeedn;
         this._y += this.yspeed;
         this._xscale = this._yscale = (this._y - 170) / 300 * 100 + 20;
         this.swapDepths(this._y * 100 + this.count);
         if(this._y > this._parent.qq._y && this._y - this.yspeed <= this._parent.qq._y)
         {
            changeTop(-1);
         }
         else if(this._y < this._parent.qq._y && this._y - this.yspeed >= this._parent.qq._y)
         {
            changeTop(1);
         }
         if(random(100) < abanana[top] && this._y < 210 && this.ns == "normal")
         {
            this.ns = "throw";
            this.gotoAndStop(this.ns);
         }
         if(this._y > 470 || this._y < 170)
         {
            this.onEnterFrame = undefined;
            nNow = undefined;
            this.removeMovieClip();
         }
      }
      else
      {
         this.ns = "ready";
         this.gotoAndStop(this.ns);
      }
   };
}
function gameStart()
{
   step = 0;
   movers.qq.swapDepths(movers.qq._y * 100);
   Key.addListener(kd);
   onEnterFrame = function()
   {
      var _loc2_;
      var _loc3_;
      if(qqState == "normal" || qqState == "ready" || qqState == "throw")
      {
         _loc2_ = 0;
         if(Key.isDown(upKey))
         {
            _loc2_ += speeda;
         }
         else if(Key.isDown(downKey))
         {
            _loc2_ -= 1.6 * speeda;
         }
         else
         {
            _loc2_ -= 0.6 * speeda;
         }
         checkSpeed(_loc2_);
         _loc3_ = speed / 20;
         if(Key.isDown(leftKey))
         {
            if(movers.qq._x - _loc3_ > xMin)
            {
               movers.qq._x -= _loc3_;
            }
            else
            {
               movers.qq._x = xMin;
            }
         }
         else if(Key.isDown(rightKey))
         {
            if(movers.qq._x + _loc3_ < xMax)
            {
               movers.qq._x += _loc3_;
            }
            else
            {
               movers.qq._x = xMax;
            }
         }
         if(speed > 0 && qqState == "ready")
         {
            qqState = "normal";
            movers.qq.qq.gotoAndStop(qqState);
         }
         else if(speed == 0)
         {
            qqState = "ready";
            movers.qq.qq.gotoAndStop(qqState);
         }
      }
      else if(qqState != "throw")
      {
         checkSpeed(-5);
      }
      var _loc1_;
      var _loc5_;
      var _loc4_;
      if(speed > 0)
      {
         _loc1_ = Math.floor(speed / 46) + 1;
         _loc5_ = bg1._currentframe + _loc1_ <= bf1 ? bg1._currentframe + _loc1_ : 1;
         bg1.gotoAndStop(_loc5_);
         _loc4_ = bg2._currentframe + _loc1_ <= bf2 ? bg2._currentframe + _loc1_ : 1;
         bg2.gotoAndStop(_loc4_);
         if(speed > 120)
         {
            if(random(100) < 1)
            {
               itemOut("itemCube");
            }
         }
      }
      else
      {
         bg1.stop();
         bg2.stop();
      }
      if(top < 6)
      {
         if(speed < speedn)
         {
            ssa++;
            trace("sa=" + ssa);
            if(ssa > ftime[top] && nNow == undefined)
            {
               ssa = 0;
               npcIn();
            }
         }
         else if(random(1000) < abomb[top] && ba == undefined)
         {
            bombAim();
         }
      }
      speedArr._rotation = speed / speedMax * 180 - 90;
      timer--;
      refreshTime();
      step++;
      if(timer == endFrame && speed > 0)
      {
         bg1.endLine.gotoAndPlay(2);
      }
      if(timer <= 0)
      {
         gameEnd();
      }
   };
}
function gameEnd()
{
   gameEnding = 1;
   Key.removeListener(kd);
   onEnterFrame = undefined;
   speed = 0;
   speedArr._rotation = -90;
   qqState = "ready";
   movers.qq.qq.gotoAndStop(qqState);
   bg1.stop();
   bg2.stop();
   gotoAndStop("结束");
}
function bombAim()
{
   ba = movers.attachMovie("bombAim","bombAim",99999);
   ba._x = movers.qq._x;
   ba._y = movers.qq._y;
   ba.steps = aimTime[top];
   ba.step = 0;
   ba.onEnterFrame = function()
   {
      if(gameEnding == 0)
      {
         this.step = this.step + 1;
         if(this.step >= this.steps)
         {
            this.onEnterFrame = undefined;
            this.gotoAndPlay(2);
         }
      }
   };
}
function aimBomb()
{
   ab = movers.attachMovie("bombAim","aimBomb",100000);
   ab.steps = random(5) + 5;
   ab.step = 0;
   ab.onEnterFrame = function()
   {
      if(gameEnding == 0)
      {
         this.step = this.step + 1;
         if(nNow != undefined && nNow._y < movers.qq._y + 100)
         {
            if(this.step >= this.steps)
            {
               this._x = nNow._x;
               this._y = nNow._y;
            }
            else
            {
               this._x = nNow._x + random(100) - 50;
               this._y = nNow._y + random(100) - 50;
            }
         }
         else
         {
            this._x = 380;
            this._y = 170;
         }
         if(this.step > 25)
         {
            ab.removeMovieClip();
            ab = undefined;
            i1 = i2;
            i2 = 1;
            item1.gotoAndStop(i1);
            item2.gotoAndStop(i2);
            fx1.start();
         }
      }
   };
}
function fire(fx, fy)
{
   ab.removeMovieClip();
   ab = undefined;
   fx2.start();
   nc <= 99 ? nc++ : (nc = 1);
   fb = movers.attachMovie("bomb","fb",nc);
   fb.count = nc;
   fb._x = movers.qq._x <= 380 ? movers.qq._x - 80 : movers.qq._x + 80;
   fb._y = movers.qq._y + 100;
   fb.xspeed = (fx - fb._x) / 10;
   fb.yspeed = (fy - fb._y) / 10;
   fb._xscale = fb._yscale = (fb._y - 170) / 300 * 100 + 20;
   fb.onEnterFrame = function()
   {
      if(gameEnding == 0)
      {
         this._x += this.xspeed;
         this._y += this.yspeed;
         this._xscale = this._yscale = (this._y - 170) / 300 * 100 + 20;
         this.swapDepths(this._y * 100 + this.count);
         if(this._y < nNow._y - 50 || nNow == undefined)
         {
            this.onEnterFrame = undefined;
            fb = undefined;
            this.removeMovieClip();
         }
         else if(nNow.hitter.hitTest(this._x,this._y,true))
         {
            score += 5;
            this.onEnterFrame = undefined;
            fb = undefined;
            nNow.ns = "bomb";
            nNow.gotoAndStop(nNow.ns);
            this.removeMovieClip();
         }
      }
   };
}
function npcFire(nx, ny)
{
   fx2.start();
   nc <= 99 ? nc++ : (nc = 1);
   bomb = movers.attachMovie("bomb","bomb",nc);
   bomb.count = nc;
   bomb._x = random(600) + 160;
   bomb._y = 470;
   bomb.xspeed = (nx - bomb._x) / 10;
   bomb.yspeed = (ny - 470) / 10;
   bomb._xscale = bomb._yscale = 120;
   bomb.onEnterFrame = function()
   {
      if(gameEnding == 0)
      {
         this._x += this.xspeed;
         this._y += this.yspeed;
         this._xscale = this._yscale = (this._y - 170) / 300 * 100 + 20;
         this.swapDepths(this._y * 100 + this.count);
         if(this._y < movers.qq._y - 50)
         {
            this.onEnterFrame = undefined;
            bomb = undefined;
            ba.removeMovieClip();
            ba = undefined;
            this.removeMovieClip();
         }
         else if(movers.qq.hitter.hitTest(this._x,this._y,true))
         {
            ss = 0;
            score -= 5;
            trace("bomb" + movers.qq.qq._currentframe);
            this.onEnterFrame = undefined;
            bomb = undefined;
            qqState = "bomb";
            movers.qq.qq.gotoAndStop(qqState);
            ba.removeMovieClip();
            ba = undefined;
            this.removeMovieClip();
         }
      }
   };
}
stop();
init();
