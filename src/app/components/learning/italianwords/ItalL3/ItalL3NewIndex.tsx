"use client"

import {useState} from 'react'
import NavBar from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBar.tsx'
import {ItalL3AIndex} from 'src/app/components/learning/italianwords/ItalL3/ItalL3A/ItalL3AIndex.tsx';
import {ItalL3BIndex} from 'src/app/components/learning/italianwords/ItalL3/ItalL3B/ItalL3BIndex.tsx';
import {ItalL3CIndex} from 'src/app/components/learning/italianwords/ItalL3/ItalL3C/ItalL3CIndex.tsx';
import {ItalL3DIndex} from 'src/app/components/learning/italianwords/ItalL3/ItalL3D/ItalL3DIndex.tsx';

export default function ItalL3NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div class="grid-cols-6 grid">
                        <div class="col-span-1">

                            <NavBar/>

                        </div>
                        

                        <div class="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div class="row-span-1 row-start-1">
                                <ItalL3AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-2">
                                <ItalL3BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-3">
                                <ItalL3CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div class="row-span-1 row-start-4">
                                <ItalL3DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}