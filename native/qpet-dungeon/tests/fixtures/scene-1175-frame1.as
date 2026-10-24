function angryAccum()
{
   fightable = true;
}
function leftDown()
{
   var _loc1_;
   countLeft--;
   if(player._xscale > 0)
   {
      player._xscale *= -1;
   }
   if(timeokLeft)
   {
      if(!jumping)
      {
         player.gotoAndStop("run");
      }
      _loc1_ = 2;
   }
   else
   {
      if(!jumping)
      {
         player.gotoAndStop("walk");
      }
      _loc1_ = 1;
   }
   if(player._x + playerCon_mc._x > ledgeX0 || bgNear_mc._x + DISTANCE >= 0)
   {
      if(player._x >= player._width)
      {
         player._x -= DISTANCE * _loc1_;
      }
   }
   else
   {
      player._x -= DISTANCE * _loc1_;
      bgNear_mc._x += DISTANCE * _loc1_;
      playerCon_mc._x = bgNear_mc._x;
      bgFar_mc._x += DISTANCE * _loc1_ / 2;
   }
}
function rightDown()
{
   var _loc1_;
   count--;
   if(player._xscale < 0)
   {
      player._xscale *= -1;
   }
   if(timeok)
   {
      if(!jumping)
      {
         player.gotoAndStop("run");
      }
      _loc1_ = 2;
   }
   else
   {
      if(!jumping)
      {
         player.gotoAndStop("walk");
      }
      _loc1_ = 1;
   }
   if(player._x + playerCon_mc._x < ledgeX1 || bgNear_mc._x - DISTANCE * _loc1_ <= Stage.width - bgNear_mc._width)
   {
      if(playerCon_mc.door._x > player._x)
      {
         player._x += DISTANCE * _loc1_;
      }
   }
   else
   {
      player._x += DISTANCE * _loc1_;
      bgNear_mc._x -= DISTANCE * _loc1_;
      playerCon_mc._x = bgNear_mc._x;
      bgFar_mc._x -= DISTANCE * _loc1_ / 2;
   }
}
function KeyDown()
{
   if(Key.isDown(Keyjump) && jumpable)
   {
      player.gotoAndStop("jump");
      jumpable = false;
   }
   else if(Key.isDown(Keyattack) && attackable && !jumping)
   {
      player.gotoAndStop("attack");
      attackable = false;
   }
   else if(Key.isDown(Keyfight) && !jumping)
   {
      if(fightable)
      {
         angry++;
         player.gotoAndStop("fight");
      }
      else
      {
         cant_mc.gotoAndPlay("show");
      }
   }
   else
   {
      if(Key.isDown(39))
      {
         hitgoo._alpha = 0;
         rightDown();
      }
      if(Key.isDown(37))
      {
         leftDown();
      }
      if(Key.isDown(38) && player._y - DISTANCE > ledgeY0)
      {
         player._y -= DISTANCE;
         if(!Key.isDown(37) && !Key.isDown(39))
         {
            player.gotoAndStop("walk");
         }
      }
      if(Key.isDown(40) && player._y + DISTANCE < ledgeY1)
      {
         player._y += DISTANCE;
         if(!Key.isDown(37) && !Key.isDown(39))
         {
            player.gotoAndStop("walk");
         }
      }
   }
}
function passedCharge()
{
   monLeft--;
   if(monLeft <= 0)
   {
      _parent.preScore = _parent.score;
      delete this.onEnterFrame;
      Key.removeListener(keyListener_obj);
      playerCon_mc.door.play();
   }
}
function gameoverCharge()
{
   if(player.blood <= 0)
   {
      _parent.blood = _parent.bloodtemp;
      _parent.score = _parent.preScore;
      delete this.onEnterFrame;
      Key.removeListener(keyListener_obj);
      _parent.dialogue_mc.gotoAndPlay("gameover");
   }
}
var DISTANCE = 5;
var ledgeX0 = 240;
var ledgeX1 = 520;
var ledgeY0 = 300;
var ledgeY1 = 420;
var monNumber = 7;
var monLeft = monNumber;
var Keyfight = 90;
var Keyattack = 88;
var Keyjump = 67;
var jumpable = true;
var jumping = false;
var attacking = false;
var attackable = true;
var fighting = false;
var angry = 0;
var fightable = true;
var activeArr = new Array();
var count = 4;
var countLeft = 4;
var timeok = false;
var timeokLeft = false;
var keyListener_obj = new Object();
keyListener_obj.onKeyUp = function()
{
   if(Key.getCode() == Keyfight && !jumping)
   {
      angry = 0;
   }
   if(Key.getCode() == Keyattack && !jumping)
   {
      attackable = true;
   }
   if(Key.getCode() == Keyjump)
   {
      jumpable = true;
   }
   if(Key.getCode() == 38 && !fighting)
   {
      player.gotoAndStop("stand");
   }
   if(Key.getCode() == 40 && !fighting)
   {
      player.gotoAndStop("stand");
   }
   if(Key.getCode() == 37 && !fighting)
   {
      player.gotoAndStop("stand");
      if(countLeft > 0)
      {
         timeokLeft = true;
      }
      else
      {
         timeokLeft = false;
      }
      countLeft = 4;
   }
   if(Key.getCode() == 39 && !fighting)
   {
      player.gotoAndStop("stand");
      if(count > 0)
      {
         timeok = true;
      }
      else
      {
         timeok = false;
      }
      count = 4;
   }
};
keyListener_obj.onKeyDown = function()
{
};
Key.addListener(keyListener_obj);
onEnterFrame = function()
{
   if(!fighting && !attacking)
   {
      KeyDown();
   }
   playerCon_mc.depthCharge();
};
