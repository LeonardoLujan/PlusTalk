import Image from 'next/Image'
import ItalianFlag2 from './ItalianFlag2.jpg'
import SpainFlag from './SpainFlagCropped.png'
import Link from 'next/link';

export default function Flags() {
    return(
        <div class="flext justify-center p-6">
        

            <div class="flex justify-center">
                <h1> Select a Language: </h1>
            </div>

            <div class="flex justify-center p-6">
            
                <div class="px-3">
                    <div>

                        <Image class="border-4 rounded-full" height={235} width={235} src={ItalianFlag2} alt="Italian Flag"/>
                        
                        
                    </div>

                    <h1 class="flex justify-center">Italian</h1>
                    
                </div>

                <div class="px-3"> 
                    <Link href="/Login/select/spanish">
                        <Image class="border-4 rounded-full" height={235} width={235} src={SpainFlag} alt="Spain Flag"/>
                    </Link>
                    <h1 class="flex justify-center">Spanish</h1>
                    

                </div>       
            </div>

        </div>


    );
}