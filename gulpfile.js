global.$ = {
	path: {
		task: require('./gulp/path/tasks.js')
	},
	gulp: require('gulp'),
	webpackConfig: require('./webpack.config'),
	yargs: require('yargs').default({
		fix: false,
		minify: false,
		minifyHtml: null,
		minifyCss: null,
		minifyJs: null,
		ftp: false
	}).argv,
	del: require('del'),
	browserSync: require('browser-sync').create(),
	vinylFtp: require('vinyl-ftp'),
	webpackStream: require('webpack-stream'),
	plugins: require('gulp-load-plugins')({
		overridePattern: true,
		pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*', 'emitty'],
		scope: [
			'dependencies',
			'devDependencies',
			'optionalDependencies',
			'peerDependencies'
		]
	})
}

$.yargs.minify = !!$.yargs.minify
$.yargs.minifyHtml = $.yargs.minifyHtml !== null ? !!$.yargs.minifyHtml : $.yargs.minify
$.yargs.minifyCss = $.yargs.minifyCss !== null ? !!$.yargs.minifyCss : $.yargs.minify
$.yargs.minifyJs = $.yargs.minifyJs !== null ? !!$.yargs.minifyJs : $.yargs.minify

$.path.task.forEach((taskPath) => {
	require(taskPath)()
})

if ($.yargs.minifyJs) {
	$.webpackConfig.mode = 'production'
} else {
	$.webpackConfig.mode = $.webpackConfig.mode || 'development'
}

$.gulp.task('build', $.gulp.series(
	'pug:build',
	'resources:build',
	$.gulp.parallel(
		'style:build',
		'js:build',
		'img:build',
		'spriteImg:build',
		'spriteSvg:build',
		'favicons:lg',
		'favicons:sm'
	))
)

$.gulp.task('default', $.gulp.series(
	'build',
	$.gulp.parallel(
		// 'critical:build',
		'watch',
		'bsync'
	)))

$.gulp.task('default_ftp', $.gulp.series(
	'build',
	'ftp:build',
	$.gulp.parallel(
		'watch',
		'bsync'
	)))
