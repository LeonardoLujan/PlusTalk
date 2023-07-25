"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import SelectPort from './SelectPort.tsx';
import {PortL1Index} from './PortL1/PortL1Index.tsx';
import {PortL2Index} from './PortL2/PortL2Index.tsx';
import {PortL3Index} from './PortL3/PortL3Index.tsx';
import {PortL4Index} from './PortL4/PortL4Index.tsx';

export default function IndexPortuguese() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>

                    <div class="grid-cols-6 grid space-x-10">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>

                        <div class="col-span-5">
                        
                            <SelectPort/>
                        </div>

                        
                        
                    
                    </div>
        </div>
        
    )
}