import {spanishlesson1} from '../SpanishLessons/SpanLesson1.tsx';


export function SpanL1C3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-md my-3">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson1[2].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson1[2].ephrase}</div>


            )}
        </div>
    );
}