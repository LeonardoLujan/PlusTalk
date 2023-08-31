"use client"

import {useState} from 'react'
import NavBarComponent from '@/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import {ItalL4AIndex} from '@/app/components/learning/italianwords/ItalL4/ItalL4A/ItalL4AIndex';
import {ItalL4BIndex} from '@/app/components/learning/italianwords/ItalL4/ItalL4B/ItalL4BIndex';
import {ItalL4CIndex} from '@/app/components/learning/italianwords/ItalL4/ItalL4C/ItalL4CIndex';
import {ItalL4DIndex} from '@/app/components/learning/italianwords/ItalL4/ItalL4D/ItalL4DIndex';

export interface Lesson {
    isLessonActive: boolean;
    onShowLesson: () => void;
    unShowLesson: () => void;
}

export default function ItalL4NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div className="grid-cols-6 grid">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>
                        

                        <div className="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div className="row-span-1 row-start-1">
                                <ItalL4AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-2">
                                <ItalL4BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-3">
                                <ItalL4CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-4">
                                <ItalL4DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}