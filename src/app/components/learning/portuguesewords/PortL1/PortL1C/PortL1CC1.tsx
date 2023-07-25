import {portugueselesson1C} from 'src/app/components/learning/portuguesewords/PortL1/PortL1Lessons/PortL1C.tsx'

export function PortL1CC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson1C[0].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson1C[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson1C[0].ephrase}</div>


            )}
        </div>
    );
}