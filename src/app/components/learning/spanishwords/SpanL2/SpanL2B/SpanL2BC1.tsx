import {spanishlesson2B} from '../SpanL2Lessons/SpanL2B'
import {Card} from './SpanL2BIndex';

export function SpanL2BC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson2B[0].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson2B[0].ephrase}</div>


            )}
        </div>
    );
}