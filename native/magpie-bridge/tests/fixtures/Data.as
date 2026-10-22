class Data extends MovieClip
{
   static var badNum;
   static var enemyArr;
   static var enemyFastestSpeed;
   static var enemyNum;
   static var enemySpeedMin;
   static var enemySpeedRange;
   static var enemySpeedUp;
   static var fastestSpeed;
   static var flyHight;
   static var gamePause;
   static var gameSpeed;
   static var gameover;
   static var goodNum;
   static var hitable;
   static var newEnemySpeed;
   static var newEnemySpeedUp;
   static var playTime;
   static var skyHight;
   static var stage_Heigh;
   static var stage_Width;
   static var totalGameTime;
   function Data()
   {
      super();
   }
   static function init()
   {
      gameSpeed = 45;
      stage_Width = 700;
      stage_Heigh = 600;
      skyHight = 50;
      flyHight = 50;
      newEnemySpeed = 1300;
      newEnemySpeedUp = 100;
      fastestSpeed = 400;
      enemySpeedMin = 8;
      enemyFastestSpeed = 25;
      enemySpeedRange = 3;
      enemySpeedUp = 0.5;
      enemyNum = 0;
      enemyArr = [];
      goodNum = 0;
      badNum = 0;
      hitable = true;
      gameover = false;
      totalGameTime = 90;
      playTime = 0;
   }
}
