global.$ = {
	path: {
		// eslint-disable-next-line global-require
		task: require('./gulp/path/tasks.js'),
	},
	// eslint-disable-next-line global-require
	gulp: require('gulp'),
	// eslint-disable-next-line global-require
	webpackConfig: require('./webpack.config'),
	// eslint-disable-next-line global-require
	yargs: require('yargs').default({
		fix: false,
		minify: false,
		minifyHtml: null,
		minifyCss: null,
		minifyJs: null,
		minifySvg: null,
		ftp: false,
	}).argv,
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

$.yargs.minify = !!$.yargs.minify;
$.yargs.minifyHtml = $.yargs.minifyHtml !== null ? !!$.yargs.minifyHtml : $.yargs.minify;
$.yargs.minifyCss = $.yargs.minifyCss !== null ? !!$.yargs.minifyCss : $.yargs.minify;
$.yargs.minifyJs = $.yargs.minifyJs !== null ? !!$.yargs.minifyJs : $.yargs.minify;
$.yargs.minifySvg = $.yargs.minifySvg !== null ? !!$.yargs.minifySvg : $.yargs.minify;

$.path.task.forEach((taskPath) => {
	// eslint-disable-next-line global-require
	require(taskPath)();
});

if ($.yargs.minifyJs) {
	$.webpackConfig.mode = 'production';
} else {
	$.webpackConfig.mode = $.webpackConfig.mode || 'development';
}

$.gulp.task('build', $.gulp.series(
	'spriteSvg:build',
	$.gulp.parallel(
		'pug:build',
		'style:build',
		'js:build',
		'img:build',
		'spriteImg:build',		
		'resources:build',
	)),
);

$.gulp.task('default', $.gulp.series(
	'build',
	'ftp:build',
	$.gulp.parallel(
		// 'critical:build',
		'watch',
		'bsync',
		'favicons:lg',
		'favicons:sm',
	)));
