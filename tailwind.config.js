/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Poppins', ...defaultTheme.fontFamily.sans]
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        'roboto': ['Roboto', 'sans-serif'],
      }
    }
  },
  plugins: [],
}