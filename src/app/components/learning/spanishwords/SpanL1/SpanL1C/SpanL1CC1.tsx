import {spanishlesson1C} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1Lessons/SpanL1C.tsx'

export function SpanL1CC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-3xl" onClick={unShow}>{spanishlesson1C[0].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1C[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{spanishlesson1C[0].ephrase}</div>


            )}
        </div>
    );
}