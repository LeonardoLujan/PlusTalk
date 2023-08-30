import {hindilesson2} from '../HindiLessons/HindiLesson2.tsx';


export function HindiL2C4({isActive, onShow, unShow})
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{hindilesson2[3].hphrase}</div>

            ) : (
                <div onClick={onShow}>{hindilesson2[3].ephrase}</div>


            )}
        </div>
    );
}