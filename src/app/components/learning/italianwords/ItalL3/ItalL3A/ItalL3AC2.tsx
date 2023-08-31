import {italianlesson3A} from '../ItalL3Lessons/ItalL3A'
import {Card} from './ItalL3AIndex';

export function ItalL3AC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson3A[1].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson3A[1].ephrase}</div>


            )}
        </div>
    );
}