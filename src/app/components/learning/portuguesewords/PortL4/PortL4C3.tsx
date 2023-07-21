import {portugueselesson4} from '../PortugueseLessons/PortLesson4.tsx';


export function PortL4C3({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{portugueselesson4[2].pphrase}</div>

            ) : (
                <div onClick={onShow}>{portugueselesson4[2].ephrase}</div>


            )}
        </div>
    );
}