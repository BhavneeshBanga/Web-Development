import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='h-18 bg-slate-700 flex text-white justify-around items-center p-5 mb-14 '>
      <Link href="/" ><div className="logo font-bold text-4xl text-white cursor-pointer">
        <span className="text-emerald-500">&lt;</span>
        Pass<span className="text-emerald-500">OP</span><span className="text-emerald-500">/&gt;</span>
      </div></Link>
      <ul className='flex gap-4 justify-center items-center'>
        {/* <Link href="/"><li className='hover:font-bold'>Home</li></Link>
        <Link href="/about"><li className='hover:font-bold'>About us</li></Link>
        <Link href="/"><li className='hover:font-bold'>Contact us</li></Link> */}
        {/* <Link href="https://github.com/BhavneeshBanga" target="_blank"><li className='hover:font-bold'>Github</li></Link> */}
      </ul>
      <Link href="https://github.com/BhavneeshBanga" target="_blank"><button className='flex  cursor-pointer items-center gap-3 '>

        <img
          className="w-8 h-8  invert"
          src="/github.svg"
          alt="github"
        />
        <span className='text-xl'>Github</span>
      </button></Link>
    </nav>
  )
}

export default Navbar
