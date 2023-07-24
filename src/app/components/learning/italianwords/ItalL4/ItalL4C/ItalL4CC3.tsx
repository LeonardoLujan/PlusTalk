import {italianlesson4C} from 'src/app/components/learning/italianwords/ItalL4/ItalL4Lessons/ItalL4C.tsx'

export function ItalL4CC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson4C[2].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson4C[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson4C[2].ephrase}</div>


            )}
        </div>
    );
}