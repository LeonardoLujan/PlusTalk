"use client"

import {useState} from 'react'
import Image from 'next/image'
import DownArrow from 'src/app/components/learning/spanishwords/DownArrow.png'
import {ItalL1DC1} from './ItalL1DC1';
import {ItalL1DC2} from './ItalL1DC2';
import {ItalL1DC3} from './ItalL1DC3';
import {ItalL1DC4} from './ItalL1DC4';
import {Lesson} from '../ItalL1NewIndex';

export interface Card {
    isActive: boolean;
    onShow: () => void;
    unShow: () => void;
}

export function ItalL1DIndex({isLessonActive, onShowLesson, unShowLesson}: Lesson){
    
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <div className="flex justify-center px-1 w-full">
            {isLessonActive ? (
                <div className="ml-10 shadow-xl w-full rounded">
                    <div className="flex items-center rounded">

                        <h1 className="text-3xl mt-2">Lesson 1D</h1>

                        <button className="mt-2 rounded" onClick={unShowLesson}>
                            <Image alt="DownArrow" src={DownArrow} height={40} width={40}/>
                        </button>

                    </div>


                    <div className="grid grid-cols-4 space-x-3 text-2xl">
                        <ItalL1DC1
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL1DC2
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL1DC3
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL1DC4
                        isActive={activeIndex === 4}
                        onShow={() => setActiveIndex(4)}
                        unShow={() => setActiveIndex(0)}/>


                    </div>
                </div>
            ) : (
                <div className="ml-10 shadow-lg rounded flex items-center w-full">
                    <h1 className="text-3xl mt-1">
                        Lesson 1D
                    </h1>

                    <button className="mt-2 rounded" onClick={onShowLesson}>
                        <Image alt="DownArrow" src={DownArrow} height={40} width={40}/>
                    </button>

                </div>
            )}

        </div>
    )

}