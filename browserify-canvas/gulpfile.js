var gulp = require('gulp');
// 代码前后端模块化统一的 构建工具
var browserify = require('browserify');
var babelify = require('babelify');
// gulp是一个任务管理器 进驻任务是需要流程的  任务管理器在具体任务间
// 有一个插件一样的东西   适配
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
  return browserify({
    entries: './src/main.js',
    debug: true
  })
  .transform("babelify", {
    presets: ["env"]
  })
  .bundle()
  // 可以被gulp理解的源码格式
  // browserify -> gulp 转码过程
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(uglify()) //压缩
  .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', ['build'], function() {
    gulp.watch('./src/*.js', ['build']);
  });
gulp.task('default',['watch'])