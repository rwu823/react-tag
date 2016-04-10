const gu = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const webpack = require('webpack')
const webpackConf = require('../webpack.config')

module.exports = (done)=>{
  const src = ['!dist/*.min.js', 'dist/*.js']

  webpack(webpackConf, (err, stats)=>{
    console.log(stats.toString({
      colors: true
    }))

    gu.src(src)
      .pipe(uglify())
      .pipe(rename((f)=>{
        f.basename += '.min'
      }))
      .pipe(gu.dest('dist'))
      .on('finish', done)
  })
}
