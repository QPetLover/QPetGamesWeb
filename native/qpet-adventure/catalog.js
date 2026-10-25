import {createProgressStore} from './common/progress.js?v=087fbd4442bad3b3';

const entryOf=value=>{
 const match=/^([0-8]):([01])$/.exec(value??'');
 if(!match||match[1]==='0'&&match[2]!=='0')return null;
 return{chapter:Number(match[1]),variant:Number(match[2])};
};
/** Completion badges describe progress without restricting valid entries. */
export function mountCatalog({document=globalThis.document,window=globalThis.window,store=createProgressStore()}={}){
 const rows=[...document.querySelectorAll('a[data-entry]')].map(link=>{
  const hint=document.createElement('span');hint.className='progress-state';hint.hidden=true;
  link.insertAdjacentElement('afterend',hint);
  return{link,hint,entry:entryOf(link.getAttribute('data-entry')),href:link.getAttribute('href'),
   title:link.getAttribute('title'),tabindex:link.getAttribute('tabindex')};
 });
 const restore=(node,name,value)=>{if(value===null)node.removeAttribute(name);else node.setAttribute(name,value);};
 function refresh(){
  const progress=store.read();
  for(const row of rows){
   const {link,hint,entry}=row,locked=!entry;
   if(locked){
    const message='该入口不可用';
    link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.setAttribute('tabindex','-1');
    link.setAttribute('title',message);hint.textContent=message;hint.hidden=false;
   }else{
    restore(link,'href',row.href);restore(link,'title',row.title);restore(link,'tabindex',row.tabindex);
    link.removeAttribute('aria-disabled');
    hint.textContent=entry.chapter===0?'可随时观看':progress.completed.includes(entry.chapter)?'已通关':'未通关';hint.hidden=false;
   }
  }
  return progress;
 }
 const clicks=rows.map(row=>{
  const click=event=>{
   if(!row.entry||!store.canPlay(row.entry.chapter)){event.preventDefault();event.stopPropagation();refresh();}
  };
  row.link.addEventListener('click',click);return{link:row.link,click};
 });
 const storage=event=>{if(event.key===store.key||event.key===null)refresh();};
 window.addEventListener('pageshow',refresh);window.addEventListener('storage',storage);refresh();
 return{refresh,destroy(){
  window.removeEventListener('pageshow',refresh);window.removeEventListener('storage',storage);
  for(const {link,click}of clicks)link.removeEventListener('click',click);
  for(const row of rows){restore(row.link,'href',row.href);restore(row.link,'title',row.title);restore(row.link,'tabindex',row.tabindex);row.link.removeAttribute('aria-disabled');row.hint.remove();}
 }};
}

