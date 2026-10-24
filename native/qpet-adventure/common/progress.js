/** Native story progress. No original-player or debug save migration. */
export const PROGRESS_KEY='qpetlover.qpet-adventure.native.progress.v1';
const initial=()=>({version:1,completed:0,maxUnlocked:1});
const copy=progress=>({...progress});
function decode(raw){
 try{
  const value=JSON.parse(raw);
  if(value&&typeof value==='object'&&!Array.isArray(value)&&value.version===1&&
   Number.isInteger(value.completed)&&value.completed>=0&&value.completed<=8&&
   Number.isInteger(value.maxUnlocked)&&value.maxUnlocked===Math.min(8,value.completed+1))
   return{progress:{version:1,completed:value.completed,maxUnlocked:value.maxUnlocked},valid:true};
 }catch{}
 return{progress:initial(),valid:false};
}
function browserStorage(name){try{return globalThis[name]??null;}catch{return null;}}

/** A contiguous completed frontier shared by both archived character variants.
 * Every read sees the selected storage's latest value. Storage failure falls
 * back to session storage, then this instance's memory; it never throws into
 * gameplay. Only callers wired to the original mOver callback should complete.
 */
export function createProgressStore(options={}){
 const candidates=[
  Object.hasOwn(options,'storage')?options.storage:browserStorage('localStorage'),
  Object.hasOwn(options,'fallbackStorage')?options.fallbackStorage:browserStorage('sessionStorage'),
 ].filter((storage,index,all)=>storage&&all.indexOf(storage)===index);
 let backend=null,index=-1,memory=initial(),readable=null;
 // Check both reading and writing: a readable but quota-blocked localStorage
 // must not hide a working sessionStorage save after the next page load.
 for(let i=0;i<candidates.length;i++){
  try{
   const storage=candidates[i],parsed=decode(storage.getItem(PROGRESS_KEY));
   // If a valid primary save is readable but cannot be written, retain it
   // when choosing a usable fallback. A newer valid session frontier wins.
   if(parsed.valid&&(!readable||parsed.progress.completed>readable.completed))readable=parsed.progress;
   const progress=readable??parsed.progress;
   storage.setItem(PROGRESS_KEY,JSON.stringify(progress));
   backend=storage;index=i;memory=progress;break;
  }catch{}
 }
 if(!backend&&readable)memory=readable;
 function save(){
  const value=JSON.stringify(memory);
  if(backend)try{backend.setItem(PROGRESS_KEY,value);return;}catch{}
  for(let i=index+1;i<candidates.length;i++){
   if(candidates[i]===backend)continue;
   try{candidates[i].setItem(PROGRESS_KEY,value);backend=candidates[i];index=i;return;}catch{}
  }
  backend=null;index=candidates.length;
 }
 function read(){
  if(backend){
   try{const parsed=decode(backend.getItem(PROGRESS_KEY));memory=parsed.progress;if(!parsed.valid)save();}
   catch{backend=null;save();}
  }
  return copy(memory);
 }
 function canPlay(chapter){
  if(!Number.isInteger(chapter)||chapter<0||chapter>8)return false;
  return chapter===0||chapter<=read().maxUnlocked;
 }
 function complete(chapter){
  const current=read(),result=(changed,reason)=>({changed,reason,progress:copy(memory)});
  if(!Number.isInteger(chapter)||chapter<0||chapter>8)return result(false,'invalid-chapter');
  if(chapter===0)return result(false,'prologue');
  if(chapter<=current.completed)return result(false,'already-completed');
  if(chapter!==current.completed+1||chapter>current.maxUnlocked)return result(false,'locked');
  memory={version:1,completed:chapter,maxUnlocked:Math.min(8,chapter+1)};save();
  return result(true,'completed');
 }
 return{key:PROGRESS_KEY,read,canPlay,complete};
}
