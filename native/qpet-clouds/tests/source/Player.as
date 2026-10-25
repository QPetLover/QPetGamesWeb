package com
{
   import flash.display.MovieClip;
   import flash.display.Stage;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.ui.Keyboard;
   
   public class Player extends MovieClip
   {
      
      private var space:Space;
      
      private var space_boo:Boolean = false;
      
      private var space_countdown:Countdown;
      
      private var energy_space_boo:Boolean = false;
      
      private var bg:Bg;
      
      public var wheel:Wheel;
      
      private var speed:uint;
      
      private var stage_l:uint;
      
      private var stage_r:uint;
      
      private var energy_num:uint = 20;
      
      private var left_boo:Boolean = false;
      
      public var energy:uint = 0;
      
      private var score:Score;
      
      private var energy_countdown:Countdown;
      
      private var wheel_countdown:Countdown;
      
      private var vx_speed:uint = 12;
      
      private var vx:int = 0;
      
      private var vy:int = 0;
      
      private var bg_speed:uint = 6;
      
      private var scoring:Scoring;
      
      private var energy_boo:Boolean = false;
      
      public var ener_num:uint = 1;
      
      public var player_boo:Boolean = false;
      
      private var _stage:Stage;
      
      public function Player(param1:Stage, param2:Bg, param3:Score, param4:Scoring, param5:Space)
      {
         super();
         this._stage = param1;
         this.bg = param2;
         this.score = param3;
         this.scoring = param4;
         this.space = param5;
         stage_l = 120;
         stage_r = 670;
         wheel_countdown = new Countdown(1);
         energy_countdown = new Countdown(1);
         space_countdown = new Countdown(1);
         wheel = new Wheel();
         wheel.gotoAndStop(1);
         wheel.x = 80;
         wheel.scaleX = -wheel.scaleX;
         wheel.visible = false;
         addChild(wheel);
      }
      
      public function on_EnterFrame(param1:Event) : void
      {
         if(space_boo && !energy_boo && wheel.visible)
         {
            if(wheel.ang < 10 || wheel.ang > 80)
            {
               game_Over();
            }
            else if(wheel.ang >= 10 && wheel.ang < 30)
            {
               vx = -4 * vx_speed;
               bg.set_Speed(bg_speed * 2);
               speed = 1;
               this.gotoAndStop(8);
               scoring.mcPan.gotoAndStop(4);
               scoring.play();
            }
            else if(wheel.ang >= 30 && wheel.ang < 60)
            {
               vx = -3 * vx_speed;
               bg.set_Speed(bg_speed * 3);
               speed = 2;
               this.gotoAndStop(8);
               scoring.mcPan.gotoAndStop(3);
               scoring.play();
            }
            else if(wheel.ang >= 60 && wheel.ang < 70)
            {
               vx = -2 * vx_speed;
               bg.set_Speed(bg_speed * 4);
               this.gotoAndStop(8);
               scoring.mcPan.gotoAndStop(2);
               scoring.play();
               speed = 3;
               ener_num += 1;
            }
            else if(wheel.ang >= 70 && wheel.ang <= 80)
            {
               vx = -vx_speed * 1.5;
               bg.set_Speed(bg_speed * 5);
               this.gotoAndStop(8);
               scoring.mcPan.gotoAndStop(1);
               scoring.play();
               speed = 4;
               ener_num += 2;
            }
            if(left_boo)
            {
               vx *= -1;
            }
            wheel.visible = false;
         }
         if(space_boo)
         {
            if(this.y >= 500)
            {
               space.visible = false;
               bg.set_Speed(bg_speed * 6);
               this.gotoAndStop(8);
               speed = 1;
               vy = -20;
               vx = -28;
               this.scaleX = -this.scaleX;
            }
         }
         if(space_boo && energy_boo)
         {
            energy_space_boo = true;
            space_countdown.time_Reset();
            space_countdown.time_Start();
         }
         if(wheel.ang == 90 && wheel.visible)
         {
            wheel.visible = false;
            game_Over();
         }
         if(this.x <= stage_l || this.x >= stage_r && !wheel.visible)
         {
            add_energy(ener_num);
            ener_num = 1;
            if(energy >= energy_num)
            {
               energy_boo = true;
            }
            vx = 0;
            vy = 0;
            if(this.x <= stage_l)
            {
               this.x = stage_l + 1;
               left_boo = true;
               wheel.gotoAndStop(1);
               this.scaleX = -this.scaleX;
            }
            else
            {
               this.x = stage_r - 1;
               this.scaleX = -this.scaleX;
               wheel.gotoAndStop(2);
               left_boo = false;
            }
            if(energy_boo)
            {
               space.gotoAndStop(2);
               space.visible = true;
               speed = 8;
               bg.set_Speed(bg_speed * 6);
               energy_countdown.time_Start();
               this.gotoAndStop(42);
            }
            else
            {
               speed = 0;
               bg.set_Speed(0);
               wheel_countdown.time_Start();
               this.gotoAndStop(25);
            }
         }
         if(wheel_countdown.time_boo)
         {
            wheel.visible = true;
            wheel_countdown.time_boo = false;
            wheel.init();
         }
         if(energy_boo)
         {
            score.energy_mc.x -= 6;
            if(score.energy_mc.x < -110)
            {
               score.energy_mc.x = -110;
               energy_boo = false;
               energy_space_boo = false;
               trace("能量为0");
               space.visible = false;
               space.gotoAndStop(1);
            }
         }
         if(energy_countdown.time_boo)
         {
            if(energy_space_boo)
            {
               energy_countdown.time_Start();
            }
            else
            {
               energy_countdown.time_boo = false;
               energy_countdown.time_Reset();
               if(!energy_boo)
               {
                  energy = 0;
                  speed = 0;
                  bg.set_Speed(0);
                  wheel_countdown.time_Start();
                  this.gotoAndStop(25);
               }
               else
               {
                  game_Over();
               }
            }
         }
         if(space_countdown.time_boo)
         {
            space_countdown.time_boo = false;
            energy_space_boo = false;
         }
         score.height_ += speed;
         this.x += vx;
         this.y += vy;
      }
      
      public function init() : void
      {
         wheel.set_speed(4);
         space_boo = false;
         if(left_boo)
         {
            this.scaleX = -this.scaleX;
         }
         energy_boo = false;
         energy = 0;
         vx = 0;
         vy = 0;
         player_boo = false;
         this.gotoAndStop(1);
         addEventListener(Event.ENTER_FRAME,on_EnterFrame);
         _stage.addEventListener(KeyboardEvent.KEY_DOWN,on_KeyDown);
         _stage.addEventListener(KeyboardEvent.KEY_UP,on_KeyUp);
      }
      
      public function on_KeyDown(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.SPACE)
         {
            space_boo = true;
         }
      }
      
      public function game_stop() : void
      {
         vx = 0;
         speed = 0;
         energy = 0;
         bg.set_Speed(0);
         ener_num = 1;
         wheel.visible = false;
         space.gotoAndStop(1);
         space.visible = false;
         if(left_boo == false)
         {
            left_boo = true;
         }
         else
         {
            left_boo = false;
         }
         this.removeEventListener(Event.ENTER_FRAME,on_EnterFrame);
         _stage.removeEventListener(KeyboardEvent.KEY_DOWN,on_KeyDown);
         _stage.removeEventListener(KeyboardEvent.KEY_UP,on_KeyUp);
      }
      
      public function game_Over() : void
      {
         vx = 0;
         speed = 0;
         energy = 0;
         bg.set_Speed(0);
         ener_num = 1;
         wheel.visible = false;
         space.gotoAndStop(1);
         space.visible = false;
         if(this.currentFrame < 50)
         {
            this.gotoAndStop(18);
         }
         if(left_boo == false)
         {
            left_boo = true;
         }
         else
         {
            left_boo = false;
         }
         player_boo = true;
         this.removeEventListener(Event.ENTER_FRAME,on_EnterFrame);
         _stage.removeEventListener(KeyboardEvent.KEY_DOWN,on_KeyDown);
         _stage.removeEventListener(KeyboardEvent.KEY_UP,on_KeyUp);
      }
      
      public function on_KeyUp(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.SPACE)
         {
            space_boo = false;
         }
      }
      
      public function add_energy(param1:uint) : void
      {
         if(energy < energy_num)
         {
            energy += param1;
            if(energy >= energy_num)
            {
               score.energy_mc.x = -110 + score.energy_mc.width;
            }
            else
            {
               score.energy_mc.x += param1 * (score.energy_mc.width / energy_num);
            }
         }
      }
   }
}

