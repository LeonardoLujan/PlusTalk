import {spanishlesson3A} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3Lessons/SpanL3A.tsx'

export function SpanL3AC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson3A[1].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson3A[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson3A[1].ephrase}</div>


            )}
        </div>
    );
}