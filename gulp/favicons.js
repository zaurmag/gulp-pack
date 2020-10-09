let path = require('./path/path.js');

module.exports = function (done) {
	$.gulp.task('favicons:lg', () => {
		return $.gulp.src(path.path.src.favicon_lg)
			.pipe($.plugins.plumber())
			.pipe($.plugins.favicons({
				appName: 'My App',
				appShortName: 'App',
				appDescription: 'This is my application',
				html: 'favicons.html',
				pipeHTML: true,
				url: 'http://localhost/',
				path: '/images/favicons/',
				replace: true,
				version: 3,
				lang: 'ru-RU',
				icons: {
					appleIcon: true,
					favicons: false,
					online: false,
					appleStartup: false,
					android: true,
					firefox: true,
					yandex: true,
					windows: true,
					coast: true,
				},
			}))
			.pipe($.gulp.dest(path.path.build.imgFavicons));
		// eslint-disable-next-line no-unreachable
		done();
	});

	$.gulp.task('favicons:sm', () => {
		return $.gulp.src(path.path.src.favicon_sm)
			.pipe($.plugins.plumber())
			.pipe($.plugins.favicons({
				html: 'favicons-logo.html',
				pipeHTML: true,
				path: '/images/favicons/',
				replace: true,
				icons: {
					appleIcon: false,
					favicons: true,
					online: false,
					appleStartup: false,
					android: false,
					firefox: false,
					yandex: false,
					windows: false,
					coast: false,
				},
			}))
			.pipe($.gulp.dest(path.path.build.imgFavicons));
		// eslint-disable-next-line no-unreachable
		done();
	});
};
