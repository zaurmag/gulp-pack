let path = require('./path/path.js')

module.exports = function () {
	$.gulp.task('critical:build', () => {
		return $.gulp.src(`${path.path.build.html}*.html`)
			.pipe($.plugins.plumber())
			.pipe($.plugins.critical.stream({
				base: 'dist/',
				inline: true,
				ignore: ['@font-face', 'backdrop-filter', '-webkit-backdrop-filter', /url\(/],
				css: [`${path.path.build.style}/main.min.css`],
				dimensions: [{
					height: 667,
					width: 375
				}, {
					height: 656,
					width: 1366
				}],
				extract: true
			}))
			.pipe($.gulp.dest(path.path.build.root))
	})
}
