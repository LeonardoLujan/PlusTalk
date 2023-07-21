import {italianlesson1D} from 'src/app/components/learning/italianwords/ItalL1/ItalL1Lessons/ItalL1D.tsx'

export function ItalL1DC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson1D[3].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson1D[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson1D[3].ephrase}</div>


            )}
        </div>
    );
}