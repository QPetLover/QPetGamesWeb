class Enemy extends MovieClip
{
   var dx;
   var dy;
   var enemyType;
   var gameTimer;
   var hitable;
   var moveable;
   var pic;
   function Enemy()
   {
      super();
   }
   function init()
   {
      this.dx = Data.enemySpeedMin + random(Data.enemySpeedRange);
      this.dy = Math.cos(this.dx);
      this.moveable = true;
      this.hitable = true;
      if(random(2) == 1)
      {
         this._xscale = -100;
         this._x = 0;
         this.dx = this.dx;
      }
      else
      {
         this._x = Data.stage_Width;
         this.dx = - this.dx;
      }
      this._y = Data.skyHight + random(Data.stage_Heigh - Data.flyHight - Data.skyHight);
      if(random(2) == 1)
      {
         this.enemyType = 1;
         this.gotoAndStop(1);
      }
      else
      {
         this.enemyType = 2;
         this.gotoAndStop(2);
      }
      this.gameTimer = setInterval(this,"run",Data.gameSpeed);
   }
   function run()
   {
      if(this._x >= 0 and this._x <= Data.stage_Width)
      {
         if(this.hitable)
         {
            if(this.hitTest(this._parent._parent.Player) && Data.hitable)
            {
               if(this.enemyType == 1)
               {
                  Data.goodNum++;
                  _root.score = Data.goodNum;
                  this.upFengShu();
                  this._parent._parent.player_pic.pic.gotoAndStop("catch");
                  this._parent._parent.Player.gotoAndStop("gotgood");
               }
               else
               {
                  this._parent._parent.player_pic.pic.gotoAndStop("hit");
                  this._parent._parent.Player.gotoAndStop("gotbad");
                  this.stopDrag();
                  Data.hitable = false;
                  Data.badNum++;
               }
               this.hitable = false;
               this.pic.gotoAndPlay("off");
            }
            this.dy = (- Math.sin(this.dx)) * 2;
            this._x += this.dx;
            if(this._y > 100 && this._y < Data.stage_Heigh - 50)
            {
               this._y += this.dy;
            }
         }
      }
      else
      {
         this.enemySpeedUp();
         this.addEnemySpeedUp();
         clearInterval(this.gameTimer);
         this.unloadMovie();
      }
   }
   function upFengShu()
   {
      var _loc2_;
      if(Data.goodNum >= 100)
      {
         this._parent._parent.num3._visible = true;
         this._parent._parent.num3._x = 281.2;
         this._parent._parent.num3._y = -249.7;
         this._parent._parent.num2._x = 303.2;
         this._parent._parent.num2._y = -249.7;
         this._parent._parent.num1._x = 325.4;
         this._parent._parent.num1._y = -248.1;
         _loc2_ = String(Data.goodNum);
         this._parent._parent.num1.gotoAndStop(Number(_loc2_.charAt(2)) + 1);
         this._parent._parent.num2.gotoAndStop(Number(_loc2_.charAt(1)) + 1);
         this._parent._parent.num3.gotoAndStop(Number(_loc2_.charAt(0)) + 1);
      }
      else
      {
         this._parent._parent.num3._visible = false;
         this._parent._parent.num3._x = 261.2;
         this._parent._parent.num3._y = -249.7;
         this._parent._parent.num2._x = 283.2;
         this._parent._parent.num2._y = -249.7;
         this._parent._parent.num1._x = 305.4;
         this._parent._parent.num1._y = -248.1;
         this._parent._parent.num1.gotoAndStop(Data.goodNum % 10 + 1);
         this._parent._parent.num2.gotoAndStop(Math.floor(Data.goodNum / 10) + 1);
      }
   }
   function destroy(mc)
   {
      this.enemySpeedUp();
      this.addEnemySpeedUp();
      mc.unloadMovie();
   }
   function enemySpeedUp()
   {
      if(Data.enemySpeedMin + Data.enemySpeedUp <= Data.enemyFastestSpeed)
      {
         Data.enemySpeedMin += Data.enemySpeedUp;
      }
   }
   function addEnemySpeedUp()
   {
      if(Data.newEnemySpeed - Data.newEnemySpeedUp >= Data.fastestSpeed)
      {
         Data.newEnemySpeed -= Data.newEnemySpeedUp;
      }
      else
      {
         Data.newEnemySpeed = Data.newEnemySpeed;
      }
   }
}
