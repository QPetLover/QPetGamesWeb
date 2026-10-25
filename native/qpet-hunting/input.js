/** Flash re-picks interactive display objects when the display list changes,
 * including when the pointer itself stays still across a scene transition. */
export function refreshPointerHit(game,renderer,{inside=false,heldPan=0,rollover=()=>{}}={}){
 if(!inside)return;const before=game.hover;game.hover=renderer.buttonAt(game.pointer);
 if(before!==game.hover){if(game.hover)rollover(game.hover);game.setPan(heldPan||(game.hover?.id==='215'?1:game.hover?.id==='216'?-1:0));}
}
export function paintScene(renderer,game,pointer){renderer.render();refreshPointerHit(game,renderer,pointer);}
