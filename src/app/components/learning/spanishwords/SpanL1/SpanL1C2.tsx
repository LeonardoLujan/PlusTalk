import {spanishlesson1} from '../SpanishLessons/SpanLesson1.tsx';


export function SpanL1C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-md my-3">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson1[1].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson1[1].ephrase}</div>


            )}
        </div>
    );
}