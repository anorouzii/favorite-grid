var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

// Compile Sass file to css
sass.compiler = require('node-sass');
gulp.task('sass', function () {
    return gulp.src('./*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

// Minify css file
gulp.task('minify-css', () => {
    return gulp.src('dist/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/'));
});

// Autoprefix for css file
exports.default = () => (
    gulp.src('dist/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
