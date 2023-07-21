"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/Link';
import Image from 'next/Image'
import SpainFlagCropped from 'src/app/components/select/SpainFlagCropped.png'

export function SpanishLink() {

    const pathname = usePathname()
    

    

    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center">
            {pathname === "/Login/select/spanish" ?
                (
                    <div class="text-black text-sky-500"> Spanish </div>
                
                ) : (
                    
        
                    <div><Link href="/Login/select/spanish"> Spanish Link </Link> </div>
                        
                   
                )}


                <Image class="rounded-full px-3" src={SpainFlagCropped} height={60} width={60}/>



        </div>
    );
}