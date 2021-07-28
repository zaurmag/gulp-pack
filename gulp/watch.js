let path = require('./path/path.js')

module.exports = function () {
	$.gulp.task('watch', () => {
		// Without critical
		$.gulp.watch(path.path.watch.json, { usePolling: true }, $.gulp.series('pug:build'))
		$.gulp.watch(path.path.watch.pug, { usePolling: true }, $.gulp.series('pug:build'))

		$.gulp.watch(path.path.watch.style, { usePolling: true }, $.gulp.series('style:build'))
		$.gulp.watch(path.path.src.js, { usePolling: true }, $.gulp.parallel('js:build'))
		$.gulp.watch([path.path.src.img, '!src/images/icons/**/*'], { usePolling: true }, $.gulp.parallel('img:build'))
		$.gulp.watch(path.path.src.imgComp, { usePolling: true }, $.gulp.parallel('img:build'))
		$.gulp.watch(path.path.src.pngIcons, $.gulp.parallel('spriteImg:build'))
		$.gulp.watch(path.path.src.svgIcons, $.gulp.parallel('spriteSvg:build'))
		$.gulp.watch(path.path.src.resources, $.gulp.parallel('resources:build'))

		// If ftp
		if ($.yargs.ftp) {
			$.gulp.watch(path.path.watch.style, { usePolling: true }, $.gulp.series('style:build', 'ftp:build'))
			$.gulp.watch(path.path.src.js, { usePolling: true }, $.yargs.ftp ? $.gulp.parallel('js:build', 'ftp:build') : 'js:build')
			$.gulp.watch(path.path.src.img, { usePolling: true }, $.yargs.ftp ? $.gulp.parallel('img:build', 'ftp:build') : 'img:build')
			$.gulp.watch(path.path.src.imgComp, { usePolling: true }, $.yargs.ftp ? $.gulp.parallel('img:build', 'ftp:build') : 'img:build')
			$.gulp.watch(path.path.src.pngIcons, $.yargs.ftp ? $.gulp.parallel('spriteImg:build', 'ftp:build') : 'spriteImg:build')
			$.gulp.watch(path.path.src.svgIcons, $.yargs.ftp ? $.gulp.parallel('spriteSvg:build', 'ftp:build') : 'spriteSvg:build')
			$.gulp.watch(path.path.src.resources, $.yargs.ftp ? $.gulp.parallel('resources:build', 'ftp:build') : 'resources:build')
		}
	})

	// Critical
	// $.gulp.watch(path.path.watch.json, {usePolling: true}, $.gulp.series('pug:build', 'critical:build'));
	// $.gulp.watch(path.path.watch.pug, {usePolling: true}, $.gulp.series('pug:build', 'critical:build'));
	// eslint-disable-next-line max-len
	// $.gulp.watch(path.path.watch.style, {usePolling: true}, $.gulp.series('style:build', 'pug:build', 'critical:build'));
}
