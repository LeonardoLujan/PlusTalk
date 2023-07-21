"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/Link';
import Image from 'next/Image'
import ItalianFlag2 from 'src/app/components/select/ItalianFlag2.jpg'


export function ItalianLink() {
        
    const path = usePathname()
    

    

    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center font-medium">
            { path === "/Login/select/italian" ?
                (
                    <div class="p-2 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 class=""> Italian</h1>
                        <Image class="rounded-full px-3" src={ItalianFlag2} height={60} width={60}/>
                    </div>
                
                ) : (
                    <div class="flex justify-center items-center">
        
                        <Link href="/Login/select/italian"> Italian</Link>
                        <Image class="rounded-full px-3" src={ItalianFlag2} height={60} width={60}/> 
                    </div>
                )   

            }
            

                
            

        </div>
    )
}