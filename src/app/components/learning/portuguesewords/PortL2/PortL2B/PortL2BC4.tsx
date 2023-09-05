import {portugueselesson2B} from '../PortL2Lessons/PortL2B'
import {Card} from './PortL2BIndex';

export function PortL2BC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson2B[3].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson2B[3].ephrase}</div>


            )}
        </div>
    );
}