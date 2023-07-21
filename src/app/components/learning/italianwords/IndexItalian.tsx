"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import {ItalL1Index} from './ItalL1/ItalL1Index.tsx';
import {ItalL2Index} from './ItalL2/ItalL2Index.tsx';
import {ItalL3Index} from './ItalL3/ItalL3Index.tsx';
import {ItalL4Index} from './ItalL4/ItalL4Index.tsx';

export default function IndexItalian() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>

                    <div class="grid-cols-6 grid">
                        <div class=" col-span-1 ">

                            <NavBar/>

                        </div>

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <ItalL1Index
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <ItalL2Index
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <ItalL3Index
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <ItalL4Index
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>

                        </div>
                        
                    
                    </div>
        </div>
        
    )
}