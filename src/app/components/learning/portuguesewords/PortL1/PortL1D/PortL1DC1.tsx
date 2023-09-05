import {portugueselesson1D} from '../PortL1Lessons/PortL1D'
import {Card} from './PortL1DIndex';

export function PortL1DC1({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{portugueselesson1D[0].pphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{portugueselesson1D[0].ephrase}</div>


            )}
        </div>
    );
}