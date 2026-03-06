import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 to-blue-900 py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Space Universe
        </div>
        <div className="space-x-6">
          <a href="#home" className="text-white hover:text-purple-300 transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-purple-300 transition-colors">About</a>
          <a href="#solar-system" className="text-white hover:text-purple-300 transition-colors">Solar System</a>
          <a href="#galaxies" className="text-white hover:text-purple-300 transition-colors">Galaxies</a>
          <a href="#black-holes" className="text-white hover:text-purple-300 transition-colors">Black Holes</a>
          <a href="#exoplanets" className="text-white hover:text-purple-300 transition-colors">Exoplanets</a>
          <a href="#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar