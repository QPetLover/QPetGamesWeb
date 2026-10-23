txt = "你获得了第" + top + "名，要再来一盘么？";
ts = [0,100,80,60,40,20,0];
score += ts[top];
score >= 0 ? undefined : (score = 0);
txt2 = "本次您共获得" + score + "分";
a1.tabEnabled = false;
