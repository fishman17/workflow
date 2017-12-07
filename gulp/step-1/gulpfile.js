var gulp = require('gulp');
// 集成 babel编译
var babel = require('gulp-babel');
// 压缩 js
var uglify = require('gulp-uglify');
// 压缩 css
var cleanCss = require('gulp-clean-css');
// 合并
var concat = require('gulp-concat');

gulp.task('jsmin',function(){
   return gulp.src(['./src/js/main.js','./src/js/moon.js','./src/js/star.js'])
    .pipe(babel({
        presets:['env']
    }))
    .pipe(uglify())
    // .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('cssmin',function() {
   return gulp.src(['./src/styles/common.css','./src/styles/btn.css'])
    .pipe(cleanCss({}))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('./dist/css'))
})
//监听文件
gulp.task('watch',['jsmin','cssmin'],
 function() {
    gulp.watch('./src/js/*.js',['jsmin']);
    gulp.watch('./src/styles/*.css',['cssmin']);
});
gulp.task('default',['watch']);

