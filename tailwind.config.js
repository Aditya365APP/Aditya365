/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfcf0',
          100: '#fbf7cc',
          200: '#f7eeb3',
          300: '#f0d980',
          400: '#e4c34a',
          500: '#D4AF37',
          600: '#b8860b',
          700: '#9b7000',
          800: '#7e5b00',
          900: '#614600',
        },
        luxury: {
          black: '#0a0a0f',
          darkbg: '#0d0d1a',
          card: '#12121f',
          border: '#1e1e35',
        },
        neon: {
          red: '#ff2d55',
          gold: '#ffd700',
          blue: '#00d4ff',
          green: '#00ff88',
          purple: '#bf5af2',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luxury-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a0a1f 50%, #0a0f1f 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f5a623 0%, #ffd700 50%, #d4870a 100%)',
        'red-gradient': 'linear-gradient(135deg, #ff2d55 0%, #ff6b35 100%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'tick': 'tick 0.1s ease-in-out',
        'count-up': 'countUp 0.5s ease-out',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 5px #ffd700, 0 0 10px #ffd700' },
          '50%': { boxShadow: '0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ffd700' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #ffd700, 0 0 20px #ffd700' },
          'to': { textShadow: '0 0 20px #ffd700, 0 0 40px #ffd700, 0 0 60px #ff6b35' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        tick: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        countUp: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(255, 215, 0, 0.4)',
        'gold-lg': '0 0 40px rgba(255, 215, 0, 0.6)',
        'red': '0 0 20px rgba(255, 45, 85, 0.4)',
        'red-lg': '0 0 40px rgba(255, 45, 85, 0.6)',
        'blue': '0 0 20px rgba(0, 212, 255, 0.4)',
        'card': '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        'luxury': '0 20px 60px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [],
}
