/* Native source-derived chapter 0 callbacks. Ordinary JavaScript only.
 * Fixed archived original SWF6; source hashes/transform record live in the project. */
export function c0v0a0(ctx,owner){

   ctx.graph.stop(owner);
   ctx.setField((owner.parent)?.["movie"],"_visible",0);
   ctx.prologueMenu();
   ((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"stageNow");
   (owner.parent)?.["intoGame"]?.((owner.parent)?.["stageNow"]);

}

export function c0v0a1(ctx,owner){
owner.c = 2;

}

export function c0v0a2(ctx,owner){
if(ctx.bool(ctx.less(40,owner.c)))
{
   ctx.graph.goto(owner,4);
}
else
{
   ctx.cloneSprite(owner,"snow1","snow" & owner.c,ctx.add(16384,(ctx.num(900)-ctx.num(owner.c))));
   ctx.setProperty(owner,"snow" & owner.c,"_x",ctx.add(ctx.getProperty(owner,"snow" & (ctx.num(owner.c)-ctx.num(1)),"_x"),ctx.randomInt?.(200)));
   ctx.setProperty(owner,"snow" & owner.c,"_xscale",ctx.randomInt?.(100));
   ctx.setProperty(owner,"snow" & owner.c,"_yscale",ctx.getProperty(owner,"snow" & owner.c,"_xscale"));
   ctx.setProperty(owner,"snow" & owner.c,"_rotation",ctx.randomInt?.(360));
   owner.c=ctx.add(owner.c,1);
}

}

export function c0v0a3(ctx,owner){
ctx.graph.goto(owner,2,{play:true});

}

export function c0v0a4(ctx,owner){
ctx.graph.stop(owner);

}

export function c0v0a5(ctx,owner){
ctx.graph.stop(owner);

}

export function c0v0a6(ctx,owner){
ctx.graph.play(owner);

}

export function c0v0a7(ctx,owner){
ctx.graph.stop(owner);
ctx.setField((owner.parent)?.["movie"],"_visible",0);
ctx.prologueMenu();
((target,key)=>{const old=ctx.num(target?.[key]);ctx.setField(target,key,old+1);return old;})(owner.parent,"stageNow");
(owner.parent)?.["intoGame"]?.((owner.parent)?.["stageNow"]);

}

export const variant0={sourceBytes:2665908,frames:{"48":{"1":(ctx,owner)=>{c0v0a1.call(owner,ctx,owner);},"2":(ctx,owner)=>{c0v0a2.call(owner,ctx,owner);},"3":(ctx,owner)=>{c0v0a3.call(owner,ctx,owner);},"4":(ctx,owner)=>{c0v0a4.call(owner,ctx,owner);}},"main":{"1":(ctx,owner)=>{c0v0a5.call(owner,ctx,owner);},"2":(ctx,owner)=>{c0v0a6.call(owner,ctx,owner);},"4254":(ctx,owner)=>{c0v0a7.call(owner,ctx,owner);}}},frameActions:{"48":{"1":[c0v0a1],"2":[c0v0a2],"3":[c0v0a3],"4":[c0v0a4]},"main":{"1":[c0v0a5],"2":[c0v0a6],"4254":[c0v0a7]}},buttons:{"4":{"release":(ctx,owner)=>{c0v0a0.call(owner,ctx,owner);}}},clips:[],initializers:{},requiredOwnerFields:{"4":[],"48":["c"],"main":[]}};
export const bindings={"0:4":{"read":[],"write":[]},"0:48":{"read":["c"],"write":["c"]},"0:main":{"read":[],"write":[]}};
