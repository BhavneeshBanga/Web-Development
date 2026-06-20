import React from 'react'

const Footer = () => {
  return (
  <footer className=" text-white relative mt-10 overflow-hidden">

  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-green-400/10 to-emerald-500/20 blur-3xl"></div>

  <div className="relative backdrop-blur-xl border-t border-white/20">
    <div className="max-w-7xl mx-auto px-6 py-8">

      <div className="flex flex-col items-center gap-3">

        <h2 className="font-bold text-4xl">
          <span className="text-emerald-500">&lt;</span>
          Pass<span className="text-emerald-500">OP</span>
          <span className="text-emerald-500">/&gt;</span>
        </h2>

        {/* <p className="text-white ">
          Your own secure password manager
        </p> */}

        <div className="w-40 h-[2px] bg-emerald-500 rounded-full"></div>

        <p className="text-white ">
          Crafted with ❤️ by Bhavneesh Banga
        </p>

      </div>

    </div>
  </div>

</footer>
  )
}

export default Footer