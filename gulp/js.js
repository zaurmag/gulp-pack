module.exports = function () {
	return $.gulp.task('js:build', (done) => {
		$.gulp.src($.webpackConfig.entry)
			.pipe($.plugins.plumber())
			.pipe($.webpackStream($.webpackConfig))
			.pipe($.gulp.dest($.webpackConfig.output.path))
			.pipe($.browserSync.reload({ stream: true }))
		done()
	})
}
