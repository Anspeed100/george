
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        canarobook: ['Canaro Book','sans-serif'],
        canarobold: ['Canaro Bold','sans-serif']
      }
    },
  },
  plugins: [],
}

