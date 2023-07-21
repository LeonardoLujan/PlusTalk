import {portugueselesson3} from '../PortugueseLessons/PortLesson3.tsx';


export function PortL3C4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{portugueselesson3[3].pphrase}</div>

            ) : (
                <div onClick={onShow}>{portugueselesson3[3].ephrase}</div>


            )}
        </div>
    );
}