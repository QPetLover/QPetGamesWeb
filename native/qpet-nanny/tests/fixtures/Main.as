package classes
{
   import classes.Utils.*;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.media.SoundChannel;
   import flash.media.SoundMixer;
   import flash.media.SoundTransform;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.text.TextField;
   import flash.ui.Keyboard;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import music.*;
   
   [SWF(width="800", height="600", backgroundColor="#ffffff", frameRate="25")]
   public class Main extends MovieClip
   {
      
      private var speed:Number = 25;
      
      public var gameSoundControl:MovieClip;
      
      private var role:MovieClip;
      
      public var scoreTxt:TextField;
      
      private var timeDelay:Number;
      
      public var vy:Number = 5;
      
      private var bonusCon:Sprite;
      
      private var gsound:SoundChannel;
      
      private var staticArr:Array;
      
      public var comboCon:MovieClip;
      
      public var hp:int;
      
      public var trash:MovieClip;
      
      public var loading:Loading;
      
      private var timerDelay:Timer;
      
      private var timer:Timer;
      
      public var help:Help;
      
      public var hpCon:MovieClip;
      
      public var gameAnClose:SimpleButton;
      
      private var activeArr:Array;
      
      private var closePrompt:ClosePrompt;
      
      private var combo:int;
      
      private var effect:Effect;
      
      public var closeMode:Boolean;
      
      public var totalScore:Number;
      
      private var gameState:Boolean;
      
      public var keyC:MovieClip;
      
      public var keyV:MovieClip;
      
      public var keyX:MovieClip;
      
      public var keyZ:MovieClip;
      
      private var moveSprite:Sprite;
      
      public function Main()
      {
         var _loc1_:Sprite = null;
         super();
         addFrameScript(0,frame1,1,frame2,10,frame11);
         _loc1_ = new Sprite();
         _loc1_.graphics.beginFill(0);
         _loc1_.graphics.drawRect(0,0,800,600);
         _loc1_.graphics.endFill();
         addChild(_loc1_);
         this.mask = _loc1_;
         gsound = GMusic.MSTARTFRONT.play();
         timerDelay = new Timer(5000);
         timerDelay.addEventListener(TimerEvent.TIMER,bulletDelay);
      }
      
      private function removeBonus() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:Number = NaN;
         _loc1_ = 0;
         while(_loc1_ < activeArr.length)
         {
            if(activeArr[_loc1_].y >= 450)
            {
               removeChild(activeArr[_loc1_]);
               activeArr.splice(_loc1_,1);
               hp -= 10;
               if(hp <= 0)
               {
                  hpCon.scaleX = 0;
                  closeMode = false;
                  gameOver();
               }
               else
               {
                  _loc2_ = hp > 100 ? 1 : hp / 100;
                  hpCon.scaleX = _loc2_;
               }
               totalScore -= 100;
               scoreTxt.text = totalScore.toString();
            }
            _loc1_++;
         }
         if(totalScore < -400)
         {
            closeMode = false;
            gameOver();
         }
      }
      
      private function checkCollide() : void
      {
         var _loc1_:Sprite = null;
         var _loc2_:uint = 0;
         if(staticArr.length == 0)
         {
            _loc1_ = role.basket;
            if(_loc1_ == null)
            {
               return;
            }
         }
         else
         {
            _loc1_ = staticArr[staticArr.length - 1];
         }
         _loc2_ = 0;
         while(_loc2_ < activeArr.length)
         {
            if(_loc1_.hitTestObject(activeArr[_loc2_]))
            {
               activeArr[_loc2_].removeEvent();
               activeArr[_loc2_].x = -activeArr[_loc2_].width / 2;
               activeArr[_loc2_].y = -staticArr.length * 50 - 35;
               bonusCon.addChild(activeArr[_loc2_]);
               staticArr.push(activeArr[_loc2_]);
               activeArr.splice(_loc2_,1);
               totalScore += 10;
               scoreTxt.text = totalScore.toString();
            }
            _loc2_++;
         }
      }
      
      internal function frame2() : *
      {
         stop();
         help.addEventListener("CheckGameStart",checkGameStart);
      }
      
      internal function frame1() : *
      {
         stop();
         loading = new Loading(root);
         addChild(loading);
         loading.addEventListener(Event.COMPLETE,onGameLoadComplete);
      }
      
      internal function frame11() : *
      {
         initGame();
      }
      
      private function createBonus(param1:uint) : Sprite
      {
         var _loc2_:Bonus = null;
         var _loc3_:int = 0;
         switch(param1)
         {
            case 0:
               _loc2_ = new RedApple();
               _loc2_.type = "red";
               break;
            case 1:
               _loc2_ = new BlueApple();
               _loc2_.type = "blue";
               break;
            case 2:
               _loc2_ = new GreenApple();
               _loc2_.type = "green";
               break;
            case 3:
               _loc2_ = new OrangeApple();
               _loc2_.type = "orange";
               break;
            default:
               _loc3_ = int(Math.random() * 4);
               switch(_loc3_)
               {
                  case 0:
                     _loc2_ = new Trash1();
                     _loc2_.type = "trash1";
                     break;
                  case 1:
                     _loc2_ = new Trash2();
                     _loc2_.type = "trash2";
                     break;
                  case 2:
                     _loc2_ = new Trash3();
                     _loc2_.type = "trash3";
                     break;
                  case 3:
                     _loc2_ = new Prize();
                     _loc2_.type = "prize";
               }
         }
         _loc2_.vy = vy;
         _loc2_.x = Math.random() * 500 + 50;
         _loc2_.y = 0;
         _loc2_.scaleX = _loc2_.scaleY = 2;
         return _loc2_;
      }
      
      private function bonusMove(param1:Event) : void
      {
         var _loc2_:Bonus = null;
         var _loc3_:Number = NaN;
         if(totalScore < -400)
         {
            closeMode = false;
            gameOver();
         }
         _loc2_ = param1.currentTarget as Bonus;
         if(_loc2_.decide)
         {
            GMusic.MCORRECT.play();
            _loc2_.animal.gotoAndPlay("right");
         }
         else
         {
            hp -= 10;
            GMusic.MERROR.play();
            _loc2_.animal.gotoAndPlay("wrong");
         }
         if(stage.contains((param1.target as Bonus).parent))
         {
            removeChild((param1.target as Bonus).parent);
         }
         if(hp <= 0)
         {
            hpCon.scaleX = 0;
            closeMode = false;
            gameOver();
         }
         else
         {
            _loc3_ = hp > 100 ? 1 : hp / 100;
            hpCon.scaleX = _loc3_;
         }
      }
      
      private function changeSex(param1:String) : String
      {
         if(param1 == "102")
         {
            return "GG";
         }
         return "MM";
      }
      
      private function onFrameHandler(param1:Event) : void
      {
         move();
         checkCollide();
         removeBonus();
         checkOver();
      }
      
      private function funAnGameClose(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         if(this.currentLabel == "start")
         {
            totalScore = 0;
            closeMode = true;
            gameOver();
         }
         else
         {
            _loc2_ = new URLRequest("javascript:closeFrame()");
            navigateToURL(_loc2_,"_top");
         }
      }
      
      private function checkSpace() : void
      {
         var _loc1_:Bonus = null;
         var _loc2_:Number = NaN;
         var _loc3_:Point = null;
         _loc1_ = staticArr[staticArr.length - 1];
         if(_loc1_.type == "prize")
         {
            hp = hp >= 100 ? 100 : int(hp + 10);
            _loc2_ = hp > 100 ? 1 : hp / 100;
            hpCon.scaleX = _loc2_;
            _loc3_ = bonusCon.localToGlobal(new Point(_loc1_.x,_loc1_.y));
            effect = new Effect();
            effect.x = _loc3_.x - 30;
            effect.y = _loc3_.y - 50;
            effect.width = effect.height = 100;
            addChild(effect);
            bonusCon.removeChild(_loc1_);
            staticArr.splice(staticArr.length - 1,1);
         }
      }
      
      private function initGame() : void
      {
         if(gameSoundControl != null)
         {
            gameSoundControl.removeEventListener(MouseEvent.CLICK,funGameSoundControl);
         }
         gameSoundControl.addEventListener(MouseEvent.CLICK,funGameSoundControl);
         gameState = true;
         stage.focus = stage;
         hp = 100;
         hpCon.scaleX = 1;
         combo = 0;
         comboCon.comboTxt.text = combo.toString();
         vy = 8;
         timeDelay = 2000;
         timer = new Timer(timeDelay);
         timer.addEventListener(TimerEvent.TIMER,createBonusHandler);
         timer.start();
         role.x = 397;
         role.y = 412;
         addChild(role);
         role.visible = true;
         totalScore = 0;
         scoreTxt.text = totalScore.toString();
         activeArr = new Array();
         staticArr = new Array();
         timerDelay.reset();
         timerDelay.start();
         bonusCon = new Sprite();
         bonusCon.x = role.x;
         bonusCon.y = role.y;
         addChild(bonusCon);
         PopKeys.initStage(stage);
         addEventListener(Event.ENTER_FRAME,onFrameHandler);
      }
      
      private function createBonusHandler(param1:TimerEvent) : void
      {
         var _loc2_:Sprite = null;
         _loc2_ = createBonus(int(Math.random() * 8));
         addChild(_loc2_);
         activeArr.push(_loc2_);
      }
      
      public function onGameLoadComplete(param1:Event) : void
      {
         gotoAndStop(1,"GameStart");
      }
      
      private function checkNum(param1:Point, param2:MovieClip, param3:String) : void
      {
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:Bonus = null;
         var _loc7_:Point = null;
         GMusic.MKEYPRESS.play();
         if(param3 == "trash")
         {
            GMusic.MTRASH.play();
         }
         moveSprite = new Sprite();
         addChild(moveSprite);
         _loc4_ = 1;
         _loc5_ = staticArr.length - 1;
         while(_loc5_ > 0)
         {
            if(staticArr[_loc5_].type != staticArr[_loc5_ - 1].type)
            {
               break;
            }
            _loc4_++;
            _loc5_--;
         }
         _loc5_ = 0;
         while(_loc5_ < _loc4_)
         {
            _loc7_ = bonusCon.localToGlobal(new Point(staticArr[staticArr.length - 1].x,staticArr[staticArr.length - 1].y));
            _loc6_ = staticArr[staticArr.length - 1];
            _loc6_.animal = param2;
            if(_loc6_.type.substr(0,5) == param3)
            {
               totalScore += 100;
            }
            else
            {
               totalScore -= 100;
               _loc6_.decide = false;
            }
            scoreTxt.text = totalScore.toString();
            _loc6_.move(param1.x,param1.y);
            moveSprite.addChild(_loc6_);
            _loc6_.x = _loc7_.x;
            _loc6_.y = _loc7_.y;
            staticArr.splice(staticArr.length - 1,1);
            if(_loc4_ < 3)
            {
               break;
            }
            _loc5_++;
         }
         if(_loc4_ >= 3)
         {
            combo += _loc4_;
            comboCon.comboTxt.text = combo.toString();
         }
         _loc6_.addEventListener("moveOver",bonusMove);
      }
      
      private function checkGameStart(param1:Event) : void
      {
         trace("CheckGameStart");
         dispatchEvent(new Event("gameStart",true));
         gameStart(changeSex(Math.round(Math.random() + 102).toString()),int(Math.random() * 3 + 1).toString());
      }
      
      public function showOver(param1:String) : void
      {
         var _loc2_:ScorePrompt = null;
         _loc2_ = new ScorePrompt(param1);
         _loc2_.x = 0;
         _loc2_.y = 0;
         addChild(_loc2_);
         _loc2_.addEventListener("backMainMenu",showPlay);
      }
      
      public function gameStart(param1:String, param2:String) : void
      {
         var _loc3_:Class = null;
         _loc3_ = getDefinitionByName(param1 + param2) as Class;
         role = new _loc3_();
         gsound.stop();
         gsound = GMusic.MSTARTBACK.play(0,1000);
         if(this.currentLabel != "start")
         {
            gotoAndStop("start");
         }
         else
         {
            initGame();
         }
      }
      
      private function bulletDelay(param1:TimerEvent) : void
      {
         if(timeDelay > 500)
         {
            timeDelay -= 50;
         }
         else if(timeDelay < 500)
         {
            timerDelay.stop();
         }
         if(vy < 20)
         {
            vy += 0.1;
         }
         timer.stop();
         timer.reset();
         timer = new Timer(timeDelay);
         timer.addEventListener(TimerEvent.TIMER,createBonusHandler);
         timer.start();
      }
      
      private function checkGameReplay(param1:Event) : void
      {
         gsound.stop();
         gsound = GMusic.MSTARTFRONT.play();
         gotoAndStop("main");
      }
      
      public function showPlay(param1:Event = null) : void
      {
         gsound.stop();
         gsound = GMusic.MSTARTFRONT.play();
         gameStart(changeSex(Math.round(Math.random() + 102).toString()),int(Math.random() * 3 + 1).toString());
      }
      
      private function move() : void
      {
         var _loc1_:Point = null;
         bonusCon.x = role.x;
         if(PopKeys.isDown(Keyboard.LEFT))
         {
            role.x -= speed;
            if(role.currentLabel != "run")
            {
               role.gotoAndStop("run");
            }
         }
         if(PopKeys.isDown(Keyboard.RIGHT))
         {
            role.x += speed;
            if(role.currentLabel != "run")
            {
               role.gotoAndStop("run");
            }
         }
         if(role.x - role.width / 2 < 0)
         {
            role.x = role.width / 2;
         }
         else if(role.x + role.width / 2 > 800)
         {
            role.x = 800 - role.width / 2;
         }
         if(!PopKeys.isDown(Keyboard.RIGHT) && !PopKeys.isDown(Keyboard.LEFT))
         {
            if(role.currentLabel != "stop")
            {
               role.gotoAndStop("stop");
            }
         }
         if(staticArr.length > 0)
         {
            _loc1_ = GameData.getCoordinate(PopKeys.cState);
            switch(PopKeys.cState)
            {
               case 90:
                  checkNum(_loc1_,keyZ,"red");
                  break;
               case 88:
                  checkNum(_loc1_,keyX,"blue");
                  break;
               case 67:
                  checkNum(_loc1_,keyC,"orang");
                  break;
               case 86:
                  checkNum(_loc1_,keyV,"green");
                  break;
               case Keyboard.DOWN:
                  checkNum(_loc1_,trash,"trash");
                  break;
               case Keyboard.SPACE:
                  checkSpace();
            }
            PopKeys.cState = 0;
         }
      }
      
      private function gameOver() : void
      {
         var _loc1_:uint = 0;
         if(gameState)
         {
            gameState = false;
            timer.stop();
            timerDelay.stop();
            role.visible = false;
            gsound.stop();
            GMusic.MDEFEATED.play();
            gsound = GMusic.MAFTER.play(0,1000);
            removeEventListener(Event.ENTER_FRAME,onFrameHandler);
            PopKeys.clearState(stage);
            trace("结束!");
            _loc1_ = 0;
            while(_loc1_ < activeArr.length)
            {
               if(stage.contains(activeArr[_loc1_]))
               {
                  removeChild(activeArr[_loc1_]);
               }
               _loc1_++;
            }
            if(this.contains(bonusCon))
            {
               removeChild(bonusCon);
            }
            dispatchEvent(new Event("gameComplete",true));
            showOver("你获得了" + totalScore + "分，要加油哦~\r更多游戏请登录QQ宠物官网。");
         }
      }
      
      private function checkOver() : void
      {
         if(staticArr.length >= 6)
         {
            closeMode = false;
            gameOver();
         }
      }
      
      private function funGameSoundControl(param1:MouseEvent) : void
      {
         if(SoundMixer.soundTransform.volume == 1)
         {
            SoundMixer.soundTransform = new SoundTransform(0);
            gameSoundControl.gotoAndStop(2);
         }
         else
         {
            SoundMixer.soundTransform = new SoundTransform(1);
            gameSoundControl.gotoAndStop(1);
         }
      }
   }
}

