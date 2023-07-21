import {italianlesson1A} from 'src/app/components/learning/italianwords/ItalL1/ItalL1Lessons/ItalL1A.tsx'

export function ItalL1AC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson1A[1].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson1A[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson1A[1].ephrase}</div>


            )}
        </div>
    );
}