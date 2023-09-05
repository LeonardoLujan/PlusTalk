import {portugueselesson1B} from '../PortL1Lessons/PortL1B'
import {Card} from './PortL1BIndex';

export function PortL1BC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson1B[1].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson1B[1].ephrase}</div>


            )}
        </div>
    );
}