import {spanishlesson1C} from '../SpanL1Lessons/SpanL1C'
import {Card} from './SpanL1CIndex';

export function SpanL1CC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson1C[2].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson1C[2].ephrase}</div>


            )}
        </div>
    );
}