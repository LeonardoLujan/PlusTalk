"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/Link';
import Image from 'next/Image'
import SpainFlagCropped from 'src/app/components/select/SpainFlagCropped.png'

export function SpanishLink() {

    const path = usePathname()
    let mainpath = path.slice(8, -1)
    let isSpanish = path.slice(0, 14)
    

    
    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center font-medium">
            {isSpanish === "/select/spanis" ?
                (   
                <div>
                    <div class="p-2 px-5 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 class="">  Spanish </h1>
                        <Image class="rounded-full px-3" src={SpainFlagCropped} height={60} width={60}/>
                    </div>
                    <div>
                            {mainpath != "spanish/lesson" ? (
                                    <div>
                                        
                                    </div>
                            ): (
                                <div class="text-base ml-10 mt-4">
                                    <div>
                                        {path === "/select/spanish/lesson1" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 1

                                        </div>
                                        ) : (
                                            <Link href="/select/spanish/lesson1">
                                            Lesson 1
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/spanish/lesson2" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 2

                                        </div>
                                        ) : (
                                            <Link href="/select/spanish/lesson2">
                                            Lesson 2
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/spanish/lesson3" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 3

                                        </div>
                                        ) : (
                                            <Link href="/select/spanish/lesson3">
                                            Lesson 3
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/spanish/lesson4" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 4

                                        </div>
                                        ) : (
                                            <Link href="/select/spanish/lesson4">
                                            Lesson 4
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
            
                            <Link href="/select/spanish"> Spanish</Link>
                            <Image class="rounded-full px-3" src={SpainFlagCropped} height={60} width={60}/> 

                        </div>
                        
                    </div>
                )   

            }
            

                
            

        </div>
    )
}