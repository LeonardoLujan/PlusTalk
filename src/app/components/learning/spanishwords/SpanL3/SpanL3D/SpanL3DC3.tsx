import {spanishlesson3D} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3Lessons/SpanL3D.tsx'

export function SpanL3DC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson3D[2].sphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson3D[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson3D[2].ephrase}</div>


            )}
        </div>
    );
}