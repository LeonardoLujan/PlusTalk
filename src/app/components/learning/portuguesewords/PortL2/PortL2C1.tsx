import {portugueselesson2} from '../PortugueseLessons/PortLesson2.tsx';


export function PortL2C1({isActive, onShow, unShow})
        {
    return(
        <div class="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{portugueselesson2[0].pphrase}</div>

            ) : (
                <div onClick={onShow}>{portugueselesson2[0].ephrase}</div>


            )}
        </div>
    );
}