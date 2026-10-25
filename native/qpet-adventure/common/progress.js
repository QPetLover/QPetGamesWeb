/** Completion badges only. Every archived chapter remains directly playable. */
export const PROGRESS_KEY='qpetlover.qpet-adventure.native.progress.v2';
export const LEGACY_PROGRESS_KEY='qpetlover.qpet-adventure.native.progress.v1';
const initial=()=>({version:2,completed:[]});
const copy=progress=>({version:2,completed:[...progress.completed]});
const chapterNumber=chapter=>Number.isInteger(chapter)&&chapter>=1&&chapter<=8;
const merge=(...values)=>({version:2,completed:[...new Set(values.flatMap(value=>value?.completed??[]))].sort((a,b)=>a-b)});
function decode(raw){
 try{
  const value=JSON.parse(raw);
  if(value&&typeof value==='object'&&!Array.isArray(value)&&value.version===2&&
   Array.isArray(value.completed)&&value.completed.every(chapterNumber))
   return merge(value);
 }catch{}
 return null;
}
function decodeLegacy(raw){
 try{
  const value=JSON.parse(raw);
  if(value&&typeof value==='object'&&!Array.isArray(value)&&value.version===1&&
   Number.isInteger(value.completed)&&value.completed>=0&&value.completed<=8&&
   Number.isInteger(value.maxUnlocked)&&value.maxUnlocked===Math.min(8,value.completed+1))
   return{version:2,completed:Array.from({length:value.completed},(_,index)=>index+1)};
 }catch{}
 return null;
}
function load(storage){
 // An existing v2 save, including an empty one, takes precedence. Keep the
 // v1 key untouched so an earlier cached page cannot overwrite the new save.
 return decode(storage.getItem(PROGRESS_KEY))??decodeLegacy(storage.getItem(LEGACY_PROGRESS_KEY))??initial();
}
function browserStorage(name){try{return globalThis[name]??null;}catch{return null;}}

/** Both character variants share actual per-chapter completions. Only callers
 * wired to the original matching mOver callback should mark a chapter complete.
 * Storage failures fall back to session storage, then this instance's memory.
 */
export function createProgressStore(options={}){
 const candidates=[
  Object.hasOwn(options,'storage')?options.storage:browserStorage('localStorage'),
  Object.hasOwn(options,'fallbackStorage')?options.fallbackStorage:browserStorage('sessionStorage'),
 ].filter((storage,index,all)=>storage&&all.indexOf(storage)===index);
 let backend=null,index=-1,memory=initial();
 // Retain everything readable while finding a backend that can also write.
 // Sets from a blocked primary and a working fallback can be disjoint.
 for(let i=0;i<candidates.length;i++){
  try{
   const storage=candidates[i];memory=merge(memory,load(storage));
   storage.setItem(PROGRESS_KEY,JSON.stringify(memory));
   backend=storage;index=i;break;
  }catch{}
 }
 if(!backend)index=candidates.length;
 function save(){
  if(backend)try{backend.setItem(PROGRESS_KEY,JSON.stringify(memory));return;}catch{}
  for(let i=index+1;i<candidates.length;i++){
   if(candidates[i]===backend)continue;
   try{
    const storage=candidates[i];memory=merge(memory,load(storage));
    storage.setItem(PROGRESS_KEY,JSON.stringify(memory));backend=storage;index=i;return;
   }catch{}
  }
  backend=null;index=candidates.length;
 }
 function read(){
  if(backend){
   try{memory=merge(memory,load(backend));}
   catch{backend=null;save();}
  }
  return copy(memory);
 }
 function canPlay(chapter){return Number.isInteger(chapter)&&chapter>=0&&chapter<=8;}
 function complete(chapter){
  const current=read(),result=(changed,reason)=>({changed,reason,progress:copy(memory)});
  if(!Number.isInteger(chapter)||chapter<0||chapter>8)return result(false,'invalid-chapter');
  if(chapter===0)return result(false,'prologue');
  if(current.completed.includes(chapter))return result(false,'already-completed');
  memory=merge(current,{completed:[chapter]});save();
  return result(true,'completed');
 }
 return{key:PROGRESS_KEY,read,canPlay,complete};
}
