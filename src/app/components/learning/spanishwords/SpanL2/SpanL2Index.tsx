"use client"

import {useState} from 'react';
import {SpanL2C1} from './SpanL2C1';
import {SpanL2C2} from './SpanL2C2';
import {SpanL2C3} from './SpanL2C3';
import {SpanL2C4} from './SpanL2C4';

export function SpanL2Index({isLessonActive, onShowLesson, unShowLesson}){
    
    const [activeIndex, setActiveIndex] = useState(0);

    return(

        <div class="flex justify-center p-8">
            {isLessonActive ? (
                <div>
                    <h1>Lesson 2: Greetings & Introductions</h1>

                    <button class ="mt-2 shadow-md rounded" onClick={unShowLesson}>
                            This is the 2 button
                    </button>


                    <div class="mt-8">
                        <SpanL2C1
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                        unShow={() => setActiveIndex(0)}/>
                        <SpanL2C2
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                        unShow={() => setActiveIndex(0)}/>
                        <SpanL2C3
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                        unShow={() => setActiveIndex(0)}/>
                        <SpanL2C4
                        isActive={activeIndex === 4}
                        onShow={() => setActiveIndex(4)}
                        unShow={() => setActiveIndex(0)}/>


                    </div>
                </div>
            ) : (
                <div>
                    <h1>
                        Lesson 2: Greetings & Introductions
                    </h1>

                    <button class ="mt-2 shadow-md rounded" onClick={onShowLesson}>
                        This is the button
                    </button>

                </div>
            )}

        </div>
    );
}