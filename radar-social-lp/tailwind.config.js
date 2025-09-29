/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#3F2B80',
        'brand-orange': '#FF6801',
        'brand-yellow': '#FFCD00',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'barrio': ['Barrio', 'cursive'],
      }
    },
  },
}