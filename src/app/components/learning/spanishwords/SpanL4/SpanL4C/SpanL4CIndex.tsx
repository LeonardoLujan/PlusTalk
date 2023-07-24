"use client"

import {useState} from 'react'
import Image from 'next/Image'
import DownArrow from 'src/app/components/learning/spanishwords/DownArrow.png'
import {SpanL4CC1} from './SpanL4CC1.tsx';
import {SpanL4CC2} from './SpanL4CC2.tsx';
import {SpanL4CC3} from './SpanL4CC3.tsx';
import {SpanL4CC4} from './SpanL4CC4.tsx';

export function SpanL4CIndex({isLessonActive, onShowLesson, unShowLesson}){
    
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <div class="flex justify-center pb-8 px-1 w-full">
            {isLessonActive ? (
                <div class="ml-10 shadow-xl w-full rounded">
                    <div class="flex items-center rounded">

                        <h1 class="text-3xl mt-2">Lesson 4C:</h1>

                        <button class="mt-2 rounded" onClick={unShowLesson}>
                            <Image src={DownArrow} height={40} width={40}/>
                        </button>

                    </div>


                    <div class="mt-8 grid grid-cols-4 space-x-3 text-2xl">
                        <SpanL4CC1
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        unShow={() => setActiveIndex(0)}/>
                        <SpanL4CC2
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        unShow={() => setActiveIndex(0)}/>
                        <SpanL4CC3
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                        unShow={() => setActiveIndex(0)}/>
                        <SpanL4CC4
                        isActive={activeIndex === 4}
                        onShow={() => setActiveIndex(4)}
                        unShow={() => setActiveIndex(0)}/>


                    </div>
                </div>
            ) : (
                <div class="ml-10 shadow-lg rounded flex items-center w-full">
                    <h1 class="text-3xl mt-1">
                        Lesson 4C:
                    </h1>

                    <button class="mt-2 rounded" onClick={onShowLesson}>
                        <Image src={DownArrow} height={40} width={40}/>
                    </button>

                </div>
            )}

        </div>
    )

}