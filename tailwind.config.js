/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tribePurple: '#6800B0',
        tribeGreen:  '#8CE04A',
        tribeRed:    '#FF1E1E',
        tribeYellow: '#FFD800',
        tribeDark:   '#2A0F3F',
      },
      fontFamily: {
        display: ['Impact','Inter','sans-serif'],
      }
    },
  },
  plugins: [],
}
