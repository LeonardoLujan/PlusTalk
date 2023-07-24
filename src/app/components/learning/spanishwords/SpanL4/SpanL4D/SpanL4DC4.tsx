import {spanishlesson4D} from 'src/app/components/learning/spanishwords/SpanL4/SpanL4Lessons/SpanL4D.tsx'

export function SpanL4DC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson4D[3].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson4D[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson4D[3].ephrase}</div>


            )}
        </div>
    );
}