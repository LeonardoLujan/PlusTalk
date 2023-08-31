"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent.tsx'
import {ItalL2AIndex} from 'src/app/components/learning/italianwords/ItalL2/ItalL2A/ItalL2AIndex.tsx';
import {ItalL2BIndex} from 'src/app/components/learning/italianwords/ItalL2/ItalL2B/ItalL2BIndex.tsx';
import {ItalL2CIndex} from 'src/app/components/learning/italianwords/ItalL2/ItalL2C/ItalL2CIndex.tsx';
import {ItalL2DIndex} from 'src/app/components/learning/italianwords/ItalL2/ItalL2D/ItalL2DIndex.tsx';

export default function ItalL1NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>
                        

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <ItalL2AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <ItalL2BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <ItalL2CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <ItalL2DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}