"use client"

import {useState} from 'react'
import NavBarComponent from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import SelectPort from './SelectPort';
import {PortL1Index} from './PortL1/PortL1Index';
import {PortL2Index} from './PortL2/PortL2Index';
import {PortL3Index} from './PortL3/PortL3Index';
import {PortL4Index} from './PortL4/PortL4Index';

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