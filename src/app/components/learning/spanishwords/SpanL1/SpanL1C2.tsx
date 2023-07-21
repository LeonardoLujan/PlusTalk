import {spanishlesson1} from '../SpanishLessons/SpanLesson1.tsx';


export function SpanL1C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-3xl " onClick={unShow}>{spanishlesson1[1].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson1[1].ephrase}</div>


            )}
        </div>
    );
}