
import Lesson1 from './Lesson1.tsx'
import Lesson2 from './Lesson2.tsx'
import Lesson3 from './Lesson3.tsx'
import Lesson4 from './Lesson4.tsx'

export default function LessonIndex() {
    return(

        <div class="grid grid-cols-2 grid-rows-2">

            <div>
                <Lesson1/>
            </div>
            <div>
                <Lesson2/>
            </div>
            <div>
                <Lesson3/>
            </div>
            <div>
                <Lesson4/>
            </div>

            
            


        </div>
    )
    

}