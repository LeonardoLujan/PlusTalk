import {portugueselesson3} from '../PortugueseLessons/PortLesson3.tsx';


export function PortL3C2({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{portugueselesson3[1].pphrase}</div>

            ) : (
                <div onClick={onShow}>{portugueselesson3[1].ephrase}</div>


            )}
        </div>
    );
}