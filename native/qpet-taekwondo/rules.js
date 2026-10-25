/* Explicit fixed QQ跆拳道 source-method transcription. Original source SHA256
6df89818db38d2748b7185df470627f0cc013e0410c07e605b76148c4d77b9f8.
Offline tool: tools/transcribe-rules.py. No ActionScript or bytecode runtime. */
import {Clip,NativeTimer,OriginalSound,SourceURL} from './scene.js';

export class Ball extends Clip{
 constructor(world){
  super(world,"55");
  this.deferConstruct(()=>{

  this.intSlot("fangxiang");

  this.gravity=0.5;

  this.pendi=false;

  this.ball_go??=null;

  this.bounce=-0.3;

  this.radius=NaN;

  this.pendi1=false;

  this.intSlot("num");

  this.vx=NaN;

  this.vy=NaN;

  this.intSlot("suiji");

  this._X=NaN;

  this.init=this.init.bind(this);

  this.frame1=this.frame1.bind(this);

  this.onEnterFrame=this.onEnterFrame.bind(this);

this.addFrameScript(0,this.frame1);
         this.init();
  });
 }

 init(){
this.pendi = false;
         this.pendi1 = false;
         this.num = this.world.random() * 8 + 1;
         this.gotoAndStop(this.num);
         this.radius = 55.3 / 2;
         this.vx = 3;
         this.addEventListener("enterFrame",this.onEnterFrame);
 }

 frame1(){
this.stop();
 }

 onEnterFrame(param1){
var _loc2_ = NaN;
         var _loc3_ = NaN;
         var _loc4_ = NaN;
         var _loc5_ = NaN;
         this.vy += this.gravity;
         if(this.pendi == false)
         {
            this._X = this.x;
         }
         else if(this.pendi == true)
         {
            if(this.fangxiang == 1)
            {
               this.x -= this.vx;
            }
            else if(this.fangxiang == 2)
            {
               this.x += this.vx;
            }
         }
         this.y += this.vy;
         _loc2_ = 0;
         _loc3_ = this.stage.stageWidth;
         _loc4_ = 0;
         _loc5_ = 460;
         if(this.parent===null){if(this.world.scriptAborts.length<100)this.world.scriptAborts.push({kind:"source-detached-actor-null-parent",frame:this.world.frame,owner:this.id});return;}
         if(this.parent["i"] == 0 || this.parent["life"] == 0 || this.parent["q"] == 1)
         {
            this.removeEventListener("enterFrame",this.onEnterFrame);
         }
         if(this.y + this.radius > _loc5_)
         {
            this.y = _loc5_ - this.radius;
            this.pendi = true;
            if(this.vy < 15)
            {
               --this.vy;
            }
            else
            {
               if(this.visible == true && this.parent["gk"] != 0)
               {
                  --this.parent["life"];
               }
               this.vy -= 2;
            }
            if(this.vx > 0)
            {
               this.vx = this.vx - 1;
            }
            else if(this.vx < 0)
            {
               this.vx += 1;
            }
            this.vy *= this.bounce;
         }
 }

}

export class Ball_go extends Clip{
 constructor(world){
  super(world,"47");
  this.deferConstruct(()=>{

  this.ball_in??=null;

  this.fh=false;

  this.init=this.init.bind(this);

  this.frame12=this.frame12.bind(this);

  this.frame1=this.frame1.bind(this);

this.addFrameScript(0,this.frame1,11,this.frame12);
         this.fh = false;
         this.init();
  });
 }

 init(){
this.fh = true;
 }

 frame12(){
this.stop();
 }

 frame1(){
this.stop();
 }

}

export class End extends Clip{
 constructor(world){
  super(world,"17");
  this.deferConstruct(()=>{

  this.JX=false;

  this.intSlot("key");

  this.intSlot("movekey");

  this.init=this.init.bind(this);

  this.frame55=this.frame55.bind(this);

  this.Move=this.Move.bind(this);

this.addFrameScript(54,this.frame55);
         this.init();
  });
 }

 init(){
this.movekey = 0;
         this.key = 0;
         this.gotoAndStop(1);
         this.JX = false;
         this.addEventListener("enterFrame",this.Move);
 }

 frame55(){
this.stop();
 }

 Move(param1){
if(this.currentFrame == 55)
         {
            this.removeEventListener("enterFrame",this.Move);
            this.key = 1;
            this["parent"].yy();
         }
 }

}

export class GameMenu extends Clip{
 constructor(world){
  super(world,"main");
  this.deferConstruct(()=>{

  this._loading??=null;

  this.ball_go1??=null;

  this.ball_go2??=null;

  this.ball_go3??=null;

  this.ball1??=null;

  this.ball2??=null;

  this.ball3??=null;

  this.intSlot("_LX");

  this.dianji=undefined;

  this.t2??=null;

  this.t3??=null;

  this.t1??=null;

  this.rw??=null;

  this.star??=null;

  this.lxc??=null;

  this.t4??=null;

  this.sl??=null;

  this.st??=null;

  this.btn??=null;

  this.intSlot("sex");

  this.quit??=null;

  this.intSlot("i");

  this.dArray??=null;

  this.intSlot("q");

  this.s=new LinkID(this.world);

  this.Win_move??=null;

  this.t??=null;

  this.aArray??=null;

  this.rec??=null;

  this.life_text??=null;

  this.intSlot("score");

  this.score_text??=null;

  this.fh??=null;

  this.end??=null;

  this.intSlot("gk");

  this.intSlot("xb");

  this.intSlot("life");

  this.channel??=null;

  this.bArray??=null;

  this.sound??=null;

  this.help??=null;

  this.js??=null;

  this.intSlot("jx");

  this.intSlot("guo");

  this.help_mc??=null;

  this.ball_go??=null;

  this.time_text??=null;

  this._FC??=null;

  this.guo_text??=null;

  this.intSlot("level");

  this.lx??=null;

  this.cArray??=null;

  this.intSlot("suiji");

  this.intSlot("win");

  this.intSlot("_d");

  this.ply??=null;

  this.ball??=null;

  this.chushi=this.chushi.bind(this);

  this.Xubi=this.Xubi.bind(this);

  this.backe=this.backe.bind(this);

  this.guoguan=this.guoguan.bind(this);

  this.Quit=this.Quit.bind(this);

  this.sy=this.sy.bind(this);

  this.xialuo=this.xialuo.bind(this);

  this.frame1=this.frame1.bind(this);

  this.Star=this.Star.bind(this);

  this.cx1=this.cx1.bind(this);

  this.onKeyup=this.onKeyup.bind(this);

  this.onKeydown=this.onKeydown.bind(this);

  this.JX1=this.JX1.bind(this);

  this.time=this.time.bind(this);

  this.renwu=this.renwu.bind(this);

  this.OVER=this.OVER.bind(this);

  this.Wb=this.Wb.bind(this);

  this.init=this.init.bind(this);

  this.loss=this.loss.bind(this);

  this.OUT=this.OUT.bind(this);

  this.yy=this.yy.bind(this);

  this.ks=this.ks.bind(this);

  this.Help=this.Help.bind(this);

  this.Lx=this.Lx.bind(this);

  this.tiaozhan=this.tiaozhan.bind(this);

  this.quit1=this.quit1.bind(this);

this.addFrameScript(0,this.frame1);
         this._loading = new loading(this.world);
         this.addChild(this._loading);
         this.sex = this.world.random() * 2 + 102;
         this.level = this.world.random() * 3 + 1;
         this.channel = this.s.play(0,1000,null);
         this.js.visible = false;
         this.sl.visible = false;
         this.gk = 0;
         this._LX = 0;
         this._d = 0;
         this.guo = 0;
         this.jx = 0;
         this.q = 0;
         this.score = 0;
         this.dianji = 0;
         this.time_text.text = "?";
         this.life_text.text = "?";
         this.lxc.visible = false;
         this.t1.visible = false;
         this.t2.visible = false;
         this.t3.visible = false;
         this.t4.visible = false;
         this.btn.visible = false;
         this.quit.addEventListener("click",this.Quit);
         this.help.addEventListener("click",this.Help);
         this.quit.buttonMode = true;
         this.sound.buttonMode = true;
         this.fh.addEventListener("click",this.backe);
         this.sound.addEventListener("click",this.sy);
         this.btn.addEventListener("click",this.tiaozhan);
         this.lx.addEventListener("click",this.Lx);
         this.star.addEventListener("click",this.Star);
         this.quit.addEventListener("mouseOver",this.OVER);
         this.quit.addEventListener("mouseOut",this.OUT);
         this._FC.gotoAndStop(2);
  });
 }

