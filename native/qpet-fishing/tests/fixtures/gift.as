stop();
if(this.stat == undefined)
{
   var b = Math.random();
   if(b >= 0 && b < 0.2)
   {
      this.stat = "补血包";
   }
   else if(b >= 0.2 && b < 0.8)
   {
      this.stat = "加速包";
   }
   else
   {
      this.stat = "无敌包";
   }
}
getStat = function()
{
   return this.stat;
};
changeStat = function(flag)
{
   this.lastStat = this.stat;
   var _loc0_;
   if((_loc0_ = flag) !== "被吃")
   {
      this.onEnterFrame = function()
      {
         this._y += 3;
         if(this._y > 300)
         {
            this.removeMovieClip();
         }
      };
      gotoAndStop(flag);
   }
   else
   {
      gotoAndStop(this.lastStat + "被吃");
   }
   this.stat = flag;
};
changeStat(this.stat);
