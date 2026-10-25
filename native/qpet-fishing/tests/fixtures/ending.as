stop();
if(score.total < 50)
{
   ending.gotoAndStop("A");
}
else if(score.total > 50 && score.total <= 200)
{
   ending.gotoAndStop("B");
}
else if(score.total > 200)
{
   ending.gotoAndStop("C");
}
