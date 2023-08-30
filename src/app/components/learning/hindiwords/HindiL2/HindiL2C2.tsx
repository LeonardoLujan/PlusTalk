import {hindilesson2} from '../HindiLessons/HindiLesson2';
import {Card} from './HindiL2Index';

export function HindiL2C2({isActive, onShow, unShow} : Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={() => unShow}>{hindilesson2[1].hphrase}</div>

            ) : (
                <div onClick={() => onShow}>{hindilesson2[1].ephrase}</div>


            )}
        </div>
    );
}