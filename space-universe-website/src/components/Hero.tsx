import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-gradient">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 animate-stars-slow"></div>
      <div className="absolute inset-0 animate-stars-fast opacity-50"></div>
      
      {/* Nebula Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple/20 rounded-full blur-3xl animate-nebula"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-blue/20 rounded-full blur-3xl animate-nebula-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-nebula-pink/10 rounded-full blur-3xl animate-nebula"></div>
      
      {/* Floating Stars */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
        />
      ))}
      
      {/* 3D Sun */}
      <div className="absolute top-20 right-20 w-32 h-32 md:w-48 md:h-48 animate-spin-slow">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 shadow-glow-gold animate-pulse-glow-slow"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300/50 to-transparent animate-pulse-glow"></div>
      </div>
      
      {/* 3D Moon */}
      <div className="absolute bottom-20 left-20 w-16 h-16 md:w-24 md:h-24 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 shadow-glow-blue"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent animate-pulse-glow"></div>
      </div>
      
      {/* Main Content with 3D Parallax */}
      <div 
        className="relative z-10 text-center px-6 perspective-1000 transform-style-3d"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
        }}
      >
        {/* Animated Rings */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 border border-white/10 rounded-full animate-spin-slow"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Main Title */}
        <div className="mb-8 animate-float">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 text-glow">
            EXPLORE
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold gradient-text-gold text-glow-gold animate-float-delayed">
            THE UNIVERSE
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Journey through the cosmos and discover the wonders of space exploration
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#about" 
            className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-110 hover:shadow-glow-purple overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            <span className="relative flex items-center gap-2">
              Start Exploring
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          
          <a 
            href="#solar-system" 
            className="px-10 py-4 glass rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-110 hover:bg-white/10"
          >
            Discover More
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>
    </section>
  )
}

export default Hero
