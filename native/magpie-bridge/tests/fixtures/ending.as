Mouse.show();
if(Data.goodNum >= 100)
{
   board.num3._visible = true;
   board.num3._x = -11.3;
   board.num3._y = -74.3;
   board.num2._x = 10.6;
   board.num2._y = -74.3;
   board.num1._x = 32.8;
   board.num1._y = -72.6;
   var numStr = String(Data.goodNum);
   board.num1.gotoAndStop(Number(numStr.charAt(2)) + 1);
   board.num2.gotoAndStop(Number(numStr.charAt(1)) + 1);
   board.num3.gotoAndStop(Number(numStr.charAt(0)) + 1);
}
else
{
   board.num3._visible = false;
   board.num3._x = 22.3;
   board.num3._y = -74.3;
   board.num2._x = -0.3;
   board.num2._y = -74.3;
   board.num1._x = 21.8;
   board.num1._y = -72.6;
   board.num1.gotoAndStop(Data.goodNum % 10 + 1);
   board.num2.gotoAndStop(Math.floor(Data.goodNum / 10) + 1);
}
