let path = require('./path/path.js')
module.exports = function () {
	$.gulp.task('clean', () => {
		return $.del([
			path.path.clean.all
		])
	})
}
