import {italianlesson1B} from 'src/app/components/learning/italianwords/ItalL1/ItalL1Lessons/ItalL1B.tsx'

export function ItalL1BC1({isActive, onShow, unShow})
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson1B[0].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson1B[0].pronunciation}</div>

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson1B[0].ephrase}</div>


            )}
        </div>
    );
}