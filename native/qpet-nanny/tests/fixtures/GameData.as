package classes
{
   import flash.geom.Point;
   import flash.ui.Keyboard;
   
   public class GameData
   {
      
      public static const REDPOSITION:Point = new Point(80,537);
      
      public static const GREENPOSITION:Point = new Point(554,542);
      
      public static const BLUEPOSITION:Point = new Point(238,544);
      
      public static const ORANGEPOSITION:Point = new Point(396,540);
      
      public static const TRASHPOSITION:Point = new Point(715.5,514.8);
      
      public function GameData()
      {
         super();
      }
      
      public static function getCoordinate(param1:int) : Point
      {
         switch(param1)
         {
            case 88:
               return BLUEPOSITION;
            case 90:
               return REDPOSITION;
            case 67:
               return ORANGEPOSITION;
            case 86:
               return GREENPOSITION;
            case Keyboard.DOWN:
               return TRASHPOSITION;
            default:
               return new Point();
         }
      }
   }
}

