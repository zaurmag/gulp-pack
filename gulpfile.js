global.$ = {
	path: {
		// eslint-disable-next-line global-require
		task: require('./gulp/path/tasks.js'),
	},
	// eslint-disable-next-line global-require
	gulp: require('gulp'),
	// eslint-disable-next-line global-require
	del: require('del'),
	// eslint-disable-next-line global-require
	browserSync: require('browser-sync').create(),
	// eslint-disable-next-line global-require
	vinylFtp: require('vinyl-ftp'),
	// eslint-disable-next-line global-require
	webpackStream: require('webpack-stream'),
	// eslint-disable-next-line global-require
	plugins: require('gulp-load-plugins')({
		overridePattern: true,
		pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
		scope: [
			'dependencies',
			'devDependencies',
			'optionalDependencies',
			'peerDependencies',
		],
	}),
};

$.path.task.forEach((taskPath) => {
	// eslint-disable-next-line global-require
	require(taskPath)();
});

$.gulp.task('build', $.gulp.series(
	'spriteSvg:build',
	$.gulp.parallel(
		'pug:build',
		// 'style:build',
		'styleDev:build',
		'js:build',
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
