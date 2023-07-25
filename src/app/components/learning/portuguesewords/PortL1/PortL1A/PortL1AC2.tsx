import {portugueselesson1A} from 'src/app/components/learning/portuguesewords/PortL1/PortL1Lessons/PortL1A.tsx'

export function PortL1AC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson1A[1].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson1A[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson1A[1].ephrase}</div>


            )}
        </div>
    );
}