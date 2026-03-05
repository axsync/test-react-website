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
          900: '#0B0D17',
          800: '#151932',
          700: '#1E2743',
          600: '#2A3B55',
          500: '#4A6FA5',
          400: '#7BA4C0',
          300: '#A6C3D9',
          200: '#C9E4F7',
          100: '#F0F6FC',
        },
        star: '#FFD700',
        nebula: '#9D4EDD',
      },
      backgroundImage: {
        'stars': 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px)',
        'nebula': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}