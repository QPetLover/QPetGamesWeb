class Game extends MovieClip
{
   var gameTimer2;
   var pertime;
   function Game()
   {
      super();
      Data.init();
      this.pertime = this._parent.sjb.line._width / Data.totalGameTime;
      this._parent.Player.startDrag(true);
      this.addEnemy();
      this.gameTimer2 = setInterval(this,"addEnemy",Data.newEnemySpeed);
      var _loc3_ = setInterval(this,"runGame",1000);
      this._parent.num3._visible = false;
   }
   function runGame()
   {
      if(!Data.gamePause)
      {
         if(this._parent.sjb.line._x > 0)
         {
            this._parent.sjb.line._x -= this.pertime;
         }
         else
         {
            stopAllSounds();
            _root.timeUp = true;
            this._parent.gotoAndStop("win");
            this._parent.game.removeMovieClip();
            _root.game2();
            trace("game over");
         }
      }
   }
   function addEnemy()
   {
      if(Data.hitable)
      {
         clearInterval(this.gameTimer2);
         this.gameTimer2 = setInterval(this,"addEnemy",Data.newEnemySpeed);
         this.attachMovie("Enemy","Enemy" + Data.enemyNum,this.getNextHighestDepth());
         this["Enemy" + Data.enemyNum].init();
         Data.enemyNum++;
      }
   }
}
