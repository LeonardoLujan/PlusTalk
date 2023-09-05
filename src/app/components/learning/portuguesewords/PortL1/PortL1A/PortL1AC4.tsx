import {portugueselesson1A} from '../PortL1Lessons/PortL1A'
import {Card} from './PortL1AIndex';

export function PortL1AC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson1A[3].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson1A[3].ephrase}</div>


            )}
        </div>
    );
}