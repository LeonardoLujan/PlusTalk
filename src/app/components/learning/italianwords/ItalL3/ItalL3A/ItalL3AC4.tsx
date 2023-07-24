import {italianlesson3A} from 'src/app/components/learning/italianwords/ItalL3/ItalL3Lessons/ItalL3A.tsx'

export function ItalL3AC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson3A[3].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson3A[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson3A[3].ephrase}</div>


            )}
        </div>
    );
}