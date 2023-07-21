import {italianlesson1} from '../italianLessons/ItalLesson1.tsx';


export function ItalL1C4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{italianlesson1[3].iphrase}</div>

            ) : (
                <div onClick={onShow}>{italianlesson1[3].ephrase}</div>


            )}
        </div>
    );
}