// let path = require('./path/path.js');
let webpackConfig = require('../webpack.config');

module.exports = function () {
	return $.gulp.task('js:build', (done) => {
		$.gulp.src(webpackConfig.entry)
			.pipe($.plugins.plumber())
			.pipe($.webpackStream(webpackConfig))
			.pipe($.gulp.dest(webpackConfig.output.path)
				.pipe($.browserSync.reload({
					stream: true,
				})));
		done();
	});

	// return $.gulp.task('js:build', (done) => {
	// 	$.gulp.src([path.path.src.js])
	// 		.pipe($.plugins.changed(path.path.build.js))
	// 		.pipe($.plugins.plumber())
	// 		.pipe($.plugins.concat('scripts.js'))
	// 		.pipe($.gulp.dest(path.path.build.js))
	// 		.pipe($.plugins.uglify())
	// 		.pipe($.plugins.rename('scripts.min.js'))
	// 		.pipe($.gulp.dest(path.path.build.js))
	// 		.pipe($.browserSync.reload({
	// 			stream: true,
	// 		}));
	// 	done();
	// });
};
