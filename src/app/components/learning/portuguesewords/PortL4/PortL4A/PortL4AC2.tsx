import {portugueselesson4A} from 'src/app/components/learning/portuguesewords/PortL4/PortL4Lessons/PortL4A.tsx'

export function PortL4AC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson4A[1].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson4A[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson4A[1].ephrase}</div>


            )}
        </div>
    );
}