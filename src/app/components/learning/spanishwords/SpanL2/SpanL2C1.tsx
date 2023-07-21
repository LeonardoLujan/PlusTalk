import {spanishlesson2} from '../SpanishLessons/SpanLesson2.tsx';


export function SpanL2C1({isActive, onShow, unShow}){
    return(
        <div class="shadow-md my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-3xl " onClick={unShow}>{spanishlesson2[0].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson2[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{spanishlesson2[0].ephrase}</div>


            )}
        </div>
    );
}