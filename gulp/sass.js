var path = require('./path/path.js');
module.exports = function () {
    // build developer css
    $.gulp.task('styleDev:build', function (done) {
        return $.gulp.src(path.path.src.style)
            .pipe($.plugins.plumber())
            .pipe($.plugins.sourcemaps.init({largeFile: true}))
            .pipe($.plugins.sass())
            .pipe($.plugins.pxtorem())
            .pipe($.plugins.autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.plugins.rename({ suffix: '.dev' }))
            .pipe($.plugins.sourcemaps.write('.'))
            .pipe($.gulp.dest(path.path.build.style))
            .pipe($.browserSync.reload({
                stream: true
            }));
        done();
    });
    // build production css
    $.gulp.task('style:build', function (done) {
        return $.gulp.src(path.path.src.style)
            .pipe($.plugins.plumber())
            .pipe($.plugins.sass())
            .pipe($.plugins.pxtorem())
            .pipe($.plugins.csso())
            .pipe($.plugins.autoprefixer({
                overrideBrowserslist: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.plugins.rename({ suffix: '.min' }))
            .pipe($.gulp.dest(path.path.build.style))
            .pipe($.browserSync.reload({
                stream: true
            }));
        done();
    });
};
