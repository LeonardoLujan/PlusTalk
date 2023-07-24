import {spanishlesson2B} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2Lessons/SpanL2B.tsx'

export function SpanL2BC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson2B[1].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson2B[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson2B[1].ephrase}</div>


            )}
        </div>
    );
}