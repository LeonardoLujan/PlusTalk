"use client"

import {useState} from 'react'
import NavBarComponent from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import {PortL2AIndex} from 'src/app/components/learning/portuguesewords/PortL2/PortL2A/PortL2AIndex';
import {PortL2BIndex} from 'src/app/components/learning/portuguesewords/PortL2/PortL2B/PortL2BIndex';
import {PortL2CIndex} from 'src/app/components/learning/portuguesewords/PortL2/PortL2C/PortL2CIndex';
import {PortL2DIndex} from 'src/app/components/learning/portuguesewords/PortL2/PortL2D/PortL2DIndex';

export default function PortL2NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div className="grid-cols-6 grid">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>
                        

                        <div className="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div className="row-span-1 row-start-1">
                                <PortL2AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-2">
                                <PortL2BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-3">
                                <PortL2CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-4">
                                <PortL2DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}