"use client"

import {useState} from 'react'
import NavBarComponent from '@/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent';
import {ItalL1AIndex} from '@/app/components/learning/italianwords/ItalL1/ItalL1A/ItalL1AIndex';
import {ItalL1BIndex} from '@/app/components/learning/italianwords/ItalL1/ItalL1B/ItalL1BIndex';
import {ItalL1CIndex} from '@/app/components/learning/italianwords/ItalL1/ItalL1C/ItalL1CIndex';
import {ItalL1DIndex} from '@/app/components/learning/italianwords/ItalL1/ItalL1D/ItalL1DIndex';

export interface Lesson {
    isLessonActive: boolean;
    onShowLesson: () => void;
    unShowLesson: () => void;
}

export default function ItalL1NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div className="grid-cols-6 grid">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>
                        

                        <div className="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div className="row-span-1 row-start-1">
                                <ItalL1AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-2">
                                <ItalL1BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-3">
                                <ItalL1CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-4">
                                <ItalL1DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}