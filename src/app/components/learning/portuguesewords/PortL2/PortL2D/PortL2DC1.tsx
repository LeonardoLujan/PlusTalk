import {portugueselesson2D} from 'src/app/components/learning/portuguesewords/PortL2/PortL2Lessons/PortL2D.tsx'

export function PortL2DC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson2D[0].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson2D[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson2D[0].ephrase}</div>


            )}
        </div>
    );
}