 chushi(){
this.suiji = this.world.random() * 4;
         if(this.gk == 0 || this.gk == 1)
         {
            if(this.suiji == 0)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 240;
               this.ball.y = 0;
               this.ball.vy = 3;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 240;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
            }
            if(this.suiji == 1)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 310;
               this.ball.y = 0;
               this.ball.vy = 3;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 310;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
            }
            if(this.suiji == 2)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 550;
               this.ball.y = 0;
               this.ball.vy = 3;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 550;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
            }
            if(this.suiji == 3)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 620;
               this.ball.y = 0;
               this.ball.vy = 3;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 620;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
            }
         }
         if(this.gk == 2)
         {
            if(this.suiji == 0)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 240;
               this.ball.y = 0;
               this.ball.vy = 6;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 240;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
            }
            if(this.suiji == 1)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 310;
               this.ball.y = 0;
               this.ball.vy = 6;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 310;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
            }
            if(this.suiji == 2)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 550;
               this.ball.y = 0;
               this.ball.vy = 6;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 550;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
            }
            if(this.suiji == 3)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 620;
               this.ball.y = 0;
               this.ball.vy = 6;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 620;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
            }
         }
         if(this.gk == 3 || this.gk == 4)
         {
            if(this.suiji == 0)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 310;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 300;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 620;
               this.ball1.y = -100;
               this.ball1.vy = 1;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 610;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
            }
            else if(this.suiji == 1)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 240;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 240;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 550;
               this.ball1.y = -100;
               this.ball1.vy = 1;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 550;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
            }
            else if(this.suiji == 2)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 240;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 240;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 310;
               this.ball1.y = -100;
               this.ball1.vy = 1;
               this.ball1.fangxiang = 1;
               this.addChild(this.ball1);
               this.ball_go1.x = 310;
               this.ball_go1.y = 350;
               this.addChild(this.ball_go1);
            }
            else if(this.suiji == 3)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 550;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 550;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 620;
               this.ball1.y = -100;
               this.ball1.vy = 1;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 620;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
            }
         }
         if(this.gk == 5 || this.gk == 6 || this.gk == 7)
         {
            if(this.suiji == 0)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 240;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 240;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 550;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 550;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 620;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 2;
               this.addChild(this.ball2);
               this.ball_go2.x = 620;
               this.ball_go2.y = 350;
               this.ball_go2.scaleX = -1;
               this.addChild(this.ball_go2);
            }
            else if(this.suiji == 1)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 620;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 620;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 550;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 550;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 240;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 1;
               this.addChild(this.ball2);
               this.ball_go2.x = 240;
               this.ball_go2.y = 350;
               this.addChild(this.ball_go2);
            }
            else if(this.suiji == 2)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 310;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 310;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 240;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 1;
               this.addChild(this.ball1);
               this.ball_go1.x = 240;
               this.ball_go1.y = 350;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 550;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 2;
               this.addChild(this.ball2);
               this.ball_go2.x = 550;
               this.ball_go2.y = 350;
               this.ball_go2.scaleX = -1;
               this.addChild(this.ball_go2);
            }
            else if(this.suiji == 3)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 620;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 620;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 240;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 1;
               this.addChild(this.ball1);
               this.ball_go1.x = 240;
               this.ball_go1.y = 350;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 550;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 2;
               this.addChild(this.ball2);
               this.ball_go2.x = 550;
               this.ball_go2.y = 350;
               this.ball_go2.scaleX = -1;
               this.addChild(this.ball_go2);
            }
         }
         if(this.gk == 8 || this.gk == 9 || this.gk == 10)
         {
            if(this.suiji == 0)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 310;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 310;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 240;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 1;
               this.addChild(this.ball1);
               this.ball_go1.x = 240;
               this.ball_go1.y = 350;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 550;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 2;
               this.addChild(this.ball2);
               this.ball_go2.x = 550;
               this.ball_go2.y = 350;
               this.ball_go2.scaleX = -1;
               this.addChild(this.ball_go2);
               this.ball_go3 = new Ball_go(this.world);
               this.ball3 = new Ball(this.world);
               this.ball3.x = 620;
               this.ball3.y = -600;
               this.ball3.vy = 0.05;
               this.ball3.fangxiang = 2;
               this.addChild(this.ball3);
               this.ball_go3.x = 620;
               this.ball_go3.y = 350;
               this.ball_go3.scaleX = -1;
               this.addChild(this.ball_go3);
            }
            else if(this.suiji == 1)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 310;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 310;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 550;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 550;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 240;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 1;
               this.addChild(this.ball2);
               this.ball_go2.x = 240;
               this.ball_go2.y = 350;
               this.addChild(this.ball_go2);
               this.ball_go3 = new Ball_go(this.world);
               this.ball3 = new Ball(this.world);
               this.ball3.x = 620;
               this.ball3.y = -600;
               this.ball3.vy = 0.05;
               this.ball3.fangxiang = 2;
               this.addChild(this.ball3);
               this.ball_go3.x = 620;
               this.ball_go3.y = 350;
               this.ball_go3.scaleX = -1;
               this.addChild(this.ball_go3);
            }
            else if(this.suiji == 2)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 240;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 1;
               this.addChild(this.ball);
               this.ball_go.x = 240;
               this.ball_go.y = 350;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 620;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 620;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 310;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 1;
               this.addChild(this.ball2);
               this.ball_go2.x = 310;
               this.ball_go2.y = 350;
               this.addChild(this.ball_go2);
               this.ball_go3 = new Ball_go(this.world);
               this.ball3 = new Ball(this.world);
               this.ball3.x = 550;
               this.ball3.y = -600;
               this.ball3.vy = 0.05;
               this.ball3.fangxiang = 2;
               this.addChild(this.ball3);
               this.ball_go3.x = 550;
               this.ball_go3.y = 350;
               this.ball_go3.scaleX = -1;
               this.addChild(this.ball_go3);
            }
            else if(this.suiji == 3)
            {
               this.ball_go = new Ball_go(this.world);
               this.ball = new Ball(this.world);
               this.ball.x = 620;
               this.ball.y = 0;
               this.ball.vy = 4;
               this.ball.fangxiang = 2;
               this.addChild(this.ball);
               this.ball_go.x = 620;
               this.ball_go.y = 350;
               this.ball_go.scaleX = -1;
               this.addChild(this.ball_go);
               this.ball_go1 = new Ball_go(this.world);
               this.ball1 = new Ball(this.world);
               this.ball1.x = 550;
               this.ball1.y = -100;
               this.ball1.vy = 0.05;
               this.ball1.fangxiang = 2;
               this.addChild(this.ball1);
               this.ball_go1.x = 550;
               this.ball_go1.y = 350;
               this.ball_go1.scaleX = -1;
               this.addChild(this.ball_go1);
               this.ball_go2 = new Ball_go(this.world);
               this.ball2 = new Ball(this.world);
               this.ball2.x = 310;
               this.ball2.y = -300;
               this.ball2.vy = 0.05;
               this.ball2.fangxiang = 1;
               this.addChild(this.ball2);
               this.ball_go2.x = 310;
               this.ball_go2.y = 350;
               this.addChild(this.ball_go2);
               this.ball_go3 = new Ball_go(this.world);
               this.ball3 = new Ball(this.world);
               this.ball3.x = 240;
               this.ball3.y = -600;
               this.ball3.vy = 0.05;
               this.ball3.fangxiang = 1;
               this.addChild(this.ball3);
               this.ball_go3.x = 240;
               this.ball_go3.y = 350;
               this.addChild(this.ball_go3);
            }
         }
 }

 Xubi(param1){
this.xb = 1;
         this.js.visible = false;
 }

 backe(param1){
var _loc2_ = null;
         this.channel.stop();
         _loc2_ = new SourceURL("http://pet.qq.com/");
         this.world.navigate(_loc2_);
 }

 guoguan(){
switch(this.gk)
         {
            case 1:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 2;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.gotoAndStop("L2");
                     this.time_text.text = "12";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 2:
               if(this.life != 0 && this.i == 0 && this.score >= 1)
               {
                  this.ball.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 3;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.gotoAndStop("L3");
                     this.time_text.text = "15";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 3:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 4;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.gotoAndStop("L4");
                     this.time_text.text = "18";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 4:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 5;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.gotoAndStop("L5");
                     this.time_text.text = "20";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 5:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.ball2.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 6;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.gotoAndStop("L6");
                     this.time_text.text = "25";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 6:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.ball2.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 7;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.gotoAndStop("L7");
                     this.time_text.text = "30";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 7:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.ball2.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 8;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.gotoAndStop("L8");
                     this.time_text.text = "35";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 8:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.ball2.visible = false;
                  this.ball3.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 9;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.removeChild(this.ball3);
                     this.ball3 = null;
                     this.gotoAndStop("L9");
                     this.time_text.text = "40";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 9:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.ball2.visible = false;
                  this.ball3.visible = false;
                  this.jx = 0;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 7)
                  {
                     this.ply.gotoAndStop(7);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 17)
                  {
                     this.ply.gotoAndStop(17);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 27)
                  {
                     this.ply.gotoAndStop(27);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 37)
                  {
                     this.ply.gotoAndStop(37);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 47)
                  {
                     this.ply.gotoAndStop(47);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 57)
                  {
                     this.ply.gotoAndStop(57);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  this.Win_move.play();
                  if(this.Win_move.movekey == 1)
                  {
                     ++this.guo;
                     this.gk = 10;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.removeChild(this.ball3);
                     this.ball3 = null;
                     this.gotoAndStop("L10");
                     this.time_text.text = "50";
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.init();
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
               break;
            case 10:
               if(this.life != 0 && this.i == 0)
               {
                  this.ball.visible = false;
                  this.ball1.visible = false;
                  this.ball2.visible = false;
                  this.ball3.visible = false;
                  this.stage.removeEventListener("keyDown",this.onKeydown);
                  this.stage.removeEventListener("keyUp",this.onKeyup);
                  if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 10)
                  {
                     this.ply.gotoAndStop(10);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 20)
                  {
                     this.ply.gotoAndStop(20);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 30)
                  {
                     this.ply.gotoAndStop(30);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 40)
                  {
                     this.ply.gotoAndStop(40);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 50)
                  {
                     this.ply.gotoAndStop(50);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 60)
                  {
                     this.ply.gotoAndStop(60);
                  }
                  else
                  {
                     this.ply.mc.play();
                  }
                  if(this.xb == 2)
                  {
                     this.gk = 1;
                     this.guo = 0;
                     this.score = 0;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.removeChild(this.ball3);
                     this.ball3 = null;
                     this.removeChild(this.ply);
                     this.ply = null;
                  }
                  if(this.ply.mc.currentFrame == 100)
                  {
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                     this.sl.visible = true;
                     this.ply.visible = false;
                     this.yy();
                  }
               }
         }
 }

 Quit(param1){
var _loc2_ = null;
         this.world.trace("gk" + this.gk);
         if(this.gk == 0)
         {
            this.world.trace("bbb");
            _loc2_ = new SourceURL("javascript:window.close()");
            this.world.navigate(_loc2_,"_top");
         }
         else if(this.gk != 0 && this.quit.enabled == true)
         {
            this.yy();
            this.stage.removeEventListener("keyDown",this.onKeydown);
            this.stage.removeEventListener("keyUp",this.onKeyup);
            this.stage.removeEventListener("enterFrame",this.xialuo);
            this.q = 1;
            this.t.stop();
         }
 }

 sy(param1){
if(this.dianji == 0)
         {
            this.dianji = 1;
            this.sound.gotoAndStop(2);
            this.channel.stop();
         }
         else if(this.dianji == 1)
         {
            this.dianji = 0;
            this.sound.gotoAndStop(1);
            this.channel = this.s.play(0,1000,null);
         }
 }

 xialuo(param1){
if(this.gk != 0)
         {
            this.bArray = new Array();
            this.cArray = new Array();
            this.dArray = new Array();
            this.bArray[0] = this.score;
            this.score_text.text = this.bArray.join();
            this.cArray[0] = this.life;
            this.life_text.text = this.cArray.join();
            this.cArray[0] = this.guo;
            this.guo_text.text = this.cArray.join();
            this.guoguan();
            this.loss();
            if(this.ball===null&&!this.world.hasListener(this.stage,"enterFrame",this.xialuo)&&this.world.hasListener(this.stage,"enterFrame",this.ks)){this.world.scriptAborts.push({kind:"source-transition-null-ball",frame:this.world.frame,gk:this.gk});return;}
         }
         if(this.gk == 0 && this._d == 0)
         {
            if(this.suiji == 0)
            {
               this.t1.visible = true;
               this.t2.visible = false;
               this.t3.visible = false;
               this.t4.visible = false;
            }
            else if(this.suiji == 1)
            {
               this.t1.visible = false;
               this.t2.visible = true;
               this.t3.visible = false;
               this.t4.visible = false;
            }
            else if(this.suiji == 2)
            {
               this.t1.visible = false;
               this.t2.visible = false;
               this.t3.visible = true;
               this.t4.visible = false;
            }
            else if(this.suiji == 3)
            {
               this.t1.visible = false;
               this.t2.visible = false;
               this.t3.visible = false;
               this.t4.visible = true;
            }
            this.ball_go.ball_in.gotoAndStop(this.ball.num);
            if(this.suiji == 0)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
               }
            }
            else if(this.suiji == 1)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
               }
            }
            else if(this.suiji == 2)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
               }
            }
            else if(this.suiji == 3)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
               }
            }
            if(this.ball.pendi == true && this.ball.vx == 0)
            {
               this.ball.visible = false;
               this.t1.visible = false;
               this.t2.visible = false;
               this.t3.visible = false;
               this.t4.visible = false;
               this.chushi();
            }
         }
         else if(this.gk == 1 || this.gk == 2)
         {
            this.ball_go.ball_in.gotoAndStop(this.ball.num);
            if(this.suiji == 0)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 1)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 2)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 3)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
            }
            if(this.ply.mb == 5 && this.ply.mc.currentFrame == 15 && this.guo != 0 && this.life != 0 && this.i != 0)
            {
               if(this.ball.pendi != true)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               --this.guo;
            }
            if(this.ball.pendi == true && this.ball.vx == 0)
            {
               this.ball.visible = false;
               this.chushi();
            }
         }
         else if(this.gk == 3 || this.gk == 4)
         {
            this.ball_go.ball_in.gotoAndStop(this.ball.num);
            this.ball_go1.ball_in.gotoAndStop(this.ball1.num);
            if(this.suiji == 0)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 1)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 2)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 3)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 3 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 4 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
            }
            if(this.ball.pendi == true && this.ball.vx == 0)
            {
               this.ball.visible = false;
            }
            if(this.ball1.pendi == true && this.ball1.vx == 0)
            {
               this.ball1.visible = false;
               this.chushi();
            }
            if(this.ply.mb == 5 && this.ply.mc.currentFrame == 15 && this.guo != 0 && this.life != 0 && this.i != 0)
            {
               if(this.ball.pendi == true && this.ball1.pendi != true)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball1.pendi == true && this.ball.pendi != true)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.pendi == false && this.ball.pendi == false)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.score += 2;
               }
               --this.guo;
            }
         }
         else if(this.gk == 5 || this.gk == 6 || this.gk == 7)
         {
            this.ball_go.ball_in.gotoAndStop(this.ball.num);
            this.ball_go1.ball_in.gotoAndStop(this.ball1.num);
            this.ball_go2.ball_in.gotoAndStop(this.ball2.num);
            if(this.suiji == 0)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 1)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 1 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 2)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 3)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
            }
            if(this.ball.pendi == true && this.ball.vx == 0)
            {
               this.ball.visible = false;
            }
            if(this.ball1.pendi == true && this.ball1.vx == 0)
            {
               this.ball1.visible = false;
            }
            if(this.ball2.pendi == true && this.ball1.vx == 0)
            {
               this.ball2.visible = false;
               this.chushi();
            }
            if(this.ply.mb == 5 && this.ply.mc.currentFrame == 15 && this.guo != 0 && this.life != 0 && this.i != 0)
            {
               if(this.ball.pendi == false && this.ball1.pendi == false && this.ball2.pendi == false)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.score += 3;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == false && this.ball2.pendi == false)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == true && this.ball2.pendi == false)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == false && this.ball2.pendi == true)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == true && this.ball2.pendi == true)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == true && this.ball2.pendi == false)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == false && this.ball2.pendi == true)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               --this.guo;
            }
         }
         else if(this.gk == 8 || this.gk == 9 || this.gk == 10)
         {
            this.ball_go.ball_in.gotoAndStop(this.ball.num);
            this.ball_go1.ball_in.gotoAndStop(this.ball1.num);
            this.ball_go2.ball_in.gotoAndStop(this.ball2.num);
            this.ball_go3.ball_in.gotoAndStop(this.ball3.num);
            if(this.suiji == 0)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
               else if(this.ball3.hitTestObject(this.ball_go3) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 1)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
               else if(this.ball3.hitTestObject(this.ball_go3) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 2)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
               else if(this.ball3.hitTestObject(this.ball_go3) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  ++this.score;
               }
            }
            else if(this.suiji == 3)
            {
               if(this.ball.hitTestObject(this.ball_go) && this.ply.mb == 4 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               else if(this.ball1.hitTestObject(this.ball_go1) && this.ply.mb == 3 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball2.hitTestObject(this.ball_go2) && this.ply.mb == 2 && this.ply.mc.currentFrame == 5)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
               else if(this.ball3.hitTestObject(this.ball_go3) && this.ply.mb == 1 && this.ply.mc.currentFrame == 6)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  ++this.score;
               }
            }
            if(this.ball.pendi == true && this.ball.vx == 0)
            {
               this.ball.visible = false;
            }
            if(this.ball1.pendi == true && this.ball1.vx == 0)
            {
               this.ball1.visible = false;
            }
            if(this.ball2.pendi == true && this.ball1.vx == 0)
            {
               this.ball2.visible = false;
            }
            if(this.ball3.pendi == true && this.ball1.vx == 0)
            {
               this.ball3.visible = false;
               this.chushi();
            }
            if(this.ply.mb == 5 && this.ply.mc.currentFrame == 15 && this.guo != 0 && this.life != 0 && this.i != 0)
            {
               if(this.ball.pendi == false && this.ball1.pendi == false && this.ball2.pendi == false && this.ball3.pendi == false)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.score += 4;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == false && this.ball2.pendi == false && this.ball3.pendi == false)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.score += 3;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == true && this.ball2.pendi == false && this.ball3.pendi == false)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.score += 3;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == false && this.ball2.pendi == true && this.ball3.pendi == false)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.score += 3;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == false && this.ball2.pendi == false && this.ball3.pendi == true)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.score += 3;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == true && this.ball2.pendi == false && this.ball3.pendi == false)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == false && this.ball2.pendi == true && this.ball3.pendi == false)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == false && this.ball2.pendi == false && this.ball3.pendi == true)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == true && this.ball2.pendi == true && this.ball3.pendi == false)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == true && this.ball2.pendi == false && this.ball3.pendi == true)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == false && this.ball2.pendi == true && this.ball3.pendi == true)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  this.score += 2;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == true && this.ball2.pendi == true && this.ball3.pendi == false)
               {
                  this.ball_go3.gotoAndPlay(2);
                  this.ball3.visible = false;
                  ++this.score;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == true && this.ball2.pendi == false && this.ball3.pendi == true)
               {
                  this.ball_go2.gotoAndPlay(2);
                  this.ball2.visible = false;
                  ++this.score;
               }
               else if(this.ball.pendi == true && this.ball1.pendi == false && this.ball2.pendi == true && this.ball3.pendi == true)
               {
                  this.ball_go1.gotoAndPlay(2);
                  this.ball1.visible = false;
                  ++this.score;
               }
               else if(this.ball.pendi == false && this.ball1.pendi == true && this.ball2.pendi == true && this.ball3.pendi == true)
               {
                  this.ball_go.gotoAndPlay(2);
                  this.ball.visible = false;
                  ++this.score;
               }
               --this.guo;
            }
         }
 }

 frame1(){
this.stop();
 }

 Star(param1){
this.lx.visible = false;
         this.help.visible = false;
         this.fh.visible = false;
         this.star.visible = false;
         this.lxc.visible = false;
         this.rw.visible = false;
         this.t1.visible = false;
         this.t2.visible = false;
         this.t3.visible = false;
         this.t4.visible = false;
         this.btn.visible = false;
         this.gk = 1;
         this.init();
 }

 cx1(param1){
this.sl.visible = false;
         this.xb = 2;
         if(this.gk == 0)
         {
            this.rw.visible = false;
            this.lx.visible = false;
            this.fh.visible = false;
            this.star.visible = false;
         }
         this.stage.focus = this.stage;
         this.gk = 1;
         this.init();
 }

 onKeyup(param1){
param1.keyCode = 0;
         this.ply.keyNum = param1.keyCode;
 }

 onKeydown(param1){
this.ply.keyNum = param1.keyCode;
 }

 JX1(param1){
this.end.JX = true;
         this.end.visible = false;
         if(this.gk == 0)
         {
            this.rw.visible = false;
            this.lx.visible = false;
            this.fh.visible = false;
            this.star.visible = false;
         }
         this.stage.focus = this.stage;
         this.gk = 1;
         this.init();
 }

 time(){
if(this.gk == 0)
         {
            this.i = 5;
            this.gotoAndStop("L0");
         }
         else if(this.gk == 1)
         {
            this.i = 10;
            this.gotoAndStop("L1");
         }
         else if(this.gk == 2)
         {
            this.i = 12;
            this.gotoAndStop("L2");
         }
         else if(this.gk == 3)
         {
            this.i = 15;
            this.gotoAndStop("L3");
         }
         else if(this.gk == 4)
         {
            this.i = 18;
            this.gotoAndStop("L4");
         }
         else if(this.gk == 5)
         {
            this.i = 20;
            this.gotoAndStop("L5");
         }
         else if(this.gk == 6)
         {
            this.i = 25;
            this.gotoAndStop("L6");
         }
         else if(this.gk == 7)
         {
            this.i = 30;
            this.gotoAndStop("L7");
         }
         else if(this.gk == 8)
         {
            this.i = 35;
            this.gotoAndStop("L8");
         }
         else if(this.gk == 9)
         {
            this.i = 40;
            this.gotoAndStop("L9");
         }
         else if(this.gk == 10)
         {
            this.i = 50;
            this.gotoAndStop("L10");
         }
 }

 renwu(){
this.ply = new player(this.world);
         this.ply.x = 440;
         this.ply.y = 295;
         this.addChild(this.ply);
         if(this.jx == 0 && this.level == 3 && this.sex == 103)
         {
            this.ply.gotoAndStop(1);
         }
         else if(this.jx == 1 && this.level == 3 && this.sex == 103)
         {
            this.ply.gotoAndStop(9);
         }
         if(this.jx == 0 && this.level == 3 && this.sex == 102)
         {
            this.ply.gotoAndStop(11);
         }
         else if(this.jx == 1 && this.level == 3 && this.sex == 102)
         {
            this.ply.gotoAndStop(19);
         }
         if(this.jx == 0 && this.level == 1 && this.sex == 103)
         {
            this.ply.gotoAndStop(21);
         }
         else if(this.jx == 1 && this.level == 1 && this.sex == 103)
         {
            this.ply.gotoAndStop(29);
         }
         if(this.jx == 0 && this.level == 1 && this.sex == 102)
         {
            this.ply.gotoAndStop(31);
         }
         else if(this.jx == 1 && this.level == 1 && this.sex == 102)
         {
            this.ply.gotoAndStop(39);
         }
         if(this.jx == 0 && this.level == 2 && this.sex == 103)
         {
            this.ply.gotoAndStop(41);
         }
         else if(this.jx == 1 && this.level == 2 && this.sex == 103)
         {
            this.ply.gotoAndStop(49);
         }
         if(this.jx == 0 && this.level == 2 && this.sex == 102)
         {
            this.ply.gotoAndStop(51);
         }
         else if(this.jx == 1 && this.level == 2 && this.sex == 102)
         {
            this.ply.gotoAndStop(59);
         }
 }

 OVER(param1){
this._FC.gotoAndStop(1);
 }

 Wb(param1){
var _loc2_ = null;
         --this.i;
         _loc2_ = new Array();
         _loc2_[0] = this.i;
         this.time_text.text = _loc2_.join();
         if(this.i == 0)
         {
            this.stage.removeEventListener("keyDown",this.onKeydown);
            this.stage.removeEventListener("keyUp",this.onKeyup);
            this.t.stop();
         }
 }

 init(){
this.world.trace(this.gk);
         this.time();
         this.renwu();
         this.xb = 0;
         this.life = 5;
         this.js.visible = false;
         this.Win_move = new win_move(this.world);
         this.Win_move.x = 400;
         this.Win_move.y = 200;
         this.addChild(this.Win_move);
         this.st = new Start(this.world);
         this.st.x = 400;
         this.st.y = 150;
         this.addChild(this.st);
         this.end = new End(this.world);
         this.end.x = 200;
         this.end.y = 170;
         this.addChildAt(this.end,30);
         this.stage.addEventListener("enterFrame",this.ks);
 }

 loss(){
if(this.life == 0)
         {
            this.stage.removeEventListener("keyDown",this.onKeydown);
            this.stage.removeEventListener("keyUp",this.onKeyup);
            this.t.stop();
            if(this.gk == 1 || this.gk == 2)
            {
               if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 8)
               {
                  this.ply.gotoAndStop(8);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 18)
               {
                  this.ply.gotoAndStop(18);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 28)
               {
                  this.ply.gotoAndStop(28);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 38)
               {
                  this.ply.gotoAndStop(38);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 48)
               {
                  this.ply.gotoAndStop(48);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 58)
               {
                  this.ply.gotoAndStop(58);
               }
               else
               {
                  this.ply.mc.play();
               }
               this.end.play();
               this.ball.visible = false;
               this.ball_go.visible = false;
               if(this.end.key == 1)
               {
                  this.end.stop();
                  this.ply.visible = false;
                  if(this.end.JX == true || this.xb == 1)
                  {
                     this.gk = 1;
                     this.jx = 1;
                     this.guo = 0;
                     this.score = 0;
                     this.removeChild(this.ball);
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
            }
            else if(this.gk == 3 || this.gk == 4)
            {
               if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 8)
               {
                  this.ply.gotoAndStop(8);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 18)
               {
                  this.ply.gotoAndStop(18);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 28)
               {
                  this.ply.gotoAndStop(28);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 38)
               {
                  this.ply.gotoAndStop(38);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 48)
               {
                  this.ply.gotoAndStop(48);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 58)
               {
                  this.ply.gotoAndStop(58);
               }
               else
               {
                  this.ply.mc.play();
               }
               this.end.play();
               this.ball.visible = false;
               this.ball_go.visible = false;
               this.ball1.visible = false;
               this.ball_go1.visible = false;
               if(this.end.key == 1)
               {
                  this.end.stop();
                  this.ply.visible = false;
                  if(this.end.JX == true || this.xb == 1)
                  {
                     this.jx = 1;
                     this.guo = 0;
                     this.score = 0;
                     this.gk = 1;
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.removeChild(this.ball);
                     this.removeChild(this.ball1);
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
            }
            else if(this.gk == 5 || this.gk == 6 || this.gk == 7)
            {
               if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 8)
               {
                  this.ply.gotoAndStop(8);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 18)
               {
                  this.ply.gotoAndStop(18);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 28)
               {
                  this.ply.gotoAndStop(28);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 38)
               {
                  this.ply.gotoAndStop(38);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 48)
               {
                  this.ply.gotoAndStop(48);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 58)
               {
                  this.ply.gotoAndStop(58);
               }
               else
               {
                  this.ply.mc.play();
               }
               this.end.play();
               this.ball.visible = false;
               this.ball_go.visible = false;
               this.ball1.visible = false;
               this.ball_go1.visible = false;
               this.ball2.visible = false;
               this.ball_go2.visible = false;
               if(this.end.key == 1)
               {
                  this.end.stop();
                  this.ply.visible = false;
                  if(this.end.JX == true || this.xb == 1)
                  {
                     this.jx = 1;
                     this.guo = 0;
                     this.score = 0;
                     this.gk = 1;
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
            }
            else if(this.gk == 8 || this.gk == 9 || this.gk == 10)
            {
               if(this.level == 3 && this.sex == 103 && this.ply.currentFrame != 8)
               {
                  this.ply.gotoAndStop(8);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 3 && this.sex == 102 && this.ply.currentFrame != 18)
               {
                  this.ply.gotoAndStop(18);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 103 && this.ply.currentFrame != 28)
               {
                  this.ply.gotoAndStop(28);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 1 && this.sex == 102 && this.ply.currentFrame != 38)
               {
                  this.ply.gotoAndStop(38);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 103 && this.ply.currentFrame != 48)
               {
                  this.ply.gotoAndStop(48);
               }
               else
               {
                  this.ply.mc.play();
               }
               if(this.level == 2 && this.sex == 102 && this.ply.currentFrame != 58)
               {
                  this.ply.gotoAndStop(58);
               }
               else
               {
                  this.ply.mc.play();
               }
               this.end.play();
               this.ball.visible = false;
               this.ball_go.visible = false;
               this.ball1.visible = false;
               this.ball_go1.visible = false;
               this.ball2.visible = false;
               this.ball_go2.visible = false;
               this.ball3.visible = false;
               this.ball_go3.visible = false;
               if(this.end.key == 1)
               {
                  this.end.stop();
                  this.ply.visible = false;
                  if(this.end.JX == true || this.xb == 1)
                  {
                     this.jx = 1;
                     this.guo = 0;
                     this.score = 0;
                     this.gk = 1;
                     this.removeChild(this.ply);
                     this.ply = null;
                     this.removeChild(this.ball);
                     this.ball = null;
                     this.removeChild(this.ball1);
                     this.ball1 = null;
                     this.removeChild(this.ball2);
                     this.ball2 = null;
                     this.removeChild(this.ball3);
                     this.ball3 = null;
                     this.stage.removeEventListener("enterFrame",this.xialuo);
                  }
               }
            }
         }
 }

 OUT(param1){
this._FC.gotoAndStop(2);
 }

 yy(){
if(this.life == 0)
         {
            this.js.visible = true;
            this.js._txt2.htmlText = "你获得了" + this.gk * 100 + "分，要加油哦~\n更多游戏请登录QQ宠物官网.";
            this.js.jx_btn.addEventListener("click",this.JX1);
            this.js.fq_btn.addEventListener("click",this.quit1);
         }
         else if(this.life != 0)
         {
            this.sl._txt2.htmlText = "你获得了" + this.gk * 100 + "分，要加油哦~\n更多游戏请登录QQ宠物官网.";
            this.sl.cx_btn.addEventListener("click",this.cx1);
            this.sl.fh.addEventListener("click",this.quit1);
         }
 }

 ks(param1){
this.quit.enabled = false;
         if(this.gk != 0)
         {
            this.bArray = new Array();
            this.cArray = new Array();
            this.dArray = new Array();
            this.bArray[0] = this.score;
            this.score_text.text = this.bArray.join();
            this.cArray[0] = this.life;
            this.life_text.text = this.cArray.join();
            this.cArray[0] = this.guo;
            this.guo_text.text = this.cArray.join();
            if(this.gk == 1)
            {
               this.time_text.text = "10";
            }
            else if(this.gk == 2)
            {
               this.time_text.text = "12";
            }
            else if(this.gk == 3)
            {
               this.time_text.text = "15";
            }
            else if(this.gk == 4)
            {
               this.time_text.text = "18";
            }
            else if(this.gk == 5)
            {
               this.time_text.text = "20";
            }
            else if(this.gk == 6)
            {
               this.time_text.text = "25";
            }
            else if(this.gk == 7)
            {
               this.time_text.text = "30";
            }
            else if(this.gk == 8)
            {
               this.time_text.text = "35";
            }
            else if(this.gk == 9)
            {
               this.time_text.text = "40";
            }
            else if(this.gk == 10)
            {
               this.time_text.text = "50";
            }
            this.guoguan();
            this.loss();
         }
         if(this.st.movekey == 1)
         {
            this.chushi();
            this.quit.enabled = true;
            if(this.gk == 0)
            {
               this._d = 0;
               this.btn.visible = true;
            }
            else if(this.gk != 0)
            {
               this.t = new NativeTimer(this.world,1000,80);
               this.t.addEventListener("timer",this.Wb);
               this.t.start();
            }
            this.stage.removeEventListener("enterFrame",this.ks);
            this.stage.addEventListener("keyDown",this.onKeydown);
            this.stage.addEventListener("keyUp",this.onKeyup);
            this.stage.addEventListener("enterFrame",this.xialuo);
         }
 }

 Help(param1){
this.help_mc.gotoAndStop(2);
 }

 Lx(param1){
this.gk = 0;
         this.lxc.visible = true;
         this.rw.visible = false;
         this.time_text.text = "?";
         this._LX = 1;
         this.help.visible = false;
         this.lx.visible = false;
         this.fh.visible = false;
         this.star.visible = false;
         this.init();
         this.world.trace("a" + this.sex);
         this.world.trace("b" + this.level);
 }

 tiaozhan(param1){
this._LX = 0;
         this.btn.visible = false;
         this.t1.visible = false;
         this.t2.visible = false;
         this.t3.visible = false;
         this.t4.visible = false;
         this.gk = 1;
         this.removeChild(this.ply);
         this.ply = null;
         this.removeChild(this.ball);
         this.ball = null;
         this.stage.removeEventListener("enterFrame",this.xialuo);
         this.stage.removeEventListener("keyDown",this.onKeydown);
         this.stage.removeEventListener("keyUp",this.onKeyup);
         this.time_text.text = "10";
         this.init();
 }

 quit1(param1){
var _loc2_ = null;
         this.channel.stop();
         _loc2_ = new SourceURL("http://pet.qq.com/");
         this.world.navigate(_loc2_);
 }

}

class LinkID extends OriginalSound{constructor(world){super(world,"1");}}

export class Start extends Clip{
 constructor(world){
  super(world,"29");
  this.deferConstruct(()=>{

  this.intSlot("movekey");

  this.init=this.init.bind(this);

  this.frame55=this.frame55.bind(this);

  this.Move=this.Move.bind(this);

this.addFrameScript(54,this.frame55);
         this.init();
  });
 }

 init(){
this.addEventListener("enterFrame",this.Move);
 }

 frame55(){
this.stop();
 }

 Move(param1){
if(this.currentFrame == 55)
         {
            this.movekey = 1;
         }
 }

}

class a1 extends OriginalSound{constructor(world){super(world,"46");}}

export class GMTQD_182 extends Clip{
 constructor(world){
  super(world,"2217");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class GMTQD_183 extends Clip{
 constructor(world){
  super(world,"2259");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class GMTQD_185 extends Clip{
 constructor(world){
  super(world,"2315");
  this.deferConstruct(()=>{

  this.frame32=this.frame32.bind(this);

this.addFrameScript(31,this.frame32);
  });
 }

 frame32(){
this.stop();
 }

}

export class GMTQD_186 extends Clip{
 constructor(world){
  super(world,"2422");
  this.deferConstruct(()=>{

  this.frame91=this.frame91.bind(this);

this.addFrameScript(90,this.frame91);
  });
 }

 frame91(){
this.stop();
 }

}

export class GMTQD_187 extends Clip{
 constructor(world){
  super(world,"2468");
  this.deferConstruct(()=>{

  this.frame51=this.frame51.bind(this);

this.addFrameScript(50,this.frame51);
  });
 }

 frame51(){
this.stop();
 }

}

export class GMTQD_189 extends Clip{
 constructor(world){
  super(world,"2575");
  this.deferConstruct(()=>{

  this.frame52=this.frame52.bind(this);

this.addFrameScript(51,this.frame52);
  });
 }

 frame52(){
this.stop();
 }

}

export class GMTQD_220 extends Clip{
 constructor(world){
  super(world,"2735");
  this.deferConstruct(()=>{

  this.frame100=this.frame100.bind(this);

this.addFrameScript(99,this.frame100);
  });
 }

 frame100(){
this.gotoAndPlay(71);
 }

}

export class Timeline_112 extends Clip{
 constructor(world){
  super(world,"1307");
  this.deferConstruct(()=>{

  this.frame100=this.frame100.bind(this);

this.addFrameScript(99,this.frame100);
  });
 }

 frame100(){
this.gotoAndPlay(71);
 }

}

export class Timeline_14 extends Clip{
 constructor(world){
  super(world,"3320");
  this.deferConstruct(()=>{

  this.jx_btn??=null;

  this._txt2??=null;

  this.fq_btn??=null;


  });
 }

}

export class Timeline_18 extends Clip{
 constructor(world){
  super(world,"3323");
  this.deferConstruct(()=>{

  this.frame1=this.frame1.bind(this);

this.addFrameScript(0,this.frame1);
  });
 }

 frame1(){
this.stop();
 }

}

export class Timeline_20 extends Clip{
 constructor(world){
  super(world,"3328");
  this.deferConstruct(()=>{

  this.cx_btn??=null;

  this._txt2??=null;

  this.fh??=null;


  });
 }

}

export class Timeline_22 extends Clip{
 constructor(world){
  super(world,"3338");
  this.deferConstruct(()=>{

  this.Close??=null;

  this.frame1=this.frame1.bind(this);

  this.bb=this.bb.bind(this);

  this.frame2=this.frame2.bind(this);

this.addFrameScript(0,this.frame1,1,this.frame2);
  });
 }

 frame1(){
this.stop();
 }

 bb(param1){
this.gotoAndStop(1);
 }

 frame2(){
this.stop();
         this.Close.addEventListener("click",this.bb);
 }

}

export class bar_284 extends Clip{
 constructor(world){
  super(world,"6");
  this.deferConstruct(()=>{

  this.frame100=this.frame100.bind(this);

this.addFrameScript(99,this.frame100);
  });
 }

 frame100(){
this["parent"].init();
 }

}

export class soundOnOffBtn_13 extends Clip{
 constructor(world){
  super(world,"3307");
  this.deferConstruct(()=>{

  this.frame1=this.frame1.bind(this);

this.addFrameScript(0,this.frame1);
  });
 }

 frame1(){
this.stop();
 }

}

export class sprite235_278 extends Clip{
 constructor(world){
  super(world,"44");
  this.deferConstruct(()=>{

  this.frame1=this.frame1.bind(this);

this.addFrameScript(0,this.frame1);
  });
 }

 frame1(){
this.stop();
 }

}

export class sprite244_11 extends Clip{
 constructor(world){
  super(world,"3299");
  this.deferConstruct(()=>{

  this.frame1=this.frame1.bind(this);

this.addFrameScript(0,this.frame1);
  });
 }

 frame1(){
this.stop();
 }

}

export class SourceClip387 extends Clip{
 constructor(world){
  super(world,"387");
  this.deferConstruct(()=>{

  this.frame91=this.frame91.bind(this);

this.addFrameScript(90,this.frame91);
  });
 }

 frame91(){
this.stop();
 }

}

export class SourceClip842 extends Clip{
 constructor(world){
  super(world,"842");
  this.deferConstruct(()=>{

  this.mc??=null;

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip897 extends Clip{
 constructor(world){
  super(world,"897");
  this.deferConstruct(()=>{

  this.mc??=null;

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip958 extends Clip{
 constructor(world){
  super(world,"958");
  this.deferConstruct(()=>{

  this.mc??=null;

  this.frame32=this.frame32.bind(this);

this.addFrameScript(31,this.frame32);
  });
 }

 frame32(){
this.stop();
 }

}

export class SourceClip1077 extends Clip{
 constructor(world){
  super(world,"1077");
  this.deferConstruct(()=>{

  this.frame91=this.frame91.bind(this);

this.addFrameScript(90,this.frame91);
  });
 }

 frame91(){
this.stop();
 }

}

export class SourceClip1118 extends Clip{
 constructor(world){
  super(world,"1118");
  this.deferConstruct(()=>{

  this.frame51=this.frame51.bind(this);

this.addFrameScript(50,this.frame51);
  });
 }

 frame51(){
this.stop();
 }

}

export class SourceClip1216 extends Clip{
 constructor(world){
  super(world,"1216");
  this.deferConstruct(()=>{

  this.mc??=null;

  this.frame52=this.frame52.bind(this);

this.addFrameScript(51,this.frame52);
  });
 }

 frame52(){
this.stop();
 }

}

export class SourceClip149 extends Clip{
 constructor(world){
  super(world,"149");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip210 extends Clip{
 constructor(world){
  super(world,"210");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip271 extends Clip{
 constructor(world){
  super(world,"271");
  this.deferConstruct(()=>{

  this.frame32=this.frame32.bind(this);

this.addFrameScript(31,this.frame32);
  });
 }

 frame32(){
this.stop();
 }

}

export class SourceClip438 extends Clip{
 constructor(world){
  super(world,"438");
  this.deferConstruct(()=>{

  this.frame51=this.frame51.bind(this);

this.addFrameScript(50,this.frame51);
  });
 }

 frame51(){
this.stop();
 }

}

export class SourceClip583 extends Clip{
 constructor(world){
  super(world,"583");
  this.deferConstruct(()=>{

  this.frame52=this.frame52.bind(this);

this.addFrameScript(51,this.frame52);
  });
 }

 frame52(){
this.stop();
 }

}

export class SourceClip771 extends Clip{
 constructor(world){
  super(world,"771");
  this.deferConstruct(()=>{

  this.frame100=this.frame100.bind(this);

this.addFrameScript(99,this.frame100);
  });
 }

 frame100(){
this.gotoAndPlay(71);
 }

}

export class SourceClip1796 extends Clip{
 constructor(world){
  super(world,"1796");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip1839 extends Clip{
 constructor(world){
  super(world,"1839");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip1875 extends Clip{
 constructor(world){
  super(world,"1875");
  this.deferConstruct(()=>{

  this.frame32=this.frame32.bind(this);

this.addFrameScript(31,this.frame32);
  });
 }

 frame32(){
this.stop();
 }

}

export class SourceClip1911 extends Clip{
 constructor(world){
  super(world,"1911");
  this.deferConstruct(()=>{

  this.frame91=this.frame91.bind(this);

this.addFrameScript(90,this.frame91);
  });
 }

 frame91(){
this.stop();
 }

}

export class SourceClip1938 extends Clip{
 constructor(world){
  super(world,"1938");
  this.deferConstruct(()=>{

  this.frame51=this.frame51.bind(this);

this.addFrameScript(50,this.frame51);
  });
 }

 frame51(){
this.stop();
 }

}

export class SourceClip1996 extends Clip{
 constructor(world){
  super(world,"1996");
  this.deferConstruct(()=>{

  this.frame52=this.frame52.bind(this);

this.addFrameScript(51,this.frame52);
  });
 }

 frame52(){
this.stop();
 }

}

export class SourceClip2150 extends Clip{
 constructor(world){
  super(world,"2150");
  this.deferConstruct(()=>{

  this.frame100=this.frame100.bind(this);

this.addFrameScript(99,this.frame100);
  });
 }

 frame100(){
this.gotoAndPlay(71);
 }

}

export class SourceClip1372 extends Clip{
 constructor(world){
  super(world,"1372");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip1415 extends Clip{
 constructor(world){
  super(world,"1415");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip1453 extends Clip{
 constructor(world){
  super(world,"1453");
  this.deferConstruct(()=>{

  this.frame32=this.frame32.bind(this);

this.addFrameScript(31,this.frame32);
  });
 }

 frame32(){
this.stop();
 }

}

export class SourceClip1499 extends Clip{
 constructor(world){
  super(world,"1499");
  this.deferConstruct(()=>{

  this.frame91=this.frame91.bind(this);

this.addFrameScript(90,this.frame91);
  });
 }

 frame91(){
this.stop();
 }

}

export class SourceClip1528 extends Clip{
 constructor(world){
  super(world,"1528");
  this.deferConstruct(()=>{

  this.frame51=this.frame51.bind(this);

this.addFrameScript(50,this.frame51);
  });
 }

 frame51(){
this.stop();
 }

}

export class SourceClip1588 extends Clip{
 constructor(world){
  super(world,"1588");
  this.deferConstruct(()=>{

  this.frame52=this.frame52.bind(this);

this.addFrameScript(51,this.frame52);
  });
 }

 frame52(){
this.stop();
 }

}

export class SourceClip1743 extends Clip{
 constructor(world){
  super(world,"1743");
  this.deferConstruct(()=>{

  this.frame100=this.frame100.bind(this);

this.addFrameScript(99,this.frame100);
  });
 }

 frame100(){
this.gotoAndPlay(71);
 }

}

export class SourceClip2793 extends Clip{
 constructor(world){
  super(world,"2793");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip2832 extends Clip{
 constructor(world){
  super(world,"2832");
  this.deferConstruct(()=>{

  this.frame25=this.frame25.bind(this);

this.addFrameScript(24,this.frame25);
  });
 }

 frame25(){
this.stop();
 }

}

export class SourceClip2883 extends Clip{
 constructor(world){
  super(world,"2883");
  this.deferConstruct(()=>{

  this.frame32=this.frame32.bind(this);

this.addFrameScript(31,this.frame32);
  });
 }

 frame32(){
this.stop();
 }

}

export class SourceClip2969 extends Clip{
 constructor(world){
  super(world,"2969");
  this.deferConstruct(()=>{

  this.frame91=this.frame91.bind(this);

this.addFrameScript(90,this.frame91);
  });
 }

 frame91(){
this.stop();
 }

}

export class SourceClip3013 extends Clip{
 constructor(world){
  super(world,"3013");
  this.deferConstruct(()=>{

  this.frame51=this.frame51.bind(this);

this.addFrameScript(50,this.frame51);
  });
 }

 frame51(){
this.stop();
 }

}

export class SourceClip3115 extends Clip{
 constructor(world){
  super(world,"3115");
  this.deferConstruct(()=>{

  this.frame52=this.frame52.bind(this);

this.addFrameScript(51,this.frame52);
  });
 }

 frame52(){
this.stop();
 }

}

export class SourceClip3261 extends Clip{
 constructor(world){
  super(world,"3261");
  this.deferConstruct(()=>{

  this.frame100=this.frame100.bind(this);

this.addFrameScript(99,this.frame100);
  });
 }

 frame100(){
this.gotoAndPlay(71);
 }

}

export class loading extends Clip{
 constructor(world){
  super(world,"15");
  this.deferConstruct(()=>{

  this.bar??=null;

  this.init=this.init.bind(this);


  });
 }

 init(){
this.visible = false;
 }

}

export class player extends Clip{
 constructor(world){
  super(world,"3262");
  this.deferConstruct(()=>{

  this.intSlot("mb");

  this.mc??=null;

  this.intSlot("keyNum");

  this.init=this.init.bind(this);

  this.key=this.key.bind(this);

  this.frame1=this.frame1.bind(this);

this.addFrameScript(0,this.frame1);
         this.init();
  });
 }

 init(){
this.addEventListener("enterFrame",this.key);
 }

 key(param1){
if(this.parent===null){if(this.world.scriptAborts.length<100)this.world.scriptAborts.push({kind:"source-detached-actor-null-parent",frame:this.world.frame,owner:this.id});return;}
         if(this.parent["i"] == 0 || this.parent["life"] == 0 || this.parent["q"] == 1)
         {
            this.removeEventListener("enterFrame",this.key);
         }
         switch(this.keyNum)
         {
            case 68:
               this.mb = 1;
               if(this.parent["level"] == 3 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 3)
                  {
                     this.gotoAndStop(3);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 3 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 13)
                  {
                     this.gotoAndStop(13);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 1 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 23)
                  {
                     this.gotoAndStop(23);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 1 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 33)
                  {
                     this.gotoAndStop(33);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 2 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 43)
                  {
                     this.gotoAndStop(43);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 2 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 53)
                  {
                     this.gotoAndStop(53);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               break;
            case 70:
               this.mb = 2;
               if(this.parent["level"] == 3 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 2)
                  {
                     this.gotoAndStop(2);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 3 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 12)
                  {
                     this.gotoAndStop(12);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 1 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 22)
                  {
                     this.gotoAndStop(22);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 1 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 32)
                  {
                     this.gotoAndStop(32);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 2 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 42)
                  {
                     this.gotoAndStop(42);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 2 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 52)
                  {
                     this.gotoAndStop(52);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               break;
            case 74:
               this.mb = 3;
               if(this.parent["level"] == 3 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 4)
                  {
                     this.gotoAndStop(4);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 3 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 14)
                  {
                     this.gotoAndStop(14);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               if(this.parent["level"] == 1 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 24)
                  {
                     this.gotoAndStop(24);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 1 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 34)
                  {
                     this.gotoAndStop(34);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               if(this.parent["level"] == 2 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 44)
                  {
                     this.gotoAndStop(44);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 2 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 54)
                  {
                     this.gotoAndStop(54);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               break;
            case 75:
               this.mb = 4;
               if(this.parent["level"] == 3 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 5)
                  {
                     this.gotoAndStop(5);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 3 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 15)
                  {
                     this.gotoAndStop(15);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               if(this.parent["level"] == 1 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 25)
                  {
                     this.gotoAndStop(25);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 1 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 35)
                  {
                     this.gotoAndStop(35);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               if(this.parent["level"] == 2 && this.parent["sex"] == 103)
               {
                  if(this.currentFrame != 45)
                  {
                     this.gotoAndStop(45);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               else if(this.parent["level"] == 2 && this.parent["sex"] == 102)
               {
                  if(this.currentFrame != 55)
                  {
                     this.gotoAndStop(55);
                  }
                  else
                  {
                     this.mc.play();
                  }
               }
               break;
            case 32:
               if(this.parent["guo"] != 0)
               {
                  this.mb = 5;
                  if(this.parent["level"] == 3 && this.parent["sex"] == 103)
                  {
                     if(this.currentFrame != 6)
                     {
                        this.gotoAndStop(6);
                     }
                     else
                     {
                        this.mc.play();
                     }
                  }
                  else if(this.parent["level"] == 3 && this.parent["sex"] == 102)
                  {
                     if(this.currentFrame != 16)
                     {
                        this.gotoAndStop(16);
                     }
                     else
                     {
                        this.mc.play();
                     }
                  }
                  else if(this.parent["level"] == 1 && this.parent["sex"] == 103)
                  {
                     if(this.currentFrame != 26)
                     {
                        this.gotoAndStop(26);
                     }
                     else
                     {
                        this.mc.play();
                     }
                  }
                  else if(this.parent["level"] == 1 && this.parent["sex"] == 102)
                  {
                     if(this.currentFrame != 36)
                     {
                        this.gotoAndStop(36);
                     }
                     else
                     {
                        this.mc.play();
                     }
                  }
                  else if(this.parent["level"] == 2 && this.parent["sex"] == 103)
                  {
                     if(this.currentFrame != 46)
                     {
                        this.gotoAndStop(46);
                     }
                     else
                     {
                        this.mc.play();
                     }
                  }
                  else if(this.parent["level"] == 2 && this.parent["sex"] == 102)
                  {
                     if(this.currentFrame != 56)
                     {
                        this.gotoAndStop(56);
                     }
                     else
                     {
                        this.mc.play();
                     }
                  }
               }
         }
 }

 frame1(){
this.stop();
 }

}

export class win_move extends Clip{
 constructor(world){
  super(world,"33");
  this.deferConstruct(()=>{

  this.intSlot("movekey");

  this.frame72=this.frame72.bind(this);

  this.init=this.init.bind(this);

  this.frame1=this.frame1.bind(this);

  this.Move=this.Move.bind(this);

this.addFrameScript(0,this.frame1,71,this.frame72);
         this.init();
  });
 }

 frame72(){
this.stop();
 }

 init(){
this.movekey = 0;
         this.addEventListener("enterFrame",this.Move);
 }

 frame1(){
this.stop();
 }

 Move(param1){
if(this.currentFrame == 72)
         {
            this.movekey = 1;
         }
 }

}

export const sourceClasses={"55":Ball,"47":Ball_go,"17":End,"main":GameMenu,"29":Start,"2217":GMTQD_182,"2259":GMTQD_183,"2315":GMTQD_185,"2422":GMTQD_186,"2468":GMTQD_187,"2575":GMTQD_189,"2735":GMTQD_220,"1307":Timeline_112,"3320":Timeline_14,"3323":Timeline_18,"3328":Timeline_20,"3338":Timeline_22,"6":bar_284,"3307":soundOnOffBtn_13,"44":sprite235_278,"3299":sprite244_11,"387":SourceClip387,"842":SourceClip842,"897":SourceClip897,"958":SourceClip958,"1077":SourceClip1077,"1118":SourceClip1118,"1216":SourceClip1216,"149":SourceClip149,"210":SourceClip210,"271":SourceClip271,"438":SourceClip438,"583":SourceClip583,"771":SourceClip771,"1796":SourceClip1796,"1839":SourceClip1839,"1875":SourceClip1875,"1911":SourceClip1911,"1938":SourceClip1938,"1996":SourceClip1996,"2150":SourceClip2150,"1372":SourceClip1372,"1415":SourceClip1415,"1453":SourceClip1453,"1499":SourceClip1499,"1528":SourceClip1528,"1588":SourceClip1588,"1743":SourceClip1743,"2793":SourceClip2793,"2832":SourceClip2832,"2883":SourceClip2883,"2969":SourceClip2969,"3013":SourceClip3013,"3115":SourceClip3115,"3261":SourceClip3261,"15":loading,"3262":player,"33":win_move};
