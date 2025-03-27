/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',        // Main background
        secondary: '#121212',      // Secondary backgrounds
        accent: '#00FFFF',         // Glowing accent color
        'accent-alt': '#FF00FF',   // Secondary accent for gradients
        text: '#F8F8F8',           // Main text color
        'text-dim': '#A0A0A0',     // Dimmed text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right, #000000, #0A0A0A, #121212)',
        'card-gradient': 'linear-gradient(135deg, rgba(10, 10, 10, 0.5), rgba(25, 25, 25, 0.8))',
      },
    },
  },
  plugins: [],
}; 