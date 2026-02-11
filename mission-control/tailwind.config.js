/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          card: '#1a1a25',
          hover: '#252535',
        },
        accent: {
          primary: '#00d4aa',
          secondary: '#00a8ff',
          warning: '#ffaa00',
          danger: '#ff4757',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a0a0b0',
          muted: '#606070',
        },
        border: '#2a2a3a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}