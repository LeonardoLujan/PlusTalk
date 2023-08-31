"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent.tsx'
import SelectItal from './SelectItal.tsx';
import {ItalL1Index} from './ItalL1/ItalL1Index.tsx';
import {ItalL2Index} from './ItalL2/ItalL2Index.tsx';
import {ItalL3Index} from './ItalL3/ItalL3Index.tsx';
import {ItalL4Index} from './ItalL4/ItalL4Index.tsx';

export default function IndexItalian() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
            

                    <div class="grid-cols-6 grid space-x-10">
                        <div class="col-span-1 ">

                            <NavBar/>

                        </div>

                        <div class="col-span-5">
                        
                            <SelectItal/>
                        </div>
                        
                        
                        
                    
                    </div>
        </div>
        
    )
}