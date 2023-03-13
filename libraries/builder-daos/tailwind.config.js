/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1d1d1d', //@nero
        'secondary': '#FFFFFF',
        'hover': '#272626',
        'green': '#d7ff65',
        'purple': '#c46ef7',
        'light-grey': '#959595'
      }
    }
  },
  plugins: [],
}
