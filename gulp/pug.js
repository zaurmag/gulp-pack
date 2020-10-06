var path = require('./path/path.js');
var fs = require('fs');
module.exports = function (done) {
    $.gulp.task('pug:build', function() {
        return $.gulp.src(path.path.src.pug)
            .pipe($.plugins.plumber())
            .pipe($.plugins.data(function(file) { // Парсим JSON
                return JSON.parse(fs.readFileSync('./src/base/data/data.json', 'utf8'))
            }))
            .pipe($.plugins.pug({
                pretty: true
            }))
            .pipe($.gulp.dest(path.path.build.html))
            .on('end', $.browserSync.reload);
        done();
    });
};
