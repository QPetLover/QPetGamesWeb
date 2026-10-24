function clickPlant(obj)
{
   if(ws == 1)
   {
      var seedSure = 0;
      var i = 0;
      while(i < seeds[floorNow].length)
      {
         if(eval(seeds[floorNow][i]) == obj)
         {
            seedSure = 1;
            break;
         }
         i++;
      }
      if(seedSure == 1)
      {
         if(obj._currentframe == 1)
         {
            aim = 1;
         }
         else
         {
            aim = 2;
         }
         aimx = obj._x;
         seedNow.light.gotoAndStop(1);
         seedNow = obj;
         seedNow.light.gotoAndPlay(2);
      }
      else
      {
         var seedSure = 0;
         var i = 0;
         while(i < seeds[floorNow - 1].length)
         {
            if(eval(seeds[floorNow - 1][i]) == obj)
            {
               seedSure = 1;
               break;
            }
            i++;
         }
         if(seedSure == 1)
         {
            if(obj._currentframe > 1)
            {
               aim = 4;
            }
            aimx = obj._x;
            seedNow.light.gotoAndStop(1);
            seedNow = obj;
            seedNow.light.gotoAndPlay(2);
         }
      }
   }
}
function init()
{
   flashme = 0;
   seedsGot = 0;
   floorNow = 0;
   walking = 0;
   bgMin = 420;
   bgMax = 586;
   ws = 1;
   trace(_Y);
   trace(qmm._y);
   qgg._y = qmm._y;
   qms = qmm._xscale;
   qgs = qgg._xscale;
   disMin = 5;
   disMax = 10;
   disQ = 15;
   qmmspeed = 6;
   qggspeed = 5;
   aim = 0;
   qgx = qgg._x;
   qmx = qmm._x;
   qmk = 0.3;
   qgk = 0.3;
   gamePause = 0;
   floorHeight = 120;
   qmc = new Color(qmm);
   qgc = new Color(qgg);
   qct1 = new Object();
   qct2 = new Object();
   qct1 = {ra:"100",rb:"255",ga:"100",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
   qct2 = {ra:"100",rb:"0",ga:"100",gb:"0",ba:"100",bb:"0",aa:"100",ab:"0"};
   var i = 0;
   while(i < seeds.length)
   {
      var j = 0;
      while(j < seeds[i].length)
      {
         eval(seeds[i][j]).btn.onRelease = function()
         {
            clickPlant(this._parent);
         };
         j++;
      }
      i++;
   }
   bg.onRelease = function()
   {
      aim = 0;
      seedNow.light.gotoAndStop(1);
      seedNow = undefined;
   };
   var i = 0;
   while(i < npcs.length)
   {
      var j = 0;
      while(j < npcs[i].length)
      {
         var npcNow = eval(npcs[i][j]);
         npcNow.xMin = npcsXArea[i][j][0] - 375;
         npcNow.xMax = npcsXArea[i][j][1] - 375;
         npcNow.speed = random(2) <= 0 ? - npcsSpeed[i][j] : npcsSpeed[i][j];
         npcNow.onEnterFrame = function()
         {
            if(this._x + this.speed > this.xMax)
            {
               this._x = this.xMax;
               this.speed = - this.speed;
            }
            else if(this._x + this.speed < this.xMin)
            {
               this._x = this.xMin;
               this.speed = - this.speed;
            }
            else
            {
               this._x += this.speed;
            }
         };
         j++;
      }
      i++;
   }
   _parent.timeInit(3,30);
   gamePlay();
}
function pausing()
{
   gamePause = 1;
}
function gamePlay()
{
   onEnterFrame = function()
   {
      if(gamePause == 0)
      {
         if(seedsGot >= seedsTotal)
         {
            _parent.win();
         }
         if(ws == 1)
         {
            if(aim == 0)
            {
               aimx = _xmouse;
               aimy = _ymouse;
            }
            var tqmx = qmx;
            qmx += Math.abs((aimx - qmx) * qmk) <= qmmspeed ? (aimx - qmx) * qmk : (aimx <= qmm._x ? - qmmspeed : qmmspeed);
            mk = Math.abs(qmm._x - aimx) / (qmm._x - aimx);
            qmm._x = qmx;
            if(Math.abs(qmm._x - aimx) > 1)
            {
               qmm.play();
            }
            qmm._xscale = qms * mk;
            var tqgx = qgx;
            if(isNaN(mk))
            {
               mk = Math.abs(qmm._xscale) / qmm._xscale;
            }
            qgx += Math.abs((qmm._x + mk * disQ - qgx) * qgk) <= qggspeed ? (qmm._x + mk * disQ - qgx) * qgk : (qmm._x <= qgg._x ? - qggspeed : qggspeed);
            gk = Math.abs(qgg._x - qmm._x) / (qgg._x - qmm._x);
            if(isNaN(gk))
            {
               gk = Math.abs(qgg._xscale) / qgg._xscale;
            }
            qgg._x = qgx;
            qgg._xscale = qgs * gk;
            unhit = 0;
            var i = 0;
            while(i < hitters[floorNow].length)
            {
               if(qmm.hitter.hitTest(eval(hitters[floorNow][i])))
               {
                  unhit = 1;
                  break;
               }
               i++;
            }
            if(unhit == 0)
            {
               aim = 3;
            }
            if(aim == 3 && Math.abs(qmm._xscale) / qmm._xscale == Math.abs(qgg._xscale) / qgg._xscale)
            {
               trace("landing");
               if(Math.abs((qmm._x + mk * disQ - qgx) * qgk) > 1)
               {
                  trace("x1=" + qgg._x);
                  qgg._x -= mk * qggspeed;
                  trace("x2=" + qgg._x);
               }
               ws = 0;
               qmm.gotoAndPlay("landing");
               qgg.gotoAndPlay("landing");
            }
            else if(Math.abs(qmm._x - aimx) < 1 && Math.abs(qmm._x - qgg._x) < disQ + 5 && Math.abs(qmm._xscale) / qmm._xscale == Math.abs(qgg._xscale) / qgg._xscale)
            {
               if(aim == 1)
               {
                  ws = 0;
                  qmm.gotoAndPlay("plant");
                  qgg.gotoAndPlay("plant");
               }
               else if(aim == 2)
               {
                  trace("jjjjl");
                  ws = 0;
                  qmm.gotoAndPlay("climb");
                  qgg.gotoAndPlay("climb");
               }
               else if(aim == 4)
               {
                  trace("jjjjl");
                  ws = 0;
                  qmm.gotoAndPlay("climbDown");
                  qgg.gotoAndPlay("climbDown");
               }
            }
            else if(Math.abs((qmm._x + k * disQ - qgx) * qgk) > 0.3)
            {
               qgg.play();
            }
            trace("dis=" + Math.abs(qmm._x - qgg._x));
         }
         hitNpc = 0;
         var i = 0;
         while(i < npcs[floorNow].length)
         {
            if(qmm.hitter2.hitTest(eval(npcs[floorNow][i]).hitter) || qgg.hitter2.hitTest(eval(npcs[floorNow][i]).hitter))
            {
               hitNpc = 1;
               break;
            }
            i++;
         }
         if(hitNpc == 1 && qmm.flashing._currentframe == 1)
         {
            _parent.lifeDown();
            _parent.npcHurt.start();
            trace("qf=" + qmm.flashing._currentframe);
            qmm.flashing.gotoAndPlay(2);
         }
      }
      var i = 0;
      while(i < bingos[floorNow].length)
      {
         if(qmm.hitter2.hitTest(eval(bingos[floorNow][i]).hitter) || qgg.hitter2.hitTest(eval(bingos[floorNow][i]).hitter))
         {
            _parent.scoreAdd(3 * eval(bingos[floorNow][i])._currentframe,1);
            eval(bingos[floorNow][i]).hitter._visible = false;
            eval(bingos[floorNow][i]).light.gotoAndPlay(2);
            bingos[floorNow].splice(i,1);
            _parent.getBingo.start();
            break;
         }
         i++;
      }
   };
}
seeds = [["seed0","seed1"],["seed2","seed3","seed4"],["seed5","seed6","seed7"],["seed8","seed9","seed10"]];
hitters = [["hitter0"],["hitter1","hitter2","hitter3"],["hitter4","hitter5","hitter6"],["hitter7","hitter9"],["hitter10","hitter11","hitter12"]];
npcs = [["npc0"],["npc1","npc2"],["npc4","npc4"],["npc5"]];
bingos = [["bingo0","bingo1","bingo2","bingo3","bingo4","bingo5","bingo6","bingo7","bingo8","bingo9","bingo10","bingo11","bingo41","bingo42"],["bingo12","bingo13","bingo14","bingo15","bingo16","bingo17","bingo18","bingo19","bingo20"],["bingo21","bingo22","bingo23","bingo24","bingo25","bingo26","bingo27","bingo28","bingo29"],["bingo30","bingo31","bingo32","bingo33","bingo34","bingo35","bingo36","bingo37","bingo38","bingo39","bingo40"],["bingo43","bingo44","bingo45","bingo46","bingo47","bingo48","bingo49","bingo50","bingo51","bingo52","bingo53","bingo54"]];
npcsXArea = [[[28,732]],[[-60,820],[300,530]],[[160,415],[-60,820]],[[310,732]]];
npcsSpeed = [[1.8],[3,1.8],[1.8,4],[1.8]];
bg.useHandCursor = 0;
var i = 0;
while(i < 100)
{
   if(!eval("seed" + i))
   {
      seedsTotal = i;
      break;
   }
   i++;
}
trace("seedsTotal=" + seedsTotal);
