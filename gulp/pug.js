let path = require('./path/path.js');
let fs = require('fs');
module.exports = function (done) {
	$.gulp.task('pug:build', () => {
		return $.gulp.src(path.path.src.pug)
			.pipe($.plugins.plumber())
		// eslint-disable-next-line no-unused-vars
			.pipe($.plugins.data((file) => { // Парсим JSON
				return JSON.parse(fs.readFileSync('./src/base/data/data.json', 'utf8'));
			}))
			.pipe($.plugins.pug({
				pretty: true,
			}))
			.pipe($.gulp.dest(path.path.build.html))
			.on('end', $.browserSync.reload);
		// eslint-disable-next-line no-unreachable
		done();
	});
};
