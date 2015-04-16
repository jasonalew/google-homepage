var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

var config = {
    server: '',
    files: 'css/*.css, index.html'
};

gulp.task('browser-sync', function() {
    browserSync.init(config);
});

gulp.task('default', ['browser-sync']);
