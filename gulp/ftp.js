let path = require('./path/path.js');

module.exports = function () {
	// eslint-disable-next-line consistent-return
	$.gulp.task('ftp:build', (done) => {
		if ($.yargs.ftp) {
			let conn = $.vinylFtp.create({
				host: '192.168.0.193',
				user: 'ftp',
				password: 'ftp',
				parallel: 10,
				// log:      gutil.log
			});

			let globs = [
				`${path.path.build.style}/**`,
				`${path.path.build.js}/**`,
				`${path.path.build.img}/**`,
				`${path.path.build.fonts}/**`,
			];

			// using base = '.' will transfer everything to /public_html correctly
			// turn off buffering in gulp.src for best performance

			return $.gulp.src(globs, {
				base: 'dist/',
				buffer: false,
			})
				.pipe(conn.newer('.')) // only upload newer files
				.pipe(conn.dest('.'));
		}
		// eslint-disable-next-line no-unreachable
		done();
	});
};

