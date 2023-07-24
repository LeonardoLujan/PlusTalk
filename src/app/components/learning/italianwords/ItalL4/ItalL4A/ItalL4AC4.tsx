import {italianlesson4A} from 'src/app/components/learning/italianwords/ItalL4/ItalL4Lessons/ItalL4A.tsx'

export function ItalL4AC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson4A[3].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson4A[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson4A[3].ephrase}</div>


            )}
        </div>
    );
}