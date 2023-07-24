import {italianlesson3B} from 'src/app/components/learning/italianwords/ItalL3/ItalL3Lessons/ItalL3B.tsx'

export function ItalL3BC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{italianlesson3B[0].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson3B[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{italianlesson3B[0].ephrase}</div>


            )}
        </div>
    );
}