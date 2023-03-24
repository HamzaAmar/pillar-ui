module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}
