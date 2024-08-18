/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green-grayish': '#1E201E',
        'dark-olive-green': '#3C3D37',
        'muted-olive-green': '#697565',
        'light-beige': '#fff1db',
      }
    },
  },
  plugins: [],
}

