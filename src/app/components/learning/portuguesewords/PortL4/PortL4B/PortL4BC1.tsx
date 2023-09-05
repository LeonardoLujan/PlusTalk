import {portugueselesson4B} from '../PortL4Lessons/PortL4B'
import {Card} from './PortL4BIndex';

export function PortL4BC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson4B[0].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson4B[0].ephrase}</div>


            )}
        </div>
    );
}