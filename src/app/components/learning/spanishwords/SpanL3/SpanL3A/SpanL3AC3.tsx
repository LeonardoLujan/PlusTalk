import {spanishlesson3A} from '../SpanL3Lessons/SpanL3A'
import {Card} from './SpanL3AIndex';

export function SpanL3AC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson3A[2].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson3A[2].ephrase}</div>


            )}
        </div>
    );
}