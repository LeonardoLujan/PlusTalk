import {italianlesson1A} from 'src/app/components/learning/italianwords/ItalL1/ItalL1Lessons/ItalL1A.tsx'

export function ItalL1AC3({isActive, onShow, unShow})
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div>
                
                    <div className="text-4xl " onClick={unShow}>{italianlesson1A[2].iphrase}</div>
                    
                    <div onClick={unShow}>{italianlesson1A[2].pronunciation}</div>

                </div>

            ) : (
                <div className="text-4xl" onClick={onShow}>{italianlesson1A[2].ephrase}</div>


            )}
        </div>
    );
}