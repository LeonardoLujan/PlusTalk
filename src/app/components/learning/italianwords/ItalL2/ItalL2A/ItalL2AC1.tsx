import {italianlesson2A} from 'src/app/components/learning/italianwords/ItalL2/ItalL2Lessons/ItalL2A.tsx'

export function ItalL2AC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson2A[0].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson2A[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson2A[0].ephrase}</div>


            )}
        </div>
    );
}