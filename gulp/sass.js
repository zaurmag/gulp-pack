let path = require('./path/path.js');

module.exports = function () {
	// eslint-disable-next-line consistent-return
	$.gulp.task('style:build', (done) => {
		return $.gulp.src(path.path.src.style)
			.pipe($.plugins.plumber())
			.pipe($.plugins.if(!$.yargs.minifyCss, $.plugins.sourcemaps.init({largeFile: true})))
			.pipe($.plugins.sass())
			.pipe($.plugins.pxtorem())
			.pipe($.plugins.if($.yargs.minifyCss, $.plugins.csso()))
			.pipe($.plugins.autoprefixer({
				overrideBrowserslist: ['last 2 versions'],
				cascade: false,
			}))
			.pipe($.plugins.if($.yargs.minifyCss, $.plugins.rename({suffix: '.min'}), $.plugins.sourcemaps.write('.')))
			.pipe($.gulp.dest(path.path.build.style))
			.pipe($.browserSync.reload({
				stream: true,
			}));
		// eslint-disable-next-line no-unreachable
		done();
	});
};
