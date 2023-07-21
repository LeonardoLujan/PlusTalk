import {spanishlesson2} from '../SpanishLessons/SpanLesson2.tsx';


export function SpanL2C4({isActive, onShow, unShow}){
        
    return(
        <div class="shadow-md my-3 flex justify-center">
            {isActive ? (
                <div>
                
                    <div class="text-4xl " onClick={unShow}>{spanishlesson2[3].iphrase}</div>
                    
                    <div onClick={unShow}>{spanishlesson2[3].pronunciation}</div>

                </div>

            ) : (
                <div class="text-4xl" onClick={onShow}>{spanishlesson2[3].ephrase}</div>


            )}
        </div>
    );
}