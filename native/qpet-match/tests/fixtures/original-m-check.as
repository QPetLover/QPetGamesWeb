function m_check()
{
   var _loc1_ = this;
   if(m_Clear_Array == undefined)
   {
      not_ready = false;
   }
   ey = 0;
   while(ey < 10)
   {
      ex = 0;
      while(ex < 6)
      {
         canvas_mc["pipe" + (ey * 6 + ex)].obj.gotoAndStop(1);
         ex++;
      }
      ey++;
   }
   m_cy = cy;
   m_cx = 0;
   m_quit = true;
   b_pos = "";
   b_type = "";
   cy = 0;
   while(cy < 11)
   {
      while(m_quit)
      {
         m_name = m_Name_Array[m_cy][m_cx];
         m_type = m_Type_Array[m_cy][m_cx];
         if(m_Name_Array[m_cy][m_cx] == undefined)
         {
            m_quit = false;
         }
         else
         {
            if(m_type == 1)
            {
               if(m_cx == 0 && canvas_mc[m_name].obj._currentframe == 2)
               {
                  m_quit = false;
               }
               else if(m_cx == 0)
               {
                  m_Clear_Array.length = 0;
                  m_cx++;
                  b_type = 1;
                  b_pos = "left";
                  canvas_mc[m_name].obj.gotoAndStop(2);
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "left" && (b_type == 1 || b_type == 3 || b_type == 4))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cx++;
                  b_type = 1;
                  b_pos = "left";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "right" && (b_type == 1 || b_type == 5 || b_type == 6))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cx--;
                  b_type = 1;
                  b_pos = "right";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(1);
                  }
                  m_quit = false;
               }
            }
            else if(m_type == 2)
            {
               if(m_cx == 0 && canvas_mc[m_name].obj._currentframe == 2)
               {
                  m_quit = false;
               }
               else if(b_pos == "up" && (b_type == 2 || b_type == 4 || b_type == 5))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cy++;
                  b_type = 2;
                  b_pos = "up";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "down" && (b_type == 2 || b_type == 3 || b_type == 6))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cy--;
                  b_type = 2;
                  b_pos = "down";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(1);
                  }
                  m_quit = false;
               }
            }
            else if(m_type == 3)
            {
               if(m_cx == 0 && canvas_mc[m_name].obj._currentframe == 2)
               {
                  m_quit = false;
               }
               else if(b_pos == "up" && (b_type == 2 || b_type == 4 || b_type == 5))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cx++;
                  b_type = 3;
                  b_pos = "left";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "right" && (b_type == 1 || b_type == 5 || b_type == 6))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cy--;
                  b_type = 3;
                  b_pos = "down";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(1);
                  }
                  m_quit = false;
               }
            }
            else if(m_type == 4)
            {
               if(m_cx == 0 && canvas_mc[m_name].obj._currentframe == 2)
               {
                  m_quit = false;
               }
               else if(b_pos == "right" && (b_type == 1 || b_type == 5 || b_type == 6))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cy++;
                  b_type = 4;
                  b_pos = "up";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "down" && (b_type == 2 || b_type == 3 || b_type == 6))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cx++;
                  b_type = 4;
                  b_pos = "left";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(1);
                  }
                  m_quit = false;
               }
            }
            else if(m_type == 5)
            {
               if(m_cx == 0 && canvas_mc[m_name].obj._currentframe == 2)
               {
                  m_quit = false;
               }
               else if(m_cx == 0)
               {
                  m_Clear_Array.length = 0;
                  m_cy++;
                  b_type = 5;
                  b_pos = "up";
                  canvas_mc[m_name].obj.gotoAndStop(2);
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "left" && (b_type == 1 || b_type == 3 || b_type == 4))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cy++;
                  b_type = 5;
                  b_pos = "up";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "down" && (b_type == 2 || b_type == 3 || b_type == 6))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cx--;
                  b_type = 5;
                  b_pos = "right";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(1);
                  }
                  m_quit = false;
               }
            }
            else if(m_type == 6)
            {
               if(m_cx == 0 && canvas_mc[m_name].obj._currentframe == 2)
               {
                  m_quit = false;
               }
               else if(m_cx == 0)
               {
                  m_Clear_Array.length = 0;
                  m_cy--;
                  b_type = 6;
                  b_pos = "down";
                  canvas_mc[m_name].obj.gotoAndStop(2);
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "left" && (b_type == 1 || b_type == 3 || b_type == 4))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cy--;
                  b_type = 6;
                  b_pos = "down";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else if(b_pos == "up" && (b_type == 2 || b_type == 4 || b_type == 5))
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(2);
                  }
                  m_cx--;
                  b_type = 6;
                  b_pos = "right";
                  if(m_name != undefined)
                  {
                     ca = m_Clear_Array.length;
                     m_Clear_Array[ca] = m_name;
                  }
               }
               else
               {
                  if(canvas_mc[m_name].obj._currentframe == 1)
                  {
                     canvas_mc[m_name].obj.gotoAndStop(1);
                  }
                  m_quit = false;
               }
            }
            if(m_cx == 6)
            {
               m_quit = false;
            }
         }
      }
      if(m_cx == 6 && (b_type == 1 || b_type == 3 || b_type == 4))
      {
         cl = m_Clear_Array.length;
         if(m_Clear_Array != undefined)
         {
            not_ready = true;
         }
         i = 0;
         while(i <= cl)
         {
            d_name = m_Clear_Array[i];
            db_name = m_Clear_Array[i + 1];
            canvas_mc[d_name].m_click = false;
            canvas_mc[d_name].next_pipe = db_name;
            canvas_mc[d_name].obj.gotoAndStop(3);
            canvas_mc[d_name].effect2_mc.gotoAndStop(1);
            hart_mc.m_Clear_Array[i] = m_Clear_Array[i];
            if(i == 0)
            {
               hart_mc._x = canvas_mc._x + canvas_mc[d_name]._x - 34.2;
               hart_mc._y = canvas_mc._y + canvas_mc[d_name]._y;
            }
            if(i == cl)
            {
               hart_mc._visible = true;
               hart_mc.move_now = true;
            }
            i++;
         }
         st_name = m_Clear_Array[0];
         ed_name = m_Clear_Array[m_Clear_Array.length - 1];
         st_num = canvas_mc[st_name].fy;
         ed_num = canvas_mc[ed_name].fy;
         if(_loc1_["start" + st_num]._currentframe == 2 && _loc1_["end" + ed_num]._currentframe == 2)
         {
            if(line_sound._currentframe == 1)
            {
               line_sound.gotoAndPlay(2);
            }
            m_perfect = true;
            m_score += m_Clear_Array.length * 10;
            m_mission_s++;
            _loc1_["start" + st_num].gotoAndStop(1);
            _loc1_["end" + ed_num].gotoAndStop(1);
         }
      }
      m_Clear_Array.length = 0;
      delete m_Clear_Array;
      m_Clear_Array = new Array();
      m_cy = cy;
      m_cx = 0;
      m_quit = true;
      b_pos = "";
      b_type = "";
      cy++;
   }
}
