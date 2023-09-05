import {spanishlesson4B} from '../SpanL4Lessons/SpanL4B'
import {Card} from './SpanL4BIndex';

export function SpanL4BC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson4B[1].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson4B[1].ephrase}</div>


            )}
        </div>
    );
}