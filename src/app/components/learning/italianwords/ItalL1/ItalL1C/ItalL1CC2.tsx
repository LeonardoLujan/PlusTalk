import {italianlesson1C} from '../ItalL1Lessons/ItalL1C'
import {Card} from './ItalL1CIndex';

export function ItalL1CC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson1C[1].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson1C[1].ephrase}</div>


            )}
        </div>
    );
}