const isDev = process.env.NODE_ENV !== 'production'

module.exports = (cfg)=>{
  cfg.set({
    basePath: `./test`,
    files: [
      '**/*.js',
    ],
    exclude: [
      'node_modules/**'
    ],
    frameworks: ['mocha', 'chai'],

    preprocessors: {
      '**/*.js': ['babel', 'coverage', 'webpack']
    },

    webpackMiddleware: {
      stats: {
        color:true
      }
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)\//,
            loader: 'isparta-instrumenter',
          },
        ]
      },
      resolve: {
        alias: {
          'react': 'react/dist/react.js',
          'react-dom': 'react-dom/dist/react-dom.js',
        }
      },
    },

    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: `${__dirname}/coverage`,
      reporters: [
        { type: 'lcov', subdir: './'},
      ]
    },
    browsers: ['Chrome'],
    singleRun: !isDev,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: cfg.LOG_DISABLE,
  })
}
