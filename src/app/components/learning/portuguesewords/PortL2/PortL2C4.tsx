import {portugueselesson2} from '../PortugueseLessons/PortLesson2.tsx';


export function PortL2C4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{portugueselesson2[3].pphrase}</div>

            ) : (
                <div onClick={onShow}>{portugueselesson2[3].ephrase}</div>


            )}
        </div>
    );
}