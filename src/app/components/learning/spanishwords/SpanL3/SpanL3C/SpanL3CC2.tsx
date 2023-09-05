import {spanishlesson3C} from '../SpanL3Lessons/SpanL3C'
import {Card} from './SpanL3CIndex';

export function SpanL3CC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson3C[1].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson3C[1].ephrase}</div>


            )}
        </div>
    );
}