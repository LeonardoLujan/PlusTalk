"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import SelectLesson from 'src/app/components/learning/InterLanguageComponents/Headers/SelectLesson.tsx'
import LessonIndex from './LessonSelect/LessonIndex.tsx';
import {SpanL1Index} from './SpanL1/SpanL1Index.tsx';
import {SpanL2Index} from './SpanL2/SpanL2Index.tsx';
import {SpanL3Index} from './SpanL3/SpanL3Index.tsx';
import {SpanL4Index} from './SpanL4/SpanL4Index.tsx';

export default function IndexSpanish() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    <div>
                            <SelectLesson/>
                            <LessonIndex/>

                    </div>

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>
                        

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <SpanL1Index
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <SpanL2Index
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <SpanL3Index
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <SpanL4Index
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>

                        </div>
                        
                    
                    </div>
        </div>
        
    )
}