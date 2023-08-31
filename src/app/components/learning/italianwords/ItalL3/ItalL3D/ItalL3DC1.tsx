import {italianlesson3D} from '../ItalL3Lessons/ItalL3D'
import {Card} from './ItalL3DIndex';

export function ItalL3DC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson3D[0].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson3D[0].ephrase}</div>


            )}
        </div>
    );
}