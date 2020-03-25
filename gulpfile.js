const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

exports.default = () =>
  gulp
    .src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
