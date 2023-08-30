"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ItalianFlag2 from 'src/app/components/select/ItalianFlag2.jpg';


export function ItalianLink() {
        
    const path = usePathname()

    let mainpath = path.slice(8, -1)
    let isItalian = path.slice(0, 14)
    

    

    

    return(
        <div className="p-1 text-black text-3xl flex justify-center items-center font-medium">
            {isItalian === "/select/italia" ?
                (   
                <div>
                    <div className="p-2 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 className="">  Italian </h1>
                        <Image className="rounded-full px-3" src={ItalianFlag2} height={60} width={60}/>
                    </div>
                    <div>
                            {mainpath != "italian/lesson" ? (
                                    <div>
                                        
                                    </div>
                            ): (
                                <div className="text-base ml-10 mt-4">
                                    <div>
                                        {path === "/select/italian/lesson1" ? (

                                        
                                        <div className=" border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Greetings

                                        </div>
                                        ) : (
                                            <Link href="/select/italian/lesson1">
                                            Greetings
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/italian/lesson2" ? (

                                        
                                        <div className="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Questions

                                        </div>
                                        ) : (
                                            <Link href="/select/italian/lesson2">
                                            Questions 
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/italian/lesson3" ? (

                                        
                                        <div className="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Getting Around

                                        </div>
                                        ) : (
                                            <Link href="/select/italian/lesson3">
                                            Getting Around
                                            </Link>

                                        )

                                        }
                                    </div>
                                    <div>
                                        {path === "/select/italian/lesson4" ? (

                                        
                                        <div className="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                                            Making Plans

                                        </div>
                                        ) : (
                                            <Link href="/select/italian/lesson4">
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
                        <div className="flex justify-center items-center">
            
                            <Link href="/select/italian"> Italian</Link>
                            <Image className="rounded-full px-3" src={ItalianFlag2} height={60} width={60}/> 

                        </div>
                        
                    </div>
                )   

            }
            

                
            

        </div>
    )
}