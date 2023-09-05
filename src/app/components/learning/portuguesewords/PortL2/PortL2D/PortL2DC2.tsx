import {portugueselesson2D} from '../PortL2Lessons/PortL2D'
import {Card} from './PortL2DIndex';

export function PortL2DC2({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson2D[1].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson2D[1].ephrase}</div>


            )}
        </div>
    );
}