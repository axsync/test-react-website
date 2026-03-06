import React from 'react'

const SolarSystem: React.FC = () => {
  return (
    <section id="solar-system" className="py-20 px-6 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Our Solar System
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover the planets and celestial bodies that make up our cosmic neighborhood
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['Sun', 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].map((planet) => (
            <div 
              key={planet}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-3">🪐</div>
              <h3 className="text-xl font-semibold text-white mb-2">{planet}</h3>
              <p className="text-gray-400 text-sm">
                {planet === 'Sun' && 'The star at the center of our solar system'}
                {planet === 'Mercury' && 'The smallest and innermost planet'}
                {planet === 'Venus' && 'The hottest planet with thick atmosphere'}
                {planet === 'Earth' && 'Our home, the only known planet with life'}
                {planet === 'Mars' && 'The Red Planet, target for exploration'}
                {planet === 'Jupiter' && 'The largest planet with the Great Red Spot'}
                {planet === 'Saturn' && 'Famous for its beautiful ring system'}
                {planet === 'Uranus' && 'An ice giant that rotates on its side'}
                {planet === 'Neptune' && 'The windiest planet in our solar system'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolarSystem