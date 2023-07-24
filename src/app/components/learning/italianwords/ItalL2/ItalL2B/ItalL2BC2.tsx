import {italianlesson2B} from 'src/app/components/learning/italianwords/ItalL2/ItalL2Lessons/ItalL2B.tsx'

export function ItalL2BC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson2B[1].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson2B[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson2B[1].ephrase}</div>


            )}
        </div>
    );
}