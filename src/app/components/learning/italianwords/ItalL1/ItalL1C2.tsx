import {italianlesson1} from '../italianLessons/ItalLesson1.tsx';


export function ItalL1C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{italianlesson1[1].iphrase}</div>

            ) : (
                <div onClick={onShow}>{italianlesson1[1].ephrase}</div>


            )}
        </div>
    );
}