import {spanishlesson2D} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2Lessons/SpanL2D.tsx'

export function SpanL2DC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson2D[3].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson2D[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson2D[3].ephrase}</div>


            )}
        </div>
    );
}