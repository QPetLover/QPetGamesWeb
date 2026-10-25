function shake()
{
   var _loc1_ = this;
   qq.claw.gotoAndStop(1);
   qq.onEnterFrame = undefined;
   qqState = "normal" + sex;
   qq.gotoAndStop(qqState);
   qq.onEnterFrame = function()
   {
      var _loc1_ = this;
      dsp = 0;
      if(Key.isDown(37))
      {
         dskNow *= dsk;
         dsp = dspeed * dskNow * dsk;
      }
      else if(Key.isDown(39))
      {
         dskNow *= dsk;
         dsp = (- dspeed) * dskNow * dsk;
      }
      else
      {
         dskNow = 1;
      }
      if(dsp != 0)
      {
         _loc1_.claw._rotation += dsp;
         if(Math.abs(_loc1_.claw._rotation) >= maxDegree)
         {
            _loc1_.claw._rotation = maxDegree * dsp / Math.abs(dsp);
         }
      }
   };
}
function createStone(pc, st)
{
   var _loc1_ = pc;
   count++;
   stoneNow = bg.bg.attachMovie("stone","stone" + count,count);
   stoneNow._x = bg.bg["pt" + _loc1_]._x + random(120) - 60;
   stoneNow._y = bg.bg["pt" + _loc1_]._y + random(120) - 60;
   stoneNow.count = _loc1_;
   stoneNow.gotoAndStop(st);
   stoneNow._xscale = stoneNow._yscale = 70 + random(80);
   stoneNow._rotation = random(360);
   trace(count);
   allStones.push(stoneNow);
}
function init()
{
   dskNow = 1;
   suk = 1;
   tf = 25;
   timer = 90;
   timerS = timer * tf;
   getStones = 0;
   bg.onEnterFrame = function()
   {
      timerS--;
      if(timerS > 0)
      {
         timer = Math.floor(timerS / tf * 100) / 100;
      }
      else
      {
         timer = 0;
         gameEnd();
      }
   };
   if(stoneType == 1)
   {
      stones = 10;
      temp = 1;
   }
   else
   {
      stones = 10;
      temp = 4;
   }
   speedUp.gotoAndStop(1);
   speedUp._visible = false;
   allStones = [];
   var _loc1_ = 1;
   while(_loc1_ <= stones)
   {
      stoneNow = bg.bg.attachMovie("stone","stone" + _loc1_,_loc1_);
      stoneNow._x = random(1600) - 400;
      stoneNow._y = random(200) - 100;
      stoneNow.gotoAndStop(random(2) + 7);
      stoneNow._xscale = stoneNow._yscale = 70 + random(80);
      stoneNow._rotation = random(360);
      allStones.push(stoneNow);
      _loc1_ = _loc1_ + 1;
   }
   count = stones;
   sp = [];
   ss = [];
   _loc1_ = 0;
   while(_loc1_ < 12)
   {
      sp[_loc1_] = _loc1_;
      ss[_loc1_ + 1] = 1;
      _loc1_ = _loc1_ + 1;
   }
   stoneNow.gotoAndStop(stoneNow._totalframes);
   stoneNow._xscale = stoneNow._yscale = 100;
   _loc1_ = 1;
   var _loc2_;
   while(_loc1_ <= 12)
   {
      tempc = random(sp.length);
      _loc2_ = random(3) + temp;
      createStone(sp[tempc] + 1,_loc2_);
      sp.splice(tempc,1);
      _loc1_ = _loc1_ + 1;
   }
   speed = 20;
   dspeed = 1;
   dsk = 1.1;
   minDegree = -84;
   maxDegree = 84;
   Mouse.addListener(mm);
   Key.addListener(kd);
   maxHeight = 500;
   minHeight = 16;
   qq.gotoAndStop("ready" + sex);
}
function gameEnd()
{
   qq.gotoAndStop("normal" + sex);
   qq.onEnterFrame = undefined;
   bg.onEnterFrame = undefined;
   Mouse.removeListener(mm);
   Key.removeListener(kd);
   gameResult.gotoAndPlay("fadeIn");
}
function restart()
{
   gameResult.gotoAndStop(1);
   init();
   bg.gotoAndStop(1);
}
function getStone()
{
   var _loc1_ = this;
   qq.onEnterFrame = function()
   {
      var _loc1_ = this;
      _loc1_.claw.rape._height -= suk != 1 ? speed : spk;
      _loc1_.claw.claw._y -= suk != 1 ? speed : spk;
      if(_loc1_.claw.claw._y <= minHeight)
      {
         _loc1_.claw.rape._height = minHeight;
         _loc1_.claw.claw._y = minHeight;
         _loc1_.onEnterFrame = undefined;
         if(stoneCount)
         {
            ss[stoneCount] = 0;
            getStones++;
            os1.start();
         }
         else if(stoneFrame == 9)
         {
            os1.start();
            suk = 2;
            speedUp._visible = true;
            speedUp.gotoAndPlay(2);
         }
         else
         {
            os2.start();
         }
         qqState = "pickUp" + sex;
         qq.gotoAndStop(qqState);
      }
   };
}
function downRape()
{
   var _loc2_ = this;
   qq.claw.gotoAndStop(2);
   qqState = "rapeDown" + sex;
   qq.gotoAndStop(qqState);
   qq.onEnterFrame = undefined;
   qq.onEnterFrame = function()
   {
      var _loc2_ = this;
      _loc2_.claw.rape._height += speed;
      _loc2_.claw.claw._y += speed;
      var _loc1_;
      for(var j in allStones)
      {
         _loc1_ = allStones[j];
         if(_loc1_.hitTest(_loc2_.claw.claw.hitter))
         {
            stone = _loc1_;
            stoneFrame = _loc1_._currentframe;
            stoneScale = _loc1_._xscale;
            stoneCount = _loc1_.count;
            spk = speed / (stone._xscale / 100) * 0.4;
            allStones.splice(j,1);
            _loc2_.onEnterFrame = undefined;
            _loc2_.claw.claw.gotoAndPlay(2);
            qqState = "rapeUp2" + sex;
            qq.gotoAndStop(qqState);
         }
      }
      if(_loc2_.claw.claw._y >= maxHeight)
      {
         _loc2_.claw.rape._height = maxHeight;
         _loc2_.claw.claw._y = maxHeight;
         _loc2_.onEnterFrame = undefined;
         qqState = "rapeUp1" + sex;
         qq.gotoAndStop(qqState);
         _loc2_.onEnterFrame = function()
         {
            var _loc1_ = this;
            _loc1_.claw.rape._height -= speed * 1.5;
            _loc1_.claw.claw._y -= speed * 1.5;
            if(_loc1_.claw.claw._y <= minHeight)
            {
               _loc1_.claw.rape._height = minHeight;
               _loc1_.claw.claw._y = minHeight;
               _loc1_.onEnterFrame = undefined;
               shake();
            }
         };
      }
   };
}
function checkMap()
{
   var _loc2_ = 1;
   var _loc1_ = map * 6 - 5;
   while(_loc1_ <= map * 6)
   {
      if(ss[_loc1_] == 1)
      {
         trace(_loc1_ + "        " + ss[_loc1_]);
         _loc2_ = 0;
         break;
      }
      _loc1_ = _loc1_ + 1;
   }
   if(_loc2_ == 1)
   {
      if(map == 2)
      {
         gameEnd();
      }
      else
      {
         qqState = "goNext" + sex;
         qq.gotoAndStop(qqState);
      }
   }
   else
   {
      qqState = "normal" + sex;
      qq.gotoAndStop(qqState);
      shake();
   }
}
stop();
mm = {};
mm.onMouseDown = function()
{
   if(qqState == "normal" + sex)
   {
      downRape();
   }
};
kd = {};
kd.onKeyDown = function()
{
   if(Key.isDown(40) || Key.isDown(32))
   {
      if(qqState == "normal" + sex)
      {
         downRape();
      }
   }
};
init();
