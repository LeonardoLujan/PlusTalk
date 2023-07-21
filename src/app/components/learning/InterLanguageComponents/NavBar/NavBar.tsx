

import {ItalianLink} from './ItalianLink.tsx';
import {SpanishLink} from './SpanishLink.tsx';
import {PortugueseLink} from './PortugueseLink.tsx';
import {HindiLink} from './HindiLink.tsx';

export default function NavBar() {
    
    


    return(
        <div class="sticky shadow-xl h-screen border-8 rounded-xl border-solid">
        
            <div class="px-10 py-10">
                <ItalianLink/>
            </div>
            <div class="px-10 py-10">
                <SpanishLink/>
            </div>
            <div class="px-10 py-10">
                <PortugueseLink/>
            </div>
            <div class="px-10 py-10">
                <HindiLink/>
            </div>

            





        </div>

        
    );
}