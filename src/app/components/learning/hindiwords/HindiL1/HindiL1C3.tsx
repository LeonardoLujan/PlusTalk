import {hindilesson1} from '../HindiLessons/HindiLesson1.tsx';


export function HindiL1C3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{hindilesson1[2].hphrase}</div>

            ) : (
                <div onClick={onShow}>{hindilesson1[2].ephrase}</div>


            )}
        </div>
    );
}