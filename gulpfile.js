const gulp = require('gulp');
const inlinesource = require('gulp-inline-source');
const inlinesourceJS = require('gulp-inline-css');
const inlinesourceCS = require('gulp-inline-js');

gulp.task('default', () => {
  return gulp
    .src('./build/*.html')
    .pipe(replace('.js"></script>', '.js" inline></script>'))
    .pipe(replace('rel="stylesheet">', 'rel="stylesheet" inline>'))
    .pipe(
      inlinesourceJS({
        compress: false,
        ignore: ['png'],
      })
    )
    .pipe(
      inlinesourceCS({
        compress: false,
        ignore: ['png'],
      })
    )
    .pipe(gulp.dest('./build'));
});