export const CHAPTER_TITLES=Object.freeze(['预告片','第1集 · 启航','第2集 · 爱情之爆发力','第3集 · 贼窝','第4集 · 密室','第5集 · 黑暗之眼','第6集 · 巨树','第7集 · 巨树之颠','第8集 · 大结局—宝藏']);
const chapterNumber=value=>Number.isInteger(value)?Math.max(0,Math.min(8,value)):1;
/** Browsing and entry never mark a chapter complete. */
export function selectorState(chapter=1,progress={completed:[]}){
 const selected=chapterNumber(chapter),valid=Array.isArray(progress?.completed)&&progress.completed.every(n=>Number.isInteger(n)&&n>=1&&n<=8);
 const completed=valid?progress.completed:[];
 return{chapter:selected,title:CHAPTER_TITLES[selected],status:selected===0?'watch':completed.includes(selected)?'complete':'unplayed',
  canGoLeft:selected>0,canGoRight:selected<8,canPlay:true,entryIds:selected===0?['0:0']:[selected+':0',selected+':1']};
}
export function moveSelection(chapter,delta){return chapterNumber(chapterNumber(chapter)+(Number.isInteger(delta)?delta:0));}
/** Original stopped selection artwork, normal controls, and existing native save. */
export function mountSelector({document=globalThis.document,window=globalThis.window,store=createProgressStore(),catalog}={}){
 const host=document.querySelector('[data-selector]');if(!host)return null;
 const stage=host.querySelector('[data-selector-stage]'),title=host.querySelector('[data-selector-title]'),message=host.querySelector('[data-selector-message]');
 const images=[...host.querySelectorAll('[data-selector-image]')],statuses=[...host.querySelectorAll('[data-selector-status]')];
 const groups=[...document.querySelectorAll('[data-chapter]')],previous=host.querySelector('[data-selector-action="previous"]'),next=host.querySelector('[data-selector-action="next"]');
 const confirm=host.querySelector('[data-selector-action="confirm"]'),help=host.querySelector('[data-selector-action="help"]'),helpPanel=host.querySelector('[data-selector-help]'),closeHelp=host.querySelector('[data-selector-close-help]');
 let selected=1;
 const statusText={watch:'可随时观看',unplayed:'未通关',complete:'已通关'};
 function refresh(){
  catalog?.refresh();
  const state=selectorState(selected,store.read());
  for(const image of images)image.hidden=Number(image.getAttribute('data-selector-image'))!==state.chapter;
  for(const image of statuses)image.hidden=image.getAttribute('data-selector-status')!==state.status;
  for(const group of groups){
   const active=Number(group.getAttribute('data-chapter'))===state.chapter;
   group.hidden=!active;
  }
  previous.disabled=!state.canGoLeft;next.disabled=!state.canGoRight;
  confirm.removeAttribute('aria-disabled');
  title.textContent=state.title+' · '+statusText[state.status];
  message.textContent=state.chapter===0?'点击确定，再选择观看预告片。':'选择Q哥版或Q妹版，即可开始这一集。';
  stage.setAttribute('aria-label',state.title+'，'+statusText[state.status]);
  host.setAttribute('data-selected-chapter',String(state.chapter));
  return state;
 }
 function select(chapter){selected=chapterNumber(chapter);return refresh();}
 function move(delta){return select(moveSelection(selected,delta));}
 function enter(){
  const state=refresh();
  const group=groups.find(node=>Number(node.getAttribute('data-chapter'))===state.chapter);
  const link=group?.querySelector('a[data-entry][href]');
  group?.scrollIntoView?.({block:'nearest',behavior:'auto'});link?.focus?.({preventScroll:true});
  return true;
 }
 const left=()=>move(-1),right=()=>move(1),openHelp=()=>{helpPanel.hidden=false;closeHelp.focus?.();},hideHelp=()=>{helpPanel.hidden=true;help.focus?.();};
 const keyboard=event=>{
  if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1);}
  else if(event.key==='Home'||event.key==='End'){event.preventDefault();select(event.key==='Home'?0:8);}
  else if(event.target===stage&&(event.key==='Enter'||event.key===' ')){event.preventDefault();enter();}
 };
 const storage=event=>{if(event.key===store.key||event.key===null)refresh();};
 const escape=event=>{if(event.key==='Escape'&&!helpPanel.hidden)hideHelp();};
 previous.addEventListener('click',left);next.addEventListener('click',right);confirm.addEventListener('click',enter);
 help.addEventListener('click',openHelp);closeHelp.addEventListener('click',hideHelp);stage.addEventListener('keydown',keyboard);helpPanel.addEventListener('keydown',escape);
 window.addEventListener('pageshow',refresh);window.addEventListener('storage',storage);refresh();
 return{refresh,select,previous:left,next:right,confirm:enter,getState:()=>selectorState(selected,store.read()),destroy(){
  previous.removeEventListener('click',left);next.removeEventListener('click',right);confirm.removeEventListener('click',enter);
  help.removeEventListener('click',openHelp);closeHelp.removeEventListener('click',hideHelp);stage.removeEventListener('keydown',keyboard);helpPanel.removeEventListener('keydown',escape);
  window.removeEventListener('pageshow',refresh);window.removeEventListener('storage',storage);
 }};
}
if(typeof document!=='undefined'&&typeof window!=='undefined'){
 const store=createProgressStore(),catalog=mountCatalog({store});mountSelector({store,catalog});
}
