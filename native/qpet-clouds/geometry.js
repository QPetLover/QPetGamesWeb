// Fixed reference render::Matrix f32 arithmetic with ties-to-even twips.
// Script x/y writes remain a separate toward-zero setter in rules.js.
const f=Math.fround,sum=(a,b,c,d)=>f(f(f(a)*f(b))+f(f(c)*f(d)));
export const identity=Object.freeze([1,0,0,1,0,0]);
export function roundTwips(v){v=f(v);const n=Math.floor(v),fraction=v-n;return fraction<.5?n:fraction>.5?n+1:n%2===0?n:n+1;}
export function multiply(a,b){return[sum(a[0],b[0],a[2],b[1]),sum(a[1],b[0],a[3],b[1]),sum(a[0],b[2],a[2],b[3]),sum(a[1],b[2],a[3],b[3]),roundTwips(sum(a[0],b[4],a[2],b[5]))+a[4],roundTwips(sum(a[1],b[4],a[3],b[5]))+a[5]];}
export function transformBox(b,m){if(!b)return null;const p=[];for(const x of[b[0],b[2]])for(const y of[b[1],b[3]])p.push([roundTwips(sum(m[0],x,m[2],y))+m[4],roundTwips(sum(m[1],x,m[3],y))+m[5]]);return[Math.min(...p.map(p=>p[0])),Math.min(...p.map(p=>p[1])),Math.max(...p.map(p=>p[0])),Math.max(...p.map(p=>p[1]))];}
export const contains=(b,x,y)=>!!b&&x>=b[0]&&x<=b[2]&&y>=b[1]&&y<=b[3];
export const overlaps=(a,b)=>!!a&&!!b&&a[0]<=b[2]&&a[2]>=b[0]&&a[1]<=b[3]&&a[3]>=b[1];
