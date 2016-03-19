var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy : true });

gulp.task('demo', function () {
  plug.connect.server({
                        root : './demo'
                      });
});
