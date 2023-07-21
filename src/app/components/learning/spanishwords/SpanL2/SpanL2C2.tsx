import {spanishlesson2} from '../SpanishLessons/SpanLesson2.tsx';


export function SpanL2C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson2[1].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson2[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{spanishlesson2[1].ephrase}</div>


            )}
        </div>
    );
}