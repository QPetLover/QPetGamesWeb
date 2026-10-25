package classes
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class Bonus extends MovieClip
   {
      
      public var animal:MovieClip;
      
      private var _type:String;
      
      private var speed:Number = 10;
      
      public var decide:Boolean = true;
      
      public var vy:Number = 5;
      
      private var targetY:Number;
      
      private var targetX:Number;
      
      public function Bonus()
      {
         super();
         addEventListener(Event.ENTER_FRAME,onFrameHandler);
      }
      
      public function removeEvent() : void
      {
         removeEventListener(Event.ENTER_FRAME,onFrameHandler);
      }
      
      public function set type(param1:String) : void
      {
         _type = param1;
      }
      
      public function get type() : String
      {
         return _type;
      }
      
      private function onFrameHandler(param1:Event) : void
      {
         y += vy;
      }
      
      public function move(param1:Number, param2:Number) : void
      {
         this.targetX = param1;
         this.targetY = param2;
         addEventListener(Event.ENTER_FRAME,moveBonus);
      }
      
      private function moveBonus(param1:Event) : void
      {
         var _loc2_:Number = NaN;
         var _loc3_:Number = NaN;
         var _loc4_:Number = NaN;
         _loc2_ = targetX - x;
         _loc3_ = targetY - y;
         _loc4_ = Math.sqrt(_loc2_ * _loc2_ + _loc3_ * _loc3_);
         if(Math.abs(_loc4_) <= 30)
         {
            x = targetX;
            y = targetY;
            this.removeEventListener(Event.ENTER_FRAME,moveBonus);
            dispatchEvent(new Event("moveOver"));
         }
         else
         {
            x += _loc2_ * 0.1;
            y += _loc3_ * 0.1;
         }
      }
   }
}

