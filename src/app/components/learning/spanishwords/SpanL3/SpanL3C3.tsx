import {spanishlesson3} from '../SpanishLessons/SpanLesson3.tsx';


export function SpanL3C3({isActive, onShow, unShow}){
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson3[2].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson3[2].ephrase}</div>


            )}
        </div>
    );
}