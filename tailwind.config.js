/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,json}",
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    'main-font': [ '"Tilt Warp"', 'nunito', 'sans-serif'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}