"use client"

import {useState} from 'react'
import NavBarComponent from '../InterLanguageComponents/NavBar/NavBarComponent'
import SelectItal from './SelectItal';


export default function IndexItalian() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
            

                    <div className="grid-cols-6 grid space-x-10">
                        <div className="col-span-1 ">

                            <NavBarComponent/>

                        </div>

                        <div className="col-span-5">
                        
                            <SelectItal/>
                        </div>
                        
                        
                        
                    
                    </div>
        </div>
        
    )
}

