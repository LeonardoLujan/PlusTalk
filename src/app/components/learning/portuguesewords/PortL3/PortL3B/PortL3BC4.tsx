import {portugueselesson3B} from '../PortL3Lessons/PortL3B'
import {Card} from './PortL3BIndex';

export function PortL3BC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson3B[3].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson3B[3].ephrase}</div>


            )}
        </div>
    );
}