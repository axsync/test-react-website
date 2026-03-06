/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#000000',
          800: '#050510',
          700: '#0A0A1F',
          600: '#12122E',
          500: '#1A1A3D',
          400: '#252558',
          300: '#323266',
          200: '#424278',
          100: '#5A5A8F',
        },
        star: {
          gold: '#FFD700',
          white: '#FFFFFF',
          blue: '#87CEEB',
        },
        nebula: {
          purple: '#9D4EDD',
          pink: '#FF6B6B',
          blue: '#4A90E2',
          cyan: '#00CED1',
        },
        cosmic: {
          deep: '#030014',
          void: '#000000',
        }
      },
      backgroundImage: {
        'stars': 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px)',
        'stars-fast': 'radial-gradient(white, rgba(255,255,255,.3) 1px, transparent 2px)',
        'stars-slow': 'radial-gradient(white, rgba(255,255,255,.25) 1.5px, transparent 2px)',
        'nebula-purple': 'linear-gradient(135deg, #9D4EDD 0%, #7B2CBF 50%, #5A189A 100%)',
        'nebula-blue': 'linear-gradient(135deg, #4A90E2 0%, #2E5A8A 50%, #1A3A5A 100%)',
        'nebula-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6B6B 100%)',
        'cosmic-gradient': 'linear-gradient(180deg, #000000 0%, #050510 50%, #0A0A1F 100%)',
        'galaxy-gradient': 'radial-gradient(ellipse at center, #1A1A3D 0%, #050510 50%, #000000 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'twinkle-delayed': 'twinkle 3s ease-in-out 1.5s infinite',
        'spin-slow': 'spin 60s linear infinite',
        'spin-slower': 'spin 120s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-glow-slow': 'pulse-glow 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 60s linear infinite',
        'nebula-drift': 'nebula-drift 20s ease-in-out infinite',
        'nebula-drift-delayed': 'nebula-drift 20s ease-in-out 10s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'rise': 'rise 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        pulse-glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(157, 78, 221, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(157, 78, 221, 0.8), 0 0 60px rgba(157, 78, 221, 0.4)' },
        },
        rotate-slow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        nebula-drift: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translate(50px, -30px) scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        rise: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(157, 78, 221, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)',
        'glow-blue': '0 0 30px rgba(74, 144, 226, 0.5), 0 0 60px rgba(74, 144, 226, 0.3)',
        'glow-gold': '0 0 30px rgba(255, 215, 0, 0.5), 0 0 60px rgba(255, 215, 0, 0.3)',
        'glow-cyan': '0 0 30px rgba(0, 206, 209, 0.5), 0 0 60px rgba(0, 206, 209, 0.3)',
      },
    },
  },
  plugins: [],
}
