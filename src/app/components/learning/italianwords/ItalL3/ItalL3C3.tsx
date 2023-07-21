import {italianlesson3} from '../ItalianLessons/ItalLesson3.tsx';


export function ItalL3C3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{italianlesson3[2].iphrase}</div>

            ) : (
                <div onClick={onShow}>{italianlesson3[2].ephrase}</div>


            )}
        </div>
    );
}