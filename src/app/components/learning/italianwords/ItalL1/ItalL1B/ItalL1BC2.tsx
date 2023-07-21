import {italianlesson1B} from 'src/app/components/learning/italianwords/ItalL1/ItalL1Lessons/ItalL1B.tsx'

export function ItalL1BC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson1B[1].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson1B[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson1B[1].ephrase}</div>


            )}
        </div>
    );
}