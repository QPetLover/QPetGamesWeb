stage = {};
mx.events.EventDispatcher.initialize(stage);
fishArray = new Array();
mineArray = new Array();
torpedoArray = new Array();
arrayMcCount = function(arr)
{
   var _loc2_ = 0;
   for(name in arr)
   {
      if(arr[name]._x != undefined)
      {
         _loc2_ = _loc2_ + 1;
      }
      else
      {
         delete arr[name];
      }
   }
   return _loc2_;
};
addFish = function()
{
   var _loc2_ = this.attachMovie("一条鱼","鱼" + this.getNextHighestDepth(),this.getNextHighestDepth());
   _loc2_._y = this.horizonMinY + this.fishWidth * Math.random();
   _loc2_._x = 180 + 20 * Math.random() - this._x;
   _loc2_._xscale = Math.random() < 0.5 ? 100 : -100;
   fishArray.push(_loc2_);
   stage.addEventListener("onStageCheck",_loc2_);
   _loc2_.onStageCheck = function(myObj)
   {
      if(this.fishUnit.hitTest(myObj.sprite.fishArea))
      {
         score.fish++;
         scoreBoard.updateData(score.fish);
         this.fishPoint.x = qgg._x;
         this.fishPoint.y = qgg._y;
         this.changeStat("死去");
      }
   };
};
this.dropTorpedo = function(myObj)
{
   var _loc4_ = new Object();
   _loc4_.depth = 15 * Math.random();
   var _loc2_ = {x:myObj.ship._x,y:myObj.ship._y};
   myObj.localToGlobal(_loc2_);
   this.globalToLocal(_loc2_);
   _loc4_._x = _loc2_.x;
   _loc4_._y = _loc2_.y;
   var _loc3_ = this.attachMovie("鱼雷","torpedo_" + this.getNextHighestDepth(),this.getNextHighestDepth(),_loc4_);
   torpedoArray.push(_loc3_);
   _loc3_._xscale = _loc2_.x >= this.qgg._x ? -100 : 100;
   stage.addEventListener("onStageCheck",_loc3_);
   _loc3_.onStageCheck = function(myObj)
   {
      if(qgg.getStat() == "被炸" || qgg.getStat() == "补血" || qgg.getStat() == "无敌" || qgg.getStat() == "加速")
      {
         return undefined;
      }
      if(qgg.getStat() == "无敌左" || qgg.getStat() == "无敌右")
      {
         return undefined;
      }
      if(this.hitArea.hitTest(myObj.sprite.hitArea))
      {
         if(this.getStat() == "下沉" || this.getStat() == "发射")
         {
            this.changeStat("爆炸");
            score.torpedoed++;
            qgg.changeStat("被炸");
            qgg.changeBlood(-2);
         }
      }
   };
};
this.dropMine = function(myObj)
{
   var _loc4_ = new Object();
   var _loc2_ = {x:myObj.submarine._x,y:myObj.submarine._y};
   myObj.localToGlobal(_loc2_);
   var _loc3_;
   if(_loc2_.x > 0 && _loc2_.x < Stage.width)
   {
      this.globalToLocal(_loc2_);
      _loc4_._x = _loc2_.x;
      _loc4_._y = _loc2_.y;
      _loc3_ = this.attachMovie("水雷","mine_" + this.getNextHighestDepth(),this.getNextHighestDepth(),_loc4_);
      mineArray.push(_loc3_);
      stage.addEventListener("onStageCheck",_loc3_);
      _loc3_.onStageCheck = function(hitObj)
      {
         if(qgg.getStat() == "被炸" || qgg.getStat() == "补血" || qgg.getStat() == "无敌" || qgg.getStat() == "加速")
         {
            return undefined;
         }
         if(qgg.getStat() == "无敌左" || qgg.getStat() == "无敌右")
         {
            return undefined;
         }
         if(this.hitArea.hitTest(hitObj.sprite.hitArea))
         {
            if(this.getStat() == "下沉")
            {
               this.changeStat("爆炸");
               qgg.changeStat("被炸");
               score.mined++;
               qgg.changeBlood(-1);
            }
         }
      };
   }
};
this.dropGift = function(myObj)
{
   var _loc3_ = new Object();
   var _loc2_ = {x:myObj.unit._x,y:myObj.unit._y};
   myObj.localToGlobal(_loc2_);
   this.globalToLocal(_loc2_);
   _loc3_._x = _loc2_.x;
   _loc3_._y = _loc2_.y;
   var _loc4_ = this.attachMovie("礼物","gift_" + this.getNextHighestDepth(),this.getNextHighestDepth(),_loc3_);
   stage.addEventListener("onStageCheck",_loc4_);
   _loc4_.onStageCheck = function(hitObj)
   {
      if(this.getStat() == "被吃")
      {
         return undefined;
      }
      if(this.hitArea.hitTest(hitObj.sprite))
      {
         if(this.getStat() == "补血包")
         {
            this.changeStat("被吃");
            score.bloodBag++;
            qgg.changeStat("补血");
            qgg.changeBlood(2);
         }
         if(this.getStat() == "无敌包")
         {
            this.changeStat("被吃");
            score.kingBag++;
            qgg.changeStat("无敌");
         }
         if(this.getStat() == "加速包")
         {
            this.changeStat("被吃");
            score.speedBag++;
            qgg.changeStat("加速");
         }
      }
   };
};
scoreBoard.updateData = function(data)
{
   this.board.updateData(data);
   if(data == 30 || data == 90 || data == 150)
   {
      alert.play();
   }
   if(data > 30 && data <= 90)
   {
      fishCount = 5;
      mineCount = 6;
      torpedoCount = 2;
   }
   if(data > 90 && data <= 150)
   {
      fishCount = 7;
      mineCount = 12;
      torpedoCount = 5;
   }
   if(data > 150)
   {
      fishCount = 9;
      mineCount = 30;
      torpedoCount = 15;
   }
};
var myObj = new Object();
myObj.type = "onStageCheck";
myObj.sprite = qgg;
this.stageCheck = function()
{
   stage.dispatchEvent(myObj);
};
qgg.speed = 11;
var cord_array = new Array(this.qgg._x,this.qgg._x,this.qgg._x,this.qgg._x,this.qgg._x);
qgg.kingTimer = 0;
qgg.speedUpTimer = 0;
mouseFollow = function()
{
   var _loc2_ = qgg.speed;
   if(qgg._visible == false || qgg.getStat() == "被炸" || qgg.getStat() == "补血" || qgg.getStat() == "无敌" || qgg.getStat() == "加速")
   {
      return undefined;
   }
   var _loc5_ = "左";
   var _loc3_ = "右";
   if(qgg.getStat() == "加速左" || qgg.getStat() == "加速右")
   {
      qgg.speedUpTimer++;
      timerBar.updateData(Math.round(qgg.speedUpTimer / 1.5));
      if(qgg.speedUpTimer > qgg.maxSpeedUpTime)
      {
         qgg.recover();
         qgg.speedUpTimer = 0;
      }
      else
      {
         _loc2_ = qgg.speed / 4;
         _loc5_ = "加速左";
         _loc3_ = "加速右";
      }
   }
   else if(qgg.getStat() == "无敌左" || qgg.getStat() == "无敌右")
   {
      qgg.kingTimer++;
      timerBar.updateData(Math.round(qgg.kingTimer / 1.5));
      if(qgg.kingTimer >= qgg.maxKingTime)
      {
         qgg.recover();
         qgg.kingTimer = 0;
      }
      else
      {
         _loc5_ = "无敌左";
         _loc3_ = "无敌右";
      }
   }
   var _loc4_ = this._ymouse;
   if(this._ymouse < this.horizonMinY)
   {
      _loc4_ = this.horizonMinY;
      Mouse.show();
   }
   else
   {
      Mouse.hide();
   }
   if(this._ymouse > this.horizonMaxY)
   {
      _loc4_ = this.horizonMaxY;
   }
   offsetX = (this._xmouse - qgg._x) / _loc2_;
   offsetY = (_loc4_ - qgg._y) / _loc2_;
   qgg._x += offsetX;
   qgg._y += offsetY;
   cord_array.shift();
   cord_array.push(qgg._x);
   if((cord_array[2] - cord_array[0]) * (cord_array[4] - cord_array[2]) < 0)
   {
      qgg.changeStat(cord_array[2] - cord_array[0] <= 0 ? _loc3_ : _loc5_);
   }
};
qgg.bloodCount = 11;
bloodBar.gotoAndStop(qgg.bloodCount);
qgg.changeBlood = function(bloodNum)
{
   var _loc2_ = this.bloodCount + bloodNum;
   if(_loc2_ > 11)
   {
      _loc2_ = 11;
   }
   if(_loc2_ <= 1)
   {
      bloodBar.gotoAndStop(1);
      onEnterFrame = function()
      {
         if(qgg.getStat() != "被炸")
         {
            gameOver();
         }
      };
   }
   else
   {
      this.bloodCount = _loc2_;
      bloodBar.gotoAndStop(this.bloodCount);
   }
};
horizonMinY = 95 - this._y;
horizonMaxY = 279 - this._y;
fishWidth = 160;
score = {fish:0,bloodBag:0,speedBag:0,kingBag:0,mined:0,torpedoed:0};
timeBar.updateData(100);
qgg.maxKingTime = 150;
qgg.maxSpeedUpTime = 150;
timer = 0;
fishTimer = 0;
gTimer = 0;
ship.stop();
submarine.stop();
fishCount = 3;
mineCount = 0;
torpedoCount = 0;
qggInit._visible = true;
qgg._visible = false;
go = function()
{
   fishCount = 3;
   mineCount = 3;
   torpedoCount = 0;
   qgg._visible = true;
   qggInit._visible = false;
};
onEnterFrame = function()
{
   timer++;
   if(timer > 10)
   {
      timer = 0;
      if((m = Math.random() > 0.5) && this.arrayMcCount(this.mineArray) < this.mineCount)
      {
         this.dropMine(this.submarine);
      }
      if((m = Math.random() > 0.5) && this.arrayMcCount(this.torpedoArray) < this.torpedoCount)
      {
         this.dropTorpedo(this.ship);
      }
      if(this.arrayMcCount(this.fishArray) < this.fishCount)
      {
         this.addFish();
      }
   }
   stageCheck();
   mouseFollow();
   gTimer++;
   if(gTimer >= 520)
   {
      ship.play();
   }
   if(gTimer >= 20)
   {
      submarine.play();
   }
};
gameOver = function()
{
   Mouse.show();
   this._parent.over(score);
   onEnterFrame = function()
   {
   };
};
Mouse.hide();
