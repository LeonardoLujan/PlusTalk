import {portugueselesson2C} from '../PortL2Lessons/PortL2C'
import {Card} from './PortL2CIndex';

export function PortL2CC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson2C[2].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson2C[2].ephrase}</div>


            )}
        </div>
    );
}