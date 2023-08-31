import {italianlesson4B} from '../ItalL4Lessons/ItalL4B'
import {Card} from './ItalL4BIndex';

export function ItalL4BC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson4B[2].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson4B[2].ephrase}</div>


            )}
        </div>
    );
}