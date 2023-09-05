"use client"

import {useState} from 'react'
import NavBarComponent from '@/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import SelectPort from './SelectPort';


export default function IndexPortuguese() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>

                    <div className="grid-cols-6 grid space-x-10">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>

                        <div className="col-span-5">
                        
                            <SelectPort/>
                        </div>

                        
                        
                    
                    </div>
        </div>
        
    )
}