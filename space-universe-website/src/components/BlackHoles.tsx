import React from 'react'

const BlackHoles: React.FC = () => {
  return (
    <section id="blackholes" className="py-20 px-6 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Black Holes
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Regions of spacetime where gravity is so strong that nothing can escape, not even light
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {['Event Horizon', 'Singularity', 'Accretion Disk', 'Gravitational Lensing'].map((hole) => (
            <div 
              key={hole}
              className="bg-gradient-to-br from-slate-800 to-gray-900 p-6 rounded-xl border border-gray-700/50 hover:border-gray-500 transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-3">🕳️</div>
              <h3 className="text-xl font-semibold text-white mb-2">{hole}</h3>
              <p className="text-gray-400 text-sm">
                {hole === 'Event Horizon' && 'The boundary around a black hole beyond which no light or other radiation can escape'}
                {hole === 'Singularity' && 'A point of infinite density at the center of a black hole'}
                {hole === 'Accretion Disk' && 'Orbiting matter that spirals into a black hole, heating up and emitting radiation'}
                {hole === 'Gravitational Lensing' && 'The bending of light by massive objects, creating distorted views of distant stars'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlackHoles