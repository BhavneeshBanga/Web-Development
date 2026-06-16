import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-18 bg-purple-600 flex text-white justify-between items-center p-5'>
            <Link href="/"><div className="logo text-lg font-bold">
                Bitlinks
            </div></Link>
            <ul className='flex gap-4 justify-center items-center'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About us</li></Link>
                <Link href="/"><li>Contact us</li></Link>
                <Link href="/"><li>Shorten</li></Link>
                <li>
                    <Link href="/shorten"><button  className='font-bold py-1 px-2 bg-purple-400 mx-2 rounded-lg'>Try Now</button></Link>
                    <Link href="/github"><button className='font-bold py-1 px-2 bg-purple-400 mx-2 rounded-lg'>Github</button ></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
