import {spanishlesson1} from 'src/app/components/learning/spanishwords/SpanishLessons/SpanLesson1.tsx';


export function SpanL1C1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson1[0].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson1[0].ephrase}</div>


            )}
        </div>
    );
}