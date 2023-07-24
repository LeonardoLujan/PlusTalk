import {italianlesson1C} from 'src/app/components/learning/italianwords/ItalL1/ItalL1Lessons/ItalL1C.tsx'

export function ItalL1CC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson1C[0].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson1C[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson1C[0].ephrase}</div>


            )}
        </div>
    );
}