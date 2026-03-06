import React, { useState } from 'react'

const SolarSystem: React.FC = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)

  const planets = [
    { name: 'Sun', emoji: '☀️', description: 'The star at the center of our solar system', color: 'from-yellow-400 via-orange-500 to-red-600', glow: 'shadow-glow-gold' },
    { name: 'Mercury', emoji: '🪐', description: 'The smallest and innermost planet', color: 'from-gray-400 to-gray-600', glow: 'shadow-glow-blue' },
    { name: 'Venus', emoji: '🪐', description: 'The hottest planet with thick atmosphere', color: 'from-orange-300 to-yellow-200', glow: 'shadow-glow-purple' },
    { name: 'Earth', emoji: '🌍', description: 'Our home, the only known planet with life', color: 'from-blue-400 to-green-400', glow: 'shadow-glow-cyan' },
    { name: 'Mars', emoji: '🪐', description: 'The Red Planet, target for exploration', color: 'from-red-500 to-red-700', glow: 'shadow-glow-purple' },
    { name: 'Jupiter', emoji: '🪐', description: 'The largest planet with the Great Red Spot', color: 'from-orange-400 to-orange-600', glow: 'shadow-glow-gold' },
    { name: 'Saturn', emoji: '🪐', description: 'Famous for its beautiful ring system', color: 'from-yellow-300 to-yellow-500', glow: 'shadow-glow-gold', hasRings: true },
    { name: 'Uranus', emoji: '🪐', description: 'An ice giant that rotates on its side', color: 'from-cyan-300 to-blue-400', glow: 'shadow-glow-cyan' },
    { name: 'Neptune', emoji: '🪐', description: 'The windiest planet in our solar system', color: 'from-blue-500 to-blue-700', glow: 'shadow-glow-blue' },
  ]

  return (
    <section id="solar-system" className="relative py-20 px-6 bg-cosmic-gradient overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 animate-stars-slow"></div>
      
      {/* Nebula Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nebula-purple/10 rounded-full blur-3xl"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow">
          Our <span className="gradient-text">Solar System</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover the planets and celestial bodies that make up our cosmic neighborhood
        </p>
      </div>
      
      {/* Planets Grid */}
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {planets.map((planet, index) => (
            <div
              key={planet.name}
              className={`glass-dark p-8 rounded-3xl transition-all duration-500 card-hover group ${
                hoveredPlanet === planet.name ? 'scale-110' : ''
              }`}
              onMouseEnter={() => setHoveredPlanet(planet.name)}
              onMouseLeave={() => setHoveredPlanet(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Planet Visual */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${planet.color} rounded-full blur-xl opacity-50 animate-pulse-glow-slow ${planet.glow}`}></div>
                
                {/* Planet Body */}
                <div className={`relative w-full h-full bg-gradient-to-br ${planet.color} rounded-full animate-float`}>
                  {/* Rings for Saturn */}
                  {planet.hasRings && (
                    <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin-slow"></div>
                  )}
                  
                  {/* Moon for Earth */}
                  {planet.name === 'Earth' && (
                    <div className="absolute top-2 right-2 w-4 h-4 bg-gray-300 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                  )}
                </div>
              </div>
              
              {/* Planet Info */}
              <h3 className="text-2xl font-bold text-white mb-3 text-center">{planet.emoji} {planet.name}</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {planet.description}
              </p>
              
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

export default SolarSystem
