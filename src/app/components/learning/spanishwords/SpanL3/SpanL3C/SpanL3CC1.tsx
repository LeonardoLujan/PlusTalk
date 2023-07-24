import {spanishlesson3C} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3Lessons/SpanL3C.tsx'

export function SpanL3CC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson3C[0].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson3C[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson3C[0].ephrase}</div>


            )}
        </div>
    );
}