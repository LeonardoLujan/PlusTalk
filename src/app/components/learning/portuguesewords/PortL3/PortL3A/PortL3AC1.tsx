import {portugueselesson3A} from 'src/app/components/learning/portuguesewords/PortL3/PortL3Lessons/PortL3A.tsx'

export function PortL3AC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson3A[0].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson3A[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson3A[0].ephrase}</div>


            )}
        </div>
    );
}