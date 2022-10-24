/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1D2123',
        'dark-alt': '#1A1E1F',
        'primary-grey': 'rgba(255, 255, 255, 0.25)',
        'secondary-grey': 'rgba(255, 255, 255, 0.5)',
        'primary-yellow': '#FACD66',
      },
      dropShadow: {
        '3xl': '-3.4px 0px 3.4px rgba(0, 0, 0, 0.38)',
        '4xl': '0px 0px 18px rgba(255, 255, 255, 0.3)'
      }
    },
  },
  plugins: [
  ],
}
