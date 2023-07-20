import {spanishlesson1} from '../SpanishLessons/SpanLesson1.tsx';


export function SpanL1C1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-md">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson1[0].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson1[0].ephrase}</div>


            )}
        </div>
    );
}