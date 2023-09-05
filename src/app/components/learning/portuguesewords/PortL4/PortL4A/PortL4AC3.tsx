import {portugueselesson4A} from '../PortL4Lessons/PortL4A'
import {Card} from './PortL4AIndex';

export function PortL4AC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson4A[2].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson4A[2].ephrase}</div>


            )}
        </div>
    );
}