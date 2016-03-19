var plug = require('gulp-load-plugins')({ lazy : true });
var gulp = require('gulp');
var del  = require('del');

gulp.task('clean', function (done) {
  del('./dist/**/*', done)
    .then(function () { done(); });
});