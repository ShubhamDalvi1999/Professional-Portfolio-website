/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',        // Darker background
        secondary: '#1A1A1A',      // Secondary backgrounds
        accent: '#FFB86C',         // Main amber accent (amber-500)
        'accent-alt': '#B45309',   // Secondary accent (amber-700)
        'accent-dark': '#78350F',  // Darker amber (amber-900)
        text: '#F8F8F8',           // Main text color
        'text-dim': '#A0A0A0',     // Dimmed text
        'cosmic-blue': '#1E3A8A',  // Blue for cosmic theme elements
        background: '#050505',     // Default background color
        foreground: '#F8F8F8',     // Default foreground color
        muted: {
          DEFAULT: '#0F0F0F',
          foreground: '#A0A0A0',
        },
        ring: 'rgba(245, 158, 11, 0.3)',
        destructive: {
          DEFAULT: '#881337',
          foreground: '#FEE2E2',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'auto-scroll': 'auto-scroll 60s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
        'auto-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 10px rgba(255, 184, 108, 0.4), 0 0 20px rgba(255, 184, 108, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(255, 184, 108, 0.6), 0 0 50px rgba(255, 184, 108, 0.4)',
          },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right, #000000, #0A0A0A, #121212)',
        'card-gradient': 'linear-gradient(135deg, rgba(10, 10, 10, 0.5), rgba(25, 25, 25, 0.8))',
        'amber-gradient': 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(180, 83, 9, 0.2))',
      },
    },
  },
  plugins: [],
}; 