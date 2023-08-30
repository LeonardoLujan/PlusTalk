import {hindilesson3} from '../HindiLessons/HindiLesson3';
import {Card} from './HindiL3Index';

export function HindiL3C1({isActive, onShow, unShow} : Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={() => unShow}>{hindilesson3[0].hphrase}</div>

            ) : (
                <div onClick={() => onShow}>{hindilesson3[0].ephrase}</div>


            )}
        </div>
    );
}