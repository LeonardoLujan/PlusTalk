
import {spanishlesson1A} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1Lessons/SpanL1A.tsx'

export function SpanL1AC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson1A[0].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1A[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson1A[0].ephrase}</div>


            )}
        </div>
    );
}