import {spanishlesson4} from '../SpanishLessons/SpanLesson4.tsx';


export function SpanL4C3({isActive, onShow, unShow}){
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson4[2].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson4[2].ephrase}</div>


            )}
        </div>
    );
}