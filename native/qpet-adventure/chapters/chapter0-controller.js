import * as actions from './chapter0-actions.js';
import {createChapterController} from '../common/chapter-controller.js';
/** Archived prologue, variant0 only. It is a movie, not a playable chapter.
 * The original loader button294 enters frame2; frame2 starts the timeline.
 * Both source skip and natural frame4254 request chapter1, never mOver(0).
 */
export function createChapter0Controller(options={}){
    if((options.variant??0)!==0)throw Error('The archived prologue variant1 is unavailable');
    const controller=createChapterController({...options,chapter:0,variant:0,actions});
    controller.begin=()=>{
        if(controller.disposed||controller.root.removed||!controller.root.visible||controller.root.frame!==1)return false;
        controller.graph.goto(controller.root,2);
        return true;
    };
    return controller;
}
