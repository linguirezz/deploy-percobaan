/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary':['Merriweather'],
      
      },
      colors:{
        primary : "#F6F6F6",
        secondary : "#B3A197",
        font : "#000000",
        third : "#73654e",
        fourth :"#ddd4d2",
        fifth :"#121415",
      }
    },
  },
  plugins: [],
}

