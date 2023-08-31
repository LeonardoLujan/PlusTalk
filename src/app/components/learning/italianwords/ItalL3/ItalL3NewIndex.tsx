"use client"

import {useState} from 'react'
import NavBarComponent from '@/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import {ItalL3AIndex} from '@/app/components/learning/italianwords/ItalL3/ItalL3A/ItalL3AIndex';
import {ItalL3BIndex} from '@/app/components/learning/italianwords/ItalL3/ItalL3B/ItalL3BIndex';
import {ItalL3CIndex} from '@/app/components/learning/italianwords/ItalL3/ItalL3C/ItalL3CIndex';
import {ItalL3DIndex} from '@/app/components/learning/italianwords/ItalL3/ItalL3D/ItalL3DIndex';

export interface Lesson {
    isLessonActive: boolean;
    onShowLesson: () => void;
    unShowLesson: () => void;
}

export default function ItalL3NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div className="grid-cols-6 grid">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>
                        

                        <div className="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div className="row-span-1 row-start-1">
                                <ItalL3AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-2">
                                <ItalL3BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-3">
                                <ItalL3CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-4">
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