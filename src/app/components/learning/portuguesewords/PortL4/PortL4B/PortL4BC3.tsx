import {portugueselesson4B} from 'src/app/components/learning/portuguesewords/PortL4/PortL4Lessons/PortL4B.tsx'

export function PortL4BC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson4B[2].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson4B[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson4B[2].ephrase}</div>


            )}
        </div>
    );
}