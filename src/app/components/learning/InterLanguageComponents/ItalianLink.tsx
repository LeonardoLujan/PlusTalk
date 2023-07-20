

import {useRouter} from 'next/navigation';
import Link from 'next/Link'


export default function ItalianLink({href}) {
    const location = useRouter();

    

    return(
        <div class="text-black">
            { location.pathname === "/Login/select/italian" ?
            (
                <h1 > You're on the Italian</h1>
            
            ) : (
                
                <h1><Link href="/Login/select/italian"> Italian </Link> </h1>
            )

            }

        </div>
    )
}