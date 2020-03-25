const pluginsProd = [
  require('postcss-uncss')({
    html: ['index.html']
  }),
  require('autoprefixer'),
  require('cssnano')
]

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? pluginsProd : [])
  ]
}
