import Link from 'next/link';

export default function SelectSpan() {
    return(
        <div className="grid grid-cols-2 grid-rows-2 text-black text-6xl">
                <div className="col-span-1 row-span-1 col-start-1 row-start-1 my-10 mx-2 border-4 rounded-xl">
                    <Link href="/select/spanish/lesson1">
                        Lesson 1: Greetings
                    </Link>
                </div>
                <div className="col-span-1 row-span-1 col-start-2 row-start-1 my-10 mx-2 border-4 rounded-xl">
                    <Link href="/select/spanish/lesson2">
                        Lesson 2: Questions
                    </Link>
                        
                </div>
            <div className="col-span-1 row-span-1 col-start-1 row-start-2 my-10 mx-2 border-4 rounded-xl">
                    <Link href="/select/spanish/lesson3">
                        Lesson 3: Getting Around
                    </Link>
            </div>
            <div className="col-span-1 row-span-1 col-start-2 row-start-2 my-10 mx-2 border-4 rounded-xl">
                    <Link href="/select/spanish/lesson4">
                        Lesson 4: Making Plans
                    </Link>
            </div>

        </div>

    )
}