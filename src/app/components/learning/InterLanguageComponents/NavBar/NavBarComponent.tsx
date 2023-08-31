

import ItalianLink from './ItalianLink';
import SpanishLink from './SpanishLink';
import PortugueseLink from './PortugueseLink';
import HindiLink from './HindiLink';



export default function NavBarComponent() {
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