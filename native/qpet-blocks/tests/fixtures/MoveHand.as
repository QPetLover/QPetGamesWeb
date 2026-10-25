package COM
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   [Embed(source="/_assets/assets.swf", symbol="symbol835")]
   public class MoveHand extends MovieClip
   {
      
      public var hand_in:MovieClip;
      
      public var t:int;
      
      public var _move:Boolean;
      
      public var vx:int;
      
      public function MoveHand()
      {
         super();
         this.x = 289;
         this.y = 125;
         vx = 5;
         init();
         t = 1;
      }
      
      private function Move(param1:Event) : void
      {
         if(parent["_i"] / 10 == t)
         {
            vx = 5 + t;
            ++t;
         }
         if(this.hand_in.x <= -40)
         {
            _move = true;
         }
         if(this.hand_in.x >= 440)
         {
            _move = false;
         }
         if(_move == true)
         {
            this.hand_in.x += vx;
         }
         if(_move == false)
         {
            this.hand_in.x -= vx;
         }
      }
      
      public function init() : *
      {
         addEventListener(Event.ENTER_FRAME,Move);
      }
      
      public function Delete() : *
      {
         removeEventListener(Event.ENTER_FRAME,Move);
      }
   }
}

