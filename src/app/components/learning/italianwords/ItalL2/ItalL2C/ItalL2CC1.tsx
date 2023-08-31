import {italianlesson2C} from '../ItalL2Lessons/ItalL2C'
import {Card} from './ItalL2CIndex';

export function ItalL2CC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson2C[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson2C[0].ephrase}</div>


            )}
        </div>
    );
}