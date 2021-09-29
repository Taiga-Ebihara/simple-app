module.exports = {
  purge: ['@/src/**/*.{vue.js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['active', 'focus'],
      borderWidth: ['last'],
    },
  },
  plugins: [],
}
