import Image from 'next/image'
import ItalianFlag2 from './ItalianFlag2.jpg'
import SpainFlag from './SpainFlagCropped.png'
import BrazilFlag from './Brazil2.png'
import IndianFlag from './IndianFlag.png'
import Link from 'next/link';

export default function Flags() {
    return(
        <div className="justify-center p-6">
        

            <div className="flex justify-center text-4xl font-semibold">
                <h1> Select a Language: </h1>
            </div>

            <div className="flex justify-center p-6">
            
                <div className="px-3">
                    <div>
                        <Link href="/select/italian">

                            <Image className="border-4 rounded-full" height={235} width={235} src={ItalianFlag2} alt="Italian Flag"/>
                        </Link>
                        
                    </div>

                    <h1 className="flex justify-center">Italian</h1>
                    
                </div>

                <div className="px-3"> 
                    <Link href="/select/spanish">
                        <Image className="border-4 rounded-full" height={235} width={235} src={SpainFlag} alt="Spanish Flag"/>
                    </Link>
                    <h1 className="flex justify-center">Spanish</h1>
                    

                </div>     
                <div className="px-3"> 
                    <Link href="/select/portuguese">
                        <Image className="border-4 rounded-full" height={235} width={235} src={BrazilFlag} alt="Brazilian Flag"/>
                    </Link>
                    <h1 className="flex justify-center">Portuguese</h1>
                    

                </div> 
                <div className="px-3"> 
                    <Link href="/select/hindi">
                        <Image className="border-4 rounded-full" height={235} width={235} src={IndianFlag} alt="Indian Flag"/>
                    </Link>
                    <h1 className="flex justify-center">Hindi</h1>
                    

                </div> 
            </div>

        </div>


    );
}