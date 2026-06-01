import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div>
          <h2 className="text-xl font-bold">MyApp</h2>
          <p className="text-gray-400 text-sm mt-1">
            Building amazing web experiences.
          </p>
        </div>

        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © 2026 MyApp. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer