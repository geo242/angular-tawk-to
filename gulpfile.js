var gulp = require('gulp');
var plug = require('gulp-load-plugins')({ lazy : true });
require('require-dir')('./build_tools/');

gulp.task('default', plug.sequence('clean', 'build'));

gulp.task('start-demo', plug.sequence('clean', 'build', 'copy', 'inject', 'demo'));