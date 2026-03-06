import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-6 bg-cosmic-gradient overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 animate-stars-slow"></div>
      <div className="absolute inset-0 animate-stars-fast opacity-20"></div>
      
      {/* Nebula Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nebula-purple/15 rounded-full blur-3xl animate-nebula"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow">
            About <span className="gradient-text">Space</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The universe is vast, mysterious, and full of wonders waiting to be discovered
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Space is the boundless three-dimensional extent in which objects and events have relative position and direction. The universe is estimated to contain over 100 billion galaxies, each containing billions of stars.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              From the smallest particles to the largest structures, space encompasses everything that exists. Our journey to understand the cosmos has only just begun, and there is still so much to discover.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text-gold mb-2">100B+</div>
                <div className="text-gray-400">Galaxies</div>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100Trillion+</div>
                <div className="text-gray-400">Stars</div>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text-gold mb-2">13.8B</div>
                <div className="text-gray-400">Years Old</div>
              </div>
              <div className="glass p-6 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">46B</div>
                <div className="text-gray-400">Light Years</div>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="relative">
            {/* Central Planet */}
            <div className="relative w-64 h-64 mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse-glow-slow"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full shadow-glow-purple">
                {/* Moon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gray-300 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                {/* Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin-slow"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-0 w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

export default About
