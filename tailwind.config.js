/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0b014f',
        line:'#e5901a',
      },
      fontFamily:{
        sanjana:['Roboto', 'sans-serif'],
      },
    },
  },
  plugins:  [],
}