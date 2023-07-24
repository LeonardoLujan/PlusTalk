import {italianlesson2D} from 'src/app/components/learning/italianwords/ItalL2/ItalL2Lessons/ItalL2D.tsx'

export function ItalL2DC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson2D[2].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson2D[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson2D[2].ephrase}</div>


            )}
        </div>
    );
}