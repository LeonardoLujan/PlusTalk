import {italianlesson1} from '../italianLessons/ItalLesson1.tsx';


export function ItalL1C3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{italianlesson1[2].iphrase}</div>

            ) : (
                <div onClick={onShow}>{italianlesson1[2].ephrase}</div>


            )}
        </div>
    );
}