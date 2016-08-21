var destDir = 'bin';
var gulp = require('gulp');
var bower = require('gulp-bower');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var less = require('gulp-less');
var argv = require('yargs').argv;
var debug = require( 'gulp-debug' );
var clean = require( 'gulp-clean' );
var livereload = require('gulp-livereload');
var csscomb = require('gulp-csscomb');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var htmlhint = require('gulp-htmlhint');
var runSequence = require('run-sequence');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var pump = require('pump');
var autoprefixer = require('gulp-autoprefixer');
var minimatch = require('minimatch');

gulp.task('default', ['libs', 'build']);
gulp.task('build', ['css', 'js', 'images', 'html']);
gulp.task('style', ['jshint', 'jscs', 'csscomb', 'htmlhint']);

gulp.task('bower', function () {
    return bower('libs');
});

gulp.task('css', function () {
    return gulp.src('styles/**/*.less')
        .pipe(gulpif(!argv.prod, sourcemaps.init()))
        .pipe(concat('styles.css'))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destDir + '/static'))
        .pipe(livereload());
});

gulp.task('html', function () {
    return gulp.src(['**/*.html','!node_modules/**','!libs/**','!bin/**'])
        .pipe(gulpif(argv.prod, htmlmin()))
        .pipe(gulp.dest(destDir))
        .pipe(livereload());
});

gulp.task('js', function (cb) {
    pump([
        gulp.src('js/**/*.js'),
        gulpif(!argv.prod, sourcemaps.init()),
        concat('script.js'),
        uglify(),
        sourcemaps.write(),
        gulp.dest(destDir),
        livereload()
        ],
        cb
    );
});

gulp.task('libs', function () {
    return gulp.src(['libs/**/*.min.js'])
        .pipe(gulp.dest(destDir + '/libs'));
});

gulp.task('images', function(){
    return gulp.src(['**/*.{png,jpg,svg}','!node_modules/**','!libs/**','!bin/**'])
       .pipe(gulp.dest(destDir));
});

gulp.task( 'reload:page', function () {
} );

gulp.task( 'clean', function (cb) {
    return gulp.src( destDir + '/*', { read: false } )
        .pipe( clean( { force: true } ) );
} );


gulp.task( 'watch', function () {
    livereload.listen();
    gulp.watch(['**/*.@{png|jpg|svg}','!node_modules/**','!libs/**','!bin/**'], ['images']);
    gulp.watch(['**/*.html','!node_modules/**','!libs/**','!bin/**'], ['html']);
    gulp.watch(['**/*.js','!node_modules/**','!libs/**','!bin/**'], ['js']);
    gulp.watch(['**/*.less','!node_modules/**','!libs/**','!bin/**'], ['css'] );
} );


//CODESTYLE
gulp.task('csscomb', function () {
    return gulp.src('styles/*.less')
        .pipe(csscomb().on('error', handleError))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});

gulp.task('htmlhint', function () {
    return gulp.src(['**/*.html','!node_modules/**','!libs/**'])
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter())
});

gulp.task('jscs', function () {
    return gulp.src('js/*.js')
        .pipe(jscs({fix: true}))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});

gulp.task('jshint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'))
});

//CODESTYLE//

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
    return this;
}