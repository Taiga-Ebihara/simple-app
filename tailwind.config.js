module.exports = {
  purge: ['@/src/**/*.{vue.js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active', 'focus'],
      borderWidth: ['last'],
    },
  },
  plugins: [],
}
