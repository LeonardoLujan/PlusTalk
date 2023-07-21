
import {spanishlesson4} from '../SpanishLessons/SpanLesson4.tsx';


export function SpanL4C4({isActive, onShow, unShow}){
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson4[3].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson4[3].ephrase}</div>


            )}
        </div>
    );
}