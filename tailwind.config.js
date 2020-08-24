const { theme } = require('tailwindcss/defaultConfig')

module.exports = {
  important: true,
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      display: ['Source Sans Pro', 'sans-serif'],
      body: ['Source Code Pro', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#F8DA2D',
        secondary: '#222D41',
        background: '#1A202D',
        dark: '#A0AEC0',
        light: '#E2E8F0',
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
