const path = require('./path/path.js')
module.exports = function () {
	$.gulp.task('img:build', () => {
		return $.gulp.src([path.path.src.img, '!src/images/icons/**/*', path.path.src.imgComp])
			.pipe($.plugins.changed(path.path.build.img))
			.pipe($.plugins.plumber())
			// .pipe($.plugins.tinypng(process.env.TINYPNG_KEY_API))
			.pipe($.plugins.webp()) // Options WebP: https://github.com/imagemin/imagemin-webp#imageminwebpoptions
			.pipe($.gulp.dest(path.path.build.img))
	})
}
