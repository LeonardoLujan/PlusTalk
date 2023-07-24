import {italianlesson4B} from 'src/app/components/learning/italianwords/ItalL4/ItalL4Lessons/ItalL4B.tsx'

export function ItalL4BC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson4B[3].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson4B[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson4B[3].ephrase}</div>


            )}
        </div>
    );
}