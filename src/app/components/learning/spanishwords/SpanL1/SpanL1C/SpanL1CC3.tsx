import {spanishlesson1C} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1Lessons/SpanL1C.tsx'

export function SpanL1CC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-3xl" onClick={unShow}>{spanishlesson1C[2].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1C[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{spanishlesson1C[2].ephrase}</div>


            )}
        </div>
    );
}