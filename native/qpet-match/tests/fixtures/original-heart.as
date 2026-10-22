var i = 0;
var move_now = false;
m_Clear_Array = new Array();
this.onEnterFrame = function()
{
   var _loc1_ = this;
   var _loc2_ = _parent;
   if(move_now != true && _loc1_._visible == true)
   {
      _loc1_._visible = false;
   }
   if(_loc1_.move_now == true)
   {
      m_name = m_Clear_Array[i];
      l_name = m_Clear_Array[i - 1];
      goX = Math.floor(_loc2_.canvas_mc._x + _loc2_.canvas_mc[m_name]._x);
      goY = Math.floor(_loc2_.canvas_mc._y + _loc2_.canvas_mc[m_name]._y);
      if(goX == _loc1_._x && goY == _loc1_._y)
      {
         i++;
      }
      if(Math.abs(_loc1_._x - goX) < 10)
      {
         _loc1_._x = goX;
      }
      if(Math.abs(_loc1_._y - goY) < 10)
      {
         _loc1_._y = goY;
      }
      if(goX > _loc1_._x)
      {
         _loc1_._x += _loc2_.hart_speed;
      }
      else if(goX < _loc1_._x)
      {
         _loc1_._x -= _loc2_.hart_speed;
      }
      else if(goY > _loc1_._y)
      {
         _loc1_._y += _loc2_.hart_speed;
      }
      else if(goY < _loc1_._y)
      {
         _loc1_._y -= _loc2_.hart_speed;
      }
      else if(m_Clear_Array.length == i + 1)
      {
         c_name = m_Clear_Array[0];
         _loc2_.canvas_mc[c_name].obj.gotoAndPlay(3);
         m_Clear_Array.length = 0;
         _loc2_.m_Clear_Array.length = 0;
         delete _loc2_.m_Clear_Array;
         _loc1_._visible = false;
         i = 0;
         move_now = false;
      }
   }
};
stop();
