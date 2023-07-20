"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar.tsx'
import {SpanL1Index} from './SpanL1/SpanL1Index.tsx';
import {SpanL2Index} from './SpanL2/SpanL2Index.tsx';


export default function IndexSpanish() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div class="justify-center">

                    <div class="justify-center flex flex-col">
                        <div class="flex justify-center">
                            <h1>Spanish</h1>


                        </div>
                        <div>

                            <NavBar/>

                        </div>
                        <div>
                            <SpanL1Index
                            isLessonActive={activeLesson === 1}
                            onShowLesson={() => setActiveLesson(1)}
                            unShowLesson={() => setActiveLesson(0)}/>
                        </div>
                        <div>
                            <SpanL2Index
                            isLessonActive={activeLesson === 2}
                            onShowLesson={() => setActiveLesson(2)}
                            unShowLesson={() => setActiveLesson(0)}/>
                        </div>
                        
                        
                    </div>
        </div>
        
    )
}