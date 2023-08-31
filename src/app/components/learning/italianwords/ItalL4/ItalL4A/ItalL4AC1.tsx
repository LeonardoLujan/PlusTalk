import {italianlesson4A} from '../ItalL4Lessons/ItalL4A'
import {Card} from './ItalL4AIndex';

export function ItalL4AC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson4A[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson4A[0].ephrase}</div>


            )}
        </div>
    );
}