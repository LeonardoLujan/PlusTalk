import {italianlesson1A} from '../ItalL1Lessons/ItalL1A'
import {Card} from './ItalL1AIndex';

export function ItalL1AC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson1A[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson1A[0].ephrase}</div>


            )}
        </div>
    );
}