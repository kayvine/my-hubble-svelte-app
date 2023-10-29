const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,svelte}',
  ],
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.neutral,
      green: colors.emerald,
      error: colors.red,
      warning: colors.amber,
      info: colors.sky,
      success: colors.green,
      black: colors.black,
      white: colors.white,
    },
    container: {
      center: true,
      padding: '0.625rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
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
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
