import {SceneGraph} from './scene-graph.js';
import {createChapterContext} from './chapter-context.js';

/** Native adventure controller. The registrations contain only callable JS
 * functions compiled offline from the selected chapter, never executable data.
 * Frame/EnterFrame order follows the fixed baseline's per-clip execution list
 * and FIFO queue; actual baseline traces still verify source-specific edges. */
export function createChapterController({chapter,variant=0,actions,assets,pointHit=null,buttonHit=null,pointerTop=null,onEvent=()=>{},onComplete=()=>{},onChapterRequest=()=>{},audio=null,random=Math.random,now=0,resourceProgress}={}){
 if(!actions||!assets?.instances)throw Error('Native chapter requires its own static callbacks and artwork metadata');
 const events=[],emit=e=>{events.push(e);onEvent(e);},clipHooks=new Map(),texts=new Map(),pendingTexts=new Set();let graph,pressed=null,disposed=false,last=now,accumulator=0;
 const code=typeof actions.variant0==='object'?(variant===1?actions.variant1:actions.variant0):actions;
 // The native entry constructs this controller after resource preparation.
 // Legacy byte APIs retain fixed source units; a real progress object can be
 // injected while the host is still preparing. No SWF is fetched at runtime.
 const context=createChapterContext({chapter,variant,pointHit,audio,random,onEvent:emit,onComplete,onChapterRequest,resourceProgress:resourceProgress??{loaded:code.sourceBytes??0,total:code.sourceBytes??0}});context.setTime(now);
 const callbacks=(owner,fn)=>{if(typeof fn==='function')return fn.call(owner,context,owner);if(Array.isArray(fn))for(const f of fn)if(typeof f==='function')f.call(owner,context,owner);};
 const fields=id=>code.requiredOwnerFields?.[id]||[];
 const textDeclarations=assets.textBindings||{};
 function textOwner(node,declaration){let owner=node.parent;while(owner&&node.graph.symbolKinds[owner.id]?.startsWith('button'))owner=owner.parent;if(declaration.ownerParents===1)owner=owner?.parent;else if(declaration.ownerParents!==undefined&&declaration.ownerParents!==0)throw Error('Unclassified fixed EditText owner');return owner?.graph&&!owner.removed?owner:null;}
 // Generated field getters expose native JS aliases; they do not create an AS
 // property. Only a stored game variable or an actual source-written own value
 // counts as present for original EditText initialization.
 function textProperty(owner,field){const key=field.toLowerCase();if(Object.hasOwn(owner.vars,key))return{exists:true,value:owner.vars[key]};const descriptor=Object.getOwnPropertyDescriptor(owner,field);return descriptor&&Object.hasOwn(descriptor,'value')?{exists:true,value:descriptor.value}:{exists:false};}
 function bindText(node){const declaration=textDeclarations[node.id];if(!declaration)return true;const owner=textOwner(node,declaration);if(!owner)return false;const field=declaration.field||declaration.variable;if(!/^[A-Za-z_]\w*$/.test(field))throw Error('Unclassified fixed EditText field');const value=textProperty(owner,field),initialText=declaration.initialText??'';graph.defineFields(owner,[field]);if(!value.exists&&initialText!=='')context.setField(owner,field,initialText);texts.set(node.uid,{owner,field,initialText});return true;}
 function createText(node){if(!bindText(node))pendingTexts.add(node);for(const pending of [...pendingTexts])if(pending.removed||bindText(pending))pendingTexts.delete(pending);}
 // Every non-guard clip record in the fixed chapters is carried by its actual
 // HasCharacter birth tag (verified offline). A goto can create that earlier
 // born child while the parent is already on a later target frame.
 function matchClips(node){return(code.clips||[]).filter(c=>node.parent&&String(node.parent.id)===String(c.parent)&&String(node.id)===String(c.character)&&node.placeDepth===c.depth&&node.born===c.frame);}
 function install(node){const matches=matchClips(node);if(!matches.length)return;const hooks=clipHooks.get(node.uid)||new Map();for(const record of matches)hooks.set(record.event,record);clipHooks.set(node.uid,hooks);}
 function bind(node){graph.defineFields(node,fields(node.id));
  for(const name of ['_xmouse','_ymouse'])if(!(name in node))Object.defineProperty(node,name,{configurable:true,get(){const p=graph.globalToLocal(node,context.pointer.x,context.pointer.y);return name==='_xmouse'?p.x:p.y;}});
 }
 graph=new SceneGraph({...assets,caseSensitive:false,onEvent:emit,
  onCreate(node){context.graph=node.graph;if(node.id==='main')node.parent=context.host;bind(node);install(node);createText(node);
   // Fixed source class construction precedes this clip's own timeline work.
   for(const[linkage,initialize]of Object.entries(code.initializers||{}))if(String(node.graph.linkages[linkage])===node.id)callbacks(node,initialize);
   const load=clipHooks.get(node.uid)?.get('load');if(load)node.graph.queueCallback(node,()=>callbacks(node,load.handler));
   // Load's static SWF action and named native method are separate FIFO jobs.
   node.graph.queueCallback(node,()=>{if(typeof node.onLoad==='function')node.onLoad.call(node);});
  },
  onRemove(node){clipHooks.delete(node.uid);texts.delete(node.uid);pendingTexts.delete(node);if(pressed===node)pressed=null;},
  onFrame(node,_graph,queuedFrame=node.frame,actionIndex=null){context.graph=node.graph;install(node);
   const frame=queuedFrame,hasSourceOrder=!!graph.timelineOrder[node.id];callbacks(node,Number.isInteger(actionIndex)?code.frameActions?.[node.id]?.[frame]?.[actionIndex]:hasSourceOrder?null:code.frames?.[node.id]?.[frame]);
   if(node.removed||node.frame!==frame)return;
   for(const child of node.children)install(child);
  },
 });context.graph=graph;
 const root=graph.createRoot();context.host.children=[root];
 function active(node){if(!node||node.removed||node.enabled===false||node.enabled===0)return false;for(let n=node;n&&n!==context.host;n=n.parent)if(!n.visible)return false;return true;}
 function hit(node,x,y){return buttonHit?!!buttonHit(node,x,y):context.hitTest(node,x,y,true);}
 function dispatchButton(node,event){const fn=code.buttons?.[node.id]?.[event];if(!fn)return false;const owner=node.parent;graph.defineFields(owner,fields(node.id));callbacks(owner,fn);return true;}
 function dispatchClipEvent(event){for(const node of graph.walk().sort((a,b)=>b.uid-a.uid)){const record=clipHooks.get(node.uid)?.get(event);if(record)graph.queueCallback(node,()=>callbacks(node,record.handler));}graph.flushActions();}
 // The inventory in chapters 5–7 combines items in MovieClip.onMouseUp.
 // This is a broadcast (including release outside), distinct from a picked
 // button's onRelease. Source mouse propagation visits high-depth children
 // before their parent; the named method is looked up when FIFO executes.
 function dispatchMouseUp(){
  function visit(node){for(const child of [...node.children].sort((a,b)=>b.depth-a.depth))if(!child.removed)visit(child);if(node.removed)return;
   const clip=clipHooks.get(node.uid)?.get('mouseUp');if(clip)graph.queueCallback(node,()=>callbacks(node,clip.handler));
   if(graph.instances[node.id]&&!graph.symbolKinds[node.id]?.startsWith('button'))graph.queueCallback(node,()=>{if(typeof node.onMouseUp==='function')node.onMouseUp.call(node);});
  }visit(root);graph.queueCallback(root,()=>context.mouseEvent('onMouseUp'));graph.flushActions();
 }
 // A renderer-provided picker applies ancestor masks and render-order rules.
 // Its explicit empty result must not fall through to the unmasked fixture
 // helper. Source AS hitTest remains independent from this mouse-only path.
 function pointerTarget(x,y){if(typeof pointerTop==='function'){const target=pointerTop(x,y);return active(target)?target:null;}return graph.walk().reverse().find(node=>active(node)&&(code.buttons?.[node.id]||typeof node.onPress==='function'||typeof node.onRelease==='function')&&hit(node,x,y))||null;}
 function step(){const before=graph.walk().filter(node=>graph.instances[node.id]).sort((a,b)=>b.uid-a.uid);for(const node of before){if(node.removed)continue;
   const clip=clipHooks.get(node.uid)?.get('enterFrame');if(clip){const handler=clip.handler;graph.queueCallback(node,()=>callbacks(node,handler));}
   // A Method action stores the object/name and reads the latest method when
   // FIFO execution reaches it. Capturing today's function changes QTE rules.
   graph.queueCallback(node,()=>{if(typeof node.onEnterFrame==='function')node.onEnterFrame.call(node);});
   graph.advanceNode(node,{deferActions:true});
  }graph.flushActions();}
 const controller={root,graph,context,chapter,variant,
  tick(nowMs){if(disposed)return;nowMs=Number(nowMs);if(!Number.isFinite(nowMs))return;context.setTime(nowMs);context.runTimers();const elapsed=Math.max(0,Math.min(250,nowMs-last));last=nowMs;accumulator+=elapsed;let count=0;while(accumulator>=40){accumulator-=40;step();count++;}return count;},
  /** Explicit one-source-frame advance for deterministic offline comparisons. */
  step(){if(disposed)return;context.setTime(context.now()+40);context.runTimers();step();last=context.now();},
  press(x,y){if(disposed||pressed)return false;context.updatePointer(x,y,true);context.mouseEvent('onMouseDown');pressed=pointerTarget(x,y)||null;if(!pressed)return false;const target=pressed;dispatchButton(target,'press');if(!target.removed&&typeof target.onPress==='function')target.onPress.call(target);return true;},
  move(x,y){if(disposed)return;context.updatePointer(x,y);context.mouseEvent('onMouseMove');},
  release(x=context.pointer.x,y=context.pointer.y,{cancel=false}={}){if(disposed)return;context.updatePointer(x,y,false);if(cancel)context.cancelDrag();else dispatchMouseUp();const target=pressed;pressed=null;if(!target||target.removed)return false;if(!cancel&&pointerTarget(x,y)===target){dispatchButton(target,'release');if(typeof target.onRelease==='function')target.onRelease.call(target);}else{dispatchButton(target,'releaseOutside');if(typeof target.onReleaseOutside==='function')target.onReleaseOutside.call(target);}return true;},
  keyDown(code){if(disposed)return;context.key(code,true);dispatchClipEvent('keyDown');if(Number(code)===32)for(const node of graph.walk())if(active(node))for(const event of Object.keys(actionsFor(node)))if(/^keyPress\s+(?:<?Space>?|"<Space>")$/i.test(event))dispatchButton(node,event);},
  keyUp(code){if(!disposed){context.key(code,false);dispatchClipEvent('keyUp');}},
  setText(owner,field,value){if(owner&&!owner.removed){graph.defineFields(owner,[field]);context.setField(owner,field,String(value));}},
  /** Renderer callback: fixed text-node binding, never expression evaluation. */
  textFor(node,_id,_variable){const record=texts.get(node?.uid);if(!record||record.owner.removed)return undefined;const property=textProperty(record.owner,record.field);return property.exists?context.string(property.value):record.initialText;},
  drainEvents(){return events.splice(0);},
  dispose(){disposed=true;pressed=null;context.clearTimers();graph.remove(root);},
  get disposed(){return disposed;},
 };
 function actionsFor(node){return code.buttons?.[node.id]||{};}
 return controller;
}
