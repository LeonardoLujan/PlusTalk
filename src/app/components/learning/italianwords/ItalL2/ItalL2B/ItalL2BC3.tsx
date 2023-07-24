import {italianlesson2B} from 'src/app/components/learning/italianwords/ItalL2/ItalL2Lessons/ItalL2B.tsx'

export function ItalL2BC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson2B[2].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson2B[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson2B[2].ephrase}</div>


            )}
        </div>
    );
}