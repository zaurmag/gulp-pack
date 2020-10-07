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
	yargs: require('yargs'),
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

let argv = $.yargs.default({
	cache: true,
	ci: false,
	debug: true,
	fix: false,
	minify: false,
	minifyHtml: null,
	minifyCss: null,
	minifyJs: null,
	minifySvg: null,
	notify: true,
	open: true,
	port: 3000,
	spa: false,
	throwErrors: false,
}).argv;

$.path.task.forEach((taskPath) => {
	// eslint-disable-next-line global-require
	require(taskPath)();
});

if (argv.minifyJs) {
	$.webpackConfig.mode = 'production';
} else {
	$.webpackConfig.mode = $.webpackConfig.mode || 'development';
}

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
