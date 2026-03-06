import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          About Our Universe
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">The Cosmos</h3>
            <p className="text-gray-300 leading-relaxed">
              Our universe is vast and mysterious, containing billions of galaxies, each with billions of stars. 
              From the smallest particles to the largest structures, there's always something new to discover.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Space Exploration</h3>
            <p className="text-gray-300 leading-relaxed">
              Through advanced technology and human ingenuity, we've sent probes and astronauts to explore 
              the far reaches of space, bringing back invaluable data about our cosmic neighborhood.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Future Horizons</h3>
            <p className="text-gray-300 leading-relaxed">
              The future of space exploration looks brighter than ever, with plans for manned missions to Mars,
              asteroid mining, and perhaps even reaching other star systems in the distant future.
            </p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Scientific Discovery</h3>
            <p className="text-gray-300 leading-relaxed">
              Every day, astronomers and scientists make new discoveries that challenge our understanding 
              of the universe, from black holes to exoplanets to the origins of life itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About