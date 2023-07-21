"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/Link';
import Image from 'next/Image'
import ItalianFlag2 from 'src/app/components/select/ItalianFlag2.jpg'


export function ItalianLink() {
        
    const path = usePathname()
    

    

    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center">
            { path === "/Login/select/italian" ?
                (
                    <h1 class="text-sky-500"> Italian</h1>
                
                ) : (
        
                        <Link href="/Login/select/italian"> Italian</Link> 
                    
                )   

            }
            

                <Image class="rounded-full px-3" src={ItalianFlag2} height={60} width={60}/>
            

        </div>
    )
}