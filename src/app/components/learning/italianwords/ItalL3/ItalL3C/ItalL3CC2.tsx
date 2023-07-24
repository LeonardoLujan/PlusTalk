import {italianlesson3C} from 'src/app/components/learning/italianwords/ItalL3/ItalL3Lessons/ItalL3C.tsx'

export function ItalL3CC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson3C[1].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson3C[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{italianlesson3C[1].ephrase}</div>


            )}
        </div>
    );
}