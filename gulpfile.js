var gulp        = require('gulp'),
    less        = require('gulp-less'),
    minifycss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    ngHtml2Js   = require("gulp-ng-html2js"),
    connect     = require("gulp-connect"),
    gulpDocs    = require('gulp-ngdocs');

gulp.task('default', ['js', 'css', 'html', 'connect', 'watch']);

gulp.task('js', function() {
   gulp.src('./app/components/scripts/**/*.js')
       .pipe(concat('app.js'))
       .pipe(gulp.dest('./app/js/'))
       .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('./app/js/'))
       .pipe(connect.reload())
});

gulp.task('css', function () {
    gulp.src(['./app/components/less/**/*.less'])
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./app/css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./app/css/'))
        .pipe(connect.reload())
});

gulp.task('html', function () {
    gulp.src('./app/components/templates/*.html')
        .pipe(ngHtml2Js({
            moduleName: 'templates',
            prefix: 'partials/'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./app/js'))
        .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch(['./app/components/scripts/**/*.js'], ['js']);
    gulp.watch(['./app/components/less/**/*.less'], ['css']);
    gulp.watch(['./app/components/templates/*.html'], ['html']);
});

gulp.task('doc', [], function () {
    return gulp.src(['./app/js/app.js'])
        .pipe(gulpDocs.process())
        .pipe(gulp.dest('./docs'));
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});
