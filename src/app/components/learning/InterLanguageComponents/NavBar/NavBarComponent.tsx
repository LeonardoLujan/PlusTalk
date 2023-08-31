

import {ItalianLink} from './ItalianLink.tsx';
import {SpanishLink} from './SpanishLink.tsx';
import {PortugueseLink} from './PortugueseLink.tsx';
import {HindiLink} from './HindiLink.tsx';

export default function NavBar() {
    return(
        <div className="sticky shadow-xl h-screen border-8 rounded-xl border-solid">
        
            <div className="px-10 py-10">
                <ItalianLink/>
            </div>
            <div className="px-10 py-10">
                <SpanishLink/>
            </div>
            <div className="px-10 py-10">
                <PortugueseLink/>
            </div>
            <div className="px-10 py-10">
                <HindiLink/>
            </div>
        </div>

        
    );
}