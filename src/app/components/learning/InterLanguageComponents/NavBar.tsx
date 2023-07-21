

import {ItalianLink} from './ItalianLink.tsx';
import {SpanishLink} from './SpanishLink.tsx';

export default function NavBar() {
    
    


    return(
        <div class="shadow-xl h-screen border-8 rounded-xl border-solid">
        
            <div class="px-10 py-10">
                <ItalianLink/>
            </div>
            <div class="px-10 py-10">
                <SpanishLink/>
            </div>

            





        </div>

        
    );
}