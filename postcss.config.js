module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'custom-properties': true,
        'custom-media-queries': true,
        'custom-selectors': true,
      }
    }),
    require ('postcss-custom-media'),
    require('postcss-color-mod-function'),
  ]
}