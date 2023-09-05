import {portugueselesson3C} from '../PortL3Lessons/PortL3C'
import {Card} from './PortL3CIndex';

export function PortL3CC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson3C[1].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson3C[1].ephrase}</div>


            )}
        </div>
    );
}