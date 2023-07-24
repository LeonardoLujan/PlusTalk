import {italianlesson4D} from 'src/app/components/learning/italianwords/ItalL4/ItalL4Lessons/ItalL4D.tsx'

export function ItalL4DC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson4D[1].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson4D[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson4D[1].ephrase}</div>


            )}
        </div>
    );
}