import {portugueselesson4D} from '../PortL4Lessons/PortL4D'
import {Card} from './PortL4DIndex';

export function PortL4DC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson4D[3].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson4D[3].ephrase}</div>


            )}
        </div>
    );
}