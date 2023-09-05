"use client"

import {useState} from 'react'
import NavBarComponent from '@/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import SelectSpan from './SelectSpanish';


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