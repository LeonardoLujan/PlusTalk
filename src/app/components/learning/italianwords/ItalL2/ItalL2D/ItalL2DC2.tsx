import {italianlesson2D} from '../ItalL2Lessons/ItalL2D'
import {Card} from './ItalL2DIndex';

export function ItalL2DC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson2D[1].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson2D[1].ephrase}</div>


            )}
        </div>
    );
}