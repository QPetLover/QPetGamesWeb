movieclip.prototype.ballmove = function()
{
   this.vy += eval("/:grav");
   this._x += this.vx;
   this._y += this.vy;
   var xa = _xmouse;
   var ya = _ymouse;
   var dx = xa - this._x;
   var dy = ya - this._y;
   var dist = Math.sqrt(dx * dx + dy * dy);
   if(dist < eval("/:maxDist"))
   {
      var angle = Math.atan2(dy,dx);
      var tx = xa - Math.cos(angle) * maxDist;
      var ty = ya - Math.sin(angle) * maxDist;
      this.vx += (tx - this._x) * eval("/:k");
      this.vy += (ty - this._y) * eval("/:k");
      this.vx *= eval("/:damp");
      this.vy *= eval("/:damp");
   }
   if(this._y > ymax + 50)
   {
      checkhits();
      this._y = ymin - 100;
      this.vy = 0;
      this.vx = 0;
      this._x = 0.5 * eval("/:xmax");
      set("/:time",eval("/:time") - 2 * eval("/:misspoint"));
      _root.zblub.start();
   }
   if(this._y < ymin)
   {
      this._y = ymin;
      this.vy = 0;
   }
   if(this._x > xmax - this.wid)
   {
      this._x = xmax - this.wid;
      this.vx *= - eval("/:bouncexmin");
   }
   if(this._x < xmin + this.wid)
   {
      this._x = xmin + this.wid;
      this.vx *= - eval("/:bouncexmax");
   }
};
movieclip.prototype.checkhits = function()
{
   if(eval("/:got") > 1)
   {
      var addscore = eval("/:hitbonus")[eval("/:got") - 1];
      set("/:score",eval("/:score") + addscore);
      _root.hits.got = eval("/:got");
      _root.hits.addscore = addscore;
      _root.hits.gotoAndPlay(2);
      set("/:time",eval("/:time") + eval("/:got") * eval("/:timepoint"));
      if(eval("/:time") > eval("/:timemax"))
      {
         set("/:time",eval("/:timemax"));
      }
      if(eval("/:lastgotx") < 50)
      {
         set("/:lastgotx",50);
      }
      if(eval("/:lastgotx") > 650)
      {
         set("/:lastgotx",650);
      }
      if(eval("/:lastgoty") < 50)
      {
         set("/:lastgoty",50);
      }
      if(eval("/:lastgoty") > 440)
      {
         set("/:lastgoty",440);
      }
      _root.hits._x = eval("/:lastgotx");
      _root.hits._y = eval("/:lastgoty");
   }
   set("/:got",0);
};
movieclip.prototype.levelupdate = function()
{
   set("/:lev",eval("/:lev") + 1);
   if(eval("/:lev") > eval("/:leveldelay"))
   {
      set("/:lev",0);
      if(eval("/:speed") < 2.2)
      {
         set("/:speed",eval("/:speed") + 0.1);
      }
      if(eval("/:dstardelay") > 40)
      {
         set("/:dstardelay",eval("/:dstardelay") - 2);
      }
   }
};
movieclip.prototype.fade_in = function()
{
   _root.attachmovie("allwz","allwz",10009);
};
