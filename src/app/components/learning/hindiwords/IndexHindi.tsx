"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents//NavBar/NavBar.tsx'
import {HindiL1Index} from './HindiL1/HindiL1Index.tsx';
import {HindiL2Index} from './HindiL2/HindiL2Index.tsx';
import {HindiL3Index} from './HindiL3/HindiL3Index.tsx';
import {HindiL4Index} from './HindiL4/HindiL4Index.tsx';

export default function IndexHindi() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>

                        <div class=" mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <HindiL1Index
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <HindiL2Index
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <HindiL3Index
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <HindiL4Index
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>

                        </div>
                        
                    
                    </div>
        </div>
        
    )
}