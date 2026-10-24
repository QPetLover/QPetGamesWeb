function gameover(msg)
{
   bgMusic_sound.stop();
   _parent.timer.timeStop();
   delete game.onEnterFrame;
   pausing = true;
   var _loc8_ = 0;
   var _loc9_ = 0;
   var _loc5_ = 0;
   var _loc2_;
   var _loc3_;
   while(_loc5_ <= 4)
   {
      _loc2_ = brickArea["hero" + _loc5_];
      if(_loc2_ != undefined)
      {
         _loc3_ = _parent["heroObj" + _loc5_].score;
         if(_loc5_ <= totalPlayer)
         {
            if(_loc8_ < _loc3_)
            {
               _loc8_ = _loc3_;
            }
         }
         else if(_loc9_ < _loc3_)
         {
            _loc9_ = _loc3_;
         }
      }
      _loc5_ = _loc5_ + 1;
   }
   var _loc7_;
   var _loc4_;
   var _loc6_;
   switch(msg)
   {
      case "timeup":
         if(_loc8_ > _loc9_)
         {
            youWin.varWin = "win";
            _parent.allPan.upDate();
            pauseInterval = setInterval(function()
            {
               clearInterval(pauseInterval);
               if(stageNum >= 5)
               {
                  _parent.gotoAndStop("gameover");
               }
               else
               {
                  _parent.stageScore.gotoAndStop("win");
               }
            }
            ,3000);
            break;
         }
         _loc5_ = 1;
         while(_loc5_ <= totalPlayer)
         {
            _loc2_ = brickArea["hero" + _loc5_];
            if(_loc2_ != undefined)
            {
               _parent.allPan.heroDie(_loc5_);
               _loc7_ = brickArea.attachMovie("heroExp","heroExp" + _loc2_.heroNum,_loc2_.getDepth(),{heroId:_loc2_.heroId,_x:_loc2_._x,_y:_loc2_._y});
               _loc7_.gotoAndStop(_loc7_.heroId);
            }
            _loc5_ = _loc5_ + 1;
         }
         _parent.allPan.upDate();
      case "lose":
         youWin.varWin = "lose";
         pauseInterval = setInterval(function()
         {
            clearInterval(pauseInterval);
            _parent.stageScore.gotoAndStop("lose");
         }
         ,3000);
         break;
      case "win":
         trace(_loc8_);
         if(_loc8_ >= 1000)
         {
            _loc5_ = 1;
            while(_loc5_ <= totalPlayer)
            {
               _loc2_ = brickArea["hero" + _loc5_];
               if(_loc2_ != undefined)
               {
                  _loc4_ = _parent["heroObj" + _loc2_.heroNum];
                  _loc6_ = int(_parent.timer.t * 10) + 1000;
                  _loc4_.score += _loc6_;
                  _loc4_.totalScore += _loc6_;
               }
               _loc5_ = _loc5_ + 1;
            }
            youWin.varWin = "win";
            pauseInterval = setInterval(function()
            {
               clearInterval(pauseInterval);
               if(stageNum >= 5)
               {
                  _parent.stageScore.gotoAndStop("gameover");
               }
               else
               {
                  _parent.stageScore.gotoAndStop("win");
               }
            }
            ,3000);
         }
         else
         {
            youWin.varWin = "lose";
            pauseInterval = setInterval(function()
            {
               clearInterval(pauseInterval);
               stageNum--;
               var _loc3_ = 1;
               var _loc2_;
               while(_loc3_ <= 4)
               {
                  _loc2_ = _parent["heroObj" + _loc3_];
                  _loc2_.totalScore -= _loc2_.score;
                  _loc2_.score = 0;
                  _loc3_ = _loc3_ + 1;
               }
               _parent.stageScore.gotoAndStop("restart");
            }
            ,3000);
         }
         _parent.allPan.upDate();
   }
   trace("当前关得分:" + _parent.heroObj1.score);
   trace("当前总分:" + _parent.heroObj1.totalScore);
   youWin.play();
   _loc5_ = 1;
   while(_loc5_ <= 4)
   {
      if((_loc2_ = brickArea["hero" + _loc5_]) != undefined)
      {
         _loc2_.gotoAndStop("win");
      }
      _loc5_ = _loc5_ + 1;
   }
}
