package com
{
   import flash.display.MovieClip;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   
   public class Countdown extends MovieClip
   {
      
      public var time_boo:Boolean = false;
      
      private var _timer:Timer;
      
      private var result_time:uint;
      
      private var total_time:uint;
      
      public function Countdown(param1:uint)
      {
         super();
         this.total_time = param1;
         _timer = new Timer(600,param1);
         _timer.addEventListener(TimerEvent.TIMER,on_Timer);
         _timer.addEventListener(TimerEvent.TIMER_COMPLETE,on_TimerComplete);
      }
      
      private function on_TimerComplete(param1:TimerEvent) : void
      {
         _timer.reset();
         time_boo = true;
      }
      
      public function get_Time() : uint
      {
         return 5;
      }
      
      public function time_Reset() : void
      {
         _timer.reset();
      }
      
      public function time_Start() : void
      {
         _timer.start();
      }
      
      private function on_Timer(param1:TimerEvent) : void
      {
         result_time = total_time - param1.target.currentCount;
      }
   }
}

