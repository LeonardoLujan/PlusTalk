"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import {SpanL1AIndex} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1A/SpanL1AIndex.tsx';
import {SpanL1BIndex} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1B/SpanL1BIndex.tsx';
import {SpanL1CIndex} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1C/SpanL1CIndex.tsx';
import {SpanL1DIndex} from 'src/app/components/learning/spanishwords/SpanL1/SpanL1D/SpanL1DIndex.tsx';

export default function SpanL1NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>
                        

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <SpanL1AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <SpanL1BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <SpanL1CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <SpanL1DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}