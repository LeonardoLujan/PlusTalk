import {italianlesson3C} from '../ItalL3Lessons/ItalL3C'
import {Card} from './ItalL3CIndex';

export function ItalL3CC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson3C[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson3C[0].ephrase}</div>


            )}
        </div>
    );
}