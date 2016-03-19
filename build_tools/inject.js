var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy : true });

gulp.task('inject', function () {
  return gulp.src('./demo/index.html')
    .pipe(plug.inject(gulp.src('./demo/bower.json').pipe(plug.mainBowerFiles()), { name : 'lib', relative : true }))
    .pipe(plug.inject(gulp.src(['!./demo/bower_components/**/*', './demo/**/*.js']).pipe(plug.angularFilesort()), { name : 'app', relative : true }))
    .pipe(gulp.dest('./demo/'))
});

