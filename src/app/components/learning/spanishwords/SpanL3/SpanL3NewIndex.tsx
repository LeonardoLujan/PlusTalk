"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import {SpanL3AIndex} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3A/SpanL3AIndex.tsx';
import {SpanL3BIndex} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3B/SpanL3BIndex.tsx';
import {SpanL3CIndex} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3C/SpanL3CIndex.tsx';
import {SpanL3DIndex} from 'src/app/components/learning/spanishwords/SpanL3/SpanL3D/SpanL3DIndex.tsx';


export default function SpanL3NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>
                        

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <SpanL3AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <SpanL3BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <SpanL3CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <SpanL3DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                           
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}