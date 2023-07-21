import {spanishlesson1} from '../SpanishLessons/SpanLesson1.tsx';


export function SpanL1C4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson1[3].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson1[3].ephrase}</div>


            )}
        </div>
    );
}