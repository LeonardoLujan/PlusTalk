import {portugueselesson1} from '../PortugueseLessons/PortLesson1.tsx';


export function PortL1C4({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{portugueselesson1[3].pphrase}</div>

            ) : (
                <div onClick={onShow}>{portugueselesson1[3].ephrase}</div>


            )}
        </div>
    );
}