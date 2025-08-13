/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#22223b',
        'second':'#9a8c98',
        'third': '#c9ada7',
        'gray': '#4a4e69',
        'light':'#f2e9e4',
        'darkBlue':'#003554'
      }
    },
  },
  plugins: [],
}

