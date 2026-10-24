function calDepth(x, y, margin)
{
   return (y * w + (w - x)) * margin;
}

function isSave(x0, y0)
{
   var _loc1_ = bgArea["bg" + y0 + "_" + x0];
   if(_loc1_ == undefined || _loc1_.bomb != "" || _loc1_.brick != "" || bgArea["expArea" + y0 + "_" + x0] != undefined)
   {
      return false;
   }
   var _loc6_ = 0;
   var _loc8_;
   var _loc7_;
   var _loc5_;
   var _loc3_;
   var _loc2_;
   var _loc4_;
   for(; _loc6_ < 4; _loc6_ = _loc6_ + 1)
   {
      _loc8_ = xy[_loc6_][0];
      _loc7_ = xy[_loc6_][1];
      _loc5_ = 1;
      _loc3_ = x0 + _loc8_;
      _loc2_ = y0 + _loc7_;
      _loc1_ = bgArea["bg" + _loc2_ + "_" + _loc3_];
      while(!(_loc1_ == undefined || _loc1_.brick != ""))
      {
         _loc4_ = bgArea["expArea" + _loc2_ + "_" + _loc3_];
         if(_loc1_.bomb != "" && brickArea[_loc1_.bomb].bombLevel >= _loc5_ || _loc4_ != undefined && _loc4_.bombLevel >= _loc5_)
         {
            return false;
         }
         _loc3_ += _loc8_;
         _loc2_ += _loc7_;
         _loc1_ = bgArea["bg" + _loc2_ + "_" + _loc3_];
         _loc5_ = _loc5_ + 1;
         continue;
         return false;
      }
   }
   return true;
}

function getScore(x0, y0)
{
   if(!isSave(x0,y0))
   {
      return -1;
   }
   var _loc2_ = 0;
   var _loc1_ = 0;
   while(_loc1_ < 4)
   {
      if(isSave(x0 + xy[_loc1_][0],y0 + xy[_loc1_][1]))
      {
         _loc2_ = _loc2_ + 1;
      }
      _loc1_ = _loc1_ + 1;
   }
   return _loc2_;
}
