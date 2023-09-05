import {spanishlesson2D} from '../SpanL2Lessons/SpanL2D'
import {Card} from './SpanL2DIndex';

export function SpanL2DC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson2D[2].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson2D[2].ephrase}</div>


            )}
        </div>
    );
}