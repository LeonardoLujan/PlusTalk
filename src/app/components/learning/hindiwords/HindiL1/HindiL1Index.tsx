"use client"

import {useState} from 'react'
import Image from 'next/image'
import DownArrow from 'src/app/components/learning/spanishwords/DownArrow.png'
import {HindiL1C1} from './HindiL1C1';
import {HindiL1C2} from './HindiL1C2';
import {HindiL1C3} from './HindiL1C3';
import {HindiL1C4} from './HindiL1C4';
import {Lesson} from '../IndexHindi';

export interface Card {
    isActive: boolean;
    onShow: () => void;
    unShow: () => void;
}




export function HindiL1Index({isLessonActive, onShowLesson, unShowLesson}: Lesson){
    
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <div className="flex justify-center pb-8 px-1 w-full">
            {isLessonActive ? (
                <div className="ml-10 shadow-xl w-full">
                    <div className="flex items-center rounded">

                        <h1 className="text-3xl mt-2">Lesson 1: Greetings & Introductions</h1>

                        <button className="mt-2 rounded" onClick={unShowLesson}>
                            <Image alt="DropDown Arrow" src={DownArrow} height={40} width={40}/>
                        </button>

                    </div>


                    <div className="mt-8 grid grid-cols-4 space-x-3 text-2xl">
                        <HindiL1C1 
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        unShow={() => setActiveIndex(0)}/>
                        <HindiL1C2
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        unShow={() => setActiveIndex(0)}/>
                        <HindiL1C3
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                        unShow={() => setActiveIndex(0)}/>
                        <HindiL1C4
                        isActive={activeIndex === 4}
                        onShow={() => setActiveIndex(4)}
                        unShow={() => setActiveIndex(0)}/>


                    </div>
                </div>
            ) : (
                <div className="ml-10 shadow-lg rounded flex items-center w-full">
                    <h1 className="text-3xl mt-1">
                        Lesson 1: Greetings & Introductions
                    </h1>

                    <button className="mt-2 rounded" onClick={onShowLesson}>
                        <Image alt="DropDown Arrow" src={DownArrow} height={40} width={40}/>
                    </button>

                </div>
            )}

        </div>
    )








}