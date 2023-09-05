import {portugueselesson3D} from '../PortL3Lessons/PortL3D'
import {Card} from './PortL3DIndex';

export function PortL3DC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson3D[0].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson3D[0].ephrase}</div>


            )}
        </div>
    );
}