import {portugueselesson1B} from 'src/app/components/learning/portuguesewords/PortL1/PortL1Lessons/PortL1B.tsx'

export function PortL1BC4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson1B[3].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson1B[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson1B[3].ephrase}</div>


            )}
        </div>
    );
}