import {spanishlesson3B} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3Lessons/SpanL3B.tsx'

export function SpanL3BC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson3B[2].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson3B[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson3B[2].ephrase}</div>


            )}
        </div>
    );
}