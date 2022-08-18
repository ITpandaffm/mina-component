/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [typography, require('./plugin')],
}
