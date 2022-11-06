/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: "#4e73de",
        secondary: "#d3edf3",
        base: "#edeff2"
      }
    },
  },
  plugins: [],
}
