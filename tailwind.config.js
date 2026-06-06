/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        elevated: '#161616',
        border: 'rgba(240, 236, 228, 0.08)',
        ink: {
          DEFAULT: '#f0ece4',
          secondary: 'rgba(240, 236, 228, 0.6)',
          muted: 'rgba(240, 236, 228, 0.35)',
        },
        accent: {
          DEFAULT: '#4B5694',
          dim: 'rgba(75, 86, 148, 0.15)',
        },
        muted: {
          DEFAULT: 'rgba(240, 236, 228, 0.6)',
          strong: 'rgba(240, 236, 228, 0.8)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(240,236,228,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(240,236,228,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(0, 0, 0, 0.5)',
        'accent': '0 0 60px -10px rgba(75, 86, 148, 0.3)',
      },
    },
  },
  plugins: [],
}
