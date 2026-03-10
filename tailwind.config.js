/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette apaisante pour le bien-être
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Tons beige/crème relaxants
        cream: {
          50: '#fefdfb',
          100: '#fdf8f3',
          200: '#f9ede0',
          300: '#f3ddc6',
          400: '#e8c49e',
          500: '#d4a574',
        },
        // Tons terre/bois naturels
        earth: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e5ddd0',
          300: '#d1c4b0',
          400: '#b8a088',
          500: '#9c8269',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
