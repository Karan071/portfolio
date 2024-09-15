/** @type {import('tailwindcss').Config} */
import theme from 'tailwindcss/defaultTheme';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'black-theme': 'rgb(39, 39, 42)',
      },
    },
  },
  plugins: [],
}
