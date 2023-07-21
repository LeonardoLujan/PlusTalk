import {italianlesson2} from '../ItalianLessons/ItalLesson2.tsx';


export function ItalL2C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{italianlesson2[1].iphrase}</div>

            ) : (
                <div onClick={onShow}>{italianlesson2[1].ephrase}</div>


            )}
        </div>
    );
}