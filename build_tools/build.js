var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy : true });

gulp.task('build', function () {
  return gulp.src('./src/**/*.js')
    .pipe(plug.angularFilesort())
    .pipe(plug.concat('tawkTo.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(plug.uglify())
    .pipe(plug.rename('tawkTo.min.js'))
    .pipe(gulp.dest('./dist'))
});