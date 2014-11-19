var gulp        = require('gulp'),
    less        = require('gulp-less'),
    minifycss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    ngHtml2Js   = require("gulp-ng-html2js"),
    connect     = require("gulp-connect"),
    gulpDocs    = require('gulp-ngdocs');

gulp.task('default', ['js', 'css', 'ngHtml2js', 'connect', 'watch']);

gulp.task('js', function() {
   gulp.src(['./app/js/**/*.js', '!./app/js/app.js', '!./app/js/app.min.js'])
       .pipe(concat('app.js'))
       .pipe(gulp.dest('./app/js/'))
       .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('./app/js/'))
});

gulp.task('css', function () {
    gulp.src(['./app/css/*.less'])
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./app/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./app/css'))
});

gulp.task('html', function () {
    gulp.src('./app/html/*.html')
        .pipe(ngHtml2Js({
            moduleName: 'templates',
            prefix: 'partials/'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./app/html'))
});

gulp.task('watch', function() {
    gulp.watch([
        'app/css/**/*.less',
        'app/js/**/*.js',
        'app/html/*.html'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(connect.reload());
    });

    gulp.watch(['./app/js/**/*.js'], ['js']);
    gulp.watch(['./app/css/**/*.less'], ['css']);
    gulp.watch(['./app/html/*.html'], ['html']);
});

gulp.task('ngdocs', [], function () {
    return gulp.src(['./app/controllers/*.js', './app/app.js'])
        .pipe(gulpDocs.process())
        .pipe(gulp.dest('docs'));
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});
