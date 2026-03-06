import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-blue-950 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Explore the <span className="text-purple-400">Universe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Journey through the cosmos and discover the wonders of space exploration
        </p>
        <a href="#about" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all transform hover:scale-105">
          Start Exploring
        </a>
      </div>
    </section>
  )
}

export default Hero