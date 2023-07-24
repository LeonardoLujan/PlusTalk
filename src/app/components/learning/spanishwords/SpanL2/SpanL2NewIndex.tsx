"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import {SpanL2AIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2A/SpanL2AIndex.tsx';
import {SpanL2BIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2B/SpanL2BIndex.tsx';
import {SpanL2CIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2C/SpanL2CIndex.tsx';
import {SpanL2DIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2D/SpanL2DIndex.tsx';


export default function SpanL2NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>
                        

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <SpanL2AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <SpanL2BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <SpanL2CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <SpanL2DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                           
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}