var path = require('./path/path.js');
module.exports = function () {
    return $.gulp.task('js:build', function (done) {
        $.gulp.src([path.path.src.js])
            .pipe($.plugins.changed(path.path.build.js))
            .pipe($.plugins.plumber())
            .pipe($.plugins.concat('scripts.js'))
            .pipe($.gulp.dest(path.path.build.js))
            .pipe($.plugins.uglify())
            .pipe($.plugins.rename('scripts.min.js'))
            .pipe($.gulp.dest(path.path.build.js))
            .pipe($.browserSync.reload({
                stream: true
            }));
        done();
    });
};