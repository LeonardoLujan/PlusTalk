import {italianlesson1B} from '../ItalL1Lessons/ItalL1B'
import {Card} from './ItalL1BIndex';

export function ItalL1BC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson1B[1].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson1B[1].ephrase}</div>


            )}
        </div>
    );
}