var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  autoprefixer = require('gulp-autoprefixer');

var config = {
  server: '',
  files: 'dist/*.css, index.html'
};

gulp.task('browser-sync', function() {
  browserSync.init(config);
});

gulp.task('auto-prefixer', function() {
  return gulp.src('css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('css/*.css', ['auto-prefixer']);
});

gulp.task('default', ['browser-sync', 'auto-prefixer', 'watch']);
