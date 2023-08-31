"use client"

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import BrazilFlag from 'src/app/components/select/Brazil2.png';


export default function PortugueseLink() {
        
    const path = usePathname()
    
    let mainpath = path.slice(8, -1)
    let isPortuguese = path.slice(0, 14)
    

    return(
        <div className="p-1 text-black text-3xl flex justify-center items-center font-medium">
            {isPortuguese === "/select/portug" ?
                (   
                <div>
                    <div className="p-2 px-5 border-4 rounded-xl border-solid border-sky-300 flex justify-center items-center">
                        <h1 className="">  Portuguese </h1>
                        <Image className="rounded-full px-3" alt="Italian Flag" src={BrazilFlag} height={60} width={60}/>
                    </div>
                    <div>
                            {mainpath === "portugues" ? (
                                    <div>
                                        
                                    </div>
                            ): (
                                <div className="text-base ml-10 mt-4">
                                    <div>
                                        {path === "/select/portuguese/lesson1" ? (

                                        
                                        <div className="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
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

                                        
                                        <div className="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
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

                                        
                                        <div className="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
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

                                        
                                        <div className="border-2 rounded-xl border-solid border-sky-300 flex justify-center items-center">
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
                        <div className="flex justify-center items-center">
            
                            <Link href="/select/portuguese"> Portuguese</Link>
                            <Image className="rounded-full px-3" alt="Italian Flag" src={BrazilFlag} height={60} width={60}/> 

                        </div>
                        
                    </div>
                )   

            }
            

                
            

        </div>
    )
}