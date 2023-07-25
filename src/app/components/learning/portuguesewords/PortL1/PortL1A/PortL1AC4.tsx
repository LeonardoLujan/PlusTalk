import {portugueselesson1A} from 'src/app/components/learning/portuguesewords/PortL1/PortL1Lessons/PortL1A.tsx'

export function PortL1AC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson1A[3].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson1A[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson1A[3].ephrase}</div>


            )}
        </div>
    );
}