import {spanishlesson4A} from '../SpanL4Lessons/SpanL4A'
import {Card} from './SpanL4AIndex';

export function SpanL4AC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson4A[2].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson4A[2].ephrase}</div>


            )}
        </div>
    );
}