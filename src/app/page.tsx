import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-black p-6 ">
    
      <div className="text-5xl font-semibold justify-center flex items-center">
        Welcome to PlusTalk!
      </div>
    
      <div className="mt-4 border-4 rounded-full rounded-xl justify-center flex items-center">
        <Link href="/select">
          Click Here to Select a Language
        </Link>

      
      </div>
    
    
    </div>
  )
}
