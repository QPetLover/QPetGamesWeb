this.replay.onPress = function()
{
   gotoAndStop("replay");
   play();
};
calScore = function()
{
   score = game.score;
   score.total = score.fish + score.bloodBag + score.speedBag + score.kingBag - score.mined - score.torpedoed;
};
this.exit.onPress = function()
{
   calScore();
   gotoAndStop("fin");
   play();
};
this.over = function(score)
{
   calScore();
   gotoAndStop("fin");
};
stop();
