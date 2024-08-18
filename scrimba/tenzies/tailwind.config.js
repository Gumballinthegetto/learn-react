/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sailor-moon-purple': '#424874',
        'teal-green': '#A6B1E160',
      },
    },
  },
  plugins: [],
}

