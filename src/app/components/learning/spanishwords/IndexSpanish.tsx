"use client"

import {useState} from 'react'
import NavBarComponent from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import SelectSpan from './SelectSpanish';
import LessonIndex from './LessonSelect/LessonIndex';
import {SpanL1Index} from './SpanL1/SpanL1Index';
import {SpanL2Index} from './SpanL2/SpanL2Index';
import {SpanL3Index} from './SpanL3/SpanL3Index';
import {SpanL4Index} from './SpanL4/SpanL4Index';

export default function IndexSpanish() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    <div className="grid-cols-6 grid space-x-10">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>

                        <div className="col-span-5">
                        
                            <SelectSpan/>
                        </div>

                        
                        
                    
                    </div>
        </div>
        
    )
}