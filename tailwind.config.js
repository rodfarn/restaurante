module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
      height: {
        '500': '500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
