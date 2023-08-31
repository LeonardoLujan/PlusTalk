import {italianlesson4C} from '../ItalL4Lessons/ItalL4C'
import {Card} from './ItalL4CIndex';

export function ItalL4CC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson4C[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson4C[0].ephrase}</div>


            )}
        </div>
    );
}