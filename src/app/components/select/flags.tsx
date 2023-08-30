import Image from 'next/image'
import ItalianFlag2 from './ItalianFlag2.jpg'
import SpainFlag from './SpainFlagCropped.png'
import BrazilFlag from './Brazil2.png'
import IndianFlag from './IndianFlag.png'
import Link from 'next/link';

export default function Flags() {
    return(
        <div class="justify-center p-6">
        

            <div class="flex justify-center text-4xl font-semibold">
                <h1> Select a Language: </h1>
            </div>

            <div class="flex justify-center p-6">
            
                <div class="px-3">
                    <div>
                        <Link href="/select/italian">

                            <Image class="border-4 rounded-full" height={235} width={235} src={ItalianFlag2} alt="Italian Flag"/>
                        </Link>
                        
                    </div>

                    <h1 class="flex justify-center">Italian</h1>
                    
                </div>

                <div class="px-3"> 
                    <Link href="/select/spanish">
                        <Image class="border-4 rounded-full" height={235} width={235} src={SpainFlag} alt="Spain Flag"/>
                    </Link>
                    <h1 class="flex justify-center">Spanish</h1>
                    

                </div>     
                <div class="px-3"> 
                    <Link href="/select/portuguese">
                        <Image class="border-4 rounded-full" height={235} width={235} src={BrazilFlag} alt="Spain Flag"/>
                    </Link>
                    <h1 class="flex justify-center">Portuguese</h1>
                    

                </div> 
                <div class="px-3"> 
                    <Link href="/select/hindi">
                        <Image class="border-4 rounded-full" height={235} width={235} src={IndianFlag} alt="Spain Flag"/>
                    </Link>
                    <h1 class="flex justify-center">Hindi</h1>
                    

                </div> 
            </div>

        </div>


    );
}