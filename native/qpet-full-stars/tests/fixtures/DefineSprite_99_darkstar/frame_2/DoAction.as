_Y = _Y + eval("/:speed");
if(!udah)
{
   if(math.abs(_X - getProperty("/b", _X)) < range)
   {
      if(math.abs(_Y - getProperty("/b", _Y)) < range)
      {
         dis = math.sqrt((_X - getProperty("/b", _X)) * (_X - getProperty("/b", _X)) + (_Y - getProperty("/b", _Y)) * (_Y - getProperty("/b", _Y)));
         if(dis < 40)
         {
            udah = 1;
            set("/:score",eval("/:score") + eval("/:point"));
            set("/:got",eval("/:got") + 1);
            set("/:lastgotx",_X);
            set("/:lastgoty",_Y - 40);
            _root.ztink.start();
            s.gotoAndPlay("shine");
         }
      }
   }
}
