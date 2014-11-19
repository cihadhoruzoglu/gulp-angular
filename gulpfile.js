var gulp        = require('gulp'),
    less        = require('gulp-less'),
    minifycss   = require('gulp-minify-css'),
    rename      = require('gulp-rename'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    ngHtml2Js   = require("gulp-ng-html2js"),
    connect     = require("gulp-connect"),
    iconfont    = require('gulp-iconfont'),
    gulpDocs    = require('gulp-ngdocs');

var bases = {
    app: 'app/',
    dist: 'dist/'
};

var paths = {
    libs: [
        'app/lib/ionic/release/js/ionic.min.js',
        'app/lib/angular/angular.min.js',
        'app/lib/angular-animate/angular-animate.min.js',
        'app/lib/angular-sanitize/angular-sanitize.min.js',
        'app/lib/angular-ui-router/release/angular-ui-router.min.js',
        'app/lib/ionic/release/js/ionic-angular.min.js'
    ],
    js: ['js/**/*.js', '!js/lib/']

};

gulp.task('default', ['js', 'css', 'ngHtml2js', 'connect', 'watch']);

gulp.task('ngdocs', [], function () {
//    var options = {
//        scripts: ['../app.min.js']
//    };

    return gulp.src(['./app/controllers/*.js', './app/app.js'])
        .pipe(gulpDocs.process())
        .pipe(gulp.dest('docs'));
});

gulp.task('js', function() {
   gulp.src(['./app/js/**/*.js', '!./app/js/app.js', '!./app/js/app.min.js'])
       .pipe(concat('app.js'))
       .pipe(gulp.dest('./app/js/'))
       .pipe(rename({suffix: '.min'}))
       .pipe(uglify())
       .pipe(gulp.dest('./app/js/'))
});

gulp.task('libjs', function() {
    gulp.src(paths.libs)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./public/js/'))
});

gulp.task('font', function() {
   gulp.src('app/lib/ionic/release/fonts/*.*')
       .pipe(gulp.dest('./public/fonts'))
});

gulp.task('ngHtml2js', function () {
    gulp.src('./app/html/*.html')
        .pipe(ngHtml2Js({
            moduleName: 'templates',
            prefix: 'partials/'
        }))
        .pipe(concat('ngtemplate.js'))
        .pipe(gulp.dest('./public/html'))
});

gulp.task('watch', function() {
    gulp.watch([
        'public/css/*.css',
        'public/**/*.js'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(connect.reload());
    });

    gulp.watch(['./app/controllers/*.js', './app/services/*.js'], ['js']);
    gulp.watch(['./app/css/*.less', './app/lib/ionic/release/css/ionic.css'], ['css']);
    gulp.watch(['./app/html/*.html'], ['ngHtml2js']);
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
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

gulp.task('iconfont', function(){
    gulp.src(['app/icons/*.svg'])
        .pipe(iconfont({
            fontName: 'myfont', // required
            appendCodepoints: true // recommended option
        }))
        .on('codepoints', function(codepoints, options) {
            // CSS templating, e.g.
            console.log(codepoints, options);
        })
        .pipe(gulp.dest('public/fonts/'));
});


