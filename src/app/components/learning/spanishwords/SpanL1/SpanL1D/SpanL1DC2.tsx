import {spanishlesson1D} from '../SpanL1Lessons/SpanL1D'
import {Card} from './SpanL1DIndex';

export function SpanL1DC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson1D[1].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson1D[1].ephrase}</div>


            )}
        </div>
    );
}