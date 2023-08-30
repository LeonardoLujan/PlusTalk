import {hindilesson1} from '../HindiLessons/HindiLesson1.tsx';


export function HindiL1C2({isActive, onShow, unShow})
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{hindilesson1[1].hphrase}</div>

            ) : (
                <div onClick={onShow}>{hindilesson1[1].ephrase}</div>


            )}
        </div>
    );
}