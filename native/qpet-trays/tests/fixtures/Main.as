package frame
{
   import events.GameEvent;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.ColorTransform;
   import flash.media.SoundMixer;
   import flash.media.SoundTransform;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.text.TextField;
   import flash.ui.Keyboard;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import music.*;
   import utils.Delay;
   
   [SWF(width="800", height="600", backgroundColor="#ffffff", frameRate="25")]
   public class Main extends MovieClip
   {
      
      private var spring:Number = 0.2;
      
      private var ax:Number = 0;
      
      private var srcObject:Object;
      
      private var speed:Number = 1;
      
      public var gameSoundControl:MovieClip;
      
      public var role:Role;
      
      public var bed:MovieClip;
      
      private var stopSpring:Number = 0.03;
      
      private var timeDelay:Number;
      
      private var vx:Number = 0;
      
      private var over:Over;
      
      private var friction:*;
      
      private var createBulletTime:Timer;
      
      private var bulletCon:Sprite;
      
      public var loading:Loading;
      
      private var moveSpring:Number = 0.00005;
      
      public var dishNumTxt:TextField;
      
      private var bulletVY:Number;
      
      private var moveState:String = "stop";
      
      private var help:Help;
      
      private var maxLength:Number;
      
      private var closePrompt:ClosePrompt;
      
      private var bullets:Array;
      
      public var totalScore:Number = 0;
      
      public var closeMode:Boolean;
      
      public var gameClose1:SimpleButton;
      
      private var gameTime:int;
      
      public var totalScoreTxt:TextField;
      
      public function Main()
      {
         var _loc1_:Sprite = null;
         super();
         addFrameScript(0,frame1);
         _loc1_ = new Sprite();
         _loc1_.graphics.beginFill(0);
         _loc1_.graphics.drawRect(0,0,800,600);
         _loc1_.graphics.endFill();
         addChild(_loc1_);
         this.mask = _loc1_;
         help = new Help();
         help.x = 15.2;
         help.y = 26.7;
         help.addEventListener(GameEvent.GAMESTART,checkGameStart);
         over = new Over();
         over.x = 0;
         over.y = 0;
         over.addEventListener(GameEvent.GAMEREPLAY,checkGameStart);
         srcObject = new Object();
         bullets = new Array();
      }
      
      private function checkCollide() : void
      {
         var _loc1_:uint = 0;
         _loc1_ = 0;
         while(_loc1_ < bullets.length)
         {
            if(bullets[_loc1_].outside)
            {
               bullets[_loc1_].gotoAndPlay(2);
               bullets.splice(_loc1_,1);
               _loc1_--;
            }
            else
            {
               if(role.dishs.hitTestPoint(bullets[_loc1_].x,bullets[_loc1_].y) && role.dishStatus)
               {
                  bullets[_loc1_].outside = true;
                  bullets[_loc1_].gotoAndPlay(2);
                  bullets.splice(_loc1_,1);
                  role.dishs.visible = false;
                  role.gotoAndStop("hitDish");
                  closeMode = false;
                  clearEvent();
                  return;
               }
               if(role.hitTestPoint(bullets[_loc1_].x,bullets[_loc1_].y))
               {
                  bullets[_loc1_].outside = true;
                  bullets[_loc1_].gotoAndPlay(2);
                  bullets.splice(_loc1_,1);
                  role.dishs.visible = false;
                  if(role.dishStatus)
                  {
                     role.gotoAndStop("hitPerson");
                  }
                  else if(role.currentLabel == "leftRun" || role.currentLabel == "leftStatic")
                  {
                     role.gotoAndStop("lTrip");
                  }
                  else
                  {
                     role.gotoAndStop("rTrip");
                  }
                  closeMode = false;
                  clearEvent();
                  return;
               }
            }
            _loc1_++;
         }
      }
      
      private function gameInit() : void
      {
         addChild(help);
      }
      
      private function checkOutsize() : void
      {
         var _loc1_:Delay = null;
         if(role.x < 0)
         {
            vx = 0;
            ax = 0;
            role.x = 0;
            if(!role.dishStatus)
            {
               GSound.MGETDISH.play();
               _loc1_ = new Delay(role);
               _loc1_.addEventListener("onceComplete",onceComplete);
               stage.removeEventListener(KeyboardEvent.KEY_DOWN,keyDownHandler);
               stage.removeEventListener(KeyboardEvent.KEY_UP,keyUpHandler);
               role.gotoAndStop("stop");
               role.dishStatus = true;
               srcObject.x = role.x;
               dishNumTxt.text = role.numDishs.toString();
            }
         }
         if(role.x > 800)
         {
            vx = 0;
            ax = 0;
            role.x = 800;
            if(role.dishStatus)
            {
               GSound.MTARGETDISH.play();
               _loc1_ = new Delay(role);
               _loc1_.addEventListener("onceComplete",onceComplete);
               stage.removeEventListener(KeyboardEvent.KEY_DOWN,keyDownHandler);
               stage.removeEventListener(KeyboardEvent.KEY_UP,keyUpHandler);
               role.gotoAndStop("leftRun");
               role.dishStatus = false;
               if(maxLength > 40)
               {
                  maxLength -= 5;
               }
               if(timeDelay > 500)
               {
                  timeDelay -= 100;
                  createBulletTime.delay = timeDelay;
                  bulletVY += 1;
               }
               totalScore += role.numDishs;
               totalScoreTxt.text = totalScore.toString();
               ++role.numDishs;
            }
         }
      }
      
      private function funAnGameClosePage(param1:MouseEvent) : void
      {
         var _loc2_:URLRequest = null;
         _loc2_ = new URLRequest("javascript:closeFrame()");
         navigateToURL(_loc2_,"_top");
      }
      
      private function showBed(param1:TimerEvent) : void
      {
         GSound.MFIRE.play();
         bed.x = Math.random() * 580 + 10;
         bed.y = 91;
         bed.visible = true;
         bed.addEventListener(GameEvent.GAMEBULLET,createBullet);
         bed.gotoAndPlay(2);
      }
      
      private function clearEvent() : void
      {
         GSound.MGAMEOVER.play();
         role.dishStatus = false;
         bullets = [];
         createBulletTime.stop();
         if(this.contains(bulletCon))
         {
            removeChild(bulletCon);
         }
         dispatchEvent(new Event("gameComplete",true));
         stage.removeEventListener(Event.ENTER_FRAME,onFrameHandler);
         stage.removeEventListener(KeyboardEvent.KEY_DOWN,keyDownHandler);
         stage.removeEventListener(KeyboardEvent.KEY_UP,keyUpHandler);
         showOver("你获得了" + totalScore + "分，要加油哦~\r更多游戏请登录QQ宠物官网。");
      }
      
      private function keyDownHandler(param1:KeyboardEvent) : void
      {
         spring = moveSpring;
         switch(param1.keyCode)
         {
            case Keyboard.LEFT:
               ax = -Math.abs(speed);
               if(moveState == "left")
               {
                  return;
               }
               if(role.dishStatus)
               {
                  role.gotoAndStop("dishBack");
               }
               else
               {
                  role.gotoAndStop("leftRun");
               }
               moveState = "left";
               break;
            case Keyboard.RIGHT:
               if(moveState == "right")
               {
                  return;
               }
               ax = Math.abs(speed);
               if(role.dishStatus)
               {
                  role.gotoAndStop("dishFront");
               }
               else
               {
                  role.gotoAndStop("rightRun");
               }
               moveState = "right";
         }
      }
      
      internal function frame1() : *
      {
         stop();
         loading = new Loading(root);
         addChild(loading);
         loading.addEventListener(Event.COMPLETE,onGameLoadComplete);
      }
      
      private function changeSex(param1:String) : String
      {
         if(param1 == "102")
         {
            return "GG";
         }
         return "MM";
      }
      
      private function keyUpHandler(param1:KeyboardEvent) : void
      {
         spring = stopSpring;
         if(param1.keyCode == Keyboard.LEFT || param1.keyCode == Keyboard.RIGHT)
         {
            moveState = "stop";
         }
      }
      
      private function onFrameHandler(param1:Event) : void
      {
         var _loc2_:Number = NaN;
         checkCollide();
         checkOutsize();
         switch(moveState)
         {
            case "left":
               vx += ax;
               break;
            case "right":
               vx += ax;
               if(role.dishStatus && vx > 6 && role.currentLabel != "dishQuick")
               {
                  role.gotoAndStop("dishQuick");
               }
               break;
            case "stop":
               if(role.dishStatus && Math.abs(vx) < 1 && role.currentLabel != "stop")
               {
                  role.gotoAndPlay("stop");
               }
               else if(!role.dishStatus && Math.abs(vx) < 1)
               {
                  if(role.currentLabel != "leftStatic" && role.currentLabel == "leftRun")
                  {
                     role.gotoAndStop("leftStatic");
                  }
                  else if(role.currentLabel != "rightStatic" && role.currentLabel == "rightRun")
                  {
                     role.gotoAndStop("rightStatic");
                  }
               }
               vx *= 0.9;
         }
         if(vx > 10)
         {
            vx = 10;
         }
         role.x += vx;
         if(!role.dishStatus)
         {
            return;
         }
         _loc2_ = role.x - srcObject.x;
         srcObject.vx += _loc2_ * spring;
         srcObject.vx *= friction;
         srcObject.x += srcObject.vx;
         if(Math.abs(_loc2_) > maxLength)
         {
            if(role.dishStatus)
            {
               role.gotoAndStop("hitPerson");
            }
            else if(role.currentLabel == "leftRun" || role.currentLabel == "leftStatic")
            {
               role.gotoAndStop("lTrip");
            }
            else
            {
               role.gotoAndStop("rTrip");
            }
            closeMode = false;
            clearEvent();
         }
         else if(Math.abs(_loc2_) > maxLength - maxLength / 3)
         {
            role.dishs.transform.colorTransform = new ColorTransform(0,0,0,0.6,128,0,0,0);
         }
         else
         {
            role.dishs.transform.colorTransform = new ColorTransform();
         }
         role.dishs.rotation = Math.atan2(srcObject.y - role.y,srcObject.x - role.x) * 180 / Math.PI;
      }
      
      private function funAnGameClose(param1:MouseEvent) : void
      {
         totalScore = 0;
         removeChild(role);
         closeMode = true;
         clearEvent();
      }
      
      private function onceComplete(param1:Event) : void
      {
         ax = 0;
         vx = 0;
         srcObject.vx = 0;
         srcObject.vy = 0;
         srcObject.y = role.y - 50 - role.numDishs * 10;
         srcObject.x = role.x - 10;
         (param1.target as Delay).removeEventListener("onceComplete",onceComplete);
         stage.addEventListener(KeyboardEvent.KEY_DOWN,keyDownHandler);
         stage.addEventListener(KeyboardEvent.KEY_UP,keyUpHandler);
      }
      
      public function removeRole(param1:Event = null) : void
      {
         var _loc2_:MovieClip = null;
         _loc2_ = param1.currentTarget as MovieClip;
         if(this.contains(_loc2_))
         {
            removeChild(_loc2_);
         }
      }
      
      private function createBullet(param1:GameEvent) : void
      {
         var _loc2_:Bullet = null;
         _loc2_ = new Bullet();
         _loc2_.x = bed.x + 30;
         _loc2_.y = bed.y + 60;
         _loc2_.vy = bulletVY;
         bulletCon.addChild(_loc2_);
         bullets.push(_loc2_);
         bed.visible = false;
      }
      
      private function initGame() : void
      {
         gameSoundControl.addEventListener(MouseEvent.CLICK,funGameSoundControl);
         maxLength = 100;
         timeDelay = 3000;
         friction = 0.9;
         moveState = "stop";
         bulletVY = 5;
         vx = 0;
         ax = 0;
         role.x = 0;
         role.y = 460;
         srcObject.vx = 0;
         srcObject.vy = 0;
         srcObject.x = role.x;
         srcObject.y = role.y - 100;
         addChild(role);
         role.x = 0;
         role.y = 460;
         role.numDishs = 8;
         bulletCon = new Sprite();
         addChild(bulletCon);
         if(createBulletTime != null)
         {
            createBulletTime.stop();
         }
         createBulletTime = new Timer(timeDelay);
         createBulletTime.addEventListener(TimerEvent.TIMER,showBed);
         totalScore = 0;
         totalScoreTxt.text = "0";
         role.dishStatus = true;
         dishNumTxt.text = role.numDishs.toString();
         createBulletTime.reset();
         createBulletTime.start();
         stage.focus = stage;
         stage.addEventListener(Event.ENTER_FRAME,onFrameHandler);
         stage.addEventListener(KeyboardEvent.KEY_DOWN,keyDownHandler);
         stage.addEventListener(KeyboardEvent.KEY_UP,keyUpHandler);
      }
      
      public function onGameLoadComplete(param1:Event) : void
      {
         gotoAndStop(1,"GameStart");
         gameInit();
      }
      
      private function checkGameStart(param1:GameEvent) : void
      {
         dispatchEvent(new Event("gameStart",true));
         gameStart(changeSex(Math.round(Math.random() + 102).toString()),int(Math.random() * 3 + 1).toString());
      }
      
      public function showOver(param1:String) : void
      {
         addChild(over);
         over.showDish(totalScore.toString());
         over.showMsg(param1);
      }
      
      public function gameStart(param1:String, param2:String) : void
      {
         var _loc3_:Class = null;
         bed.visible = false;
         if(role != null)
         {
            if(this.contains(role))
            {
               removeChild(role);
               role.removeEventListener(GameEvent.GAMEOVER,removeRole);
            }
         }
         _loc3_ = getDefinitionByName(param1 + param2) as Class;
         role = new _loc3_();
         role.addEventListener(GameEvent.GAMEOVER,removeRole);
         role.x = 0;
         role.y = 460;
         if(stage.contains(help))
         {
            removeChild(help);
         }
         if(stage.contains(over))
         {
            removeChild(over);
         }
         role.gotoAndStop("stop");
         initGame();
      }
      
      public function showPlay() : void
      {
         if(role != null)
         {
            if(this.contains(role))
            {
               removeChild(role);
            }
         }
         if(!this.contains(help))
         {
            addChild(help);
         }
         addChild(closePrompt);
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

