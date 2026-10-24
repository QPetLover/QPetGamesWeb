onClipEvent(enterFrame){
   if(_parent.an < 3)
   {
      if(_currentframe != 20)
      {
         if(Key.isDown(37))
         {
            if(Key.isDown(38))
            {
               if(_parent.miao_array[0]._currentframe >= 14 && _parent.an == 1 && _parent.miao_array[0] != undefined && _parent.miao_array[0].i == 5)
               {
                  num1 = 5;
                  gotoAndStop(6);
               }
               else if(_currentframe < 6)
               {
                  gotoAndStop("kk1");
               }
            }
            else if(Key.isDown(40))
            {
               if(_parent.miao_array[0]._currentframe >= 14 && _parent.an == 1 && _parent.miao_array[0] != undefined && _parent.miao_array[0].i == 6)
               {
                  num1 = 6;
                  gotoAndStop(7);
               }
               else if(_currentframe < 6)
               {
                  gotoAndStop("kk2");
               }
            }
            else if(_currentframe == 1 && flag == 1)
            {
               flag = 0;
               num1 = 1;
               gotoAndStop(2);
            }
         }
         else if(Key.isDown(39))
         {
            if(Key.isDown(38))
            {
               trace("****");
               if(_parent.miao_array[0]._currentframe >= 14 && _parent.an == 1 && _parent.miao_array[0] != undefined && _parent.miao_array[0].i == 7)
               {
                  num1 = 7;
                  gotoAndStop(8);
               }
               else if(_currentframe < 6)
               {
                  gotoAndStop("kk1");
               }
            }
            else if(Key.isDown(40))
            {
               if(_parent.miao_array[0]._currentframe >= 14 && _parent.an == 1 && _parent.miao_array[0] != undefined && _parent.miao_array[0].i == 8)
               {
                  num1 = 8;
                  gotoAndStop(9);
               }
               else if(_currentframe < 6)
               {
                  gotoAndStop("kk2");
               }
            }
            else if(_currentframe == 1 && flag == 1)
            {
               flag = 0;
               num1 = 2;
               gotoAndStop(3);
            }
         }
         else if(Key.isDown(38))
         {
            if(_currentframe == 1 && flag == 1)
            {
               flag = 0;
               num1 = 3;
               gotoAndStop(4);
            }
         }
         else if(Key.isDown(40))
         {
            if(_currentframe == 1 && flag == 1)
            {
               flag = 0;
               num1 = 4;
               gotoAndStop(5);
            }
         }
      }
      if(_parent.miao_array[0]._currentframe >= 18 && _parent.an == 1 && _parent.miao_array[0] != undefined)
      {
         if(_parent.miao_array[0].i <= 2 && _parent.miao_array[0].i == num1 && _parent.miao_array[0].nam.mc._currentframe == 1)
         {
            _parent.miao_array[0].nam.mc.gotoAndStop(2);
            if(_parent._parent.sun._currentframe == 1 && int(_parent._parent.fen / 500) != int((_parent._parent.fen + 10) / 500))
            {
               _parent._parent.sun.gotoAndStop(2);
            }
            _parent._parent.fen += 10;
         }
         else if(_parent.miao_array[0].i > 2 && (_parent.miao_array[0]._currentframe >= 23 && _parent.miao_array[0].i != num1 || (_parent.miao_array[0].i - 1) % 2 + 1 != num1 && num1 != 0 && _parent.miao_array[0].i >= 9 || _parent.miao_array[0].i != num1 && num1 != 0 && _parent.miao_array[0].i < 5))
         {
            if(_parent._parent.sun._currentframe == 1)
            {
               _parent._parent.sun.gotoAndStop(3);
            }
            _parent._parent.xue += 5;
            _parent._parent.xuemc.gotoAndStop(_parent._parent.xue);
            trace("障碍=" + _parent.miao_array[0].i);
            trace("时机=" + _parent.miao_array[0]._currentframe);
            trace("按键=" + num1);
            trace("当前=" + this._currentframe);
            _parent.bjmc.lu1.stop();
            _parent.bjmc.lu2.stop();
            _parent.bjmc.lu3.stop();
            _parent.bjmc.lu5.stop();
            _parent.bjmc.lu4.stop();
            _parent.miao_array[0].nam.gotoAndStop("kkk");
            var i = 0;
            while(i < _parent.miao_array.length)
            {
               _parent.miao_array[i].stop();
               i++;
            }
            gotoAndStop("kkk");
            _parent.pnum = _parent.sou1.position;
            _parent.sou1.stop();
            _parent.an = 0;
            _parent.ttt = 0;
            _parent.miao_array[0].removeMovieClip();
            _parent.miao_array.shift();
         }
         else if(_parent.miao_array[0].i > 2 && ((_parent.miao_array[0].i - 1) % 2 + 1 == num1 && _parent.miao_array[0].i >= 9 || _parent.miao_array[0].i == num1 && _parent.miao_array[0].i < 9))
         {
            trace("加分");
            _parent.miao_array.shift();
            if(_parent._parent.sun._currentframe == 1 && int(_parent._parent.fen / 500) != int((_parent._parent.fen + 20) / 500))
            {
               _parent._parent.sun.gotoAndStop(2);
            }
            _parent._parent.fen += 20;
            num1 = 0;
         }
      }
   }
}
