const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl-max': { 'max': '1535px' },
        'xl-max': { 'max': '1279px' },
        'lg-max': { 'max': '1023px' },
        'md-max': { 'max': '767px' },
        'sm-max': { 'max': '639px' },
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
});
