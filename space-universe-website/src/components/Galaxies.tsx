import React, { useState } from 'react'

const Galaxies: React.FC = () => {
  const [hoveredGalaxy, setHoveredGalaxy] = useState<string | null>(null)

  const galaxies = [
    { 
      name: 'Milky Way', 
      emoji: '🌌', 
      description: 'Our home galaxy, a barred spiral containing 100-400 billion stars',
      color: 'from-purple-600 via-pink-500 to-blue-500',
      glow: 'shadow-glow-purple',
      stars: 40000000000
    },
    { 
      name: 'Andromeda', 
      emoji: '🌀', 
      description: 'The nearest major galaxy, on a collision course with the Milky Way',
      color: 'from-blue-600 via-cyan-500 to-teal-500',
      glow: 'shadow-glow-cyan',
      stars: 10000000000
    },
    { 
      name: 'Triangulum', 
      emoji: '✨', 
      description: 'Third-largest galaxy in the Local Group',
      color: 'from-indigo-600 via-purple-500 to-pink-500',
      glow: 'shadow-glow-purple',
      stars: 4000000000
    },
    { 
      name: 'Sombrero', 
      emoji: '🎩', 
      description: 'A unique elliptical galaxy with a bright bulge and prominent dust lane',
      color: 'from-amber-600 via-orange-500 to-red-500',
      glow: 'shadow-glow-gold',
      stars: 1000000000
    },
    { 
      name: 'Whirlpool', 
      emoji: '🌪️', 
      description: 'A grand-design spiral galaxy with well-defined arms',
      color: 'from-blue-500 via-indigo-500 to-purple-500',
      glow: 'shadow-glow-purple',
      stars: 3000000000
    },
    { 
      name: 'Cartwheel', 
      emoji: '🎡', 
      description: 'A ring galaxy created by a galactic collision',
      color: 'from-pink-500 via-red-500 to-orange-500',
      glow: 'shadow-glow-gold',
      stars: 2000000000
    },
  ]

  return (
    <section id="galaxies" className="relative py-20 px-6 bg-cosmic-gradient overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 animate-stars-slow"></div>
      <div className="absolute inset-0 animate-stars-fast opacity-30"></div>
      
      {/* Nebula Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-nebula-purple/20 rounded-full blur-3xl animate-nebula"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-nebula-blue/20 rounded-full blur-3xl animate-nebula-delayed"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow">
          <span className="gradient-text-gold">Galaxies</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore the vast collections of stars, gas, and dust that form the building blocks of the universe
        </p>
      </div>
      
      {/* Galaxies Grid */}
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {galaxies.map((galaxy, index) => (
            <div
              key={galaxy.name}
              className={`glass-dark p-8 rounded-3xl transition-all duration-500 card-hover group ${
                hoveredGalaxy === galaxy.name ? 'scale-110' : ''
              }`}
              onMouseEnter={() => setHoveredGalaxy(galaxy.name)}
              onMouseLeave={() => setHoveredGalaxy(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Galaxy Visual */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${galaxy.color} rounded-full blur-2xl opacity-40 animate-pulse-glow-slow ${galaxy.glow}`}></div>
                
                {/* Galaxy Core */}
                <div className={`relative w-full h-full bg-gradient-to-br ${galaxy.color} rounded-full animate-float`}>
                  {/* Spiral Arms */}
                  <div className="absolute inset-0 rounded-full">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-1/2 h-1 bg-white/30 rounded-full origin-left animate-spin-slow"
                        style={{
                          transform: `rotate(${i * 45}deg)`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Galaxy Info */}
              <h3 className="text-2xl font-bold text-white mb-3 text-center">{galaxy.emoji} {galaxy.name}</h3>
              <p className="text-gray-300 text-center leading-relaxed mb-4">
                {galaxy.description}
              </p>
              <div className="text-center">
                <span className="text-sm text-gray-400">Estimated Stars:</span>
                <span className="text-lg font-bold text-white ml-2">{galaxy.stars.toLocaleString()}</span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
    </section>
  )
}

export default Galaxies
