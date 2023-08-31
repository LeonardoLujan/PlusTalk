"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import IndianFlag from 'src/app/components/select/IndianFlag.png';


export default function HindiLink() {
        
    const path = usePathname()
    

    return(
        <div className="p-1 text-black text-3xl flex justify-center items-center font-medium">
            { path === "/select/hindi" ?
                (
                    <div className="p-5 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 className=""> Hindi</h1>
                        <Image className="rounded-full px-3" alt ="Indian Flag" src={IndianFlag} height={60} width={60}/>
                    </div>
                
                ) : (
                    <div className="flex justify-center items-center">
        
                        <Link href="/select/hindi"> Hindi</Link>
                        <Image className="rounded-full px-3" alt="Indian Flag" src={IndianFlag} height={60} width={60}/> 
                    </div>
                )   

            }
            

                
            

        </div>
    )
}