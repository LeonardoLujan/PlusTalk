"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/Link';
import Image from 'next/Image'
import ItalianFlag2 from 'src/app/components/select/ItalianFlag2.jpg'


export function ItalianLink() {
        
    const path = usePathname()

    let mainpath = path.slice(14, -1)
    let isItalian = path.slice(0, 20)

    

    

    return(
        <div class="p-1 text-black text-3xl flex justify-center items-center font-medium">
            {isItalian === "/Login/select/italia" ?
                (   
                <div>
                    <div class="p-2 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 class="">  Italian </h1>
                        <Image class="rounded-full px-3" src={ItalianFlag2} height={60} width={60}/>
                    </div>
                    <div>
                            {mainpath != "italian/lesson" ? (
                                    <div>
                                        
                                    </div>
                            ): (
                                <div class="text-base ml-10 mt-4">
                                    <div>
                                        {path === "/Login/select/italian/lesson1" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 1

                                        </div>
                                        ) : (
                                            <Link href="/Login/select/italian/lesson1">
                                            Lesson 1
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/Login/select/italian/lesson2" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 2

                                        </div>
                                        ) : (
                                            <Link href="/Login/select/italian/lesson2">
                                            Lesson 2
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/Login/select/italian/lesson3" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 3

                                        </div>
                                        ) : (
                                            <Link href="/Login/select/italian/lesson3">
                                            Lesson 3
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/Login/select/italian/lesson4" ? (

                                        
                                        <div class="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Lesson 4

                                        </div>
                                        ) : (
                                            <Link href="/Login/select/italian/lesson4">
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
            
                            <Link href="/Login/select/italian"> Italian</Link>
                            <Image class="rounded-full px-3" src={ItalianFlag2} height={60} width={60}/> 

                        </div>
                        
                    </div>
                )   

            }
            

                
            

        </div>
    )
}