const isDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

const componentName = 'tag'

module.exports = {
  entry: {
    [`react-${componentName}`]: isDev
      ? ['./dev', 'webpack-hot-middleware/client']
      : ['./src'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: 'ReactTag',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    alias: {
      'react': 'react/dist/react.js',
      'react-dom': 'react-dom/dist/react-dom.js',
    }
  },
  plugins: isDev
    ?
      [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
      ]
    :
      [

      ],
  watch: isDev ,
  devtool: isDev ? 'eval' : '',
  externals: isDev ? {}
  :
    {
      'react': 'React'
    }
}
