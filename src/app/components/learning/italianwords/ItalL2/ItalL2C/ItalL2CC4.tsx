import {italianlesson2C} from 'src/app/components/learning/italianwords/ItalL2/ItalL2Lessons/ItalL2C.tsx'

export function ItalL2CC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-3xl " onClick={unShow}>{italianlesson2C[3].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson2C[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-3xl" onClick={onShow}>{italianlesson2C[3].ephrase}</div>


            )}
        </div>
    );
}