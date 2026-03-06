import React, { useState } from 'react'

const Exoplanets: React.FC = () => {
  const [hoveredExoplanet, setHoveredExoplanet] = useState<string | null>(null)

  const exoplanets = [
    { 
      name: 'Kepler-452b', 
      emoji: '🌍', 
      description: 'Earth\'s cousin, located 1,400 light-years away',
      color: 'from-blue-400 to-green-400',
      glow: 'shadow-glow-cyan',
      type: 'Super-Earth'
    },
    { 
      name: 'Proxima Centauri b', 
      emoji: '🪐', 
      description: 'The closest known exoplanet to our solar system',
      color: 'from-red-400 to-orange-400',
      glow: 'shadow-glow-gold',
      type: 'Rocky Planet'
    },
    { 
      name: 'TRAPPIST-1e', 
      emoji: '🌙', 
      description: 'Promising candidate for liquid water and potential life',
      color: 'from-blue-500 to-purple-500',
      glow: 'shadow-glow-purple',
      type: 'Terrestrial'
    },
    { 
      name: 'HD 209458b', 
      emoji: '🔥', 
      description: 'The first transiting exoplanet discovered',
      color: 'from-orange-500 to-red-500',
      glow: 'shadow-glow-gold',
      type: 'Hot Jupiter'
    },
    { 
      name: '55 Cancri e', 
      emoji: '💎', 
      description: 'A diamond planet with extreme temperatures',
      color: 'from-cyan-400 to-blue-500',
      glow: 'shadow-glow-cyan',
      type: 'Super-Earth'
    },
    { 
      name: 'WASP-12b', 
      emoji: '⭐', 
      description: 'Being consumed by its host star',
      color: 'from-yellow-400 to-red-500',
      glow: 'shadow-glow-gold',
      type: 'Hot Jupiter'
    },
  ]

  return (
    <section id="exoplanets" className="relative py-20 px-6 bg-cosmic-gradient overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 animate-stars-slow"></div>
      <div className="absolute inset-0 animate-stars-fast opacity-30"></div>
      
      {/* Nebula Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-blue/20 rounded-full blur-3xl animate-nebula"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-purple/20 rounded-full blur-3xl animate-nebula-delayed"></div>
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow">
          <span className="gradient-text-gold">Exoplanets</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Planets outside our solar system that orbit other stars, waiting to be discovered
        </p>
      </div>
      
      {/* Exoplanets Grid */}
      <div className="relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {exoplanets.map((exoplanet, index) => (
            <div
              key={exoplanet.name}
              className={`glass-dark p-8 rounded-3xl transition-all duration-500 card-hover group ${
                hoveredExoplanet === exoplanet.name ? 'scale-110' : ''
              }`}
              onMouseEnter={() => setHoveredExoplanet(exoplanet.name)}
              onMouseLeave={() => setHoveredExoplanet(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Exoplanet Visual */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exoplanet.color} rounded-full blur-xl opacity-50 animate-pulse-glow-slow ${exoplanet.glow}`}></div>
                
                {/* Exoplanet Body */}
                <div className={`relative w-full h-full bg-gradient-to-br ${exoplanet.color} rounded-full animate-float`}>
                  {/* Atmosphere Glow */}
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse-glow"></div>
                  
                  {/* Moon for Kepler-452b */}
                  {exoplanet.name === 'Kepler-452b' && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-gray-300 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                  )}
                  
                  {/* Ring for Proxima Centauri b */}
                  {exoplanet.name === 'Proxima Centauri b' && (
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow"></div>
                  )}
                </div>
              </div>
              
              {/* Exoplanet Info */}
              <h3 className="text-2xl font-bold text-white mb-3 text-center">{exoplanet.emoji} {exoplanet.name}</h3>
              <p className="text-gray-300 text-center leading-relaxed mb-4">
                {exoplanet.description}
              </p>
              <div className="text-center">
                <span className="text-sm text-gray-400">Type:</span>
                <span className="text-lg font-bold text-white ml-2">{exoplanet.type}</span>
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

export default Exoplanets
