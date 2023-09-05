import {portugueselesson3A} from '../PortL3Lessons/PortL3A'
import {Card} from './PortL3AIndex';

export function PortL3AC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson3A[1].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson3A[1].ephrase}</div>


            )}
        </div>
    );
}