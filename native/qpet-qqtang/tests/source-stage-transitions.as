function restart()
{
   stageNum = 1;
   var _loc2_ = 1;
   var _loc3_;
   while(_loc2_ <= 4)
   {
      _loc3_ = _parent["heroObj" + _loc2_];
      _loc3_.score = _loc3_.totalScore = 0;
      _loc2_ = _loc2_ + 1;
   }
   gotoAndStop("map");
   play();
}
function nextStage()
{
   if(++stageNum <= 5)
   {
      gotoAndStop("map");
      play();
   }
   else
   {
      _parent.gotoAndStop("gameover");
   }
}
