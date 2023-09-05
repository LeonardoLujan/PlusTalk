import {spanishlesson1B} from '../SpanL1Lessons/SpanL1B'
import {Card} from './SpanL1BIndex';

export function SpanL1BC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson1B[0].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson1B[0].ephrase}</div>


            )}
        </div>
    );
}