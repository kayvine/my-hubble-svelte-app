const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,svelte}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      green: colors.emerald,
      blue: colors.sky,
      yellow: colors.amber,
      black: colors.black,
      white: colors.white,
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      ...defaultTheme.screens,
      '2xl': '1280px',
    },
    extend: {
      colors: {
        primary: '#ff3e00',
        secondary: '#cc3100',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
