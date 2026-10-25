// Project-only deterministic input route. Reads production state and writes only
// the same logical mouse coordinate as the public client; no score/physics hacks.
export function aim(game) {
 const b=game.rules.ball;if(!b)return;
 const target=[...game.rules.stars.values()].filter(s=>!s.collected).sort((a,c)=>Math.hypot(a.x-b.x,a.y-b.y)-Math.hypot(c.x-b.x,c.y-b.y))[0]||{x:250,y:180};
 const px=b.x+b.vx,py=b.y+b.vy+.3,vx=Math.max(-12,Math.min(12,(target.x-px)*.3)),vy=Math.max(-12,Math.min(12,(target.y-py)*.3));
 let ax=vx-.9*b.vx,ay=vy-.9*(b.vy+.3),len=Math.hypot(ax,ay);if(len>9){ax*=9/len;ay*=9/len;len=9;}
 const dist=56-len/.18;game.point(px-(len?ax/len:0)*dist,py-(len?ay/len:1)*dist);
}
