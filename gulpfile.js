var gulp = require("gulp");
var gulpSequence = require('gulp-sequence');
var webpack = require("gulp-webpack");
var inject = require("gulp-inject");

var src = 'src/';
var dist = 'dist/';

var getConfig = require('./webpack.config.js');
gulp.task("js",function(){
  var bundleStream = webpack(getConfig);
  return gulp.src(src + 'index.html')
  .pipe(inject(bundleStream))
  .pipe(gulp.dest(dist));
});

gulp.task("default",gulpSequence("js"));
