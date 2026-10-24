function scoreAdd(addScore, addType)
{
   if(addType == 1)
   {
      addScore = Math.round(addScore * (gameStage.floorNow + 1) / 2.5 * level);
   }
   gameStage.scoreCount++;
   plusNow = gameStage.scoreShow.attachMovie("plusScore","plusScore" + gameStage.scoreCount,gameStage.scoreCount);
   plusNow._x = gameStage.qmm._x;
   plusNow._y = gameStage.qmm._y;
   plusNow.score = "+" + addScore;
   trace("score=" + plusNow.score);
   score += addScore;
}
function gameOver()
{
   timer.onEnterFrame = undefined;
   gameStage.gamePause = 1;
   gameStage.ws = 0;
   gameStage.qmm.gotoAndStop(1);
   gameStage.qgg.gotoAndStop(1);
   gotoAndStop("gameFail");
}
function lifeDown()
{
   life--;
   if(life < 0)
   {
      gameOver();
   }
   else
   {
      hearts["heart" + life].gotoAndPlay("fadeOut");
   }
}
function timePlay()
{
   timeNow = getTimer();
   timer.onEnterFrame = function()
   {
      if(getTimer() - timeNow >= 1000)
      {
         timeNow = getTimer();
         if(times - 1 > 0)
         {
            times--;
            times >= 10 ? (ts = times) : (ts = "0" + times);
            tm = timem;
         }
         else
         {
            trace("timem-");
            timem--;
            timem >= 10 ? (tm = timem) : (tm = "0" + timem);
            timem < 0 ? (times = 0) : (times = 60);
            timem >= 0 ? undefined : (tm = "00");
            times >= 10 ? (ts = times) : (ts = "0" + times);
         }
         gameTime = tm + ":" + ts;
         if(timem <= 0 && times <= 0)
         {
            timer.onEnterFrame = undefined;
            gameOver();
         }
      }
   };
}
function timeInit(tm, ts)
{
   timem = tm;
   times = ts;
   timer.onEnterFrame = undefined;
   timeMax = tm * 60 + ts;
   timer.onEnterFrame = undefined;
   tm >= 10 ? undefined : (tm = "0" + tm);
   ts >= 10 ? undefined : (ts = "0" + ts);
   gameTime = tm + ":" + ts;
   timePlay();
}
function win()
{
   level++;
   timer.onEnterFrame = undefined;
   gameTime = "00:00";
   score += Math.round((timem * 60 + times) / timeMax * level);
   gameStage.gamePause = 1;
   gameStage.ws = 0;
   gameStage.qmm.gotoAndStop(1);
   gameStage.qgg.gotoAndStop(1);
   passPop.gotoAndPlay("fadeIn");
}
function init()
{
   gameFail = 0;
   level = 1;
   life = 5;
   var _loc1_ = 0;
   while(_loc1_ < life)
   {
      hearts["heart" + _loc1_].gotoAndStop(1);
      _loc1_ = _loc1_ + 1;
   }
   score = 0;
   gameTime = "00:00";
   getBingo = new Sound();
   getBingo.attachSound("getBingo");
   npcHurt = new Sound();
   npcHurt.attachSound("npcHurt");
}
stop();
