const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


gulp.task('message', done =>{
    console.log('Gulp is running...');
    done();
});

gulp.task('sass', done =>{
  gulp.src('public/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
  done();
});

gulp.task('copyHTML', done =>{
  gulp.src('public/*.html')
    .pipe(gulp.dest('dist'));
  done();
});

gulp.task('copyCSS', done =>{
  gulp.src('public/*.css')
    .pipe(gulp.dest('dist'));
  done();
})


gulp.task('imageMin', done =>{
  gulp.src('public/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
  done();
});



gulp.task('minify', done =>{
  gulp.src('public/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  done();
});


gulp.task('default', gulp.parallel(
    'message',
    'copyCSS',
    'copyHTML'
));
