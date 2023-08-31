"use client"

import {useState} from 'react'
import Image from 'next/image'
import DownArrow from 'src/app/components/learning/spanishwords/DownArrow.png'
import {ItalL4AC1} from './ItalL4AC1';
import {ItalL4AC2} from './ItalL4AC2';
import {ItalL4AC3} from './ItalL4AC3';
import {ItalL4AC4} from './ItalL4AC4';
import {Lesson} from '../ItalL4NewIndex';

export interface Card {
    isActive: boolean;
    onShow: () => void;
    unShow: () => void;
}

export function ItalL4AIndex({isLessonActive, onShowLesson, unShowLesson}: Lesson){
    
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <div className="flex justify-center pb-8 px-1 w-full">
            {isLessonActive ? (
                <div className="ml-10 shadow-xl w-full rounded">
                    <div className="flex items-center rounded">

                        <h1 className="text-3xl mt-2">Lesson 4A:</h1>

                        <button className="mt-2 rounded" onClick={unShowLesson}>
                            <Image alt="Down Arrow" src={DownArrow} height={40} width={40}/>
                        </button>

                    </div>


                    <div className="mt-8 grid grid-cols-4 space-x-3 text-2xl">
                        <ItalL4AC1
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL4AC2
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL4AC3
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL4AC4
                        isActive={activeIndex === 4}
                        onShow={() => setActiveIndex(4)}
                        unShow={() => setActiveIndex(0)}/>


                    </div>
                </div>
            ) : (
                <div className="ml-10 shadow-lg rounded flex items-center w-full">
                    <h1 className="text-3xl mt-1">
                        Lesson 4A:
                    </h1>

                    <button className="mt-2 rounded" onClick={onShowLesson}>
                        <Image alt="Down Arrow" src={DownArrow} height={40} width={40}/>
                    </button>

                </div>
            )}

        </div>
    )

}