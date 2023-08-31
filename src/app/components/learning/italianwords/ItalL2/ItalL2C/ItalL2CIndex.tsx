"use client"

import {useState} from 'react'
import Image from 'next/image'
import DownArrow from 'src/app/components/learning/spanishwords/DownArrow.png'
import {ItalL2CC1} from './ItalL2CC1';
import {ItalL2CC2} from './ItalL2CC2';
import {ItalL2CC3} from './ItalL2CC3';
import {ItalL2CC4} from './ItalL2CC4';
import {Lesson} from '../ItalL2NewIndex';

export interface Card {
    isActive: boolean;
    onShow: () => void;
    unShow: () => void;
}

export function ItalL2CIndex({isLessonActive, onShowLesson, unShowLesson}: Lesson){
    
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <div className="flex justify-center pb-8 px-1 w-full">
            {isLessonActive ? (
                <div className="ml-10 shadow-xl w-full rounded">
                    <div className="flex items-center rounded">

                        <h1 className="text-3xl mt-2">Lesson 2C:</h1>

                        <button className="mt-2 rounded" onClick={unShowLesson}>
                            <Image alt="Down Arrow" src={DownArrow} height={40} width={40}/>
                        </button>

                    </div>


                    <div className="grid grid-cols-4 space-x-3 text-xl">
                        <ItalL2CC1
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL2CC2
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL2CC3
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL2CC4
                        isActive={activeIndex === 4}
                        onShow={() => setActiveIndex(4)}
                        unShow={() => setActiveIndex(0)}/>


                    </div>
                </div>
            ) : (
                <div className="ml-10 shadow-lg rounded flex items-center w-full">
                    <h1 className="text-3xl mt-1">
                        Lesson 2C:
                    </h1>

                    <button className="mt-2 rounded" onClick={onShowLesson}>
                        <Image alt="Down Arrow" src={DownArrow} height={40} width={40}/>
                    </button>

                </div>
            )}

        </div>
    )

}