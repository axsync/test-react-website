import React, { useState } from 'react'

const BlackHoles: React.FC = () => {
  const [hoveredBlackHole, setHoveredBlackHole] = useState<string | null>(null)

  const blackHoles = [
    { 
      name: 'Sagittarius A*', 
      emoji: '⚫', 
      description: 'The supermassive black hole at the center of our Milky Way galaxy',
      color: 'from-gray-900 via-black to-purple-900',
      glow: 'shadow-glow-purple',
      mass: '4.3 million solar masses'
    },
    { 
      name: 'Cygnus X-1', 
      emoji: '🌀', 
      description: 'The first widely accepted black hole discovered in the constellation Cygnus',
      color: 'from-blue-900 via-black to-purple-900',
      glow: 'shadow-glow-cyan',
      mass: '21.3 solar masses'
    },
    { 
      name: 'TON 618', 
      emoji: '🌑', 
      description: 'One of the most massive known black holes, with a mass of 66 billion solar masses',
      color: 'from-indigo-900 via-black to-purple-900',
      glow: 'shadow-glow-purple',
      mass: '66 billion solar masses'
    },
  ]

  return (
    <section id="black-holes" className="relative py-20 px-6 bg-cosmic-gradient overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 animate-stars-slow"></div>
      <div className="absolute inset-0 animate-stars-fast opacity-40"></div>
      
      {/* Accretion Disk Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 rounded-full blur-3xl animate-nebula"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow">
          <span className="gradient-text">Black Holes</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The most mysterious objects in the universe, where gravity is so strong that nothing can escape
        </p>
      </div>
      
      {/* Black Holes Grid */}
      <div className="relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blackHoles.map((blackHole, index) => (
            <div
              key={blackHole.name}
              className={`glass-dark p-8 rounded-3xl transition-all duration-500 card-hover group ${
                hoveredBlackHole === blackHole.name ? 'scale-110' : ''
              }`}
              onMouseEnter={() => setHoveredBlackHole(blackHole.name)}
              onMouseLeave={() => setHoveredBlackHole(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Black Hole Visual */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Event Horizon Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${blackHole.color} rounded-full blur-xl opacity-60 animate-pulse-glow-slow ${blackHole.glow}`}></div>
                
                {/* Accretion Disk */}
                <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin-slow"></div>
                <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                
                {/* Black Hole Core */}
                <div className="absolute inset-0 bg-black rounded-full shadow-inner">
                  {/* Inner Glow */}
                  <div className="absolute inset-2 bg-gradient-to-br ${blackHole.color} rounded-full animate-pulse-glow"></div>
                </div>
                
                {/* Photon Sphere */}
                <div className="absolute inset-0 rounded-full border border-white/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
              </div>
              
              {/* Black Hole Info */}
              <h3 className="text-2xl font-bold text-white mb-3 text-center">{blackHole.emoji} {blackHole.name}</h3>
              <p className="text-gray-300 text-center leading-relaxed mb-4">
                {blackHole.description}
              </p>
              <div className="text-center">
                <span className="text-sm text-gray-400">Mass:</span>
                <span className="text-lg font-bold text-white ml-2">{blackHole.mass}</span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default BlackHoles
