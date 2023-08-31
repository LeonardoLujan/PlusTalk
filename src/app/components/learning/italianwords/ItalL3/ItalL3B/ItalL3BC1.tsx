import {italianlesson3B} from '../ItalL3Lessons/ItalL3B'
import {Card} from './ItalL3BIndex';

export function ItalL3BC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson3B[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson3B[0].ephrase}</div>


            )}
        </div>
    );
}