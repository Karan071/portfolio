/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:  {
        "theme-black" : "rgb(39, 39, 42)"
      }
    },
  },
  plugins: [],
}

