import {createProgressStore} from './common/progress.js';

const entryOf=value=>{
 const match=/^([0-8]):([01])$/.exec(value??'');
 if(!match||match[1]==='0'&&match[2]!=='0')return null;
 return{chapter:Number(match[1]),variant:Number(match[2])};
};
/** Fixed catalog anchors only. The native host also checks direct entries. */
export function mountCatalog({document=globalThis.document,window=globalThis.window,store=createProgressStore()}={}){
 const rows=[...document.querySelectorAll('a[data-entry]')].map(link=>{
  const hint=document.createElement('span');hint.className='progress-lock-hint';hint.hidden=true;
  link.insertAdjacentElement('afterend',hint);
  return{link,hint,entry:entryOf(link.getAttribute('data-entry')),href:link.getAttribute('href'),
   title:link.getAttribute('title'),tabindex:link.getAttribute('tabindex')};
 });
 const restore=(node,name,value)=>{if(value===null)node.removeAttribute(name);else node.setAttribute(name,value);};
 function refresh(){
  const progress=store.read();
  for(const row of rows){
   const {link,hint,entry}=row,locked=!entry||entry.chapter>0&&entry.chapter>progress.maxUnlocked;
   if(locked){
    const message=entry?`先完成第${entry.chapter-1}集`:'该入口不可用';
    link.removeAttribute('href');link.setAttribute('aria-disabled','true');link.setAttribute('tabindex','-1');
    link.setAttribute('title',message);hint.textContent=message;hint.hidden=false;
   }else{
    restore(link,'href',row.href);restore(link,'title',row.title);restore(link,'tabindex',row.tabindex);
    link.removeAttribute('aria-disabled');hint.hidden=true;
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
if(typeof document!=='undefined'&&typeof window!=='undefined')mountCatalog();
