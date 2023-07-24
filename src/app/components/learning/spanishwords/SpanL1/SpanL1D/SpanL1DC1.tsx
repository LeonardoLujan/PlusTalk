import {spanishlesson1D} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1Lessons/SpanL1D.tsx'

export function SpanL1DC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-3xl" onClick={unShow}>{spanishlesson1D[0].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson1D[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{spanishlesson1D[0].ephrase}</div>


            )}
        </div>
    );
}