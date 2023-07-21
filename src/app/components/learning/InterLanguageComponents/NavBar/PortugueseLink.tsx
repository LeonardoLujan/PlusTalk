"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/Link';
import Image from 'next/Image'
import BrazilFlag from 'src/app/components/select/Brazil2.png'


export function PortugueseLink() {
        
    const path = usePathname()
    

    

    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center font-medium">
            { path === "/Login/select/portuguese" ?
                (
                    <div class="p-5 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 class=""> Portuguese</h1>
                        <Image class="rounded-full px-3" src={BrazilFlag} height={60} width={60}/>
                    </div>
                
                ) : (
                    <div class="flex justify-center items-center">
        
                        <Link href="/Login/select/portuguese"> Portuguese</Link>
                        <Image class="rounded-full px-3" src={BrazilFlag} height={60} width={60}/> 
                    </div>
                )   

            }
            

                
            

        </div>
    )
}