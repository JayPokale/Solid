/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':'384px',
        '2xs' : '320px'
      },
    },
  },
  plugins: [],
}
