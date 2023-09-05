import {spanishlesson4D} from '../SpanL4Lessons/SpanL4D'
import {Card} from './SpanL4DIndex';

export function SpanL4DC4({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson4D[3].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson4D[3].ephrase}</div>


            )}
        </div>
    );
}