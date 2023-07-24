import {spanishlesson4B} from 'src/app/components/learning/spanishwords/SpanL4/SpanL4Lessons/SpanL4B.tsx'

export function SpanL4BC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson4B[2].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson4B[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson4B[2].ephrase}</div>


            )}
        </div>
    );
}