import {spanishlesson3B} from '../SpanL3Lessons/SpanL3B'
import {Card} from './SpanL3BIndex';

export function SpanL3BC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson3B[1].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson3B[1].ephrase}</div>


            )}
        </div>
    );
}