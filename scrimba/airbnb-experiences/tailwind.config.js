/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'bottom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'sm': '450px',
        'md': '640px',
      }
    },
  },
  plugins: [],
}

