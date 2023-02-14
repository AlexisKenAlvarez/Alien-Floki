/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbit': ['Orbitron'],
        'gruppo': ['Gruppo']
      },
      colors: {
        'mygrey': '#cdcdcd'
      }
    },
  },
  plugins: [],
}
