import {spanishlesson2A} from '../SpanL2Lessons/SpanL2A'
import {Card} from './SpanL2AIndex';

export function SpanL2AC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson2A[2].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson2A[2].ephrase}</div>


            )}
        </div>
    );
}