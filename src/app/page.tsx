import Image from 'next/image'
import Link from 'next/Link';

export default function Home() {
  return (
    <div class="text-black p-6 ">
    
      <div class="text-4xl font-semibold justify-center flex items-center">
        Welcome to PlusTalk!
      </div>
    
      <div class="mt-4 border-4 rounded-full rounded-xl justify-center flex items-center">
        <Link href="/select">
          Click Here to Select a Language
        </Link>

      
      </div>
    
    
    </div>
  )
}
