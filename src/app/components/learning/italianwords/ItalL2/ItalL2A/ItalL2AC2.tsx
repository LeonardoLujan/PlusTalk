import {italianlesson2A} from 'src/app/components/learning/italianwords/ItalL2/ItalL2Lessons/ItalL2A.tsx'

export function ItalL2AC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson2A[1].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson2A[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson2A[1].ephrase}</div>


            )}
        </div>
    );
}