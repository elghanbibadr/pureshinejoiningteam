/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white":"#fff",
        "bodyBg":"#1B2430",
        'regalBlue': '#243c5a',
        "black":"#000",
        "secondColor":"rgb(31 41 55/1)",
        "cyan":'#3792e4',
      },
    },
  },
  plugins: [],
}