import {italianlesson2A} from '../ItalL2Lessons/ItalL2A'
import {Card} from './ItalL2AIndex';

export function ItalL2AC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson2A[1].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson2A[1].ephrase}</div>


            )}
        </div>
    );
}