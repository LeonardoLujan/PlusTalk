"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import BrazilFlag from 'src/app/components/select/Brazil2.png';


export function PortugueseLink() {
        
    const path = usePathname()
    
    let mainpath = path.slice(8, -1)
    let isPortuguese = path.slice(0, 14)
    

    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center font-medium">
            {isPortuguese === "/select/portug" ?
                (   
                <div>
                    <div class="p-2 px-5 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 class="">  Portuguese </h1>
                        <Image class="rounded-full px-3" src={BrazilFlag} height={60} width={60}/>
                    </div>
                    <div>
                            {mainpath === "portugues" ? (
                                    <div>
                                        
                                    </div>
                            ): (
                                <div class="text-base ml-10 mt-4">
                                    <div>
                                        {path === "/select/portuguese/lesson1" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Greetings

                                        </div>
                                        ) : (
                                            <Link href="/select/portuguese/lesson1">
                                            Greetings
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/portuguese/lesson2" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Questions

                                        </div>
                                        ) : (
                                            <Link href="/select/portuguese/lesson2">
                                            Questions
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/portuguese/lesson3" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Getting Around

                                        </div>
                                        ) : (
                                            <Link href="/select/portuguese/lesson3">
                                            Getting Around
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/portuguese/lesson4" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Making Plans

                                        </div>
                                        ) : (
                                            <Link href="/select/portuguese/lesson4">
                                            Making Plans
                                            </Link>

                                        )

                                        }
                                    </div>
                                    

                                </div>
                            )}
                        </div>
                        
                    </div>
                    
                
                ) : (
                    <div>
                        <div class="flex justify-center items-center">
            
                            <Link href="/select/portuguese"> Portuguese</Link>
                            <Image class="rounded-full px-3" src={BrazilFlag} height={60} width={60}/> 

                        </div>
                        
                    </div>
                )   

            }
            

                
            

        </div>
    )
}