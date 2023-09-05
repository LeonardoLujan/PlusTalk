import {portugueselesson4C} from '../PortL4Lessons/PortL4C'
import {Card} from './PortL4CIndex';

export function PortL4CC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson4C[3].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson4C[3].ephrase}</div>


            )}
        </div>
    );
}