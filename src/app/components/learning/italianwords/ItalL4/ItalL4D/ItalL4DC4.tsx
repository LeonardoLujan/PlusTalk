import {italianlesson4D} from '../ItalL4Lessons/ItalL4D'
import {Card} from './ItalL4DIndex';

export function ItalL4DC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson4D[3].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson4D[3].ephrase}</div>


            )}
        </div>
    );
}