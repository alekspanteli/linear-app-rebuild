const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif;', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      background: "#000212",
      white: "#ffffff"
    },
    fontSize: {
      "md": "1.6rem",
      "lg": "2.2rem",
      "5xl": "8rem"
    },
  },
  plugins: [],
}