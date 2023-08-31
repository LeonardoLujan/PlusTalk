import {italianlesson1D} from '../ItalL1Lessons/ItalL1D'
import {Card} from './ItalL1DIndex';

export function ItalL1DC3({isActive, onShow, unShow}: Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson1D[2].iphrase}</div>
                    
                    

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson1D[2].ephrase}</div>


            )}
        </div>
    );
}