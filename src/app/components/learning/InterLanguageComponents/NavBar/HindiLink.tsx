"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/Link';
import Image from 'next/Image'
import IndianFlag from 'src/app/components/select/IndianFlag.png'


export function HindiLink() {
        
    const path = usePathname()
    

    

    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center font-medium">
            { path === "/Login/select/hindi" ?
                (
                    <div class="p-5 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 class=""> Hindi</h1>
                        <Image class="rounded-full px-3" src={IndianFlag} height={60} width={60}/>
                    </div>
                
                ) : (
                    <div class="flex justify-center items-center">
        
                        <Link href="/Login/select/hindi"> Hindi</Link>
                        <Image class="rounded-full px-3" src={IndianFlag} height={60} width={60}/> 
                    </div>
                )   

            }
            

                
            

        </div>
    )
}