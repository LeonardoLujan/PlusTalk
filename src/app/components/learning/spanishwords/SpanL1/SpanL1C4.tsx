import {spanishlesson1} from '../SpanishLessons/SpanLesson1.tsx';


export function SpanL1C4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson1[3].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson1[3].ephrase}</div>


            )}
        </div>
    );
}