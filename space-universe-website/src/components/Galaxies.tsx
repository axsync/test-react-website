import React from 'react'

const Galaxies: React.FC = () => {
  return (
    <section id="galaxies" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Galaxies
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore the vast collections of stars, gas, and dust that form the building blocks of the universe
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {['Milky Way', 'Andromeda', 'Triangulum', 'Sombrero', 'Whirlpool', 'Cartwheel'].map((galaxy) => (
            <div 
              key={galaxy}
              className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400 transition-all transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-xl font-semibold text-white mb-2">{galaxy}</h3>
              <p className="text-gray-400 text-sm">
                {galaxy === 'Milky Way' && 'Our home galaxy, a barred spiral containing 100-400 billion stars'}
                {galaxy === 'Andromeda' && 'The nearest major galaxy, on a collision course with the Milky Way'}
                {galaxy === 'Triangulum' && 'Third-largest galaxy in the Local Group'}
                {galaxy === 'Sombrero' && 'A unique elliptical galaxy with a bright bulge and prominent dust lane'}
                {galaxy === 'Whirlpool' && 'A grand-design spiral galaxy with well-defined arms'}
                {galaxy === 'Cartwheel' && 'A ring galaxy created by a galactic collision'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galaxies