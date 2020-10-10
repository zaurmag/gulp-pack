let path = require('./path/path.js');

module.exports = function () {
	$.gulp.task('watch', () => {
		// Without critical
		$.gulp.watch(path.path.watch.json, {usePolling: true}, $.gulp.series('pug:build'));
		$.gulp.watch(path.path.watch.pug, {usePolling: true}, $.gulp.series('pug:build'));

		$.gulp.watch(path.path.watch.style, {usePolling: true}, $.gulp.series('style:build', 'ftp:build'));
		$.gulp.watch(path.path.src.js, {usePolling: true}, $.gulp.parallel('js:build', 'ftp:build'));
		$.gulp.watch(path.path.src.img, {usePolling: true}, $.gulp.parallel('img:build', 'ftp:build'));
		$.gulp.watch(path.path.src.imgComp, {usePolling: true}, $.gulp.parallel('img:build', 'ftp:build'));
		$.gulp.watch(path.path.src.pngIcons, $.gulp.parallel('spriteImg:build', 'ftp:build'));
		$.gulp.watch(path.path.src.svgIcons, $.gulp.parallel('spriteSvg:build', 'ftp:build'));
		$.gulp.watch(path.path.src.resources, $.gulp.parallel('resources:build', 'ftp:build'));
	});

	// Critical
	// $.gulp.watch(path.path.watch.json, {usePolling: true}, $.gulp.series('pug:build', 'critical:build'));
	// $.gulp.watch(path.path.watch.pug, {usePolling: true}, $.gulp.series('pug:build', 'critical:build'));
	// eslint-disable-next-line max-len
	// $.gulp.watch(path.path.watch.style, {usePolling: true}, $.gulp.series('style:build', 'pug:build', 'critical:build'));
};
