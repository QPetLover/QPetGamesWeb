_X = _root._xmouse + (_X - _root._xmouse) / 1.5;
_Y = _root._ymouse + (_Y - _root._ymouse) / 1.5;
dx = math.abs(_X - oldx);
if(dx > 20)
{
   dx = 20;
}
dy = math.abs(_Y - oldy);
if(dy > 20)
{
   dy = 20;
}
_xscale = _xscale + (0.5 * dx - 0.1 * dy);
_yscale = _yscale + (0.5 * dy - 0.1 * dx);
oldx = _X;
oldy = _Y;
if(math.abs(getProperty("/b", _X) - _X) < eval("/:maxdist"))
{
   if(math.abs(getProperty("/b", _Y) - _Y) < eval("/:maxdist"))
   {
      dis = math.sqrt((getProperty("/b", _X) - _X) * (getProperty("/b", _X) - _X) + (getProperty("/b", _Y) - _Y) * (getProperty("/b", _Y) - _Y));
      if(dis < eval("/:maxdist"))
      {
         checkhits();
         _xscale = _xscale - 0.4 * (eval("/:maxdist") - dis);
         _yscale = _yscale - 0.4 * (eval("/:maxdist") - dis);
      }
   }
}
xs = xs * accel + (target - _xscale) * convert;
ys = ys * accel + (target - _yscale) * convert;
_xscale = _xscale + xs;
_yscale = _yscale + ys;
