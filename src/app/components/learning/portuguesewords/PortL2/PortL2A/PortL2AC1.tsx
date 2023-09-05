import {portugueselesson2A} from '../PortL2Lessons/PortL2A'
import {Card} from './PortL2AIndex';

export function PortL2AC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson2A[0].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson2A[0].ephrase}</div>


            )}
        </div>
    );
}