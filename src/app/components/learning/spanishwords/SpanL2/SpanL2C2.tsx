import {spanishlesson2} from '../SpanishLessons/SpanLesson2.tsx';


export function SpanL2C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson2[1].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson2[1].ephrase}</div>


            )}
        </div>
    );
}