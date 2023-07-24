import {italianlesson4A} from 'src/app/components/learning/italianwords/ItalL4/ItalL4Lessons/ItalL4A.tsx'

export function ItalL4AC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-3xl " onClick={unShow}>{italianlesson4A[0].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson4A[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{italianlesson4A[0].ephrase}</div>


            )}
        </div>
    );
}