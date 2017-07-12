/**
 * Created by alga on 12/09/16.
 */

const gulp = require('gulp');
const addsrc = require('gulp-add-src');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const del = require('del');

// cleanup the dist folder
gulp.task('default',function () {
    del(['./dist/**/*']).then(()=>{
        gulp.start('tasks');
    })
});

gulp.task('tasks',[
    'compile'
]);

gulp.task('compile', function(cb) {
    gulp.src(['src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('./dist/'))
        .pipe(addsrc(['./dist/**/*.js']))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));

    cb();
});

