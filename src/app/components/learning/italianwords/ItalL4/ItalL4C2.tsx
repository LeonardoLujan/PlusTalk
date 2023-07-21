import {italianlesson4} from '../ItalianLessons/ItalLesson4.tsx';


export function ItalL4C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{italianlesson4[1].iphrase}</div>

            ) : (
                <div onClick={onShow}>{italianlesson4[1].ephrase}</div>


            )}
        </div>
    );
}