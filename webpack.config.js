const isDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

const componentName = 'div'

module.exports = {
  entry: {
    [`react-${componentName}`]: isDev
      ? ['./dev/index.js', 'webpack-hot-middleware/client']
      : ['./src/index.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    library: 'ReactDiv',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: isDev ? ['react-hmre'] : []
        }
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
  devtool: isDev ? 'eval' : ''
}
