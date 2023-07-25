import {portugueselesson3D} from 'src/app/components/learning/portuguesewords/PortL3/PortL3Lessons/PortL3D.tsx'

export function PortL3DC1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{portugueselesson3D[0].pphrase}</div>
                    
                    <div onClick={unShow}>{portugueselesson3D[0].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{portugueselesson3D[0].ephrase}</div>


            )}
        </div>
    );
}