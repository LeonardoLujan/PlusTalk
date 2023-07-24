"use client"

import {useState} from 'react'
import Image from 'next/Image'
import DownArrow from 'src/app/components/learning/spanishwords/DownArrow.png'
import {ItalL4DC1} from './ItalL4DC1.tsx';
import {ItalL4DC2} from './ItalL4DC2.tsx';
import {ItalL4DC3} from './ItalL4DC3.tsx';
import {ItalL4DC4} from './ItalL4DC4.tsx';

export function ItalL4DIndex({isLessonActive, onShowLesson, unShowLesson}){
    
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <div class="flex justify-center px-1 w-full">
            {isLessonActive ? (
                <div class="ml-10 shadow-xl w-full rounded">
                    <div class="flex items-center rounded">

                        <h1 class="text-3xl mt-2">Lesson 4D:</h1>

                        <button class="mt-2 rounded" onClick={unShowLesson}>
                            <Image src={DownArrow} height={40} width={40}/>
                        </button>

                    </div>


                    <div class="grid grid-cols-4 space-x-3 text-2xl">
                        <ItalL4DC1
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL4DC2
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL4DC3
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                        unShow={() => setActiveIndex(0)}/>
                        <ItalL4DC4
                        isActive={activeIndex === 4}
                        onShow={() => setActiveIndex(4)}
                        unShow={() => setActiveIndex(0)}/>


                    </div>
                </div>
            ) : (
                <div class="ml-10 shadow-lg rounded flex items-center w-full">
                    <h1 class="text-3xl mt-1">
                        Lesson 4D:
                    </h1>

                    <button class="mt-2 rounded" onClick={onShowLesson}>
                        <Image src={DownArrow} height={40} width={40}/>
                    </button>

                </div>
            )}

        </div>
    )

}