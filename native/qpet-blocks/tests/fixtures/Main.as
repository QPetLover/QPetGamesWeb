package COM
{
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.media.SoundMixer;
   import flash.media.SoundTransform;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.Timer;
   
   [SWF(width="800", height="600", backgroundColor="#ffffff", frameRate="24")]
   public class Main extends MovieClip
   {
      
      private var _time1:Timer;
      
      public var _mc:MovieClip;
      
      private var _SendScore:SendScore;
      
      private var a:int;
      
      public var _Level:int;
      
      private var _number:int;
      
      private var _GameLoader:GameLoader;
      
      private var _differ:int;
      
      public var _cover:Cover;
      
      private var _background:Background;
      
      private var _panel:*;
      
      private var time_over:Timer_over;
      
      private var _Back1:back1;
      
      private var _kuang:kuang;
      
      private var _ply:player;
      
      private var _brick:Array = new Array();
      
      private var _speed:Speed;
      
      public var Sound_stop:int;
      
      private var wait_time:Timer;
      
      private var _Hand:MoveHand;
      
      public var soundAndExit:SoundAndExit;
      
      public var _score:Score;
      
      public var _sex:int;
      
      public var _mark:int;
      
      private var _time:Timer;
      
      public var drop_channel:SoundChannel;
      
      public var drop_sound:Sound = new drop() as Sound;
      
      private var _random:int;
      
      public var _playGameNow:int;
      
      public var _i:int;
      
      public function Main()
      {
         super();
         _GameLoader = new GameLoader();
         addChild(_GameLoader);
      }
      
      public function playingQuit2() : *
      {
         parent["_playingQuit"] = 1;
         if(_i == 0)
         {
            _ply.Delete();
            _Hand.Delete();
            _time.removeEventListener(TimerEvent.TIMER,timerover);
            _time.stop();
            _time1.removeEventListener(TimerEvent.TIMER,timerover1);
            _time1.stop();
            stage.removeEventListener(MouseEvent.CLICK,OnKeyDown);
            stage.removeEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
         }
         else
         {
            _Hand.Delete();
            _ply.Delete();
            _time.removeEventListener(TimerEvent.TIMER,timerover);
            _time.stop();
            _time1.removeEventListener(TimerEvent.TIMER,timerover1);
            _time1.stop();
            stage.removeEventListener(MouseEvent.CLICK,OnKeyDown);
            stage.removeEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
            _brick[_i].Delete();
            removeEventListener(Event.ENTER_FRAME,crash);
         }
      }
      
      private function OnKeyDown(param1:MouseEvent) : void
      {
         ++_i;
         drop_channel = drop_sound.play();
         _time.removeEventListener(TimerEvent.TIMER,timerover);
         _time.stop();
         _time1.removeEventListener(TimerEvent.TIMER,timerover1);
         _time1.stop();
         time_over.visible = false;
         time_over.gotoAndStop(1);
         stage.removeEventListener(MouseEvent.CLICK,OnKeyDown);
         stage.removeEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
         _brick[_i] = new Real_obj();
         _brick[_i].x = _Hand.hand_in.x + 200;
         _brick[_i].y = _Hand.hand_in.y + 180;
         addChild(_brick[_i]);
         addChild(_kuang);
         addChild(_score);
         addChild(soundAndExit);
         addChild(_speed);
         _brick[_i].gotoAndStop(_random);
         _ply.biaoqing2(_Level,_sex);
         _Hand.hand_in.gotoAndStop("open");
         addEventListener(Event.ENTER_FRAME,crash);
      }
      
      public function _delete() : *
      {
         var _loc1_:* = 0;
         _ply.Delete();
         _Hand.Delete();
         _time1.removeEventListener(TimerEvent.TIMER,timerover1);
         _time1.stop();
         time_over.visible = false;
         time_over.gotoAndStop(1);
         removeChild(_background);
         removeChild(_Back1);
         removeChild(_Hand);
         removeChild(_score);
         removeChild(_ply);
         removeChild(time_over);
         removeChild(_speed);
         removeChild(_kuang);
         _loc1_ = _i;
         while(_loc1_ >= 1)
         {
            removeChild(_brick[_loc1_]);
            _loc1_--;
         }
      }
      
      public function biaoqing6() : *
      {
         if(_Level == 2 && _sex == 103)
         {
            _ply.gotoAndStop(6);
         }
         if(_Level == 2 && _sex == 102)
         {
            _ply.gotoAndStop(12);
         }
         if(_Level == 1 && _sex == 103)
         {
            _ply.gotoAndStop(18);
         }
         if(_Level == 1 && _sex == 102)
         {
            _ply.gotoAndStop(24);
         }
         if(_Level == 0 && _sex == 103)
         {
            _ply.gotoAndStop(30);
         }
         if(_Level == 0 && _sex == 102)
         {
            _ply.gotoAndStop(36);
         }
      }
      
      public function init() : *
      {
         removeChild(_cover);
         stage.focus = stage;
         _mc.x = 403;
         _mc.y = 503;
         _mc.width = 62;
         _playGameNow = 1;
         _i = 0;
         _random = Math.random() * 4 + 1;
         _mark = 0;
         _background = new Background();
         addChild(_background);
         _ply = new player();
         addChild(_ply);
         _ply.biaoqing1(_Level,_sex);
         _Back1 = new back1();
         addChild(_Back1);
         _Hand = new MoveHand();
         addChild(_Hand);
         _Hand.hand_in.gotoAndStop(_random);
         _kuang = new kuang();
         addChild(_kuang);
         _score = new Score();
         addChild(_score);
         time_over = new Timer_over();
         addChild(time_over);
         time_over.gotoAndStop(1);
         _speed = new Speed();
         addChild(_speed);
         addChild(soundAndExit);
         time_over.visible = false;
         _Hand._move = true;
         _score.combo.stop();
         _time = new Timer(10000,1);
         _time.addEventListener(TimerEvent.TIMER,timerover);
         _time.start();
         _time1 = new Timer(4000,1);
         _time1.addEventListener(TimerEvent.TIMER,timerover1);
         _time1.start();
         addChild(soundAndExit);
         soundAndExit._strat();
         stage.addEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
      }
      
      public function kkk() : *
      {
         _GameLoader.visible = false;
         _sex = Math.random() * 2 + 102;
         _Level = Math.random() * 3;
         Sound_stop = 0;
         soundAndExit = new SoundAndExit();
         addChild(soundAndExit);
         initb();
      }
      
      private function LOSS(param1:TimerEvent) : void
      {
         _Hand.Delete();
         _ply.Delete();
         wait_time.removeEventListener(TimerEvent.TIMER,LOSS);
         wait_time.stop();
         _panel = new RightQuit();
         addChild(_panel);
         _panel.SureBtn.addEventListener(MouseEvent.CLICK,SCBtnS2);
         _panel.QuitBtn.addEventListener(MouseEvent.CLICK,SCBtnC2);
         _panel.Msg.htmlText = "你获得了" + _mark + "分，要加油哦~\n更多游戏请登录QQ宠物官网.";
         _SendScore = new SendScore();
         addChild(_SendScore);
         _time.removeEventListener(TimerEvent.TIMER,timerover);
         _time.stop();
         _time1.removeEventListener(TimerEvent.TIMER,timerover1);
         _time1.stop();
         stage.removeEventListener(MouseEvent.CLICK,OnKeyDown);
         stage.removeEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
      }
      
      private function SCBtnS2(param1:MouseEvent) : *
      {
         removeChild(_panel);
         removeChild(_SendScore);
         initb();
         _delete();
         init();
      }
      
      public function sound_strat() : *
      {
         SoundMixer.soundTransform = new SoundTransform(1);
      }
      
      public function sound_stop() : *
      {
         SoundMixer.soundTransform = new SoundTransform(0);
      }
      
      private function SCBtnC2(param1:MouseEvent) : *
      {
         var _loc2_:URLRequest = null;
         _loc2_ = new URLRequest("http://pet.qq.com/");
         navigateToURL(_loc2_);
      }
      
      public function initb() : *
      {
         _mark = 0;
         _number = 0;
         a = 1;
         _cover = new Cover();
         addChild(_cover);
         addChild(soundAndExit);
         _cover.start_btn.addEventListener(MouseEvent.CLICK,start_game);
         _cover._btn.addEventListener(MouseEvent.CLICK,SCBtnC2);
         _playGameNow = 0;
      }
      
      private function timerover(param1:TimerEvent) : void
      {
         ++_i;
         drop_channel = drop_sound.play();
         stage.removeEventListener(MouseEvent.CLICK,OnKeyDown);
         stage.removeEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
         _brick[_i] = new Real_obj();
         _brick[_i].x = _Hand.hand_in.x + 200;
         _brick[_i].y = _Hand.hand_in.y + 180;
         addChild(_brick[_i]);
         addChild(_kuang);
         addChild(_score);
         addChild(soundAndExit);
         addChild(_speed);
         _brick[_i].gotoAndStop(_random);
         _ply.biaoqing2(_Level,_sex);
         _Hand.hand_in.gotoAndStop("open");
         time_over.visible = false;
         addEventListener(Event.ENTER_FRAME,crash);
         _time1.removeEventListener(TimerEvent.TIMER,timerover1);
         _time1.stop();
         time_over.visible = false;
         time_over.gotoAndStop(1);
      }
      
      private function start_game(param1:MouseEvent) : void
      {
         init();
      }
      
      private function crash(param1:Event) : void
      {
         var _loc2_:* = 0;
         if(_brick[_i].y > 700)
         {
            drop_channel.stop();
            _brick[_i].Delete();
            removeEventListener(Event.ENTER_FRAME,crash);
            _ply.biaoqing3(_Level,_sex);
            _time1.removeEventListener(TimerEvent.TIMER,timerover1);
            _time1.stop();
            time_over.visible = false;
            time_over.gotoAndStop(1);
            _ply.Delete();
            _Hand.Delete();
            _panel = new RightQuit();
            addChild(_panel);
            _panel.SureBtn.addEventListener(MouseEvent.CLICK,SCBtnS2);
            _panel.QuitBtn.addEventListener(MouseEvent.CLICK,SCBtnC2);
            _panel.Msg.htmlText = "你获得了" + _mark + "分，要加油哦~\n更多游戏请登录QQ宠物官网.";
            _SendScore = new SendScore();
            addChild(_SendScore);
         }
         if(_i == 10)
         {
            _score.darrow.visible = false;
         }
         if(_brick[_i].hitTestObject(_mc))
         {
            drop_channel.stop();
            _brick[_i].Delete();
            removeEventListener(Event.ENTER_FRAME,crash);
            if(_background.y <= 90)
            {
               _background.y += 30;
            }
            trace(_background.y);
            trace(_brick[_i].currentFrame);
            if(_brick[_i].currentFrame > 0 && _brick[_i].currentFrame < 5)
            {
               if(Math.abs(_brick[_i].x - _mc.x) >= 0 && Math.abs(_brick[_i].x - _mc.x) < 6)
               {
                  _brick[_i].mc.gotoAndStop("ok");
                  trace(_brick[_i].height);
                  if(_i < 3)
                  {
                     _brick[_i].y += 18;
                     _mc.y -= 43;
                  }
                  else
                  {
                     _Back1.y += 43;
                     _brick[_i].y += 18;
                     _loc2_ = _i;
                     while(_loc2_ >= 1)
                     {
                        _brick[_loc2_].y += 43;
                        _loc2_--;
                     }
                  }
                  _mc.x = _brick[_i].x;
                  _mc.width = _brick[_i].width - 36;
                  _score.darrow.x = _brick[_i].x;
                  stage.addEventListener(MouseEvent.CLICK,OnKeyDown);
                  stage.addEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
                  if(_i < 3)
                  {
                     _random = Math.random() * 4 + 1;
                  }
                  else
                  {
                     _random = Math.random() * 12 + 1;
                  }
                  _Hand.hand_in.gotoAndStop(_random);
                  _Hand.play();
                  if(_i / 10 != a)
                  {
                     trace("+++++++++++++++++" + a);
                     _ply.biaoqing5(_Level,_sex);
                  }
                  else
                  {
                     ++a;
                  }
                  ++_number;
                  _score.double_hit(_number);
                  _score.integration(_i);
                  _mark += 7 * _number;
                  _score.integration2(_mark);
                  _time = new Timer(10000,1);
                  _time.addEventListener(TimerEvent.TIMER,timerover);
                  _time.start();
                  _time1 = new Timer(4000,1);
                  _time1.addEventListener(TimerEvent.TIMER,timerover1);
                  _time1.start();
                  trace("coll");
                  if(_score.play_text.currentFrame != 5)
                  {
                     _score.play_text.gotoAndStop(5);
                  }
                  else
                  {
                     _score.play_text.mc.play();
                  }
               }
               if(Math.abs(_brick[_i].x - _mc.x) >= 30 && Math.abs(_brick[_i].x - _mc.x) < 90)
               {
                  _time1.removeEventListener(TimerEvent.TIMER,timerover1);
                  _time1.stop();
                  time_over.visible = false;
                  time_over.gotoAndStop(1);
                  _ply.biaoqing4(_Level,_sex);
                  if(_brick[_i].x - _mc.x > 0)
                  {
                     _brick[_i].gameOver(false,true);
                     if(_i > 1)
                     {
                        _brick[_i - 1].gameOver(false,true);
                     }
                  }
                  else
                  {
                     _brick[_i].gameOver(false,false);
                     if(_i > 1)
                     {
                        _brick[_i - 1].gameOver(false,false);
                     }
                  }
                  trace("死");
                  soundAndExit._stop();
                  wait_time = new Timer(2000,1);
                  wait_time.addEventListener(TimerEvent.TIMER,LOSS);
                  wait_time.start();
               }
               if(Math.abs(_brick[_i].x - _mc.x) >= 6 && Math.abs(_brick[_i].x - _mc.x) < 30)
               {
                  _brick[_i].mc.gotoAndStop("ok");
                  trace(_brick[_i].height);
                  if(_i < 3)
                  {
                     _brick[_i].y += 18;
                     _mc.y -= 43;
                  }
                  else
                  {
                     _Back1.y += 43;
                     _brick[_i].y += 18;
                     _loc2_ = _i;
                     while(_loc2_ >= 1)
                     {
                        _brick[_loc2_].y += 43;
                        _loc2_--;
                     }
                  }
                  _score.darrow.x = _brick[_i].x;
                  stage.addEventListener(MouseEvent.CLICK,OnKeyDown);
                  stage.addEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
                  if(_i < 3)
                  {
                     _random = Math.random() * 4 + 1;
                  }
                  else
                  {
                     _random = Math.random() * 12 + 1;
                  }
                  _Hand.hand_in.gotoAndStop(_random);
                  _Hand.play();
                  trace("GOOD");
                  _number = 0;
                  _score.integration(_i);
                  _mark += 7;
                  _score.integration2(_mark);
                  _time = new Timer(10000,1);
                  _time.addEventListener(TimerEvent.TIMER,timerover);
                  _time.start();
                  _time1 = new Timer(4000,1);
                  _time1.addEventListener(TimerEvent.TIMER,timerover1);
                  _time1.start();
                  if(Math.abs(_brick[_i].x - _mc.x) <= 16 && Math.abs(_brick[_i].x - _mc.x) >= 6)
                  {
                     trace("------------" + a);
                     if(_i / 10 != a)
                     {
                        trace("+++++++++++++" + a);
                        _ply.biaoqing5(_Level,_sex);
                     }
                     else
                     {
                        ++a;
                     }
                     if(_score.play_text.currentFrame == 3)
                     {
                        _score.play_text.mc.play();
                     }
                     else
                     {
                        _score.play_text.gotoAndStop(3);
                     }
                  }
                  if(Math.abs(_brick[_i].x - _mc.x) > 16 && Math.abs(_brick[_i].x - _mc.x) < 30)
                  {
                     if(_i / 10 != a)
                     {
                        trace("+++++++++++++" + a);
                        _ply.biaoqing3(_Level,_sex);
                     }
                     else
                     {
                        ++a;
                     }
                     if(_score.play_text.currentFrame == 4)
                     {
                        _score.play_text.mc.play();
                     }
                     else
                     {
                        _score.play_text.gotoAndStop(4);
                     }
                  }
                  _mc.x = _brick[_i].x;
                  _mc.width = _brick[_i].width - 36;
               }
            }
            if(_brick[_i].currentFrame > 4 && _brick[_i].currentFrame < 9)
            {
               if(Math.abs(_brick[_i].x - _mc.x) >= 0 && Math.abs(_brick[_i].x - _mc.x) < 6)
               {
                  _brick[_i].mc.gotoAndStop("ok");
                  _Back1.y += 36;
                  _brick[_i].y += 20;
                  _loc2_ = _i;
                  while(_loc2_ >= 1)
                  {
                     _brick[_loc2_].y += 36;
                     _loc2_--;
                  }
                  _mc.x = _brick[_i].x;
                  _mc.width = _brick[_i].width - 36;
                  _score.darrow.x = _brick[_i].x;
                  stage.addEventListener(MouseEvent.CLICK,OnKeyDown);
                  stage.addEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
                  if(_i < 3)
                  {
                     _random = Math.random() * 4 + 1;
                  }
                  else
                  {
                     _random = Math.random() * 12 + 1;
                  }
                  _Hand.hand_in.gotoAndStop(_random);
                  _Hand.play();
                  trace("------------" + a);
                  if(_i / 10 != a)
                  {
                     trace("++++++++++++++++++" + a);
                     _ply.biaoqing5(_Level,_sex);
                  }
                  else
                  {
                     ++a;
                  }
                  trace("coll");
                  ++_number;
                  _score.double_hit(_number);
                  _score.integration(_i);
                  _mark += 7 * _number;
                  _score.integration2(_mark);
                  _time = new Timer(10000,1);
                  _time.addEventListener(TimerEvent.TIMER,timerover);
                  _time.start();
                  _time1 = new Timer(4000,1);
                  _time1.addEventListener(TimerEvent.TIMER,timerover1);
                  _time1.start();
                  if(_score.play_text.currentFrame != 5)
                  {
                     _score.play_text.gotoAndStop(5);
                  }
                  else
                  {
                     _score.play_text.mc.play();
                  }
               }
               if(Math.abs(_brick[_i].x - _mc.x) >= 30 && Math.abs(_brick[_i].x - _mc.x) < 90)
               {
                  _time1.removeEventListener(TimerEvent.TIMER,timerover1);
                  _time1.stop();
                  time_over.visible = false;
                  time_over.gotoAndStop(1);
                  _ply.biaoqing4(_Level,_sex);
                  if(_brick[_i].x - _mc.x > 0)
                  {
                     _brick[_i].gameOver(false,true);
                     if(_i > 1)
                     {
                        _brick[_i - 1].gameOver(false,true);
                     }
                  }
                  else
                  {
                     _brick[_i].gameOver(false,false);
                     if(_i > 1)
                     {
                        _brick[_i - 1].gameOver(false,false);
                     }
                  }
                  trace("死");
                  soundAndExit._stop();
                  wait_time = new Timer(2000,1);
                  wait_time.addEventListener(TimerEvent.TIMER,LOSS);
                  wait_time.start();
               }
               if(Math.abs(_brick[_i].x - _mc.x) >= 6 && Math.abs(_brick[_i].x - _mc.x) < 30)
               {
                  _brick[_i].mc.gotoAndStop("ok");
                  _Back1.y += 36;
                  _brick[_i].y += 20;
                  _loc2_ = _i;
                  while(_loc2_ >= 1)
                  {
                     _brick[_loc2_].y += 36;
                     _loc2_--;
                  }
                  _score.darrow.x = _brick[_i].x;
                  stage.addEventListener(MouseEvent.CLICK,OnKeyDown);
                  stage.addEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
                  if(_i < 3)
                  {
                     _random = Math.random() * 4 + 1;
                  }
                  else
                  {
                     _random = Math.random() * 12 + 1;
                  }
                  _Hand.hand_in.gotoAndStop(_random);
                  _Hand.play();
                  trace("GOOD");
                  _score.integration(_i);
                  _number = 0;
                  _mark += 7;
                  _score.integration2(_mark);
                  _time = new Timer(10000,1);
                  _time.addEventListener(TimerEvent.TIMER,timerover);
                  _time.start();
                  _time1 = new Timer(4000,1);
                  _time1.addEventListener(TimerEvent.TIMER,timerover1);
                  _time1.start();
                  if(Math.abs(_brick[_i].x - _mc.x) <= 16 && Math.abs(_brick[_i].x - _mc.x) >= 6)
                  {
                     if(_i / 10 != a)
                     {
                        trace("+++++++++++++" + a);
                        _ply.biaoqing5(_Level,_sex);
                     }
                     else
                     {
                        ++a;
                     }
                     if(_score.play_text.currentFrame == 3)
                     {
                        _score.play_text.mc.play();
                     }
                     else
                     {
                        _score.play_text.gotoAndStop(3);
                     }
                  }
                  if(Math.abs(_brick[_i].x - _mc.x) > 16 && Math.abs(_brick[_i].x - _mc.x) < 30)
                  {
                     if(_i / 10 != a)
                     {
                        trace("+++++++++++++" + a);
                        _ply.biaoqing3(_Level,_sex);
                     }
                     else
                     {
                        ++a;
                     }
                     if(_score.play_text.currentFrame == 4)
                     {
                        _score.play_text.mc.play();
                     }
                     else
                     {
                        _score.play_text.gotoAndStop(4);
                     }
                  }
                  _mc.x = _brick[_i].x;
                  _mc.width = _brick[_i].width - 36;
               }
            }
            if(_brick[_i].currentFrame > 8 && _brick[_i].currentFrame < 13)
            {
               if(Math.abs(_brick[_i].x - _mc.x) >= 0 && Math.abs(_brick[_i].x - _mc.x) < 6)
               {
                  _brick[_i].mc.gotoAndStop("ok");
                  _Back1.y += 29;
                  _brick[_i].y += 2;
                  _mc.x = _brick[_i].x;
                  _mc.width = _brick[_i].width - 25;
                  _score.darrow.x = _brick[_i].x;
                  _loc2_ = _i;
                  while(_loc2_ >= 1)
                  {
                     _brick[_loc2_].y += 29;
                     _loc2_--;
                  }
                  stage.addEventListener(MouseEvent.CLICK,OnKeyDown);
                  stage.addEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
                  if(_i < 3)
                  {
                     _random = Math.random() * 4 + 1;
                  }
                  else
                  {
                     _random = Math.random() * 12 + 1;
                  }
                  _Hand.hand_in.gotoAndStop(_random);
                  _Hand.play();
                  if(_i / 10 != a)
                  {
                     trace("+++++++++++++" + a);
                     _ply.biaoqing5(_Level,_sex);
                  }
                  else
                  {
                     ++a;
                  }
                  trace("coll");
                  ++_number;
                  _score.double_hit(_number);
                  _score.integration(_i);
                  _mark += 7 * _number;
                  _score.integration2(_mark);
                  _time = new Timer(10000,1);
                  _time.addEventListener(TimerEvent.TIMER,timerover);
                  _time.start();
                  _time1 = new Timer(4000,1);
                  _time1.addEventListener(TimerEvent.TIMER,timerover1);
                  _time1.start();
                  if(_score.play_text.currentFrame != 5)
                  {
                     _score.play_text.gotoAndStop(5);
                  }
                  else
                  {
                     _score.play_text.mc.play();
                  }
               }
               if(Math.abs(_brick[_i].x - _mc.x) >= 30 && Math.abs(_brick[_i].x - _mc.x) < 90)
               {
                  _time1.removeEventListener(TimerEvent.TIMER,timerover1);
                  _time1.stop();
                  time_over.visible = false;
                  time_over.gotoAndStop(1);
                  _ply.biaoqing4(_Level,_sex);
                  if(_brick[_i].x - _mc.x > 0)
                  {
                     _brick[_i].gameOver(false,true);
                     if(_i > 1)
                     {
                        _brick[_i - 1].gameOver(false,true);
                     }
                  }
                  else
                  {
                     _brick[_i].gameOver(false,false);
                     if(_i > 1)
                     {
                        _brick[_i - 1].gameOver(false,false);
                     }
                  }
                  trace("死");
                  soundAndExit._stop();
                  wait_time = new Timer(2000,1);
                  wait_time.addEventListener(TimerEvent.TIMER,LOSS);
                  wait_time.start();
               }
               if(Math.abs(_brick[_i].x - _mc.x) >= 6 && Math.abs(_brick[_i].x - _mc.x) < 30)
               {
                  _brick[_i].mc.gotoAndStop("ok");
                  _Back1.y += 29;
                  _brick[_i].y += 2;
                  _score.darrow.x = _brick[_i].x;
                  _loc2_ = _i;
                  while(_loc2_ >= 1)
                  {
                     _brick[_loc2_].y += 29;
                     _loc2_--;
                  }
                  stage.addEventListener(MouseEvent.CLICK,OnKeyDown);
                  stage.addEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
                  if(_i < 3)
                  {
                     _random = Math.random() * 4 + 1;
                  }
                  else
                  {
                     _random = Math.random() * 12 + 1;
                  }
                  _Hand.hand_in.gotoAndStop(_random);
                  _Hand.play();
                  trace("GOOD");
                  _score.integration(_i);
                  _number = 0;
                  _mark += 7;
                  _score.integration2(_mark);
                  _time = new Timer(10000,1);
                  _time.addEventListener(TimerEvent.TIMER,timerover);
                  _time.start();
                  _time1 = new Timer(4000,1);
                  _time1.addEventListener(TimerEvent.TIMER,timerover1);
                  _time1.start();
                  if(Math.abs(_brick[_i].x - _mc.x) <= 16 && Math.abs(_brick[_i].x - _mc.x) >= 6)
                  {
                     if(_i / 10 != a)
                     {
                        trace("+++++++++++++" + a);
                        _ply.biaoqing5(_Level,_sex);
                     }
                     else
                     {
                        ++a;
                     }
                     if(_score.play_text.currentFrame == 3)
                     {
                        _score.play_text.mc.play();
                     }
                     else
                     {
                        _score.play_text.gotoAndStop(3);
                     }
                  }
                  if(Math.abs(_brick[_i].x - _mc.x) > 16 && Math.abs(_brick[_i].x - _mc.x) < 30)
                  {
                     if(_i / 10 != a)
                     {
                        trace("+++++++++++++" + a);
                        _ply.biaoqing3(_Level,_sex);
                     }
                     else
                     {
                        ++a;
                     }
                     if(_score.play_text.currentFrame == 4)
                     {
                        _score.play_text.mc.play();
                     }
                     else
                     {
                        _score.play_text.gotoAndStop(4);
                     }
                  }
                  _mc.x = _brick[_i].x;
                  _mc.width = _brick[_i].width - 25;
               }
            }
         }
      }
      
      public function speed_time() : *
      {
         _speed.play();
      }
      
      private function timerover1(param1:TimerEvent) : void
      {
         time_over.visible = true;
         time_over.play();
      }
      
      private function OnKeyDown2(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == 32)
         {
            param1.keyCode = 0;
            ++_i;
            drop_channel = drop_sound.play();
            _time.removeEventListener(TimerEvent.TIMER,timerover);
            _time.stop();
            _time1.removeEventListener(TimerEvent.TIMER,timerover1);
            _time1.stop();
            time_over.visible = false;
            time_over.gotoAndStop(1);
            stage.removeEventListener(MouseEvent.CLICK,OnKeyDown);
            stage.removeEventListener(KeyboardEvent.KEY_DOWN,OnKeyDown2);
            _brick[_i] = new Real_obj();
            _brick[_i].x = _Hand.hand_in.x + 200;
            _brick[_i].y = _Hand.hand_in.y + 180;
            addChild(_brick[_i]);
            addChild(_kuang);
            addChild(_score);
            addChild(soundAndExit);
            addChild(_speed);
            _brick[_i].gotoAndStop(_random);
            _ply.biaoqing2(_Level,_sex);
            _Hand.hand_in.gotoAndStop("open");
            addEventListener(Event.ENTER_FRAME,crash);
         }
      }
   }
}

