import {spanishlesson3D} from '../SpanL3Lessons/SpanL3D'
import {Card} from './SpanL3DIndex';

export function SpanL3DC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{spanishlesson3D[2].sphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{spanishlesson3D[2].ephrase}</div>


            )}
        </div>
    );
}