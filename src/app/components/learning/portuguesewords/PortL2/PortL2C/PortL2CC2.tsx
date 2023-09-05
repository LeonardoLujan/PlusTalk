import {portugueselesson2C} from '../PortL2Lessons/PortL2C'
import {Card} from './PortL2CIndex';

export function PortL2CC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson2C[1].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson2C[1].ephrase}</div>


            )}
        </div>
    );
}