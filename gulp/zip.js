var path = require('./path/path.js');
module.exports = function() {
    // create zip archive
    $.gulp.task('zip:build', function(done) {
        // eslint-disable-next-line global-require
        var name = require('../package').name;
        var now = new Date();
        var year = now.getFullYear().toString().padStart(2, '0');
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');

        return $.gulp.src([
            'dist/**',
            'gulp/**',
            'src/**',
            '.gitignore',
            '*.js',
            '*.json',
            '*.md',
            '*.yml',
            '!package-lock.json',
            '!zip/**'
        ], {
            base: '.',
            dot: true,
        })
            .pipe($.plugins.plumber())
            .pipe($.plugins.zip(name + "_" + year + "_" + month + "_" + day + "_" + hours + "_"  + minutes + ".zip"))
            .pipe($.gulp.dest(path.path.build.zip));
        done();
    });
};
