import {portugueselesson1C} from '../PortL1Lessons/PortL1C'
import {Card} from './PortL1CIndex';

export function PortL1CC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson1C[3].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson1C[3].ephrase}</div>


            )}
        </div>
    );
}