let path = require('./path/path.js');
module.exports = function () {
	// create zip archive
	$.gulp.task('zip:build', (done) => {
		// eslint-disable-next-line global-require
		let name = require('../package').name;
		let now = new Date();
		let year = now.getFullYear().toString().padStart(2, '0');
		let month = (now.getMonth() + 1).toString().padStart(2, '0');
		let day = now.getDate().toString().padStart(2, '0');
		let hours = now.getHours().toString().padStart(2, '0');
		let minutes = now.getMinutes().toString().padStart(2, '0');

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
			'!zip/**',
		], {
			base: '.',
			dot: true,
		})
			.pipe($.plugins.plumber())
			.pipe($.plugins.zip(`${name}_${year}_${month}_${day}_${hours}_${minutes}.zip`))
			.pipe($.gulp.dest(path.path.build.zip));
		// eslint-disable-next-line no-unreachable
		done();
	});
};
