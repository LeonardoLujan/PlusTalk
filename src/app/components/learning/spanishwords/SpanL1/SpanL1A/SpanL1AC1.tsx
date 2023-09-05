import {spanishlesson1A} from '../SpanL1Lessons/SpanL1A'
import {Card} from './SpanL1AIndex';

export function SpanL1AC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson1A[0].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson1A[0].ephrase}</div>


            )}
        </div>
    );
}