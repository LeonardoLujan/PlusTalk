import {hindilesson1} from '../HindiLessons/HindiLesson1';
import {Card} from './HindiL1Index';

export function HindiL1C3({isActive, onShow, unShow} : Card)
        {
    return(
        <div className="shadow-sm my-3 rounded px-3">
            {isActive ? (
                <div onClick={() => unShow}>{hindilesson1[2].hphrase}</div>

            ) : (
                <div onClick={() => onShow}>{hindilesson1[2].ephrase}</div>


            )}
        </div>
    );
}