var gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('./dist/tawkTo.js')
    .pipe(gulp.dest('./demo'));
});