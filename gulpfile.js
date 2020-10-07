global.$ = {
	path: {
		task: require('./gulp/path/tasks.js'),
	},
	gulp: require('gulp'),
	del: require('del'),
	browserSync: require('browser-sync').create(),
	vinylFtp: require('vinyl-ftp'),
	plugins: require('gulp-load-plugins')({
		overridePattern: true,
		pattern: '*',
	}),
};

$.path.task.forEach((taskPath) => {
	require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
	'spriteSvg:build',
	$.gulp.parallel(
		'pug:build',
		// 'style:build',
		'styleDev:build',
		// 'js:build',
		'img:build',
		// 'spriteImg:build'
		// 'fonts:build',
		// 'resources:build'
	)),
);

$.gulp.task('default', $.gulp.series(
	'build',
	// 'ftp:build',
	$.gulp.parallel(
		// 'critical:build',
		'watch',
		'bsync',
		'favicons:lg',
		'favicons:sm',
	)));
