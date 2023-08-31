"use client"

import {useState} from 'react'
import NavBarComponent from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import {PortL3AIndex} from 'src/app/components/learning/portuguesewords/PortL3/PortL3A/PortL3AIndex';
import {PortL3BIndex} from 'src/app/components/learning/portuguesewords/PortL3/PortL3B/PortL3BIndex';
import {PortL3CIndex} from 'src/app/components/learning/portuguesewords/PortL3/PortL3C/PortL3CIndex';
import {PortL3DIndex} from 'src/app/components/learning/portuguesewords/PortL3/PortL3D/PortL3DIndex';

export default function PortL3NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div className="grid-cols-6 grid">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>
                        

                        <div className="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div className="row-span-1 row-start-1">
                                <PortL3AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-2">
                                <PortL3BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-3">
                                <PortL3CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-4">
                                <PortL3DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}