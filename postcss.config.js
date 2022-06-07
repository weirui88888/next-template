module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {},
      stage: 3
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [/^\.html/], //排除html样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
