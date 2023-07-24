import {spanishlesson4A} from 'src/app/components/learning/spanishwords/SpanL4/SpanL4Lessons/SpanL4A.tsx'

export function SpanL4AC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson4A[0].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson4A[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson4A[0].ephrase}</div>


            )}
        </div>
    );
}