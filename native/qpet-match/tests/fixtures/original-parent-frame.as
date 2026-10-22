function level_up()
{
   m_level++;
   m_mission = m_level * 2;
   m_mission_s = 0;
   init_pipe();
   init_point(m_level * 2);
   m_check();
   game_start = false;
   hide_pipe();
   levelup_mc.gotoAndStop(2);
}

function f_score()
{
   var _loc2_ = _root;
   if(now_score < m_score)
   {
      score_sound.start();
      now_score += 5;
   }
   m_score_str = String(now_score);
   if(m_score_str.length == 4)
   {
      m_score_str = "0" + m_score_str;
   }
   if(m_score_str.length == 3)
   {
      m_score_str = "00" + m_score_str;
   }
   if(m_score_str.length == 2)
   {
      m_score_str = "000" + m_score_str;
   }
   if(m_score_str.length == 1)
   {
      m_score_str = "0000" + m_score_str;
   }
   var _loc1_ = 1;
   while(_loc1_ < m_score_str.length + 1)
   {
      _loc2_["score" + _loc1_].gotoAndStop(int(m_score_str.substr(_loc1_ - 1,1)) + 1);
      _loc1_ = _loc1_ + 1;
   }
   if(m_level + 1 != level_mc._currentframe)
   {
      level_mc.gotoAndStop(m_level + 1);
   }
   m_score_str = String(m_mission);
   if(m_score_str.length == 1)
   {
      m_score_str = "0" + m_score_str;
   }
   _loc1_ = 1;
   while(_loc1_ < m_score_str.length + 1)
   {
      _loc2_["ms2_" + _loc1_].gotoAndStop(int(m_score_str.substr(_loc1_ - 1,1)) + 1);
      _loc1_ = _loc1_ + 1;
   }
   m_score_str = String(m_mission_s);
   if(m_score_str.length == 1)
   {
      m_score_str = "0" + m_score_str;
   }
   _loc1_ = 1;
   while(_loc1_ < m_score_str.length + 1)
   {
      _loc2_["ms1_" + _loc1_].gotoAndStop(int(m_score_str.substr(_loc1_ - 1,1)) + 1);
      _loc1_ = _loc1_ + 1;
   }
}

this.onEnterFrame = function()
{
   if(game_start == true)
   {
      if((getTimer() - effect_time) / 1000 > 7)
      {
         r_x = Math.floor(Math.random() * 6);
         r_y = Math.floor(Math.random() * 10);
         if(not_ready == false)
         {
            canvas_mc["pipe" + (r_y * 6 + r_x)].effect2_mc.gotoAndPlay(2);
         }
         effect_time = getTimer();
      }
      bb_time = b_time;
      b_time = (getTimer() - start_time) / 1000;
      if(not_ready == true)
      {
         start_time += 33;
      }
      got = Math.round(100 * b_time / level_time);
      time_bar.gotoAndStop(got);
      if(got == 100)
      {
         hide_pipe();
         game_start = false;
         game_over.gotoAndStop(2);
      }
      if(now_score == m_score && m_mission == m_mission_s && not_ready == false)
      {
         if(m_level == 5)
         {
            stopAllSounds();
            play();
         }
         else
         {
            level_time += 30;
            if(m_level == 3 || m_level == 4)
            {
               corn_plus5.gotoAndPlay(2);
            }
            level_up();
         }
      }
   }
   f_score();
};
