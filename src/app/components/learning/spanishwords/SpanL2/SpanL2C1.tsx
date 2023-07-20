import {spanishlesson2} from '../SpanishLessons/SpanLesson2.tsx';


export function SpanL2C1({isActive, onShow, unShow}){
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div onClick={unShow}>{spanishlesson2[0].iphrase}</div>

            ) : (
                <div onClick={onShow}>{spanishlesson2[0].ephrase}</div>


            )}
        </div>
    );
}