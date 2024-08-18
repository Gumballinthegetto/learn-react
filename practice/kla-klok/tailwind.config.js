/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'swarmy-green': "#607274",
        'eggy-beige': "#faeed1",
        'dark-green-grayish': '#1E201E',
        'dark-olive-green': '#3C3D37',
      }
    },
  },
  plugins: [],
}

