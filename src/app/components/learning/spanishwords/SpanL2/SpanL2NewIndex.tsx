"use client"

import {useState} from 'react'
import NavBarComponent from 'src/app/components/learning/InterLanguageComponents/NavBar/NavBarComponent'
import {SpanL2AIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2A/SpanL2AIndex';
import {SpanL2BIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2B/SpanL2BIndex';
import {SpanL2CIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2C/SpanL2CIndex';
import {SpanL2DIndex} from 'src/app/components/learning/spanishwords/SpanL2/SpanL2D/SpanL2DIndex';


export default function SpanL2NewIndex() {
    
    const [activeLesson, setActiveLesson] = useState(1);
    

    return(
        <div>
                    

                    <div className="grid-cols-6 grid">
                        <div className="col-span-1">

                            <NavBarComponent/>

                        </div>
                        

                        <div className="mt-8 grid grid-rows-6 col-start-2 col-span-5 max-w-screen">
                            <div className="row-span-1 row-start-1">
                                <SpanL2AIndex
                                isLessonActive={activeLesson === 1}
                                onShowLesson={() => setActiveLesson(1)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-2">
                                <SpanL2BIndex
                                isLessonActive={activeLesson === 2}
                                onShowLesson={() => setActiveLesson(2)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-3">
                                <SpanL2CIndex
                                isLessonActive={activeLesson === 3}
                                onShowLesson={() => setActiveLesson(3)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                            <div className="row-span-1 row-start-4">
                                <SpanL2DIndex
                                isLessonActive={activeLesson === 4}
                                onShowLesson={() => setActiveLesson(4)}
                                unShowLesson={() => setActiveLesson(0)}/>
                            </div>
                           
                            
                            

                        </div>
                    </div>
                        
                    
                    
        </div>
        
    )
}