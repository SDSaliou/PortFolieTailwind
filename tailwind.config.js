/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'fuchsia':'#a21caf',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
