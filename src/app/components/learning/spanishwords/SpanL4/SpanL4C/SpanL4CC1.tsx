import {spanishlesson4C} from '../SpanL4Lessons/SpanL4C'
import {Card} from './SpanL4CIndex';

export function SpanL4CC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson4C[0].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson4C[0].ephrase}</div>


            )}
        </div>
    );
}