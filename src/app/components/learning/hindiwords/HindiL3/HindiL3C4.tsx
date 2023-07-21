import {hindilesson3} from '../HindiLessons/HindiLesson3.tsx';


export function HindiL3C4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{hindilesson3[3].hphrase}</div>

            ) : (
                <div onClick={onShow}>{hindilesson3[3].ephrase}</div>


            )}
        </div>
    );
}