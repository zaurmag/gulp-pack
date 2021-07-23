const path = require('./path/path.js');

module.exports = function () {
	$.gulp.task('resources:build', (done) => {
		return $.gulp.src(path.path.src.resources)
			.pipe($.plugins.changed(path.path.build.root))
			.pipe($.gulp.dest(path.path.build.root))
		done();
	});
};
