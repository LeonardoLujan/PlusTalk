import {spanishlesson2C} from '../SpanL2Lessons/SpanL2C'
import {Card} from './SpanL2CIndex';

export function SpanL2CC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson2C[0].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson2C[0].ephrase}</div>


            )}
        </div>
    );
}