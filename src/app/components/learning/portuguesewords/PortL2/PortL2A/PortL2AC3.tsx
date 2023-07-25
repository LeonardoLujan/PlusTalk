import {portugueselesson2A} from 'src/app/components/learning/portuguesewords/PortL2/PortL2Lessons/PortL2A.tsx'

export function PortL2AC3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson2A[2].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson2A[2].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson2A[2].ephrase}</div>


            )}
        </div>
    );
}