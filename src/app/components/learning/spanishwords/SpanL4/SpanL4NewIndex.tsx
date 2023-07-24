"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import {SpanL4AIndex} from 'src/app/components/learning/spanishwords/SpanL4/SpanL4A/SpanL4AIndex.tsx';
import {SpanL4BIndex} from 'src/app/components/learning/spanishwords/SpanL4/SpanL4B/SpanL4BIndex.tsx';
import {SpanL4CIndex} from 'src/app/components/learning/spanishwords/SpanL4/SpanL4C/SpanL4CIndex.tsx';
import {SpanL4DIndex} from 'src/app/components/learning/spanishwords/SpanL4/SpanL4D/SpanL4DIndex.tsx';


export default function SpanL4NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>
                        

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <SpanL4AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <SpanL4BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <SpanL4CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <SpanL4DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                           
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}