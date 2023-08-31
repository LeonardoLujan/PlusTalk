import {italianlesson2B} from '../ItalL2Lessons/ItalL2B'
import {Card} from './ItalL2BIndex';

export function ItalL2BC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson2B[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson2B[0].ephrase}</div>


            )}
        </div>
    );
}