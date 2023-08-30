import Image from 'next/image'
import logo from './plustalklogo.jpeg'

export default function Logo() {
    return(
        <Image height={100} className="rounded-full p-1" src={logo} alt="PlusTalk Logo" />

    )
}