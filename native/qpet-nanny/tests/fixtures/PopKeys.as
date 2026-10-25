package classes.Utils
{
   import flash.display.Stage;
   import flash.events.KeyboardEvent;
   import flash.ui.Keyboard;
   
   public class PopKeys
   {
      
      private static var aState:Array = new Array();
      
      private static var _cState:int = 0;
      
      public function PopKeys()
      {
         super();
      }
      
      public static function clearState(param1:Stage) : void
      {
         param1.removeEventListener(KeyboardEvent.KEY_DOWN,keyDownHandler);
         param1.removeEventListener(KeyboardEvent.KEY_UP,keyUpHandler);
         aState = [];
      }
      
      private static function keyDownHandler(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.LEFT || param1.keyCode == Keyboard.RIGHT)
         {
            aState[param1.keyCode] = true;
         }
         else
         {
            _cState = param1.keyCode;
         }
      }
      
      public static function isDown(param1:uint) : Boolean
      {
         return aState[param1] == true;
      }
      
      public static function get cState() : int
      {
         return _cState;
      }
      
      public static function initStage(param1:Stage) : void
      {
         param1.addEventListener(KeyboardEvent.KEY_DOWN,keyDownHandler,false,0,true);
         param1.addEventListener(KeyboardEvent.KEY_UP,keyUpHandler,false,0,true);
      }
      
      private static function keyUpHandler(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.LEFT || param1.keyCode == Keyboard.RIGHT)
         {
            aState[param1.keyCode] = false;
         }
         else
         {
            _cState = 0;
         }
      }
      
      public static function set cState(param1:int) : void
      {
         _cState = param1;
      }
   }
}

