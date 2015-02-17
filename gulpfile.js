var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require("vinyl-source-stream"),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./static/js/main.js');
  return b.bundle()
    .pipe(source('home_page.js'))
    .pipe(gulp.dest('./static/dist/js'));

});

// Run tasks
gulp.task('default', ['browserify']);