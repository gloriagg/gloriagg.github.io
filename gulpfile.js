var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var autoprefixer= require('gulp-autoprefixer');
var jade        = require('gulp-jade');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var svgSprite   = require('gulp-svg-sprite');

/* Broswer sync */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "IamGG_2015_v1"
        }
    });
});


/* Jade */
gulp.task('jadeTemplates', function() {
  var YOUR_LOCALS = {};

  gulp.src('_dev/jade_files/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'));
});


/* uglify compress js*/
gulp.task('compressJS', function() {
  return gulp.src('_dev/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('gg.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.stream());
});


/* sass */
gulp.task('sass', function () {
  gulp.src('_dev/sass/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
            browsers: ['> 0%', 'IE 7'],
            cascade: false
      }))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(concat('gg.css'))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
});


/* Compress Images*/
gulp.task('compressImage', function () {
    return gulp.src('_dev/images/*/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});


/* Svg sprite */
config                  = {
    mode                : {
        css             : {     // Activate the «css» mode
            render      : {
                css     : true
            }
        }
    }
};

gulp.task('svgsprite', function () {
    return gulp.src('_dev/sprites/*.svg')
               .pipe(svgSprite(config))
               .pipe(gulp.dest('sprite'));
});


gulp.task('serve', ['jadeTemplates','sass','compressJS','compressImage','svgsprite'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("_dev/sass/*.scss", ['sass']);
    gulp.watch("_dev/js/*.js", ['compressJS']);
    gulp.watch("_dev/jade_files/*.jade", ['jadeTemplates']);
    gulp.watch("_dev/images/*/*", ['compressImage']);
    gulp.watch("_dev/sprites/*.svg", ['svgsprite']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("sprite/css/svg/*.svg").on('change', browserSync.reload);
    gulp.watch("_dev/images/*/*").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
