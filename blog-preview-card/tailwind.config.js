/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#F4D04E',
        'gray-950': '#111111',
        'gray-500': '#6B6B6B',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        'right': '6px 6px 0 rgba(0, 0, 0)',
      }
    },
  },
  plugins: [],
}