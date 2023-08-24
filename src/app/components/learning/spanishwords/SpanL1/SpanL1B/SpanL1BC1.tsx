import {spanishlesson1B} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1Lessons/SpanL1B.tsx'

export function SpanL1BC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson1B[0].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1B[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson1B[0].ephrase}</div>


            )}
        </div>
    );
}