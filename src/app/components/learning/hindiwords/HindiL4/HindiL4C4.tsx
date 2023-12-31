import {hindilesson4} from '../HindiLessons/HindiLesson4';
import {Card} from './HindiL4Index';

export function HindiL4C4({isActive, onShow, unShow} : Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{hindilesson4[3].hphrase}</div>

            ) : (
                <div onClick={onShow}>{hindilesson4[3].ephrase}</div>


            )}
        </div>
    );
}