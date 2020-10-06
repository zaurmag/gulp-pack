var path = require('./path/path.js');
module.exports = function() {
    $.gulp.task('clean', function() {
        return $.del([
            path.path.clean.all
        ]);
    });
};