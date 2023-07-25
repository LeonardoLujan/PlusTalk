"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import SelectSpan from './SelectSpanish.tsx';
import LessonIndex from './LessonSelect/LessonIndex.tsx';
import {SpanL1Index} from './SpanL1/SpanL1Index.tsx';
import {SpanL2Index} from './SpanL2/SpanL2Index.tsx';
import {SpanL3Index} from './SpanL3/SpanL3Index.tsx';
import {SpanL4Index} from './SpanL4/SpanL4Index.tsx';

export default function IndexSpanish() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    <div class="grid-cols-6 grid space-x-10">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>

                        <div class="col-span-5">
                        
                            <SelectSpan/>
                        </div>

                        
                        
                    
                    </div>
        </div>
        
    )
}