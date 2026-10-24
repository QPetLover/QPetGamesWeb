function depthCharge()
{
   var _loc3_ = 0;
   var _loc2_;
   while(_loc3_ <= _parent.monNumber)
   {
      _loc2_ = 0;
      while(_loc2_ <= _parent.monNumber)
      {
         if(depArr[_loc2_]._y < depArr[_loc3_]._y && depArr[_loc2_].getDepth() > depArr[_loc3_].getDepth())
         {
            depArr[_loc2_].swapDepths(depArr[_loc3_]);
         }
         _loc2_ = _loc2_ + 1;
      }
      _loc3_ = _loc3_ + 1;
   }
}
