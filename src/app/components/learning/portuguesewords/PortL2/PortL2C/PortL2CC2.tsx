import {portugueselesson2C} from 'src/app/components/learning/portuguesewords/PortL2/PortL2Lessons/PortL2C.tsx'

export function PortL2CC2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson2C[1].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson2C[1].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson2C[1].ephrase}</div>


            )}
        </div>
    );
}