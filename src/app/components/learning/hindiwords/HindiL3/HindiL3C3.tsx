import {hindilesson3} from '../HindiLessons/HindiLesson3';
import {Card} from './HindiL3Index';

export function HindiL3C3({isActive, onShow, unShow} : Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={unShow}>{hindilesson3[2].hphrase}</div>

            ) : (
                <div onClick={onShow}>{hindilesson3[2].ephrase}</div>


            )}
        </div>
    );
}