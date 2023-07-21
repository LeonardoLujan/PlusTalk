import {spanishlesson2A} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2Lessons/SpanL2A.tsx'

export function SpanL2AC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson2A[3].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson2A[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson2A[3].ephrase}</div>


            )}
        </div>
    );
}