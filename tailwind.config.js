const { theme } = require('tailwindcss/defaultConfig')

module.exports = {
  important: true,
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],
  theme: {
    fontFamily: {
      display: ['Source Sans Pro', 'sans-serif'],
      body: ['Source Code Pro', 'sans-serif']
    },
    extend: {
      colors: {
        primary: {
          light: '#ffe75b',
          DEFAULT: '#f8da2d',
          dark: '#d0b134',
        },
        secondary: '#222d41',
        background: '#1a202d',
        dark: '#a0aec0',
        light: '#e2e8f0',
      },
      borderRadius: {
        xl: '1.4rem'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}
